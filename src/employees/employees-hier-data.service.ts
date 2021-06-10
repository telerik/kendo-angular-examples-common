import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseEmployeesService } from './base-employees.service';
import { data } from './data';
import { Employee } from './employee.interface';

@Injectable()
export class EmployeesHierDataService extends BaseEmployeesService {
    public readStatic(): Employee[] {
        return this.data;
    }
    public reset(): void {
        this.data = data;
    }
    public findItem(item: any): any[] {
        let path = [];
        let searchId = item.id;
        function findPath(item: any): boolean {
            if (item.id === searchId) {
                return true;
            }
            let res = (item.reports || []).findIndex(it => findPath(it));
            if (res !== -1) {
                path.unshift(res);
                return true;
            }
            return false;
        }

        findPath(this.data);

        return path;
    }
    public save(item: any, isNew: boolean, fakeDelay: number = 0, fakeError: boolean = false): Observable<any> {
        let searchId = item.id;
        if (isNew) {
            searchId = item.managerId;
        }
        if (fakeError) {
            return throwError(new Error('Error while updating'));
        }
        function updateItem (data: any , term: number): boolean {
            if (data.id === term) {
                return true;
            }
            return data.every((emp, idx) => {
                if (emp.id === term) {
                    if (isNew) {
                        data[idx].reports = data[idx].reports || [];
                        data[idx].reports.push(item);
                    } else {
                        data[idx] = item;
                    }
                    return false;
                } else {
                    return updateItem(emp.reports || [], term);
                }
            });
        }
        let res = updateItem(this.data, searchId);

        if (res !== false) {
            return throwError(new Error('Not found'));
        }
        return of(this.data).pipe(delay(fakeDelay));
    }

    public remove(item: Employee, fakeDelay: number = 0, fakeError: boolean = false): Observable<Employee[]> {
        if (fakeError) {
            return throwError(new Error('Error while removing'));
        }

        function removeItem (data: any, term: number): boolean {
            if (data.id === term) {
                return true;
            }
            return data.every((emp, idx) => {
                if (emp.id === term) {
                    if (data[idx].reports) {
                        let unattached = data[idx].reports.slice(0);
                        data.splice(idx, 1, ...unattached);
                    }
                    data.splice(idx, 1);
                    return false;
                } else {
                    return removeItem(emp.reports || [], term);
                }
            });
        }
        let res = removeItem(this.data, item.id);

        if (res !== false) {
            return throwError(new Error('Not found'));
        }

        return of(this.data).pipe(delay(fakeDelay));
    }
    public readAsync(fakeDelay: number = 0): Observable<Employee[]> {
        return of(this.data).pipe(delay(fakeDelay));
    }
    constructor() {
        super(data);
    }
}

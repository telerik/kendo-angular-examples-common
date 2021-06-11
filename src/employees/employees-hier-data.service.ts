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

    public findItem(searchId: number): any[] {
        let path = [];
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
        findPath(this.getCanonicalData());
        return path;
    }

    public resolvePath(path: number[], modifier: Function): void {
        let prevStep;
        let parentRef;
        let itemRef = this.getCanonicalData();
        for (let step of path) {
            parentRef = itemRef;
            prevStep = step;
            itemRef = itemRef.reports[step];
        }
        modifier(parentRef.reports, prevStep);
    }

    public save(item: any, isNew: boolean, fakeDelay: number = 0, fakeError: boolean = false): Observable<any> {
        let searchId = item.id;
        if (isNew) {
            searchId = item.managerId;
        }
        if (fakeError) {
            return throwError(new Error('Error while updating'));
        }
        let path = this.findItem(searchId);
        if (path.length === 0) {
            return throwError(new Error('Not found'));
        } else {
            this.resolvePath(path, (arrayRef: Employee[], idx: number) => {
                if (isNew) {
                    arrayRef[idx].reports = arrayRef[idx].reports || [];
                    arrayRef[idx].reports.push(item);
                } else {
                    arrayRef[idx] = item;
                }
            });
            return of(this.data).pipe(delay(fakeDelay));
        }
    }

    public remove(item: Employee, fakeDelay: number = 0, fakeError: boolean = false): Observable<Employee[]> {
        if (fakeError) {
            return throwError(new Error('Error while removing'));
        }
        let path = this.findItem(item.id);
        if (path.length === 0) {
            return throwError(new Error('Not found'));
        } else {
            this.resolvePath(path, (arrayRef: Employee[], idx: number) => {
                if (arrayRef[idx].reports) {
                    let unattached = arrayRef[idx].reports.slice(0);
                    arrayRef.splice(idx, 1, ...unattached);
                }
                arrayRef.splice(idx, 1);
            });
            return of(this.data).pipe(delay(fakeDelay));
        }
    }
    public readAsync(fakeDelay: number = 0): Observable<Employee[]> {
        return of(this.data).pipe(delay(fakeDelay));
    }

    constructor() {
        super(data);
    }

    private getCanonicalData(): any {
        return {"id": null, "reports": this.data};
    }
}

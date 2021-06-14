import { Injectable } from '@angular/core';
import { Observable, of , throwError} from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseEmployeesService } from './base-employees.service';
import { Employee } from './employee.interface';
import { data } from './data';
import { flattenData } from './flatten-data';

@Injectable()
export class EmployeesFlatDataService extends BaseEmployeesService {
    public readStatic(query: any = {skip: 0, take: 10}): Employee[] {
        return this.data.slice(query.skip, query.take);
    }
    public itemIndex(item: Employee): number {
        return this.data.findIndex(d => d.id === item.id);
    }
    public reset(): void {
        this.data = flattenData(data);
    }

    public readAsync(query: any = {skip: 0, take: 10}, fakeDelay: number = 0 ): Observable<Employee[]> {
        let record = this.data.slice(query.skip, query.take);
        return of(record).pipe(delay(fakeDelay));
    }
    public save(item: any, isNew: boolean, fakeDelay: number = 0, fakeError: boolean = false): Observable<any> {
        if (fakeError) {
            return throwError(new Error('Error while updating'));
        }

        if (isNew) {
            this.data.push(item);
        } else {
            const updateIndex = this.itemIndex(item);
            if (updateIndex === -1) {
                return throwError(new Error('Not found'));
            }
            this.data[updateIndex] = item;
        }

        return of(this.data).pipe(delay(fakeDelay));
    }

    public remove(item: Employee, fakeDelay: number = 0, fakeError: boolean = false): Observable<Employee[]> {
        if (fakeError) {
            return throwError(new Error('Error while removing'));
        }

        const removeIndex = this.itemIndex(item);
        if (removeIndex === -1) {
            return throwError(new Error('Not found'));
        }
        this.data.splice(removeIndex, 1);

        return of(this.data).pipe(delay(fakeDelay));
    }

    constructor() {
        super(flattenData(data));
    }
}

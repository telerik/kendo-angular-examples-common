import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Employee } from './employee.interface';
import { parseData } from './parse-data';
import { data } from './data';
import { flattenData } from './flatten-data';

export abstract class BaseEmployeesService extends BehaviorSubject<Employee[]> {
    protected hierData: Employee[];
    protected data: Employee[];

    constructor() {
        super(null);
        this.reset();
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

    public abstract readStatic(): Employee[];

    protected itemIndex(item: Employee): number {
        return this.data.findIndex(d => d.id === item.id);
    }

    protected reset(): void {
        this.data = flattenData(data);
        this.hierData = parseData(data);
    }
}

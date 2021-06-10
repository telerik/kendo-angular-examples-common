import { BehaviorSubject, Observable } from 'rxjs';
//import { delay } from 'rxjs/operators';
import { Employee } from './employee.interface';

export abstract class BaseEmployeesService extends BehaviorSubject<Employee[]> {
    protected data: Employee[];

    constructor(data: Employee[]) {
        super(null);
        this.data = data;
    }

    public abstract save(item: any, isNew: boolean, fakeDelay: number, fakeError: boolean): Observable<any>;

    public abstract remove(item: Employee, fakeDelay: number, fakeError: boolean): Observable<Employee[]>;

    public abstract readStatic(): Employee[];

    protected abstract reset(): void;

}

import { BehaviorSubject, Observable } from 'rxjs';

export abstract class BaseService<T> extends BehaviorSubject<T[]> {
    protected data: T[];

    constructor(data: T[]) {
        super(null);
        this.data = data;
    }

    public abstract save(item: any, isNew: boolean, fakeDelay: number, fakeError: boolean): Observable<any>;

    public abstract remove(item: T, fakeDelay: number, fakeError: boolean): Observable<T[]>;

    public abstract readStatic(): T[];

    protected abstract reset(): void;

}

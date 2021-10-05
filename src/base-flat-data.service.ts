import { Injectable } from '@angular/core';
import { Observable, of , throwError} from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class BaseFlatDataService<T> extends BaseService<T> {
    private idField: string;
    private getItems: Function;
    public readStatic(query: any = {skip: 0, take: 10}): T[] {
        return this.data.slice(query.skip, query.take);
    }
    public itemIndex(item: T): number {
        return this.data.findIndex(d => d[this.idField] === item[this.idField]);
    }
    public reset(): void {
        this.data = this.getItems();
    }

    public readAsync(query: any = {skip: 0, take: 10}, fakeDelay: number = 0 ): Observable<T[]> {
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

    public remove(item: T, fakeDelay: number = 0, fakeError: boolean = false): Observable<T[]> {
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

    constructor(idField: string, getItems: Function) {
        super(getItems());
        this.idField = idField;
        this.getItems = getItems;
    }
}

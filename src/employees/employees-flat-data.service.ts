import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseEmployeesService } from './base-employees.service';
import { Employee } from './employee.interface';

@Injectable()
export class EmployeesFlatDataService extends BaseEmployeesService {
    public readStatic(query: any = {skip: 0, take: 10}): Employee[] {
        return this.data.slice(query.skip, query.take);
    }

    public readAsync(query: any = {skip: 0, take: 10}, fakeDelay: number = 0 ): Observable<Employee[]> {
        let record = this.data.slice(query.skip, query.take);
        return of(record).pipe(delay(fakeDelay));
    }
}

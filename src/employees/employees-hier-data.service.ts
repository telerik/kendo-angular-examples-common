import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseEmployeesService } from './base-employees.service';
import { Employee } from './employee.interface';

@Injectable()
export class EmployeesHierDataService extends BaseEmployeesService {
    public readStatic(): Employee[] {
        return this.hierData;
    }

    public readAsync(fakeDelay: number = 0): Observable<Employee[]> {
        return of(this.hierData).pipe(delay(fakeDelay));
    }
}

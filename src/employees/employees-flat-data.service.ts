import { Injectable } from '@angular/core';
import { BaseFlatDataService} from '../base-flat-data.service';
import { Employee } from './employee.interface';
import { getFlatEmployees } from './flat-data';

@Injectable()
export class EmployeesFlatDataService extends BaseFlatDataService<Employee> {
    constructor() {
        super('id', getFlatEmployees);
    }
}

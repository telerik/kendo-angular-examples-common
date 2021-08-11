import { Employee } from './employee.interface';
import { getEmployees } from './data';
import { flattenData } from './flatten-data';

export const getFlatEmployees: Function = (): Array<Employee> => flattenData(getEmployees());


import { Employee } from './employee.interface';
import { getEmployees } from './data';
import { flattenData } from './flatten-data';

export const getFlatEmployees = (): Array<Employee> => flattenData(getEmployees());


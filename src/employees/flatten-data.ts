import { Employee } from './employee.interface';
import { flattenTree } from '../utils/utils';

export const flattenData = flattenTree<Employee>('id', 'managerId', 'reports');

import { getTasks } from './tasks';
import { flattenTree } from '../utils/utils';
import { Task } from './task.interface';

const flattenData = flattenTree<any>('id', 'parentId', 'children');
const flatData = flattenData(getTasks());
export const getFlatTasks: Function = (): Task[] => flatData;

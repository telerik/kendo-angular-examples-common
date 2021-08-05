import { tasks } from './tasks';
import { flattenTree } from '../utils/utils';

const flattenData = flattenTree<any>('id', 'parentId', 'children');
export const flatTasks = flattenData(tasks);

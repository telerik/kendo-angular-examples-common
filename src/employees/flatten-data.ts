import { Employee } from './employee.interface';

function flattenTree<T>(idField: string, parentField: string, childrenField: string): (data: any[]) => T[] {
    function visitChildren(result: any[], childrenArray: any[], parentId: any): void {
        if (!childrenArray) {
            return;
        }

        for (let item of childrenArray) {
            const employee = { ...item };
            delete employee[childrenField];
            employee[parentField] = parentId;
            result.push(employee);

            visitChildren(result, item[childrenField], item[idField]);
        }
    }

    return function flatten(data: any[]): T[] {
        const result = [];
        visitChildren(result, data, null);
        return result as T[];
    };
}

export const flattenData = flattenTree<Employee>('id', 'managerId', 'reports');

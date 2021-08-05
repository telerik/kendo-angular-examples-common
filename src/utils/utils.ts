export function flattenTree<T>(idField: string, parentField: string, childrenField: string): (data: any[]) => T[] {
    function visitChildren(childrenArray: any[], parentId: any): T[] {
        if (!childrenArray) {
            return [];
        }
        let subTree = [];
        for (let item of childrenArray) {
            const employee = { ...item };
            delete employee[childrenField];
            employee[parentField] = parentId;
            subTree = [...subTree, employee, ...visitChildren(item[childrenField], item[idField])];
        }
        return subTree;
    }

    return function flatten(data: any[]): T[] {
        let result = [];
        result = visitChildren(data, null);
        return result as T[];
    };
}

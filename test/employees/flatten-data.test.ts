import { flattenData } from '../../src/employees/flatten-data';

describe('flatten-data', () => {
    it('flattens single item', () => {
        const tree = [{
            id: 1
        }];

        expect(flattenData(tree)).toEqual([{ id: 1, managerId: null }]);
    });

    it('flattens tree with single root', () => {
        const tree = [{
            id: 1,
            reports: [{
                id: 2,
                reports: [{
                    id: 3
                }]
            }]
        }];

        expect(flattenData(tree)).toEqual([{ id: 1, managerId: null }, { id: 2, managerId: 1 }, { id: 3, managerId: 2 }]);
    });

    it('flattens tree with multiple roots', () => {
        const tree = [{
            id: 1
        }, {
            id: 2,
            reports: [{
                id: 3
            }]
        }];

        expect(flattenData(tree)).toEqual([{ id: 1, managerId: null }, { id: 2, managerId: null }, { id: 3, managerId: 2 }]);
    });
});

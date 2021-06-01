import { Employee } from './employee.interface';

export function parseData(data: any[]): Employee[] {
    return data.map(record => {
        const children = record.reports;
        if (children) {
            record.reports = parseData(children);
        }

        return {
            ...record,
            hireDate: new Date(record.hireDate)
        };
    });
}

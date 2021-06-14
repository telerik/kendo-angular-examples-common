export interface Employee {
    id: number;
    managerId?: number;
    name: string;
    firstName: string;
    reports?: any;
    lastName: string;
    title: string;
    active: boolean;
    phone: number;
    hireDate: Date;
}

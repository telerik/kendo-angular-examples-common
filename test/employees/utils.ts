import { Employee } from '../../src/main';

export const employeeTitles = [
    "Chief Executive Officer",
    "Chief Technical Officer",
    "VP, Engineering",
    "Team Lead",
    "Software Architect",
    "Director, Engineering",
    "QA Architect", "Chief Product Officer"
];

export function createEmployee(id: number, managerId: number, firstName: string, lastName: string, title: string, phone: number, active: boolean = true, reports: any = [],  hireDate: Date = null): Employee {
    const emp: Employee = {
        id: id,
        managerId: managerId,
        name: `${firstName} ${lastName}`,
        firstName: firstName,
        reports: reports,
        lastName: lastName,
        title: title,
        active: active,
        phone: phone,
        hireDate: new Date(hireDate)
    };
    return emp;
}

export const getBergEmployee = () => createEmployee(50, 42, 'Berg', 'Haldurson', employeeTitles[6], 55555555);

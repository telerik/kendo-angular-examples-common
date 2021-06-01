import { fakeAsync, tick } from '@angular/core/testing';
import { BaseEmployeesService } from '../../src/employees/base-employees.service';
import { Employee } from '../../src/main';

const employeeTitles = [
    "Chief Executive Officer",
    "Chief Technical Officer",
    "VP, Engineering",
    "Team Lead",
    "Software Architect",
    "Director, Engineering",
    "QA Architect", "Chief Product Officer"
];

function createEmployee(id: number, managerId: number, firstName: string, lastName: string, title: string, phone: number, active: boolean = true, reports: any = [],  hireDate: Date = null): Employee {
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

export function baseEmployeeServiceTests(serviceInstance: () => any) {
    let service: BaseEmployeesService;

    beforeEach(() => {
        service = serviceInstance();
    });

    it('should create new item', fakeAsync(() => {
        let data = null;
        const emp = createEmployee(50, 20, 'Berg', 'Haldurson', employeeTitles[6], 55555555);

        service.save(emp, true, 1000).subscribe((res) => {
            data = res;
        });

        tick(999);
        expect(data).toBe(null);

        tick(1);
        expect(data[43]).toEqual(emp);
    }));

    it('should update existing item', fakeAsync(() => {
        let data = null;
        const emp = service.readStatic()[0];
        emp.name = "Test";

        service.save(emp, false, 1000).subscribe((res) => {
            data = res;
        });

        tick(999);
        expect(data).toBe(null);

        tick(1);
        expect(data[0]).toEqual(emp);
    }));

    it('should delete an item', fakeAsync(() => {
        let data = null;
        const deleteIndex = 32;
        service.remove({id: deleteIndex}, 1000).subscribe((res) => {
            data = res;
        });
        tick(999);
        expect(data).toBe(null);
        tick(1);
        const res = data.find((emp) => emp.id === deleteIndex);
        expect(res).toBe(undefined);
    }));
}

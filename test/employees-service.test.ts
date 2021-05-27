import {
    TestBed, fakeAsync, tick
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { MockModule } from './mock.module';
import { EmployeesService, createEmployee, employeeTitles } from '../src/employees.service';
import { HttpClientModule } from '@angular/common/http';

const fields = ['managerId', 'id', 'name', 'firstName', 'lastName', 'title', 'active', 'hireDate', 'phone'];
const testHier = (data) => {
        expect(data[0].reports[0].reports[1].reports[0]).toEqual(akeemEmployee);
};
const akeemEmployee = {"active": true, "firstName": "Akeem", "hireDate": new Date("2017-01-15"), "id": 60, "lastName": "Carr", "name": "Akeem Carr", "phone": 7381362814, "title": "Junior Software Developer"};

describe('employees', () => {
    @Component({
        template: ''
    })
    class TestComponent {
        constructor(public service: EmployeesService) {}
    }
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [MockModule,  HttpClientModule],
            providers: [EmployeesService]
        });
        const template: string = '<kendo-component></kendo-component>';
        TestBed.overrideComponent(TestComponent, {set: { template }});
        const fixture: any = TestBed.createComponent(TestComponent);
        service = fixture.debugElement.injector.get(EmployeesService);
    });


    it('should inject service EmployeesService', () => {
        expect(service).toBeTruthy();
    });
    it('should return flat static data', () => {
        const flatData = service.readStatic({skip: 0, take: 10}, true);
        expect(flatData.length).toBe(10);
        flatData.map((item) => {
            fields.map(key => expect(item[key] !== undefined));
        });
    });
    it('should return hier static data', () => {
        const hierData = service.readStatic({}, false);
        testHier(hierData);
    });
    it('should return flat async data', fakeAsync(() => {
        let data = null;
        service.readAsync({skip: 0, take: 10}, true, 1000).subscribe((res) => {
           data = res;
        });
        tick(999);
        expect(data).toBe(null);
        tick(1);
        data.map(item => fields.map(key => expect(item[key] !== undefined).toBe(true)));
    }));
    it('should return hier async data', fakeAsync(() => {
        let data = null;
        service.readAsync({skip: 0, take: 10}, false, 1000).subscribe((res) => {
           data = res;
        });
        tick(999);
        expect(data).toBe(null);
        tick(1);
        testHier(data);
    }));
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
        const emp = service.readStatic({skip: 0, take: 10}, true)[1];
        emp.name = "Test";
        service.save(emp, true, 1000).subscribe((res) => {
           data = res;
        });
        tick(999);
        expect(data).toBe(null);
        tick(1);
        expect(data[1]).toEqual(emp);
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
});

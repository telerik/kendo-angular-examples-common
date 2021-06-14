import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { getBergEmployee } from './utils';
import { EmployeesFlatDataService } from '../../src/main';

const fields = ['managerId', 'id', 'name', 'firstName', 'lastName', 'title', 'active', 'hireDate', 'phone'];

describe('EmployeesFlatDataService', () => {
    @Component({
        template: ''
    })
    class TestComponent {
        constructor(public service: EmployeesFlatDataService) {}
    }

    let service: EmployeesFlatDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [HttpClientModule],
            providers: [EmployeesFlatDataService]
        });

        const fixture: any = TestBed.createComponent(TestComponent);
        service = fixture.debugElement.injector.get(EmployeesFlatDataService);
    });

    it('should inject service', () => {
        expect(service).toBeInstanceOf(EmployeesFlatDataService);
    });

    it('should return static data', () => {
        const flatData = service.readStatic({skip: 0, take: 10});
        expect(flatData.length).toBe(10);

        flatData.map((item) => fields.forEach(key =>
            expect(item[key]).toBeDefined())
        );
    });

    it('should return flat async data', fakeAsync(() => {
        let data = null;
        service.readAsync({skip: 0, take: 10}, 1000).subscribe((res) => {
           data = res;
        });

        tick(999);
        expect(data).toBe(null);

        tick(1);

        expect(data.length).toBe(10);
        data.map(item => fields.forEach(key =>
            expect(item[key]).toBeDefined()
        ));
    }));

    it('should create new item', fakeAsync(() => {
        let data = null;
        const emp = getBergEmployee();

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
        const emp = getBergEmployee();
        const bergId = emp.id;
        service.remove(emp, 1000).subscribe((res) => {
            data = res;
        });

        tick(999);
        expect(data).toBe(null);

        tick(1);
        const res = data.find((emp) => emp.id === bergId);
        expect(res).toBe(undefined);
    }));
});

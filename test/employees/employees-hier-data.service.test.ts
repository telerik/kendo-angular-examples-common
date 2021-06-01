import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { baseEmployeeServiceTests } from './base-employee-service-tests';
import { EmployeesHierDataService } from '../../src/main';

const assertHierarchy = (data) => {
    expect(data[0].reports[0].reports[1].reports[0]).toEqual({
        id: 60,
        active: true,
        name: "Akeem Carr",
        firstName: "Akeem",
        lastName: "Carr",
        hireDate: new Date("2017-01-15"),
        phone: 7381362814,
        title: "Junior Software Developer"
    });
};

describe('EmployeesFlatDataService', () => {
    @Component({
        template: ''
    })
    class TestComponent {
        constructor(public service: EmployeesHierDataService) {}
    }

    let service: EmployeesHierDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [HttpClientModule],
            providers: [EmployeesHierDataService]
        });

        const fixture: any = TestBed.createComponent(TestComponent);
        service = fixture.debugElement.injector.get(EmployeesHierDataService);
    });

    it('should inject service', () => {
        expect(service).toBeInstanceOf(EmployeesHierDataService);
    });

    it('should return hierarchical static data', () => {
        const data = service.readStatic();
        assertHierarchy(data);
    });

    it('should return hierarchy async data', fakeAsync(() => {
        let data = null;
        service.readAsync(1000).subscribe((res) => {
           data = res;
        });

        tick(999);
        expect(data).toBe(null);

        tick(1);
        assertHierarchy(data);
    }));

    baseEmployeeServiceTests(() => service);
});

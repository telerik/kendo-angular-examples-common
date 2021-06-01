import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { baseEmployeeServiceTests } from './base-employee-service-tests';
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

        flatData.map((item) => fields.map(key =>
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
        data.map(item => fields.map(key =>
            expect(item[key]).toBeDefined())
        );
    }));

    baseEmployeeServiceTests(() => service);
});

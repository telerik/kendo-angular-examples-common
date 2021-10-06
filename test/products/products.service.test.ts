import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProductsService, getProducts } from '../../src/main';

const fields = ['ProductID', 'CategoryID', 'ProductName', 'Discontinued', 'UnitsInStock'];

describe('ProductsService', () => {
    @Component({
        template: ''
    })
    class TestComponent {
        constructor(public service: ProductsService) {}
    }

    let service: ProductsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [HttpClientModule],
            providers: [ProductsService]
        });

        const fixture: any = TestBed.createComponent(TestComponent);
        service = fixture.debugElement.injector.get(ProductsService);
    });

    it('should inject service', () => {
        expect(service).toBeInstanceOf(ProductsService);
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
        const product = getProducts()[0];

        service.save(product, true, 1000).subscribe((res) => {
            data = res;
        });

        tick(999);
        expect(data).toBe(null);

        tick(1);
        expect(data[77]).toEqual(product);
    }));

    it('should update existing item', fakeAsync(() => {
        let data = null;
        const product = service.readStatic()[0];
        product.ProductName = "Test";

        service.save(product, false, 1000).subscribe((res) => {
            data = res;
        });

        tick(999);
        expect(data).toBe(null);

        tick(1);
        expect(data[0]).toEqual(product);
    }));

    it('should delete an item', fakeAsync(() => {
        let data = null;
        const product = getProducts()[0];
        const productId = product.ProductID;
        service.remove(product, 1000).subscribe((res) => {
            data = res;
        });

        tick(999);
        expect(data).toBe(null);

        tick(1);
        const res = data.find((product) => product.ProductID === productId);
        expect(res).toBe(undefined);
    }));
});

import { getProducts, Product } from '../../src/products';

describe("products data", () => {

    it("should retrieve different products instance", () => {
        let products = getProducts(), products1: Product;

        expect(products.length).toEqual(77);
        products[0].ProductName = null;
        products1 = getProducts();
        expect(products1.ProductName).not.toEqual(null);
    });
});

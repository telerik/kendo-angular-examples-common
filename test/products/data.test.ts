import { getProducts, getCategories, Product, Category } from '../../src/products';

describe("products data", () => {

    it("should retrieve different products instance", () => {
        let products = getProducts(), products1: Array<Product>;

        expect(products.length).toEqual(77);
        products[0].ProductName = null;
        products1 = getProducts();
        expect(products1[0].ProductName).not.toEqual(null);
    });
    it("should retrieve different categories instance", () => {
        let cats = getCategories(), cats1: Array<Category>;

        expect(cats.length).toEqual(8);
        cats[0].CategoryName = null;
        cats1 = getCategories();
        expect(cats1[0].CategoryName).not.toEqual(null);
    });
});

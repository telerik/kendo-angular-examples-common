export class Category {
    constructor(
        public CategoryID: number,
        public CategoryName: string,
        public Description: string
    ) {}
}
export class Product {
    constructor(
        public ProductID: number,
        public ProductName: string,
        public CategoryID: number,
        public SupplierID?: number,
        public Category?: Category,
        public Discontinued?: boolean,
        public UnitsInStock?: number,
        public QuantityPerUnit?: string,
        public UnitPrice?: number,
        public UnitsOnOrder?: number,
        public ReorderLevel?: number
    ) {}
}

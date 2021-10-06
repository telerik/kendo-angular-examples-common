import { Injectable } from '@angular/core';
import { BaseFlatDataService } from '../base-flat-data.service';
import { Product } from './product.interface';
import { getProducts } from './data';

@Injectable()
export class ProductsService extends BaseFlatDataService<Product> {
    constructor() {
        super('ProductID', getProducts);
    }
}

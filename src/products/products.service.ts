import { Injectable } from '@nestjs/common';

import { Product } from './product.model'

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodId = new Date().toString();
        console.log(title);
        const newProduct = new Product(prodId, title, desc, price); console.log(newProduct);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const product = this.products.find((prod) => {prod.id === productId});
        return { ...product };
    }
};
interface User {
    name: string;
}
interface Product {
    id: string;
    price: number;
}
declare class Cart {
    protected user: User;
    private store;
    constructor(user: User);
    put(id: string, product: Product): void;
    get(id: string): Product;
}
declare const cartJohn: Cart;
declare const cartJay: Cart;
declare const a: number;

interface User {
    name: string;
}

interface Product {
    id: string;
    price: number;
}

class Cart {
    /*private public protected*/
    private store: {
        [key: string]: Product;
    };

    constructor(protected user: User) {
        this.store = {};
    }
    put(id: string, product: Product) {
        this.store[id] = product;
    }
    get(id: string) {
        return this.store[id];
    }
}

const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });

const a: number = 0;

cartJay.put('a12g46', {
    id: 'coke',
    price: 12222
});

console.log(cartJay.get);

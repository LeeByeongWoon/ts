"use strict";
class Cart {
    constructor(user) {
        this.user = user;
        this.store = {};
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });
const a = 0;
cartJay.put('a12g46', {
    id: 'coke',
    price: 12222
});
console.log(cartJay.get);

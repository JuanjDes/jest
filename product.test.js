/* const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product'); */
const { getProduct, resetProducts, addProduct, removeProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

// Test para añadir producto
describe ('addProduct', () => {
    it('should add a product', () => {
        expect(addProduct('product1', 50)).toEqual({id: 1, name: 'product1', price: 50});
    });

    it('Should increment the id by 1', () => {
        addProduct('product2', 60);
        expect(addProduct('product3', 70)).toEqual({id: 2, name: 'product3', price: 70});
    });

    it('should return an error if the name is empty', () => {
        expect(() => {addProduct('', 80).toThrow('Error: Name cannot be empty')});
    });

    it('should return an error if the price is not a number', () => {
        expect(() => {addProduct('product4', '').toThrow('Error: Price must be a number')});
    });

    it('Should throw an error if the product is already exists', () => {
        addProduct('product1', 50);
        expect(() => {addProduct('product1', 60).toThrow('Error: Product already exists')});
    })
 
});

// Test para eliminar producto

describe('removeProduct', () => {
    it('should remove a product', () => {
        addProduct('product1', 50);
        addProduct('product2', 60);
        removeProduct(1);
        expect(getProduct()).toEqual([{id: 2, name: 'product2', price: 60}]);
    });

    it('should return an error if the product does not exist', () => {
        expect(() => {removeProduct(1).toThrow('Error: Product not found')});
    });
});

// Test para actualizar producto

describe('updateProduct', () => {
    it('should update a product', () => {
        addProduct('product1', 50);
        updateProduct(1, 'product1 updated', 60);
        expect(getProduct(1)).toEqual([{id: 1, name: 'product1 updated', price: 60}]);
    });
});
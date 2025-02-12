let products = [];
let id = 0;

// Reset product
const resetProducts = () => {
    products = [];
    id = 0;
};

// Add product
const addProduct = (name, price) => {
    id += 1;
    const product = products.find(product => product.name === name);
    
    if(!name) throw new Error('Name is required');
    if(!price) throw new Error('Price is required');
    if(product) throw new Error(`Product "${name}" already exists`);
    
    const newProduct = { id, name, price };
    products.push(newProduct);
    return newProduct;
};

// Remove product
const removeProduct = (id, name) => {
    const product = products.find(product => product.id === id);

    if(!product) throw new Error(`Product "${name}" not found`);
    
    products = products.filter(product => product.id!== id);

    return product;
}

// Update product

const updateProduct = (id, name, price) => {
    const product = products.find(product => product.id === id);

    if(!product) throw new Error(`Product "${name}" not found`);
    if(!name) throw new Error('Name is required');
    if(!price) throw new Error('Price is required');
    
    product.name = name;
    product.price = price;

    return product;
};


// Get products
const getProduct = () => {
    return products;
};



module.exports = {
    getProduct,
    resetProducts,
    addProduct,
    removeProduct,
    updateProduct,
};
// CRUD Express Product API

// Import Express
const express = require('express');
const app = express();

// JSON middleware to understand JSON data
app.use(express.json());

// In-memory storage for products
let products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Phone", price: 699.99 },
];
let nextId = 3;

// Welcome message
app.get('/', (req, res) => {
    res.send('Welcome to Tosin-Express API! Use /products to see all products.');
});

// CREATE - Add a new product
app.post('/products', (req, res) => {
    try {
        // Get data from request body
        const { name, price } = req.body;
        
        if (!name || !price) {
            return res.status(400).json({
                error: "Please provide name and price"
            });
        }
        
        // Create new product
        const newProduct = {
            id: nextId,
            name: name,
            price: parseFloat(price),
        };
        
        // Add to our products array
        products.push(newProduct);
        nextId++;
        
        res.status(201).json({
            message: "Product created successfully",
            product: newProduct
        });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong, Try Again" });
    }
});

// READ - Get all products
app.get('/products', (req, res) => {
    try {
        res.json({
            message: "Products retrieved successfully",
            count: products.length,
            products: products
        });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

// READ - Get product by ID
app.get('/products/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        
        // Find product with matching ID
        const product = products.find(p => p.id === productId);
        
        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        
        res.json({
            message: "Product found",
            product: product
        });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

// UPDATE - Update a product
app.put('/products/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const { name, price } = req.body;
        
        // Find product index
        const productIndex = products.findIndex(p => p.id === productId);
        
        if (productIndex === -1) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        
        // Get the existing product
        let product = products[productIndex];
        
        if (name) product.name = name;
        if (price) product.price = parseFloat(price);
        
        products[productIndex] = product;
        
        res.json({
            message: "Product updated successfully",
            product: product
        });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

// DELETE - Delete a product
app.delete('/products/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        
        // Find product index
        const productIndex = products.findIndex(p => p.id === productId);
        
        if (productIndex === -1) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        
        // Remove product from array
        const deletedProduct = products.splice(productIndex, 1)[0];
        
        res.json({
            message: "Product deleted successfully",
            product: deletedProduct
        });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('\n📋 Available Routes:');
    console.log('GET    /                    - Welcome message');
    console.log('GET    /products            - Get all products');
    console.log('GET    /products/:id        - Get product by ID');
    console.log('POST   /products            - Create new product');
    console.log('PUT    /products/:id        - Update product');
    console.log('DELETE /products/:id        - Delete product');
});
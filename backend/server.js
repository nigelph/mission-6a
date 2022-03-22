const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const quickSort = require('./quickSort')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser.json());

// Connect to LOCAL MongoDB URL
// const url = 'mongodb://127.0.0.1:27017';

// Mongo Atlas
const url = 'mongodb+srv://nigel:pot3Toes@mission6.jnlpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// Connect to mongo container in Docker
// const url = 'mongodb://host.docker.internal:27017'


// Connec to MongoDB
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }

    // Specify database you want to access
    const db = client.db('mission6');
    const products = db.collection('products')
    const orderHistory = db.collection('order-history')
    const orders = db.collection('orders')

    // CREATE a database entry
    app.post('/:pet/:category/:price/:brand/:age/:sale/:name/:desc/:country/:quantity', (req, res) => {
        let intNum = parseInt(req.params.quantity)
        let floatNum = parseFloat(req.params.price)
        products.insertOne({ pet_type: req.params.pet, product_cat: req.params.category, price: floatNum, product_brand: req.params.brand, 
            pet_age: req.params.age, sale_item: req.params.sale, product_name: req.params.name, product_desc: req.params.desc, country_of_origin: req.params.country, quantity: intNum })
        .then(result => {
            res.json('Product Added')
            console.log(result)
        })
    })

    

    // READ - SEARCH BY SELECTED PARAMS FILTER 1
    app.get('/products/filter1/:getCategory/:getSubCategory/:getAge/:getBrand', (req, res) => {
        products.find({ $and: [{category: req.params.getCategory}, {sub_category: req.params.getSubCategory}, 
            {pet_age: req.params.getAge}, {brand: req.params.getBrand}]} ).toArray()
            .then(results => {
                console.log(quickSort(results))
                res.send(quickSort(results))
            })
    })
    
    // READ - SEARCH BY SELECTED PARAMS FILTER 2
    app.get('/products/filter2/:getCategory/:getSubCategory/:getAge/:getBrand', (req, res) => {
        products.find({ $or: [{category: req.params.getCategory}, {sub_category: req.params.getSubCategory}, 
            {pet_age: req.params.getAge}, {brand: req.params.getBrand}]} ).toArray()
            .then(results => {
                console.log(quickSort(results))
                res.send(quickSort(results))
            })
    })

    // READ - SEARCH BY SELECTED PARAMS FILTER 3
    app.get('/products/filter3/:getCategory/:getBrand', (req, res) => {
        products.find()
        .toArray()
            .then(results => {
                let newArray = []
                let newArray2 = []

                results.forEach(element => {
                    if (element.category !== req.params.getCategory) {
                        delete results[element]
                    }
                });
                


                // results.forEach(element => {
                //     if (element.category === req.params.getCategory) {
                //         newArray.push(element)
                //     } 
                // });

                // newArray.forEach(element => {
                //     if (element.brand === req.params.getBrand) {
                //         newArray2.push(element)
                //     } 
                // });

                //console.log(quickSort(results))
                res.send(quickSort(results))
                
            })
    })

    // READ - GET ALL LIMITED TO FIRST 10 IN ALPHABETICAL ORDER
    app.get('/products', (req, res) => {
        products.find().limit(10).toArray()
            .then(results => {
                console.log(quickSort(results))
                res.send(quickSort(results))
            })
    })

    // READ - GET by PET
    app.get('/pet/:getPet', (req, res) => {
        products.find({pet_type: req.params.getPet}).toArray()
        .then(results => {
            console.log(results)
            res.send(results)
        })
    })

    // READ - GET by CATEGORY
    app.get('/category/:getCat', (req, res) => {
        products.find({product_cat: req.params.getCat}).toArray()
        .then(results => {
            console.log(results)
            res.send(results)
        })
    })

    // READ - GET by PRICE
    app.get('/price/:getPrice', (req, res) => {
        let number = parseFloat(req.params.getPrice)
        products.find({price: number}).toArray()
        .then(results => {
            console.log(results)
            res.send(results)
        })
    })

    // READ - GET by MIN PRICE
    app.get('/minPrice/:getMinPrice', (req, res) => {
        let number = parseFloat(req.params.getMinPrice)
        products.find({price: { $gte: number }}).toArray()
        .then(results => {
            console.log(results)
            res.send(results)
        })
    })

    // READ - GET by MAX PRICE
    app.get('/maxPrice/:getMaxPrice', (req, res) => {
        let number = parseFloat(req.params.getMaxPrice)
        products.find({price: { $lte: number }}).toArray()
        .then(results => {
            console.log(results)
            res.send(results)
        })
    })

    // READ - GET by BRAND
    app.get('/brand/:getBrand', (req, res) => {
        products.find({product_brand: req.params.getBrand}).toArray()
        .then(results => {
            console.log(results)
            res.send(results)
        })
    })

    // READ - GET by AGE
    app.get('/age/:getAge', (req, res) => {
        products.find({pet_age: req.params.getAge}).toArray()
        .then(results => {
            console.log(results)
            res.send(results)
        })
    })

    // READ - GET by SALE
    app.get('/sale/:getSale', (req, res) => {
        products.find({sale_item: req.params.getSale}).toArray()
        .then(results => {
            console.log(results)
            res.send(results)
        })
    })

    // READ - GET by COUNTRY
    app.get('/country/:getCountry', (req, res) => {
        products.find({country_of_origin: req.params.getCountry}).toArray()
        .then(results => {
            console.log(results)
            res.send(results);
        })
    })

    // READ - GET by QUANTITY
    app.get('/quantity/:getQuantity', (req, res) => {
        let number = parseInt(req.params.getQuantity)
        products.find({quantity: number}).toArray()
        .then(results => {
            console.log(results)
            res.send(results);
        })
    })

    // READ - GET by MINIMUM QUANTITY
    app.get('/minQuantity/:getMinQuantity', (req, res) => {
        let number = parseInt(req.params.getMinQuantity)
        products.find({quantity: { $gte: number }}).toArray()
        .then(results => {
            console.log(results)
            res.send(results);
        })
    })

    // READ - GET by MAXIMUM QUANTITY
    app.get('/maxQuantity/:getMaxQuantity', (req, res) => {
        let number = parseInt(req.params.getMaxQuantity)
        products.find({quantity: { $lte: number }}).toArray()
        .then(results => {
            console.log(results)
            res.send(results);
        })
    })

    app.post('/:input', (req, res) => {
        const test = req.params.input;

        res.send(test);
    })

    app.get('/hello', (req, res) => {
        res.send('this is a change in the Hello api')
    })

    // UPDATE a database entry by NAME
    app.put('/update/:pet/:category/:price/:brand/:age/:sale/:name/:desc/:country/:quantity', (req, res) => {
        let intNum = parseInt(req.params.quantity)
        let floatNum = parseFloat(req.params.price)
        products.updateOne({ product_name: req.params.name }, { $set: { pet_type: req.params.pet, product_cat: req.params.category, price: floatNum, product_brand: req.params.brand, 
            pet_age: req.params.age, sale_item: req.params.sale, product_name: req.params.name, product_desc: req.params.desc, 
            country_of_origin: req.params.country, quantity: intNum }}, {upsert: true})
        .then(result => {
            res.json('Product Updated')
            console.log(result)
        })
    })

    // DELETE - ONE by NAME
    app.delete('/test/:deleteName', (req, res) => {
        products.deleteOne({product_name: req.params.deleteName})
        .then(result => {
            if (result.deletedCount === 0) {
                return res.json('No product to delete')
            }
            res.json('Product Deleted')       
        })
    })

    // DELETE - MANY by NAME
    app.delete('/manyName/:deleteManyName', (req, res) => {
        products.deleteMany({product_name: req.params.deleteManyName})
        .then(result => {
            if (result.deletedCount === 0) {
                return res.json('No products to delete')
            }
            res.json('Products deleted')
        })
    })

    app.get('/allOrders', (req, res) => {
        orders.aggregate([
            {
                $lookup:
                {
                    from: 'products',
                    localField: 'product_id',
                    foreignField: '_id',
                    as: 'orderDetails'
                }
            }
        ]).toArray(function (err, res) {
            if (err) throw err;
            console.log(JSON.stringify(res));
            console.log(res)

        });
        // res.send(res)
    })



    // GET order history from db
    app.get('/history', (req, res) => {
        orders.find().toArray()
            .then(results => {
                console.log(results)
                res.send(results)
            })
    })
    console.log(`MongoDB Connected: ${url}`);
});

app.listen(8080, () => console.log('Server is running on port 8080'))

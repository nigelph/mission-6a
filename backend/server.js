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

// Insert Mongo Atlas url here
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


    // READ - GET ALL LIMITED TO FIRST 10 IN ALPHABETICAL ORDER
    app.get('/products', (req, res) => {
        products.find().limit(10).toArray()
            .then(results => {
                console.log(quickSort(results))
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
  
    // READ - SEARCH BY SELECTED PARAMS FILTER 1
    app.get('/products/filter1/:getCategory/:getSubCategory/:getAge/:getBrand', (req, res) => {
        products.find({
            $and: [{ category: req.params.getCategory }, { sub_category: req.params.getSubCategory },
            { pet_age: req.params.getAge }, { brand: req.params.getBrand }]
        }).toArray()
            .then(results => {
                console.log(quickSort(results))
                res.send(quickSort(results))
            })
    })
  
    // READ - GET by PET
    app.get('/pet/:getPet', (req, res) => {
        products.find({ pet_type: req.params.getPet }).toArray()
            .then(results => {
                console.log(results)
                res.send(results)
            })
    })

    // READ - GET by CATEGORY
    app.get('/category/:getCat', (req, res) => {
        products.find({ product_cat: req.params.getCat }).toArray()
            .then(results => {
                console.log(results)
                res.send(results)
            })
    })

    // READ - GET by PRICE
    app.get('/price/:getPrice', (req, res) => {
        let number = parseFloat(req.params.getPrice)
        products.find({ price: number }).toArray()
            .then(results => {
                console.log(results)
                res.send(results)
            })
    })

    // READ - GET by MIN PRICE
    app.get('/minPrice/:getMinPrice', (req, res) => {
        let number = parseFloat(req.params.getMinPrice)
        products.find({ price: { $gte: number } }).toArray()
            .then(results => {
                console.log(results)
                res.send(results)
            })
    })

    // READ - GET by MAX PRICE
    app.get('/maxPrice/:getMaxPrice', (req, res) => {
        let number = parseFloat(req.params.getMaxPrice)
        products.find({ price: { $lte: number } }).toArray()
            .then(results => {
                console.log(results)
                res.send(results)
            })
    })

    // READ - GET by BRAND
    app.get('/brand/:getBrand', (req, res) => {
        products.find({ product_brand: req.params.getBrand }).toArray()
            .then(results => {
                console.log(results)
                res.send(results)
            })
    })

    // READ - GET by AGE
    app.get('/age/:getAge', (req, res) => {
        products.find({ pet_age: req.params.getAge }).toArray()
            .then(results => {
                console.log(results)
                res.send(results)
            })
    })

    // READ - GET by SALE
    app.get('/sale/:getSale', (req, res) => {
        products.find({ sale_item: req.params.getSale }).toArray()
            .then(results => {
                console.log(results)
                res.send(results)
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
    })

    // ORDER HISTORY
    // Search and filter order results by either (Year) OR (Month) OR (Year AND Month)
    app.post('/filter/:month/:year', (req, res) => {
        const month = parseInt(req.params.month)
        const year = parseInt(req.params.year)
        console.log(month)
        if (year && !month) {
            orders.find({
                $expr: {
                    $and: [
                        {
                            "$eq": [
                                {
                                    "$year": "$date"
                                },
                                // Show all orders within the specfiied year here
                                year
                            ]
                        }
                    ]
                }
            }).toArray()
                .then(result => {
                    console.log(result)
                    res.send(result)
                })
        }
        else if (month && !year) {
            orders.find({
                $expr: {
                    $and: [
                        {
                            "$eq": [
                                {
                                    "$month": "$date"
                                },
                                // Show all orders within the specfiied year here
                                month
                            ]
                        }
                    ]
                }
            }).toArray()
                .then(result => {
                    console.log(result)
                    res.send(result)
                })
        }
        // Display orders of a given MONTH AND YEAR
        if (year && month) {
            orders.find({
                $expr: {
                    $and: [
                        {
                            "$eq": [
                                {
                                    "$month": "$date"
                                },
                                month
                            ]
                        },
                        {
                            "$eq": [
                                {
                                    "$year": "$date"
                                },
                                year
                            ]
                        }
                    ]
                }
            }).toArray()
                .then(result => {
                    console.log(result)
                    res.send(result)
                })
        }
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

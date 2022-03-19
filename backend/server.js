const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
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

    // QuickSort function
    const quickSort = list => {
        if (list.length < 2) {
            return list;
        }

        let pivot = list[0];
        let left = [];
        let right = [];
        for (let i = 1; i < list.length; i++) {
            // Compare alphabetical order of the first letter between two product names
            if (list[i].product_name < pivot.product_name) {
                left.push(list[i]);
            } else {
                right.push(list[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    };


    app.get('/products', (req, res) => {
        products.find().toArray()
            .then(results => {
                console.log(quickSort(results))
                res.send(quickSort(results))
            })
    })
    app.post('/:input', (req, res) => {
        const test = req.params.input;

        res.send(test);
    })

    app.get('/hello', (req, res) => {
        res.send('this is a change in the Hello api')
    })

    app.post('/:name/:desc/:country/:quantity/:cost', (req, res) => {
        products.insertOne({ product_name: req.params.name, product_desc: req.params.desc, country_of_origin: req.params.country, quantity: req.params.quantity, cost: req.params.cost })
        console.log(req.params.name)
        console.log(req.params.desc)
        console.log(req.params.country)
        console.log(req.params.quantity)
        console.log(req.params.cost)

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


app.listen(8080, () => console.log('Listening on port 4000'))
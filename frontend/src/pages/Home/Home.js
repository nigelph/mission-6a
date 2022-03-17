import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Home() {

    const [input, setInput] = useState()
    const [post, setPost] = useState()
    const [products, setProducts] = useState([])


    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [country, setCountry] = useState("")
    const [quantity, setQuantity] = useState("")
    const [cost, setCost] = useState("")
    const [prod, setProd] = useState([name, desc, country, quantity, cost])


    function handleClick() {
        axios.post(`http://localhost:8080/${input}`)
            .then((res) => {
                setPost(res.data)
            })
    }

    function handleClickGet() {
        axios.get(`http://localhost:8080/products`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function postProduct(e) {
        e.preventDefault()
        axios.post(`http://localhost:8080/${name}/${desc}/${country}/${quantity}/${cost}`)
            .then((res) => {
                console.log(res.data)
                setProd(res.data)
            })
    }

    // function handle(e) {
    //     const newData = { ...prod }
    //     newData[e.target.id] = e.target.value
    //     setProd(newData)
    //     console.log(newData)
    // }
    return (
        <div>
            <input type='text' onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={handleClick}>Click me to post!</button>
            <button onClick={handleClickGet}>Click me to get!</button>
            <br />
            <br />
            <p>this is a change showcasing git</p>
            <form onSubmit={(e) => postProduct(e)}>
                <label>Product name</label>
                <input type='text' onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Product Description</label>
                <input type='text' onChange={(e) => setDesc(e.target.value)} />
                <br />
                <label>Country of origin</label>
                <input type='text' onChange={(e) => setCountry(e.target.value)} />
                <br />
                <label>Quantity</label>
                <input type='text' onChange={(e) => setQuantity(e.target.value)} />
                <br />
                <label>Cost</label>
                <input type='text' onChange={(e) => setCost(e.target.value)} />
                <br />
                <button >Click me to insert a new product</button>
            </form>

            <p>{post}</p>
            <p>{prod}</p>

            {
                products.map(product =>
                    <div style={{ textAlign: 'left' }}>
                        <p><b>Product Name: </b>{product.product_name}</p>
                        <p><b>Product Description:</b> {product.product_desc}</p>
                        <p><b>Country of Origin: </b>{product.country_of_origin}</p>
                        <p><b>Quantity: </b>{product.quantity}</p>
                        <p><b>Cost: </b>{`$${product.cost}`}</p>
                        <br />
                    </div>
                )
            }

        </div >
    )
}


export default Home
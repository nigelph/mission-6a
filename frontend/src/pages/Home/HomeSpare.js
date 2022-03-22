// SPARE CODE THAT MAY OR MAY NOT BE USED

import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import SearchBanner from './components/SearchBanner/SearchBanner'
import style from './Home.module.css'

function Home() {

    const [input, setInput] = useState()
    const [getPet, setGetPet] = useState()
    const [getCat, setGetCat] = useState()
    const [getPrice, setGetPrice] = useState()
    const [getMinPrice, setGetMinPrice] = useState()
    const [getMaxPrice, setGetMaxPrice] = useState()
    const [getBrand, setGetBrand] = useState()
    const [getAge, setGetAge] = useState()
    const [getSale, setGetSale] = useState()
    const [getCountry, setGetCountry] = useState()
    const [getQuantity, setGetQuantity] = useState()
    const [getMinQuantity, setGetMinQuantity] = useState()
    const [getMaxQuantity, setGetMaxQuantity] = useState()
    const [deleteName, setDeleteName] = useState()
    const [deleteManyName, setDeleteManyName] = useState()
    const [post, setPost] = useState()
    const [products, setProducts] = useState([])

    const [pet, setPet] = useState("")
    const [category, setCat] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [age, setAge] = useState("")
    const [sale, setSale] = useState("")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [country, setCountry] = useState("")
    const [quantity, setQuantity] = useState("")
    
    //const [prod, setProd] = useState([pet, category, price, brand, age, sale, name, desc, country, quantity])

    function handleClick() {
        axios.post(`http://localhost:8080/${input}`)
            .then((res) => {
                setPost(res.data)
            })
    }

    function handleClickGetPet() {
        axios.get(`http://localhost:8080/pet/${getPet}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetCat() {
        axios.get(`http://localhost:8080/category/${getCat}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetPrice() {
        axios.get(`http://localhost:8080/price/${getPrice}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetMinPrice() {
        axios.get(`http://localhost:8080/minPrice/${getMinPrice}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetMaxPrice() {
        axios.get(`http://localhost:8080/maxPrice/${getMaxPrice}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetBrand() {
        axios.get(`http://localhost:8080/brand/${getBrand}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetAge() {
        axios.get(`http://localhost:8080/age/${getAge}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetSale() {
        axios.get(`http://localhost:8080/sale/${getSale}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetCountry() {
        axios.get(`http://localhost:8080/country/${getCountry}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetQuantity() {
        axios.get(`http://localhost:8080/quantity/${getQuantity}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetMinQuantity() {
        axios.get(`http://localhost:8080/minQuantity/${getMinQuantity}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickGetMaxQuantity() {
        axios.get(`http://localhost:8080/maxQuantity/${getMaxQuantity}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
    }

    function handleClickDeleteName() {
        axios.delete(`http://localhost:8080/test/${deleteName}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
            .then(response => {
                window.location.reload(true)
            })
    }

    function handleClickDeleteManyName() {
        axios.delete(`http://localhost:8080/manyName/${deleteManyName}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
    }

    function postProduct(e) {
        e.preventDefault()
        axios.post(`http://localhost:8080/${pet}/${category}/${price}/${brand}/${age}/${sale}/${name}/${desc}/${country}/${quantity}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
    }

    // UPDATE FUNCTION
    function updateProduct(e) {
    e.preventDefault()
    axios.put(`http://localhost:8080/update/${pet}/${category}/${price}/${brand}/${age}/${sale}/${name}/${desc}/${country}/${quantity}`)
        .then((res) => {
            console.log(res.data)
            setPost(res.data)
        })
}

    // function handle(e) {
    //     const newData = { ...prod }
    //     newData[e.target.id] = e.target.value
    //     setProd(newData)
    //     console.log(newData)
    // }

    return (
        <div className={style['home-container']}>

            <SearchBanner />

            <input type='text' onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={handleClick}>Click me to post!</button>
            <br></br>
            {/* Search by PET TYPE */}
            <input type='text' onChange={(e) => setGetPet(e.target.value)}></input>
            <button onClick={handleClickGetPet}>Search by Pet</button>
            <br></br>
            {/* Search by CATEGORY */}
            <input type='text' onChange={(e) => setGetCat(e.target.value)}></input>
            <button onClick={handleClickGetCat}>Search by Category</button>
            <br></br>
            {/* Search by PRICE */}
            <input type='text' pattern="\d{1,3}(.)\d{1,2}" placeholder="RGX = 000.00/parseFloat()" onChange={(e) => setGetPrice(e.target.value)}></input>
            <button onClick={handleClickGetPrice}>Search by Price</button>
            <br></br>
            {/* Search by MIN PRICE */}
            <input type='text' pattern="\d{1,3}(.)\d{1,2}" placeholder="RGX = 000.00/parseFloat()" onChange={(e) => setGetMinPrice(e.target.value)}></input>
            <button onClick={handleClickGetMinPrice}>Search by Minimum Price</button>
            <br></br>
            {/* Search by MAX PRICE */}
            <input type='text' pattern="\d{1,3}(.)\d{1,2}" placeholder="RGX = 000.00/parseFloat()" onChange={(e) => setGetMaxPrice(e.target.value)}></input>
            <button onClick={handleClickGetMaxPrice}>Search by Maximum Price</button>
            <br></br>
            {/* Search by BRAND */}
            <input type='text' onChange={(e) => setGetBrand(e.target.value)}></input>
            <button onClick={handleClickGetBrand}>Search by Brand</button>
            <br></br>
            {/* Search by AGE */}
            <input type='text' onChange={(e) => setGetAge(e.target.value)}></input>
            <button onClick={handleClickGetAge}>Search by Pet Age</button>
            <br></br>
            {/* Search by SALE */}
            <input type='text' placeholder="true or false" onChange={(e) => setGetSale(e.target.value)}></input>
            <button onClick={handleClickGetSale}>Search by On Sale</button>
            <br></br>
            {/* Search by COUNTRY */}
            <input type='text' onChange={(e) => setGetCountry(e.target.value)}></input>
            <button onClick={handleClickGetCountry}>Search by Country</button>
            <br></br>
            {/* Search by QUANTITY */}
            <input type='number' placeholder="Uses parseInt()" onChange={(e) => setGetQuantity(e.target.value)}></input>
            <button onClick={handleClickGetQuantity}>Search by Quantity</button>
            <br></br>
            {/* Search by MIN QUANTITY */}
            <input type='number' placeholder="Uses parseInt()" onChange={(e) => setGetMinQuantity(e.target.value)}></input>
            <button onClick={handleClickGetMinQuantity}>Search by Minimum Quantity</button>
            <br></br>
            {/* Search by MAX QUANTITY */}
            <input type='number' placeholder="Uses parseInt()" onChange={(e) => setGetMaxQuantity(e.target.value)}></input>
            <button onClick={handleClickGetMaxQuantity}>Search by Maximum Quantity</button>
            <br></br>
            {/* Delete one by NAME */}
            <input type='text' onChange={(e) => setDeleteName(e.target.value)}></input>
            <button onClick={handleClickDeleteName}>Delete ONE by Name</button>
            <br></br>
            {/* Delete many by NAME */}
            <input type='text' onChange={(e) => setDeleteManyName(e.target.value)}></input>
            <button onClick={handleClickDeleteManyName}>Delete MANY by Name</button>
            <br></br>
            <br />
            <p><b>Enter products into database here</b></p>
            <form onSubmit={(e) => postProduct(e)}>
                <label>Pet type</label> 
                <input type='text' onChange={(e) => setPet(e.target.value)} />
                <br />
                <label>Product Category</label> 
                <input type='text' onChange={(e) => setCat(e.target.value)} />
                <br />
                <label>Price</label>
                <input type='text' pattern="\d{1,3}(.)\d{1,2}" placeholder="RGX = 000.00/parseFloat()" onChange={(e) => setPrice(e.target.value)} />
                <br />
                <label>Product Brand</label> 
                <input type='text' onChange={(e) => setBrand(e.target.value)} />
                <br />
                <label>Pet Age</label> 
                <input type='text' onChange={(e) => setAge(e.target.value)} />
                <br />
                <label>On Sale</label> 
                <input type='text' placeholder="true or false" onChange={(e) => setSale(e.target.value)} />
                <br />
                <label>Product Name</label> 
                <input type='text' onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Product Description</label>
                <input type='text' onChange={(e) => setDesc(e.target.value)} />
                <br />
                <label>Country of origin</label>
                <input type='text' onChange={(e) => setCountry(e.target.value)} />
                <br />
                <label>Product Quantity</label>
                <input type='number' placeholder="Uses parseInt" onChange={(e) => setQuantity(e.target.value)} />
                <br />
                
                <button >Click me to INSERT a new product</button>
            </form>


            <p><b>UPDATE products here (selected by Product Name)</b></p>
            <form onSubmit={(e) => updateProduct(e)}>
                <label>Pet type</label> 
                <input type='text' onChange={(e) => setPet(e.target.value)} />
                <br />
                <label>Product Category</label> 
                <input type='text' onChange={(e) => setCat(e.target.value)} />
                <br />
                <label>Price</label>
                <input type='text' pattern="\d{1,3}(.)\d{1,2}" placeholder="RGX = 000.00/parseFloat()" onChange={(e) => setPrice(e.target.value)} />
                <br />
                <label>Product Brand</label> 
                <input type='text' onChange={(e) => setBrand(e.target.value)} />
                <br />
                <label>Pet Age</label> 
                <input type='text' onChange={(e) => setAge(e.target.value)} />
                <br />
                <label>On Sale</label> 
                <input type='text' placeholder="true or false" onChange={(e) => setSale(e.target.value)} />
                <br />
                <label>Product Name</label> 
                <input type='text' onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Product Description</label>
                <input type='text' onChange={(e) => setDesc(e.target.value)} />
                <br />
                <label>Country of origin</label>
                <input type='text' onChange={(e) => setCountry(e.target.value)} />
                <br />
                <label>Product Quantity</label>
                <input type='number' placeholder="Uses parseInt" onChange={(e) => setQuantity(e.target.value)} />
                <br />
                
                <button >Click me to UPDATE a product</button>
            </form>

            <p>{post}</p>

            {
                products.map(product =>
                    <div style={{ textAlign: 'left' }}>
                        <p><b>Pet Type: </b>{product.pet_type}</p>
                        <p><b>Product Category: </b>{product.product_cat}</p>
                        <p><b>Product Price: </b>{`$${product.price}`}</p>
                        <p><b>Product Brand: </b>{product.product_brand}</p>
                        <p><b>Pet Age: </b>{product.pet_age}</p>
                        <p><b>Product Name: </b>{product.product_name}</p>
                        <p><b>Product Description: </b> {product.product_desc}</p>
                        <p><b>Country of Origin: </b>{product.country_of_origin}</p>
                        <p><b>Quantity: </b>{product.quantity}</p>
                        
                        <br />
                    </div>
                )
            }

        </div >
    )
}

export default Home





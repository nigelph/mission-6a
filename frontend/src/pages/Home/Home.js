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

    // function handle(e) {
    //     const newData = { ...prod }
    //     newData[e.target.id] = e.target.value
    //     setProd(newData)
    //     console.log(newData)
    // }

    return (
        <div className={style['home-container']}>

            <SearchBanner />

        </div >
    )
}

export default Home
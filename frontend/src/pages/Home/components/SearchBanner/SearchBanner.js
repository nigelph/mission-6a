import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import style from './SearchBanner.module.css'
import SpecialsBanner from '../SpecialsBanner/SpecialsBanner'
import ResultsDisplay from './components/ResultsDisplay/ResultsDisplay'

function SearchBanner() {

    const [getFood, setGetFood] = useState("")
    const [getCategory, setCategory] = useState("")
    const [getAge, setGetAge] = useState("")
    const [getPrice, setGetPrice] = useState("")
    const [getBrand, setGetBrand] = useState("")

    const [results, setResults] = useState([])

    // Initial Display of all items
    useEffect(() => {
        axios.get(`http://localhost:8080/products`)
            .then((res) => {
                setResults(res.data)
            })
    }, [])

    // SEARCH DOG
    function clickGetDog() {
        axios.get(`http://localhost:8080/pet/Dog`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH CAT
    function clickGetCat() {
        axios.get(`http://localhost:8080/pet/Cat`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH FISH
    function clickGetFish() {
        axios.get(`http://localhost:8080/pet/Fish`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH BUNNY
    function clickGetBunny() {
        axios.get(`http://localhost:8080/pet/Bunny`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH BIRD
    function clickGetBird() {
        axios.get(`http://localhost:8080/pet/Bird`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH TURTLE
    function clickGetTurtle() {
        axios.get(`http://localhost:8080/pet/Turtle`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH HORSE
    function clickGetHorse() {
        axios.get(`http://localhost:8080/pet/Horse`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH HUMAN
    function clickGetHuman() {
        axios.get(`http://localhost:8080/pet/Human`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    //// START - FILTER FUNCTIONS ////////////////////////////////////////////

    // FILTER FOOD
    function filterFood() {
        document.getElementById("food").innerHTML = getFood;
    }

    // FILTER CATEGORIES
    function filterCategory() {
        document.getElementById("category").innerHTML = getCategory;
    }

    // FILTER AGE
    function filterAge() {
        document.getElementById("age").innerHTML = getAge;
    }

    // FILTER PRICE
    function filterPrice() {
        document.getElementById("price").innerHTML = getPrice;
    }

    // FILTER BRAND
    function filterBrand() {
        document.getElementById("brand").innerHTML = getBrand;
    }

    // GET ALL FILTERS
    function getFilters() {
        document.getElementById("filter").innerHTML = "Final Filter: ";
    }

    //// FINISH - FILTER FUNCTIONS ////////////////////////////////////////////////

    return (
        <div className={style['search-container']}>

            <div className={style['search-container-inner']}> 
                <h3>Shop for your pet, select an icon to begin...</h3>
                <div className={style['flex-container']}>
                    <button onClick={clickGetDog}>Dog</button>
                    <button onClick={clickGetCat}>Cat</button>
                    <button onClick={clickGetFish}>Fish</button>
                    <button onClick={clickGetBunny}>Bunny</button>
                    <button onClick={clickGetBird}>Bird</button>
                    <button onClick={clickGetTurtle}>Turtle</button>
                    <button onClick={clickGetHorse}>Horse</button>
                    <button onClick={clickGetHuman}>Human</button>
                </div>
                <h3>Save time! Search using one or more of the filters below...</h3>
                <div className={style['flex-container']}>
                    <div>
                        <select id="mySelect" onClick={filterFood} onChange={(e) => setGetFood(e.target.value)}>
                            <option>Category</option>
                            <option value="Food">Food</option>
                            <option value="Bowls &amp; Storage" >Bowls &amp; Storage</option>
                            <option value="Health &amp; Well Being">Health &amp; Wellbeing</option>
                            <option value="Grooming &amp; Clippers">Grooming &amp; Clippers</option>
                            <option value="Collars, Leads, Harnesses">Collars, Leads, Harnesses</option>
                            <option value="Housing &amp;; Beds">Housing &amp; Beds</option>
                            <option value="Travel Accessories">Travel Accessories</option>
                            <option value="Clothing, Covers, Blankets">Clothing, Covers, Blankets</option>
                            <option value="Toys &amp; Gifts">Toys &amp; Gifts</option>
                            <option value="For Pet Owners">For Pet Owners</option>
                        </select>
                    </div>
                    <div>
                        <select id="mySelect" onClick={filterCategory} onChange={(e) => setCategory(e.target.value)}>
                            <option>Sub Category</option>
                            <option value="Dry Food">DryFood</option>
                            <option value="Wet Food">Wet Food</option>
                            <option value="Dried Raw Food">Dried Raw Food</option>
                            <option value="Food Toppings">Food Toppings</option>
                            <option value="Milk Replacement">Milk Replacement</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Vet Only Diets">Vet Only Diets</option>
                            <option value="NZ Made Food">NZ Made Food</option>
                        </select>
                    </div>
                    <div>
                        <select id="mySelect" onClick={filterAge} onChange={(e) => setGetAge(e.target.value)}>
                            <option>Pet Age</option>
                            <option value="Newborn">Newborn</option>
                            <option value="Puppy/Kitten">Puppy/Kitten</option>
                            <option value="Young">Young</option>
                            <option value="Adult">Adult</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </div>
                    <div>
                        <select id="mySelect" onClick={filterPrice} onChange={(e) => setGetPrice(e.target.value)}>
                            <option>Price</option>
                            <option value="Hi-Lo">Hi-Lo</option>
                            <option value="Lo-Hi">Lo-Hi</option>
                            <option value="Sale Items">Sale Items</option>
                        </select>
                    </div>
                    <div>
                        <select id="mySelect" onClick={filterBrand} onChange={(e) => setGetBrand(e.target.value)}>
                            <option>Brand</option>
                            <option value="Acana">Acana</option>
                            <option value="Addiction">Addiction</option>
                            <option value="Eukanuba">Eukanuba</option>
                            <option value="Hills Science Diet">Hill's Science Diet</option>
                            <option value="Omega Plus">Omega Plus</option>
                            <option value="Royal Canin">Royal Canin</option>
                            <option value="Royal Canin Veterinary">Royal Canin Veterinary</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={getFilters}>GO FETCH</button>
                    </div>
                </div>
                <div className={style['flex-container-filters']}>
                    <p> You have selected: </p>
                    <p id="food"></p>
                    <p id="category"></p>
                    <p id="age"></p>
                    <p id="price"></p>
                    <p id="brand"></p>
                    <p id="filter"></p>
                </div> 
            </div>

            <SpecialsBanner />
            <ResultsDisplay searchResults={results}/>
            
        </div>

    )
}

export default SearchBanner
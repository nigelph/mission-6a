import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import style from './SearchBanner.module.css'
import SpecialsBanner from '../SpecialsBanner/SpecialsBanner'
import ResultsDisplay from './components/ResultsDisplay/ResultsDisplay'
import Dog from '../../../../assets/dog-icon.png'
import Cat from '../../../../assets/cat-icon.png'
import Fish from '../../../../assets/fish-icon.png'
import Rabbit from '../../../../assets/rabbit-icon.png'
import Bird from '../../../../assets/bird-icon.png'
import Turtle from '../../../../assets/turtle-icon.png'
import Horse from '../../../../assets/horse-icon.png'
import Owner from '../../../../assets/pet-owner-icon.png'

function SearchBanner() {

    const [getPet, setGetPet] = useState()
    const [getCategory, setGetCategory] = useState(null)
    const [getSubCategory, setGetSubCategory] = useState(null)
    const [getAge, setGetAge] = useState(null)
    const [getPrice, setGetPrice] = useState(null)
    const [getBrand, setGetBrand] = useState("")

    const [getSearch, setGetSearch] = useState([])

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
                document.getElementById("select").innerHTML = "You have selected: ";
                document.getElementById("pet").innerHTML = "Dog";
            })
    }

    // SEARCH CAT
    function clickGetCat() {
        axios.get(`http://localhost:8080/pet/Cat`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
                document.getElementById("select").innerHTML = "You have selected: ";
                document.getElementById("pet").innerHTML = "Cat";
            })
    }

    // SEARCH FISH
    function clickGetFish() {
        axios.get(`http://localhost:8080/pet/Fish`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
                document.getElementById("select").innerHTML = "You have selected: ";
                document.getElementById("pet").innerHTML = "Fish";
            })
    }

    // SEARCH BUNNY
    function clickGetBunny() {
        axios.get(`http://localhost:8080/pet/Rabbit`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
                document.getElementById("select").innerHTML = "You have selected: ";
                document.getElementById("pet").innerHTML = "Rabbit";
            })
    }

    // SEARCH BIRD
    function clickGetBird() {
        axios.get(`http://localhost:8080/pet/Bird`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
                document.getElementById("select").innerHTML = "You have selected: ";
                document.getElementById("pet").innerHTML = "Bird";
            })
    }

    // SEARCH TURTLE
    function clickGetTurtle() {
        axios.get(`http://localhost:8080/pet/Turtle`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
                document.getElementById("select").innerHTML = "You have selected: ";
                document.getElementById("pet").innerHTML = "Turtle";
            })
    }

    // SEARCH HORSE
    function clickGetHorse() {
        axios.get(`http://localhost:8080/pet/Horse`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
                document.getElementById("select").innerHTML = "You have selected: ";
                document.getElementById("pet").innerHTML = "Horse";
            })
    }

    // SEARCH HUMAN
    function clickGetHuman() {
        axios.get(`http://localhost:8080/pet/Pet Owner`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
                document.getElementById("select").innerHTML = "You have selected: ";
                document.getElementById("pet").innerHTML = "Pet Owner";
            })
    }

    //// START - FILTER FUNCTIONS ////////////////////////////////////////////

    // FILTER CATEGORY
    function filterCategory() {
        document.getElementById("select").innerHTML = "You have selected: ";
        document.getElementById("food").innerHTML = getCategory;
    }

    // FILTER SUB CATEGORIES
    function filterSubCategory() {
        document.getElementById("select").innerHTML = "You have selected: ";
        document.getElementById("category").innerHTML = getSubCategory;
    }

    // FILTER AGE
    function filterAge() {
        document.getElementById("select").innerHTML = "You have selected: ";
        document.getElementById("age").innerHTML = getAge;
    }

    // FILTER PRICE
    function filterPrice() {
        document.getElementById("select").innerHTML = "You have selected: ";
        document.getElementById("price").innerHTML = getPrice;
    }

    // FILTER BRAND
    function filterBrand() {
        document.getElementById("select").innerHTML = "You have selected: ";
        document.getElementById("brand").innerHTML = getBrand;
    }

    // // GET ALL FILTERS 1
    // function getFilters() {
        
    //     axios.get(`http://localhost:8080/products/filter1/${getCategory}/${getSubCategory}/${getAge}/${getBrand}`)
    //         .then((res) => {
    //             setResults(res.data)
    //             console.log(res.data)
    //             document.getElementById("filter").innerHTML = "Fetching results..."
    //         })
    //         document.getElementById("pet").innerHTML = ""; 
    //         document.getElementById("select").innerHTML = ""; 
    //         setGetCategory(null)
    //         document.getElementById("food").innerHTML = ""; 
    //         setGetSubCategory(null)
    //         document.getElementById("category").innerHTML = ""; 
    //         setGetAge(null)
    //         document.getElementById("age").innerHTML = ""; 
    //         setGetPrice(null)
    //         document.getElementById("price").innerHTML = ""; 
    //         setGetBrand(null)
    //         document.getElementById("brand").innerHTML = ""; 
    // }

    //  // GET ALL FILTERS 2
    //  function getFilters() {
        
    //     axios.get(`http://localhost:8080/products/filter2/${getCategory}/${getSubCategory}/${getAge}/${getBrand}`)
    //         .then((res) => {
    //             setResults(res.data)
    //             console.log(res.data)
    //             document.getElementById("filter").innerHTML = "Fetching results..."
    //         })
    //         document.getElementById("pet").innerHTML = ""; 
    //         document.getElementById("select").innerHTML = ""; 
    //         setGetCategory(null)
    //         document.getElementById("food").innerHTML = ""; 
    //         setGetSubCategory(null)
    //         document.getElementById("category").innerHTML = ""; 
    //         setGetAge(null)
    //         document.getElementById("age").innerHTML = ""; 
    //         setGetPrice(null)
    //         document.getElementById("price").innerHTML = ""; 
    //         setGetBrand(null)
    //         document.getElementById("brand").innerHTML = ""; 
    // }

    // GET ALL FILTERS 3
    function getFilters() {

        axios.get(`http://localhost:8080/products/filter3/${getCategory}/${getBrand}`)
            .then((res) => {
                setResults(res.data)
                //console.log(res.data)
                document.getElementById("filter").innerHTML = "Fetching results..."
            })

            document.getElementById("pet").innerHTML = ""; 
            document.getElementById("select").innerHTML = ""; 
            setGetCategory(null)
            document.getElementById("food").innerHTML = ""; 
            setGetSubCategory(null)
            document.getElementById("category").innerHTML = ""; 
            setGetAge(null)
            document.getElementById("age").innerHTML = ""; 
            setGetPrice(null)
            document.getElementById("price").innerHTML = ""; 
            setGetBrand(null)
            document.getElementById("brand").innerHTML = ""; 
    }

    //// FINISH - FILTER FUNCTIONS ////////////////////////////////////////////////

    return (
        <div className={style['search-container']}>

            <div className={style['search-container-inner']}> 
                <h3>Shop for your pet, select an icon to begin...</h3>
                <div className={style['flex-container']}>
                    <button onClick={clickGetDog}><img src={Dog} className={style['icon-img']} alt="For Dog Owners" /></button>
                    <button onClick={clickGetCat}><img src={Cat} className={style['icon-img']} alt="For cat Owners" /></button>
                    <button onClick={clickGetFish}><img src={Fish} className={style['icon-img']} alt="For Fish Owners" /></button>
                    <button onClick={clickGetBunny}><img src={Rabbit} className={style['icon-img']} alt="For Rabbit Owners" /></button>
                    <button onClick={clickGetBird}><img src={Bird} className={style['icon-img']} alt="For Bird Owners" /></button>
                    <button onClick={clickGetTurtle}><img src={Turtle} className={style['icon-img']} alt="For Turtle Owners" /></button>
                    <button onClick={clickGetHorse}><img src={Horse} className={style['icon-img']} alt="For Horse Owners" /></button>
                    <button onClick={clickGetHuman}><img src={Owner} className={style['icon-img']} alt="For Pet Owners" /></button>
                </div>
                <h3>Save time! Search using one or more of the filters below...</h3>
                <div className={style['flex-container']}>
                    <div>
                        <select id="mySelect" onClick={filterCategory} onChange={(e) => setGetCategory(e.target.value)}>
                            <option>Category</option>
                            <option>Food</option>
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
                        <select id="mySelect" onClick={filterSubCategory} onChange={(e) => setGetSubCategory(e.target.value)}>
                            <option>Sub Category</option>
                            <option value="Dry Food">Dry Food</option>
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
                            <option value="Puppy">Puppy/Kitten</option>
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
                            <option value="Good Owner">Good Owner</option>
                        </select>
                    </div>
                    <div>
                        <button className={style['filter-button']} onClick={getFilters}><b>GO FETCH</b></button>
                    </div>
                </div>
                <div className={style['flex-container-filters']}>
                    <p id="select"></p>
                    <p id="pet"></p>
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
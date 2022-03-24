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

    const [getCategory, setGetCategory] = useState()
    const [getSubCategory, setGetSubCategory] = useState()
    const [getAge, setGetAge] = useState()
    const [getPrice, setGetPrice] = useState()
    const [getBrand, setGetBrand] = useState()

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

        document.getElementById("button1").style.background = "#F21D2F";
        document.getElementById("button2").style.background = "#E4E4E4";
        document.getElementById("button3").style.background = "#E4E4E4";
        document.getElementById("button4").style.background = "#E4E4E4";
        document.getElementById("button5").style.background = "#E4E4E4";
        document.getElementById("button6").style.background = "#E4E4E4";
        document.getElementById("button7").style.background = "#E4E4E4";
        document.getElementById("button8").style.background = "#E4E4E4";


        axios.get(`http://localhost:8080/pet/Dog`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH CAT
    function clickGetCat() {

    document.getElementById("button1").style.background = "#E4E4E4";
    document.getElementById("button2").style.background = "#F21D2F";
    document.getElementById("button3").style.background = "#E4E4E4";
    document.getElementById("button4").style.background = "#E4E4E4";
    document.getElementById("button5").style.background = "#E4E4E4";
    document.getElementById("button6").style.background = "#E4E4E4";
    document.getElementById("button7").style.background = "#E4E4E4";
    document.getElementById("button8").style.background = "#E4E4E4";

        axios.get(`http://localhost:8080/pet/Cat`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH FISH
    function clickGetFish() {

        document.getElementById("button1").style.background = "#E4E4E4";
        document.getElementById("button2").style.background = "#E4E4E4";
        document.getElementById("button3").style.background = "#F21D2F";
        document.getElementById("button4").style.background = "#E4E4E4";
        document.getElementById("button5").style.background = "#E4E4E4";
        document.getElementById("button6").style.background = "#E4E4E4";
        document.getElementById("button7").style.background = "#E4E4E4";
        document.getElementById("button8").style.background = "#E4E4E4";

        axios.get(`http://localhost:8080/pet/Fish`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH BUNNY
    function clickGetBunny() {

        document.getElementById("button1").style.background = "#E4E4E4";
        document.getElementById("button2").style.background = "#E4E4E4";
        document.getElementById("button3").style.background = "#E4E4E4";
        document.getElementById("button4").style.background = "#F21D2F";
        document.getElementById("button5").style.background = "#E4E4E4";
        document.getElementById("button6").style.background = "#E4E4E4";
        document.getElementById("button7").style.background = "#E4E4E4";
        document.getElementById("button8").style.background = "#E4E4E4";

        axios.get(`http://localhost:8080/pet/Rabbit`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH BIRD
    function clickGetBird() {

        document.getElementById("button1").style.background = "#E4E4E4";
        document.getElementById("button2").style.background = "#E4E4E4";
        document.getElementById("button3").style.background = "#E4E4E4";
        document.getElementById("button4").style.background = "#E4E4E4";
        document.getElementById("button5").style.background = "#F21D2F";
        document.getElementById("button6").style.background = "#E4E4E4";
        document.getElementById("button7").style.background = "#E4E4E4";
        document.getElementById("button8").style.background = "#E4E4E4";

        axios.get(`http://localhost:8080/pet/Bird`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH TURTLE
    function clickGetTurtle() {

        document.getElementById("button1").style.background = "#E4E4E4";
        document.getElementById("button2").style.background = "#E4E4E4";
        document.getElementById("button3").style.background = "#E4E4E4";
        document.getElementById("button4").style.background = "#E4E4E4";
        document.getElementById("button5").style.background = "#E4E4E4";
        document.getElementById("button6").style.background = "#F21D2F";
        document.getElementById("button7").style.background = "#E4E4E4";
        document.getElementById("button8").style.background = "#E4E4E4";

        axios.get(`http://localhost:8080/pet/Turtle`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH HORSE
    function clickGetHorse() {

        document.getElementById("button1").style.background = "#E4E4E4";
        document.getElementById("button2").style.background = "#E4E4E4";
        document.getElementById("button3").style.background = "#E4E4E4";
        document.getElementById("button4").style.background = "#E4E4E4";
        document.getElementById("button5").style.background = "#E4E4E4";
        document.getElementById("button6").style.background = "#E4E4E4";
        document.getElementById("button7").style.background = "#F21D2F";
        document.getElementById("button8").style.background = "#E4E4E4";

        axios.get(`http://localhost:8080/pet/Horse`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // SEARCH HUMAN
    function clickGetHuman() {

        document.getElementById("button1").style.background = "#E4E4E4";
        document.getElementById("button2").style.background = "#E4E4E4";
        document.getElementById("button3").style.background = "#E4E4E4";
        document.getElementById("button4").style.background = "#E4E4E4";
        document.getElementById("button5").style.background = "#E4E4E4";
        document.getElementById("button6").style.background = "#E4E4E4";
        document.getElementById("button7").style.background = "#E4E4E4";
        document.getElementById("button8").style.background = "#F21D2F";

        axios.get(`http://localhost:8080/pet/Pet Owner`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
            })
    }

    // // GET ALL FILTERS 1
    function applyFilters() {
        
        axios.get(`http://localhost:8080/products/filter1/${getCategory}/${getSubCategory}/${getAge}/${getBrand}`)
            .then((res) => {
                setResults(res.data)
                console.log(res.data)
                document.getElementById("filter").innerHTML = "Fetching results..."
            })
    }

    return (
        <div className={style['search-container']}>

            <div className={style['search-container-inner']}> 
                <h3>Shop for your pet, select an icon to begin...</h3>
                <div className={style['flex-container']}>
                    <button id="button1" className={style['specButton active']} onClick={clickGetDog}><img id="myImage" src={Dog} className={style['icon-img']} alt="For Dog Owners" /></button>
                    <button id="button2" className={style['specButton']} onClick={clickGetCat}><img src={Cat} className={style['icon-img']} alt="For cat Owners" /></button>
                    <button id="button3" onClick={clickGetFish}><img src={Fish} className={style['icon-img']} alt="For Fish Owners" /></button>
                    <button id="button4" onClick={clickGetBunny}><img src={Rabbit} className={style['icon-img']} alt="For Rabbit Owners" /></button>
                    <button id="button5" onClick={clickGetBird}><img src={Bird} className={style['icon-img']} alt="For Bird Owners" /></button>
                    <button id="button6" onClick={clickGetTurtle}><img src={Turtle} className={style['icon-img']} alt="For Turtle Owners" /></button>
                    <button id="button7" onClick={clickGetHorse}><img src={Horse} className={style['icon-img']} alt="For Horse Owners" /></button>
                    <button id="button8" onClick={clickGetHuman}><img src={Owner} className={style['icon-img']} alt="For Pet Owners" /></button>
                </div>
                <h3>Save time! Search using one or more of the filters below...</h3>
                <div className={style['flex-container']}>
                    <div className={style['filter-container']}>
                        <select id="mySelect" onClick={(e) => setGetCategory(e.target.value)}>
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
                    <div className={style['filter-container']}>
                        <select id="mySelect" onClick={(e) => setGetSubCategory(e.target.value)}>
                            <option>Sub Category</option>
                            <option value="Dry Food">Dry Food</option>
                            <option value="Wet Food">Wet Food</option>
                            <option value="Dried Raw Food">Dried Raw Food</option>
                            <option value="Food Toppings">Food Toppings</option>
                            <option value="Milk Replacement">Milk Replacement</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Vet Only Diets">Vet Only Diets</option>
                            <option value="Health &amp; Specialty ">Health &amp; Specialty</option>
                            <option value="NZ Made Food">NZ Made Food</option>
                        </select>
                    </div>
                    <div id={style['filter-container']}>
                        <select id="mySelect" onClick={(e) => setGetAge(e.target.value)}>
                            <option>Pet Age</option>
                            <option value="Newborn">Newborn</option>
                            <option value="Puppy">Puppy/Kitten</option>
                            <option value="Young">Young</option>
                            <option value="Adult">Adult</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </div>
                    <div className={style['filter-container']}>
                        <select id="mySelect" onClick={(e) => setGetPrice(e.target.value)}>
                            <option>Price</option>
                            <option value="Hi-Lo">Hi-Lo</option>
                            <option value="Lo-Hi">Lo-Hi</option>
                            <option value="Sale Items">Sale Items</option>
                        </select>
                    </div>
                    <div className={style['filter-container']}>
                        <select id="mySelect" onClick={(e) => setGetBrand(e.target.value)}>
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
                        <button className={style['filter-button']} onClick={applyFilters}><b>GO FETCH</b></button>
                    </div>
                </div>
                <div className={style['flex-container-filters']}>
                    <p id="filter"></p>
                </div> 
            </div>

            <SpecialsBanner />
            <ResultsDisplay searchResults={results}/>

        </div>

    )
}

export default SearchBanner
import React from 'react'
import style from './ResultsDisplay.module.css'
import DogPlaceholder from '../../../../../../assets/dog-placeholder.png'
import CatPlaceholder from '../../../../../../assets/cat-placeholder.jpeg'
import FishPlaceholder from '../../../../../../assets/fish-placeholder.jpeg'
import RabbitPlaceholder from '../../../../../../assets/rabbit-placeholder.jpeg'
import BirdPlaceholder from '../../../../../../assets/bird-placeholder.png'
import TurtlePlaceholder from '../../../../../../assets/turtle-placeholder.jpeg'
import HorsePlaceholder from '../../../../../../assets/horse-placeholder.jpeg'
import OwnerPlaceholder from '../../../../../../assets/owner-placeholder.jpeg'
import Petstock from '../../../../../../assets/petstock-logo.png'
import Paw from '../../../../../../assets/paw-icon.jpg'

function ResultsDisplay(props) {

    const results = props.searchResults

    console.log(results)

    return (


        <div className={style['display-container']}>
            <div className={style['sidebar-container']}>
                <div className={style['blog-container']}>
                    <div className={style['blog-header']}><img src={Paw} id={style['paw-img']} alt="Pet Paw" />
                    <h3><a id={style['blog-link']} target="_blank" rel="noreferrer" href="https://www.pet.co.nz/blog"> FROM THE 
                    <span id={style['blog-header']}><b> BLOG</b></span></a></h3></div> 
                    <div>
                        <ul className={style['list-body']}>
                            <li><a href="https://blog.pet.co.nz/bird/a-basic-guide-to-pet-budgies" target="_blank" rel="noreferrer">A Basic Guide to Pet Budgies</a></li>
                            <hr></hr>
                            <li><a href="https://blog.pet.co.nz/dog/keep-your-dog-cool-this-summer" target="_blank" rel="noreferrer">How to Cool Down Your Dog and Prevent Them From Overheating</a></li>
                            <hr></hr>
                            <li><a href="https://blog.pet.co.nz/dog/dental-care-for-your-pet" target="_blank" rel="noreferrer">5 Ways To CLean Your Dogs Teeth At Home</a></li>
                            <hr></hr>
                            <li><a href="https://blog.pet.co.nz/dog/how-to-choose-the-best-harness-for-your-dog" target="_blank" rel="noreferrer">How to Choose the Best Dog Harness</a></li>
                            <hr></hr>
                            <li><a href="https://blog.pet.co.nz/dog/how-to-stop-your-dog-from-pulling-on-the-lead" target="_blank" rel="noreferrer">How to Stop Your Dog From Pulling on the Lead</a></li>
                            <hr></hr>
                            <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Become a Full-Stack Developer</a></li>
                            <hr></hr>
                            <li><a href="https://blog.pet.co.nz/dog/dog-friendly-beaches-in-auckland" target="_blank" rel="noreferrer">Dog-Friendly Beaches in Auckland</a></li>
                            <hr></hr>
                            <li><a href="https://blog.pet.co.nz/dog/a-product-guide-for-travelling-with-a-dog-in-the-car" target="_blank" rel="noreferrer">A Product Guide for Travelling with a Dog in the Car</a></li>
                        </ul>
                    </div>
                    <h4><a id={style['blog-link2']} href="https://blog.pet.co.nz" target="_blank" rel="noreferrer">More Blog Posts <b>>></b></a></h4>
                </div>
                <section>
                    <h3 id={style['add-title']}>Vet Only Products</h3>
                    <h3 id={style['add-title2']}>availible online now</h3>
                    <img src={Petstock} id={style['petstock-img']} alt="Placeholder" />
                </section>
                
            

            </div>


            <div className={style['results-container']}> 
            
                {
                    results.map(result => {

                        if (result.pet_type === 'Dog') {
                            return <div className={style['results-card']}>
                                <img src={DogPlaceholder} id={style['placeholder-img']} alt="Placeholder" />
                                <p><h3>{result.product_name}</h3></p>
                                <p>from <b>{result.brand}</b></p>
                                <p>{result.description}</p>
                                <p><h2>{`$${result.price}`}</h2></p>
                                <br />
                            </div>
                        } if (result.pet_type === 'Cat') {
                            return <div className={style['results-card']}>
                                <img src={CatPlaceholder} id={style['placeholder-img']} alt="Placeholder" />
                                <p><h3>{result.product_name}</h3></p>
                                <p>from <b>{result.brand}</b></p>
                                <p>{result.description}</p>
                                <p><h2>{`$${result.price}`}</h2></p>
                                <br />
                            </div>
                        } if (result.pet_type === 'Fish') {
                            return <div className={style['results-card']}>
                                <img src={FishPlaceholder} id={style['placeholder-img']} alt="Placeholder" />
                                <p><h3>{result.product_name}</h3></p>
                                <p>from <b>{result.brand}</b></p>
                                <p>{result.description}</p>
                                <p><h2>{`$${result.price}`}</h2></p>
                                <br />
                            </div>
                        } if (result.pet_type === 'Rabbit') {
                            return <div className={style['results-card']}>
                                <img src={RabbitPlaceholder} id={style['placeholder-img']} alt="Placeholder" />
                                <p><h3>{result.product_name}</h3></p>
                                <p>from <b>{result.brand}</b></p>
                                <p>{result.description}</p>
                                <p><h2>{`$${result.price}`}</h2></p>
                                <br />
                            </div>
                        } if (result.pet_type === 'Bird') {
                            return <div className={style['results-card']}>
                                <img src={BirdPlaceholder} id={style['placeholder-img']} alt="Placeholder" />
                                <p><h3>{result.product_name}</h3></p>
                                <p>from <b>{result.brand}</b></p>
                                <p>{result.description}</p>
                                <p><h2>{`$${result.price}`}</h2></p>
                                <br />
                            </div>
                        } if (result.pet_type === 'Turtle') {
                            return <div className={style['results-card']}>
                                <img src={TurtlePlaceholder} id={style['placeholder-img']} alt="Placeholder" />
                                <p><h3>{result.product_name}</h3></p>
                                <p>from <b>{result.brand}</b></p>
                                <p>{result.description}</p>
                                <p><h2>{`$${result.price}`}</h2></p>
                                <br />
                            </div>
                        } if (result.pet_type === 'Horse') {
                            return <div className={style['results-card']}>
                                <img src={HorsePlaceholder} id={style['placeholder-img']} alt="Placeholder" />
                                <p><h3>{result.product_name}</h3></p>
                                <p>from <b>{result.brand}</b></p>
                                <p>{result.description}</p>
                                <p><h2>{`$${result.price}`}</h2></p>
                                <br />
                            </div>
                        } if (result.pet_type === 'Pet Owner') {
                            return <div className={style['results-card']}>
                                <img src={OwnerPlaceholder} id={style['placeholder-img']} alt="Placeholder" />
                                <p><h3>{result.product_name}</h3></p>
                                <p>from <b>{result.brand}</b></p>
                                <p>{result.description}</p>
                                <p><h2>{`$${result.price}`}</h2></p>
                                <br />
                            </div>
                        }
            
                    }
                        
                    )
                }
            
            </div>
            
        </div>
        
    )
}

export default ResultsDisplay
import React from 'react'
import style from './ResultsDisplay.module.css'



function ResultsDisplay(props) {

    const results = props.searchResults

    console.log(results)

    return (


        <div className={style['results-container']}>
            
            {
                results.map(result =>
                    <div style={{ textAlign: 'left' }}>
                        <p><b>Pet Type: </b>{result.pet_type}</p>
                        <p><b>Product Category: </b>{result.product_cat}</p>
                        <p><b>Product Price: </b>{`$${result.price}`}</p>
                        <p><b>Product Brand: </b>{result.product_brand}</p>
                        <p><b>Pet Age: </b>{result.pet_age}</p>
                        <p><b>Product Name: </b>{result.product_name}</p>
                        <p><b>Product Description: </b> {result.product_desc}</p>
                        <p><b>Country of Origin: </b>{result.country_of_origin}</p>
                        <p><b>Quantity: </b>{result.quantity}</p>
                        
                        <br />
                    </div>
                )
            }

        </div>
        
    )
}

export default ResultsDisplay
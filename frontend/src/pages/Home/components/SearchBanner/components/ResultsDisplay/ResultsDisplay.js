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
                        <p><b>Product Category: </b>{result.category}</p>
                        <p><b>Product Sub-Category: </b>{result.sub_category}</p>
                        <p><b>Pet Type: </b>{result.pet_type}</p>
                        <p><b>Pet Age: </b>{result.pet_age}</p>
                        <p><b>Product Brand: </b>{result.brand}</p>
                        <p><b>Product Name: </b>{result.product_name}</p>
                        <p><b>Product Price: </b>{`$${result.price}`}</p>
                        <p>{result.image}</p>
                        <p><b>Product Description: </b> {result.description}</p>
                        
                        <br />
                    </div>
                )
            }

        </div>
        
    )
}

export default ResultsDisplay
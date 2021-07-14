
import React from 'react';
import '../styles/App.scss';



const Itemcontainer = (props) => {

    
    return (


        <div  style= {{backgroundImage: `url( ${props.url} )`}} class="item-container">
            <div   class="item" >
                <h3 class="title">{props.title}</h3>
                <span class="buy-now">Buy Now</span>
            </div>
        </div>
    )

}

export default Itemcontainer
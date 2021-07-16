
import React from 'react';
import './item-container.scss';
import { withRouter } from 'react-router';




const Itemcontainer = (props) => {


    return (


        <div  class="item-container" onClick={()=> props.history.push(`${props.match.url}${'collection/'}${props.title}`)}>
            <div style={{ backgroundImage: `url( ${props.url} )` }} class="background-image"></div>
            <div class="item" >
                <h3 class="title">{props.title.toUpperCase()}</h3>
                <span class="subtitle">Buy Now</span>
            </div>
        </div>
    )

}

export default  withRouter(Itemcontainer);
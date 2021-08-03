
import React from 'react';
import './item-container.scss';
import { withRouter } from 'react-router';




const Itemcontainer = (props) => {


    return (


        <div  className="item-container" onClick={()=> props.history.push(`${props.match.url}${'collection/'}${props.title}`)}>
            <div style={{ backgroundImage: `url( ${props.url} )` }} className="background-image"></div>
            <div className="item" >
                <h3 className="title">{props.title.toUpperCase()}</h3>
                <span className="subtitle">Buy Now</span>
            </div>
        </div>
    )

}

export default  withRouter(Itemcontainer);
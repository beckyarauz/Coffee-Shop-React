import React from 'react';
import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <div className="MenuItem">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div>${props.price}</div>
        </div>
        
    );
}

export default MenuItem;
import React from 'react';

const Item = props => {
    return (
        <div classname="item-card">
            <h3><span><img className="icon" src={require('../images/favicon.ico').default} alt="icon" /></span>Item Title</h3>
            <img src={require('../images/stationery.png').default} alt='description'/>           
            <p>Description</p>
            <a href="www.google.com">Item Link</a>
            
        </div>
    );
};


export default Item;
import React from "react";

function Products(props) {
    return(
        <div>
        <img alt={props.name} src={props.imgURL}/>
        <h3></h3> {props.name}
        <p></p> {props.description}
        <p></p> {props.price}
        </div>
    )
}

export default Products;
import React from 'react'








export default function Product(props){
    return(     
        <div>
            <div>{props.listitem.name}</div>
            <div>{props.listitem.price}</div>
            <div><img src={props.listitem.imgurl}/></div>
        </div>
    )
}
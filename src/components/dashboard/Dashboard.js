import React, {Component} from 'react';
import Product from './../product/Product'

class Dashboard extends Component{
    constructor(props){
        super(props)


    }
    render(){
        console.log(this.props.list)
        return(
            <div>
                <div>this is dashboard</div>
                <div>
                {this.props.list.map((x,i)=><Product key={i} listitem={x} index={i}/>)}
                </div>
                
            </div>
        )
    }
}


export default Dashboard
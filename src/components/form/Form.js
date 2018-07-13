import React, {Component} from 'react';


class Form extends Component{
    constructor(){
        super()
        this.state={
            input1:"",
            input2:"",
            input3:""
        }

    }

    changeHandler1(val){
        this.setState({input1:val})
    }
    changeHandler2(val){
        this.setState({input2:val})
    }
    changeHandler3(val){
        this.setState({input3:val})
    }
    resetState1(){
        this.setState({input1:""})
    }
    resetState2(){
        this.setState({input2:""})
    }
    resetState3(){
        this.setState({input3:""})
    }

    render(){
        return(
            <div>
                <div>
                    <input onChange={(e)=>this.changeHandler1(e.target.value)}/>
                    <button onClick={()=>this.resetState1()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
                <div>
                    <input onChange={(e)=>this.changeHandler2(e.target.value)}/>
                    <button onClick={()=>this.resetState2()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
                <div>
                    <input onChange={(e)=>this.changeHandler3(e.target.value)}/>
                    <button onClick={()=>this.resetState3()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}






export default Form
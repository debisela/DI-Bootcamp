import React, { Component } from 'react';

class BuggyCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = { counter:0};
    }

    handleClick=()=>{
        this.setState(({counter})=>{
            if (counter >= 5){
                throw new Error('I crashed!');
            }
        return {counter: counter +1};
        })
    }
    

    render(){
        return(
        <>
        <button onClick={this.handleClick}>{this.state.counter}</button>
        
        </>
    );
}
}
export default BuggyCounter;
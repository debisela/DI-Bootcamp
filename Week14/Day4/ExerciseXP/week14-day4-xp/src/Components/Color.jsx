import React, { useEffect, useState } from 'react';

class Color extends React.Component {
    constructor(props){
        super(props);
        this.state={
            color:"red",
        show: true}
    }
// const [favoriteColor, setFavoriteColor] = useState('red')

// useEffect(() => {
//     alert('useEffect reached');
// });

shouldComponentUpdate(nextProps, nextState){
    return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("in getSnapshotBeforeUpdate");
    return null
    
}

componentDidMount(){
    setTimeout(()=>{
        this.setState({color:"yellow"})
    }, 1000)
   
}

componentDidUpdate(){
    console.log("after update");
}

changeColor= ()=>{
    this.setState({color:"blue"})
}

deleteChild = ()=>{
    this.setState({show: false})
}


render(){
return(
    <>
    <h1>My favorite color is {this.state.color}</h1>
    <button
    type="button"
    onClick={this.changeColor}
>Change color</button>
{this.state.show&& <Child/>}
<button
    type="button"
    onClick={this.deleteChild}
>delete</button>

    </>
)
}
}

class Child extends React.Component {
    componentWillUnmount(){
        alert('unmounted');
    }

    render(){
        return <h1>Hello World</h1>
    }

}



export default Color
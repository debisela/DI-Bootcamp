import React from "react";

class ErrorBoundary extends React.Component{
    constructor(){
        super()
        this.state = {
            hasError: false
        }
    }

componentDidCatch = (error, errorInfo)=>{
    console.log(error, errorInfo);
    this.setState({hasError:true})
    
}


render(){
if (this.state.hasError) return <div>error occured</div>
return this.props.children;
}

}

export default ErrorBoundary
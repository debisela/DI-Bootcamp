import React, { useEffect, useState } from 'react';


class Example1 extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        
    }

    render(){
        return(
            <>
            <h2>Social media:</h2>
            <div>{this.props.data.SocialMedias.map((item)=>(
                <div>
                    <ul>
                    <li>{item}</li>
                    </ul>
                </div>
            ))}
            
            </div>
            </>
        )
    }
}

export default Example1
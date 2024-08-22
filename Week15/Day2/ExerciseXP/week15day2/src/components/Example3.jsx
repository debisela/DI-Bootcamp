import React, { useEffect, useState } from 'react';


class Example3 extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        
    }

    render(){
        return(
            <>
            <h2>Experience:</h2>
            <div>{this.props.data.Experiences.map((item, index)=>(
                <div key={index}>
                    <h3>Company: {item.companyName}</h3>
                        <div>
                    {item.roles.map((item, index)=>(
                        <div key={index}>
                            <h3>Role: {item.title}</h3>
                            <h4>Description: {item.description}</h4>
                            </div>
                    ))}
                    </div>
                </div>
            ))}
            
            </div>
            </>
        )
    }
}

export default Example3
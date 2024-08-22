import React, { useEffect, useState } from 'react';


class Example2 extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    showSkillset=(answer)=>{
        if(answer){
            return "yes"}
        else {return "no";}
}
  

    render(){
        return(
            <>
            <h2>Skills:</h2>
            <div>{this.props.data.Skills.map((item)=>(
                <div>
                    <h3>Area: {item.Area}</h3>
                    <ul>{item.SkillSet.map((item)=>(
                        <li>{item.Name}: {this.showSkillset(item.Hot)}</li>
                    ))}</ul>
                </div>
            ))}
            
            </div>
            </>
        )
    }
}


export default Example2
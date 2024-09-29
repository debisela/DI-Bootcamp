import { ReactElement } from "react";

interface UserCardProps{
    name?:string,
    age?:number,
}

const UserCard = ({name,age}:UserCardProps):ReactElement=>{
    return(
        <>
        <h2>{name?name:"Mr. X"} is {age !== undefined? age:"of undefined age"} years old</h2>
        </>
    )
}

export default UserCard;

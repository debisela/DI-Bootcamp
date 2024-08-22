import React from "react";


const PostList = ({data})=>{
   console.log(data);
   

return(
<>
{data.map((item)=>(
    <div key={item.id}>
    <h3>{item.title}</h3>
    <p>{item.content}</p>
    </div>
    ))}
</>

)

}

export default PostList;
import React, {useState, useEffect} from "react";

//fetch from: https://jsonplaceholder.typicode.com/posts

interface Post {
    id: number,
    title: string,
    body: string
}

const Fetch:React.FC = ()=>{

const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState<boolean>(true)
const [error, setError] = useState<string | null>(null)

useEffect(()=>{
    const fetchPosts = async()=>{
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!res.ok){
                throw new Error('error fetching posts')
            }
            const data:Post[] = await res.json();
            setPosts(data);
        } catch (error:any) {
            setError(error.message)
            
        }finally{
            setLoading(false);
        }
    }
    fetchPosts()
}, [])
if (loading){
    return<div>Loading posts...</div>
}
if (error){
    return<div>Error: {error}</div>
}

return(
    <>
    <h2>Posts:</h2>
    <div>
        {posts.map((item)=>(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        ))}
    </div>
    </>
)


}

export default Fetch;
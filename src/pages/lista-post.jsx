import axios from "axios"
import { useState, useEffect } from "react"
import Navbar from "../components/navbar"



function Posts(){
    const [posts, setPosts] = useState([])

    function fetchPosts() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data))
        .catch((error) => console.error("errore durante il caricamento", error))
    }

    useEffect(fetchPosts, [])

    return(
        <>
        <h1>tutti nostri post</h1>
        <Navbar/>

        <p>lista post</p>

        <ul>

            {posts.map((post) => (
            <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>

            </li>



         ))}

        </ul>

       
        </>
    )

}

export default Posts
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/navbar"



function Posts() {
    const [posts, setPosts] = useState([])

    function fetchPosts() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setPosts(res.data))
            .catch((error) => console.error("errore durante il caricamento", error))
    }

    useEffect(fetchPosts, []) // significa: soltanto quando monto questo componente, avviene la chiamata.

    return (
        <>
            <h1>tutti nostri post</h1>


            <p>lista post</p>

            <ol>

                {posts.map((post) => (
                    <li key={post.id}>

                        <Link to={"/lista-post/" + post.id}><h3>{post.title}</h3></Link>


                    </li>



                ))}

            </ol>


        </>
    )

}

export default Posts
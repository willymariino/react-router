import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"



function Posts() {
    const [posts, setPosts] = useState([])

    function fetchPosts() {
        axios.get("https://www.dnd5eapi.co/api/monsters")
            .then((res) => setPosts(res.data.results))
            .catch((error) => console.error("errore durante il caricamento", error))
    }

    useEffect(fetchPosts, []) // significa: soltanto quando monto questo componente, avviene la chiamata.

    return (
        <>
            <h1>tutti nostri post</h1>


            <p>lista mostri Dungeons & Dragons</p>

            <ol>

                {posts.map((post) => (
                    <li key={post.index}>

                        <Link to={"/lista-post/" + post.index}><h3>{post.name}</h3></Link>


                    </li>



                ))}

            </ol>


        </>
    )

}

export default Posts
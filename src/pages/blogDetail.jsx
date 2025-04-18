import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function BlogDetail() {

    const [post, setPost] = useState(null)
    const { id } = useParams()

    function getPost() {
        axios.get("https://www.dnd5eapi.co/api/monsters/" + id)
            .then((res) => {
                console.log("dati ricevuti", res.data)
                setPost(res.data)
            })
            .catch((error) => console.error("errore durante il caricamento", error))
        console.log("chiamata Api")
        console.log(id)

    }

    useEffect(getPost, [id]) // come fare una chiamata API al caricamento della pagina(montaggio del componente):useEffect

    return (
        <>
            <h1>monster detail</h1>
            <p>descrizione</p>

        </>
    )
}

export default BlogDetail
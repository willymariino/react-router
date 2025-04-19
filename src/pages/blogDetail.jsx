import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function BlogDetail() {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    function getPost() {
        setLoading(true)
        axios.get("https://www.dnd5eapi.co/api/monsters/" + id)
            .then((res) => {
                console.log("dati ricevuti", JSON.stringify(res.data, null, 2))
                setPost(res.data)
                setLoading(false)
            })
            .catch((error) => console.error("errore durante il caricamento", error))
        console.log("chiamata Api")
        console.log(id)

    }

    useEffect(getPost, [id]) // come fare una chiamata API al caricamento della pagina(montaggio del componente):useEffect

    if (loading) {
        return (
            <div>caricamento in corso</div>
        )
    }

    return (
        <>
            <h1>monster detail</h1>
            <div className="card">

                <div className="image-container">
                    <img src={`https://www.dnd5eapi.co${post.image}`} alt={post.name} />
                </div>

                <div className="text-container">
                    <p>name: {post.name}</p>
                    <p> size: {post.size}</p>
                    <p> type: {post.type}</p>
                    <p> alignment: {post.alignment}</p>

                    <p>Armor Class</p>
                    <ul>
                        {post.armor_class.map((armor, index) => (
                            <li key={index}>{armor.type}: {armor.value}</li>
                        )

                        )}


                    </ul>

                    <h2>attributes</h2>
                    <p> strenght: {post.strength} </p>
                    <p> dexterity:{post.dexterity}</p>
                    <p> constitution: {post.constitution}</p>
                    <p>  intelligence: {post.intelligence} </p>
                    <p> wisdom: {post.wisdom} </p>
                    <p> charisma: {post.charisma}</p>
                </div>
            </div>
        </>
    )
}

export default BlogDetail
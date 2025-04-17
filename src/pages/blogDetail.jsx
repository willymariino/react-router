import { Link, useParams } from "react-router-dom"
function BlogDetail() {

    const { id } = useParams()


    return (
        <>
            <h1>post Detail</h1>
            <p>sono il dettaglio del post</p>

        </>
    )
}

export default BlogDetail
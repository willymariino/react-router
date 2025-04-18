import { Link, useParams } from "react-router-dom"
function BlogDetail() {

    const { id } = useParams()


    return (
        <>
            <h1>monster detail</h1>
            <p>descrizione</p>

        </>
    )
}

export default BlogDetail
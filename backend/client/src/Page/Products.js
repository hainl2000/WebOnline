import { useParams } from "react-router-dom"

export const ProductById = () => {
    const { id } = useParams()

    return (
        <div>
            {id}
        </div>
    )
}
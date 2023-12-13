import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button} from "reactstrap"

const CatShow = ({ cats, deleteCat }) => {
    const navigate = useNavigate()

    const { id } = useParams()
        let currentCat = cats?.find((cat) => cat.id === +id)

    const handleEdit = () => {
        navigate(`/catedit/${currentCat.id}`)
    }

    const handleEditBack = () => {
        navigate('/catindex')
    }

    const handleDeleteBack = () => {
        deleteCat(currentCat.id)
        navigate('/catindex')
    }

    return (
        <main className="cat-show-cards">
            {currentCat && (
                <>
                <img 
                alt={`profile of a cat named ${currentCat.name}`}
                src={currentCat.image}
                className="cat-show-img"
                />
                <div className='cat-show-text'>
                    <h1>{currentCat.name}, <span>Age {currentCat.age}</span></h1>
                    <h2>Enjoys: </h2>
                    <h3>{currentCat.enjoys}</h3>
                    <Button onClick={handleEdit} name="edit">Edit</Button>         
                    <Button onClick={handleEditBack} name="edit">Back</Button>
                </div>
                    <Button onClick={handleDeleteBack}>Delete</Button>
                </>
            )}
        </main>
    )
}

export default CatShow
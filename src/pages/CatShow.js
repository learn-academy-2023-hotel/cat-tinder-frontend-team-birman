import React from 'react'
import { useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {
    const { id } = useParams()
        let currentCat = cats?.find((cat) => cat.id === +id)

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
                </div>
                </>
            )}
        </main>
    )
}

export default CatShow
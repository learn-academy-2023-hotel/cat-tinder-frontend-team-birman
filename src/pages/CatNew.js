import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button} from "reactstrap"
import { useNavigate } from 'react-router-dom'

const CatNew = ({ createCat }) => {

    const navigate = useNavigate()

    const [newCat, setNewCat] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewCat({...newCat, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        createCat(newCat)
        navigate("/catindex")
    }

    const handleBack = () => {
        navigate("/catindex")
    }

    return (
    <div className="cat-new-form">
        <h1>New Mew Profile</h1>
    <Form>
        <FormGroup className="cat-new-form-group">
            <Label for="name">Name</Label>
            <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={newCat.name}
                placeholder="What is your cat's name?"
            />
        </FormGroup>
        <FormGroup className="cat-new-form-group">
            <Label for="age">Age</Label>
            <Input
                id="age"
                name="age"
                type="text"
                onChange={handleChange}
                value={newCat.age}
                placeholder='How old is your cat?'
            />
        </FormGroup>
        <FormGroup className="cat-new-form-group">
            <Label for="enjoys">Enjoys</Label>
            <Input
                id="enjoys"
                name="enjoys"
                type="text"
                maxLength={100}
                onChange={handleChange}
                value={newCat.enjoys}
                placeholder='What does your kitty do for fun? (100 Chars Max)'
            />
        </FormGroup>
        <FormGroup className="cat-new-form-group">
            <Label for="image">Image</Label>
            <Input
                id="image"
                name="image"
                type="text"
                onChange={handleChange}
                value={newCat.image}
                placeholder='https://i.imgur.com/HGAKgb6.jpeg'
            />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">Submit</Button>
    </Form>
    <br/>
    <Button onClick={handleBack}>Back</Button>
    </div>
    )
}

export default CatNew
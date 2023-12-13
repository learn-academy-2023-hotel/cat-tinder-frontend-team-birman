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

    return (
    <div className="cat-new-form">
        <h1>Your New Mew!</h1>
    <Form>
        <FormGroup className="cat-new-form-group">
            <Label for="name">Name</Label>
            <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={newCat.name}
                placeholder='What is your name?'
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
                placeholder='How old are you?'
            />
        </FormGroup>
        <FormGroup className="cat-new-form-group">
            <Label for="enjoys">Enjoys</Label>
            <Input
                id="enjoys"
                name="enjoys"
                type="text"
                onChange={handleChange}
                value={newCat.enjoys}
                placeholder='What do you have fun doing?'
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
    </div>
    )
}

export default CatNew
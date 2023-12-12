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
    <div>
    <Form>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={newCat.name}
            />
        </FormGroup>
        <FormGroup>
            <Label for="age">Age</Label>
            <Input
                id="age"
                name="age"
                type="text"
                onChange={handleChange}
                value={newCat.age}
            />
        </FormGroup>
        <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
                id="enjoys"
                name="enjoys"
                type="text"
                onChange={handleChange}
                value={newCat.enjoys}
            />
        </FormGroup>
        <FormGroup>
            <Label for="image">Image</Label>
            <Input
                id="image"
                name="image"
                type="text"
                onChange={handleChange}
                value={newCat.image}
            />
        </FormGroup>
    </Form>
    <Button onClick={handleSubmit} name="submit">Submit</Button>
    </div>
    )
}

export default CatNew
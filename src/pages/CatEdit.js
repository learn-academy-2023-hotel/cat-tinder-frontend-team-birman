import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../App.css";

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams();
  let currentCat = cats?.find((cat) => cat.id === +id);

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image,
  });
  

  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    updateCat(editCat, currentCat.id);
    navigate("/catindex");
  };

  const handleBackShow = () => {
    navigate(`/catshow/${currentCat.id}`);
  };

  return (
    <div className="cat-new-form">
      <h1>Edit Cat Profile</h1>
      <Form>
        <FormGroup className="cat-new-form-group">
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={editCat.name}
          />
        </FormGroup>
        <FormGroup className="cat-new-form-group">
          <Label for="age">Age</Label>
          <Input
            id="age"
            name="age"
            type="text"
            onChange={handleChange}
            value={editCat.age}
          />
        </FormGroup>
        <FormGroup className="cat-new-form-group">
          <Label for="enjoys">Enjoys</Label>
          <Input
            id="enjoys"
            name="enjoys"
            type="text"
            onChange={handleChange}
            value={editCat.enjoys}
            maxLength={100}
          />
        </FormGroup>
        <FormGroup className="cat-new-form-group">
          <Label for="image">Image</Label>
          <Input
            id="image"
            name="image"
            type="text"
            onChange={handleChange}
            value={editCat.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit
        </Button>
        <Button onClick={handleBackShow}>Back</Button>
      </Form>
    </div>
  );
};

export default CatEdit;

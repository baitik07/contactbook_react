import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContactContext } from "../contexts/ContactContext";
import { Button, Form } from "react-bootstrap";

const EditContactPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const { oneContact, getOneContact, editContact } = useContactContext();
  const { id } = useParams();

  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setNumber(oneContact.number);
    }
  }, [oneContact]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeSurname(e) {
    setSurname(e.target.value);
  }

  function handleChangeNumber(e) {
    setNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !number.trim()) {
      alert("Fill all Blanks!");
      return;
    }

    const newContact = {
      name,
      surname,
      number,
    };

    editContact(id, newContact);
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center mt-4">Edit exist Contact</h1>
      <Form onSubmit={handleSubmit} className="mx-auto w-50">
        <Form.Control
          className="mt-4"
          autoFocus
          onChange={handleChangeName}
          value={name}
          type="text"
        />

        <Form.Control
          className="mt-2"
          onChange={handleChangeSurname}
          value={surname}
          type="text"
        />

        <Form.Control
          className="mt-2"
          onChange={handleChangeNumber}
          value={number}
          type="text"
        />

        <Button
          className="mx-auto d-block mt-3 px-5"
          type="submit"
          variant="secondary"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditContactPage;

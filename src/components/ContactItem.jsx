import React from "react";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "../contexts/ContactContext";
import { Button, ListGroup } from "react-bootstrap";

const ContactItem = ({ item }) => {
  const { deleteContact } = useContactContext();
  const navigate = useNavigate();

  return (
    <ListGroup.Item className="mt-3 d-flex justify-content-end">
      <span className="mx-4 fs-5 text-warning">{item.name}</span>
      <span className="mx-4 fs-5 text-warning">{item.surname}</span>
      <span className=" mx-4 fs-5 text-success">{item.number}</span>
      <div className="mt-2  px-2 mx-2">
        <Button
          variant="danger"
          className="mx-2"
          onClick={() => deleteContact(item.id)}
        >
          delete
        </Button>
        <Button
          onClick={() => navigate(`/edit/${item.id}`)}
          variant="secondary"
        >
          edit
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ContactItem;

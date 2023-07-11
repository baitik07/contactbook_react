import React, { useEffect } from "react";
import { useContactContext } from "../contexts/ContactContext";
import { ListGroup } from "react-bootstrap";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { contacts, getContacts } = useContactContext();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h1 className="mt-4">My Contact List</h1>
      <ListGroup className="mt-3">
        {contacts.map((item) => (
          <ContactItem item={item} key={item.id} />
        ))}
      </ListGroup>
    </div>
  );
};

export default ContactList;

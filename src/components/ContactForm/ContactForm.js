import { PropTypes, Container, Button, Label, Input } from 'common';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ContactFormStyled } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputs = {
    name: 'name',
    number: 'number',
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    name === inputs.name && setName(value);
    name === inputs.number && setNumber(value);
  };

  const addContact = e => {
    e.preventDefault();

    const newContact = {
      name: name.trim(),
      number: number.trim(),
    };

    if (newContact.name.length === 0 || newContact.number.length === 0) {
      return toast.error('Please enter all fields');
    }

    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <ContactFormStyled onSubmit={addContact}>
        <Label label="Name">
          <Input
            type="text"
            name={inputs.name}
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            isRequired
          />
        </Label>

        <Label label="Number">
          <Input
            type="tel"
            name={inputs.number}
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            isRequired
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </ContactFormStyled>
    </Container>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

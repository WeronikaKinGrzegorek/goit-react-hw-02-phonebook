import React from 'react';
import PropTypes from 'prop-types';
import css from './contactList.module.css';

export const ContactList = ({ contacts }) => (
  <>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

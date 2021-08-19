import shortId from 'shortid';
// import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';


const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: shortId.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
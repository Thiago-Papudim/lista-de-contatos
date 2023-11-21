import { Contact } from '../types/types'

export const addContact = (contact: Contact) => ({
  type: 'ADD_CONTACT',
  payload: contact
})

export const removeContact = (id: string) => ({
  type: 'REMOVE_CONTACT',
  payload: id
})

export const editContact = (contact: Contact) => ({
  type: 'EDIT_CONTACT',
  payload: contact
})

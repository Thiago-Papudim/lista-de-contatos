import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AppState, Contact } from '../types/types'
import { removeContact } from '../actions/contactActions'
import ContactForm from './ContactForm'

const ContactItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`

const ContactList: React.FC = () => {
  const contacts = useSelector((state: AppState) => state.contacts)
  const dispatch = useDispatch()
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  const handleRemoveContact = (id: string) => {
    dispatch(removeContact(id))
  }

  const handleEditContact = (contact: Contact) => {
    setSelectedContact(contact)
  }

  const handleAddContact = () => {
    setSelectedContact({
      id: '',
      fullName: '',
      email: '',
      phone: ''
    })
  }

  return (
    <div>
      <h2>Lista de Contatos</h2>
      {contacts.map((contact: Contact) => (
        <ContactItem key={contact.id}>
          <div>
            <strong>{contact.fullName}</strong>
            <p>Email: {contact.email}</p>
            <p>Telefone: {contact.phone}</p>
          </div>
          <div>
            <button onClick={() => handleEditContact(contact)}>Editar</button>
            <button onClick={() => handleRemoveContact(contact.id)}>
              Remover
            </button>
          </div>
        </ContactItem>
      ))}

      {/* Adicionar um botão separado para adicionar contato */}
      <button onClick={handleAddContact}>Adicionar Contato</button>

      {/* Renderizar o formulário de contato apenas se um contato estiver selecionado */}
      {selectedContact !== null && (
        <ContactForm
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}
    </div>
  )
}

export default ContactList

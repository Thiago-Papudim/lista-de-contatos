// components/ContactForm.tsx
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addContact, editContact } from '../actions/contactActions'
import { Contact } from '../types/types'

const FormContainer = styled.div<{ isVisible: boolean }>`
  max-width: 400px;
  margin: 20px 0;
  border: 1px solid #ddd;
  padding: 20px;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`

const ContactForm: React.FC<{ contact?: Contact; onClose: () => void }> = ({
  contact,
  onClose
}) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<Contact>({
    id: '',
    fullName: '',
    email: '',
    phone: ''
  })

  // Atualizar o estado interno quando o contato muda (para o modo de edição)
  useEffect(() => {
    if (contact) {
      setFormData(contact)
    }
  }, [contact])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.id) {
      // Se há um ID, é uma edição
      dispatch(editContact(formData))
    } else {
      // Se não há um ID, é uma adição
      dispatch(addContact({ ...formData, id: String(new Date().getTime()) }))
    }

    // Limpar o formulário após adição ou edição
    setFormData({ id: '', fullName: '', email: '', phone: '' })

    // Fechar o formulário
    onClose()
  }

  return (
    <FormContainer isVisible={!!contact || !!formData.id}>
      <h2>{formData.id ? 'Editar Contato' : 'Adicionar Contato'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome Completo:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Salvar</button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </FormContainer>
  )
}

export default ContactForm

import { AppState } from '../types/types'

const initialState: AppState = {
  contacts: []
}

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact: { id: any }) => contact.id !== action.payload
        )
      }
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact: { id: any }) =>
          contact.id === action.payload.id ? action.payload : contact
        )
      }
    default:
      return state
  }
}

export default contactReducer

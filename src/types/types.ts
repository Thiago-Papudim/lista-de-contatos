export interface Contact {
  id: string
  fullName: string
  email: string
  phone: string
}

export interface AppState {
  contacts: Contact[]
}

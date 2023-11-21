import React from 'react'
import { Provider } from 'react-redux'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import store from './store'
import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'

const AppContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <>
        <GlobalStyles />
        <AppContainer>
          <h1>Lista de Contatos</h1>
          <ContactList />
          <ContactForm
            onClose={function (): void {
              throw new Error('Function not implemented.')
            }}
          />
        </AppContainer>
      </>
    </Provider>
  )
}

export default App

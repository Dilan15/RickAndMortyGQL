import './App.css'
import {  ApolloProvider } from '@apollo/client'
import { client } from './data/clientHttp'
import MyRoutes from './routers/routes'

const App = () => {

  return (
    <ApolloProvider client={client}>
      <main className='container'>
      <MyRoutes />
      </main>
    </ApolloProvider>
  )
}

export default App

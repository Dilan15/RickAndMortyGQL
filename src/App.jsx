import './App.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './data/clientHttp'
import MyRoutes from './routers/Routes'
import Menu from './components/menu/Menu'

const App = () => {

  return (
    <ApolloProvider client={client}>
      <Menu />
      <main className='container'>
        <MyRoutes />
      </main>
    </ApolloProvider >
  )
}

export default App

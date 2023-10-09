import './App.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './data/clientHttp'
import MyRoutes from './routers/Routes'
import Menu from './components/menu/Menu'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Menu />
        <main className='container'>
          <MyRoutes />
        </main>
      </ApolloProvider >
    </BrowserRouter>
  )
}

export default App

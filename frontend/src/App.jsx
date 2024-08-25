 import { Container } from 'react-bootstrap'
 import { Outlet } from 'react-router-dom'
 import Header from '../src/component/Header.jsx'
 import Footer from '../src/component/Footer.jsx'
 import HomeScreen from './screens/HomeScreen.jsx'
 function App(){
  return(
  <>
<Header />
  <main className='py-3'>
    <Container>
      <Outlet />
    </Container>
    <Footer />
  </main>
  </>
  )
}
export default App
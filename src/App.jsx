
import { Header } from './components/Header/Header'
import CardList from './components/Cards/CardList'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      
      <main>

        <CardList />

      </main>
      
      <footer className='text-gray-600 body-font'>
        <Footer />
      </footer>
      
    </>
  )
}

export default App


import { Header } from './assets/components/Header/Header'
import CardList from './assets/components/Cards/CardList'
import Footer from './assets/components/Footer/Footer'

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

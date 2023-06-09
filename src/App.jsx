import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Footer from './components/Footer';

function App() {  
  return (
    <>
      <header className='bg-danger text-center p-2 mb-2'>
        <h1 className='text-light'>Noticias</h1>
      </header>
      <main className="container">
        <section>
          <aside>
            <Formulario></Formulario>
          </aside>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App

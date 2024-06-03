import './App.css'
import Advantage from './component/Advantage/Advantage'
import Customize from './component/Customize/Customize'
import Faq from './component/Faq/Faq'
import Feature from './component/Features/Feature'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import Start from './component/Start/Start'
import Testomonial from './component/Testomonial/Testomonial'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Advantage />
      <Customize />
      <Testomonial />
      <Faq />
      <Start />
      <Footer />
    </>
  )
}

export default App

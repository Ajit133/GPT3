import './App.css'
import {Footer,Blog,Possibility,Features,WhatGPT3,Header} from './Containers';
import {Brand,Cta,Navbar} from './Components'
function App() {

  return (
    <div className='App'>
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App

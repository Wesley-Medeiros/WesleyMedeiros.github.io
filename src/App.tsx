import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Technologies from './components/Technologies'
import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/themes/global'
import Footer from './components/Footer'


function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
        <Header/>
        <Home />
        <About />
        <Technologies />
        <Footer />
      
      <GlobalStyle />
    </ThemeProvider>
  
    )
  
}

export default App

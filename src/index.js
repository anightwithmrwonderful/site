import 'normalize.css'
import './styles.scss'
import React, { Component } from 'react'
import { Router } from '@reach/router'
import { Main, Nav, Footer } from 'components'
import { About, Events, Media, Contact } from 'pages'
import WebFont from 'webfontloader'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'utilities/registerServiceWorker'

class App extends Component {

  render() {
    return (
      <Main>
        <Nav />
        <Router>
          <About path='/' />
          <Events path='/shows' />
          <Media path='/media' />
          <Contact path='/contact' />
        </Router>
        <Footer />
      </Main>
    )
  }

  componentDidMount = () => {
    WebFont.load({
			google: {
				families: [
          'Abril Fatface',
          'Inconsolata',
          'Satisfy'
        ]
      },
    })
  }
  
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

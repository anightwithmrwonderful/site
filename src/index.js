import 'normalize.css'
import './styles.scss'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Main, Nav, Footer } from 'components'
import { About, Events, Media, Contact } from 'pages'
import WebFont from 'webfontloader'
import { hydrate, render } from 'react-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Main>
            <Route exact path='/' component={ About } />
            <Route path='/shows' component={ Events } />
            <Route path='/media' component={ Media } />
            <Route path='/contact' component={ Contact } />
          </Main>
          <Footer />
        </div>
      </Router>
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


const rootElement = document.getElementById('root')
if(rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, root)
}
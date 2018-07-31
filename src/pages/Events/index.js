import React, { Component } from 'react'
import { Section, Event } from 'components'
import styles from './styles.module.scss'
import * as contentful from 'contentful'

export default class extends Component {

  state = {
    contentLoaded: false,
  }

  render() {
    return this.state && this.state.contentLoaded ? (
      <div>

        <Section>
          <div className={ styles.section }>
            {
              this.state.events.map(props => {
                const date = new Date(props.when)
                let dd = date.getDate()
                let mm = date.getMonth() + 1
                const yyyy = date.getFullYear()
                if(dd < 10) dd = '0' + dd
                if(mm < 10) mm = '0' + mm
                const displayDate = [dd, mm, yyyy].join('/')
                const displayTime = [ date.getHours(), date.getMinutes() ].join(':')
                return (
                  <Event
                    title={ props.title }
                    date={ displayDate }
                    time={ displayTime }
                    howLong={ props.howLong }
                    description={ props.description }
                    place={ props.location }
                    registerUrl={ props.url }
                  />
                )
              })
            }
          </div>
        </Section>

      </div>
    ) : null
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'drbs7qyt0aoj',
      accessToken: 'ec1b1b32f2004efc94a0cb31896988632851d546a618842a68ed1d6351619995'
    })
    client.getEntries({ content_type: 'eventsPage' }).then(response => {
      this.setState({ events: response.items[0].fields.event.map(event => event.fields), contentLoaded: true }, () => console.log(this.state))
    })
  }

}
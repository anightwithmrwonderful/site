import React from 'react'
import shortid from 'shortid'
import { Section, Event } from 'components'
import styles from './styles.module.scss'

const events = [{
  image: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg',
  title: 'the event title',
  date: 'Wednesday, August 1st, 2018',
  time: '7:30-10:00pm',
  place: 'Location of the event',
  registerUrl: 'http://www.billymcguigan.com/tour-schedule/',
  description: `Billy McGuigan as you’ve never seen him before. Classic rock tunes with a big band twist; big band standards with a rock and roll twist. Backed by a full horn section and an all star line up of Omaha’s finest musicians, Billy’s brand new show will have Playhouse audiences rocking like never before. Frank Sinatra? Check. The Beatles? Check. Harry Connick, Jr? Check. Billy Joel? Check! Fresh re-arrangements of rock and jazz standards performed as only Billy can. It’s rock with a twist!`,
}, {
  image: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg',
  title: 'the event title',
  date: 'Wednesday, August 1st, 2018',
  time: '7:30-10:00pm',
  place: 'Location of the event',
  registerUrl: 'http://www.billymcguigan.com/tour-schedule/',
  description: `Billy McGuigan as you’ve never seen him before. Classic rock tunes with a big band twist; big band standards with a rock and roll twist. Backed by a full horn section and an all star line up of Omaha’s finest musicians, Billy’s brand new show will have Playhouse audiences rocking like never before. Frank Sinatra? Check. The Beatles? Check. Harry Connick, Jr? Check. Billy Joel? Check! Fresh re-arrangements of rock and jazz standards performed as only Billy can. It’s rock with a twist!`,
}, {
  image: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg',
  title: 'the event title',
  date: 'Wednesday, August 1st, 2018',
  time: '7:30-10:00pm',
  place: 'Location of the event',
  registerUrl: 'http://www.billymcguigan.com/tour-schedule/',
  description: `Billy McGuigan as you’ve never seen him before. Classic rock tunes with a big band twist; big band standards with a rock and roll twist. Backed by a full horn section and an all star line up of Omaha’s finest musicians, Billy’s brand new show will have Playhouse audiences rocking like never before. Frank Sinatra? Check. The Beatles? Check. Harry Connick, Jr? Check. Billy Joel? Check! Fresh re-arrangements of rock and jazz standards performed as only Billy can. It’s rock with a twist!`,
}, {
  image: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg',
  title: 'the event title',
  date: 'Wednesday, August 1st, 2018',
  time: '7:30-10:00pm',
  place: 'Location of the event',
  registerUrl: 'http://www.billymcguigan.com/tour-schedule/',
  description: `Billy McGuigan as you’ve never seen him before. Classic rock tunes with a big band twist; big band standards with a rock and roll twist. Backed by a full horn section and an all star line up of Omaha’s finest musicians, Billy’s brand new show will have Playhouse audiences rocking like never before. Frank Sinatra? Check. The Beatles? Check. Harry Connick, Jr? Check. Billy Joel? Check! Fresh re-arrangements of rock and jazz standards performed as only Billy can. It’s rock with a twist!`,
}, {
  image: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg',
  title: 'the event title',
  date: 'Wednesday, August 1st, 2018',
  time: '7:30-10:00pm',
  place: 'Location of the event',
  registerUrl: 'http://www.billymcguigan.com/tour-schedule/',
  description: `Billy McGuigan as you’ve never seen him before. Classic rock tunes with a big band twist; big band standards with a rock and roll twist. Backed by a full horn section and an all star line up of Omaha’s finest musicians, Billy’s brand new show will have Playhouse audiences rocking like never before. Frank Sinatra? Check. The Beatles? Check. Harry Connick, Jr? Check. Billy Joel? Check! Fresh re-arrangements of rock and jazz standards performed as only Billy can. It’s rock with a twist!`,
}, {
  image: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg',
  title: 'the event title',
  date: 'Wednesday, August 1st, 2018',
  time: '7:30-10:00pm',
  place: 'Location of the event',
  registerUrl: 'http://www.billymcguigan.com/tour-schedule/',
  description: `Billy McGuigan as you’ve never seen him before. Classic rock tunes with a big band twist; big band standards with a rock and roll twist. Backed by a full horn section and an all star line up of Omaha’s finest musicians, Billy’s brand new show will have Playhouse audiences rocking like never before. Frank Sinatra? Check. The Beatles? Check. Harry Connick, Jr? Check. Billy Joel? Check! Fresh re-arrangements of rock and jazz standards performed as only Billy can. It’s rock with a twist!`,
}]

export default () => (
  <div>

    <Section>
      <div className={ styles.section }>
        {
          events.map(props => (
            <Event
              { ...props }
              key={ shortid.generate() }
            />
          ))
        }
      </div>
    </Section>

  </div>
)
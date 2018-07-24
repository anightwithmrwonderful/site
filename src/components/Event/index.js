import React from 'react'
import { Link } from 'components'
import styles from './styles.module.scss'

// title: 'the event title',
// date: 'Wednesday, August 1st, 2018',
// time: '7:30-10:00pm',
// register: 'http://www.billymcguigan.com/tour-schedule/',
// description:

export default ({ title, date, time, registerUrl, description, place, }) => (
  <div className={ styles.container }>
    <Link href={ registerUrl }>
      <div
        children={ title }
        className={ styles.title }
      />
      <div
        children={ date }
        className={ styles.date }
      />
      <div
        children={ time }
        className={ styles.time }
      />
      <div
        children={ place }
        className={ styles.place }
      />
      <div
        children={ description }
        className={ styles.description }
      />
    </Link>
  </div>
)
import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'
import shortid from 'shortid'

export default ({ style }) => (
  <div className={ styles.container }>
    <div>
      {
        [  {
          to: '/',
          children: 'About',
          onlyActiveOnIndex: true,
        }, {
          to: '/shows',
          children: 'Shows',
        }, {
          to: '/media',
          children: 'Media',
        }, {
          to: '/contact',
          children: 'Contact',
        }, ].map((props, i) => (
          <NavLink
            exact
            key={ shortid.generate() }
            { ...props }
            className={ styles.link }
            activeClassName={ styles.active }
          />
        ))
      }
    </div>
  </div>
)
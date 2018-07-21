import React from 'react'
import styles from './styles.module.scss'

export default (props) => (
  <div
    { ...props }
    className={ `${ styles.container } ${ props.className }` }
  />
)
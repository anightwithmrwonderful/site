import React from 'react'
import { Link } from 'components'

export default (props) => (
  props.href
    ? <Link { ...props } />
    : <div { ...props } />
)
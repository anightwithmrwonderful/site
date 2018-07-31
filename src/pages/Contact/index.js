import React, { Component } from 'react'
import { Section } from 'components'
import styles from './styles.module.scss'
import EmailValidator from 'email-validator'
import encodeFormData from 'utilities/encodeFormData'

export default class Contact extends Component {

  state = {
    name: '',
    nameEmpty: true,
    email: '',
    emailEmpty: true,
    emailInvalid: true,
    message: '',
    messageEmpty: true,
  }

  render() {
    return (
      <Section>
        <div>
          <form
            name="contact"
            method="post"
            netlfiy
            className={ styles.form }
          >
            <label>
              <div>Your Name:</div>
              <input
                type='text'
                name='name'
                value={ this.state.name }
                onChange={ this.onChange }
                placeholder={ `Mr. Wonderful's Friend` }
              />
              { this.state.nameEmpty && <div className={ styles.error }>Please enter your name</div> }
            </label>
            <label>
              <div>Your Email:</div>
              <input
                type='email'
                name='email'
                value={ this.state.email }
                onChange={ this.onChange }
                placeholder={ `mrwonderfulsfriend@gmail.com` }
              />
              { ( this.state.emailEmpty || !this.state.emailValid ) && <div className={ styles.error }>Please enter a valid email address </div> }
            </label>
            <label>
              <div>Message:</div>
              <textarea
                name='message'
                value={ this.state.message }
                onChange={ this.onChange }
                placeholder={ `Fantastic show the other night. Let's grab a drink this week.` }
              />
              { this.state.messageEmpty && <div className={ styles.error }>Please enter your message</div> }
            </label>
            <div className={ styles.send }>
              <button
                disabled={ !this.state.nameEmpty && this.state.emailValid && !this.state.emailEmpty && !this.state.messageEmpty }
                type='submit'
                children='SEND'
              />
            </div>
          </form>
        </div>
      </Section>
    )
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this.setState({
        nameEmpty: !(this.state.name && this.state.name !== ''),
        emailValid: EmailValidator.validate(this.state.email),
        emailEmpty: !(this.state.email && this.state.email !== ''),
        messageEmpty: !(this.state.message && this.state.message !== ''),
      })
    })
  }

}
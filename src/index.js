import React from 'react'
import styles from './styles.module.css'
import LoginForm from './LoginForm'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}><LoginForm /></div>
}

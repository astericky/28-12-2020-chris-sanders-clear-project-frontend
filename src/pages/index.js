import React from 'react'
import { Provider } from 'react-redux'
import Container from '../components/container'
import Content from '../components/content'
import store from '../store'

export default function Home() {
  return (
    <Provider store={store}>
      <Container>
        <Content />
      </Container>
    </Provider>
  )
}

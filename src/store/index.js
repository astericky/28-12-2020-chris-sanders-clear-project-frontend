import { createStore, compose } from 'redux'
import reducers from './reducers'

const initialState = {
  organizations: [],
}

const store = createStore(
  reducers,
  initialState,
  compose(window.devToolsExtension? window.devToolsExtension() : f => f)
)

export default store
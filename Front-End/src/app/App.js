import { Provider } from 'react-redux'

import AppRouter from '@routes'
import Store from '@store'

import '@styles/App.css'
import '@styles/scrollbar.css'

const App = () => {

  return (
    <Provider store={Store}>
      <AppRouter />
    </Provider>
  )
}

export default App

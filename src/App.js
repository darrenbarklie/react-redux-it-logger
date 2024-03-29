import React, { Fragment, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import EditTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })

  return (
    <Provider store={store}>
      <div className="App">
        <Fragment>
          <SearchBar />
          <div className="container">
            <AddButton />
            <AddLogModal />
            <EditLogModal />
            <EditTechModal />
            <TechListModal />
            <Logs />
          </div>
        </Fragment>
      </div>
    </Provider>
  )
}

export default App

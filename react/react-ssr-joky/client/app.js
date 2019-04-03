import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors'
import JssProvider from 'react-jss/lib/JssProvider';
import AppState from './store/app-state'
import App from './views/App' // eslint-disable-line

const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
  typography: {
    useNextVariants: true,
  },
})
// Create a new class name generator.
const generateClassName = createGenerateClassName();
console.log(generateClassName);
// 热更新配置
// ReactDOM.hydrate(<App/>,document.getElementById('root'))
// 读取服务端返回的store数据
const initialState = window.__INITIAL__START__ || {} // eslint-disable-line
const root = document.getElementById('root');
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
          <JssProvider generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme}>
              <Component />
            </MuiThemeProvider>
          </JssProvider>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}
render(App)
if (module.hot) {
  // react-hot-loader/babel
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default;// eslint-disable-line
    // ReactDOM.hydrate(<NextApp/>,document.getElementById('root'))
    render(NextApp)
  })
}

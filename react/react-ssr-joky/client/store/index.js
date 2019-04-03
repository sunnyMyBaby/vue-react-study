import AppStateClass from './app-state'

export const AppState = AppStateClass

export default {
  AppState,
}

export const createStoreApp = () => ({
  // 这个专门给服务端渲染用的
  appState: new AppState(),
})

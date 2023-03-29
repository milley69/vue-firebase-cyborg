import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index'

import dateFiltered from '@/tools/date.filter'
import numberFormat from '@/tools/number.filter'
import timeFormat from '@/tools/time.filter'
import messagePlugin from '@/utils/message.plugin'

import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

import 'cropperjs/dist/cropper.css'
import 'toastify-js/src/toastify.css'
import 'video.js/dist/video-js.css'
import 'vue3-dropdown-navbar/preflight.css'
import './assets/loader.css'
import './assets/tw-main-output.css'
import Loader from './components/app/Loader.vue'

const app = createApp(App)
const loaderApp = document.getElementById('loaderApp')
let loadedApp

const firebaseConfig = {
  apiKey: 'AIzaSyC1B4ULE--Q99knblfveLsdoMa9m5vINp0',
  authDomain: 'cyborg-milley.firebaseapp.com',
  databaseURL: 'https://cyborg-milley-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'cyborg-milley',
  storageBucket: 'cyborg-milley.appspot.com',
  messagingSenderId: '506053232563',
  appId: '1:506053232563:web:34bb0e751e356390d06dc6',
  measurementId: 'G-RF1TMHLMSV',
}

export const fireInit = initializeApp(firebaseConfig)
export const auth = getAuth(fireInit)
export const database = getDatabase(fireInit)
export const storage = getStorage(fireInit)

app.use(router)
app.use(store)
app.component('Loader', Loader)
app.use(messagePlugin)
app.config.globalProperties.numForm = (value, format) => numberFormat(value, format)
app.config.globalProperties.dateFilter = (value, fromat) => dateFiltered(value, fromat)
app.config.globalProperties.timeForm = (value, fromat) => timeFormat(value, fromat)

onAuthStateChanged(auth, () => {
  if (!loadedApp) {
    loaderApp.remove()
    loadedApp = app.mount('#app')
  }
})

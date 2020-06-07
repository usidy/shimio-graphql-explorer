import Vue from 'vue'
import App from './App.vue'
import VuePrismEditor from 'vue-prism-editor'
import graphql from '@usidy/vue-shimio-graphql'

import 'prismjs'
import './style/atom_dark.css'
import 'vue-prism-editor/dist/VuePrismEditor.css'
import './registerServiceWorker'
import 'prismjs/components/prism-graphql.min.js'
import 'prismjs/components/prism-json.min.js'

Vue.config.productionTip = false
Vue.component('prism-editor', VuePrismEditor)
Vue.use(graphql, {
  name: 'graphql',
  hosts: { Api: 'ws://0.0.0.0:3000' }
})

new Vue({ render: h => h(App) }).$mount('#app')

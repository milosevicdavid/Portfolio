// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Landing from '~/layouts/Landing.vue'
import BootstrapVue from 'bootstrap-vue'
import "font-awesome/css/font-awesome.min.css";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "~/assets/style.scss"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.component('Landing', Landing)
  Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
}

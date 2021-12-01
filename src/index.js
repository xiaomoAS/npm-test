import npmJzpTest from './component/NpmJzpTest.vue'
const components = [
    npmJzpTest
]
  
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: "0.0.1",
  npmJzpTest,
  install
}
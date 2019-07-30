// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    todos: [],
    new_todo: null
  },
  created(){
    this.read()
  },
  methods: {
    // 一覧描画
    read(){
      fetch('http://localhost:3000/todos')
        .then( res => res.json() ).then(console.log)
        .then( res => this.todos = res )
    },
    
    // 新規追加
    // create(){
    //   fetch('http://localhost:3000/todos', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: this.new_todo
    //     }),
    //     headers: new Headers({ 'Content-type' : 'application/json' })
    //   }).then( () => {
    //     this.todos.push({
    //       title: this.new_todo
    //     })
    //     this.new_todo = ''
    //   })
    // },
  
    // 編集
    // update(todo){
    //   fetch(`http://localhost:3000/todos/${todo.id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       title: todo.title
    //     }),
    //     headers: new Headers({ 'Content-type' : 'application/json' })
    //   })
    // },
 
    // // 削除
    // remove(todo){
    //   fetch(`http://localhost:3000/todos/${todo.id}`, {
    //     method: 'DELETE'
    //   }).then( () => {
    //     this.todos = this.todos.filter(item => item !== todo)
    //   })
    // }
  }
})

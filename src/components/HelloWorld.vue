<template>
  <div class="hello">
    <h1>ToDo App</h1>
    <!-- <ul>
        <li v-for="todo in todos" :key="todo">
          <input type="text" v-model="todo.title" />
          <input type="button" value="編集" @click="update(todo)"/>
          <input type="button" value="削除" @click="remove(todo)"/>
        </li>
    </ul>
    <input type="text" v-model="new_todo">
    <input type="button" value="追加" @click="create"> -->
  </div>
</template>

<script>
export default {
  // methods: {
  //   // 一覧描画
  //   read(){
  //     fetch('http://localhost:3000/todos')
  //       .then( res => res.json() )
  //       .then( res => this.todos = res )
  //   },
    
  //   // 新規追加
  //   create(){
  //     fetch('http://localhost:3000/todos', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         title: this.new_todo
  //       }),
  //       headers: new Headers({ 'Content-type' : 'application/json' })
  //     }).then( () => {
  //       this.todos.push({
  //         title: this.new_todo
  //       })
  //       this.new_todo = ''
  //     })
  //   },
  
  //   // 編集
  //   update(todo){
  //     fetch(`http://localhost:3000/todos/${todo.id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify({
  //         title: todo.title
  //       }),
  //       headers: new Headers({ 'Content-type' : 'application/json' })
  //     })
  //   },
 
  //   // 削除
  //   remove(todo){
  //     fetch(`http://localhost:3000/todos/${todo.id}`, {
  //       method: 'DELETE'
  //     }).then( () => {
  //       this.todos = this.todos.filter(item => item !== todo)
  //     })
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

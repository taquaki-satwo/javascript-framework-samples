var vm = new Vue({
  el:"#content",
  data:{
    todoItems: [
      {id: 0, name: 'タスク1'},
      {id: 1, name: 'タスク2'},
      {id: 2, name: 'タスク3'}
    ],
    newItem: ''
  },
  methods:{
    add: function() {
      const idName = {id: Date.now(), name: this.newItem};
      this.todoItems = this.todoItems.concat(idName);
      this.newItem = '';
    },
    remove: function(i){
      this.todoItems.splice(i, 1);
    }
  }
});

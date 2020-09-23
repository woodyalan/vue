Vue.component('my-list', {
  props: {
    itens: {
      type: Array,
      required: true,
    },
  },
  template: '<ul><li v-for="item of itens">{{item}}</li></ul>',
});

var app = new Vue({
  el: '#app',
  data: {
    mensagem: 'Olá Vue!',
  },
});

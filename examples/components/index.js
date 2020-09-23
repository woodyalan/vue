Vue.component('my-button', {
  data() {
    return {
      count: 0,
    };
  },
  template: '<button class="btn btn-primary" v-on:click="count++">Você clicou em mim {{count}} vezes</button>',
});

var app = new Vue({
  el: '#app',
  data: {
    mensagem: 'Olá Vue!',
  },
});

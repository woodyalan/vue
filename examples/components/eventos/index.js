Vue.component('my-button', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
      this.$emit('incrementado', this.count);
    },
  },
  template: '<button class="btn btn-primary" v-on:click="add">Você clicou em mim {{count}} vezes</button>',
});

var app = new Vue({
  el: '#app',
  data: {
    mensagem: 'Olá Vue!',
  },
  methods: {
    exibirLog(value) {
      console.log(value);
    },
  },
  mounted() {
    this.mensagem = 'Olá Pessoal!';
  },
});

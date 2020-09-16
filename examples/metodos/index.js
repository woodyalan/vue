var app = new Vue({
  el: '#app',
  data: {
    mensagem: 'Olá!',
  },
  methods: {
    darTchau(mensagem) {
      this.mensagem = mensagem;
    },
  },
});

var app = new Vue({
  el: '#app',
  data: {
    nome: null,
    nomeAlterado: null,
  },
  watch: {
    nome(value, oldValue) {
      this.nomeAlterado = `O nome foi alterado de ${oldValue} para ${value}`;
    },
  },
});

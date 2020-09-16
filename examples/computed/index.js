var app = new Vue({
  el: '#app',
  data: {
    numero1: null,
    numero2: null,
  },
  computed: {
    soma() {
      if (this.numero1 && this.numero2) return parseInt(this.numero1) + parseInt(this.numero2);
    },
  },
});

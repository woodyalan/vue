var app = new Vue({
  el: '#app',
  data: {
    frutas: ['Mamão', 'Morango', 'Uva', 'Acabaxi'],
    pessoas: [
      {
        _id: '5f60098dfb7325ddc71ee63b',
        ativo: true,
        foto: 'http://placehold.it/32x32',
        idade: 30,
        nome: 'Dickerson Baker',
        empresa: 'SUREMAX',
        email: 'dickersonbaker@suremax.com',
        telefone: '+1 (894) 469-3041',
      },
      {
        _id: '5f60098d807454de4350cc95',
        ativo: true,
        foto: 'http://placehold.it/32x32',
        idade: 40,
        nome: 'Snyder Owens',
        empresa: 'XEREX',
        email: 'snyderowens@xerex.com',
        telefone: '+1 (864) 560-2641',
      },
      {
        _id: '5f60098d3785afa985043535',
        ativo: false,
        foto: 'http://placehold.it/32x32',
        idade: 37,
        nome: 'Phelps Benton',
        empresa: 'EXTRAGEN',
        email: 'phelpsbenton@extragen.com',
        telefone: '+1 (879) 486-3351',
      },
      {
        _id: '5f60098d4d2fcb49fd1bc51b',
        ativo: true,
        foto: 'http://placehold.it/32x32',
        idade: 27,
        nome: 'Hopper Michael',
        empresa: 'REPETWIRE',
        email: 'hoppermichael@repetwire.com',
        telefone: '+1 (970) 406-2862',
      },
    ],
  },
});

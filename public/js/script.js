//Variável que recebe o elemento html(modal)
var confirmationModal = document.getElementById('confirmationModal')

//Adiciona um evento toda vez que o modal for aberto
confirmationModal.addEventListener('show.bs.modal', function (event) {

  //Variável que recebe o botão que aciona o modal
  var button = event.relatedTarget

  //Variável que recebe o formulário do modal
  var form = document.getElementById('formDeletePhoto')

  //Alterando o Action (rota) do formulário
  form.action = "/photos/"+button.getAttribute('data-photo-id')

})

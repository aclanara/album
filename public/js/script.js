/* Modal */
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

/* Carregar imagem */
function loadFile(event){
  //Variável que recebe o elemento img
  var imgPrev = document.getElementById('imgPrev')

  //Link para a imagem
  var url = URL.createObjectURL(event.target.files[0])

  //Altera a propriedade src para o link da imagem
  imgPrev.src = url
}

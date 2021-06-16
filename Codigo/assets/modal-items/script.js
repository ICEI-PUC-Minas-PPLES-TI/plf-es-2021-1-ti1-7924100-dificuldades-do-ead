  
  // Get the modal
  var modalitems = document.getElementById("modal-items");
  var modaladditems = document.getElementById("modal-add-items");
  // Get the button that opens the modal
  var btn = document.getElementById("listTitle");
  var btn2 = document.getElementsByClassName("add")[0];
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close2")[0];
  var span3 = document.getElementsByClassName("back")[0];
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modalitems.style.display = "block";
  }
  btn2.onclick = function() {
    modaladditems.style.display = "block";
    modalitems.style.display = "none";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modalitems.style.display = "none";
  }
  span2.onclick = function() {
    modaladditems.style.display = "none";
  }
  span3.onclick = function() {
    modaladditems.style.display = "none";
    modalitems.style.display = "block";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modalitems && modaladditems) {
      modalitems.style.display = "none";
      modaladditems.style.display = "none";
    }
  }

  var btnSave = document.getElementById("save_tarefa");
  btnSave

  function validar(){
    var titutlo = document.getElementById('titulo').value;
    var data = document.getElementById('data').value = moment().format('DD-MM-YYYY');
    var descricao = document.getElementById('descricao').value;
    dataAtual = new Date();
    data = new Date(data);

    if(titutlo == ""){
        alert('Preencha o campo títutlo.');
        titutlo.focus();
        return false;
    }
    
    if(data == ""  || data>dataAtual){
        alert('Preencha o campo de data certo!');
        data.focus();
        return false;
    }
    
    if(descricao == "" || descricao.length <= 19){
        alert('Preencha o campo de descrição com minimo 20 caracteres');
        descricao.focus();
        return false;
    }
}
  

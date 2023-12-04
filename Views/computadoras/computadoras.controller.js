//archivo de donde llamar al procedimiento
//controlador

function init() {
  $("#form_pc").on("submit", function (e) {
    guardaryeditar(e);
  });
}

$().ready(() => {
  //detecta carga de la pagina
  todos_controlador();
});

var todos_controlador = () => {
  var todos = new pc_Model("", "", "", "", "", "", "", "","", "todos");
  todos.todos();
}

var guardaryeditar = (e)=>{
    e.preventDefault();
    var formData = new FormData($("#form_pc")[0]);
    var compu= new pc_Model('','','','','','','',formData,'insertar');
    compu.insertar();
}



;init();

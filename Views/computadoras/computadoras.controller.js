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
    
    var id_compu = document.getElementById("id_compu").value
  console.log(id_compu);
  if(id_compu > 0){
    var compu = new pc_Model("","","","","","","",formData,"editar");
    compu.editar();
  }else{
    var compu= new pc_Model("","","","","","","",formData,"insertar");
    compu.insertar();
  }
  
};

var editar = (id_compu) => {
  var uno = new pc_Model(id_compu,"", "", "", "", "", "", "uno");
  uno.uno();
};

var eliminar=(id_compu)=>{
  var eliminar = new pc_Model(id_compu, "", "", "", "", "", "", "eliminar");
  eliminar.eliminar();
}
init();

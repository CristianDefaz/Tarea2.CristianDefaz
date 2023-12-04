
class pc_Model {
  constructor(
    id_compu,
    marca,
    procesador,
    espacio,
    ram,
    grafica,
    precio,
    data,
    Ruta
  ) {
    this.id_compu = id_compu;
    this.marca = marca;
    this.procesador = procesador;
    this.espacio = espacio;
    this.ram = ram;
    this.grafica = grafica;
    this.precio = precio;
    this.Ruta = Ruta;
    this.data = data; 
  }
  todos() {
    var html = "";
    $.get("../../Controllers/computadoras.controller.php?op=todos" 
    + this.Ruta, (res) => {
      res = JSON.parse(res);
      $.each(res, (index, valor) => {
        var fondo;
        html += `<tr>
                <td>${index + 1}</td>
                <td>${valor.marca}</td>
                <td>${valor.procesador}</td>
                <td>${valor.espacio}</td>
                <td>${valor.ram}</td>
                <td>${valor.grafica}</td>
                <td>${valor.precio}</td>
            <td>
            <button class='btn btn-success' onclick='editar(${
              valor.UsuarioId
            })'>Editar</button>
            <button class='btn btn-danger' onclick='eliminar(${
              valor.UsuarioId
            })'>Eliminar</button>
            <button class='btn btn-info' onclick='ver(${
              valor.UsuarioId
            })'>Ver</button>
            </td></tr>
                `;
      });
      $("#tabla_pc").html(html);
    });
  }
   
  
  insertar() {
    var dato = new FormData();
    dato= this.data;
    $.ajax({
      url: "../../Controllers/computadoras.controller.php?op=insertar",
      type: "POST",
      data: dato,
      contentType: false,
      processData: false,
      success: function (res) {
        res = JSON.parse(res);
        if (res === "ok") {
          Swal.fire("Computadora", "Computadora Ingresada", "success");
          todos_controlador(); 
        } else {
          Swal.fire("Error", res, "error");
        }
      }
    });
    limpia_Cajas();
  }
  
  limpia_Cajas(){
    document.getElementById("marca").value = "";
    document.getElementById("procesador").value = "";  
    document.getElementById("espacio").value = "";
    document.getElementById("ram").value = "";
    document.getElementById("grafica").value = "";
    document.getElementById("precio").value = "";
    $("#Modal_pc").modal("hide");
  }
}

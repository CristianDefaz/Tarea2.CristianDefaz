
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
              valor.id_compu
            })'>Editar</button>
            <button class='btn btn-danger' onclick='eliminar(${
              valor.id_compu
            })'>Eliminar</button>
            <button class='btn btn-info' onclick='ver(${
              valor.id_compu
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
  
  uno() {
    var id_compu = this.id_compu;
    $.post(
      "../../Controllers/computadoras.controller.php?op=uno",
      { id_compu: id_compu },
      (res) => {
        console.log(res);
        res = JSON.parse(res);
        $("#id_compu").val(res.id_compu);
        $("#marca").val(res.marca);
        $("#procesador").val(res.procesador);
        $("#espacio").val(res.espacio);
        $("#ram").val(res.ram);
        $("#grafica").val(res.grafica);

        document.getElementById("precio").value = res.precio; //asiganr al select el valor
      }
    );
    $("#Modal_pc").modal("show");
  }

  editar() {
    var dato = new FormData();
    dato = this.data;
    $.ajax({
      url: "../../Controllers/computadoras.controller.php?op=actualizar",
      type: "POST",
      data: dato,
      contentType: false,
      processData: false,
      success: function (res) {
        res = JSON.parse(res);
        if (res === "ok") {
          Swal.fire("computadora", "Computadora Actualizado", "success");
          todos_controlador();
        } else {
          Swal.fire("Error", res, "error");
        }
      },
    });
    this.limpia_Cajas();
  }

  eliminar() {
    var id_compu = this.id_compu;

    Swal.fire({
      title: "Computadoras",
      text: "Esta seguro de eliminar el computador",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        $.post(
          "../../Controllers/computadoras.controller.php?op=eliminar",
          { id_compu: id_compu },
          (res) => {
            console.log(res);
            res = JSON.parse(res);
            if (res === "ok") {
              Swal.fire("computadora", "Computadora Eliminado", "success");
              todos_controlador();
            } else {
              Swal.fire("Error", res, "error");
            }
          }
        );
      }
    });

    this.limpia_Cajas();
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

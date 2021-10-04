function traerInformacion() {
  $.ajax({
    url: "https://g8ff0a7daae9900-db202109262328.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/machine/machine",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      //Acá se puede validar la respuesta.
      console.log(respuesta);
      mostrarTabla(respuesta.items);
    },
  });
}

function mostrarTabla(items) {
  $("#contenedor").empty();
  let mTable = "";
  mTable = "<table>";
  for (i = 0; i < items.length; i++) {
    mTable += "<tr>";
    mTable += "<td>" + items[i].id + "<td>";
    mTable += "<td>" + items[i].brand + "<td>";
    mTable += "<td>" + items[i].model + "<td>";
    mTable += "<td>" + items[i].category_id + "<td>";
    mTable += "<td>" + items[i].name + "<td>";
    mTable +=
      "<td> <button onclick='borrarElemento(" +
      items[i].id +
      ")'>Borrar</button>";
    mTable += "</tr>";
  }
  mTable += "</table>";
  $("#contenedor").append(mTable);
}

function guardarInformacion() {
  let mDatos = {
    id: $("#id").val(),
    brand: $("#brand").val(),
    model: $("#model").val(),
    category_id: $("#category_id").val(),
    name: $("#name").val(),
  };
  let dataToSend = JSON.stringify(mDatos);
  $.ajax({
    url: "https://g8ff0a7daae9900-db202109262328.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/machine/machine",
    type: "POST",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      //Acá se puede validar la respuesta.
      alert("datos guardados satisfactoriamente");
    },
  });
}

function editarInformacion() {
  let mDatos = {
    id: $("#id").val(),
    brand: $("#brand").val(),
    model: $("#model").val(),
    category_id: $("#category_id").val(),
    name: $("#name").val(),
  };
  let dataToSend = JSON.stringify(mDatos);
  $.ajax({
    url: "https://g8ff0a7daae9900-db202109262328.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/machine/machine",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      //Acá se puede validar la respuesta.
      $("#tabla").empty();
      $("#id").val("");
      $("#brand").val("");
      $("#model").val("");
      $("#category_id").val("");
      $("#name").val("");
      traerInformacion();
      alert("datos actualizados satisfactoriamente");
    },
  });
}

function borrarElemento(idElemento) {
  let mDatos = {
    id: idElemento,
  };
  let dataToSend = JSON.stringify(mDatos);
  $.ajax({
    url: "https://g8ff0a7daae9900-db202109262328.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/machine/machine",
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#tabla").empty();
      traerInformacion();
      alert("el registro ha sido eliminado");
    },
  });
}

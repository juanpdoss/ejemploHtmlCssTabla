window.addEventListener("load", Cargo);

function Cargo() {
  var btn = $("btnCargar");
  btn.addEventListener("click", AltaPersona);
}

function cargarPersonas() {
  var tabla = $("tabla");

  var consulta = new XMLHttpRequest();
  consulta.open("GET", "http://localhost:3000/personas", true); //configuro a que server pegarle

  consulta.send();

  consulta.onreadystatechange = function () {
    if (consulta.status == 200 && consulta.readyState == 4) {
      var personas = JSON.parse(consulta.responseText);

      for (let index = 0; index < personas.length; index++) {
        var nodoNombre = document.createTextNode(personas[index].nombre);
        var nodoApellido = document.createTextNode(personas[index].apellido);

        var filaNueva = document.createElement("tr");
        var celdaNuevaNombre = document.createElement("td");
        celdaNuevaNombre.appendChild(nodoNombre);
        var celdaNuevaApellido = document.createElement("td");
        celdaNuevaApellido.appendChild(nodoApellido);

        filaNueva.appendChild(celdaNuevaNombre);
        filaNueva.appendChild(celdaNuevaApellido);

        tabla.appendChild(filaNueva);
      }
    }
  };
}

function $(id) {
  return document.getElementById(id);
}

function AltaPersona() {
  var div = $("divAlta");
  div.hidden = false;

  var tabla = $("tabla");


  var btnAceptar = $("btnGuardar");
  var btnCancelar = $("btnCancelar");

 
  btnAceptar.onclick = function () 
    {
        var nombre = $("txtNombre").value;
        var apellido = $("txtApellido").value;
           
        if (nombre != "" && apellido != "")
         {
            var filaNueva = document.createElement("tr"); //tablerow
            var tdNombre = document.createElement("td");
            var tdApellido = document.createElement("td");

            var nodoNombre = document.createTextNode(nombre);
            var nodoApellido = document.createTextNode(apellido);

            tdNombre.appendChild(nodoNombre);
            tdApellido.appendChild(nodoApellido);
            filaNueva.appendChild(tdNombre);
            filaNueva.appendChild(tdApellido);

            tabla.appendChild(filaNueva); //agrego fila
         } else 
        {
            alert("sos tontO");
            div.hidden = true;
        }

    div.hidden=true;
  };

  btnCancelar.onclick = function () 
  {
    div.hidden = true;
  }


}

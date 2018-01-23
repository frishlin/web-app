$(document).ready(function(){
   setTimeout("$('.popup').hide();", 1000);
});

/*
function loadPage(){



}
*/

function doFilter(){
  if($('#filterBox').val().length != 0){ // Se ejecuta la rutina de búsqueda siempre y cuando haya algo escrito en el input
    var numResults = 0; // Contador del número de resultados
    var stringSearch = $("#filterBox").val(); // Cadena de búsqueda
    console.log(stringSearch);
    for(var i=0; i<data.length; i++){ // Se recorre toda la data para buscar coincidencias
      var strCmp = data[i]['name'].toLowerCase(); // Se guarda el valor del campo del nombre del Restaurante para compararlo posteriormente, para que sea case-insensitive, se convierte a minúsculas
      if(strCmp.indexOf(stringSearch.toLowerCase()) != -1) { // Si existe una coincidencia con la cadena escrita por el usuario (convertida también a minúsculas)...
        console.log(data[i]['name']); // Se obtiene el nombre respectivo del restaurante
        console.log(data[i]['adress']);
        console.log(data[i]['Type']);
        console.log(data[i]['location']);
        console.log(data[i]['schedule']);
        console.log(data[i]['telephone']);
        numResults++; // Se incrementa el número de resultados obtenidos
      }
    }
  }
  console.log("Resultados: "+numResults); // Si numResults es undefined, quiere decir que NO hay nada escrito en el input, en cambio, si es 0, quiere decir que NO hay coincidencias
}


/*
$(document).ready(loadPage);
*/

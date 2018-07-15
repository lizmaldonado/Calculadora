
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var mas=document.getElementById('mas');
  var igual=document.getElementById('igual');
  var cifra1=0;
  var bandera=0;
  var resultado="";
  var operador="mas"
  var operador1=0;  //si o esta obteniendo la cifra1, si operador1=1 obtener cifra2
  var contador=0,ope1,ope2;


igual.addEventListener("mousedown",function(x) {igual.style = "padding:10px";}),
mas.addEventListener("mousedown",function(x) {mas.style = "padding:10px";}),
cuatro.addEventListener("mousedown",function(x) {cuatro.style = "padding:10px";}),
cinco.addEventListener("mousedown",function(x) {cinco.style = "padding:10px";}),
seis.addEventListener("mousedown",function(x) {seis.style = "padding:10px";}),

  igual.addEventListener("mouseup",function(x)
    {
      igual=document.getElementById('mas').getAttribute("id")
      igual.style = "padding:0px";
      cifra2=resultado;
      bandera=1;

      resolver(cifra1,cifra2);
    }),
  mas.addEventListener("mouseup",function(x)
    {
      mas=document.getElementById('mas').getAttribute("id")
      mas.style = "padding:0px";
      cifra1=resultado;
      resultado="";
      operador="mas"
      operador1=1;


     limpiardisplay();
    }),
  cuatro.addEventListener("mouseup",function(x)
    {
      x=document.getElementById('4').getAttribute("id")
      cuatro.style = "padding:0px";
      if (contador<8)
        {
          resultado=resultado+x;
          console.log(resultado);
          console.log(cifra1)
          contador=contador+1;
          imprime(x)
        }
    }),
    cinco.addEventListener("mouseup",function(x)
      {
        x=document.getElementById('5').getAttribute("id")
        cinco.style = "padding:0px";
        if (contador<8)
        {
          resultado=resultado+x;
          console.log(resultado);
          contador=contador+1;
          imprime(x)
        }
      }),
      seis.addEventListener("mouseup",function(x)
        {
          x=document.getElementById('6').getAttribute("id")
          seis.style = "padding:0px";
          if (contador<8)
          {
            resultado=resultado+x;
            console.log(resultado);
            contador=contador+1;
            imprime(x)
          }
        })


function imprime(x)
{
  //var mensaje = "Hiciste click en la tecla"+x;
   //console.log(mensaje);
   //document.getElementById("demo").innerHTML = mensaje;
   document.getElementById("display").innerHTML = resultado;

  }

  function limpiardisplay()
  {
    document.getElementById("display").innerHTML = "0";
    var mensaje ="cifra1: "+ String(cifra1)+" operador :"+operador;
    document.getElementById("demo").innerHTML = mensaje;
    contador=0;
  }

  function resolver()
  {
    var res = 0;
    CdnaInt();
	switch (operador)
  {
	   case "mas":
	       res = (ope1) + (ope2);
	        break;

     case "menos":
	       res = (ope1) - (ope2);
	        break;

     case "por":
	       res = (ope1) * (ope2);
	        break;

     case "entre":
	       res = (ope1) / (ope2);
	        break;
	}

	resultado = res;
  imprime(resultado)
  resultado="";
	}
  function CdnaInt()
  {
    ope1=parseInt(cifra1)
    ope2=parseInt(cifra2)
  }

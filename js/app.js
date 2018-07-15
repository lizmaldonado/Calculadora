
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var punto=document.getElementById('punto');
  var mas=document.getElementById('mas');
  var entre=document.getElementById('dividido');
  var por=document.getElementById('por');
  var menos=document.getElementById('menos');
  var sign=document.getElementById('sign');
  var igual=document.getElementById('igual')
  var cifra1=0;
  var bandera=0, decimal=0;
  var resultado="";
  var operador="mas"; signo="+";
  var operador1=0;  //si o esta obteniendo la cifra1, si operador1=1 obtener cifra2
  var contador=0,num1,num2;


igual.addEventListener("mousedown",function(x) {igual.style = "padding:10px";}),
mas.addEventListener("mousedown",function(x) {mas.style = "padding:10px";}),
entre.addEventListener("mousedown",function(x) {entre.style = "padding:10px";}),
sign.addEventListener("mousedown",function(x) {signo.style = "padding:10px";}),
por.addEventListener("mousedown",function(x) {por.style = "padding:10px";}),
menos.addEventListener("mousedown",function(x) {menos.style = "padding:10px";}),
punto.addEventListener("mousedown",function(x) {punto.style = "padding:10px";}),
cuatro.addEventListener("mousedown",function(x) {cuatro.style = "padding:10px";}),
cinco.addEventListener("mousedown",function(x) {cinco.style = "padding:10px";}),
seis.addEventListener("mousedown",function(x) {seis.style = "padding:10px";})

  igual.addEventListener("mouseup",function(x)
    {
    igual=document.getElementById('igual').getAttribute("id")
      igual.style = "padding:0px";
      cifra2=resultado;
      bandera=1;
      decimal=0; //ya puede volver a escribir un "."

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

    entre.addEventListener("mouseup",function(x)
      {
        entre=document.getElementById('dividido').getAttribute("id")
        entre.style = "padding:0px";
        cifra1=resultado;
        resultado="";
        operador="entre"
        operador1=1;
        limpiardisplay();
      }),

      por.addEventListener("mouseup",function(x)
        {
          por=document.getElementById('por').getAttribute("id")
          por.style = "padding:0px";
          cifra1=resultado;
          resultado="";
          operador="por"
          operador1=1;
          limpiardisplay();
        }),

        menos.addEventListener("mouseup",function(x)
          {
            menos=document.getElementById('menos').getAttribute("id")
            menos.style = "padding:0px";
            cifra1=resultado;
            resultado="";
            operador="menos"
            operador1=1;
            limpiardisplay();
          }),

    punto.addEventListener("mouseup",function(x)
      {
        x=document.getElementById('punto').getAttribute("id")
        x=".";
        punto.style = "padding:0px";
        if (contador<8)
          { if (decimal==0)
            { resultado=resultado+x;
              contador=contador+1;
              decimal=1; //me indica que ya tiene un punto
              imprime(x)
            }
          }
      }),
      sign.addEventListener("mouseup",function(x)
        {
          x=document.getElementById('punto').getAttribute("id")
          sign.style = "padding:0px";
          if (signo=="+")
              {x="-"}
          else {x="+";}
          signo=x;

          resultado=resultado+x;   ///el signo se anexa en primera posicion.
                contador=contador+1;

                imprime(x)

            
        }),

  cuatro.addEventListener("mouseup",function(x)
    {
      x=document.getElementById('4').getAttribute("id")
      cuatro.style = "padding:0px";
      if (contador<8)
        {
          resultado=resultado+x;
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
            contador=contador+1;
            imprime(x)
          }
        })


function imprime(x)
  {
    document.getElementById("display").innerHTML = resultado;
  }

function limpiardisplay()
  {
    document.getElementById("display").innerHTML = "0";
    var mensaje ="cifra1: "+ String(cifra1)+" operador :"+operador;
    document.getElementById("demo").innerHTML = mensaje;
    contador=0;
    decimal=0;
  }

function resolver()
  {
    var res = 0;
    CdnaInt();
  	switch (operador)
    {
  	   case "mas":
  	       res = (num1) + (num2);
  	        break;

       case "menos":
  	       res = (num1) - (num2);
  	        break;

       case "por":
  	       res = (num1) * (num2);
  	        break;

       case "entre":
  	       res = (num1) / (num2);
  	        break;
  	}
    truncar(res)

    imprime(resultado)
    resultado="";
	}
function CdnaInt()
  {
    num1=parseFloat(cifra1)
    num2=parseFloat(cifra2)
  }
function truncar(res)
  {
    var res1 ="", cortado="";
    res1=String(res);
    if (res1.length>8)
      {
      cortado=res1.substring(0,8);
      res=parseFloat(cortado);
      }
    resultado=res;
  }

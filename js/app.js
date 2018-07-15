  
 var cifra1=0,  decimal=0, contador=0;
var resultado="";
var operador="mas"; signo="+";
var operador1=0;  //si o esta obteniendo la cifra1, si operador1=1 obtener cifra2
var CeroIzq="false";
var num1,num2;

var on=document.getElementById('on');
var sign=document.getElementById('sign');

var entre=document.getElementById('dividido');

var por=document.getElementById('por');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');

var menos=document.getElementById('menos');

var cero=document.getElementById('0');
var punto=document.getElementById('punto');
var igual=document.getElementById('igual');

var mas=document.getElementById('mas');

on.addEventListener("mousedown",function(x) {on.style = "padding:10px";}),
sign.addEventListener("mousedown",function(x) {sign.style = "padding:10px";}),
entre.addEventListener("mousedown",function(x) {entre.style = "padding:10px";}),
por.addEventListener("mousedown",function(x) {por.style = "padding:10px";}),
cuatro.addEventListener("mousedown",function(x) {cuatro.style = "padding:10px";}),
cinco.addEventListener("mousedown",function(x) {cinco.style = "padding:10px";}),
seis.addEventListener("mousedown",function(x) {seis.style = "padding:10px";}),
menos.addEventListener("mousedown",function(x) {menos.style = "padding:10px";}),
cero.addEventListener("mousedown",function(x) {cero.style = "padding:10px";}),
punto.addEventListener("mousedown",function(x) {punto.style = "padding:10px";}),
igual.addEventListener("mousedown",function(x) {igual.style = "padding:10px";}),
mas.addEventListener("mousedown",function(x) {mas.style = "padding:10px";}),

on.addEventListener("mouseup",function(x)
    {
      on.style = "padding:0px";
      cifra1=0;
      resultado="";
      operador="mas";
      decimal=0;
      operador1=0;
      num1=0,num2=0;
      CeroIzq=false;
      limpiardisplay();
    }),

igual.addEventListener("mouseup",function(x)
    {
      igual.style = "padding:0px";
      cifra2=resultado;
      if (cifra2=="")
      {
        cifra2=cifra1;
      }
      decimal=0; //ya puede volver a escribir un "."
      signo="+";
      resolver(cifra1,cifra2);
      contador=0;
    }),

mas.addEventListener("mouseup",function(x)
    {
      mas.style = "padding:0px";
      operador=document.getElementById('mas').getAttribute("id");
      PrepLim();
    }),

entre.addEventListener("mouseup",function(x)
      {
        entre.style = "padding:0px";
        operador="entre"
        PrepLim();
      }),

  por.addEventListener("mouseup",function(x)
        {
          por.style = "padding:0px";
          operador=document.getElementById('por').getAttribute("id");
          PrepLim();
        }),

  menos.addEventListener("mouseup",function(x)
          {
            menos.style = "padding:0px";
            operador=document.getElementById('menos').getAttribute("id")
            PrepLim();
          }),

  punto.addEventListener("mouseup",function(x)
      {
        //x=document.getElementById('punto').getAttribute("id")
        punto.style = "padding:0px";
        x=".";
        if (contador<8)
          { if (decimal==0)
            { if (contador==0)  //Punto al principio
                {
                  resultado="0"+resultado;
                  contador=contador+1
                }
              resultado=resultado+x;
              contador=contador+1;
              decimal=1; //me indica que ya tiene un punto
              imprime(resultado)
            }
          }
      }),

  sign.addEventListener("mouseup",function(x)
        {
          var cadena=""
          sign.style = "padding:0px";
          if (signo=="+")
              {
                x="-";
                resultado=x+resultado;
                contador=contador+1;
                imprime(resultado)
              }
          else
           {
             x="+";
             contador=contador-1;
             cadena=resultado.substring(1);
             resultado=cadena;
             imprime(resultado);    //imprime la cadena pero sin el signo.
           }
          signo=x;
        }),

  cuatro.addEventListener("mouseup",function(x)
    {
      cuatro.style = "padding:0px";
      x=document.getElementById('4').getAttribute("id")
      CDisplay(x);
    }),

    cinco.addEventListener("mouseup",function(x)
      {
        x=document.getElementById('5').getAttribute("id")
        cinco.style = "padding:0px";
        if (contador<8)
        {
          resultado=resultado+x;
          contador=contador+1;
          imprime(resultado)
        }
      }),
      seis.addEventListener("mouseup",function(x)
        {
          seis.style = "padding:0px";
          x=document.getElementById('6').getAttribute("id")

          if (contador<8)
          {
            resultado=resultado+x;
            contador=contador+1;
            imprime(resultado)
          }
        }),
    cero.addEventListener("mouseup",function(x)
      {
        cero.style = "padding:0px";
        x=document.getElementById('0').getAttribute("id");
         if (contador==0)  //cero al principio
         {
          CeroIzq="true";
         }
           CDisplay(x);
      })





function limpiardisplay()
  {
    document.getElementById("display").innerHTML = "0";
    var mensaje ="cifra1: "+ String(cifra1)+" operador :"+operador;
    document.getElementById("demo").innerHTML = mensaje;
    contador=0;
    decimal=0;
    signo="+";
  }  //termina funcion limpiardisplay

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
            if (num2!==0)
            {
              res = (num1) / (num2);
            }
            else
              {res="-ERROR-"}
            break;

  	}
    cifra1=res;   //esto es para el caso de que usuario no meta cifra1
    truncar(res)

    imprime(resultado)
    CeroIzq="false"
    resultado="";
	}  //termina funcion resolver

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
  } //termina funcion truncar

function imprime(resultado)
    {
      var temp=0;
      if (CeroIzq=="true" && contador==2)
      {
      temp=resultado.substring(1);
      contador=contador-1;
      resultado=temp;
      }
      document.getElementById("display").innerHTML = resultado;
      if (temp!==0 && contador==1)
         {
           CeroIzq="false"
         }
    }

function CDisplay(x)
{
  if (contador<8)
    {
      resultado=resultado+x;
      contador=contador+1;
      imprime(resultado)
    }
} //termina funcion CDisplay
function PrepLim()
{
  if (resultado=="")  //usuario no dio cifra1
   {
    resultado=cifra1;
  }
  cifra1=resultado;
  resultado="";
  operador1=1;
  limpiardisplay();
}
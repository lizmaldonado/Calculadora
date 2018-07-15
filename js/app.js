var cifra1=0, cifra2=0;cifra3=0; decimal=0, contador=0;
var resultado="";
var operador="mas"; signo="+";
var operador1=0;  //si o esta obteniendo la cifra1, si operador1=1 obtener cifra2
var CeroIzq=0;  //con valor 1 indica que hay un cero a la izq sin valor
var num1,num2;
var Undc1=0;    //con valor de 1 el usuario no dio cifra1

var cero = document.getElementById('0');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');

var on = document.getElementById('on');
var sign = document.getElementById('sign');
//var raiz = document.getElementById('raiz');
var entre = document.getElementById('dividido');
var por = document.getElementById('por');
var menos = document.getElementById('menos');
var mas = document.getElementById('mas');
var punto = document.getElementById('punto');
var igual = document.getElementById('igual');

  uno.addEventListener("mousedown",  function(x){
        uno.style="padding:3px";
    }),
    dos.addEventListener("mousedown", function(x){
        dos.style="padding:3px";
    }),
    tres.addEventListener("mousedown",  function(x){
        tres.style="padding:3px";
    }),
    cuatro.addEventListener("mousedown",  function(x){
        cuatro.style="padding:3px";
    }),
    cinco.addEventListener("mousedown", function(x){
        cinco.style="padding:3px";
    }),
    seis.addEventListener("mousedown",  function(x){
        seis.style="padding:3px";
    }),
    siete.addEventListener("mousedown", function(x){
        siete.style="padding:3px";
    }),
    ocho.addEventListener("mousedown",  function(x){
        ocho.style="padding:3px";
    }),
    nueve.addEventListener("mousedown", function(x){
        nueve.style="padding:3px";
    }),
    cero.addEventListener("mousedown", function(x){
        cero.style="padding:3px";
    }),
    on.addEventListener("mousedown",  function(x){
        on.style="padding:3px";
    }),
    mas.addEventListener("mousedown",  function(x){
        mas.style="padding:3px";
    }),
    menos.addEventListener("mousedown",  function(x){
        menos.style="padding:3px";
    }),
    por.addEventListener("mousedown", function(x){
        por.style="padding:3px";
    }),
    entre.addEventListener("mousedown", function(x){
        entre.style="padding:3px";
    }),
    igual.addEventListener("mousedown",  function(x){
        igual.style="padding:3px";
    }),

    sign.addEventListener("mousedown",function(x) {
      sign.style = "padding:3px";
    }),

    punto.addEventListener("mousedown",function(x) {
      punto.style = "padding:3px";
    }),


    on.addEventListener("mouseup",function(x)
        {
          on.style = "padding:0px";
          Resetear();
          Limpiardisplay();
        }),

    igual.addEventListener("mouseup",function(x)
        {
          igual.style = "padding:0px";

          if (resultado!="")   //el usuario dio las dos cifras
              {cifra2=resultado};

          if(Undc1==1 && resultado=="")
              {cifra2=cifra3; cifra1=cifra3 }        //el usuario tecleo +=

          if(Undc1==0 && resultado=="")    //el usuario solo tecleo =
                {
                  if (operador1==1 && cifra1!="")            //cuando paso por operador x=
                       { cifra2=cifra1; }
                   else{ cifra1=cifra3; }
                }
          decimal=0; //ya puede volver a escribir un "."
          signo="+";
          Resolver(cifra1,cifra2);
          contador=0;
          CeroIzq=0;
          Undc1=0;
          operador1=0;
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
                  Imprime(resultado)
                }
              }
          }),

    sign.addEventListener("mouseup",function(x)
            {
              var cadena=""
              sign.style = "padding:0px";
               if (contador>0)
               {
                  if (signo=="+")
                      {
                        x="-";
                        resultado=x+resultado;
                        contador=contador+1;
                        Imprime(resultado)
                      }
                  else
                   {
                     x="+";
                     contador=contador-1;
                     cadena=resultado.substring(1);
                     resultado=cadena;
                     Imprime(resultado);    //imprime la cadena pero sin el signo.
                   }
                  signo=x;
                }
                if (contador==0)
                Limpiardisplay();
            }),

    uno.addEventListener("mouseup",function(x)
        {
          uno.style = "padding:0px";
          x=document.getElementById('1').getAttribute("id")
          CDisplay(x);
        }),
    dos.addEventListener("mouseup",function(x)
        {
          dos.style = "padding:0px";
          x=document.getElementById('2').getAttribute("id")
          CDisplay(x);
        }),

    tres.addEventListener("mouseup",function(x)
        {
          tres.style = "padding:0px";
          x=document.getElementById('3').getAttribute("id")
          CDisplay(x);
        }),
    cuatro.addEventListener("mouseup",function(x)
        {
          cuatro.style = "padding:0px";
          x=document.getElementById('4').getAttribute("id")
          CDisplay(x);
        }),

    cinco.addEventListener("mouseup",function(x)
        {
          cinco.style = "padding:0px";
          x=document.getElementById('5').getAttribute("id")
          CDisplay(x);
        }),

    seis.addEventListener("mouseup",function(x)
          {
            seis.style = "padding:0px";
            x=document.getElementById('6').getAttribute("id")
            CDisplay(x);
          }),
    siete.addEventListener("mouseup",function(x)
        {
          siete.style = "padding:0px";
          x=document.getElementById('7').getAttribute("id")
          CDisplay(x);
        }),
    ocho.addEventListener("mouseup",function(x)
        {
          ocho.style = "padding:0px";
          x=document.getElementById('8').getAttribute("id")
          CDisplay(x);
        }),
    nueve.addEventListener("mouseup",function(x)
        {
          nueve.style = "padding:0px";
          x=document.getElementById('9').getAttribute("id")
          CDisplay(x);
        }),

    cero.addEventListener("mouseup",function(x)
          {
            cero.style = "padding:0px";
            x=document.getElementById('0').getAttribute("id");
             if (contador>0)  //quiere decir que no es cero al principio
             {
               CDisplay(x);
              }
              else
              {
                CeroIzq=1;
                Limpiardisplay();
              }
          })



  function Limpiardisplay()
    {
      document.getElementById("display").innerHTML = "0";

      contador=0;
      decimal=0;
      signo="+";
    }  //termina funcion limpiardisplay

  function Resolver()
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
              if (num2!==0 && CeroIzq!=1)
              {
                res = (num1) / (num2);
              }
              else
                {res="-ERROR-"}
              break;

    	}
      cifra3=res;   //esto es para el caso de que usuario no meta cifra1
      Truncar(res)

      Imprime(resultado)

      resultado="";
  	}  //termina funcion resolver

  function CdnaInt()
    {
      num1=parseFloat(cifra1)
      num2=parseFloat(cifra2)
    }

  function Truncar(res)
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

  function Imprime(resultado)
      {
        document.getElementById("display").innerHTML = resultado;
      }

  function CDisplay(x)
  {
    if (contador<8)
      {
        resultado=resultado+x;
        contador=contador+1;
        Imprime(resultado)
      }
  } //termina funcion CDisplay
  function PrepLim()
  {
    if (resultado=="")
     {
      resultado=cifra1;
      Undc1=1;            //usuario no dio cifra1
    }
    cifra1=resultado;
    resultado="";
    operador1=1;
    Limpiardisplay();
    document.getElementById("display").innerHTML = "";
  }
  function Resetear()
  {
    cifra1=0;cifra2=0;contador=0;
    resultado="";
    operador="mas";signo="+";
    decimal=0;
    operador1=0;
    num1=0,num2=0;
    CeroIzq=0;
    operador1=0;
     Undc1=0;
  }

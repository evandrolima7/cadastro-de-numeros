let valores = [];
let numEntrada = document.querySelector("input#numEntrada");
let recebeNum = document.querySelector("select#recebeNum");
let recebeDados = document.querySelector("div#recebeDados");

function adicionarNumero(){
   recebeDados.innerHTML="";
   if(Number(numEntrada.value)=="" || Number(numEntrada.value)<1 || Number(numEntrada.value)>100){
      alert("[ERRO] Por gentileza digitar uma número válido!");
      limpaCampo();
   }else{
      cadastrando();
   } 
}

function cadastrando(){
   if(!inLista(numEntrada.value, valores)){
      valores.push(Number(numEntrada.value));
      cadastroOpcao();
   }else{
      alert("[ERRO] O número digitado já está cadastrado.");
      limpaCampo();       
   }
}

function inLista(n, l){
      if(l.indexOf(Number(n)) != -1){
         return true;
      }else{
         return false;
      }
}

function limpaCampo(){
   numEntrada.value="";
   numEntrada.focus();
}

function cadastroOpcao(){
   let item = document.createElement("option");
   item.text=`Valor ${numEntrada.value} cadastrado.`;
   item.value=`tab${numEntrada.value}`;
   recebeNum.appendChild(item); 
   limpaCampo();
}

function finalizar(){
      let maior = valores[0];
      let menor = valores[0];
      let totalElem = valores.length;
      let somatoria = 0;

      for(pos in valores){
            somatoria+= valores[pos];
            if(valores[pos]> maior){
               maior = valores[pos];
            }
            if(valores[pos] < menor){
               menor = valores[pos];
            }
      }

      recebeDados.innerHTML+=`<p>Quantidade de números cadastrados ${totalElem}</p>
      <p>O maior número cadastrado é: ${maior}</p>
      <p>O menor número cadastrado é: ${menor}</p>
      <p>A somatória dos números é: ${somatoria}</p>
      <p>A média dos números cadastrados é: ${(somatoria/totalElem).toFixed(2)}</p>`;

      let resetando = document.createElement("button");
      resetando.innerHTML="Resetar os cálculos";
      resetando.id="resetandoCalc";
      resetando.addEventListener("click",function (){
                                                   valores.length=0;
                                                   recebeNum.innerHTML="";
                                                   recebeDados.innerHTML="";
                                                   limpaCampo();}
                                 );
      recebeDados.appendChild(resetando);
}
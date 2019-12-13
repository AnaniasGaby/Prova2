var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'Qual a capital de São Paulo?',options:['São Paulo','São Luís','Fortaleza','Recife'],answer:1},
                          
                          {q:'Qual a capital de Sergipe?',options:['Rio de Janeiro','Florianópolis','Aracaju','Rio de Janeiro'],answer:3},

                          {q:'Qual a capital do Maranhão?',options:['Goiânia','Cuiabá','Vitória','São Luís'],answer:4},

                          {q:'Qual a capital de Alagoas?',options:['Maceió','Curitiba','Teresina', 'Porto Velho'],answer:1},

                          {q:'Qual a capital de Rondônia?',options:['Salvador','São Luís','Porto Velho','Maceió'],answer:3},
                          
                          {q:'Qual a capital do Paraná?', options:['Rio Branco','Salvador','Curitiba','Teresina'],answer:3},
                    
                          {q:'Qual a capital do Acre?', options:['Rio Branco','Campo Grande','Florianópolis','Belém'],answer:1},

                          {q:'Qual a capital de Minas Gerais?',options:['São Paulo','Porto Alegre','Belo Horizonte','João Pessoa'],answer:3},

                          {q:'Qual a capital do Rio Grande do Norte?',options:['Palmas','São Paulo','Porto Alegre','Natal'],answer:4},
                    
                          {q:'Qual a capital de Santa Catarina?', options:['Rio de Janeiro','Florianópolis','Maceió','Palmas'],answer:2},

                          {q:'Qual a capital do Distrito Federal?',options:['Goiânia','Cuiabá','Brasília','Fortaleza'],answer:3},

                          {q:'Qual a capital de Goiás?',options:['Goiânia','Curitiba','Teresina', 'Macapá'],answer:1},
                    
                          {q:'Qual a capital do Mato Grosso do Sul?', options:['Florianópolis','Aracaju','Rio de Janeiro','Campo Grande'],answer:4},

                          {q:'Qual a capital do Rio Grande so Sul?',options:['São Paulo','Porto Alegre','Campo Grande','João Pessoa'],answer:2},
                        
                          {q:'Qual a capital de Pernambuco?', options:['São Luís','Porto Velho','Maceió','Recife'],answer:4},

                          {q:'Qual a capital da Bahia?',options:['Rio Branco','Salvador','São Luís','Fortaleza'],answer:2},
                            
                          {q:'Qual a capital da Paraíba?',options:['Vitória','Belém','Teresina','João Pessoa'],answer:4},

                          {q:'Qual a capital de Tocantins?',options:['Maceió','Palmas','São Paulo','Porto Alegre'],answer:2},
                          
                          {q:'Qual a capital de Roraima?', options:['Maceió','Palmas','Boa Vista','Campo Grande'],answer:3},

                          {q:'Qual a capital do Rio de Janeiro?',options:['Rio de Janeiro','Florianópolis','Belém','Porto Velho',],answer:1},

                          {q:'Qual a capital do Mato Grosso?',options:['Goiânia','Cuiabá','Vitória','Belém'],answer:2},
                    
                          {q:'Qual a capital do Amazonas?', options:['Campo Grande','João Pessoa','Manaus','Salvador'],answer:3},

                          {q:'Qual a capital do Piauí?',options:['Teresina','Belo Horizonte','Aracaju','Natal'],answer:1},
                          
                          {q:'Qual a capital do Pará?', options:['Vitória','Belém','Teresina','Macapá'],answer:2},

                          {q:'Qual a capital do Ceará?',options:['Salvador','Curitiba','Teresina','Fortaleza'],answer:4},
                    
                          {q:'Qual a capital do Espírito Santo?', options:['Vitória','Porto Alegre','Macapá','João Pessoa'],answer:1},

                          {q:'Qual a capital do Amapá?',options:['Teresina','Macapá','Rio Branco','Salvador'],answer:2},
                    
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="FIM DO JOGO!!!";      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correto";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Incorreto";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className='';

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.score+"/"+this.questions.length;
                }
 
           };


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 

    function  reset(){
              app.reset();
              app.clickAble();
         } 



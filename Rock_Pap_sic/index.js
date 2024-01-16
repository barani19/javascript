 let user='';
        let result=''
        const score = JSON.parse(localStorage.getItem('score')) || {Win: 0,Lose:0,Tie:0};
        console.log(localStorage.getItem('score'));
        const arr = ['rock','paper','Siscor'];
       updateScore();
        function rps(){
           let ran = Math.floor(Math.random()*3);
           if(arr[ran]==user) result='Tie';
           else if(arr[ran]=='rock'){
              if(user=='paper') result='user';
              else if(user=='Siscor') result='comp';
           }
           else if(arr[ran]=='paper'){
              if(user=='rock') result='comp';
              else if(user=='Siscor') result='user';
           }
           else if(arr[ran]=='Siscor'){
              if(user=='paper') result='comp';
              else if(user=='rock') result='user';
           }
           cal();
           updateScore();
           Win();
           document.querySelector('.option').innerHTML = `  <img src="images/${user}.png" alt="" class="Anime">  `;
           document.querySelector('.option1').innerHTML = `<img src="images/${arr[ran]}.png" alt="" class="Anime">`
        }
        function Win(){
         document.querySelector('.Winner').innerHTML = result;
        
        }
        function updateScore(){
         document.querySelector('.result').innerHTML = `Win: ${score.Win} Lose: ${score.Lose} Tie: ${score.Tie}`;
        }
        function cal(){
         if(result==='Tie') score.Tie+=1;
         if(result==='user') score.Win+=1;
         if(result==='comp') score.Lose+=1;
         localStorage.setItem('score',JSON.stringify(score));
        }
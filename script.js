const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((hero) => {
    hero.onclick = () =>{
        if(hero.id == 'clear'){
            display.innerText = '';
        } 
        else if(hero.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length - 1);
        } 
        else if( hero.id == 'sqrt'){
            display.innerText=Math.sqrt(display.innerText,2);
        }

         else if (display.innerText != '' && hero.id == 'equal'){
            display.innerText = eval(display.innerText);
        } 
        else if (display.innertext == '' && hero.id == 'equal'){
            display.innerText = 'Empty!';
            setTimeout(()=>(display.innerText = ''),2000);
        } 
        else {
            display.innerText += hero.id;
    
         }    
        
        }

         
});
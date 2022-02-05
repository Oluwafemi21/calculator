const btn = document.querySelectorAll('button');
const result = document.getElementById('input_field');

const theme = document.getElementById('body');
const equal = document.getElementById('equal');
const reset = document.getElementById('reset');

let value = '';
btn.forEach(buttons => {
    buttons.addEventListener('click',(e)=>{
        e.preventDefault();
        value += e.target.value;
        console.log(value)
    });

});

equal.addEventListener('click',(e)=>{
    e.preventDefault();
   if(theme.classList.contains('home')){
       theme.classList.remove('home');
       theme.classList.add('theme-2')
   } else{
      theme.classList.add('theme-2');
   }
    
});

reset.addEventListener('click',(e)=>{
    e.preventDefault();
   if(theme.classList.contains('theme-2')){
       theme.classList.remove('theme-2');
       theme.classList.add('theme-3')
   } else{
      theme.classList.add('theme-3');
   }
    
});


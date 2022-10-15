
let T1 = document.getElementById("T1");

let T2 = document.getElementById("T2");

let T3 = document.getElementById("T3");




let ini = document.getElementById('ini');

ini.addEventListener('click', (e) =>{
T1.style.visibility = 'visible';
T2.style.visibility ='hidden';
T3.style.visibility = 'hidden';

});

let So = document.getElementById('So');

So.addEventListener('click', (e) =>{

    T1.style.visibility = 'hidden';
T2.style.visibility ='visible';
T3.style.visibility = 'hidden';
});

let Pro = document.getElementById('Pro');

Pro.addEventListener('click', (e) =>{
    
    T1.style.visibility = 'hidden';
T2.style.visibility ='hidden';
T3.style.visibility = 'visible';
});

let Ha = document.getElementById('Ha');

Ha.addEventListener('click', (e)=>{
    alert()
});



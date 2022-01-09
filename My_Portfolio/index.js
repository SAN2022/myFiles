var myName = document.getElementById('name');
var details = document.getElementById('details');

var home = document.getElementById('home');
var objective = document.getElementById('objective');
var qualification = document.getElementById('qualification');
var tech = document.getElementById('tech');

home.style.visibility = 'visible';

// window.onload = function()
// {    
//     myName.style.left = '0';
//     details.style.left = '0';        
// }

function fun1()
{
    home.style.visibility = 'visible';
    objective.style.visibility = 'hidden';
    qualification.style.visibility = 'hidden';
    tech.style.visibility = 'hidden';

    setTimeout(()=>{
        myName.style.left = '0';
        details.style.left = '0';        
    },4000);
}
// setTimeout(()=>{
//     function pos()
//     {
        
//     }
// },6000);
function fun2()
{
    objective.style.visibility = 'visible';
    home.style.visibility = 'hidden';
    qualification.style.visibility = 'hidden';
    tech.style.visibility = 'hidden';
}
function fun3()
{
    qualification.style.visibility = 'visible';
    home.style.visibility = 'hidden';
    objective.style.visibility = 'hidden';
    tech.style.visibility = 'hidden';
    
    var head = document.getElementsByClassName('edu-head');

    for(var i=0;i<5;i++)
    {
        head[i].style.top = 0;
    }    

    var course = document.getElementsByClassName('course');
        
    setTimeout(()=>{
        course[0].style.left = 0;    
    },1000);
    setTimeout(()=>{
        course[1].style.left = 0;    
    },2000);
    setTimeout(()=>{
        course[2].style.left = 0;    
    },3000);    

    var line1 = document.getElementsByClassName('line1');
    var line2 = document.getElementsByClassName('line2');
    var line3 = document.getElementsByClassName('line3');

    setTimeout(()=>{
        line1[0].style.top = 0;
    },3000);
    setTimeout(()=>{
        line1[1].style.top = 0;
    },4000);
    setTimeout(()=>{
        line1[2].style.top = 0;
    },5000);
    setTimeout(()=>{
        line1[3].style.top = 0;
    },6000);

    setTimeout(()=>{
        line2[0].style.top = 0;
    },7000);
    setTimeout(()=>{
        line2[1].style.top = 0;
    },8000);
    setTimeout(()=>{
        line2[2].style.top = 0;
    },9000);
    setTimeout(()=>{
        line2[3].style.top = 0;
    },10000);

    setTimeout(()=>{
        line3[0].style.top = 0;
    },11000);
    setTimeout(()=>{
        line3[1].style.top = 0;
    },12000);
    setTimeout(()=>{
        line3[2].style.top = 0;
    },13000);
    setTimeout(()=>{
        line3[3].style.top = 0;
    },14000);
    
}
function fun5()
{
    tech.style.visibility = 'visible';
    home.style.visibility = 'hidden';
    objective.style.visibility = 'hidden';
    qualification.style.visibility = 'hidden';

var inc = document.getElementsByClassName('move');
var width1 = 0, width2 = 0, width3 = 0, width4 = 0, width5 = 0, width6 = 0;
var clang = setInterval(function()
{
    width1++;
    inc[0].style.width = width1 + 'px';
    inc[0].style.backgroundColor = 'gold';
    if(width1 === 130)
    {
        clearInterval(clang);
    }
},20);
var html = setInterval(function()
{   
    width2++;
    inc[1].style.width = width2 + 'px';
    inc[1].style.backgroundColor = 'gold';
    if(width2 === 140)
    {
        clearInterval(html);
    }
},30);
var css = setInterval(function()
{
    width3++;
    inc[2].style.width = width3 + 'px';
    inc[2].style.backgroundColor = 'gold';
    if(width3 === 135)
    {
        clearInterval(css);
    }
},40);
var bs = setInterval(function()
{    
    width4++;
    inc[3].style.width = width4 + 'px';
    inc[3].style.backgroundColor = 'gold';
    if(width4 === 110)
    {
        clearInterval(bs);
    }
},50);
var js = setInterval(function()
{
    width5++;
    inc[4].style.width = width5 + 'px';
    inc[4].style.backgroundColor = 'gold';
    if(width5 === 115)
    {
        clearInterval(js);
    }
},60);
var rjs = setInterval(function()
{
    width6++;
    inc[5].style.width = width6 + 'px';
    inc[5].style.backgroundColor = 'gold';
    if(width6 === 100)
    {
        clearInterval(rjs);
    }
},70);
}

var username = document.getElementById('username');
var password = document.getElementById('password');
var form = document.getElementById('form');
var userpass = document.getElementById('user-pass');
var shutter = document.getElementById('shutter');
var navigations = document.getElementsByClassName('navigations');
var msg = document.getElementById('msg');
var img = document.getElementById('img');


function validate()
{
    if((username.value === 'I am a user') && (password.value === 'password'))
    {
        fun1();
        form.style.visibility = 'hidden';

        userpass.style.visibility = 'hidden';

        setTimeout(()=>{
            shutter.style.top = '-1250%';
        },2000);

        setTimeout(()=>{
            for(var z=0;z<navigations.length;z++)
            {
                navigations[z].style.visibility = 'visible';
            }
        },3000);        

        setTimeout(() => {
            img.style.opacity = '1';        
        }, 3000);

        var colors = ['lightgrey','dimgrey','darkslategrey','lightcyan'];
        for(var c=0;c<colors.length;c++)
        {
            setInterval(()=>{
                home.style.backgroundColor = colors[c];
            },1000);
        }
    }

    else
    {
        alert('Login credentials maybe wrong..!');
    }
    username.value = '';
    password.value = '';
}
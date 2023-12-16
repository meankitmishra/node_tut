//setInterval and clearIntervals

//setInterval =>> what this will do is it will repeatedly call a function or execute a snippet, a code snippet with a fixed time delay between each call.

let intervalID;




function startChange(){
    if(!intervalID){
        intervalID = setInterval(changeRandomColor, 2000);
    }
}

function mycallback(){
    if(document.body.style.backgroundColor !== 'black'){
        document.body.style.backgroundColor= 'black';
        document.body.style.color='white';
    }else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
    }
}

function changeRandomColor(){
    const randomcolor = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor= `#${randomcolor}`;

}



function stopchange(){
    clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopchange);
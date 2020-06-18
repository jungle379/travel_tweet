disp_count = document.getElementById("disp-count");
up = document.getElementById("up");
down = document.getElementById("down");
count = 0;

up.addEventListener('click',function(){
count += 1;
disp_count.innerHTML = count;
})
down.addEventListener('click',function(){
count -= 1;
disp_count.innerHTML = count;
});
document.getElementById('up').addEventListener('click',function(){
document.getElementById('target').style.color='red';
});
document.getElementById('down').addEventListener('click',function(){
document.getElementById('target').style.color='';
});
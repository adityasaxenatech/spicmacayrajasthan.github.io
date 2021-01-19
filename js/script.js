function init(){
    document.querySelector('#jewel-1-main').style.display='none';
}

init();

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('#jewel-1-main').style.display='block';
});
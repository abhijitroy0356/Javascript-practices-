const track=document.querySelector('.btn');
const msg=document.querySelector('.main2');
const ad=document.querySelector('.msg')

track.addEventListener('click',function(){
    msg.classList.add('open');

})
function del(){
    msg.classList.remove('open');
}

document.addEventListener('keydown',function(e){
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let btn=document.querySelector(`div[data-key="${e.keyCode}"]`)
    
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
  

btn.classList.add('playing')

})
let drums=document.querySelectorAll('.drum')
drums.forEach(drum => {
    drum.addEventListener('transitionend',removetrans)
})

function removetrans (e) {
if(e.propertyName !== "transform") return ;
this.classList.remove('playing')
}
let keys=document.getElementsByClassName('drum');
for (let i=0 ; i<keys.length ;i++)
{
   keys[i].addEventListener('click',function(e){
       let audio=document.querySelectorAll('audio')
    if (keys[i].getAttribute('data-key') ==audio[i].getAttribute('data-key')){
         audio[i].currentTime = 0;
    audio[i].play();
    keys[i].classList.add('playing')
  
    }
})
}
var channelTitles = document.getElementsByClassName('channel-title');
var channelBodies = document.getElementsByClassName('channel-body');

for( var i=0 ; i< channelTitles.length ; i++){
  channelTitles[i].addEventListener('click' ,handleClick );
};

function handleClick(e){
  for( var j=0 ; j < channelBodies.length ; j++){
    channelBodies[j].style.height = '0';
  // channelBodies[j].style.transitionDuration = '0s';
  }
var target =  e.target.parentNode.previousElementSibling;
target.style.height = '100%';
// target.style.transitionDuration = '20s';

var footerText = document.getElementById('footerNote') ;
footerText.innerHTML = "<h6>currently playing</h6><h4>" + e.target.innerHTML + "</h4>";
}

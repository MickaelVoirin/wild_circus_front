
// Fonction d'animation scroll
var time = '';
var animMenu = function(cible){
   
  var avancee = window.scrollY;
  var sens = 0;
  if((cible - avancee) < 0){sens = 1;}
  time = setInterval(
    function(){
      if(sens == 0){
        avancee += 5; 
        if(avancee >= cible){clearInterval(time);}
      } else {
        avancee -= 5; 
        if(avancee <= cible + 5){clearInterval(time);}
      }
      window.scrollTo(0, avancee);
    } , 5);
  idInt = time;
}



// Contenu global
// Click sur chaque bouton du menu
var margeHaute = -82;
var menu = window.document.getElementsByClassName('menu');
var target = '';
for(var i in menu){
 if(!isNaN(parseFloat(i))){ 
    menu[i].onclick = function(){
      if(time !=''){
        clearInterval(time);
      }
       var cible = window.document.getElementById(this.id + 's').offsetTop + margeHaute;
      animMenu(cible);
      target = cible;
    }
 }
}


var video = 0;
// Au scroll, le menu change d'état
var margeSupp = -350;
window.onscroll = function(){ 
  var position = window.scrollY - margeHaute - margeSupp;
  var compteur;
  // Compteur = section cible du scroll en cour
  // Scroll utilisateur
  if(target == ''){
  for(var j in menu){
   if(!isNaN(parseFloat(j))){ 
     if(window.document.getElementById(menu[j].id + 's').offsetTop < position){
      compteur = j;
     }
   }
  }
    // Scroll menu
  } else {
    for(var j in menu){
   if(!isNaN(parseFloat(j))){ 
     if(window.document.getElementById(menu[j].id + 's').offsetTop == target - margeHaute){
      compteur = j;
     }
   }
  }
    if(position <= target - margeSupp - margeHaute + 10 && position >= target - margeSupp - margeHaute - 10){
      target = '';
    }
  }
  
 // Changements états selon compteur cible
   for(var k in menu){
    if(!isNaN(parseFloat(k))){ 
     if(k == compteur){ 
      menu[k].style.backgroundColor = '#F08323';
        window.document.getElementById(menu[k].id + 's').style.opacity=1;
       if(compteur != 1){
          player.pauseVideo();
         if(video != 0){
           clearTimeout(video);
           video = 2;
         }
       } else if(video == 0){
          video = setTimeout(function(){
             player.playVideo();
          }, 1500);
       }
     } else {
       window.document.getElementById(menu[k].id + 's').style.opacity=0.5;
      menu[k].style.backgroundColor = 'transparent';
     }
    }  
   } 
  
}
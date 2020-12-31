
  export  default function sidenavbar(){

        if(document.getElementsByClassName('burger')[0].style.display)return;

        if(!document.getElementsByClassName('mysidenavbar')[0].style.display)
          document.getElementsByClassName('mysidenavbar')[0].style.display='block';
        else
          document.getElementsByClassName('mysidenavbar')[0].style.display=null;
      }

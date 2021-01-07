
  export  default function sidenavbar(){

      /*  if(document.getElementsByClassName('burger')[0].style.display )return;

        if(!document.getElementsByClassName('mysidenavbar')[0].style.display)
          document.getElementsByClassName('mysidenavbar')[0].style.display='block';
        else
          document.getElementsByClassName('mysidenavbar')[0].style.display=null;*/

              var input=document.getElementsByClassName('sidenav_list')[0];
              if(input.style.display=="flex")
              input.style.display=null;
              else
              input.style.display="flex";
      }

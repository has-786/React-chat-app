
  export  default function sidenavbar(evt){
  //  alert(evt);
      if(!evt)return;
      //alert(evt.target.tagName+" "+evt.target.className);
      const className=evt.target.className;
      if(className.includes('burger') || className.includes('list-group-item list-group-item-action'))
          {
              var input=document.getElementsByClassName('sidenav_list')[0];
              if(input.style.display=="flex")
              input.style.display=null;
              else
              input.style.display="flex";
            }
      }

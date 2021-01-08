
export function menu_expansion(class_name)
{
    var input=document.getElementsByClassName(class_name)[0];
    if(input.style.display=="flex")
    input.style.display=null;
    else
    input.style.display="flex";
}
export function Level1_expansion(classname)
{
    //flag to check if clinicalsuitem clicked?
    var flag=0;
    if(classname=="clinicalSubitem")
    flag=1;
    var input_class=document.getElementsByClassName(classname);
    var level2=document.getElementsByClassName("level2");
    var level3=document.getElementsByClassName("level3");
    //for collapsing the subitems on clicked menu if open
    if(input_class[0].style.display == "block")
    {
        for(var i=0;i<input_class.length;i++)
        {
            input_class[i].style.display="none";
        }
        if(flag==1)
        {
            for(var i=0;i<level3.length;i++)
            {
                level3[i].style.display="none";
                
            }
        }
    }
    //collapse all the other subitems and open the clicked menu subitem
    else{
            for(var i=0;i<level2.length;i++)
            {
                level2[i].style.display="none";
                
            }
            for(var i=0;i<level3.length;i++)
            {
                level3[i].style.display="none";
                
            }

            for(var i=0;i<input_class.length;i++)
            {
                input_class[i].style.display="block";
            }
    }
   
}
export function Level2_expansion(classname)
{
    var input_class=document.getElementsByClassName(classname);
    var level3=document.getElementsByClassName("level3");
    if(input_class[0].style.display == "block")
    {
        for(var i=0;i<input_class.length;i++)
        {
            input_class[i].style.display="none";
        }
    }
    else{
        for(var i=0;i<level3.length;i++)
            {
                level3[i].style.display="none";
            }

        for(var i=0;i<input_class.length;i++)
        {
            input_class[i].style.display="block";
        }
    }
   //
   
}
 
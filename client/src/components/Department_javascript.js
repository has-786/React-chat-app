
export function Level1_expansion(classname)
{
    var input_class=document.getElementsByClassName(classname);
    var level2=document.getElementsByClassName("level2");
    var level3=document.getElementsByClassName("level3");
    if(input_class[0].style.display == "block")
    {
        for(var i=0;i<input_class.length;i++)
        {
            input_class[i].style.display="none";
        }
    }
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

}

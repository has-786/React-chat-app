export function Level1_expansion(id)
{
    var id=document.getElementById(id);
    var level1=document.getElementsByClassName("level1");
    if(id.style.display == "block")
    {
        id.style.display = "none"
    }
    else
        {
            for(var i=0;i<level1.length;i++)
            {
                level1[i].style.display="none";
            }
            id.style.display="block";
        }
}
export function Level2_expansion(id)
{
    var id=document.getElementById(id);
    var level1=document.getElementsByClassName("level2");
    if(id.style.display == "block")
    {
        id.style.display = "none"
    }
    else
        {
            for(var i=0;i<level1.length;i++)
            {
                level1[i].style.display="none";
            }
            id.style.display="block";
        }
}
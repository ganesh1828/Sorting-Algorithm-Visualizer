
function insertion()
{
    c_delay=0;
    var array_size=document.getElementById("arr_size1").value;
    console.log("in insertion");
    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],arr[j],"yellow");//Color update

        var key= arr[j];
        var i=j-1;
        while(i>=0 && arr[i]>key)
        {
            div_update(divs[i],arr[i],"red");//Color update
            div_update(divs[i+1],arr[i+1],"red");//Color update

            arr[i+1]=arr[i];

            div_update(divs[i],arr[i],"red");//Height update
            div_update(divs[i+1],arr[i+1],"red");//Height update
    
            div_update(divs[i],arr[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],arr[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],arr[i+1],"blue");//Color update
            }
            i-=1;
        }
        arr[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],arr[t],"green");//Color update
        }
    }
    div_update(divs[j-1],arr[j-1],"green");//Color update

    
}
function Bubble()
{
  $("#bbl").show();
  $("#insert").hide();
  $("#select").hide();
  $("#merge").hide();
  $("#radix").hide();
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[array_size],div_sizes[array_size],"green",1);
        div_update(divs[array_size],div_sizes[array_size],"#d7385e",1);
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow",2);//Color update
            div_update(divs[array_size],div_sizes[array_size],"yellow",2);

            div_update(divs[array_size],div_sizes[array_size],"yellow",3);
            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[array_size],div_sizes[array_size],"yellow",3);
                div_update(divs[array_size],div_sizes[array_size],"yellow",4);

                div_update(divs[j],div_sizes[j], "#400082");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#400082");//Color update



                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;


                div_update(divs[j],div_sizes[j], "#400082");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#400082");//Height update

                div_update(divs[array_size],div_sizes[array_size],"yellow",4);
            }
            else
              div_update(divs[array_size],div_sizes[array_size],"yellow",3);
            div_update(divs[j],div_sizes[j], "#d7385e");//Color update

        }
        div_update(divs[j],div_sizes[j], "#428b46");//Color update
    }
    div_update(divs[0],div_sizes[0], "#428b46");//Color update

    enable_buttons();
}

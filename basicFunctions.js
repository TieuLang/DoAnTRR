//We only have to change background-color and height of the sorting element.

var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=8;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }

    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color,index)
{
    window.setTimeout(function(){
        $("#line"+index).toggleClass("addcolor");
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function div_update1(cont,kc1,kc2,poe1,poe2,sl,i)
{
    window.setTimeout(function(){
        window.setInterval(function(){
            if (sl<=0) {
                window.clearInterval();
            } else {
                poe1 = poe1 + kc1;
                poe2 = poe2 + kc2;
                cont.style.top = poe1 + "px";
                cont.style.left = poe2 + "px";
                sl=sl-1;
                delay=delay_time;
            };
        },delay_time);
        cont.style.top=poe1+"px";
        cont.style.left = poe2 + "px";
    },c_delay+=delay_time*100);
    
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}

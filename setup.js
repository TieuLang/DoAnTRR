$("#bbl").hide();
$("#insert").hide();
$("#select").hide();
$("#merge").hide();
$("#radix").hide();

var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var buts_algo=document.querySelectorAll(".algos button");

var div_sizes=[];   
var divs=[];
var text=[];
var margin_size;
var cont=document.getElementById("array"); 
cont.style="flex-direction:row";
inp_gen.addEventListener("click",generate_array);

function generate_array()
{
    cont.innerHTML="";
    cont.style.alignItems="flex-end";
    array_size=inp_as.value
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 8*(inp_as.max - inp_as.min) )+10;
        divs[i]=document.createElement("div");
        text[i]=document.createElement("pp");
        text[i].textContent=div_sizes[i];
        divs[i].appendChild(text[i]);
        cont.appendChild(divs[i]);
        margin_size=0.5;
        divs[i].style="margin: 0%" + margin_size + "% ;; background-color:#d7385e; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

var nganxep=[]
var bool11=true;

function generate_array_RS()
{
    cont.innerHTML="";
    cont.style.alignItems="center";
    array_size=inp_as.value;
    var stt=document.getElementById("stt");
    if (bool11)
    {
        for (var i=0;i<10;i++)
        {
            nganxep[i]=document.createElement("div2");
            tmp=document.createElement("pp2");
            tmp.textContent=i;
            nganxep[i].appendChild(tmp);
            stt.appendChild(nganxep[i]);
        }
        bool11=false;
    }
    
    var tmp1=10;
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 8*(inp_as.max - inp_as.min) )+10;
        divs[i]=document.createElement("div1");
        divs[i].id="arr"+i;
        text[i]=document.createElement("pp");
        text[i].textContent=div_sizes[i];
        divs[i].appendChild(text[i]);
        divs[i].style.left=tmp1+"px";
        divs[i].style.top=0+"px"; 
        divs[i].style.margin_left=35+"px";
        cont.appendChild(divs[i]);
        tmp1=tmp1+10;
     }
}
function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.

for(var i=0;i<buts_algo.length;i++)
{
    
    buts_algo[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}
function runalgo()
{
    this.classList.add("butt_selected");    
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Radix Sort":
            {
                generate_array_RS();
                
                // var redElem=document.getElementById("test");
                // var kc1=(338-parseInt(divs[0].style.top))/100;

                // var kc2=(57-parseInt(divs[0].style.left)+91*7)/100;
                // var poe1=0;
                // var poe2=0;
                // var sll=0;
                // var anim=setInterval(animate,10);
                // function animate()
                // {
                //     if (sll>=100)
                //     {
                //         clearInterval(anim);
                //     } else
                //     {
                //         poe1=poe1+kc1;
                //         poe2=poe2+kc2;
                //         divs[0].style.top=poe1+"px";
                //         divs[0].style.left=poe2+"px";
                //         sll=sll+1;
                //     };
                // }
                Radixsort();
            }
            break;
    }
}

function Radixsort()
{
    $("#bbl").hide();
    $("#insert").hide();
    $("#select").hide();
    $("#merge").hide();
    $("#radix").show();
    c_delay=0;
    var m=div_sizes[0];
    for (var i=0;i<array_size;i++)
        if (m<div_sizes[i]) m=div_sizes[i];
    for (var exp=1;Math.floor(m/exp)>0;exp=exp*10)
    {
        
        var stack=new Array(10);
        for (var i=0;i<10;i++) stack[i]=new Array();
        for (var i=0;i<array_size;i++)
        {
            var vt=Math.floor(div_sizes[i]/exp)%10;
            stack[Math.floor(div_sizes[i]/exp)%10].push(div_sizes[i]);
            text[i].textContent="";
            
            var tmp=document.getElementById((Math.floor(div_sizes[i]/exp)%10));
            
            tmp.textContent=tmp.textContent+" "+div_sizes[i];
            
            margin_size=0.5;
            divs[i].style="margin: 0%" + margin_size + "% ;; background-color:#d7385e; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (0) + "%;";    
            div_update(divs[i],0,"yellow",1);
        };
        
        var tmp=0;
        for (var i=0;i<10;i++)
            for (var j=0;j<stack[i].length;j++)
            {
                div_sizes[tmp]=stack[i][j];
                var tmp1=document.getElementById((Math.floor(div_sizes[tmp]/exp)%10));
                var st=new  String();
                st=tmp1.textContent;
                st.replace((" "+div_sizes[tmp]),"");
                tmp1.textContent=st;
                text[tmp].textContent=div_sizes[tmp];
                margin_size=0.5;
                divs[tmp].style="margin: 0%" + margin_size + "% ;; background-color:#d7385e; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[tmp]) + "%;";    
                div_update(divs[tmp],div_sizes[tmp],"yellow",1);
                tmp=tmp+1;
            };
        
    };
}
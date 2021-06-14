function Radixsort() {
    $("#bbl").hide();
    $("#insert").hide();
    $("#select").hide();
    $("#merge").hide();
    $("#radix").show();
    c_delay = 0;
    var m = div_sizes[0];
    var stack_vt=new Array(10);
    var stack = new Array(10);
    var chieu_cao=new Array(10);
    exp = 1;
    var divs_top=[]
    var divs_left=[]

    for (var i=0;i<array_size;i++)
    {
        if (m<div_sizes[i]) m=div_sizes[i];
        divs_left[i]=parseInt(divs[i].style.left);
        divs_top[i]=parseInt(divs[i].style.top);
    }
        
    for (var exp=1;Math.floor(m/exp)>0;exp=exp*10)
    {
        for (var i = 0; i < 10; i++) 
        {
            stack_vt[i]=new Array();
            stack[i] = new Array();
            chieu_cao[i]=0;
        };
        var stack=new Array(10);
        for (var i=0;i<10;i++) stack[i]=new Array();
        for (var i=0;i<array_size;i++)
        {
            var vt=Math.floor(div_sizes[i]/exp)%10;
            stack[Math.floor(div_sizes[i]/exp)%10].push(div_sizes[i]);
            stack_vt[Math.floor(div_sizes[i]/exp)%10].push(i);
            var ttmp = document.getElementById("test");
            var kc1 = (338 - parseInt(divs_top[i])-chieu_cao[vt]) / 100;
            var kc2 = (57 - parseInt(divs_left[i]) + 91 * vt - i * 21.8) / 100;
            divs_top[i]=338-chieu_cao[vt];
            divs_left[i]=57+91*vt-i*21.8;
            var poe1 = 0;
            var poe2 = 0;
            var sll = 0;
            div_update1(divs[i],kc1,kc2,poe1,poe2,100,i);
            ttmp.innerHTML=i;
            chieu_cao[vt]+=30;     
        };
        var tmp=0;
        var vt_left=0;
        for (var i=0;i<10;i++)
            for (var j=0;j<stack[i].length;j++)
            {
                div_sizes[tmp]=stack[i][j];
                var vt=stack_vt[i][j];
                var kc1 = (100 - parseInt(divs_top[i])) / 100;
                var kc2 = (57 - parseInt(divs_left[i]) +vt_left) / 100;
                var poe1 = 0;
                var poe2 = 0;
                var test=document.getElementById("test");
                test.innerHTML=parseInt(divs[0].style.top);
                div_update1(divs[vt],kc1,kc2,poe1,poe2,100,vt);
                chieu_cao[vt]-=30;
                vt_left+=30;
                tmp=tmp+1;
            };

    };
}
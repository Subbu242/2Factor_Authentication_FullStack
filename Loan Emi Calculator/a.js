let p=0,r=0,n=0,num=0,de=0,ans=0;
function fun()
{
    p=parseFloat(document.getElementById('amt').value);
    n=parseFloat(document.getElementById('time').value);
    r=parseFloat(document.getElementById('rate').value)/1200;
    num=Math.pow((1+r),n);
    de=num-1;
    Math.pow()
    ans=p*r*num/de;
    document.getElementById('emi').innerHTML=Math.round(ans)+" &#x20B9";
    document.getElementById('amt').value='';
    document.getElementById('time').value='';
    document.getElementById('rate').value='';
}
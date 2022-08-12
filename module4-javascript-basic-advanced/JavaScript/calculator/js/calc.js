function clr()
{
    document.getElementById("result").value="";
}

function disp(val)
{
    document.getElementById("result").value+=val;
}

function finalresult()
{
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}
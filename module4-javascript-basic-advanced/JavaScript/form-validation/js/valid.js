function v()
{
    if(document.frm.name.value=="")
    {
        alert('Please Enter Your name Here')
        document.frm.name.focus();
        return false;
    }
    // regular expression 
    var nm=/^[A-Za-z]+$/;
    if(!nm.test(document.frm.name.value))
    {
        alert('Please Enter Your name only alphabetic charcter Here')
        document.frm.name.focus();
        return false;
    }

    if(document.frm.fname.value=="")
    {
        alert('Please Enter Your Firstname Here')
        document.frm.fname.focus();
        return false;
    }
    // regular expression 
    var nm=/^[A-Za-z]+$/;
    if(!nm.test(document.frm.fname.value))
    {
        alert('Please Enter Your Firstname only alphabetic charcter Here')
        document.frm.fname.focus();
        return false;
    }

    if(document.frm.lname.value=="")
    {
        alert('Please Enter Your Lastname Here')
        document.frm.lname.focus();
        return false;
    }
    // regular expression 
    var nm=/^[A-Za-z]+$/;
    if(!nm.test(document.frm.lname.value))
    {
        alert('Please Enter Your Lastname only alphabetic character Here')
        document.frm.lname.focus();
        return false;
    }


    if(document.frm.email.value=="")
    {
        alert('Please Enter Your Email Here')
        document.frm.email.focus();
        return false;
    }
    //regular expression 
    var em= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!em.test(document.frm.email.value))
    {
        alert('Please Enter Your Valid email Address')
        document.frm.email.focus();
        return false;
    }

    if(document.frm.pass.value=="")
    {
        alert('Please Enter Your Password Here')
        document.frm.pass.focus();
        return false;
    }
}
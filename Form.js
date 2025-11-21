
let valid=()=> {

    let Name= document.querySelector('#name').value.trim()
    let Num= document.querySelector('#num').value.trim()
    let Email= document.querySelector('#email').value.trim()
    let Pass= document.querySelector('#pass').value.trim()
    let Cpass= document.querySelector('#cpass').value.trim()

    let Errname= document.querySelector('#errname')
    let Errnum= document.querySelector('#errnum')
    let Erremail= document.querySelector('#erremail')
    let Errpass= document.querySelector('#errpass')
    let Errcpass= document.querySelector('#errcpass')

    if(Name==""){

        Errname.innerHTML="Please enter name"
        Errname.style.color="red"
        return false
    }
    
    else if(Num==""){

        Errnum.innerHTML="Please enter number"
        Errname.style.color="red"
        return false
    }
    else if(Num.length!=10){

        Errnum.innerHTML="Please enter valid number"
        return false
    }

    else if(isNaN(Num)){
    
        Errnum.innerHTML="Please enter only number"
        return false
    }

    else if(Email==""){

        Errnum.innerHTML="Please enter email"
        Errname.style.color="red"
        return false
    }

    else if(!(Email.includes('@')) && (Email.includes('.com'))) {

        Erremail.innerHTML="Please enter valid email"
        return false
    }

    else if(Pass==""){

        Errnum.innerHTML="Please enter pass"
        Errname.style.color="red"
        return false
    }
    
    else if (!( Pass.match(/[1234567890]/) &&  Pass.match(/[!@#$%^&*]/) &&  Pass.match(/[A-Z]/) &&  Pass.match(/[a-z]/) ) ) {

        Errpass.innerHTML="please enter strong password"
        return false

    }

    else if (Pass!=Cpass){

        Errcpass.innerHTML="Password not matched"

        document.querySelector('#Cpass').value=""

        return false
    }

    else if(Cpass==""){

        Errnum.innerHTML="Please enter Cpass"
        Errname.style.color="red"
        return false
    }

    else {

        Errnum.innerHTML="Please enter Cpass"
        Errname.style.color="red"
        return false
    }




    

}
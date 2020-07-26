function calcular(){
    console.log("vamos calcular!")
    a = document.getElementById("A").value
    b = document.getElementById("B").value
    c = document.getElementById("C").value  

    delta = Math.pow(b,2) -4*(a)*(c)

    document.getElementById("resultado").innerText = ""
    document.getElementById("resultado1").innerText =""
    document.getElementById("resultado2").innerText =""

    console.log(delta)

    if(delta > 0){
        x1 = (-b + Math.pow(delta , 0.5))/2*a
        x2 = (-b - Math.pow(delta, 0.5))/2*a
        console.log ("Essa equação possui duas raizes:\nx1="+x1+"\nx2="+x2)
        document.getElementById("resultado1").innerText ="X1="+ x1.toFixed(2)
        document.getElementById("resultado2").innerText ="X2="+ x2.toFixed(2)

    }
    if(delta == 0){
        x = (-b + Math.pow(delta , 0.5))/2*a
        console.log("Essa equação possui apenas uma raiz:\nx="+x)
        document.getElementById("resultado").innerText = "X="+x.toFixed(2)

    }
    if(delta<0){
        delta = delta*(-1)
        x1 = (-b)/(2*a)
        i1 = Math.pow(delta, 0.5)/(2*a)
        x2 = (-b)/(2*a)
        i2 = Math.pow(delta, 0.5)/(2*a)    
        console.log("Essa equação possui raizes complexas:\nx1="+x1+"+"+i1+"i")
        console.log("x2="+x2+"-"+i2+"i")
        document.getElementById("resultado1").innerText ="X1="+ x1.toFixed(2)+"+"+i1.toFixed(2)+"i"
        document.getElementById("resultado2").innerText ="X2="+ x2.toFixed(2)+"-"+i2.toFixed(2)+"i"  
    }
}

function validaCampoNumericoA(event){
    a = document.getElementById("A").value
    regex = /[^0-9] \-/
    console.log(a)
    t1 = regex.test(a)
    console.log(t1)
    if(t1==true){
        $("#myModal").modal()
        document.getElementById("A").value = ""
        document.getElementById("A").focus()
        return false
    }
}

function validaCampoNumericoB(event){
    b = document.getElementById("B").value
    regex = /[^0-9] \-/
    console.log(b)
    t2 = regex.test(b)
    console.log(t2)
    if(t2==true){
        $("#myModal").modal()
        document.getElementById("B").value = ""
        document.getElementById("B").focus()
        return false
    }
}

function validaCampoNumericoC(event){
    c = document.getElementById("C").value
    regex = /[^0-9] \-/
    console.log(c)
    t3 = regex.test(c)
    console.log(t3)
    if(t3==true){
        alert("Dado Invalido!")
        document.getElementById("C").value = ""
        document.getElementById("C").focus()
        return false
    }
}

function tamanhoCampo(campo){
    campo.style.width = ((campo.value.length)) + 'em';

}
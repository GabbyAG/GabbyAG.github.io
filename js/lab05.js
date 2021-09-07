"use strict";
(function() {
    window.onload = function(){
        let btnColor = document.getElementById("Colorear");
        let apnom = document.getElementById("apN");
        let fnac = document.getElementById("F");
        let paterno = document.getElementById("pat");
        let materno = document.getElementById("mat");
        let nombres = document.getElementById("nom");
        let long = document.getElementById("L");
        let edad = document.getElementById("E");
        let meses = document.getElementById("M");
        
        btnColor.addEventListener("click", Colorear);
        let cont = 0;
    
        function Colorear() {
        if (cont % 2 == 0) {
            apnom.style.backgroundColor= "#bb4e4e";
            fnac.style.backgroundColor="#bb4e4e";
            paterno.style.backgroundColor= "#bb4e4e";
            materno.style.backgroundColor="#bb4e4e";
            nombres.style.backgroundColor="#bb4e4e";
            long.style.backgroundColor="#3760da";
            edad.style.backgroundColor="#3760da";
            meses.style.backgroundColor="#3760da";
        } 
        if (cont % 2 != 0){     
            apnom.style.backgroundColor= "#3760da";
            fnac.style.backgroundColor= "#3760da";
            paterno.style.backgroundColor= "#3760da";
            materno.style.backgroundColor="#3760da";
            nombres.style.backgroundColor="#3760da";
            long.style.backgroundColor="#bb4e4e";
            edad.style.backgroundColor="#bb4e4e";
            meses.style.backgroundColor="#bb4e4e";
        
            }
            cont += 1;
        
    }
    let btnExtraer =document.getElementById("Extraer");
    btnExtraer.addEventListener("click", ExtraerDados);
    function ExtraerDados(){
        
       
        const aN =document.getElementById('NomApellidos');
        let nA = aN.value;
        let Nomb = nA.split(/\s+/);
        const Pater = document.getElementById('apePaterno');
        Pater.value="";
        Pater.value=Nomb[0];
        const Mater = document.getElementById('apeMaterno');
        Mater.value="";
        Mater.value=Nomb[1];
        const Nbs= document.getElementById('nombres');
        Nbs.value="";
        for(let i = 2; i< Nomb.length; i++){
            Nbs.value+=" "+Nomb[i]+ " ";
        }
        document.getElementById("Lon").value = ("Longitud de " +(Pater.value+ Mater.value).length + " letras");   
        let fecN= document.getElementById("FechaNac").value;           
        let hoy = new Date();
        let birthday = new Date(fecN);
        let Edad = hoy.getFullYear() - birthday.getFullYear();
        let a = (hoy.getMonth()+1) - (birthday.getMonth()+1);
        console.log( (hoy.getMonth()+1)+"-"+ (birthday.getMonth()+1));
        if (a < 0) {
            Edad--;
        }else if (a==0) {
            if (hoy.getDate() < birthday.getDate()) {
                    
                Edad--;
            }
        }            

        document.getElementById("Edad").value=("Su edad es: " +Edad+ " años");            
        let Months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let f= new Date(birthday);
        document.getElementById("Mes").value = (Months[f.getMonth()]);
            

        }
            

    };

})();
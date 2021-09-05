(function() {

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
        apnom.style.backgroundColor= "purple";
        fnac.style.backgroundColor="purple";
        paterno.style.backgroundColor= "purple";
        materno.style.backgroundColor="purple";
        nombres.style.backgroundColor="purple";
        long.style.backgroundColor="purple";
        edad.style.backgroundColor="purple";
        meses.style.backgroundColor="purple";
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
})();
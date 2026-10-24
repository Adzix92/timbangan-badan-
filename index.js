let inputtb = document.getElementById("kolomtb");
let inputbb = document.getElementById("kolombb");
let inputgender = document.getElementById("genderinput");
let tombol =document.getElementById("tombolproses");
let outputkolom =document.getElementById("list")

tombol.onclick = function(){
    let tinggi = Number(inputtb.value);
    let berat = Number(inputbb.value);
    let gender = inputgender.value;

    if (berat ===0 || tinggi ===0){
        outputkolom.innerHTML = "isi data mu dulu bung";
        return;
    }

    let tinggimeter = tinggi / 100;
    let BMI = berat / (tinggimeter*tinggimeter);
    let kategori = "";

    if (gender ==="Laki-laki"){
        if (BMI<18.5){
            kategori ="sekeleton"
    } else if (BMI >=18.5 && BMI <=24.9){
        kategori ="ideal"
    }else{
        kategori ="gemuk"
    } 
}

    if (gender ==="Perempuan"){
        if (BMI<18.5){
            kategori ="kurus";
        }else if (BMI >=18.5 && BMI <=23.2){
            kategori ="Ideal";
        }else{
            kategori ="Gemuk";
        }
}

outputkolom.innerHTML = "BMI: " + BMI.toFixed(1) + "<br>" + 
                        "Kategori: " + kategori + "<br>"
                               
}
    
                                         


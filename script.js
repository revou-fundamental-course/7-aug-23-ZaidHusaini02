function hitungluas(){
    var alas = document.forms['hitungls3']['alass3'].value;
    alas = parseInt(alas);
    var tinggi = document.forms['hitungls3']['tinggis3'].value;
    tinggi = parseInt(tinggi);
    var luas = (alas*tinggi)/2;
    document.forms['hitungls3']['luass3'].value = luas;
}

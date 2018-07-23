function dzialaniaLiczbowe(parametr1,parametr2){
    if(parametr1+parametr2>0){
    console.log("Wynik dodawania wynosi" + " " +(parametr1+parametr2));
        } else {
            console.log('wynik jest ujemny');
        }
    if(parametr1-parametr2>0){
            console.log("Wynik odejmowania wynosi" + " " + (parametr1-parametr2));
            
        }  else {
            console.log('wynik jest ujemny');}
    if(parametr1*parametr2>0){
            console.log("Wynik mnożenia wynosi" + " " + (parametr1*parametr2));
        } else {
            console.log('wynik jest ujemny');
}
}
dzialaniaLiczbowe(10,20);
function button() {
    let m1 = parseInt(document.getElementById('first').value) ;
    let m2 = parseInt(document.getElementById('second').value) ;
    let m3 = parseInt(document.getElementById('third').value) ;
    let m4 = parseInt(document.getElementById('fourth').value) ;
    let m5 = parseInt(document.getElementById('fifth').value) ;
    let m6 = parseInt(document.getElementById('sisxth').value);

    let fullmarks = 600; 
    let totalmarks = m1 + m2 + m3 + m4 + m5 + m6; 
    let percnt = (totalmarks / fullmarks) * 100; 

    let h2 = document.getElementById('result'); 

    if (percnt >= 80 && percnt <= 100) {
        h2.innerHTML = `CONGRATS!!! YOU GOT FIRST CLASS A++ AND RESULT IS:`+percnt;
    } else if (percnt >= 60 && percnt < 80) {
        h2.innerHTML = `YOU GOT SECOND CLASS B WITH THE RESULT IS:`+percnt;
    } else if (percnt >= 40 && percnt < 60) {
        h2.innerHTML = `YOU GOT THIRD CLASS C WITH THE RESULT IS: `+percnt;
    } else if (percnt >= 30 && percnt < 40) {
        h2.innerHTML = `PHEW... YOU JUST PASSED WITH:`+percnt;
    } else {
        h2.innerHTML = `CONGRATS BRUHH, YOU  ARE FAILED. WITH THE RESULT IS: `+percnt;
    }
}

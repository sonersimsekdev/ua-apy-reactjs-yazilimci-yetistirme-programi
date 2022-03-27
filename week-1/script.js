let result  = document.getElementById('result')

function add (x)
{    //add fonksiyonuna gelen parametre val result id li disabled inputa ekleniyor += eklemeler için
    result.value+=x
}

function solve()
{    //solve fonksiyonu içinde js'de hazır bulunan eval fonksiyonu +,-,*,/ gibi işlemleri tanıyarak işlemi gerçekleştiriyor
    result.value = eval(result.value)
}

function clearF()
{   //clear fonksiyonu result id li disabled inputu temizliyor
    result.value=''
}

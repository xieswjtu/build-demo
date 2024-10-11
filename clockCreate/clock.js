var hr = document.querySelector(".hr")
var mn = document.querySelector(".mn")
var sc = document.querySelector(".sc")


function mytime(){
    var time = new Date()
    //360/12 360/60 360/60
    var hh = time.getHours() * 30
    var mm = time.getMinutes() * 6
    var ss = time.getSeconds() * 6

    hr.style.transform = "rotate("+(hh+mm/12)+"deg)"
    mn.style.transform = "rotate("+mm+"deg)"
    sc.style.transform = "rotate("+ss+"deg)"
}

setInterval(mytime,1000)

mytime()
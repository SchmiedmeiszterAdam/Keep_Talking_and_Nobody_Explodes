$(function () {
    let ido = 5
    let masodperc = 0
    if (masodperc < 10) {
        $("#ido").text(ido + ":0" + masodperc)
    }
    else {
        $("#ido").text(ido + ":" + masodperc)
    }
    setTimeout(function () {
        idoKijelzes()
    }, 2000)
    function idoKijelzes() {
        let idoIras = setInterval(function () {
            masodperc--
            if (masodperc === -1) {
                ido--
                masodperc = 59
            }
            if (masodperc < 10) {
                $("#ido").text(ido + ":0" + masodperc)
            }
            else {
                $("#ido").text(ido + ":" + masodperc)
            }
            if (ido === 0 && masodperc === 0) {
                console.log(ido, masodperc)
                $("#ido").text(ido + ":00")
                clearInterval(idoIras)
                console.log("vége")
            }
        }, 1000)
    }
})
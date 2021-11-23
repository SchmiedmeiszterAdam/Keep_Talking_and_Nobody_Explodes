let idoIras
class Time {
    constructor(elem,szulo) {
        this.elem = elem
        this.szulo = szulo
        this.szamolas()
    }
    szamolas() {
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
            idoIras = setInterval(function () {
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
                    clearInterval(idoIras)
                }
            }, 1000)
        }
    }
    stop(){
        clearInterval(idoIras)
    }
}
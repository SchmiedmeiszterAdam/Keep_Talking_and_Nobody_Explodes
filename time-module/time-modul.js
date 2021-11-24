let idoIras
class Time {
    constructor(elem, szulo, perc, masodperc) {
        this.elem = elem
        this.szulo = szulo
        this.ido = perc
        this.masodperc = masodperc
        this.szamolas()
    }
    szamolas() {
        if (this.masodperc < 10) {
            $("#ido").text(this.ido + ":0" + this.masodperc)
        }
        else {
            $("#ido").text(this.ido + ":" + this.masodperc)
        }
        setTimeout(()=> {
            this.idoKijelzes()
        }, 2000)
    }
    idoKijelzes() {
        idoIras = setInterval(()=> {
            this.masodperc--
            if (this.masodperc === -1) {
                this.ido--
                this.masodperc = 59
            }
            if (this.masodperc < 10) {
                $("#ido").text(this.ido + ":0" + this.masodperc)
            }
            else {
                $("#ido").text(this.ido + ":" + this.masodperc)
            }
            if (this.ido === 0 && this.masodperc === 0) {
                clearInterval(idoIras)
            }
        }, 1000)
    }
    stop() {
        clearInterval(idoIras)
    }
    getTime() {
        return this.masodperc + "" + this.ido
    }
}
class Time {
    constructor(elem, szulo, perc, masodperc) {
        this.elem = elem
        this.szulo = szulo
        this.perc = perc
        this.masodperc = masodperc
        this.idoIras
        this.szamolas()
    }
    szamolas() {
        this.idKiIras()
        setTimeout(() => {
            this.idoKijelzes()
        }, 2000)
    }
    idoKijelzes() {
        this.idoIras = setInterval(() => {
            this.masodperc--
            if (this.masodperc === -1) {
                this.perc--
                this.masodperc = 59
            }
            this.idKiIras()
            if (this.perc === 0 && this.masodperc === 0) {
                this.stop()
            }
        }, 1000)
    }
    idKiIras(){
        let masodperc = this.masodperc
        let perc = this.perc
        if (this.perc < 10) {
            perc = "0" + this.perc
        }
        if (this.masodperc < 10) {
            masodperc = "0" + this.masodperc
        }
        $("#ido").text(perc + ":" + masodperc)
    }
    stop() {
        clearInterval(this.idoIras)
    }
    getTime() {
        return this.masodperc + "" + this.perc
    }
}

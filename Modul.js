class Modul {
    constructor() {
        this.teljesitve = false
        this.aktiv = false
    }
    setAktiv() {
        if (this.aktiv) {
            this.aktiv = false
        }
        else {
            this.aktiv = true
        }
    }
}
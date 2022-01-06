const szinek = [
    { "name": "yellow", "color": "rgb(255, 253, 14)" },
    { "name": "black", "color": "rgb(5,3,4)" },
    { "name": "white", "color": "rgb(255,249,232)" },
    { "name": "blue", "color": "rgb(55,93,175)" },
    { "name": "red", "color": "rgb(246, 10, 7)" }]

class SimpleWire extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.szuloELem = $(this.elem.find('.wires'))
        this.wires = []
        this.db = Math.floor(Math.random() * 4) + 3
        this.joDrot
        this.drotokLetrehozasa()
        this.elvagandoDrotKivalasztasa()
    }
    drotokLetrehozasa() {
        for (let i = 1; i <= this.db; i++) {
            const ujWire = $('<div class="wire wire-' + i + '"></div>').appendTo(this.szuloELem)
            const wire = new OneWire(ujWire, i - 1, this)
            this.wires.push(wire)
        }
    }
    elvagandoDrotKivalasztasa() {
        switch (this.wires.length) {
            case 3:
                this.harmas()
                break
            case 4:
                this.negyes()
                break
            case 5:
                this.otos()
                break
            case 6:
                this.hatos()
                break
        }
        this.wires[this.joDrot].setJoDrot()
    }
    harmas() {
        if (this.nincsSzin("red")) {
            this.joDrot = 1
        }
        else if (this.utolsoDrot("white")) {
            this.joDrot = 2
        }
        else if (this.pontosanAnnyiSzin(2, "blue")) {
            this.joDrot = this.utolsoSzinDrot("blue")
        }
        else {
            this.joDrot = 2
        }
    }

    negyes() {
        if (this.tobbMintSzin(1, "red") && this.szeriszamParosParatlan() === "paratlan") {
            this.joDrot = this.utolsoSzinDrot("red")
        }
        else if (this.utolsoDrot("yellow") && this.pontosanAnnyiSzin(0, "red") || this.pontosanAnnyiSzin(1, "blue")) {
            this.joDrot = 0
        }
        else if (this.tobbMintSzin(1, "yellow")) {
            this.joDrot = this.wires.length - 1
        }
        else {
            this.joDrot = 1
        }
    }
    otos() {
        if (this.utolsoDrot("black") && this.szeriszamParosParatlan() === "paratlan") {
            this.joDrot = 3
        }
        else if (this.pontosanAnnyiSzin(1, "red") && this.tobbMintSzin(1, "yellow")) {
            this.joDrot = 0
        }
        else if (this.nincsSzin("black")) {
            this.joDrot = 1
        }
        else {
            this.joDrot = 0
        }
    }
    hatos() {
        if (this.nincsSzin("yellow") && this.szeriszamParosParatlan() === "paratlan") {
            this.joDrot = 2
        }
        else if (this.pontosanAnnyiSzin(1, "yellow") && this.tobbMintSzin(1, "white")) {
            this.joDrot = 3
        }
        else if (this.nincsSzin("red")) {
            this.joDrot = this.wires.length - 1
        }
        else {
            this.joDrot = 3
        }
    }
    pontosanAnnyiSzin(menny, szin) {
        return this.seged(szin) === menny
    }
    seged(szin) {
        let db = 0
        let i = 0
        while (i < this.wires.length && db != 2) {
            if (this.wires[i].getColor() === szin) {
                db++
            }
            i++
        }
        return db
    }
    nincsSzin(szin) {
        let i = 0
        while (i < this.wires.length && this.wires[i].getColor() != szin) {
            i++
        }
        return i === this.wires.length
    }

    tobbMintSzin(menny, szin) {
        return this.seged(szin) > menny
    }
    utolsoDrot(szin) {
        if (this.wires[this.wires.length - 1].getColor() === szin) {
            return true
        }
        else {
            return false
        }
    }
    utolsoSzinDrot(szin) {
        let i = this.wires.length - 1;
        while (this.wires[i].getColor() != szin) {
            i--
        }
        return i
    }
    szeriszamParosParatlan() {
        let utolso = this.bomba.getSerialNumber().substr(this.bomba.getSerialNumber().length - 1)
        if (utolso % 2 === 0 && utolso != 0) {
            return "paros"
        }
        else if(utolso % 2 === 1) {
            return "paratlan"
        }
    }
}
class OneWire {
    constructor(elem, id, szulo) {
        this.id = id
        this.elem = elem
        this.joDrot = false
        this.elvagva = false
        this.szulo = szulo
        this.randomSzin = szinek[Math.floor(Math.random() * szinek.length)]
        this.szin = this.randomSzin.color
        this.szinNev = this.randomSzin.name
        this.elem.css("background-color", this.szin)
        this.elem.on("click", () => {
            if (!this.elvagva) {
                if (this.getJoDrot()) {
                    this.szulo.setTeljesitve()
                }
                else {
                    this.szulo.sendFault()
                }
                this.elem.append("<div class = 'wire-seged'><div class = 'wire-elvagva'></div></div>")
                this.elvagva = true
            }

        })
        this.elem.on("mouseenter", () => {
            if (!this.elvagva) {
                this.elem.addClass("wire-hover")
            }
        })
        this.elem.on("mouseleave", () => {
            this.elem.removeClass("wire-hover")
        })
    }
    setJoDrot() {
        this.joDrot = true
    }
    getJoDrot() {
        return this.joDrot
    }
    getColor() {
        return this.szinNev
    }
}
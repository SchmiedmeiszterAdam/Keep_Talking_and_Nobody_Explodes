const szinek = [
    { "name": "yellow", "color": "rgb(255, 253, 14)" },
    { "name": "black", "color": "rgb(5,3,4)" },
    { "name": "white", "color": "rgb(255,249,232)" },
    { "name": "blue", "color": "rgb(55,93,175)" },
    { "name": "red", "color": "rgb(246, 10, 7)" }]
let joDrot = 0
class Wire extends Modul {
    constructor(elem, id,szulo) {
        super(elem, id,szulo)
        this.wires = []
        this.bombaSerialNumber = this.bomba.szeriszam
        let db = Math.floor(Math.random() * 4) + 3
        let szuloELem = $(this.elem.find('.wires'))
        for (let i = 1; i <= db; i++) {
            const ujWire = $('<div class="wire wire-' + i + '"></div>').appendTo(szuloELem)
            const wire = new OneWire(ujWire, i - 1,this)
            this.wires.push(wire)
        }
        this.elvagandoDrotKivalasztasa()
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
        this.wires[joDrot].setJoDrot()
    }
    harmas() {
        if (this.nincsSzin("red")) {
            joDrot = 1
        }
        else if (this.utolsoDrot("white")) {
            joDrot = 2
        }
        else if (this.pontosanAnnyiSzin(2, "blue")) {
            if (this.wires[2].getColor() === "blue") {
                joDrot = 2
            }
            else {
                joDrot = 1
            }
        }
        else {
            joDrot = 2
        }
    }

    negyes() {
        if (this.tobbMintSzin(1, "red") && this.szeriszamParosParatlan() === "paratlan") {
            joDrot = 3
        }
        else if (this.utolsoDrot("yellow") && this.pontosanAnnyiSzin(0, "red") || this.pontosanAnnyiSzin(1, "blue")) {
            joDrot = 0
        }
        else if (this.tobbMintSzin(1, "yellow")) {
            joDrot = this.wires.length - 1
        }
        else {
            joDrot = 1
        }
    }
    otos() {
        if (this.utolsoDrot("black") && this.szeriszamParosParatlan() === "paratlan") {
            joDrot = 3
        }
        else if (this.pontosanAnnyiSzin(1, "red") && this.tobbMintSzin(1, "yellow")) {
            joDrot = 0
        }
        else if (this.nincsSzin("black")) {
            joDrot = 1
        }
        else {
            joDrot = 0
        }
    }
    hatos() {
        if (this.nincsSzin("yellow") && this.szeriszamParosParatlan() === "paratlan") {
            joDrot = 2
        }
        else if (this.pontosanAnnyiSzin(1, "yellow") && this.tobbMintSzin(1, "white")) {
            joDrot = 3
        }
        else if (this.nincsSzin("red")) {
            joDrot = this.wires.length - 1
        }
        else {
            joDrot = 3
        }
    }
    pontosanAnnyiSzin(menny, szin) {
        let db = 0
        let i = 0
        while (i < this.wires.length && db != 2) {
            if (this.wires[i].getColor() === szin) {
                db++
            }
            i++
        }
        return db === menny
    }
    nincsSzin(szin) {
        let i = 0
        while (i < this.wires.length && this.wires[i].getColor() != szin) {
            i++
        }
        return i === this.wires.length
    }
    tobbMintSzin(menny, szin) {
        let db = 0
        let i = 0
        while (i < this.wires.length && db != 2) {
            if (this.wires[i].getColor() === szin) {
                db++
            }
            i++
        }
        return db > menny
    }
    utolsoDrot(szin) {
        this.wires[this.wires.length - 1].getColor() === szin
    }
    szeriszamParosParatlan() {
        let utolso = this.bombaSerialNumber.substr(this.bombaSerialNumber.length - 1)
        if (utolso % 2 === 0) {
            return "paros"
        }
        else {
            return "paratlan"
        }
    }
}
class OneWire {
    constructor(elem, id,szulo) {
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
                    this.szulo.led.css("background-color", "green")
                    this.szulo.setTeljesitve()
                }
                else if (!this.szulo.getTeljesitve()) {
                    this.szulo.led.css("background-color", "red")
                    this.szulo.sendFault()
                }
                if(this.szulo.getTeljesitve() && !this.getJoDrot()){
                    this.szulo.led.css("background-color", "red")
                    setTimeout(()=>{this.szulo.led.css("background-color", "green")},1000)
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
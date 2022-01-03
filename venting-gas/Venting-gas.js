const questions = [{ question: "VENT GAS?", answer: "YES" }, { question: "DETONATE", answer: "NO" }]
class VentingGas extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.kijelzo = this.elem.find(".venting-gas-kijelzo-tarolo").children()
        this.gombok = this.elem.find(".venting-gas-gombok").children()
        this.idoKijelzo = this.elem.find(".venting-gas-ido")
        this.ido
        for (let i = 0; i < this.gombok.length; i++) {
            $(this.gombok[i]).on("click", () => {
                this.ellenorzes(i)
            })
        }
        setTimeout(() => {
            this.kerdesAdas()
        }, 5000)
    }
    kerdesAdas() {
        this.ido = 40
        this.idoInditas()
        this.interval = setInterval(() => {
            this.idoInditas()
        }, 1000);
        let random = Math.floor(Math.random() * questions.length)
        let kerdes = questions[random].question
        this.valasz = questions[random].answer
        $(this.kijelzo[0]).html(kerdes)
        $(this.kijelzo[1]).html("Y/N")
    }
    idoInditas() {
        let ido = this.ido
        if (this.ido < 10) {
            ido = "0" + this.ido
        }
        $(this.idoKijelzo).html(ido)
        this.ido--
        if (this.ido < 0) {
            clearInterval(this.interval)
            this.sendFault()
            $(this.kijelzo[0]).html("")
            $(this.kijelzo[1]).html("")
            $(this.idoKijelzo).html("")
            setTimeout(() => {
                this.kerdesAdas()
            }, 30000)
        }
    }
    ellenorzes(i) {
        if ((this.valasz === "YES" && i === 0) || (this.valasz === "NO" && i === 1)) {
            this.vege()
        } else {
            this.sendFault()
        }
    }
    vege() {
        clearInterval(this.interval)
        $(this.idoKijelzo).html("")
        let valasz = this.valasz
        let szamlalo = 0
        let interval = setInterval(() => {
            $(this.kijelzo[2]).append(valasz[szamlalo])
            szamlalo++
            if (szamlalo === valasz.length) {
                clearInterval(interval)
                setTimeout(() => {
                    this.complete()
                }, 1000);
                setTimeout(() => {
                    this.kerdesAdas()
                }, 30000)
            }
        }, 500);
    }
    complete() {
        $(this.kijelzo[0]).html("VENTING")
        $(this.kijelzo[1]).html("COMPLETE")
        $(this.kijelzo[2]).html("")
    }
}
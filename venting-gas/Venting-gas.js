const questions = [{ question: "VENT GAS?", answer: "YES" }, { question: "DETONATE", answer: "NO" }]
class VentingGas extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.kijelzo = this.elem.find(".venting-gas-kijelzo-tarolo").children()
        this.gombok = this.elem.find(".venting-gas-gombok").children()
        this.idoKijelzo = this.elem.find(".venting-gas-ido")
        this.ido
        this.villogasSzamlalo = 0
        this.timeout
        this.aktiv = false
        for (let i = 0; i < this.gombok.length; i++) {
            $(this.gombok[i]).on("click", () => {
                if (this.aktiv) {
                    this.ellenorzes(i)
                }
            })
        }
        this.kerdesAd()
        setTimeout(() => {
            this.kerdesAdas()
        }, 5000)
    }
    kerdesAd() {
        let random = Math.floor(Math.random() * questions.length)
        this.kerdes = questions[random].question
        this.valasz = questions[random].answer
    }
    kerdesAdas() {
        this.aktiv = true
        this.ido = 40
        this.idoInditas()
        this.interval = setInterval(() => {
            this.idoInditas()
        }, 1000);
        this.kijelzoreIras(this.kerdes,"Y/N")
    }
    idoInditas() {
        let ido = this.ido
        if (this.ido < 10) {
            ido = "0" + this.ido
        }
        $(this.idoKijelzo).html(ido)
        this.ido--
        if (this.ido < -1) {
            this.aktiv = false
            clearInterval(this.interval)
            this.sendFault()
            this.kijelzoreIras("","","")
            $(this.idoKijelzo).html("")
            setTimeout(() => {
                this.kerdesAdas()
            }, 30000)
        }
    }
    ellenorzes(i) {
        if (this.valasz === "NO" && i === 1) {
            this.valaszKiIr(questions[i].answer)
            setTimeout(() => {
                this.vege()
            }, 1600)
        }
        else if (this.valasz === "YES" && i === 0) {
            this.valaszKiIr(questions[i].answer)
            setTimeout(() => {
                this.complete()
            }, 1600)
        }
        else if (this.valasz === "YES" && i === 1) {
            this.villogasSzamlalo = 0
            clearTimeout(this.timeout)
            clearTimeout(this.timeout2)
            this.valaszKiIr(questions[i].answer)
            setTimeout(() => {
                this.vpe()
            }, 1600)
        }
        else {
            this.aktiv = false
            this.sendFault()
            this.vege()
        }
    }
    valaszKiIr(valasz) {
        let szamlalo = 0
        let interval = setInterval(() => {
            $(this.kijelzo[2]).append(valasz[szamlalo])
            szamlalo++
            if (szamlalo === valasz.length) {
                clearInterval(interval)
            }
        }, 500);
    }
    vege() {
        clearInterval(this.interval)
        $(this.idoKijelzo).html("")
        this.kijelzoreIras("","","")
        this.aktiv = false
        setTimeout(() => {
            this.kerdesAdas()
        }, 30000)
    }
    complete() {
        clearInterval(this.interval)
        this.aktiv = false
        $(this.idoKijelzo).html("")
        this.kijelzoreIras("VENTING","COMPLETE","")
        setTimeout(() => {
            this.kerdesAdas()
        }, 30000)
    }
    vpe() {
        this.aktiv = false
        if (this.villogasSzamlalo < 3) {
            this.kijelzoreIras("VENTING","PREVENTS","EXPLOSION")
            this.timeout = setTimeout(() => {
                this.kijelzoreIras("","","")
            }, 1000)
            this.villogasSzamlalo++
            this.timeout2 = setTimeout(() => {
                this.vpe()
            }, 1500)
        }
        else {
            this.kijelzoreIras(this.kerdes,"Y/N")
            this.aktiv = true
        }
    }
    kijelzoreIras(sz1, sz2, sz3) {
        $(this.kijelzo[0]).html(sz1)
        $(this.kijelzo[1]).html(sz2)
        $(this.kijelzo[2]).html(sz3)
    }
}
const szimbolumcolumn = [{ "ertek": ["28-balloon", "13-at", "30-upsidedowny", "12-squigglyn", "7-squidknife", "9-hookn", "23-leftc"] },
{ "ertek": ["16-euro", "28-balloon", "23-leftc", "26-cursive", "3-hollowstar", "9-hookn", "20-questionmark"] },
{ "ertek": ["1-copyright", "8-pumpkin", "26-cursive", "5-doublek", "15-meltedthree", "30-upsidedowny", "3-hollowstar"] },
{ "ertek": ["11-six", "21-paragraph", "31-bt", "7-squidknife", "5-doublek", "20-questionmark", "4-smileyface"] },
{ "ertek": ["24-pitchfork", "4-smileyface", "31-bt", "22-rightc", "21-paragraph", "19-dragon", "2-filledstar"] },
{ "ertek": ["11-six", "16-euro", "27-tracks", "14-ae", "24-pitchfork", "18-nwithhat", "6-omega"] }]

class Keypad extends Modul {
    constructor(elem, id, szulo) {
        super(elem, id, szulo)
        this.szuloElem = this.elem.find(".keypads-tarolo")
        this.adottSzimbolumOszlop = szimbolumcolumn[Math.floor(Math.random() * szimbolumcolumn.length)].ertek
        this.gombok = []
        this.kattintasSzamol = 0

        this.kivalasztottSzimbolumok = []
        for (let index = 0; index < 4; index++) {
            let kapottSzimbolum = this.adottSzimbolumOszlop[Math.floor(Math.random() * this.adottSzimbolumOszlop.length)]
            while (this.kivalasztottSzimbolumok.includes(kapottSzimbolum)) {
                kapottSzimbolum = this.adottSzimbolumOszlop[Math.floor(Math.random() * this.adottSzimbolumOszlop.length)]
            }
            this.kivalasztottSzimbolumok.push(kapottSzimbolum)
            const gombSablon = $('<div class="keypads-gomb"><div class="keypads-gomb-indikator"></div></div>').appendTo(this.szuloElem)
            const gomb = new KeypadButton(gombSablon, index, this, kapottSzimbolum)
            this.gombok.push(gomb)
        }
        this.gombokSorrendben = []
        this.sorrendMeghatarozas()
    }
    sorrendMeghatarozas() {
        for (let i = 0; i < this.adottSzimbolumOszlop.length; i++) {
            for (let k = 0; k < this.kivalasztottSzimbolumok.length; k++) {
                if (this.adottSzimbolumOszlop[i] === this.kivalasztottSzimbolumok[k]) {
                    this.gombokSorrendben.push(this.kivalasztottSzimbolumok[k])
                }
            }
        }
        console.log(this.gombokSorrendben)
    }

    osszesPiros() {
        for (let i = 0; i < this.gombok.length; i++) {
            this.gombok[i].setPiros()
        }
    }
}
class KeypadButton {
    constructor(elem, id, szulo, szimbolum) {
        this.elem = elem
        this.id = id
        this.szulo = szulo
        this.szimbolum = szimbolum
        this.indikator = this.elem.find(".keypads-gomb-indikator")
        this.elem.append("<img class='szimbolum-kep' src='keypads/keypads-kepek/" + this.szimbolum + ".png'>")
        this.elem.on("click", () => {
            if (!this.szulo.getTeljesitve()) {
                if (this.szimbolum === this.szulo.gombokSorrendben[this.szulo.kattintasSzamol]) {
                    this.szulo.kattintasSzamol++
                    this.indikator.css("background", "rgb(0,165,8)")
                    if (this.szulo.kattintasSzamol === 4) {
                        this.szulo.setTeljesitve()
                    }
                }
                else {
                    this.szulo.kattintasSzamol = 0
                    this.szulo.osszesPiros()
                }
            }
        })
    }
    setPiros() {
        this.indikator.css("background", "red")
        setTimeout(() => { this.indikator.css("background", "black") }, 500)
    }
}
const PasswordWords = ["about", "after", "again", "below", "could", "every", "first", "found", "great", "house", "large", "learn", "never", "other", "place", "plant", "point", "right", "small", "sound", "spell", "still", "study", "their", "there", "these", "thing", "think", "three", "water", "where", "which", "world", "would", "write",]
class Password extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.kijelzoBetuk = this.elem.find(".betu")
        this.felLeptet = this.elem.find(".up")
        this.leLeptet = this.elem.find(".down")
        this.submitGomb = this.elem.find(".submit")
        this.szo = PasswordWords[Math.floor(Math.random() * PasswordWords.length)]
        this.lettersPosition = [0, 0, 0, 0, 0]
        this.betukLetrehozasa()
        this.kiIras()
        for (let i = 0; i < this.felLeptet.length; i++) {
            this.elem.find(this.felLeptet[i]).on("click", () => {
                this.felfeleLeptet(i)
            })
        }
        for (let i = 0; i < this.leLeptet.length; i++) {
            this.elem.find(this.leLeptet[i]).on("click", () => {
                this.lefeleLeptet(i)
            })
        }
        this.submitGomb.on("click", () => {
            this.ellenorzes()
        })
    }
    betukLetrehozasa() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        let randomCharacter
        let random
        this.letters = [[], [], [], [], []]
        for (let j = 0; j < this.letters.length; j++) {
            random = Math.floor(Math.random() * 6)
            for (let i = 0; i < 6; i++) {
                if (i === random) {
                    this.letters[j][i] = this.szo[j]
                }
                else {
                    randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
                    while (this.letters[j].includes(randomCharacter)) {
                        randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
                    }
                    this.letters[j][i] = randomCharacter
                }
            }
        }
    }

    kiIras() {
        for (let i = 0; i < 5; i++) {
            this.elem.find(this.kijelzoBetuk[i]).html(this.letters[i][0])
        }
    }
    lefeleLeptet(i) {
        this.lettersPosition[i]++
        if (this.lettersPosition[i] === 6) {
            this.lettersPosition[i] = 0
        }
        this.elem.find(this.kijelzoBetuk[i]).html(this.letters[i][this.lettersPosition[i]])
    }
    felfeleLeptet(i) {
        this.lettersPosition[i]--
        if (this.lettersPosition[i] === -1) {
            this.lettersPosition[i] = 5
        }
        this.elem.find(this.kijelzoBetuk[i]).html(this.letters[i][this.lettersPosition[i]])
    }
    ellenorzes() {
        let szo = ""
        for (let i = 0; i < 5; i++) {
            szo += this.letters[i][this.lettersPosition[i]]
        }
        if (szo == this.szo) {
            this.setTeljesitve()
        }
        else {
            this.sendFault()
        }
    }
}
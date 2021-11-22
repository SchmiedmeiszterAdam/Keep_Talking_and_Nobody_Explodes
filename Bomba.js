let modulePossibilitys = [{ "template": "#templates .simple-wires", "className": Wire },
{ "template": "#templates .whos-on-first", "className": WhosOnFirst },
{ "template": "#templates .keypads", "className": Keypad },
{ "template": "#templates .memory", "className": Memory }
]
let timeModulePosition = Math.floor(Math.random() * modulePossibilitys.length)
let id = 0
class Bomba {
    constructor(elem) {
        this.elem = elem
        this.modules = []
        this.szeriszam = "sf345t2"
        this.strikes = 0
        window.serialNumber = this.szeriszam
        this.elem.on("click", () => {
            this.modulesCheck()
        })
    }
    modulesCheck() {
        let szamol = 0
        for (let i = 0; i < this.modules.length; i++) {
            if (this.modules[i].getTeljesitve()) {
                szamol++
            }
        }
        if (szamol === this.modules.length) {
        }
    }
    createModules() {
        if (id === timeModulePosition) {
            const time = $("#templates #ido-modul").prependTo("#eloresz")
            new Time(time)
        }
        else {
            let randomModulNumber = Math.floor(Math.random() * modulePossibilitys.length)
            let template = $(modulePossibilitys[randomModulNumber].template)
            const newModule = $(template).clone().prependTo("#eloresz")
            const module = new modulePossibilitys[randomModulNumber].className(newModule, id,this)
            this.modules.push(module)
        }
        id++
    }
}
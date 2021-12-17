const mazes = [
    [
        [0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0],
        [2, 5, 1, 5, 2, 5, 2, 5, 1, 5, 1],
        [3, 1, 0, 2, 0, 1, 0, 2, 0, 2, 0],
        [2, 5, 2, 5, 1, 5, 1, 5, 1, 5, 2],
        [0, 1, 0, 2, 0, 1, 0, 2, 0, 2, 3],
        [2, 5, 1, 5, 2, 5, 2, 5, 1, 5, 2],
        [0, 1, 0, 2, 0, 2, 0, 1, 0, 2, 0],
        [2, 5, 1, 5, 1, 5, 1, 5, 1, 5, 2],
        [0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0],
        [2, 5, 1, 5, 2, 5, 2, 5, 1, 5, 2],
        [0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0]
    ], [
        [0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0],
        [1, 5, 2, 5, 1, 5, 2, 5, 2, 5, 1],
        [0, 2, 0, 1, 0, 2, 0, 1, 3, 2, 0],
        [2, 5, 1, 5, 2, 5, 1, 5, 1, 5, 2],
        [0, 1, 0, 2, 0, 1, 0, 2, 0, 2, 0],
        [2, 5, 2, 5, 1, 5, 2, 5, 1, 5, 2],
        [0, 2, 3, 1, 0, 2, 0, 1, 0, 1, 0],
        [2, 5, 1, 5, 2, 5, 1, 5, 2, 5, 2],
        [0, 1, 0, 1, 0, 1, 0, 2, 0, 1, 0],
        [2, 5, 2, 5, 2, 5, 2, 5, 1, 5, 2],
        [0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0]
    ], [
        [0, 2, 0, 2, 0, 1, 0, 1, 0, 2, 0],
        [2, 5, 1, 5, 2, 5, 2, 5, 2, 5, 2],
        [0, 1, 0, 1, 0, 1, 0, 2, 0, 1, 0],
        [1, 5, 2, 5, 2, 5, 1, 5, 1, 5, 2],
        [0, 2, 0, 1, 0, 1, 0, 2, 0, 1, 0],
        [2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2],
        [0, 1, 0, 1, 0, 1, 3, 1, 0, 1, 3],
        [2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2],
        [0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0],
        [2, 5, 1, 5, 1, 5, 2, 5, 2, 5, 2],
        [0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0]
    ], [
        [3, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0],
        [2, 5, 2, 5, 1, 5, 1, 5, 1, 5, 2],
        [0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0],
        [2, 5, 2, 5, 2, 5, 1, 5, 1, 5, 2],
        [0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0],
        [2, 5, 1, 5, 1, 5, 2, 5, 1, 5, 2],
        [3, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0],
        [2, 5, 1, 5, 1, 5, 1, 5, 1, 5, 2],
        [0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0],
        [2, 5, 1, 5, 1, 5, 1, 5, 2, 5, 2],
        [0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0]
    ], [
        [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0],
        [1, 5, 1, 5, 1, 5, 1, 5, 2, 5, 2],
        [0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0],
        [2, 5, 1, 5, 1, 5, 2, 5, 1, 5, 1],
        [0, 2, 0, 1, 0, 2, 0, 1, 3, 2, 0],
        [2, 5, 2, 5, 1, 5, 1, 5, 2, 5, 2],
        [0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0],
        [2, 5, 1, 5, 1, 5, 2, 5, 1, 5, 2],
        [0, 1, 0, 2, 0, 2, 0, 2, 0, 1, 0],
        [2, 5, 2, 5, 1, 5, 1, 5, 1, 5, 2],
        [0, 1, 0, 2, 0, 2, 3, 2, 0, 2, 0]
    ],
    [
        [0, 1, 0, 2, 0, 1, 0, 2, 3, 2, 0],
        [2, 5, 2, 5, 2, 5, 1, 5, 2, 5, 2],
        [0, 1, 0, 1, 0, 1, 0, 2, 0, 1, 0],
        [2, 5, 2, 5, 2, 5, 2, 5, 1, 5, 2],
        [0, 2, 0, 1, 0, 1, 0, 1, 0, 2, 0],
        [2, 5, 1, 5, 1, 5, 2, 5, 2, 5, 1],
        [0, 2, 0, 1, 0, 2, 0, 1, 0, 1, 0],
        [1, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2],
        [0, 2, 0, 1, 3, 1, 0, 1, 0, 2, 0],
        [2, 5, 1, 5, 1, 5, 2, 5, 1, 5, 2],
        [0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0]
    ],
    [
        [0, 2, 3, 2, 0, 2, 0, 1, 0, 2, 0],
        [2, 5, 1, 5, 1, 5, 2, 5, 2, 5, 2],
        [0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0],
        [2, 5, 2, 5, 1, 5, 1, 5, 1, 5, 2],
        [0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0],
        [1, 5, 1, 5, 2, 5, 1, 5, 2, 5, 1],
        [0, 2, 0, 1, 0, 2, 0, 2, 0, 1, 0],
        [2, 5, 2, 5, 2, 5, 1, 5, 1, 5, 2],
        [0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0],
        [2, 5, 1, 5, 1, 5, 1, 5, 2, 5, 2],
        [0, 2, 3, 2, 0, 2, 0, 2, 0, 2, 0]
    ],
    [
        [0, 1, 0, 2, 0, 2, 3, 1, 0, 2, 0],
        [2, 5, 2, 5, 1, 5, 2, 5, 2, 5, 2],
        [0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0],
        [2, 5, 1, 5, 1, 5, 1, 5, 1, 5, 2],
        [0, 1, 0, 2, 0, 2, 0, 2, 0, 1, 0],
        [2, 5, 2, 5, 1, 5, 1, 5, 2, 5, 2],
        [0, 1, 0, 2, 3, 1, 0, 2, 0, 2, 0],
        [2, 5, 1, 5, 2, 5, 1, 5, 1, 5, 1],
        [0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0],
        [2, 5, 2, 5, 1, 5, 1, 5, 1, 5, 1],
        [0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]
    ],
    [
        [0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0],
        [2, 5, 2, 5, 1, 5, 1, 5, 2, 5, 2],
        [0, 1, 0, 1, 3, 2, 0, 1, 0, 1, 0],
        [2, 5, 2, 5, 2, 5, 1, 5, 2, 5, 2],
        [0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0],
        [2, 5, 1, 5, 1, 5, 2, 5, 1, 5, 2],
        [0, 1, 0, 1, 0, 2, 0, 1, 0, 2, 0],
        [2, 5, 2, 5, 2, 5, 1, 5, 1, 5, 2],
        [3, 1, 0, 1, 0, 1, 0, 2, 0, 1, 0],
        [2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 1],
        [0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0]
    ]

]
/* 0:ures szektor
   1:fal
   2:nem fal
   3:zöld kör
   5:semmi
 */
class Maze extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.szektors = []
        this.maze = mazes[Math.floor(Math.random() * mazes.length)]
        this.vilagitoSzektor1 = 0
        this.vilagitoSzektor2 = 0
        this.up = this.elem.find(".maze-gomb-1")
        this.left = this.elem.find(".maze-gomb-2")
        this.right = this.elem.find(".maze-gomb-3")
        this.down = this.elem.find(".maze-gomb-4")
        this.letrehoz()
        this.up.on("click", () => {
            if (!this.teljesitve) {
                this.fel()
            }
        })
        this.down.on("click", () => {
            if (!this.teljesitve) {
                this.le()
            }
        })
        this.right.on("click", () => {
            if (!this.teljesitve) {
                this.jobb()
            }
        })
        this.left.on("click", () => {
            if (!this.teljesitve) {
                this.bal()
            }
        })
    }
    bal() {
        let fal1 = this.vilagitoSzektor1 * 2
        let fal2 = this.vilagitoSzektor2 * 2 - 1
        if (fal2 >= 0) {
            if (!this.ellenorzes(fal1, fal2)) {
                this.leptetes(this.vilagitoSzektor1, this.vilagitoSzektor2 - 1)
            }
            else {
                this.sendFault()
                this.falatMutat("bal")
            }
        }
    }
    jobb() {
        let fal1 = this.vilagitoSzektor1 * 2
        let fal2 = this.vilagitoSzektor2 * 2 + 1
        if (fal2 < this.maze.length) {
            if (!this.ellenorzes(fal1, fal2)) {
                this.leptetes(this.vilagitoSzektor1, this.vilagitoSzektor2 + 1)
            }
            else {
                this.sendFault()
                this.falatMutat("jobb")
            }
        }
    }
    fel() {
        let fal1 = this.vilagitoSzektor1 * 2 - 1
        let fal2 = this.vilagitoSzektor2 * 2
        if (fal1 >= 0) {
            if (!this.ellenorzes(fal1, fal2)) {
                this.leptetes(this.vilagitoSzektor1 - 1, this.vilagitoSzektor2)
            }
            else {
                this.sendFault()
                this.falatMutat("fel")
            }
        }
    }
    le() {
        let fal1 = this.vilagitoSzektor1 * 2 + 1
        let fal2 = this.vilagitoSzektor2 * 2
        if (fal1 < this.maze.length) {
            if (!this.ellenorzes(fal1, fal2)) {
                this.leptetes(this.vilagitoSzektor1 + 1, this.vilagitoSzektor2)
            }
            else {
                this.sendFault()
                this.falatMutat("le")
            }
        }
    }
    falatMutat(falirany) {
        let elem = this.szektors[this.vilagitoSzektor1][this.vilagitoSzektor2].getElem()
        $(elem).append("<div class='fal-" + falirany + "'></div>")
    }
    ellenorzes(fal1, fal2) {
        let fal
        if (this.maze[fal1][fal2] === 1) {
            fal = true
        }
        else {
            fal = false
        }
        return fal
    }
    leptetes(v1, v2) {
        this.szektors[this.vilagitoSzektor1][this.vilagitoSzektor2].setSzin()
        this.vilagitoSzektor1 = v1
        this.vilagitoSzektor2 = v2
        if (this.szektors[this.vilagitoSzektor1][this.vilagitoSzektor2] instanceof MazeTriangle) {
            this.setTeljesitve()
        }
        else {
            this.szektors[v1][v2].setSzin()
        }
    }
    letrehoz() {
        const szulo = this.elem.find(".maze-belso-tarolo")
        let sablon
        let ujSzektor
        let szektor
        let mazeTomb = []
        let t1 = Math.floor(Math.random() * 11)
        let t2 = Math.floor(Math.random() * 11)
        while (t1 % 2 != 0 || t2 % 2 != 0) {
            t1 = Math.floor(Math.random() * 11)
            t2 = Math.floor(Math.random() * 11)
        }
        for (let i = 0; i < this.maze.length; i += 2) {
            for (let j = 0; j < this.maze[i].length; j += 2) {
                if (i == t1 && t2 == j) {
                    if (this.maze[i][j] === 0) {
                        sablon = $("<div class='maze-szektor-triangle'></div>")
                    }
                    else {
                        sablon = $("<div class='maze-szektor-triangle maze-szektor-circle'></div>")
                    }
                    ujSzektor = sablon.appendTo(szulo)
                    szektor = new MazeTriangle(ujSzektor)
                }
                else {
                    if (this.maze[i][j] === 0) {
                        sablon = $("<div class='maze-szektor'></div>")
                    } else if (this.maze[i][j] === 3) {
                        sablon = $("<div class='maze-szektor maze-szektor-circle'></div>")
                    }
                    ujSzektor = sablon.appendTo(szulo)
                    szektor = new MazeSzektor(ujSzektor)
                }
                mazeTomb.push(szektor)
            }
            this.szektors.push(mazeTomb)
            mazeTomb = []
        }
        this.vilagitoSzektor1 = Math.floor(Math.random() * 6)
        this.vilagitoSzektor2 = Math.floor(Math.random() * 6)
        while (this.szektors[this.vilagitoSzektor1][this.vilagitoSzektor2] instanceof MazeTriangle) {
            this.vilagitoSzektor1 = Math.floor(Math.random() * 6)
            this.vilagitoSzektor2 = Math.floor(Math.random() * 6)
        }
        this.szektors[this.vilagitoSzektor1][this.vilagitoSzektor2].setSzin()
    }
}
class MazeSzektor {
    constructor(elem) {
        this.elem = elem
        this.vilagit = false
    }
    setSzin() {
        if (this.vilagit) {
            this.elem.css("background", "rgb(24,70,90)")
            this.vilagit = false
        } else {
            this.elem.css("background", "white")
            this.vilagit = true
        }
    }
    getElem() {
        return this.elem
    }
}
class MazeTriangle {
    constructor(elem) {
        this.elem = elem
    }
}
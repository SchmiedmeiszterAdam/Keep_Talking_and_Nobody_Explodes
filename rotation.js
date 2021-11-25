$(function () {
    let upDownCounter = 1
    let sidetCounter = 0
    $("#bomb-rotation-up").on("click", rotateUp)
    $("#bomb-rotation-left").on("click", rotateLeft)
    $("#bomb-rotation-right").on("click", rotateRight)
    $("#bomb-rotation-down").on("click", rotateDown)


    function rotateUp() {
        upDownCounter++
        console.log(upDownCounter)
        if (upDownCounter === 2) {
            $("#bomb-rotation-up").css("display", "none")
            $("#teteje").css("display", "block")
            $("#jobb-oldal").css("display", "none")
            $("#bal-oldal").css("display", "none")
            $("#eloresz").css("display", "none")
            $("#hatresz").css("display", "none")
        }
        else {
            $("#alja").css("display", "none")
            if (sidetCounter === 0) {
                $("#eloresz").css("display", "grid")
            }
            else if (sidetCounter === 1) {
                $("#bal-oldal").css("display", "block")
            }
            else if (sidetCounter === 2) {
                $("#hatresz").css("display", "grid")
            }
            else {
                $("#jobb-oldal").css("display", "block")
            }
        }
        if (upDownCounter > 0) {
            $("#bomb-rotation-down").css("display", "grid")
        }
        
    }
    function rotateDown() {
        upDownCounter--
        console.log(upDownCounter)
        if (upDownCounter === 0) {
            $("#bomb-rotation-down").css("display", "none")
            $("#alja").css("display", "block")
            $("#jobb-oldal").css("display", "none")
            $("#bal-oldal").css("display", "none")
            $("#eloresz").css("display", "none")
            $("#hatresz").css("display", "none")
        }
        else {
            $("#teteje").css("display", "none")
            if (sidetCounter === 0) {
                $("#eloresz").css("display", "grid")
            }
            else if (sidetCounter === 1) {
                $("#bal-oldal").css("display", "block")
            }
            else if (sidetCounter === 2) {
                $("#hatresz").css("display", "grid")
            }
            else {
                $("#jobb-oldal").css("display", "block")
            }
        }
        if (upDownCounter < 2) {
            $("#bomb-rotation-up").css("display", "grid")
        }


    }
    function rotateLeft() {
        sidetCounter++
        if (sidetCounter > 3) {
            sidetCounter = 0
        }
        sideRotate()
    }
    function rotateRight() {
        sidetCounter--
        if (sidetCounter < 0) {
            sidetCounter = 3
        }
        sideRotate()
    }
    function sideRotate() {
        console.log(sidetCounter)
        if (sidetCounter === 0) {
            $("#jobb-oldal").css("display", "none")
            $("#bal-oldal").css("display", "none")
            $("#eloresz").css("display", "grid")
        }
        else if (sidetCounter === 1) {
            $("#eloresz").css("display", "none")
            $("#hatresz").css("display", "none")
            $("#bal-oldal").css("display", "block")
        }
        else if (sidetCounter === 2) {
            $("#jobb-oldal").css("display", "none")
            $("#bal-oldal").css("display", "none")
            $("#hatresz").css("display", "grid")
        }
        else {
            $("#eloresz").css("display", "none")
            $("#hatresz").css("display", "none")
            $("#jobb-oldal").css("display", "block")
        }
    }
})
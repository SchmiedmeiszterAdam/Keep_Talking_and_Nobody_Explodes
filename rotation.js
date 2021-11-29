$(function () {
    let upDownCounter = 1
    let sidetCounter = 0
    $("#bomb-rotation-up").on("click", rotateUp)
    $("#bomb-rotation-left").on("click", rotateLeft)
    $("#bomb-rotation-right").on("click", rotateRight)
    $("#bomb-rotation-down").on("click", rotateDown)


    function rotateUp() {
        upDownCounter++
        hideAll()
        if (upDownCounter === 2) {
            $("#bomb-rotation-up").css("display", "none")
            $("#teteje").css("display", "flex")
        }
        else {
            if (sidetCounter === 0) {
                $("#eloresz").css("display", "grid")
            }
            else if (sidetCounter === 1) {
                $("#bal-oldal").css("display", "grid")
            }
            else if (sidetCounter === 2) {
                $("#hatresz").css("display", "grid")
            }
            else {
                $("#jobb-oldal").css("display", "grid")
            }
        }
        if (upDownCounter > 0) {
            $("#bomb-rotation-down").css("display", "grid")
        }

    }
    function rotateDown() {
        upDownCounter--
        hideAll()
        if (upDownCounter === 0) {
            $("#bomb-rotation-down").css("display", "none")
            $("#alja").css("display", "flex")
        }
        else {
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
        hideAll()
        if (sidetCounter === 0) {
            $("#eloresz").css("display", "grid")
        }
        else if (sidetCounter === 1) {
            $("#bal-oldal").css("display", "grid")
        }
        else if (sidetCounter === 2) {
            $("#hatresz").css("display", "grid")
        }
        else {
            $("#jobb-oldal").css("display", "grid")
        }
    }
    function hideAll() {
        $("#jobb-oldal").css("display", "none")
        $("#bal-oldal").css("display", "none")
        $("#eloresz").css("display", "none")
        $("#hatresz").css("display", "none")
        $("#alja").css("display", "none")
        $("#teteje").css("display", "none")
    }
})
$("nav a").on("click", function (event) {
    event.preventDefault()

    const href = $(this).attr("href")
    
    window.history.pushState(null, null, href)

    $("nav a").removeClass("active")
    $(this).addClass("active")

    $("nav a").removeClass("hidden")
    $(this).addClass("hidden")

    $.ajax({
        url: href,
        success: function (data) {
            $("body").fadeOut(250, function () {
                const newPage = $(data).filter("body").html()

                $("body").html(newPage)
                $("body").fadeIn(250)
            })
        }
    })
})


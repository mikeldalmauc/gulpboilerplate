
function initBubblesButtons(){
    $(".bubblesbutton")
    .on("mouseenter", () => $(this).removeClass('out').addClass('in'))
    .on("mouseleave", () => $(this).removeClass('in').addClass('out'))
}
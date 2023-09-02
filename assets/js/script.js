// make a listener to contain the code and fire on load
$(document).ready(function() {
    console.log("loaded");  
    const modal = $("#myModal");
    const btn = $("#hamburger");
    const closeBtn = $("#closeModal");
    
    $(btn).on("click", () => {
        console.log("clicked");
        $(modal).css('display', 'block');
    });
    
    
    $(closeBtn).on("click", () => {
        $(modal).css('display', 'none');});
    
    $(window).on("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
})
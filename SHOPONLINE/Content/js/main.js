//Animation Form Login
$("#btn__Login").click(function () {
    $("#form__login").show();
});
//Hide form login
$("#hide__form").click(hideForm);
//Define function hideForm login
function hideForm() {
    $("#form__login").hide();
}
$("#btn__signup").click(function () {
    $("#form__signup").show();
    /*$("#form__login").hide();*/
});
$("#btn__login").click(function () {
    /*$("#form__signup").hide();*/
    $("#form__login").show();
});
/*//Hide form login
$("#hide__form").click(hideForm);
//Define function hideForm signup
function hideForm() {
    $("#form__signup").hide();
}*/
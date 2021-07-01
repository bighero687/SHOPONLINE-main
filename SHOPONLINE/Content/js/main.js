//Animation Form Login
$("#btn__Login").click(function () {
    $("#form__login").show();
});
//Hide form login
$("#hide__form").click(hideForm);
//Define function hideForm
function hideForm() {
    $("#form__login").hide();
}
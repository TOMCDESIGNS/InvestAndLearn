// Using JQuery, a JavaScript framework
$(function() {
    // $("#login-form").submit(function(e) {
    $("form").submit(function(e) {
        var userEmail = $("#user-email").val();
        var userPassword = $("#user-password").val();
        var userName = $("#user-name").val();
        alert("InvestAndLearn.js ...\n");
        if(userEmail == ""  ||  userPassword == ""  ||  userName == "") {
            alert("You must enter something in each starred '*' input field.\n");
            e.preventDefault();     // Prevents submission from happening.
        }
    });
    // validateLoginForm();
    // validateJoinForm();
});

// function validateLoginForm() {
//     var userEmail = $('user-email').val();
//     var userPassword = $('#user-password').val();
    
//     $('#login-form-submit').click(function(e) {
//         if(userEmail == ""  ||  userPassword == "") {
//             alert("You must enter both an email and password to login.");
//             e.preventDefault();     // Prevents submission from happening.
//         }
//     });
// }

// function validateJoinForm() {
//     var userEmail = $('user-email').val();
//     var userPassword = $('#user-password').val();
//     var userName = $('#user-name').val();

//     $('join-form-submit').onclick(function(e) {
//         if(userEmail == ""  ||  userPassword == ""  ||  userName == "") {
//             alert("You must enter a user name, email, and password to joing the club.");
//             e.preventDefault();     // Prevents submission from happening.
//         }
//     })
// }

function contactUs() {
    alert("Invest And Learn\n123Main Street\nBoise, ID  83702\n");
}
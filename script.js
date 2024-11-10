




const password = prompt("Enter your password:");

    if (password.length < 6) {
        alert("Weak")
    } else if (password.length <= 10) {
        alert("Moderate") ;
    } else {
        alert("Strong");
    }
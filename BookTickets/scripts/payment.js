    // Payment details
    const proceed =()=> {
        event.preventDefault();
        let name = document.getElementById("name").value;
        name.innertext = name;
        
        let cardnum = document.getElementById("num").value == "1234123412341234";
        let CVV = document.getElementById("cvv").value == "123";
        let date = document.getElementById("date").value == "12/2023"
        
        if (cardnum && CVV && date) {
            window.location.href = "../pages/otp.html"
            return true;
        }
        else {
            alert(" Wrong Credentials ");
        }
        
    }

    document.querySelector("form").addEventListener("submit", proceed);

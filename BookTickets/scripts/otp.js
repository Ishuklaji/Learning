import { PAYMENT_SUCCESSFULL } from "../component/global-variable.js";
import { getData, setData } from "../component/local-storage.js";


// Generating 4 digit otp
let otp = Math.floor(Math.random() * 9000) + 1000
console.log(otp);
alert(otp)

// verifying the otp
const check = (event)=>{
        event.preventDefault();
       
        let inp = document.getElementById("code").value == otp;
        if(inp){
            alert("Payment Successful!!");
            setData(PAYMENT_SUCCESSFULL,true)
            
            window.location.href="../pages/movies.html"

        }
        else{
            alert("Incorrect OTP");
            setData(PAYMENT_SUCCESSFULL,false)
        }
    }

document.querySelector("button").addEventListener("click", check)

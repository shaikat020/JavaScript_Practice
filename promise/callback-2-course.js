const payment_success = true;
const marks = 80;

function enroll(callback){
    console.log("Course enrollment is in progress.....");
    setTimeout(function(){
        if (payment_success){
            callback();
        }
        else{
            console.log("Payment failed.");
        }

    }
        
    , 2000);
}

function progress(callback){
    console.log("Course on progress....");
    setTimeout(function() {
        if (marks>=80){
            callback();
        }
        else{
            console.log("You could not get enought mark to get certificate");
        }
    },4000);
}

function getCertificate(){
    console.log("Preparing your certificate....");
    setTimeout(function(){
        console.log("Congrats! You got the certificate");
    }, 6000);
}
enroll(function(){//Need anonymous function as cannot pass parameter on call back
    progress(getCertificate);
});


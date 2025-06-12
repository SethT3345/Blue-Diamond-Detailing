function hp(){
    window.location.href = "HomePage.html";
};


function sp(){
    window.open("Services.html");
};

function bdd(){
    window.open("Deals.html");
};
 function opencontract() {
    window.open("Blue Diamond Detailing Contract.pdf", "_blank");
}



function formsubmit(event){
    event.preventDefault();

    emailjs.send("service_72lqadn", "template_pir1pue", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        cartype: document.getElementById("cartype").value,
        service: document.getElementById("service").value,
        discount: document.getElementById("discount").value,
        phone: document.getElementById("phone").value,
        contract: document.getElementById("contractagree").value,
        signiture: document.getElementById("signiture").value,
    })
    .then(function(response) {
        alert("Thanks For Booking With Blue Diamond Detailing! Please Check Your Email For More Information. Thanks!");
    }, function(error) {
        alert("FAILED to send email: " + JSON.stringify(error));
    });
}
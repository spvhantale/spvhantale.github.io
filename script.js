$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
        $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar scrpit
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vhantale510@gmail.com",
        Password : "22A2F9BBD0E11F20BEB785C37FBBA0744B92",
        To : 'vhantale510@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
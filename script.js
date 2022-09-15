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

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyvVBWH9iC1W-tXwLDu7JhdNwnC2N1wQQanlCysdjmiFlZT8P7ypmAnFCgYryes6NM/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully";
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
GitHubCalendar(".calendar", "spvhantale");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "spvhantale", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "spvhantale", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${Swapnil28Y}`)
       }
    })
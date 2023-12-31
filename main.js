const wrapper = $('.wrapper');
const loginLink = $('.login-link');
const registerLink = $('.register-link');
const btnLogin = $('.btn-login');
const closeIcon = $('.close-icon');


registerLink.on('click', () => {
    wrapper.addClass('active');
})
loginLink.on('click',()=>{
    wrapper.removeClass('active');
})
btnLogin.on('click',()=>{
    wrapper.addClass('active-btn');
})
closeIcon.on('click',()=>{
    wrapper.removeClass('active-btn');
})





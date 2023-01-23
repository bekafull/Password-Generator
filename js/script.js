let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    input.value = GeneratePassword(8);
});

function GeneratePassword(length = 8){
    let chartset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    let password = '';

    for(let i = 0; i < length; ++i){
        let at = Math.floor(Math.random() * (chartset.length + 1));

        password += chartset.charAt(at);
    }

    return password;

}
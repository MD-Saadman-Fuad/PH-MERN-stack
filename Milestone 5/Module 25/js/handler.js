console.log('Connected!!')

document.getElementById('btn-update-title')
        .addEventListener('click', function (){
            console.log('clicked');

            const pageTitle = document.getElementById('title-text');
            pageTitle.innerText = 'Updated Title Text';
        })

        document.getElementById('login-btn')
        .addEventListener('click', function (){
            console.log('login Button Clicked')
            const loginInfo = document.getElementById('user-info');
            loginInfo.innerText = 'User Successfully logged in!!!'

        })
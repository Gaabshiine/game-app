// DOM: stands for Document Object Model


// 0px: visible
// -100%: hide



document.querySelector('.bars').addEventListener('click', function(){
    var sidebar = document.querySelector('.inside-container');
    if(sidebar.style.right === '0px'){
        sidebar.style.right = '-100%';
    }else{
        sidebar.style.right = '0px';
    }
})



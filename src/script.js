// sidebar start 

let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')
let mainContent = document.querySelector('.main--content')

menu.onclick = function() {
    sidebar.classList.toggle('active')
    mainContent.classList.toggle('active')
}
// ENDS 

var modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
 modeSwitch.classList.toggle('active');
});

// actvation  button start
// $(document).ready (function(){
//     $('#btnActivation').click(function(){
//       if(!$('#btnActivation').hasClass(('btn--activated'))){
//            $('#btnActivation').removeClass('btn--activate');
//       $('#btnActivation').addClass('btn--waiting');
//       setTimeout(function(){
//         removeWaiting();
//       }, 3000); 
//       }
  
//     });
    
//     function removeWaiting(){
//         $('#btnActivation').removeClass('btn--waiting');
//         $('#btnActivation').addClass('btn--activated');
//     }
    
//   });
   
//   Ends 
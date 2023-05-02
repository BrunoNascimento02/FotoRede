function menuh(){
    let menu =
        document.getElementById('idmenuzinho');
        if (menu.style.display == "block"){
            menu.style.display = "none"
        } else menu.style.display = "block"
}
 
const heart = document.querySelector('.coracao');

heart.addEventListener('click', function() {
  heart.classList.toggle('coracao1');
}); 


const menu = document.querySelector('.menuclick');

menu.addEventListener('click', function() {
  menu.classList.toggle('menuclicado');
});
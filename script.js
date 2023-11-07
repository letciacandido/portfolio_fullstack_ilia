

let listaSetaDireita = document.getElementsByClassName('seta');

for (let index = 0; index < listaSetaDireita.length; index++) {
    listaSetaDireita[index].addEventListener('click', function(){
        let slider;
        if (this.classList.contains('experiencia')) {
            
            slider = document.getElementsByClassName('slider experiencia')[0];
        } else if (this.classList.contains('cursos')) {
            
            slider = document.getElementsByClassName('slider cursos')[0];
        }
        if (slider) {
            if(this.classList.contains('bi-arrow-right-circle-fill')){
                slider.scrollLeft += 100; 
            } else if(this.classList.contains('bi-arrow-left-circle-fill')){
                slider.scrollLeft -= 100;
            }
        }
    })    
}


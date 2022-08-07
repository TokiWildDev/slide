
//Variables Globales//
const items = document.getElementsByClassName('containSlide');
let paragraphe = document.getElementById('containBtn__comptSlide');
const nbItems = items.length;
let count = 0 ;
let compt = 1;

//Fonctions//
const slideSuivant = () =>
{
    const suivant = document.getElementsByClassName('slideSuivant');

    suivant[0].addEventListener('click',() =>
    {

        items[count].classList.remove('containSlide--active');

        if(count < nbItems - 1)
        {
            count++;
            compt++;  
        }
        else
        {
            count=0;
            compt = 1;     
        }
        
        items[count].classList.add('containSlide--active');
        paragraphe.innerHTML = `${compt}`

    });
}
const slidePrecedent = () =>
{
    const precedent = document.getElementsByClassName('slidePrecedent');

    precedent[0].addEventListener('click',() =>
    {
        console.log('précedent')

        items[count].classList.remove('containSlide--active');
        if(count> 0)
        {
            count --;
            compt --;
        }
        else
        {
            count = nbItems - 1;
            compt = nbItems;
        }

        items[count].classList.add('containSlide--active');
        paragraphe.innerHTML = `${compt}`
    });
}

//Execution//
paragraphe.innerHTML = `1`;
slideSuivant();
slidePrecedent();
console.log('helloWolrd')

const items = document.getElementsByClassName('containSlide');
const nbItems = items.length;
const suivant = document.getElementsByClassName('slideSuivant');
const precedent = document.getElementsByClassName('slidePrecedent');
let count = 0 ;

suivant[0].addEventListener('click',() =>
{

    items[count].classList.remove('containSlide--active');

    if(count < nbItems - 1)
    {
        count++;
        console.log(count);
    }
    else
    {
        count=0;
        console.log(count);   
    }
     
    items[count].classList.add('containSlide--active');

});


precedent[0].addEventListener('click',() =>
{
    console.log('précedent')
});




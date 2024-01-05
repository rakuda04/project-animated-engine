
var elements = document.querySelectorAll('.animate');
var animations = ['animateTop','animateLeft', 'animateRight', 'animateLeft', 'animateRight', 'animateBottom']; //t,l,r,l,r,d

elements.forEach(function(element, index) {
    setTimeout(function() {
        element.classList.remove('hidden');
        element.classList.add(animations[index]);
    }, index * 1000); // 1000ms delay between each animation
});

validation = document.querySelector('.cta-button');
addEventListener('click', (e) => {

})

// check if pattern matches with the given scope 
// if not change css class to red
//fix eye perhaps

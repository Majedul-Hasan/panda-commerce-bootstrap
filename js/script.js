const allH2 = document.querySelectorAll('h2')
// console.log(allH2);
allH2.forEach(elem => {
    elem.style.color = 'lightblue'
    
});

    
    document.querySelector('#backpack').style.backgroundColor = 'tomato';
    document.querySelector('#backpack').style.paddingBottom = '30px';

   const cards = document.getElementsByClassName('card')

for (const card of cards) {
    card.style.borderRadius = '30px';
    

    
}

 document.getElementsByTagName('button')[1].addEventListener('click', function () {
    console.log('একটা ফাংশন ');
 })
 
 const shocase = document.getElementById('shocase')
 shocase.addEventListener('click', function (event) { 
    if(event.target.innerText === 'Buy Now'){
         event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
    } else{
        // event.target.parentNode.removeChild(event.target)

    }

 })

 document.getElementById('touch').addEventListener('keyup', function (event) {
    event.preventDefault()
    
 })
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
   console.log(event.target.value);
   if(event.target.value === 'email'){
    document.getElementById('submitBtn').removeAttribute('disabled')
     } else{
    document.getElementById('submitBtn').setAttribute('disabled', 'true')
     }
    })

    const imgs = shocase.getElementsByTagName("img");
   
    for (const img of imgs) {    
        const originalSrc = img.getAttribute('src');   
        img.addEventListener('mouseover', function (event) {
            img.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg')
        });
        img.addEventListener('mouseout', function (event) {
           img.setAttribute('src', originalSrc);
        });

    }

    document.getElementById('subscribe').addEventListener('dblclick', function (event) {
        const color = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        console.log(color);
        event.target.style.backgroundColor = color;
        
    })
    
    document.querySelectorAll("#subscribe *").forEach(function(element){
        element.addEventListener("dblclick", function(event){
            event.stopPropagation();
        });
    });
//document.getElementById ()
const judul = document.getElementById ('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Fahna Sabilla';


//document.getElementByTagName()
const p = document.getElementsByTagName('p');
// p[1].style.backgroundColor =  'lightblue';

for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'green';
}

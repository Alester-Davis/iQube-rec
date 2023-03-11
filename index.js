document.querySelector('.text p').innerHTML= document.querySelector('.text p').innerText.split("").map(
    (char,i)=>
    `<span style="transform:rotate(${i * 11}deg)">${char}</span>`
).join("")



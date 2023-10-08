for (let i = 1; i <= 151; i++) {
   const img = document.createElement("img");
   img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
   document.querySelector(".container").appendChild(img);
}

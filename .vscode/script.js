function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode add img light
    img.setAttribute("src", "./assets/assets/AvatarM-Light.png")
  } else {
    //se tiver sem light mode, mantem img
    img.setAttribute("src", "./assets/assets/AvatarM.png")
  }

  //pegar a tag alt
  const alt = document.querySelector("#profile img")
  //substituir a descrição
  if (html.classList.contains("light")) {
    //se tiver light mode add alt light
    alt.setAttribute("alt", "Foto de Matheus de oculos de sol, sorrindo usando barba, camisa de gola branca e blusa preta.")
  } else {
    //se tiver sem light mode, mantem alt
    alt.setAttribute("alt", "Foto de Matheus sorrindo usando barba, camisa de gola branca e blusa preta.")
  }
}

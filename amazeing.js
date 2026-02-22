//////////////////// TODO //////////////////////////////
/* Use this file as a reference to build a maze. 

* are walls, . are paths, S is the starting point of the player and T is the treasure you should reach in order to end the game.
Create a maze.css file, you'll have to create styles for the 2 types of terrain (walls and paths), it can be simple background colors for starter.

Using the keyboard you can navigate in the maze (you can only stay on paths, you cannot cross walls)
The first level looks like this (starting as a red tile, treasure as a yellow tile) */

import { LEVEL_1, LEVEL_2, LEVEL_3 } from "./levels.js"

const main = document.querySelector("main")
const levelSelect = document.getElementById("levelSelect")

const container = document.createElement("div")
container.setAttribute("id", "container")
main.appendChild(container)

let mazeArray = LEVEL_1

// coordonnées du héro (H) et du trésor (T)
let xH, yH
let xT, yT

const createMaze = () => {
  for (let y = 0; y < mazeArray.length; y++) {
    let row = document.createElement("div")
    row.classList.add("row")
    for (let x = 0; x < mazeArray[y].length; x++) {
      const cell = document.createElement("div")
      if (mazeArray[y][x] === "*") {
        cell.classList.add("wall")
      } else if (mazeArray[y][x] === ".") {
        cell.classList.add("path")
      } else if (mazeArray[y][x] === "S") {
        cell.setAttribute("id", "start")
        xH = x
        yH = y
      } else {
        cell.setAttribute("id", "end")
        xT = x
        yT = y
      }

      cell.classList.add("cell")
      row.appendChild(cell)
      container.appendChild(row)
      container.classList.add("old")
    }
  }
  const hero = document.createElement("img")
  hero.src = "assets/spider2.png"
  hero.id = "hero"

  const heroCell = document.querySelector('#start')
  heroCell.appendChild(hero)

  const treasure = document.createElement("img")
  treasure.src = "assets/toile.png"
  treasure.id = "treasure"

  const treasureCell = document.querySelector('#end')
  treasureCell.appendChild(treasure)
}

createMaze()

////////// Event Listener sur le menu 'Level' //////////

levelSelect.addEventListener("change", () => {
  let level = parseInt(levelSelect.value)
  switch (level) {
    case 1:
      mazeArray = LEVEL_1
      break
    case 2:
      mazeArray = LEVEL_2
      break
    case 3:
      mazeArray = LEVEL_3
      break
  }

  let rows = document.querySelectorAll(".row")
  rows.forEach((row) => {
    row.remove()
  })

  createMaze()
})

////////// Event Listener pour les déplacements (flèches) //////////

document.addEventListener("keydown", (event) => {

  let newX = xH
  let newY = yH

  if (event.key === "ArrowUp") {
    newY -= 1
  } else if (event.key === "ArrowRight") {
    newX += 1 
  } else if (event.key === "ArrowDown") {
    newY += 1 
  } else if (event.key === "ArrowLeft") {
    newX -= 1 
  }

  if (newY >= 0 && newY < mazeArray.length && newX >= 0 && newX < mazeArray[0].length) {
    let newHeroPosition = document.querySelector(`#container .row:nth-child(${newY+1}) .cell:nth-child(${newX+1})`)
    console.log(newY, newX)
    console.log(newHeroPosition)

    if (newHeroPosition.classList.contains('path')) {
      newHeroPosition.id = 'newHeroPosition'
      newHeroPosition.appendChild(hero)
      xH = newX
      yH = newY
    }

    if (newHeroPosition.id ==='end') {
      newHeroPosition.id = 'newHeroPosition'
      treasure.remove()
      newHeroPosition.appendChild(hero)
      


      let level = parseInt(levelSelect.value)
      level++
      levelSelect.value = level
      if (level<4) {
        levelSelect.dispatchEvent(new Event('change'))
      } else {{
          setTimeout(() => {
            alert("You Nailed It!!!");
          }, 500); 
        }
      }
      
      
    }
  }
  
})



//////////////////////////////////////////////////////////////////////////////////////////////////////
// code ci dessous a oublier : demandait beaucoup d'adaptations pour les niveaux suivants.

//const createCell = () => {
//  for (let y = 0; y < mazeArray.length; y++) {
//    for (let x = 0; x < mazeArray[y].length; x++) {
//      const cell = document.createElement("div");
//      if (mazeArray[y][x] === "*") {
//        cell.classList.add("wall");
//      } else if (mazeArray[y][x] === ".") {
//        cell.classList.add("path");
//      } else if (mazeArray[y][x] === "S") {
//        cell.setAttribute("id", "start");
//      } else {
//        cell.setAttribute("id", "end");
//      }
//      //cell.innerText = "hello";
//      cell.classList.add("cell");
//      container.appendChild(cell);
//      // addEventListener("keydown", travel);
//    }
//  }
//};

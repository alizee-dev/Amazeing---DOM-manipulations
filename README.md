# aMAZEing !

A simple Maze program :
* Using loops and the DOM to generate simple templates.
* Using keyboard events
* Think of problems as algorithms


## How to Run the Project

Because the project uses **ES Modules**, it must be served via a local server.

### Option 1 (Recommended)

Use **Live Server** in VS Code.

### Option 2

Run a local server manually:

```
python -m http.server 8000
```

Then open:  

```http://localhost:8000``` 

Opening `index.html` directly with `file://` will not work due to module import restrictions.


## Features

- 3 selectable levels  
- Dynamic maze rendering  
- Start (S) and Target (T) detection  
- Level selector dropdown  
- Modular structure using ES6 imports/exports  
- Clean grid-based layout  

## What I Learned

- Using ES Modules (`import` / `export`)  
- Serving projects with a local server  
- DOM manipulation with vanilla JavaScript  
- Rendering dynamic grid layouts  
- Managing game state  
- Structuring a small front-end project cleanly  


## Screenshots

![Demo](Demogif.gif)


## Live Demo

[View the project live here](https://amazeing-maze.netlify.app)


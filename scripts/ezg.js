/*

###########################
EZ GAMES UTILITIES
BY ROCCO (PALO BLANCO)

LOTS OF CONVENIENCE FUNCTIONS FOR MAKING 2D GAMES

STARTED: July 12, 2020
###########################

*/

// TEST STUFF

export let testFunc = function() {
    console.log("It Worked!");
}

//CANVASES AND DRAWING

export class GameWindow {
    height = 128*4;
    width = 128*4;
    virtualHeight = 128;
    virtualWidth = 128;
    constructor(height, width, virtualHeight, virtualWidth) {
        this.height = height;
        this.width = width;
        this.context = document.querySelector("canvas").getContext("2d");
        this.context.canvas.height = this.height;
        this.context.canvas.width = this.width;
        this.context.imageSmoothingEnabled = false;
        this.virtualCanvas = new DrawCanvas(virtualHeight, virtualWidth);
    }

    flip() {
        this.context.drawImage(this.virtualCanvas.canvas,0,0,this.width,this.height);
    }

}

export class DrawCanvas {
    constructor(height = 128, width = 128) {
        this.height = height;
        this.width = width;
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext("2d");
        this.context.imageSmoothingEnabled = false;
    }
}

//CONTROLLER
export class Controller {
    
    constructor () {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }

    keyListener(event) {
        let key_state = (event.type == "keydown")?true:false;
        switch(event.keyCode) {
        case 37:// left key
            this.left = key_state;
            break;
        case 38:// up key
            this.up = key_state;
            break;
        case 39:// right key
            this.right = key_state;
            break;
        case 40:// down key
            this.down = key_state;
            break;
        }
    }

    start() {
        window.addEventListener("keydown", function(e) {
            // space and arrow keys
            if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
            }, false);
     
        window.addEventListener("keydown", event => {this.keyListener(event)});
        window.addEventListener("keyup", event => {this.keyListener(event)});

    }
}   


//SOUNDS

export class Sound {
    constructor(src, volume=0.5) {
        this.snd = document.createElement("audio");
        this.snd.src = src;
        this.snd.setAttribute("preload", "auto");
        this.snd.setAttribute("controls", "none");
        this.snd.style.display = "none";
        this.snd.volume = volume;
        document.body.appendChild(this.snd);
    }
    play() {
        this.snd.play();
    }
    stop() {
        this.snd.pause();
    }
}

export class Music {
    volume = 0.5;
    constructor(src, volume=0.5) {
        this.snd = document.createElement("audio");
        this.snd.src = src;
        this.snd.setAttribute("preload", "auto");
        this.snd.setAttribute("controls", "none");
        this.snd.style.display = "none";
        this.snd.loop = true;
        this.snd.volume = volume;
        document.body.appendChild(this.snd);
    }
    play() {
        this.snd.play();
    }
    stop() {
        this.snd.pause();
    }
}
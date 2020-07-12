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

    sayString(string) {
        console.log(string)
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
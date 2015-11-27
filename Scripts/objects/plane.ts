module objects {
        // Plane Class
        export class Plane extends objects.GameObject {
                private _engineSound: createjs.AbstractSoundInstance;
                // CONSTRUCTOR ++++++++++++++++++++++++++++
                constructor() {
                        super("plane");

                        this.y = 430;
                        // play engine sound
                        this._engineSound = createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
			
                        // Assign keyboard controls
                        this._assignControls();


                }
		
		/** 
		 * Update Method for Plane Class
		*/
                public update(): void {
                        // for moving with keyboard
                        this._controlAction();
                        
                        // for moving with mouse
                        //this.x = stage.mouseX;
                }

                public engineOff(): void {
                        console.log("Engine off");
                        this._engineSound.stop();
                }
		
                // Bind key actions to player events
                private _assignControls() {
                        window.onkeydown = this._onControlDown;
                        window.onkeyup = this._onControlUp;
                }
		
                // Switch statement to activate movement and rotation
                private _onControlDown(event: KeyboardEvent) {
                        switch (event.keyCode) {
                                case keys.A:
                                case keys.LEFT:
                                        controls.LEFT = true;
                                        break;
                                case keys.D:
                                case keys.RIGHT:
                                        controls.RIGHT = true;
                                        break;
                        }
                }

                // switch statement to reset controls
                private _onControlUp(event: KeyboardEvent) {
                        switch (event.keyCode) {
                                case keys.A:
                                case keys.LEFT:
                                        controls.LEFT = false;
                                        break;
                                case keys.D:
                                case keys.RIGHT:
                                        controls.RIGHT = false;
                                        break;
                        }
                }
		
                // Respond to player key presses
                private _controlAction() {
                        // Execute left turn
                        if (controls.LEFT) {
                                this.moveLeft();
                        }

                        // Execute right turn
                        if (controls.RIGHT) {
                                this.moveRight();
                        }

                }
		
                // Turn Left Method
                public moveLeft() {
                        this.x -= 5;
                }

                // Turn Right Method
                public moveRight() {
                        this.x += 5;
                }


        }
}
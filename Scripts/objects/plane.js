var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Plane Class
    var Plane = (function (_super) {
        __extends(Plane, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++
        function Plane() {
            _super.call(this, "plane");
            this.y = 430;
            // play engine sound
            this._engineSound = createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
            // Assign keyboard controls
            this._assignControls();
        }
        /**
         * Update Method for Plane Class
        */
        Plane.prototype.update = function () {
            // for moving with keyboard
            this._controlAction();
            // for moving with mouse
            //this.x = stage.mouseX;
        };
        Plane.prototype.engineOff = function () {
            console.log("Engine off");
            this._engineSound.stop();
        };
        // Bind key actions to player events
        Plane.prototype._assignControls = function () {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        };
        // Switch statement to activate movement and rotation
        Plane.prototype._onControlDown = function (event) {
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
        };
        // switch statement to reset controls
        Plane.prototype._onControlUp = function (event) {
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
        };
        // Respond to player key presses
        Plane.prototype._controlAction = function () {
            // Execute left turn
            if (controls.LEFT) {
                this.moveLeft();
            }
            // Execute right turn
            if (controls.RIGHT) {
                this.moveRight();
            }
        };
        // Turn Left Method
        Plane.prototype.moveLeft = function () {
            this.x -= 5;
        };
        // Turn Right Method
        Plane.prototype.moveRight = function () {
            this.x += 5;
        };
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map
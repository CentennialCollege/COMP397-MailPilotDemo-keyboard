var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // OVER CLASS
    var Test = (function (_super) {
        __extends(Test, _super);
        // CONSTRUCTOR
        function Test() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Test.prototype.start = function () {
            // add ocean
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            stage.addChild(this);
        };
        Test.prototype.update = function () {
            this._ocean.update();
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        Test.prototype._assignControls = function () {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        };
        // Switch statement to activate movement and rotation
        Test.prototype._onControlDown = function (event) {
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
        Test.prototype._onControlUp = function (event) {
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
        return Test;
    })(objects.Scene);
    states.Test = Test;
})(states || (states = {}));
//# sourceMappingURL=test.js.map
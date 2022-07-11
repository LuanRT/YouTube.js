import Text from "./Text.js";
import Parser from "../index.js";

class EmergencyOnebox {
    type = 'EmergencyOnebox';
    constructor(data) {
        this.title = new Text(data.title);
        this.first_option = Parser.parse(data.firstOption);
        this.menu = Parser.parse(data.menu);
    }
}
export default EmergencyOnebox;

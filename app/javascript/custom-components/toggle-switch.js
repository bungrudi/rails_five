import {html, LitElement} from "lit-element";
import {toggleSwitchStyles} from "./toggle-switch-styles"; // shared style

class ToggleSwitch extends LitElement {
    static get styles() {
        return toggleSwitchStyles;
    }

    static get properties() {
        return {
            small: {type: Boolean}
        }
    }

    constructor() {
        super();
        this.small = false;
    }

    render() {
        return html `
            <label class="el-switch${this.small? ' el-switch-sm':''}">
              <input type="checkbox" name="switch">
              <span class="el-switch-style"></span>
            </label>
        `
    }
}

customElements.define("toggle-switch", ToggleSwitch)

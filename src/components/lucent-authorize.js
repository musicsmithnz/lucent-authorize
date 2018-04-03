import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import * as template_string from "./lucent-authorize.html";
import "feather-icons/dist/feather.min.js"
/*
*/

export class LucentAuthorize extends PolymerElement {

    constructor(){
        super();
        this.querySelector(circle).innerHTML=feather.icons.camera.contents
    };

    static get observers(){}

	static get template() {
        return template_string ;
    }

	static get properties() {
    	return {
            name: String
	    };
    }

    static get is(){
        return 'lucent-authorize';
    }
}

customElements.define("lucent-authorize", LucentAuthorize)


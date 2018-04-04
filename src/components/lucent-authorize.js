import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import * as template_string from "./lucent-authorize.html";
const feather = require('feather-icons')

/*
*/

export class LucentAuthorize extends PolymerElement {

    constructor(){
        super();
    };

    static get observers(){}

	static get template() {
        return template_string;
    }

	static get properties() {
    	return {
            name: String
	    };
    }

    static get is(){
        return 'lucent-authorize';
    }
    ready(){
        super.ready();
        console.log("this: " + this)
        var element = document.querySelector('i')//.innerHTML=feather.icons.camera.contents  
        console.log("element: " + element)
        var featherIcon=feather.icons.camera.contents
        var svg=document.createElement('svg');
        svg.innerHTML=featherIcon
        element.insertBefore(featherIcon)
        console.log(featherIcon)
    }
        /*
    */
}

customElements.define("lucent-authorize", LucentAuthorize)


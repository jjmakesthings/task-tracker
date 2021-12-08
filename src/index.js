import {tab1Wrap} from "./tab1.js";
import {tab2Wrap} from "./tab2.js";

const outer = document.getElementById("content");

const button1 = document.getElementById("tab1");
button1.addEventListener("click", (e)=>{
    outer.innerHTML="";
    outer.appendChild(tab1Wrap);
});

const button2 = document.getElementById("tab2");
button2.addEventListener("click", (e)=>{
    outer.innerHTML="";
    outer.appendChild(tab2Wrap);
});


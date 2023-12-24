import './style.scss'
import {App} from "./components/App.ts";
import {Render} from "./service/render.ts";
import {effectHook} from "./logic/script.ts";

const root = new Render([App])
root.draw('#app', effectHook)


// @ts-ignore
window.root = root
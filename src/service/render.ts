import {Component} from "./component.ts";
import {delay} from "../utils/delay.ts";

interface IRender {
    components: Array<Component>

}
export class Render implements IRender{
    components: Array<Component> = []

    constructor(component: typeof Component[]) {
       this.components = component.map(comp => new comp())
    }

    draw(selector: string, afterRender?: () => void){
        const node = document.querySelector(selector) as HTMLElement

        const fragment = document.createDocumentFragment()
        const out = document.createElement('div') as HTMLDivElement

        out.id = `${fragment.nodeName}-rendered`
        fragment.append(out)

        window.addEventListener('load', () => {
            if (node){
                this.components.map(c => {
                    fragment.querySelector('div')?.insertAdjacentHTML('beforeend', c.render() as unknown as string)
                })

                node.append(fragment)
                if (afterRender){
                    delay(500).then(afterRender)
                }

            }
            else {
                throw new Error(`No appropriate ${node} element found to render html`)

            }
        })
    }
}



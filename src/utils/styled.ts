import {Selector} from "../types/types.ts";

export class Styled {
    selector: Selector
    extraRules: string
    constructor(selector: Selector = 'body', extraRules: string = '') {
        this.selector = selector
        this.extraRules = extraRules
    }
    style(css: TemplateStringsArray){
        window.addEventListener('load', () => {
            const style = document.createElement('style')
            style.id = `styled-${Date.now()}`
            style.innerHTML = `${this.selector}{${css}} \n\r ${this.extraRules.trim()}`.trim()


            const styleFragment = document.createDocumentFragment()
            styleFragment.append(style)

            document.head.append(styleFragment)
        })


    }
}
import {Component} from "../service/component.ts";
import {Header} from "./Header.ts";
import {Section} from "./Section.ts";
import {Styled} from "../utils/styled.ts";


new Styled('div.container').style`
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;

`
export class App extends Component {

    render() {
        return (
            `
                <div class="container">
                
                    ${new Header().render()}
                    ${new Section(
                        {
                            title: 'Press 3',
                            attr: 'data-scroll=s-3',
                            id: 'press-3'
                        }).render()
                    }
                    ${new Section(
                        {
                            title: 'Header',
                            id: 'header',
                            extraContent: `<img src="http://tinyurl.com/yva82hyk" />`
                        }).render()
                    } 
                    ${new Section(
                        {
                            title: 'Input', 
                            id: 'input',
                            extraContent: `<input type="text" placeholder="Enter" id="text-input" />`
                        }).render()
                    }
                    ${new Section(
                        {
                            title: 'Press 7', 
                            id: 'press-7',
                            attr: 'data-scroll=s-7',
                            extraContent: `<img src="http://tinyurl.com/mrx5j6sr" />`
                        }).render()
                    }
                
                </div>
            
            `
        )
    }
}


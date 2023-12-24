import {Component} from "../service/component.ts";
import {Styled} from "../utils/styled.ts";


new Styled('section', `
    section:nth-child(even){
      background: #efefef;
      padding: 10px;
    }

`).style`
    background: ghostwhite;
    padding: 20px;
    margin-bottom: 100px;
    border-radius: 6px;

`

interface SectionProps {
    extraContent?: string
    title: string
    id?: string
    content?: string
    attr?: string
}
export class Section extends Component {
    extraContent?:  string
    title: string
    id?: string
    attr?: string
    content?: string
    constructor({content, attr = '', id = `rand-${crypto.randomUUID()}`, extraContent = '', title}: SectionProps) {
        super();
        this.content = content!
        this.extraContent = extraContent
        this.title = title
        this.attr = attr
        this.id = id
    }
    render() {
        return (
            `
              <section ${this.attr} id="${this.id}">
              
                 
                
                      <h3>${this.title}</h3>
                      <p>
                          ${this.content || `Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          Ab aliquam asperiores at beatae 
                          eveniet exercitationem iusto, maiores, 
                          nesciunt nihil nisi optio perferendis 
                          praesentium quibusdam recusandae 
                          rem suscipit tempore temporibus voluptatum!
                          Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          Ab aliquam asperiores at beatae 
                          eveniet exercitationem iusto, maiores, 
                          nesciunt nihil nisi optio perferendis 
                          praesentium quibusdam recusandae 
                          rem suscipit tempore temporibus voluptatum!`}
                      </p>   
                      <p>
                          ${this.content || `Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          Ab aliquam asperiores at beatae 
                          eveniet exercitationem iusto, maiores, 
                          nesciunt nihil nisi optio perferendis 
                          praesentium quibusdam recusandae 
                          rem suscipit tempore temporibus voluptatum!
                          Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          Ab aliquam asperiores at beatae 
                          eveniet exercitationem iusto, maiores, 
                          nesciunt nihil nisi optio perferendis 
                          praesentium quibusdam recusandae 
                          rem suscipit tempore temporibus voluptatum!`}
                      </p>
                      
                      ${this.extraContent}

              
              </section>
            
            
            `
        )
    }
}
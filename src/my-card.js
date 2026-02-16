import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String },
      image: {type: String},
      alt: {type: String},
      description: {type: String},
      fancy: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.title = 'My card';
    this.image = '';
    this.alt = '';
    this.description = '';
    this.fancy = false;
  }

  static get styles() {
    return css`
    :host {
      display: inline-block;
    }

    :host([fancy]) {
display: inline-block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
  width: 550px;
}

    
.card {
  font-size: 1em;
  display: inline-flex;
  border: 2px solid grey;
  padding: 8px;
  margin: 8px;
  background-color: navy;
}

.card-image {
  width: 200px;
  height: 300px;
  object-fit: cover;
}

.card-text {
  width: 300px;
  padding: 0 8px 8px 8px;
  color: black;
  background-color: white;
  margin: 0 0 0 8px;
  height: 300px;
  overflow: auto;
}

.card-title {
  position: sticky;
  top: 0;
  text-align: center;
  font-size: 2em;
  padding: 8px 8px 16px;
  background-color: var(--my-card-title-background-color, #eeeeee);
  color: var(--my-card-title-color, black);
}
    `;
  }

  openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
    return html`
    <div class ="card">
       <meme-maker top-text="${this.title}" bottom-text="${this.title}" image-url="${this.image}"></meme-maker>
      <div class="card-text">
        <h1 class="card-title">${this.title} </h1>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
 </details>
      </div>
    </div>  
  `;
  }

}

globalThis.customElements.define(MyCard.tag, MyCard);

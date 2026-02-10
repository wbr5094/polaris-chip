import { LitElement, html, css } from 'lit';

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
      description: {type: String}
    };
  }

  constructor() {
    super();
    this.title = 'My card';
    this.image = '';
    this.alt = '';
    this.description = '';
  }

  static get styles() {
    return css`
    :host {
      display: inline-block;
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

  render() {
    return html`
    <div class ="card">
      <img
      class="card-image"
      src="${this.image}"
      alt="${this.alt}"
      />
      <div class="card-text">
        <h1 class="card-title">${this.title} </h1>
        <p>${this.description}</p>
      </div>
    </div>  
  `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

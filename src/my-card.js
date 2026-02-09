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

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
    .card.fancy {
  background-color: red;
}

h1 {
  font-size: 10px;
}

#card-list {
  display: flex;
}
.card {
  font-size: 1em;
  display: inline-flex;
  border: 2px solid grey;
  padding: 8px;
  margin: 8px;
  opacity: .8;
  background-color: navy;
}

.card-image {
  width: 200px;
  height: 100%;
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
  background-color: var(--my-card-title-background-color, #eeeeee);
  color: var(--my-card-title-color, black);
  text-align: center;
  font-size: 2em;
  padding: 8px 8px 16px;
  margin: 0 -8px;
}
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`<div class="control-wrapper">
</div>
<div id="cardlist">
  <div class="card">
    <img class="card-image" ${this.image}src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431678.png&w=350&h=254" />
    <div class="card-text">
      <h1 class="card-title">${this.title}</h1>
      <div class="card-details">
        <div class="card-details">
        <p>
        Tyrese Maxey is the best basketball player in the world. <p></p>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: {type: String},
      alt: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

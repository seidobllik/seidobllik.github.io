class FlipCard extends HTMLElement {
  connectedCallback() {
    // let text = this.getAttribute("front");
    // let elem = document.createElement("div");
    // elem.innerHTML = text;
    // this.appendChild(elem);

    let card = document.createElement("div");
    let inner = document.createElement("div");
    let front = document.createElement("div");
    let back = document.createElement("p");
    let image = document.createElement("img");

    card.setAttribute("class", "flip-card");
    inner.setAttribute("class", "flip-card-inner");
    front.setAttribute("class", "flip-card-front");
    back.setAttribute("class", "flip-card-back");
    image.setAttribute("src", this.getAttribute("front-image"));
    back.innerHTML = this.getAttribute("back-text");

    front.appendChild(image);
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    this.appendChild(card);
  }
}

customElements.define("flip-card", FlipCard);

/*

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://img.icons8.com/ios-filled/2x/css3.png" />
    </div>
    <div class="flip-card-back">
      <p>how good am I with this language?</p>
    </div>
  </div>
</div>

*/

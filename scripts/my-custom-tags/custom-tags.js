// custom c-article as an article tag
class CArticle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.setAttribute('role', 'article');
  }
}
customElements.define('c-article', CArticle);



// custom tag like a div
class EExample extends HTMLElement {
    constructor() {
        super();
    }
}
// first is tag name, 2nd is js class
customElements.define('e-example', EExample);


// left section tag
class LeftSec extends HTMLElement{
    constructor(){
        super();
    }
}
customElements.define('left-sec', LeftSec);


// right section tag
class RightSec extends HTMLElement{
    constructor(){
        super();
    }
}
customElements.define('right-sec', RightSec);


// top section tag
class TopSec extends HTMLElement{
    constructor(){
        super();
    }
}
customElements.define('top-sec', TopSec);


// middle section tag
class MiddleSec extends HTMLElement{
    constructor(){
        super();
    }
}
customElements.define('middle-sec', MiddleSec);


// bottom section tag
class BottomSec extends HTMLElement{
    constructor(){
        super();
    }
}
customElements.define('bottom-sec', BottomSec);

// text section tag
class TextGroup extends HTMLElement{
    constructor(){
        super();
    }
}
customElements.define('text-group', TextGroup);


// extra block tags
class ExtraBlock extends HTMLElement{
    constructor(){
        super();
    }
}
customElements.define('extra-block', ExtraBlock);
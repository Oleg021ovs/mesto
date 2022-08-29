export default class Section {
    constructor({ items, renderer}, containerSelector) {
        this._Items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };
  
    renderItems(arr) {
        arr.reverse().forEach(item => this._renderer(item))


        //this._Items.forEach((data) => {
            //this._renderer(data, this._container)
        //});
       
    };
  
    addItem(element) {
        this._container.prepend(element);
    };
  };

  
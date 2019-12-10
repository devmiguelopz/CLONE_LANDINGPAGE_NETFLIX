class App {
  constructor() {
    this.ObjDesigner = new Designer();
    this.Create();
  }
  Create() {
    try {
      this.SetData();
    } catch (error) {
      console.error("main.js/Create =>", error)
    }
  }
  SetData() {
    try {
      this.ObjDesigner.SetOnClickSelectItem(this.SelectItem.bind(this));
    } catch (error) {
      console.error("main.js/SetData =>", error)
    }
  }
  SelectItem(event) {
    try {
      event.preventDefault();
      let elementTarget = event.target
      if (!elementTarget.id.includes("tab")) elementTarget = elementTarget.parentElement;
      this.RemoveBorderItems();
      this.RemoveShowItem();
      elementTarget.classList.add("tab-border");
      this.ShowItems(document.querySelector(`#${elementTarget.id}-content`));
    } catch (error) {
      console.error("main.js/SelectItem =>", error)
    }
  }
  RemoveBorderItems() {
    try {
      this.ObjDesigner.TabItems.forEach(item => item.classList.remove("tab-border"));
    } catch (error) {
      console.error("main.js/RemoveBorderItems =>", error)
    }
  }
  RemoveShowItem() {
    try {
      this.ObjDesigner.tabContentItems.forEach(item => item.classList.remove("is-visible"));
    } catch (error) {
      console.error("main.js/RemoveShowItem =>", error)
    }
  }
  ShowItems(elementHtml) {
    try {
      const height = this.GetHeightContent(elementHtml);
      elementHtml.classList.add('is-visible');
      elementHtml.style.height = height;
      const TIME_EXECUTE_EFFECT = 350
      window.setTimeout(() => elementHtml.style.height = '', TIME_EXECUTE_EFFECT);
    } catch (error) {
      console.error("main.js/ShowItems =>", error)
    }
  }
  GetHeightContent(elementHtml) {
    try {
      elementHtml.style.display = 'block';
      const height = elementHtml.scrollHeight + 'px';
      elementHtml.style.display = '';
      return height;
    } catch (error) {
      console.error("main.js/GetHeightContent =>", error)
    }
  }

}
class Designer {
  constructor() {
    this.TabItems = null;
    this.tabContentItems = null;
    this.OnClickSelectItem = null
    this.Create();
  }
  Create() {
    try {
      this.SetData();
      this.SetEvents()
    } catch (error) {
      console.error("main.js/Create =>", error)
    }
  }
  SetData() {
    try {
      this.TabItems = document.querySelectorAll(".tab-item");
      this.tabContentItems = document.querySelectorAll(".tab-content-item");
    } catch (error) {
      console.error("main.js/SetData =>", error)
    }
  }
  SetOnClickSelectItem(event) {
    try {

      if (event && typeof event === 'function') this.OnClickSelectItem = event;
    } catch (error) {
      console.error("main.js/SetOnClickSelectItem =>", error)
    }
  }
  ClickSelectItem(event) {
    try {
      if (this.OnClickSelectItem && typeof this.OnClickSelectItem === 'function') this.OnClickSelectItem(event);
    } catch (error) {
      console.error("main.js/ClickSelectItem =>", error)
    }
  }
  SetEvents() {
    try {
      this.TabItems.forEach(item => item.removeEventListener("click", this.ClickSelectItem.bind(this)));
      this.TabItems.forEach(item => item.addEventListener("click", this.ClickSelectItem.bind(this)));
    } catch (error) {
      console.error("main.js/SetEvents =>", error)
    }
  }
}
const x = new App();

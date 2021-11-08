class ToysGridComponent {
    constructor() {
      this.htmlElement = document.createElement('div');
      this.state = {
        toys: []
      };
      this.init();
    }
  
    fetchFurniture = () => API.getToys(this.saveToys, this.showError);
  
    deleteToys = (id) => {
      API.deleteToys(
        id,
        this.fetchToys,
        this.showError
      );
    }
  
    saveToys = (toys) => {
      this.state.toys = toys;
  
      this.render();
    }
  
    showError = error => console.error(error);
    
    wrapChild = (htmlElement) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'col-12 col-sm-6 col-lg-4';
      wrapper.append(htmlElement);
      return wrapper;
    }
  
    init = () => {
      this.fetchToys();
      this.htmlElement.className = 'row g-3 justify-content-center';
  
      this.render();
    }
  
    render = () => {
      if (this.state.toys.length === 0) {
        this.htmlElement.innerHTML = '<img src="assets/loading.gif" style="width: 256px" />';
      } else {
        this.htmlElement.innerHTML = '';
        const cardComponents = this.state.toys.map(({ id, ...cardProps }) => new ToysCardComponent({
          ...cardProps,
          onDelete: () => this.deleteToys(id)
        }));
        const cardElements = cardComponents.map(componenent => componenent.htmlElement);
        const wrappedElements = cardElements.map(this.wrapChild);
        this.htmlElement.append(...wrappedElements);
      }
    }
  }
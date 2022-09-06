class BreadCrumb {
  constructor(props) {
    this.state = props.initialState;
    this.target = document.createElement('nav');
    this.target.className = 'BreadCrumb';

    props.app.appendChild(this.target);

    this.render();

    this.target.addEventListener('click', (e) => {
      const navItem = e.target.closest('.nav-item');

      if (navItem) {
        this.setState(this.state.slice(0, navItem.dataset.index + 1));
      }
    });
  }

  setState(nextState) {
    this.state = nextState;

    console.log(nextState);
    this.render();
  }

  render() {
    this.target.innerHTML = `${this.state
      .map(
        (node, index) =>
          `<div class="nav-item" data-index="${index}">${node.name}</div>`
      )
      .join('')}`;
  }
}

export default BreadCrumb;

{
  /* <nav class="Breadcrumb">
<div>root</div>
<div>노란고양이</div>
</nav> */
}

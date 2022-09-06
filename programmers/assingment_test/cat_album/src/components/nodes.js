class Nodes {
  constructor(props) {
    this.state = props.initialState;
    this.target = document.createElement('div');
    this.target.className = 'Nodes';

    props.app.appendChild(this.target);

    this.target.addEventListener('click', (e) => {
      const target = e.target.closest('.Node');

      if (!target) return;

      const [nodeId, type] = [target.dataset.id, target.dataset.type];

      if (!nodeId) {
        props.onBackClick();
      }

      if (type === 'DIRECTORY') {
        const selectedNode = this.state.nodes.find(
          (item) => item.id === nodeId
        );

        console.log(selectedNode);
        props.onClick(type, nodeId, selectedNode);
      } else {
        props.onClick(type, nodeId);
      }
    });
    this.render();
  }

  setState(nextState) {
    this.state = nextState;

    this.render();
  }

  render() {
    this.target.innerHTML = '';
    if (!this.state.nodes) return;

    if (!this.state.isRoot) {
      this.target.innerHTML += `<div class="Node"><img src="./assets/prev.png"></div>`;
    }

    this.target.innerHTML += this.state.nodes
      .map(
        (node) => `
    <div class="Node" data-id="${node.id}" data-type="${node.type}">
      <img src="${
        node.type === 'DIRECTORY'
          ? './assets/directory.png'
          : './assets/file.png'
      }"/>
      <div>${node.name}</div>
    </div>`
      )
      .join('');
  }
}

export default Nodes;

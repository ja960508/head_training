import { request } from '../../api/request.js';
import BreadCrumb from './breadCrumb.js';
import Nodes from './nodes.js';

class App {
  constructor(app) {
    this.state = {
      isRoot: false,
      nodes: [],
      depth: [],
      selectedFilePath: null,
      isLoading: false,
    };

    this.breadCrumb = new BreadCrumb({ app, initialState: [] });
    this.nodes = new Nodes({
      app,
      initialState: {},
      onClick: this.loadData,
      onBackClick: this.handleBackClick,
    });

    this.init();
  }

  setState = (nextState) => {
    this.state = nextState;

    this.breadCrumb.setState(this.state.depth);
    this.nodes.setState({ nodes: this.state.nodes, isRoot: this.state.isRoot });
  };

  loadData = async (type, id, selectedNode) => {
    if (type === 'DIRECTORY') {
      const data = await request(id);
      this.setState({
        ...this.state,
        isRoot: false,
        nodes: data,
        depth: this.state.depth.concat(selectedNode),
      });
    } else {
    }
  };

  handleBackClick = async () => {
    const nextState = { ...this.state };
    nextState.depth.pop();
    const prev = nextState.depth[nextState.depth.length - 1];

    if (prev.name === 'root') {
      nextState.nodes = await request();

      this.setState({
        ...nextState,
        isRoot: true,
      });
    } else {
      nextState.nodes = await request(prev.id);

      this.setState({
        nextState,
      });
    }
  };

  init = async () => {
    const firstData = await request();

    this.setState({
      ...this.state,
      isRoot: true,
      nodes: firstData,
      depth: this.state.depth.concat({ name: 'root' }),
    });

    this.breadCrumb.setState(this.state.depth);
    this.nodes.setState({
      nodes: this.state.nodes,
      isRoot: this.state.isRoot,
    });
  };
}

export default App;

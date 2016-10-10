import React, {PropTypes} from 'react';

const NodeList = ({props, changeName, changeNumberNodes, changeNumberLevels}) => {

  console.log('nodelist rendering');

  var createChildren = (node) => {
    if (node) {
      const children = node.nodes ?
        <ul>
          {node.nodes.map(createChildren)}
        </ul> : [];

      return <li key={node.id}>
        {node.name} - {this.props.name}
        {children}
      </li>
    }
  };

  const nodeLines = props.nodes ?
    <ul>
      {props.nodes.map(createChildren)}
    </ul>
    : [];

  console.log('created children li');

  return (
    <div>
      <h2>Hello world {props.name} - {props.nNodes}
        - {props.nLevels}</h2>
      <div>
        <p>Name: <input name="filter" type="text" value={props.name}
                        onChange={changeName}/>
        </p>
        <p>nNodes: <input name="filter" type="text" value={props.nNodes}
                          onChange={changeNumberNodes}/>
        </p>
        <p> nLevels: <input name="filter" type="text"
                            value={props.nLevels}
                            onChange={changeNumberLevels}/>
        </p>

        {nodeLines}
      </div>
    </div>
  );
};

NodeList.propTypes = {
  changeName: PropTypes.func.isRequired,
  changeNumberNodes: PropTypes.func.isRequired,
  changeNumberLevels: PropTypes.func.isRequired
};

export default NodeList;

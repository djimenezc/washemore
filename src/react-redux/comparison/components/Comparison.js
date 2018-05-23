import React, {PropTypes} from 'react';

const createChildren = (node, name) => {
  if (node) {
    const children = node.nodes ?
      <ul>
        {node.nodes.map(createChildrenCurriedName(name))}
      </ul> : [];

    return <li key={node.id}>
      {node.name} - {name}
      {children}
    </li>
  }
};

/**
 * Curried function
 * @param name
 * @returns {Function}
 */
const createChildrenCurriedName = (name) => {

  return function (node) {
    return createChildren(node, name);
  };
};

const NodeListRender = ({props, changeName, changeNumberNodes, changeNumberLevels}) => {

  console.log('nodelist rendering');

  const nodeLines = props.nodes ?
    <ul>
      {props.nodes.map(createChildrenCurriedName(props.name))}
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

NodeListRender.propTypes = {
  changeName: PropTypes.func.isRequired,
  changeNumberNodes: PropTypes.func.isRequired,
  changeNumberLevels: PropTypes.func.isRequired
};

export default NodeListRender;

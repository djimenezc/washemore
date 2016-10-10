import _ from 'lodash'

const createNodeTree = (nLevel, nNodes) => {

  if (nLevel > 0) {
    return _.times(nNodes, function (index) {

      return {
        name: _.random(1, nNodes),
        id: `${nLevel}-${index}`,
        nodes: createNodeTree(nLevel - 1, nNodes)
      };
    })
      .filter((item) => item);
  }
};

export default createNodeTree;

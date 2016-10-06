import _ from 'lodash'

const createNodeTree = (level, nNodes) => {

  if (level > 0) {
    return _.times(nNodes, function (index) {

      return {
        name: _.random(1, nNodes),
        id: `${level}-${index}`,
        nodes: createNodeTree(level - 1, nNodes)
      };
    })
      .filter((item) => item);
  }
};

export default createNodeTree;

'use strict';

function shapeReducer(state = {currentShape: ''}, action) {
  switch (action.type) {
    case 'square': return {currentShape: 'square'};
    case 'diamond': return {currentShape: 'diamond'};
    default: return state
  }
}

export default shapeReducer;
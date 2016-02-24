(function (exports) {
      'use strict';

      /**
       * >>> Cloned from mgechev <<<
       * >>> for personal studying purposes <<<
       *
       * Graph edge.
       * @constructor
       * @public
       * @param {Vertex} e Vertex which this edge connects.
       * @param {Vertex} v Vertex which this edge connects.
       * @param {Number} distance weight of the edge.
       * @module data-structures edge
       */

      exports.Edge = (e, v, distance) => {
            this.from = e;
            this.to = v;
            this.distance = distance;
      };
      
})(typeof window === 'undefined' ? module.exports : window);

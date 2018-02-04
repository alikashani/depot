import { transform } from 'babel-core';
import * as babel from 'babel-core';

babel.transform(code, options) // => { code, map, ast }

var result = babel.transform('code();', options);

var dope = {
  'code': result.code,
  'map': result.map,
  'ast': result.ast,
};

'use strict';

function isKTX(buffer){
  return ('KTX 11' === buffer.toString('ascii', 1, 7));
}

function calculate(buffer){
  // read file resolution metadata
  return {
    'width': buffer.readUInt32LE(36),
    'height': buffer.readUInt32LE(40),
  };
}

module.exports = {
  'detect': isKTX,
  'calculate': calculate
};

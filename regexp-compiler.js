"use strict";

const FLAVORS = Object.freeze( {
            COMPATIBILITY: 'compatibility',
            NATIVE: 'native',
            PERL: 'perl',
            ECMA5: 'ecma5',
            ECMA6: 'ecma6',
            ECMA7: 'ecma7'
          } )
    , STANDARD_LIBRARY = Object.freeze( {
          } )
    , LIBRARIES = Object.freeze( {
            standard: new Library( STANDARD_LIBRARY )
          } )
    ;

module.exports = Object.assign( classFactory( { flavor: FLAVOR.COMPATIBILITY } )
    , {
  classFactory: classFactory,
  FLAVORS: FLAVORS,
  LIBRARIES: LIBRARIES
  
} );

Class AbstractCRegExp {
  
  constructor ( source, flags ) {
    ( source instanceof RegExp || source instanceof AbstractCRegExp )
        && (source = source.source);
    
  }
  
};

function classFactory ( options ) {
  const class
      ;
  
  return class
}

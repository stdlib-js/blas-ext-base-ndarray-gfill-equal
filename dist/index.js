"use strict";var v=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=v(function(o,u){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),l=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/blas-ext-base-gfill-equal/dist').ndarray,t=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function f(a){var r,i,e;return e=a[0],r=t(a[1]),i=t(a[2]),d(s(e,0),r,i,c(e),l(e,0),q(e)),e}u.exports=f
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

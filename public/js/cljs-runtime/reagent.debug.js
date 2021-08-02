goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36218__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36219__i = 0, G__36219__a = new Array(arguments.length -  0);
while (G__36219__i < G__36219__a.length) {G__36219__a[G__36219__i] = arguments[G__36219__i + 0]; ++G__36219__i;}
  args = new cljs.core.IndexedSeq(G__36219__a,0,null);
} 
return G__36218__delegate.call(this,args);};
G__36218.cljs$lang$maxFixedArity = 0;
G__36218.cljs$lang$applyTo = (function (arglist__36220){
var args = cljs.core.seq(arglist__36220);
return G__36218__delegate(args);
});
G__36218.cljs$core$IFn$_invoke$arity$variadic = G__36218__delegate;
return G__36218;
})()
);

(o.error = (function() { 
var G__36221__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36231__i = 0, G__36231__a = new Array(arguments.length -  0);
while (G__36231__i < G__36231__a.length) {G__36231__a[G__36231__i] = arguments[G__36231__i + 0]; ++G__36231__i;}
  args = new cljs.core.IndexedSeq(G__36231__a,0,null);
} 
return G__36221__delegate.call(this,args);};
G__36221.cljs$lang$maxFixedArity = 0;
G__36221.cljs$lang$applyTo = (function (arglist__36232){
var args = cljs.core.seq(arglist__36232);
return G__36221__delegate(args);
});
G__36221.cljs$core$IFn$_invoke$arity$variadic = G__36221__delegate;
return G__36221;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

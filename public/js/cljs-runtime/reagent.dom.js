goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37030 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37031 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37031);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37032 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37033 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37033);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37032);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37030);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37036 = arguments.length;
switch (G__37036) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__37042 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37042,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37042,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__37045_37065 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__37046_37066 = null;
var count__37047_37067 = (0);
var i__37048_37068 = (0);
while(true){
if((i__37048_37068 < count__37047_37067)){
var vec__37055_37070 = chunk__37046_37066.cljs$core$IIndexed$_nth$arity$2(null,i__37048_37068);
var container_37071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37055_37070,(0),null);
var comp_37072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37055_37070,(1),null);
reagent.dom.re_render_component(comp_37072,container_37071);


var G__37073 = seq__37045_37065;
var G__37074 = chunk__37046_37066;
var G__37075 = count__37047_37067;
var G__37076 = (i__37048_37068 + (1));
seq__37045_37065 = G__37073;
chunk__37046_37066 = G__37074;
count__37047_37067 = G__37075;
i__37048_37068 = G__37076;
continue;
} else {
var temp__5753__auto___37077 = cljs.core.seq(seq__37045_37065);
if(temp__5753__auto___37077){
var seq__37045_37078__$1 = temp__5753__auto___37077;
if(cljs.core.chunked_seq_QMARK_(seq__37045_37078__$1)){
var c__4638__auto___37079 = cljs.core.chunk_first(seq__37045_37078__$1);
var G__37080 = cljs.core.chunk_rest(seq__37045_37078__$1);
var G__37081 = c__4638__auto___37079;
var G__37082 = cljs.core.count(c__4638__auto___37079);
var G__37083 = (0);
seq__37045_37065 = G__37080;
chunk__37046_37066 = G__37081;
count__37047_37067 = G__37082;
i__37048_37068 = G__37083;
continue;
} else {
var vec__37058_37084 = cljs.core.first(seq__37045_37078__$1);
var container_37085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37058_37084,(0),null);
var comp_37086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37058_37084,(1),null);
reagent.dom.re_render_component(comp_37086,container_37085);


var G__37087 = cljs.core.next(seq__37045_37078__$1);
var G__37088 = null;
var G__37089 = (0);
var G__37090 = (0);
seq__37045_37065 = G__37087;
chunk__37046_37066 = G__37088;
count__37047_37067 = G__37089;
i__37048_37068 = G__37090;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map

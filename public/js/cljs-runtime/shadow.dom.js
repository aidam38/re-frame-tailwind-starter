goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34663 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34663(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34667 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34667(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33755 = coll;
var G__33756 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33755,G__33756) : shadow.dom.lazy_native_coll_seq.call(null,G__33755,G__33756));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33793 = arguments.length;
switch (G__33793) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33805 = arguments.length;
switch (G__33805) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33815 = arguments.length;
switch (G__33815) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33824 = arguments.length;
switch (G__33824) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33900 = arguments.length;
switch (G__33900) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33903 = arguments.length;
switch (G__33903) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33923){if((e33923 instanceof Object)){
var e = e33923;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33923;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33943 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33944 = null;
var count__33945 = (0);
var i__33946 = (0);
while(true){
if((i__33946 < count__33945)){
var el = chunk__33944.cljs$core$IIndexed$_nth$arity$2(null,i__33946);
var handler_34674__$1 = ((function (seq__33943,chunk__33944,count__33945,i__33946,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33943,chunk__33944,count__33945,i__33946,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34674__$1);


var G__34675 = seq__33943;
var G__34676 = chunk__33944;
var G__34677 = count__33945;
var G__34678 = (i__33946 + (1));
seq__33943 = G__34675;
chunk__33944 = G__34676;
count__33945 = G__34677;
i__33946 = G__34678;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33943);
if(temp__5753__auto__){
var seq__33943__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33943__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33943__$1);
var G__34679 = cljs.core.chunk_rest(seq__33943__$1);
var G__34680 = c__4638__auto__;
var G__34681 = cljs.core.count(c__4638__auto__);
var G__34682 = (0);
seq__33943 = G__34679;
chunk__33944 = G__34680;
count__33945 = G__34681;
i__33946 = G__34682;
continue;
} else {
var el = cljs.core.first(seq__33943__$1);
var handler_34683__$1 = ((function (seq__33943,chunk__33944,count__33945,i__33946,el,seq__33943__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33943,chunk__33944,count__33945,i__33946,el,seq__33943__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34683__$1);


var G__34685 = cljs.core.next(seq__33943__$1);
var G__34686 = null;
var G__34687 = (0);
var G__34688 = (0);
seq__33943 = G__34685;
chunk__33944 = G__34686;
count__33945 = G__34687;
i__33946 = G__34688;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33965 = arguments.length;
switch (G__33965) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34002 = cljs.core.seq(events);
var chunk__34003 = null;
var count__34004 = (0);
var i__34005 = (0);
while(true){
if((i__34005 < count__34004)){
var vec__34028 = chunk__34003.cljs$core$IIndexed$_nth$arity$2(null,i__34005);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34028,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34693 = seq__34002;
var G__34694 = chunk__34003;
var G__34695 = count__34004;
var G__34696 = (i__34005 + (1));
seq__34002 = G__34693;
chunk__34003 = G__34694;
count__34004 = G__34695;
i__34005 = G__34696;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34002);
if(temp__5753__auto__){
var seq__34002__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34002__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34002__$1);
var G__34697 = cljs.core.chunk_rest(seq__34002__$1);
var G__34698 = c__4638__auto__;
var G__34699 = cljs.core.count(c__4638__auto__);
var G__34700 = (0);
seq__34002 = G__34697;
chunk__34003 = G__34698;
count__34004 = G__34699;
i__34005 = G__34700;
continue;
} else {
var vec__34040 = cljs.core.first(seq__34002__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34040,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34701 = cljs.core.next(seq__34002__$1);
var G__34702 = null;
var G__34703 = (0);
var G__34704 = (0);
seq__34002 = G__34701;
chunk__34003 = G__34702;
count__34004 = G__34703;
i__34005 = G__34704;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34046 = cljs.core.seq(styles);
var chunk__34047 = null;
var count__34048 = (0);
var i__34049 = (0);
while(true){
if((i__34049 < count__34048)){
var vec__34078 = chunk__34047.cljs$core$IIndexed$_nth$arity$2(null,i__34049);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34078,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34078,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34705 = seq__34046;
var G__34706 = chunk__34047;
var G__34707 = count__34048;
var G__34708 = (i__34049 + (1));
seq__34046 = G__34705;
chunk__34047 = G__34706;
count__34048 = G__34707;
i__34049 = G__34708;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34046);
if(temp__5753__auto__){
var seq__34046__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34046__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34046__$1);
var G__34709 = cljs.core.chunk_rest(seq__34046__$1);
var G__34710 = c__4638__auto__;
var G__34711 = cljs.core.count(c__4638__auto__);
var G__34712 = (0);
seq__34046 = G__34709;
chunk__34047 = G__34710;
count__34048 = G__34711;
i__34049 = G__34712;
continue;
} else {
var vec__34086 = cljs.core.first(seq__34046__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34086,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34713 = cljs.core.next(seq__34046__$1);
var G__34714 = null;
var G__34715 = (0);
var G__34716 = (0);
seq__34046 = G__34713;
chunk__34047 = G__34714;
count__34048 = G__34715;
i__34049 = G__34716;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34098_34717 = key;
var G__34098_34718__$1 = (((G__34098_34717 instanceof cljs.core.Keyword))?G__34098_34717.fqn:null);
switch (G__34098_34718__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34720 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_34720,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_34720,"aria-");
}
})())){
el.setAttribute(ks_34720,value);
} else {
(el[ks_34720] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34123){
var map__34124 = p__34123;
var map__34124__$1 = cljs.core.__destructure_map(map__34124);
var props = map__34124__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34124__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34125 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34128 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34128,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34128;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34136 = arguments.length;
switch (G__34136) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34144){
var vec__34148 = p__34144;
var seq__34149 = cljs.core.seq(vec__34148);
var first__34150 = cljs.core.first(seq__34149);
var seq__34149__$1 = cljs.core.next(seq__34149);
var nn = first__34150;
var first__34150__$1 = cljs.core.first(seq__34149__$1);
var seq__34149__$2 = cljs.core.next(seq__34149__$1);
var np = first__34150__$1;
var nc = seq__34149__$2;
var node = vec__34148;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34157 = nn;
var G__34158 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34157,G__34158) : create_fn.call(null,G__34157,G__34158));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34159 = nn;
var G__34160 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34159,G__34160) : create_fn.call(null,G__34159,G__34160));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34165 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34165,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34165,(1),null);
var seq__34168_34722 = cljs.core.seq(node_children);
var chunk__34169_34723 = null;
var count__34170_34724 = (0);
var i__34171_34725 = (0);
while(true){
if((i__34171_34725 < count__34170_34724)){
var child_struct_34726 = chunk__34169_34723.cljs$core$IIndexed$_nth$arity$2(null,i__34171_34725);
var children_34727 = shadow.dom.dom_node(child_struct_34726);
if(cljs.core.seq_QMARK_(children_34727)){
var seq__34190_34728 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34727));
var chunk__34192_34729 = null;
var count__34193_34730 = (0);
var i__34194_34731 = (0);
while(true){
if((i__34194_34731 < count__34193_34730)){
var child_34732 = chunk__34192_34729.cljs$core$IIndexed$_nth$arity$2(null,i__34194_34731);
if(cljs.core.truth_(child_34732)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34732);


var G__34733 = seq__34190_34728;
var G__34734 = chunk__34192_34729;
var G__34735 = count__34193_34730;
var G__34736 = (i__34194_34731 + (1));
seq__34190_34728 = G__34733;
chunk__34192_34729 = G__34734;
count__34193_34730 = G__34735;
i__34194_34731 = G__34736;
continue;
} else {
var G__34737 = seq__34190_34728;
var G__34738 = chunk__34192_34729;
var G__34739 = count__34193_34730;
var G__34740 = (i__34194_34731 + (1));
seq__34190_34728 = G__34737;
chunk__34192_34729 = G__34738;
count__34193_34730 = G__34739;
i__34194_34731 = G__34740;
continue;
}
} else {
var temp__5753__auto___34741 = cljs.core.seq(seq__34190_34728);
if(temp__5753__auto___34741){
var seq__34190_34742__$1 = temp__5753__auto___34741;
if(cljs.core.chunked_seq_QMARK_(seq__34190_34742__$1)){
var c__4638__auto___34743 = cljs.core.chunk_first(seq__34190_34742__$1);
var G__34744 = cljs.core.chunk_rest(seq__34190_34742__$1);
var G__34745 = c__4638__auto___34743;
var G__34746 = cljs.core.count(c__4638__auto___34743);
var G__34747 = (0);
seq__34190_34728 = G__34744;
chunk__34192_34729 = G__34745;
count__34193_34730 = G__34746;
i__34194_34731 = G__34747;
continue;
} else {
var child_34748 = cljs.core.first(seq__34190_34742__$1);
if(cljs.core.truth_(child_34748)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34748);


var G__34749 = cljs.core.next(seq__34190_34742__$1);
var G__34750 = null;
var G__34751 = (0);
var G__34752 = (0);
seq__34190_34728 = G__34749;
chunk__34192_34729 = G__34750;
count__34193_34730 = G__34751;
i__34194_34731 = G__34752;
continue;
} else {
var G__34753 = cljs.core.next(seq__34190_34742__$1);
var G__34754 = null;
var G__34755 = (0);
var G__34756 = (0);
seq__34190_34728 = G__34753;
chunk__34192_34729 = G__34754;
count__34193_34730 = G__34755;
i__34194_34731 = G__34756;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34727);
}


var G__34758 = seq__34168_34722;
var G__34759 = chunk__34169_34723;
var G__34760 = count__34170_34724;
var G__34761 = (i__34171_34725 + (1));
seq__34168_34722 = G__34758;
chunk__34169_34723 = G__34759;
count__34170_34724 = G__34760;
i__34171_34725 = G__34761;
continue;
} else {
var temp__5753__auto___34762 = cljs.core.seq(seq__34168_34722);
if(temp__5753__auto___34762){
var seq__34168_34763__$1 = temp__5753__auto___34762;
if(cljs.core.chunked_seq_QMARK_(seq__34168_34763__$1)){
var c__4638__auto___34764 = cljs.core.chunk_first(seq__34168_34763__$1);
var G__34766 = cljs.core.chunk_rest(seq__34168_34763__$1);
var G__34767 = c__4638__auto___34764;
var G__34768 = cljs.core.count(c__4638__auto___34764);
var G__34769 = (0);
seq__34168_34722 = G__34766;
chunk__34169_34723 = G__34767;
count__34170_34724 = G__34768;
i__34171_34725 = G__34769;
continue;
} else {
var child_struct_34770 = cljs.core.first(seq__34168_34763__$1);
var children_34771 = shadow.dom.dom_node(child_struct_34770);
if(cljs.core.seq_QMARK_(children_34771)){
var seq__34200_34772 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34771));
var chunk__34202_34773 = null;
var count__34203_34774 = (0);
var i__34204_34775 = (0);
while(true){
if((i__34204_34775 < count__34203_34774)){
var child_34779 = chunk__34202_34773.cljs$core$IIndexed$_nth$arity$2(null,i__34204_34775);
if(cljs.core.truth_(child_34779)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34779);


var G__34780 = seq__34200_34772;
var G__34781 = chunk__34202_34773;
var G__34782 = count__34203_34774;
var G__34783 = (i__34204_34775 + (1));
seq__34200_34772 = G__34780;
chunk__34202_34773 = G__34781;
count__34203_34774 = G__34782;
i__34204_34775 = G__34783;
continue;
} else {
var G__34784 = seq__34200_34772;
var G__34785 = chunk__34202_34773;
var G__34786 = count__34203_34774;
var G__34787 = (i__34204_34775 + (1));
seq__34200_34772 = G__34784;
chunk__34202_34773 = G__34785;
count__34203_34774 = G__34786;
i__34204_34775 = G__34787;
continue;
}
} else {
var temp__5753__auto___34788__$1 = cljs.core.seq(seq__34200_34772);
if(temp__5753__auto___34788__$1){
var seq__34200_34789__$1 = temp__5753__auto___34788__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34200_34789__$1)){
var c__4638__auto___34790 = cljs.core.chunk_first(seq__34200_34789__$1);
var G__34791 = cljs.core.chunk_rest(seq__34200_34789__$1);
var G__34792 = c__4638__auto___34790;
var G__34793 = cljs.core.count(c__4638__auto___34790);
var G__34794 = (0);
seq__34200_34772 = G__34791;
chunk__34202_34773 = G__34792;
count__34203_34774 = G__34793;
i__34204_34775 = G__34794;
continue;
} else {
var child_34795 = cljs.core.first(seq__34200_34789__$1);
if(cljs.core.truth_(child_34795)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34795);


var G__34796 = cljs.core.next(seq__34200_34789__$1);
var G__34797 = null;
var G__34798 = (0);
var G__34799 = (0);
seq__34200_34772 = G__34796;
chunk__34202_34773 = G__34797;
count__34203_34774 = G__34798;
i__34204_34775 = G__34799;
continue;
} else {
var G__34800 = cljs.core.next(seq__34200_34789__$1);
var G__34801 = null;
var G__34802 = (0);
var G__34803 = (0);
seq__34200_34772 = G__34800;
chunk__34202_34773 = G__34801;
count__34203_34774 = G__34802;
i__34204_34775 = G__34803;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34771);
}


var G__34804 = cljs.core.next(seq__34168_34763__$1);
var G__34805 = null;
var G__34806 = (0);
var G__34807 = (0);
seq__34168_34722 = G__34804;
chunk__34169_34723 = G__34805;
count__34170_34724 = G__34806;
i__34171_34725 = G__34807;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34243 = cljs.core.seq(node);
var chunk__34244 = null;
var count__34245 = (0);
var i__34246 = (0);
while(true){
if((i__34246 < count__34245)){
var n = chunk__34244.cljs$core$IIndexed$_nth$arity$2(null,i__34246);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34808 = seq__34243;
var G__34809 = chunk__34244;
var G__34810 = count__34245;
var G__34811 = (i__34246 + (1));
seq__34243 = G__34808;
chunk__34244 = G__34809;
count__34245 = G__34810;
i__34246 = G__34811;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34243);
if(temp__5753__auto__){
var seq__34243__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34243__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34243__$1);
var G__34812 = cljs.core.chunk_rest(seq__34243__$1);
var G__34813 = c__4638__auto__;
var G__34814 = cljs.core.count(c__4638__auto__);
var G__34815 = (0);
seq__34243 = G__34812;
chunk__34244 = G__34813;
count__34245 = G__34814;
i__34246 = G__34815;
continue;
} else {
var n = cljs.core.first(seq__34243__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34816 = cljs.core.next(seq__34243__$1);
var G__34817 = null;
var G__34818 = (0);
var G__34819 = (0);
seq__34243 = G__34816;
chunk__34244 = G__34817;
count__34245 = G__34818;
i__34246 = G__34819;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34266 = arguments.length;
switch (G__34266) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34283 = arguments.length;
switch (G__34283) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34312 = arguments.length;
switch (G__34312) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34824 = arguments.length;
var i__4819__auto___34825 = (0);
while(true){
if((i__4819__auto___34825 < len__4818__auto___34824)){
args__4824__auto__.push((arguments[i__4819__auto___34825]));

var G__34826 = (i__4819__auto___34825 + (1));
i__4819__auto___34825 = G__34826;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34340_34827 = cljs.core.seq(nodes);
var chunk__34342_34828 = null;
var count__34343_34829 = (0);
var i__34344_34830 = (0);
while(true){
if((i__34344_34830 < count__34343_34829)){
var node_34831 = chunk__34342_34828.cljs$core$IIndexed$_nth$arity$2(null,i__34344_34830);
fragment.appendChild(shadow.dom._to_dom(node_34831));


var G__34833 = seq__34340_34827;
var G__34834 = chunk__34342_34828;
var G__34835 = count__34343_34829;
var G__34836 = (i__34344_34830 + (1));
seq__34340_34827 = G__34833;
chunk__34342_34828 = G__34834;
count__34343_34829 = G__34835;
i__34344_34830 = G__34836;
continue;
} else {
var temp__5753__auto___34837 = cljs.core.seq(seq__34340_34827);
if(temp__5753__auto___34837){
var seq__34340_34838__$1 = temp__5753__auto___34837;
if(cljs.core.chunked_seq_QMARK_(seq__34340_34838__$1)){
var c__4638__auto___34839 = cljs.core.chunk_first(seq__34340_34838__$1);
var G__34840 = cljs.core.chunk_rest(seq__34340_34838__$1);
var G__34841 = c__4638__auto___34839;
var G__34842 = cljs.core.count(c__4638__auto___34839);
var G__34843 = (0);
seq__34340_34827 = G__34840;
chunk__34342_34828 = G__34841;
count__34343_34829 = G__34842;
i__34344_34830 = G__34843;
continue;
} else {
var node_34844 = cljs.core.first(seq__34340_34838__$1);
fragment.appendChild(shadow.dom._to_dom(node_34844));


var G__34845 = cljs.core.next(seq__34340_34838__$1);
var G__34846 = null;
var G__34847 = (0);
var G__34848 = (0);
seq__34340_34827 = G__34845;
chunk__34342_34828 = G__34846;
count__34343_34829 = G__34847;
i__34344_34830 = G__34848;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34336){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34336));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34353_34850 = cljs.core.seq(scripts);
var chunk__34354_34851 = null;
var count__34355_34852 = (0);
var i__34356_34853 = (0);
while(true){
if((i__34356_34853 < count__34355_34852)){
var vec__34365_34854 = chunk__34354_34851.cljs$core$IIndexed$_nth$arity$2(null,i__34356_34853);
var script_tag_34855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34365_34854,(0),null);
var script_body_34856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34365_34854,(1),null);
eval(script_body_34856);


var G__34857 = seq__34353_34850;
var G__34858 = chunk__34354_34851;
var G__34859 = count__34355_34852;
var G__34860 = (i__34356_34853 + (1));
seq__34353_34850 = G__34857;
chunk__34354_34851 = G__34858;
count__34355_34852 = G__34859;
i__34356_34853 = G__34860;
continue;
} else {
var temp__5753__auto___34861 = cljs.core.seq(seq__34353_34850);
if(temp__5753__auto___34861){
var seq__34353_34862__$1 = temp__5753__auto___34861;
if(cljs.core.chunked_seq_QMARK_(seq__34353_34862__$1)){
var c__4638__auto___34863 = cljs.core.chunk_first(seq__34353_34862__$1);
var G__34864 = cljs.core.chunk_rest(seq__34353_34862__$1);
var G__34865 = c__4638__auto___34863;
var G__34866 = cljs.core.count(c__4638__auto___34863);
var G__34867 = (0);
seq__34353_34850 = G__34864;
chunk__34354_34851 = G__34865;
count__34355_34852 = G__34866;
i__34356_34853 = G__34867;
continue;
} else {
var vec__34378_34868 = cljs.core.first(seq__34353_34862__$1);
var script_tag_34869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34378_34868,(0),null);
var script_body_34870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34378_34868,(1),null);
eval(script_body_34870);


var G__34871 = cljs.core.next(seq__34353_34862__$1);
var G__34872 = null;
var G__34873 = (0);
var G__34874 = (0);
seq__34353_34850 = G__34871;
chunk__34354_34851 = G__34872;
count__34355_34852 = G__34873;
i__34356_34853 = G__34874;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34381){
var vec__34382 = p__34381;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34382,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34382,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34388 = arguments.length;
switch (G__34388) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34391 = cljs.core.seq(style_keys);
var chunk__34392 = null;
var count__34393 = (0);
var i__34394 = (0);
while(true){
if((i__34394 < count__34393)){
var it = chunk__34392.cljs$core$IIndexed$_nth$arity$2(null,i__34394);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34885 = seq__34391;
var G__34886 = chunk__34392;
var G__34887 = count__34393;
var G__34888 = (i__34394 + (1));
seq__34391 = G__34885;
chunk__34392 = G__34886;
count__34393 = G__34887;
i__34394 = G__34888;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34391);
if(temp__5753__auto__){
var seq__34391__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34391__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34391__$1);
var G__34889 = cljs.core.chunk_rest(seq__34391__$1);
var G__34890 = c__4638__auto__;
var G__34891 = cljs.core.count(c__4638__auto__);
var G__34892 = (0);
seq__34391 = G__34889;
chunk__34392 = G__34890;
count__34393 = G__34891;
i__34394 = G__34892;
continue;
} else {
var it = cljs.core.first(seq__34391__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34893 = cljs.core.next(seq__34391__$1);
var G__34894 = null;
var G__34895 = (0);
var G__34896 = (0);
seq__34391 = G__34893;
chunk__34392 = G__34894;
count__34393 = G__34895;
i__34394 = G__34896;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k34397,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__34411 = k34397;
var G__34411__$1 = (((G__34411 instanceof cljs.core.Keyword))?G__34411.fqn:null);
switch (G__34411__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34397,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__34412){
var vec__34413 = p__34412;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34413,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34413,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34396){
var self__ = this;
var G__34396__$1 = this;
return (new cljs.core.RecordIter((0),G__34396__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34398,other34399){
var self__ = this;
var this34398__$1 = this;
return (((!((other34399 == null)))) && ((((this34398__$1.constructor === other34399.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34398__$1.x,other34399.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34398__$1.y,other34399.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34398__$1.__extmap,other34399.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k34397){
var self__ = this;
var this__4468__auto____$1 = this;
var G__34420 = k34397;
var G__34420__$1 = (((G__34420 instanceof cljs.core.Keyword))?G__34420.fqn:null);
switch (G__34420__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34397);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__34396){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__34421 = cljs.core.keyword_identical_QMARK_;
var expr__34422 = k__4470__auto__;
if(cljs.core.truth_((pred__34421.cljs$core$IFn$_invoke$arity$2 ? pred__34421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34422) : pred__34421.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34422)))){
return (new shadow.dom.Coordinate(G__34396,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34421.cljs$core$IFn$_invoke$arity$2 ? pred__34421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34422) : pred__34421.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34422)))){
return (new shadow.dom.Coordinate(self__.x,G__34396,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__34396),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__34396){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34396,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34409){
var extmap__4501__auto__ = (function (){var G__34432 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34409,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34409)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34432);
} else {
return G__34432;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34409),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34409),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k34454,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__34461 = k34454;
var G__34461__$1 = (((G__34461 instanceof cljs.core.Keyword))?G__34461.fqn:null);
switch (G__34461__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34454,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__34467){
var vec__34468 = p__34467;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34453){
var self__ = this;
var G__34453__$1 = this;
return (new cljs.core.RecordIter((0),G__34453__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34455,other34456){
var self__ = this;
var this34455__$1 = this;
return (((!((other34456 == null)))) && ((((this34455__$1.constructor === other34456.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34455__$1.w,other34456.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34455__$1.h,other34456.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34455__$1.__extmap,other34456.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k34454){
var self__ = this;
var this__4468__auto____$1 = this;
var G__34478 = k34454;
var G__34478__$1 = (((G__34478 instanceof cljs.core.Keyword))?G__34478.fqn:null);
switch (G__34478__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34454);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__34453){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__34485 = cljs.core.keyword_identical_QMARK_;
var expr__34486 = k__4470__auto__;
if(cljs.core.truth_((pred__34485.cljs$core$IFn$_invoke$arity$2 ? pred__34485.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34486) : pred__34485.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34486)))){
return (new shadow.dom.Size(G__34453,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34485.cljs$core$IFn$_invoke$arity$2 ? pred__34485.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34486) : pred__34485.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34486)))){
return (new shadow.dom.Size(self__.w,G__34453,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__34453),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__34453){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34453,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34457){
var extmap__4501__auto__ = (function (){var G__34493 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34457,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34457)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34493);
} else {
return G__34493;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34457),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34457),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__34919 = (i + (1));
var G__34920 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34919;
ret = G__34920;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34549){
var vec__34550 = p__34549;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34550,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34554 = arguments.length;
switch (G__34554) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34924 = ps;
var G__34925 = (i + (1));
el__$1 = G__34924;
i = G__34925;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34572 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34572,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34572,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34572,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34575_34930 = cljs.core.seq(props);
var chunk__34576_34931 = null;
var count__34577_34932 = (0);
var i__34578_34933 = (0);
while(true){
if((i__34578_34933 < count__34577_34932)){
var vec__34585_34938 = chunk__34576_34931.cljs$core$IIndexed$_nth$arity$2(null,i__34578_34933);
var k_34939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585_34938,(0),null);
var v_34940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585_34938,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34939);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34939),v_34940);


var G__34954 = seq__34575_34930;
var G__34955 = chunk__34576_34931;
var G__34956 = count__34577_34932;
var G__34957 = (i__34578_34933 + (1));
seq__34575_34930 = G__34954;
chunk__34576_34931 = G__34955;
count__34577_34932 = G__34956;
i__34578_34933 = G__34957;
continue;
} else {
var temp__5753__auto___34958 = cljs.core.seq(seq__34575_34930);
if(temp__5753__auto___34958){
var seq__34575_34959__$1 = temp__5753__auto___34958;
if(cljs.core.chunked_seq_QMARK_(seq__34575_34959__$1)){
var c__4638__auto___34960 = cljs.core.chunk_first(seq__34575_34959__$1);
var G__34961 = cljs.core.chunk_rest(seq__34575_34959__$1);
var G__34962 = c__4638__auto___34960;
var G__34963 = cljs.core.count(c__4638__auto___34960);
var G__34964 = (0);
seq__34575_34930 = G__34961;
chunk__34576_34931 = G__34962;
count__34577_34932 = G__34963;
i__34578_34933 = G__34964;
continue;
} else {
var vec__34588_34966 = cljs.core.first(seq__34575_34959__$1);
var k_34967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34588_34966,(0),null);
var v_34968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34588_34966,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34967);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34967),v_34968);


var G__34971 = cljs.core.next(seq__34575_34959__$1);
var G__34972 = null;
var G__34973 = (0);
var G__34974 = (0);
seq__34575_34930 = G__34971;
chunk__34576_34931 = G__34972;
count__34577_34932 = G__34973;
i__34578_34933 = G__34974;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34593 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(1),null);
var seq__34596_34975 = cljs.core.seq(node_children);
var chunk__34598_34976 = null;
var count__34599_34977 = (0);
var i__34600_34978 = (0);
while(true){
if((i__34600_34978 < count__34599_34977)){
var child_struct_34979 = chunk__34598_34976.cljs$core$IIndexed$_nth$arity$2(null,i__34600_34978);
if((!((child_struct_34979 == null)))){
if(typeof child_struct_34979 === 'string'){
var text_34980 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34980),child_struct_34979].join(''));
} else {
var children_34981 = shadow.dom.svg_node(child_struct_34979);
if(cljs.core.seq_QMARK_(children_34981)){
var seq__34621_34982 = cljs.core.seq(children_34981);
var chunk__34623_34983 = null;
var count__34624_34984 = (0);
var i__34625_34985 = (0);
while(true){
if((i__34625_34985 < count__34624_34984)){
var child_34986 = chunk__34623_34983.cljs$core$IIndexed$_nth$arity$2(null,i__34625_34985);
if(cljs.core.truth_(child_34986)){
node.appendChild(child_34986);


var G__34987 = seq__34621_34982;
var G__34988 = chunk__34623_34983;
var G__34989 = count__34624_34984;
var G__34990 = (i__34625_34985 + (1));
seq__34621_34982 = G__34987;
chunk__34623_34983 = G__34988;
count__34624_34984 = G__34989;
i__34625_34985 = G__34990;
continue;
} else {
var G__34994 = seq__34621_34982;
var G__34995 = chunk__34623_34983;
var G__34996 = count__34624_34984;
var G__34997 = (i__34625_34985 + (1));
seq__34621_34982 = G__34994;
chunk__34623_34983 = G__34995;
count__34624_34984 = G__34996;
i__34625_34985 = G__34997;
continue;
}
} else {
var temp__5753__auto___34998 = cljs.core.seq(seq__34621_34982);
if(temp__5753__auto___34998){
var seq__34621_34999__$1 = temp__5753__auto___34998;
if(cljs.core.chunked_seq_QMARK_(seq__34621_34999__$1)){
var c__4638__auto___35000 = cljs.core.chunk_first(seq__34621_34999__$1);
var G__35001 = cljs.core.chunk_rest(seq__34621_34999__$1);
var G__35002 = c__4638__auto___35000;
var G__35003 = cljs.core.count(c__4638__auto___35000);
var G__35004 = (0);
seq__34621_34982 = G__35001;
chunk__34623_34983 = G__35002;
count__34624_34984 = G__35003;
i__34625_34985 = G__35004;
continue;
} else {
var child_35005 = cljs.core.first(seq__34621_34999__$1);
if(cljs.core.truth_(child_35005)){
node.appendChild(child_35005);


var G__35006 = cljs.core.next(seq__34621_34999__$1);
var G__35007 = null;
var G__35008 = (0);
var G__35009 = (0);
seq__34621_34982 = G__35006;
chunk__34623_34983 = G__35007;
count__34624_34984 = G__35008;
i__34625_34985 = G__35009;
continue;
} else {
var G__35010 = cljs.core.next(seq__34621_34999__$1);
var G__35011 = null;
var G__35012 = (0);
var G__35013 = (0);
seq__34621_34982 = G__35010;
chunk__34623_34983 = G__35011;
count__34624_34984 = G__35012;
i__34625_34985 = G__35013;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34981);
}
}


var G__35014 = seq__34596_34975;
var G__35015 = chunk__34598_34976;
var G__35016 = count__34599_34977;
var G__35017 = (i__34600_34978 + (1));
seq__34596_34975 = G__35014;
chunk__34598_34976 = G__35015;
count__34599_34977 = G__35016;
i__34600_34978 = G__35017;
continue;
} else {
var G__35018 = seq__34596_34975;
var G__35019 = chunk__34598_34976;
var G__35020 = count__34599_34977;
var G__35021 = (i__34600_34978 + (1));
seq__34596_34975 = G__35018;
chunk__34598_34976 = G__35019;
count__34599_34977 = G__35020;
i__34600_34978 = G__35021;
continue;
}
} else {
var temp__5753__auto___35022 = cljs.core.seq(seq__34596_34975);
if(temp__5753__auto___35022){
var seq__34596_35023__$1 = temp__5753__auto___35022;
if(cljs.core.chunked_seq_QMARK_(seq__34596_35023__$1)){
var c__4638__auto___35025 = cljs.core.chunk_first(seq__34596_35023__$1);
var G__35026 = cljs.core.chunk_rest(seq__34596_35023__$1);
var G__35027 = c__4638__auto___35025;
var G__35028 = cljs.core.count(c__4638__auto___35025);
var G__35029 = (0);
seq__34596_34975 = G__35026;
chunk__34598_34976 = G__35027;
count__34599_34977 = G__35028;
i__34600_34978 = G__35029;
continue;
} else {
var child_struct_35030 = cljs.core.first(seq__34596_35023__$1);
if((!((child_struct_35030 == null)))){
if(typeof child_struct_35030 === 'string'){
var text_35032 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35032),child_struct_35030].join(''));
} else {
var children_35033 = shadow.dom.svg_node(child_struct_35030);
if(cljs.core.seq_QMARK_(children_35033)){
var seq__34635_35034 = cljs.core.seq(children_35033);
var chunk__34637_35035 = null;
var count__34638_35036 = (0);
var i__34639_35037 = (0);
while(true){
if((i__34639_35037 < count__34638_35036)){
var child_35038 = chunk__34637_35035.cljs$core$IIndexed$_nth$arity$2(null,i__34639_35037);
if(cljs.core.truth_(child_35038)){
node.appendChild(child_35038);


var G__35039 = seq__34635_35034;
var G__35040 = chunk__34637_35035;
var G__35041 = count__34638_35036;
var G__35042 = (i__34639_35037 + (1));
seq__34635_35034 = G__35039;
chunk__34637_35035 = G__35040;
count__34638_35036 = G__35041;
i__34639_35037 = G__35042;
continue;
} else {
var G__35043 = seq__34635_35034;
var G__35044 = chunk__34637_35035;
var G__35045 = count__34638_35036;
var G__35046 = (i__34639_35037 + (1));
seq__34635_35034 = G__35043;
chunk__34637_35035 = G__35044;
count__34638_35036 = G__35045;
i__34639_35037 = G__35046;
continue;
}
} else {
var temp__5753__auto___35047__$1 = cljs.core.seq(seq__34635_35034);
if(temp__5753__auto___35047__$1){
var seq__34635_35048__$1 = temp__5753__auto___35047__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34635_35048__$1)){
var c__4638__auto___35049 = cljs.core.chunk_first(seq__34635_35048__$1);
var G__35050 = cljs.core.chunk_rest(seq__34635_35048__$1);
var G__35051 = c__4638__auto___35049;
var G__35052 = cljs.core.count(c__4638__auto___35049);
var G__35053 = (0);
seq__34635_35034 = G__35050;
chunk__34637_35035 = G__35051;
count__34638_35036 = G__35052;
i__34639_35037 = G__35053;
continue;
} else {
var child_35054 = cljs.core.first(seq__34635_35048__$1);
if(cljs.core.truth_(child_35054)){
node.appendChild(child_35054);


var G__35055 = cljs.core.next(seq__34635_35048__$1);
var G__35056 = null;
var G__35057 = (0);
var G__35058 = (0);
seq__34635_35034 = G__35055;
chunk__34637_35035 = G__35056;
count__34638_35036 = G__35057;
i__34639_35037 = G__35058;
continue;
} else {
var G__35059 = cljs.core.next(seq__34635_35048__$1);
var G__35060 = null;
var G__35061 = (0);
var G__35062 = (0);
seq__34635_35034 = G__35059;
chunk__34637_35035 = G__35060;
count__34638_35036 = G__35061;
i__34639_35037 = G__35062;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35033);
}
}


var G__35063 = cljs.core.next(seq__34596_35023__$1);
var G__35064 = null;
var G__35065 = (0);
var G__35066 = (0);
seq__34596_34975 = G__35063;
chunk__34598_34976 = G__35064;
count__34599_34977 = G__35065;
i__34600_34978 = G__35066;
continue;
} else {
var G__35067 = cljs.core.next(seq__34596_35023__$1);
var G__35068 = null;
var G__35069 = (0);
var G__35070 = (0);
seq__34596_34975 = G__35067;
chunk__34598_34976 = G__35068;
count__34599_34977 = G__35069;
i__34600_34978 = G__35070;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35080 = arguments.length;
var i__4819__auto___35081 = (0);
while(true){
if((i__4819__auto___35081 < len__4818__auto___35080)){
args__4824__auto__.push((arguments[i__4819__auto___35081]));

var G__35089 = (i__4819__auto___35081 + (1));
i__4819__auto___35081 = G__35089;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34643){
var G__34644 = cljs.core.first(seq34643);
var seq34643__$1 = cljs.core.next(seq34643);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34644,seq34643__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34646 = arguments.length;
switch (G__34646) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__30865__auto___35121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_34651){
var state_val_34652 = (state_34651[(1)]);
if((state_val_34652 === (1))){
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34651__$1,(2),once_or_cleanup);
} else {
if((state_val_34652 === (2))){
var inst_34648 = (state_34651[(2)]);
var inst_34649 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34651__$1 = (function (){var statearr_34653 = state_34651;
(statearr_34653[(7)] = inst_34648);

return statearr_34653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34651__$1,inst_34649);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30501__auto__ = null;
var shadow$dom$state_machine__30501__auto____0 = (function (){
var statearr_34654 = [null,null,null,null,null,null,null,null];
(statearr_34654[(0)] = shadow$dom$state_machine__30501__auto__);

(statearr_34654[(1)] = (1));

return statearr_34654;
});
var shadow$dom$state_machine__30501__auto____1 = (function (state_34651){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_34651);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e34655){var ex__30504__auto__ = e34655;
var statearr_34656_35135 = state_34651;
(statearr_34656_35135[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_34651[(4)]))){
var statearr_34657_35141 = state_34651;
(statearr_34657_35141[(1)] = cljs.core.first((state_34651[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_34651;
state_34651 = G__35145;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
shadow$dom$state_machine__30501__auto__ = function(state_34651){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30501__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30501__auto____1.call(this,state_34651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30501__auto____0;
shadow$dom$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30501__auto____1;
return shadow$dom$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_34658 = f__30866__auto__();
(statearr_34658[(6)] = c__30865__auto___35121);

return statearr_34658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

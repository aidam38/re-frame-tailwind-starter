goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37673){
var map__37674 = p__37673;
var map__37674__$1 = cljs.core.__destructure_map(map__37674);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37674__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37674__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37674__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37674__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__37677_37706 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37678_37707 = null;
var count__37679_37708 = (0);
var i__37680_37709 = (0);
while(true){
if((i__37680_37709 < count__37679_37708)){
var vec__37692_37710 = chunk__37678_37707.cljs$core$IIndexed$_nth$arity$2(null,i__37680_37709);
var k_37711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37692_37710,(0),null);
var cb_37712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37692_37710,(1),null);
try{var G__37696_37713 = cljs.core.deref(re_frame.trace.traces);
(cb_37712.cljs$core$IFn$_invoke$arity$1 ? cb_37712.cljs$core$IFn$_invoke$arity$1(G__37696_37713) : cb_37712.call(null,G__37696_37713));
}catch (e37695){var e_37714 = e37695;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37711,"while storing",cljs.core.deref(re_frame.trace.traces),e_37714], 0));
}

var G__37715 = seq__37677_37706;
var G__37716 = chunk__37678_37707;
var G__37717 = count__37679_37708;
var G__37718 = (i__37680_37709 + (1));
seq__37677_37706 = G__37715;
chunk__37678_37707 = G__37716;
count__37679_37708 = G__37717;
i__37680_37709 = G__37718;
continue;
} else {
var temp__5753__auto___37719 = cljs.core.seq(seq__37677_37706);
if(temp__5753__auto___37719){
var seq__37677_37720__$1 = temp__5753__auto___37719;
if(cljs.core.chunked_seq_QMARK_(seq__37677_37720__$1)){
var c__4638__auto___37721 = cljs.core.chunk_first(seq__37677_37720__$1);
var G__37722 = cljs.core.chunk_rest(seq__37677_37720__$1);
var G__37723 = c__4638__auto___37721;
var G__37724 = cljs.core.count(c__4638__auto___37721);
var G__37725 = (0);
seq__37677_37706 = G__37722;
chunk__37678_37707 = G__37723;
count__37679_37708 = G__37724;
i__37680_37709 = G__37725;
continue;
} else {
var vec__37697_37726 = cljs.core.first(seq__37677_37720__$1);
var k_37727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37697_37726,(0),null);
var cb_37728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37697_37726,(1),null);
try{var G__37701_37729 = cljs.core.deref(re_frame.trace.traces);
(cb_37728.cljs$core$IFn$_invoke$arity$1 ? cb_37728.cljs$core$IFn$_invoke$arity$1(G__37701_37729) : cb_37728.call(null,G__37701_37729));
}catch (e37700){var e_37730 = e37700;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37727,"while storing",cljs.core.deref(re_frame.trace.traces),e_37730], 0));
}

var G__37731 = cljs.core.next(seq__37677_37720__$1);
var G__37732 = null;
var G__37733 = (0);
var G__37734 = (0);
seq__37677_37706 = G__37731;
chunk__37678_37707 = G__37732;
count__37679_37708 = G__37733;
i__37680_37709 = G__37734;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

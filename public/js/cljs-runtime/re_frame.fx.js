goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__37982 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37983 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37983);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___38060 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___38060)){
var new_db_38061 = temp__5753__auto___38060;
var fexpr__37996_38062 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37996_38062.cljs$core$IFn$_invoke$arity$1 ? fexpr__37996_38062.cljs$core$IFn$_invoke$arity$1(new_db_38061) : fexpr__37996_38062.call(null,new_db_38061));
} else {
}

var seq__37997 = cljs.core.seq(effects_without_db);
var chunk__37998 = null;
var count__37999 = (0);
var i__38000 = (0);
while(true){
if((i__38000 < count__37999)){
var vec__38007 = chunk__37998.cljs$core$IIndexed$_nth$arity$2(null,i__38000);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38007,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38007,(1),null);
var temp__5751__auto___38063 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38063)){
var effect_fn_38064 = temp__5751__auto___38063;
(effect_fn_38064.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38064.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38064.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38065 = seq__37997;
var G__38066 = chunk__37998;
var G__38067 = count__37999;
var G__38068 = (i__38000 + (1));
seq__37997 = G__38065;
chunk__37998 = G__38066;
count__37999 = G__38067;
i__38000 = G__38068;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37997);
if(temp__5753__auto__){
var seq__37997__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37997__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37997__$1);
var G__38069 = cljs.core.chunk_rest(seq__37997__$1);
var G__38070 = c__4638__auto__;
var G__38071 = cljs.core.count(c__4638__auto__);
var G__38072 = (0);
seq__37997 = G__38069;
chunk__37998 = G__38070;
count__37999 = G__38071;
i__38000 = G__38072;
continue;
} else {
var vec__38010 = cljs.core.first(seq__37997__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(1),null);
var temp__5751__auto___38073 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38073)){
var effect_fn_38074 = temp__5751__auto___38073;
(effect_fn_38074.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38074.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38074.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38075 = cljs.core.next(seq__37997__$1);
var G__38076 = null;
var G__38077 = (0);
var G__38078 = (0);
seq__37997 = G__38075;
chunk__37998 = G__38076;
count__37999 = G__38077;
i__38000 = G__38078;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37651__auto___38079 = re_frame.interop.now();
var duration__37652__auto___38080 = (end__37651__auto___38079 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37652__auto___38080,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37651__auto___38079);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37982);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___38081 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___38081)){
var new_db_38082 = temp__5753__auto___38081;
var fexpr__38013_38083 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38013_38083.cljs$core$IFn$_invoke$arity$1 ? fexpr__38013_38083.cljs$core$IFn$_invoke$arity$1(new_db_38082) : fexpr__38013_38083.call(null,new_db_38082));
} else {
}

var seq__38014 = cljs.core.seq(effects_without_db);
var chunk__38015 = null;
var count__38016 = (0);
var i__38017 = (0);
while(true){
if((i__38017 < count__38016)){
var vec__38024 = chunk__38015.cljs$core$IIndexed$_nth$arity$2(null,i__38017);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38024,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38024,(1),null);
var temp__5751__auto___38084 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38084)){
var effect_fn_38085 = temp__5751__auto___38084;
(effect_fn_38085.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38085.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38085.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38086 = seq__38014;
var G__38087 = chunk__38015;
var G__38088 = count__38016;
var G__38089 = (i__38017 + (1));
seq__38014 = G__38086;
chunk__38015 = G__38087;
count__38016 = G__38088;
i__38017 = G__38089;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38014);
if(temp__5753__auto__){
var seq__38014__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38014__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38014__$1);
var G__38090 = cljs.core.chunk_rest(seq__38014__$1);
var G__38091 = c__4638__auto__;
var G__38092 = cljs.core.count(c__4638__auto__);
var G__38093 = (0);
seq__38014 = G__38090;
chunk__38015 = G__38091;
count__38016 = G__38092;
i__38017 = G__38093;
continue;
} else {
var vec__38027 = cljs.core.first(seq__38014__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38027,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38027,(1),null);
var temp__5751__auto___38094 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38094)){
var effect_fn_38095 = temp__5751__auto___38094;
(effect_fn_38095.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38095.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38095.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38096 = cljs.core.next(seq__38014__$1);
var G__38097 = null;
var G__38098 = (0);
var G__38099 = (0);
seq__38014 = G__38096;
chunk__38015 = G__38097;
count__38016 = G__38098;
i__38017 = G__38099;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38030){
var map__38031 = p__38030;
var map__38031__$1 = cljs.core.__destructure_map(map__38031);
var effect = map__38031__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38031__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38031__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__38032 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38033 = null;
var count__38034 = (0);
var i__38035 = (0);
while(true){
if((i__38035 < count__38034)){
var effect = chunk__38033.cljs$core$IIndexed$_nth$arity$2(null,i__38035);
re_frame.fx.dispatch_later(effect);


var G__38100 = seq__38032;
var G__38101 = chunk__38033;
var G__38102 = count__38034;
var G__38103 = (i__38035 + (1));
seq__38032 = G__38100;
chunk__38033 = G__38101;
count__38034 = G__38102;
i__38035 = G__38103;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38032);
if(temp__5753__auto__){
var seq__38032__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38032__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38032__$1);
var G__38104 = cljs.core.chunk_rest(seq__38032__$1);
var G__38105 = c__4638__auto__;
var G__38106 = cljs.core.count(c__4638__auto__);
var G__38107 = (0);
seq__38032 = G__38104;
chunk__38033 = G__38105;
count__38034 = G__38106;
i__38035 = G__38107;
continue;
} else {
var effect = cljs.core.first(seq__38032__$1);
re_frame.fx.dispatch_later(effect);


var G__38108 = cljs.core.next(seq__38032__$1);
var G__38109 = null;
var G__38110 = (0);
var G__38111 = (0);
seq__38032 = G__38108;
chunk__38033 = G__38109;
count__38034 = G__38110;
i__38035 = G__38111;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38036 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38037 = null;
var count__38038 = (0);
var i__38039 = (0);
while(true){
if((i__38039 < count__38038)){
var vec__38046 = chunk__38037.cljs$core$IIndexed$_nth$arity$2(null,i__38039);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38046,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38046,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___38112 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38112)){
var effect_fn_38113 = temp__5751__auto___38112;
(effect_fn_38113.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38113.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38113.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38114 = seq__38036;
var G__38115 = chunk__38037;
var G__38116 = count__38038;
var G__38117 = (i__38039 + (1));
seq__38036 = G__38114;
chunk__38037 = G__38115;
count__38038 = G__38116;
i__38039 = G__38117;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38036);
if(temp__5753__auto__){
var seq__38036__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38036__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38036__$1);
var G__38118 = cljs.core.chunk_rest(seq__38036__$1);
var G__38119 = c__4638__auto__;
var G__38120 = cljs.core.count(c__4638__auto__);
var G__38121 = (0);
seq__38036 = G__38118;
chunk__38037 = G__38119;
count__38038 = G__38120;
i__38039 = G__38121;
continue;
} else {
var vec__38049 = cljs.core.first(seq__38036__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38049,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38049,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___38122 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38122)){
var effect_fn_38123 = temp__5751__auto___38122;
(effect_fn_38123.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38123.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38123.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38124 = cljs.core.next(seq__38036__$1);
var G__38125 = null;
var G__38126 = (0);
var G__38127 = (0);
seq__38036 = G__38124;
chunk__38037 = G__38125;
count__38038 = G__38126;
i__38039 = G__38127;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38052 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38053 = null;
var count__38054 = (0);
var i__38055 = (0);
while(true){
if((i__38055 < count__38054)){
var event = chunk__38053.cljs$core$IIndexed$_nth$arity$2(null,i__38055);
re_frame.router.dispatch(event);


var G__38128 = seq__38052;
var G__38129 = chunk__38053;
var G__38130 = count__38054;
var G__38131 = (i__38055 + (1));
seq__38052 = G__38128;
chunk__38053 = G__38129;
count__38054 = G__38130;
i__38055 = G__38131;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38052);
if(temp__5753__auto__){
var seq__38052__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38052__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38052__$1);
var G__38132 = cljs.core.chunk_rest(seq__38052__$1);
var G__38133 = c__4638__auto__;
var G__38134 = cljs.core.count(c__4638__auto__);
var G__38135 = (0);
seq__38052 = G__38132;
chunk__38053 = G__38133;
count__38054 = G__38134;
i__38055 = G__38135;
continue;
} else {
var event = cljs.core.first(seq__38052__$1);
re_frame.router.dispatch(event);


var G__38136 = cljs.core.next(seq__38052__$1);
var G__38137 = null;
var G__38138 = (0);
var G__38139 = (0);
seq__38052 = G__38136;
chunk__38053 = G__38137;
count__38054 = G__38138;
i__38055 = G__38139;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38056 = cljs.core.seq(value);
var chunk__38057 = null;
var count__38058 = (0);
var i__38059 = (0);
while(true){
if((i__38059 < count__38058)){
var event = chunk__38057.cljs$core$IIndexed$_nth$arity$2(null,i__38059);
clear_event(event);


var G__38140 = seq__38056;
var G__38141 = chunk__38057;
var G__38142 = count__38058;
var G__38143 = (i__38059 + (1));
seq__38056 = G__38140;
chunk__38057 = G__38141;
count__38058 = G__38142;
i__38059 = G__38143;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38056);
if(temp__5753__auto__){
var seq__38056__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38056__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38056__$1);
var G__38144 = cljs.core.chunk_rest(seq__38056__$1);
var G__38145 = c__4638__auto__;
var G__38146 = cljs.core.count(c__4638__auto__);
var G__38147 = (0);
seq__38056 = G__38144;
chunk__38057 = G__38145;
count__38058 = G__38146;
i__38059 = G__38147;
continue;
} else {
var event = cljs.core.first(seq__38056__$1);
clear_event(event);


var G__38148 = cljs.core.next(seq__38056__$1);
var G__38149 = null;
var G__38150 = (0);
var G__38151 = (0);
seq__38056 = G__38148;
chunk__38057 = G__38149;
count__38058 = G__38150;
i__38059 = G__38151;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

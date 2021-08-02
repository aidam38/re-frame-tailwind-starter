goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32318,res){
var map__32320 = p__32318;
var map__32320__$1 = cljs.core.__destructure_map(map__32320);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32320__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32320__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32325 = res;
var G__32325__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32325,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32325);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32325__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32325__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32368 = arguments.length;
switch (G__32368) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32392,msg,handlers,timeout_after_ms){
var map__32393 = p__32392;
var map__32393__$1 = cljs.core.__destructure_map(map__32393);
var runtime = map__32393__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32393__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32521 = arguments.length;
var i__4819__auto___32522 = (0);
while(true){
if((i__4819__auto___32522 < len__4818__auto___32521)){
args__4824__auto__.push((arguments[i__4819__auto___32522]));

var G__32523 = (i__4819__auto___32522 + (1));
i__4819__auto___32522 = G__32523;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32413,ev,args){
var map__32414 = p__32413;
var map__32414__$1 = cljs.core.__destructure_map(map__32414);
var runtime = map__32414__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32414__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32415 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32418 = null;
var count__32419 = (0);
var i__32420 = (0);
while(true){
if((i__32420 < count__32419)){
var ext = chunk__32418.cljs$core$IIndexed$_nth$arity$2(null,i__32420);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32525 = seq__32415;
var G__32526 = chunk__32418;
var G__32527 = count__32419;
var G__32528 = (i__32420 + (1));
seq__32415 = G__32525;
chunk__32418 = G__32526;
count__32419 = G__32527;
i__32420 = G__32528;
continue;
} else {
var G__32529 = seq__32415;
var G__32530 = chunk__32418;
var G__32531 = count__32419;
var G__32532 = (i__32420 + (1));
seq__32415 = G__32529;
chunk__32418 = G__32530;
count__32419 = G__32531;
i__32420 = G__32532;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32415);
if(temp__5753__auto__){
var seq__32415__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32415__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32415__$1);
var G__32533 = cljs.core.chunk_rest(seq__32415__$1);
var G__32534 = c__4638__auto__;
var G__32535 = cljs.core.count(c__4638__auto__);
var G__32536 = (0);
seq__32415 = G__32533;
chunk__32418 = G__32534;
count__32419 = G__32535;
i__32420 = G__32536;
continue;
} else {
var ext = cljs.core.first(seq__32415__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32537 = cljs.core.next(seq__32415__$1);
var G__32538 = null;
var G__32539 = (0);
var G__32540 = (0);
seq__32415 = G__32537;
chunk__32418 = G__32538;
count__32419 = G__32539;
i__32420 = G__32540;
continue;
} else {
var G__32541 = cljs.core.next(seq__32415__$1);
var G__32542 = null;
var G__32543 = (0);
var G__32544 = (0);
seq__32415 = G__32541;
chunk__32418 = G__32542;
count__32419 = G__32543;
i__32420 = G__32544;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32399){
var G__32400 = cljs.core.first(seq32399);
var seq32399__$1 = cljs.core.next(seq32399);
var G__32401 = cljs.core.first(seq32399__$1);
var seq32399__$2 = cljs.core.next(seq32399__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32400,G__32401,seq32399__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32440,p__32441){
var map__32442 = p__32440;
var map__32442__$1 = cljs.core.__destructure_map(map__32442);
var runtime = map__32442__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32442__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32443 = p__32441;
var map__32443__$1 = cljs.core.__destructure_map(map__32443);
var msg = map__32443__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32443__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32445 = cljs.core.deref(state_ref);
var map__32445__$1 = cljs.core.__destructure_map(map__32445);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32445__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32445__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32450){
var map__32451 = p__32450;
var map__32451__$1 = cljs.core.__destructure_map(map__32451);
var runtime = map__32451__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32451__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32458,msg){
var map__32459 = p__32458;
var map__32459__$1 = cljs.core.__destructure_map(map__32459);
var runtime = map__32459__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32459__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32475,key,p__32476){
var map__32477 = p__32475;
var map__32477__$1 = cljs.core.__destructure_map(map__32477);
var state = map__32477__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32477__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32478 = p__32476;
var map__32478__$1 = cljs.core.__destructure_map(map__32478);
var spec = map__32478__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32478__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32480,key,spec){
var map__32481 = p__32480;
var map__32481__$1 = cljs.core.__destructure_map(map__32481);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32481__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32482_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32482_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32483_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32483_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32484_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32484_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32485_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32485_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32486_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32486_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32488,key){
var map__32489 = p__32488;
var map__32489__$1 = cljs.core.__destructure_map(map__32489);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32489__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32491,msg){
var map__32492 = p__32491;
var map__32492__$1 = cljs.core.__destructure_map(map__32492);
var runtime = map__32492__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32492__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32493,p__32494){
var map__32496 = p__32493;
var map__32496__$1 = cljs.core.__destructure_map(map__32496);
var runtime = map__32496__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32496__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32497 = p__32494;
var map__32497__$1 = cljs.core.__destructure_map(map__32497);
var msg = map__32497__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32497__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32497__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32498 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32500 = null;
var count__32501 = (0);
var i__32502 = (0);
while(true){
if((i__32502 < count__32501)){
var map__32509 = chunk__32500.cljs$core$IIndexed$_nth$arity$2(null,i__32502);
var map__32509__$1 = cljs.core.__destructure_map(map__32509);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32509__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32624 = seq__32498;
var G__32625 = chunk__32500;
var G__32626 = count__32501;
var G__32627 = (i__32502 + (1));
seq__32498 = G__32624;
chunk__32500 = G__32625;
count__32501 = G__32626;
i__32502 = G__32627;
continue;
} else {
var G__32628 = seq__32498;
var G__32629 = chunk__32500;
var G__32630 = count__32501;
var G__32631 = (i__32502 + (1));
seq__32498 = G__32628;
chunk__32500 = G__32629;
count__32501 = G__32630;
i__32502 = G__32631;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32498);
if(temp__5753__auto__){
var seq__32498__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32498__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32498__$1);
var G__32632 = cljs.core.chunk_rest(seq__32498__$1);
var G__32633 = c__4638__auto__;
var G__32634 = cljs.core.count(c__4638__auto__);
var G__32635 = (0);
seq__32498 = G__32632;
chunk__32500 = G__32633;
count__32501 = G__32634;
i__32502 = G__32635;
continue;
} else {
var map__32511 = cljs.core.first(seq__32498__$1);
var map__32511__$1 = cljs.core.__destructure_map(map__32511);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32511__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32639 = cljs.core.next(seq__32498__$1);
var G__32640 = null;
var G__32641 = (0);
var G__32642 = (0);
seq__32498 = G__32639;
chunk__32500 = G__32640;
count__32501 = G__32641;
i__32502 = G__32642;
continue;
} else {
var G__32643 = cljs.core.next(seq__32498__$1);
var G__32644 = null;
var G__32645 = (0);
var G__32646 = (0);
seq__32498 = G__32643;
chunk__32500 = G__32644;
count__32501 = G__32645;
i__32502 = G__32646;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

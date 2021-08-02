goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36590 = arguments.length;
var i__4819__auto___36592 = (0);
while(true){
if((i__4819__auto___36592 < len__4818__auto___36590)){
args__4824__auto__.push((arguments[i__4819__auto___36592]));

var G__36593 = (i__4819__auto___36592 + (1));
i__4819__auto___36592 = G__36593;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36397){
var G__36398 = cljs.core.first(seq36397);
var seq36397__$1 = cljs.core.next(seq36397);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36398,seq36397__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36399 = cljs.core.seq(sources);
var chunk__36400 = null;
var count__36401 = (0);
var i__36402 = (0);
while(true){
if((i__36402 < count__36401)){
var map__36422 = chunk__36400.cljs$core$IIndexed$_nth$arity$2(null,i__36402);
var map__36422__$1 = cljs.core.__destructure_map(map__36422);
var src = map__36422__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36422__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36422__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36422__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36422__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36423){var e_36595 = e36423;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36595);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36595.message)].join('')));
}

var G__36596 = seq__36399;
var G__36597 = chunk__36400;
var G__36598 = count__36401;
var G__36599 = (i__36402 + (1));
seq__36399 = G__36596;
chunk__36400 = G__36597;
count__36401 = G__36598;
i__36402 = G__36599;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36399);
if(temp__5753__auto__){
var seq__36399__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36399__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36399__$1);
var G__36600 = cljs.core.chunk_rest(seq__36399__$1);
var G__36601 = c__4638__auto__;
var G__36602 = cljs.core.count(c__4638__auto__);
var G__36603 = (0);
seq__36399 = G__36600;
chunk__36400 = G__36601;
count__36401 = G__36602;
i__36402 = G__36603;
continue;
} else {
var map__36426 = cljs.core.first(seq__36399__$1);
var map__36426__$1 = cljs.core.__destructure_map(map__36426);
var src = map__36426__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36428){var e_36604 = e36428;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36604);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36604.message)].join('')));
}

var G__36605 = cljs.core.next(seq__36399__$1);
var G__36606 = null;
var G__36607 = (0);
var G__36608 = (0);
seq__36399 = G__36605;
chunk__36400 = G__36606;
count__36401 = G__36607;
i__36402 = G__36608;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36432 = cljs.core.seq(js_requires);
var chunk__36433 = null;
var count__36434 = (0);
var i__36435 = (0);
while(true){
if((i__36435 < count__36434)){
var js_ns = chunk__36433.cljs$core$IIndexed$_nth$arity$2(null,i__36435);
var require_str_36609 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36609);


var G__36610 = seq__36432;
var G__36611 = chunk__36433;
var G__36612 = count__36434;
var G__36613 = (i__36435 + (1));
seq__36432 = G__36610;
chunk__36433 = G__36611;
count__36434 = G__36612;
i__36435 = G__36613;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36432);
if(temp__5753__auto__){
var seq__36432__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36432__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36432__$1);
var G__36614 = cljs.core.chunk_rest(seq__36432__$1);
var G__36615 = c__4638__auto__;
var G__36616 = cljs.core.count(c__4638__auto__);
var G__36617 = (0);
seq__36432 = G__36614;
chunk__36433 = G__36615;
count__36434 = G__36616;
i__36435 = G__36617;
continue;
} else {
var js_ns = cljs.core.first(seq__36432__$1);
var require_str_36618 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36618);


var G__36619 = cljs.core.next(seq__36432__$1);
var G__36620 = null;
var G__36621 = (0);
var G__36622 = (0);
seq__36432 = G__36619;
chunk__36433 = G__36620;
count__36434 = G__36621;
i__36435 = G__36622;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36437){
var map__36438 = p__36437;
var map__36438__$1 = cljs.core.__destructure_map(map__36438);
var msg = map__36438__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36438__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36438__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36440(s__36441){
return (new cljs.core.LazySeq(null,(function (){
var s__36441__$1 = s__36441;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36441__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36449 = cljs.core.first(xs__6308__auto__);
var map__36449__$1 = cljs.core.__destructure_map(map__36449);
var src = map__36449__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__36441__$1,map__36449,map__36449__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36438,map__36438__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36440_$_iter__36442(s__36443){
return (new cljs.core.LazySeq(null,((function (s__36441__$1,map__36449,map__36449__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36438,map__36438__$1,msg,info,reload_info){
return (function (){
var s__36443__$1 = s__36443;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36443__$1);
if(temp__5753__auto____$1){
var s__36443__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36443__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__36443__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__36445 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__36444 = (0);
while(true){
if((i__36444 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__36444);
cljs.core.chunk_append(b__36445,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36623 = (i__36444 + (1));
i__36444 = G__36623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36445),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36440_$_iter__36442(cljs.core.chunk_rest(s__36443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36445),null);
}
} else {
var warning = cljs.core.first(s__36443__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36440_$_iter__36442(cljs.core.rest(s__36443__$2)));
}
} else {
return null;
}
break;
}
});})(s__36441__$1,map__36449,map__36449__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36438,map__36438__$1,msg,info,reload_info))
,null,null));
});})(s__36441__$1,map__36449,map__36449__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36438,map__36438__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36440(cljs.core.rest(s__36441__$1)));
} else {
var G__36624 = cljs.core.rest(s__36441__$1);
s__36441__$1 = G__36624;
continue;
}
} else {
var G__36625 = cljs.core.rest(s__36441__$1);
s__36441__$1 = G__36625;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36450_36626 = cljs.core.seq(warnings);
var chunk__36451_36627 = null;
var count__36452_36628 = (0);
var i__36453_36629 = (0);
while(true){
if((i__36453_36629 < count__36452_36628)){
var map__36456_36631 = chunk__36451_36627.cljs$core$IIndexed$_nth$arity$2(null,i__36453_36629);
var map__36456_36632__$1 = cljs.core.__destructure_map(map__36456_36631);
var w_36633 = map__36456_36632__$1;
var msg_36634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36456_36632__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36456_36632__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36456_36632__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36456_36632__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36637)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36635),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36636),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36634__$1)].join(''));


var G__36638 = seq__36450_36626;
var G__36639 = chunk__36451_36627;
var G__36640 = count__36452_36628;
var G__36641 = (i__36453_36629 + (1));
seq__36450_36626 = G__36638;
chunk__36451_36627 = G__36639;
count__36452_36628 = G__36640;
i__36453_36629 = G__36641;
continue;
} else {
var temp__5753__auto___36642 = cljs.core.seq(seq__36450_36626);
if(temp__5753__auto___36642){
var seq__36450_36643__$1 = temp__5753__auto___36642;
if(cljs.core.chunked_seq_QMARK_(seq__36450_36643__$1)){
var c__4638__auto___36644 = cljs.core.chunk_first(seq__36450_36643__$1);
var G__36645 = cljs.core.chunk_rest(seq__36450_36643__$1);
var G__36646 = c__4638__auto___36644;
var G__36647 = cljs.core.count(c__4638__auto___36644);
var G__36648 = (0);
seq__36450_36626 = G__36645;
chunk__36451_36627 = G__36646;
count__36452_36628 = G__36647;
i__36453_36629 = G__36648;
continue;
} else {
var map__36457_36649 = cljs.core.first(seq__36450_36643__$1);
var map__36457_36650__$1 = cljs.core.__destructure_map(map__36457_36649);
var w_36651 = map__36457_36650__$1;
var msg_36652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36457_36650__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36457_36650__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36457_36650__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36457_36650__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36655)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36653),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36654),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36652__$1)].join(''));


var G__36657 = cljs.core.next(seq__36450_36643__$1);
var G__36658 = null;
var G__36659 = (0);
var G__36660 = (0);
seq__36450_36626 = G__36657;
chunk__36451_36627 = G__36658;
count__36452_36628 = G__36659;
i__36453_36629 = G__36660;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36436_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36436_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36459){
var map__36460 = p__36459;
var map__36460__$1 = cljs.core.__destructure_map(map__36460);
var msg = map__36460__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36460__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36461 = cljs.core.seq(updates);
var chunk__36463 = null;
var count__36464 = (0);
var i__36465 = (0);
while(true){
if((i__36465 < count__36464)){
var path = chunk__36463.cljs$core$IIndexed$_nth$arity$2(null,i__36465);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36498_36661 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36502_36662 = null;
var count__36503_36663 = (0);
var i__36504_36664 = (0);
while(true){
if((i__36504_36664 < count__36503_36663)){
var node_36665 = chunk__36502_36662.cljs$core$IIndexed$_nth$arity$2(null,i__36504_36664);
if(cljs.core.not(node_36665.shadow$old)){
var path_match_36666 = shadow.cljs.devtools.client.browser.match_paths(node_36665.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36666)){
var new_link_36667 = (function (){var G__36512 = node_36665.cloneNode(true);
G__36512.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36666),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36512;
})();
(node_36665.shadow$old = true);

(new_link_36667.onload = ((function (seq__36498_36661,chunk__36502_36662,count__36503_36663,i__36504_36664,seq__36461,chunk__36463,count__36464,i__36465,new_link_36667,path_match_36666,node_36665,path,map__36460,map__36460__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36665);
});})(seq__36498_36661,chunk__36502_36662,count__36503_36663,i__36504_36664,seq__36461,chunk__36463,count__36464,i__36465,new_link_36667,path_match_36666,node_36665,path,map__36460,map__36460__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36666], 0));

goog.dom.insertSiblingAfter(new_link_36667,node_36665);


var G__36668 = seq__36498_36661;
var G__36669 = chunk__36502_36662;
var G__36670 = count__36503_36663;
var G__36671 = (i__36504_36664 + (1));
seq__36498_36661 = G__36668;
chunk__36502_36662 = G__36669;
count__36503_36663 = G__36670;
i__36504_36664 = G__36671;
continue;
} else {
var G__36672 = seq__36498_36661;
var G__36673 = chunk__36502_36662;
var G__36674 = count__36503_36663;
var G__36675 = (i__36504_36664 + (1));
seq__36498_36661 = G__36672;
chunk__36502_36662 = G__36673;
count__36503_36663 = G__36674;
i__36504_36664 = G__36675;
continue;
}
} else {
var G__36676 = seq__36498_36661;
var G__36677 = chunk__36502_36662;
var G__36678 = count__36503_36663;
var G__36679 = (i__36504_36664 + (1));
seq__36498_36661 = G__36676;
chunk__36502_36662 = G__36677;
count__36503_36663 = G__36678;
i__36504_36664 = G__36679;
continue;
}
} else {
var temp__5753__auto___36680 = cljs.core.seq(seq__36498_36661);
if(temp__5753__auto___36680){
var seq__36498_36681__$1 = temp__5753__auto___36680;
if(cljs.core.chunked_seq_QMARK_(seq__36498_36681__$1)){
var c__4638__auto___36682 = cljs.core.chunk_first(seq__36498_36681__$1);
var G__36683 = cljs.core.chunk_rest(seq__36498_36681__$1);
var G__36684 = c__4638__auto___36682;
var G__36685 = cljs.core.count(c__4638__auto___36682);
var G__36686 = (0);
seq__36498_36661 = G__36683;
chunk__36502_36662 = G__36684;
count__36503_36663 = G__36685;
i__36504_36664 = G__36686;
continue;
} else {
var node_36687 = cljs.core.first(seq__36498_36681__$1);
if(cljs.core.not(node_36687.shadow$old)){
var path_match_36688 = shadow.cljs.devtools.client.browser.match_paths(node_36687.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36688)){
var new_link_36689 = (function (){var G__36515 = node_36687.cloneNode(true);
G__36515.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36688),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36515;
})();
(node_36687.shadow$old = true);

(new_link_36689.onload = ((function (seq__36498_36661,chunk__36502_36662,count__36503_36663,i__36504_36664,seq__36461,chunk__36463,count__36464,i__36465,new_link_36689,path_match_36688,node_36687,seq__36498_36681__$1,temp__5753__auto___36680,path,map__36460,map__36460__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36687);
});})(seq__36498_36661,chunk__36502_36662,count__36503_36663,i__36504_36664,seq__36461,chunk__36463,count__36464,i__36465,new_link_36689,path_match_36688,node_36687,seq__36498_36681__$1,temp__5753__auto___36680,path,map__36460,map__36460__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36688], 0));

goog.dom.insertSiblingAfter(new_link_36689,node_36687);


var G__36690 = cljs.core.next(seq__36498_36681__$1);
var G__36691 = null;
var G__36692 = (0);
var G__36693 = (0);
seq__36498_36661 = G__36690;
chunk__36502_36662 = G__36691;
count__36503_36663 = G__36692;
i__36504_36664 = G__36693;
continue;
} else {
var G__36694 = cljs.core.next(seq__36498_36681__$1);
var G__36695 = null;
var G__36696 = (0);
var G__36697 = (0);
seq__36498_36661 = G__36694;
chunk__36502_36662 = G__36695;
count__36503_36663 = G__36696;
i__36504_36664 = G__36697;
continue;
}
} else {
var G__36698 = cljs.core.next(seq__36498_36681__$1);
var G__36699 = null;
var G__36700 = (0);
var G__36701 = (0);
seq__36498_36661 = G__36698;
chunk__36502_36662 = G__36699;
count__36503_36663 = G__36700;
i__36504_36664 = G__36701;
continue;
}
}
} else {
}
}
break;
}


var G__36702 = seq__36461;
var G__36703 = chunk__36463;
var G__36704 = count__36464;
var G__36705 = (i__36465 + (1));
seq__36461 = G__36702;
chunk__36463 = G__36703;
count__36464 = G__36704;
i__36465 = G__36705;
continue;
} else {
var G__36706 = seq__36461;
var G__36707 = chunk__36463;
var G__36708 = count__36464;
var G__36709 = (i__36465 + (1));
seq__36461 = G__36706;
chunk__36463 = G__36707;
count__36464 = G__36708;
i__36465 = G__36709;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36461);
if(temp__5753__auto__){
var seq__36461__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36461__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36461__$1);
var G__36710 = cljs.core.chunk_rest(seq__36461__$1);
var G__36711 = c__4638__auto__;
var G__36712 = cljs.core.count(c__4638__auto__);
var G__36713 = (0);
seq__36461 = G__36710;
chunk__36463 = G__36711;
count__36464 = G__36712;
i__36465 = G__36713;
continue;
} else {
var path = cljs.core.first(seq__36461__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36520_36714 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36524_36715 = null;
var count__36525_36716 = (0);
var i__36526_36717 = (0);
while(true){
if((i__36526_36717 < count__36525_36716)){
var node_36718 = chunk__36524_36715.cljs$core$IIndexed$_nth$arity$2(null,i__36526_36717);
if(cljs.core.not(node_36718.shadow$old)){
var path_match_36719 = shadow.cljs.devtools.client.browser.match_paths(node_36718.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36719)){
var new_link_36720 = (function (){var G__36536 = node_36718.cloneNode(true);
G__36536.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36719),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36536;
})();
(node_36718.shadow$old = true);

(new_link_36720.onload = ((function (seq__36520_36714,chunk__36524_36715,count__36525_36716,i__36526_36717,seq__36461,chunk__36463,count__36464,i__36465,new_link_36720,path_match_36719,node_36718,path,seq__36461__$1,temp__5753__auto__,map__36460,map__36460__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36718);
});})(seq__36520_36714,chunk__36524_36715,count__36525_36716,i__36526_36717,seq__36461,chunk__36463,count__36464,i__36465,new_link_36720,path_match_36719,node_36718,path,seq__36461__$1,temp__5753__auto__,map__36460,map__36460__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36719], 0));

goog.dom.insertSiblingAfter(new_link_36720,node_36718);


var G__36722 = seq__36520_36714;
var G__36723 = chunk__36524_36715;
var G__36724 = count__36525_36716;
var G__36725 = (i__36526_36717 + (1));
seq__36520_36714 = G__36722;
chunk__36524_36715 = G__36723;
count__36525_36716 = G__36724;
i__36526_36717 = G__36725;
continue;
} else {
var G__36726 = seq__36520_36714;
var G__36727 = chunk__36524_36715;
var G__36728 = count__36525_36716;
var G__36729 = (i__36526_36717 + (1));
seq__36520_36714 = G__36726;
chunk__36524_36715 = G__36727;
count__36525_36716 = G__36728;
i__36526_36717 = G__36729;
continue;
}
} else {
var G__36730 = seq__36520_36714;
var G__36731 = chunk__36524_36715;
var G__36732 = count__36525_36716;
var G__36733 = (i__36526_36717 + (1));
seq__36520_36714 = G__36730;
chunk__36524_36715 = G__36731;
count__36525_36716 = G__36732;
i__36526_36717 = G__36733;
continue;
}
} else {
var temp__5753__auto___36734__$1 = cljs.core.seq(seq__36520_36714);
if(temp__5753__auto___36734__$1){
var seq__36520_36735__$1 = temp__5753__auto___36734__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36520_36735__$1)){
var c__4638__auto___36736 = cljs.core.chunk_first(seq__36520_36735__$1);
var G__36737 = cljs.core.chunk_rest(seq__36520_36735__$1);
var G__36738 = c__4638__auto___36736;
var G__36739 = cljs.core.count(c__4638__auto___36736);
var G__36740 = (0);
seq__36520_36714 = G__36737;
chunk__36524_36715 = G__36738;
count__36525_36716 = G__36739;
i__36526_36717 = G__36740;
continue;
} else {
var node_36741 = cljs.core.first(seq__36520_36735__$1);
if(cljs.core.not(node_36741.shadow$old)){
var path_match_36742 = shadow.cljs.devtools.client.browser.match_paths(node_36741.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36742)){
var new_link_36743 = (function (){var G__36537 = node_36741.cloneNode(true);
G__36537.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36742),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36537;
})();
(node_36741.shadow$old = true);

(new_link_36743.onload = ((function (seq__36520_36714,chunk__36524_36715,count__36525_36716,i__36526_36717,seq__36461,chunk__36463,count__36464,i__36465,new_link_36743,path_match_36742,node_36741,seq__36520_36735__$1,temp__5753__auto___36734__$1,path,seq__36461__$1,temp__5753__auto__,map__36460,map__36460__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36741);
});})(seq__36520_36714,chunk__36524_36715,count__36525_36716,i__36526_36717,seq__36461,chunk__36463,count__36464,i__36465,new_link_36743,path_match_36742,node_36741,seq__36520_36735__$1,temp__5753__auto___36734__$1,path,seq__36461__$1,temp__5753__auto__,map__36460,map__36460__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36742], 0));

goog.dom.insertSiblingAfter(new_link_36743,node_36741);


var G__36745 = cljs.core.next(seq__36520_36735__$1);
var G__36746 = null;
var G__36747 = (0);
var G__36748 = (0);
seq__36520_36714 = G__36745;
chunk__36524_36715 = G__36746;
count__36525_36716 = G__36747;
i__36526_36717 = G__36748;
continue;
} else {
var G__36749 = cljs.core.next(seq__36520_36735__$1);
var G__36750 = null;
var G__36751 = (0);
var G__36752 = (0);
seq__36520_36714 = G__36749;
chunk__36524_36715 = G__36750;
count__36525_36716 = G__36751;
i__36526_36717 = G__36752;
continue;
}
} else {
var G__36753 = cljs.core.next(seq__36520_36735__$1);
var G__36754 = null;
var G__36755 = (0);
var G__36756 = (0);
seq__36520_36714 = G__36753;
chunk__36524_36715 = G__36754;
count__36525_36716 = G__36755;
i__36526_36717 = G__36756;
continue;
}
}
} else {
}
}
break;
}


var G__36757 = cljs.core.next(seq__36461__$1);
var G__36758 = null;
var G__36759 = (0);
var G__36760 = (0);
seq__36461 = G__36757;
chunk__36463 = G__36758;
count__36464 = G__36759;
i__36465 = G__36760;
continue;
} else {
var G__36761 = cljs.core.next(seq__36461__$1);
var G__36762 = null;
var G__36763 = (0);
var G__36764 = (0);
seq__36461 = G__36761;
chunk__36463 = G__36762;
count__36464 = G__36763;
i__36465 = G__36764;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36539){
var map__36540 = p__36539;
var map__36540__$1 = cljs.core.__destructure_map(map__36540);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36540__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36553){
var map__36554 = p__36553;
var map__36554__$1 = cljs.core.__destructure_map(map__36554);
var _ = map__36554__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36554__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36556,done,error){
var map__36557 = p__36556;
var map__36557__$1 = cljs.core.__destructure_map(map__36557);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36558,done,error){
var map__36559 = p__36558;
var map__36559__$1 = cljs.core.__destructure_map(map__36559);
var msg = map__36559__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36559__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36559__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36559__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36560){
var map__36561 = p__36560;
var map__36561__$1 = cljs.core.__destructure_map(map__36561);
var src = map__36561__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36561__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36563 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36563) : done.call(null,G__36563));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36564){
var map__36565 = p__36564;
var map__36565__$1 = cljs.core.__destructure_map(map__36565);
var msg__$1 = map__36565__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36566){var ex = e36566;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36567){
var map__36568 = p__36567;
var map__36568__$1 = cljs.core.__destructure_map(map__36568);
var env = map__36568__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36568__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36575){
var map__36576 = p__36575;
var map__36576__$1 = cljs.core.__destructure_map(map__36576);
var msg = map__36576__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36576__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36581){
var map__36582 = p__36581;
var map__36582__$1 = cljs.core.__destructure_map(map__36582);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36585){
var map__36586 = p__36585;
var map__36586__$1 = cljs.core.__destructure_map(map__36586);
var svc = map__36586__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36586__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

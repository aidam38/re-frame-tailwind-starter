goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35024){
var map__35031 = p__35024;
var map__35031__$1 = cljs.core.__destructure_map(map__35031);
var m = map__35031__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35031__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35031__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35077_35352 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35086_35353 = null;
var count__35087_35354 = (0);
var i__35088_35355 = (0);
while(true){
if((i__35088_35355 < count__35087_35354)){
var f_35356 = chunk__35086_35353.cljs$core$IIndexed$_nth$arity$2(null,i__35088_35355);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35356], 0));


var G__35358 = seq__35077_35352;
var G__35359 = chunk__35086_35353;
var G__35360 = count__35087_35354;
var G__35361 = (i__35088_35355 + (1));
seq__35077_35352 = G__35358;
chunk__35086_35353 = G__35359;
count__35087_35354 = G__35360;
i__35088_35355 = G__35361;
continue;
} else {
var temp__5753__auto___35362 = cljs.core.seq(seq__35077_35352);
if(temp__5753__auto___35362){
var seq__35077_35363__$1 = temp__5753__auto___35362;
if(cljs.core.chunked_seq_QMARK_(seq__35077_35363__$1)){
var c__4638__auto___35364 = cljs.core.chunk_first(seq__35077_35363__$1);
var G__35365 = cljs.core.chunk_rest(seq__35077_35363__$1);
var G__35366 = c__4638__auto___35364;
var G__35367 = cljs.core.count(c__4638__auto___35364);
var G__35368 = (0);
seq__35077_35352 = G__35365;
chunk__35086_35353 = G__35366;
count__35087_35354 = G__35367;
i__35088_35355 = G__35368;
continue;
} else {
var f_35369 = cljs.core.first(seq__35077_35363__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35369], 0));


var G__35370 = cljs.core.next(seq__35077_35363__$1);
var G__35371 = null;
var G__35372 = (0);
var G__35373 = (0);
seq__35077_35352 = G__35370;
chunk__35086_35353 = G__35371;
count__35087_35354 = G__35372;
i__35088_35355 = G__35373;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35374 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35374], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35374)))?cljs.core.second(arglists_35374):arglists_35374)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35171_35375 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35172_35376 = null;
var count__35173_35377 = (0);
var i__35174_35378 = (0);
while(true){
if((i__35174_35378 < count__35173_35377)){
var vec__35204_35379 = chunk__35172_35376.cljs$core$IIndexed$_nth$arity$2(null,i__35174_35378);
var name_35380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35204_35379,(0),null);
var map__35207_35381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35204_35379,(1),null);
var map__35207_35382__$1 = cljs.core.__destructure_map(map__35207_35381);
var doc_35383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207_35382__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207_35382__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35380], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35384], 0));

if(cljs.core.truth_(doc_35383)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35383], 0));
} else {
}


var G__35385 = seq__35171_35375;
var G__35386 = chunk__35172_35376;
var G__35387 = count__35173_35377;
var G__35388 = (i__35174_35378 + (1));
seq__35171_35375 = G__35385;
chunk__35172_35376 = G__35386;
count__35173_35377 = G__35387;
i__35174_35378 = G__35388;
continue;
} else {
var temp__5753__auto___35389 = cljs.core.seq(seq__35171_35375);
if(temp__5753__auto___35389){
var seq__35171_35390__$1 = temp__5753__auto___35389;
if(cljs.core.chunked_seq_QMARK_(seq__35171_35390__$1)){
var c__4638__auto___35391 = cljs.core.chunk_first(seq__35171_35390__$1);
var G__35392 = cljs.core.chunk_rest(seq__35171_35390__$1);
var G__35393 = c__4638__auto___35391;
var G__35394 = cljs.core.count(c__4638__auto___35391);
var G__35395 = (0);
seq__35171_35375 = G__35392;
chunk__35172_35376 = G__35393;
count__35173_35377 = G__35394;
i__35174_35378 = G__35395;
continue;
} else {
var vec__35212_35396 = cljs.core.first(seq__35171_35390__$1);
var name_35397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35212_35396,(0),null);
var map__35215_35398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35212_35396,(1),null);
var map__35215_35399__$1 = cljs.core.__destructure_map(map__35215_35398);
var doc_35400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215_35399__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215_35399__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35397], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35401], 0));

if(cljs.core.truth_(doc_35400)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35400], 0));
} else {
}


var G__35402 = cljs.core.next(seq__35171_35390__$1);
var G__35403 = null;
var G__35404 = (0);
var G__35405 = (0);
seq__35171_35375 = G__35402;
chunk__35172_35376 = G__35403;
count__35173_35377 = G__35404;
i__35174_35378 = G__35405;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35216 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35217 = null;
var count__35218 = (0);
var i__35219 = (0);
while(true){
if((i__35219 < count__35218)){
var role = chunk__35217.cljs$core$IIndexed$_nth$arity$2(null,i__35219);
var temp__5753__auto___35410__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35410__$1)){
var spec_35411 = temp__5753__auto___35410__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35411)], 0));
} else {
}


var G__35412 = seq__35216;
var G__35413 = chunk__35217;
var G__35414 = count__35218;
var G__35415 = (i__35219 + (1));
seq__35216 = G__35412;
chunk__35217 = G__35413;
count__35218 = G__35414;
i__35219 = G__35415;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35216);
if(temp__5753__auto____$1){
var seq__35216__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35216__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35216__$1);
var G__35416 = cljs.core.chunk_rest(seq__35216__$1);
var G__35417 = c__4638__auto__;
var G__35418 = cljs.core.count(c__4638__auto__);
var G__35419 = (0);
seq__35216 = G__35416;
chunk__35217 = G__35417;
count__35218 = G__35418;
i__35219 = G__35419;
continue;
} else {
var role = cljs.core.first(seq__35216__$1);
var temp__5753__auto___35420__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35420__$2)){
var spec_35421 = temp__5753__auto___35420__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35421)], 0));
} else {
}


var G__35422 = cljs.core.next(seq__35216__$1);
var G__35423 = null;
var G__35424 = (0);
var G__35425 = (0);
seq__35216 = G__35422;
chunk__35217 = G__35423;
count__35218 = G__35424;
i__35219 = G__35425;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35426 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35427 = cljs.core.ex_cause(t);
via = G__35426;
t = G__35427;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35266 = datafied_throwable;
var map__35266__$1 = cljs.core.__destructure_map(map__35266);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35266__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35267 = cljs.core.last(via);
var map__35267__$1 = cljs.core.__destructure_map(map__35267);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35268 = data;
var map__35268__$1 = cljs.core.__destructure_map(map__35268);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35268__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35268__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35268__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35269 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35269__$1 = cljs.core.__destructure_map(map__35269);
var top_data = map__35269__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35270 = phase;
var G__35270__$1 = (((G__35270 instanceof cljs.core.Keyword))?G__35270.fqn:null);
switch (G__35270__$1) {
case "read-source":
var map__35271 = data;
var map__35271__$1 = cljs.core.__destructure_map(map__35271);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35271__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35271__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35275 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35275__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35275,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35275);
var G__35275__$2 = (cljs.core.truth_((function (){var fexpr__35276 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35276.cljs$core$IFn$_invoke$arity$1 ? fexpr__35276.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35276.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35275__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35275__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35275__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35275__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35279 = top_data;
var G__35279__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35279,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35279);
var G__35279__$2 = (cljs.core.truth_((function (){var fexpr__35280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35280.cljs$core$IFn$_invoke$arity$1 ? fexpr__35280.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35280.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35279__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35279__$1);
var G__35279__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35279__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35279__$2);
var G__35279__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35279__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35279__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35279__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35279__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35281 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281,(3),null);
var G__35284 = top_data;
var G__35284__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35284);
var G__35284__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35284__$1);
var G__35284__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35284__$2);
var G__35284__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35284__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35284__$4;
}

break;
case "execution":
var vec__35285 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35285,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35285,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35285,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35285,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35258_SHARP_){
var or__4212__auto__ = (p1__35258_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__35288 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35288.cljs$core$IFn$_invoke$arity$1 ? fexpr__35288.cljs$core$IFn$_invoke$arity$1(p1__35258_SHARP_) : fexpr__35288.call(null,p1__35258_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__35289 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35289__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35289,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35289);
var G__35289__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35289__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35289__$1);
var G__35289__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35289__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35289__$2);
var G__35289__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35289__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35289__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35289__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35289__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35270__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35298){
var map__35306 = p__35298;
var map__35306__$1 = cljs.core.__destructure_map(map__35306);
var triage_data = map__35306__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35307 = phase;
var G__35307__$1 = (((G__35307 instanceof cljs.core.Keyword))?G__35307.fqn:null);
switch (G__35307__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35308 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35310 = loc;
var G__35311 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35312_35440 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35313_35441 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35314_35442 = true;
var _STAR_print_fn_STAR__temp_val__35315_35443 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35314_35442);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35315_35443);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35296_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35296_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35313_35441);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35312_35440);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35308,G__35309,G__35310,G__35311) : format.call(null,G__35308,G__35309,G__35310,G__35311));

break;
case "macroexpansion":
var G__35317 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35318 = cause_type;
var G__35319 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35320 = loc;
var G__35321 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35317,G__35318,G__35319,G__35320,G__35321) : format.call(null,G__35317,G__35318,G__35319,G__35320,G__35321));

break;
case "compile-syntax-check":
var G__35322 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35323 = cause_type;
var G__35324 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35325 = loc;
var G__35326 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35322,G__35323,G__35324,G__35325,G__35326) : format.call(null,G__35322,G__35323,G__35324,G__35325,G__35326));

break;
case "compilation":
var G__35327 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35328 = cause_type;
var G__35329 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35330 = loc;
var G__35331 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35327,G__35328,G__35329,G__35330,G__35331) : format.call(null,G__35327,G__35328,G__35329,G__35330,G__35331));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35332 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35333 = symbol;
var G__35334 = loc;
var G__35335 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35336_35444 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35337_35445 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35338_35446 = true;
var _STAR_print_fn_STAR__temp_val__35339_35447 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35338_35446);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35339_35447);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35297_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35297_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35337_35445);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35336_35444);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35332,G__35333,G__35334,G__35335) : format.call(null,G__35332,G__35333,G__35334,G__35335));
} else {
var G__35341 = "Execution error%s at %s(%s).\n%s\n";
var G__35342 = cause_type;
var G__35343 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35344 = loc;
var G__35345 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35341,G__35342,G__35343,G__35344,G__35345) : format.call(null,G__35341,G__35342,G__35343,G__35344,G__35345));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35307__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

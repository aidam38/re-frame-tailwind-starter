goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30929 = arguments.length;
switch (G__30929) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30944 = (function (f,blockable,meta30945){
this.f = f;
this.blockable = blockable;
this.meta30945 = meta30945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30946,meta30945__$1){
var self__ = this;
var _30946__$1 = this;
return (new cljs.core.async.t_cljs$core$async30944(self__.f,self__.blockable,meta30945__$1));
}));

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30946){
var self__ = this;
var _30946__$1 = this;
return self__.meta30945;
}));

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30945","meta30945",-312720953,null)], null);
}));

(cljs.core.async.t_cljs$core$async30944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30944");

(cljs.core.async.t_cljs$core$async30944.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30944.
 */
cljs.core.async.__GT_t_cljs$core$async30944 = (function cljs$core$async$__GT_t_cljs$core$async30944(f__$1,blockable__$1,meta30945){
return (new cljs.core.async.t_cljs$core$async30944(f__$1,blockable__$1,meta30945));
});

}

return (new cljs.core.async.t_cljs$core$async30944(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30966 = arguments.length;
switch (G__30966) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30972 = arguments.length;
switch (G__30972) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30994 = arguments.length;
switch (G__30994) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33565 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33565) : fn1.call(null,val_33565));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33565) : fn1.call(null,val_33565));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31000 = arguments.length;
switch (G__31000) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___33572 = n;
var x_33573 = (0);
while(true){
if((x_33573 < n__4695__auto___33572)){
(a[x_33573] = x_33573);

var G__33574 = (x_33573 + (1));
x_33573 = G__33574;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31007 = (function (flag,meta31008){
this.flag = flag;
this.meta31008 = meta31008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31009,meta31008__$1){
var self__ = this;
var _31009__$1 = this;
return (new cljs.core.async.t_cljs$core$async31007(self__.flag,meta31008__$1));
}));

(cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31009){
var self__ = this;
var _31009__$1 = this;
return self__.meta31008;
}));

(cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31008","meta31008",999500153,null)], null);
}));

(cljs.core.async.t_cljs$core$async31007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31007");

(cljs.core.async.t_cljs$core$async31007.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31007.
 */
cljs.core.async.__GT_t_cljs$core$async31007 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31007(flag__$1,meta31008){
return (new cljs.core.async.t_cljs$core$async31007(flag__$1,meta31008));
});

}

return (new cljs.core.async.t_cljs$core$async31007(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31026 = (function (flag,cb,meta31027){
this.flag = flag;
this.cb = cb;
this.meta31027 = meta31027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31028,meta31027__$1){
var self__ = this;
var _31028__$1 = this;
return (new cljs.core.async.t_cljs$core$async31026(self__.flag,self__.cb,meta31027__$1));
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31028){
var self__ = this;
var _31028__$1 = this;
return self__.meta31027;
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31027","meta31027",-254542966,null)], null);
}));

(cljs.core.async.t_cljs$core$async31026.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31026");

(cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31026");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31026.
 */
cljs.core.async.__GT_t_cljs$core$async31026 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31026(flag__$1,cb__$1,meta31027){
return (new cljs.core.async.t_cljs$core$async31026(flag__$1,cb__$1,meta31027));
});

}

return (new cljs.core.async.t_cljs$core$async31026(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31033_SHARP_){
var G__31036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31033_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31036) : fret.call(null,G__31036));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31034_SHARP_){
var G__31037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31034_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31037) : fret.call(null,G__31037));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33579 = (i + (1));
i = G__33579;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33580 = arguments.length;
var i__4819__auto___33581 = (0);
while(true){
if((i__4819__auto___33581 < len__4818__auto___33580)){
args__4824__auto__.push((arguments[i__4819__auto___33581]));

var G__33582 = (i__4819__auto___33581 + (1));
i__4819__auto___33581 = G__33582;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31051){
var map__31052 = p__31051;
var map__31052__$1 = cljs.core.__destructure_map(map__31052);
var opts = map__31052__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31039){
var G__31040 = cljs.core.first(seq31039);
var seq31039__$1 = cljs.core.next(seq31039);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31040,seq31039__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31056 = arguments.length;
switch (G__31056) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30865__auto___33584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_31098){
var state_val_31102 = (state_31098[(1)]);
if((state_val_31102 === (7))){
var inst_31092 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31104_33585 = state_31098__$1;
(statearr_31104_33585[(2)] = inst_31092);

(statearr_31104_33585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (1))){
var state_31098__$1 = state_31098;
var statearr_31105_33586 = state_31098__$1;
(statearr_31105_33586[(2)] = null);

(statearr_31105_33586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (4))){
var inst_31072 = (state_31098[(7)]);
var inst_31072__$1 = (state_31098[(2)]);
var inst_31074 = (inst_31072__$1 == null);
var state_31098__$1 = (function (){var statearr_31106 = state_31098;
(statearr_31106[(7)] = inst_31072__$1);

return statearr_31106;
})();
if(cljs.core.truth_(inst_31074)){
var statearr_31108_33587 = state_31098__$1;
(statearr_31108_33587[(1)] = (5));

} else {
var statearr_31109_33588 = state_31098__$1;
(statearr_31109_33588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (13))){
var state_31098__$1 = state_31098;
var statearr_31110_33589 = state_31098__$1;
(statearr_31110_33589[(2)] = null);

(statearr_31110_33589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (6))){
var inst_31072 = (state_31098[(7)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31098__$1,(11),to,inst_31072);
} else {
if((state_val_31102 === (3))){
var inst_31094 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31098__$1,inst_31094);
} else {
if((state_val_31102 === (12))){
var state_31098__$1 = state_31098;
var statearr_31113_33590 = state_31098__$1;
(statearr_31113_33590[(2)] = null);

(statearr_31113_33590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (2))){
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31098__$1,(4),from);
} else {
if((state_val_31102 === (11))){
var inst_31084 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31084)){
var statearr_31115_33591 = state_31098__$1;
(statearr_31115_33591[(1)] = (12));

} else {
var statearr_31116_33592 = state_31098__$1;
(statearr_31116_33592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (9))){
var state_31098__$1 = state_31098;
var statearr_31117_33593 = state_31098__$1;
(statearr_31117_33593[(2)] = null);

(statearr_31117_33593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (5))){
var state_31098__$1 = state_31098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31118_33594 = state_31098__$1;
(statearr_31118_33594[(1)] = (8));

} else {
var statearr_31119_33595 = state_31098__$1;
(statearr_31119_33595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (14))){
var inst_31090 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31120_33596 = state_31098__$1;
(statearr_31120_33596[(2)] = inst_31090);

(statearr_31120_33596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (10))){
var inst_31081 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31121_33597 = state_31098__$1;
(statearr_31121_33597[(2)] = inst_31081);

(statearr_31121_33597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (8))){
var inst_31078 = cljs.core.async.close_BANG_(to);
var state_31098__$1 = state_31098;
var statearr_31123_33598 = state_31098__$1;
(statearr_31123_33598[(2)] = inst_31078);

(statearr_31123_33598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_31124 = [null,null,null,null,null,null,null,null];
(statearr_31124[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_31124[(1)] = (1));

return statearr_31124;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_31098){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31098);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31127){var ex__30504__auto__ = e31127;
var statearr_31136_33599 = state_31098;
(statearr_31136_33599[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31098[(4)]))){
var statearr_31138_33600 = state_31098;
(statearr_31138_33600[(1)] = cljs.core.first((state_31098[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33601 = state_31098;
state_31098 = G__33601;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_31098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_31098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_31156 = f__30866__auto__();
(statearr_31156[(6)] = c__30865__auto___33584);

return statearr_31156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__31167){
var vec__31168 = p__31167;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31168,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31168,(1),null);
var job = vec__31168;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30865__auto___33604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_31199){
var state_val_31200 = (state_31199[(1)]);
if((state_val_31200 === (1))){
var state_31199__$1 = state_31199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31199__$1,(2),res,v);
} else {
if((state_val_31200 === (2))){
var inst_31196 = (state_31199[(2)]);
var inst_31197 = cljs.core.async.close_BANG_(res);
var state_31199__$1 = (function (){var statearr_31203 = state_31199;
(statearr_31203[(7)] = inst_31196);

return statearr_31203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31199__$1,inst_31197);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_31204 = [null,null,null,null,null,null,null,null];
(statearr_31204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_31204[(1)] = (1));

return statearr_31204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_31199){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31199);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31205){var ex__30504__auto__ = e31205;
var statearr_31206_33605 = state_31199;
(statearr_31206_33605[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31199[(4)]))){
var statearr_31207_33606 = state_31199;
(statearr_31207_33606[(1)] = cljs.core.first((state_31199[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33607 = state_31199;
state_31199 = G__33607;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_31199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_31199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_31210 = f__30866__auto__();
(statearr_31210[(6)] = c__30865__auto___33604);

return statearr_31210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31213){
var vec__31214 = p__31213;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31214,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31214,(1),null);
var job = vec__31214;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___33608 = n;
var __33609 = (0);
while(true){
if((__33609 < n__4695__auto___33608)){
var G__31227_33610 = type;
var G__31227_33611__$1 = (((G__31227_33610 instanceof cljs.core.Keyword))?G__31227_33610.fqn:null);
switch (G__31227_33611__$1) {
case "compute":
var c__30865__auto___33613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33609,c__30865__auto___33613,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async){
return (function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = ((function (__33609,c__30865__auto___33613,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async){
return (function (state_31242){
var state_val_31243 = (state_31242[(1)]);
if((state_val_31243 === (1))){
var state_31242__$1 = state_31242;
var statearr_31259_33614 = state_31242__$1;
(statearr_31259_33614[(2)] = null);

(statearr_31259_33614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (2))){
var state_31242__$1 = state_31242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31242__$1,(4),jobs);
} else {
if((state_val_31243 === (3))){
var inst_31240 = (state_31242[(2)]);
var state_31242__$1 = state_31242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31242__$1,inst_31240);
} else {
if((state_val_31243 === (4))){
var inst_31232 = (state_31242[(2)]);
var inst_31233 = process(inst_31232);
var state_31242__$1 = state_31242;
if(cljs.core.truth_(inst_31233)){
var statearr_31267_33615 = state_31242__$1;
(statearr_31267_33615[(1)] = (5));

} else {
var statearr_31268_33616 = state_31242__$1;
(statearr_31268_33616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (5))){
var state_31242__$1 = state_31242;
var statearr_31269_33618 = state_31242__$1;
(statearr_31269_33618[(2)] = null);

(statearr_31269_33618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (6))){
var state_31242__$1 = state_31242;
var statearr_31270_33619 = state_31242__$1;
(statearr_31270_33619[(2)] = null);

(statearr_31270_33619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (7))){
var inst_31238 = (state_31242[(2)]);
var state_31242__$1 = state_31242;
var statearr_31271_33620 = state_31242__$1;
(statearr_31271_33620[(2)] = inst_31238);

(statearr_31271_33620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33609,c__30865__auto___33613,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async))
;
return ((function (__33609,switch__30500__auto__,c__30865__auto___33613,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_31273 = [null,null,null,null,null,null,null];
(statearr_31273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_31273[(1)] = (1));

return statearr_31273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_31242){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31242);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31274){var ex__30504__auto__ = e31274;
var statearr_31275_33634 = state_31242;
(statearr_31275_33634[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31242[(4)]))){
var statearr_31276_33635 = state_31242;
(statearr_31276_33635[(1)] = cljs.core.first((state_31242[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33636 = state_31242;
state_31242 = G__33636;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_31242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_31242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
;})(__33609,switch__30500__auto__,c__30865__auto___33613,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async))
})();
var state__30867__auto__ = (function (){var statearr_31281 = f__30866__auto__();
(statearr_31281[(6)] = c__30865__auto___33613);

return statearr_31281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
});})(__33609,c__30865__auto___33613,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async))
);


break;
case "async":
var c__30865__auto___33644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33609,c__30865__auto___33644,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async){
return (function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = ((function (__33609,c__30865__auto___33644,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async){
return (function (state_31294){
var state_val_31295 = (state_31294[(1)]);
if((state_val_31295 === (1))){
var state_31294__$1 = state_31294;
var statearr_31296_33645 = state_31294__$1;
(statearr_31296_33645[(2)] = null);

(statearr_31296_33645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (2))){
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31294__$1,(4),jobs);
} else {
if((state_val_31295 === (3))){
var inst_31292 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31294__$1,inst_31292);
} else {
if((state_val_31295 === (4))){
var inst_31284 = (state_31294[(2)]);
var inst_31285 = async(inst_31284);
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31285)){
var statearr_31299_33646 = state_31294__$1;
(statearr_31299_33646[(1)] = (5));

} else {
var statearr_31300_33647 = state_31294__$1;
(statearr_31300_33647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (5))){
var state_31294__$1 = state_31294;
var statearr_31301_33648 = state_31294__$1;
(statearr_31301_33648[(2)] = null);

(statearr_31301_33648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (6))){
var state_31294__$1 = state_31294;
var statearr_31302_33649 = state_31294__$1;
(statearr_31302_33649[(2)] = null);

(statearr_31302_33649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (7))){
var inst_31290 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31303_33650 = state_31294__$1;
(statearr_31303_33650[(2)] = inst_31290);

(statearr_31303_33650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33609,c__30865__auto___33644,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async))
;
return ((function (__33609,switch__30500__auto__,c__30865__auto___33644,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_31304 = [null,null,null,null,null,null,null];
(statearr_31304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_31304[(1)] = (1));

return statearr_31304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_31294){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31294);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31305){var ex__30504__auto__ = e31305;
var statearr_31306_33651 = state_31294;
(statearr_31306_33651[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31294[(4)]))){
var statearr_31307_33652 = state_31294;
(statearr_31307_33652[(1)] = cljs.core.first((state_31294[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33653 = state_31294;
state_31294 = G__33653;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_31294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_31294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
;})(__33609,switch__30500__auto__,c__30865__auto___33644,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async))
})();
var state__30867__auto__ = (function (){var statearr_31308 = f__30866__auto__();
(statearr_31308[(6)] = c__30865__auto___33644);

return statearr_31308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
});})(__33609,c__30865__auto___33644,G__31227_33610,G__31227_33611__$1,n__4695__auto___33608,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31227_33611__$1)].join('')));

}

var G__33655 = (__33609 + (1));
__33609 = G__33655;
continue;
} else {
}
break;
}

var c__30865__auto___33656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_31330){
var state_val_31331 = (state_31330[(1)]);
if((state_val_31331 === (7))){
var inst_31326 = (state_31330[(2)]);
var state_31330__$1 = state_31330;
var statearr_31336_33657 = state_31330__$1;
(statearr_31336_33657[(2)] = inst_31326);

(statearr_31336_33657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (1))){
var state_31330__$1 = state_31330;
var statearr_31337_33658 = state_31330__$1;
(statearr_31337_33658[(2)] = null);

(statearr_31337_33658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (4))){
var inst_31311 = (state_31330[(7)]);
var inst_31311__$1 = (state_31330[(2)]);
var inst_31312 = (inst_31311__$1 == null);
var state_31330__$1 = (function (){var statearr_31338 = state_31330;
(statearr_31338[(7)] = inst_31311__$1);

return statearr_31338;
})();
if(cljs.core.truth_(inst_31312)){
var statearr_31339_33688 = state_31330__$1;
(statearr_31339_33688[(1)] = (5));

} else {
var statearr_31340_33690 = state_31330__$1;
(statearr_31340_33690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (6))){
var inst_31316 = (state_31330[(8)]);
var inst_31311 = (state_31330[(7)]);
var inst_31316__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31318 = [inst_31311,inst_31316__$1];
var inst_31319 = (new cljs.core.PersistentVector(null,2,(5),inst_31317,inst_31318,null));
var state_31330__$1 = (function (){var statearr_31341 = state_31330;
(statearr_31341[(8)] = inst_31316__$1);

return statearr_31341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31330__$1,(8),jobs,inst_31319);
} else {
if((state_val_31331 === (3))){
var inst_31328 = (state_31330[(2)]);
var state_31330__$1 = state_31330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31330__$1,inst_31328);
} else {
if((state_val_31331 === (2))){
var state_31330__$1 = state_31330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31330__$1,(4),from);
} else {
if((state_val_31331 === (9))){
var inst_31323 = (state_31330[(2)]);
var state_31330__$1 = (function (){var statearr_31342 = state_31330;
(statearr_31342[(9)] = inst_31323);

return statearr_31342;
})();
var statearr_31343_33692 = state_31330__$1;
(statearr_31343_33692[(2)] = null);

(statearr_31343_33692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (5))){
var inst_31314 = cljs.core.async.close_BANG_(jobs);
var state_31330__$1 = state_31330;
var statearr_31344_33693 = state_31330__$1;
(statearr_31344_33693[(2)] = inst_31314);

(statearr_31344_33693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (8))){
var inst_31316 = (state_31330[(8)]);
var inst_31321 = (state_31330[(2)]);
var state_31330__$1 = (function (){var statearr_31345 = state_31330;
(statearr_31345[(10)] = inst_31321);

return statearr_31345;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31330__$1,(9),results,inst_31316);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_31346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_31346[(1)] = (1));

return statearr_31346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_31330){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31330);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31350){var ex__30504__auto__ = e31350;
var statearr_31351_33698 = state_31330;
(statearr_31351_33698[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31330[(4)]))){
var statearr_31352_33699 = state_31330;
(statearr_31352_33699[(1)] = cljs.core.first((state_31330[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33701 = state_31330;
state_31330 = G__33701;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_31330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_31330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_31353 = f__30866__auto__();
(statearr_31353[(6)] = c__30865__auto___33656);

return statearr_31353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


var c__30865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_31398){
var state_val_31399 = (state_31398[(1)]);
if((state_val_31399 === (7))){
var inst_31394 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
var statearr_31402_33708 = state_31398__$1;
(statearr_31402_33708[(2)] = inst_31394);

(statearr_31402_33708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (20))){
var state_31398__$1 = state_31398;
var statearr_31407_33709 = state_31398__$1;
(statearr_31407_33709[(2)] = null);

(statearr_31407_33709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (1))){
var state_31398__$1 = state_31398;
var statearr_31408_33710 = state_31398__$1;
(statearr_31408_33710[(2)] = null);

(statearr_31408_33710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (4))){
var inst_31361 = (state_31398[(7)]);
var inst_31361__$1 = (state_31398[(2)]);
var inst_31362 = (inst_31361__$1 == null);
var state_31398__$1 = (function (){var statearr_31409 = state_31398;
(statearr_31409[(7)] = inst_31361__$1);

return statearr_31409;
})();
if(cljs.core.truth_(inst_31362)){
var statearr_31410_33712 = state_31398__$1;
(statearr_31410_33712[(1)] = (5));

} else {
var statearr_31411_33714 = state_31398__$1;
(statearr_31411_33714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (15))){
var inst_31375 = (state_31398[(8)]);
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31398__$1,(18),to,inst_31375);
} else {
if((state_val_31399 === (21))){
var inst_31389 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
var statearr_31413_33715 = state_31398__$1;
(statearr_31413_33715[(2)] = inst_31389);

(statearr_31413_33715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (13))){
var inst_31391 = (state_31398[(2)]);
var state_31398__$1 = (function (){var statearr_31414 = state_31398;
(statearr_31414[(9)] = inst_31391);

return statearr_31414;
})();
var statearr_31415_33716 = state_31398__$1;
(statearr_31415_33716[(2)] = null);

(statearr_31415_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (6))){
var inst_31361 = (state_31398[(7)]);
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31398__$1,(11),inst_31361);
} else {
if((state_val_31399 === (17))){
var inst_31383 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
if(cljs.core.truth_(inst_31383)){
var statearr_31416_33717 = state_31398__$1;
(statearr_31416_33717[(1)] = (19));

} else {
var statearr_31417_33718 = state_31398__$1;
(statearr_31417_33718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (3))){
var inst_31396 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31398__$1,inst_31396);
} else {
if((state_val_31399 === (12))){
var inst_31371 = (state_31398[(10)]);
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31398__$1,(14),inst_31371);
} else {
if((state_val_31399 === (2))){
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31398__$1,(4),results);
} else {
if((state_val_31399 === (19))){
var state_31398__$1 = state_31398;
var statearr_31438_33719 = state_31398__$1;
(statearr_31438_33719[(2)] = null);

(statearr_31438_33719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (11))){
var inst_31371 = (state_31398[(2)]);
var state_31398__$1 = (function (){var statearr_31445 = state_31398;
(statearr_31445[(10)] = inst_31371);

return statearr_31445;
})();
var statearr_31446_33720 = state_31398__$1;
(statearr_31446_33720[(2)] = null);

(statearr_31446_33720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (9))){
var state_31398__$1 = state_31398;
var statearr_31447_33721 = state_31398__$1;
(statearr_31447_33721[(2)] = null);

(statearr_31447_33721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (5))){
var state_31398__$1 = state_31398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31448_33722 = state_31398__$1;
(statearr_31448_33722[(1)] = (8));

} else {
var statearr_31449_33723 = state_31398__$1;
(statearr_31449_33723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (14))){
var inst_31375 = (state_31398[(8)]);
var inst_31377 = (state_31398[(11)]);
var inst_31375__$1 = (state_31398[(2)]);
var inst_31376 = (inst_31375__$1 == null);
var inst_31377__$1 = cljs.core.not(inst_31376);
var state_31398__$1 = (function (){var statearr_31450 = state_31398;
(statearr_31450[(8)] = inst_31375__$1);

(statearr_31450[(11)] = inst_31377__$1);

return statearr_31450;
})();
if(inst_31377__$1){
var statearr_31451_33724 = state_31398__$1;
(statearr_31451_33724[(1)] = (15));

} else {
var statearr_31452_33725 = state_31398__$1;
(statearr_31452_33725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (16))){
var inst_31377 = (state_31398[(11)]);
var state_31398__$1 = state_31398;
var statearr_31453_33726 = state_31398__$1;
(statearr_31453_33726[(2)] = inst_31377);

(statearr_31453_33726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (10))){
var inst_31368 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
var statearr_31454_33727 = state_31398__$1;
(statearr_31454_33727[(2)] = inst_31368);

(statearr_31454_33727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (18))){
var inst_31380 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
var statearr_31455_33728 = state_31398__$1;
(statearr_31455_33728[(2)] = inst_31380);

(statearr_31455_33728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (8))){
var inst_31365 = cljs.core.async.close_BANG_(to);
var state_31398__$1 = state_31398;
var statearr_31456_33729 = state_31398__$1;
(statearr_31456_33729[(2)] = inst_31365);

(statearr_31456_33729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_31463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_31463[(1)] = (1));

return statearr_31463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_31398){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31398);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31466){var ex__30504__auto__ = e31466;
var statearr_31467_33730 = state_31398;
(statearr_31467_33730[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31398[(4)]))){
var statearr_31468_33731 = state_31398;
(statearr_31468_33731[(1)] = cljs.core.first((state_31398[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33732 = state_31398;
state_31398 = G__33732;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_31398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_31398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_31475 = f__30866__auto__();
(statearr_31475[(6)] = c__30865__auto__);

return statearr_31475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));

return c__30865__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31489 = arguments.length;
switch (G__31489) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31493 = arguments.length;
switch (G__31493) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31498 = arguments.length;
switch (G__31498) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30865__auto___33738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_31563){
var state_val_31564 = (state_31563[(1)]);
if((state_val_31564 === (7))){
var inst_31559 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31565_33739 = state_31563__$1;
(statearr_31565_33739[(2)] = inst_31559);

(statearr_31565_33739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (1))){
var state_31563__$1 = state_31563;
var statearr_31566_33740 = state_31563__$1;
(statearr_31566_33740[(2)] = null);

(statearr_31566_33740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (4))){
var inst_31540 = (state_31563[(7)]);
var inst_31540__$1 = (state_31563[(2)]);
var inst_31541 = (inst_31540__$1 == null);
var state_31563__$1 = (function (){var statearr_31567 = state_31563;
(statearr_31567[(7)] = inst_31540__$1);

return statearr_31567;
})();
if(cljs.core.truth_(inst_31541)){
var statearr_31572_33741 = state_31563__$1;
(statearr_31572_33741[(1)] = (5));

} else {
var statearr_31573_33742 = state_31563__$1;
(statearr_31573_33742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (13))){
var state_31563__$1 = state_31563;
var statearr_31588_33743 = state_31563__$1;
(statearr_31588_33743[(2)] = null);

(statearr_31588_33743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (6))){
var inst_31540 = (state_31563[(7)]);
var inst_31546 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31540) : p.call(null,inst_31540));
var state_31563__$1 = state_31563;
if(cljs.core.truth_(inst_31546)){
var statearr_31594_33744 = state_31563__$1;
(statearr_31594_33744[(1)] = (9));

} else {
var statearr_31599_33745 = state_31563__$1;
(statearr_31599_33745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (3))){
var inst_31561 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31563__$1,inst_31561);
} else {
if((state_val_31564 === (12))){
var state_31563__$1 = state_31563;
var statearr_31607_33747 = state_31563__$1;
(statearr_31607_33747[(2)] = null);

(statearr_31607_33747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (2))){
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31563__$1,(4),ch);
} else {
if((state_val_31564 === (11))){
var inst_31540 = (state_31563[(7)]);
var inst_31550 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31563__$1,(8),inst_31550,inst_31540);
} else {
if((state_val_31564 === (9))){
var state_31563__$1 = state_31563;
var statearr_31611_33748 = state_31563__$1;
(statearr_31611_33748[(2)] = tc);

(statearr_31611_33748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (5))){
var inst_31543 = cljs.core.async.close_BANG_(tc);
var inst_31544 = cljs.core.async.close_BANG_(fc);
var state_31563__$1 = (function (){var statearr_31616 = state_31563;
(statearr_31616[(8)] = inst_31543);

return statearr_31616;
})();
var statearr_31617_33749 = state_31563__$1;
(statearr_31617_33749[(2)] = inst_31544);

(statearr_31617_33749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (14))){
var inst_31557 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31618_33750 = state_31563__$1;
(statearr_31618_33750[(2)] = inst_31557);

(statearr_31618_33750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (10))){
var state_31563__$1 = state_31563;
var statearr_31619_33751 = state_31563__$1;
(statearr_31619_33751[(2)] = fc);

(statearr_31619_33751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (8))){
var inst_31552 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
if(cljs.core.truth_(inst_31552)){
var statearr_31620_33752 = state_31563__$1;
(statearr_31620_33752[(1)] = (12));

} else {
var statearr_31621_33754 = state_31563__$1;
(statearr_31621_33754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_31632 = [null,null,null,null,null,null,null,null,null];
(statearr_31632[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_31632[(1)] = (1));

return statearr_31632;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_31563){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31563);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31634){var ex__30504__auto__ = e31634;
var statearr_31635_33757 = state_31563;
(statearr_31635_33757[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31563[(4)]))){
var statearr_31636_33758 = state_31563;
(statearr_31636_33758[(1)] = cljs.core.first((state_31563[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33762 = state_31563;
state_31563 = G__33762;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_31563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_31563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_31647 = f__30866__auto__();
(statearr_31647[(6)] = c__30865__auto___33738);

return statearr_31647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_31672){
var state_val_31673 = (state_31672[(1)]);
if((state_val_31673 === (7))){
var inst_31668 = (state_31672[(2)]);
var state_31672__$1 = state_31672;
var statearr_31675_33763 = state_31672__$1;
(statearr_31675_33763[(2)] = inst_31668);

(statearr_31675_33763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (1))){
var inst_31651 = init;
var inst_31652 = inst_31651;
var state_31672__$1 = (function (){var statearr_31676 = state_31672;
(statearr_31676[(7)] = inst_31652);

return statearr_31676;
})();
var statearr_31677_33764 = state_31672__$1;
(statearr_31677_33764[(2)] = null);

(statearr_31677_33764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (4))){
var inst_31655 = (state_31672[(8)]);
var inst_31655__$1 = (state_31672[(2)]);
var inst_31656 = (inst_31655__$1 == null);
var state_31672__$1 = (function (){var statearr_31678 = state_31672;
(statearr_31678[(8)] = inst_31655__$1);

return statearr_31678;
})();
if(cljs.core.truth_(inst_31656)){
var statearr_31679_33767 = state_31672__$1;
(statearr_31679_33767[(1)] = (5));

} else {
var statearr_31680_33768 = state_31672__$1;
(statearr_31680_33768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (6))){
var inst_31652 = (state_31672[(7)]);
var inst_31659 = (state_31672[(9)]);
var inst_31655 = (state_31672[(8)]);
var inst_31659__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31652,inst_31655) : f.call(null,inst_31652,inst_31655));
var inst_31660 = cljs.core.reduced_QMARK_(inst_31659__$1);
var state_31672__$1 = (function (){var statearr_31681 = state_31672;
(statearr_31681[(9)] = inst_31659__$1);

return statearr_31681;
})();
if(inst_31660){
var statearr_31682_33772 = state_31672__$1;
(statearr_31682_33772[(1)] = (8));

} else {
var statearr_31683_33773 = state_31672__$1;
(statearr_31683_33773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (3))){
var inst_31670 = (state_31672[(2)]);
var state_31672__$1 = state_31672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31672__$1,inst_31670);
} else {
if((state_val_31673 === (2))){
var state_31672__$1 = state_31672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31672__$1,(4),ch);
} else {
if((state_val_31673 === (9))){
var inst_31659 = (state_31672[(9)]);
var inst_31652 = inst_31659;
var state_31672__$1 = (function (){var statearr_31686 = state_31672;
(statearr_31686[(7)] = inst_31652);

return statearr_31686;
})();
var statearr_31687_33774 = state_31672__$1;
(statearr_31687_33774[(2)] = null);

(statearr_31687_33774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (5))){
var inst_31652 = (state_31672[(7)]);
var state_31672__$1 = state_31672;
var statearr_31688_33775 = state_31672__$1;
(statearr_31688_33775[(2)] = inst_31652);

(statearr_31688_33775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (10))){
var inst_31666 = (state_31672[(2)]);
var state_31672__$1 = state_31672;
var statearr_31689_33776 = state_31672__$1;
(statearr_31689_33776[(2)] = inst_31666);

(statearr_31689_33776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (8))){
var inst_31659 = (state_31672[(9)]);
var inst_31662 = cljs.core.deref(inst_31659);
var state_31672__$1 = state_31672;
var statearr_31690_33777 = state_31672__$1;
(statearr_31690_33777[(2)] = inst_31662);

(statearr_31690_33777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30501__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30501__auto____0 = (function (){
var statearr_31691 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31691[(0)] = cljs$core$async$reduce_$_state_machine__30501__auto__);

(statearr_31691[(1)] = (1));

return statearr_31691;
});
var cljs$core$async$reduce_$_state_machine__30501__auto____1 = (function (state_31672){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31672);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31704){var ex__30504__auto__ = e31704;
var statearr_31705_33779 = state_31672;
(statearr_31705_33779[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31672[(4)]))){
var statearr_31708_33780 = state_31672;
(statearr_31708_33780[(1)] = cljs.core.first((state_31672[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33781 = state_31672;
state_31672 = G__33781;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30501__auto__ = function(state_31672){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30501__auto____1.call(this,state_31672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30501__auto____0;
cljs$core$async$reduce_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30501__auto____1;
return cljs$core$async$reduce_$_state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_31712 = f__30866__auto__();
(statearr_31712[(6)] = c__30865__auto__);

return statearr_31712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));

return c__30865__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_31720){
var state_val_31721 = (state_31720[(1)]);
if((state_val_31721 === (1))){
var inst_31715 = cljs.core.async.reduce(f__$1,init,ch);
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31720__$1,(2),inst_31715);
} else {
if((state_val_31721 === (2))){
var inst_31717 = (state_31720[(2)]);
var inst_31718 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31717) : f__$1.call(null,inst_31717));
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31720__$1,inst_31718);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30501__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30501__auto____0 = (function (){
var statearr_31732 = [null,null,null,null,null,null,null];
(statearr_31732[(0)] = cljs$core$async$transduce_$_state_machine__30501__auto__);

(statearr_31732[(1)] = (1));

return statearr_31732;
});
var cljs$core$async$transduce_$_state_machine__30501__auto____1 = (function (state_31720){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31720);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31733){var ex__30504__auto__ = e31733;
var statearr_31734_33782 = state_31720;
(statearr_31734_33782[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31720[(4)]))){
var statearr_31737_33783 = state_31720;
(statearr_31737_33783[(1)] = cljs.core.first((state_31720[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33784 = state_31720;
state_31720 = G__33784;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30501__auto__ = function(state_31720){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30501__auto____1.call(this,state_31720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30501__auto____0;
cljs$core$async$transduce_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30501__auto____1;
return cljs$core$async$transduce_$_state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_31739 = f__30866__auto__();
(statearr_31739[(6)] = c__30865__auto__);

return statearr_31739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));

return c__30865__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31743 = arguments.length;
switch (G__31743) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_31776){
var state_val_31777 = (state_31776[(1)]);
if((state_val_31777 === (7))){
var inst_31758 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31786_33788 = state_31776__$1;
(statearr_31786_33788[(2)] = inst_31758);

(statearr_31786_33788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (1))){
var inst_31752 = cljs.core.seq(coll);
var inst_31753 = inst_31752;
var state_31776__$1 = (function (){var statearr_31788 = state_31776;
(statearr_31788[(7)] = inst_31753);

return statearr_31788;
})();
var statearr_31791_33792 = state_31776__$1;
(statearr_31791_33792[(2)] = null);

(statearr_31791_33792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (4))){
var inst_31753 = (state_31776[(7)]);
var inst_31756 = cljs.core.first(inst_31753);
var state_31776__$1 = state_31776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31776__$1,(7),ch,inst_31756);
} else {
if((state_val_31777 === (13))){
var inst_31770 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31796_33794 = state_31776__$1;
(statearr_31796_33794[(2)] = inst_31770);

(statearr_31796_33794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (6))){
var inst_31761 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
if(cljs.core.truth_(inst_31761)){
var statearr_31798_33795 = state_31776__$1;
(statearr_31798_33795[(1)] = (8));

} else {
var statearr_31799_33796 = state_31776__$1;
(statearr_31799_33796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (3))){
var inst_31774 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31776__$1,inst_31774);
} else {
if((state_val_31777 === (12))){
var state_31776__$1 = state_31776;
var statearr_31801_33797 = state_31776__$1;
(statearr_31801_33797[(2)] = null);

(statearr_31801_33797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (2))){
var inst_31753 = (state_31776[(7)]);
var state_31776__$1 = state_31776;
if(cljs.core.truth_(inst_31753)){
var statearr_31802_33798 = state_31776__$1;
(statearr_31802_33798[(1)] = (4));

} else {
var statearr_31803_33799 = state_31776__$1;
(statearr_31803_33799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (11))){
var inst_31767 = cljs.core.async.close_BANG_(ch);
var state_31776__$1 = state_31776;
var statearr_31808_33806 = state_31776__$1;
(statearr_31808_33806[(2)] = inst_31767);

(statearr_31808_33806[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (9))){
var state_31776__$1 = state_31776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31809_33807 = state_31776__$1;
(statearr_31809_33807[(1)] = (11));

} else {
var statearr_31810_33808 = state_31776__$1;
(statearr_31810_33808[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (5))){
var inst_31753 = (state_31776[(7)]);
var state_31776__$1 = state_31776;
var statearr_31812_33809 = state_31776__$1;
(statearr_31812_33809[(2)] = inst_31753);

(statearr_31812_33809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (10))){
var inst_31772 = (state_31776[(2)]);
var state_31776__$1 = state_31776;
var statearr_31813_33810 = state_31776__$1;
(statearr_31813_33810[(2)] = inst_31772);

(statearr_31813_33810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31777 === (8))){
var inst_31753 = (state_31776[(7)]);
var inst_31763 = cljs.core.next(inst_31753);
var inst_31753__$1 = inst_31763;
var state_31776__$1 = (function (){var statearr_31828 = state_31776;
(statearr_31828[(7)] = inst_31753__$1);

return statearr_31828;
})();
var statearr_31837_33811 = state_31776__$1;
(statearr_31837_33811[(2)] = null);

(statearr_31837_33811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_31842 = [null,null,null,null,null,null,null,null];
(statearr_31842[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_31842[(1)] = (1));

return statearr_31842;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_31776){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_31776);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31846){var ex__30504__auto__ = e31846;
var statearr_31847_33812 = state_31776;
(statearr_31847_33812[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_31776[(4)]))){
var statearr_31854_33814 = state_31776;
(statearr_31854_33814[(1)] = cljs.core.first((state_31776[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33816 = state_31776;
state_31776 = G__33816;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_31776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_31776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_31867 = f__30866__auto__();
(statearr_31867[(6)] = c__30865__auto__);

return statearr_31867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));

return c__30865__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31900 = arguments.length;
switch (G__31900) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33818 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33818(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33819 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33819(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33821 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33821(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33825 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33825(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32051 = (function (ch,cs,meta32052){
this.ch = ch;
this.cs = cs;
this.meta32052 = meta32052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32053,meta32052__$1){
var self__ = this;
var _32053__$1 = this;
return (new cljs.core.async.t_cljs$core$async32051(self__.ch,self__.cs,meta32052__$1));
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32053){
var self__ = this;
var _32053__$1 = this;
return self__.meta32052;
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32052","meta32052",1744387682,null)], null);
}));

(cljs.core.async.t_cljs$core$async32051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32051");

(cljs.core.async.t_cljs$core$async32051.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32051.
 */
cljs.core.async.__GT_t_cljs$core$async32051 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32051(ch__$1,cs__$1,meta32052){
return (new cljs.core.async.t_cljs$core$async32051(ch__$1,cs__$1,meta32052));
});

}

return (new cljs.core.async.t_cljs$core$async32051(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30865__auto___33826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_32209){
var state_val_32210 = (state_32209[(1)]);
if((state_val_32210 === (7))){
var inst_32205 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32211_33830 = state_32209__$1;
(statearr_32211_33830[(2)] = inst_32205);

(statearr_32211_33830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (20))){
var inst_32110 = (state_32209[(7)]);
var inst_32122 = cljs.core.first(inst_32110);
var inst_32123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32122,(0),null);
var inst_32124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32122,(1),null);
var state_32209__$1 = (function (){var statearr_32212 = state_32209;
(statearr_32212[(8)] = inst_32123);

return statearr_32212;
})();
if(cljs.core.truth_(inst_32124)){
var statearr_32213_33831 = state_32209__$1;
(statearr_32213_33831[(1)] = (22));

} else {
var statearr_32214_33832 = state_32209__$1;
(statearr_32214_33832[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (27))){
var inst_32152 = (state_32209[(9)]);
var inst_32079 = (state_32209[(10)]);
var inst_32159 = (state_32209[(11)]);
var inst_32154 = (state_32209[(12)]);
var inst_32159__$1 = cljs.core._nth(inst_32152,inst_32154);
var inst_32160 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32159__$1,inst_32079,done);
var state_32209__$1 = (function (){var statearr_32215 = state_32209;
(statearr_32215[(11)] = inst_32159__$1);

return statearr_32215;
})();
if(cljs.core.truth_(inst_32160)){
var statearr_32216_33833 = state_32209__$1;
(statearr_32216_33833[(1)] = (30));

} else {
var statearr_32217_33834 = state_32209__$1;
(statearr_32217_33834[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (1))){
var state_32209__$1 = state_32209;
var statearr_32218_33835 = state_32209__$1;
(statearr_32218_33835[(2)] = null);

(statearr_32218_33835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (24))){
var inst_32110 = (state_32209[(7)]);
var inst_32129 = (state_32209[(2)]);
var inst_32130 = cljs.core.next(inst_32110);
var inst_32088 = inst_32130;
var inst_32089 = null;
var inst_32090 = (0);
var inst_32091 = (0);
var state_32209__$1 = (function (){var statearr_32219 = state_32209;
(statearr_32219[(13)] = inst_32091);

(statearr_32219[(14)] = inst_32129);

(statearr_32219[(15)] = inst_32089);

(statearr_32219[(16)] = inst_32088);

(statearr_32219[(17)] = inst_32090);

return statearr_32219;
})();
var statearr_32220_33836 = state_32209__$1;
(statearr_32220_33836[(2)] = null);

(statearr_32220_33836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (39))){
var state_32209__$1 = state_32209;
var statearr_32224_33837 = state_32209__$1;
(statearr_32224_33837[(2)] = null);

(statearr_32224_33837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (4))){
var inst_32079 = (state_32209[(10)]);
var inst_32079__$1 = (state_32209[(2)]);
var inst_32080 = (inst_32079__$1 == null);
var state_32209__$1 = (function (){var statearr_32225 = state_32209;
(statearr_32225[(10)] = inst_32079__$1);

return statearr_32225;
})();
if(cljs.core.truth_(inst_32080)){
var statearr_32226_33838 = state_32209__$1;
(statearr_32226_33838[(1)] = (5));

} else {
var statearr_32227_33839 = state_32209__$1;
(statearr_32227_33839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (15))){
var inst_32091 = (state_32209[(13)]);
var inst_32089 = (state_32209[(15)]);
var inst_32088 = (state_32209[(16)]);
var inst_32090 = (state_32209[(17)]);
var inst_32106 = (state_32209[(2)]);
var inst_32107 = (inst_32091 + (1));
var tmp32221 = inst_32089;
var tmp32222 = inst_32088;
var tmp32223 = inst_32090;
var inst_32088__$1 = tmp32222;
var inst_32089__$1 = tmp32221;
var inst_32090__$1 = tmp32223;
var inst_32091__$1 = inst_32107;
var state_32209__$1 = (function (){var statearr_32228 = state_32209;
(statearr_32228[(18)] = inst_32106);

(statearr_32228[(13)] = inst_32091__$1);

(statearr_32228[(15)] = inst_32089__$1);

(statearr_32228[(16)] = inst_32088__$1);

(statearr_32228[(17)] = inst_32090__$1);

return statearr_32228;
})();
var statearr_32229_33840 = state_32209__$1;
(statearr_32229_33840[(2)] = null);

(statearr_32229_33840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (21))){
var inst_32133 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32233_33841 = state_32209__$1;
(statearr_32233_33841[(2)] = inst_32133);

(statearr_32233_33841[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (31))){
var inst_32159 = (state_32209[(11)]);
var inst_32163 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32159);
var state_32209__$1 = state_32209;
var statearr_32234_33842 = state_32209__$1;
(statearr_32234_33842[(2)] = inst_32163);

(statearr_32234_33842[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (32))){
var inst_32153 = (state_32209[(19)]);
var inst_32152 = (state_32209[(9)]);
var inst_32154 = (state_32209[(12)]);
var inst_32151 = (state_32209[(20)]);
var inst_32165 = (state_32209[(2)]);
var inst_32166 = (inst_32154 + (1));
var tmp32230 = inst_32153;
var tmp32231 = inst_32152;
var tmp32232 = inst_32151;
var inst_32151__$1 = tmp32232;
var inst_32152__$1 = tmp32231;
var inst_32153__$1 = tmp32230;
var inst_32154__$1 = inst_32166;
var state_32209__$1 = (function (){var statearr_32235 = state_32209;
(statearr_32235[(19)] = inst_32153__$1);

(statearr_32235[(9)] = inst_32152__$1);

(statearr_32235[(12)] = inst_32154__$1);

(statearr_32235[(20)] = inst_32151__$1);

(statearr_32235[(21)] = inst_32165);

return statearr_32235;
})();
var statearr_32236_33843 = state_32209__$1;
(statearr_32236_33843[(2)] = null);

(statearr_32236_33843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (40))){
var inst_32178 = (state_32209[(22)]);
var inst_32182 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32178);
var state_32209__$1 = state_32209;
var statearr_32237_33844 = state_32209__$1;
(statearr_32237_33844[(2)] = inst_32182);

(statearr_32237_33844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (33))){
var inst_32169 = (state_32209[(23)]);
var inst_32171 = cljs.core.chunked_seq_QMARK_(inst_32169);
var state_32209__$1 = state_32209;
if(inst_32171){
var statearr_32238_33845 = state_32209__$1;
(statearr_32238_33845[(1)] = (36));

} else {
var statearr_32239_33846 = state_32209__$1;
(statearr_32239_33846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (13))){
var inst_32100 = (state_32209[(24)]);
var inst_32103 = cljs.core.async.close_BANG_(inst_32100);
var state_32209__$1 = state_32209;
var statearr_32240_33847 = state_32209__$1;
(statearr_32240_33847[(2)] = inst_32103);

(statearr_32240_33847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (22))){
var inst_32123 = (state_32209[(8)]);
var inst_32126 = cljs.core.async.close_BANG_(inst_32123);
var state_32209__$1 = state_32209;
var statearr_32241_33848 = state_32209__$1;
(statearr_32241_33848[(2)] = inst_32126);

(statearr_32241_33848[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (36))){
var inst_32169 = (state_32209[(23)]);
var inst_32173 = cljs.core.chunk_first(inst_32169);
var inst_32174 = cljs.core.chunk_rest(inst_32169);
var inst_32175 = cljs.core.count(inst_32173);
var inst_32151 = inst_32174;
var inst_32152 = inst_32173;
var inst_32153 = inst_32175;
var inst_32154 = (0);
var state_32209__$1 = (function (){var statearr_32242 = state_32209;
(statearr_32242[(19)] = inst_32153);

(statearr_32242[(9)] = inst_32152);

(statearr_32242[(12)] = inst_32154);

(statearr_32242[(20)] = inst_32151);

return statearr_32242;
})();
var statearr_32243_33849 = state_32209__$1;
(statearr_32243_33849[(2)] = null);

(statearr_32243_33849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (41))){
var inst_32169 = (state_32209[(23)]);
var inst_32184 = (state_32209[(2)]);
var inst_32185 = cljs.core.next(inst_32169);
var inst_32151 = inst_32185;
var inst_32152 = null;
var inst_32153 = (0);
var inst_32154 = (0);
var state_32209__$1 = (function (){var statearr_32244 = state_32209;
(statearr_32244[(19)] = inst_32153);

(statearr_32244[(25)] = inst_32184);

(statearr_32244[(9)] = inst_32152);

(statearr_32244[(12)] = inst_32154);

(statearr_32244[(20)] = inst_32151);

return statearr_32244;
})();
var statearr_32245_33850 = state_32209__$1;
(statearr_32245_33850[(2)] = null);

(statearr_32245_33850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (43))){
var state_32209__$1 = state_32209;
var statearr_32246_33851 = state_32209__$1;
(statearr_32246_33851[(2)] = null);

(statearr_32246_33851[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (29))){
var inst_32193 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32247_33852 = state_32209__$1;
(statearr_32247_33852[(2)] = inst_32193);

(statearr_32247_33852[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (44))){
var inst_32202 = (state_32209[(2)]);
var state_32209__$1 = (function (){var statearr_32248 = state_32209;
(statearr_32248[(26)] = inst_32202);

return statearr_32248;
})();
var statearr_32249_33853 = state_32209__$1;
(statearr_32249_33853[(2)] = null);

(statearr_32249_33853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (6))){
var inst_32143 = (state_32209[(27)]);
var inst_32142 = cljs.core.deref(cs);
var inst_32143__$1 = cljs.core.keys(inst_32142);
var inst_32144 = cljs.core.count(inst_32143__$1);
var inst_32145 = cljs.core.reset_BANG_(dctr,inst_32144);
var inst_32150 = cljs.core.seq(inst_32143__$1);
var inst_32151 = inst_32150;
var inst_32152 = null;
var inst_32153 = (0);
var inst_32154 = (0);
var state_32209__$1 = (function (){var statearr_32250 = state_32209;
(statearr_32250[(19)] = inst_32153);

(statearr_32250[(27)] = inst_32143__$1);

(statearr_32250[(9)] = inst_32152);

(statearr_32250[(28)] = inst_32145);

(statearr_32250[(12)] = inst_32154);

(statearr_32250[(20)] = inst_32151);

return statearr_32250;
})();
var statearr_32251_33854 = state_32209__$1;
(statearr_32251_33854[(2)] = null);

(statearr_32251_33854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (28))){
var inst_32151 = (state_32209[(20)]);
var inst_32169 = (state_32209[(23)]);
var inst_32169__$1 = cljs.core.seq(inst_32151);
var state_32209__$1 = (function (){var statearr_32252 = state_32209;
(statearr_32252[(23)] = inst_32169__$1);

return statearr_32252;
})();
if(inst_32169__$1){
var statearr_32253_33855 = state_32209__$1;
(statearr_32253_33855[(1)] = (33));

} else {
var statearr_32254_33856 = state_32209__$1;
(statearr_32254_33856[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (25))){
var inst_32153 = (state_32209[(19)]);
var inst_32154 = (state_32209[(12)]);
var inst_32156 = (inst_32154 < inst_32153);
var inst_32157 = inst_32156;
var state_32209__$1 = state_32209;
if(cljs.core.truth_(inst_32157)){
var statearr_32255_33857 = state_32209__$1;
(statearr_32255_33857[(1)] = (27));

} else {
var statearr_32256_33858 = state_32209__$1;
(statearr_32256_33858[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (34))){
var state_32209__$1 = state_32209;
var statearr_32257_33859 = state_32209__$1;
(statearr_32257_33859[(2)] = null);

(statearr_32257_33859[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (17))){
var state_32209__$1 = state_32209;
var statearr_32258_33860 = state_32209__$1;
(statearr_32258_33860[(2)] = null);

(statearr_32258_33860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (3))){
var inst_32207 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32209__$1,inst_32207);
} else {
if((state_val_32210 === (12))){
var inst_32138 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32259_33861 = state_32209__$1;
(statearr_32259_33861[(2)] = inst_32138);

(statearr_32259_33861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (2))){
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32209__$1,(4),ch);
} else {
if((state_val_32210 === (23))){
var state_32209__$1 = state_32209;
var statearr_32260_33862 = state_32209__$1;
(statearr_32260_33862[(2)] = null);

(statearr_32260_33862[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (35))){
var inst_32191 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32261_33863 = state_32209__$1;
(statearr_32261_33863[(2)] = inst_32191);

(statearr_32261_33863[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (19))){
var inst_32110 = (state_32209[(7)]);
var inst_32114 = cljs.core.chunk_first(inst_32110);
var inst_32115 = cljs.core.chunk_rest(inst_32110);
var inst_32116 = cljs.core.count(inst_32114);
var inst_32088 = inst_32115;
var inst_32089 = inst_32114;
var inst_32090 = inst_32116;
var inst_32091 = (0);
var state_32209__$1 = (function (){var statearr_32262 = state_32209;
(statearr_32262[(13)] = inst_32091);

(statearr_32262[(15)] = inst_32089);

(statearr_32262[(16)] = inst_32088);

(statearr_32262[(17)] = inst_32090);

return statearr_32262;
})();
var statearr_32263_33864 = state_32209__$1;
(statearr_32263_33864[(2)] = null);

(statearr_32263_33864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (11))){
var inst_32088 = (state_32209[(16)]);
var inst_32110 = (state_32209[(7)]);
var inst_32110__$1 = cljs.core.seq(inst_32088);
var state_32209__$1 = (function (){var statearr_32264 = state_32209;
(statearr_32264[(7)] = inst_32110__$1);

return statearr_32264;
})();
if(inst_32110__$1){
var statearr_32265_33865 = state_32209__$1;
(statearr_32265_33865[(1)] = (16));

} else {
var statearr_32266_33866 = state_32209__$1;
(statearr_32266_33866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (9))){
var inst_32140 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32267_33867 = state_32209__$1;
(statearr_32267_33867[(2)] = inst_32140);

(statearr_32267_33867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (5))){
var inst_32086 = cljs.core.deref(cs);
var inst_32087 = cljs.core.seq(inst_32086);
var inst_32088 = inst_32087;
var inst_32089 = null;
var inst_32090 = (0);
var inst_32091 = (0);
var state_32209__$1 = (function (){var statearr_32268 = state_32209;
(statearr_32268[(13)] = inst_32091);

(statearr_32268[(15)] = inst_32089);

(statearr_32268[(16)] = inst_32088);

(statearr_32268[(17)] = inst_32090);

return statearr_32268;
})();
var statearr_32269_33868 = state_32209__$1;
(statearr_32269_33868[(2)] = null);

(statearr_32269_33868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (14))){
var state_32209__$1 = state_32209;
var statearr_32270_33869 = state_32209__$1;
(statearr_32270_33869[(2)] = null);

(statearr_32270_33869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (45))){
var inst_32199 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32271_33870 = state_32209__$1;
(statearr_32271_33870[(2)] = inst_32199);

(statearr_32271_33870[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (26))){
var inst_32143 = (state_32209[(27)]);
var inst_32195 = (state_32209[(2)]);
var inst_32196 = cljs.core.seq(inst_32143);
var state_32209__$1 = (function (){var statearr_32272 = state_32209;
(statearr_32272[(29)] = inst_32195);

return statearr_32272;
})();
if(inst_32196){
var statearr_32273_33871 = state_32209__$1;
(statearr_32273_33871[(1)] = (42));

} else {
var statearr_32274_33872 = state_32209__$1;
(statearr_32274_33872[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (16))){
var inst_32110 = (state_32209[(7)]);
var inst_32112 = cljs.core.chunked_seq_QMARK_(inst_32110);
var state_32209__$1 = state_32209;
if(inst_32112){
var statearr_32275_33873 = state_32209__$1;
(statearr_32275_33873[(1)] = (19));

} else {
var statearr_32276_33874 = state_32209__$1;
(statearr_32276_33874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (38))){
var inst_32188 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32277_33875 = state_32209__$1;
(statearr_32277_33875[(2)] = inst_32188);

(statearr_32277_33875[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (30))){
var state_32209__$1 = state_32209;
var statearr_32278_33876 = state_32209__$1;
(statearr_32278_33876[(2)] = null);

(statearr_32278_33876[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (10))){
var inst_32091 = (state_32209[(13)]);
var inst_32089 = (state_32209[(15)]);
var inst_32099 = cljs.core._nth(inst_32089,inst_32091);
var inst_32100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32099,(0),null);
var inst_32101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32099,(1),null);
var state_32209__$1 = (function (){var statearr_32279 = state_32209;
(statearr_32279[(24)] = inst_32100);

return statearr_32279;
})();
if(cljs.core.truth_(inst_32101)){
var statearr_32280_33877 = state_32209__$1;
(statearr_32280_33877[(1)] = (13));

} else {
var statearr_32281_33878 = state_32209__$1;
(statearr_32281_33878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (18))){
var inst_32136 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32283_33879 = state_32209__$1;
(statearr_32283_33879[(2)] = inst_32136);

(statearr_32283_33879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (42))){
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32209__$1,(45),dchan);
} else {
if((state_val_32210 === (37))){
var inst_32079 = (state_32209[(10)]);
var inst_32178 = (state_32209[(22)]);
var inst_32169 = (state_32209[(23)]);
var inst_32178__$1 = cljs.core.first(inst_32169);
var inst_32179 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32178__$1,inst_32079,done);
var state_32209__$1 = (function (){var statearr_32284 = state_32209;
(statearr_32284[(22)] = inst_32178__$1);

return statearr_32284;
})();
if(cljs.core.truth_(inst_32179)){
var statearr_32285_33880 = state_32209__$1;
(statearr_32285_33880[(1)] = (39));

} else {
var statearr_32286_33881 = state_32209__$1;
(statearr_32286_33881[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (8))){
var inst_32091 = (state_32209[(13)]);
var inst_32090 = (state_32209[(17)]);
var inst_32093 = (inst_32091 < inst_32090);
var inst_32094 = inst_32093;
var state_32209__$1 = state_32209;
if(cljs.core.truth_(inst_32094)){
var statearr_32287_33882 = state_32209__$1;
(statearr_32287_33882[(1)] = (10));

} else {
var statearr_32288_33883 = state_32209__$1;
(statearr_32288_33883[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30501__auto__ = null;
var cljs$core$async$mult_$_state_machine__30501__auto____0 = (function (){
var statearr_32289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32289[(0)] = cljs$core$async$mult_$_state_machine__30501__auto__);

(statearr_32289[(1)] = (1));

return statearr_32289;
});
var cljs$core$async$mult_$_state_machine__30501__auto____1 = (function (state_32209){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_32209);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32290){var ex__30504__auto__ = e32290;
var statearr_32291_33884 = state_32209;
(statearr_32291_33884[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_32209[(4)]))){
var statearr_32292_33885 = state_32209;
(statearr_32292_33885[(1)] = cljs.core.first((state_32209[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33886 = state_32209;
state_32209 = G__33886;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30501__auto__ = function(state_32209){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30501__auto____1.call(this,state_32209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30501__auto____0;
cljs$core$async$mult_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30501__auto____1;
return cljs$core$async$mult_$_state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_32293 = f__30866__auto__();
(statearr_32293[(6)] = c__30865__auto___33826);

return statearr_32293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32295 = arguments.length;
switch (G__32295) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33888 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33888(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33889 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33889(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33890 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33890(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33891 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33891(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33892 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33892(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33893 = arguments.length;
var i__4819__auto___33894 = (0);
while(true){
if((i__4819__auto___33894 < len__4818__auto___33893)){
args__4824__auto__.push((arguments[i__4819__auto___33894]));

var G__33895 = (i__4819__auto___33894 + (1));
i__4819__auto___33894 = G__33895;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32302){
var map__32303 = p__32302;
var map__32303__$1 = cljs.core.__destructure_map(map__32303);
var opts = map__32303__$1;
var statearr_32304_33896 = state;
(statearr_32304_33896[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32305_33897 = state;
(statearr_32305_33897[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_32306_33898 = state;
(statearr_32306_33898[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32298){
var G__32299 = cljs.core.first(seq32298);
var seq32298__$1 = cljs.core.next(seq32298);
var G__32300 = cljs.core.first(seq32298__$1);
var seq32298__$2 = cljs.core.next(seq32298__$1);
var G__32301 = cljs.core.first(seq32298__$2);
var seq32298__$3 = cljs.core.next(seq32298__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32299,G__32300,G__32301,seq32298__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32307 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32308){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32308 = meta32308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32309,meta32308__$1){
var self__ = this;
var _32309__$1 = this;
return (new cljs.core.async.t_cljs$core$async32307(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32308__$1));
}));

(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32309){
var self__ = this;
var _32309__$1 = this;
return self__.meta32308;
}));

(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32308","meta32308",-1477013793,null)], null);
}));

(cljs.core.async.t_cljs$core$async32307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32307");

(cljs.core.async.t_cljs$core$async32307.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32307.
 */
cljs.core.async.__GT_t_cljs$core$async32307 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32307(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32308){
return (new cljs.core.async.t_cljs$core$async32307(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32308));
});

}

return (new cljs.core.async.t_cljs$core$async32307(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30865__auto___33904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_32388){
var state_val_32398 = (state_32388[(1)]);
if((state_val_32398 === (7))){
var inst_32343 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
if(cljs.core.truth_(inst_32343)){
var statearr_32402_33905 = state_32388__$1;
(statearr_32402_33905[(1)] = (8));

} else {
var statearr_32403_33906 = state_32388__$1;
(statearr_32403_33906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (20))){
var inst_32336 = (state_32388[(7)]);
var state_32388__$1 = state_32388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32388__$1,(23),out,inst_32336);
} else {
if((state_val_32398 === (1))){
var inst_32316 = calc_state();
var inst_32317 = cljs.core.__destructure_map(inst_32316);
var inst_32319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32317,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32317,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32317,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32323 = inst_32316;
var state_32388__$1 = (function (){var statearr_32409 = state_32388;
(statearr_32409[(8)] = inst_32319);

(statearr_32409[(9)] = inst_32321);

(statearr_32409[(10)] = inst_32322);

(statearr_32409[(11)] = inst_32323);

return statearr_32409;
})();
var statearr_32410_33907 = state_32388__$1;
(statearr_32410_33907[(2)] = null);

(statearr_32410_33907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (24))){
var inst_32327 = (state_32388[(12)]);
var inst_32323 = inst_32327;
var state_32388__$1 = (function (){var statearr_32411 = state_32388;
(statearr_32411[(11)] = inst_32323);

return statearr_32411;
})();
var statearr_32412_33908 = state_32388__$1;
(statearr_32412_33908[(2)] = null);

(statearr_32412_33908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (4))){
var inst_32336 = (state_32388[(7)]);
var inst_32338 = (state_32388[(13)]);
var inst_32335 = (state_32388[(2)]);
var inst_32336__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32335,(0),null);
var inst_32337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32335,(1),null);
var inst_32338__$1 = (inst_32336__$1 == null);
var state_32388__$1 = (function (){var statearr_32423 = state_32388;
(statearr_32423[(14)] = inst_32337);

(statearr_32423[(7)] = inst_32336__$1);

(statearr_32423[(13)] = inst_32338__$1);

return statearr_32423;
})();
if(cljs.core.truth_(inst_32338__$1)){
var statearr_32425_33909 = state_32388__$1;
(statearr_32425_33909[(1)] = (5));

} else {
var statearr_32426_33910 = state_32388__$1;
(statearr_32426_33910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (15))){
var inst_32358 = (state_32388[(15)]);
var inst_32328 = (state_32388[(16)]);
var inst_32358__$1 = cljs.core.empty_QMARK_(inst_32328);
var state_32388__$1 = (function (){var statearr_32427 = state_32388;
(statearr_32427[(15)] = inst_32358__$1);

return statearr_32427;
})();
if(inst_32358__$1){
var statearr_32428_33911 = state_32388__$1;
(statearr_32428_33911[(1)] = (17));

} else {
var statearr_32429_33915 = state_32388__$1;
(statearr_32429_33915[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (21))){
var inst_32327 = (state_32388[(12)]);
var inst_32323 = inst_32327;
var state_32388__$1 = (function (){var statearr_32430 = state_32388;
(statearr_32430[(11)] = inst_32323);

return statearr_32430;
})();
var statearr_32431_33916 = state_32388__$1;
(statearr_32431_33916[(2)] = null);

(statearr_32431_33916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (13))){
var inst_32350 = (state_32388[(2)]);
var inst_32351 = calc_state();
var inst_32323 = inst_32351;
var state_32388__$1 = (function (){var statearr_32432 = state_32388;
(statearr_32432[(17)] = inst_32350);

(statearr_32432[(11)] = inst_32323);

return statearr_32432;
})();
var statearr_32433_33917 = state_32388__$1;
(statearr_32433_33917[(2)] = null);

(statearr_32433_33917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (22))){
var inst_32379 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
var statearr_32434_33918 = state_32388__$1;
(statearr_32434_33918[(2)] = inst_32379);

(statearr_32434_33918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (6))){
var inst_32337 = (state_32388[(14)]);
var inst_32341 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32337,change);
var state_32388__$1 = state_32388;
var statearr_32435_33919 = state_32388__$1;
(statearr_32435_33919[(2)] = inst_32341);

(statearr_32435_33919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (25))){
var state_32388__$1 = state_32388;
var statearr_32436_33920 = state_32388__$1;
(statearr_32436_33920[(2)] = null);

(statearr_32436_33920[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (17))){
var inst_32337 = (state_32388[(14)]);
var inst_32329 = (state_32388[(18)]);
var inst_32360 = (inst_32329.cljs$core$IFn$_invoke$arity$1 ? inst_32329.cljs$core$IFn$_invoke$arity$1(inst_32337) : inst_32329.call(null,inst_32337));
var inst_32361 = cljs.core.not(inst_32360);
var state_32388__$1 = state_32388;
var statearr_32437_33921 = state_32388__$1;
(statearr_32437_33921[(2)] = inst_32361);

(statearr_32437_33921[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (3))){
var inst_32384 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32388__$1,inst_32384);
} else {
if((state_val_32398 === (12))){
var state_32388__$1 = state_32388;
var statearr_32439_33922 = state_32388__$1;
(statearr_32439_33922[(2)] = null);

(statearr_32439_33922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (2))){
var inst_32327 = (state_32388[(12)]);
var inst_32323 = (state_32388[(11)]);
var inst_32327__$1 = cljs.core.__destructure_map(inst_32323);
var inst_32328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32327__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32327__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32327__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32388__$1 = (function (){var statearr_32444 = state_32388;
(statearr_32444[(12)] = inst_32327__$1);

(statearr_32444[(16)] = inst_32328);

(statearr_32444[(18)] = inst_32329);

return statearr_32444;
})();
return cljs.core.async.ioc_alts_BANG_(state_32388__$1,(4),inst_32330);
} else {
if((state_val_32398 === (23))){
var inst_32370 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
if(cljs.core.truth_(inst_32370)){
var statearr_32449_33924 = state_32388__$1;
(statearr_32449_33924[(1)] = (24));

} else {
var statearr_32452_33925 = state_32388__$1;
(statearr_32452_33925[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (19))){
var inst_32364 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
var statearr_32453_33926 = state_32388__$1;
(statearr_32453_33926[(2)] = inst_32364);

(statearr_32453_33926[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (11))){
var inst_32337 = (state_32388[(14)]);
var inst_32347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32337);
var state_32388__$1 = state_32388;
var statearr_32454_33927 = state_32388__$1;
(statearr_32454_33927[(2)] = inst_32347);

(statearr_32454_33927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (9))){
var inst_32355 = (state_32388[(19)]);
var inst_32337 = (state_32388[(14)]);
var inst_32328 = (state_32388[(16)]);
var inst_32355__$1 = (inst_32328.cljs$core$IFn$_invoke$arity$1 ? inst_32328.cljs$core$IFn$_invoke$arity$1(inst_32337) : inst_32328.call(null,inst_32337));
var state_32388__$1 = (function (){var statearr_32455 = state_32388;
(statearr_32455[(19)] = inst_32355__$1);

return statearr_32455;
})();
if(cljs.core.truth_(inst_32355__$1)){
var statearr_32456_33928 = state_32388__$1;
(statearr_32456_33928[(1)] = (14));

} else {
var statearr_32457_33929 = state_32388__$1;
(statearr_32457_33929[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (5))){
var inst_32338 = (state_32388[(13)]);
var state_32388__$1 = state_32388;
var statearr_32460_33930 = state_32388__$1;
(statearr_32460_33930[(2)] = inst_32338);

(statearr_32460_33930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (14))){
var inst_32355 = (state_32388[(19)]);
var state_32388__$1 = state_32388;
var statearr_32461_33931 = state_32388__$1;
(statearr_32461_33931[(2)] = inst_32355);

(statearr_32461_33931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (26))){
var inst_32375 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
var statearr_32462_33932 = state_32388__$1;
(statearr_32462_33932[(2)] = inst_32375);

(statearr_32462_33932[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (16))){
var inst_32366 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
if(cljs.core.truth_(inst_32366)){
var statearr_32463_33933 = state_32388__$1;
(statearr_32463_33933[(1)] = (20));

} else {
var statearr_32464_33934 = state_32388__$1;
(statearr_32464_33934[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (10))){
var inst_32381 = (state_32388[(2)]);
var state_32388__$1 = state_32388;
var statearr_32465_33935 = state_32388__$1;
(statearr_32465_33935[(2)] = inst_32381);

(statearr_32465_33935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (18))){
var inst_32358 = (state_32388[(15)]);
var state_32388__$1 = state_32388;
var statearr_32466_33936 = state_32388__$1;
(statearr_32466_33936[(2)] = inst_32358);

(statearr_32466_33936[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (8))){
var inst_32336 = (state_32388[(7)]);
var inst_32345 = (inst_32336 == null);
var state_32388__$1 = state_32388;
if(cljs.core.truth_(inst_32345)){
var statearr_32467_33937 = state_32388__$1;
(statearr_32467_33937[(1)] = (11));

} else {
var statearr_32468_33938 = state_32388__$1;
(statearr_32468_33938[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30501__auto__ = null;
var cljs$core$async$mix_$_state_machine__30501__auto____0 = (function (){
var statearr_32470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32470[(0)] = cljs$core$async$mix_$_state_machine__30501__auto__);

(statearr_32470[(1)] = (1));

return statearr_32470;
});
var cljs$core$async$mix_$_state_machine__30501__auto____1 = (function (state_32388){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_32388);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32471){var ex__30504__auto__ = e32471;
var statearr_32472_33939 = state_32388;
(statearr_32472_33939[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_32388[(4)]))){
var statearr_32473_33940 = state_32388;
(statearr_32473_33940[(1)] = cljs.core.first((state_32388[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33941 = state_32388;
state_32388 = G__33941;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30501__auto__ = function(state_32388){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30501__auto____1.call(this,state_32388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30501__auto____0;
cljs$core$async$mix_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30501__auto____1;
return cljs$core$async$mix_$_state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_32474 = f__30866__auto__();
(statearr_32474[(6)] = c__30865__auto___33904);

return statearr_32474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33950 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33950(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33951 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33951(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33952 = (function() {
var G__33953 = null;
var G__33953__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33953__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33953 = function(p,v){
switch(arguments.length){
case 1:
return G__33953__1.call(this,p);
case 2:
return G__33953__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33953.cljs$core$IFn$_invoke$arity$1 = G__33953__1;
G__33953.cljs$core$IFn$_invoke$arity$2 = G__33953__2;
return G__33953;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32506 = arguments.length;
switch (G__32506) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33952(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33952(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32514 = arguments.length;
switch (G__32514) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32510_SHARP_){
if(cljs.core.truth_((p1__32510_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32510_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32510_SHARP_.call(null,topic)))){
return p1__32510_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32510_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32516 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32517){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32517 = meta32517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32518,meta32517__$1){
var self__ = this;
var _32518__$1 = this;
return (new cljs.core.async.t_cljs$core$async32516(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32517__$1));
}));

(cljs.core.async.t_cljs$core$async32516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32518){
var self__ = this;
var _32518__$1 = this;
return self__.meta32517;
}));

(cljs.core.async.t_cljs$core$async32516.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32516.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32516.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32516.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32517","meta32517",532348301,null)], null);
}));

(cljs.core.async.t_cljs$core$async32516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32516");

(cljs.core.async.t_cljs$core$async32516.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32516.
 */
cljs.core.async.__GT_t_cljs$core$async32516 = (function cljs$core$async$__GT_t_cljs$core$async32516(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32517){
return (new cljs.core.async.t_cljs$core$async32516(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32517));
});

}

return (new cljs.core.async.t_cljs$core$async32516(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30865__auto___33956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_32617){
var state_val_32619 = (state_32617[(1)]);
if((state_val_32619 === (7))){
var inst_32613 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32620_33957 = state_32617__$1;
(statearr_32620_33957[(2)] = inst_32613);

(statearr_32620_33957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (20))){
var state_32617__$1 = state_32617;
var statearr_32621_33958 = state_32617__$1;
(statearr_32621_33958[(2)] = null);

(statearr_32621_33958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (1))){
var state_32617__$1 = state_32617;
var statearr_32622_33959 = state_32617__$1;
(statearr_32622_33959[(2)] = null);

(statearr_32622_33959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (24))){
var inst_32596 = (state_32617[(7)]);
var inst_32605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32596);
var state_32617__$1 = state_32617;
var statearr_32623_33960 = state_32617__$1;
(statearr_32623_33960[(2)] = inst_32605);

(statearr_32623_33960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (4))){
var inst_32547 = (state_32617[(8)]);
var inst_32547__$1 = (state_32617[(2)]);
var inst_32548 = (inst_32547__$1 == null);
var state_32617__$1 = (function (){var statearr_32636 = state_32617;
(statearr_32636[(8)] = inst_32547__$1);

return statearr_32636;
})();
if(cljs.core.truth_(inst_32548)){
var statearr_32637_33962 = state_32617__$1;
(statearr_32637_33962[(1)] = (5));

} else {
var statearr_32638_33963 = state_32617__$1;
(statearr_32638_33963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (15))){
var inst_32590 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32647_33964 = state_32617__$1;
(statearr_32647_33964[(2)] = inst_32590);

(statearr_32647_33964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (21))){
var inst_32610 = (state_32617[(2)]);
var state_32617__$1 = (function (){var statearr_32649 = state_32617;
(statearr_32649[(9)] = inst_32610);

return statearr_32649;
})();
var statearr_32650_33966 = state_32617__$1;
(statearr_32650_33966[(2)] = null);

(statearr_32650_33966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (13))){
var inst_32572 = (state_32617[(10)]);
var inst_32574 = cljs.core.chunked_seq_QMARK_(inst_32572);
var state_32617__$1 = state_32617;
if(inst_32574){
var statearr_32651_33967 = state_32617__$1;
(statearr_32651_33967[(1)] = (16));

} else {
var statearr_32652_33968 = state_32617__$1;
(statearr_32652_33968[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (22))){
var inst_32602 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
if(cljs.core.truth_(inst_32602)){
var statearr_32653_33969 = state_32617__$1;
(statearr_32653_33969[(1)] = (23));

} else {
var statearr_32654_33970 = state_32617__$1;
(statearr_32654_33970[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (6))){
var inst_32598 = (state_32617[(11)]);
var inst_32596 = (state_32617[(7)]);
var inst_32547 = (state_32617[(8)]);
var inst_32596__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32547) : topic_fn.call(null,inst_32547));
var inst_32597 = cljs.core.deref(mults);
var inst_32598__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32597,inst_32596__$1);
var state_32617__$1 = (function (){var statearr_32655 = state_32617;
(statearr_32655[(11)] = inst_32598__$1);

(statearr_32655[(7)] = inst_32596__$1);

return statearr_32655;
})();
if(cljs.core.truth_(inst_32598__$1)){
var statearr_32656_33971 = state_32617__$1;
(statearr_32656_33971[(1)] = (19));

} else {
var statearr_32657_33972 = state_32617__$1;
(statearr_32657_33972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (25))){
var inst_32607 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32658_33973 = state_32617__$1;
(statearr_32658_33973[(2)] = inst_32607);

(statearr_32658_33973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (17))){
var inst_32572 = (state_32617[(10)]);
var inst_32581 = cljs.core.first(inst_32572);
var inst_32582 = cljs.core.async.muxch_STAR_(inst_32581);
var inst_32583 = cljs.core.async.close_BANG_(inst_32582);
var inst_32584 = cljs.core.next(inst_32572);
var inst_32558 = inst_32584;
var inst_32559 = null;
var inst_32560 = (0);
var inst_32561 = (0);
var state_32617__$1 = (function (){var statearr_32660 = state_32617;
(statearr_32660[(12)] = inst_32559);

(statearr_32660[(13)] = inst_32583);

(statearr_32660[(14)] = inst_32560);

(statearr_32660[(15)] = inst_32561);

(statearr_32660[(16)] = inst_32558);

return statearr_32660;
})();
var statearr_32661_33982 = state_32617__$1;
(statearr_32661_33982[(2)] = null);

(statearr_32661_33982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (3))){
var inst_32615 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32617__$1,inst_32615);
} else {
if((state_val_32619 === (12))){
var inst_32592 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32662_33983 = state_32617__$1;
(statearr_32662_33983[(2)] = inst_32592);

(statearr_32662_33983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (2))){
var state_32617__$1 = state_32617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32617__$1,(4),ch);
} else {
if((state_val_32619 === (23))){
var state_32617__$1 = state_32617;
var statearr_32663_33984 = state_32617__$1;
(statearr_32663_33984[(2)] = null);

(statearr_32663_33984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (19))){
var inst_32598 = (state_32617[(11)]);
var inst_32547 = (state_32617[(8)]);
var inst_32600 = cljs.core.async.muxch_STAR_(inst_32598);
var state_32617__$1 = state_32617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32617__$1,(22),inst_32600,inst_32547);
} else {
if((state_val_32619 === (11))){
var inst_32572 = (state_32617[(10)]);
var inst_32558 = (state_32617[(16)]);
var inst_32572__$1 = cljs.core.seq(inst_32558);
var state_32617__$1 = (function (){var statearr_32664 = state_32617;
(statearr_32664[(10)] = inst_32572__$1);

return statearr_32664;
})();
if(inst_32572__$1){
var statearr_32665_33991 = state_32617__$1;
(statearr_32665_33991[(1)] = (13));

} else {
var statearr_32666_33992 = state_32617__$1;
(statearr_32666_33992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (9))){
var inst_32594 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32667_33999 = state_32617__$1;
(statearr_32667_33999[(2)] = inst_32594);

(statearr_32667_33999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (5))){
var inst_32554 = cljs.core.deref(mults);
var inst_32555 = cljs.core.vals(inst_32554);
var inst_32556 = cljs.core.seq(inst_32555);
var inst_32558 = inst_32556;
var inst_32559 = null;
var inst_32560 = (0);
var inst_32561 = (0);
var state_32617__$1 = (function (){var statearr_32668 = state_32617;
(statearr_32668[(12)] = inst_32559);

(statearr_32668[(14)] = inst_32560);

(statearr_32668[(15)] = inst_32561);

(statearr_32668[(16)] = inst_32558);

return statearr_32668;
})();
var statearr_32669_34000 = state_32617__$1;
(statearr_32669_34000[(2)] = null);

(statearr_32669_34000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (14))){
var state_32617__$1 = state_32617;
var statearr_32674_34001 = state_32617__$1;
(statearr_32674_34001[(2)] = null);

(statearr_32674_34001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (16))){
var inst_32572 = (state_32617[(10)]);
var inst_32576 = cljs.core.chunk_first(inst_32572);
var inst_32577 = cljs.core.chunk_rest(inst_32572);
var inst_32578 = cljs.core.count(inst_32576);
var inst_32558 = inst_32577;
var inst_32559 = inst_32576;
var inst_32560 = inst_32578;
var inst_32561 = (0);
var state_32617__$1 = (function (){var statearr_32675 = state_32617;
(statearr_32675[(12)] = inst_32559);

(statearr_32675[(14)] = inst_32560);

(statearr_32675[(15)] = inst_32561);

(statearr_32675[(16)] = inst_32558);

return statearr_32675;
})();
var statearr_32676_34009 = state_32617__$1;
(statearr_32676_34009[(2)] = null);

(statearr_32676_34009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (10))){
var inst_32559 = (state_32617[(12)]);
var inst_32560 = (state_32617[(14)]);
var inst_32561 = (state_32617[(15)]);
var inst_32558 = (state_32617[(16)]);
var inst_32566 = cljs.core._nth(inst_32559,inst_32561);
var inst_32567 = cljs.core.async.muxch_STAR_(inst_32566);
var inst_32568 = cljs.core.async.close_BANG_(inst_32567);
var inst_32569 = (inst_32561 + (1));
var tmp32671 = inst_32559;
var tmp32672 = inst_32560;
var tmp32673 = inst_32558;
var inst_32558__$1 = tmp32673;
var inst_32559__$1 = tmp32671;
var inst_32560__$1 = tmp32672;
var inst_32561__$1 = inst_32569;
var state_32617__$1 = (function (){var statearr_32678 = state_32617;
(statearr_32678[(17)] = inst_32568);

(statearr_32678[(12)] = inst_32559__$1);

(statearr_32678[(14)] = inst_32560__$1);

(statearr_32678[(15)] = inst_32561__$1);

(statearr_32678[(16)] = inst_32558__$1);

return statearr_32678;
})();
var statearr_32679_34027 = state_32617__$1;
(statearr_32679_34027[(2)] = null);

(statearr_32679_34027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (18))){
var inst_32587 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32680_34031 = state_32617__$1;
(statearr_32680_34031[(2)] = inst_32587);

(statearr_32680_34031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (8))){
var inst_32560 = (state_32617[(14)]);
var inst_32561 = (state_32617[(15)]);
var inst_32563 = (inst_32561 < inst_32560);
var inst_32564 = inst_32563;
var state_32617__$1 = state_32617;
if(cljs.core.truth_(inst_32564)){
var statearr_32681_34032 = state_32617__$1;
(statearr_32681_34032[(1)] = (10));

} else {
var statearr_32682_34033 = state_32617__$1;
(statearr_32682_34033[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_32683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32683[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_32683[(1)] = (1));

return statearr_32683;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32617){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_32617);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32684){var ex__30504__auto__ = e32684;
var statearr_32685_34043 = state_32617;
(statearr_32685_34043[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_32617[(4)]))){
var statearr_32686_34044 = state_32617;
(statearr_32686_34044[(1)] = cljs.core.first((state_32617[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34045 = state_32617;
state_32617 = G__34045;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_32687 = f__30866__auto__();
(statearr_32687[(6)] = c__30865__auto___33956);

return statearr_32687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32690 = arguments.length;
switch (G__32690) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32693 = arguments.length;
switch (G__32693) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32696 = arguments.length;
switch (G__32696) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30865__auto___34058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_32741){
var state_val_32742 = (state_32741[(1)]);
if((state_val_32742 === (7))){
var state_32741__$1 = state_32741;
var statearr_32744_34063 = state_32741__$1;
(statearr_32744_34063[(2)] = null);

(statearr_32744_34063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (1))){
var state_32741__$1 = state_32741;
var statearr_32745_34064 = state_32741__$1;
(statearr_32745_34064[(2)] = null);

(statearr_32745_34064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (4))){
var inst_32701 = (state_32741[(7)]);
var inst_32700 = (state_32741[(8)]);
var inst_32703 = (inst_32701 < inst_32700);
var state_32741__$1 = state_32741;
if(cljs.core.truth_(inst_32703)){
var statearr_32746_34065 = state_32741__$1;
(statearr_32746_34065[(1)] = (6));

} else {
var statearr_32747_34066 = state_32741__$1;
(statearr_32747_34066[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (15))){
var inst_32727 = (state_32741[(9)]);
var inst_32732 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32727);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32741__$1,(17),out,inst_32732);
} else {
if((state_val_32742 === (13))){
var inst_32727 = (state_32741[(9)]);
var inst_32727__$1 = (state_32741[(2)]);
var inst_32728 = cljs.core.some(cljs.core.nil_QMARK_,inst_32727__$1);
var state_32741__$1 = (function (){var statearr_32748 = state_32741;
(statearr_32748[(9)] = inst_32727__$1);

return statearr_32748;
})();
if(cljs.core.truth_(inst_32728)){
var statearr_32750_34067 = state_32741__$1;
(statearr_32750_34067[(1)] = (14));

} else {
var statearr_32751_34068 = state_32741__$1;
(statearr_32751_34068[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (6))){
var state_32741__$1 = state_32741;
var statearr_32752_34069 = state_32741__$1;
(statearr_32752_34069[(2)] = null);

(statearr_32752_34069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (17))){
var inst_32734 = (state_32741[(2)]);
var state_32741__$1 = (function (){var statearr_32755 = state_32741;
(statearr_32755[(10)] = inst_32734);

return statearr_32755;
})();
var statearr_32756_34070 = state_32741__$1;
(statearr_32756_34070[(2)] = null);

(statearr_32756_34070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (3))){
var inst_32739 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32741__$1,inst_32739);
} else {
if((state_val_32742 === (12))){
var _ = (function (){var statearr_32757 = state_32741;
(statearr_32757[(4)] = cljs.core.rest((state_32741[(4)])));

return statearr_32757;
})();
var state_32741__$1 = state_32741;
var ex32754 = (state_32741__$1[(2)]);
var statearr_32759_34071 = state_32741__$1;
(statearr_32759_34071[(5)] = ex32754);


if((ex32754 instanceof Object)){
var statearr_32760_34072 = state_32741__$1;
(statearr_32760_34072[(1)] = (11));

(statearr_32760_34072[(5)] = null);

} else {
throw ex32754;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (2))){
var inst_32699 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32700 = cnt;
var inst_32701 = (0);
var state_32741__$1 = (function (){var statearr_32761 = state_32741;
(statearr_32761[(7)] = inst_32701);

(statearr_32761[(8)] = inst_32700);

(statearr_32761[(11)] = inst_32699);

return statearr_32761;
})();
var statearr_32762_34076 = state_32741__$1;
(statearr_32762_34076[(2)] = null);

(statearr_32762_34076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (11))){
var inst_32706 = (state_32741[(2)]);
var inst_32707 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32741__$1 = (function (){var statearr_32763 = state_32741;
(statearr_32763[(12)] = inst_32706);

return statearr_32763;
})();
var statearr_32765_34077 = state_32741__$1;
(statearr_32765_34077[(2)] = inst_32707);

(statearr_32765_34077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (9))){
var inst_32701 = (state_32741[(7)]);
var _ = (function (){var statearr_32766 = state_32741;
(statearr_32766[(4)] = cljs.core.cons((12),(state_32741[(4)])));

return statearr_32766;
})();
var inst_32713 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32701) : chs__$1.call(null,inst_32701));
var inst_32714 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32701) : done.call(null,inst_32701));
var inst_32715 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32713,inst_32714);
var ___$1 = (function (){var statearr_32767 = state_32741;
(statearr_32767[(4)] = cljs.core.rest((state_32741[(4)])));

return statearr_32767;
})();
var state_32741__$1 = state_32741;
var statearr_32768_34081 = state_32741__$1;
(statearr_32768_34081[(2)] = inst_32715);

(statearr_32768_34081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (5))){
var inst_32725 = (state_32741[(2)]);
var state_32741__$1 = (function (){var statearr_32769 = state_32741;
(statearr_32769[(13)] = inst_32725);

return statearr_32769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32741__$1,(13),dchan);
} else {
if((state_val_32742 === (14))){
var inst_32730 = cljs.core.async.close_BANG_(out);
var state_32741__$1 = state_32741;
var statearr_32770_34082 = state_32741__$1;
(statearr_32770_34082[(2)] = inst_32730);

(statearr_32770_34082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (16))){
var inst_32737 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32771_34083 = state_32741__$1;
(statearr_32771_34083[(2)] = inst_32737);

(statearr_32771_34083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (10))){
var inst_32701 = (state_32741[(7)]);
var inst_32718 = (state_32741[(2)]);
var inst_32719 = (inst_32701 + (1));
var inst_32701__$1 = inst_32719;
var state_32741__$1 = (function (){var statearr_32773 = state_32741;
(statearr_32773[(7)] = inst_32701__$1);

(statearr_32773[(14)] = inst_32718);

return statearr_32773;
})();
var statearr_32774_34084 = state_32741__$1;
(statearr_32774_34084[(2)] = null);

(statearr_32774_34084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (8))){
var inst_32723 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32775_34085 = state_32741__$1;
(statearr_32775_34085[(2)] = inst_32723);

(statearr_32775_34085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_32776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32776[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_32776[(1)] = (1));

return statearr_32776;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32741){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_32741);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32777){var ex__30504__auto__ = e32777;
var statearr_32778_34089 = state_32741;
(statearr_32778_34089[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_32741[(4)]))){
var statearr_32779_34090 = state_32741;
(statearr_32779_34090[(1)] = cljs.core.first((state_32741[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34091 = state_32741;
state_32741 = G__34091;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_32781 = f__30866__auto__();
(statearr_32781[(6)] = c__30865__auto___34058);

return statearr_32781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32785 = arguments.length;
switch (G__32785) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30865__auto___34093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_32819){
var state_val_32820 = (state_32819[(1)]);
if((state_val_32820 === (7))){
var inst_32798 = (state_32819[(7)]);
var inst_32799 = (state_32819[(8)]);
var inst_32798__$1 = (state_32819[(2)]);
var inst_32799__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32798__$1,(0),null);
var inst_32800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32798__$1,(1),null);
var inst_32801 = (inst_32799__$1 == null);
var state_32819__$1 = (function (){var statearr_32821 = state_32819;
(statearr_32821[(7)] = inst_32798__$1);

(statearr_32821[(8)] = inst_32799__$1);

(statearr_32821[(9)] = inst_32800);

return statearr_32821;
})();
if(cljs.core.truth_(inst_32801)){
var statearr_32822_34094 = state_32819__$1;
(statearr_32822_34094[(1)] = (8));

} else {
var statearr_32823_34095 = state_32819__$1;
(statearr_32823_34095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (1))){
var inst_32787 = cljs.core.vec(chs);
var inst_32789 = inst_32787;
var state_32819__$1 = (function (){var statearr_32824 = state_32819;
(statearr_32824[(10)] = inst_32789);

return statearr_32824;
})();
var statearr_32825_34096 = state_32819__$1;
(statearr_32825_34096[(2)] = null);

(statearr_32825_34096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (4))){
var inst_32789 = (state_32819[(10)]);
var state_32819__$1 = state_32819;
return cljs.core.async.ioc_alts_BANG_(state_32819__$1,(7),inst_32789);
} else {
if((state_val_32820 === (6))){
var inst_32815 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32826_34097 = state_32819__$1;
(statearr_32826_34097[(2)] = inst_32815);

(statearr_32826_34097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (3))){
var inst_32817 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32819__$1,inst_32817);
} else {
if((state_val_32820 === (2))){
var inst_32789 = (state_32819[(10)]);
var inst_32791 = cljs.core.count(inst_32789);
var inst_32792 = (inst_32791 > (0));
var state_32819__$1 = state_32819;
if(cljs.core.truth_(inst_32792)){
var statearr_32828_34099 = state_32819__$1;
(statearr_32828_34099[(1)] = (4));

} else {
var statearr_32829_34100 = state_32819__$1;
(statearr_32829_34100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (11))){
var inst_32789 = (state_32819[(10)]);
var inst_32808 = (state_32819[(2)]);
var tmp32827 = inst_32789;
var inst_32789__$1 = tmp32827;
var state_32819__$1 = (function (){var statearr_32830 = state_32819;
(statearr_32830[(11)] = inst_32808);

(statearr_32830[(10)] = inst_32789__$1);

return statearr_32830;
})();
var statearr_32831_34101 = state_32819__$1;
(statearr_32831_34101[(2)] = null);

(statearr_32831_34101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (9))){
var inst_32799 = (state_32819[(8)]);
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32819__$1,(11),out,inst_32799);
} else {
if((state_val_32820 === (5))){
var inst_32813 = cljs.core.async.close_BANG_(out);
var state_32819__$1 = state_32819;
var statearr_32833_34102 = state_32819__$1;
(statearr_32833_34102[(2)] = inst_32813);

(statearr_32833_34102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (10))){
var inst_32811 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32834_34103 = state_32819__$1;
(statearr_32834_34103[(2)] = inst_32811);

(statearr_32834_34103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (8))){
var inst_32798 = (state_32819[(7)]);
var inst_32799 = (state_32819[(8)]);
var inst_32800 = (state_32819[(9)]);
var inst_32789 = (state_32819[(10)]);
var inst_32803 = (function (){var cs = inst_32789;
var vec__32794 = inst_32798;
var v = inst_32799;
var c = inst_32800;
return (function (p1__32783_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32783_SHARP_);
});
})();
var inst_32804 = cljs.core.filterv(inst_32803,inst_32789);
var inst_32789__$1 = inst_32804;
var state_32819__$1 = (function (){var statearr_32835 = state_32819;
(statearr_32835[(10)] = inst_32789__$1);

return statearr_32835;
})();
var statearr_32836_34104 = state_32819__$1;
(statearr_32836_34104[(2)] = null);

(statearr_32836_34104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_32837 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32837[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_32837[(1)] = (1));

return statearr_32837;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32819){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_32819);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32838){var ex__30504__auto__ = e32838;
var statearr_32839_34105 = state_32819;
(statearr_32839_34105[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_32819[(4)]))){
var statearr_32841_34106 = state_32819;
(statearr_32841_34106[(1)] = cljs.core.first((state_32819[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34107 = state_32819;
state_32819 = G__34107;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_32842 = f__30866__auto__();
(statearr_32842[(6)] = c__30865__auto___34093);

return statearr_32842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32845 = arguments.length;
switch (G__32845) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30865__auto___34109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_32870){
var state_val_32871 = (state_32870[(1)]);
if((state_val_32871 === (7))){
var inst_32852 = (state_32870[(7)]);
var inst_32852__$1 = (state_32870[(2)]);
var inst_32853 = (inst_32852__$1 == null);
var inst_32854 = cljs.core.not(inst_32853);
var state_32870__$1 = (function (){var statearr_32872 = state_32870;
(statearr_32872[(7)] = inst_32852__$1);

return statearr_32872;
})();
if(inst_32854){
var statearr_32873_34110 = state_32870__$1;
(statearr_32873_34110[(1)] = (8));

} else {
var statearr_32874_34111 = state_32870__$1;
(statearr_32874_34111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (1))){
var inst_32847 = (0);
var state_32870__$1 = (function (){var statearr_32876 = state_32870;
(statearr_32876[(8)] = inst_32847);

return statearr_32876;
})();
var statearr_32877_34112 = state_32870__$1;
(statearr_32877_34112[(2)] = null);

(statearr_32877_34112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (4))){
var state_32870__$1 = state_32870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32870__$1,(7),ch);
} else {
if((state_val_32871 === (6))){
var inst_32865 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32878_34113 = state_32870__$1;
(statearr_32878_34113[(2)] = inst_32865);

(statearr_32878_34113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (3))){
var inst_32867 = (state_32870[(2)]);
var inst_32868 = cljs.core.async.close_BANG_(out);
var state_32870__$1 = (function (){var statearr_32879 = state_32870;
(statearr_32879[(9)] = inst_32867);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32870__$1,inst_32868);
} else {
if((state_val_32871 === (2))){
var inst_32847 = (state_32870[(8)]);
var inst_32849 = (inst_32847 < n);
var state_32870__$1 = state_32870;
if(cljs.core.truth_(inst_32849)){
var statearr_32880_34114 = state_32870__$1;
(statearr_32880_34114[(1)] = (4));

} else {
var statearr_32881_34115 = state_32870__$1;
(statearr_32881_34115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (11))){
var inst_32847 = (state_32870[(8)]);
var inst_32857 = (state_32870[(2)]);
var inst_32858 = (inst_32847 + (1));
var inst_32847__$1 = inst_32858;
var state_32870__$1 = (function (){var statearr_32882 = state_32870;
(statearr_32882[(10)] = inst_32857);

(statearr_32882[(8)] = inst_32847__$1);

return statearr_32882;
})();
var statearr_32883_34116 = state_32870__$1;
(statearr_32883_34116[(2)] = null);

(statearr_32883_34116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (9))){
var state_32870__$1 = state_32870;
var statearr_32885_34117 = state_32870__$1;
(statearr_32885_34117[(2)] = null);

(statearr_32885_34117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (5))){
var state_32870__$1 = state_32870;
var statearr_32886_34118 = state_32870__$1;
(statearr_32886_34118[(2)] = null);

(statearr_32886_34118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (10))){
var inst_32862 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32887_34119 = state_32870__$1;
(statearr_32887_34119[(2)] = inst_32862);

(statearr_32887_34119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (8))){
var inst_32852 = (state_32870[(7)]);
var state_32870__$1 = state_32870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32870__$1,(11),out,inst_32852);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_32888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32888[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_32888[(1)] = (1));

return statearr_32888;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32870){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_32870);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32889){var ex__30504__auto__ = e32889;
var statearr_32890_34120 = state_32870;
(statearr_32890_34120[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_32870[(4)]))){
var statearr_32891_34121 = state_32870;
(statearr_32891_34121[(1)] = cljs.core.first((state_32870[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34122 = state_32870;
state_32870 = G__34122;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_32892 = f__30866__auto__();
(statearr_32892[(6)] = c__30865__auto___34109);

return statearr_32892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32895 = (function (f,ch,meta32896){
this.f = f;
this.ch = ch;
this.meta32896 = meta32896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32897,meta32896__$1){
var self__ = this;
var _32897__$1 = this;
return (new cljs.core.async.t_cljs$core$async32895(self__.f,self__.ch,meta32896__$1));
}));

(cljs.core.async.t_cljs$core$async32895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32897){
var self__ = this;
var _32897__$1 = this;
return self__.meta32896;
}));

(cljs.core.async.t_cljs$core$async32895.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32895.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32895.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32900 = (function (f,ch,meta32896,_,fn1,meta32901){
this.f = f;
this.ch = ch;
this.meta32896 = meta32896;
this._ = _;
this.fn1 = fn1;
this.meta32901 = meta32901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32902,meta32901__$1){
var self__ = this;
var _32902__$1 = this;
return (new cljs.core.async.t_cljs$core$async32900(self__.f,self__.ch,self__.meta32896,self__._,self__.fn1,meta32901__$1));
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32902){
var self__ = this;
var _32902__$1 = this;
return self__.meta32901;
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32894_SHARP_){
var G__32904 = (((p1__32894_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32894_SHARP_) : self__.f.call(null,p1__32894_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32904) : f1.call(null,G__32904));
});
}));

(cljs.core.async.t_cljs$core$async32900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32896","meta32896",1995236277,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32895","cljs.core.async/t_cljs$core$async32895",1655553936,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32901","meta32901",-93370286,null)], null);
}));

(cljs.core.async.t_cljs$core$async32900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32900");

(cljs.core.async.t_cljs$core$async32900.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32900.
 */
cljs.core.async.__GT_t_cljs$core$async32900 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32900(f__$1,ch__$1,meta32896__$1,___$2,fn1__$1,meta32901){
return (new cljs.core.async.t_cljs$core$async32900(f__$1,ch__$1,meta32896__$1,___$2,fn1__$1,meta32901));
});

}

return (new cljs.core.async.t_cljs$core$async32900(self__.f,self__.ch,self__.meta32896,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32907 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32907) : self__.f.call(null,G__32907));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32895.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32896","meta32896",1995236277,null)], null);
}));

(cljs.core.async.t_cljs$core$async32895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32895");

(cljs.core.async.t_cljs$core$async32895.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32895.
 */
cljs.core.async.__GT_t_cljs$core$async32895 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32895(f__$1,ch__$1,meta32896){
return (new cljs.core.async.t_cljs$core$async32895(f__$1,ch__$1,meta32896));
});

}

return (new cljs.core.async.t_cljs$core$async32895(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32910 = (function (f,ch,meta32911){
this.f = f;
this.ch = ch;
this.meta32911 = meta32911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32912,meta32911__$1){
var self__ = this;
var _32912__$1 = this;
return (new cljs.core.async.t_cljs$core$async32910(self__.f,self__.ch,meta32911__$1));
}));

(cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32912){
var self__ = this;
var _32912__$1 = this;
return self__.meta32911;
}));

(cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32911","meta32911",-1943920132,null)], null);
}));

(cljs.core.async.t_cljs$core$async32910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32910");

(cljs.core.async.t_cljs$core$async32910.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32910.
 */
cljs.core.async.__GT_t_cljs$core$async32910 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32910(f__$1,ch__$1,meta32911){
return (new cljs.core.async.t_cljs$core$async32910(f__$1,ch__$1,meta32911));
});

}

return (new cljs.core.async.t_cljs$core$async32910(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32913 = (function (p,ch,meta32914){
this.p = p;
this.ch = ch;
this.meta32914 = meta32914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32915,meta32914__$1){
var self__ = this;
var _32915__$1 = this;
return (new cljs.core.async.t_cljs$core$async32913(self__.p,self__.ch,meta32914__$1));
}));

(cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32915){
var self__ = this;
var _32915__$1 = this;
return self__.meta32914;
}));

(cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32914","meta32914",1574714999,null)], null);
}));

(cljs.core.async.t_cljs$core$async32913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32913");

(cljs.core.async.t_cljs$core$async32913.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32913.
 */
cljs.core.async.__GT_t_cljs$core$async32913 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32913(p__$1,ch__$1,meta32914){
return (new cljs.core.async.t_cljs$core$async32913(p__$1,ch__$1,meta32914));
});

}

return (new cljs.core.async.t_cljs$core$async32913(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32919 = arguments.length;
switch (G__32919) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30865__auto___34143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_32940){
var state_val_32941 = (state_32940[(1)]);
if((state_val_32941 === (7))){
var inst_32936 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_32978_34145 = state_32940__$1;
(statearr_32978_34145[(2)] = inst_32936);

(statearr_32978_34145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (1))){
var state_32940__$1 = state_32940;
var statearr_32981_34146 = state_32940__$1;
(statearr_32981_34146[(2)] = null);

(statearr_32981_34146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (4))){
var inst_32922 = (state_32940[(7)]);
var inst_32922__$1 = (state_32940[(2)]);
var inst_32923 = (inst_32922__$1 == null);
var state_32940__$1 = (function (){var statearr_32992 = state_32940;
(statearr_32992[(7)] = inst_32922__$1);

return statearr_32992;
})();
if(cljs.core.truth_(inst_32923)){
var statearr_32994_34147 = state_32940__$1;
(statearr_32994_34147[(1)] = (5));

} else {
var statearr_32996_34151 = state_32940__$1;
(statearr_32996_34151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (6))){
var inst_32922 = (state_32940[(7)]);
var inst_32927 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32922) : p.call(null,inst_32922));
var state_32940__$1 = state_32940;
if(cljs.core.truth_(inst_32927)){
var statearr_32999_34152 = state_32940__$1;
(statearr_32999_34152[(1)] = (8));

} else {
var statearr_33001_34153 = state_32940__$1;
(statearr_33001_34153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (3))){
var inst_32938 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32940__$1,inst_32938);
} else {
if((state_val_32941 === (2))){
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32940__$1,(4),ch);
} else {
if((state_val_32941 === (11))){
var inst_32930 = (state_32940[(2)]);
var state_32940__$1 = state_32940;
var statearr_33003_34154 = state_32940__$1;
(statearr_33003_34154[(2)] = inst_32930);

(statearr_33003_34154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (9))){
var state_32940__$1 = state_32940;
var statearr_33008_34155 = state_32940__$1;
(statearr_33008_34155[(2)] = null);

(statearr_33008_34155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (5))){
var inst_32925 = cljs.core.async.close_BANG_(out);
var state_32940__$1 = state_32940;
var statearr_33012_34156 = state_32940__$1;
(statearr_33012_34156[(2)] = inst_32925);

(statearr_33012_34156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (10))){
var inst_32933 = (state_32940[(2)]);
var state_32940__$1 = (function (){var statearr_33014 = state_32940;
(statearr_33014[(8)] = inst_32933);

return statearr_33014;
})();
var statearr_33015_34161 = state_32940__$1;
(statearr_33015_34161[(2)] = null);

(statearr_33015_34161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32941 === (8))){
var inst_32922 = (state_32940[(7)]);
var state_32940__$1 = state_32940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32940__$1,(11),out,inst_32922);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_33024 = [null,null,null,null,null,null,null,null,null];
(statearr_33024[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_33024[(1)] = (1));

return statearr_33024;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32940){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_32940);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e33025){var ex__30504__auto__ = e33025;
var statearr_33028_34162 = state_32940;
(statearr_33028_34162[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_32940[(4)]))){
var statearr_33033_34163 = state_32940;
(statearr_33033_34163[(1)] = cljs.core.first((state_32940[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34164 = state_32940;
state_32940 = G__34164;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_33039 = f__30866__auto__();
(statearr_33039[(6)] = c__30865__auto___34143);

return statearr_33039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33045 = arguments.length;
switch (G__33045) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_33137){
var state_val_33138 = (state_33137[(1)]);
if((state_val_33138 === (7))){
var inst_33133 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33140_34199 = state_33137__$1;
(statearr_33140_34199[(2)] = inst_33133);

(statearr_33140_34199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (20))){
var inst_33102 = (state_33137[(7)]);
var inst_33114 = (state_33137[(2)]);
var inst_33115 = cljs.core.next(inst_33102);
var inst_33087 = inst_33115;
var inst_33088 = null;
var inst_33089 = (0);
var inst_33090 = (0);
var state_33137__$1 = (function (){var statearr_33141 = state_33137;
(statearr_33141[(8)] = inst_33114);

(statearr_33141[(9)] = inst_33089);

(statearr_33141[(10)] = inst_33090);

(statearr_33141[(11)] = inst_33088);

(statearr_33141[(12)] = inst_33087);

return statearr_33141;
})();
var statearr_33142_34206 = state_33137__$1;
(statearr_33142_34206[(2)] = null);

(statearr_33142_34206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (1))){
var state_33137__$1 = state_33137;
var statearr_33143_34210 = state_33137__$1;
(statearr_33143_34210[(2)] = null);

(statearr_33143_34210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (4))){
var inst_33076 = (state_33137[(13)]);
var inst_33076__$1 = (state_33137[(2)]);
var inst_33077 = (inst_33076__$1 == null);
var state_33137__$1 = (function (){var statearr_33144 = state_33137;
(statearr_33144[(13)] = inst_33076__$1);

return statearr_33144;
})();
if(cljs.core.truth_(inst_33077)){
var statearr_33145_34211 = state_33137__$1;
(statearr_33145_34211[(1)] = (5));

} else {
var statearr_33146_34212 = state_33137__$1;
(statearr_33146_34212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (15))){
var state_33137__$1 = state_33137;
var statearr_33150_34213 = state_33137__$1;
(statearr_33150_34213[(2)] = null);

(statearr_33150_34213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (21))){
var state_33137__$1 = state_33137;
var statearr_33151_34214 = state_33137__$1;
(statearr_33151_34214[(2)] = null);

(statearr_33151_34214[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (13))){
var inst_33089 = (state_33137[(9)]);
var inst_33090 = (state_33137[(10)]);
var inst_33088 = (state_33137[(11)]);
var inst_33087 = (state_33137[(12)]);
var inst_33098 = (state_33137[(2)]);
var inst_33099 = (inst_33090 + (1));
var tmp33147 = inst_33089;
var tmp33148 = inst_33088;
var tmp33149 = inst_33087;
var inst_33087__$1 = tmp33149;
var inst_33088__$1 = tmp33148;
var inst_33089__$1 = tmp33147;
var inst_33090__$1 = inst_33099;
var state_33137__$1 = (function (){var statearr_33152 = state_33137;
(statearr_33152[(9)] = inst_33089__$1);

(statearr_33152[(10)] = inst_33090__$1);

(statearr_33152[(11)] = inst_33088__$1);

(statearr_33152[(12)] = inst_33087__$1);

(statearr_33152[(14)] = inst_33098);

return statearr_33152;
})();
var statearr_33153_34215 = state_33137__$1;
(statearr_33153_34215[(2)] = null);

(statearr_33153_34215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (22))){
var state_33137__$1 = state_33137;
var statearr_33155_34216 = state_33137__$1;
(statearr_33155_34216[(2)] = null);

(statearr_33155_34216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (6))){
var inst_33076 = (state_33137[(13)]);
var inst_33085 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33076) : f.call(null,inst_33076));
var inst_33086 = cljs.core.seq(inst_33085);
var inst_33087 = inst_33086;
var inst_33088 = null;
var inst_33089 = (0);
var inst_33090 = (0);
var state_33137__$1 = (function (){var statearr_33156 = state_33137;
(statearr_33156[(9)] = inst_33089);

(statearr_33156[(10)] = inst_33090);

(statearr_33156[(11)] = inst_33088);

(statearr_33156[(12)] = inst_33087);

return statearr_33156;
})();
var statearr_33157_34217 = state_33137__$1;
(statearr_33157_34217[(2)] = null);

(statearr_33157_34217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (17))){
var inst_33102 = (state_33137[(7)]);
var inst_33106 = cljs.core.chunk_first(inst_33102);
var inst_33108 = cljs.core.chunk_rest(inst_33102);
var inst_33109 = cljs.core.count(inst_33106);
var inst_33087 = inst_33108;
var inst_33088 = inst_33106;
var inst_33089 = inst_33109;
var inst_33090 = (0);
var state_33137__$1 = (function (){var statearr_33177 = state_33137;
(statearr_33177[(9)] = inst_33089);

(statearr_33177[(10)] = inst_33090);

(statearr_33177[(11)] = inst_33088);

(statearr_33177[(12)] = inst_33087);

return statearr_33177;
})();
var statearr_33179_34218 = state_33137__$1;
(statearr_33179_34218[(2)] = null);

(statearr_33179_34218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (3))){
var inst_33135 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33137__$1,inst_33135);
} else {
if((state_val_33138 === (12))){
var inst_33123 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33208_34219 = state_33137__$1;
(statearr_33208_34219[(2)] = inst_33123);

(statearr_33208_34219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (2))){
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33137__$1,(4),in$);
} else {
if((state_val_33138 === (23))){
var inst_33131 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33213_34220 = state_33137__$1;
(statearr_33213_34220[(2)] = inst_33131);

(statearr_33213_34220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (19))){
var inst_33118 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33216_34221 = state_33137__$1;
(statearr_33216_34221[(2)] = inst_33118);

(statearr_33216_34221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (11))){
var inst_33087 = (state_33137[(12)]);
var inst_33102 = (state_33137[(7)]);
var inst_33102__$1 = cljs.core.seq(inst_33087);
var state_33137__$1 = (function (){var statearr_33218 = state_33137;
(statearr_33218[(7)] = inst_33102__$1);

return statearr_33218;
})();
if(inst_33102__$1){
var statearr_33219_34222 = state_33137__$1;
(statearr_33219_34222[(1)] = (14));

} else {
var statearr_33220_34223 = state_33137__$1;
(statearr_33220_34223[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (9))){
var inst_33125 = (state_33137[(2)]);
var inst_33126 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33137__$1 = (function (){var statearr_33222 = state_33137;
(statearr_33222[(15)] = inst_33125);

return statearr_33222;
})();
if(cljs.core.truth_(inst_33126)){
var statearr_33225_34224 = state_33137__$1;
(statearr_33225_34224[(1)] = (21));

} else {
var statearr_33227_34225 = state_33137__$1;
(statearr_33227_34225[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (5))){
var inst_33079 = cljs.core.async.close_BANG_(out);
var state_33137__$1 = state_33137;
var statearr_33228_34226 = state_33137__$1;
(statearr_33228_34226[(2)] = inst_33079);

(statearr_33228_34226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (14))){
var inst_33102 = (state_33137[(7)]);
var inst_33104 = cljs.core.chunked_seq_QMARK_(inst_33102);
var state_33137__$1 = state_33137;
if(inst_33104){
var statearr_33232_34227 = state_33137__$1;
(statearr_33232_34227[(1)] = (17));

} else {
var statearr_33236_34228 = state_33137__$1;
(statearr_33236_34228[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (16))){
var inst_33121 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33237_34229 = state_33137__$1;
(statearr_33237_34229[(2)] = inst_33121);

(statearr_33237_34229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (10))){
var inst_33090 = (state_33137[(10)]);
var inst_33088 = (state_33137[(11)]);
var inst_33096 = cljs.core._nth(inst_33088,inst_33090);
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33137__$1,(13),out,inst_33096);
} else {
if((state_val_33138 === (18))){
var inst_33102 = (state_33137[(7)]);
var inst_33112 = cljs.core.first(inst_33102);
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33137__$1,(20),out,inst_33112);
} else {
if((state_val_33138 === (8))){
var inst_33089 = (state_33137[(9)]);
var inst_33090 = (state_33137[(10)]);
var inst_33093 = (inst_33090 < inst_33089);
var inst_33094 = inst_33093;
var state_33137__$1 = state_33137;
if(cljs.core.truth_(inst_33094)){
var statearr_33241_34230 = state_33137__$1;
(statearr_33241_34230[(1)] = (10));

} else {
var statearr_33242_34231 = state_33137__$1;
(statearr_33242_34231[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_33243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33243[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__);

(statearr_33243[(1)] = (1));

return statearr_33243;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____1 = (function (state_33137){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_33137);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e33244){var ex__30504__auto__ = e33244;
var statearr_33245_34232 = state_33137;
(statearr_33245_34232[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_33137[(4)]))){
var statearr_33246_34233 = state_33137;
(statearr_33246_34233[(1)] = cljs.core.first((state_33137[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34234 = state_33137;
state_33137 = G__34234;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__ = function(state_33137){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____1.call(this,state_33137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_33247 = f__30866__auto__();
(statearr_33247[(6)] = c__30865__auto__);

return statearr_33247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));

return c__30865__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33249 = arguments.length;
switch (G__33249) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33251 = arguments.length;
switch (G__33251) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33255 = arguments.length;
switch (G__33255) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30865__auto___34268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_33290){
var state_val_33291 = (state_33290[(1)]);
if((state_val_33291 === (7))){
var inst_33285 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33292_34269 = state_33290__$1;
(statearr_33292_34269[(2)] = inst_33285);

(statearr_33292_34269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (1))){
var inst_33258 = null;
var state_33290__$1 = (function (){var statearr_33293 = state_33290;
(statearr_33293[(7)] = inst_33258);

return statearr_33293;
})();
var statearr_33294_34270 = state_33290__$1;
(statearr_33294_34270[(2)] = null);

(statearr_33294_34270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (4))){
var inst_33261 = (state_33290[(8)]);
var inst_33261__$1 = (state_33290[(2)]);
var inst_33271 = (inst_33261__$1 == null);
var inst_33272 = cljs.core.not(inst_33271);
var state_33290__$1 = (function (){var statearr_33295 = state_33290;
(statearr_33295[(8)] = inst_33261__$1);

return statearr_33295;
})();
if(inst_33272){
var statearr_33296_34271 = state_33290__$1;
(statearr_33296_34271[(1)] = (5));

} else {
var statearr_33297_34272 = state_33290__$1;
(statearr_33297_34272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (6))){
var state_33290__$1 = state_33290;
var statearr_33298_34273 = state_33290__$1;
(statearr_33298_34273[(2)] = null);

(statearr_33298_34273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (3))){
var inst_33287 = (state_33290[(2)]);
var inst_33288 = cljs.core.async.close_BANG_(out);
var state_33290__$1 = (function (){var statearr_33299 = state_33290;
(statearr_33299[(9)] = inst_33287);

return statearr_33299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33290__$1,inst_33288);
} else {
if((state_val_33291 === (2))){
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33290__$1,(4),ch);
} else {
if((state_val_33291 === (11))){
var inst_33261 = (state_33290[(8)]);
var inst_33279 = (state_33290[(2)]);
var inst_33258 = inst_33261;
var state_33290__$1 = (function (){var statearr_33300 = state_33290;
(statearr_33300[(7)] = inst_33258);

(statearr_33300[(10)] = inst_33279);

return statearr_33300;
})();
var statearr_33301_34282 = state_33290__$1;
(statearr_33301_34282[(2)] = null);

(statearr_33301_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (9))){
var inst_33261 = (state_33290[(8)]);
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33290__$1,(11),out,inst_33261);
} else {
if((state_val_33291 === (5))){
var inst_33258 = (state_33290[(7)]);
var inst_33261 = (state_33290[(8)]);
var inst_33274 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33261,inst_33258);
var state_33290__$1 = state_33290;
if(inst_33274){
var statearr_33310_34287 = state_33290__$1;
(statearr_33310_34287[(1)] = (8));

} else {
var statearr_33311_34288 = state_33290__$1;
(statearr_33311_34288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (10))){
var inst_33282 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33313_34289 = state_33290__$1;
(statearr_33313_34289[(2)] = inst_33282);

(statearr_33313_34289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (8))){
var inst_33258 = (state_33290[(7)]);
var tmp33306 = inst_33258;
var inst_33258__$1 = tmp33306;
var state_33290__$1 = (function (){var statearr_33314 = state_33290;
(statearr_33314[(7)] = inst_33258__$1);

return statearr_33314;
})();
var statearr_33315_34293 = state_33290__$1;
(statearr_33315_34293[(2)] = null);

(statearr_33315_34293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_33320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33320[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_33320[(1)] = (1));

return statearr_33320;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_33290){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_33290);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e33321){var ex__30504__auto__ = e33321;
var statearr_33322_34298 = state_33290;
(statearr_33322_34298[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_33290[(4)]))){
var statearr_33323_34299 = state_33290;
(statearr_33323_34299[(1)] = cljs.core.first((state_33290[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34300 = state_33290;
state_33290 = G__34300;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_33290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_33290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_33328 = f__30866__auto__();
(statearr_33328[(6)] = c__30865__auto___34268);

return statearr_33328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33334 = arguments.length;
switch (G__33334) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30865__auto___34302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_33385){
var state_val_33386 = (state_33385[(1)]);
if((state_val_33386 === (7))){
var inst_33381 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33390_34303 = state_33385__$1;
(statearr_33390_34303[(2)] = inst_33381);

(statearr_33390_34303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (1))){
var inst_33344 = (new Array(n));
var inst_33345 = inst_33344;
var inst_33346 = (0);
var state_33385__$1 = (function (){var statearr_33392 = state_33385;
(statearr_33392[(7)] = inst_33346);

(statearr_33392[(8)] = inst_33345);

return statearr_33392;
})();
var statearr_33393_34304 = state_33385__$1;
(statearr_33393_34304[(2)] = null);

(statearr_33393_34304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (4))){
var inst_33349 = (state_33385[(9)]);
var inst_33349__$1 = (state_33385[(2)]);
var inst_33350 = (inst_33349__$1 == null);
var inst_33351 = cljs.core.not(inst_33350);
var state_33385__$1 = (function (){var statearr_33394 = state_33385;
(statearr_33394[(9)] = inst_33349__$1);

return statearr_33394;
})();
if(inst_33351){
var statearr_33395_34305 = state_33385__$1;
(statearr_33395_34305[(1)] = (5));

} else {
var statearr_33396_34306 = state_33385__$1;
(statearr_33396_34306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (15))){
var inst_33375 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33400_34307 = state_33385__$1;
(statearr_33400_34307[(2)] = inst_33375);

(statearr_33400_34307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (13))){
var state_33385__$1 = state_33385;
var statearr_33401_34309 = state_33385__$1;
(statearr_33401_34309[(2)] = null);

(statearr_33401_34309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (6))){
var inst_33346 = (state_33385[(7)]);
var inst_33371 = (inst_33346 > (0));
var state_33385__$1 = state_33385;
if(cljs.core.truth_(inst_33371)){
var statearr_33403_34310 = state_33385__$1;
(statearr_33403_34310[(1)] = (12));

} else {
var statearr_33404_34311 = state_33385__$1;
(statearr_33404_34311[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (3))){
var inst_33383 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33385__$1,inst_33383);
} else {
if((state_val_33386 === (12))){
var inst_33345 = (state_33385[(8)]);
var inst_33373 = cljs.core.vec(inst_33345);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33385__$1,(15),out,inst_33373);
} else {
if((state_val_33386 === (2))){
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33385__$1,(4),ch);
} else {
if((state_val_33386 === (11))){
var inst_33365 = (state_33385[(2)]);
var inst_33366 = (new Array(n));
var inst_33345 = inst_33366;
var inst_33346 = (0);
var state_33385__$1 = (function (){var statearr_33413 = state_33385;
(statearr_33413[(7)] = inst_33346);

(statearr_33413[(10)] = inst_33365);

(statearr_33413[(8)] = inst_33345);

return statearr_33413;
})();
var statearr_33415_34313 = state_33385__$1;
(statearr_33415_34313[(2)] = null);

(statearr_33415_34313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (9))){
var inst_33345 = (state_33385[(8)]);
var inst_33363 = cljs.core.vec(inst_33345);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33385__$1,(11),out,inst_33363);
} else {
if((state_val_33386 === (5))){
var inst_33346 = (state_33385[(7)]);
var inst_33357 = (state_33385[(11)]);
var inst_33345 = (state_33385[(8)]);
var inst_33349 = (state_33385[(9)]);
var inst_33356 = (inst_33345[inst_33346] = inst_33349);
var inst_33357__$1 = (inst_33346 + (1));
var inst_33358 = (inst_33357__$1 < n);
var state_33385__$1 = (function (){var statearr_33416 = state_33385;
(statearr_33416[(12)] = inst_33356);

(statearr_33416[(11)] = inst_33357__$1);

return statearr_33416;
})();
if(cljs.core.truth_(inst_33358)){
var statearr_33420_34316 = state_33385__$1;
(statearr_33420_34316[(1)] = (8));

} else {
var statearr_33421_34317 = state_33385__$1;
(statearr_33421_34317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (14))){
var inst_33378 = (state_33385[(2)]);
var inst_33379 = cljs.core.async.close_BANG_(out);
var state_33385__$1 = (function (){var statearr_33424 = state_33385;
(statearr_33424[(13)] = inst_33378);

return statearr_33424;
})();
var statearr_33425_34318 = state_33385__$1;
(statearr_33425_34318[(2)] = inst_33379);

(statearr_33425_34318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (10))){
var inst_33369 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33429_34319 = state_33385__$1;
(statearr_33429_34319[(2)] = inst_33369);

(statearr_33429_34319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (8))){
var inst_33357 = (state_33385[(11)]);
var inst_33345 = (state_33385[(8)]);
var tmp33423 = inst_33345;
var inst_33345__$1 = tmp33423;
var inst_33346 = inst_33357;
var state_33385__$1 = (function (){var statearr_33431 = state_33385;
(statearr_33431[(7)] = inst_33346);

(statearr_33431[(8)] = inst_33345__$1);

return statearr_33431;
})();
var statearr_33432_34320 = state_33385__$1;
(statearr_33432_34320[(2)] = null);

(statearr_33432_34320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_33436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33436[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_33436[(1)] = (1));

return statearr_33436;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_33385){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_33385);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e33438){var ex__30504__auto__ = e33438;
var statearr_33439_34321 = state_33385;
(statearr_33439_34321[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_33385[(4)]))){
var statearr_33440_34322 = state_33385;
(statearr_33440_34322[(1)] = cljs.core.first((state_33385[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34323 = state_33385;
state_33385 = G__34323;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_33385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_33385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_33442 = f__30866__auto__();
(statearr_33442[(6)] = c__30865__auto___34302);

return statearr_33442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33444 = arguments.length;
switch (G__33444) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30865__auto___34325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30866__auto__ = (function (){var switch__30500__auto__ = (function (state_33514){
var state_val_33515 = (state_33514[(1)]);
if((state_val_33515 === (7))){
var inst_33505 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33517_34326 = state_33514__$1;
(statearr_33517_34326[(2)] = inst_33505);

(statearr_33517_34326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (1))){
var inst_33456 = [];
var inst_33466 = inst_33456;
var inst_33467 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33514__$1 = (function (){var statearr_33519 = state_33514;
(statearr_33519[(7)] = inst_33466);

(statearr_33519[(8)] = inst_33467);

return statearr_33519;
})();
var statearr_33520_34327 = state_33514__$1;
(statearr_33520_34327[(2)] = null);

(statearr_33520_34327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (4))){
var inst_33470 = (state_33514[(9)]);
var inst_33470__$1 = (state_33514[(2)]);
var inst_33471 = (inst_33470__$1 == null);
var inst_33472 = cljs.core.not(inst_33471);
var state_33514__$1 = (function (){var statearr_33521 = state_33514;
(statearr_33521[(9)] = inst_33470__$1);

return statearr_33521;
})();
if(inst_33472){
var statearr_33522_34328 = state_33514__$1;
(statearr_33522_34328[(1)] = (5));

} else {
var statearr_33523_34329 = state_33514__$1;
(statearr_33523_34329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (15))){
var inst_33466 = (state_33514[(7)]);
var inst_33497 = cljs.core.vec(inst_33466);
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33514__$1,(18),out,inst_33497);
} else {
if((state_val_33515 === (13))){
var inst_33492 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33524_34330 = state_33514__$1;
(statearr_33524_34330[(2)] = inst_33492);

(statearr_33524_34330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (6))){
var inst_33466 = (state_33514[(7)]);
var inst_33494 = inst_33466.length;
var inst_33495 = (inst_33494 > (0));
var state_33514__$1 = state_33514;
if(cljs.core.truth_(inst_33495)){
var statearr_33525_34331 = state_33514__$1;
(statearr_33525_34331[(1)] = (15));

} else {
var statearr_33526_34332 = state_33514__$1;
(statearr_33526_34332[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (17))){
var inst_33502 = (state_33514[(2)]);
var inst_33503 = cljs.core.async.close_BANG_(out);
var state_33514__$1 = (function (){var statearr_33527 = state_33514;
(statearr_33527[(10)] = inst_33502);

return statearr_33527;
})();
var statearr_33528_34333 = state_33514__$1;
(statearr_33528_34333[(2)] = inst_33503);

(statearr_33528_34333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (3))){
var inst_33507 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33514__$1,inst_33507);
} else {
if((state_val_33515 === (12))){
var inst_33466 = (state_33514[(7)]);
var inst_33485 = cljs.core.vec(inst_33466);
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33514__$1,(14),out,inst_33485);
} else {
if((state_val_33515 === (2))){
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33514__$1,(4),ch);
} else {
if((state_val_33515 === (11))){
var inst_33466 = (state_33514[(7)]);
var inst_33474 = (state_33514[(11)]);
var inst_33470 = (state_33514[(9)]);
var inst_33482 = inst_33466.push(inst_33470);
var tmp33529 = inst_33466;
var inst_33466__$1 = tmp33529;
var inst_33467 = inst_33474;
var state_33514__$1 = (function (){var statearr_33530 = state_33514;
(statearr_33530[(7)] = inst_33466__$1);

(statearr_33530[(8)] = inst_33467);

(statearr_33530[(12)] = inst_33482);

return statearr_33530;
})();
var statearr_33531_34334 = state_33514__$1;
(statearr_33531_34334[(2)] = null);

(statearr_33531_34334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (9))){
var inst_33467 = (state_33514[(8)]);
var inst_33478 = cljs.core.keyword_identical_QMARK_(inst_33467,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33514__$1 = state_33514;
var statearr_33532_34335 = state_33514__$1;
(statearr_33532_34335[(2)] = inst_33478);

(statearr_33532_34335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (5))){
var inst_33474 = (state_33514[(11)]);
var inst_33475 = (state_33514[(13)]);
var inst_33470 = (state_33514[(9)]);
var inst_33467 = (state_33514[(8)]);
var inst_33474__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33470) : f.call(null,inst_33470));
var inst_33475__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33474__$1,inst_33467);
var state_33514__$1 = (function (){var statearr_33533 = state_33514;
(statearr_33533[(11)] = inst_33474__$1);

(statearr_33533[(13)] = inst_33475__$1);

return statearr_33533;
})();
if(inst_33475__$1){
var statearr_33534_34337 = state_33514__$1;
(statearr_33534_34337[(1)] = (8));

} else {
var statearr_33535_34338 = state_33514__$1;
(statearr_33535_34338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (14))){
var inst_33474 = (state_33514[(11)]);
var inst_33470 = (state_33514[(9)]);
var inst_33487 = (state_33514[(2)]);
var inst_33488 = [];
var inst_33489 = inst_33488.push(inst_33470);
var inst_33466 = inst_33488;
var inst_33467 = inst_33474;
var state_33514__$1 = (function (){var statearr_33536 = state_33514;
(statearr_33536[(14)] = inst_33487);

(statearr_33536[(7)] = inst_33466);

(statearr_33536[(15)] = inst_33489);

(statearr_33536[(8)] = inst_33467);

return statearr_33536;
})();
var statearr_33537_34339 = state_33514__$1;
(statearr_33537_34339[(2)] = null);

(statearr_33537_34339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (16))){
var state_33514__$1 = state_33514;
var statearr_33538_34341 = state_33514__$1;
(statearr_33538_34341[(2)] = null);

(statearr_33538_34341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (10))){
var inst_33480 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
if(cljs.core.truth_(inst_33480)){
var statearr_33539_34345 = state_33514__$1;
(statearr_33539_34345[(1)] = (11));

} else {
var statearr_33540_34346 = state_33514__$1;
(statearr_33540_34346[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (18))){
var inst_33499 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33541_34347 = state_33514__$1;
(statearr_33541_34347[(2)] = inst_33499);

(statearr_33541_34347[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (8))){
var inst_33475 = (state_33514[(13)]);
var state_33514__$1 = state_33514;
var statearr_33542_34348 = state_33514__$1;
(statearr_33542_34348[(2)] = inst_33475);

(statearr_33542_34348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_33543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33543[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_33543[(1)] = (1));

return statearr_33543;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_33514){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__(state_33514);
if(cljs.core.keyword_identical_QMARK_(result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e33544){var ex__30504__auto__ = e33544;
var statearr_33545_34349 = state_33514;
(statearr_33545_34349[(2)] = ex__30504__auto__);


if(cljs.core.seq((state_33514[(4)]))){
var statearr_33546_34350 = state_33514;
(statearr_33546_34350[(1)] = cljs.core.first((state_33514[(4)])));

} else {
throw ex__30504__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34351 = state_33514;
state_33514 = G__34351;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_33514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_33514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
})();
var state__30867__auto__ = (function (){var statearr_33549 = f__30866__auto__();
(statearr_33549[(6)] = c__30865__auto___34325);

return statearr_33549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30867__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

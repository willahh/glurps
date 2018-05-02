// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__65365 = arguments.length;
switch (G__65365) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async65366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65366 = (function (f,blockable,meta65367){
this.f = f;
this.blockable = blockable;
this.meta65367 = meta65367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async65366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65368,meta65367__$1){
var self__ = this;
var _65368__$1 = this;
return (new cljs.core.async.t_cljs$core$async65366(self__.f,self__.blockable,meta65367__$1));
});

cljs.core.async.t_cljs$core$async65366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65368){
var self__ = this;
var _65368__$1 = this;
return self__.meta65367;
});

cljs.core.async.t_cljs$core$async65366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async65366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async65366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async65366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta65367","meta65367",936333360,null)], null);
});

cljs.core.async.t_cljs$core$async65366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65366";

cljs.core.async.t_cljs$core$async65366.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async65366");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65366.
 */
cljs.core.async.__GT_t_cljs$core$async65366 = (function cljs$core$async$__GT_t_cljs$core$async65366(f__$1,blockable__$1,meta65367){
return (new cljs.core.async.t_cljs$core$async65366(f__$1,blockable__$1,meta65367));
});

}

return (new cljs.core.async.t_cljs$core$async65366(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__65372 = arguments.length;
switch (G__65372) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__65375 = arguments.length;
switch (G__65375) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__65378 = arguments.length;
switch (G__65378) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_65380 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_65380);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_65380,ret){
return (function (){
return fn1.call(null,val_65380);
});})(val_65380,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__65382 = arguments.length;
switch (G__65382) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___65384 = n;
var x_65385 = (0);
while(true){
if((x_65385 < n__4376__auto___65384)){
(a[x_65385] = (0));

var G__65386 = (x_65385 + (1));
x_65385 = G__65386;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__65387 = (i + (1));
i = G__65387;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async65388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65388 = (function (flag,meta65389){
this.flag = flag;
this.meta65389 = meta65389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async65388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_65390,meta65389__$1){
var self__ = this;
var _65390__$1 = this;
return (new cljs.core.async.t_cljs$core$async65388(self__.flag,meta65389__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async65388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_65390){
var self__ = this;
var _65390__$1 = this;
return self__.meta65389;
});})(flag))
;

cljs.core.async.t_cljs$core$async65388.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async65388.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async65388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async65388.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta65389","meta65389",-34962082,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async65388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65388";

cljs.core.async.t_cljs$core$async65388.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async65388");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65388.
 */
cljs.core.async.__GT_t_cljs$core$async65388 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async65388(flag__$1,meta65389){
return (new cljs.core.async.t_cljs$core$async65388(flag__$1,meta65389));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async65388(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async65391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65391 = (function (flag,cb,meta65392){
this.flag = flag;
this.cb = cb;
this.meta65392 = meta65392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async65391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65393,meta65392__$1){
var self__ = this;
var _65393__$1 = this;
return (new cljs.core.async.t_cljs$core$async65391(self__.flag,self__.cb,meta65392__$1));
});

cljs.core.async.t_cljs$core$async65391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65393){
var self__ = this;
var _65393__$1 = this;
return self__.meta65392;
});

cljs.core.async.t_cljs$core$async65391.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async65391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async65391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async65391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta65392","meta65392",-467155101,null)], null);
});

cljs.core.async.t_cljs$core$async65391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65391";

cljs.core.async.t_cljs$core$async65391.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async65391");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65391.
 */
cljs.core.async.__GT_t_cljs$core$async65391 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async65391(flag__$1,cb__$1,meta65392){
return (new cljs.core.async.t_cljs$core$async65391(flag__$1,cb__$1,meta65392));
});

}

return (new cljs.core.async.t_cljs$core$async65391(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__65394_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65394_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__65395_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65395_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__65396 = (i + (1));
i = G__65396;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4502__auto__ = [];
var len__4499__auto___65402 = arguments.length;
var i__4500__auto___65403 = (0);
while(true){
if((i__4500__auto___65403 < len__4499__auto___65402)){
args__4502__auto__.push((arguments[i__4500__auto___65403]));

var G__65404 = (i__4500__auto___65403 + (1));
i__4500__auto___65403 = G__65404;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__65399){
var map__65400 = p__65399;
var map__65400__$1 = ((((!((map__65400 == null)))?(((((map__65400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65400):map__65400);
var opts = map__65400__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq65397){
var G__65398 = cljs.core.first.call(null,seq65397);
var seq65397__$1 = cljs.core.next.call(null,seq65397);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65398,seq65397__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__65406 = arguments.length;
switch (G__65406) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43716__auto___65452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___65452){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___65452){
return (function (state_65430){
var state_val_65431 = (state_65430[(1)]);
if((state_val_65431 === (7))){
var inst_65426 = (state_65430[(2)]);
var state_65430__$1 = state_65430;
var statearr_65432_65453 = state_65430__$1;
(statearr_65432_65453[(2)] = inst_65426);

(statearr_65432_65453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (1))){
var state_65430__$1 = state_65430;
var statearr_65433_65454 = state_65430__$1;
(statearr_65433_65454[(2)] = null);

(statearr_65433_65454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (4))){
var inst_65409 = (state_65430[(7)]);
var inst_65409__$1 = (state_65430[(2)]);
var inst_65410 = (inst_65409__$1 == null);
var state_65430__$1 = (function (){var statearr_65434 = state_65430;
(statearr_65434[(7)] = inst_65409__$1);

return statearr_65434;
})();
if(cljs.core.truth_(inst_65410)){
var statearr_65435_65455 = state_65430__$1;
(statearr_65435_65455[(1)] = (5));

} else {
var statearr_65436_65456 = state_65430__$1;
(statearr_65436_65456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (13))){
var state_65430__$1 = state_65430;
var statearr_65437_65457 = state_65430__$1;
(statearr_65437_65457[(2)] = null);

(statearr_65437_65457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (6))){
var inst_65409 = (state_65430[(7)]);
var state_65430__$1 = state_65430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65430__$1,(11),to,inst_65409);
} else {
if((state_val_65431 === (3))){
var inst_65428 = (state_65430[(2)]);
var state_65430__$1 = state_65430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65430__$1,inst_65428);
} else {
if((state_val_65431 === (12))){
var state_65430__$1 = state_65430;
var statearr_65438_65458 = state_65430__$1;
(statearr_65438_65458[(2)] = null);

(statearr_65438_65458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (2))){
var state_65430__$1 = state_65430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65430__$1,(4),from);
} else {
if((state_val_65431 === (11))){
var inst_65419 = (state_65430[(2)]);
var state_65430__$1 = state_65430;
if(cljs.core.truth_(inst_65419)){
var statearr_65439_65459 = state_65430__$1;
(statearr_65439_65459[(1)] = (12));

} else {
var statearr_65440_65460 = state_65430__$1;
(statearr_65440_65460[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (9))){
var state_65430__$1 = state_65430;
var statearr_65441_65461 = state_65430__$1;
(statearr_65441_65461[(2)] = null);

(statearr_65441_65461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (5))){
var state_65430__$1 = state_65430;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65442_65462 = state_65430__$1;
(statearr_65442_65462[(1)] = (8));

} else {
var statearr_65443_65463 = state_65430__$1;
(statearr_65443_65463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (14))){
var inst_65424 = (state_65430[(2)]);
var state_65430__$1 = state_65430;
var statearr_65444_65464 = state_65430__$1;
(statearr_65444_65464[(2)] = inst_65424);

(statearr_65444_65464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (10))){
var inst_65416 = (state_65430[(2)]);
var state_65430__$1 = state_65430;
var statearr_65445_65465 = state_65430__$1;
(statearr_65445_65465[(2)] = inst_65416);

(statearr_65445_65465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65431 === (8))){
var inst_65413 = cljs.core.async.close_BANG_.call(null,to);
var state_65430__$1 = state_65430;
var statearr_65446_65466 = state_65430__$1;
(statearr_65446_65466[(2)] = inst_65413);

(statearr_65446_65466[(1)] = (10));


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
});})(c__43716__auto___65452))
;
return ((function (switch__43559__auto__,c__43716__auto___65452){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_65447 = [null,null,null,null,null,null,null,null];
(statearr_65447[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_65447[(1)] = (1));

return statearr_65447;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_65430){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65448){if((e65448 instanceof Object)){
var ex__43563__auto__ = e65448;
var statearr_65449_65467 = state_65430;
(statearr_65449_65467[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65468 = state_65430;
state_65430 = G__65468;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_65430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_65430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___65452))
})();
var state__43718__auto__ = (function (){var statearr_65450 = f__43717__auto__.call(null);
(statearr_65450[(6)] = c__43716__auto___65452);

return statearr_65450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___65452))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__65469){
var vec__65470 = p__65469;
var v = cljs.core.nth.call(null,vec__65470,(0),null);
var p = cljs.core.nth.call(null,vec__65470,(1),null);
var job = vec__65470;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43716__auto___65641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___65641,res,vec__65470,v,p,job,jobs,results){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___65641,res,vec__65470,v,p,job,jobs,results){
return (function (state_65477){
var state_val_65478 = (state_65477[(1)]);
if((state_val_65478 === (1))){
var state_65477__$1 = state_65477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65477__$1,(2),res,v);
} else {
if((state_val_65478 === (2))){
var inst_65474 = (state_65477[(2)]);
var inst_65475 = cljs.core.async.close_BANG_.call(null,res);
var state_65477__$1 = (function (){var statearr_65479 = state_65477;
(statearr_65479[(7)] = inst_65474);

return statearr_65479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65477__$1,inst_65475);
} else {
return null;
}
}
});})(c__43716__auto___65641,res,vec__65470,v,p,job,jobs,results))
;
return ((function (switch__43559__auto__,c__43716__auto___65641,res,vec__65470,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_65480 = [null,null,null,null,null,null,null,null];
(statearr_65480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_65480[(1)] = (1));

return statearr_65480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_65477){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65481){if((e65481 instanceof Object)){
var ex__43563__auto__ = e65481;
var statearr_65482_65642 = state_65477;
(statearr_65482_65642[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65643 = state_65477;
state_65477 = G__65643;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_65477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_65477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___65641,res,vec__65470,v,p,job,jobs,results))
})();
var state__43718__auto__ = (function (){var statearr_65483 = f__43717__auto__.call(null);
(statearr_65483[(6)] = c__43716__auto___65641);

return statearr_65483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___65641,res,vec__65470,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__65484){
var vec__65485 = p__65484;
var v = cljs.core.nth.call(null,vec__65485,(0),null);
var p = cljs.core.nth.call(null,vec__65485,(1),null);
var job = vec__65485;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4376__auto___65644 = n;
var __65645 = (0);
while(true){
if((__65645 < n__4376__auto___65644)){
var G__65488_65646 = type;
var G__65488_65647__$1 = (((G__65488_65646 instanceof cljs.core.Keyword))?G__65488_65646.fqn:null);
switch (G__65488_65647__$1) {
case "compute":
var c__43716__auto___65649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__65645,c__43716__auto___65649,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (__65645,c__43716__auto___65649,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async){
return (function (state_65501){
var state_val_65502 = (state_65501[(1)]);
if((state_val_65502 === (1))){
var state_65501__$1 = state_65501;
var statearr_65503_65650 = state_65501__$1;
(statearr_65503_65650[(2)] = null);

(statearr_65503_65650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65502 === (2))){
var state_65501__$1 = state_65501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65501__$1,(4),jobs);
} else {
if((state_val_65502 === (3))){
var inst_65499 = (state_65501[(2)]);
var state_65501__$1 = state_65501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65501__$1,inst_65499);
} else {
if((state_val_65502 === (4))){
var inst_65491 = (state_65501[(2)]);
var inst_65492 = process__$1.call(null,inst_65491);
var state_65501__$1 = state_65501;
if(cljs.core.truth_(inst_65492)){
var statearr_65504_65651 = state_65501__$1;
(statearr_65504_65651[(1)] = (5));

} else {
var statearr_65505_65652 = state_65501__$1;
(statearr_65505_65652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65502 === (5))){
var state_65501__$1 = state_65501;
var statearr_65506_65653 = state_65501__$1;
(statearr_65506_65653[(2)] = null);

(statearr_65506_65653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65502 === (6))){
var state_65501__$1 = state_65501;
var statearr_65507_65654 = state_65501__$1;
(statearr_65507_65654[(2)] = null);

(statearr_65507_65654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65502 === (7))){
var inst_65497 = (state_65501[(2)]);
var state_65501__$1 = state_65501;
var statearr_65508_65655 = state_65501__$1;
(statearr_65508_65655[(2)] = inst_65497);

(statearr_65508_65655[(1)] = (3));


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
});})(__65645,c__43716__auto___65649,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async))
;
return ((function (__65645,switch__43559__auto__,c__43716__auto___65649,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_65509 = [null,null,null,null,null,null,null];
(statearr_65509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_65509[(1)] = (1));

return statearr_65509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_65501){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65510){if((e65510 instanceof Object)){
var ex__43563__auto__ = e65510;
var statearr_65511_65656 = state_65501;
(statearr_65511_65656[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65657 = state_65501;
state_65501 = G__65657;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_65501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_65501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(__65645,switch__43559__auto__,c__43716__auto___65649,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async))
})();
var state__43718__auto__ = (function (){var statearr_65512 = f__43717__auto__.call(null);
(statearr_65512[(6)] = c__43716__auto___65649);

return statearr_65512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(__65645,c__43716__auto___65649,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async))
);


break;
case "async":
var c__43716__auto___65658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__65645,c__43716__auto___65658,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (__65645,c__43716__auto___65658,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async){
return (function (state_65525){
var state_val_65526 = (state_65525[(1)]);
if((state_val_65526 === (1))){
var state_65525__$1 = state_65525;
var statearr_65527_65659 = state_65525__$1;
(statearr_65527_65659[(2)] = null);

(statearr_65527_65659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65526 === (2))){
var state_65525__$1 = state_65525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65525__$1,(4),jobs);
} else {
if((state_val_65526 === (3))){
var inst_65523 = (state_65525[(2)]);
var state_65525__$1 = state_65525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65525__$1,inst_65523);
} else {
if((state_val_65526 === (4))){
var inst_65515 = (state_65525[(2)]);
var inst_65516 = async.call(null,inst_65515);
var state_65525__$1 = state_65525;
if(cljs.core.truth_(inst_65516)){
var statearr_65528_65660 = state_65525__$1;
(statearr_65528_65660[(1)] = (5));

} else {
var statearr_65529_65661 = state_65525__$1;
(statearr_65529_65661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65526 === (5))){
var state_65525__$1 = state_65525;
var statearr_65530_65662 = state_65525__$1;
(statearr_65530_65662[(2)] = null);

(statearr_65530_65662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65526 === (6))){
var state_65525__$1 = state_65525;
var statearr_65531_65663 = state_65525__$1;
(statearr_65531_65663[(2)] = null);

(statearr_65531_65663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65526 === (7))){
var inst_65521 = (state_65525[(2)]);
var state_65525__$1 = state_65525;
var statearr_65532_65664 = state_65525__$1;
(statearr_65532_65664[(2)] = inst_65521);

(statearr_65532_65664[(1)] = (3));


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
});})(__65645,c__43716__auto___65658,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async))
;
return ((function (__65645,switch__43559__auto__,c__43716__auto___65658,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_65533 = [null,null,null,null,null,null,null];
(statearr_65533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_65533[(1)] = (1));

return statearr_65533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_65525){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65534){if((e65534 instanceof Object)){
var ex__43563__auto__ = e65534;
var statearr_65535_65665 = state_65525;
(statearr_65535_65665[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65666 = state_65525;
state_65525 = G__65666;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_65525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_65525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(__65645,switch__43559__auto__,c__43716__auto___65658,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async))
})();
var state__43718__auto__ = (function (){var statearr_65536 = f__43717__auto__.call(null);
(statearr_65536[(6)] = c__43716__auto___65658);

return statearr_65536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(__65645,c__43716__auto___65658,G__65488_65646,G__65488_65647__$1,n__4376__auto___65644,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65488_65647__$1)].join('')));

}

var G__65667 = (__65645 + (1));
__65645 = G__65667;
continue;
} else {
}
break;
}

var c__43716__auto___65668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___65668,jobs,results,process__$1,async){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___65668,jobs,results,process__$1,async){
return (function (state_65558){
var state_val_65559 = (state_65558[(1)]);
if((state_val_65559 === (1))){
var state_65558__$1 = state_65558;
var statearr_65560_65669 = state_65558__$1;
(statearr_65560_65669[(2)] = null);

(statearr_65560_65669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65559 === (2))){
var state_65558__$1 = state_65558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65558__$1,(4),from);
} else {
if((state_val_65559 === (3))){
var inst_65556 = (state_65558[(2)]);
var state_65558__$1 = state_65558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65558__$1,inst_65556);
} else {
if((state_val_65559 === (4))){
var inst_65539 = (state_65558[(7)]);
var inst_65539__$1 = (state_65558[(2)]);
var inst_65540 = (inst_65539__$1 == null);
var state_65558__$1 = (function (){var statearr_65561 = state_65558;
(statearr_65561[(7)] = inst_65539__$1);

return statearr_65561;
})();
if(cljs.core.truth_(inst_65540)){
var statearr_65562_65670 = state_65558__$1;
(statearr_65562_65670[(1)] = (5));

} else {
var statearr_65563_65671 = state_65558__$1;
(statearr_65563_65671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65559 === (5))){
var inst_65542 = cljs.core.async.close_BANG_.call(null,jobs);
var state_65558__$1 = state_65558;
var statearr_65564_65672 = state_65558__$1;
(statearr_65564_65672[(2)] = inst_65542);

(statearr_65564_65672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65559 === (6))){
var inst_65544 = (state_65558[(8)]);
var inst_65539 = (state_65558[(7)]);
var inst_65544__$1 = cljs.core.async.chan.call(null,(1));
var inst_65545 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65546 = [inst_65539,inst_65544__$1];
var inst_65547 = (new cljs.core.PersistentVector(null,2,(5),inst_65545,inst_65546,null));
var state_65558__$1 = (function (){var statearr_65565 = state_65558;
(statearr_65565[(8)] = inst_65544__$1);

return statearr_65565;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65558__$1,(8),jobs,inst_65547);
} else {
if((state_val_65559 === (7))){
var inst_65554 = (state_65558[(2)]);
var state_65558__$1 = state_65558;
var statearr_65566_65673 = state_65558__$1;
(statearr_65566_65673[(2)] = inst_65554);

(statearr_65566_65673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65559 === (8))){
var inst_65544 = (state_65558[(8)]);
var inst_65549 = (state_65558[(2)]);
var state_65558__$1 = (function (){var statearr_65567 = state_65558;
(statearr_65567[(9)] = inst_65549);

return statearr_65567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65558__$1,(9),results,inst_65544);
} else {
if((state_val_65559 === (9))){
var inst_65551 = (state_65558[(2)]);
var state_65558__$1 = (function (){var statearr_65568 = state_65558;
(statearr_65568[(10)] = inst_65551);

return statearr_65568;
})();
var statearr_65569_65674 = state_65558__$1;
(statearr_65569_65674[(2)] = null);

(statearr_65569_65674[(1)] = (2));


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
});})(c__43716__auto___65668,jobs,results,process__$1,async))
;
return ((function (switch__43559__auto__,c__43716__auto___65668,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_65570 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_65570[(1)] = (1));

return statearr_65570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_65558){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65571){if((e65571 instanceof Object)){
var ex__43563__auto__ = e65571;
var statearr_65572_65675 = state_65558;
(statearr_65572_65675[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65676 = state_65558;
state_65558 = G__65676;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_65558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_65558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___65668,jobs,results,process__$1,async))
})();
var state__43718__auto__ = (function (){var statearr_65573 = f__43717__auto__.call(null);
(statearr_65573[(6)] = c__43716__auto___65668);

return statearr_65573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___65668,jobs,results,process__$1,async))
);


var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__,jobs,results,process__$1,async){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__,jobs,results,process__$1,async){
return (function (state_65611){
var state_val_65612 = (state_65611[(1)]);
if((state_val_65612 === (7))){
var inst_65607 = (state_65611[(2)]);
var state_65611__$1 = state_65611;
var statearr_65613_65677 = state_65611__$1;
(statearr_65613_65677[(2)] = inst_65607);

(statearr_65613_65677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (20))){
var state_65611__$1 = state_65611;
var statearr_65614_65678 = state_65611__$1;
(statearr_65614_65678[(2)] = null);

(statearr_65614_65678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (1))){
var state_65611__$1 = state_65611;
var statearr_65615_65679 = state_65611__$1;
(statearr_65615_65679[(2)] = null);

(statearr_65615_65679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (4))){
var inst_65576 = (state_65611[(7)]);
var inst_65576__$1 = (state_65611[(2)]);
var inst_65577 = (inst_65576__$1 == null);
var state_65611__$1 = (function (){var statearr_65616 = state_65611;
(statearr_65616[(7)] = inst_65576__$1);

return statearr_65616;
})();
if(cljs.core.truth_(inst_65577)){
var statearr_65617_65680 = state_65611__$1;
(statearr_65617_65680[(1)] = (5));

} else {
var statearr_65618_65681 = state_65611__$1;
(statearr_65618_65681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (15))){
var inst_65589 = (state_65611[(8)]);
var state_65611__$1 = state_65611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65611__$1,(18),to,inst_65589);
} else {
if((state_val_65612 === (21))){
var inst_65602 = (state_65611[(2)]);
var state_65611__$1 = state_65611;
var statearr_65619_65682 = state_65611__$1;
(statearr_65619_65682[(2)] = inst_65602);

(statearr_65619_65682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (13))){
var inst_65604 = (state_65611[(2)]);
var state_65611__$1 = (function (){var statearr_65620 = state_65611;
(statearr_65620[(9)] = inst_65604);

return statearr_65620;
})();
var statearr_65621_65683 = state_65611__$1;
(statearr_65621_65683[(2)] = null);

(statearr_65621_65683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (6))){
var inst_65576 = (state_65611[(7)]);
var state_65611__$1 = state_65611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65611__$1,(11),inst_65576);
} else {
if((state_val_65612 === (17))){
var inst_65597 = (state_65611[(2)]);
var state_65611__$1 = state_65611;
if(cljs.core.truth_(inst_65597)){
var statearr_65622_65684 = state_65611__$1;
(statearr_65622_65684[(1)] = (19));

} else {
var statearr_65623_65685 = state_65611__$1;
(statearr_65623_65685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (3))){
var inst_65609 = (state_65611[(2)]);
var state_65611__$1 = state_65611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65611__$1,inst_65609);
} else {
if((state_val_65612 === (12))){
var inst_65586 = (state_65611[(10)]);
var state_65611__$1 = state_65611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65611__$1,(14),inst_65586);
} else {
if((state_val_65612 === (2))){
var state_65611__$1 = state_65611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65611__$1,(4),results);
} else {
if((state_val_65612 === (19))){
var state_65611__$1 = state_65611;
var statearr_65624_65686 = state_65611__$1;
(statearr_65624_65686[(2)] = null);

(statearr_65624_65686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (11))){
var inst_65586 = (state_65611[(2)]);
var state_65611__$1 = (function (){var statearr_65625 = state_65611;
(statearr_65625[(10)] = inst_65586);

return statearr_65625;
})();
var statearr_65626_65687 = state_65611__$1;
(statearr_65626_65687[(2)] = null);

(statearr_65626_65687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (9))){
var state_65611__$1 = state_65611;
var statearr_65627_65688 = state_65611__$1;
(statearr_65627_65688[(2)] = null);

(statearr_65627_65688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (5))){
var state_65611__$1 = state_65611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65628_65689 = state_65611__$1;
(statearr_65628_65689[(1)] = (8));

} else {
var statearr_65629_65690 = state_65611__$1;
(statearr_65629_65690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (14))){
var inst_65591 = (state_65611[(11)]);
var inst_65589 = (state_65611[(8)]);
var inst_65589__$1 = (state_65611[(2)]);
var inst_65590 = (inst_65589__$1 == null);
var inst_65591__$1 = cljs.core.not.call(null,inst_65590);
var state_65611__$1 = (function (){var statearr_65630 = state_65611;
(statearr_65630[(11)] = inst_65591__$1);

(statearr_65630[(8)] = inst_65589__$1);

return statearr_65630;
})();
if(inst_65591__$1){
var statearr_65631_65691 = state_65611__$1;
(statearr_65631_65691[(1)] = (15));

} else {
var statearr_65632_65692 = state_65611__$1;
(statearr_65632_65692[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (16))){
var inst_65591 = (state_65611[(11)]);
var state_65611__$1 = state_65611;
var statearr_65633_65693 = state_65611__$1;
(statearr_65633_65693[(2)] = inst_65591);

(statearr_65633_65693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (10))){
var inst_65583 = (state_65611[(2)]);
var state_65611__$1 = state_65611;
var statearr_65634_65694 = state_65611__$1;
(statearr_65634_65694[(2)] = inst_65583);

(statearr_65634_65694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (18))){
var inst_65594 = (state_65611[(2)]);
var state_65611__$1 = state_65611;
var statearr_65635_65695 = state_65611__$1;
(statearr_65635_65695[(2)] = inst_65594);

(statearr_65635_65695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65612 === (8))){
var inst_65580 = cljs.core.async.close_BANG_.call(null,to);
var state_65611__$1 = state_65611;
var statearr_65636_65696 = state_65611__$1;
(statearr_65636_65696[(2)] = inst_65580);

(statearr_65636_65696[(1)] = (10));


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
});})(c__43716__auto__,jobs,results,process__$1,async))
;
return ((function (switch__43559__auto__,c__43716__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_65637 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_65637[(1)] = (1));

return statearr_65637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_65611){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65638){if((e65638 instanceof Object)){
var ex__43563__auto__ = e65638;
var statearr_65639_65697 = state_65611;
(statearr_65639_65697[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65698 = state_65611;
state_65611 = G__65698;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_65611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_65611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,jobs,results,process__$1,async))
})();
var state__43718__auto__ = (function (){var statearr_65640 = f__43717__auto__.call(null);
(statearr_65640[(6)] = c__43716__auto__);

return statearr_65640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__,jobs,results,process__$1,async))
);

return c__43716__auto__;
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
var G__65700 = arguments.length;
switch (G__65700) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__65703 = arguments.length;
switch (G__65703) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__65706 = arguments.length;
switch (G__65706) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__43716__auto___65755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___65755,tc,fc){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___65755,tc,fc){
return (function (state_65732){
var state_val_65733 = (state_65732[(1)]);
if((state_val_65733 === (7))){
var inst_65728 = (state_65732[(2)]);
var state_65732__$1 = state_65732;
var statearr_65734_65756 = state_65732__$1;
(statearr_65734_65756[(2)] = inst_65728);

(statearr_65734_65756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (1))){
var state_65732__$1 = state_65732;
var statearr_65735_65757 = state_65732__$1;
(statearr_65735_65757[(2)] = null);

(statearr_65735_65757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (4))){
var inst_65709 = (state_65732[(7)]);
var inst_65709__$1 = (state_65732[(2)]);
var inst_65710 = (inst_65709__$1 == null);
var state_65732__$1 = (function (){var statearr_65736 = state_65732;
(statearr_65736[(7)] = inst_65709__$1);

return statearr_65736;
})();
if(cljs.core.truth_(inst_65710)){
var statearr_65737_65758 = state_65732__$1;
(statearr_65737_65758[(1)] = (5));

} else {
var statearr_65738_65759 = state_65732__$1;
(statearr_65738_65759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (13))){
var state_65732__$1 = state_65732;
var statearr_65739_65760 = state_65732__$1;
(statearr_65739_65760[(2)] = null);

(statearr_65739_65760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (6))){
var inst_65709 = (state_65732[(7)]);
var inst_65715 = p.call(null,inst_65709);
var state_65732__$1 = state_65732;
if(cljs.core.truth_(inst_65715)){
var statearr_65740_65761 = state_65732__$1;
(statearr_65740_65761[(1)] = (9));

} else {
var statearr_65741_65762 = state_65732__$1;
(statearr_65741_65762[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (3))){
var inst_65730 = (state_65732[(2)]);
var state_65732__$1 = state_65732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65732__$1,inst_65730);
} else {
if((state_val_65733 === (12))){
var state_65732__$1 = state_65732;
var statearr_65742_65763 = state_65732__$1;
(statearr_65742_65763[(2)] = null);

(statearr_65742_65763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (2))){
var state_65732__$1 = state_65732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65732__$1,(4),ch);
} else {
if((state_val_65733 === (11))){
var inst_65709 = (state_65732[(7)]);
var inst_65719 = (state_65732[(2)]);
var state_65732__$1 = state_65732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65732__$1,(8),inst_65719,inst_65709);
} else {
if((state_val_65733 === (9))){
var state_65732__$1 = state_65732;
var statearr_65743_65764 = state_65732__$1;
(statearr_65743_65764[(2)] = tc);

(statearr_65743_65764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (5))){
var inst_65712 = cljs.core.async.close_BANG_.call(null,tc);
var inst_65713 = cljs.core.async.close_BANG_.call(null,fc);
var state_65732__$1 = (function (){var statearr_65744 = state_65732;
(statearr_65744[(8)] = inst_65712);

return statearr_65744;
})();
var statearr_65745_65765 = state_65732__$1;
(statearr_65745_65765[(2)] = inst_65713);

(statearr_65745_65765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (14))){
var inst_65726 = (state_65732[(2)]);
var state_65732__$1 = state_65732;
var statearr_65746_65766 = state_65732__$1;
(statearr_65746_65766[(2)] = inst_65726);

(statearr_65746_65766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (10))){
var state_65732__$1 = state_65732;
var statearr_65747_65767 = state_65732__$1;
(statearr_65747_65767[(2)] = fc);

(statearr_65747_65767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65733 === (8))){
var inst_65721 = (state_65732[(2)]);
var state_65732__$1 = state_65732;
if(cljs.core.truth_(inst_65721)){
var statearr_65748_65768 = state_65732__$1;
(statearr_65748_65768[(1)] = (12));

} else {
var statearr_65749_65769 = state_65732__$1;
(statearr_65749_65769[(1)] = (13));

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
});})(c__43716__auto___65755,tc,fc))
;
return ((function (switch__43559__auto__,c__43716__auto___65755,tc,fc){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_65750 = [null,null,null,null,null,null,null,null,null];
(statearr_65750[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_65750[(1)] = (1));

return statearr_65750;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_65732){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65751){if((e65751 instanceof Object)){
var ex__43563__auto__ = e65751;
var statearr_65752_65770 = state_65732;
(statearr_65752_65770[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65771 = state_65732;
state_65732 = G__65771;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_65732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_65732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___65755,tc,fc))
})();
var state__43718__auto__ = (function (){var statearr_65753 = f__43717__auto__.call(null);
(statearr_65753[(6)] = c__43716__auto___65755);

return statearr_65753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___65755,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__){
return (function (state_65792){
var state_val_65793 = (state_65792[(1)]);
if((state_val_65793 === (7))){
var inst_65788 = (state_65792[(2)]);
var state_65792__$1 = state_65792;
var statearr_65794_65812 = state_65792__$1;
(statearr_65794_65812[(2)] = inst_65788);

(statearr_65794_65812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65793 === (1))){
var inst_65772 = init;
var state_65792__$1 = (function (){var statearr_65795 = state_65792;
(statearr_65795[(7)] = inst_65772);

return statearr_65795;
})();
var statearr_65796_65813 = state_65792__$1;
(statearr_65796_65813[(2)] = null);

(statearr_65796_65813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65793 === (4))){
var inst_65775 = (state_65792[(8)]);
var inst_65775__$1 = (state_65792[(2)]);
var inst_65776 = (inst_65775__$1 == null);
var state_65792__$1 = (function (){var statearr_65797 = state_65792;
(statearr_65797[(8)] = inst_65775__$1);

return statearr_65797;
})();
if(cljs.core.truth_(inst_65776)){
var statearr_65798_65814 = state_65792__$1;
(statearr_65798_65814[(1)] = (5));

} else {
var statearr_65799_65815 = state_65792__$1;
(statearr_65799_65815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65793 === (6))){
var inst_65772 = (state_65792[(7)]);
var inst_65779 = (state_65792[(9)]);
var inst_65775 = (state_65792[(8)]);
var inst_65779__$1 = f.call(null,inst_65772,inst_65775);
var inst_65780 = cljs.core.reduced_QMARK_.call(null,inst_65779__$1);
var state_65792__$1 = (function (){var statearr_65800 = state_65792;
(statearr_65800[(9)] = inst_65779__$1);

return statearr_65800;
})();
if(inst_65780){
var statearr_65801_65816 = state_65792__$1;
(statearr_65801_65816[(1)] = (8));

} else {
var statearr_65802_65817 = state_65792__$1;
(statearr_65802_65817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65793 === (3))){
var inst_65790 = (state_65792[(2)]);
var state_65792__$1 = state_65792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65792__$1,inst_65790);
} else {
if((state_val_65793 === (2))){
var state_65792__$1 = state_65792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65792__$1,(4),ch);
} else {
if((state_val_65793 === (9))){
var inst_65779 = (state_65792[(9)]);
var inst_65772 = inst_65779;
var state_65792__$1 = (function (){var statearr_65803 = state_65792;
(statearr_65803[(7)] = inst_65772);

return statearr_65803;
})();
var statearr_65804_65818 = state_65792__$1;
(statearr_65804_65818[(2)] = null);

(statearr_65804_65818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65793 === (5))){
var inst_65772 = (state_65792[(7)]);
var state_65792__$1 = state_65792;
var statearr_65805_65819 = state_65792__$1;
(statearr_65805_65819[(2)] = inst_65772);

(statearr_65805_65819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65793 === (10))){
var inst_65786 = (state_65792[(2)]);
var state_65792__$1 = state_65792;
var statearr_65806_65820 = state_65792__$1;
(statearr_65806_65820[(2)] = inst_65786);

(statearr_65806_65820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65793 === (8))){
var inst_65779 = (state_65792[(9)]);
var inst_65782 = cljs.core.deref.call(null,inst_65779);
var state_65792__$1 = state_65792;
var statearr_65807_65821 = state_65792__$1;
(statearr_65807_65821[(2)] = inst_65782);

(statearr_65807_65821[(1)] = (10));


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
});})(c__43716__auto__))
;
return ((function (switch__43559__auto__,c__43716__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43560__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43560__auto____0 = (function (){
var statearr_65808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65808[(0)] = cljs$core$async$reduce_$_state_machine__43560__auto__);

(statearr_65808[(1)] = (1));

return statearr_65808;
});
var cljs$core$async$reduce_$_state_machine__43560__auto____1 = (function (state_65792){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65809){if((e65809 instanceof Object)){
var ex__43563__auto__ = e65809;
var statearr_65810_65822 = state_65792;
(statearr_65810_65822[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65823 = state_65792;
state_65792 = G__65823;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43560__auto__ = function(state_65792){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43560__auto____1.call(this,state_65792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43560__auto____0;
cljs$core$async$reduce_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43560__auto____1;
return cljs$core$async$reduce_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_65811 = f__43717__auto__.call(null);
(statearr_65811[(6)] = c__43716__auto__);

return statearr_65811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__))
);

return c__43716__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__,f__$1){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__,f__$1){
return (function (state_65829){
var state_val_65830 = (state_65829[(1)]);
if((state_val_65830 === (1))){
var inst_65824 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_65829__$1 = state_65829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65829__$1,(2),inst_65824);
} else {
if((state_val_65830 === (2))){
var inst_65826 = (state_65829[(2)]);
var inst_65827 = f__$1.call(null,inst_65826);
var state_65829__$1 = state_65829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65829__$1,inst_65827);
} else {
return null;
}
}
});})(c__43716__auto__,f__$1))
;
return ((function (switch__43559__auto__,c__43716__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__43560__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43560__auto____0 = (function (){
var statearr_65831 = [null,null,null,null,null,null,null];
(statearr_65831[(0)] = cljs$core$async$transduce_$_state_machine__43560__auto__);

(statearr_65831[(1)] = (1));

return statearr_65831;
});
var cljs$core$async$transduce_$_state_machine__43560__auto____1 = (function (state_65829){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65832){if((e65832 instanceof Object)){
var ex__43563__auto__ = e65832;
var statearr_65833_65835 = state_65829;
(statearr_65833_65835[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65836 = state_65829;
state_65829 = G__65836;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43560__auto__ = function(state_65829){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43560__auto____1.call(this,state_65829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43560__auto____0;
cljs$core$async$transduce_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43560__auto____1;
return cljs$core$async$transduce_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,f__$1))
})();
var state__43718__auto__ = (function (){var statearr_65834 = f__43717__auto__.call(null);
(statearr_65834[(6)] = c__43716__auto__);

return statearr_65834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__,f__$1))
);

return c__43716__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__65838 = arguments.length;
switch (G__65838) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__){
return (function (state_65863){
var state_val_65864 = (state_65863[(1)]);
if((state_val_65864 === (7))){
var inst_65845 = (state_65863[(2)]);
var state_65863__$1 = state_65863;
var statearr_65865_65886 = state_65863__$1;
(statearr_65865_65886[(2)] = inst_65845);

(statearr_65865_65886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (1))){
var inst_65839 = cljs.core.seq.call(null,coll);
var inst_65840 = inst_65839;
var state_65863__$1 = (function (){var statearr_65866 = state_65863;
(statearr_65866[(7)] = inst_65840);

return statearr_65866;
})();
var statearr_65867_65887 = state_65863__$1;
(statearr_65867_65887[(2)] = null);

(statearr_65867_65887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (4))){
var inst_65840 = (state_65863[(7)]);
var inst_65843 = cljs.core.first.call(null,inst_65840);
var state_65863__$1 = state_65863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65863__$1,(7),ch,inst_65843);
} else {
if((state_val_65864 === (13))){
var inst_65857 = (state_65863[(2)]);
var state_65863__$1 = state_65863;
var statearr_65868_65888 = state_65863__$1;
(statearr_65868_65888[(2)] = inst_65857);

(statearr_65868_65888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (6))){
var inst_65848 = (state_65863[(2)]);
var state_65863__$1 = state_65863;
if(cljs.core.truth_(inst_65848)){
var statearr_65869_65889 = state_65863__$1;
(statearr_65869_65889[(1)] = (8));

} else {
var statearr_65870_65890 = state_65863__$1;
(statearr_65870_65890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (3))){
var inst_65861 = (state_65863[(2)]);
var state_65863__$1 = state_65863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65863__$1,inst_65861);
} else {
if((state_val_65864 === (12))){
var state_65863__$1 = state_65863;
var statearr_65871_65891 = state_65863__$1;
(statearr_65871_65891[(2)] = null);

(statearr_65871_65891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (2))){
var inst_65840 = (state_65863[(7)]);
var state_65863__$1 = state_65863;
if(cljs.core.truth_(inst_65840)){
var statearr_65872_65892 = state_65863__$1;
(statearr_65872_65892[(1)] = (4));

} else {
var statearr_65873_65893 = state_65863__$1;
(statearr_65873_65893[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (11))){
var inst_65854 = cljs.core.async.close_BANG_.call(null,ch);
var state_65863__$1 = state_65863;
var statearr_65874_65894 = state_65863__$1;
(statearr_65874_65894[(2)] = inst_65854);

(statearr_65874_65894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (9))){
var state_65863__$1 = state_65863;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65875_65895 = state_65863__$1;
(statearr_65875_65895[(1)] = (11));

} else {
var statearr_65876_65896 = state_65863__$1;
(statearr_65876_65896[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (5))){
var inst_65840 = (state_65863[(7)]);
var state_65863__$1 = state_65863;
var statearr_65877_65897 = state_65863__$1;
(statearr_65877_65897[(2)] = inst_65840);

(statearr_65877_65897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (10))){
var inst_65859 = (state_65863[(2)]);
var state_65863__$1 = state_65863;
var statearr_65878_65898 = state_65863__$1;
(statearr_65878_65898[(2)] = inst_65859);

(statearr_65878_65898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65864 === (8))){
var inst_65840 = (state_65863[(7)]);
var inst_65850 = cljs.core.next.call(null,inst_65840);
var inst_65840__$1 = inst_65850;
var state_65863__$1 = (function (){var statearr_65879 = state_65863;
(statearr_65879[(7)] = inst_65840__$1);

return statearr_65879;
})();
var statearr_65880_65899 = state_65863__$1;
(statearr_65880_65899[(2)] = null);

(statearr_65880_65899[(1)] = (2));


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
});})(c__43716__auto__))
;
return ((function (switch__43559__auto__,c__43716__auto__){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_65881 = [null,null,null,null,null,null,null,null];
(statearr_65881[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_65881[(1)] = (1));

return statearr_65881;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_65863){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_65863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e65882){if((e65882 instanceof Object)){
var ex__43563__auto__ = e65882;
var statearr_65883_65900 = state_65863;
(statearr_65883_65900[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65901 = state_65863;
state_65863 = G__65901;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_65863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_65863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_65884 = f__43717__auto__.call(null);
(statearr_65884[(6)] = c__43716__auto__);

return statearr_65884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__))
);

return c__43716__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async65902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65902 = (function (ch,cs,meta65903){
this.ch = ch;
this.cs = cs;
this.meta65903 = meta65903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async65902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_65904,meta65903__$1){
var self__ = this;
var _65904__$1 = this;
return (new cljs.core.async.t_cljs$core$async65902(self__.ch,self__.cs,meta65903__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async65902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_65904){
var self__ = this;
var _65904__$1 = this;
return self__.meta65903;
});})(cs))
;

cljs.core.async.t_cljs$core$async65902.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async65902.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65902.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async65902.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async65902.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async65902.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta65903","meta65903",-173840486,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async65902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65902";

cljs.core.async.t_cljs$core$async65902.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async65902");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65902.
 */
cljs.core.async.__GT_t_cljs$core$async65902 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async65902(ch__$1,cs__$1,meta65903){
return (new cljs.core.async.t_cljs$core$async65902(ch__$1,cs__$1,meta65903));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async65902(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__43716__auto___66124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___66124,cs,m,dchan,dctr,done){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___66124,cs,m,dchan,dctr,done){
return (function (state_66039){
var state_val_66040 = (state_66039[(1)]);
if((state_val_66040 === (7))){
var inst_66035 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66041_66125 = state_66039__$1;
(statearr_66041_66125[(2)] = inst_66035);

(statearr_66041_66125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (20))){
var inst_65938 = (state_66039[(7)]);
var inst_65950 = cljs.core.first.call(null,inst_65938);
var inst_65951 = cljs.core.nth.call(null,inst_65950,(0),null);
var inst_65952 = cljs.core.nth.call(null,inst_65950,(1),null);
var state_66039__$1 = (function (){var statearr_66042 = state_66039;
(statearr_66042[(8)] = inst_65951);

return statearr_66042;
})();
if(cljs.core.truth_(inst_65952)){
var statearr_66043_66126 = state_66039__$1;
(statearr_66043_66126[(1)] = (22));

} else {
var statearr_66044_66127 = state_66039__$1;
(statearr_66044_66127[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (27))){
var inst_65907 = (state_66039[(9)]);
var inst_65980 = (state_66039[(10)]);
var inst_65987 = (state_66039[(11)]);
var inst_65982 = (state_66039[(12)]);
var inst_65987__$1 = cljs.core._nth.call(null,inst_65980,inst_65982);
var inst_65988 = cljs.core.async.put_BANG_.call(null,inst_65987__$1,inst_65907,done);
var state_66039__$1 = (function (){var statearr_66045 = state_66039;
(statearr_66045[(11)] = inst_65987__$1);

return statearr_66045;
})();
if(cljs.core.truth_(inst_65988)){
var statearr_66046_66128 = state_66039__$1;
(statearr_66046_66128[(1)] = (30));

} else {
var statearr_66047_66129 = state_66039__$1;
(statearr_66047_66129[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (1))){
var state_66039__$1 = state_66039;
var statearr_66048_66130 = state_66039__$1;
(statearr_66048_66130[(2)] = null);

(statearr_66048_66130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (24))){
var inst_65938 = (state_66039[(7)]);
var inst_65957 = (state_66039[(2)]);
var inst_65958 = cljs.core.next.call(null,inst_65938);
var inst_65916 = inst_65958;
var inst_65917 = null;
var inst_65918 = (0);
var inst_65919 = (0);
var state_66039__$1 = (function (){var statearr_66049 = state_66039;
(statearr_66049[(13)] = inst_65957);

(statearr_66049[(14)] = inst_65916);

(statearr_66049[(15)] = inst_65918);

(statearr_66049[(16)] = inst_65919);

(statearr_66049[(17)] = inst_65917);

return statearr_66049;
})();
var statearr_66050_66131 = state_66039__$1;
(statearr_66050_66131[(2)] = null);

(statearr_66050_66131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (39))){
var state_66039__$1 = state_66039;
var statearr_66054_66132 = state_66039__$1;
(statearr_66054_66132[(2)] = null);

(statearr_66054_66132[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (4))){
var inst_65907 = (state_66039[(9)]);
var inst_65907__$1 = (state_66039[(2)]);
var inst_65908 = (inst_65907__$1 == null);
var state_66039__$1 = (function (){var statearr_66055 = state_66039;
(statearr_66055[(9)] = inst_65907__$1);

return statearr_66055;
})();
if(cljs.core.truth_(inst_65908)){
var statearr_66056_66133 = state_66039__$1;
(statearr_66056_66133[(1)] = (5));

} else {
var statearr_66057_66134 = state_66039__$1;
(statearr_66057_66134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (15))){
var inst_65916 = (state_66039[(14)]);
var inst_65918 = (state_66039[(15)]);
var inst_65919 = (state_66039[(16)]);
var inst_65917 = (state_66039[(17)]);
var inst_65934 = (state_66039[(2)]);
var inst_65935 = (inst_65919 + (1));
var tmp66051 = inst_65916;
var tmp66052 = inst_65918;
var tmp66053 = inst_65917;
var inst_65916__$1 = tmp66051;
var inst_65917__$1 = tmp66053;
var inst_65918__$1 = tmp66052;
var inst_65919__$1 = inst_65935;
var state_66039__$1 = (function (){var statearr_66058 = state_66039;
(statearr_66058[(14)] = inst_65916__$1);

(statearr_66058[(15)] = inst_65918__$1);

(statearr_66058[(16)] = inst_65919__$1);

(statearr_66058[(18)] = inst_65934);

(statearr_66058[(17)] = inst_65917__$1);

return statearr_66058;
})();
var statearr_66059_66135 = state_66039__$1;
(statearr_66059_66135[(2)] = null);

(statearr_66059_66135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (21))){
var inst_65961 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66063_66136 = state_66039__$1;
(statearr_66063_66136[(2)] = inst_65961);

(statearr_66063_66136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (31))){
var inst_65987 = (state_66039[(11)]);
var inst_65991 = done.call(null,null);
var inst_65992 = cljs.core.async.untap_STAR_.call(null,m,inst_65987);
var state_66039__$1 = (function (){var statearr_66064 = state_66039;
(statearr_66064[(19)] = inst_65991);

return statearr_66064;
})();
var statearr_66065_66137 = state_66039__$1;
(statearr_66065_66137[(2)] = inst_65992);

(statearr_66065_66137[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (32))){
var inst_65980 = (state_66039[(10)]);
var inst_65981 = (state_66039[(20)]);
var inst_65979 = (state_66039[(21)]);
var inst_65982 = (state_66039[(12)]);
var inst_65994 = (state_66039[(2)]);
var inst_65995 = (inst_65982 + (1));
var tmp66060 = inst_65980;
var tmp66061 = inst_65981;
var tmp66062 = inst_65979;
var inst_65979__$1 = tmp66062;
var inst_65980__$1 = tmp66060;
var inst_65981__$1 = tmp66061;
var inst_65982__$1 = inst_65995;
var state_66039__$1 = (function (){var statearr_66066 = state_66039;
(statearr_66066[(10)] = inst_65980__$1);

(statearr_66066[(20)] = inst_65981__$1);

(statearr_66066[(21)] = inst_65979__$1);

(statearr_66066[(12)] = inst_65982__$1);

(statearr_66066[(22)] = inst_65994);

return statearr_66066;
})();
var statearr_66067_66138 = state_66039__$1;
(statearr_66067_66138[(2)] = null);

(statearr_66067_66138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (40))){
var inst_66007 = (state_66039[(23)]);
var inst_66011 = done.call(null,null);
var inst_66012 = cljs.core.async.untap_STAR_.call(null,m,inst_66007);
var state_66039__$1 = (function (){var statearr_66068 = state_66039;
(statearr_66068[(24)] = inst_66011);

return statearr_66068;
})();
var statearr_66069_66139 = state_66039__$1;
(statearr_66069_66139[(2)] = inst_66012);

(statearr_66069_66139[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (33))){
var inst_65998 = (state_66039[(25)]);
var inst_66000 = cljs.core.chunked_seq_QMARK_.call(null,inst_65998);
var state_66039__$1 = state_66039;
if(inst_66000){
var statearr_66070_66140 = state_66039__$1;
(statearr_66070_66140[(1)] = (36));

} else {
var statearr_66071_66141 = state_66039__$1;
(statearr_66071_66141[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (13))){
var inst_65928 = (state_66039[(26)]);
var inst_65931 = cljs.core.async.close_BANG_.call(null,inst_65928);
var state_66039__$1 = state_66039;
var statearr_66072_66142 = state_66039__$1;
(statearr_66072_66142[(2)] = inst_65931);

(statearr_66072_66142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (22))){
var inst_65951 = (state_66039[(8)]);
var inst_65954 = cljs.core.async.close_BANG_.call(null,inst_65951);
var state_66039__$1 = state_66039;
var statearr_66073_66143 = state_66039__$1;
(statearr_66073_66143[(2)] = inst_65954);

(statearr_66073_66143[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (36))){
var inst_65998 = (state_66039[(25)]);
var inst_66002 = cljs.core.chunk_first.call(null,inst_65998);
var inst_66003 = cljs.core.chunk_rest.call(null,inst_65998);
var inst_66004 = cljs.core.count.call(null,inst_66002);
var inst_65979 = inst_66003;
var inst_65980 = inst_66002;
var inst_65981 = inst_66004;
var inst_65982 = (0);
var state_66039__$1 = (function (){var statearr_66074 = state_66039;
(statearr_66074[(10)] = inst_65980);

(statearr_66074[(20)] = inst_65981);

(statearr_66074[(21)] = inst_65979);

(statearr_66074[(12)] = inst_65982);

return statearr_66074;
})();
var statearr_66075_66144 = state_66039__$1;
(statearr_66075_66144[(2)] = null);

(statearr_66075_66144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (41))){
var inst_65998 = (state_66039[(25)]);
var inst_66014 = (state_66039[(2)]);
var inst_66015 = cljs.core.next.call(null,inst_65998);
var inst_65979 = inst_66015;
var inst_65980 = null;
var inst_65981 = (0);
var inst_65982 = (0);
var state_66039__$1 = (function (){var statearr_66076 = state_66039;
(statearr_66076[(10)] = inst_65980);

(statearr_66076[(27)] = inst_66014);

(statearr_66076[(20)] = inst_65981);

(statearr_66076[(21)] = inst_65979);

(statearr_66076[(12)] = inst_65982);

return statearr_66076;
})();
var statearr_66077_66145 = state_66039__$1;
(statearr_66077_66145[(2)] = null);

(statearr_66077_66145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (43))){
var state_66039__$1 = state_66039;
var statearr_66078_66146 = state_66039__$1;
(statearr_66078_66146[(2)] = null);

(statearr_66078_66146[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (29))){
var inst_66023 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66079_66147 = state_66039__$1;
(statearr_66079_66147[(2)] = inst_66023);

(statearr_66079_66147[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (44))){
var inst_66032 = (state_66039[(2)]);
var state_66039__$1 = (function (){var statearr_66080 = state_66039;
(statearr_66080[(28)] = inst_66032);

return statearr_66080;
})();
var statearr_66081_66148 = state_66039__$1;
(statearr_66081_66148[(2)] = null);

(statearr_66081_66148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (6))){
var inst_65971 = (state_66039[(29)]);
var inst_65970 = cljs.core.deref.call(null,cs);
var inst_65971__$1 = cljs.core.keys.call(null,inst_65970);
var inst_65972 = cljs.core.count.call(null,inst_65971__$1);
var inst_65973 = cljs.core.reset_BANG_.call(null,dctr,inst_65972);
var inst_65978 = cljs.core.seq.call(null,inst_65971__$1);
var inst_65979 = inst_65978;
var inst_65980 = null;
var inst_65981 = (0);
var inst_65982 = (0);
var state_66039__$1 = (function (){var statearr_66082 = state_66039;
(statearr_66082[(30)] = inst_65973);

(statearr_66082[(10)] = inst_65980);

(statearr_66082[(20)] = inst_65981);

(statearr_66082[(21)] = inst_65979);

(statearr_66082[(12)] = inst_65982);

(statearr_66082[(29)] = inst_65971__$1);

return statearr_66082;
})();
var statearr_66083_66149 = state_66039__$1;
(statearr_66083_66149[(2)] = null);

(statearr_66083_66149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (28))){
var inst_65998 = (state_66039[(25)]);
var inst_65979 = (state_66039[(21)]);
var inst_65998__$1 = cljs.core.seq.call(null,inst_65979);
var state_66039__$1 = (function (){var statearr_66084 = state_66039;
(statearr_66084[(25)] = inst_65998__$1);

return statearr_66084;
})();
if(inst_65998__$1){
var statearr_66085_66150 = state_66039__$1;
(statearr_66085_66150[(1)] = (33));

} else {
var statearr_66086_66151 = state_66039__$1;
(statearr_66086_66151[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (25))){
var inst_65981 = (state_66039[(20)]);
var inst_65982 = (state_66039[(12)]);
var inst_65984 = (inst_65982 < inst_65981);
var inst_65985 = inst_65984;
var state_66039__$1 = state_66039;
if(cljs.core.truth_(inst_65985)){
var statearr_66087_66152 = state_66039__$1;
(statearr_66087_66152[(1)] = (27));

} else {
var statearr_66088_66153 = state_66039__$1;
(statearr_66088_66153[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (34))){
var state_66039__$1 = state_66039;
var statearr_66089_66154 = state_66039__$1;
(statearr_66089_66154[(2)] = null);

(statearr_66089_66154[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (17))){
var state_66039__$1 = state_66039;
var statearr_66090_66155 = state_66039__$1;
(statearr_66090_66155[(2)] = null);

(statearr_66090_66155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (3))){
var inst_66037 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66039__$1,inst_66037);
} else {
if((state_val_66040 === (12))){
var inst_65966 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66091_66156 = state_66039__$1;
(statearr_66091_66156[(2)] = inst_65966);

(statearr_66091_66156[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (2))){
var state_66039__$1 = state_66039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66039__$1,(4),ch);
} else {
if((state_val_66040 === (23))){
var state_66039__$1 = state_66039;
var statearr_66092_66157 = state_66039__$1;
(statearr_66092_66157[(2)] = null);

(statearr_66092_66157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (35))){
var inst_66021 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66093_66158 = state_66039__$1;
(statearr_66093_66158[(2)] = inst_66021);

(statearr_66093_66158[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (19))){
var inst_65938 = (state_66039[(7)]);
var inst_65942 = cljs.core.chunk_first.call(null,inst_65938);
var inst_65943 = cljs.core.chunk_rest.call(null,inst_65938);
var inst_65944 = cljs.core.count.call(null,inst_65942);
var inst_65916 = inst_65943;
var inst_65917 = inst_65942;
var inst_65918 = inst_65944;
var inst_65919 = (0);
var state_66039__$1 = (function (){var statearr_66094 = state_66039;
(statearr_66094[(14)] = inst_65916);

(statearr_66094[(15)] = inst_65918);

(statearr_66094[(16)] = inst_65919);

(statearr_66094[(17)] = inst_65917);

return statearr_66094;
})();
var statearr_66095_66159 = state_66039__$1;
(statearr_66095_66159[(2)] = null);

(statearr_66095_66159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (11))){
var inst_65916 = (state_66039[(14)]);
var inst_65938 = (state_66039[(7)]);
var inst_65938__$1 = cljs.core.seq.call(null,inst_65916);
var state_66039__$1 = (function (){var statearr_66096 = state_66039;
(statearr_66096[(7)] = inst_65938__$1);

return statearr_66096;
})();
if(inst_65938__$1){
var statearr_66097_66160 = state_66039__$1;
(statearr_66097_66160[(1)] = (16));

} else {
var statearr_66098_66161 = state_66039__$1;
(statearr_66098_66161[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (9))){
var inst_65968 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66099_66162 = state_66039__$1;
(statearr_66099_66162[(2)] = inst_65968);

(statearr_66099_66162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (5))){
var inst_65914 = cljs.core.deref.call(null,cs);
var inst_65915 = cljs.core.seq.call(null,inst_65914);
var inst_65916 = inst_65915;
var inst_65917 = null;
var inst_65918 = (0);
var inst_65919 = (0);
var state_66039__$1 = (function (){var statearr_66100 = state_66039;
(statearr_66100[(14)] = inst_65916);

(statearr_66100[(15)] = inst_65918);

(statearr_66100[(16)] = inst_65919);

(statearr_66100[(17)] = inst_65917);

return statearr_66100;
})();
var statearr_66101_66163 = state_66039__$1;
(statearr_66101_66163[(2)] = null);

(statearr_66101_66163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (14))){
var state_66039__$1 = state_66039;
var statearr_66102_66164 = state_66039__$1;
(statearr_66102_66164[(2)] = null);

(statearr_66102_66164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (45))){
var inst_66029 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66103_66165 = state_66039__$1;
(statearr_66103_66165[(2)] = inst_66029);

(statearr_66103_66165[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (26))){
var inst_65971 = (state_66039[(29)]);
var inst_66025 = (state_66039[(2)]);
var inst_66026 = cljs.core.seq.call(null,inst_65971);
var state_66039__$1 = (function (){var statearr_66104 = state_66039;
(statearr_66104[(31)] = inst_66025);

return statearr_66104;
})();
if(inst_66026){
var statearr_66105_66166 = state_66039__$1;
(statearr_66105_66166[(1)] = (42));

} else {
var statearr_66106_66167 = state_66039__$1;
(statearr_66106_66167[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (16))){
var inst_65938 = (state_66039[(7)]);
var inst_65940 = cljs.core.chunked_seq_QMARK_.call(null,inst_65938);
var state_66039__$1 = state_66039;
if(inst_65940){
var statearr_66107_66168 = state_66039__$1;
(statearr_66107_66168[(1)] = (19));

} else {
var statearr_66108_66169 = state_66039__$1;
(statearr_66108_66169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (38))){
var inst_66018 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66109_66170 = state_66039__$1;
(statearr_66109_66170[(2)] = inst_66018);

(statearr_66109_66170[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (30))){
var state_66039__$1 = state_66039;
var statearr_66110_66171 = state_66039__$1;
(statearr_66110_66171[(2)] = null);

(statearr_66110_66171[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (10))){
var inst_65919 = (state_66039[(16)]);
var inst_65917 = (state_66039[(17)]);
var inst_65927 = cljs.core._nth.call(null,inst_65917,inst_65919);
var inst_65928 = cljs.core.nth.call(null,inst_65927,(0),null);
var inst_65929 = cljs.core.nth.call(null,inst_65927,(1),null);
var state_66039__$1 = (function (){var statearr_66111 = state_66039;
(statearr_66111[(26)] = inst_65928);

return statearr_66111;
})();
if(cljs.core.truth_(inst_65929)){
var statearr_66112_66172 = state_66039__$1;
(statearr_66112_66172[(1)] = (13));

} else {
var statearr_66113_66173 = state_66039__$1;
(statearr_66113_66173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (18))){
var inst_65964 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66114_66174 = state_66039__$1;
(statearr_66114_66174[(2)] = inst_65964);

(statearr_66114_66174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (42))){
var state_66039__$1 = state_66039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66039__$1,(45),dchan);
} else {
if((state_val_66040 === (37))){
var inst_65907 = (state_66039[(9)]);
var inst_65998 = (state_66039[(25)]);
var inst_66007 = (state_66039[(23)]);
var inst_66007__$1 = cljs.core.first.call(null,inst_65998);
var inst_66008 = cljs.core.async.put_BANG_.call(null,inst_66007__$1,inst_65907,done);
var state_66039__$1 = (function (){var statearr_66115 = state_66039;
(statearr_66115[(23)] = inst_66007__$1);

return statearr_66115;
})();
if(cljs.core.truth_(inst_66008)){
var statearr_66116_66175 = state_66039__$1;
(statearr_66116_66175[(1)] = (39));

} else {
var statearr_66117_66176 = state_66039__$1;
(statearr_66117_66176[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (8))){
var inst_65918 = (state_66039[(15)]);
var inst_65919 = (state_66039[(16)]);
var inst_65921 = (inst_65919 < inst_65918);
var inst_65922 = inst_65921;
var state_66039__$1 = state_66039;
if(cljs.core.truth_(inst_65922)){
var statearr_66118_66177 = state_66039__$1;
(statearr_66118_66177[(1)] = (10));

} else {
var statearr_66119_66178 = state_66039__$1;
(statearr_66119_66178[(1)] = (11));

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
});})(c__43716__auto___66124,cs,m,dchan,dctr,done))
;
return ((function (switch__43559__auto__,c__43716__auto___66124,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43560__auto__ = null;
var cljs$core$async$mult_$_state_machine__43560__auto____0 = (function (){
var statearr_66120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66120[(0)] = cljs$core$async$mult_$_state_machine__43560__auto__);

(statearr_66120[(1)] = (1));

return statearr_66120;
});
var cljs$core$async$mult_$_state_machine__43560__auto____1 = (function (state_66039){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_66039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e66121){if((e66121 instanceof Object)){
var ex__43563__auto__ = e66121;
var statearr_66122_66179 = state_66039;
(statearr_66122_66179[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66180 = state_66039;
state_66039 = G__66180;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43560__auto__ = function(state_66039){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43560__auto____1.call(this,state_66039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43560__auto____0;
cljs$core$async$mult_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43560__auto____1;
return cljs$core$async$mult_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___66124,cs,m,dchan,dctr,done))
})();
var state__43718__auto__ = (function (){var statearr_66123 = f__43717__auto__.call(null);
(statearr_66123[(6)] = c__43716__auto___66124);

return statearr_66123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___66124,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__66182 = arguments.length;
switch (G__66182) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___66194 = arguments.length;
var i__4500__auto___66195 = (0);
while(true){
if((i__4500__auto___66195 < len__4499__auto___66194)){
args__4502__auto__.push((arguments[i__4500__auto___66195]));

var G__66196 = (i__4500__auto___66195 + (1));
i__4500__auto___66195 = G__66196;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__66188){
var map__66189 = p__66188;
var map__66189__$1 = ((((!((map__66189 == null)))?(((((map__66189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66189):map__66189);
var opts = map__66189__$1;
var statearr_66191_66197 = state;
(statearr_66191_66197[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__66189,map__66189__$1,opts){
return (function (val){
var statearr_66192_66198 = state;
(statearr_66192_66198[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__66189,map__66189__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_66193_66199 = state;
(statearr_66193_66199[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq66184){
var G__66185 = cljs.core.first.call(null,seq66184);
var seq66184__$1 = cljs.core.next.call(null,seq66184);
var G__66186 = cljs.core.first.call(null,seq66184__$1);
var seq66184__$2 = cljs.core.next.call(null,seq66184__$1);
var G__66187 = cljs.core.first.call(null,seq66184__$2);
var seq66184__$3 = cljs.core.next.call(null,seq66184__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66185,G__66186,G__66187,seq66184__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async66200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66200 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta66201){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta66201 = meta66201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_66202,meta66201__$1){
var self__ = this;
var _66202__$1 = this;
return (new cljs.core.async.t_cljs$core$async66200(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta66201__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_66202){
var self__ = this;
var _66202__$1 = this;
return self__.meta66201;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66200.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66200.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta66201","meta66201",2010467992,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66200";

cljs.core.async.t_cljs$core$async66200.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async66200");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66200.
 */
cljs.core.async.__GT_t_cljs$core$async66200 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async66200(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta66201){
return (new cljs.core.async.t_cljs$core$async66200(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta66201));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async66200(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43716__auto___66364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___66364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___66364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_66304){
var state_val_66305 = (state_66304[(1)]);
if((state_val_66305 === (7))){
var inst_66219 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
var statearr_66306_66365 = state_66304__$1;
(statearr_66306_66365[(2)] = inst_66219);

(statearr_66306_66365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (20))){
var inst_66231 = (state_66304[(7)]);
var state_66304__$1 = state_66304;
var statearr_66307_66366 = state_66304__$1;
(statearr_66307_66366[(2)] = inst_66231);

(statearr_66307_66366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (27))){
var state_66304__$1 = state_66304;
var statearr_66308_66367 = state_66304__$1;
(statearr_66308_66367[(2)] = null);

(statearr_66308_66367[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (1))){
var inst_66206 = (state_66304[(8)]);
var inst_66206__$1 = calc_state.call(null);
var inst_66208 = (inst_66206__$1 == null);
var inst_66209 = cljs.core.not.call(null,inst_66208);
var state_66304__$1 = (function (){var statearr_66309 = state_66304;
(statearr_66309[(8)] = inst_66206__$1);

return statearr_66309;
})();
if(inst_66209){
var statearr_66310_66368 = state_66304__$1;
(statearr_66310_66368[(1)] = (2));

} else {
var statearr_66311_66369 = state_66304__$1;
(statearr_66311_66369[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (24))){
var inst_66264 = (state_66304[(9)]);
var inst_66255 = (state_66304[(10)]);
var inst_66278 = (state_66304[(11)]);
var inst_66278__$1 = inst_66255.call(null,inst_66264);
var state_66304__$1 = (function (){var statearr_66312 = state_66304;
(statearr_66312[(11)] = inst_66278__$1);

return statearr_66312;
})();
if(cljs.core.truth_(inst_66278__$1)){
var statearr_66313_66370 = state_66304__$1;
(statearr_66313_66370[(1)] = (29));

} else {
var statearr_66314_66371 = state_66304__$1;
(statearr_66314_66371[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (4))){
var inst_66222 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
if(cljs.core.truth_(inst_66222)){
var statearr_66315_66372 = state_66304__$1;
(statearr_66315_66372[(1)] = (8));

} else {
var statearr_66316_66373 = state_66304__$1;
(statearr_66316_66373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (15))){
var inst_66249 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
if(cljs.core.truth_(inst_66249)){
var statearr_66317_66374 = state_66304__$1;
(statearr_66317_66374[(1)] = (19));

} else {
var statearr_66318_66375 = state_66304__$1;
(statearr_66318_66375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (21))){
var inst_66254 = (state_66304[(12)]);
var inst_66254__$1 = (state_66304[(2)]);
var inst_66255 = cljs.core.get.call(null,inst_66254__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_66256 = cljs.core.get.call(null,inst_66254__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_66257 = cljs.core.get.call(null,inst_66254__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_66304__$1 = (function (){var statearr_66319 = state_66304;
(statearr_66319[(10)] = inst_66255);

(statearr_66319[(12)] = inst_66254__$1);

(statearr_66319[(13)] = inst_66256);

return statearr_66319;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_66304__$1,(22),inst_66257);
} else {
if((state_val_66305 === (31))){
var inst_66286 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
if(cljs.core.truth_(inst_66286)){
var statearr_66320_66376 = state_66304__$1;
(statearr_66320_66376[(1)] = (32));

} else {
var statearr_66321_66377 = state_66304__$1;
(statearr_66321_66377[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (32))){
var inst_66263 = (state_66304[(14)]);
var state_66304__$1 = state_66304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66304__$1,(35),out,inst_66263);
} else {
if((state_val_66305 === (33))){
var inst_66254 = (state_66304[(12)]);
var inst_66231 = inst_66254;
var state_66304__$1 = (function (){var statearr_66322 = state_66304;
(statearr_66322[(7)] = inst_66231);

return statearr_66322;
})();
var statearr_66323_66378 = state_66304__$1;
(statearr_66323_66378[(2)] = null);

(statearr_66323_66378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (13))){
var inst_66231 = (state_66304[(7)]);
var inst_66238 = inst_66231.cljs$lang$protocol_mask$partition0$;
var inst_66239 = (inst_66238 & (64));
var inst_66240 = inst_66231.cljs$core$ISeq$;
var inst_66241 = (cljs.core.PROTOCOL_SENTINEL === inst_66240);
var inst_66242 = ((inst_66239) || (inst_66241));
var state_66304__$1 = state_66304;
if(cljs.core.truth_(inst_66242)){
var statearr_66324_66379 = state_66304__$1;
(statearr_66324_66379[(1)] = (16));

} else {
var statearr_66325_66380 = state_66304__$1;
(statearr_66325_66380[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (22))){
var inst_66264 = (state_66304[(9)]);
var inst_66263 = (state_66304[(14)]);
var inst_66262 = (state_66304[(2)]);
var inst_66263__$1 = cljs.core.nth.call(null,inst_66262,(0),null);
var inst_66264__$1 = cljs.core.nth.call(null,inst_66262,(1),null);
var inst_66265 = (inst_66263__$1 == null);
var inst_66266 = cljs.core._EQ_.call(null,inst_66264__$1,change);
var inst_66267 = ((inst_66265) || (inst_66266));
var state_66304__$1 = (function (){var statearr_66326 = state_66304;
(statearr_66326[(9)] = inst_66264__$1);

(statearr_66326[(14)] = inst_66263__$1);

return statearr_66326;
})();
if(cljs.core.truth_(inst_66267)){
var statearr_66327_66381 = state_66304__$1;
(statearr_66327_66381[(1)] = (23));

} else {
var statearr_66328_66382 = state_66304__$1;
(statearr_66328_66382[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (36))){
var inst_66254 = (state_66304[(12)]);
var inst_66231 = inst_66254;
var state_66304__$1 = (function (){var statearr_66329 = state_66304;
(statearr_66329[(7)] = inst_66231);

return statearr_66329;
})();
var statearr_66330_66383 = state_66304__$1;
(statearr_66330_66383[(2)] = null);

(statearr_66330_66383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (29))){
var inst_66278 = (state_66304[(11)]);
var state_66304__$1 = state_66304;
var statearr_66331_66384 = state_66304__$1;
(statearr_66331_66384[(2)] = inst_66278);

(statearr_66331_66384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (6))){
var state_66304__$1 = state_66304;
var statearr_66332_66385 = state_66304__$1;
(statearr_66332_66385[(2)] = false);

(statearr_66332_66385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (28))){
var inst_66274 = (state_66304[(2)]);
var inst_66275 = calc_state.call(null);
var inst_66231 = inst_66275;
var state_66304__$1 = (function (){var statearr_66333 = state_66304;
(statearr_66333[(7)] = inst_66231);

(statearr_66333[(15)] = inst_66274);

return statearr_66333;
})();
var statearr_66334_66386 = state_66304__$1;
(statearr_66334_66386[(2)] = null);

(statearr_66334_66386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (25))){
var inst_66300 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
var statearr_66335_66387 = state_66304__$1;
(statearr_66335_66387[(2)] = inst_66300);

(statearr_66335_66387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (34))){
var inst_66298 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
var statearr_66336_66388 = state_66304__$1;
(statearr_66336_66388[(2)] = inst_66298);

(statearr_66336_66388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (17))){
var state_66304__$1 = state_66304;
var statearr_66337_66389 = state_66304__$1;
(statearr_66337_66389[(2)] = false);

(statearr_66337_66389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (3))){
var state_66304__$1 = state_66304;
var statearr_66338_66390 = state_66304__$1;
(statearr_66338_66390[(2)] = false);

(statearr_66338_66390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (12))){
var inst_66302 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66304__$1,inst_66302);
} else {
if((state_val_66305 === (2))){
var inst_66206 = (state_66304[(8)]);
var inst_66211 = inst_66206.cljs$lang$protocol_mask$partition0$;
var inst_66212 = (inst_66211 & (64));
var inst_66213 = inst_66206.cljs$core$ISeq$;
var inst_66214 = (cljs.core.PROTOCOL_SENTINEL === inst_66213);
var inst_66215 = ((inst_66212) || (inst_66214));
var state_66304__$1 = state_66304;
if(cljs.core.truth_(inst_66215)){
var statearr_66339_66391 = state_66304__$1;
(statearr_66339_66391[(1)] = (5));

} else {
var statearr_66340_66392 = state_66304__$1;
(statearr_66340_66392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (23))){
var inst_66263 = (state_66304[(14)]);
var inst_66269 = (inst_66263 == null);
var state_66304__$1 = state_66304;
if(cljs.core.truth_(inst_66269)){
var statearr_66341_66393 = state_66304__$1;
(statearr_66341_66393[(1)] = (26));

} else {
var statearr_66342_66394 = state_66304__$1;
(statearr_66342_66394[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (35))){
var inst_66289 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
if(cljs.core.truth_(inst_66289)){
var statearr_66343_66395 = state_66304__$1;
(statearr_66343_66395[(1)] = (36));

} else {
var statearr_66344_66396 = state_66304__$1;
(statearr_66344_66396[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (19))){
var inst_66231 = (state_66304[(7)]);
var inst_66251 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66231);
var state_66304__$1 = state_66304;
var statearr_66345_66397 = state_66304__$1;
(statearr_66345_66397[(2)] = inst_66251);

(statearr_66345_66397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (11))){
var inst_66231 = (state_66304[(7)]);
var inst_66235 = (inst_66231 == null);
var inst_66236 = cljs.core.not.call(null,inst_66235);
var state_66304__$1 = state_66304;
if(inst_66236){
var statearr_66346_66398 = state_66304__$1;
(statearr_66346_66398[(1)] = (13));

} else {
var statearr_66347_66399 = state_66304__$1;
(statearr_66347_66399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (9))){
var inst_66206 = (state_66304[(8)]);
var state_66304__$1 = state_66304;
var statearr_66348_66400 = state_66304__$1;
(statearr_66348_66400[(2)] = inst_66206);

(statearr_66348_66400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (5))){
var state_66304__$1 = state_66304;
var statearr_66349_66401 = state_66304__$1;
(statearr_66349_66401[(2)] = true);

(statearr_66349_66401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (14))){
var state_66304__$1 = state_66304;
var statearr_66350_66402 = state_66304__$1;
(statearr_66350_66402[(2)] = false);

(statearr_66350_66402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (26))){
var inst_66264 = (state_66304[(9)]);
var inst_66271 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_66264);
var state_66304__$1 = state_66304;
var statearr_66351_66403 = state_66304__$1;
(statearr_66351_66403[(2)] = inst_66271);

(statearr_66351_66403[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (16))){
var state_66304__$1 = state_66304;
var statearr_66352_66404 = state_66304__$1;
(statearr_66352_66404[(2)] = true);

(statearr_66352_66404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (38))){
var inst_66294 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
var statearr_66353_66405 = state_66304__$1;
(statearr_66353_66405[(2)] = inst_66294);

(statearr_66353_66405[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (30))){
var inst_66264 = (state_66304[(9)]);
var inst_66255 = (state_66304[(10)]);
var inst_66256 = (state_66304[(13)]);
var inst_66281 = cljs.core.empty_QMARK_.call(null,inst_66255);
var inst_66282 = inst_66256.call(null,inst_66264);
var inst_66283 = cljs.core.not.call(null,inst_66282);
var inst_66284 = ((inst_66281) && (inst_66283));
var state_66304__$1 = state_66304;
var statearr_66354_66406 = state_66304__$1;
(statearr_66354_66406[(2)] = inst_66284);

(statearr_66354_66406[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (10))){
var inst_66206 = (state_66304[(8)]);
var inst_66227 = (state_66304[(2)]);
var inst_66228 = cljs.core.get.call(null,inst_66227,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_66229 = cljs.core.get.call(null,inst_66227,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_66230 = cljs.core.get.call(null,inst_66227,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_66231 = inst_66206;
var state_66304__$1 = (function (){var statearr_66355 = state_66304;
(statearr_66355[(7)] = inst_66231);

(statearr_66355[(16)] = inst_66230);

(statearr_66355[(17)] = inst_66228);

(statearr_66355[(18)] = inst_66229);

return statearr_66355;
})();
var statearr_66356_66407 = state_66304__$1;
(statearr_66356_66407[(2)] = null);

(statearr_66356_66407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (18))){
var inst_66246 = (state_66304[(2)]);
var state_66304__$1 = state_66304;
var statearr_66357_66408 = state_66304__$1;
(statearr_66357_66408[(2)] = inst_66246);

(statearr_66357_66408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (37))){
var state_66304__$1 = state_66304;
var statearr_66358_66409 = state_66304__$1;
(statearr_66358_66409[(2)] = null);

(statearr_66358_66409[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66305 === (8))){
var inst_66206 = (state_66304[(8)]);
var inst_66224 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66206);
var state_66304__$1 = state_66304;
var statearr_66359_66410 = state_66304__$1;
(statearr_66359_66410[(2)] = inst_66224);

(statearr_66359_66410[(1)] = (10));


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
});})(c__43716__auto___66364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43559__auto__,c__43716__auto___66364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43560__auto__ = null;
var cljs$core$async$mix_$_state_machine__43560__auto____0 = (function (){
var statearr_66360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66360[(0)] = cljs$core$async$mix_$_state_machine__43560__auto__);

(statearr_66360[(1)] = (1));

return statearr_66360;
});
var cljs$core$async$mix_$_state_machine__43560__auto____1 = (function (state_66304){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_66304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e66361){if((e66361 instanceof Object)){
var ex__43563__auto__ = e66361;
var statearr_66362_66411 = state_66304;
(statearr_66362_66411[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66412 = state_66304;
state_66304 = G__66412;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43560__auto__ = function(state_66304){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43560__auto____1.call(this,state_66304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43560__auto____0;
cljs$core$async$mix_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43560__auto____1;
return cljs$core$async$mix_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___66364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43718__auto__ = (function (){var statearr_66363 = f__43717__auto__.call(null);
(statearr_66363[(6)] = c__43716__auto___66364);

return statearr_66363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___66364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__66414 = arguments.length;
switch (G__66414) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__66418 = arguments.length;
switch (G__66418) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__66416_SHARP_){
if(cljs.core.truth_(p1__66416_SHARP_.call(null,topic))){
return p1__66416_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__66416_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async66419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66419 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta66420){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta66420 = meta66420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_66421,meta66420__$1){
var self__ = this;
var _66421__$1 = this;
return (new cljs.core.async.t_cljs$core$async66419(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta66420__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_66421){
var self__ = this;
var _66421__$1 = this;
return self__.meta66420;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66419.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66419.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66419.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66419.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66419.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66419.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66419.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66419.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta66420","meta66420",-1777715474,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66419";

cljs.core.async.t_cljs$core$async66419.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async66419");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66419.
 */
cljs.core.async.__GT_t_cljs$core$async66419 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async66419(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66420){
return (new cljs.core.async.t_cljs$core$async66419(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66420));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async66419(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43716__auto___66539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___66539,mults,ensure_mult,p){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___66539,mults,ensure_mult,p){
return (function (state_66493){
var state_val_66494 = (state_66493[(1)]);
if((state_val_66494 === (7))){
var inst_66489 = (state_66493[(2)]);
var state_66493__$1 = state_66493;
var statearr_66495_66540 = state_66493__$1;
(statearr_66495_66540[(2)] = inst_66489);

(statearr_66495_66540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (20))){
var state_66493__$1 = state_66493;
var statearr_66496_66541 = state_66493__$1;
(statearr_66496_66541[(2)] = null);

(statearr_66496_66541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (1))){
var state_66493__$1 = state_66493;
var statearr_66497_66542 = state_66493__$1;
(statearr_66497_66542[(2)] = null);

(statearr_66497_66542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (24))){
var inst_66472 = (state_66493[(7)]);
var inst_66481 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_66472);
var state_66493__$1 = state_66493;
var statearr_66498_66543 = state_66493__$1;
(statearr_66498_66543[(2)] = inst_66481);

(statearr_66498_66543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (4))){
var inst_66424 = (state_66493[(8)]);
var inst_66424__$1 = (state_66493[(2)]);
var inst_66425 = (inst_66424__$1 == null);
var state_66493__$1 = (function (){var statearr_66499 = state_66493;
(statearr_66499[(8)] = inst_66424__$1);

return statearr_66499;
})();
if(cljs.core.truth_(inst_66425)){
var statearr_66500_66544 = state_66493__$1;
(statearr_66500_66544[(1)] = (5));

} else {
var statearr_66501_66545 = state_66493__$1;
(statearr_66501_66545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (15))){
var inst_66466 = (state_66493[(2)]);
var state_66493__$1 = state_66493;
var statearr_66502_66546 = state_66493__$1;
(statearr_66502_66546[(2)] = inst_66466);

(statearr_66502_66546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (21))){
var inst_66486 = (state_66493[(2)]);
var state_66493__$1 = (function (){var statearr_66503 = state_66493;
(statearr_66503[(9)] = inst_66486);

return statearr_66503;
})();
var statearr_66504_66547 = state_66493__$1;
(statearr_66504_66547[(2)] = null);

(statearr_66504_66547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (13))){
var inst_66448 = (state_66493[(10)]);
var inst_66450 = cljs.core.chunked_seq_QMARK_.call(null,inst_66448);
var state_66493__$1 = state_66493;
if(inst_66450){
var statearr_66505_66548 = state_66493__$1;
(statearr_66505_66548[(1)] = (16));

} else {
var statearr_66506_66549 = state_66493__$1;
(statearr_66506_66549[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (22))){
var inst_66478 = (state_66493[(2)]);
var state_66493__$1 = state_66493;
if(cljs.core.truth_(inst_66478)){
var statearr_66507_66550 = state_66493__$1;
(statearr_66507_66550[(1)] = (23));

} else {
var statearr_66508_66551 = state_66493__$1;
(statearr_66508_66551[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (6))){
var inst_66472 = (state_66493[(7)]);
var inst_66424 = (state_66493[(8)]);
var inst_66474 = (state_66493[(11)]);
var inst_66472__$1 = topic_fn.call(null,inst_66424);
var inst_66473 = cljs.core.deref.call(null,mults);
var inst_66474__$1 = cljs.core.get.call(null,inst_66473,inst_66472__$1);
var state_66493__$1 = (function (){var statearr_66509 = state_66493;
(statearr_66509[(7)] = inst_66472__$1);

(statearr_66509[(11)] = inst_66474__$1);

return statearr_66509;
})();
if(cljs.core.truth_(inst_66474__$1)){
var statearr_66510_66552 = state_66493__$1;
(statearr_66510_66552[(1)] = (19));

} else {
var statearr_66511_66553 = state_66493__$1;
(statearr_66511_66553[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (25))){
var inst_66483 = (state_66493[(2)]);
var state_66493__$1 = state_66493;
var statearr_66512_66554 = state_66493__$1;
(statearr_66512_66554[(2)] = inst_66483);

(statearr_66512_66554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (17))){
var inst_66448 = (state_66493[(10)]);
var inst_66457 = cljs.core.first.call(null,inst_66448);
var inst_66458 = cljs.core.async.muxch_STAR_.call(null,inst_66457);
var inst_66459 = cljs.core.async.close_BANG_.call(null,inst_66458);
var inst_66460 = cljs.core.next.call(null,inst_66448);
var inst_66434 = inst_66460;
var inst_66435 = null;
var inst_66436 = (0);
var inst_66437 = (0);
var state_66493__$1 = (function (){var statearr_66513 = state_66493;
(statearr_66513[(12)] = inst_66434);

(statearr_66513[(13)] = inst_66435);

(statearr_66513[(14)] = inst_66459);

(statearr_66513[(15)] = inst_66436);

(statearr_66513[(16)] = inst_66437);

return statearr_66513;
})();
var statearr_66514_66555 = state_66493__$1;
(statearr_66514_66555[(2)] = null);

(statearr_66514_66555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (3))){
var inst_66491 = (state_66493[(2)]);
var state_66493__$1 = state_66493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66493__$1,inst_66491);
} else {
if((state_val_66494 === (12))){
var inst_66468 = (state_66493[(2)]);
var state_66493__$1 = state_66493;
var statearr_66515_66556 = state_66493__$1;
(statearr_66515_66556[(2)] = inst_66468);

(statearr_66515_66556[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (2))){
var state_66493__$1 = state_66493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66493__$1,(4),ch);
} else {
if((state_val_66494 === (23))){
var state_66493__$1 = state_66493;
var statearr_66516_66557 = state_66493__$1;
(statearr_66516_66557[(2)] = null);

(statearr_66516_66557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (19))){
var inst_66424 = (state_66493[(8)]);
var inst_66474 = (state_66493[(11)]);
var inst_66476 = cljs.core.async.muxch_STAR_.call(null,inst_66474);
var state_66493__$1 = state_66493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66493__$1,(22),inst_66476,inst_66424);
} else {
if((state_val_66494 === (11))){
var inst_66434 = (state_66493[(12)]);
var inst_66448 = (state_66493[(10)]);
var inst_66448__$1 = cljs.core.seq.call(null,inst_66434);
var state_66493__$1 = (function (){var statearr_66517 = state_66493;
(statearr_66517[(10)] = inst_66448__$1);

return statearr_66517;
})();
if(inst_66448__$1){
var statearr_66518_66558 = state_66493__$1;
(statearr_66518_66558[(1)] = (13));

} else {
var statearr_66519_66559 = state_66493__$1;
(statearr_66519_66559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (9))){
var inst_66470 = (state_66493[(2)]);
var state_66493__$1 = state_66493;
var statearr_66520_66560 = state_66493__$1;
(statearr_66520_66560[(2)] = inst_66470);

(statearr_66520_66560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (5))){
var inst_66431 = cljs.core.deref.call(null,mults);
var inst_66432 = cljs.core.vals.call(null,inst_66431);
var inst_66433 = cljs.core.seq.call(null,inst_66432);
var inst_66434 = inst_66433;
var inst_66435 = null;
var inst_66436 = (0);
var inst_66437 = (0);
var state_66493__$1 = (function (){var statearr_66521 = state_66493;
(statearr_66521[(12)] = inst_66434);

(statearr_66521[(13)] = inst_66435);

(statearr_66521[(15)] = inst_66436);

(statearr_66521[(16)] = inst_66437);

return statearr_66521;
})();
var statearr_66522_66561 = state_66493__$1;
(statearr_66522_66561[(2)] = null);

(statearr_66522_66561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (14))){
var state_66493__$1 = state_66493;
var statearr_66526_66562 = state_66493__$1;
(statearr_66526_66562[(2)] = null);

(statearr_66526_66562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (16))){
var inst_66448 = (state_66493[(10)]);
var inst_66452 = cljs.core.chunk_first.call(null,inst_66448);
var inst_66453 = cljs.core.chunk_rest.call(null,inst_66448);
var inst_66454 = cljs.core.count.call(null,inst_66452);
var inst_66434 = inst_66453;
var inst_66435 = inst_66452;
var inst_66436 = inst_66454;
var inst_66437 = (0);
var state_66493__$1 = (function (){var statearr_66527 = state_66493;
(statearr_66527[(12)] = inst_66434);

(statearr_66527[(13)] = inst_66435);

(statearr_66527[(15)] = inst_66436);

(statearr_66527[(16)] = inst_66437);

return statearr_66527;
})();
var statearr_66528_66563 = state_66493__$1;
(statearr_66528_66563[(2)] = null);

(statearr_66528_66563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (10))){
var inst_66434 = (state_66493[(12)]);
var inst_66435 = (state_66493[(13)]);
var inst_66436 = (state_66493[(15)]);
var inst_66437 = (state_66493[(16)]);
var inst_66442 = cljs.core._nth.call(null,inst_66435,inst_66437);
var inst_66443 = cljs.core.async.muxch_STAR_.call(null,inst_66442);
var inst_66444 = cljs.core.async.close_BANG_.call(null,inst_66443);
var inst_66445 = (inst_66437 + (1));
var tmp66523 = inst_66434;
var tmp66524 = inst_66435;
var tmp66525 = inst_66436;
var inst_66434__$1 = tmp66523;
var inst_66435__$1 = tmp66524;
var inst_66436__$1 = tmp66525;
var inst_66437__$1 = inst_66445;
var state_66493__$1 = (function (){var statearr_66529 = state_66493;
(statearr_66529[(12)] = inst_66434__$1);

(statearr_66529[(13)] = inst_66435__$1);

(statearr_66529[(15)] = inst_66436__$1);

(statearr_66529[(17)] = inst_66444);

(statearr_66529[(16)] = inst_66437__$1);

return statearr_66529;
})();
var statearr_66530_66564 = state_66493__$1;
(statearr_66530_66564[(2)] = null);

(statearr_66530_66564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (18))){
var inst_66463 = (state_66493[(2)]);
var state_66493__$1 = state_66493;
var statearr_66531_66565 = state_66493__$1;
(statearr_66531_66565[(2)] = inst_66463);

(statearr_66531_66565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66494 === (8))){
var inst_66436 = (state_66493[(15)]);
var inst_66437 = (state_66493[(16)]);
var inst_66439 = (inst_66437 < inst_66436);
var inst_66440 = inst_66439;
var state_66493__$1 = state_66493;
if(cljs.core.truth_(inst_66440)){
var statearr_66532_66566 = state_66493__$1;
(statearr_66532_66566[(1)] = (10));

} else {
var statearr_66533_66567 = state_66493__$1;
(statearr_66533_66567[(1)] = (11));

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
});})(c__43716__auto___66539,mults,ensure_mult,p))
;
return ((function (switch__43559__auto__,c__43716__auto___66539,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_66534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66534[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_66534[(1)] = (1));

return statearr_66534;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_66493){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_66493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e66535){if((e66535 instanceof Object)){
var ex__43563__auto__ = e66535;
var statearr_66536_66568 = state_66493;
(statearr_66536_66568[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66569 = state_66493;
state_66493 = G__66569;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_66493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_66493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___66539,mults,ensure_mult,p))
})();
var state__43718__auto__ = (function (){var statearr_66537 = f__43717__auto__.call(null);
(statearr_66537[(6)] = c__43716__auto___66539);

return statearr_66537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___66539,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__66571 = arguments.length;
switch (G__66571) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__66574 = arguments.length;
switch (G__66574) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__66577 = arguments.length;
switch (G__66577) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__43716__auto___66644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___66644,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___66644,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_66616){
var state_val_66617 = (state_66616[(1)]);
if((state_val_66617 === (7))){
var state_66616__$1 = state_66616;
var statearr_66618_66645 = state_66616__$1;
(statearr_66618_66645[(2)] = null);

(statearr_66618_66645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (1))){
var state_66616__$1 = state_66616;
var statearr_66619_66646 = state_66616__$1;
(statearr_66619_66646[(2)] = null);

(statearr_66619_66646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (4))){
var inst_66580 = (state_66616[(7)]);
var inst_66582 = (inst_66580 < cnt);
var state_66616__$1 = state_66616;
if(cljs.core.truth_(inst_66582)){
var statearr_66620_66647 = state_66616__$1;
(statearr_66620_66647[(1)] = (6));

} else {
var statearr_66621_66648 = state_66616__$1;
(statearr_66621_66648[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (15))){
var inst_66612 = (state_66616[(2)]);
var state_66616__$1 = state_66616;
var statearr_66622_66649 = state_66616__$1;
(statearr_66622_66649[(2)] = inst_66612);

(statearr_66622_66649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (13))){
var inst_66605 = cljs.core.async.close_BANG_.call(null,out);
var state_66616__$1 = state_66616;
var statearr_66623_66650 = state_66616__$1;
(statearr_66623_66650[(2)] = inst_66605);

(statearr_66623_66650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (6))){
var state_66616__$1 = state_66616;
var statearr_66624_66651 = state_66616__$1;
(statearr_66624_66651[(2)] = null);

(statearr_66624_66651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (3))){
var inst_66614 = (state_66616[(2)]);
var state_66616__$1 = state_66616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66616__$1,inst_66614);
} else {
if((state_val_66617 === (12))){
var inst_66602 = (state_66616[(8)]);
var inst_66602__$1 = (state_66616[(2)]);
var inst_66603 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_66602__$1);
var state_66616__$1 = (function (){var statearr_66625 = state_66616;
(statearr_66625[(8)] = inst_66602__$1);

return statearr_66625;
})();
if(cljs.core.truth_(inst_66603)){
var statearr_66626_66652 = state_66616__$1;
(statearr_66626_66652[(1)] = (13));

} else {
var statearr_66627_66653 = state_66616__$1;
(statearr_66627_66653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (2))){
var inst_66579 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_66580 = (0);
var state_66616__$1 = (function (){var statearr_66628 = state_66616;
(statearr_66628[(9)] = inst_66579);

(statearr_66628[(7)] = inst_66580);

return statearr_66628;
})();
var statearr_66629_66654 = state_66616__$1;
(statearr_66629_66654[(2)] = null);

(statearr_66629_66654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (11))){
var inst_66580 = (state_66616[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_66616,(10),Object,null,(9));
var inst_66589 = chs__$1.call(null,inst_66580);
var inst_66590 = done.call(null,inst_66580);
var inst_66591 = cljs.core.async.take_BANG_.call(null,inst_66589,inst_66590);
var state_66616__$1 = state_66616;
var statearr_66630_66655 = state_66616__$1;
(statearr_66630_66655[(2)] = inst_66591);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66616__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (9))){
var inst_66580 = (state_66616[(7)]);
var inst_66593 = (state_66616[(2)]);
var inst_66594 = (inst_66580 + (1));
var inst_66580__$1 = inst_66594;
var state_66616__$1 = (function (){var statearr_66631 = state_66616;
(statearr_66631[(7)] = inst_66580__$1);

(statearr_66631[(10)] = inst_66593);

return statearr_66631;
})();
var statearr_66632_66656 = state_66616__$1;
(statearr_66632_66656[(2)] = null);

(statearr_66632_66656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (5))){
var inst_66600 = (state_66616[(2)]);
var state_66616__$1 = (function (){var statearr_66633 = state_66616;
(statearr_66633[(11)] = inst_66600);

return statearr_66633;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66616__$1,(12),dchan);
} else {
if((state_val_66617 === (14))){
var inst_66602 = (state_66616[(8)]);
var inst_66607 = cljs.core.apply.call(null,f,inst_66602);
var state_66616__$1 = state_66616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66616__$1,(16),out,inst_66607);
} else {
if((state_val_66617 === (16))){
var inst_66609 = (state_66616[(2)]);
var state_66616__$1 = (function (){var statearr_66634 = state_66616;
(statearr_66634[(12)] = inst_66609);

return statearr_66634;
})();
var statearr_66635_66657 = state_66616__$1;
(statearr_66635_66657[(2)] = null);

(statearr_66635_66657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (10))){
var inst_66584 = (state_66616[(2)]);
var inst_66585 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_66616__$1 = (function (){var statearr_66636 = state_66616;
(statearr_66636[(13)] = inst_66584);

return statearr_66636;
})();
var statearr_66637_66658 = state_66616__$1;
(statearr_66637_66658[(2)] = inst_66585);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66616__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66617 === (8))){
var inst_66598 = (state_66616[(2)]);
var state_66616__$1 = state_66616;
var statearr_66638_66659 = state_66616__$1;
(statearr_66638_66659[(2)] = inst_66598);

(statearr_66638_66659[(1)] = (5));


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
});})(c__43716__auto___66644,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43559__auto__,c__43716__auto___66644,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_66639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66639[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_66639[(1)] = (1));

return statearr_66639;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_66616){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_66616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e66640){if((e66640 instanceof Object)){
var ex__43563__auto__ = e66640;
var statearr_66641_66660 = state_66616;
(statearr_66641_66660[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66661 = state_66616;
state_66616 = G__66661;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_66616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_66616);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___66644,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43718__auto__ = (function (){var statearr_66642 = f__43717__auto__.call(null);
(statearr_66642[(6)] = c__43716__auto___66644);

return statearr_66642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___66644,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__66664 = arguments.length;
switch (G__66664) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43716__auto___66718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___66718,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___66718,out){
return (function (state_66696){
var state_val_66697 = (state_66696[(1)]);
if((state_val_66697 === (7))){
var inst_66676 = (state_66696[(7)]);
var inst_66675 = (state_66696[(8)]);
var inst_66675__$1 = (state_66696[(2)]);
var inst_66676__$1 = cljs.core.nth.call(null,inst_66675__$1,(0),null);
var inst_66677 = cljs.core.nth.call(null,inst_66675__$1,(1),null);
var inst_66678 = (inst_66676__$1 == null);
var state_66696__$1 = (function (){var statearr_66698 = state_66696;
(statearr_66698[(9)] = inst_66677);

(statearr_66698[(7)] = inst_66676__$1);

(statearr_66698[(8)] = inst_66675__$1);

return statearr_66698;
})();
if(cljs.core.truth_(inst_66678)){
var statearr_66699_66719 = state_66696__$1;
(statearr_66699_66719[(1)] = (8));

} else {
var statearr_66700_66720 = state_66696__$1;
(statearr_66700_66720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (1))){
var inst_66665 = cljs.core.vec.call(null,chs);
var inst_66666 = inst_66665;
var state_66696__$1 = (function (){var statearr_66701 = state_66696;
(statearr_66701[(10)] = inst_66666);

return statearr_66701;
})();
var statearr_66702_66721 = state_66696__$1;
(statearr_66702_66721[(2)] = null);

(statearr_66702_66721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (4))){
var inst_66666 = (state_66696[(10)]);
var state_66696__$1 = state_66696;
return cljs.core.async.ioc_alts_BANG_.call(null,state_66696__$1,(7),inst_66666);
} else {
if((state_val_66697 === (6))){
var inst_66692 = (state_66696[(2)]);
var state_66696__$1 = state_66696;
var statearr_66703_66722 = state_66696__$1;
(statearr_66703_66722[(2)] = inst_66692);

(statearr_66703_66722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (3))){
var inst_66694 = (state_66696[(2)]);
var state_66696__$1 = state_66696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66696__$1,inst_66694);
} else {
if((state_val_66697 === (2))){
var inst_66666 = (state_66696[(10)]);
var inst_66668 = cljs.core.count.call(null,inst_66666);
var inst_66669 = (inst_66668 > (0));
var state_66696__$1 = state_66696;
if(cljs.core.truth_(inst_66669)){
var statearr_66705_66723 = state_66696__$1;
(statearr_66705_66723[(1)] = (4));

} else {
var statearr_66706_66724 = state_66696__$1;
(statearr_66706_66724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (11))){
var inst_66666 = (state_66696[(10)]);
var inst_66685 = (state_66696[(2)]);
var tmp66704 = inst_66666;
var inst_66666__$1 = tmp66704;
var state_66696__$1 = (function (){var statearr_66707 = state_66696;
(statearr_66707[(10)] = inst_66666__$1);

(statearr_66707[(11)] = inst_66685);

return statearr_66707;
})();
var statearr_66708_66725 = state_66696__$1;
(statearr_66708_66725[(2)] = null);

(statearr_66708_66725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (9))){
var inst_66676 = (state_66696[(7)]);
var state_66696__$1 = state_66696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66696__$1,(11),out,inst_66676);
} else {
if((state_val_66697 === (5))){
var inst_66690 = cljs.core.async.close_BANG_.call(null,out);
var state_66696__$1 = state_66696;
var statearr_66709_66726 = state_66696__$1;
(statearr_66709_66726[(2)] = inst_66690);

(statearr_66709_66726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (10))){
var inst_66688 = (state_66696[(2)]);
var state_66696__$1 = state_66696;
var statearr_66710_66727 = state_66696__$1;
(statearr_66710_66727[(2)] = inst_66688);

(statearr_66710_66727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (8))){
var inst_66666 = (state_66696[(10)]);
var inst_66677 = (state_66696[(9)]);
var inst_66676 = (state_66696[(7)]);
var inst_66675 = (state_66696[(8)]);
var inst_66680 = (function (){var cs = inst_66666;
var vec__66671 = inst_66675;
var v = inst_66676;
var c = inst_66677;
return ((function (cs,vec__66671,v,c,inst_66666,inst_66677,inst_66676,inst_66675,state_val_66697,c__43716__auto___66718,out){
return (function (p1__66662_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__66662_SHARP_);
});
;})(cs,vec__66671,v,c,inst_66666,inst_66677,inst_66676,inst_66675,state_val_66697,c__43716__auto___66718,out))
})();
var inst_66681 = cljs.core.filterv.call(null,inst_66680,inst_66666);
var inst_66666__$1 = inst_66681;
var state_66696__$1 = (function (){var statearr_66711 = state_66696;
(statearr_66711[(10)] = inst_66666__$1);

return statearr_66711;
})();
var statearr_66712_66728 = state_66696__$1;
(statearr_66712_66728[(2)] = null);

(statearr_66712_66728[(1)] = (2));


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
});})(c__43716__auto___66718,out))
;
return ((function (switch__43559__auto__,c__43716__auto___66718,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_66713 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66713[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_66713[(1)] = (1));

return statearr_66713;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_66696){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_66696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e66714){if((e66714 instanceof Object)){
var ex__43563__auto__ = e66714;
var statearr_66715_66729 = state_66696;
(statearr_66715_66729[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66730 = state_66696;
state_66696 = G__66730;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_66696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_66696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___66718,out))
})();
var state__43718__auto__ = (function (){var statearr_66716 = f__43717__auto__.call(null);
(statearr_66716[(6)] = c__43716__auto___66718);

return statearr_66716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___66718,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__66732 = arguments.length;
switch (G__66732) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43716__auto___66777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___66777,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___66777,out){
return (function (state_66756){
var state_val_66757 = (state_66756[(1)]);
if((state_val_66757 === (7))){
var inst_66738 = (state_66756[(7)]);
var inst_66738__$1 = (state_66756[(2)]);
var inst_66739 = (inst_66738__$1 == null);
var inst_66740 = cljs.core.not.call(null,inst_66739);
var state_66756__$1 = (function (){var statearr_66758 = state_66756;
(statearr_66758[(7)] = inst_66738__$1);

return statearr_66758;
})();
if(inst_66740){
var statearr_66759_66778 = state_66756__$1;
(statearr_66759_66778[(1)] = (8));

} else {
var statearr_66760_66779 = state_66756__$1;
(statearr_66760_66779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66757 === (1))){
var inst_66733 = (0);
var state_66756__$1 = (function (){var statearr_66761 = state_66756;
(statearr_66761[(8)] = inst_66733);

return statearr_66761;
})();
var statearr_66762_66780 = state_66756__$1;
(statearr_66762_66780[(2)] = null);

(statearr_66762_66780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66757 === (4))){
var state_66756__$1 = state_66756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66756__$1,(7),ch);
} else {
if((state_val_66757 === (6))){
var inst_66751 = (state_66756[(2)]);
var state_66756__$1 = state_66756;
var statearr_66763_66781 = state_66756__$1;
(statearr_66763_66781[(2)] = inst_66751);

(statearr_66763_66781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66757 === (3))){
var inst_66753 = (state_66756[(2)]);
var inst_66754 = cljs.core.async.close_BANG_.call(null,out);
var state_66756__$1 = (function (){var statearr_66764 = state_66756;
(statearr_66764[(9)] = inst_66753);

return statearr_66764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66756__$1,inst_66754);
} else {
if((state_val_66757 === (2))){
var inst_66733 = (state_66756[(8)]);
var inst_66735 = (inst_66733 < n);
var state_66756__$1 = state_66756;
if(cljs.core.truth_(inst_66735)){
var statearr_66765_66782 = state_66756__$1;
(statearr_66765_66782[(1)] = (4));

} else {
var statearr_66766_66783 = state_66756__$1;
(statearr_66766_66783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66757 === (11))){
var inst_66733 = (state_66756[(8)]);
var inst_66743 = (state_66756[(2)]);
var inst_66744 = (inst_66733 + (1));
var inst_66733__$1 = inst_66744;
var state_66756__$1 = (function (){var statearr_66767 = state_66756;
(statearr_66767[(8)] = inst_66733__$1);

(statearr_66767[(10)] = inst_66743);

return statearr_66767;
})();
var statearr_66768_66784 = state_66756__$1;
(statearr_66768_66784[(2)] = null);

(statearr_66768_66784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66757 === (9))){
var state_66756__$1 = state_66756;
var statearr_66769_66785 = state_66756__$1;
(statearr_66769_66785[(2)] = null);

(statearr_66769_66785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66757 === (5))){
var state_66756__$1 = state_66756;
var statearr_66770_66786 = state_66756__$1;
(statearr_66770_66786[(2)] = null);

(statearr_66770_66786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66757 === (10))){
var inst_66748 = (state_66756[(2)]);
var state_66756__$1 = state_66756;
var statearr_66771_66787 = state_66756__$1;
(statearr_66771_66787[(2)] = inst_66748);

(statearr_66771_66787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66757 === (8))){
var inst_66738 = (state_66756[(7)]);
var state_66756__$1 = state_66756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66756__$1,(11),out,inst_66738);
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
});})(c__43716__auto___66777,out))
;
return ((function (switch__43559__auto__,c__43716__auto___66777,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_66772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66772[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_66772[(1)] = (1));

return statearr_66772;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_66756){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_66756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e66773){if((e66773 instanceof Object)){
var ex__43563__auto__ = e66773;
var statearr_66774_66788 = state_66756;
(statearr_66774_66788[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66789 = state_66756;
state_66756 = G__66789;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_66756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_66756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___66777,out))
})();
var state__43718__auto__ = (function (){var statearr_66775 = f__43717__auto__.call(null);
(statearr_66775[(6)] = c__43716__auto___66777);

return statearr_66775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___66777,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async66791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66791 = (function (f,ch,meta66792){
this.f = f;
this.ch = ch;
this.meta66792 = meta66792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66793,meta66792__$1){
var self__ = this;
var _66793__$1 = this;
return (new cljs.core.async.t_cljs$core$async66791(self__.f,self__.ch,meta66792__$1));
});

cljs.core.async.t_cljs$core$async66791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66793){
var self__ = this;
var _66793__$1 = this;
return self__.meta66792;
});

cljs.core.async.t_cljs$core$async66791.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66791.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66791.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66791.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66791.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async66794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66794 = (function (f,ch,meta66792,_,fn1,meta66795){
this.f = f;
this.ch = ch;
this.meta66792 = meta66792;
this._ = _;
this.fn1 = fn1;
this.meta66795 = meta66795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_66796,meta66795__$1){
var self__ = this;
var _66796__$1 = this;
return (new cljs.core.async.t_cljs$core$async66794(self__.f,self__.ch,self__.meta66792,self__._,self__.fn1,meta66795__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async66794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_66796){
var self__ = this;
var _66796__$1 = this;
return self__.meta66795;
});})(___$1))
;

cljs.core.async.t_cljs$core$async66794.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async66794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async66794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__66790_SHARP_){
return f1.call(null,(((p1__66790_SHARP_ == null))?null:self__.f.call(null,p1__66790_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async66794.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66792","meta66792",1935518114,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async66791","cljs.core.async/t_cljs$core$async66791",1680825207,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta66795","meta66795",902587887,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async66794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66794";

cljs.core.async.t_cljs$core$async66794.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async66794");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66794.
 */
cljs.core.async.__GT_t_cljs$core$async66794 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66794(f__$1,ch__$1,meta66792__$1,___$2,fn1__$1,meta66795){
return (new cljs.core.async.t_cljs$core$async66794(f__$1,ch__$1,meta66792__$1,___$2,fn1__$1,meta66795));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async66794(self__.f,self__.ch,self__.meta66792,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async66791.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66791.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async66791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66792","meta66792",1935518114,null)], null);
});

cljs.core.async.t_cljs$core$async66791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66791";

cljs.core.async.t_cljs$core$async66791.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async66791");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66791.
 */
cljs.core.async.__GT_t_cljs$core$async66791 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66791(f__$1,ch__$1,meta66792){
return (new cljs.core.async.t_cljs$core$async66791(f__$1,ch__$1,meta66792));
});

}

return (new cljs.core.async.t_cljs$core$async66791(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async66797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66797 = (function (f,ch,meta66798){
this.f = f;
this.ch = ch;
this.meta66798 = meta66798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66799,meta66798__$1){
var self__ = this;
var _66799__$1 = this;
return (new cljs.core.async.t_cljs$core$async66797(self__.f,self__.ch,meta66798__$1));
});

cljs.core.async.t_cljs$core$async66797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66799){
var self__ = this;
var _66799__$1 = this;
return self__.meta66798;
});

cljs.core.async.t_cljs$core$async66797.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66797.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async66797.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async66797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66798","meta66798",-753675349,null)], null);
});

cljs.core.async.t_cljs$core$async66797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66797";

cljs.core.async.t_cljs$core$async66797.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async66797");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66797.
 */
cljs.core.async.__GT_t_cljs$core$async66797 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async66797(f__$1,ch__$1,meta66798){
return (new cljs.core.async.t_cljs$core$async66797(f__$1,ch__$1,meta66798));
});

}

return (new cljs.core.async.t_cljs$core$async66797(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async66800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66800 = (function (p,ch,meta66801){
this.p = p;
this.ch = ch;
this.meta66801 = meta66801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66802,meta66801__$1){
var self__ = this;
var _66802__$1 = this;
return (new cljs.core.async.t_cljs$core$async66800(self__.p,self__.ch,meta66801__$1));
});

cljs.core.async.t_cljs$core$async66800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66802){
var self__ = this;
var _66802__$1 = this;
return self__.meta66801;
});

cljs.core.async.t_cljs$core$async66800.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66800.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async66800.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async66800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66801","meta66801",-372312980,null)], null);
});

cljs.core.async.t_cljs$core$async66800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66800";

cljs.core.async.t_cljs$core$async66800.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async66800");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66800.
 */
cljs.core.async.__GT_t_cljs$core$async66800 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async66800(p__$1,ch__$1,meta66801){
return (new cljs.core.async.t_cljs$core$async66800(p__$1,ch__$1,meta66801));
});

}

return (new cljs.core.async.t_cljs$core$async66800(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__66804 = arguments.length;
switch (G__66804) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43716__auto___66844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___66844,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___66844,out){
return (function (state_66825){
var state_val_66826 = (state_66825[(1)]);
if((state_val_66826 === (7))){
var inst_66821 = (state_66825[(2)]);
var state_66825__$1 = state_66825;
var statearr_66827_66845 = state_66825__$1;
(statearr_66827_66845[(2)] = inst_66821);

(statearr_66827_66845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (1))){
var state_66825__$1 = state_66825;
var statearr_66828_66846 = state_66825__$1;
(statearr_66828_66846[(2)] = null);

(statearr_66828_66846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (4))){
var inst_66807 = (state_66825[(7)]);
var inst_66807__$1 = (state_66825[(2)]);
var inst_66808 = (inst_66807__$1 == null);
var state_66825__$1 = (function (){var statearr_66829 = state_66825;
(statearr_66829[(7)] = inst_66807__$1);

return statearr_66829;
})();
if(cljs.core.truth_(inst_66808)){
var statearr_66830_66847 = state_66825__$1;
(statearr_66830_66847[(1)] = (5));

} else {
var statearr_66831_66848 = state_66825__$1;
(statearr_66831_66848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (6))){
var inst_66807 = (state_66825[(7)]);
var inst_66812 = p.call(null,inst_66807);
var state_66825__$1 = state_66825;
if(cljs.core.truth_(inst_66812)){
var statearr_66832_66849 = state_66825__$1;
(statearr_66832_66849[(1)] = (8));

} else {
var statearr_66833_66850 = state_66825__$1;
(statearr_66833_66850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (3))){
var inst_66823 = (state_66825[(2)]);
var state_66825__$1 = state_66825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66825__$1,inst_66823);
} else {
if((state_val_66826 === (2))){
var state_66825__$1 = state_66825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66825__$1,(4),ch);
} else {
if((state_val_66826 === (11))){
var inst_66815 = (state_66825[(2)]);
var state_66825__$1 = state_66825;
var statearr_66834_66851 = state_66825__$1;
(statearr_66834_66851[(2)] = inst_66815);

(statearr_66834_66851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (9))){
var state_66825__$1 = state_66825;
var statearr_66835_66852 = state_66825__$1;
(statearr_66835_66852[(2)] = null);

(statearr_66835_66852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (5))){
var inst_66810 = cljs.core.async.close_BANG_.call(null,out);
var state_66825__$1 = state_66825;
var statearr_66836_66853 = state_66825__$1;
(statearr_66836_66853[(2)] = inst_66810);

(statearr_66836_66853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (10))){
var inst_66818 = (state_66825[(2)]);
var state_66825__$1 = (function (){var statearr_66837 = state_66825;
(statearr_66837[(8)] = inst_66818);

return statearr_66837;
})();
var statearr_66838_66854 = state_66825__$1;
(statearr_66838_66854[(2)] = null);

(statearr_66838_66854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (8))){
var inst_66807 = (state_66825[(7)]);
var state_66825__$1 = state_66825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66825__$1,(11),out,inst_66807);
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
});})(c__43716__auto___66844,out))
;
return ((function (switch__43559__auto__,c__43716__auto___66844,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_66839 = [null,null,null,null,null,null,null,null,null];
(statearr_66839[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_66839[(1)] = (1));

return statearr_66839;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_66825){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_66825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e66840){if((e66840 instanceof Object)){
var ex__43563__auto__ = e66840;
var statearr_66841_66855 = state_66825;
(statearr_66841_66855[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66856 = state_66825;
state_66825 = G__66856;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_66825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_66825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___66844,out))
})();
var state__43718__auto__ = (function (){var statearr_66842 = f__43717__auto__.call(null);
(statearr_66842[(6)] = c__43716__auto___66844);

return statearr_66842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___66844,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__66858 = arguments.length;
switch (G__66858) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__){
return (function (state_66921){
var state_val_66922 = (state_66921[(1)]);
if((state_val_66922 === (7))){
var inst_66917 = (state_66921[(2)]);
var state_66921__$1 = state_66921;
var statearr_66923_66961 = state_66921__$1;
(statearr_66923_66961[(2)] = inst_66917);

(statearr_66923_66961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (20))){
var inst_66887 = (state_66921[(7)]);
var inst_66898 = (state_66921[(2)]);
var inst_66899 = cljs.core.next.call(null,inst_66887);
var inst_66873 = inst_66899;
var inst_66874 = null;
var inst_66875 = (0);
var inst_66876 = (0);
var state_66921__$1 = (function (){var statearr_66924 = state_66921;
(statearr_66924[(8)] = inst_66873);

(statearr_66924[(9)] = inst_66898);

(statearr_66924[(10)] = inst_66876);

(statearr_66924[(11)] = inst_66874);

(statearr_66924[(12)] = inst_66875);

return statearr_66924;
})();
var statearr_66925_66962 = state_66921__$1;
(statearr_66925_66962[(2)] = null);

(statearr_66925_66962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (1))){
var state_66921__$1 = state_66921;
var statearr_66926_66963 = state_66921__$1;
(statearr_66926_66963[(2)] = null);

(statearr_66926_66963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (4))){
var inst_66862 = (state_66921[(13)]);
var inst_66862__$1 = (state_66921[(2)]);
var inst_66863 = (inst_66862__$1 == null);
var state_66921__$1 = (function (){var statearr_66927 = state_66921;
(statearr_66927[(13)] = inst_66862__$1);

return statearr_66927;
})();
if(cljs.core.truth_(inst_66863)){
var statearr_66928_66964 = state_66921__$1;
(statearr_66928_66964[(1)] = (5));

} else {
var statearr_66929_66965 = state_66921__$1;
(statearr_66929_66965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (15))){
var state_66921__$1 = state_66921;
var statearr_66933_66966 = state_66921__$1;
(statearr_66933_66966[(2)] = null);

(statearr_66933_66966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (21))){
var state_66921__$1 = state_66921;
var statearr_66934_66967 = state_66921__$1;
(statearr_66934_66967[(2)] = null);

(statearr_66934_66967[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (13))){
var inst_66873 = (state_66921[(8)]);
var inst_66876 = (state_66921[(10)]);
var inst_66874 = (state_66921[(11)]);
var inst_66875 = (state_66921[(12)]);
var inst_66883 = (state_66921[(2)]);
var inst_66884 = (inst_66876 + (1));
var tmp66930 = inst_66873;
var tmp66931 = inst_66874;
var tmp66932 = inst_66875;
var inst_66873__$1 = tmp66930;
var inst_66874__$1 = tmp66931;
var inst_66875__$1 = tmp66932;
var inst_66876__$1 = inst_66884;
var state_66921__$1 = (function (){var statearr_66935 = state_66921;
(statearr_66935[(14)] = inst_66883);

(statearr_66935[(8)] = inst_66873__$1);

(statearr_66935[(10)] = inst_66876__$1);

(statearr_66935[(11)] = inst_66874__$1);

(statearr_66935[(12)] = inst_66875__$1);

return statearr_66935;
})();
var statearr_66936_66968 = state_66921__$1;
(statearr_66936_66968[(2)] = null);

(statearr_66936_66968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (22))){
var state_66921__$1 = state_66921;
var statearr_66937_66969 = state_66921__$1;
(statearr_66937_66969[(2)] = null);

(statearr_66937_66969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (6))){
var inst_66862 = (state_66921[(13)]);
var inst_66871 = f.call(null,inst_66862);
var inst_66872 = cljs.core.seq.call(null,inst_66871);
var inst_66873 = inst_66872;
var inst_66874 = null;
var inst_66875 = (0);
var inst_66876 = (0);
var state_66921__$1 = (function (){var statearr_66938 = state_66921;
(statearr_66938[(8)] = inst_66873);

(statearr_66938[(10)] = inst_66876);

(statearr_66938[(11)] = inst_66874);

(statearr_66938[(12)] = inst_66875);

return statearr_66938;
})();
var statearr_66939_66970 = state_66921__$1;
(statearr_66939_66970[(2)] = null);

(statearr_66939_66970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (17))){
var inst_66887 = (state_66921[(7)]);
var inst_66891 = cljs.core.chunk_first.call(null,inst_66887);
var inst_66892 = cljs.core.chunk_rest.call(null,inst_66887);
var inst_66893 = cljs.core.count.call(null,inst_66891);
var inst_66873 = inst_66892;
var inst_66874 = inst_66891;
var inst_66875 = inst_66893;
var inst_66876 = (0);
var state_66921__$1 = (function (){var statearr_66940 = state_66921;
(statearr_66940[(8)] = inst_66873);

(statearr_66940[(10)] = inst_66876);

(statearr_66940[(11)] = inst_66874);

(statearr_66940[(12)] = inst_66875);

return statearr_66940;
})();
var statearr_66941_66971 = state_66921__$1;
(statearr_66941_66971[(2)] = null);

(statearr_66941_66971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (3))){
var inst_66919 = (state_66921[(2)]);
var state_66921__$1 = state_66921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66921__$1,inst_66919);
} else {
if((state_val_66922 === (12))){
var inst_66907 = (state_66921[(2)]);
var state_66921__$1 = state_66921;
var statearr_66942_66972 = state_66921__$1;
(statearr_66942_66972[(2)] = inst_66907);

(statearr_66942_66972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (2))){
var state_66921__$1 = state_66921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66921__$1,(4),in$);
} else {
if((state_val_66922 === (23))){
var inst_66915 = (state_66921[(2)]);
var state_66921__$1 = state_66921;
var statearr_66943_66973 = state_66921__$1;
(statearr_66943_66973[(2)] = inst_66915);

(statearr_66943_66973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (19))){
var inst_66902 = (state_66921[(2)]);
var state_66921__$1 = state_66921;
var statearr_66944_66974 = state_66921__$1;
(statearr_66944_66974[(2)] = inst_66902);

(statearr_66944_66974[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (11))){
var inst_66873 = (state_66921[(8)]);
var inst_66887 = (state_66921[(7)]);
var inst_66887__$1 = cljs.core.seq.call(null,inst_66873);
var state_66921__$1 = (function (){var statearr_66945 = state_66921;
(statearr_66945[(7)] = inst_66887__$1);

return statearr_66945;
})();
if(inst_66887__$1){
var statearr_66946_66975 = state_66921__$1;
(statearr_66946_66975[(1)] = (14));

} else {
var statearr_66947_66976 = state_66921__$1;
(statearr_66947_66976[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (9))){
var inst_66909 = (state_66921[(2)]);
var inst_66910 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_66921__$1 = (function (){var statearr_66948 = state_66921;
(statearr_66948[(15)] = inst_66909);

return statearr_66948;
})();
if(cljs.core.truth_(inst_66910)){
var statearr_66949_66977 = state_66921__$1;
(statearr_66949_66977[(1)] = (21));

} else {
var statearr_66950_66978 = state_66921__$1;
(statearr_66950_66978[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (5))){
var inst_66865 = cljs.core.async.close_BANG_.call(null,out);
var state_66921__$1 = state_66921;
var statearr_66951_66979 = state_66921__$1;
(statearr_66951_66979[(2)] = inst_66865);

(statearr_66951_66979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (14))){
var inst_66887 = (state_66921[(7)]);
var inst_66889 = cljs.core.chunked_seq_QMARK_.call(null,inst_66887);
var state_66921__$1 = state_66921;
if(inst_66889){
var statearr_66952_66980 = state_66921__$1;
(statearr_66952_66980[(1)] = (17));

} else {
var statearr_66953_66981 = state_66921__$1;
(statearr_66953_66981[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (16))){
var inst_66905 = (state_66921[(2)]);
var state_66921__$1 = state_66921;
var statearr_66954_66982 = state_66921__$1;
(statearr_66954_66982[(2)] = inst_66905);

(statearr_66954_66982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66922 === (10))){
var inst_66876 = (state_66921[(10)]);
var inst_66874 = (state_66921[(11)]);
var inst_66881 = cljs.core._nth.call(null,inst_66874,inst_66876);
var state_66921__$1 = state_66921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66921__$1,(13),out,inst_66881);
} else {
if((state_val_66922 === (18))){
var inst_66887 = (state_66921[(7)]);
var inst_66896 = cljs.core.first.call(null,inst_66887);
var state_66921__$1 = state_66921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66921__$1,(20),out,inst_66896);
} else {
if((state_val_66922 === (8))){
var inst_66876 = (state_66921[(10)]);
var inst_66875 = (state_66921[(12)]);
var inst_66878 = (inst_66876 < inst_66875);
var inst_66879 = inst_66878;
var state_66921__$1 = state_66921;
if(cljs.core.truth_(inst_66879)){
var statearr_66955_66983 = state_66921__$1;
(statearr_66955_66983[(1)] = (10));

} else {
var statearr_66956_66984 = state_66921__$1;
(statearr_66956_66984[(1)] = (11));

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
});})(c__43716__auto__))
;
return ((function (switch__43559__auto__,c__43716__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_66957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66957[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__);

(statearr_66957[(1)] = (1));

return statearr_66957;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____1 = (function (state_66921){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_66921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e66958){if((e66958 instanceof Object)){
var ex__43563__auto__ = e66958;
var statearr_66959_66985 = state_66921;
(statearr_66959_66985[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66986 = state_66921;
state_66921 = G__66986;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__ = function(state_66921){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____1.call(this,state_66921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_66960 = f__43717__auto__.call(null);
(statearr_66960[(6)] = c__43716__auto__);

return statearr_66960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__))
);

return c__43716__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__66988 = arguments.length;
switch (G__66988) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__66991 = arguments.length;
switch (G__66991) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__66994 = arguments.length;
switch (G__66994) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43716__auto___67041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___67041,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___67041,out){
return (function (state_67018){
var state_val_67019 = (state_67018[(1)]);
if((state_val_67019 === (7))){
var inst_67013 = (state_67018[(2)]);
var state_67018__$1 = state_67018;
var statearr_67020_67042 = state_67018__$1;
(statearr_67020_67042[(2)] = inst_67013);

(statearr_67020_67042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67019 === (1))){
var inst_66995 = null;
var state_67018__$1 = (function (){var statearr_67021 = state_67018;
(statearr_67021[(7)] = inst_66995);

return statearr_67021;
})();
var statearr_67022_67043 = state_67018__$1;
(statearr_67022_67043[(2)] = null);

(statearr_67022_67043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67019 === (4))){
var inst_66998 = (state_67018[(8)]);
var inst_66998__$1 = (state_67018[(2)]);
var inst_66999 = (inst_66998__$1 == null);
var inst_67000 = cljs.core.not.call(null,inst_66999);
var state_67018__$1 = (function (){var statearr_67023 = state_67018;
(statearr_67023[(8)] = inst_66998__$1);

return statearr_67023;
})();
if(inst_67000){
var statearr_67024_67044 = state_67018__$1;
(statearr_67024_67044[(1)] = (5));

} else {
var statearr_67025_67045 = state_67018__$1;
(statearr_67025_67045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67019 === (6))){
var state_67018__$1 = state_67018;
var statearr_67026_67046 = state_67018__$1;
(statearr_67026_67046[(2)] = null);

(statearr_67026_67046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67019 === (3))){
var inst_67015 = (state_67018[(2)]);
var inst_67016 = cljs.core.async.close_BANG_.call(null,out);
var state_67018__$1 = (function (){var statearr_67027 = state_67018;
(statearr_67027[(9)] = inst_67015);

return statearr_67027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67018__$1,inst_67016);
} else {
if((state_val_67019 === (2))){
var state_67018__$1 = state_67018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67018__$1,(4),ch);
} else {
if((state_val_67019 === (11))){
var inst_66998 = (state_67018[(8)]);
var inst_67007 = (state_67018[(2)]);
var inst_66995 = inst_66998;
var state_67018__$1 = (function (){var statearr_67028 = state_67018;
(statearr_67028[(7)] = inst_66995);

(statearr_67028[(10)] = inst_67007);

return statearr_67028;
})();
var statearr_67029_67047 = state_67018__$1;
(statearr_67029_67047[(2)] = null);

(statearr_67029_67047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67019 === (9))){
var inst_66998 = (state_67018[(8)]);
var state_67018__$1 = state_67018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67018__$1,(11),out,inst_66998);
} else {
if((state_val_67019 === (5))){
var inst_66995 = (state_67018[(7)]);
var inst_66998 = (state_67018[(8)]);
var inst_67002 = cljs.core._EQ_.call(null,inst_66998,inst_66995);
var state_67018__$1 = state_67018;
if(inst_67002){
var statearr_67031_67048 = state_67018__$1;
(statearr_67031_67048[(1)] = (8));

} else {
var statearr_67032_67049 = state_67018__$1;
(statearr_67032_67049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67019 === (10))){
var inst_67010 = (state_67018[(2)]);
var state_67018__$1 = state_67018;
var statearr_67033_67050 = state_67018__$1;
(statearr_67033_67050[(2)] = inst_67010);

(statearr_67033_67050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67019 === (8))){
var inst_66995 = (state_67018[(7)]);
var tmp67030 = inst_66995;
var inst_66995__$1 = tmp67030;
var state_67018__$1 = (function (){var statearr_67034 = state_67018;
(statearr_67034[(7)] = inst_66995__$1);

return statearr_67034;
})();
var statearr_67035_67051 = state_67018__$1;
(statearr_67035_67051[(2)] = null);

(statearr_67035_67051[(1)] = (2));


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
});})(c__43716__auto___67041,out))
;
return ((function (switch__43559__auto__,c__43716__auto___67041,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_67036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67036[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_67036[(1)] = (1));

return statearr_67036;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_67018){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_67018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e67037){if((e67037 instanceof Object)){
var ex__43563__auto__ = e67037;
var statearr_67038_67052 = state_67018;
(statearr_67038_67052[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67053 = state_67018;
state_67018 = G__67053;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_67018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_67018);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___67041,out))
})();
var state__43718__auto__ = (function (){var statearr_67039 = f__43717__auto__.call(null);
(statearr_67039[(6)] = c__43716__auto___67041);

return statearr_67039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___67041,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__67055 = arguments.length;
switch (G__67055) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43716__auto___67121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___67121,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___67121,out){
return (function (state_67093){
var state_val_67094 = (state_67093[(1)]);
if((state_val_67094 === (7))){
var inst_67089 = (state_67093[(2)]);
var state_67093__$1 = state_67093;
var statearr_67095_67122 = state_67093__$1;
(statearr_67095_67122[(2)] = inst_67089);

(statearr_67095_67122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (1))){
var inst_67056 = (new Array(n));
var inst_67057 = inst_67056;
var inst_67058 = (0);
var state_67093__$1 = (function (){var statearr_67096 = state_67093;
(statearr_67096[(7)] = inst_67057);

(statearr_67096[(8)] = inst_67058);

return statearr_67096;
})();
var statearr_67097_67123 = state_67093__$1;
(statearr_67097_67123[(2)] = null);

(statearr_67097_67123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (4))){
var inst_67061 = (state_67093[(9)]);
var inst_67061__$1 = (state_67093[(2)]);
var inst_67062 = (inst_67061__$1 == null);
var inst_67063 = cljs.core.not.call(null,inst_67062);
var state_67093__$1 = (function (){var statearr_67098 = state_67093;
(statearr_67098[(9)] = inst_67061__$1);

return statearr_67098;
})();
if(inst_67063){
var statearr_67099_67124 = state_67093__$1;
(statearr_67099_67124[(1)] = (5));

} else {
var statearr_67100_67125 = state_67093__$1;
(statearr_67100_67125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (15))){
var inst_67083 = (state_67093[(2)]);
var state_67093__$1 = state_67093;
var statearr_67101_67126 = state_67093__$1;
(statearr_67101_67126[(2)] = inst_67083);

(statearr_67101_67126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (13))){
var state_67093__$1 = state_67093;
var statearr_67102_67127 = state_67093__$1;
(statearr_67102_67127[(2)] = null);

(statearr_67102_67127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (6))){
var inst_67058 = (state_67093[(8)]);
var inst_67079 = (inst_67058 > (0));
var state_67093__$1 = state_67093;
if(cljs.core.truth_(inst_67079)){
var statearr_67103_67128 = state_67093__$1;
(statearr_67103_67128[(1)] = (12));

} else {
var statearr_67104_67129 = state_67093__$1;
(statearr_67104_67129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (3))){
var inst_67091 = (state_67093[(2)]);
var state_67093__$1 = state_67093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67093__$1,inst_67091);
} else {
if((state_val_67094 === (12))){
var inst_67057 = (state_67093[(7)]);
var inst_67081 = cljs.core.vec.call(null,inst_67057);
var state_67093__$1 = state_67093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67093__$1,(15),out,inst_67081);
} else {
if((state_val_67094 === (2))){
var state_67093__$1 = state_67093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67093__$1,(4),ch);
} else {
if((state_val_67094 === (11))){
var inst_67073 = (state_67093[(2)]);
var inst_67074 = (new Array(n));
var inst_67057 = inst_67074;
var inst_67058 = (0);
var state_67093__$1 = (function (){var statearr_67105 = state_67093;
(statearr_67105[(7)] = inst_67057);

(statearr_67105[(8)] = inst_67058);

(statearr_67105[(10)] = inst_67073);

return statearr_67105;
})();
var statearr_67106_67130 = state_67093__$1;
(statearr_67106_67130[(2)] = null);

(statearr_67106_67130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (9))){
var inst_67057 = (state_67093[(7)]);
var inst_67071 = cljs.core.vec.call(null,inst_67057);
var state_67093__$1 = state_67093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67093__$1,(11),out,inst_67071);
} else {
if((state_val_67094 === (5))){
var inst_67057 = (state_67093[(7)]);
var inst_67066 = (state_67093[(11)]);
var inst_67058 = (state_67093[(8)]);
var inst_67061 = (state_67093[(9)]);
var inst_67065 = (inst_67057[inst_67058] = inst_67061);
var inst_67066__$1 = (inst_67058 + (1));
var inst_67067 = (inst_67066__$1 < n);
var state_67093__$1 = (function (){var statearr_67107 = state_67093;
(statearr_67107[(12)] = inst_67065);

(statearr_67107[(11)] = inst_67066__$1);

return statearr_67107;
})();
if(cljs.core.truth_(inst_67067)){
var statearr_67108_67131 = state_67093__$1;
(statearr_67108_67131[(1)] = (8));

} else {
var statearr_67109_67132 = state_67093__$1;
(statearr_67109_67132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (14))){
var inst_67086 = (state_67093[(2)]);
var inst_67087 = cljs.core.async.close_BANG_.call(null,out);
var state_67093__$1 = (function (){var statearr_67111 = state_67093;
(statearr_67111[(13)] = inst_67086);

return statearr_67111;
})();
var statearr_67112_67133 = state_67093__$1;
(statearr_67112_67133[(2)] = inst_67087);

(statearr_67112_67133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (10))){
var inst_67077 = (state_67093[(2)]);
var state_67093__$1 = state_67093;
var statearr_67113_67134 = state_67093__$1;
(statearr_67113_67134[(2)] = inst_67077);

(statearr_67113_67134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67094 === (8))){
var inst_67057 = (state_67093[(7)]);
var inst_67066 = (state_67093[(11)]);
var tmp67110 = inst_67057;
var inst_67057__$1 = tmp67110;
var inst_67058 = inst_67066;
var state_67093__$1 = (function (){var statearr_67114 = state_67093;
(statearr_67114[(7)] = inst_67057__$1);

(statearr_67114[(8)] = inst_67058);

return statearr_67114;
})();
var statearr_67115_67135 = state_67093__$1;
(statearr_67115_67135[(2)] = null);

(statearr_67115_67135[(1)] = (2));


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
});})(c__43716__auto___67121,out))
;
return ((function (switch__43559__auto__,c__43716__auto___67121,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_67116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67116[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_67116[(1)] = (1));

return statearr_67116;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_67093){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_67093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e67117){if((e67117 instanceof Object)){
var ex__43563__auto__ = e67117;
var statearr_67118_67136 = state_67093;
(statearr_67118_67136[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67137 = state_67093;
state_67093 = G__67137;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_67093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_67093);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___67121,out))
})();
var state__43718__auto__ = (function (){var statearr_67119 = f__43717__auto__.call(null);
(statearr_67119[(6)] = c__43716__auto___67121);

return statearr_67119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___67121,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__67139 = arguments.length;
switch (G__67139) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43716__auto___67209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___67209,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___67209,out){
return (function (state_67181){
var state_val_67182 = (state_67181[(1)]);
if((state_val_67182 === (7))){
var inst_67177 = (state_67181[(2)]);
var state_67181__$1 = state_67181;
var statearr_67183_67210 = state_67181__$1;
(statearr_67183_67210[(2)] = inst_67177);

(statearr_67183_67210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (1))){
var inst_67140 = [];
var inst_67141 = inst_67140;
var inst_67142 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_67181__$1 = (function (){var statearr_67184 = state_67181;
(statearr_67184[(7)] = inst_67141);

(statearr_67184[(8)] = inst_67142);

return statearr_67184;
})();
var statearr_67185_67211 = state_67181__$1;
(statearr_67185_67211[(2)] = null);

(statearr_67185_67211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (4))){
var inst_67145 = (state_67181[(9)]);
var inst_67145__$1 = (state_67181[(2)]);
var inst_67146 = (inst_67145__$1 == null);
var inst_67147 = cljs.core.not.call(null,inst_67146);
var state_67181__$1 = (function (){var statearr_67186 = state_67181;
(statearr_67186[(9)] = inst_67145__$1);

return statearr_67186;
})();
if(inst_67147){
var statearr_67187_67212 = state_67181__$1;
(statearr_67187_67212[(1)] = (5));

} else {
var statearr_67188_67213 = state_67181__$1;
(statearr_67188_67213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (15))){
var inst_67171 = (state_67181[(2)]);
var state_67181__$1 = state_67181;
var statearr_67189_67214 = state_67181__$1;
(statearr_67189_67214[(2)] = inst_67171);

(statearr_67189_67214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (13))){
var state_67181__$1 = state_67181;
var statearr_67190_67215 = state_67181__$1;
(statearr_67190_67215[(2)] = null);

(statearr_67190_67215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (6))){
var inst_67141 = (state_67181[(7)]);
var inst_67166 = inst_67141.length;
var inst_67167 = (inst_67166 > (0));
var state_67181__$1 = state_67181;
if(cljs.core.truth_(inst_67167)){
var statearr_67191_67216 = state_67181__$1;
(statearr_67191_67216[(1)] = (12));

} else {
var statearr_67192_67217 = state_67181__$1;
(statearr_67192_67217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (3))){
var inst_67179 = (state_67181[(2)]);
var state_67181__$1 = state_67181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67181__$1,inst_67179);
} else {
if((state_val_67182 === (12))){
var inst_67141 = (state_67181[(7)]);
var inst_67169 = cljs.core.vec.call(null,inst_67141);
var state_67181__$1 = state_67181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67181__$1,(15),out,inst_67169);
} else {
if((state_val_67182 === (2))){
var state_67181__$1 = state_67181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67181__$1,(4),ch);
} else {
if((state_val_67182 === (11))){
var inst_67149 = (state_67181[(10)]);
var inst_67145 = (state_67181[(9)]);
var inst_67159 = (state_67181[(2)]);
var inst_67160 = [];
var inst_67161 = inst_67160.push(inst_67145);
var inst_67141 = inst_67160;
var inst_67142 = inst_67149;
var state_67181__$1 = (function (){var statearr_67193 = state_67181;
(statearr_67193[(11)] = inst_67161);

(statearr_67193[(12)] = inst_67159);

(statearr_67193[(7)] = inst_67141);

(statearr_67193[(8)] = inst_67142);

return statearr_67193;
})();
var statearr_67194_67218 = state_67181__$1;
(statearr_67194_67218[(2)] = null);

(statearr_67194_67218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (9))){
var inst_67141 = (state_67181[(7)]);
var inst_67157 = cljs.core.vec.call(null,inst_67141);
var state_67181__$1 = state_67181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67181__$1,(11),out,inst_67157);
} else {
if((state_val_67182 === (5))){
var inst_67149 = (state_67181[(10)]);
var inst_67142 = (state_67181[(8)]);
var inst_67145 = (state_67181[(9)]);
var inst_67149__$1 = f.call(null,inst_67145);
var inst_67150 = cljs.core._EQ_.call(null,inst_67149__$1,inst_67142);
var inst_67151 = cljs.core.keyword_identical_QMARK_.call(null,inst_67142,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_67152 = ((inst_67150) || (inst_67151));
var state_67181__$1 = (function (){var statearr_67195 = state_67181;
(statearr_67195[(10)] = inst_67149__$1);

return statearr_67195;
})();
if(cljs.core.truth_(inst_67152)){
var statearr_67196_67219 = state_67181__$1;
(statearr_67196_67219[(1)] = (8));

} else {
var statearr_67197_67220 = state_67181__$1;
(statearr_67197_67220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (14))){
var inst_67174 = (state_67181[(2)]);
var inst_67175 = cljs.core.async.close_BANG_.call(null,out);
var state_67181__$1 = (function (){var statearr_67199 = state_67181;
(statearr_67199[(13)] = inst_67174);

return statearr_67199;
})();
var statearr_67200_67221 = state_67181__$1;
(statearr_67200_67221[(2)] = inst_67175);

(statearr_67200_67221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (10))){
var inst_67164 = (state_67181[(2)]);
var state_67181__$1 = state_67181;
var statearr_67201_67222 = state_67181__$1;
(statearr_67201_67222[(2)] = inst_67164);

(statearr_67201_67222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67182 === (8))){
var inst_67149 = (state_67181[(10)]);
var inst_67141 = (state_67181[(7)]);
var inst_67145 = (state_67181[(9)]);
var inst_67154 = inst_67141.push(inst_67145);
var tmp67198 = inst_67141;
var inst_67141__$1 = tmp67198;
var inst_67142 = inst_67149;
var state_67181__$1 = (function (){var statearr_67202 = state_67181;
(statearr_67202[(7)] = inst_67141__$1);

(statearr_67202[(8)] = inst_67142);

(statearr_67202[(14)] = inst_67154);

return statearr_67202;
})();
var statearr_67203_67223 = state_67181__$1;
(statearr_67203_67223[(2)] = null);

(statearr_67203_67223[(1)] = (2));


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
});})(c__43716__auto___67209,out))
;
return ((function (switch__43559__auto__,c__43716__auto___67209,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_67204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67204[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_67204[(1)] = (1));

return statearr_67204;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_67181){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_67181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e67205){if((e67205 instanceof Object)){
var ex__43563__auto__ = e67205;
var statearr_67206_67224 = state_67181;
(statearr_67206_67224[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67225 = state_67181;
state_67181 = G__67225;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_67181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_67181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___67209,out))
})();
var state__43718__auto__ = (function (){var statearr_67207 = f__43717__auto__.call(null);
(statearr_67207[(6)] = c__43716__auto___67209);

return statearr_67207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___67209,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525299302132

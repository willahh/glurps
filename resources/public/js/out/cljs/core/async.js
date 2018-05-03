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
var G__28034 = arguments.length;
switch (G__28034) {
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
if(typeof cljs.core.async.t_cljs$core$async28035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28035 = (function (f,blockable,meta28036){
this.f = f;
this.blockable = blockable;
this.meta28036 = meta28036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28037,meta28036__$1){
var self__ = this;
var _28037__$1 = this;
return (new cljs.core.async.t_cljs$core$async28035(self__.f,self__.blockable,meta28036__$1));
});

cljs.core.async.t_cljs$core$async28035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28037){
var self__ = this;
var _28037__$1 = this;
return self__.meta28036;
});

cljs.core.async.t_cljs$core$async28035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28036","meta28036",441352347,null)], null);
});

cljs.core.async.t_cljs$core$async28035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28035";

cljs.core.async.t_cljs$core$async28035.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28035");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28035.
 */
cljs.core.async.__GT_t_cljs$core$async28035 = (function cljs$core$async$__GT_t_cljs$core$async28035(f__$1,blockable__$1,meta28036){
return (new cljs.core.async.t_cljs$core$async28035(f__$1,blockable__$1,meta28036));
});

}

return (new cljs.core.async.t_cljs$core$async28035(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28041 = arguments.length;
switch (G__28041) {
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
var G__28044 = arguments.length;
switch (G__28044) {
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
var G__28047 = arguments.length;
switch (G__28047) {
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
var val_28049 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28049);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28049,ret){
return (function (){
return fn1.call(null,val_28049);
});})(val_28049,ret))
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
var G__28051 = arguments.length;
switch (G__28051) {
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
var n__4376__auto___28053 = n;
var x_28054 = (0);
while(true){
if((x_28054 < n__4376__auto___28053)){
(a[x_28054] = (0));

var G__28055 = (x_28054 + (1));
x_28054 = G__28055;
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

var G__28056 = (i + (1));
i = G__28056;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28057 = (function (flag,meta28058){
this.flag = flag;
this.meta28058 = meta28058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28059,meta28058__$1){
var self__ = this;
var _28059__$1 = this;
return (new cljs.core.async.t_cljs$core$async28057(self__.flag,meta28058__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28059){
var self__ = this;
var _28059__$1 = this;
return self__.meta28058;
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28058","meta28058",-1767182153,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28057";

cljs.core.async.t_cljs$core$async28057.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28057");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28057.
 */
cljs.core.async.__GT_t_cljs$core$async28057 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28057(flag__$1,meta28058){
return (new cljs.core.async.t_cljs$core$async28057(flag__$1,meta28058));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28057(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28060 = (function (flag,cb,meta28061){
this.flag = flag;
this.cb = cb;
this.meta28061 = meta28061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28062,meta28061__$1){
var self__ = this;
var _28062__$1 = this;
return (new cljs.core.async.t_cljs$core$async28060(self__.flag,self__.cb,meta28061__$1));
});

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28062){
var self__ = this;
var _28062__$1 = this;
return self__.meta28061;
});

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28061","meta28061",-929459553,null)], null);
});

cljs.core.async.t_cljs$core$async28060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28060";

cljs.core.async.t_cljs$core$async28060.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28060");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28060.
 */
cljs.core.async.__GT_t_cljs$core$async28060 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28060(flag__$1,cb__$1,meta28061){
return (new cljs.core.async.t_cljs$core$async28060(flag__$1,cb__$1,meta28061));
});

}

return (new cljs.core.async.t_cljs$core$async28060(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28063_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28063_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28064_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28064_SHARP_,port], null));
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
var G__28065 = (i + (1));
i = G__28065;
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
var len__4499__auto___28071 = arguments.length;
var i__4500__auto___28072 = (0);
while(true){
if((i__4500__auto___28072 < len__4499__auto___28071)){
args__4502__auto__.push((arguments[i__4500__auto___28072]));

var G__28073 = (i__4500__auto___28072 + (1));
i__4500__auto___28072 = G__28073;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28068){
var map__28069 = p__28068;
var map__28069__$1 = ((((!((map__28069 == null)))?(((((map__28069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28069):map__28069);
var opts = map__28069__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28066){
var G__28067 = cljs.core.first.call(null,seq28066);
var seq28066__$1 = cljs.core.next.call(null,seq28066);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28067,seq28066__$1);
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
var G__28075 = arguments.length;
switch (G__28075) {
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
var c__27974__auto___28121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___28121){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___28121){
return (function (state_28099){
var state_val_28100 = (state_28099[(1)]);
if((state_val_28100 === (7))){
var inst_28095 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28101_28122 = state_28099__$1;
(statearr_28101_28122[(2)] = inst_28095);

(statearr_28101_28122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (1))){
var state_28099__$1 = state_28099;
var statearr_28102_28123 = state_28099__$1;
(statearr_28102_28123[(2)] = null);

(statearr_28102_28123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (4))){
var inst_28078 = (state_28099[(7)]);
var inst_28078__$1 = (state_28099[(2)]);
var inst_28079 = (inst_28078__$1 == null);
var state_28099__$1 = (function (){var statearr_28103 = state_28099;
(statearr_28103[(7)] = inst_28078__$1);

return statearr_28103;
})();
if(cljs.core.truth_(inst_28079)){
var statearr_28104_28124 = state_28099__$1;
(statearr_28104_28124[(1)] = (5));

} else {
var statearr_28105_28125 = state_28099__$1;
(statearr_28105_28125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (13))){
var state_28099__$1 = state_28099;
var statearr_28106_28126 = state_28099__$1;
(statearr_28106_28126[(2)] = null);

(statearr_28106_28126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (6))){
var inst_28078 = (state_28099[(7)]);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28099__$1,(11),to,inst_28078);
} else {
if((state_val_28100 === (3))){
var inst_28097 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28099__$1,inst_28097);
} else {
if((state_val_28100 === (12))){
var state_28099__$1 = state_28099;
var statearr_28107_28127 = state_28099__$1;
(statearr_28107_28127[(2)] = null);

(statearr_28107_28127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (2))){
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(4),from);
} else {
if((state_val_28100 === (11))){
var inst_28088 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28088)){
var statearr_28108_28128 = state_28099__$1;
(statearr_28108_28128[(1)] = (12));

} else {
var statearr_28109_28129 = state_28099__$1;
(statearr_28109_28129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (9))){
var state_28099__$1 = state_28099;
var statearr_28110_28130 = state_28099__$1;
(statearr_28110_28130[(2)] = null);

(statearr_28110_28130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (5))){
var state_28099__$1 = state_28099;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28111_28131 = state_28099__$1;
(statearr_28111_28131[(1)] = (8));

} else {
var statearr_28112_28132 = state_28099__$1;
(statearr_28112_28132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (14))){
var inst_28093 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28113_28133 = state_28099__$1;
(statearr_28113_28133[(2)] = inst_28093);

(statearr_28113_28133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (10))){
var inst_28085 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28114_28134 = state_28099__$1;
(statearr_28114_28134[(2)] = inst_28085);

(statearr_28114_28134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (8))){
var inst_28082 = cljs.core.async.close_BANG_.call(null,to);
var state_28099__$1 = state_28099;
var statearr_28115_28135 = state_28099__$1;
(statearr_28115_28135[(2)] = inst_28082);

(statearr_28115_28135[(1)] = (10));


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
});})(c__27974__auto___28121))
;
return ((function (switch__27884__auto__,c__27974__auto___28121){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_28116 = [null,null,null,null,null,null,null,null];
(statearr_28116[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_28116[(1)] = (1));

return statearr_28116;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_28099){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28117){if((e28117 instanceof Object)){
var ex__27888__auto__ = e28117;
var statearr_28118_28136 = state_28099;
(statearr_28118_28136[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28137 = state_28099;
state_28099 = G__28137;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_28099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_28099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___28121))
})();
var state__27976__auto__ = (function (){var statearr_28119 = f__27975__auto__.call(null);
(statearr_28119[(6)] = c__27974__auto___28121);

return statearr_28119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___28121))
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
var process = ((function (jobs,results){
return (function (p__28138){
var vec__28139 = p__28138;
var v = cljs.core.nth.call(null,vec__28139,(0),null);
var p = cljs.core.nth.call(null,vec__28139,(1),null);
var job = vec__28139;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27974__auto___28310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___28310,res,vec__28139,v,p,job,jobs,results){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___28310,res,vec__28139,v,p,job,jobs,results){
return (function (state_28146){
var state_val_28147 = (state_28146[(1)]);
if((state_val_28147 === (1))){
var state_28146__$1 = state_28146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28146__$1,(2),res,v);
} else {
if((state_val_28147 === (2))){
var inst_28143 = (state_28146[(2)]);
var inst_28144 = cljs.core.async.close_BANG_.call(null,res);
var state_28146__$1 = (function (){var statearr_28148 = state_28146;
(statearr_28148[(7)] = inst_28143);

return statearr_28148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28146__$1,inst_28144);
} else {
return null;
}
}
});})(c__27974__auto___28310,res,vec__28139,v,p,job,jobs,results))
;
return ((function (switch__27884__auto__,c__27974__auto___28310,res,vec__28139,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_28149 = [null,null,null,null,null,null,null,null];
(statearr_28149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_28149[(1)] = (1));

return statearr_28149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_28146){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28150){if((e28150 instanceof Object)){
var ex__27888__auto__ = e28150;
var statearr_28151_28311 = state_28146;
(statearr_28151_28311[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28312 = state_28146;
state_28146 = G__28312;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_28146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_28146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___28310,res,vec__28139,v,p,job,jobs,results))
})();
var state__27976__auto__ = (function (){var statearr_28152 = f__27975__auto__.call(null);
(statearr_28152[(6)] = c__27974__auto___28310);

return statearr_28152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___28310,res,vec__28139,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28153){
var vec__28154 = p__28153;
var v = cljs.core.nth.call(null,vec__28154,(0),null);
var p = cljs.core.nth.call(null,vec__28154,(1),null);
var job = vec__28154;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___28313 = n;
var __28314 = (0);
while(true){
if((__28314 < n__4376__auto___28313)){
var G__28157_28315 = type;
var G__28157_28316__$1 = (((G__28157_28315 instanceof cljs.core.Keyword))?G__28157_28315.fqn:null);
switch (G__28157_28316__$1) {
case "compute":
var c__27974__auto___28318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28314,c__27974__auto___28318,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (__28314,c__27974__auto___28318,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async){
return (function (state_28170){
var state_val_28171 = (state_28170[(1)]);
if((state_val_28171 === (1))){
var state_28170__$1 = state_28170;
var statearr_28172_28319 = state_28170__$1;
(statearr_28172_28319[(2)] = null);

(statearr_28172_28319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28171 === (2))){
var state_28170__$1 = state_28170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28170__$1,(4),jobs);
} else {
if((state_val_28171 === (3))){
var inst_28168 = (state_28170[(2)]);
var state_28170__$1 = state_28170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28170__$1,inst_28168);
} else {
if((state_val_28171 === (4))){
var inst_28160 = (state_28170[(2)]);
var inst_28161 = process.call(null,inst_28160);
var state_28170__$1 = state_28170;
if(cljs.core.truth_(inst_28161)){
var statearr_28173_28320 = state_28170__$1;
(statearr_28173_28320[(1)] = (5));

} else {
var statearr_28174_28321 = state_28170__$1;
(statearr_28174_28321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28171 === (5))){
var state_28170__$1 = state_28170;
var statearr_28175_28322 = state_28170__$1;
(statearr_28175_28322[(2)] = null);

(statearr_28175_28322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28171 === (6))){
var state_28170__$1 = state_28170;
var statearr_28176_28323 = state_28170__$1;
(statearr_28176_28323[(2)] = null);

(statearr_28176_28323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28171 === (7))){
var inst_28166 = (state_28170[(2)]);
var state_28170__$1 = state_28170;
var statearr_28177_28324 = state_28170__$1;
(statearr_28177_28324[(2)] = inst_28166);

(statearr_28177_28324[(1)] = (3));


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
});})(__28314,c__27974__auto___28318,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async))
;
return ((function (__28314,switch__27884__auto__,c__27974__auto___28318,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_28178 = [null,null,null,null,null,null,null];
(statearr_28178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_28178[(1)] = (1));

return statearr_28178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_28170){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28179){if((e28179 instanceof Object)){
var ex__27888__auto__ = e28179;
var statearr_28180_28325 = state_28170;
(statearr_28180_28325[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28326 = state_28170;
state_28170 = G__28326;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_28170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_28170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(__28314,switch__27884__auto__,c__27974__auto___28318,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async))
})();
var state__27976__auto__ = (function (){var statearr_28181 = f__27975__auto__.call(null);
(statearr_28181[(6)] = c__27974__auto___28318);

return statearr_28181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(__28314,c__27974__auto___28318,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async))
);


break;
case "async":
var c__27974__auto___28327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28314,c__27974__auto___28327,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (__28314,c__27974__auto___28327,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async){
return (function (state_28194){
var state_val_28195 = (state_28194[(1)]);
if((state_val_28195 === (1))){
var state_28194__$1 = state_28194;
var statearr_28196_28328 = state_28194__$1;
(statearr_28196_28328[(2)] = null);

(statearr_28196_28328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (2))){
var state_28194__$1 = state_28194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28194__$1,(4),jobs);
} else {
if((state_val_28195 === (3))){
var inst_28192 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28194__$1,inst_28192);
} else {
if((state_val_28195 === (4))){
var inst_28184 = (state_28194[(2)]);
var inst_28185 = async.call(null,inst_28184);
var state_28194__$1 = state_28194;
if(cljs.core.truth_(inst_28185)){
var statearr_28197_28329 = state_28194__$1;
(statearr_28197_28329[(1)] = (5));

} else {
var statearr_28198_28330 = state_28194__$1;
(statearr_28198_28330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (5))){
var state_28194__$1 = state_28194;
var statearr_28199_28331 = state_28194__$1;
(statearr_28199_28331[(2)] = null);

(statearr_28199_28331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (6))){
var state_28194__$1 = state_28194;
var statearr_28200_28332 = state_28194__$1;
(statearr_28200_28332[(2)] = null);

(statearr_28200_28332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (7))){
var inst_28190 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28201_28333 = state_28194__$1;
(statearr_28201_28333[(2)] = inst_28190);

(statearr_28201_28333[(1)] = (3));


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
});})(__28314,c__27974__auto___28327,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async))
;
return ((function (__28314,switch__27884__auto__,c__27974__auto___28327,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_28202 = [null,null,null,null,null,null,null];
(statearr_28202[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_28202[(1)] = (1));

return statearr_28202;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_28194){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28203){if((e28203 instanceof Object)){
var ex__27888__auto__ = e28203;
var statearr_28204_28334 = state_28194;
(statearr_28204_28334[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28335 = state_28194;
state_28194 = G__28335;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_28194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_28194);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(__28314,switch__27884__auto__,c__27974__auto___28327,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async))
})();
var state__27976__auto__ = (function (){var statearr_28205 = f__27975__auto__.call(null);
(statearr_28205[(6)] = c__27974__auto___28327);

return statearr_28205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(__28314,c__27974__auto___28327,G__28157_28315,G__28157_28316__$1,n__4376__auto___28313,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28157_28316__$1)].join('')));

}

var G__28336 = (__28314 + (1));
__28314 = G__28336;
continue;
} else {
}
break;
}

var c__27974__auto___28337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___28337,jobs,results,process,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___28337,jobs,results,process,async){
return (function (state_28227){
var state_val_28228 = (state_28227[(1)]);
if((state_val_28228 === (1))){
var state_28227__$1 = state_28227;
var statearr_28229_28338 = state_28227__$1;
(statearr_28229_28338[(2)] = null);

(statearr_28229_28338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (2))){
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28227__$1,(4),from);
} else {
if((state_val_28228 === (3))){
var inst_28225 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28227__$1,inst_28225);
} else {
if((state_val_28228 === (4))){
var inst_28208 = (state_28227[(7)]);
var inst_28208__$1 = (state_28227[(2)]);
var inst_28209 = (inst_28208__$1 == null);
var state_28227__$1 = (function (){var statearr_28230 = state_28227;
(statearr_28230[(7)] = inst_28208__$1);

return statearr_28230;
})();
if(cljs.core.truth_(inst_28209)){
var statearr_28231_28339 = state_28227__$1;
(statearr_28231_28339[(1)] = (5));

} else {
var statearr_28232_28340 = state_28227__$1;
(statearr_28232_28340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (5))){
var inst_28211 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28227__$1 = state_28227;
var statearr_28233_28341 = state_28227__$1;
(statearr_28233_28341[(2)] = inst_28211);

(statearr_28233_28341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (6))){
var inst_28213 = (state_28227[(8)]);
var inst_28208 = (state_28227[(7)]);
var inst_28213__$1 = cljs.core.async.chan.call(null,(1));
var inst_28214 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28215 = [inst_28208,inst_28213__$1];
var inst_28216 = (new cljs.core.PersistentVector(null,2,(5),inst_28214,inst_28215,null));
var state_28227__$1 = (function (){var statearr_28234 = state_28227;
(statearr_28234[(8)] = inst_28213__$1);

return statearr_28234;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28227__$1,(8),jobs,inst_28216);
} else {
if((state_val_28228 === (7))){
var inst_28223 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
var statearr_28235_28342 = state_28227__$1;
(statearr_28235_28342[(2)] = inst_28223);

(statearr_28235_28342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (8))){
var inst_28213 = (state_28227[(8)]);
var inst_28218 = (state_28227[(2)]);
var state_28227__$1 = (function (){var statearr_28236 = state_28227;
(statearr_28236[(9)] = inst_28218);

return statearr_28236;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28227__$1,(9),results,inst_28213);
} else {
if((state_val_28228 === (9))){
var inst_28220 = (state_28227[(2)]);
var state_28227__$1 = (function (){var statearr_28237 = state_28227;
(statearr_28237[(10)] = inst_28220);

return statearr_28237;
})();
var statearr_28238_28343 = state_28227__$1;
(statearr_28238_28343[(2)] = null);

(statearr_28238_28343[(1)] = (2));


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
});})(c__27974__auto___28337,jobs,results,process,async))
;
return ((function (switch__27884__auto__,c__27974__auto___28337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_28239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_28239[(1)] = (1));

return statearr_28239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_28227){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28240){if((e28240 instanceof Object)){
var ex__27888__auto__ = e28240;
var statearr_28241_28344 = state_28227;
(statearr_28241_28344[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28345 = state_28227;
state_28227 = G__28345;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_28227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_28227);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___28337,jobs,results,process,async))
})();
var state__27976__auto__ = (function (){var statearr_28242 = f__27975__auto__.call(null);
(statearr_28242[(6)] = c__27974__auto___28337);

return statearr_28242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___28337,jobs,results,process,async))
);


var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__,jobs,results,process,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__,jobs,results,process,async){
return (function (state_28280){
var state_val_28281 = (state_28280[(1)]);
if((state_val_28281 === (7))){
var inst_28276 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
var statearr_28282_28346 = state_28280__$1;
(statearr_28282_28346[(2)] = inst_28276);

(statearr_28282_28346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (20))){
var state_28280__$1 = state_28280;
var statearr_28283_28347 = state_28280__$1;
(statearr_28283_28347[(2)] = null);

(statearr_28283_28347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (1))){
var state_28280__$1 = state_28280;
var statearr_28284_28348 = state_28280__$1;
(statearr_28284_28348[(2)] = null);

(statearr_28284_28348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (4))){
var inst_28245 = (state_28280[(7)]);
var inst_28245__$1 = (state_28280[(2)]);
var inst_28246 = (inst_28245__$1 == null);
var state_28280__$1 = (function (){var statearr_28285 = state_28280;
(statearr_28285[(7)] = inst_28245__$1);

return statearr_28285;
})();
if(cljs.core.truth_(inst_28246)){
var statearr_28286_28349 = state_28280__$1;
(statearr_28286_28349[(1)] = (5));

} else {
var statearr_28287_28350 = state_28280__$1;
(statearr_28287_28350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (15))){
var inst_28258 = (state_28280[(8)]);
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28280__$1,(18),to,inst_28258);
} else {
if((state_val_28281 === (21))){
var inst_28271 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
var statearr_28288_28351 = state_28280__$1;
(statearr_28288_28351[(2)] = inst_28271);

(statearr_28288_28351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (13))){
var inst_28273 = (state_28280[(2)]);
var state_28280__$1 = (function (){var statearr_28289 = state_28280;
(statearr_28289[(9)] = inst_28273);

return statearr_28289;
})();
var statearr_28290_28352 = state_28280__$1;
(statearr_28290_28352[(2)] = null);

(statearr_28290_28352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (6))){
var inst_28245 = (state_28280[(7)]);
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28280__$1,(11),inst_28245);
} else {
if((state_val_28281 === (17))){
var inst_28266 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
if(cljs.core.truth_(inst_28266)){
var statearr_28291_28353 = state_28280__$1;
(statearr_28291_28353[(1)] = (19));

} else {
var statearr_28292_28354 = state_28280__$1;
(statearr_28292_28354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (3))){
var inst_28278 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28280__$1,inst_28278);
} else {
if((state_val_28281 === (12))){
var inst_28255 = (state_28280[(10)]);
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28280__$1,(14),inst_28255);
} else {
if((state_val_28281 === (2))){
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28280__$1,(4),results);
} else {
if((state_val_28281 === (19))){
var state_28280__$1 = state_28280;
var statearr_28293_28355 = state_28280__$1;
(statearr_28293_28355[(2)] = null);

(statearr_28293_28355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (11))){
var inst_28255 = (state_28280[(2)]);
var state_28280__$1 = (function (){var statearr_28294 = state_28280;
(statearr_28294[(10)] = inst_28255);

return statearr_28294;
})();
var statearr_28295_28356 = state_28280__$1;
(statearr_28295_28356[(2)] = null);

(statearr_28295_28356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (9))){
var state_28280__$1 = state_28280;
var statearr_28296_28357 = state_28280__$1;
(statearr_28296_28357[(2)] = null);

(statearr_28296_28357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (5))){
var state_28280__$1 = state_28280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28297_28358 = state_28280__$1;
(statearr_28297_28358[(1)] = (8));

} else {
var statearr_28298_28359 = state_28280__$1;
(statearr_28298_28359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (14))){
var inst_28258 = (state_28280[(8)]);
var inst_28260 = (state_28280[(11)]);
var inst_28258__$1 = (state_28280[(2)]);
var inst_28259 = (inst_28258__$1 == null);
var inst_28260__$1 = cljs.core.not.call(null,inst_28259);
var state_28280__$1 = (function (){var statearr_28299 = state_28280;
(statearr_28299[(8)] = inst_28258__$1);

(statearr_28299[(11)] = inst_28260__$1);

return statearr_28299;
})();
if(inst_28260__$1){
var statearr_28300_28360 = state_28280__$1;
(statearr_28300_28360[(1)] = (15));

} else {
var statearr_28301_28361 = state_28280__$1;
(statearr_28301_28361[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (16))){
var inst_28260 = (state_28280[(11)]);
var state_28280__$1 = state_28280;
var statearr_28302_28362 = state_28280__$1;
(statearr_28302_28362[(2)] = inst_28260);

(statearr_28302_28362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (10))){
var inst_28252 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
var statearr_28303_28363 = state_28280__$1;
(statearr_28303_28363[(2)] = inst_28252);

(statearr_28303_28363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (18))){
var inst_28263 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
var statearr_28304_28364 = state_28280__$1;
(statearr_28304_28364[(2)] = inst_28263);

(statearr_28304_28364[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (8))){
var inst_28249 = cljs.core.async.close_BANG_.call(null,to);
var state_28280__$1 = state_28280;
var statearr_28305_28365 = state_28280__$1;
(statearr_28305_28365[(2)] = inst_28249);

(statearr_28305_28365[(1)] = (10));


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
});})(c__27974__auto__,jobs,results,process,async))
;
return ((function (switch__27884__auto__,c__27974__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_28306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_28306[(1)] = (1));

return statearr_28306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_28280){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28307){if((e28307 instanceof Object)){
var ex__27888__auto__ = e28307;
var statearr_28308_28366 = state_28280;
(statearr_28308_28366[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28367 = state_28280;
state_28280 = G__28367;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_28280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_28280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,jobs,results,process,async))
})();
var state__27976__auto__ = (function (){var statearr_28309 = f__27975__auto__.call(null);
(statearr_28309[(6)] = c__27974__auto__);

return statearr_28309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,jobs,results,process,async))
);

return c__27974__auto__;
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
var G__28369 = arguments.length;
switch (G__28369) {
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
var G__28372 = arguments.length;
switch (G__28372) {
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
var G__28375 = arguments.length;
switch (G__28375) {
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
var c__27974__auto___28424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___28424,tc,fc){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___28424,tc,fc){
return (function (state_28401){
var state_val_28402 = (state_28401[(1)]);
if((state_val_28402 === (7))){
var inst_28397 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
var statearr_28403_28425 = state_28401__$1;
(statearr_28403_28425[(2)] = inst_28397);

(statearr_28403_28425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (1))){
var state_28401__$1 = state_28401;
var statearr_28404_28426 = state_28401__$1;
(statearr_28404_28426[(2)] = null);

(statearr_28404_28426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (4))){
var inst_28378 = (state_28401[(7)]);
var inst_28378__$1 = (state_28401[(2)]);
var inst_28379 = (inst_28378__$1 == null);
var state_28401__$1 = (function (){var statearr_28405 = state_28401;
(statearr_28405[(7)] = inst_28378__$1);

return statearr_28405;
})();
if(cljs.core.truth_(inst_28379)){
var statearr_28406_28427 = state_28401__$1;
(statearr_28406_28427[(1)] = (5));

} else {
var statearr_28407_28428 = state_28401__$1;
(statearr_28407_28428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (13))){
var state_28401__$1 = state_28401;
var statearr_28408_28429 = state_28401__$1;
(statearr_28408_28429[(2)] = null);

(statearr_28408_28429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (6))){
var inst_28378 = (state_28401[(7)]);
var inst_28384 = p.call(null,inst_28378);
var state_28401__$1 = state_28401;
if(cljs.core.truth_(inst_28384)){
var statearr_28409_28430 = state_28401__$1;
(statearr_28409_28430[(1)] = (9));

} else {
var statearr_28410_28431 = state_28401__$1;
(statearr_28410_28431[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (3))){
var inst_28399 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28401__$1,inst_28399);
} else {
if((state_val_28402 === (12))){
var state_28401__$1 = state_28401;
var statearr_28411_28432 = state_28401__$1;
(statearr_28411_28432[(2)] = null);

(statearr_28411_28432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (2))){
var state_28401__$1 = state_28401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28401__$1,(4),ch);
} else {
if((state_val_28402 === (11))){
var inst_28378 = (state_28401[(7)]);
var inst_28388 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28401__$1,(8),inst_28388,inst_28378);
} else {
if((state_val_28402 === (9))){
var state_28401__$1 = state_28401;
var statearr_28412_28433 = state_28401__$1;
(statearr_28412_28433[(2)] = tc);

(statearr_28412_28433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (5))){
var inst_28381 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28382 = cljs.core.async.close_BANG_.call(null,fc);
var state_28401__$1 = (function (){var statearr_28413 = state_28401;
(statearr_28413[(8)] = inst_28381);

return statearr_28413;
})();
var statearr_28414_28434 = state_28401__$1;
(statearr_28414_28434[(2)] = inst_28382);

(statearr_28414_28434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (14))){
var inst_28395 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
var statearr_28415_28435 = state_28401__$1;
(statearr_28415_28435[(2)] = inst_28395);

(statearr_28415_28435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (10))){
var state_28401__$1 = state_28401;
var statearr_28416_28436 = state_28401__$1;
(statearr_28416_28436[(2)] = fc);

(statearr_28416_28436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (8))){
var inst_28390 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
if(cljs.core.truth_(inst_28390)){
var statearr_28417_28437 = state_28401__$1;
(statearr_28417_28437[(1)] = (12));

} else {
var statearr_28418_28438 = state_28401__$1;
(statearr_28418_28438[(1)] = (13));

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
});})(c__27974__auto___28424,tc,fc))
;
return ((function (switch__27884__auto__,c__27974__auto___28424,tc,fc){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_28419 = [null,null,null,null,null,null,null,null,null];
(statearr_28419[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_28419[(1)] = (1));

return statearr_28419;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_28401){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28420){if((e28420 instanceof Object)){
var ex__27888__auto__ = e28420;
var statearr_28421_28439 = state_28401;
(statearr_28421_28439[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28440 = state_28401;
state_28401 = G__28440;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_28401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_28401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___28424,tc,fc))
})();
var state__27976__auto__ = (function (){var statearr_28422 = f__27975__auto__.call(null);
(statearr_28422[(6)] = c__27974__auto___28424);

return statearr_28422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___28424,tc,fc))
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
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__){
return (function (state_28461){
var state_val_28462 = (state_28461[(1)]);
if((state_val_28462 === (7))){
var inst_28457 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28463_28481 = state_28461__$1;
(statearr_28463_28481[(2)] = inst_28457);

(statearr_28463_28481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (1))){
var inst_28441 = init;
var state_28461__$1 = (function (){var statearr_28464 = state_28461;
(statearr_28464[(7)] = inst_28441);

return statearr_28464;
})();
var statearr_28465_28482 = state_28461__$1;
(statearr_28465_28482[(2)] = null);

(statearr_28465_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (4))){
var inst_28444 = (state_28461[(8)]);
var inst_28444__$1 = (state_28461[(2)]);
var inst_28445 = (inst_28444__$1 == null);
var state_28461__$1 = (function (){var statearr_28466 = state_28461;
(statearr_28466[(8)] = inst_28444__$1);

return statearr_28466;
})();
if(cljs.core.truth_(inst_28445)){
var statearr_28467_28483 = state_28461__$1;
(statearr_28467_28483[(1)] = (5));

} else {
var statearr_28468_28484 = state_28461__$1;
(statearr_28468_28484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (6))){
var inst_28448 = (state_28461[(9)]);
var inst_28441 = (state_28461[(7)]);
var inst_28444 = (state_28461[(8)]);
var inst_28448__$1 = f.call(null,inst_28441,inst_28444);
var inst_28449 = cljs.core.reduced_QMARK_.call(null,inst_28448__$1);
var state_28461__$1 = (function (){var statearr_28469 = state_28461;
(statearr_28469[(9)] = inst_28448__$1);

return statearr_28469;
})();
if(inst_28449){
var statearr_28470_28485 = state_28461__$1;
(statearr_28470_28485[(1)] = (8));

} else {
var statearr_28471_28486 = state_28461__$1;
(statearr_28471_28486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (3))){
var inst_28459 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28461__$1,inst_28459);
} else {
if((state_val_28462 === (2))){
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28461__$1,(4),ch);
} else {
if((state_val_28462 === (9))){
var inst_28448 = (state_28461[(9)]);
var inst_28441 = inst_28448;
var state_28461__$1 = (function (){var statearr_28472 = state_28461;
(statearr_28472[(7)] = inst_28441);

return statearr_28472;
})();
var statearr_28473_28487 = state_28461__$1;
(statearr_28473_28487[(2)] = null);

(statearr_28473_28487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (5))){
var inst_28441 = (state_28461[(7)]);
var state_28461__$1 = state_28461;
var statearr_28474_28488 = state_28461__$1;
(statearr_28474_28488[(2)] = inst_28441);

(statearr_28474_28488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (10))){
var inst_28455 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28475_28489 = state_28461__$1;
(statearr_28475_28489[(2)] = inst_28455);

(statearr_28475_28489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (8))){
var inst_28448 = (state_28461[(9)]);
var inst_28451 = cljs.core.deref.call(null,inst_28448);
var state_28461__$1 = state_28461;
var statearr_28476_28490 = state_28461__$1;
(statearr_28476_28490[(2)] = inst_28451);

(statearr_28476_28490[(1)] = (10));


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
});})(c__27974__auto__))
;
return ((function (switch__27884__auto__,c__27974__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27885__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27885__auto____0 = (function (){
var statearr_28477 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28477[(0)] = cljs$core$async$reduce_$_state_machine__27885__auto__);

(statearr_28477[(1)] = (1));

return statearr_28477;
});
var cljs$core$async$reduce_$_state_machine__27885__auto____1 = (function (state_28461){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28478){if((e28478 instanceof Object)){
var ex__27888__auto__ = e28478;
var statearr_28479_28491 = state_28461;
(statearr_28479_28491[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28492 = state_28461;
state_28461 = G__28492;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27885__auto__ = function(state_28461){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27885__auto____1.call(this,state_28461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27885__auto____0;
cljs$core$async$reduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27885__auto____1;
return cljs$core$async$reduce_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_28480 = f__27975__auto__.call(null);
(statearr_28480[(6)] = c__27974__auto__);

return statearr_28480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__,f__$1){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__,f__$1){
return (function (state_28498){
var state_val_28499 = (state_28498[(1)]);
if((state_val_28499 === (1))){
var inst_28493 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28498__$1 = state_28498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28498__$1,(2),inst_28493);
} else {
if((state_val_28499 === (2))){
var inst_28495 = (state_28498[(2)]);
var inst_28496 = f__$1.call(null,inst_28495);
var state_28498__$1 = state_28498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28498__$1,inst_28496);
} else {
return null;
}
}
});})(c__27974__auto__,f__$1))
;
return ((function (switch__27884__auto__,c__27974__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27885__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27885__auto____0 = (function (){
var statearr_28500 = [null,null,null,null,null,null,null];
(statearr_28500[(0)] = cljs$core$async$transduce_$_state_machine__27885__auto__);

(statearr_28500[(1)] = (1));

return statearr_28500;
});
var cljs$core$async$transduce_$_state_machine__27885__auto____1 = (function (state_28498){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28501){if((e28501 instanceof Object)){
var ex__27888__auto__ = e28501;
var statearr_28502_28504 = state_28498;
(statearr_28502_28504[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28505 = state_28498;
state_28498 = G__28505;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27885__auto__ = function(state_28498){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27885__auto____1.call(this,state_28498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27885__auto____0;
cljs$core$async$transduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27885__auto____1;
return cljs$core$async$transduce_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,f__$1))
})();
var state__27976__auto__ = (function (){var statearr_28503 = f__27975__auto__.call(null);
(statearr_28503[(6)] = c__27974__auto__);

return statearr_28503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,f__$1))
);

return c__27974__auto__;
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
var G__28507 = arguments.length;
switch (G__28507) {
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
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__){
return (function (state_28532){
var state_val_28533 = (state_28532[(1)]);
if((state_val_28533 === (7))){
var inst_28514 = (state_28532[(2)]);
var state_28532__$1 = state_28532;
var statearr_28534_28555 = state_28532__$1;
(statearr_28534_28555[(2)] = inst_28514);

(statearr_28534_28555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (1))){
var inst_28508 = cljs.core.seq.call(null,coll);
var inst_28509 = inst_28508;
var state_28532__$1 = (function (){var statearr_28535 = state_28532;
(statearr_28535[(7)] = inst_28509);

return statearr_28535;
})();
var statearr_28536_28556 = state_28532__$1;
(statearr_28536_28556[(2)] = null);

(statearr_28536_28556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (4))){
var inst_28509 = (state_28532[(7)]);
var inst_28512 = cljs.core.first.call(null,inst_28509);
var state_28532__$1 = state_28532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28532__$1,(7),ch,inst_28512);
} else {
if((state_val_28533 === (13))){
var inst_28526 = (state_28532[(2)]);
var state_28532__$1 = state_28532;
var statearr_28537_28557 = state_28532__$1;
(statearr_28537_28557[(2)] = inst_28526);

(statearr_28537_28557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (6))){
var inst_28517 = (state_28532[(2)]);
var state_28532__$1 = state_28532;
if(cljs.core.truth_(inst_28517)){
var statearr_28538_28558 = state_28532__$1;
(statearr_28538_28558[(1)] = (8));

} else {
var statearr_28539_28559 = state_28532__$1;
(statearr_28539_28559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (3))){
var inst_28530 = (state_28532[(2)]);
var state_28532__$1 = state_28532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28532__$1,inst_28530);
} else {
if((state_val_28533 === (12))){
var state_28532__$1 = state_28532;
var statearr_28540_28560 = state_28532__$1;
(statearr_28540_28560[(2)] = null);

(statearr_28540_28560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (2))){
var inst_28509 = (state_28532[(7)]);
var state_28532__$1 = state_28532;
if(cljs.core.truth_(inst_28509)){
var statearr_28541_28561 = state_28532__$1;
(statearr_28541_28561[(1)] = (4));

} else {
var statearr_28542_28562 = state_28532__$1;
(statearr_28542_28562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (11))){
var inst_28523 = cljs.core.async.close_BANG_.call(null,ch);
var state_28532__$1 = state_28532;
var statearr_28543_28563 = state_28532__$1;
(statearr_28543_28563[(2)] = inst_28523);

(statearr_28543_28563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (9))){
var state_28532__$1 = state_28532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28544_28564 = state_28532__$1;
(statearr_28544_28564[(1)] = (11));

} else {
var statearr_28545_28565 = state_28532__$1;
(statearr_28545_28565[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (5))){
var inst_28509 = (state_28532[(7)]);
var state_28532__$1 = state_28532;
var statearr_28546_28566 = state_28532__$1;
(statearr_28546_28566[(2)] = inst_28509);

(statearr_28546_28566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (10))){
var inst_28528 = (state_28532[(2)]);
var state_28532__$1 = state_28532;
var statearr_28547_28567 = state_28532__$1;
(statearr_28547_28567[(2)] = inst_28528);

(statearr_28547_28567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (8))){
var inst_28509 = (state_28532[(7)]);
var inst_28519 = cljs.core.next.call(null,inst_28509);
var inst_28509__$1 = inst_28519;
var state_28532__$1 = (function (){var statearr_28548 = state_28532;
(statearr_28548[(7)] = inst_28509__$1);

return statearr_28548;
})();
var statearr_28549_28568 = state_28532__$1;
(statearr_28549_28568[(2)] = null);

(statearr_28549_28568[(1)] = (2));


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
});})(c__27974__auto__))
;
return ((function (switch__27884__auto__,c__27974__auto__){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_28550 = [null,null,null,null,null,null,null,null];
(statearr_28550[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_28550[(1)] = (1));

return statearr_28550;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_28532){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28551){if((e28551 instanceof Object)){
var ex__27888__auto__ = e28551;
var statearr_28552_28569 = state_28532;
(statearr_28552_28569[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28570 = state_28532;
state_28532 = G__28570;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_28532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_28532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_28553 = f__27975__auto__.call(null);
(statearr_28553[(6)] = c__27974__auto__);

return statearr_28553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28571 = (function (ch,cs,meta28572){
this.ch = ch;
this.cs = cs;
this.meta28572 = meta28572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28573,meta28572__$1){
var self__ = this;
var _28573__$1 = this;
return (new cljs.core.async.t_cljs$core$async28571(self__.ch,self__.cs,meta28572__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28573){
var self__ = this;
var _28573__$1 = this;
return self__.meta28572;
});})(cs))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28571.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28572","meta28572",185418834,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28571";

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28571");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28571.
 */
cljs.core.async.__GT_t_cljs$core$async28571 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28571(ch__$1,cs__$1,meta28572){
return (new cljs.core.async.t_cljs$core$async28571(ch__$1,cs__$1,meta28572));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28571(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27974__auto___28793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___28793,cs,m,dchan,dctr,done){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___28793,cs,m,dchan,dctr,done){
return (function (state_28708){
var state_val_28709 = (state_28708[(1)]);
if((state_val_28709 === (7))){
var inst_28704 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28710_28794 = state_28708__$1;
(statearr_28710_28794[(2)] = inst_28704);

(statearr_28710_28794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (20))){
var inst_28607 = (state_28708[(7)]);
var inst_28619 = cljs.core.first.call(null,inst_28607);
var inst_28620 = cljs.core.nth.call(null,inst_28619,(0),null);
var inst_28621 = cljs.core.nth.call(null,inst_28619,(1),null);
var state_28708__$1 = (function (){var statearr_28711 = state_28708;
(statearr_28711[(8)] = inst_28620);

return statearr_28711;
})();
if(cljs.core.truth_(inst_28621)){
var statearr_28712_28795 = state_28708__$1;
(statearr_28712_28795[(1)] = (22));

} else {
var statearr_28713_28796 = state_28708__$1;
(statearr_28713_28796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (27))){
var inst_28576 = (state_28708[(9)]);
var inst_28656 = (state_28708[(10)]);
var inst_28649 = (state_28708[(11)]);
var inst_28651 = (state_28708[(12)]);
var inst_28656__$1 = cljs.core._nth.call(null,inst_28649,inst_28651);
var inst_28657 = cljs.core.async.put_BANG_.call(null,inst_28656__$1,inst_28576,done);
var state_28708__$1 = (function (){var statearr_28714 = state_28708;
(statearr_28714[(10)] = inst_28656__$1);

return statearr_28714;
})();
if(cljs.core.truth_(inst_28657)){
var statearr_28715_28797 = state_28708__$1;
(statearr_28715_28797[(1)] = (30));

} else {
var statearr_28716_28798 = state_28708__$1;
(statearr_28716_28798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (1))){
var state_28708__$1 = state_28708;
var statearr_28717_28799 = state_28708__$1;
(statearr_28717_28799[(2)] = null);

(statearr_28717_28799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (24))){
var inst_28607 = (state_28708[(7)]);
var inst_28626 = (state_28708[(2)]);
var inst_28627 = cljs.core.next.call(null,inst_28607);
var inst_28585 = inst_28627;
var inst_28586 = null;
var inst_28587 = (0);
var inst_28588 = (0);
var state_28708__$1 = (function (){var statearr_28718 = state_28708;
(statearr_28718[(13)] = inst_28586);

(statearr_28718[(14)] = inst_28588);

(statearr_28718[(15)] = inst_28626);

(statearr_28718[(16)] = inst_28585);

(statearr_28718[(17)] = inst_28587);

return statearr_28718;
})();
var statearr_28719_28800 = state_28708__$1;
(statearr_28719_28800[(2)] = null);

(statearr_28719_28800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (39))){
var state_28708__$1 = state_28708;
var statearr_28723_28801 = state_28708__$1;
(statearr_28723_28801[(2)] = null);

(statearr_28723_28801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (4))){
var inst_28576 = (state_28708[(9)]);
var inst_28576__$1 = (state_28708[(2)]);
var inst_28577 = (inst_28576__$1 == null);
var state_28708__$1 = (function (){var statearr_28724 = state_28708;
(statearr_28724[(9)] = inst_28576__$1);

return statearr_28724;
})();
if(cljs.core.truth_(inst_28577)){
var statearr_28725_28802 = state_28708__$1;
(statearr_28725_28802[(1)] = (5));

} else {
var statearr_28726_28803 = state_28708__$1;
(statearr_28726_28803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (15))){
var inst_28586 = (state_28708[(13)]);
var inst_28588 = (state_28708[(14)]);
var inst_28585 = (state_28708[(16)]);
var inst_28587 = (state_28708[(17)]);
var inst_28603 = (state_28708[(2)]);
var inst_28604 = (inst_28588 + (1));
var tmp28720 = inst_28586;
var tmp28721 = inst_28585;
var tmp28722 = inst_28587;
var inst_28585__$1 = tmp28721;
var inst_28586__$1 = tmp28720;
var inst_28587__$1 = tmp28722;
var inst_28588__$1 = inst_28604;
var state_28708__$1 = (function (){var statearr_28727 = state_28708;
(statearr_28727[(18)] = inst_28603);

(statearr_28727[(13)] = inst_28586__$1);

(statearr_28727[(14)] = inst_28588__$1);

(statearr_28727[(16)] = inst_28585__$1);

(statearr_28727[(17)] = inst_28587__$1);

return statearr_28727;
})();
var statearr_28728_28804 = state_28708__$1;
(statearr_28728_28804[(2)] = null);

(statearr_28728_28804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (21))){
var inst_28630 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28732_28805 = state_28708__$1;
(statearr_28732_28805[(2)] = inst_28630);

(statearr_28732_28805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (31))){
var inst_28656 = (state_28708[(10)]);
var inst_28660 = done.call(null,null);
var inst_28661 = cljs.core.async.untap_STAR_.call(null,m,inst_28656);
var state_28708__$1 = (function (){var statearr_28733 = state_28708;
(statearr_28733[(19)] = inst_28660);

return statearr_28733;
})();
var statearr_28734_28806 = state_28708__$1;
(statearr_28734_28806[(2)] = inst_28661);

(statearr_28734_28806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (32))){
var inst_28648 = (state_28708[(20)]);
var inst_28650 = (state_28708[(21)]);
var inst_28649 = (state_28708[(11)]);
var inst_28651 = (state_28708[(12)]);
var inst_28663 = (state_28708[(2)]);
var inst_28664 = (inst_28651 + (1));
var tmp28729 = inst_28648;
var tmp28730 = inst_28650;
var tmp28731 = inst_28649;
var inst_28648__$1 = tmp28729;
var inst_28649__$1 = tmp28731;
var inst_28650__$1 = tmp28730;
var inst_28651__$1 = inst_28664;
var state_28708__$1 = (function (){var statearr_28735 = state_28708;
(statearr_28735[(20)] = inst_28648__$1);

(statearr_28735[(21)] = inst_28650__$1);

(statearr_28735[(11)] = inst_28649__$1);

(statearr_28735[(22)] = inst_28663);

(statearr_28735[(12)] = inst_28651__$1);

return statearr_28735;
})();
var statearr_28736_28807 = state_28708__$1;
(statearr_28736_28807[(2)] = null);

(statearr_28736_28807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (40))){
var inst_28676 = (state_28708[(23)]);
var inst_28680 = done.call(null,null);
var inst_28681 = cljs.core.async.untap_STAR_.call(null,m,inst_28676);
var state_28708__$1 = (function (){var statearr_28737 = state_28708;
(statearr_28737[(24)] = inst_28680);

return statearr_28737;
})();
var statearr_28738_28808 = state_28708__$1;
(statearr_28738_28808[(2)] = inst_28681);

(statearr_28738_28808[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (33))){
var inst_28667 = (state_28708[(25)]);
var inst_28669 = cljs.core.chunked_seq_QMARK_.call(null,inst_28667);
var state_28708__$1 = state_28708;
if(inst_28669){
var statearr_28739_28809 = state_28708__$1;
(statearr_28739_28809[(1)] = (36));

} else {
var statearr_28740_28810 = state_28708__$1;
(statearr_28740_28810[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (13))){
var inst_28597 = (state_28708[(26)]);
var inst_28600 = cljs.core.async.close_BANG_.call(null,inst_28597);
var state_28708__$1 = state_28708;
var statearr_28741_28811 = state_28708__$1;
(statearr_28741_28811[(2)] = inst_28600);

(statearr_28741_28811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (22))){
var inst_28620 = (state_28708[(8)]);
var inst_28623 = cljs.core.async.close_BANG_.call(null,inst_28620);
var state_28708__$1 = state_28708;
var statearr_28742_28812 = state_28708__$1;
(statearr_28742_28812[(2)] = inst_28623);

(statearr_28742_28812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (36))){
var inst_28667 = (state_28708[(25)]);
var inst_28671 = cljs.core.chunk_first.call(null,inst_28667);
var inst_28672 = cljs.core.chunk_rest.call(null,inst_28667);
var inst_28673 = cljs.core.count.call(null,inst_28671);
var inst_28648 = inst_28672;
var inst_28649 = inst_28671;
var inst_28650 = inst_28673;
var inst_28651 = (0);
var state_28708__$1 = (function (){var statearr_28743 = state_28708;
(statearr_28743[(20)] = inst_28648);

(statearr_28743[(21)] = inst_28650);

(statearr_28743[(11)] = inst_28649);

(statearr_28743[(12)] = inst_28651);

return statearr_28743;
})();
var statearr_28744_28813 = state_28708__$1;
(statearr_28744_28813[(2)] = null);

(statearr_28744_28813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (41))){
var inst_28667 = (state_28708[(25)]);
var inst_28683 = (state_28708[(2)]);
var inst_28684 = cljs.core.next.call(null,inst_28667);
var inst_28648 = inst_28684;
var inst_28649 = null;
var inst_28650 = (0);
var inst_28651 = (0);
var state_28708__$1 = (function (){var statearr_28745 = state_28708;
(statearr_28745[(20)] = inst_28648);

(statearr_28745[(21)] = inst_28650);

(statearr_28745[(11)] = inst_28649);

(statearr_28745[(12)] = inst_28651);

(statearr_28745[(27)] = inst_28683);

return statearr_28745;
})();
var statearr_28746_28814 = state_28708__$1;
(statearr_28746_28814[(2)] = null);

(statearr_28746_28814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (43))){
var state_28708__$1 = state_28708;
var statearr_28747_28815 = state_28708__$1;
(statearr_28747_28815[(2)] = null);

(statearr_28747_28815[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (29))){
var inst_28692 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28748_28816 = state_28708__$1;
(statearr_28748_28816[(2)] = inst_28692);

(statearr_28748_28816[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (44))){
var inst_28701 = (state_28708[(2)]);
var state_28708__$1 = (function (){var statearr_28749 = state_28708;
(statearr_28749[(28)] = inst_28701);

return statearr_28749;
})();
var statearr_28750_28817 = state_28708__$1;
(statearr_28750_28817[(2)] = null);

(statearr_28750_28817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (6))){
var inst_28640 = (state_28708[(29)]);
var inst_28639 = cljs.core.deref.call(null,cs);
var inst_28640__$1 = cljs.core.keys.call(null,inst_28639);
var inst_28641 = cljs.core.count.call(null,inst_28640__$1);
var inst_28642 = cljs.core.reset_BANG_.call(null,dctr,inst_28641);
var inst_28647 = cljs.core.seq.call(null,inst_28640__$1);
var inst_28648 = inst_28647;
var inst_28649 = null;
var inst_28650 = (0);
var inst_28651 = (0);
var state_28708__$1 = (function (){var statearr_28751 = state_28708;
(statearr_28751[(20)] = inst_28648);

(statearr_28751[(29)] = inst_28640__$1);

(statearr_28751[(30)] = inst_28642);

(statearr_28751[(21)] = inst_28650);

(statearr_28751[(11)] = inst_28649);

(statearr_28751[(12)] = inst_28651);

return statearr_28751;
})();
var statearr_28752_28818 = state_28708__$1;
(statearr_28752_28818[(2)] = null);

(statearr_28752_28818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (28))){
var inst_28648 = (state_28708[(20)]);
var inst_28667 = (state_28708[(25)]);
var inst_28667__$1 = cljs.core.seq.call(null,inst_28648);
var state_28708__$1 = (function (){var statearr_28753 = state_28708;
(statearr_28753[(25)] = inst_28667__$1);

return statearr_28753;
})();
if(inst_28667__$1){
var statearr_28754_28819 = state_28708__$1;
(statearr_28754_28819[(1)] = (33));

} else {
var statearr_28755_28820 = state_28708__$1;
(statearr_28755_28820[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (25))){
var inst_28650 = (state_28708[(21)]);
var inst_28651 = (state_28708[(12)]);
var inst_28653 = (inst_28651 < inst_28650);
var inst_28654 = inst_28653;
var state_28708__$1 = state_28708;
if(cljs.core.truth_(inst_28654)){
var statearr_28756_28821 = state_28708__$1;
(statearr_28756_28821[(1)] = (27));

} else {
var statearr_28757_28822 = state_28708__$1;
(statearr_28757_28822[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (34))){
var state_28708__$1 = state_28708;
var statearr_28758_28823 = state_28708__$1;
(statearr_28758_28823[(2)] = null);

(statearr_28758_28823[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (17))){
var state_28708__$1 = state_28708;
var statearr_28759_28824 = state_28708__$1;
(statearr_28759_28824[(2)] = null);

(statearr_28759_28824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (3))){
var inst_28706 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28708__$1,inst_28706);
} else {
if((state_val_28709 === (12))){
var inst_28635 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28760_28825 = state_28708__$1;
(statearr_28760_28825[(2)] = inst_28635);

(statearr_28760_28825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (2))){
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28708__$1,(4),ch);
} else {
if((state_val_28709 === (23))){
var state_28708__$1 = state_28708;
var statearr_28761_28826 = state_28708__$1;
(statearr_28761_28826[(2)] = null);

(statearr_28761_28826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (35))){
var inst_28690 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28762_28827 = state_28708__$1;
(statearr_28762_28827[(2)] = inst_28690);

(statearr_28762_28827[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (19))){
var inst_28607 = (state_28708[(7)]);
var inst_28611 = cljs.core.chunk_first.call(null,inst_28607);
var inst_28612 = cljs.core.chunk_rest.call(null,inst_28607);
var inst_28613 = cljs.core.count.call(null,inst_28611);
var inst_28585 = inst_28612;
var inst_28586 = inst_28611;
var inst_28587 = inst_28613;
var inst_28588 = (0);
var state_28708__$1 = (function (){var statearr_28763 = state_28708;
(statearr_28763[(13)] = inst_28586);

(statearr_28763[(14)] = inst_28588);

(statearr_28763[(16)] = inst_28585);

(statearr_28763[(17)] = inst_28587);

return statearr_28763;
})();
var statearr_28764_28828 = state_28708__$1;
(statearr_28764_28828[(2)] = null);

(statearr_28764_28828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (11))){
var inst_28607 = (state_28708[(7)]);
var inst_28585 = (state_28708[(16)]);
var inst_28607__$1 = cljs.core.seq.call(null,inst_28585);
var state_28708__$1 = (function (){var statearr_28765 = state_28708;
(statearr_28765[(7)] = inst_28607__$1);

return statearr_28765;
})();
if(inst_28607__$1){
var statearr_28766_28829 = state_28708__$1;
(statearr_28766_28829[(1)] = (16));

} else {
var statearr_28767_28830 = state_28708__$1;
(statearr_28767_28830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (9))){
var inst_28637 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28768_28831 = state_28708__$1;
(statearr_28768_28831[(2)] = inst_28637);

(statearr_28768_28831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (5))){
var inst_28583 = cljs.core.deref.call(null,cs);
var inst_28584 = cljs.core.seq.call(null,inst_28583);
var inst_28585 = inst_28584;
var inst_28586 = null;
var inst_28587 = (0);
var inst_28588 = (0);
var state_28708__$1 = (function (){var statearr_28769 = state_28708;
(statearr_28769[(13)] = inst_28586);

(statearr_28769[(14)] = inst_28588);

(statearr_28769[(16)] = inst_28585);

(statearr_28769[(17)] = inst_28587);

return statearr_28769;
})();
var statearr_28770_28832 = state_28708__$1;
(statearr_28770_28832[(2)] = null);

(statearr_28770_28832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (14))){
var state_28708__$1 = state_28708;
var statearr_28771_28833 = state_28708__$1;
(statearr_28771_28833[(2)] = null);

(statearr_28771_28833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (45))){
var inst_28698 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28772_28834 = state_28708__$1;
(statearr_28772_28834[(2)] = inst_28698);

(statearr_28772_28834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (26))){
var inst_28640 = (state_28708[(29)]);
var inst_28694 = (state_28708[(2)]);
var inst_28695 = cljs.core.seq.call(null,inst_28640);
var state_28708__$1 = (function (){var statearr_28773 = state_28708;
(statearr_28773[(31)] = inst_28694);

return statearr_28773;
})();
if(inst_28695){
var statearr_28774_28835 = state_28708__$1;
(statearr_28774_28835[(1)] = (42));

} else {
var statearr_28775_28836 = state_28708__$1;
(statearr_28775_28836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (16))){
var inst_28607 = (state_28708[(7)]);
var inst_28609 = cljs.core.chunked_seq_QMARK_.call(null,inst_28607);
var state_28708__$1 = state_28708;
if(inst_28609){
var statearr_28776_28837 = state_28708__$1;
(statearr_28776_28837[(1)] = (19));

} else {
var statearr_28777_28838 = state_28708__$1;
(statearr_28777_28838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (38))){
var inst_28687 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28778_28839 = state_28708__$1;
(statearr_28778_28839[(2)] = inst_28687);

(statearr_28778_28839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (30))){
var state_28708__$1 = state_28708;
var statearr_28779_28840 = state_28708__$1;
(statearr_28779_28840[(2)] = null);

(statearr_28779_28840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (10))){
var inst_28586 = (state_28708[(13)]);
var inst_28588 = (state_28708[(14)]);
var inst_28596 = cljs.core._nth.call(null,inst_28586,inst_28588);
var inst_28597 = cljs.core.nth.call(null,inst_28596,(0),null);
var inst_28598 = cljs.core.nth.call(null,inst_28596,(1),null);
var state_28708__$1 = (function (){var statearr_28780 = state_28708;
(statearr_28780[(26)] = inst_28597);

return statearr_28780;
})();
if(cljs.core.truth_(inst_28598)){
var statearr_28781_28841 = state_28708__$1;
(statearr_28781_28841[(1)] = (13));

} else {
var statearr_28782_28842 = state_28708__$1;
(statearr_28782_28842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (18))){
var inst_28633 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28783_28843 = state_28708__$1;
(statearr_28783_28843[(2)] = inst_28633);

(statearr_28783_28843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (42))){
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28708__$1,(45),dchan);
} else {
if((state_val_28709 === (37))){
var inst_28576 = (state_28708[(9)]);
var inst_28667 = (state_28708[(25)]);
var inst_28676 = (state_28708[(23)]);
var inst_28676__$1 = cljs.core.first.call(null,inst_28667);
var inst_28677 = cljs.core.async.put_BANG_.call(null,inst_28676__$1,inst_28576,done);
var state_28708__$1 = (function (){var statearr_28784 = state_28708;
(statearr_28784[(23)] = inst_28676__$1);

return statearr_28784;
})();
if(cljs.core.truth_(inst_28677)){
var statearr_28785_28844 = state_28708__$1;
(statearr_28785_28844[(1)] = (39));

} else {
var statearr_28786_28845 = state_28708__$1;
(statearr_28786_28845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (8))){
var inst_28588 = (state_28708[(14)]);
var inst_28587 = (state_28708[(17)]);
var inst_28590 = (inst_28588 < inst_28587);
var inst_28591 = inst_28590;
var state_28708__$1 = state_28708;
if(cljs.core.truth_(inst_28591)){
var statearr_28787_28846 = state_28708__$1;
(statearr_28787_28846[(1)] = (10));

} else {
var statearr_28788_28847 = state_28708__$1;
(statearr_28788_28847[(1)] = (11));

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
});})(c__27974__auto___28793,cs,m,dchan,dctr,done))
;
return ((function (switch__27884__auto__,c__27974__auto___28793,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27885__auto__ = null;
var cljs$core$async$mult_$_state_machine__27885__auto____0 = (function (){
var statearr_28789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28789[(0)] = cljs$core$async$mult_$_state_machine__27885__auto__);

(statearr_28789[(1)] = (1));

return statearr_28789;
});
var cljs$core$async$mult_$_state_machine__27885__auto____1 = (function (state_28708){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e28790){if((e28790 instanceof Object)){
var ex__27888__auto__ = e28790;
var statearr_28791_28848 = state_28708;
(statearr_28791_28848[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28849 = state_28708;
state_28708 = G__28849;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27885__auto__ = function(state_28708){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27885__auto____1.call(this,state_28708);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27885__auto____0;
cljs$core$async$mult_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27885__auto____1;
return cljs$core$async$mult_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___28793,cs,m,dchan,dctr,done))
})();
var state__27976__auto__ = (function (){var statearr_28792 = f__27975__auto__.call(null);
(statearr_28792[(6)] = c__27974__auto___28793);

return statearr_28792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___28793,cs,m,dchan,dctr,done))
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
var G__28851 = arguments.length;
switch (G__28851) {
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
var len__4499__auto___28863 = arguments.length;
var i__4500__auto___28864 = (0);
while(true){
if((i__4500__auto___28864 < len__4499__auto___28863)){
args__4502__auto__.push((arguments[i__4500__auto___28864]));

var G__28865 = (i__4500__auto___28864 + (1));
i__4500__auto___28864 = G__28865;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28857){
var map__28858 = p__28857;
var map__28858__$1 = ((((!((map__28858 == null)))?(((((map__28858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28858):map__28858);
var opts = map__28858__$1;
var statearr_28860_28866 = state;
(statearr_28860_28866[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28858,map__28858__$1,opts){
return (function (val){
var statearr_28861_28867 = state;
(statearr_28861_28867[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28858,map__28858__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28862_28868 = state;
(statearr_28862_28868[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28853){
var G__28854 = cljs.core.first.call(null,seq28853);
var seq28853__$1 = cljs.core.next.call(null,seq28853);
var G__28855 = cljs.core.first.call(null,seq28853__$1);
var seq28853__$2 = cljs.core.next.call(null,seq28853__$1);
var G__28856 = cljs.core.first.call(null,seq28853__$2);
var seq28853__$3 = cljs.core.next.call(null,seq28853__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28854,G__28855,G__28856,seq28853__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28869 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28870){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28870 = meta28870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28871,meta28870__$1){
var self__ = this;
var _28871__$1 = this;
return (new cljs.core.async.t_cljs$core$async28869(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28870__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28871){
var self__ = this;
var _28871__$1 = this;
return self__.meta28870;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28869.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28869.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28870","meta28870",1768547646,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28869";

cljs.core.async.t_cljs$core$async28869.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28869");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28869.
 */
cljs.core.async.__GT_t_cljs$core$async28869 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28869(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28870){
return (new cljs.core.async.t_cljs$core$async28869(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28870));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28869(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27974__auto___29033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___29033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___29033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28973){
var state_val_28974 = (state_28973[(1)]);
if((state_val_28974 === (7))){
var inst_28888 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
var statearr_28975_29034 = state_28973__$1;
(statearr_28975_29034[(2)] = inst_28888);

(statearr_28975_29034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (20))){
var inst_28900 = (state_28973[(7)]);
var state_28973__$1 = state_28973;
var statearr_28976_29035 = state_28973__$1;
(statearr_28976_29035[(2)] = inst_28900);

(statearr_28976_29035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (27))){
var state_28973__$1 = state_28973;
var statearr_28977_29036 = state_28973__$1;
(statearr_28977_29036[(2)] = null);

(statearr_28977_29036[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (1))){
var inst_28875 = (state_28973[(8)]);
var inst_28875__$1 = calc_state.call(null);
var inst_28877 = (inst_28875__$1 == null);
var inst_28878 = cljs.core.not.call(null,inst_28877);
var state_28973__$1 = (function (){var statearr_28978 = state_28973;
(statearr_28978[(8)] = inst_28875__$1);

return statearr_28978;
})();
if(inst_28878){
var statearr_28979_29037 = state_28973__$1;
(statearr_28979_29037[(1)] = (2));

} else {
var statearr_28980_29038 = state_28973__$1;
(statearr_28980_29038[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (24))){
var inst_28924 = (state_28973[(9)]);
var inst_28947 = (state_28973[(10)]);
var inst_28933 = (state_28973[(11)]);
var inst_28947__$1 = inst_28924.call(null,inst_28933);
var state_28973__$1 = (function (){var statearr_28981 = state_28973;
(statearr_28981[(10)] = inst_28947__$1);

return statearr_28981;
})();
if(cljs.core.truth_(inst_28947__$1)){
var statearr_28982_29039 = state_28973__$1;
(statearr_28982_29039[(1)] = (29));

} else {
var statearr_28983_29040 = state_28973__$1;
(statearr_28983_29040[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (4))){
var inst_28891 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
if(cljs.core.truth_(inst_28891)){
var statearr_28984_29041 = state_28973__$1;
(statearr_28984_29041[(1)] = (8));

} else {
var statearr_28985_29042 = state_28973__$1;
(statearr_28985_29042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (15))){
var inst_28918 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
if(cljs.core.truth_(inst_28918)){
var statearr_28986_29043 = state_28973__$1;
(statearr_28986_29043[(1)] = (19));

} else {
var statearr_28987_29044 = state_28973__$1;
(statearr_28987_29044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (21))){
var inst_28923 = (state_28973[(12)]);
var inst_28923__$1 = (state_28973[(2)]);
var inst_28924 = cljs.core.get.call(null,inst_28923__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28925 = cljs.core.get.call(null,inst_28923__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28926 = cljs.core.get.call(null,inst_28923__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28973__$1 = (function (){var statearr_28988 = state_28973;
(statearr_28988[(9)] = inst_28924);

(statearr_28988[(12)] = inst_28923__$1);

(statearr_28988[(13)] = inst_28925);

return statearr_28988;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28973__$1,(22),inst_28926);
} else {
if((state_val_28974 === (31))){
var inst_28955 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
if(cljs.core.truth_(inst_28955)){
var statearr_28989_29045 = state_28973__$1;
(statearr_28989_29045[(1)] = (32));

} else {
var statearr_28990_29046 = state_28973__$1;
(statearr_28990_29046[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (32))){
var inst_28932 = (state_28973[(14)]);
var state_28973__$1 = state_28973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28973__$1,(35),out,inst_28932);
} else {
if((state_val_28974 === (33))){
var inst_28923 = (state_28973[(12)]);
var inst_28900 = inst_28923;
var state_28973__$1 = (function (){var statearr_28991 = state_28973;
(statearr_28991[(7)] = inst_28900);

return statearr_28991;
})();
var statearr_28992_29047 = state_28973__$1;
(statearr_28992_29047[(2)] = null);

(statearr_28992_29047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (13))){
var inst_28900 = (state_28973[(7)]);
var inst_28907 = inst_28900.cljs$lang$protocol_mask$partition0$;
var inst_28908 = (inst_28907 & (64));
var inst_28909 = inst_28900.cljs$core$ISeq$;
var inst_28910 = (cljs.core.PROTOCOL_SENTINEL === inst_28909);
var inst_28911 = ((inst_28908) || (inst_28910));
var state_28973__$1 = state_28973;
if(cljs.core.truth_(inst_28911)){
var statearr_28993_29048 = state_28973__$1;
(statearr_28993_29048[(1)] = (16));

} else {
var statearr_28994_29049 = state_28973__$1;
(statearr_28994_29049[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (22))){
var inst_28932 = (state_28973[(14)]);
var inst_28933 = (state_28973[(11)]);
var inst_28931 = (state_28973[(2)]);
var inst_28932__$1 = cljs.core.nth.call(null,inst_28931,(0),null);
var inst_28933__$1 = cljs.core.nth.call(null,inst_28931,(1),null);
var inst_28934 = (inst_28932__$1 == null);
var inst_28935 = cljs.core._EQ_.call(null,inst_28933__$1,change);
var inst_28936 = ((inst_28934) || (inst_28935));
var state_28973__$1 = (function (){var statearr_28995 = state_28973;
(statearr_28995[(14)] = inst_28932__$1);

(statearr_28995[(11)] = inst_28933__$1);

return statearr_28995;
})();
if(cljs.core.truth_(inst_28936)){
var statearr_28996_29050 = state_28973__$1;
(statearr_28996_29050[(1)] = (23));

} else {
var statearr_28997_29051 = state_28973__$1;
(statearr_28997_29051[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (36))){
var inst_28923 = (state_28973[(12)]);
var inst_28900 = inst_28923;
var state_28973__$1 = (function (){var statearr_28998 = state_28973;
(statearr_28998[(7)] = inst_28900);

return statearr_28998;
})();
var statearr_28999_29052 = state_28973__$1;
(statearr_28999_29052[(2)] = null);

(statearr_28999_29052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (29))){
var inst_28947 = (state_28973[(10)]);
var state_28973__$1 = state_28973;
var statearr_29000_29053 = state_28973__$1;
(statearr_29000_29053[(2)] = inst_28947);

(statearr_29000_29053[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (6))){
var state_28973__$1 = state_28973;
var statearr_29001_29054 = state_28973__$1;
(statearr_29001_29054[(2)] = false);

(statearr_29001_29054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (28))){
var inst_28943 = (state_28973[(2)]);
var inst_28944 = calc_state.call(null);
var inst_28900 = inst_28944;
var state_28973__$1 = (function (){var statearr_29002 = state_28973;
(statearr_29002[(7)] = inst_28900);

(statearr_29002[(15)] = inst_28943);

return statearr_29002;
})();
var statearr_29003_29055 = state_28973__$1;
(statearr_29003_29055[(2)] = null);

(statearr_29003_29055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (25))){
var inst_28969 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
var statearr_29004_29056 = state_28973__$1;
(statearr_29004_29056[(2)] = inst_28969);

(statearr_29004_29056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (34))){
var inst_28967 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
var statearr_29005_29057 = state_28973__$1;
(statearr_29005_29057[(2)] = inst_28967);

(statearr_29005_29057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (17))){
var state_28973__$1 = state_28973;
var statearr_29006_29058 = state_28973__$1;
(statearr_29006_29058[(2)] = false);

(statearr_29006_29058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (3))){
var state_28973__$1 = state_28973;
var statearr_29007_29059 = state_28973__$1;
(statearr_29007_29059[(2)] = false);

(statearr_29007_29059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (12))){
var inst_28971 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28973__$1,inst_28971);
} else {
if((state_val_28974 === (2))){
var inst_28875 = (state_28973[(8)]);
var inst_28880 = inst_28875.cljs$lang$protocol_mask$partition0$;
var inst_28881 = (inst_28880 & (64));
var inst_28882 = inst_28875.cljs$core$ISeq$;
var inst_28883 = (cljs.core.PROTOCOL_SENTINEL === inst_28882);
var inst_28884 = ((inst_28881) || (inst_28883));
var state_28973__$1 = state_28973;
if(cljs.core.truth_(inst_28884)){
var statearr_29008_29060 = state_28973__$1;
(statearr_29008_29060[(1)] = (5));

} else {
var statearr_29009_29061 = state_28973__$1;
(statearr_29009_29061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (23))){
var inst_28932 = (state_28973[(14)]);
var inst_28938 = (inst_28932 == null);
var state_28973__$1 = state_28973;
if(cljs.core.truth_(inst_28938)){
var statearr_29010_29062 = state_28973__$1;
(statearr_29010_29062[(1)] = (26));

} else {
var statearr_29011_29063 = state_28973__$1;
(statearr_29011_29063[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (35))){
var inst_28958 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
if(cljs.core.truth_(inst_28958)){
var statearr_29012_29064 = state_28973__$1;
(statearr_29012_29064[(1)] = (36));

} else {
var statearr_29013_29065 = state_28973__$1;
(statearr_29013_29065[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (19))){
var inst_28900 = (state_28973[(7)]);
var inst_28920 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28900);
var state_28973__$1 = state_28973;
var statearr_29014_29066 = state_28973__$1;
(statearr_29014_29066[(2)] = inst_28920);

(statearr_29014_29066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (11))){
var inst_28900 = (state_28973[(7)]);
var inst_28904 = (inst_28900 == null);
var inst_28905 = cljs.core.not.call(null,inst_28904);
var state_28973__$1 = state_28973;
if(inst_28905){
var statearr_29015_29067 = state_28973__$1;
(statearr_29015_29067[(1)] = (13));

} else {
var statearr_29016_29068 = state_28973__$1;
(statearr_29016_29068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (9))){
var inst_28875 = (state_28973[(8)]);
var state_28973__$1 = state_28973;
var statearr_29017_29069 = state_28973__$1;
(statearr_29017_29069[(2)] = inst_28875);

(statearr_29017_29069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (5))){
var state_28973__$1 = state_28973;
var statearr_29018_29070 = state_28973__$1;
(statearr_29018_29070[(2)] = true);

(statearr_29018_29070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (14))){
var state_28973__$1 = state_28973;
var statearr_29019_29071 = state_28973__$1;
(statearr_29019_29071[(2)] = false);

(statearr_29019_29071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (26))){
var inst_28933 = (state_28973[(11)]);
var inst_28940 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28933);
var state_28973__$1 = state_28973;
var statearr_29020_29072 = state_28973__$1;
(statearr_29020_29072[(2)] = inst_28940);

(statearr_29020_29072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (16))){
var state_28973__$1 = state_28973;
var statearr_29021_29073 = state_28973__$1;
(statearr_29021_29073[(2)] = true);

(statearr_29021_29073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (38))){
var inst_28963 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
var statearr_29022_29074 = state_28973__$1;
(statearr_29022_29074[(2)] = inst_28963);

(statearr_29022_29074[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (30))){
var inst_28924 = (state_28973[(9)]);
var inst_28925 = (state_28973[(13)]);
var inst_28933 = (state_28973[(11)]);
var inst_28950 = cljs.core.empty_QMARK_.call(null,inst_28924);
var inst_28951 = inst_28925.call(null,inst_28933);
var inst_28952 = cljs.core.not.call(null,inst_28951);
var inst_28953 = ((inst_28950) && (inst_28952));
var state_28973__$1 = state_28973;
var statearr_29023_29075 = state_28973__$1;
(statearr_29023_29075[(2)] = inst_28953);

(statearr_29023_29075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (10))){
var inst_28875 = (state_28973[(8)]);
var inst_28896 = (state_28973[(2)]);
var inst_28897 = cljs.core.get.call(null,inst_28896,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28898 = cljs.core.get.call(null,inst_28896,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28899 = cljs.core.get.call(null,inst_28896,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28900 = inst_28875;
var state_28973__$1 = (function (){var statearr_29024 = state_28973;
(statearr_29024[(16)] = inst_28897);

(statearr_29024[(7)] = inst_28900);

(statearr_29024[(17)] = inst_28898);

(statearr_29024[(18)] = inst_28899);

return statearr_29024;
})();
var statearr_29025_29076 = state_28973__$1;
(statearr_29025_29076[(2)] = null);

(statearr_29025_29076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (18))){
var inst_28915 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
var statearr_29026_29077 = state_28973__$1;
(statearr_29026_29077[(2)] = inst_28915);

(statearr_29026_29077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (37))){
var state_28973__$1 = state_28973;
var statearr_29027_29078 = state_28973__$1;
(statearr_29027_29078[(2)] = null);

(statearr_29027_29078[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (8))){
var inst_28875 = (state_28973[(8)]);
var inst_28893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28875);
var state_28973__$1 = state_28973;
var statearr_29028_29079 = state_28973__$1;
(statearr_29028_29079[(2)] = inst_28893);

(statearr_29028_29079[(1)] = (10));


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
});})(c__27974__auto___29033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27884__auto__,c__27974__auto___29033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27885__auto__ = null;
var cljs$core$async$mix_$_state_machine__27885__auto____0 = (function (){
var statearr_29029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29029[(0)] = cljs$core$async$mix_$_state_machine__27885__auto__);

(statearr_29029[(1)] = (1));

return statearr_29029;
});
var cljs$core$async$mix_$_state_machine__27885__auto____1 = (function (state_28973){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_28973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29030){if((e29030 instanceof Object)){
var ex__27888__auto__ = e29030;
var statearr_29031_29080 = state_28973;
(statearr_29031_29080[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29081 = state_28973;
state_28973 = G__29081;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27885__auto__ = function(state_28973){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27885__auto____1.call(this,state_28973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27885__auto____0;
cljs$core$async$mix_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27885__auto____1;
return cljs$core$async$mix_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___29033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27976__auto__ = (function (){var statearr_29032 = f__27975__auto__.call(null);
(statearr_29032[(6)] = c__27974__auto___29033);

return statearr_29032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___29033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__29083 = arguments.length;
switch (G__29083) {
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
var G__29087 = arguments.length;
switch (G__29087) {
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
return (function (p1__29085_SHARP_){
if(cljs.core.truth_(p1__29085_SHARP_.call(null,topic))){
return p1__29085_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29085_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29088 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29089){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29089 = meta29089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29090,meta29089__$1){
var self__ = this;
var _29090__$1 = this;
return (new cljs.core.async.t_cljs$core$async29088(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29089__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29090){
var self__ = this;
var _29090__$1 = this;
return self__.meta29089;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29088.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29088.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29088.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29088.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29088.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29089","meta29089",1131679181,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29088";

cljs.core.async.t_cljs$core$async29088.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29088");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29088.
 */
cljs.core.async.__GT_t_cljs$core$async29088 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29089){
return (new cljs.core.async.t_cljs$core$async29088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29089));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29088(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27974__auto___29208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___29208,mults,ensure_mult,p){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___29208,mults,ensure_mult,p){
return (function (state_29162){
var state_val_29163 = (state_29162[(1)]);
if((state_val_29163 === (7))){
var inst_29158 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29164_29209 = state_29162__$1;
(statearr_29164_29209[(2)] = inst_29158);

(statearr_29164_29209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (20))){
var state_29162__$1 = state_29162;
var statearr_29165_29210 = state_29162__$1;
(statearr_29165_29210[(2)] = null);

(statearr_29165_29210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (1))){
var state_29162__$1 = state_29162;
var statearr_29166_29211 = state_29162__$1;
(statearr_29166_29211[(2)] = null);

(statearr_29166_29211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (24))){
var inst_29141 = (state_29162[(7)]);
var inst_29150 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29141);
var state_29162__$1 = state_29162;
var statearr_29167_29212 = state_29162__$1;
(statearr_29167_29212[(2)] = inst_29150);

(statearr_29167_29212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (4))){
var inst_29093 = (state_29162[(8)]);
var inst_29093__$1 = (state_29162[(2)]);
var inst_29094 = (inst_29093__$1 == null);
var state_29162__$1 = (function (){var statearr_29168 = state_29162;
(statearr_29168[(8)] = inst_29093__$1);

return statearr_29168;
})();
if(cljs.core.truth_(inst_29094)){
var statearr_29169_29213 = state_29162__$1;
(statearr_29169_29213[(1)] = (5));

} else {
var statearr_29170_29214 = state_29162__$1;
(statearr_29170_29214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (15))){
var inst_29135 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29171_29215 = state_29162__$1;
(statearr_29171_29215[(2)] = inst_29135);

(statearr_29171_29215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (21))){
var inst_29155 = (state_29162[(2)]);
var state_29162__$1 = (function (){var statearr_29172 = state_29162;
(statearr_29172[(9)] = inst_29155);

return statearr_29172;
})();
var statearr_29173_29216 = state_29162__$1;
(statearr_29173_29216[(2)] = null);

(statearr_29173_29216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (13))){
var inst_29117 = (state_29162[(10)]);
var inst_29119 = cljs.core.chunked_seq_QMARK_.call(null,inst_29117);
var state_29162__$1 = state_29162;
if(inst_29119){
var statearr_29174_29217 = state_29162__$1;
(statearr_29174_29217[(1)] = (16));

} else {
var statearr_29175_29218 = state_29162__$1;
(statearr_29175_29218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (22))){
var inst_29147 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
if(cljs.core.truth_(inst_29147)){
var statearr_29176_29219 = state_29162__$1;
(statearr_29176_29219[(1)] = (23));

} else {
var statearr_29177_29220 = state_29162__$1;
(statearr_29177_29220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (6))){
var inst_29141 = (state_29162[(7)]);
var inst_29093 = (state_29162[(8)]);
var inst_29143 = (state_29162[(11)]);
var inst_29141__$1 = topic_fn.call(null,inst_29093);
var inst_29142 = cljs.core.deref.call(null,mults);
var inst_29143__$1 = cljs.core.get.call(null,inst_29142,inst_29141__$1);
var state_29162__$1 = (function (){var statearr_29178 = state_29162;
(statearr_29178[(7)] = inst_29141__$1);

(statearr_29178[(11)] = inst_29143__$1);

return statearr_29178;
})();
if(cljs.core.truth_(inst_29143__$1)){
var statearr_29179_29221 = state_29162__$1;
(statearr_29179_29221[(1)] = (19));

} else {
var statearr_29180_29222 = state_29162__$1;
(statearr_29180_29222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (25))){
var inst_29152 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29181_29223 = state_29162__$1;
(statearr_29181_29223[(2)] = inst_29152);

(statearr_29181_29223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (17))){
var inst_29117 = (state_29162[(10)]);
var inst_29126 = cljs.core.first.call(null,inst_29117);
var inst_29127 = cljs.core.async.muxch_STAR_.call(null,inst_29126);
var inst_29128 = cljs.core.async.close_BANG_.call(null,inst_29127);
var inst_29129 = cljs.core.next.call(null,inst_29117);
var inst_29103 = inst_29129;
var inst_29104 = null;
var inst_29105 = (0);
var inst_29106 = (0);
var state_29162__$1 = (function (){var statearr_29182 = state_29162;
(statearr_29182[(12)] = inst_29105);

(statearr_29182[(13)] = inst_29128);

(statearr_29182[(14)] = inst_29103);

(statearr_29182[(15)] = inst_29104);

(statearr_29182[(16)] = inst_29106);

return statearr_29182;
})();
var statearr_29183_29224 = state_29162__$1;
(statearr_29183_29224[(2)] = null);

(statearr_29183_29224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (3))){
var inst_29160 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29162__$1,inst_29160);
} else {
if((state_val_29163 === (12))){
var inst_29137 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29184_29225 = state_29162__$1;
(statearr_29184_29225[(2)] = inst_29137);

(statearr_29184_29225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (2))){
var state_29162__$1 = state_29162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29162__$1,(4),ch);
} else {
if((state_val_29163 === (23))){
var state_29162__$1 = state_29162;
var statearr_29185_29226 = state_29162__$1;
(statearr_29185_29226[(2)] = null);

(statearr_29185_29226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (19))){
var inst_29093 = (state_29162[(8)]);
var inst_29143 = (state_29162[(11)]);
var inst_29145 = cljs.core.async.muxch_STAR_.call(null,inst_29143);
var state_29162__$1 = state_29162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29162__$1,(22),inst_29145,inst_29093);
} else {
if((state_val_29163 === (11))){
var inst_29103 = (state_29162[(14)]);
var inst_29117 = (state_29162[(10)]);
var inst_29117__$1 = cljs.core.seq.call(null,inst_29103);
var state_29162__$1 = (function (){var statearr_29186 = state_29162;
(statearr_29186[(10)] = inst_29117__$1);

return statearr_29186;
})();
if(inst_29117__$1){
var statearr_29187_29227 = state_29162__$1;
(statearr_29187_29227[(1)] = (13));

} else {
var statearr_29188_29228 = state_29162__$1;
(statearr_29188_29228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (9))){
var inst_29139 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29189_29229 = state_29162__$1;
(statearr_29189_29229[(2)] = inst_29139);

(statearr_29189_29229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (5))){
var inst_29100 = cljs.core.deref.call(null,mults);
var inst_29101 = cljs.core.vals.call(null,inst_29100);
var inst_29102 = cljs.core.seq.call(null,inst_29101);
var inst_29103 = inst_29102;
var inst_29104 = null;
var inst_29105 = (0);
var inst_29106 = (0);
var state_29162__$1 = (function (){var statearr_29190 = state_29162;
(statearr_29190[(12)] = inst_29105);

(statearr_29190[(14)] = inst_29103);

(statearr_29190[(15)] = inst_29104);

(statearr_29190[(16)] = inst_29106);

return statearr_29190;
})();
var statearr_29191_29230 = state_29162__$1;
(statearr_29191_29230[(2)] = null);

(statearr_29191_29230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (14))){
var state_29162__$1 = state_29162;
var statearr_29195_29231 = state_29162__$1;
(statearr_29195_29231[(2)] = null);

(statearr_29195_29231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (16))){
var inst_29117 = (state_29162[(10)]);
var inst_29121 = cljs.core.chunk_first.call(null,inst_29117);
var inst_29122 = cljs.core.chunk_rest.call(null,inst_29117);
var inst_29123 = cljs.core.count.call(null,inst_29121);
var inst_29103 = inst_29122;
var inst_29104 = inst_29121;
var inst_29105 = inst_29123;
var inst_29106 = (0);
var state_29162__$1 = (function (){var statearr_29196 = state_29162;
(statearr_29196[(12)] = inst_29105);

(statearr_29196[(14)] = inst_29103);

(statearr_29196[(15)] = inst_29104);

(statearr_29196[(16)] = inst_29106);

return statearr_29196;
})();
var statearr_29197_29232 = state_29162__$1;
(statearr_29197_29232[(2)] = null);

(statearr_29197_29232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (10))){
var inst_29105 = (state_29162[(12)]);
var inst_29103 = (state_29162[(14)]);
var inst_29104 = (state_29162[(15)]);
var inst_29106 = (state_29162[(16)]);
var inst_29111 = cljs.core._nth.call(null,inst_29104,inst_29106);
var inst_29112 = cljs.core.async.muxch_STAR_.call(null,inst_29111);
var inst_29113 = cljs.core.async.close_BANG_.call(null,inst_29112);
var inst_29114 = (inst_29106 + (1));
var tmp29192 = inst_29105;
var tmp29193 = inst_29103;
var tmp29194 = inst_29104;
var inst_29103__$1 = tmp29193;
var inst_29104__$1 = tmp29194;
var inst_29105__$1 = tmp29192;
var inst_29106__$1 = inst_29114;
var state_29162__$1 = (function (){var statearr_29198 = state_29162;
(statearr_29198[(12)] = inst_29105__$1);

(statearr_29198[(17)] = inst_29113);

(statearr_29198[(14)] = inst_29103__$1);

(statearr_29198[(15)] = inst_29104__$1);

(statearr_29198[(16)] = inst_29106__$1);

return statearr_29198;
})();
var statearr_29199_29233 = state_29162__$1;
(statearr_29199_29233[(2)] = null);

(statearr_29199_29233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (18))){
var inst_29132 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29200_29234 = state_29162__$1;
(statearr_29200_29234[(2)] = inst_29132);

(statearr_29200_29234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (8))){
var inst_29105 = (state_29162[(12)]);
var inst_29106 = (state_29162[(16)]);
var inst_29108 = (inst_29106 < inst_29105);
var inst_29109 = inst_29108;
var state_29162__$1 = state_29162;
if(cljs.core.truth_(inst_29109)){
var statearr_29201_29235 = state_29162__$1;
(statearr_29201_29235[(1)] = (10));

} else {
var statearr_29202_29236 = state_29162__$1;
(statearr_29202_29236[(1)] = (11));

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
});})(c__27974__auto___29208,mults,ensure_mult,p))
;
return ((function (switch__27884__auto__,c__27974__auto___29208,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_29203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29203[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_29203[(1)] = (1));

return statearr_29203;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_29162){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_29162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29204){if((e29204 instanceof Object)){
var ex__27888__auto__ = e29204;
var statearr_29205_29237 = state_29162;
(statearr_29205_29237[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29238 = state_29162;
state_29162 = G__29238;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_29162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_29162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___29208,mults,ensure_mult,p))
})();
var state__27976__auto__ = (function (){var statearr_29206 = f__27975__auto__.call(null);
(statearr_29206[(6)] = c__27974__auto___29208);

return statearr_29206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___29208,mults,ensure_mult,p))
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
var G__29240 = arguments.length;
switch (G__29240) {
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
var G__29243 = arguments.length;
switch (G__29243) {
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
var G__29246 = arguments.length;
switch (G__29246) {
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
var c__27974__auto___29313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___29313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___29313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29285){
var state_val_29286 = (state_29285[(1)]);
if((state_val_29286 === (7))){
var state_29285__$1 = state_29285;
var statearr_29287_29314 = state_29285__$1;
(statearr_29287_29314[(2)] = null);

(statearr_29287_29314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (1))){
var state_29285__$1 = state_29285;
var statearr_29288_29315 = state_29285__$1;
(statearr_29288_29315[(2)] = null);

(statearr_29288_29315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (4))){
var inst_29249 = (state_29285[(7)]);
var inst_29251 = (inst_29249 < cnt);
var state_29285__$1 = state_29285;
if(cljs.core.truth_(inst_29251)){
var statearr_29289_29316 = state_29285__$1;
(statearr_29289_29316[(1)] = (6));

} else {
var statearr_29290_29317 = state_29285__$1;
(statearr_29290_29317[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (15))){
var inst_29281 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29291_29318 = state_29285__$1;
(statearr_29291_29318[(2)] = inst_29281);

(statearr_29291_29318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (13))){
var inst_29274 = cljs.core.async.close_BANG_.call(null,out);
var state_29285__$1 = state_29285;
var statearr_29292_29319 = state_29285__$1;
(statearr_29292_29319[(2)] = inst_29274);

(statearr_29292_29319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (6))){
var state_29285__$1 = state_29285;
var statearr_29293_29320 = state_29285__$1;
(statearr_29293_29320[(2)] = null);

(statearr_29293_29320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (3))){
var inst_29283 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29285__$1,inst_29283);
} else {
if((state_val_29286 === (12))){
var inst_29271 = (state_29285[(8)]);
var inst_29271__$1 = (state_29285[(2)]);
var inst_29272 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29271__$1);
var state_29285__$1 = (function (){var statearr_29294 = state_29285;
(statearr_29294[(8)] = inst_29271__$1);

return statearr_29294;
})();
if(cljs.core.truth_(inst_29272)){
var statearr_29295_29321 = state_29285__$1;
(statearr_29295_29321[(1)] = (13));

} else {
var statearr_29296_29322 = state_29285__$1;
(statearr_29296_29322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (2))){
var inst_29248 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29249 = (0);
var state_29285__$1 = (function (){var statearr_29297 = state_29285;
(statearr_29297[(9)] = inst_29248);

(statearr_29297[(7)] = inst_29249);

return statearr_29297;
})();
var statearr_29298_29323 = state_29285__$1;
(statearr_29298_29323[(2)] = null);

(statearr_29298_29323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (11))){
var inst_29249 = (state_29285[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29285,(10),Object,null,(9));
var inst_29258 = chs__$1.call(null,inst_29249);
var inst_29259 = done.call(null,inst_29249);
var inst_29260 = cljs.core.async.take_BANG_.call(null,inst_29258,inst_29259);
var state_29285__$1 = state_29285;
var statearr_29299_29324 = state_29285__$1;
(statearr_29299_29324[(2)] = inst_29260);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (9))){
var inst_29249 = (state_29285[(7)]);
var inst_29262 = (state_29285[(2)]);
var inst_29263 = (inst_29249 + (1));
var inst_29249__$1 = inst_29263;
var state_29285__$1 = (function (){var statearr_29300 = state_29285;
(statearr_29300[(10)] = inst_29262);

(statearr_29300[(7)] = inst_29249__$1);

return statearr_29300;
})();
var statearr_29301_29325 = state_29285__$1;
(statearr_29301_29325[(2)] = null);

(statearr_29301_29325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (5))){
var inst_29269 = (state_29285[(2)]);
var state_29285__$1 = (function (){var statearr_29302 = state_29285;
(statearr_29302[(11)] = inst_29269);

return statearr_29302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29285__$1,(12),dchan);
} else {
if((state_val_29286 === (14))){
var inst_29271 = (state_29285[(8)]);
var inst_29276 = cljs.core.apply.call(null,f,inst_29271);
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29285__$1,(16),out,inst_29276);
} else {
if((state_val_29286 === (16))){
var inst_29278 = (state_29285[(2)]);
var state_29285__$1 = (function (){var statearr_29303 = state_29285;
(statearr_29303[(12)] = inst_29278);

return statearr_29303;
})();
var statearr_29304_29326 = state_29285__$1;
(statearr_29304_29326[(2)] = null);

(statearr_29304_29326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (10))){
var inst_29253 = (state_29285[(2)]);
var inst_29254 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29285__$1 = (function (){var statearr_29305 = state_29285;
(statearr_29305[(13)] = inst_29253);

return statearr_29305;
})();
var statearr_29306_29327 = state_29285__$1;
(statearr_29306_29327[(2)] = inst_29254);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (8))){
var inst_29267 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29307_29328 = state_29285__$1;
(statearr_29307_29328[(2)] = inst_29267);

(statearr_29307_29328[(1)] = (5));


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
});})(c__27974__auto___29313,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27884__auto__,c__27974__auto___29313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_29308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29308[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_29308[(1)] = (1));

return statearr_29308;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_29285){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_29285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29309){if((e29309 instanceof Object)){
var ex__27888__auto__ = e29309;
var statearr_29310_29329 = state_29285;
(statearr_29310_29329[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29330 = state_29285;
state_29285 = G__29330;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_29285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_29285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___29313,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27976__auto__ = (function (){var statearr_29311 = f__27975__auto__.call(null);
(statearr_29311[(6)] = c__27974__auto___29313);

return statearr_29311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___29313,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29333 = arguments.length;
switch (G__29333) {
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
var c__27974__auto___29387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___29387,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___29387,out){
return (function (state_29365){
var state_val_29366 = (state_29365[(1)]);
if((state_val_29366 === (7))){
var inst_29344 = (state_29365[(7)]);
var inst_29345 = (state_29365[(8)]);
var inst_29344__$1 = (state_29365[(2)]);
var inst_29345__$1 = cljs.core.nth.call(null,inst_29344__$1,(0),null);
var inst_29346 = cljs.core.nth.call(null,inst_29344__$1,(1),null);
var inst_29347 = (inst_29345__$1 == null);
var state_29365__$1 = (function (){var statearr_29367 = state_29365;
(statearr_29367[(9)] = inst_29346);

(statearr_29367[(7)] = inst_29344__$1);

(statearr_29367[(8)] = inst_29345__$1);

return statearr_29367;
})();
if(cljs.core.truth_(inst_29347)){
var statearr_29368_29388 = state_29365__$1;
(statearr_29368_29388[(1)] = (8));

} else {
var statearr_29369_29389 = state_29365__$1;
(statearr_29369_29389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (1))){
var inst_29334 = cljs.core.vec.call(null,chs);
var inst_29335 = inst_29334;
var state_29365__$1 = (function (){var statearr_29370 = state_29365;
(statearr_29370[(10)] = inst_29335);

return statearr_29370;
})();
var statearr_29371_29390 = state_29365__$1;
(statearr_29371_29390[(2)] = null);

(statearr_29371_29390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (4))){
var inst_29335 = (state_29365[(10)]);
var state_29365__$1 = state_29365;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29365__$1,(7),inst_29335);
} else {
if((state_val_29366 === (6))){
var inst_29361 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29372_29391 = state_29365__$1;
(statearr_29372_29391[(2)] = inst_29361);

(statearr_29372_29391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (3))){
var inst_29363 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29365__$1,inst_29363);
} else {
if((state_val_29366 === (2))){
var inst_29335 = (state_29365[(10)]);
var inst_29337 = cljs.core.count.call(null,inst_29335);
var inst_29338 = (inst_29337 > (0));
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29338)){
var statearr_29374_29392 = state_29365__$1;
(statearr_29374_29392[(1)] = (4));

} else {
var statearr_29375_29393 = state_29365__$1;
(statearr_29375_29393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (11))){
var inst_29335 = (state_29365[(10)]);
var inst_29354 = (state_29365[(2)]);
var tmp29373 = inst_29335;
var inst_29335__$1 = tmp29373;
var state_29365__$1 = (function (){var statearr_29376 = state_29365;
(statearr_29376[(11)] = inst_29354);

(statearr_29376[(10)] = inst_29335__$1);

return statearr_29376;
})();
var statearr_29377_29394 = state_29365__$1;
(statearr_29377_29394[(2)] = null);

(statearr_29377_29394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (9))){
var inst_29345 = (state_29365[(8)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29365__$1,(11),out,inst_29345);
} else {
if((state_val_29366 === (5))){
var inst_29359 = cljs.core.async.close_BANG_.call(null,out);
var state_29365__$1 = state_29365;
var statearr_29378_29395 = state_29365__$1;
(statearr_29378_29395[(2)] = inst_29359);

(statearr_29378_29395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (10))){
var inst_29357 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29379_29396 = state_29365__$1;
(statearr_29379_29396[(2)] = inst_29357);

(statearr_29379_29396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (8))){
var inst_29346 = (state_29365[(9)]);
var inst_29335 = (state_29365[(10)]);
var inst_29344 = (state_29365[(7)]);
var inst_29345 = (state_29365[(8)]);
var inst_29349 = (function (){var cs = inst_29335;
var vec__29340 = inst_29344;
var v = inst_29345;
var c = inst_29346;
return ((function (cs,vec__29340,v,c,inst_29346,inst_29335,inst_29344,inst_29345,state_val_29366,c__27974__auto___29387,out){
return (function (p1__29331_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29331_SHARP_);
});
;})(cs,vec__29340,v,c,inst_29346,inst_29335,inst_29344,inst_29345,state_val_29366,c__27974__auto___29387,out))
})();
var inst_29350 = cljs.core.filterv.call(null,inst_29349,inst_29335);
var inst_29335__$1 = inst_29350;
var state_29365__$1 = (function (){var statearr_29380 = state_29365;
(statearr_29380[(10)] = inst_29335__$1);

return statearr_29380;
})();
var statearr_29381_29397 = state_29365__$1;
(statearr_29381_29397[(2)] = null);

(statearr_29381_29397[(1)] = (2));


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
});})(c__27974__auto___29387,out))
;
return ((function (switch__27884__auto__,c__27974__auto___29387,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_29382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29382[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_29382[(1)] = (1));

return statearr_29382;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_29365){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_29365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29383){if((e29383 instanceof Object)){
var ex__27888__auto__ = e29383;
var statearr_29384_29398 = state_29365;
(statearr_29384_29398[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29399 = state_29365;
state_29365 = G__29399;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_29365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_29365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___29387,out))
})();
var state__27976__auto__ = (function (){var statearr_29385 = f__27975__auto__.call(null);
(statearr_29385[(6)] = c__27974__auto___29387);

return statearr_29385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___29387,out))
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
var G__29401 = arguments.length;
switch (G__29401) {
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
var c__27974__auto___29446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___29446,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___29446,out){
return (function (state_29425){
var state_val_29426 = (state_29425[(1)]);
if((state_val_29426 === (7))){
var inst_29407 = (state_29425[(7)]);
var inst_29407__$1 = (state_29425[(2)]);
var inst_29408 = (inst_29407__$1 == null);
var inst_29409 = cljs.core.not.call(null,inst_29408);
var state_29425__$1 = (function (){var statearr_29427 = state_29425;
(statearr_29427[(7)] = inst_29407__$1);

return statearr_29427;
})();
if(inst_29409){
var statearr_29428_29447 = state_29425__$1;
(statearr_29428_29447[(1)] = (8));

} else {
var statearr_29429_29448 = state_29425__$1;
(statearr_29429_29448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (1))){
var inst_29402 = (0);
var state_29425__$1 = (function (){var statearr_29430 = state_29425;
(statearr_29430[(8)] = inst_29402);

return statearr_29430;
})();
var statearr_29431_29449 = state_29425__$1;
(statearr_29431_29449[(2)] = null);

(statearr_29431_29449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (4))){
var state_29425__$1 = state_29425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29425__$1,(7),ch);
} else {
if((state_val_29426 === (6))){
var inst_29420 = (state_29425[(2)]);
var state_29425__$1 = state_29425;
var statearr_29432_29450 = state_29425__$1;
(statearr_29432_29450[(2)] = inst_29420);

(statearr_29432_29450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (3))){
var inst_29422 = (state_29425[(2)]);
var inst_29423 = cljs.core.async.close_BANG_.call(null,out);
var state_29425__$1 = (function (){var statearr_29433 = state_29425;
(statearr_29433[(9)] = inst_29422);

return statearr_29433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29425__$1,inst_29423);
} else {
if((state_val_29426 === (2))){
var inst_29402 = (state_29425[(8)]);
var inst_29404 = (inst_29402 < n);
var state_29425__$1 = state_29425;
if(cljs.core.truth_(inst_29404)){
var statearr_29434_29451 = state_29425__$1;
(statearr_29434_29451[(1)] = (4));

} else {
var statearr_29435_29452 = state_29425__$1;
(statearr_29435_29452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (11))){
var inst_29402 = (state_29425[(8)]);
var inst_29412 = (state_29425[(2)]);
var inst_29413 = (inst_29402 + (1));
var inst_29402__$1 = inst_29413;
var state_29425__$1 = (function (){var statearr_29436 = state_29425;
(statearr_29436[(10)] = inst_29412);

(statearr_29436[(8)] = inst_29402__$1);

return statearr_29436;
})();
var statearr_29437_29453 = state_29425__$1;
(statearr_29437_29453[(2)] = null);

(statearr_29437_29453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (9))){
var state_29425__$1 = state_29425;
var statearr_29438_29454 = state_29425__$1;
(statearr_29438_29454[(2)] = null);

(statearr_29438_29454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (5))){
var state_29425__$1 = state_29425;
var statearr_29439_29455 = state_29425__$1;
(statearr_29439_29455[(2)] = null);

(statearr_29439_29455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (10))){
var inst_29417 = (state_29425[(2)]);
var state_29425__$1 = state_29425;
var statearr_29440_29456 = state_29425__$1;
(statearr_29440_29456[(2)] = inst_29417);

(statearr_29440_29456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (8))){
var inst_29407 = (state_29425[(7)]);
var state_29425__$1 = state_29425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29425__$1,(11),out,inst_29407);
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
});})(c__27974__auto___29446,out))
;
return ((function (switch__27884__auto__,c__27974__auto___29446,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_29441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29441[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_29441[(1)] = (1));

return statearr_29441;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_29425){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_29425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object)){
var ex__27888__auto__ = e29442;
var statearr_29443_29457 = state_29425;
(statearr_29443_29457[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29458 = state_29425;
state_29425 = G__29458;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_29425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_29425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___29446,out))
})();
var state__27976__auto__ = (function (){var statearr_29444 = f__27975__auto__.call(null);
(statearr_29444[(6)] = c__27974__auto___29446);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___29446,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29460 = (function (f,ch,meta29461){
this.f = f;
this.ch = ch;
this.meta29461 = meta29461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29462,meta29461__$1){
var self__ = this;
var _29462__$1 = this;
return (new cljs.core.async.t_cljs$core$async29460(self__.f,self__.ch,meta29461__$1));
});

cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29462){
var self__ = this;
var _29462__$1 = this;
return self__.meta29461;
});

cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29463 = (function (f,ch,meta29461,_,fn1,meta29464){
this.f = f;
this.ch = ch;
this.meta29461 = meta29461;
this._ = _;
this.fn1 = fn1;
this.meta29464 = meta29464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29465,meta29464__$1){
var self__ = this;
var _29465__$1 = this;
return (new cljs.core.async.t_cljs$core$async29463(self__.f,self__.ch,self__.meta29461,self__._,self__.fn1,meta29464__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29465){
var self__ = this;
var _29465__$1 = this;
return self__.meta29464;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29459_SHARP_){
return f1.call(null,(((p1__29459_SHARP_ == null))?null:self__.f.call(null,p1__29459_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29463.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29461","meta29461",-1016350262,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29460","cljs.core.async/t_cljs$core$async29460",1306815580,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29464","meta29464",-1768419981,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29463";

cljs.core.async.t_cljs$core$async29463.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29463");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29463.
 */
cljs.core.async.__GT_t_cljs$core$async29463 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29463(f__$1,ch__$1,meta29461__$1,___$2,fn1__$1,meta29464){
return (new cljs.core.async.t_cljs$core$async29463(f__$1,ch__$1,meta29461__$1,___$2,fn1__$1,meta29464));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29463(self__.f,self__.ch,self__.meta29461,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29461","meta29461",-1016350262,null)], null);
});

cljs.core.async.t_cljs$core$async29460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29460";

cljs.core.async.t_cljs$core$async29460.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29460");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29460.
 */
cljs.core.async.__GT_t_cljs$core$async29460 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29460(f__$1,ch__$1,meta29461){
return (new cljs.core.async.t_cljs$core$async29460(f__$1,ch__$1,meta29461));
});

}

return (new cljs.core.async.t_cljs$core$async29460(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29466 = (function (f,ch,meta29467){
this.f = f;
this.ch = ch;
this.meta29467 = meta29467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29468,meta29467__$1){
var self__ = this;
var _29468__$1 = this;
return (new cljs.core.async.t_cljs$core$async29466(self__.f,self__.ch,meta29467__$1));
});

cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29468){
var self__ = this;
var _29468__$1 = this;
return self__.meta29467;
});

cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29467","meta29467",2043052421,null)], null);
});

cljs.core.async.t_cljs$core$async29466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29466";

cljs.core.async.t_cljs$core$async29466.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29466");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29466.
 */
cljs.core.async.__GT_t_cljs$core$async29466 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29466(f__$1,ch__$1,meta29467){
return (new cljs.core.async.t_cljs$core$async29466(f__$1,ch__$1,meta29467));
});

}

return (new cljs.core.async.t_cljs$core$async29466(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29469 = (function (p,ch,meta29470){
this.p = p;
this.ch = ch;
this.meta29470 = meta29470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29471,meta29470__$1){
var self__ = this;
var _29471__$1 = this;
return (new cljs.core.async.t_cljs$core$async29469(self__.p,self__.ch,meta29470__$1));
});

cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29471){
var self__ = this;
var _29471__$1 = this;
return self__.meta29470;
});

cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29470","meta29470",-1560174056,null)], null);
});

cljs.core.async.t_cljs$core$async29469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29469";

cljs.core.async.t_cljs$core$async29469.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29469");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29469.
 */
cljs.core.async.__GT_t_cljs$core$async29469 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29469(p__$1,ch__$1,meta29470){
return (new cljs.core.async.t_cljs$core$async29469(p__$1,ch__$1,meta29470));
});

}

return (new cljs.core.async.t_cljs$core$async29469(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29473 = arguments.length;
switch (G__29473) {
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
var c__27974__auto___29513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___29513,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___29513,out){
return (function (state_29494){
var state_val_29495 = (state_29494[(1)]);
if((state_val_29495 === (7))){
var inst_29490 = (state_29494[(2)]);
var state_29494__$1 = state_29494;
var statearr_29496_29514 = state_29494__$1;
(statearr_29496_29514[(2)] = inst_29490);

(statearr_29496_29514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (1))){
var state_29494__$1 = state_29494;
var statearr_29497_29515 = state_29494__$1;
(statearr_29497_29515[(2)] = null);

(statearr_29497_29515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (4))){
var inst_29476 = (state_29494[(7)]);
var inst_29476__$1 = (state_29494[(2)]);
var inst_29477 = (inst_29476__$1 == null);
var state_29494__$1 = (function (){var statearr_29498 = state_29494;
(statearr_29498[(7)] = inst_29476__$1);

return statearr_29498;
})();
if(cljs.core.truth_(inst_29477)){
var statearr_29499_29516 = state_29494__$1;
(statearr_29499_29516[(1)] = (5));

} else {
var statearr_29500_29517 = state_29494__$1;
(statearr_29500_29517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (6))){
var inst_29476 = (state_29494[(7)]);
var inst_29481 = p.call(null,inst_29476);
var state_29494__$1 = state_29494;
if(cljs.core.truth_(inst_29481)){
var statearr_29501_29518 = state_29494__$1;
(statearr_29501_29518[(1)] = (8));

} else {
var statearr_29502_29519 = state_29494__$1;
(statearr_29502_29519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (3))){
var inst_29492 = (state_29494[(2)]);
var state_29494__$1 = state_29494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29494__$1,inst_29492);
} else {
if((state_val_29495 === (2))){
var state_29494__$1 = state_29494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29494__$1,(4),ch);
} else {
if((state_val_29495 === (11))){
var inst_29484 = (state_29494[(2)]);
var state_29494__$1 = state_29494;
var statearr_29503_29520 = state_29494__$1;
(statearr_29503_29520[(2)] = inst_29484);

(statearr_29503_29520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (9))){
var state_29494__$1 = state_29494;
var statearr_29504_29521 = state_29494__$1;
(statearr_29504_29521[(2)] = null);

(statearr_29504_29521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (5))){
var inst_29479 = cljs.core.async.close_BANG_.call(null,out);
var state_29494__$1 = state_29494;
var statearr_29505_29522 = state_29494__$1;
(statearr_29505_29522[(2)] = inst_29479);

(statearr_29505_29522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (10))){
var inst_29487 = (state_29494[(2)]);
var state_29494__$1 = (function (){var statearr_29506 = state_29494;
(statearr_29506[(8)] = inst_29487);

return statearr_29506;
})();
var statearr_29507_29523 = state_29494__$1;
(statearr_29507_29523[(2)] = null);

(statearr_29507_29523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (8))){
var inst_29476 = (state_29494[(7)]);
var state_29494__$1 = state_29494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29494__$1,(11),out,inst_29476);
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
});})(c__27974__auto___29513,out))
;
return ((function (switch__27884__auto__,c__27974__auto___29513,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_29508 = [null,null,null,null,null,null,null,null,null];
(statearr_29508[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_29508[(1)] = (1));

return statearr_29508;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_29494){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_29494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29509){if((e29509 instanceof Object)){
var ex__27888__auto__ = e29509;
var statearr_29510_29524 = state_29494;
(statearr_29510_29524[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29525 = state_29494;
state_29494 = G__29525;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_29494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_29494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___29513,out))
})();
var state__27976__auto__ = (function (){var statearr_29511 = f__27975__auto__.call(null);
(statearr_29511[(6)] = c__27974__auto___29513);

return statearr_29511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___29513,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29527 = arguments.length;
switch (G__29527) {
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
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__){
return (function (state_29590){
var state_val_29591 = (state_29590[(1)]);
if((state_val_29591 === (7))){
var inst_29586 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
var statearr_29592_29630 = state_29590__$1;
(statearr_29592_29630[(2)] = inst_29586);

(statearr_29592_29630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (20))){
var inst_29556 = (state_29590[(7)]);
var inst_29567 = (state_29590[(2)]);
var inst_29568 = cljs.core.next.call(null,inst_29556);
var inst_29542 = inst_29568;
var inst_29543 = null;
var inst_29544 = (0);
var inst_29545 = (0);
var state_29590__$1 = (function (){var statearr_29593 = state_29590;
(statearr_29593[(8)] = inst_29544);

(statearr_29593[(9)] = inst_29542);

(statearr_29593[(10)] = inst_29567);

(statearr_29593[(11)] = inst_29543);

(statearr_29593[(12)] = inst_29545);

return statearr_29593;
})();
var statearr_29594_29631 = state_29590__$1;
(statearr_29594_29631[(2)] = null);

(statearr_29594_29631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (1))){
var state_29590__$1 = state_29590;
var statearr_29595_29632 = state_29590__$1;
(statearr_29595_29632[(2)] = null);

(statearr_29595_29632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (4))){
var inst_29531 = (state_29590[(13)]);
var inst_29531__$1 = (state_29590[(2)]);
var inst_29532 = (inst_29531__$1 == null);
var state_29590__$1 = (function (){var statearr_29596 = state_29590;
(statearr_29596[(13)] = inst_29531__$1);

return statearr_29596;
})();
if(cljs.core.truth_(inst_29532)){
var statearr_29597_29633 = state_29590__$1;
(statearr_29597_29633[(1)] = (5));

} else {
var statearr_29598_29634 = state_29590__$1;
(statearr_29598_29634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (15))){
var state_29590__$1 = state_29590;
var statearr_29602_29635 = state_29590__$1;
(statearr_29602_29635[(2)] = null);

(statearr_29602_29635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (21))){
var state_29590__$1 = state_29590;
var statearr_29603_29636 = state_29590__$1;
(statearr_29603_29636[(2)] = null);

(statearr_29603_29636[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (13))){
var inst_29544 = (state_29590[(8)]);
var inst_29542 = (state_29590[(9)]);
var inst_29543 = (state_29590[(11)]);
var inst_29545 = (state_29590[(12)]);
var inst_29552 = (state_29590[(2)]);
var inst_29553 = (inst_29545 + (1));
var tmp29599 = inst_29544;
var tmp29600 = inst_29542;
var tmp29601 = inst_29543;
var inst_29542__$1 = tmp29600;
var inst_29543__$1 = tmp29601;
var inst_29544__$1 = tmp29599;
var inst_29545__$1 = inst_29553;
var state_29590__$1 = (function (){var statearr_29604 = state_29590;
(statearr_29604[(8)] = inst_29544__$1);

(statearr_29604[(14)] = inst_29552);

(statearr_29604[(9)] = inst_29542__$1);

(statearr_29604[(11)] = inst_29543__$1);

(statearr_29604[(12)] = inst_29545__$1);

return statearr_29604;
})();
var statearr_29605_29637 = state_29590__$1;
(statearr_29605_29637[(2)] = null);

(statearr_29605_29637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (22))){
var state_29590__$1 = state_29590;
var statearr_29606_29638 = state_29590__$1;
(statearr_29606_29638[(2)] = null);

(statearr_29606_29638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (6))){
var inst_29531 = (state_29590[(13)]);
var inst_29540 = f.call(null,inst_29531);
var inst_29541 = cljs.core.seq.call(null,inst_29540);
var inst_29542 = inst_29541;
var inst_29543 = null;
var inst_29544 = (0);
var inst_29545 = (0);
var state_29590__$1 = (function (){var statearr_29607 = state_29590;
(statearr_29607[(8)] = inst_29544);

(statearr_29607[(9)] = inst_29542);

(statearr_29607[(11)] = inst_29543);

(statearr_29607[(12)] = inst_29545);

return statearr_29607;
})();
var statearr_29608_29639 = state_29590__$1;
(statearr_29608_29639[(2)] = null);

(statearr_29608_29639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (17))){
var inst_29556 = (state_29590[(7)]);
var inst_29560 = cljs.core.chunk_first.call(null,inst_29556);
var inst_29561 = cljs.core.chunk_rest.call(null,inst_29556);
var inst_29562 = cljs.core.count.call(null,inst_29560);
var inst_29542 = inst_29561;
var inst_29543 = inst_29560;
var inst_29544 = inst_29562;
var inst_29545 = (0);
var state_29590__$1 = (function (){var statearr_29609 = state_29590;
(statearr_29609[(8)] = inst_29544);

(statearr_29609[(9)] = inst_29542);

(statearr_29609[(11)] = inst_29543);

(statearr_29609[(12)] = inst_29545);

return statearr_29609;
})();
var statearr_29610_29640 = state_29590__$1;
(statearr_29610_29640[(2)] = null);

(statearr_29610_29640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (3))){
var inst_29588 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29590__$1,inst_29588);
} else {
if((state_val_29591 === (12))){
var inst_29576 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
var statearr_29611_29641 = state_29590__$1;
(statearr_29611_29641[(2)] = inst_29576);

(statearr_29611_29641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (2))){
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29590__$1,(4),in$);
} else {
if((state_val_29591 === (23))){
var inst_29584 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
var statearr_29612_29642 = state_29590__$1;
(statearr_29612_29642[(2)] = inst_29584);

(statearr_29612_29642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (19))){
var inst_29571 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
var statearr_29613_29643 = state_29590__$1;
(statearr_29613_29643[(2)] = inst_29571);

(statearr_29613_29643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (11))){
var inst_29542 = (state_29590[(9)]);
var inst_29556 = (state_29590[(7)]);
var inst_29556__$1 = cljs.core.seq.call(null,inst_29542);
var state_29590__$1 = (function (){var statearr_29614 = state_29590;
(statearr_29614[(7)] = inst_29556__$1);

return statearr_29614;
})();
if(inst_29556__$1){
var statearr_29615_29644 = state_29590__$1;
(statearr_29615_29644[(1)] = (14));

} else {
var statearr_29616_29645 = state_29590__$1;
(statearr_29616_29645[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (9))){
var inst_29578 = (state_29590[(2)]);
var inst_29579 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29590__$1 = (function (){var statearr_29617 = state_29590;
(statearr_29617[(15)] = inst_29578);

return statearr_29617;
})();
if(cljs.core.truth_(inst_29579)){
var statearr_29618_29646 = state_29590__$1;
(statearr_29618_29646[(1)] = (21));

} else {
var statearr_29619_29647 = state_29590__$1;
(statearr_29619_29647[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (5))){
var inst_29534 = cljs.core.async.close_BANG_.call(null,out);
var state_29590__$1 = state_29590;
var statearr_29620_29648 = state_29590__$1;
(statearr_29620_29648[(2)] = inst_29534);

(statearr_29620_29648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (14))){
var inst_29556 = (state_29590[(7)]);
var inst_29558 = cljs.core.chunked_seq_QMARK_.call(null,inst_29556);
var state_29590__$1 = state_29590;
if(inst_29558){
var statearr_29621_29649 = state_29590__$1;
(statearr_29621_29649[(1)] = (17));

} else {
var statearr_29622_29650 = state_29590__$1;
(statearr_29622_29650[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (16))){
var inst_29574 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
var statearr_29623_29651 = state_29590__$1;
(statearr_29623_29651[(2)] = inst_29574);

(statearr_29623_29651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (10))){
var inst_29543 = (state_29590[(11)]);
var inst_29545 = (state_29590[(12)]);
var inst_29550 = cljs.core._nth.call(null,inst_29543,inst_29545);
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29590__$1,(13),out,inst_29550);
} else {
if((state_val_29591 === (18))){
var inst_29556 = (state_29590[(7)]);
var inst_29565 = cljs.core.first.call(null,inst_29556);
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29590__$1,(20),out,inst_29565);
} else {
if((state_val_29591 === (8))){
var inst_29544 = (state_29590[(8)]);
var inst_29545 = (state_29590[(12)]);
var inst_29547 = (inst_29545 < inst_29544);
var inst_29548 = inst_29547;
var state_29590__$1 = state_29590;
if(cljs.core.truth_(inst_29548)){
var statearr_29624_29652 = state_29590__$1;
(statearr_29624_29652[(1)] = (10));

} else {
var statearr_29625_29653 = state_29590__$1;
(statearr_29625_29653[(1)] = (11));

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
});})(c__27974__auto__))
;
return ((function (switch__27884__auto__,c__27974__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_29626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29626[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__);

(statearr_29626[(1)] = (1));

return statearr_29626;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____1 = (function (state_29590){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_29590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29627){if((e29627 instanceof Object)){
var ex__27888__auto__ = e29627;
var statearr_29628_29654 = state_29590;
(statearr_29628_29654[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29655 = state_29590;
state_29590 = G__29655;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__ = function(state_29590){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____1.call(this,state_29590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_29629 = f__27975__auto__.call(null);
(statearr_29629[(6)] = c__27974__auto__);

return statearr_29629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29657 = arguments.length;
switch (G__29657) {
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
var G__29660 = arguments.length;
switch (G__29660) {
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
var G__29663 = arguments.length;
switch (G__29663) {
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
var c__27974__auto___29710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___29710,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___29710,out){
return (function (state_29687){
var state_val_29688 = (state_29687[(1)]);
if((state_val_29688 === (7))){
var inst_29682 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29689_29711 = state_29687__$1;
(statearr_29689_29711[(2)] = inst_29682);

(statearr_29689_29711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (1))){
var inst_29664 = null;
var state_29687__$1 = (function (){var statearr_29690 = state_29687;
(statearr_29690[(7)] = inst_29664);

return statearr_29690;
})();
var statearr_29691_29712 = state_29687__$1;
(statearr_29691_29712[(2)] = null);

(statearr_29691_29712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (4))){
var inst_29667 = (state_29687[(8)]);
var inst_29667__$1 = (state_29687[(2)]);
var inst_29668 = (inst_29667__$1 == null);
var inst_29669 = cljs.core.not.call(null,inst_29668);
var state_29687__$1 = (function (){var statearr_29692 = state_29687;
(statearr_29692[(8)] = inst_29667__$1);

return statearr_29692;
})();
if(inst_29669){
var statearr_29693_29713 = state_29687__$1;
(statearr_29693_29713[(1)] = (5));

} else {
var statearr_29694_29714 = state_29687__$1;
(statearr_29694_29714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (6))){
var state_29687__$1 = state_29687;
var statearr_29695_29715 = state_29687__$1;
(statearr_29695_29715[(2)] = null);

(statearr_29695_29715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (3))){
var inst_29684 = (state_29687[(2)]);
var inst_29685 = cljs.core.async.close_BANG_.call(null,out);
var state_29687__$1 = (function (){var statearr_29696 = state_29687;
(statearr_29696[(9)] = inst_29684);

return statearr_29696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29687__$1,inst_29685);
} else {
if((state_val_29688 === (2))){
var state_29687__$1 = state_29687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29687__$1,(4),ch);
} else {
if((state_val_29688 === (11))){
var inst_29667 = (state_29687[(8)]);
var inst_29676 = (state_29687[(2)]);
var inst_29664 = inst_29667;
var state_29687__$1 = (function (){var statearr_29697 = state_29687;
(statearr_29697[(10)] = inst_29676);

(statearr_29697[(7)] = inst_29664);

return statearr_29697;
})();
var statearr_29698_29716 = state_29687__$1;
(statearr_29698_29716[(2)] = null);

(statearr_29698_29716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (9))){
var inst_29667 = (state_29687[(8)]);
var state_29687__$1 = state_29687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29687__$1,(11),out,inst_29667);
} else {
if((state_val_29688 === (5))){
var inst_29664 = (state_29687[(7)]);
var inst_29667 = (state_29687[(8)]);
var inst_29671 = cljs.core._EQ_.call(null,inst_29667,inst_29664);
var state_29687__$1 = state_29687;
if(inst_29671){
var statearr_29700_29717 = state_29687__$1;
(statearr_29700_29717[(1)] = (8));

} else {
var statearr_29701_29718 = state_29687__$1;
(statearr_29701_29718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (10))){
var inst_29679 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29702_29719 = state_29687__$1;
(statearr_29702_29719[(2)] = inst_29679);

(statearr_29702_29719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (8))){
var inst_29664 = (state_29687[(7)]);
var tmp29699 = inst_29664;
var inst_29664__$1 = tmp29699;
var state_29687__$1 = (function (){var statearr_29703 = state_29687;
(statearr_29703[(7)] = inst_29664__$1);

return statearr_29703;
})();
var statearr_29704_29720 = state_29687__$1;
(statearr_29704_29720[(2)] = null);

(statearr_29704_29720[(1)] = (2));


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
});})(c__27974__auto___29710,out))
;
return ((function (switch__27884__auto__,c__27974__auto___29710,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_29705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29705[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_29705[(1)] = (1));

return statearr_29705;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_29687){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_29687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29706){if((e29706 instanceof Object)){
var ex__27888__auto__ = e29706;
var statearr_29707_29721 = state_29687;
(statearr_29707_29721[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29722 = state_29687;
state_29687 = G__29722;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_29687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_29687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___29710,out))
})();
var state__27976__auto__ = (function (){var statearr_29708 = f__27975__auto__.call(null);
(statearr_29708[(6)] = c__27974__auto___29710);

return statearr_29708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___29710,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29724 = arguments.length;
switch (G__29724) {
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
var c__27974__auto___29790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___29790,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___29790,out){
return (function (state_29762){
var state_val_29763 = (state_29762[(1)]);
if((state_val_29763 === (7))){
var inst_29758 = (state_29762[(2)]);
var state_29762__$1 = state_29762;
var statearr_29764_29791 = state_29762__$1;
(statearr_29764_29791[(2)] = inst_29758);

(statearr_29764_29791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (1))){
var inst_29725 = (new Array(n));
var inst_29726 = inst_29725;
var inst_29727 = (0);
var state_29762__$1 = (function (){var statearr_29765 = state_29762;
(statearr_29765[(7)] = inst_29726);

(statearr_29765[(8)] = inst_29727);

return statearr_29765;
})();
var statearr_29766_29792 = state_29762__$1;
(statearr_29766_29792[(2)] = null);

(statearr_29766_29792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (4))){
var inst_29730 = (state_29762[(9)]);
var inst_29730__$1 = (state_29762[(2)]);
var inst_29731 = (inst_29730__$1 == null);
var inst_29732 = cljs.core.not.call(null,inst_29731);
var state_29762__$1 = (function (){var statearr_29767 = state_29762;
(statearr_29767[(9)] = inst_29730__$1);

return statearr_29767;
})();
if(inst_29732){
var statearr_29768_29793 = state_29762__$1;
(statearr_29768_29793[(1)] = (5));

} else {
var statearr_29769_29794 = state_29762__$1;
(statearr_29769_29794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (15))){
var inst_29752 = (state_29762[(2)]);
var state_29762__$1 = state_29762;
var statearr_29770_29795 = state_29762__$1;
(statearr_29770_29795[(2)] = inst_29752);

(statearr_29770_29795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (13))){
var state_29762__$1 = state_29762;
var statearr_29771_29796 = state_29762__$1;
(statearr_29771_29796[(2)] = null);

(statearr_29771_29796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (6))){
var inst_29727 = (state_29762[(8)]);
var inst_29748 = (inst_29727 > (0));
var state_29762__$1 = state_29762;
if(cljs.core.truth_(inst_29748)){
var statearr_29772_29797 = state_29762__$1;
(statearr_29772_29797[(1)] = (12));

} else {
var statearr_29773_29798 = state_29762__$1;
(statearr_29773_29798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (3))){
var inst_29760 = (state_29762[(2)]);
var state_29762__$1 = state_29762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29762__$1,inst_29760);
} else {
if((state_val_29763 === (12))){
var inst_29726 = (state_29762[(7)]);
var inst_29750 = cljs.core.vec.call(null,inst_29726);
var state_29762__$1 = state_29762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29762__$1,(15),out,inst_29750);
} else {
if((state_val_29763 === (2))){
var state_29762__$1 = state_29762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29762__$1,(4),ch);
} else {
if((state_val_29763 === (11))){
var inst_29742 = (state_29762[(2)]);
var inst_29743 = (new Array(n));
var inst_29726 = inst_29743;
var inst_29727 = (0);
var state_29762__$1 = (function (){var statearr_29774 = state_29762;
(statearr_29774[(7)] = inst_29726);

(statearr_29774[(8)] = inst_29727);

(statearr_29774[(10)] = inst_29742);

return statearr_29774;
})();
var statearr_29775_29799 = state_29762__$1;
(statearr_29775_29799[(2)] = null);

(statearr_29775_29799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (9))){
var inst_29726 = (state_29762[(7)]);
var inst_29740 = cljs.core.vec.call(null,inst_29726);
var state_29762__$1 = state_29762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29762__$1,(11),out,inst_29740);
} else {
if((state_val_29763 === (5))){
var inst_29726 = (state_29762[(7)]);
var inst_29730 = (state_29762[(9)]);
var inst_29727 = (state_29762[(8)]);
var inst_29735 = (state_29762[(11)]);
var inst_29734 = (inst_29726[inst_29727] = inst_29730);
var inst_29735__$1 = (inst_29727 + (1));
var inst_29736 = (inst_29735__$1 < n);
var state_29762__$1 = (function (){var statearr_29776 = state_29762;
(statearr_29776[(12)] = inst_29734);

(statearr_29776[(11)] = inst_29735__$1);

return statearr_29776;
})();
if(cljs.core.truth_(inst_29736)){
var statearr_29777_29800 = state_29762__$1;
(statearr_29777_29800[(1)] = (8));

} else {
var statearr_29778_29801 = state_29762__$1;
(statearr_29778_29801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (14))){
var inst_29755 = (state_29762[(2)]);
var inst_29756 = cljs.core.async.close_BANG_.call(null,out);
var state_29762__$1 = (function (){var statearr_29780 = state_29762;
(statearr_29780[(13)] = inst_29755);

return statearr_29780;
})();
var statearr_29781_29802 = state_29762__$1;
(statearr_29781_29802[(2)] = inst_29756);

(statearr_29781_29802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (10))){
var inst_29746 = (state_29762[(2)]);
var state_29762__$1 = state_29762;
var statearr_29782_29803 = state_29762__$1;
(statearr_29782_29803[(2)] = inst_29746);

(statearr_29782_29803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29763 === (8))){
var inst_29726 = (state_29762[(7)]);
var inst_29735 = (state_29762[(11)]);
var tmp29779 = inst_29726;
var inst_29726__$1 = tmp29779;
var inst_29727 = inst_29735;
var state_29762__$1 = (function (){var statearr_29783 = state_29762;
(statearr_29783[(7)] = inst_29726__$1);

(statearr_29783[(8)] = inst_29727);

return statearr_29783;
})();
var statearr_29784_29804 = state_29762__$1;
(statearr_29784_29804[(2)] = null);

(statearr_29784_29804[(1)] = (2));


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
});})(c__27974__auto___29790,out))
;
return ((function (switch__27884__auto__,c__27974__auto___29790,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_29785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29785[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_29785[(1)] = (1));

return statearr_29785;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_29762){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_29762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29786){if((e29786 instanceof Object)){
var ex__27888__auto__ = e29786;
var statearr_29787_29805 = state_29762;
(statearr_29787_29805[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29806 = state_29762;
state_29762 = G__29806;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_29762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_29762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___29790,out))
})();
var state__27976__auto__ = (function (){var statearr_29788 = f__27975__auto__.call(null);
(statearr_29788[(6)] = c__27974__auto___29790);

return statearr_29788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___29790,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29808 = arguments.length;
switch (G__29808) {
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
var c__27974__auto___29878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___29878,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___29878,out){
return (function (state_29850){
var state_val_29851 = (state_29850[(1)]);
if((state_val_29851 === (7))){
var inst_29846 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
var statearr_29852_29879 = state_29850__$1;
(statearr_29852_29879[(2)] = inst_29846);

(statearr_29852_29879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (1))){
var inst_29809 = [];
var inst_29810 = inst_29809;
var inst_29811 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29850__$1 = (function (){var statearr_29853 = state_29850;
(statearr_29853[(7)] = inst_29810);

(statearr_29853[(8)] = inst_29811);

return statearr_29853;
})();
var statearr_29854_29880 = state_29850__$1;
(statearr_29854_29880[(2)] = null);

(statearr_29854_29880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (4))){
var inst_29814 = (state_29850[(9)]);
var inst_29814__$1 = (state_29850[(2)]);
var inst_29815 = (inst_29814__$1 == null);
var inst_29816 = cljs.core.not.call(null,inst_29815);
var state_29850__$1 = (function (){var statearr_29855 = state_29850;
(statearr_29855[(9)] = inst_29814__$1);

return statearr_29855;
})();
if(inst_29816){
var statearr_29856_29881 = state_29850__$1;
(statearr_29856_29881[(1)] = (5));

} else {
var statearr_29857_29882 = state_29850__$1;
(statearr_29857_29882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (15))){
var inst_29840 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
var statearr_29858_29883 = state_29850__$1;
(statearr_29858_29883[(2)] = inst_29840);

(statearr_29858_29883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (13))){
var state_29850__$1 = state_29850;
var statearr_29859_29884 = state_29850__$1;
(statearr_29859_29884[(2)] = null);

(statearr_29859_29884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (6))){
var inst_29810 = (state_29850[(7)]);
var inst_29835 = inst_29810.length;
var inst_29836 = (inst_29835 > (0));
var state_29850__$1 = state_29850;
if(cljs.core.truth_(inst_29836)){
var statearr_29860_29885 = state_29850__$1;
(statearr_29860_29885[(1)] = (12));

} else {
var statearr_29861_29886 = state_29850__$1;
(statearr_29861_29886[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (3))){
var inst_29848 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29850__$1,inst_29848);
} else {
if((state_val_29851 === (12))){
var inst_29810 = (state_29850[(7)]);
var inst_29838 = cljs.core.vec.call(null,inst_29810);
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29850__$1,(15),out,inst_29838);
} else {
if((state_val_29851 === (2))){
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29850__$1,(4),ch);
} else {
if((state_val_29851 === (11))){
var inst_29818 = (state_29850[(10)]);
var inst_29814 = (state_29850[(9)]);
var inst_29828 = (state_29850[(2)]);
var inst_29829 = [];
var inst_29830 = inst_29829.push(inst_29814);
var inst_29810 = inst_29829;
var inst_29811 = inst_29818;
var state_29850__$1 = (function (){var statearr_29862 = state_29850;
(statearr_29862[(7)] = inst_29810);

(statearr_29862[(11)] = inst_29828);

(statearr_29862[(8)] = inst_29811);

(statearr_29862[(12)] = inst_29830);

return statearr_29862;
})();
var statearr_29863_29887 = state_29850__$1;
(statearr_29863_29887[(2)] = null);

(statearr_29863_29887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (9))){
var inst_29810 = (state_29850[(7)]);
var inst_29826 = cljs.core.vec.call(null,inst_29810);
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29850__$1,(11),out,inst_29826);
} else {
if((state_val_29851 === (5))){
var inst_29818 = (state_29850[(10)]);
var inst_29814 = (state_29850[(9)]);
var inst_29811 = (state_29850[(8)]);
var inst_29818__$1 = f.call(null,inst_29814);
var inst_29819 = cljs.core._EQ_.call(null,inst_29818__$1,inst_29811);
var inst_29820 = cljs.core.keyword_identical_QMARK_.call(null,inst_29811,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29821 = ((inst_29819) || (inst_29820));
var state_29850__$1 = (function (){var statearr_29864 = state_29850;
(statearr_29864[(10)] = inst_29818__$1);

return statearr_29864;
})();
if(cljs.core.truth_(inst_29821)){
var statearr_29865_29888 = state_29850__$1;
(statearr_29865_29888[(1)] = (8));

} else {
var statearr_29866_29889 = state_29850__$1;
(statearr_29866_29889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (14))){
var inst_29843 = (state_29850[(2)]);
var inst_29844 = cljs.core.async.close_BANG_.call(null,out);
var state_29850__$1 = (function (){var statearr_29868 = state_29850;
(statearr_29868[(13)] = inst_29843);

return statearr_29868;
})();
var statearr_29869_29890 = state_29850__$1;
(statearr_29869_29890[(2)] = inst_29844);

(statearr_29869_29890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (10))){
var inst_29833 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
var statearr_29870_29891 = state_29850__$1;
(statearr_29870_29891[(2)] = inst_29833);

(statearr_29870_29891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (8))){
var inst_29810 = (state_29850[(7)]);
var inst_29818 = (state_29850[(10)]);
var inst_29814 = (state_29850[(9)]);
var inst_29823 = inst_29810.push(inst_29814);
var tmp29867 = inst_29810;
var inst_29810__$1 = tmp29867;
var inst_29811 = inst_29818;
var state_29850__$1 = (function (){var statearr_29871 = state_29850;
(statearr_29871[(14)] = inst_29823);

(statearr_29871[(7)] = inst_29810__$1);

(statearr_29871[(8)] = inst_29811);

return statearr_29871;
})();
var statearr_29872_29892 = state_29850__$1;
(statearr_29872_29892[(2)] = null);

(statearr_29872_29892[(1)] = (2));


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
});})(c__27974__auto___29878,out))
;
return ((function (switch__27884__auto__,c__27974__auto___29878,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_29873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29873[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_29873[(1)] = (1));

return statearr_29873;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_29850){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_29850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e29874){if((e29874 instanceof Object)){
var ex__27888__auto__ = e29874;
var statearr_29875_29893 = state_29850;
(statearr_29875_29893[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29894 = state_29850;
state_29850 = G__29894;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_29850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_29850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___29878,out))
})();
var state__27976__auto__ = (function (){var statearr_29876 = f__27975__auto__.call(null);
(statearr_29876[(6)] = c__27974__auto___29878);

return statearr_29876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___29878,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525376046490

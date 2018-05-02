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
var G__27024 = arguments.length;
switch (G__27024) {
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
if(typeof cljs.core.async.t_cljs$core$async27025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27025 = (function (f,blockable,meta27026){
this.f = f;
this.blockable = blockable;
this.meta27026 = meta27026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27027,meta27026__$1){
var self__ = this;
var _27027__$1 = this;
return (new cljs.core.async.t_cljs$core$async27025(self__.f,self__.blockable,meta27026__$1));
});

cljs.core.async.t_cljs$core$async27025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27027){
var self__ = this;
var _27027__$1 = this;
return self__.meta27026;
});

cljs.core.async.t_cljs$core$async27025.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27026","meta27026",-673541191,null)], null);
});

cljs.core.async.t_cljs$core$async27025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27025";

cljs.core.async.t_cljs$core$async27025.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27025");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27025.
 */
cljs.core.async.__GT_t_cljs$core$async27025 = (function cljs$core$async$__GT_t_cljs$core$async27025(f__$1,blockable__$1,meta27026){
return (new cljs.core.async.t_cljs$core$async27025(f__$1,blockable__$1,meta27026));
});

}

return (new cljs.core.async.t_cljs$core$async27025(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27031 = arguments.length;
switch (G__27031) {
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
var G__27034 = arguments.length;
switch (G__27034) {
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
var G__27037 = arguments.length;
switch (G__27037) {
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
var val_27039 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27039);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27039,ret){
return (function (){
return fn1.call(null,val_27039);
});})(val_27039,ret))
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
var G__27041 = arguments.length;
switch (G__27041) {
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
var n__4376__auto___27043 = n;
var x_27044 = (0);
while(true){
if((x_27044 < n__4376__auto___27043)){
(a[x_27044] = (0));

var G__27045 = (x_27044 + (1));
x_27044 = G__27045;
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

var G__27046 = (i + (1));
i = G__27046;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27047 = (function (flag,meta27048){
this.flag = flag;
this.meta27048 = meta27048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27049,meta27048__$1){
var self__ = this;
var _27049__$1 = this;
return (new cljs.core.async.t_cljs$core$async27047(self__.flag,meta27048__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27049){
var self__ = this;
var _27049__$1 = this;
return self__.meta27048;
});})(flag))
;

cljs.core.async.t_cljs$core$async27047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27047.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27048","meta27048",-1402052084,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27047";

cljs.core.async.t_cljs$core$async27047.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27047");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27047.
 */
cljs.core.async.__GT_t_cljs$core$async27047 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27047(flag__$1,meta27048){
return (new cljs.core.async.t_cljs$core$async27047(flag__$1,meta27048));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27047(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27050 = (function (flag,cb,meta27051){
this.flag = flag;
this.cb = cb;
this.meta27051 = meta27051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27052,meta27051__$1){
var self__ = this;
var _27052__$1 = this;
return (new cljs.core.async.t_cljs$core$async27050(self__.flag,self__.cb,meta27051__$1));
});

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27052){
var self__ = this;
var _27052__$1 = this;
return self__.meta27051;
});

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27051","meta27051",1984974580,null)], null);
});

cljs.core.async.t_cljs$core$async27050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27050";

cljs.core.async.t_cljs$core$async27050.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27050");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27050.
 */
cljs.core.async.__GT_t_cljs$core$async27050 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27050(flag__$1,cb__$1,meta27051){
return (new cljs.core.async.t_cljs$core$async27050(flag__$1,cb__$1,meta27051));
});

}

return (new cljs.core.async.t_cljs$core$async27050(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27053_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27053_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27054_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27054_SHARP_,port], null));
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
var G__27055 = (i + (1));
i = G__27055;
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
var len__4499__auto___27061 = arguments.length;
var i__4500__auto___27062 = (0);
while(true){
if((i__4500__auto___27062 < len__4499__auto___27061)){
args__4502__auto__.push((arguments[i__4500__auto___27062]));

var G__27063 = (i__4500__auto___27062 + (1));
i__4500__auto___27062 = G__27063;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27058){
var map__27059 = p__27058;
var map__27059__$1 = ((((!((map__27059 == null)))?(((((map__27059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27059):map__27059);
var opts = map__27059__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27056){
var G__27057 = cljs.core.first.call(null,seq27056);
var seq27056__$1 = cljs.core.next.call(null,seq27056);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27057,seq27056__$1);
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
var G__27065 = arguments.length;
switch (G__27065) {
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
var c__26964__auto___27111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___27111){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___27111){
return (function (state_27089){
var state_val_27090 = (state_27089[(1)]);
if((state_val_27090 === (7))){
var inst_27085 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27091_27112 = state_27089__$1;
(statearr_27091_27112[(2)] = inst_27085);

(statearr_27091_27112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (1))){
var state_27089__$1 = state_27089;
var statearr_27092_27113 = state_27089__$1;
(statearr_27092_27113[(2)] = null);

(statearr_27092_27113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (4))){
var inst_27068 = (state_27089[(7)]);
var inst_27068__$1 = (state_27089[(2)]);
var inst_27069 = (inst_27068__$1 == null);
var state_27089__$1 = (function (){var statearr_27093 = state_27089;
(statearr_27093[(7)] = inst_27068__$1);

return statearr_27093;
})();
if(cljs.core.truth_(inst_27069)){
var statearr_27094_27114 = state_27089__$1;
(statearr_27094_27114[(1)] = (5));

} else {
var statearr_27095_27115 = state_27089__$1;
(statearr_27095_27115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (13))){
var state_27089__$1 = state_27089;
var statearr_27096_27116 = state_27089__$1;
(statearr_27096_27116[(2)] = null);

(statearr_27096_27116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (6))){
var inst_27068 = (state_27089[(7)]);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27089__$1,(11),to,inst_27068);
} else {
if((state_val_27090 === (3))){
var inst_27087 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27089__$1,inst_27087);
} else {
if((state_val_27090 === (12))){
var state_27089__$1 = state_27089;
var statearr_27097_27117 = state_27089__$1;
(statearr_27097_27117[(2)] = null);

(statearr_27097_27117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (2))){
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27089__$1,(4),from);
} else {
if((state_val_27090 === (11))){
var inst_27078 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
if(cljs.core.truth_(inst_27078)){
var statearr_27098_27118 = state_27089__$1;
(statearr_27098_27118[(1)] = (12));

} else {
var statearr_27099_27119 = state_27089__$1;
(statearr_27099_27119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (9))){
var state_27089__$1 = state_27089;
var statearr_27100_27120 = state_27089__$1;
(statearr_27100_27120[(2)] = null);

(statearr_27100_27120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (5))){
var state_27089__$1 = state_27089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27101_27121 = state_27089__$1;
(statearr_27101_27121[(1)] = (8));

} else {
var statearr_27102_27122 = state_27089__$1;
(statearr_27102_27122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (14))){
var inst_27083 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27103_27123 = state_27089__$1;
(statearr_27103_27123[(2)] = inst_27083);

(statearr_27103_27123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (10))){
var inst_27075 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27104_27124 = state_27089__$1;
(statearr_27104_27124[(2)] = inst_27075);

(statearr_27104_27124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (8))){
var inst_27072 = cljs.core.async.close_BANG_.call(null,to);
var state_27089__$1 = state_27089;
var statearr_27105_27125 = state_27089__$1;
(statearr_27105_27125[(2)] = inst_27072);

(statearr_27105_27125[(1)] = (10));


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
});})(c__26964__auto___27111))
;
return ((function (switch__26874__auto__,c__26964__auto___27111){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_27106 = [null,null,null,null,null,null,null,null];
(statearr_27106[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_27106[(1)] = (1));

return statearr_27106;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_27089){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27107){if((e27107 instanceof Object)){
var ex__26878__auto__ = e27107;
var statearr_27108_27126 = state_27089;
(statearr_27108_27126[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27127 = state_27089;
state_27089 = G__27127;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_27089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_27089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___27111))
})();
var state__26966__auto__ = (function (){var statearr_27109 = f__26965__auto__.call(null);
(statearr_27109[(6)] = c__26964__auto___27111);

return statearr_27109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___27111))
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
return (function (p__27128){
var vec__27129 = p__27128;
var v = cljs.core.nth.call(null,vec__27129,(0),null);
var p = cljs.core.nth.call(null,vec__27129,(1),null);
var job = vec__27129;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26964__auto___27300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___27300,res,vec__27129,v,p,job,jobs,results){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___27300,res,vec__27129,v,p,job,jobs,results){
return (function (state_27136){
var state_val_27137 = (state_27136[(1)]);
if((state_val_27137 === (1))){
var state_27136__$1 = state_27136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27136__$1,(2),res,v);
} else {
if((state_val_27137 === (2))){
var inst_27133 = (state_27136[(2)]);
var inst_27134 = cljs.core.async.close_BANG_.call(null,res);
var state_27136__$1 = (function (){var statearr_27138 = state_27136;
(statearr_27138[(7)] = inst_27133);

return statearr_27138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27136__$1,inst_27134);
} else {
return null;
}
}
});})(c__26964__auto___27300,res,vec__27129,v,p,job,jobs,results))
;
return ((function (switch__26874__auto__,c__26964__auto___27300,res,vec__27129,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0 = (function (){
var statearr_27139 = [null,null,null,null,null,null,null,null];
(statearr_27139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__);

(statearr_27139[(1)] = (1));

return statearr_27139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1 = (function (state_27136){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27140){if((e27140 instanceof Object)){
var ex__26878__auto__ = e27140;
var statearr_27141_27301 = state_27136;
(statearr_27141_27301[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27302 = state_27136;
state_27136 = G__27302;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = function(state_27136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1.call(this,state_27136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___27300,res,vec__27129,v,p,job,jobs,results))
})();
var state__26966__auto__ = (function (){var statearr_27142 = f__26965__auto__.call(null);
(statearr_27142[(6)] = c__26964__auto___27300);

return statearr_27142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___27300,res,vec__27129,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27143){
var vec__27144 = p__27143;
var v = cljs.core.nth.call(null,vec__27144,(0),null);
var p = cljs.core.nth.call(null,vec__27144,(1),null);
var job = vec__27144;
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
var n__4376__auto___27303 = n;
var __27304 = (0);
while(true){
if((__27304 < n__4376__auto___27303)){
var G__27147_27305 = type;
var G__27147_27306__$1 = (((G__27147_27305 instanceof cljs.core.Keyword))?G__27147_27305.fqn:null);
switch (G__27147_27306__$1) {
case "compute":
var c__26964__auto___27308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27304,c__26964__auto___27308,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (__27304,c__26964__auto___27308,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async){
return (function (state_27160){
var state_val_27161 = (state_27160[(1)]);
if((state_val_27161 === (1))){
var state_27160__$1 = state_27160;
var statearr_27162_27309 = state_27160__$1;
(statearr_27162_27309[(2)] = null);

(statearr_27162_27309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (2))){
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27160__$1,(4),jobs);
} else {
if((state_val_27161 === (3))){
var inst_27158 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27160__$1,inst_27158);
} else {
if((state_val_27161 === (4))){
var inst_27150 = (state_27160[(2)]);
var inst_27151 = process.call(null,inst_27150);
var state_27160__$1 = state_27160;
if(cljs.core.truth_(inst_27151)){
var statearr_27163_27310 = state_27160__$1;
(statearr_27163_27310[(1)] = (5));

} else {
var statearr_27164_27311 = state_27160__$1;
(statearr_27164_27311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (5))){
var state_27160__$1 = state_27160;
var statearr_27165_27312 = state_27160__$1;
(statearr_27165_27312[(2)] = null);

(statearr_27165_27312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (6))){
var state_27160__$1 = state_27160;
var statearr_27166_27313 = state_27160__$1;
(statearr_27166_27313[(2)] = null);

(statearr_27166_27313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (7))){
var inst_27156 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27167_27314 = state_27160__$1;
(statearr_27167_27314[(2)] = inst_27156);

(statearr_27167_27314[(1)] = (3));


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
});})(__27304,c__26964__auto___27308,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async))
;
return ((function (__27304,switch__26874__auto__,c__26964__auto___27308,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0 = (function (){
var statearr_27168 = [null,null,null,null,null,null,null];
(statearr_27168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__);

(statearr_27168[(1)] = (1));

return statearr_27168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1 = (function (state_27160){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27169){if((e27169 instanceof Object)){
var ex__26878__auto__ = e27169;
var statearr_27170_27315 = state_27160;
(statearr_27170_27315[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27316 = state_27160;
state_27160 = G__27316;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = function(state_27160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1.call(this,state_27160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__;
})()
;})(__27304,switch__26874__auto__,c__26964__auto___27308,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async))
})();
var state__26966__auto__ = (function (){var statearr_27171 = f__26965__auto__.call(null);
(statearr_27171[(6)] = c__26964__auto___27308);

return statearr_27171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(__27304,c__26964__auto___27308,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async))
);


break;
case "async":
var c__26964__auto___27317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27304,c__26964__auto___27317,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (__27304,c__26964__auto___27317,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async){
return (function (state_27184){
var state_val_27185 = (state_27184[(1)]);
if((state_val_27185 === (1))){
var state_27184__$1 = state_27184;
var statearr_27186_27318 = state_27184__$1;
(statearr_27186_27318[(2)] = null);

(statearr_27186_27318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (2))){
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27184__$1,(4),jobs);
} else {
if((state_val_27185 === (3))){
var inst_27182 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27184__$1,inst_27182);
} else {
if((state_val_27185 === (4))){
var inst_27174 = (state_27184[(2)]);
var inst_27175 = async.call(null,inst_27174);
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27175)){
var statearr_27187_27319 = state_27184__$1;
(statearr_27187_27319[(1)] = (5));

} else {
var statearr_27188_27320 = state_27184__$1;
(statearr_27188_27320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (5))){
var state_27184__$1 = state_27184;
var statearr_27189_27321 = state_27184__$1;
(statearr_27189_27321[(2)] = null);

(statearr_27189_27321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (6))){
var state_27184__$1 = state_27184;
var statearr_27190_27322 = state_27184__$1;
(statearr_27190_27322[(2)] = null);

(statearr_27190_27322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (7))){
var inst_27180 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27191_27323 = state_27184__$1;
(statearr_27191_27323[(2)] = inst_27180);

(statearr_27191_27323[(1)] = (3));


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
});})(__27304,c__26964__auto___27317,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async))
;
return ((function (__27304,switch__26874__auto__,c__26964__auto___27317,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0 = (function (){
var statearr_27192 = [null,null,null,null,null,null,null];
(statearr_27192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__);

(statearr_27192[(1)] = (1));

return statearr_27192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1 = (function (state_27184){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27193){if((e27193 instanceof Object)){
var ex__26878__auto__ = e27193;
var statearr_27194_27324 = state_27184;
(statearr_27194_27324[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27325 = state_27184;
state_27184 = G__27325;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = function(state_27184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1.call(this,state_27184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__;
})()
;})(__27304,switch__26874__auto__,c__26964__auto___27317,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async))
})();
var state__26966__auto__ = (function (){var statearr_27195 = f__26965__auto__.call(null);
(statearr_27195[(6)] = c__26964__auto___27317);

return statearr_27195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(__27304,c__26964__auto___27317,G__27147_27305,G__27147_27306__$1,n__4376__auto___27303,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27147_27306__$1)].join('')));

}

var G__27326 = (__27304 + (1));
__27304 = G__27326;
continue;
} else {
}
break;
}

var c__26964__auto___27327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___27327,jobs,results,process,async){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___27327,jobs,results,process,async){
return (function (state_27217){
var state_val_27218 = (state_27217[(1)]);
if((state_val_27218 === (1))){
var state_27217__$1 = state_27217;
var statearr_27219_27328 = state_27217__$1;
(statearr_27219_27328[(2)] = null);

(statearr_27219_27328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (2))){
var state_27217__$1 = state_27217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27217__$1,(4),from);
} else {
if((state_val_27218 === (3))){
var inst_27215 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27217__$1,inst_27215);
} else {
if((state_val_27218 === (4))){
var inst_27198 = (state_27217[(7)]);
var inst_27198__$1 = (state_27217[(2)]);
var inst_27199 = (inst_27198__$1 == null);
var state_27217__$1 = (function (){var statearr_27220 = state_27217;
(statearr_27220[(7)] = inst_27198__$1);

return statearr_27220;
})();
if(cljs.core.truth_(inst_27199)){
var statearr_27221_27329 = state_27217__$1;
(statearr_27221_27329[(1)] = (5));

} else {
var statearr_27222_27330 = state_27217__$1;
(statearr_27222_27330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (5))){
var inst_27201 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27217__$1 = state_27217;
var statearr_27223_27331 = state_27217__$1;
(statearr_27223_27331[(2)] = inst_27201);

(statearr_27223_27331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (6))){
var inst_27203 = (state_27217[(8)]);
var inst_27198 = (state_27217[(7)]);
var inst_27203__$1 = cljs.core.async.chan.call(null,(1));
var inst_27204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27205 = [inst_27198,inst_27203__$1];
var inst_27206 = (new cljs.core.PersistentVector(null,2,(5),inst_27204,inst_27205,null));
var state_27217__$1 = (function (){var statearr_27224 = state_27217;
(statearr_27224[(8)] = inst_27203__$1);

return statearr_27224;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27217__$1,(8),jobs,inst_27206);
} else {
if((state_val_27218 === (7))){
var inst_27213 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
var statearr_27225_27332 = state_27217__$1;
(statearr_27225_27332[(2)] = inst_27213);

(statearr_27225_27332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27218 === (8))){
var inst_27203 = (state_27217[(8)]);
var inst_27208 = (state_27217[(2)]);
var state_27217__$1 = (function (){var statearr_27226 = state_27217;
(statearr_27226[(9)] = inst_27208);

return statearr_27226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27217__$1,(9),results,inst_27203);
} else {
if((state_val_27218 === (9))){
var inst_27210 = (state_27217[(2)]);
var state_27217__$1 = (function (){var statearr_27227 = state_27217;
(statearr_27227[(10)] = inst_27210);

return statearr_27227;
})();
var statearr_27228_27333 = state_27217__$1;
(statearr_27228_27333[(2)] = null);

(statearr_27228_27333[(1)] = (2));


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
});})(c__26964__auto___27327,jobs,results,process,async))
;
return ((function (switch__26874__auto__,c__26964__auto___27327,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0 = (function (){
var statearr_27229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__);

(statearr_27229[(1)] = (1));

return statearr_27229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1 = (function (state_27217){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27230){if((e27230 instanceof Object)){
var ex__26878__auto__ = e27230;
var statearr_27231_27334 = state_27217;
(statearr_27231_27334[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27335 = state_27217;
state_27217 = G__27335;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = function(state_27217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1.call(this,state_27217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___27327,jobs,results,process,async))
})();
var state__26966__auto__ = (function (){var statearr_27232 = f__26965__auto__.call(null);
(statearr_27232[(6)] = c__26964__auto___27327);

return statearr_27232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___27327,jobs,results,process,async))
);


var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__,jobs,results,process,async){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__,jobs,results,process,async){
return (function (state_27270){
var state_val_27271 = (state_27270[(1)]);
if((state_val_27271 === (7))){
var inst_27266 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27272_27336 = state_27270__$1;
(statearr_27272_27336[(2)] = inst_27266);

(statearr_27272_27336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (20))){
var state_27270__$1 = state_27270;
var statearr_27273_27337 = state_27270__$1;
(statearr_27273_27337[(2)] = null);

(statearr_27273_27337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (1))){
var state_27270__$1 = state_27270;
var statearr_27274_27338 = state_27270__$1;
(statearr_27274_27338[(2)] = null);

(statearr_27274_27338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (4))){
var inst_27235 = (state_27270[(7)]);
var inst_27235__$1 = (state_27270[(2)]);
var inst_27236 = (inst_27235__$1 == null);
var state_27270__$1 = (function (){var statearr_27275 = state_27270;
(statearr_27275[(7)] = inst_27235__$1);

return statearr_27275;
})();
if(cljs.core.truth_(inst_27236)){
var statearr_27276_27339 = state_27270__$1;
(statearr_27276_27339[(1)] = (5));

} else {
var statearr_27277_27340 = state_27270__$1;
(statearr_27277_27340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (15))){
var inst_27248 = (state_27270[(8)]);
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27270__$1,(18),to,inst_27248);
} else {
if((state_val_27271 === (21))){
var inst_27261 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27278_27341 = state_27270__$1;
(statearr_27278_27341[(2)] = inst_27261);

(statearr_27278_27341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (13))){
var inst_27263 = (state_27270[(2)]);
var state_27270__$1 = (function (){var statearr_27279 = state_27270;
(statearr_27279[(9)] = inst_27263);

return statearr_27279;
})();
var statearr_27280_27342 = state_27270__$1;
(statearr_27280_27342[(2)] = null);

(statearr_27280_27342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (6))){
var inst_27235 = (state_27270[(7)]);
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27270__$1,(11),inst_27235);
} else {
if((state_val_27271 === (17))){
var inst_27256 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
if(cljs.core.truth_(inst_27256)){
var statearr_27281_27343 = state_27270__$1;
(statearr_27281_27343[(1)] = (19));

} else {
var statearr_27282_27344 = state_27270__$1;
(statearr_27282_27344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (3))){
var inst_27268 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27270__$1,inst_27268);
} else {
if((state_val_27271 === (12))){
var inst_27245 = (state_27270[(10)]);
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27270__$1,(14),inst_27245);
} else {
if((state_val_27271 === (2))){
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27270__$1,(4),results);
} else {
if((state_val_27271 === (19))){
var state_27270__$1 = state_27270;
var statearr_27283_27345 = state_27270__$1;
(statearr_27283_27345[(2)] = null);

(statearr_27283_27345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (11))){
var inst_27245 = (state_27270[(2)]);
var state_27270__$1 = (function (){var statearr_27284 = state_27270;
(statearr_27284[(10)] = inst_27245);

return statearr_27284;
})();
var statearr_27285_27346 = state_27270__$1;
(statearr_27285_27346[(2)] = null);

(statearr_27285_27346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (9))){
var state_27270__$1 = state_27270;
var statearr_27286_27347 = state_27270__$1;
(statearr_27286_27347[(2)] = null);

(statearr_27286_27347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (5))){
var state_27270__$1 = state_27270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27287_27348 = state_27270__$1;
(statearr_27287_27348[(1)] = (8));

} else {
var statearr_27288_27349 = state_27270__$1;
(statearr_27288_27349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (14))){
var inst_27248 = (state_27270[(8)]);
var inst_27250 = (state_27270[(11)]);
var inst_27248__$1 = (state_27270[(2)]);
var inst_27249 = (inst_27248__$1 == null);
var inst_27250__$1 = cljs.core.not.call(null,inst_27249);
var state_27270__$1 = (function (){var statearr_27289 = state_27270;
(statearr_27289[(8)] = inst_27248__$1);

(statearr_27289[(11)] = inst_27250__$1);

return statearr_27289;
})();
if(inst_27250__$1){
var statearr_27290_27350 = state_27270__$1;
(statearr_27290_27350[(1)] = (15));

} else {
var statearr_27291_27351 = state_27270__$1;
(statearr_27291_27351[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (16))){
var inst_27250 = (state_27270[(11)]);
var state_27270__$1 = state_27270;
var statearr_27292_27352 = state_27270__$1;
(statearr_27292_27352[(2)] = inst_27250);

(statearr_27292_27352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (10))){
var inst_27242 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27293_27353 = state_27270__$1;
(statearr_27293_27353[(2)] = inst_27242);

(statearr_27293_27353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (18))){
var inst_27253 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27294_27354 = state_27270__$1;
(statearr_27294_27354[(2)] = inst_27253);

(statearr_27294_27354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (8))){
var inst_27239 = cljs.core.async.close_BANG_.call(null,to);
var state_27270__$1 = state_27270;
var statearr_27295_27355 = state_27270__$1;
(statearr_27295_27355[(2)] = inst_27239);

(statearr_27295_27355[(1)] = (10));


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
});})(c__26964__auto__,jobs,results,process,async))
;
return ((function (switch__26874__auto__,c__26964__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0 = (function (){
var statearr_27296 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__);

(statearr_27296[(1)] = (1));

return statearr_27296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1 = (function (state_27270){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27297){if((e27297 instanceof Object)){
var ex__26878__auto__ = e27297;
var statearr_27298_27356 = state_27270;
(statearr_27298_27356[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27357 = state_27270;
state_27270 = G__27357;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__ = function(state_27270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1.call(this,state_27270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__,jobs,results,process,async))
})();
var state__26966__auto__ = (function (){var statearr_27299 = f__26965__auto__.call(null);
(statearr_27299[(6)] = c__26964__auto__);

return statearr_27299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__,jobs,results,process,async))
);

return c__26964__auto__;
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
var G__27359 = arguments.length;
switch (G__27359) {
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
var G__27362 = arguments.length;
switch (G__27362) {
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
var G__27365 = arguments.length;
switch (G__27365) {
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
var c__26964__auto___27414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___27414,tc,fc){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___27414,tc,fc){
return (function (state_27391){
var state_val_27392 = (state_27391[(1)]);
if((state_val_27392 === (7))){
var inst_27387 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
var statearr_27393_27415 = state_27391__$1;
(statearr_27393_27415[(2)] = inst_27387);

(statearr_27393_27415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (1))){
var state_27391__$1 = state_27391;
var statearr_27394_27416 = state_27391__$1;
(statearr_27394_27416[(2)] = null);

(statearr_27394_27416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (4))){
var inst_27368 = (state_27391[(7)]);
var inst_27368__$1 = (state_27391[(2)]);
var inst_27369 = (inst_27368__$1 == null);
var state_27391__$1 = (function (){var statearr_27395 = state_27391;
(statearr_27395[(7)] = inst_27368__$1);

return statearr_27395;
})();
if(cljs.core.truth_(inst_27369)){
var statearr_27396_27417 = state_27391__$1;
(statearr_27396_27417[(1)] = (5));

} else {
var statearr_27397_27418 = state_27391__$1;
(statearr_27397_27418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (13))){
var state_27391__$1 = state_27391;
var statearr_27398_27419 = state_27391__$1;
(statearr_27398_27419[(2)] = null);

(statearr_27398_27419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (6))){
var inst_27368 = (state_27391[(7)]);
var inst_27374 = p.call(null,inst_27368);
var state_27391__$1 = state_27391;
if(cljs.core.truth_(inst_27374)){
var statearr_27399_27420 = state_27391__$1;
(statearr_27399_27420[(1)] = (9));

} else {
var statearr_27400_27421 = state_27391__$1;
(statearr_27400_27421[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (3))){
var inst_27389 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27391__$1,inst_27389);
} else {
if((state_val_27392 === (12))){
var state_27391__$1 = state_27391;
var statearr_27401_27422 = state_27391__$1;
(statearr_27401_27422[(2)] = null);

(statearr_27401_27422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (2))){
var state_27391__$1 = state_27391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27391__$1,(4),ch);
} else {
if((state_val_27392 === (11))){
var inst_27368 = (state_27391[(7)]);
var inst_27378 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27391__$1,(8),inst_27378,inst_27368);
} else {
if((state_val_27392 === (9))){
var state_27391__$1 = state_27391;
var statearr_27402_27423 = state_27391__$1;
(statearr_27402_27423[(2)] = tc);

(statearr_27402_27423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (5))){
var inst_27371 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27372 = cljs.core.async.close_BANG_.call(null,fc);
var state_27391__$1 = (function (){var statearr_27403 = state_27391;
(statearr_27403[(8)] = inst_27371);

return statearr_27403;
})();
var statearr_27404_27424 = state_27391__$1;
(statearr_27404_27424[(2)] = inst_27372);

(statearr_27404_27424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (14))){
var inst_27385 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
var statearr_27405_27425 = state_27391__$1;
(statearr_27405_27425[(2)] = inst_27385);

(statearr_27405_27425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (10))){
var state_27391__$1 = state_27391;
var statearr_27406_27426 = state_27391__$1;
(statearr_27406_27426[(2)] = fc);

(statearr_27406_27426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (8))){
var inst_27380 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
if(cljs.core.truth_(inst_27380)){
var statearr_27407_27427 = state_27391__$1;
(statearr_27407_27427[(1)] = (12));

} else {
var statearr_27408_27428 = state_27391__$1;
(statearr_27408_27428[(1)] = (13));

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
});})(c__26964__auto___27414,tc,fc))
;
return ((function (switch__26874__auto__,c__26964__auto___27414,tc,fc){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_27409 = [null,null,null,null,null,null,null,null,null];
(statearr_27409[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_27409[(1)] = (1));

return statearr_27409;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_27391){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27410){if((e27410 instanceof Object)){
var ex__26878__auto__ = e27410;
var statearr_27411_27429 = state_27391;
(statearr_27411_27429[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27430 = state_27391;
state_27391 = G__27430;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_27391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_27391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___27414,tc,fc))
})();
var state__26966__auto__ = (function (){var statearr_27412 = f__26965__auto__.call(null);
(statearr_27412[(6)] = c__26964__auto___27414);

return statearr_27412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___27414,tc,fc))
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
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__){
return (function (state_27451){
var state_val_27452 = (state_27451[(1)]);
if((state_val_27452 === (7))){
var inst_27447 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
var statearr_27453_27471 = state_27451__$1;
(statearr_27453_27471[(2)] = inst_27447);

(statearr_27453_27471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (1))){
var inst_27431 = init;
var state_27451__$1 = (function (){var statearr_27454 = state_27451;
(statearr_27454[(7)] = inst_27431);

return statearr_27454;
})();
var statearr_27455_27472 = state_27451__$1;
(statearr_27455_27472[(2)] = null);

(statearr_27455_27472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (4))){
var inst_27434 = (state_27451[(8)]);
var inst_27434__$1 = (state_27451[(2)]);
var inst_27435 = (inst_27434__$1 == null);
var state_27451__$1 = (function (){var statearr_27456 = state_27451;
(statearr_27456[(8)] = inst_27434__$1);

return statearr_27456;
})();
if(cljs.core.truth_(inst_27435)){
var statearr_27457_27473 = state_27451__$1;
(statearr_27457_27473[(1)] = (5));

} else {
var statearr_27458_27474 = state_27451__$1;
(statearr_27458_27474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (6))){
var inst_27438 = (state_27451[(9)]);
var inst_27434 = (state_27451[(8)]);
var inst_27431 = (state_27451[(7)]);
var inst_27438__$1 = f.call(null,inst_27431,inst_27434);
var inst_27439 = cljs.core.reduced_QMARK_.call(null,inst_27438__$1);
var state_27451__$1 = (function (){var statearr_27459 = state_27451;
(statearr_27459[(9)] = inst_27438__$1);

return statearr_27459;
})();
if(inst_27439){
var statearr_27460_27475 = state_27451__$1;
(statearr_27460_27475[(1)] = (8));

} else {
var statearr_27461_27476 = state_27451__$1;
(statearr_27461_27476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (3))){
var inst_27449 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27451__$1,inst_27449);
} else {
if((state_val_27452 === (2))){
var state_27451__$1 = state_27451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27451__$1,(4),ch);
} else {
if((state_val_27452 === (9))){
var inst_27438 = (state_27451[(9)]);
var inst_27431 = inst_27438;
var state_27451__$1 = (function (){var statearr_27462 = state_27451;
(statearr_27462[(7)] = inst_27431);

return statearr_27462;
})();
var statearr_27463_27477 = state_27451__$1;
(statearr_27463_27477[(2)] = null);

(statearr_27463_27477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (5))){
var inst_27431 = (state_27451[(7)]);
var state_27451__$1 = state_27451;
var statearr_27464_27478 = state_27451__$1;
(statearr_27464_27478[(2)] = inst_27431);

(statearr_27464_27478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (10))){
var inst_27445 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
var statearr_27465_27479 = state_27451__$1;
(statearr_27465_27479[(2)] = inst_27445);

(statearr_27465_27479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (8))){
var inst_27438 = (state_27451[(9)]);
var inst_27441 = cljs.core.deref.call(null,inst_27438);
var state_27451__$1 = state_27451;
var statearr_27466_27480 = state_27451__$1;
(statearr_27466_27480[(2)] = inst_27441);

(statearr_27466_27480[(1)] = (10));


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
});})(c__26964__auto__))
;
return ((function (switch__26874__auto__,c__26964__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26875__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26875__auto____0 = (function (){
var statearr_27467 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27467[(0)] = cljs$core$async$reduce_$_state_machine__26875__auto__);

(statearr_27467[(1)] = (1));

return statearr_27467;
});
var cljs$core$async$reduce_$_state_machine__26875__auto____1 = (function (state_27451){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27468){if((e27468 instanceof Object)){
var ex__26878__auto__ = e27468;
var statearr_27469_27481 = state_27451;
(statearr_27469_27481[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27482 = state_27451;
state_27451 = G__27482;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26875__auto__ = function(state_27451){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26875__auto____1.call(this,state_27451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26875__auto____0;
cljs$core$async$reduce_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26875__auto____1;
return cljs$core$async$reduce_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_27470 = f__26965__auto__.call(null);
(statearr_27470[(6)] = c__26964__auto__);

return statearr_27470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__,f__$1){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__,f__$1){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (1))){
var inst_27483 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(2),inst_27483);
} else {
if((state_val_27489 === (2))){
var inst_27485 = (state_27488[(2)]);
var inst_27486 = f__$1.call(null,inst_27485);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27488__$1,inst_27486);
} else {
return null;
}
}
});})(c__26964__auto__,f__$1))
;
return ((function (switch__26874__auto__,c__26964__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26875__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26875__auto____0 = (function (){
var statearr_27490 = [null,null,null,null,null,null,null];
(statearr_27490[(0)] = cljs$core$async$transduce_$_state_machine__26875__auto__);

(statearr_27490[(1)] = (1));

return statearr_27490;
});
var cljs$core$async$transduce_$_state_machine__26875__auto____1 = (function (state_27488){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27491){if((e27491 instanceof Object)){
var ex__26878__auto__ = e27491;
var statearr_27492_27494 = state_27488;
(statearr_27492_27494[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27495 = state_27488;
state_27488 = G__27495;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26875__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26875__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26875__auto____0;
cljs$core$async$transduce_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26875__auto____1;
return cljs$core$async$transduce_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__,f__$1))
})();
var state__26966__auto__ = (function (){var statearr_27493 = f__26965__auto__.call(null);
(statearr_27493[(6)] = c__26964__auto__);

return statearr_27493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__,f__$1))
);

return c__26964__auto__;
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
var G__27497 = arguments.length;
switch (G__27497) {
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
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__){
return (function (state_27522){
var state_val_27523 = (state_27522[(1)]);
if((state_val_27523 === (7))){
var inst_27504 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
var statearr_27524_27545 = state_27522__$1;
(statearr_27524_27545[(2)] = inst_27504);

(statearr_27524_27545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (1))){
var inst_27498 = cljs.core.seq.call(null,coll);
var inst_27499 = inst_27498;
var state_27522__$1 = (function (){var statearr_27525 = state_27522;
(statearr_27525[(7)] = inst_27499);

return statearr_27525;
})();
var statearr_27526_27546 = state_27522__$1;
(statearr_27526_27546[(2)] = null);

(statearr_27526_27546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (4))){
var inst_27499 = (state_27522[(7)]);
var inst_27502 = cljs.core.first.call(null,inst_27499);
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27522__$1,(7),ch,inst_27502);
} else {
if((state_val_27523 === (13))){
var inst_27516 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
var statearr_27527_27547 = state_27522__$1;
(statearr_27527_27547[(2)] = inst_27516);

(statearr_27527_27547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (6))){
var inst_27507 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
if(cljs.core.truth_(inst_27507)){
var statearr_27528_27548 = state_27522__$1;
(statearr_27528_27548[(1)] = (8));

} else {
var statearr_27529_27549 = state_27522__$1;
(statearr_27529_27549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (3))){
var inst_27520 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27522__$1,inst_27520);
} else {
if((state_val_27523 === (12))){
var state_27522__$1 = state_27522;
var statearr_27530_27550 = state_27522__$1;
(statearr_27530_27550[(2)] = null);

(statearr_27530_27550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (2))){
var inst_27499 = (state_27522[(7)]);
var state_27522__$1 = state_27522;
if(cljs.core.truth_(inst_27499)){
var statearr_27531_27551 = state_27522__$1;
(statearr_27531_27551[(1)] = (4));

} else {
var statearr_27532_27552 = state_27522__$1;
(statearr_27532_27552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (11))){
var inst_27513 = cljs.core.async.close_BANG_.call(null,ch);
var state_27522__$1 = state_27522;
var statearr_27533_27553 = state_27522__$1;
(statearr_27533_27553[(2)] = inst_27513);

(statearr_27533_27553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (9))){
var state_27522__$1 = state_27522;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27534_27554 = state_27522__$1;
(statearr_27534_27554[(1)] = (11));

} else {
var statearr_27535_27555 = state_27522__$1;
(statearr_27535_27555[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (5))){
var inst_27499 = (state_27522[(7)]);
var state_27522__$1 = state_27522;
var statearr_27536_27556 = state_27522__$1;
(statearr_27536_27556[(2)] = inst_27499);

(statearr_27536_27556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (10))){
var inst_27518 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
var statearr_27537_27557 = state_27522__$1;
(statearr_27537_27557[(2)] = inst_27518);

(statearr_27537_27557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (8))){
var inst_27499 = (state_27522[(7)]);
var inst_27509 = cljs.core.next.call(null,inst_27499);
var inst_27499__$1 = inst_27509;
var state_27522__$1 = (function (){var statearr_27538 = state_27522;
(statearr_27538[(7)] = inst_27499__$1);

return statearr_27538;
})();
var statearr_27539_27558 = state_27522__$1;
(statearr_27539_27558[(2)] = null);

(statearr_27539_27558[(1)] = (2));


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
});})(c__26964__auto__))
;
return ((function (switch__26874__auto__,c__26964__auto__){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_27540 = [null,null,null,null,null,null,null,null];
(statearr_27540[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_27540[(1)] = (1));

return statearr_27540;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_27522){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27541){if((e27541 instanceof Object)){
var ex__26878__auto__ = e27541;
var statearr_27542_27559 = state_27522;
(statearr_27542_27559[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27560 = state_27522;
state_27522 = G__27560;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_27522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_27522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_27543 = f__26965__auto__.call(null);
(statearr_27543[(6)] = c__26964__auto__);

return statearr_27543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async27561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27561 = (function (ch,cs,meta27562){
this.ch = ch;
this.cs = cs;
this.meta27562 = meta27562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27563,meta27562__$1){
var self__ = this;
var _27563__$1 = this;
return (new cljs.core.async.t_cljs$core$async27561(self__.ch,self__.cs,meta27562__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27563){
var self__ = this;
var _27563__$1 = this;
return self__.meta27562;
});})(cs))
;

cljs.core.async.t_cljs$core$async27561.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27561.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27561.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27561.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27561.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27561.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27562","meta27562",1322735315,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27561";

cljs.core.async.t_cljs$core$async27561.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27561");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27561.
 */
cljs.core.async.__GT_t_cljs$core$async27561 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27561(ch__$1,cs__$1,meta27562){
return (new cljs.core.async.t_cljs$core$async27561(ch__$1,cs__$1,meta27562));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27561(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26964__auto___27783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___27783,cs,m,dchan,dctr,done){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___27783,cs,m,dchan,dctr,done){
return (function (state_27698){
var state_val_27699 = (state_27698[(1)]);
if((state_val_27699 === (7))){
var inst_27694 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27700_27784 = state_27698__$1;
(statearr_27700_27784[(2)] = inst_27694);

(statearr_27700_27784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (20))){
var inst_27597 = (state_27698[(7)]);
var inst_27609 = cljs.core.first.call(null,inst_27597);
var inst_27610 = cljs.core.nth.call(null,inst_27609,(0),null);
var inst_27611 = cljs.core.nth.call(null,inst_27609,(1),null);
var state_27698__$1 = (function (){var statearr_27701 = state_27698;
(statearr_27701[(8)] = inst_27610);

return statearr_27701;
})();
if(cljs.core.truth_(inst_27611)){
var statearr_27702_27785 = state_27698__$1;
(statearr_27702_27785[(1)] = (22));

} else {
var statearr_27703_27786 = state_27698__$1;
(statearr_27703_27786[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (27))){
var inst_27646 = (state_27698[(9)]);
var inst_27639 = (state_27698[(10)]);
var inst_27566 = (state_27698[(11)]);
var inst_27641 = (state_27698[(12)]);
var inst_27646__$1 = cljs.core._nth.call(null,inst_27639,inst_27641);
var inst_27647 = cljs.core.async.put_BANG_.call(null,inst_27646__$1,inst_27566,done);
var state_27698__$1 = (function (){var statearr_27704 = state_27698;
(statearr_27704[(9)] = inst_27646__$1);

return statearr_27704;
})();
if(cljs.core.truth_(inst_27647)){
var statearr_27705_27787 = state_27698__$1;
(statearr_27705_27787[(1)] = (30));

} else {
var statearr_27706_27788 = state_27698__$1;
(statearr_27706_27788[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (1))){
var state_27698__$1 = state_27698;
var statearr_27707_27789 = state_27698__$1;
(statearr_27707_27789[(2)] = null);

(statearr_27707_27789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (24))){
var inst_27597 = (state_27698[(7)]);
var inst_27616 = (state_27698[(2)]);
var inst_27617 = cljs.core.next.call(null,inst_27597);
var inst_27575 = inst_27617;
var inst_27576 = null;
var inst_27577 = (0);
var inst_27578 = (0);
var state_27698__$1 = (function (){var statearr_27708 = state_27698;
(statearr_27708[(13)] = inst_27577);

(statearr_27708[(14)] = inst_27576);

(statearr_27708[(15)] = inst_27578);

(statearr_27708[(16)] = inst_27616);

(statearr_27708[(17)] = inst_27575);

return statearr_27708;
})();
var statearr_27709_27790 = state_27698__$1;
(statearr_27709_27790[(2)] = null);

(statearr_27709_27790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (39))){
var state_27698__$1 = state_27698;
var statearr_27713_27791 = state_27698__$1;
(statearr_27713_27791[(2)] = null);

(statearr_27713_27791[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (4))){
var inst_27566 = (state_27698[(11)]);
var inst_27566__$1 = (state_27698[(2)]);
var inst_27567 = (inst_27566__$1 == null);
var state_27698__$1 = (function (){var statearr_27714 = state_27698;
(statearr_27714[(11)] = inst_27566__$1);

return statearr_27714;
})();
if(cljs.core.truth_(inst_27567)){
var statearr_27715_27792 = state_27698__$1;
(statearr_27715_27792[(1)] = (5));

} else {
var statearr_27716_27793 = state_27698__$1;
(statearr_27716_27793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (15))){
var inst_27577 = (state_27698[(13)]);
var inst_27576 = (state_27698[(14)]);
var inst_27578 = (state_27698[(15)]);
var inst_27575 = (state_27698[(17)]);
var inst_27593 = (state_27698[(2)]);
var inst_27594 = (inst_27578 + (1));
var tmp27710 = inst_27577;
var tmp27711 = inst_27576;
var tmp27712 = inst_27575;
var inst_27575__$1 = tmp27712;
var inst_27576__$1 = tmp27711;
var inst_27577__$1 = tmp27710;
var inst_27578__$1 = inst_27594;
var state_27698__$1 = (function (){var statearr_27717 = state_27698;
(statearr_27717[(13)] = inst_27577__$1);

(statearr_27717[(18)] = inst_27593);

(statearr_27717[(14)] = inst_27576__$1);

(statearr_27717[(15)] = inst_27578__$1);

(statearr_27717[(17)] = inst_27575__$1);

return statearr_27717;
})();
var statearr_27718_27794 = state_27698__$1;
(statearr_27718_27794[(2)] = null);

(statearr_27718_27794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (21))){
var inst_27620 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27722_27795 = state_27698__$1;
(statearr_27722_27795[(2)] = inst_27620);

(statearr_27722_27795[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (31))){
var inst_27646 = (state_27698[(9)]);
var inst_27650 = done.call(null,null);
var inst_27651 = cljs.core.async.untap_STAR_.call(null,m,inst_27646);
var state_27698__$1 = (function (){var statearr_27723 = state_27698;
(statearr_27723[(19)] = inst_27650);

return statearr_27723;
})();
var statearr_27724_27796 = state_27698__$1;
(statearr_27724_27796[(2)] = inst_27651);

(statearr_27724_27796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (32))){
var inst_27639 = (state_27698[(10)]);
var inst_27640 = (state_27698[(20)]);
var inst_27641 = (state_27698[(12)]);
var inst_27638 = (state_27698[(21)]);
var inst_27653 = (state_27698[(2)]);
var inst_27654 = (inst_27641 + (1));
var tmp27719 = inst_27639;
var tmp27720 = inst_27640;
var tmp27721 = inst_27638;
var inst_27638__$1 = tmp27721;
var inst_27639__$1 = tmp27719;
var inst_27640__$1 = tmp27720;
var inst_27641__$1 = inst_27654;
var state_27698__$1 = (function (){var statearr_27725 = state_27698;
(statearr_27725[(10)] = inst_27639__$1);

(statearr_27725[(20)] = inst_27640__$1);

(statearr_27725[(22)] = inst_27653);

(statearr_27725[(12)] = inst_27641__$1);

(statearr_27725[(21)] = inst_27638__$1);

return statearr_27725;
})();
var statearr_27726_27797 = state_27698__$1;
(statearr_27726_27797[(2)] = null);

(statearr_27726_27797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (40))){
var inst_27666 = (state_27698[(23)]);
var inst_27670 = done.call(null,null);
var inst_27671 = cljs.core.async.untap_STAR_.call(null,m,inst_27666);
var state_27698__$1 = (function (){var statearr_27727 = state_27698;
(statearr_27727[(24)] = inst_27670);

return statearr_27727;
})();
var statearr_27728_27798 = state_27698__$1;
(statearr_27728_27798[(2)] = inst_27671);

(statearr_27728_27798[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (33))){
var inst_27657 = (state_27698[(25)]);
var inst_27659 = cljs.core.chunked_seq_QMARK_.call(null,inst_27657);
var state_27698__$1 = state_27698;
if(inst_27659){
var statearr_27729_27799 = state_27698__$1;
(statearr_27729_27799[(1)] = (36));

} else {
var statearr_27730_27800 = state_27698__$1;
(statearr_27730_27800[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (13))){
var inst_27587 = (state_27698[(26)]);
var inst_27590 = cljs.core.async.close_BANG_.call(null,inst_27587);
var state_27698__$1 = state_27698;
var statearr_27731_27801 = state_27698__$1;
(statearr_27731_27801[(2)] = inst_27590);

(statearr_27731_27801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (22))){
var inst_27610 = (state_27698[(8)]);
var inst_27613 = cljs.core.async.close_BANG_.call(null,inst_27610);
var state_27698__$1 = state_27698;
var statearr_27732_27802 = state_27698__$1;
(statearr_27732_27802[(2)] = inst_27613);

(statearr_27732_27802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (36))){
var inst_27657 = (state_27698[(25)]);
var inst_27661 = cljs.core.chunk_first.call(null,inst_27657);
var inst_27662 = cljs.core.chunk_rest.call(null,inst_27657);
var inst_27663 = cljs.core.count.call(null,inst_27661);
var inst_27638 = inst_27662;
var inst_27639 = inst_27661;
var inst_27640 = inst_27663;
var inst_27641 = (0);
var state_27698__$1 = (function (){var statearr_27733 = state_27698;
(statearr_27733[(10)] = inst_27639);

(statearr_27733[(20)] = inst_27640);

(statearr_27733[(12)] = inst_27641);

(statearr_27733[(21)] = inst_27638);

return statearr_27733;
})();
var statearr_27734_27803 = state_27698__$1;
(statearr_27734_27803[(2)] = null);

(statearr_27734_27803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (41))){
var inst_27657 = (state_27698[(25)]);
var inst_27673 = (state_27698[(2)]);
var inst_27674 = cljs.core.next.call(null,inst_27657);
var inst_27638 = inst_27674;
var inst_27639 = null;
var inst_27640 = (0);
var inst_27641 = (0);
var state_27698__$1 = (function (){var statearr_27735 = state_27698;
(statearr_27735[(10)] = inst_27639);

(statearr_27735[(20)] = inst_27640);

(statearr_27735[(27)] = inst_27673);

(statearr_27735[(12)] = inst_27641);

(statearr_27735[(21)] = inst_27638);

return statearr_27735;
})();
var statearr_27736_27804 = state_27698__$1;
(statearr_27736_27804[(2)] = null);

(statearr_27736_27804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (43))){
var state_27698__$1 = state_27698;
var statearr_27737_27805 = state_27698__$1;
(statearr_27737_27805[(2)] = null);

(statearr_27737_27805[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (29))){
var inst_27682 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27738_27806 = state_27698__$1;
(statearr_27738_27806[(2)] = inst_27682);

(statearr_27738_27806[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (44))){
var inst_27691 = (state_27698[(2)]);
var state_27698__$1 = (function (){var statearr_27739 = state_27698;
(statearr_27739[(28)] = inst_27691);

return statearr_27739;
})();
var statearr_27740_27807 = state_27698__$1;
(statearr_27740_27807[(2)] = null);

(statearr_27740_27807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (6))){
var inst_27630 = (state_27698[(29)]);
var inst_27629 = cljs.core.deref.call(null,cs);
var inst_27630__$1 = cljs.core.keys.call(null,inst_27629);
var inst_27631 = cljs.core.count.call(null,inst_27630__$1);
var inst_27632 = cljs.core.reset_BANG_.call(null,dctr,inst_27631);
var inst_27637 = cljs.core.seq.call(null,inst_27630__$1);
var inst_27638 = inst_27637;
var inst_27639 = null;
var inst_27640 = (0);
var inst_27641 = (0);
var state_27698__$1 = (function (){var statearr_27741 = state_27698;
(statearr_27741[(30)] = inst_27632);

(statearr_27741[(10)] = inst_27639);

(statearr_27741[(20)] = inst_27640);

(statearr_27741[(12)] = inst_27641);

(statearr_27741[(29)] = inst_27630__$1);

(statearr_27741[(21)] = inst_27638);

return statearr_27741;
})();
var statearr_27742_27808 = state_27698__$1;
(statearr_27742_27808[(2)] = null);

(statearr_27742_27808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (28))){
var inst_27657 = (state_27698[(25)]);
var inst_27638 = (state_27698[(21)]);
var inst_27657__$1 = cljs.core.seq.call(null,inst_27638);
var state_27698__$1 = (function (){var statearr_27743 = state_27698;
(statearr_27743[(25)] = inst_27657__$1);

return statearr_27743;
})();
if(inst_27657__$1){
var statearr_27744_27809 = state_27698__$1;
(statearr_27744_27809[(1)] = (33));

} else {
var statearr_27745_27810 = state_27698__$1;
(statearr_27745_27810[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (25))){
var inst_27640 = (state_27698[(20)]);
var inst_27641 = (state_27698[(12)]);
var inst_27643 = (inst_27641 < inst_27640);
var inst_27644 = inst_27643;
var state_27698__$1 = state_27698;
if(cljs.core.truth_(inst_27644)){
var statearr_27746_27811 = state_27698__$1;
(statearr_27746_27811[(1)] = (27));

} else {
var statearr_27747_27812 = state_27698__$1;
(statearr_27747_27812[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (34))){
var state_27698__$1 = state_27698;
var statearr_27748_27813 = state_27698__$1;
(statearr_27748_27813[(2)] = null);

(statearr_27748_27813[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (17))){
var state_27698__$1 = state_27698;
var statearr_27749_27814 = state_27698__$1;
(statearr_27749_27814[(2)] = null);

(statearr_27749_27814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (3))){
var inst_27696 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27698__$1,inst_27696);
} else {
if((state_val_27699 === (12))){
var inst_27625 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27750_27815 = state_27698__$1;
(statearr_27750_27815[(2)] = inst_27625);

(statearr_27750_27815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (2))){
var state_27698__$1 = state_27698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27698__$1,(4),ch);
} else {
if((state_val_27699 === (23))){
var state_27698__$1 = state_27698;
var statearr_27751_27816 = state_27698__$1;
(statearr_27751_27816[(2)] = null);

(statearr_27751_27816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (35))){
var inst_27680 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27752_27817 = state_27698__$1;
(statearr_27752_27817[(2)] = inst_27680);

(statearr_27752_27817[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (19))){
var inst_27597 = (state_27698[(7)]);
var inst_27601 = cljs.core.chunk_first.call(null,inst_27597);
var inst_27602 = cljs.core.chunk_rest.call(null,inst_27597);
var inst_27603 = cljs.core.count.call(null,inst_27601);
var inst_27575 = inst_27602;
var inst_27576 = inst_27601;
var inst_27577 = inst_27603;
var inst_27578 = (0);
var state_27698__$1 = (function (){var statearr_27753 = state_27698;
(statearr_27753[(13)] = inst_27577);

(statearr_27753[(14)] = inst_27576);

(statearr_27753[(15)] = inst_27578);

(statearr_27753[(17)] = inst_27575);

return statearr_27753;
})();
var statearr_27754_27818 = state_27698__$1;
(statearr_27754_27818[(2)] = null);

(statearr_27754_27818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (11))){
var inst_27597 = (state_27698[(7)]);
var inst_27575 = (state_27698[(17)]);
var inst_27597__$1 = cljs.core.seq.call(null,inst_27575);
var state_27698__$1 = (function (){var statearr_27755 = state_27698;
(statearr_27755[(7)] = inst_27597__$1);

return statearr_27755;
})();
if(inst_27597__$1){
var statearr_27756_27819 = state_27698__$1;
(statearr_27756_27819[(1)] = (16));

} else {
var statearr_27757_27820 = state_27698__$1;
(statearr_27757_27820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (9))){
var inst_27627 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27758_27821 = state_27698__$1;
(statearr_27758_27821[(2)] = inst_27627);

(statearr_27758_27821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (5))){
var inst_27573 = cljs.core.deref.call(null,cs);
var inst_27574 = cljs.core.seq.call(null,inst_27573);
var inst_27575 = inst_27574;
var inst_27576 = null;
var inst_27577 = (0);
var inst_27578 = (0);
var state_27698__$1 = (function (){var statearr_27759 = state_27698;
(statearr_27759[(13)] = inst_27577);

(statearr_27759[(14)] = inst_27576);

(statearr_27759[(15)] = inst_27578);

(statearr_27759[(17)] = inst_27575);

return statearr_27759;
})();
var statearr_27760_27822 = state_27698__$1;
(statearr_27760_27822[(2)] = null);

(statearr_27760_27822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (14))){
var state_27698__$1 = state_27698;
var statearr_27761_27823 = state_27698__$1;
(statearr_27761_27823[(2)] = null);

(statearr_27761_27823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (45))){
var inst_27688 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27762_27824 = state_27698__$1;
(statearr_27762_27824[(2)] = inst_27688);

(statearr_27762_27824[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (26))){
var inst_27630 = (state_27698[(29)]);
var inst_27684 = (state_27698[(2)]);
var inst_27685 = cljs.core.seq.call(null,inst_27630);
var state_27698__$1 = (function (){var statearr_27763 = state_27698;
(statearr_27763[(31)] = inst_27684);

return statearr_27763;
})();
if(inst_27685){
var statearr_27764_27825 = state_27698__$1;
(statearr_27764_27825[(1)] = (42));

} else {
var statearr_27765_27826 = state_27698__$1;
(statearr_27765_27826[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (16))){
var inst_27597 = (state_27698[(7)]);
var inst_27599 = cljs.core.chunked_seq_QMARK_.call(null,inst_27597);
var state_27698__$1 = state_27698;
if(inst_27599){
var statearr_27766_27827 = state_27698__$1;
(statearr_27766_27827[(1)] = (19));

} else {
var statearr_27767_27828 = state_27698__$1;
(statearr_27767_27828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (38))){
var inst_27677 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27768_27829 = state_27698__$1;
(statearr_27768_27829[(2)] = inst_27677);

(statearr_27768_27829[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (30))){
var state_27698__$1 = state_27698;
var statearr_27769_27830 = state_27698__$1;
(statearr_27769_27830[(2)] = null);

(statearr_27769_27830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (10))){
var inst_27576 = (state_27698[(14)]);
var inst_27578 = (state_27698[(15)]);
var inst_27586 = cljs.core._nth.call(null,inst_27576,inst_27578);
var inst_27587 = cljs.core.nth.call(null,inst_27586,(0),null);
var inst_27588 = cljs.core.nth.call(null,inst_27586,(1),null);
var state_27698__$1 = (function (){var statearr_27770 = state_27698;
(statearr_27770[(26)] = inst_27587);

return statearr_27770;
})();
if(cljs.core.truth_(inst_27588)){
var statearr_27771_27831 = state_27698__$1;
(statearr_27771_27831[(1)] = (13));

} else {
var statearr_27772_27832 = state_27698__$1;
(statearr_27772_27832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (18))){
var inst_27623 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27773_27833 = state_27698__$1;
(statearr_27773_27833[(2)] = inst_27623);

(statearr_27773_27833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (42))){
var state_27698__$1 = state_27698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27698__$1,(45),dchan);
} else {
if((state_val_27699 === (37))){
var inst_27657 = (state_27698[(25)]);
var inst_27566 = (state_27698[(11)]);
var inst_27666 = (state_27698[(23)]);
var inst_27666__$1 = cljs.core.first.call(null,inst_27657);
var inst_27667 = cljs.core.async.put_BANG_.call(null,inst_27666__$1,inst_27566,done);
var state_27698__$1 = (function (){var statearr_27774 = state_27698;
(statearr_27774[(23)] = inst_27666__$1);

return statearr_27774;
})();
if(cljs.core.truth_(inst_27667)){
var statearr_27775_27834 = state_27698__$1;
(statearr_27775_27834[(1)] = (39));

} else {
var statearr_27776_27835 = state_27698__$1;
(statearr_27776_27835[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (8))){
var inst_27577 = (state_27698[(13)]);
var inst_27578 = (state_27698[(15)]);
var inst_27580 = (inst_27578 < inst_27577);
var inst_27581 = inst_27580;
var state_27698__$1 = state_27698;
if(cljs.core.truth_(inst_27581)){
var statearr_27777_27836 = state_27698__$1;
(statearr_27777_27836[(1)] = (10));

} else {
var statearr_27778_27837 = state_27698__$1;
(statearr_27778_27837[(1)] = (11));

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
});})(c__26964__auto___27783,cs,m,dchan,dctr,done))
;
return ((function (switch__26874__auto__,c__26964__auto___27783,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26875__auto__ = null;
var cljs$core$async$mult_$_state_machine__26875__auto____0 = (function (){
var statearr_27779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27779[(0)] = cljs$core$async$mult_$_state_machine__26875__auto__);

(statearr_27779[(1)] = (1));

return statearr_27779;
});
var cljs$core$async$mult_$_state_machine__26875__auto____1 = (function (state_27698){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e27780){if((e27780 instanceof Object)){
var ex__26878__auto__ = e27780;
var statearr_27781_27838 = state_27698;
(statearr_27781_27838[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27839 = state_27698;
state_27698 = G__27839;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26875__auto__ = function(state_27698){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26875__auto____1.call(this,state_27698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26875__auto____0;
cljs$core$async$mult_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26875__auto____1;
return cljs$core$async$mult_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___27783,cs,m,dchan,dctr,done))
})();
var state__26966__auto__ = (function (){var statearr_27782 = f__26965__auto__.call(null);
(statearr_27782[(6)] = c__26964__auto___27783);

return statearr_27782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___27783,cs,m,dchan,dctr,done))
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
var G__27841 = arguments.length;
switch (G__27841) {
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
var len__4499__auto___27853 = arguments.length;
var i__4500__auto___27854 = (0);
while(true){
if((i__4500__auto___27854 < len__4499__auto___27853)){
args__4502__auto__.push((arguments[i__4500__auto___27854]));

var G__27855 = (i__4500__auto___27854 + (1));
i__4500__auto___27854 = G__27855;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27847){
var map__27848 = p__27847;
var map__27848__$1 = ((((!((map__27848 == null)))?(((((map__27848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27848):map__27848);
var opts = map__27848__$1;
var statearr_27850_27856 = state;
(statearr_27850_27856[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27848,map__27848__$1,opts){
return (function (val){
var statearr_27851_27857 = state;
(statearr_27851_27857[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27848,map__27848__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27852_27858 = state;
(statearr_27852_27858[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27843){
var G__27844 = cljs.core.first.call(null,seq27843);
var seq27843__$1 = cljs.core.next.call(null,seq27843);
var G__27845 = cljs.core.first.call(null,seq27843__$1);
var seq27843__$2 = cljs.core.next.call(null,seq27843__$1);
var G__27846 = cljs.core.first.call(null,seq27843__$2);
var seq27843__$3 = cljs.core.next.call(null,seq27843__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27844,G__27845,G__27846,seq27843__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27859 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27860){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27860 = meta27860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27861,meta27860__$1){
var self__ = this;
var _27861__$1 = this;
return (new cljs.core.async.t_cljs$core$async27859(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27860__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27861){
var self__ = this;
var _27861__$1 = this;
return self__.meta27860;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27859.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27860","meta27860",-640482517,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27859";

cljs.core.async.t_cljs$core$async27859.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27859");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27859.
 */
cljs.core.async.__GT_t_cljs$core$async27859 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27859(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27860){
return (new cljs.core.async.t_cljs$core$async27859(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27860));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27859(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26964__auto___28023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27963){
var state_val_27964 = (state_27963[(1)]);
if((state_val_27964 === (7))){
var inst_27878 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
var statearr_27965_28024 = state_27963__$1;
(statearr_27965_28024[(2)] = inst_27878);

(statearr_27965_28024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (20))){
var inst_27890 = (state_27963[(7)]);
var state_27963__$1 = state_27963;
var statearr_27966_28025 = state_27963__$1;
(statearr_27966_28025[(2)] = inst_27890);

(statearr_27966_28025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (27))){
var state_27963__$1 = state_27963;
var statearr_27967_28026 = state_27963__$1;
(statearr_27967_28026[(2)] = null);

(statearr_27967_28026[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (1))){
var inst_27865 = (state_27963[(8)]);
var inst_27865__$1 = calc_state.call(null);
var inst_27867 = (inst_27865__$1 == null);
var inst_27868 = cljs.core.not.call(null,inst_27867);
var state_27963__$1 = (function (){var statearr_27968 = state_27963;
(statearr_27968[(8)] = inst_27865__$1);

return statearr_27968;
})();
if(inst_27868){
var statearr_27969_28027 = state_27963__$1;
(statearr_27969_28027[(1)] = (2));

} else {
var statearr_27970_28028 = state_27963__$1;
(statearr_27970_28028[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (24))){
var inst_27923 = (state_27963[(9)]);
var inst_27914 = (state_27963[(10)]);
var inst_27937 = (state_27963[(11)]);
var inst_27937__$1 = inst_27914.call(null,inst_27923);
var state_27963__$1 = (function (){var statearr_27971 = state_27963;
(statearr_27971[(11)] = inst_27937__$1);

return statearr_27971;
})();
if(cljs.core.truth_(inst_27937__$1)){
var statearr_27972_28029 = state_27963__$1;
(statearr_27972_28029[(1)] = (29));

} else {
var statearr_27973_28030 = state_27963__$1;
(statearr_27973_28030[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (4))){
var inst_27881 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27881)){
var statearr_27974_28031 = state_27963__$1;
(statearr_27974_28031[(1)] = (8));

} else {
var statearr_27975_28032 = state_27963__$1;
(statearr_27975_28032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (15))){
var inst_27908 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27908)){
var statearr_27976_28033 = state_27963__$1;
(statearr_27976_28033[(1)] = (19));

} else {
var statearr_27977_28034 = state_27963__$1;
(statearr_27977_28034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (21))){
var inst_27913 = (state_27963[(12)]);
var inst_27913__$1 = (state_27963[(2)]);
var inst_27914 = cljs.core.get.call(null,inst_27913__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27915 = cljs.core.get.call(null,inst_27913__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27916 = cljs.core.get.call(null,inst_27913__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27963__$1 = (function (){var statearr_27978 = state_27963;
(statearr_27978[(10)] = inst_27914);

(statearr_27978[(13)] = inst_27915);

(statearr_27978[(12)] = inst_27913__$1);

return statearr_27978;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27963__$1,(22),inst_27916);
} else {
if((state_val_27964 === (31))){
var inst_27945 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27945)){
var statearr_27979_28035 = state_27963__$1;
(statearr_27979_28035[(1)] = (32));

} else {
var statearr_27980_28036 = state_27963__$1;
(statearr_27980_28036[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (32))){
var inst_27922 = (state_27963[(14)]);
var state_27963__$1 = state_27963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27963__$1,(35),out,inst_27922);
} else {
if((state_val_27964 === (33))){
var inst_27913 = (state_27963[(12)]);
var inst_27890 = inst_27913;
var state_27963__$1 = (function (){var statearr_27981 = state_27963;
(statearr_27981[(7)] = inst_27890);

return statearr_27981;
})();
var statearr_27982_28037 = state_27963__$1;
(statearr_27982_28037[(2)] = null);

(statearr_27982_28037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (13))){
var inst_27890 = (state_27963[(7)]);
var inst_27897 = inst_27890.cljs$lang$protocol_mask$partition0$;
var inst_27898 = (inst_27897 & (64));
var inst_27899 = inst_27890.cljs$core$ISeq$;
var inst_27900 = (cljs.core.PROTOCOL_SENTINEL === inst_27899);
var inst_27901 = ((inst_27898) || (inst_27900));
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27901)){
var statearr_27983_28038 = state_27963__$1;
(statearr_27983_28038[(1)] = (16));

} else {
var statearr_27984_28039 = state_27963__$1;
(statearr_27984_28039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (22))){
var inst_27922 = (state_27963[(14)]);
var inst_27923 = (state_27963[(9)]);
var inst_27921 = (state_27963[(2)]);
var inst_27922__$1 = cljs.core.nth.call(null,inst_27921,(0),null);
var inst_27923__$1 = cljs.core.nth.call(null,inst_27921,(1),null);
var inst_27924 = (inst_27922__$1 == null);
var inst_27925 = cljs.core._EQ_.call(null,inst_27923__$1,change);
var inst_27926 = ((inst_27924) || (inst_27925));
var state_27963__$1 = (function (){var statearr_27985 = state_27963;
(statearr_27985[(14)] = inst_27922__$1);

(statearr_27985[(9)] = inst_27923__$1);

return statearr_27985;
})();
if(cljs.core.truth_(inst_27926)){
var statearr_27986_28040 = state_27963__$1;
(statearr_27986_28040[(1)] = (23));

} else {
var statearr_27987_28041 = state_27963__$1;
(statearr_27987_28041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (36))){
var inst_27913 = (state_27963[(12)]);
var inst_27890 = inst_27913;
var state_27963__$1 = (function (){var statearr_27988 = state_27963;
(statearr_27988[(7)] = inst_27890);

return statearr_27988;
})();
var statearr_27989_28042 = state_27963__$1;
(statearr_27989_28042[(2)] = null);

(statearr_27989_28042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (29))){
var inst_27937 = (state_27963[(11)]);
var state_27963__$1 = state_27963;
var statearr_27990_28043 = state_27963__$1;
(statearr_27990_28043[(2)] = inst_27937);

(statearr_27990_28043[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (6))){
var state_27963__$1 = state_27963;
var statearr_27991_28044 = state_27963__$1;
(statearr_27991_28044[(2)] = false);

(statearr_27991_28044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (28))){
var inst_27933 = (state_27963[(2)]);
var inst_27934 = calc_state.call(null);
var inst_27890 = inst_27934;
var state_27963__$1 = (function (){var statearr_27992 = state_27963;
(statearr_27992[(7)] = inst_27890);

(statearr_27992[(15)] = inst_27933);

return statearr_27992;
})();
var statearr_27993_28045 = state_27963__$1;
(statearr_27993_28045[(2)] = null);

(statearr_27993_28045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (25))){
var inst_27959 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
var statearr_27994_28046 = state_27963__$1;
(statearr_27994_28046[(2)] = inst_27959);

(statearr_27994_28046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (34))){
var inst_27957 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
var statearr_27995_28047 = state_27963__$1;
(statearr_27995_28047[(2)] = inst_27957);

(statearr_27995_28047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (17))){
var state_27963__$1 = state_27963;
var statearr_27996_28048 = state_27963__$1;
(statearr_27996_28048[(2)] = false);

(statearr_27996_28048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (3))){
var state_27963__$1 = state_27963;
var statearr_27997_28049 = state_27963__$1;
(statearr_27997_28049[(2)] = false);

(statearr_27997_28049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (12))){
var inst_27961 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27963__$1,inst_27961);
} else {
if((state_val_27964 === (2))){
var inst_27865 = (state_27963[(8)]);
var inst_27870 = inst_27865.cljs$lang$protocol_mask$partition0$;
var inst_27871 = (inst_27870 & (64));
var inst_27872 = inst_27865.cljs$core$ISeq$;
var inst_27873 = (cljs.core.PROTOCOL_SENTINEL === inst_27872);
var inst_27874 = ((inst_27871) || (inst_27873));
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27874)){
var statearr_27998_28050 = state_27963__$1;
(statearr_27998_28050[(1)] = (5));

} else {
var statearr_27999_28051 = state_27963__$1;
(statearr_27999_28051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (23))){
var inst_27922 = (state_27963[(14)]);
var inst_27928 = (inst_27922 == null);
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27928)){
var statearr_28000_28052 = state_27963__$1;
(statearr_28000_28052[(1)] = (26));

} else {
var statearr_28001_28053 = state_27963__$1;
(statearr_28001_28053[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (35))){
var inst_27948 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27948)){
var statearr_28002_28054 = state_27963__$1;
(statearr_28002_28054[(1)] = (36));

} else {
var statearr_28003_28055 = state_27963__$1;
(statearr_28003_28055[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (19))){
var inst_27890 = (state_27963[(7)]);
var inst_27910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27890);
var state_27963__$1 = state_27963;
var statearr_28004_28056 = state_27963__$1;
(statearr_28004_28056[(2)] = inst_27910);

(statearr_28004_28056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (11))){
var inst_27890 = (state_27963[(7)]);
var inst_27894 = (inst_27890 == null);
var inst_27895 = cljs.core.not.call(null,inst_27894);
var state_27963__$1 = state_27963;
if(inst_27895){
var statearr_28005_28057 = state_27963__$1;
(statearr_28005_28057[(1)] = (13));

} else {
var statearr_28006_28058 = state_27963__$1;
(statearr_28006_28058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (9))){
var inst_27865 = (state_27963[(8)]);
var state_27963__$1 = state_27963;
var statearr_28007_28059 = state_27963__$1;
(statearr_28007_28059[(2)] = inst_27865);

(statearr_28007_28059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (5))){
var state_27963__$1 = state_27963;
var statearr_28008_28060 = state_27963__$1;
(statearr_28008_28060[(2)] = true);

(statearr_28008_28060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (14))){
var state_27963__$1 = state_27963;
var statearr_28009_28061 = state_27963__$1;
(statearr_28009_28061[(2)] = false);

(statearr_28009_28061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (26))){
var inst_27923 = (state_27963[(9)]);
var inst_27930 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27923);
var state_27963__$1 = state_27963;
var statearr_28010_28062 = state_27963__$1;
(statearr_28010_28062[(2)] = inst_27930);

(statearr_28010_28062[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (16))){
var state_27963__$1 = state_27963;
var statearr_28011_28063 = state_27963__$1;
(statearr_28011_28063[(2)] = true);

(statearr_28011_28063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (38))){
var inst_27953 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
var statearr_28012_28064 = state_27963__$1;
(statearr_28012_28064[(2)] = inst_27953);

(statearr_28012_28064[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (30))){
var inst_27923 = (state_27963[(9)]);
var inst_27914 = (state_27963[(10)]);
var inst_27915 = (state_27963[(13)]);
var inst_27940 = cljs.core.empty_QMARK_.call(null,inst_27914);
var inst_27941 = inst_27915.call(null,inst_27923);
var inst_27942 = cljs.core.not.call(null,inst_27941);
var inst_27943 = ((inst_27940) && (inst_27942));
var state_27963__$1 = state_27963;
var statearr_28013_28065 = state_27963__$1;
(statearr_28013_28065[(2)] = inst_27943);

(statearr_28013_28065[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (10))){
var inst_27865 = (state_27963[(8)]);
var inst_27886 = (state_27963[(2)]);
var inst_27887 = cljs.core.get.call(null,inst_27886,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27888 = cljs.core.get.call(null,inst_27886,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27889 = cljs.core.get.call(null,inst_27886,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27890 = inst_27865;
var state_27963__$1 = (function (){var statearr_28014 = state_27963;
(statearr_28014[(16)] = inst_27889);

(statearr_28014[(17)] = inst_27887);

(statearr_28014[(7)] = inst_27890);

(statearr_28014[(18)] = inst_27888);

return statearr_28014;
})();
var statearr_28015_28066 = state_27963__$1;
(statearr_28015_28066[(2)] = null);

(statearr_28015_28066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (18))){
var inst_27905 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
var statearr_28016_28067 = state_27963__$1;
(statearr_28016_28067[(2)] = inst_27905);

(statearr_28016_28067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (37))){
var state_27963__$1 = state_27963;
var statearr_28017_28068 = state_27963__$1;
(statearr_28017_28068[(2)] = null);

(statearr_28017_28068[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (8))){
var inst_27865 = (state_27963[(8)]);
var inst_27883 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27865);
var state_27963__$1 = state_27963;
var statearr_28018_28069 = state_27963__$1;
(statearr_28018_28069[(2)] = inst_27883);

(statearr_28018_28069[(1)] = (10));


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
});})(c__26964__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26874__auto__,c__26964__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26875__auto__ = null;
var cljs$core$async$mix_$_state_machine__26875__auto____0 = (function (){
var statearr_28019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28019[(0)] = cljs$core$async$mix_$_state_machine__26875__auto__);

(statearr_28019[(1)] = (1));

return statearr_28019;
});
var cljs$core$async$mix_$_state_machine__26875__auto____1 = (function (state_27963){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_27963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28020){if((e28020 instanceof Object)){
var ex__26878__auto__ = e28020;
var statearr_28021_28070 = state_27963;
(statearr_28021_28070[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28071 = state_27963;
state_27963 = G__28071;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26875__auto__ = function(state_27963){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26875__auto____1.call(this,state_27963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26875__auto____0;
cljs$core$async$mix_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26875__auto____1;
return cljs$core$async$mix_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26966__auto__ = (function (){var statearr_28022 = f__26965__auto__.call(null);
(statearr_28022[(6)] = c__26964__auto___28023);

return statearr_28022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28073 = arguments.length;
switch (G__28073) {
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
var G__28077 = arguments.length;
switch (G__28077) {
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
return (function (p1__28075_SHARP_){
if(cljs.core.truth_(p1__28075_SHARP_.call(null,topic))){
return p1__28075_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28075_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28078 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28079){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28079 = meta28079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28080,meta28079__$1){
var self__ = this;
var _28080__$1 = this;
return (new cljs.core.async.t_cljs$core$async28078(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28079__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28080){
var self__ = this;
var _28080__$1 = this;
return self__.meta28079;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28078.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28079","meta28079",2124363541,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28078";

cljs.core.async.t_cljs$core$async28078.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28078");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28078.
 */
cljs.core.async.__GT_t_cljs$core$async28078 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28078(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28079){
return (new cljs.core.async.t_cljs$core$async28078(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28079));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28078(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26964__auto___28198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28198,mults,ensure_mult,p){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___28198,mults,ensure_mult,p){
return (function (state_28152){
var state_val_28153 = (state_28152[(1)]);
if((state_val_28153 === (7))){
var inst_28148 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28154_28199 = state_28152__$1;
(statearr_28154_28199[(2)] = inst_28148);

(statearr_28154_28199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (20))){
var state_28152__$1 = state_28152;
var statearr_28155_28200 = state_28152__$1;
(statearr_28155_28200[(2)] = null);

(statearr_28155_28200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (1))){
var state_28152__$1 = state_28152;
var statearr_28156_28201 = state_28152__$1;
(statearr_28156_28201[(2)] = null);

(statearr_28156_28201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (24))){
var inst_28131 = (state_28152[(7)]);
var inst_28140 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28131);
var state_28152__$1 = state_28152;
var statearr_28157_28202 = state_28152__$1;
(statearr_28157_28202[(2)] = inst_28140);

(statearr_28157_28202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (4))){
var inst_28083 = (state_28152[(8)]);
var inst_28083__$1 = (state_28152[(2)]);
var inst_28084 = (inst_28083__$1 == null);
var state_28152__$1 = (function (){var statearr_28158 = state_28152;
(statearr_28158[(8)] = inst_28083__$1);

return statearr_28158;
})();
if(cljs.core.truth_(inst_28084)){
var statearr_28159_28203 = state_28152__$1;
(statearr_28159_28203[(1)] = (5));

} else {
var statearr_28160_28204 = state_28152__$1;
(statearr_28160_28204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (15))){
var inst_28125 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28161_28205 = state_28152__$1;
(statearr_28161_28205[(2)] = inst_28125);

(statearr_28161_28205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (21))){
var inst_28145 = (state_28152[(2)]);
var state_28152__$1 = (function (){var statearr_28162 = state_28152;
(statearr_28162[(9)] = inst_28145);

return statearr_28162;
})();
var statearr_28163_28206 = state_28152__$1;
(statearr_28163_28206[(2)] = null);

(statearr_28163_28206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (13))){
var inst_28107 = (state_28152[(10)]);
var inst_28109 = cljs.core.chunked_seq_QMARK_.call(null,inst_28107);
var state_28152__$1 = state_28152;
if(inst_28109){
var statearr_28164_28207 = state_28152__$1;
(statearr_28164_28207[(1)] = (16));

} else {
var statearr_28165_28208 = state_28152__$1;
(statearr_28165_28208[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (22))){
var inst_28137 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
if(cljs.core.truth_(inst_28137)){
var statearr_28166_28209 = state_28152__$1;
(statearr_28166_28209[(1)] = (23));

} else {
var statearr_28167_28210 = state_28152__$1;
(statearr_28167_28210[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (6))){
var inst_28131 = (state_28152[(7)]);
var inst_28133 = (state_28152[(11)]);
var inst_28083 = (state_28152[(8)]);
var inst_28131__$1 = topic_fn.call(null,inst_28083);
var inst_28132 = cljs.core.deref.call(null,mults);
var inst_28133__$1 = cljs.core.get.call(null,inst_28132,inst_28131__$1);
var state_28152__$1 = (function (){var statearr_28168 = state_28152;
(statearr_28168[(7)] = inst_28131__$1);

(statearr_28168[(11)] = inst_28133__$1);

return statearr_28168;
})();
if(cljs.core.truth_(inst_28133__$1)){
var statearr_28169_28211 = state_28152__$1;
(statearr_28169_28211[(1)] = (19));

} else {
var statearr_28170_28212 = state_28152__$1;
(statearr_28170_28212[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (25))){
var inst_28142 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28171_28213 = state_28152__$1;
(statearr_28171_28213[(2)] = inst_28142);

(statearr_28171_28213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (17))){
var inst_28107 = (state_28152[(10)]);
var inst_28116 = cljs.core.first.call(null,inst_28107);
var inst_28117 = cljs.core.async.muxch_STAR_.call(null,inst_28116);
var inst_28118 = cljs.core.async.close_BANG_.call(null,inst_28117);
var inst_28119 = cljs.core.next.call(null,inst_28107);
var inst_28093 = inst_28119;
var inst_28094 = null;
var inst_28095 = (0);
var inst_28096 = (0);
var state_28152__$1 = (function (){var statearr_28172 = state_28152;
(statearr_28172[(12)] = inst_28118);

(statearr_28172[(13)] = inst_28094);

(statearr_28172[(14)] = inst_28095);

(statearr_28172[(15)] = inst_28093);

(statearr_28172[(16)] = inst_28096);

return statearr_28172;
})();
var statearr_28173_28214 = state_28152__$1;
(statearr_28173_28214[(2)] = null);

(statearr_28173_28214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (3))){
var inst_28150 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28152__$1,inst_28150);
} else {
if((state_val_28153 === (12))){
var inst_28127 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28174_28215 = state_28152__$1;
(statearr_28174_28215[(2)] = inst_28127);

(statearr_28174_28215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (2))){
var state_28152__$1 = state_28152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28152__$1,(4),ch);
} else {
if((state_val_28153 === (23))){
var state_28152__$1 = state_28152;
var statearr_28175_28216 = state_28152__$1;
(statearr_28175_28216[(2)] = null);

(statearr_28175_28216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (19))){
var inst_28133 = (state_28152[(11)]);
var inst_28083 = (state_28152[(8)]);
var inst_28135 = cljs.core.async.muxch_STAR_.call(null,inst_28133);
var state_28152__$1 = state_28152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28152__$1,(22),inst_28135,inst_28083);
} else {
if((state_val_28153 === (11))){
var inst_28093 = (state_28152[(15)]);
var inst_28107 = (state_28152[(10)]);
var inst_28107__$1 = cljs.core.seq.call(null,inst_28093);
var state_28152__$1 = (function (){var statearr_28176 = state_28152;
(statearr_28176[(10)] = inst_28107__$1);

return statearr_28176;
})();
if(inst_28107__$1){
var statearr_28177_28217 = state_28152__$1;
(statearr_28177_28217[(1)] = (13));

} else {
var statearr_28178_28218 = state_28152__$1;
(statearr_28178_28218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (9))){
var inst_28129 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28179_28219 = state_28152__$1;
(statearr_28179_28219[(2)] = inst_28129);

(statearr_28179_28219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (5))){
var inst_28090 = cljs.core.deref.call(null,mults);
var inst_28091 = cljs.core.vals.call(null,inst_28090);
var inst_28092 = cljs.core.seq.call(null,inst_28091);
var inst_28093 = inst_28092;
var inst_28094 = null;
var inst_28095 = (0);
var inst_28096 = (0);
var state_28152__$1 = (function (){var statearr_28180 = state_28152;
(statearr_28180[(13)] = inst_28094);

(statearr_28180[(14)] = inst_28095);

(statearr_28180[(15)] = inst_28093);

(statearr_28180[(16)] = inst_28096);

return statearr_28180;
})();
var statearr_28181_28220 = state_28152__$1;
(statearr_28181_28220[(2)] = null);

(statearr_28181_28220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (14))){
var state_28152__$1 = state_28152;
var statearr_28185_28221 = state_28152__$1;
(statearr_28185_28221[(2)] = null);

(statearr_28185_28221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (16))){
var inst_28107 = (state_28152[(10)]);
var inst_28111 = cljs.core.chunk_first.call(null,inst_28107);
var inst_28112 = cljs.core.chunk_rest.call(null,inst_28107);
var inst_28113 = cljs.core.count.call(null,inst_28111);
var inst_28093 = inst_28112;
var inst_28094 = inst_28111;
var inst_28095 = inst_28113;
var inst_28096 = (0);
var state_28152__$1 = (function (){var statearr_28186 = state_28152;
(statearr_28186[(13)] = inst_28094);

(statearr_28186[(14)] = inst_28095);

(statearr_28186[(15)] = inst_28093);

(statearr_28186[(16)] = inst_28096);

return statearr_28186;
})();
var statearr_28187_28222 = state_28152__$1;
(statearr_28187_28222[(2)] = null);

(statearr_28187_28222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (10))){
var inst_28094 = (state_28152[(13)]);
var inst_28095 = (state_28152[(14)]);
var inst_28093 = (state_28152[(15)]);
var inst_28096 = (state_28152[(16)]);
var inst_28101 = cljs.core._nth.call(null,inst_28094,inst_28096);
var inst_28102 = cljs.core.async.muxch_STAR_.call(null,inst_28101);
var inst_28103 = cljs.core.async.close_BANG_.call(null,inst_28102);
var inst_28104 = (inst_28096 + (1));
var tmp28182 = inst_28094;
var tmp28183 = inst_28095;
var tmp28184 = inst_28093;
var inst_28093__$1 = tmp28184;
var inst_28094__$1 = tmp28182;
var inst_28095__$1 = tmp28183;
var inst_28096__$1 = inst_28104;
var state_28152__$1 = (function (){var statearr_28188 = state_28152;
(statearr_28188[(13)] = inst_28094__$1);

(statearr_28188[(14)] = inst_28095__$1);

(statearr_28188[(15)] = inst_28093__$1);

(statearr_28188[(17)] = inst_28103);

(statearr_28188[(16)] = inst_28096__$1);

return statearr_28188;
})();
var statearr_28189_28223 = state_28152__$1;
(statearr_28189_28223[(2)] = null);

(statearr_28189_28223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (18))){
var inst_28122 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28190_28224 = state_28152__$1;
(statearr_28190_28224[(2)] = inst_28122);

(statearr_28190_28224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (8))){
var inst_28095 = (state_28152[(14)]);
var inst_28096 = (state_28152[(16)]);
var inst_28098 = (inst_28096 < inst_28095);
var inst_28099 = inst_28098;
var state_28152__$1 = state_28152;
if(cljs.core.truth_(inst_28099)){
var statearr_28191_28225 = state_28152__$1;
(statearr_28191_28225[(1)] = (10));

} else {
var statearr_28192_28226 = state_28152__$1;
(statearr_28192_28226[(1)] = (11));

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
});})(c__26964__auto___28198,mults,ensure_mult,p))
;
return ((function (switch__26874__auto__,c__26964__auto___28198,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_28193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28193[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_28193[(1)] = (1));

return statearr_28193;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_28152){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_28152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28194){if((e28194 instanceof Object)){
var ex__26878__auto__ = e28194;
var statearr_28195_28227 = state_28152;
(statearr_28195_28227[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28228 = state_28152;
state_28152 = G__28228;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_28152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_28152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___28198,mults,ensure_mult,p))
})();
var state__26966__auto__ = (function (){var statearr_28196 = f__26965__auto__.call(null);
(statearr_28196[(6)] = c__26964__auto___28198);

return statearr_28196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28198,mults,ensure_mult,p))
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
var G__28230 = arguments.length;
switch (G__28230) {
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
var G__28233 = arguments.length;
switch (G__28233) {
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
var G__28236 = arguments.length;
switch (G__28236) {
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
var c__26964__auto___28303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28275){
var state_val_28276 = (state_28275[(1)]);
if((state_val_28276 === (7))){
var state_28275__$1 = state_28275;
var statearr_28277_28304 = state_28275__$1;
(statearr_28277_28304[(2)] = null);

(statearr_28277_28304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (1))){
var state_28275__$1 = state_28275;
var statearr_28278_28305 = state_28275__$1;
(statearr_28278_28305[(2)] = null);

(statearr_28278_28305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (4))){
var inst_28239 = (state_28275[(7)]);
var inst_28241 = (inst_28239 < cnt);
var state_28275__$1 = state_28275;
if(cljs.core.truth_(inst_28241)){
var statearr_28279_28306 = state_28275__$1;
(statearr_28279_28306[(1)] = (6));

} else {
var statearr_28280_28307 = state_28275__$1;
(statearr_28280_28307[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (15))){
var inst_28271 = (state_28275[(2)]);
var state_28275__$1 = state_28275;
var statearr_28281_28308 = state_28275__$1;
(statearr_28281_28308[(2)] = inst_28271);

(statearr_28281_28308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (13))){
var inst_28264 = cljs.core.async.close_BANG_.call(null,out);
var state_28275__$1 = state_28275;
var statearr_28282_28309 = state_28275__$1;
(statearr_28282_28309[(2)] = inst_28264);

(statearr_28282_28309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (6))){
var state_28275__$1 = state_28275;
var statearr_28283_28310 = state_28275__$1;
(statearr_28283_28310[(2)] = null);

(statearr_28283_28310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (3))){
var inst_28273 = (state_28275[(2)]);
var state_28275__$1 = state_28275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28275__$1,inst_28273);
} else {
if((state_val_28276 === (12))){
var inst_28261 = (state_28275[(8)]);
var inst_28261__$1 = (state_28275[(2)]);
var inst_28262 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28261__$1);
var state_28275__$1 = (function (){var statearr_28284 = state_28275;
(statearr_28284[(8)] = inst_28261__$1);

return statearr_28284;
})();
if(cljs.core.truth_(inst_28262)){
var statearr_28285_28311 = state_28275__$1;
(statearr_28285_28311[(1)] = (13));

} else {
var statearr_28286_28312 = state_28275__$1;
(statearr_28286_28312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (2))){
var inst_28238 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28239 = (0);
var state_28275__$1 = (function (){var statearr_28287 = state_28275;
(statearr_28287[(9)] = inst_28238);

(statearr_28287[(7)] = inst_28239);

return statearr_28287;
})();
var statearr_28288_28313 = state_28275__$1;
(statearr_28288_28313[(2)] = null);

(statearr_28288_28313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (11))){
var inst_28239 = (state_28275[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28275,(10),Object,null,(9));
var inst_28248 = chs__$1.call(null,inst_28239);
var inst_28249 = done.call(null,inst_28239);
var inst_28250 = cljs.core.async.take_BANG_.call(null,inst_28248,inst_28249);
var state_28275__$1 = state_28275;
var statearr_28289_28314 = state_28275__$1;
(statearr_28289_28314[(2)] = inst_28250);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28275__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (9))){
var inst_28239 = (state_28275[(7)]);
var inst_28252 = (state_28275[(2)]);
var inst_28253 = (inst_28239 + (1));
var inst_28239__$1 = inst_28253;
var state_28275__$1 = (function (){var statearr_28290 = state_28275;
(statearr_28290[(10)] = inst_28252);

(statearr_28290[(7)] = inst_28239__$1);

return statearr_28290;
})();
var statearr_28291_28315 = state_28275__$1;
(statearr_28291_28315[(2)] = null);

(statearr_28291_28315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (5))){
var inst_28259 = (state_28275[(2)]);
var state_28275__$1 = (function (){var statearr_28292 = state_28275;
(statearr_28292[(11)] = inst_28259);

return statearr_28292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28275__$1,(12),dchan);
} else {
if((state_val_28276 === (14))){
var inst_28261 = (state_28275[(8)]);
var inst_28266 = cljs.core.apply.call(null,f,inst_28261);
var state_28275__$1 = state_28275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28275__$1,(16),out,inst_28266);
} else {
if((state_val_28276 === (16))){
var inst_28268 = (state_28275[(2)]);
var state_28275__$1 = (function (){var statearr_28293 = state_28275;
(statearr_28293[(12)] = inst_28268);

return statearr_28293;
})();
var statearr_28294_28316 = state_28275__$1;
(statearr_28294_28316[(2)] = null);

(statearr_28294_28316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (10))){
var inst_28243 = (state_28275[(2)]);
var inst_28244 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28275__$1 = (function (){var statearr_28295 = state_28275;
(statearr_28295[(13)] = inst_28243);

return statearr_28295;
})();
var statearr_28296_28317 = state_28275__$1;
(statearr_28296_28317[(2)] = inst_28244);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28275__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28276 === (8))){
var inst_28257 = (state_28275[(2)]);
var state_28275__$1 = state_28275;
var statearr_28297_28318 = state_28275__$1;
(statearr_28297_28318[(2)] = inst_28257);

(statearr_28297_28318[(1)] = (5));


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
});})(c__26964__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26874__auto__,c__26964__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_28298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28298[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_28298[(1)] = (1));

return statearr_28298;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_28275){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_28275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28299){if((e28299 instanceof Object)){
var ex__26878__auto__ = e28299;
var statearr_28300_28319 = state_28275;
(statearr_28300_28319[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28320 = state_28275;
state_28275 = G__28320;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_28275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_28275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26966__auto__ = (function (){var statearr_28301 = f__26965__auto__.call(null);
(statearr_28301[(6)] = c__26964__auto___28303);

return statearr_28301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28323 = arguments.length;
switch (G__28323) {
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
var c__26964__auto___28377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28377,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___28377,out){
return (function (state_28355){
var state_val_28356 = (state_28355[(1)]);
if((state_val_28356 === (7))){
var inst_28335 = (state_28355[(7)]);
var inst_28334 = (state_28355[(8)]);
var inst_28334__$1 = (state_28355[(2)]);
var inst_28335__$1 = cljs.core.nth.call(null,inst_28334__$1,(0),null);
var inst_28336 = cljs.core.nth.call(null,inst_28334__$1,(1),null);
var inst_28337 = (inst_28335__$1 == null);
var state_28355__$1 = (function (){var statearr_28357 = state_28355;
(statearr_28357[(7)] = inst_28335__$1);

(statearr_28357[(9)] = inst_28336);

(statearr_28357[(8)] = inst_28334__$1);

return statearr_28357;
})();
if(cljs.core.truth_(inst_28337)){
var statearr_28358_28378 = state_28355__$1;
(statearr_28358_28378[(1)] = (8));

} else {
var statearr_28359_28379 = state_28355__$1;
(statearr_28359_28379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (1))){
var inst_28324 = cljs.core.vec.call(null,chs);
var inst_28325 = inst_28324;
var state_28355__$1 = (function (){var statearr_28360 = state_28355;
(statearr_28360[(10)] = inst_28325);

return statearr_28360;
})();
var statearr_28361_28380 = state_28355__$1;
(statearr_28361_28380[(2)] = null);

(statearr_28361_28380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (4))){
var inst_28325 = (state_28355[(10)]);
var state_28355__$1 = state_28355;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28355__$1,(7),inst_28325);
} else {
if((state_val_28356 === (6))){
var inst_28351 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28362_28381 = state_28355__$1;
(statearr_28362_28381[(2)] = inst_28351);

(statearr_28362_28381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (3))){
var inst_28353 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28355__$1,inst_28353);
} else {
if((state_val_28356 === (2))){
var inst_28325 = (state_28355[(10)]);
var inst_28327 = cljs.core.count.call(null,inst_28325);
var inst_28328 = (inst_28327 > (0));
var state_28355__$1 = state_28355;
if(cljs.core.truth_(inst_28328)){
var statearr_28364_28382 = state_28355__$1;
(statearr_28364_28382[(1)] = (4));

} else {
var statearr_28365_28383 = state_28355__$1;
(statearr_28365_28383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (11))){
var inst_28325 = (state_28355[(10)]);
var inst_28344 = (state_28355[(2)]);
var tmp28363 = inst_28325;
var inst_28325__$1 = tmp28363;
var state_28355__$1 = (function (){var statearr_28366 = state_28355;
(statearr_28366[(11)] = inst_28344);

(statearr_28366[(10)] = inst_28325__$1);

return statearr_28366;
})();
var statearr_28367_28384 = state_28355__$1;
(statearr_28367_28384[(2)] = null);

(statearr_28367_28384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (9))){
var inst_28335 = (state_28355[(7)]);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28355__$1,(11),out,inst_28335);
} else {
if((state_val_28356 === (5))){
var inst_28349 = cljs.core.async.close_BANG_.call(null,out);
var state_28355__$1 = state_28355;
var statearr_28368_28385 = state_28355__$1;
(statearr_28368_28385[(2)] = inst_28349);

(statearr_28368_28385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (10))){
var inst_28347 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28369_28386 = state_28355__$1;
(statearr_28369_28386[(2)] = inst_28347);

(statearr_28369_28386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (8))){
var inst_28335 = (state_28355[(7)]);
var inst_28336 = (state_28355[(9)]);
var inst_28334 = (state_28355[(8)]);
var inst_28325 = (state_28355[(10)]);
var inst_28339 = (function (){var cs = inst_28325;
var vec__28330 = inst_28334;
var v = inst_28335;
var c = inst_28336;
return ((function (cs,vec__28330,v,c,inst_28335,inst_28336,inst_28334,inst_28325,state_val_28356,c__26964__auto___28377,out){
return (function (p1__28321_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28321_SHARP_);
});
;})(cs,vec__28330,v,c,inst_28335,inst_28336,inst_28334,inst_28325,state_val_28356,c__26964__auto___28377,out))
})();
var inst_28340 = cljs.core.filterv.call(null,inst_28339,inst_28325);
var inst_28325__$1 = inst_28340;
var state_28355__$1 = (function (){var statearr_28370 = state_28355;
(statearr_28370[(10)] = inst_28325__$1);

return statearr_28370;
})();
var statearr_28371_28387 = state_28355__$1;
(statearr_28371_28387[(2)] = null);

(statearr_28371_28387[(1)] = (2));


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
});})(c__26964__auto___28377,out))
;
return ((function (switch__26874__auto__,c__26964__auto___28377,out){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_28372 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28372[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_28372[(1)] = (1));

return statearr_28372;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_28355){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_28355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28373){if((e28373 instanceof Object)){
var ex__26878__auto__ = e28373;
var statearr_28374_28388 = state_28355;
(statearr_28374_28388[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28389 = state_28355;
state_28355 = G__28389;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_28355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_28355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___28377,out))
})();
var state__26966__auto__ = (function (){var statearr_28375 = f__26965__auto__.call(null);
(statearr_28375[(6)] = c__26964__auto___28377);

return statearr_28375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28377,out))
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
var G__28391 = arguments.length;
switch (G__28391) {
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
var c__26964__auto___28436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28436,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___28436,out){
return (function (state_28415){
var state_val_28416 = (state_28415[(1)]);
if((state_val_28416 === (7))){
var inst_28397 = (state_28415[(7)]);
var inst_28397__$1 = (state_28415[(2)]);
var inst_28398 = (inst_28397__$1 == null);
var inst_28399 = cljs.core.not.call(null,inst_28398);
var state_28415__$1 = (function (){var statearr_28417 = state_28415;
(statearr_28417[(7)] = inst_28397__$1);

return statearr_28417;
})();
if(inst_28399){
var statearr_28418_28437 = state_28415__$1;
(statearr_28418_28437[(1)] = (8));

} else {
var statearr_28419_28438 = state_28415__$1;
(statearr_28419_28438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (1))){
var inst_28392 = (0);
var state_28415__$1 = (function (){var statearr_28420 = state_28415;
(statearr_28420[(8)] = inst_28392);

return statearr_28420;
})();
var statearr_28421_28439 = state_28415__$1;
(statearr_28421_28439[(2)] = null);

(statearr_28421_28439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (4))){
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(7),ch);
} else {
if((state_val_28416 === (6))){
var inst_28410 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28422_28440 = state_28415__$1;
(statearr_28422_28440[(2)] = inst_28410);

(statearr_28422_28440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (3))){
var inst_28412 = (state_28415[(2)]);
var inst_28413 = cljs.core.async.close_BANG_.call(null,out);
var state_28415__$1 = (function (){var statearr_28423 = state_28415;
(statearr_28423[(9)] = inst_28412);

return statearr_28423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28415__$1,inst_28413);
} else {
if((state_val_28416 === (2))){
var inst_28392 = (state_28415[(8)]);
var inst_28394 = (inst_28392 < n);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28394)){
var statearr_28424_28441 = state_28415__$1;
(statearr_28424_28441[(1)] = (4));

} else {
var statearr_28425_28442 = state_28415__$1;
(statearr_28425_28442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (11))){
var inst_28392 = (state_28415[(8)]);
var inst_28402 = (state_28415[(2)]);
var inst_28403 = (inst_28392 + (1));
var inst_28392__$1 = inst_28403;
var state_28415__$1 = (function (){var statearr_28426 = state_28415;
(statearr_28426[(10)] = inst_28402);

(statearr_28426[(8)] = inst_28392__$1);

return statearr_28426;
})();
var statearr_28427_28443 = state_28415__$1;
(statearr_28427_28443[(2)] = null);

(statearr_28427_28443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (9))){
var state_28415__$1 = state_28415;
var statearr_28428_28444 = state_28415__$1;
(statearr_28428_28444[(2)] = null);

(statearr_28428_28444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (5))){
var state_28415__$1 = state_28415;
var statearr_28429_28445 = state_28415__$1;
(statearr_28429_28445[(2)] = null);

(statearr_28429_28445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (10))){
var inst_28407 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28430_28446 = state_28415__$1;
(statearr_28430_28446[(2)] = inst_28407);

(statearr_28430_28446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (8))){
var inst_28397 = (state_28415[(7)]);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28415__$1,(11),out,inst_28397);
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
});})(c__26964__auto___28436,out))
;
return ((function (switch__26874__auto__,c__26964__auto___28436,out){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_28431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28431[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_28431[(1)] = (1));

return statearr_28431;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_28415){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_28415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28432){if((e28432 instanceof Object)){
var ex__26878__auto__ = e28432;
var statearr_28433_28447 = state_28415;
(statearr_28433_28447[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28448 = state_28415;
state_28415 = G__28448;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_28415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_28415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___28436,out))
})();
var state__26966__auto__ = (function (){var statearr_28434 = f__26965__auto__.call(null);
(statearr_28434[(6)] = c__26964__auto___28436);

return statearr_28434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28436,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28450 = (function (f,ch,meta28451){
this.f = f;
this.ch = ch;
this.meta28451 = meta28451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28452,meta28451__$1){
var self__ = this;
var _28452__$1 = this;
return (new cljs.core.async.t_cljs$core$async28450(self__.f,self__.ch,meta28451__$1));
});

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28452){
var self__ = this;
var _28452__$1 = this;
return self__.meta28451;
});

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28453 = (function (f,ch,meta28451,_,fn1,meta28454){
this.f = f;
this.ch = ch;
this.meta28451 = meta28451;
this._ = _;
this.fn1 = fn1;
this.meta28454 = meta28454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28455,meta28454__$1){
var self__ = this;
var _28455__$1 = this;
return (new cljs.core.async.t_cljs$core$async28453(self__.f,self__.ch,self__.meta28451,self__._,self__.fn1,meta28454__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28455){
var self__ = this;
var _28455__$1 = this;
return self__.meta28454;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28449_SHARP_){
return f1.call(null,(((p1__28449_SHARP_ == null))?null:self__.f.call(null,p1__28449_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28453.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28451","meta28451",-1644266784,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28450","cljs.core.async/t_cljs$core$async28450",131612855,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28454","meta28454",-2031298529,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28453";

cljs.core.async.t_cljs$core$async28453.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28453");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28453.
 */
cljs.core.async.__GT_t_cljs$core$async28453 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28453(f__$1,ch__$1,meta28451__$1,___$2,fn1__$1,meta28454){
return (new cljs.core.async.t_cljs$core$async28453(f__$1,ch__$1,meta28451__$1,___$2,fn1__$1,meta28454));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28453(self__.f,self__.ch,self__.meta28451,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28451","meta28451",-1644266784,null)], null);
});

cljs.core.async.t_cljs$core$async28450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28450";

cljs.core.async.t_cljs$core$async28450.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28450");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28450.
 */
cljs.core.async.__GT_t_cljs$core$async28450 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28450(f__$1,ch__$1,meta28451){
return (new cljs.core.async.t_cljs$core$async28450(f__$1,ch__$1,meta28451));
});

}

return (new cljs.core.async.t_cljs$core$async28450(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28456 = (function (f,ch,meta28457){
this.f = f;
this.ch = ch;
this.meta28457 = meta28457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28458,meta28457__$1){
var self__ = this;
var _28458__$1 = this;
return (new cljs.core.async.t_cljs$core$async28456(self__.f,self__.ch,meta28457__$1));
});

cljs.core.async.t_cljs$core$async28456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28458){
var self__ = this;
var _28458__$1 = this;
return self__.meta28457;
});

cljs.core.async.t_cljs$core$async28456.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28456.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28456.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28457","meta28457",-699832296,null)], null);
});

cljs.core.async.t_cljs$core$async28456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28456";

cljs.core.async.t_cljs$core$async28456.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28456");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28456.
 */
cljs.core.async.__GT_t_cljs$core$async28456 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28456(f__$1,ch__$1,meta28457){
return (new cljs.core.async.t_cljs$core$async28456(f__$1,ch__$1,meta28457));
});

}

return (new cljs.core.async.t_cljs$core$async28456(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28459 = (function (p,ch,meta28460){
this.p = p;
this.ch = ch;
this.meta28460 = meta28460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28461,meta28460__$1){
var self__ = this;
var _28461__$1 = this;
return (new cljs.core.async.t_cljs$core$async28459(self__.p,self__.ch,meta28460__$1));
});

cljs.core.async.t_cljs$core$async28459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28461){
var self__ = this;
var _28461__$1 = this;
return self__.meta28460;
});

cljs.core.async.t_cljs$core$async28459.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28459.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28459.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28459.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28459.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28459.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28459.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28460","meta28460",-320697896,null)], null);
});

cljs.core.async.t_cljs$core$async28459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28459";

cljs.core.async.t_cljs$core$async28459.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28459");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28459.
 */
cljs.core.async.__GT_t_cljs$core$async28459 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28459(p__$1,ch__$1,meta28460){
return (new cljs.core.async.t_cljs$core$async28459(p__$1,ch__$1,meta28460));
});

}

return (new cljs.core.async.t_cljs$core$async28459(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28463 = arguments.length;
switch (G__28463) {
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
var c__26964__auto___28503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28503,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___28503,out){
return (function (state_28484){
var state_val_28485 = (state_28484[(1)]);
if((state_val_28485 === (7))){
var inst_28480 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28486_28504 = state_28484__$1;
(statearr_28486_28504[(2)] = inst_28480);

(statearr_28486_28504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (1))){
var state_28484__$1 = state_28484;
var statearr_28487_28505 = state_28484__$1;
(statearr_28487_28505[(2)] = null);

(statearr_28487_28505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (4))){
var inst_28466 = (state_28484[(7)]);
var inst_28466__$1 = (state_28484[(2)]);
var inst_28467 = (inst_28466__$1 == null);
var state_28484__$1 = (function (){var statearr_28488 = state_28484;
(statearr_28488[(7)] = inst_28466__$1);

return statearr_28488;
})();
if(cljs.core.truth_(inst_28467)){
var statearr_28489_28506 = state_28484__$1;
(statearr_28489_28506[(1)] = (5));

} else {
var statearr_28490_28507 = state_28484__$1;
(statearr_28490_28507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (6))){
var inst_28466 = (state_28484[(7)]);
var inst_28471 = p.call(null,inst_28466);
var state_28484__$1 = state_28484;
if(cljs.core.truth_(inst_28471)){
var statearr_28491_28508 = state_28484__$1;
(statearr_28491_28508[(1)] = (8));

} else {
var statearr_28492_28509 = state_28484__$1;
(statearr_28492_28509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (3))){
var inst_28482 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28484__$1,inst_28482);
} else {
if((state_val_28485 === (2))){
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28484__$1,(4),ch);
} else {
if((state_val_28485 === (11))){
var inst_28474 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28493_28510 = state_28484__$1;
(statearr_28493_28510[(2)] = inst_28474);

(statearr_28493_28510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (9))){
var state_28484__$1 = state_28484;
var statearr_28494_28511 = state_28484__$1;
(statearr_28494_28511[(2)] = null);

(statearr_28494_28511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (5))){
var inst_28469 = cljs.core.async.close_BANG_.call(null,out);
var state_28484__$1 = state_28484;
var statearr_28495_28512 = state_28484__$1;
(statearr_28495_28512[(2)] = inst_28469);

(statearr_28495_28512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (10))){
var inst_28477 = (state_28484[(2)]);
var state_28484__$1 = (function (){var statearr_28496 = state_28484;
(statearr_28496[(8)] = inst_28477);

return statearr_28496;
})();
var statearr_28497_28513 = state_28484__$1;
(statearr_28497_28513[(2)] = null);

(statearr_28497_28513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (8))){
var inst_28466 = (state_28484[(7)]);
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28484__$1,(11),out,inst_28466);
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
});})(c__26964__auto___28503,out))
;
return ((function (switch__26874__auto__,c__26964__auto___28503,out){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_28498 = [null,null,null,null,null,null,null,null,null];
(statearr_28498[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_28498[(1)] = (1));

return statearr_28498;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_28484){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_28484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28499){if((e28499 instanceof Object)){
var ex__26878__auto__ = e28499;
var statearr_28500_28514 = state_28484;
(statearr_28500_28514[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28515 = state_28484;
state_28484 = G__28515;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_28484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_28484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___28503,out))
})();
var state__26966__auto__ = (function (){var statearr_28501 = f__26965__auto__.call(null);
(statearr_28501[(6)] = c__26964__auto___28503);

return statearr_28501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28503,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28517 = arguments.length;
switch (G__28517) {
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
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__){
return (function (state_28580){
var state_val_28581 = (state_28580[(1)]);
if((state_val_28581 === (7))){
var inst_28576 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28582_28620 = state_28580__$1;
(statearr_28582_28620[(2)] = inst_28576);

(statearr_28582_28620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (20))){
var inst_28546 = (state_28580[(7)]);
var inst_28557 = (state_28580[(2)]);
var inst_28558 = cljs.core.next.call(null,inst_28546);
var inst_28532 = inst_28558;
var inst_28533 = null;
var inst_28534 = (0);
var inst_28535 = (0);
var state_28580__$1 = (function (){var statearr_28583 = state_28580;
(statearr_28583[(8)] = inst_28532);

(statearr_28583[(9)] = inst_28535);

(statearr_28583[(10)] = inst_28534);

(statearr_28583[(11)] = inst_28557);

(statearr_28583[(12)] = inst_28533);

return statearr_28583;
})();
var statearr_28584_28621 = state_28580__$1;
(statearr_28584_28621[(2)] = null);

(statearr_28584_28621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (1))){
var state_28580__$1 = state_28580;
var statearr_28585_28622 = state_28580__$1;
(statearr_28585_28622[(2)] = null);

(statearr_28585_28622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (4))){
var inst_28521 = (state_28580[(13)]);
var inst_28521__$1 = (state_28580[(2)]);
var inst_28522 = (inst_28521__$1 == null);
var state_28580__$1 = (function (){var statearr_28586 = state_28580;
(statearr_28586[(13)] = inst_28521__$1);

return statearr_28586;
})();
if(cljs.core.truth_(inst_28522)){
var statearr_28587_28623 = state_28580__$1;
(statearr_28587_28623[(1)] = (5));

} else {
var statearr_28588_28624 = state_28580__$1;
(statearr_28588_28624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (15))){
var state_28580__$1 = state_28580;
var statearr_28592_28625 = state_28580__$1;
(statearr_28592_28625[(2)] = null);

(statearr_28592_28625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (21))){
var state_28580__$1 = state_28580;
var statearr_28593_28626 = state_28580__$1;
(statearr_28593_28626[(2)] = null);

(statearr_28593_28626[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (13))){
var inst_28532 = (state_28580[(8)]);
var inst_28535 = (state_28580[(9)]);
var inst_28534 = (state_28580[(10)]);
var inst_28533 = (state_28580[(12)]);
var inst_28542 = (state_28580[(2)]);
var inst_28543 = (inst_28535 + (1));
var tmp28589 = inst_28532;
var tmp28590 = inst_28534;
var tmp28591 = inst_28533;
var inst_28532__$1 = tmp28589;
var inst_28533__$1 = tmp28591;
var inst_28534__$1 = tmp28590;
var inst_28535__$1 = inst_28543;
var state_28580__$1 = (function (){var statearr_28594 = state_28580;
(statearr_28594[(14)] = inst_28542);

(statearr_28594[(8)] = inst_28532__$1);

(statearr_28594[(9)] = inst_28535__$1);

(statearr_28594[(10)] = inst_28534__$1);

(statearr_28594[(12)] = inst_28533__$1);

return statearr_28594;
})();
var statearr_28595_28627 = state_28580__$1;
(statearr_28595_28627[(2)] = null);

(statearr_28595_28627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (22))){
var state_28580__$1 = state_28580;
var statearr_28596_28628 = state_28580__$1;
(statearr_28596_28628[(2)] = null);

(statearr_28596_28628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (6))){
var inst_28521 = (state_28580[(13)]);
var inst_28530 = f.call(null,inst_28521);
var inst_28531 = cljs.core.seq.call(null,inst_28530);
var inst_28532 = inst_28531;
var inst_28533 = null;
var inst_28534 = (0);
var inst_28535 = (0);
var state_28580__$1 = (function (){var statearr_28597 = state_28580;
(statearr_28597[(8)] = inst_28532);

(statearr_28597[(9)] = inst_28535);

(statearr_28597[(10)] = inst_28534);

(statearr_28597[(12)] = inst_28533);

return statearr_28597;
})();
var statearr_28598_28629 = state_28580__$1;
(statearr_28598_28629[(2)] = null);

(statearr_28598_28629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (17))){
var inst_28546 = (state_28580[(7)]);
var inst_28550 = cljs.core.chunk_first.call(null,inst_28546);
var inst_28551 = cljs.core.chunk_rest.call(null,inst_28546);
var inst_28552 = cljs.core.count.call(null,inst_28550);
var inst_28532 = inst_28551;
var inst_28533 = inst_28550;
var inst_28534 = inst_28552;
var inst_28535 = (0);
var state_28580__$1 = (function (){var statearr_28599 = state_28580;
(statearr_28599[(8)] = inst_28532);

(statearr_28599[(9)] = inst_28535);

(statearr_28599[(10)] = inst_28534);

(statearr_28599[(12)] = inst_28533);

return statearr_28599;
})();
var statearr_28600_28630 = state_28580__$1;
(statearr_28600_28630[(2)] = null);

(statearr_28600_28630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (3))){
var inst_28578 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28580__$1,inst_28578);
} else {
if((state_val_28581 === (12))){
var inst_28566 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28601_28631 = state_28580__$1;
(statearr_28601_28631[(2)] = inst_28566);

(statearr_28601_28631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (2))){
var state_28580__$1 = state_28580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28580__$1,(4),in$);
} else {
if((state_val_28581 === (23))){
var inst_28574 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28602_28632 = state_28580__$1;
(statearr_28602_28632[(2)] = inst_28574);

(statearr_28602_28632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (19))){
var inst_28561 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28603_28633 = state_28580__$1;
(statearr_28603_28633[(2)] = inst_28561);

(statearr_28603_28633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (11))){
var inst_28532 = (state_28580[(8)]);
var inst_28546 = (state_28580[(7)]);
var inst_28546__$1 = cljs.core.seq.call(null,inst_28532);
var state_28580__$1 = (function (){var statearr_28604 = state_28580;
(statearr_28604[(7)] = inst_28546__$1);

return statearr_28604;
})();
if(inst_28546__$1){
var statearr_28605_28634 = state_28580__$1;
(statearr_28605_28634[(1)] = (14));

} else {
var statearr_28606_28635 = state_28580__$1;
(statearr_28606_28635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (9))){
var inst_28568 = (state_28580[(2)]);
var inst_28569 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28580__$1 = (function (){var statearr_28607 = state_28580;
(statearr_28607[(15)] = inst_28568);

return statearr_28607;
})();
if(cljs.core.truth_(inst_28569)){
var statearr_28608_28636 = state_28580__$1;
(statearr_28608_28636[(1)] = (21));

} else {
var statearr_28609_28637 = state_28580__$1;
(statearr_28609_28637[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (5))){
var inst_28524 = cljs.core.async.close_BANG_.call(null,out);
var state_28580__$1 = state_28580;
var statearr_28610_28638 = state_28580__$1;
(statearr_28610_28638[(2)] = inst_28524);

(statearr_28610_28638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (14))){
var inst_28546 = (state_28580[(7)]);
var inst_28548 = cljs.core.chunked_seq_QMARK_.call(null,inst_28546);
var state_28580__$1 = state_28580;
if(inst_28548){
var statearr_28611_28639 = state_28580__$1;
(statearr_28611_28639[(1)] = (17));

} else {
var statearr_28612_28640 = state_28580__$1;
(statearr_28612_28640[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (16))){
var inst_28564 = (state_28580[(2)]);
var state_28580__$1 = state_28580;
var statearr_28613_28641 = state_28580__$1;
(statearr_28613_28641[(2)] = inst_28564);

(statearr_28613_28641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28581 === (10))){
var inst_28535 = (state_28580[(9)]);
var inst_28533 = (state_28580[(12)]);
var inst_28540 = cljs.core._nth.call(null,inst_28533,inst_28535);
var state_28580__$1 = state_28580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28580__$1,(13),out,inst_28540);
} else {
if((state_val_28581 === (18))){
var inst_28546 = (state_28580[(7)]);
var inst_28555 = cljs.core.first.call(null,inst_28546);
var state_28580__$1 = state_28580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28580__$1,(20),out,inst_28555);
} else {
if((state_val_28581 === (8))){
var inst_28535 = (state_28580[(9)]);
var inst_28534 = (state_28580[(10)]);
var inst_28537 = (inst_28535 < inst_28534);
var inst_28538 = inst_28537;
var state_28580__$1 = state_28580;
if(cljs.core.truth_(inst_28538)){
var statearr_28614_28642 = state_28580__$1;
(statearr_28614_28642[(1)] = (10));

} else {
var statearr_28615_28643 = state_28580__$1;
(statearr_28615_28643[(1)] = (11));

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
});})(c__26964__auto__))
;
return ((function (switch__26874__auto__,c__26964__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26875__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26875__auto____0 = (function (){
var statearr_28616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28616[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26875__auto__);

(statearr_28616[(1)] = (1));

return statearr_28616;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26875__auto____1 = (function (state_28580){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_28580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28617){if((e28617 instanceof Object)){
var ex__26878__auto__ = e28617;
var statearr_28618_28644 = state_28580;
(statearr_28618_28644[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28645 = state_28580;
state_28580 = G__28645;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26875__auto__ = function(state_28580){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26875__auto____1.call(this,state_28580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26875__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26875__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_28619 = f__26965__auto__.call(null);
(statearr_28619[(6)] = c__26964__auto__);

return statearr_28619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28647 = arguments.length;
switch (G__28647) {
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
var G__28650 = arguments.length;
switch (G__28650) {
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
var G__28653 = arguments.length;
switch (G__28653) {
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
var c__26964__auto___28700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28700,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___28700,out){
return (function (state_28677){
var state_val_28678 = (state_28677[(1)]);
if((state_val_28678 === (7))){
var inst_28672 = (state_28677[(2)]);
var state_28677__$1 = state_28677;
var statearr_28679_28701 = state_28677__$1;
(statearr_28679_28701[(2)] = inst_28672);

(statearr_28679_28701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (1))){
var inst_28654 = null;
var state_28677__$1 = (function (){var statearr_28680 = state_28677;
(statearr_28680[(7)] = inst_28654);

return statearr_28680;
})();
var statearr_28681_28702 = state_28677__$1;
(statearr_28681_28702[(2)] = null);

(statearr_28681_28702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (4))){
var inst_28657 = (state_28677[(8)]);
var inst_28657__$1 = (state_28677[(2)]);
var inst_28658 = (inst_28657__$1 == null);
var inst_28659 = cljs.core.not.call(null,inst_28658);
var state_28677__$1 = (function (){var statearr_28682 = state_28677;
(statearr_28682[(8)] = inst_28657__$1);

return statearr_28682;
})();
if(inst_28659){
var statearr_28683_28703 = state_28677__$1;
(statearr_28683_28703[(1)] = (5));

} else {
var statearr_28684_28704 = state_28677__$1;
(statearr_28684_28704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (6))){
var state_28677__$1 = state_28677;
var statearr_28685_28705 = state_28677__$1;
(statearr_28685_28705[(2)] = null);

(statearr_28685_28705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (3))){
var inst_28674 = (state_28677[(2)]);
var inst_28675 = cljs.core.async.close_BANG_.call(null,out);
var state_28677__$1 = (function (){var statearr_28686 = state_28677;
(statearr_28686[(9)] = inst_28674);

return statearr_28686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28677__$1,inst_28675);
} else {
if((state_val_28678 === (2))){
var state_28677__$1 = state_28677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28677__$1,(4),ch);
} else {
if((state_val_28678 === (11))){
var inst_28657 = (state_28677[(8)]);
var inst_28666 = (state_28677[(2)]);
var inst_28654 = inst_28657;
var state_28677__$1 = (function (){var statearr_28687 = state_28677;
(statearr_28687[(7)] = inst_28654);

(statearr_28687[(10)] = inst_28666);

return statearr_28687;
})();
var statearr_28688_28706 = state_28677__$1;
(statearr_28688_28706[(2)] = null);

(statearr_28688_28706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (9))){
var inst_28657 = (state_28677[(8)]);
var state_28677__$1 = state_28677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28677__$1,(11),out,inst_28657);
} else {
if((state_val_28678 === (5))){
var inst_28654 = (state_28677[(7)]);
var inst_28657 = (state_28677[(8)]);
var inst_28661 = cljs.core._EQ_.call(null,inst_28657,inst_28654);
var state_28677__$1 = state_28677;
if(inst_28661){
var statearr_28690_28707 = state_28677__$1;
(statearr_28690_28707[(1)] = (8));

} else {
var statearr_28691_28708 = state_28677__$1;
(statearr_28691_28708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (10))){
var inst_28669 = (state_28677[(2)]);
var state_28677__$1 = state_28677;
var statearr_28692_28709 = state_28677__$1;
(statearr_28692_28709[(2)] = inst_28669);

(statearr_28692_28709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (8))){
var inst_28654 = (state_28677[(7)]);
var tmp28689 = inst_28654;
var inst_28654__$1 = tmp28689;
var state_28677__$1 = (function (){var statearr_28693 = state_28677;
(statearr_28693[(7)] = inst_28654__$1);

return statearr_28693;
})();
var statearr_28694_28710 = state_28677__$1;
(statearr_28694_28710[(2)] = null);

(statearr_28694_28710[(1)] = (2));


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
});})(c__26964__auto___28700,out))
;
return ((function (switch__26874__auto__,c__26964__auto___28700,out){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_28695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28695[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_28695[(1)] = (1));

return statearr_28695;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_28677){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_28677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28696){if((e28696 instanceof Object)){
var ex__26878__auto__ = e28696;
var statearr_28697_28711 = state_28677;
(statearr_28697_28711[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28712 = state_28677;
state_28677 = G__28712;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_28677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_28677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___28700,out))
})();
var state__26966__auto__ = (function (){var statearr_28698 = f__26965__auto__.call(null);
(statearr_28698[(6)] = c__26964__auto___28700);

return statearr_28698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28700,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28714 = arguments.length;
switch (G__28714) {
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
var c__26964__auto___28780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28780,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___28780,out){
return (function (state_28752){
var state_val_28753 = (state_28752[(1)]);
if((state_val_28753 === (7))){
var inst_28748 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28754_28781 = state_28752__$1;
(statearr_28754_28781[(2)] = inst_28748);

(statearr_28754_28781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (1))){
var inst_28715 = (new Array(n));
var inst_28716 = inst_28715;
var inst_28717 = (0);
var state_28752__$1 = (function (){var statearr_28755 = state_28752;
(statearr_28755[(7)] = inst_28717);

(statearr_28755[(8)] = inst_28716);

return statearr_28755;
})();
var statearr_28756_28782 = state_28752__$1;
(statearr_28756_28782[(2)] = null);

(statearr_28756_28782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (4))){
var inst_28720 = (state_28752[(9)]);
var inst_28720__$1 = (state_28752[(2)]);
var inst_28721 = (inst_28720__$1 == null);
var inst_28722 = cljs.core.not.call(null,inst_28721);
var state_28752__$1 = (function (){var statearr_28757 = state_28752;
(statearr_28757[(9)] = inst_28720__$1);

return statearr_28757;
})();
if(inst_28722){
var statearr_28758_28783 = state_28752__$1;
(statearr_28758_28783[(1)] = (5));

} else {
var statearr_28759_28784 = state_28752__$1;
(statearr_28759_28784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (15))){
var inst_28742 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28760_28785 = state_28752__$1;
(statearr_28760_28785[(2)] = inst_28742);

(statearr_28760_28785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (13))){
var state_28752__$1 = state_28752;
var statearr_28761_28786 = state_28752__$1;
(statearr_28761_28786[(2)] = null);

(statearr_28761_28786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (6))){
var inst_28717 = (state_28752[(7)]);
var inst_28738 = (inst_28717 > (0));
var state_28752__$1 = state_28752;
if(cljs.core.truth_(inst_28738)){
var statearr_28762_28787 = state_28752__$1;
(statearr_28762_28787[(1)] = (12));

} else {
var statearr_28763_28788 = state_28752__$1;
(statearr_28763_28788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (3))){
var inst_28750 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28752__$1,inst_28750);
} else {
if((state_val_28753 === (12))){
var inst_28716 = (state_28752[(8)]);
var inst_28740 = cljs.core.vec.call(null,inst_28716);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28752__$1,(15),out,inst_28740);
} else {
if((state_val_28753 === (2))){
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28752__$1,(4),ch);
} else {
if((state_val_28753 === (11))){
var inst_28732 = (state_28752[(2)]);
var inst_28733 = (new Array(n));
var inst_28716 = inst_28733;
var inst_28717 = (0);
var state_28752__$1 = (function (){var statearr_28764 = state_28752;
(statearr_28764[(7)] = inst_28717);

(statearr_28764[(10)] = inst_28732);

(statearr_28764[(8)] = inst_28716);

return statearr_28764;
})();
var statearr_28765_28789 = state_28752__$1;
(statearr_28765_28789[(2)] = null);

(statearr_28765_28789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (9))){
var inst_28716 = (state_28752[(8)]);
var inst_28730 = cljs.core.vec.call(null,inst_28716);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28752__$1,(11),out,inst_28730);
} else {
if((state_val_28753 === (5))){
var inst_28725 = (state_28752[(11)]);
var inst_28720 = (state_28752[(9)]);
var inst_28717 = (state_28752[(7)]);
var inst_28716 = (state_28752[(8)]);
var inst_28724 = (inst_28716[inst_28717] = inst_28720);
var inst_28725__$1 = (inst_28717 + (1));
var inst_28726 = (inst_28725__$1 < n);
var state_28752__$1 = (function (){var statearr_28766 = state_28752;
(statearr_28766[(11)] = inst_28725__$1);

(statearr_28766[(12)] = inst_28724);

return statearr_28766;
})();
if(cljs.core.truth_(inst_28726)){
var statearr_28767_28790 = state_28752__$1;
(statearr_28767_28790[(1)] = (8));

} else {
var statearr_28768_28791 = state_28752__$1;
(statearr_28768_28791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (14))){
var inst_28745 = (state_28752[(2)]);
var inst_28746 = cljs.core.async.close_BANG_.call(null,out);
var state_28752__$1 = (function (){var statearr_28770 = state_28752;
(statearr_28770[(13)] = inst_28745);

return statearr_28770;
})();
var statearr_28771_28792 = state_28752__$1;
(statearr_28771_28792[(2)] = inst_28746);

(statearr_28771_28792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (10))){
var inst_28736 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28772_28793 = state_28752__$1;
(statearr_28772_28793[(2)] = inst_28736);

(statearr_28772_28793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (8))){
var inst_28725 = (state_28752[(11)]);
var inst_28716 = (state_28752[(8)]);
var tmp28769 = inst_28716;
var inst_28716__$1 = tmp28769;
var inst_28717 = inst_28725;
var state_28752__$1 = (function (){var statearr_28773 = state_28752;
(statearr_28773[(7)] = inst_28717);

(statearr_28773[(8)] = inst_28716__$1);

return statearr_28773;
})();
var statearr_28774_28794 = state_28752__$1;
(statearr_28774_28794[(2)] = null);

(statearr_28774_28794[(1)] = (2));


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
});})(c__26964__auto___28780,out))
;
return ((function (switch__26874__auto__,c__26964__auto___28780,out){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_28775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28775[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_28775[(1)] = (1));

return statearr_28775;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_28752){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_28752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28776){if((e28776 instanceof Object)){
var ex__26878__auto__ = e28776;
var statearr_28777_28795 = state_28752;
(statearr_28777_28795[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28796 = state_28752;
state_28752 = G__28796;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_28752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_28752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___28780,out))
})();
var state__26966__auto__ = (function (){var statearr_28778 = f__26965__auto__.call(null);
(statearr_28778[(6)] = c__26964__auto___28780);

return statearr_28778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28780,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28798 = arguments.length;
switch (G__28798) {
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
var c__26964__auto___28868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28868,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___28868,out){
return (function (state_28840){
var state_val_28841 = (state_28840[(1)]);
if((state_val_28841 === (7))){
var inst_28836 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
var statearr_28842_28869 = state_28840__$1;
(statearr_28842_28869[(2)] = inst_28836);

(statearr_28842_28869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (1))){
var inst_28799 = [];
var inst_28800 = inst_28799;
var inst_28801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28840__$1 = (function (){var statearr_28843 = state_28840;
(statearr_28843[(7)] = inst_28801);

(statearr_28843[(8)] = inst_28800);

return statearr_28843;
})();
var statearr_28844_28870 = state_28840__$1;
(statearr_28844_28870[(2)] = null);

(statearr_28844_28870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (4))){
var inst_28804 = (state_28840[(9)]);
var inst_28804__$1 = (state_28840[(2)]);
var inst_28805 = (inst_28804__$1 == null);
var inst_28806 = cljs.core.not.call(null,inst_28805);
var state_28840__$1 = (function (){var statearr_28845 = state_28840;
(statearr_28845[(9)] = inst_28804__$1);

return statearr_28845;
})();
if(inst_28806){
var statearr_28846_28871 = state_28840__$1;
(statearr_28846_28871[(1)] = (5));

} else {
var statearr_28847_28872 = state_28840__$1;
(statearr_28847_28872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (15))){
var inst_28830 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
var statearr_28848_28873 = state_28840__$1;
(statearr_28848_28873[(2)] = inst_28830);

(statearr_28848_28873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (13))){
var state_28840__$1 = state_28840;
var statearr_28849_28874 = state_28840__$1;
(statearr_28849_28874[(2)] = null);

(statearr_28849_28874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (6))){
var inst_28800 = (state_28840[(8)]);
var inst_28825 = inst_28800.length;
var inst_28826 = (inst_28825 > (0));
var state_28840__$1 = state_28840;
if(cljs.core.truth_(inst_28826)){
var statearr_28850_28875 = state_28840__$1;
(statearr_28850_28875[(1)] = (12));

} else {
var statearr_28851_28876 = state_28840__$1;
(statearr_28851_28876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (3))){
var inst_28838 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28840__$1,inst_28838);
} else {
if((state_val_28841 === (12))){
var inst_28800 = (state_28840[(8)]);
var inst_28828 = cljs.core.vec.call(null,inst_28800);
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28840__$1,(15),out,inst_28828);
} else {
if((state_val_28841 === (2))){
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28840__$1,(4),ch);
} else {
if((state_val_28841 === (11))){
var inst_28804 = (state_28840[(9)]);
var inst_28808 = (state_28840[(10)]);
var inst_28818 = (state_28840[(2)]);
var inst_28819 = [];
var inst_28820 = inst_28819.push(inst_28804);
var inst_28800 = inst_28819;
var inst_28801 = inst_28808;
var state_28840__$1 = (function (){var statearr_28852 = state_28840;
(statearr_28852[(11)] = inst_28818);

(statearr_28852[(7)] = inst_28801);

(statearr_28852[(8)] = inst_28800);

(statearr_28852[(12)] = inst_28820);

return statearr_28852;
})();
var statearr_28853_28877 = state_28840__$1;
(statearr_28853_28877[(2)] = null);

(statearr_28853_28877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (9))){
var inst_28800 = (state_28840[(8)]);
var inst_28816 = cljs.core.vec.call(null,inst_28800);
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28840__$1,(11),out,inst_28816);
} else {
if((state_val_28841 === (5))){
var inst_28804 = (state_28840[(9)]);
var inst_28801 = (state_28840[(7)]);
var inst_28808 = (state_28840[(10)]);
var inst_28808__$1 = f.call(null,inst_28804);
var inst_28809 = cljs.core._EQ_.call(null,inst_28808__$1,inst_28801);
var inst_28810 = cljs.core.keyword_identical_QMARK_.call(null,inst_28801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28811 = ((inst_28809) || (inst_28810));
var state_28840__$1 = (function (){var statearr_28854 = state_28840;
(statearr_28854[(10)] = inst_28808__$1);

return statearr_28854;
})();
if(cljs.core.truth_(inst_28811)){
var statearr_28855_28878 = state_28840__$1;
(statearr_28855_28878[(1)] = (8));

} else {
var statearr_28856_28879 = state_28840__$1;
(statearr_28856_28879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (14))){
var inst_28833 = (state_28840[(2)]);
var inst_28834 = cljs.core.async.close_BANG_.call(null,out);
var state_28840__$1 = (function (){var statearr_28858 = state_28840;
(statearr_28858[(13)] = inst_28833);

return statearr_28858;
})();
var statearr_28859_28880 = state_28840__$1;
(statearr_28859_28880[(2)] = inst_28834);

(statearr_28859_28880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (10))){
var inst_28823 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
var statearr_28860_28881 = state_28840__$1;
(statearr_28860_28881[(2)] = inst_28823);

(statearr_28860_28881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (8))){
var inst_28804 = (state_28840[(9)]);
var inst_28800 = (state_28840[(8)]);
var inst_28808 = (state_28840[(10)]);
var inst_28813 = inst_28800.push(inst_28804);
var tmp28857 = inst_28800;
var inst_28800__$1 = tmp28857;
var inst_28801 = inst_28808;
var state_28840__$1 = (function (){var statearr_28861 = state_28840;
(statearr_28861[(7)] = inst_28801);

(statearr_28861[(14)] = inst_28813);

(statearr_28861[(8)] = inst_28800__$1);

return statearr_28861;
})();
var statearr_28862_28882 = state_28840__$1;
(statearr_28862_28882[(2)] = null);

(statearr_28862_28882[(1)] = (2));


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
});})(c__26964__auto___28868,out))
;
return ((function (switch__26874__auto__,c__26964__auto___28868,out){
return (function() {
var cljs$core$async$state_machine__26875__auto__ = null;
var cljs$core$async$state_machine__26875__auto____0 = (function (){
var statearr_28863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28863[(0)] = cljs$core$async$state_machine__26875__auto__);

(statearr_28863[(1)] = (1));

return statearr_28863;
});
var cljs$core$async$state_machine__26875__auto____1 = (function (state_28840){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_28840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e28864){if((e28864 instanceof Object)){
var ex__26878__auto__ = e28864;
var statearr_28865_28883 = state_28840;
(statearr_28865_28883[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28884 = state_28840;
state_28840 = G__28884;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
cljs$core$async$state_machine__26875__auto__ = function(state_28840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26875__auto____1.call(this,state_28840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26875__auto____0;
cljs$core$async$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26875__auto____1;
return cljs$core$async$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___28868,out))
})();
var state__26966__auto__ = (function (){var statearr_28866 = f__26965__auto__.call(null);
(statearr_28866[(6)] = c__26964__auto___28868);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28868,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525295745633

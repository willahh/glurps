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
var G__59189 = arguments.length;
switch (G__59189) {
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
if(typeof cljs.core.async.t_cljs$core$async59190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59190 = (function (f,blockable,meta59191){
this.f = f;
this.blockable = blockable;
this.meta59191 = meta59191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59192,meta59191__$1){
var self__ = this;
var _59192__$1 = this;
return (new cljs.core.async.t_cljs$core$async59190(self__.f,self__.blockable,meta59191__$1));
});

cljs.core.async.t_cljs$core$async59190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59192){
var self__ = this;
var _59192__$1 = this;
return self__.meta59191;
});

cljs.core.async.t_cljs$core$async59190.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async59190.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async59190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async59190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta59191","meta59191",1742805474,null)], null);
});

cljs.core.async.t_cljs$core$async59190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59190";

cljs.core.async.t_cljs$core$async59190.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59190");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59190.
 */
cljs.core.async.__GT_t_cljs$core$async59190 = (function cljs$core$async$__GT_t_cljs$core$async59190(f__$1,blockable__$1,meta59191){
return (new cljs.core.async.t_cljs$core$async59190(f__$1,blockable__$1,meta59191));
});

}

return (new cljs.core.async.t_cljs$core$async59190(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__59196 = arguments.length;
switch (G__59196) {
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
var G__59199 = arguments.length;
switch (G__59199) {
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
var G__59202 = arguments.length;
switch (G__59202) {
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
var val_59204 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_59204);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_59204,ret){
return (function (){
return fn1.call(null,val_59204);
});})(val_59204,ret))
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
var G__59206 = arguments.length;
switch (G__59206) {
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
var n__4376__auto___59208 = n;
var x_59209 = (0);
while(true){
if((x_59209 < n__4376__auto___59208)){
(a[x_59209] = (0));

var G__59210 = (x_59209 + (1));
x_59209 = G__59210;
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

var G__59211 = (i + (1));
i = G__59211;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async59212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59212 = (function (flag,meta59213){
this.flag = flag;
this.meta59213 = meta59213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_59214,meta59213__$1){
var self__ = this;
var _59214__$1 = this;
return (new cljs.core.async.t_cljs$core$async59212(self__.flag,meta59213__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_59214){
var self__ = this;
var _59214__$1 = this;
return self__.meta59213;
});})(flag))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async59212.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta59213","meta59213",-1731964520,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async59212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59212";

cljs.core.async.t_cljs$core$async59212.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59212");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59212.
 */
cljs.core.async.__GT_t_cljs$core$async59212 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async59212(flag__$1,meta59213){
return (new cljs.core.async.t_cljs$core$async59212(flag__$1,meta59213));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async59212(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async59215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59215 = (function (flag,cb,meta59216){
this.flag = flag;
this.cb = cb;
this.meta59216 = meta59216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59217,meta59216__$1){
var self__ = this;
var _59217__$1 = this;
return (new cljs.core.async.t_cljs$core$async59215(self__.flag,self__.cb,meta59216__$1));
});

cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59217){
var self__ = this;
var _59217__$1 = this;
return self__.meta59216;
});

cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async59215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta59216","meta59216",680397914,null)], null);
});

cljs.core.async.t_cljs$core$async59215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59215";

cljs.core.async.t_cljs$core$async59215.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59215");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59215.
 */
cljs.core.async.__GT_t_cljs$core$async59215 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async59215(flag__$1,cb__$1,meta59216){
return (new cljs.core.async.t_cljs$core$async59215(flag__$1,cb__$1,meta59216));
});

}

return (new cljs.core.async.t_cljs$core$async59215(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__59218_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59218_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59219_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59219_SHARP_,port], null));
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
var G__59220 = (i + (1));
i = G__59220;
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
var len__4499__auto___59226 = arguments.length;
var i__4500__auto___59227 = (0);
while(true){
if((i__4500__auto___59227 < len__4499__auto___59226)){
args__4502__auto__.push((arguments[i__4500__auto___59227]));

var G__59228 = (i__4500__auto___59227 + (1));
i__4500__auto___59227 = G__59228;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__59223){
var map__59224 = p__59223;
var map__59224__$1 = ((((!((map__59224 == null)))?(((((map__59224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59224):map__59224);
var opts = map__59224__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq59221){
var G__59222 = cljs.core.first.call(null,seq59221);
var seq59221__$1 = cljs.core.next.call(null,seq59221);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59222,seq59221__$1);
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
var G__59230 = arguments.length;
switch (G__59230) {
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
var c__27974__auto___59276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___59276){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___59276){
return (function (state_59254){
var state_val_59255 = (state_59254[(1)]);
if((state_val_59255 === (7))){
var inst_59250 = (state_59254[(2)]);
var state_59254__$1 = state_59254;
var statearr_59256_59277 = state_59254__$1;
(statearr_59256_59277[(2)] = inst_59250);

(statearr_59256_59277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (1))){
var state_59254__$1 = state_59254;
var statearr_59257_59278 = state_59254__$1;
(statearr_59257_59278[(2)] = null);

(statearr_59257_59278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (4))){
var inst_59233 = (state_59254[(7)]);
var inst_59233__$1 = (state_59254[(2)]);
var inst_59234 = (inst_59233__$1 == null);
var state_59254__$1 = (function (){var statearr_59258 = state_59254;
(statearr_59258[(7)] = inst_59233__$1);

return statearr_59258;
})();
if(cljs.core.truth_(inst_59234)){
var statearr_59259_59279 = state_59254__$1;
(statearr_59259_59279[(1)] = (5));

} else {
var statearr_59260_59280 = state_59254__$1;
(statearr_59260_59280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (13))){
var state_59254__$1 = state_59254;
var statearr_59261_59281 = state_59254__$1;
(statearr_59261_59281[(2)] = null);

(statearr_59261_59281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (6))){
var inst_59233 = (state_59254[(7)]);
var state_59254__$1 = state_59254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59254__$1,(11),to,inst_59233);
} else {
if((state_val_59255 === (3))){
var inst_59252 = (state_59254[(2)]);
var state_59254__$1 = state_59254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59254__$1,inst_59252);
} else {
if((state_val_59255 === (12))){
var state_59254__$1 = state_59254;
var statearr_59262_59282 = state_59254__$1;
(statearr_59262_59282[(2)] = null);

(statearr_59262_59282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (2))){
var state_59254__$1 = state_59254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59254__$1,(4),from);
} else {
if((state_val_59255 === (11))){
var inst_59243 = (state_59254[(2)]);
var state_59254__$1 = state_59254;
if(cljs.core.truth_(inst_59243)){
var statearr_59263_59283 = state_59254__$1;
(statearr_59263_59283[(1)] = (12));

} else {
var statearr_59264_59284 = state_59254__$1;
(statearr_59264_59284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (9))){
var state_59254__$1 = state_59254;
var statearr_59265_59285 = state_59254__$1;
(statearr_59265_59285[(2)] = null);

(statearr_59265_59285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (5))){
var state_59254__$1 = state_59254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59266_59286 = state_59254__$1;
(statearr_59266_59286[(1)] = (8));

} else {
var statearr_59267_59287 = state_59254__$1;
(statearr_59267_59287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (14))){
var inst_59248 = (state_59254[(2)]);
var state_59254__$1 = state_59254;
var statearr_59268_59288 = state_59254__$1;
(statearr_59268_59288[(2)] = inst_59248);

(statearr_59268_59288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (10))){
var inst_59240 = (state_59254[(2)]);
var state_59254__$1 = state_59254;
var statearr_59269_59289 = state_59254__$1;
(statearr_59269_59289[(2)] = inst_59240);

(statearr_59269_59289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59255 === (8))){
var inst_59237 = cljs.core.async.close_BANG_.call(null,to);
var state_59254__$1 = state_59254;
var statearr_59270_59290 = state_59254__$1;
(statearr_59270_59290[(2)] = inst_59237);

(statearr_59270_59290[(1)] = (10));


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
});})(c__27974__auto___59276))
;
return ((function (switch__27884__auto__,c__27974__auto___59276){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_59271 = [null,null,null,null,null,null,null,null];
(statearr_59271[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_59271[(1)] = (1));

return statearr_59271;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_59254){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59272){if((e59272 instanceof Object)){
var ex__27888__auto__ = e59272;
var statearr_59273_59291 = state_59254;
(statearr_59273_59291[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59292 = state_59254;
state_59254 = G__59292;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_59254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_59254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___59276))
})();
var state__27976__auto__ = (function (){var statearr_59274 = f__27975__auto__.call(null);
(statearr_59274[(6)] = c__27974__auto___59276);

return statearr_59274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___59276))
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
return (function (p__59293){
var vec__59294 = p__59293;
var v = cljs.core.nth.call(null,vec__59294,(0),null);
var p = cljs.core.nth.call(null,vec__59294,(1),null);
var job = vec__59294;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27974__auto___59465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___59465,res,vec__59294,v,p,job,jobs,results){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___59465,res,vec__59294,v,p,job,jobs,results){
return (function (state_59301){
var state_val_59302 = (state_59301[(1)]);
if((state_val_59302 === (1))){
var state_59301__$1 = state_59301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59301__$1,(2),res,v);
} else {
if((state_val_59302 === (2))){
var inst_59298 = (state_59301[(2)]);
var inst_59299 = cljs.core.async.close_BANG_.call(null,res);
var state_59301__$1 = (function (){var statearr_59303 = state_59301;
(statearr_59303[(7)] = inst_59298);

return statearr_59303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59301__$1,inst_59299);
} else {
return null;
}
}
});})(c__27974__auto___59465,res,vec__59294,v,p,job,jobs,results))
;
return ((function (switch__27884__auto__,c__27974__auto___59465,res,vec__59294,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_59304 = [null,null,null,null,null,null,null,null];
(statearr_59304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_59304[(1)] = (1));

return statearr_59304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_59301){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59305){if((e59305 instanceof Object)){
var ex__27888__auto__ = e59305;
var statearr_59306_59466 = state_59301;
(statearr_59306_59466[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59467 = state_59301;
state_59301 = G__59467;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_59301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_59301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___59465,res,vec__59294,v,p,job,jobs,results))
})();
var state__27976__auto__ = (function (){var statearr_59307 = f__27975__auto__.call(null);
(statearr_59307[(6)] = c__27974__auto___59465);

return statearr_59307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___59465,res,vec__59294,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__59308){
var vec__59309 = p__59308;
var v = cljs.core.nth.call(null,vec__59309,(0),null);
var p = cljs.core.nth.call(null,vec__59309,(1),null);
var job = vec__59309;
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
var n__4376__auto___59468 = n;
var __59469 = (0);
while(true){
if((__59469 < n__4376__auto___59468)){
var G__59312_59470 = type;
var G__59312_59471__$1 = (((G__59312_59470 instanceof cljs.core.Keyword))?G__59312_59470.fqn:null);
switch (G__59312_59471__$1) {
case "compute":
var c__27974__auto___59473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59469,c__27974__auto___59473,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (__59469,c__27974__auto___59473,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async){
return (function (state_59325){
var state_val_59326 = (state_59325[(1)]);
if((state_val_59326 === (1))){
var state_59325__$1 = state_59325;
var statearr_59327_59474 = state_59325__$1;
(statearr_59327_59474[(2)] = null);

(statearr_59327_59474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59326 === (2))){
var state_59325__$1 = state_59325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59325__$1,(4),jobs);
} else {
if((state_val_59326 === (3))){
var inst_59323 = (state_59325[(2)]);
var state_59325__$1 = state_59325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59325__$1,inst_59323);
} else {
if((state_val_59326 === (4))){
var inst_59315 = (state_59325[(2)]);
var inst_59316 = process__$1.call(null,inst_59315);
var state_59325__$1 = state_59325;
if(cljs.core.truth_(inst_59316)){
var statearr_59328_59475 = state_59325__$1;
(statearr_59328_59475[(1)] = (5));

} else {
var statearr_59329_59476 = state_59325__$1;
(statearr_59329_59476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59326 === (5))){
var state_59325__$1 = state_59325;
var statearr_59330_59477 = state_59325__$1;
(statearr_59330_59477[(2)] = null);

(statearr_59330_59477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59326 === (6))){
var state_59325__$1 = state_59325;
var statearr_59331_59478 = state_59325__$1;
(statearr_59331_59478[(2)] = null);

(statearr_59331_59478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59326 === (7))){
var inst_59321 = (state_59325[(2)]);
var state_59325__$1 = state_59325;
var statearr_59332_59479 = state_59325__$1;
(statearr_59332_59479[(2)] = inst_59321);

(statearr_59332_59479[(1)] = (3));


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
});})(__59469,c__27974__auto___59473,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async))
;
return ((function (__59469,switch__27884__auto__,c__27974__auto___59473,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_59333 = [null,null,null,null,null,null,null];
(statearr_59333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_59333[(1)] = (1));

return statearr_59333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_59325){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59334){if((e59334 instanceof Object)){
var ex__27888__auto__ = e59334;
var statearr_59335_59480 = state_59325;
(statearr_59335_59480[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59481 = state_59325;
state_59325 = G__59481;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_59325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_59325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(__59469,switch__27884__auto__,c__27974__auto___59473,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async))
})();
var state__27976__auto__ = (function (){var statearr_59336 = f__27975__auto__.call(null);
(statearr_59336[(6)] = c__27974__auto___59473);

return statearr_59336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(__59469,c__27974__auto___59473,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async))
);


break;
case "async":
var c__27974__auto___59482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59469,c__27974__auto___59482,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (__59469,c__27974__auto___59482,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async){
return (function (state_59349){
var state_val_59350 = (state_59349[(1)]);
if((state_val_59350 === (1))){
var state_59349__$1 = state_59349;
var statearr_59351_59483 = state_59349__$1;
(statearr_59351_59483[(2)] = null);

(statearr_59351_59483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59350 === (2))){
var state_59349__$1 = state_59349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59349__$1,(4),jobs);
} else {
if((state_val_59350 === (3))){
var inst_59347 = (state_59349[(2)]);
var state_59349__$1 = state_59349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59349__$1,inst_59347);
} else {
if((state_val_59350 === (4))){
var inst_59339 = (state_59349[(2)]);
var inst_59340 = async.call(null,inst_59339);
var state_59349__$1 = state_59349;
if(cljs.core.truth_(inst_59340)){
var statearr_59352_59484 = state_59349__$1;
(statearr_59352_59484[(1)] = (5));

} else {
var statearr_59353_59485 = state_59349__$1;
(statearr_59353_59485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59350 === (5))){
var state_59349__$1 = state_59349;
var statearr_59354_59486 = state_59349__$1;
(statearr_59354_59486[(2)] = null);

(statearr_59354_59486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59350 === (6))){
var state_59349__$1 = state_59349;
var statearr_59355_59487 = state_59349__$1;
(statearr_59355_59487[(2)] = null);

(statearr_59355_59487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59350 === (7))){
var inst_59345 = (state_59349[(2)]);
var state_59349__$1 = state_59349;
var statearr_59356_59488 = state_59349__$1;
(statearr_59356_59488[(2)] = inst_59345);

(statearr_59356_59488[(1)] = (3));


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
});})(__59469,c__27974__auto___59482,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async))
;
return ((function (__59469,switch__27884__auto__,c__27974__auto___59482,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_59357 = [null,null,null,null,null,null,null];
(statearr_59357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_59357[(1)] = (1));

return statearr_59357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_59349){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59358){if((e59358 instanceof Object)){
var ex__27888__auto__ = e59358;
var statearr_59359_59489 = state_59349;
(statearr_59359_59489[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59490 = state_59349;
state_59349 = G__59490;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_59349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_59349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(__59469,switch__27884__auto__,c__27974__auto___59482,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async))
})();
var state__27976__auto__ = (function (){var statearr_59360 = f__27975__auto__.call(null);
(statearr_59360[(6)] = c__27974__auto___59482);

return statearr_59360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(__59469,c__27974__auto___59482,G__59312_59470,G__59312_59471__$1,n__4376__auto___59468,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59312_59471__$1)].join('')));

}

var G__59491 = (__59469 + (1));
__59469 = G__59491;
continue;
} else {
}
break;
}

var c__27974__auto___59492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___59492,jobs,results,process__$1,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___59492,jobs,results,process__$1,async){
return (function (state_59382){
var state_val_59383 = (state_59382[(1)]);
if((state_val_59383 === (1))){
var state_59382__$1 = state_59382;
var statearr_59384_59493 = state_59382__$1;
(statearr_59384_59493[(2)] = null);

(statearr_59384_59493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59383 === (2))){
var state_59382__$1 = state_59382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59382__$1,(4),from);
} else {
if((state_val_59383 === (3))){
var inst_59380 = (state_59382[(2)]);
var state_59382__$1 = state_59382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59382__$1,inst_59380);
} else {
if((state_val_59383 === (4))){
var inst_59363 = (state_59382[(7)]);
var inst_59363__$1 = (state_59382[(2)]);
var inst_59364 = (inst_59363__$1 == null);
var state_59382__$1 = (function (){var statearr_59385 = state_59382;
(statearr_59385[(7)] = inst_59363__$1);

return statearr_59385;
})();
if(cljs.core.truth_(inst_59364)){
var statearr_59386_59494 = state_59382__$1;
(statearr_59386_59494[(1)] = (5));

} else {
var statearr_59387_59495 = state_59382__$1;
(statearr_59387_59495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59383 === (5))){
var inst_59366 = cljs.core.async.close_BANG_.call(null,jobs);
var state_59382__$1 = state_59382;
var statearr_59388_59496 = state_59382__$1;
(statearr_59388_59496[(2)] = inst_59366);

(statearr_59388_59496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59383 === (6))){
var inst_59363 = (state_59382[(7)]);
var inst_59368 = (state_59382[(8)]);
var inst_59368__$1 = cljs.core.async.chan.call(null,(1));
var inst_59369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59370 = [inst_59363,inst_59368__$1];
var inst_59371 = (new cljs.core.PersistentVector(null,2,(5),inst_59369,inst_59370,null));
var state_59382__$1 = (function (){var statearr_59389 = state_59382;
(statearr_59389[(8)] = inst_59368__$1);

return statearr_59389;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59382__$1,(8),jobs,inst_59371);
} else {
if((state_val_59383 === (7))){
var inst_59378 = (state_59382[(2)]);
var state_59382__$1 = state_59382;
var statearr_59390_59497 = state_59382__$1;
(statearr_59390_59497[(2)] = inst_59378);

(statearr_59390_59497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59383 === (8))){
var inst_59368 = (state_59382[(8)]);
var inst_59373 = (state_59382[(2)]);
var state_59382__$1 = (function (){var statearr_59391 = state_59382;
(statearr_59391[(9)] = inst_59373);

return statearr_59391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59382__$1,(9),results,inst_59368);
} else {
if((state_val_59383 === (9))){
var inst_59375 = (state_59382[(2)]);
var state_59382__$1 = (function (){var statearr_59392 = state_59382;
(statearr_59392[(10)] = inst_59375);

return statearr_59392;
})();
var statearr_59393_59498 = state_59382__$1;
(statearr_59393_59498[(2)] = null);

(statearr_59393_59498[(1)] = (2));


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
});})(c__27974__auto___59492,jobs,results,process__$1,async))
;
return ((function (switch__27884__auto__,c__27974__auto___59492,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_59394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_59394[(1)] = (1));

return statearr_59394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_59382){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59395){if((e59395 instanceof Object)){
var ex__27888__auto__ = e59395;
var statearr_59396_59499 = state_59382;
(statearr_59396_59499[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59500 = state_59382;
state_59382 = G__59500;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_59382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_59382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___59492,jobs,results,process__$1,async))
})();
var state__27976__auto__ = (function (){var statearr_59397 = f__27975__auto__.call(null);
(statearr_59397[(6)] = c__27974__auto___59492);

return statearr_59397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___59492,jobs,results,process__$1,async))
);


var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__,jobs,results,process__$1,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__,jobs,results,process__$1,async){
return (function (state_59435){
var state_val_59436 = (state_59435[(1)]);
if((state_val_59436 === (7))){
var inst_59431 = (state_59435[(2)]);
var state_59435__$1 = state_59435;
var statearr_59437_59501 = state_59435__$1;
(statearr_59437_59501[(2)] = inst_59431);

(statearr_59437_59501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (20))){
var state_59435__$1 = state_59435;
var statearr_59438_59502 = state_59435__$1;
(statearr_59438_59502[(2)] = null);

(statearr_59438_59502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (1))){
var state_59435__$1 = state_59435;
var statearr_59439_59503 = state_59435__$1;
(statearr_59439_59503[(2)] = null);

(statearr_59439_59503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (4))){
var inst_59400 = (state_59435[(7)]);
var inst_59400__$1 = (state_59435[(2)]);
var inst_59401 = (inst_59400__$1 == null);
var state_59435__$1 = (function (){var statearr_59440 = state_59435;
(statearr_59440[(7)] = inst_59400__$1);

return statearr_59440;
})();
if(cljs.core.truth_(inst_59401)){
var statearr_59441_59504 = state_59435__$1;
(statearr_59441_59504[(1)] = (5));

} else {
var statearr_59442_59505 = state_59435__$1;
(statearr_59442_59505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (15))){
var inst_59413 = (state_59435[(8)]);
var state_59435__$1 = state_59435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59435__$1,(18),to,inst_59413);
} else {
if((state_val_59436 === (21))){
var inst_59426 = (state_59435[(2)]);
var state_59435__$1 = state_59435;
var statearr_59443_59506 = state_59435__$1;
(statearr_59443_59506[(2)] = inst_59426);

(statearr_59443_59506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (13))){
var inst_59428 = (state_59435[(2)]);
var state_59435__$1 = (function (){var statearr_59444 = state_59435;
(statearr_59444[(9)] = inst_59428);

return statearr_59444;
})();
var statearr_59445_59507 = state_59435__$1;
(statearr_59445_59507[(2)] = null);

(statearr_59445_59507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (6))){
var inst_59400 = (state_59435[(7)]);
var state_59435__$1 = state_59435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59435__$1,(11),inst_59400);
} else {
if((state_val_59436 === (17))){
var inst_59421 = (state_59435[(2)]);
var state_59435__$1 = state_59435;
if(cljs.core.truth_(inst_59421)){
var statearr_59446_59508 = state_59435__$1;
(statearr_59446_59508[(1)] = (19));

} else {
var statearr_59447_59509 = state_59435__$1;
(statearr_59447_59509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (3))){
var inst_59433 = (state_59435[(2)]);
var state_59435__$1 = state_59435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59435__$1,inst_59433);
} else {
if((state_val_59436 === (12))){
var inst_59410 = (state_59435[(10)]);
var state_59435__$1 = state_59435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59435__$1,(14),inst_59410);
} else {
if((state_val_59436 === (2))){
var state_59435__$1 = state_59435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59435__$1,(4),results);
} else {
if((state_val_59436 === (19))){
var state_59435__$1 = state_59435;
var statearr_59448_59510 = state_59435__$1;
(statearr_59448_59510[(2)] = null);

(statearr_59448_59510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (11))){
var inst_59410 = (state_59435[(2)]);
var state_59435__$1 = (function (){var statearr_59449 = state_59435;
(statearr_59449[(10)] = inst_59410);

return statearr_59449;
})();
var statearr_59450_59511 = state_59435__$1;
(statearr_59450_59511[(2)] = null);

(statearr_59450_59511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (9))){
var state_59435__$1 = state_59435;
var statearr_59451_59512 = state_59435__$1;
(statearr_59451_59512[(2)] = null);

(statearr_59451_59512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (5))){
var state_59435__$1 = state_59435;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59452_59513 = state_59435__$1;
(statearr_59452_59513[(1)] = (8));

} else {
var statearr_59453_59514 = state_59435__$1;
(statearr_59453_59514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (14))){
var inst_59413 = (state_59435[(8)]);
var inst_59415 = (state_59435[(11)]);
var inst_59413__$1 = (state_59435[(2)]);
var inst_59414 = (inst_59413__$1 == null);
var inst_59415__$1 = cljs.core.not.call(null,inst_59414);
var state_59435__$1 = (function (){var statearr_59454 = state_59435;
(statearr_59454[(8)] = inst_59413__$1);

(statearr_59454[(11)] = inst_59415__$1);

return statearr_59454;
})();
if(inst_59415__$1){
var statearr_59455_59515 = state_59435__$1;
(statearr_59455_59515[(1)] = (15));

} else {
var statearr_59456_59516 = state_59435__$1;
(statearr_59456_59516[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (16))){
var inst_59415 = (state_59435[(11)]);
var state_59435__$1 = state_59435;
var statearr_59457_59517 = state_59435__$1;
(statearr_59457_59517[(2)] = inst_59415);

(statearr_59457_59517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (10))){
var inst_59407 = (state_59435[(2)]);
var state_59435__$1 = state_59435;
var statearr_59458_59518 = state_59435__$1;
(statearr_59458_59518[(2)] = inst_59407);

(statearr_59458_59518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (18))){
var inst_59418 = (state_59435[(2)]);
var state_59435__$1 = state_59435;
var statearr_59459_59519 = state_59435__$1;
(statearr_59459_59519[(2)] = inst_59418);

(statearr_59459_59519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59436 === (8))){
var inst_59404 = cljs.core.async.close_BANG_.call(null,to);
var state_59435__$1 = state_59435;
var statearr_59460_59520 = state_59435__$1;
(statearr_59460_59520[(2)] = inst_59404);

(statearr_59460_59520[(1)] = (10));


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
});})(c__27974__auto__,jobs,results,process__$1,async))
;
return ((function (switch__27884__auto__,c__27974__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_59461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_59461[(1)] = (1));

return statearr_59461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_59435){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59462){if((e59462 instanceof Object)){
var ex__27888__auto__ = e59462;
var statearr_59463_59521 = state_59435;
(statearr_59463_59521[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59522 = state_59435;
state_59435 = G__59522;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_59435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_59435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,jobs,results,process__$1,async))
})();
var state__27976__auto__ = (function (){var statearr_59464 = f__27975__auto__.call(null);
(statearr_59464[(6)] = c__27974__auto__);

return statearr_59464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,jobs,results,process__$1,async))
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
var G__59524 = arguments.length;
switch (G__59524) {
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
var G__59527 = arguments.length;
switch (G__59527) {
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
var G__59530 = arguments.length;
switch (G__59530) {
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
var c__27974__auto___59579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___59579,tc,fc){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___59579,tc,fc){
return (function (state_59556){
var state_val_59557 = (state_59556[(1)]);
if((state_val_59557 === (7))){
var inst_59552 = (state_59556[(2)]);
var state_59556__$1 = state_59556;
var statearr_59558_59580 = state_59556__$1;
(statearr_59558_59580[(2)] = inst_59552);

(statearr_59558_59580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (1))){
var state_59556__$1 = state_59556;
var statearr_59559_59581 = state_59556__$1;
(statearr_59559_59581[(2)] = null);

(statearr_59559_59581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (4))){
var inst_59533 = (state_59556[(7)]);
var inst_59533__$1 = (state_59556[(2)]);
var inst_59534 = (inst_59533__$1 == null);
var state_59556__$1 = (function (){var statearr_59560 = state_59556;
(statearr_59560[(7)] = inst_59533__$1);

return statearr_59560;
})();
if(cljs.core.truth_(inst_59534)){
var statearr_59561_59582 = state_59556__$1;
(statearr_59561_59582[(1)] = (5));

} else {
var statearr_59562_59583 = state_59556__$1;
(statearr_59562_59583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (13))){
var state_59556__$1 = state_59556;
var statearr_59563_59584 = state_59556__$1;
(statearr_59563_59584[(2)] = null);

(statearr_59563_59584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (6))){
var inst_59533 = (state_59556[(7)]);
var inst_59539 = p.call(null,inst_59533);
var state_59556__$1 = state_59556;
if(cljs.core.truth_(inst_59539)){
var statearr_59564_59585 = state_59556__$1;
(statearr_59564_59585[(1)] = (9));

} else {
var statearr_59565_59586 = state_59556__$1;
(statearr_59565_59586[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (3))){
var inst_59554 = (state_59556[(2)]);
var state_59556__$1 = state_59556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59556__$1,inst_59554);
} else {
if((state_val_59557 === (12))){
var state_59556__$1 = state_59556;
var statearr_59566_59587 = state_59556__$1;
(statearr_59566_59587[(2)] = null);

(statearr_59566_59587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (2))){
var state_59556__$1 = state_59556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59556__$1,(4),ch);
} else {
if((state_val_59557 === (11))){
var inst_59533 = (state_59556[(7)]);
var inst_59543 = (state_59556[(2)]);
var state_59556__$1 = state_59556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59556__$1,(8),inst_59543,inst_59533);
} else {
if((state_val_59557 === (9))){
var state_59556__$1 = state_59556;
var statearr_59567_59588 = state_59556__$1;
(statearr_59567_59588[(2)] = tc);

(statearr_59567_59588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (5))){
var inst_59536 = cljs.core.async.close_BANG_.call(null,tc);
var inst_59537 = cljs.core.async.close_BANG_.call(null,fc);
var state_59556__$1 = (function (){var statearr_59568 = state_59556;
(statearr_59568[(8)] = inst_59536);

return statearr_59568;
})();
var statearr_59569_59589 = state_59556__$1;
(statearr_59569_59589[(2)] = inst_59537);

(statearr_59569_59589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (14))){
var inst_59550 = (state_59556[(2)]);
var state_59556__$1 = state_59556;
var statearr_59570_59590 = state_59556__$1;
(statearr_59570_59590[(2)] = inst_59550);

(statearr_59570_59590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (10))){
var state_59556__$1 = state_59556;
var statearr_59571_59591 = state_59556__$1;
(statearr_59571_59591[(2)] = fc);

(statearr_59571_59591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (8))){
var inst_59545 = (state_59556[(2)]);
var state_59556__$1 = state_59556;
if(cljs.core.truth_(inst_59545)){
var statearr_59572_59592 = state_59556__$1;
(statearr_59572_59592[(1)] = (12));

} else {
var statearr_59573_59593 = state_59556__$1;
(statearr_59573_59593[(1)] = (13));

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
});})(c__27974__auto___59579,tc,fc))
;
return ((function (switch__27884__auto__,c__27974__auto___59579,tc,fc){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_59574 = [null,null,null,null,null,null,null,null,null];
(statearr_59574[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_59574[(1)] = (1));

return statearr_59574;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_59556){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59575){if((e59575 instanceof Object)){
var ex__27888__auto__ = e59575;
var statearr_59576_59594 = state_59556;
(statearr_59576_59594[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59595 = state_59556;
state_59556 = G__59595;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_59556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_59556);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___59579,tc,fc))
})();
var state__27976__auto__ = (function (){var statearr_59577 = f__27975__auto__.call(null);
(statearr_59577[(6)] = c__27974__auto___59579);

return statearr_59577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___59579,tc,fc))
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
return (function (state_59616){
var state_val_59617 = (state_59616[(1)]);
if((state_val_59617 === (7))){
var inst_59612 = (state_59616[(2)]);
var state_59616__$1 = state_59616;
var statearr_59618_59636 = state_59616__$1;
(statearr_59618_59636[(2)] = inst_59612);

(statearr_59618_59636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59617 === (1))){
var inst_59596 = init;
var state_59616__$1 = (function (){var statearr_59619 = state_59616;
(statearr_59619[(7)] = inst_59596);

return statearr_59619;
})();
var statearr_59620_59637 = state_59616__$1;
(statearr_59620_59637[(2)] = null);

(statearr_59620_59637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59617 === (4))){
var inst_59599 = (state_59616[(8)]);
var inst_59599__$1 = (state_59616[(2)]);
var inst_59600 = (inst_59599__$1 == null);
var state_59616__$1 = (function (){var statearr_59621 = state_59616;
(statearr_59621[(8)] = inst_59599__$1);

return statearr_59621;
})();
if(cljs.core.truth_(inst_59600)){
var statearr_59622_59638 = state_59616__$1;
(statearr_59622_59638[(1)] = (5));

} else {
var statearr_59623_59639 = state_59616__$1;
(statearr_59623_59639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59617 === (6))){
var inst_59599 = (state_59616[(8)]);
var inst_59596 = (state_59616[(7)]);
var inst_59603 = (state_59616[(9)]);
var inst_59603__$1 = f.call(null,inst_59596,inst_59599);
var inst_59604 = cljs.core.reduced_QMARK_.call(null,inst_59603__$1);
var state_59616__$1 = (function (){var statearr_59624 = state_59616;
(statearr_59624[(9)] = inst_59603__$1);

return statearr_59624;
})();
if(inst_59604){
var statearr_59625_59640 = state_59616__$1;
(statearr_59625_59640[(1)] = (8));

} else {
var statearr_59626_59641 = state_59616__$1;
(statearr_59626_59641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59617 === (3))){
var inst_59614 = (state_59616[(2)]);
var state_59616__$1 = state_59616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59616__$1,inst_59614);
} else {
if((state_val_59617 === (2))){
var state_59616__$1 = state_59616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59616__$1,(4),ch);
} else {
if((state_val_59617 === (9))){
var inst_59603 = (state_59616[(9)]);
var inst_59596 = inst_59603;
var state_59616__$1 = (function (){var statearr_59627 = state_59616;
(statearr_59627[(7)] = inst_59596);

return statearr_59627;
})();
var statearr_59628_59642 = state_59616__$1;
(statearr_59628_59642[(2)] = null);

(statearr_59628_59642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59617 === (5))){
var inst_59596 = (state_59616[(7)]);
var state_59616__$1 = state_59616;
var statearr_59629_59643 = state_59616__$1;
(statearr_59629_59643[(2)] = inst_59596);

(statearr_59629_59643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59617 === (10))){
var inst_59610 = (state_59616[(2)]);
var state_59616__$1 = state_59616;
var statearr_59630_59644 = state_59616__$1;
(statearr_59630_59644[(2)] = inst_59610);

(statearr_59630_59644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59617 === (8))){
var inst_59603 = (state_59616[(9)]);
var inst_59606 = cljs.core.deref.call(null,inst_59603);
var state_59616__$1 = state_59616;
var statearr_59631_59645 = state_59616__$1;
(statearr_59631_59645[(2)] = inst_59606);

(statearr_59631_59645[(1)] = (10));


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
var statearr_59632 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59632[(0)] = cljs$core$async$reduce_$_state_machine__27885__auto__);

(statearr_59632[(1)] = (1));

return statearr_59632;
});
var cljs$core$async$reduce_$_state_machine__27885__auto____1 = (function (state_59616){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59633){if((e59633 instanceof Object)){
var ex__27888__auto__ = e59633;
var statearr_59634_59646 = state_59616;
(statearr_59634_59646[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59647 = state_59616;
state_59616 = G__59647;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27885__auto__ = function(state_59616){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27885__auto____1.call(this,state_59616);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27885__auto____0;
cljs$core$async$reduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27885__auto____1;
return cljs$core$async$reduce_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_59635 = f__27975__auto__.call(null);
(statearr_59635[(6)] = c__27974__auto__);

return statearr_59635;
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
return (function (state_59653){
var state_val_59654 = (state_59653[(1)]);
if((state_val_59654 === (1))){
var inst_59648 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_59653__$1 = state_59653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59653__$1,(2),inst_59648);
} else {
if((state_val_59654 === (2))){
var inst_59650 = (state_59653[(2)]);
var inst_59651 = f__$1.call(null,inst_59650);
var state_59653__$1 = state_59653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59653__$1,inst_59651);
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
var statearr_59655 = [null,null,null,null,null,null,null];
(statearr_59655[(0)] = cljs$core$async$transduce_$_state_machine__27885__auto__);

(statearr_59655[(1)] = (1));

return statearr_59655;
});
var cljs$core$async$transduce_$_state_machine__27885__auto____1 = (function (state_59653){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59656){if((e59656 instanceof Object)){
var ex__27888__auto__ = e59656;
var statearr_59657_59659 = state_59653;
(statearr_59657_59659[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59660 = state_59653;
state_59653 = G__59660;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27885__auto__ = function(state_59653){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27885__auto____1.call(this,state_59653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27885__auto____0;
cljs$core$async$transduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27885__auto____1;
return cljs$core$async$transduce_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,f__$1))
})();
var state__27976__auto__ = (function (){var statearr_59658 = f__27975__auto__.call(null);
(statearr_59658[(6)] = c__27974__auto__);

return statearr_59658;
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
var G__59662 = arguments.length;
switch (G__59662) {
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
return (function (state_59687){
var state_val_59688 = (state_59687[(1)]);
if((state_val_59688 === (7))){
var inst_59669 = (state_59687[(2)]);
var state_59687__$1 = state_59687;
var statearr_59689_59710 = state_59687__$1;
(statearr_59689_59710[(2)] = inst_59669);

(statearr_59689_59710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (1))){
var inst_59663 = cljs.core.seq.call(null,coll);
var inst_59664 = inst_59663;
var state_59687__$1 = (function (){var statearr_59690 = state_59687;
(statearr_59690[(7)] = inst_59664);

return statearr_59690;
})();
var statearr_59691_59711 = state_59687__$1;
(statearr_59691_59711[(2)] = null);

(statearr_59691_59711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (4))){
var inst_59664 = (state_59687[(7)]);
var inst_59667 = cljs.core.first.call(null,inst_59664);
var state_59687__$1 = state_59687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59687__$1,(7),ch,inst_59667);
} else {
if((state_val_59688 === (13))){
var inst_59681 = (state_59687[(2)]);
var state_59687__$1 = state_59687;
var statearr_59692_59712 = state_59687__$1;
(statearr_59692_59712[(2)] = inst_59681);

(statearr_59692_59712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (6))){
var inst_59672 = (state_59687[(2)]);
var state_59687__$1 = state_59687;
if(cljs.core.truth_(inst_59672)){
var statearr_59693_59713 = state_59687__$1;
(statearr_59693_59713[(1)] = (8));

} else {
var statearr_59694_59714 = state_59687__$1;
(statearr_59694_59714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (3))){
var inst_59685 = (state_59687[(2)]);
var state_59687__$1 = state_59687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59687__$1,inst_59685);
} else {
if((state_val_59688 === (12))){
var state_59687__$1 = state_59687;
var statearr_59695_59715 = state_59687__$1;
(statearr_59695_59715[(2)] = null);

(statearr_59695_59715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (2))){
var inst_59664 = (state_59687[(7)]);
var state_59687__$1 = state_59687;
if(cljs.core.truth_(inst_59664)){
var statearr_59696_59716 = state_59687__$1;
(statearr_59696_59716[(1)] = (4));

} else {
var statearr_59697_59717 = state_59687__$1;
(statearr_59697_59717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (11))){
var inst_59678 = cljs.core.async.close_BANG_.call(null,ch);
var state_59687__$1 = state_59687;
var statearr_59698_59718 = state_59687__$1;
(statearr_59698_59718[(2)] = inst_59678);

(statearr_59698_59718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (9))){
var state_59687__$1 = state_59687;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59699_59719 = state_59687__$1;
(statearr_59699_59719[(1)] = (11));

} else {
var statearr_59700_59720 = state_59687__$1;
(statearr_59700_59720[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (5))){
var inst_59664 = (state_59687[(7)]);
var state_59687__$1 = state_59687;
var statearr_59701_59721 = state_59687__$1;
(statearr_59701_59721[(2)] = inst_59664);

(statearr_59701_59721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (10))){
var inst_59683 = (state_59687[(2)]);
var state_59687__$1 = state_59687;
var statearr_59702_59722 = state_59687__$1;
(statearr_59702_59722[(2)] = inst_59683);

(statearr_59702_59722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59688 === (8))){
var inst_59664 = (state_59687[(7)]);
var inst_59674 = cljs.core.next.call(null,inst_59664);
var inst_59664__$1 = inst_59674;
var state_59687__$1 = (function (){var statearr_59703 = state_59687;
(statearr_59703[(7)] = inst_59664__$1);

return statearr_59703;
})();
var statearr_59704_59723 = state_59687__$1;
(statearr_59704_59723[(2)] = null);

(statearr_59704_59723[(1)] = (2));


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
var statearr_59705 = [null,null,null,null,null,null,null,null];
(statearr_59705[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_59705[(1)] = (1));

return statearr_59705;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_59687){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59706){if((e59706 instanceof Object)){
var ex__27888__auto__ = e59706;
var statearr_59707_59724 = state_59687;
(statearr_59707_59724[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59725 = state_59687;
state_59687 = G__59725;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_59687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_59687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_59708 = f__27975__auto__.call(null);
(statearr_59708[(6)] = c__27974__auto__);

return statearr_59708;
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
if(typeof cljs.core.async.t_cljs$core$async59726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59726 = (function (ch,cs,meta59727){
this.ch = ch;
this.cs = cs;
this.meta59727 = meta59727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_59728,meta59727__$1){
var self__ = this;
var _59728__$1 = this;
return (new cljs.core.async.t_cljs$core$async59726(self__.ch,self__.cs,meta59727__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async59726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_59728){
var self__ = this;
var _59728__$1 = this;
return self__.meta59727;
});})(cs))
;

cljs.core.async.t_cljs$core$async59726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async59726.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59726.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async59726.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async59726.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async59726.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59727","meta59727",-1781053333,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async59726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59726";

cljs.core.async.t_cljs$core$async59726.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59726");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59726.
 */
cljs.core.async.__GT_t_cljs$core$async59726 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async59726(ch__$1,cs__$1,meta59727){
return (new cljs.core.async.t_cljs$core$async59726(ch__$1,cs__$1,meta59727));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async59726(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27974__auto___59948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___59948,cs,m,dchan,dctr,done){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___59948,cs,m,dchan,dctr,done){
return (function (state_59863){
var state_val_59864 = (state_59863[(1)]);
if((state_val_59864 === (7))){
var inst_59859 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
var statearr_59865_59949 = state_59863__$1;
(statearr_59865_59949[(2)] = inst_59859);

(statearr_59865_59949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (20))){
var inst_59762 = (state_59863[(7)]);
var inst_59774 = cljs.core.first.call(null,inst_59762);
var inst_59775 = cljs.core.nth.call(null,inst_59774,(0),null);
var inst_59776 = cljs.core.nth.call(null,inst_59774,(1),null);
var state_59863__$1 = (function (){var statearr_59866 = state_59863;
(statearr_59866[(8)] = inst_59775);

return statearr_59866;
})();
if(cljs.core.truth_(inst_59776)){
var statearr_59867_59950 = state_59863__$1;
(statearr_59867_59950[(1)] = (22));

} else {
var statearr_59868_59951 = state_59863__$1;
(statearr_59868_59951[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (27))){
var inst_59806 = (state_59863[(9)]);
var inst_59811 = (state_59863[(10)]);
var inst_59731 = (state_59863[(11)]);
var inst_59804 = (state_59863[(12)]);
var inst_59811__$1 = cljs.core._nth.call(null,inst_59804,inst_59806);
var inst_59812 = cljs.core.async.put_BANG_.call(null,inst_59811__$1,inst_59731,done);
var state_59863__$1 = (function (){var statearr_59869 = state_59863;
(statearr_59869[(10)] = inst_59811__$1);

return statearr_59869;
})();
if(cljs.core.truth_(inst_59812)){
var statearr_59870_59952 = state_59863__$1;
(statearr_59870_59952[(1)] = (30));

} else {
var statearr_59871_59953 = state_59863__$1;
(statearr_59871_59953[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (1))){
var state_59863__$1 = state_59863;
var statearr_59872_59954 = state_59863__$1;
(statearr_59872_59954[(2)] = null);

(statearr_59872_59954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (24))){
var inst_59762 = (state_59863[(7)]);
var inst_59781 = (state_59863[(2)]);
var inst_59782 = cljs.core.next.call(null,inst_59762);
var inst_59740 = inst_59782;
var inst_59741 = null;
var inst_59742 = (0);
var inst_59743 = (0);
var state_59863__$1 = (function (){var statearr_59873 = state_59863;
(statearr_59873[(13)] = inst_59740);

(statearr_59873[(14)] = inst_59742);

(statearr_59873[(15)] = inst_59781);

(statearr_59873[(16)] = inst_59743);

(statearr_59873[(17)] = inst_59741);

return statearr_59873;
})();
var statearr_59874_59955 = state_59863__$1;
(statearr_59874_59955[(2)] = null);

(statearr_59874_59955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (39))){
var state_59863__$1 = state_59863;
var statearr_59878_59956 = state_59863__$1;
(statearr_59878_59956[(2)] = null);

(statearr_59878_59956[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (4))){
var inst_59731 = (state_59863[(11)]);
var inst_59731__$1 = (state_59863[(2)]);
var inst_59732 = (inst_59731__$1 == null);
var state_59863__$1 = (function (){var statearr_59879 = state_59863;
(statearr_59879[(11)] = inst_59731__$1);

return statearr_59879;
})();
if(cljs.core.truth_(inst_59732)){
var statearr_59880_59957 = state_59863__$1;
(statearr_59880_59957[(1)] = (5));

} else {
var statearr_59881_59958 = state_59863__$1;
(statearr_59881_59958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (15))){
var inst_59740 = (state_59863[(13)]);
var inst_59742 = (state_59863[(14)]);
var inst_59743 = (state_59863[(16)]);
var inst_59741 = (state_59863[(17)]);
var inst_59758 = (state_59863[(2)]);
var inst_59759 = (inst_59743 + (1));
var tmp59875 = inst_59740;
var tmp59876 = inst_59742;
var tmp59877 = inst_59741;
var inst_59740__$1 = tmp59875;
var inst_59741__$1 = tmp59877;
var inst_59742__$1 = tmp59876;
var inst_59743__$1 = inst_59759;
var state_59863__$1 = (function (){var statearr_59882 = state_59863;
(statearr_59882[(13)] = inst_59740__$1);

(statearr_59882[(14)] = inst_59742__$1);

(statearr_59882[(18)] = inst_59758);

(statearr_59882[(16)] = inst_59743__$1);

(statearr_59882[(17)] = inst_59741__$1);

return statearr_59882;
})();
var statearr_59883_59959 = state_59863__$1;
(statearr_59883_59959[(2)] = null);

(statearr_59883_59959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (21))){
var inst_59785 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
var statearr_59887_59960 = state_59863__$1;
(statearr_59887_59960[(2)] = inst_59785);

(statearr_59887_59960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (31))){
var inst_59811 = (state_59863[(10)]);
var inst_59815 = done.call(null,null);
var inst_59816 = cljs.core.async.untap_STAR_.call(null,m,inst_59811);
var state_59863__$1 = (function (){var statearr_59888 = state_59863;
(statearr_59888[(19)] = inst_59815);

return statearr_59888;
})();
var statearr_59889_59961 = state_59863__$1;
(statearr_59889_59961[(2)] = inst_59816);

(statearr_59889_59961[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (32))){
var inst_59803 = (state_59863[(20)]);
var inst_59806 = (state_59863[(9)]);
var inst_59804 = (state_59863[(12)]);
var inst_59805 = (state_59863[(21)]);
var inst_59818 = (state_59863[(2)]);
var inst_59819 = (inst_59806 + (1));
var tmp59884 = inst_59803;
var tmp59885 = inst_59804;
var tmp59886 = inst_59805;
var inst_59803__$1 = tmp59884;
var inst_59804__$1 = tmp59885;
var inst_59805__$1 = tmp59886;
var inst_59806__$1 = inst_59819;
var state_59863__$1 = (function (){var statearr_59890 = state_59863;
(statearr_59890[(20)] = inst_59803__$1);

(statearr_59890[(9)] = inst_59806__$1);

(statearr_59890[(12)] = inst_59804__$1);

(statearr_59890[(22)] = inst_59818);

(statearr_59890[(21)] = inst_59805__$1);

return statearr_59890;
})();
var statearr_59891_59962 = state_59863__$1;
(statearr_59891_59962[(2)] = null);

(statearr_59891_59962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (40))){
var inst_59831 = (state_59863[(23)]);
var inst_59835 = done.call(null,null);
var inst_59836 = cljs.core.async.untap_STAR_.call(null,m,inst_59831);
var state_59863__$1 = (function (){var statearr_59892 = state_59863;
(statearr_59892[(24)] = inst_59835);

return statearr_59892;
})();
var statearr_59893_59963 = state_59863__$1;
(statearr_59893_59963[(2)] = inst_59836);

(statearr_59893_59963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (33))){
var inst_59822 = (state_59863[(25)]);
var inst_59824 = cljs.core.chunked_seq_QMARK_.call(null,inst_59822);
var state_59863__$1 = state_59863;
if(inst_59824){
var statearr_59894_59964 = state_59863__$1;
(statearr_59894_59964[(1)] = (36));

} else {
var statearr_59895_59965 = state_59863__$1;
(statearr_59895_59965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (13))){
var inst_59752 = (state_59863[(26)]);
var inst_59755 = cljs.core.async.close_BANG_.call(null,inst_59752);
var state_59863__$1 = state_59863;
var statearr_59896_59966 = state_59863__$1;
(statearr_59896_59966[(2)] = inst_59755);

(statearr_59896_59966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (22))){
var inst_59775 = (state_59863[(8)]);
var inst_59778 = cljs.core.async.close_BANG_.call(null,inst_59775);
var state_59863__$1 = state_59863;
var statearr_59897_59967 = state_59863__$1;
(statearr_59897_59967[(2)] = inst_59778);

(statearr_59897_59967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (36))){
var inst_59822 = (state_59863[(25)]);
var inst_59826 = cljs.core.chunk_first.call(null,inst_59822);
var inst_59827 = cljs.core.chunk_rest.call(null,inst_59822);
var inst_59828 = cljs.core.count.call(null,inst_59826);
var inst_59803 = inst_59827;
var inst_59804 = inst_59826;
var inst_59805 = inst_59828;
var inst_59806 = (0);
var state_59863__$1 = (function (){var statearr_59898 = state_59863;
(statearr_59898[(20)] = inst_59803);

(statearr_59898[(9)] = inst_59806);

(statearr_59898[(12)] = inst_59804);

(statearr_59898[(21)] = inst_59805);

return statearr_59898;
})();
var statearr_59899_59968 = state_59863__$1;
(statearr_59899_59968[(2)] = null);

(statearr_59899_59968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (41))){
var inst_59822 = (state_59863[(25)]);
var inst_59838 = (state_59863[(2)]);
var inst_59839 = cljs.core.next.call(null,inst_59822);
var inst_59803 = inst_59839;
var inst_59804 = null;
var inst_59805 = (0);
var inst_59806 = (0);
var state_59863__$1 = (function (){var statearr_59900 = state_59863;
(statearr_59900[(20)] = inst_59803);

(statearr_59900[(9)] = inst_59806);

(statearr_59900[(12)] = inst_59804);

(statearr_59900[(27)] = inst_59838);

(statearr_59900[(21)] = inst_59805);

return statearr_59900;
})();
var statearr_59901_59969 = state_59863__$1;
(statearr_59901_59969[(2)] = null);

(statearr_59901_59969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (43))){
var state_59863__$1 = state_59863;
var statearr_59902_59970 = state_59863__$1;
(statearr_59902_59970[(2)] = null);

(statearr_59902_59970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (29))){
var inst_59847 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
var statearr_59903_59971 = state_59863__$1;
(statearr_59903_59971[(2)] = inst_59847);

(statearr_59903_59971[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (44))){
var inst_59856 = (state_59863[(2)]);
var state_59863__$1 = (function (){var statearr_59904 = state_59863;
(statearr_59904[(28)] = inst_59856);

return statearr_59904;
})();
var statearr_59905_59972 = state_59863__$1;
(statearr_59905_59972[(2)] = null);

(statearr_59905_59972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (6))){
var inst_59795 = (state_59863[(29)]);
var inst_59794 = cljs.core.deref.call(null,cs);
var inst_59795__$1 = cljs.core.keys.call(null,inst_59794);
var inst_59796 = cljs.core.count.call(null,inst_59795__$1);
var inst_59797 = cljs.core.reset_BANG_.call(null,dctr,inst_59796);
var inst_59802 = cljs.core.seq.call(null,inst_59795__$1);
var inst_59803 = inst_59802;
var inst_59804 = null;
var inst_59805 = (0);
var inst_59806 = (0);
var state_59863__$1 = (function (){var statearr_59906 = state_59863;
(statearr_59906[(20)] = inst_59803);

(statearr_59906[(9)] = inst_59806);

(statearr_59906[(30)] = inst_59797);

(statearr_59906[(12)] = inst_59804);

(statearr_59906[(29)] = inst_59795__$1);

(statearr_59906[(21)] = inst_59805);

return statearr_59906;
})();
var statearr_59907_59973 = state_59863__$1;
(statearr_59907_59973[(2)] = null);

(statearr_59907_59973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (28))){
var inst_59803 = (state_59863[(20)]);
var inst_59822 = (state_59863[(25)]);
var inst_59822__$1 = cljs.core.seq.call(null,inst_59803);
var state_59863__$1 = (function (){var statearr_59908 = state_59863;
(statearr_59908[(25)] = inst_59822__$1);

return statearr_59908;
})();
if(inst_59822__$1){
var statearr_59909_59974 = state_59863__$1;
(statearr_59909_59974[(1)] = (33));

} else {
var statearr_59910_59975 = state_59863__$1;
(statearr_59910_59975[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (25))){
var inst_59806 = (state_59863[(9)]);
var inst_59805 = (state_59863[(21)]);
var inst_59808 = (inst_59806 < inst_59805);
var inst_59809 = inst_59808;
var state_59863__$1 = state_59863;
if(cljs.core.truth_(inst_59809)){
var statearr_59911_59976 = state_59863__$1;
(statearr_59911_59976[(1)] = (27));

} else {
var statearr_59912_59977 = state_59863__$1;
(statearr_59912_59977[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (34))){
var state_59863__$1 = state_59863;
var statearr_59913_59978 = state_59863__$1;
(statearr_59913_59978[(2)] = null);

(statearr_59913_59978[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (17))){
var state_59863__$1 = state_59863;
var statearr_59914_59979 = state_59863__$1;
(statearr_59914_59979[(2)] = null);

(statearr_59914_59979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (3))){
var inst_59861 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59863__$1,inst_59861);
} else {
if((state_val_59864 === (12))){
var inst_59790 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
var statearr_59915_59980 = state_59863__$1;
(statearr_59915_59980[(2)] = inst_59790);

(statearr_59915_59980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (2))){
var state_59863__$1 = state_59863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59863__$1,(4),ch);
} else {
if((state_val_59864 === (23))){
var state_59863__$1 = state_59863;
var statearr_59916_59981 = state_59863__$1;
(statearr_59916_59981[(2)] = null);

(statearr_59916_59981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (35))){
var inst_59845 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
var statearr_59917_59982 = state_59863__$1;
(statearr_59917_59982[(2)] = inst_59845);

(statearr_59917_59982[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (19))){
var inst_59762 = (state_59863[(7)]);
var inst_59766 = cljs.core.chunk_first.call(null,inst_59762);
var inst_59767 = cljs.core.chunk_rest.call(null,inst_59762);
var inst_59768 = cljs.core.count.call(null,inst_59766);
var inst_59740 = inst_59767;
var inst_59741 = inst_59766;
var inst_59742 = inst_59768;
var inst_59743 = (0);
var state_59863__$1 = (function (){var statearr_59918 = state_59863;
(statearr_59918[(13)] = inst_59740);

(statearr_59918[(14)] = inst_59742);

(statearr_59918[(16)] = inst_59743);

(statearr_59918[(17)] = inst_59741);

return statearr_59918;
})();
var statearr_59919_59983 = state_59863__$1;
(statearr_59919_59983[(2)] = null);

(statearr_59919_59983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (11))){
var inst_59740 = (state_59863[(13)]);
var inst_59762 = (state_59863[(7)]);
var inst_59762__$1 = cljs.core.seq.call(null,inst_59740);
var state_59863__$1 = (function (){var statearr_59920 = state_59863;
(statearr_59920[(7)] = inst_59762__$1);

return statearr_59920;
})();
if(inst_59762__$1){
var statearr_59921_59984 = state_59863__$1;
(statearr_59921_59984[(1)] = (16));

} else {
var statearr_59922_59985 = state_59863__$1;
(statearr_59922_59985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (9))){
var inst_59792 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
var statearr_59923_59986 = state_59863__$1;
(statearr_59923_59986[(2)] = inst_59792);

(statearr_59923_59986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (5))){
var inst_59738 = cljs.core.deref.call(null,cs);
var inst_59739 = cljs.core.seq.call(null,inst_59738);
var inst_59740 = inst_59739;
var inst_59741 = null;
var inst_59742 = (0);
var inst_59743 = (0);
var state_59863__$1 = (function (){var statearr_59924 = state_59863;
(statearr_59924[(13)] = inst_59740);

(statearr_59924[(14)] = inst_59742);

(statearr_59924[(16)] = inst_59743);

(statearr_59924[(17)] = inst_59741);

return statearr_59924;
})();
var statearr_59925_59987 = state_59863__$1;
(statearr_59925_59987[(2)] = null);

(statearr_59925_59987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (14))){
var state_59863__$1 = state_59863;
var statearr_59926_59988 = state_59863__$1;
(statearr_59926_59988[(2)] = null);

(statearr_59926_59988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (45))){
var inst_59853 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
var statearr_59927_59989 = state_59863__$1;
(statearr_59927_59989[(2)] = inst_59853);

(statearr_59927_59989[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (26))){
var inst_59795 = (state_59863[(29)]);
var inst_59849 = (state_59863[(2)]);
var inst_59850 = cljs.core.seq.call(null,inst_59795);
var state_59863__$1 = (function (){var statearr_59928 = state_59863;
(statearr_59928[(31)] = inst_59849);

return statearr_59928;
})();
if(inst_59850){
var statearr_59929_59990 = state_59863__$1;
(statearr_59929_59990[(1)] = (42));

} else {
var statearr_59930_59991 = state_59863__$1;
(statearr_59930_59991[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (16))){
var inst_59762 = (state_59863[(7)]);
var inst_59764 = cljs.core.chunked_seq_QMARK_.call(null,inst_59762);
var state_59863__$1 = state_59863;
if(inst_59764){
var statearr_59931_59992 = state_59863__$1;
(statearr_59931_59992[(1)] = (19));

} else {
var statearr_59932_59993 = state_59863__$1;
(statearr_59932_59993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (38))){
var inst_59842 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
var statearr_59933_59994 = state_59863__$1;
(statearr_59933_59994[(2)] = inst_59842);

(statearr_59933_59994[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (30))){
var state_59863__$1 = state_59863;
var statearr_59934_59995 = state_59863__$1;
(statearr_59934_59995[(2)] = null);

(statearr_59934_59995[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (10))){
var inst_59743 = (state_59863[(16)]);
var inst_59741 = (state_59863[(17)]);
var inst_59751 = cljs.core._nth.call(null,inst_59741,inst_59743);
var inst_59752 = cljs.core.nth.call(null,inst_59751,(0),null);
var inst_59753 = cljs.core.nth.call(null,inst_59751,(1),null);
var state_59863__$1 = (function (){var statearr_59935 = state_59863;
(statearr_59935[(26)] = inst_59752);

return statearr_59935;
})();
if(cljs.core.truth_(inst_59753)){
var statearr_59936_59996 = state_59863__$1;
(statearr_59936_59996[(1)] = (13));

} else {
var statearr_59937_59997 = state_59863__$1;
(statearr_59937_59997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (18))){
var inst_59788 = (state_59863[(2)]);
var state_59863__$1 = state_59863;
var statearr_59938_59998 = state_59863__$1;
(statearr_59938_59998[(2)] = inst_59788);

(statearr_59938_59998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (42))){
var state_59863__$1 = state_59863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59863__$1,(45),dchan);
} else {
if((state_val_59864 === (37))){
var inst_59731 = (state_59863[(11)]);
var inst_59831 = (state_59863[(23)]);
var inst_59822 = (state_59863[(25)]);
var inst_59831__$1 = cljs.core.first.call(null,inst_59822);
var inst_59832 = cljs.core.async.put_BANG_.call(null,inst_59831__$1,inst_59731,done);
var state_59863__$1 = (function (){var statearr_59939 = state_59863;
(statearr_59939[(23)] = inst_59831__$1);

return statearr_59939;
})();
if(cljs.core.truth_(inst_59832)){
var statearr_59940_59999 = state_59863__$1;
(statearr_59940_59999[(1)] = (39));

} else {
var statearr_59941_60000 = state_59863__$1;
(statearr_59941_60000[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59864 === (8))){
var inst_59742 = (state_59863[(14)]);
var inst_59743 = (state_59863[(16)]);
var inst_59745 = (inst_59743 < inst_59742);
var inst_59746 = inst_59745;
var state_59863__$1 = state_59863;
if(cljs.core.truth_(inst_59746)){
var statearr_59942_60001 = state_59863__$1;
(statearr_59942_60001[(1)] = (10));

} else {
var statearr_59943_60002 = state_59863__$1;
(statearr_59943_60002[(1)] = (11));

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
});})(c__27974__auto___59948,cs,m,dchan,dctr,done))
;
return ((function (switch__27884__auto__,c__27974__auto___59948,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27885__auto__ = null;
var cljs$core$async$mult_$_state_machine__27885__auto____0 = (function (){
var statearr_59944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59944[(0)] = cljs$core$async$mult_$_state_machine__27885__auto__);

(statearr_59944[(1)] = (1));

return statearr_59944;
});
var cljs$core$async$mult_$_state_machine__27885__auto____1 = (function (state_59863){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_59863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e59945){if((e59945 instanceof Object)){
var ex__27888__auto__ = e59945;
var statearr_59946_60003 = state_59863;
(statearr_59946_60003[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60004 = state_59863;
state_59863 = G__60004;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27885__auto__ = function(state_59863){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27885__auto____1.call(this,state_59863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27885__auto____0;
cljs$core$async$mult_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27885__auto____1;
return cljs$core$async$mult_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___59948,cs,m,dchan,dctr,done))
})();
var state__27976__auto__ = (function (){var statearr_59947 = f__27975__auto__.call(null);
(statearr_59947[(6)] = c__27974__auto___59948);

return statearr_59947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___59948,cs,m,dchan,dctr,done))
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
var G__60006 = arguments.length;
switch (G__60006) {
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
var len__4499__auto___60018 = arguments.length;
var i__4500__auto___60019 = (0);
while(true){
if((i__4500__auto___60019 < len__4499__auto___60018)){
args__4502__auto__.push((arguments[i__4500__auto___60019]));

var G__60020 = (i__4500__auto___60019 + (1));
i__4500__auto___60019 = G__60020;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60012){
var map__60013 = p__60012;
var map__60013__$1 = ((((!((map__60013 == null)))?(((((map__60013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60013):map__60013);
var opts = map__60013__$1;
var statearr_60015_60021 = state;
(statearr_60015_60021[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__60013,map__60013__$1,opts){
return (function (val){
var statearr_60016_60022 = state;
(statearr_60016_60022[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__60013,map__60013__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_60017_60023 = state;
(statearr_60017_60023[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60008){
var G__60009 = cljs.core.first.call(null,seq60008);
var seq60008__$1 = cljs.core.next.call(null,seq60008);
var G__60010 = cljs.core.first.call(null,seq60008__$1);
var seq60008__$2 = cljs.core.next.call(null,seq60008__$1);
var G__60011 = cljs.core.first.call(null,seq60008__$2);
var seq60008__$3 = cljs.core.next.call(null,seq60008__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60009,G__60010,G__60011,seq60008__$3);
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
if(typeof cljs.core.async.t_cljs$core$async60024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60024 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta60025){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta60025 = meta60025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60026,meta60025__$1){
var self__ = this;
var _60026__$1 = this;
return (new cljs.core.async.t_cljs$core$async60024(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta60025__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60026){
var self__ = this;
var _60026__$1 = this;
return self__.meta60025;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async60024.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta60025","meta60025",-1817751699,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60024";

cljs.core.async.t_cljs$core$async60024.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async60024");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60024.
 */
cljs.core.async.__GT_t_cljs$core$async60024 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async60024(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta60025){
return (new cljs.core.async.t_cljs$core$async60024(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta60025));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async60024(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27974__auto___60188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___60188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___60188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_60128){
var state_val_60129 = (state_60128[(1)]);
if((state_val_60129 === (7))){
var inst_60043 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
var statearr_60130_60189 = state_60128__$1;
(statearr_60130_60189[(2)] = inst_60043);

(statearr_60130_60189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (20))){
var inst_60055 = (state_60128[(7)]);
var state_60128__$1 = state_60128;
var statearr_60131_60190 = state_60128__$1;
(statearr_60131_60190[(2)] = inst_60055);

(statearr_60131_60190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (27))){
var state_60128__$1 = state_60128;
var statearr_60132_60191 = state_60128__$1;
(statearr_60132_60191[(2)] = null);

(statearr_60132_60191[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (1))){
var inst_60030 = (state_60128[(8)]);
var inst_60030__$1 = calc_state.call(null);
var inst_60032 = (inst_60030__$1 == null);
var inst_60033 = cljs.core.not.call(null,inst_60032);
var state_60128__$1 = (function (){var statearr_60133 = state_60128;
(statearr_60133[(8)] = inst_60030__$1);

return statearr_60133;
})();
if(inst_60033){
var statearr_60134_60192 = state_60128__$1;
(statearr_60134_60192[(1)] = (2));

} else {
var statearr_60135_60193 = state_60128__$1;
(statearr_60135_60193[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (24))){
var inst_60088 = (state_60128[(9)]);
var inst_60079 = (state_60128[(10)]);
var inst_60102 = (state_60128[(11)]);
var inst_60102__$1 = inst_60079.call(null,inst_60088);
var state_60128__$1 = (function (){var statearr_60136 = state_60128;
(statearr_60136[(11)] = inst_60102__$1);

return statearr_60136;
})();
if(cljs.core.truth_(inst_60102__$1)){
var statearr_60137_60194 = state_60128__$1;
(statearr_60137_60194[(1)] = (29));

} else {
var statearr_60138_60195 = state_60128__$1;
(statearr_60138_60195[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (4))){
var inst_60046 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
if(cljs.core.truth_(inst_60046)){
var statearr_60139_60196 = state_60128__$1;
(statearr_60139_60196[(1)] = (8));

} else {
var statearr_60140_60197 = state_60128__$1;
(statearr_60140_60197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (15))){
var inst_60073 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
if(cljs.core.truth_(inst_60073)){
var statearr_60141_60198 = state_60128__$1;
(statearr_60141_60198[(1)] = (19));

} else {
var statearr_60142_60199 = state_60128__$1;
(statearr_60142_60199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (21))){
var inst_60078 = (state_60128[(12)]);
var inst_60078__$1 = (state_60128[(2)]);
var inst_60079 = cljs.core.get.call(null,inst_60078__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60080 = cljs.core.get.call(null,inst_60078__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60081 = cljs.core.get.call(null,inst_60078__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_60128__$1 = (function (){var statearr_60143 = state_60128;
(statearr_60143[(13)] = inst_60080);

(statearr_60143[(10)] = inst_60079);

(statearr_60143[(12)] = inst_60078__$1);

return statearr_60143;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_60128__$1,(22),inst_60081);
} else {
if((state_val_60129 === (31))){
var inst_60110 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
if(cljs.core.truth_(inst_60110)){
var statearr_60144_60200 = state_60128__$1;
(statearr_60144_60200[(1)] = (32));

} else {
var statearr_60145_60201 = state_60128__$1;
(statearr_60145_60201[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (32))){
var inst_60087 = (state_60128[(14)]);
var state_60128__$1 = state_60128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60128__$1,(35),out,inst_60087);
} else {
if((state_val_60129 === (33))){
var inst_60078 = (state_60128[(12)]);
var inst_60055 = inst_60078;
var state_60128__$1 = (function (){var statearr_60146 = state_60128;
(statearr_60146[(7)] = inst_60055);

return statearr_60146;
})();
var statearr_60147_60202 = state_60128__$1;
(statearr_60147_60202[(2)] = null);

(statearr_60147_60202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (13))){
var inst_60055 = (state_60128[(7)]);
var inst_60062 = inst_60055.cljs$lang$protocol_mask$partition0$;
var inst_60063 = (inst_60062 & (64));
var inst_60064 = inst_60055.cljs$core$ISeq$;
var inst_60065 = (cljs.core.PROTOCOL_SENTINEL === inst_60064);
var inst_60066 = ((inst_60063) || (inst_60065));
var state_60128__$1 = state_60128;
if(cljs.core.truth_(inst_60066)){
var statearr_60148_60203 = state_60128__$1;
(statearr_60148_60203[(1)] = (16));

} else {
var statearr_60149_60204 = state_60128__$1;
(statearr_60149_60204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (22))){
var inst_60088 = (state_60128[(9)]);
var inst_60087 = (state_60128[(14)]);
var inst_60086 = (state_60128[(2)]);
var inst_60087__$1 = cljs.core.nth.call(null,inst_60086,(0),null);
var inst_60088__$1 = cljs.core.nth.call(null,inst_60086,(1),null);
var inst_60089 = (inst_60087__$1 == null);
var inst_60090 = cljs.core._EQ_.call(null,inst_60088__$1,change);
var inst_60091 = ((inst_60089) || (inst_60090));
var state_60128__$1 = (function (){var statearr_60150 = state_60128;
(statearr_60150[(9)] = inst_60088__$1);

(statearr_60150[(14)] = inst_60087__$1);

return statearr_60150;
})();
if(cljs.core.truth_(inst_60091)){
var statearr_60151_60205 = state_60128__$1;
(statearr_60151_60205[(1)] = (23));

} else {
var statearr_60152_60206 = state_60128__$1;
(statearr_60152_60206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (36))){
var inst_60078 = (state_60128[(12)]);
var inst_60055 = inst_60078;
var state_60128__$1 = (function (){var statearr_60153 = state_60128;
(statearr_60153[(7)] = inst_60055);

return statearr_60153;
})();
var statearr_60154_60207 = state_60128__$1;
(statearr_60154_60207[(2)] = null);

(statearr_60154_60207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (29))){
var inst_60102 = (state_60128[(11)]);
var state_60128__$1 = state_60128;
var statearr_60155_60208 = state_60128__$1;
(statearr_60155_60208[(2)] = inst_60102);

(statearr_60155_60208[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (6))){
var state_60128__$1 = state_60128;
var statearr_60156_60209 = state_60128__$1;
(statearr_60156_60209[(2)] = false);

(statearr_60156_60209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (28))){
var inst_60098 = (state_60128[(2)]);
var inst_60099 = calc_state.call(null);
var inst_60055 = inst_60099;
var state_60128__$1 = (function (){var statearr_60157 = state_60128;
(statearr_60157[(7)] = inst_60055);

(statearr_60157[(15)] = inst_60098);

return statearr_60157;
})();
var statearr_60158_60210 = state_60128__$1;
(statearr_60158_60210[(2)] = null);

(statearr_60158_60210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (25))){
var inst_60124 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
var statearr_60159_60211 = state_60128__$1;
(statearr_60159_60211[(2)] = inst_60124);

(statearr_60159_60211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (34))){
var inst_60122 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
var statearr_60160_60212 = state_60128__$1;
(statearr_60160_60212[(2)] = inst_60122);

(statearr_60160_60212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (17))){
var state_60128__$1 = state_60128;
var statearr_60161_60213 = state_60128__$1;
(statearr_60161_60213[(2)] = false);

(statearr_60161_60213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (3))){
var state_60128__$1 = state_60128;
var statearr_60162_60214 = state_60128__$1;
(statearr_60162_60214[(2)] = false);

(statearr_60162_60214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (12))){
var inst_60126 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60128__$1,inst_60126);
} else {
if((state_val_60129 === (2))){
var inst_60030 = (state_60128[(8)]);
var inst_60035 = inst_60030.cljs$lang$protocol_mask$partition0$;
var inst_60036 = (inst_60035 & (64));
var inst_60037 = inst_60030.cljs$core$ISeq$;
var inst_60038 = (cljs.core.PROTOCOL_SENTINEL === inst_60037);
var inst_60039 = ((inst_60036) || (inst_60038));
var state_60128__$1 = state_60128;
if(cljs.core.truth_(inst_60039)){
var statearr_60163_60215 = state_60128__$1;
(statearr_60163_60215[(1)] = (5));

} else {
var statearr_60164_60216 = state_60128__$1;
(statearr_60164_60216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (23))){
var inst_60087 = (state_60128[(14)]);
var inst_60093 = (inst_60087 == null);
var state_60128__$1 = state_60128;
if(cljs.core.truth_(inst_60093)){
var statearr_60165_60217 = state_60128__$1;
(statearr_60165_60217[(1)] = (26));

} else {
var statearr_60166_60218 = state_60128__$1;
(statearr_60166_60218[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (35))){
var inst_60113 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
if(cljs.core.truth_(inst_60113)){
var statearr_60167_60219 = state_60128__$1;
(statearr_60167_60219[(1)] = (36));

} else {
var statearr_60168_60220 = state_60128__$1;
(statearr_60168_60220[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (19))){
var inst_60055 = (state_60128[(7)]);
var inst_60075 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60055);
var state_60128__$1 = state_60128;
var statearr_60169_60221 = state_60128__$1;
(statearr_60169_60221[(2)] = inst_60075);

(statearr_60169_60221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (11))){
var inst_60055 = (state_60128[(7)]);
var inst_60059 = (inst_60055 == null);
var inst_60060 = cljs.core.not.call(null,inst_60059);
var state_60128__$1 = state_60128;
if(inst_60060){
var statearr_60170_60222 = state_60128__$1;
(statearr_60170_60222[(1)] = (13));

} else {
var statearr_60171_60223 = state_60128__$1;
(statearr_60171_60223[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (9))){
var inst_60030 = (state_60128[(8)]);
var state_60128__$1 = state_60128;
var statearr_60172_60224 = state_60128__$1;
(statearr_60172_60224[(2)] = inst_60030);

(statearr_60172_60224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (5))){
var state_60128__$1 = state_60128;
var statearr_60173_60225 = state_60128__$1;
(statearr_60173_60225[(2)] = true);

(statearr_60173_60225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (14))){
var state_60128__$1 = state_60128;
var statearr_60174_60226 = state_60128__$1;
(statearr_60174_60226[(2)] = false);

(statearr_60174_60226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (26))){
var inst_60088 = (state_60128[(9)]);
var inst_60095 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_60088);
var state_60128__$1 = state_60128;
var statearr_60175_60227 = state_60128__$1;
(statearr_60175_60227[(2)] = inst_60095);

(statearr_60175_60227[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (16))){
var state_60128__$1 = state_60128;
var statearr_60176_60228 = state_60128__$1;
(statearr_60176_60228[(2)] = true);

(statearr_60176_60228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (38))){
var inst_60118 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
var statearr_60177_60229 = state_60128__$1;
(statearr_60177_60229[(2)] = inst_60118);

(statearr_60177_60229[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (30))){
var inst_60088 = (state_60128[(9)]);
var inst_60080 = (state_60128[(13)]);
var inst_60079 = (state_60128[(10)]);
var inst_60105 = cljs.core.empty_QMARK_.call(null,inst_60079);
var inst_60106 = inst_60080.call(null,inst_60088);
var inst_60107 = cljs.core.not.call(null,inst_60106);
var inst_60108 = ((inst_60105) && (inst_60107));
var state_60128__$1 = state_60128;
var statearr_60178_60230 = state_60128__$1;
(statearr_60178_60230[(2)] = inst_60108);

(statearr_60178_60230[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (10))){
var inst_60030 = (state_60128[(8)]);
var inst_60051 = (state_60128[(2)]);
var inst_60052 = cljs.core.get.call(null,inst_60051,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60053 = cljs.core.get.call(null,inst_60051,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60054 = cljs.core.get.call(null,inst_60051,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_60055 = inst_60030;
var state_60128__$1 = (function (){var statearr_60179 = state_60128;
(statearr_60179[(16)] = inst_60053);

(statearr_60179[(7)] = inst_60055);

(statearr_60179[(17)] = inst_60054);

(statearr_60179[(18)] = inst_60052);

return statearr_60179;
})();
var statearr_60180_60231 = state_60128__$1;
(statearr_60180_60231[(2)] = null);

(statearr_60180_60231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (18))){
var inst_60070 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
var statearr_60181_60232 = state_60128__$1;
(statearr_60181_60232[(2)] = inst_60070);

(statearr_60181_60232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (37))){
var state_60128__$1 = state_60128;
var statearr_60182_60233 = state_60128__$1;
(statearr_60182_60233[(2)] = null);

(statearr_60182_60233[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (8))){
var inst_60030 = (state_60128[(8)]);
var inst_60048 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60030);
var state_60128__$1 = state_60128;
var statearr_60183_60234 = state_60128__$1;
(statearr_60183_60234[(2)] = inst_60048);

(statearr_60183_60234[(1)] = (10));


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
});})(c__27974__auto___60188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27884__auto__,c__27974__auto___60188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27885__auto__ = null;
var cljs$core$async$mix_$_state_machine__27885__auto____0 = (function (){
var statearr_60184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60184[(0)] = cljs$core$async$mix_$_state_machine__27885__auto__);

(statearr_60184[(1)] = (1));

return statearr_60184;
});
var cljs$core$async$mix_$_state_machine__27885__auto____1 = (function (state_60128){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_60128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e60185){if((e60185 instanceof Object)){
var ex__27888__auto__ = e60185;
var statearr_60186_60235 = state_60128;
(statearr_60186_60235[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60236 = state_60128;
state_60128 = G__60236;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27885__auto__ = function(state_60128){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27885__auto____1.call(this,state_60128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27885__auto____0;
cljs$core$async$mix_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27885__auto____1;
return cljs$core$async$mix_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___60188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27976__auto__ = (function (){var statearr_60187 = f__27975__auto__.call(null);
(statearr_60187[(6)] = c__27974__auto___60188);

return statearr_60187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___60188,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__60238 = arguments.length;
switch (G__60238) {
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
var G__60242 = arguments.length;
switch (G__60242) {
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
return (function (p1__60240_SHARP_){
if(cljs.core.truth_(p1__60240_SHARP_.call(null,topic))){
return p1__60240_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__60240_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async60243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60243 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta60244){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta60244 = meta60244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_60245,meta60244__$1){
var self__ = this;
var _60245__$1 = this;
return (new cljs.core.async.t_cljs$core$async60243(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta60244__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_60245){
var self__ = this;
var _60245__$1 = this;
return self__.meta60244;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60243.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60243.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60243.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60243.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async60243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60243.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta60244","meta60244",1920698361,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60243";

cljs.core.async.t_cljs$core$async60243.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async60243");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60243.
 */
cljs.core.async.__GT_t_cljs$core$async60243 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async60243(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60244){
return (new cljs.core.async.t_cljs$core$async60243(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60244));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async60243(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27974__auto___60363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___60363,mults,ensure_mult,p){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___60363,mults,ensure_mult,p){
return (function (state_60317){
var state_val_60318 = (state_60317[(1)]);
if((state_val_60318 === (7))){
var inst_60313 = (state_60317[(2)]);
var state_60317__$1 = state_60317;
var statearr_60319_60364 = state_60317__$1;
(statearr_60319_60364[(2)] = inst_60313);

(statearr_60319_60364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (20))){
var state_60317__$1 = state_60317;
var statearr_60320_60365 = state_60317__$1;
(statearr_60320_60365[(2)] = null);

(statearr_60320_60365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (1))){
var state_60317__$1 = state_60317;
var statearr_60321_60366 = state_60317__$1;
(statearr_60321_60366[(2)] = null);

(statearr_60321_60366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (24))){
var inst_60296 = (state_60317[(7)]);
var inst_60305 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_60296);
var state_60317__$1 = state_60317;
var statearr_60322_60367 = state_60317__$1;
(statearr_60322_60367[(2)] = inst_60305);

(statearr_60322_60367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (4))){
var inst_60248 = (state_60317[(8)]);
var inst_60248__$1 = (state_60317[(2)]);
var inst_60249 = (inst_60248__$1 == null);
var state_60317__$1 = (function (){var statearr_60323 = state_60317;
(statearr_60323[(8)] = inst_60248__$1);

return statearr_60323;
})();
if(cljs.core.truth_(inst_60249)){
var statearr_60324_60368 = state_60317__$1;
(statearr_60324_60368[(1)] = (5));

} else {
var statearr_60325_60369 = state_60317__$1;
(statearr_60325_60369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (15))){
var inst_60290 = (state_60317[(2)]);
var state_60317__$1 = state_60317;
var statearr_60326_60370 = state_60317__$1;
(statearr_60326_60370[(2)] = inst_60290);

(statearr_60326_60370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (21))){
var inst_60310 = (state_60317[(2)]);
var state_60317__$1 = (function (){var statearr_60327 = state_60317;
(statearr_60327[(9)] = inst_60310);

return statearr_60327;
})();
var statearr_60328_60371 = state_60317__$1;
(statearr_60328_60371[(2)] = null);

(statearr_60328_60371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (13))){
var inst_60272 = (state_60317[(10)]);
var inst_60274 = cljs.core.chunked_seq_QMARK_.call(null,inst_60272);
var state_60317__$1 = state_60317;
if(inst_60274){
var statearr_60329_60372 = state_60317__$1;
(statearr_60329_60372[(1)] = (16));

} else {
var statearr_60330_60373 = state_60317__$1;
(statearr_60330_60373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (22))){
var inst_60302 = (state_60317[(2)]);
var state_60317__$1 = state_60317;
if(cljs.core.truth_(inst_60302)){
var statearr_60331_60374 = state_60317__$1;
(statearr_60331_60374[(1)] = (23));

} else {
var statearr_60332_60375 = state_60317__$1;
(statearr_60332_60375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (6))){
var inst_60296 = (state_60317[(7)]);
var inst_60248 = (state_60317[(8)]);
var inst_60298 = (state_60317[(11)]);
var inst_60296__$1 = topic_fn.call(null,inst_60248);
var inst_60297 = cljs.core.deref.call(null,mults);
var inst_60298__$1 = cljs.core.get.call(null,inst_60297,inst_60296__$1);
var state_60317__$1 = (function (){var statearr_60333 = state_60317;
(statearr_60333[(7)] = inst_60296__$1);

(statearr_60333[(11)] = inst_60298__$1);

return statearr_60333;
})();
if(cljs.core.truth_(inst_60298__$1)){
var statearr_60334_60376 = state_60317__$1;
(statearr_60334_60376[(1)] = (19));

} else {
var statearr_60335_60377 = state_60317__$1;
(statearr_60335_60377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (25))){
var inst_60307 = (state_60317[(2)]);
var state_60317__$1 = state_60317;
var statearr_60336_60378 = state_60317__$1;
(statearr_60336_60378[(2)] = inst_60307);

(statearr_60336_60378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (17))){
var inst_60272 = (state_60317[(10)]);
var inst_60281 = cljs.core.first.call(null,inst_60272);
var inst_60282 = cljs.core.async.muxch_STAR_.call(null,inst_60281);
var inst_60283 = cljs.core.async.close_BANG_.call(null,inst_60282);
var inst_60284 = cljs.core.next.call(null,inst_60272);
var inst_60258 = inst_60284;
var inst_60259 = null;
var inst_60260 = (0);
var inst_60261 = (0);
var state_60317__$1 = (function (){var statearr_60337 = state_60317;
(statearr_60337[(12)] = inst_60258);

(statearr_60337[(13)] = inst_60261);

(statearr_60337[(14)] = inst_60260);

(statearr_60337[(15)] = inst_60283);

(statearr_60337[(16)] = inst_60259);

return statearr_60337;
})();
var statearr_60338_60379 = state_60317__$1;
(statearr_60338_60379[(2)] = null);

(statearr_60338_60379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (3))){
var inst_60315 = (state_60317[(2)]);
var state_60317__$1 = state_60317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60317__$1,inst_60315);
} else {
if((state_val_60318 === (12))){
var inst_60292 = (state_60317[(2)]);
var state_60317__$1 = state_60317;
var statearr_60339_60380 = state_60317__$1;
(statearr_60339_60380[(2)] = inst_60292);

(statearr_60339_60380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (2))){
var state_60317__$1 = state_60317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60317__$1,(4),ch);
} else {
if((state_val_60318 === (23))){
var state_60317__$1 = state_60317;
var statearr_60340_60381 = state_60317__$1;
(statearr_60340_60381[(2)] = null);

(statearr_60340_60381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (19))){
var inst_60248 = (state_60317[(8)]);
var inst_60298 = (state_60317[(11)]);
var inst_60300 = cljs.core.async.muxch_STAR_.call(null,inst_60298);
var state_60317__$1 = state_60317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60317__$1,(22),inst_60300,inst_60248);
} else {
if((state_val_60318 === (11))){
var inst_60258 = (state_60317[(12)]);
var inst_60272 = (state_60317[(10)]);
var inst_60272__$1 = cljs.core.seq.call(null,inst_60258);
var state_60317__$1 = (function (){var statearr_60341 = state_60317;
(statearr_60341[(10)] = inst_60272__$1);

return statearr_60341;
})();
if(inst_60272__$1){
var statearr_60342_60382 = state_60317__$1;
(statearr_60342_60382[(1)] = (13));

} else {
var statearr_60343_60383 = state_60317__$1;
(statearr_60343_60383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (9))){
var inst_60294 = (state_60317[(2)]);
var state_60317__$1 = state_60317;
var statearr_60344_60384 = state_60317__$1;
(statearr_60344_60384[(2)] = inst_60294);

(statearr_60344_60384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (5))){
var inst_60255 = cljs.core.deref.call(null,mults);
var inst_60256 = cljs.core.vals.call(null,inst_60255);
var inst_60257 = cljs.core.seq.call(null,inst_60256);
var inst_60258 = inst_60257;
var inst_60259 = null;
var inst_60260 = (0);
var inst_60261 = (0);
var state_60317__$1 = (function (){var statearr_60345 = state_60317;
(statearr_60345[(12)] = inst_60258);

(statearr_60345[(13)] = inst_60261);

(statearr_60345[(14)] = inst_60260);

(statearr_60345[(16)] = inst_60259);

return statearr_60345;
})();
var statearr_60346_60385 = state_60317__$1;
(statearr_60346_60385[(2)] = null);

(statearr_60346_60385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (14))){
var state_60317__$1 = state_60317;
var statearr_60350_60386 = state_60317__$1;
(statearr_60350_60386[(2)] = null);

(statearr_60350_60386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (16))){
var inst_60272 = (state_60317[(10)]);
var inst_60276 = cljs.core.chunk_first.call(null,inst_60272);
var inst_60277 = cljs.core.chunk_rest.call(null,inst_60272);
var inst_60278 = cljs.core.count.call(null,inst_60276);
var inst_60258 = inst_60277;
var inst_60259 = inst_60276;
var inst_60260 = inst_60278;
var inst_60261 = (0);
var state_60317__$1 = (function (){var statearr_60351 = state_60317;
(statearr_60351[(12)] = inst_60258);

(statearr_60351[(13)] = inst_60261);

(statearr_60351[(14)] = inst_60260);

(statearr_60351[(16)] = inst_60259);

return statearr_60351;
})();
var statearr_60352_60387 = state_60317__$1;
(statearr_60352_60387[(2)] = null);

(statearr_60352_60387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (10))){
var inst_60258 = (state_60317[(12)]);
var inst_60261 = (state_60317[(13)]);
var inst_60260 = (state_60317[(14)]);
var inst_60259 = (state_60317[(16)]);
var inst_60266 = cljs.core._nth.call(null,inst_60259,inst_60261);
var inst_60267 = cljs.core.async.muxch_STAR_.call(null,inst_60266);
var inst_60268 = cljs.core.async.close_BANG_.call(null,inst_60267);
var inst_60269 = (inst_60261 + (1));
var tmp60347 = inst_60258;
var tmp60348 = inst_60260;
var tmp60349 = inst_60259;
var inst_60258__$1 = tmp60347;
var inst_60259__$1 = tmp60349;
var inst_60260__$1 = tmp60348;
var inst_60261__$1 = inst_60269;
var state_60317__$1 = (function (){var statearr_60353 = state_60317;
(statearr_60353[(12)] = inst_60258__$1);

(statearr_60353[(13)] = inst_60261__$1);

(statearr_60353[(14)] = inst_60260__$1);

(statearr_60353[(17)] = inst_60268);

(statearr_60353[(16)] = inst_60259__$1);

return statearr_60353;
})();
var statearr_60354_60388 = state_60317__$1;
(statearr_60354_60388[(2)] = null);

(statearr_60354_60388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (18))){
var inst_60287 = (state_60317[(2)]);
var state_60317__$1 = state_60317;
var statearr_60355_60389 = state_60317__$1;
(statearr_60355_60389[(2)] = inst_60287);

(statearr_60355_60389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60318 === (8))){
var inst_60261 = (state_60317[(13)]);
var inst_60260 = (state_60317[(14)]);
var inst_60263 = (inst_60261 < inst_60260);
var inst_60264 = inst_60263;
var state_60317__$1 = state_60317;
if(cljs.core.truth_(inst_60264)){
var statearr_60356_60390 = state_60317__$1;
(statearr_60356_60390[(1)] = (10));

} else {
var statearr_60357_60391 = state_60317__$1;
(statearr_60357_60391[(1)] = (11));

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
});})(c__27974__auto___60363,mults,ensure_mult,p))
;
return ((function (switch__27884__auto__,c__27974__auto___60363,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_60358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60358[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_60358[(1)] = (1));

return statearr_60358;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_60317){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_60317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e60359){if((e60359 instanceof Object)){
var ex__27888__auto__ = e60359;
var statearr_60360_60392 = state_60317;
(statearr_60360_60392[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60393 = state_60317;
state_60317 = G__60393;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_60317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_60317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___60363,mults,ensure_mult,p))
})();
var state__27976__auto__ = (function (){var statearr_60361 = f__27975__auto__.call(null);
(statearr_60361[(6)] = c__27974__auto___60363);

return statearr_60361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___60363,mults,ensure_mult,p))
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
var G__60395 = arguments.length;
switch (G__60395) {
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
var G__60398 = arguments.length;
switch (G__60398) {
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
var G__60401 = arguments.length;
switch (G__60401) {
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
var c__27974__auto___60468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___60468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___60468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_60440){
var state_val_60441 = (state_60440[(1)]);
if((state_val_60441 === (7))){
var state_60440__$1 = state_60440;
var statearr_60442_60469 = state_60440__$1;
(statearr_60442_60469[(2)] = null);

(statearr_60442_60469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (1))){
var state_60440__$1 = state_60440;
var statearr_60443_60470 = state_60440__$1;
(statearr_60443_60470[(2)] = null);

(statearr_60443_60470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (4))){
var inst_60404 = (state_60440[(7)]);
var inst_60406 = (inst_60404 < cnt);
var state_60440__$1 = state_60440;
if(cljs.core.truth_(inst_60406)){
var statearr_60444_60471 = state_60440__$1;
(statearr_60444_60471[(1)] = (6));

} else {
var statearr_60445_60472 = state_60440__$1;
(statearr_60445_60472[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (15))){
var inst_60436 = (state_60440[(2)]);
var state_60440__$1 = state_60440;
var statearr_60446_60473 = state_60440__$1;
(statearr_60446_60473[(2)] = inst_60436);

(statearr_60446_60473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (13))){
var inst_60429 = cljs.core.async.close_BANG_.call(null,out);
var state_60440__$1 = state_60440;
var statearr_60447_60474 = state_60440__$1;
(statearr_60447_60474[(2)] = inst_60429);

(statearr_60447_60474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (6))){
var state_60440__$1 = state_60440;
var statearr_60448_60475 = state_60440__$1;
(statearr_60448_60475[(2)] = null);

(statearr_60448_60475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (3))){
var inst_60438 = (state_60440[(2)]);
var state_60440__$1 = state_60440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60440__$1,inst_60438);
} else {
if((state_val_60441 === (12))){
var inst_60426 = (state_60440[(8)]);
var inst_60426__$1 = (state_60440[(2)]);
var inst_60427 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_60426__$1);
var state_60440__$1 = (function (){var statearr_60449 = state_60440;
(statearr_60449[(8)] = inst_60426__$1);

return statearr_60449;
})();
if(cljs.core.truth_(inst_60427)){
var statearr_60450_60476 = state_60440__$1;
(statearr_60450_60476[(1)] = (13));

} else {
var statearr_60451_60477 = state_60440__$1;
(statearr_60451_60477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (2))){
var inst_60403 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_60404 = (0);
var state_60440__$1 = (function (){var statearr_60452 = state_60440;
(statearr_60452[(9)] = inst_60403);

(statearr_60452[(7)] = inst_60404);

return statearr_60452;
})();
var statearr_60453_60478 = state_60440__$1;
(statearr_60453_60478[(2)] = null);

(statearr_60453_60478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (11))){
var inst_60404 = (state_60440[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_60440,(10),Object,null,(9));
var inst_60413 = chs__$1.call(null,inst_60404);
var inst_60414 = done.call(null,inst_60404);
var inst_60415 = cljs.core.async.take_BANG_.call(null,inst_60413,inst_60414);
var state_60440__$1 = state_60440;
var statearr_60454_60479 = state_60440__$1;
(statearr_60454_60479[(2)] = inst_60415);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (9))){
var inst_60404 = (state_60440[(7)]);
var inst_60417 = (state_60440[(2)]);
var inst_60418 = (inst_60404 + (1));
var inst_60404__$1 = inst_60418;
var state_60440__$1 = (function (){var statearr_60455 = state_60440;
(statearr_60455[(10)] = inst_60417);

(statearr_60455[(7)] = inst_60404__$1);

return statearr_60455;
})();
var statearr_60456_60480 = state_60440__$1;
(statearr_60456_60480[(2)] = null);

(statearr_60456_60480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (5))){
var inst_60424 = (state_60440[(2)]);
var state_60440__$1 = (function (){var statearr_60457 = state_60440;
(statearr_60457[(11)] = inst_60424);

return statearr_60457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60440__$1,(12),dchan);
} else {
if((state_val_60441 === (14))){
var inst_60426 = (state_60440[(8)]);
var inst_60431 = cljs.core.apply.call(null,f,inst_60426);
var state_60440__$1 = state_60440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60440__$1,(16),out,inst_60431);
} else {
if((state_val_60441 === (16))){
var inst_60433 = (state_60440[(2)]);
var state_60440__$1 = (function (){var statearr_60458 = state_60440;
(statearr_60458[(12)] = inst_60433);

return statearr_60458;
})();
var statearr_60459_60481 = state_60440__$1;
(statearr_60459_60481[(2)] = null);

(statearr_60459_60481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (10))){
var inst_60408 = (state_60440[(2)]);
var inst_60409 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_60440__$1 = (function (){var statearr_60460 = state_60440;
(statearr_60460[(13)] = inst_60408);

return statearr_60460;
})();
var statearr_60461_60482 = state_60440__$1;
(statearr_60461_60482[(2)] = inst_60409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60441 === (8))){
var inst_60422 = (state_60440[(2)]);
var state_60440__$1 = state_60440;
var statearr_60462_60483 = state_60440__$1;
(statearr_60462_60483[(2)] = inst_60422);

(statearr_60462_60483[(1)] = (5));


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
});})(c__27974__auto___60468,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27884__auto__,c__27974__auto___60468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_60463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60463[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_60463[(1)] = (1));

return statearr_60463;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_60440){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_60440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e60464){if((e60464 instanceof Object)){
var ex__27888__auto__ = e60464;
var statearr_60465_60484 = state_60440;
(statearr_60465_60484[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60485 = state_60440;
state_60440 = G__60485;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_60440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_60440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___60468,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27976__auto__ = (function (){var statearr_60466 = f__27975__auto__.call(null);
(statearr_60466[(6)] = c__27974__auto___60468);

return statearr_60466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___60468,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__60488 = arguments.length;
switch (G__60488) {
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
var c__27974__auto___60542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___60542,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___60542,out){
return (function (state_60520){
var state_val_60521 = (state_60520[(1)]);
if((state_val_60521 === (7))){
var inst_60499 = (state_60520[(7)]);
var inst_60500 = (state_60520[(8)]);
var inst_60499__$1 = (state_60520[(2)]);
var inst_60500__$1 = cljs.core.nth.call(null,inst_60499__$1,(0),null);
var inst_60501 = cljs.core.nth.call(null,inst_60499__$1,(1),null);
var inst_60502 = (inst_60500__$1 == null);
var state_60520__$1 = (function (){var statearr_60522 = state_60520;
(statearr_60522[(7)] = inst_60499__$1);

(statearr_60522[(8)] = inst_60500__$1);

(statearr_60522[(9)] = inst_60501);

return statearr_60522;
})();
if(cljs.core.truth_(inst_60502)){
var statearr_60523_60543 = state_60520__$1;
(statearr_60523_60543[(1)] = (8));

} else {
var statearr_60524_60544 = state_60520__$1;
(statearr_60524_60544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (1))){
var inst_60489 = cljs.core.vec.call(null,chs);
var inst_60490 = inst_60489;
var state_60520__$1 = (function (){var statearr_60525 = state_60520;
(statearr_60525[(10)] = inst_60490);

return statearr_60525;
})();
var statearr_60526_60545 = state_60520__$1;
(statearr_60526_60545[(2)] = null);

(statearr_60526_60545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (4))){
var inst_60490 = (state_60520[(10)]);
var state_60520__$1 = state_60520;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60520__$1,(7),inst_60490);
} else {
if((state_val_60521 === (6))){
var inst_60516 = (state_60520[(2)]);
var state_60520__$1 = state_60520;
var statearr_60527_60546 = state_60520__$1;
(statearr_60527_60546[(2)] = inst_60516);

(statearr_60527_60546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (3))){
var inst_60518 = (state_60520[(2)]);
var state_60520__$1 = state_60520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60520__$1,inst_60518);
} else {
if((state_val_60521 === (2))){
var inst_60490 = (state_60520[(10)]);
var inst_60492 = cljs.core.count.call(null,inst_60490);
var inst_60493 = (inst_60492 > (0));
var state_60520__$1 = state_60520;
if(cljs.core.truth_(inst_60493)){
var statearr_60529_60547 = state_60520__$1;
(statearr_60529_60547[(1)] = (4));

} else {
var statearr_60530_60548 = state_60520__$1;
(statearr_60530_60548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (11))){
var inst_60490 = (state_60520[(10)]);
var inst_60509 = (state_60520[(2)]);
var tmp60528 = inst_60490;
var inst_60490__$1 = tmp60528;
var state_60520__$1 = (function (){var statearr_60531 = state_60520;
(statearr_60531[(10)] = inst_60490__$1);

(statearr_60531[(11)] = inst_60509);

return statearr_60531;
})();
var statearr_60532_60549 = state_60520__$1;
(statearr_60532_60549[(2)] = null);

(statearr_60532_60549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (9))){
var inst_60500 = (state_60520[(8)]);
var state_60520__$1 = state_60520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60520__$1,(11),out,inst_60500);
} else {
if((state_val_60521 === (5))){
var inst_60514 = cljs.core.async.close_BANG_.call(null,out);
var state_60520__$1 = state_60520;
var statearr_60533_60550 = state_60520__$1;
(statearr_60533_60550[(2)] = inst_60514);

(statearr_60533_60550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (10))){
var inst_60512 = (state_60520[(2)]);
var state_60520__$1 = state_60520;
var statearr_60534_60551 = state_60520__$1;
(statearr_60534_60551[(2)] = inst_60512);

(statearr_60534_60551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60521 === (8))){
var inst_60499 = (state_60520[(7)]);
var inst_60490 = (state_60520[(10)]);
var inst_60500 = (state_60520[(8)]);
var inst_60501 = (state_60520[(9)]);
var inst_60504 = (function (){var cs = inst_60490;
var vec__60495 = inst_60499;
var v = inst_60500;
var c = inst_60501;
return ((function (cs,vec__60495,v,c,inst_60499,inst_60490,inst_60500,inst_60501,state_val_60521,c__27974__auto___60542,out){
return (function (p1__60486_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__60486_SHARP_);
});
;})(cs,vec__60495,v,c,inst_60499,inst_60490,inst_60500,inst_60501,state_val_60521,c__27974__auto___60542,out))
})();
var inst_60505 = cljs.core.filterv.call(null,inst_60504,inst_60490);
var inst_60490__$1 = inst_60505;
var state_60520__$1 = (function (){var statearr_60535 = state_60520;
(statearr_60535[(10)] = inst_60490__$1);

return statearr_60535;
})();
var statearr_60536_60552 = state_60520__$1;
(statearr_60536_60552[(2)] = null);

(statearr_60536_60552[(1)] = (2));


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
});})(c__27974__auto___60542,out))
;
return ((function (switch__27884__auto__,c__27974__auto___60542,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_60537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60537[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_60537[(1)] = (1));

return statearr_60537;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_60520){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_60520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e60538){if((e60538 instanceof Object)){
var ex__27888__auto__ = e60538;
var statearr_60539_60553 = state_60520;
(statearr_60539_60553[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60554 = state_60520;
state_60520 = G__60554;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_60520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_60520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___60542,out))
})();
var state__27976__auto__ = (function (){var statearr_60540 = f__27975__auto__.call(null);
(statearr_60540[(6)] = c__27974__auto___60542);

return statearr_60540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___60542,out))
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
var G__60556 = arguments.length;
switch (G__60556) {
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
var c__27974__auto___60601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___60601,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___60601,out){
return (function (state_60580){
var state_val_60581 = (state_60580[(1)]);
if((state_val_60581 === (7))){
var inst_60562 = (state_60580[(7)]);
var inst_60562__$1 = (state_60580[(2)]);
var inst_60563 = (inst_60562__$1 == null);
var inst_60564 = cljs.core.not.call(null,inst_60563);
var state_60580__$1 = (function (){var statearr_60582 = state_60580;
(statearr_60582[(7)] = inst_60562__$1);

return statearr_60582;
})();
if(inst_60564){
var statearr_60583_60602 = state_60580__$1;
(statearr_60583_60602[(1)] = (8));

} else {
var statearr_60584_60603 = state_60580__$1;
(statearr_60584_60603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (1))){
var inst_60557 = (0);
var state_60580__$1 = (function (){var statearr_60585 = state_60580;
(statearr_60585[(8)] = inst_60557);

return statearr_60585;
})();
var statearr_60586_60604 = state_60580__$1;
(statearr_60586_60604[(2)] = null);

(statearr_60586_60604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (4))){
var state_60580__$1 = state_60580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60580__$1,(7),ch);
} else {
if((state_val_60581 === (6))){
var inst_60575 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60587_60605 = state_60580__$1;
(statearr_60587_60605[(2)] = inst_60575);

(statearr_60587_60605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (3))){
var inst_60577 = (state_60580[(2)]);
var inst_60578 = cljs.core.async.close_BANG_.call(null,out);
var state_60580__$1 = (function (){var statearr_60588 = state_60580;
(statearr_60588[(9)] = inst_60577);

return statearr_60588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60580__$1,inst_60578);
} else {
if((state_val_60581 === (2))){
var inst_60557 = (state_60580[(8)]);
var inst_60559 = (inst_60557 < n);
var state_60580__$1 = state_60580;
if(cljs.core.truth_(inst_60559)){
var statearr_60589_60606 = state_60580__$1;
(statearr_60589_60606[(1)] = (4));

} else {
var statearr_60590_60607 = state_60580__$1;
(statearr_60590_60607[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (11))){
var inst_60557 = (state_60580[(8)]);
var inst_60567 = (state_60580[(2)]);
var inst_60568 = (inst_60557 + (1));
var inst_60557__$1 = inst_60568;
var state_60580__$1 = (function (){var statearr_60591 = state_60580;
(statearr_60591[(10)] = inst_60567);

(statearr_60591[(8)] = inst_60557__$1);

return statearr_60591;
})();
var statearr_60592_60608 = state_60580__$1;
(statearr_60592_60608[(2)] = null);

(statearr_60592_60608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (9))){
var state_60580__$1 = state_60580;
var statearr_60593_60609 = state_60580__$1;
(statearr_60593_60609[(2)] = null);

(statearr_60593_60609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (5))){
var state_60580__$1 = state_60580;
var statearr_60594_60610 = state_60580__$1;
(statearr_60594_60610[(2)] = null);

(statearr_60594_60610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (10))){
var inst_60572 = (state_60580[(2)]);
var state_60580__$1 = state_60580;
var statearr_60595_60611 = state_60580__$1;
(statearr_60595_60611[(2)] = inst_60572);

(statearr_60595_60611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60581 === (8))){
var inst_60562 = (state_60580[(7)]);
var state_60580__$1 = state_60580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60580__$1,(11),out,inst_60562);
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
});})(c__27974__auto___60601,out))
;
return ((function (switch__27884__auto__,c__27974__auto___60601,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_60596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60596[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_60596[(1)] = (1));

return statearr_60596;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_60580){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_60580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e60597){if((e60597 instanceof Object)){
var ex__27888__auto__ = e60597;
var statearr_60598_60612 = state_60580;
(statearr_60598_60612[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60613 = state_60580;
state_60580 = G__60613;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_60580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_60580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___60601,out))
})();
var state__27976__auto__ = (function (){var statearr_60599 = f__27975__auto__.call(null);
(statearr_60599[(6)] = c__27974__auto___60601);

return statearr_60599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___60601,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async60615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60615 = (function (f,ch,meta60616){
this.f = f;
this.ch = ch;
this.meta60616 = meta60616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60617,meta60616__$1){
var self__ = this;
var _60617__$1 = this;
return (new cljs.core.async.t_cljs$core$async60615(self__.f,self__.ch,meta60616__$1));
});

cljs.core.async.t_cljs$core$async60615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60617){
var self__ = this;
var _60617__$1 = this;
return self__.meta60616;
});

cljs.core.async.t_cljs$core$async60615.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60615.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60615.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async60618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60618 = (function (f,ch,meta60616,_,fn1,meta60619){
this.f = f;
this.ch = ch;
this.meta60616 = meta60616;
this._ = _;
this.fn1 = fn1;
this.meta60619 = meta60619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_60620,meta60619__$1){
var self__ = this;
var _60620__$1 = this;
return (new cljs.core.async.t_cljs$core$async60618(self__.f,self__.ch,self__.meta60616,self__._,self__.fn1,meta60619__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async60618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_60620){
var self__ = this;
var _60620__$1 = this;
return self__.meta60619;
});})(___$1))
;

cljs.core.async.t_cljs$core$async60618.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async60618.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async60618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__60614_SHARP_){
return f1.call(null,(((p1__60614_SHARP_ == null))?null:self__.f.call(null,p1__60614_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async60618.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60616","meta60616",-1870555550,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async60615","cljs.core.async/t_cljs$core$async60615",-824351750,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60619","meta60619",1134428425,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async60618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60618";

cljs.core.async.t_cljs$core$async60618.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async60618");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60618.
 */
cljs.core.async.__GT_t_cljs$core$async60618 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60618(f__$1,ch__$1,meta60616__$1,___$2,fn1__$1,meta60619){
return (new cljs.core.async.t_cljs$core$async60618(f__$1,ch__$1,meta60616__$1,___$2,fn1__$1,meta60619));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async60618(self__.f,self__.ch,self__.meta60616,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async60615.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async60615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60616","meta60616",-1870555550,null)], null);
});

cljs.core.async.t_cljs$core$async60615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60615";

cljs.core.async.t_cljs$core$async60615.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async60615");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60615.
 */
cljs.core.async.__GT_t_cljs$core$async60615 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60615(f__$1,ch__$1,meta60616){
return (new cljs.core.async.t_cljs$core$async60615(f__$1,ch__$1,meta60616));
});

}

return (new cljs.core.async.t_cljs$core$async60615(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async60621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60621 = (function (f,ch,meta60622){
this.f = f;
this.ch = ch;
this.meta60622 = meta60622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60623,meta60622__$1){
var self__ = this;
var _60623__$1 = this;
return (new cljs.core.async.t_cljs$core$async60621(self__.f,self__.ch,meta60622__$1));
});

cljs.core.async.t_cljs$core$async60621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60623){
var self__ = this;
var _60623__$1 = this;
return self__.meta60622;
});

cljs.core.async.t_cljs$core$async60621.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60621.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async60621.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async60621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60622","meta60622",1722083662,null)], null);
});

cljs.core.async.t_cljs$core$async60621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60621";

cljs.core.async.t_cljs$core$async60621.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async60621");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60621.
 */
cljs.core.async.__GT_t_cljs$core$async60621 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60621(f__$1,ch__$1,meta60622){
return (new cljs.core.async.t_cljs$core$async60621(f__$1,ch__$1,meta60622));
});

}

return (new cljs.core.async.t_cljs$core$async60621(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async60624 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60624 = (function (p,ch,meta60625){
this.p = p;
this.ch = ch;
this.meta60625 = meta60625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60626,meta60625__$1){
var self__ = this;
var _60626__$1 = this;
return (new cljs.core.async.t_cljs$core$async60624(self__.p,self__.ch,meta60625__$1));
});

cljs.core.async.t_cljs$core$async60624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60626){
var self__ = this;
var _60626__$1 = this;
return self__.meta60625;
});

cljs.core.async.t_cljs$core$async60624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60624.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async60624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async60624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60625","meta60625",1380694008,null)], null);
});

cljs.core.async.t_cljs$core$async60624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60624";

cljs.core.async.t_cljs$core$async60624.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async60624");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60624.
 */
cljs.core.async.__GT_t_cljs$core$async60624 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60624(p__$1,ch__$1,meta60625){
return (new cljs.core.async.t_cljs$core$async60624(p__$1,ch__$1,meta60625));
});

}

return (new cljs.core.async.t_cljs$core$async60624(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__60628 = arguments.length;
switch (G__60628) {
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
var c__27974__auto___60668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___60668,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___60668,out){
return (function (state_60649){
var state_val_60650 = (state_60649[(1)]);
if((state_val_60650 === (7))){
var inst_60645 = (state_60649[(2)]);
var state_60649__$1 = state_60649;
var statearr_60651_60669 = state_60649__$1;
(statearr_60651_60669[(2)] = inst_60645);

(statearr_60651_60669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60650 === (1))){
var state_60649__$1 = state_60649;
var statearr_60652_60670 = state_60649__$1;
(statearr_60652_60670[(2)] = null);

(statearr_60652_60670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60650 === (4))){
var inst_60631 = (state_60649[(7)]);
var inst_60631__$1 = (state_60649[(2)]);
var inst_60632 = (inst_60631__$1 == null);
var state_60649__$1 = (function (){var statearr_60653 = state_60649;
(statearr_60653[(7)] = inst_60631__$1);

return statearr_60653;
})();
if(cljs.core.truth_(inst_60632)){
var statearr_60654_60671 = state_60649__$1;
(statearr_60654_60671[(1)] = (5));

} else {
var statearr_60655_60672 = state_60649__$1;
(statearr_60655_60672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60650 === (6))){
var inst_60631 = (state_60649[(7)]);
var inst_60636 = p.call(null,inst_60631);
var state_60649__$1 = state_60649;
if(cljs.core.truth_(inst_60636)){
var statearr_60656_60673 = state_60649__$1;
(statearr_60656_60673[(1)] = (8));

} else {
var statearr_60657_60674 = state_60649__$1;
(statearr_60657_60674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60650 === (3))){
var inst_60647 = (state_60649[(2)]);
var state_60649__$1 = state_60649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60649__$1,inst_60647);
} else {
if((state_val_60650 === (2))){
var state_60649__$1 = state_60649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60649__$1,(4),ch);
} else {
if((state_val_60650 === (11))){
var inst_60639 = (state_60649[(2)]);
var state_60649__$1 = state_60649;
var statearr_60658_60675 = state_60649__$1;
(statearr_60658_60675[(2)] = inst_60639);

(statearr_60658_60675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60650 === (9))){
var state_60649__$1 = state_60649;
var statearr_60659_60676 = state_60649__$1;
(statearr_60659_60676[(2)] = null);

(statearr_60659_60676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60650 === (5))){
var inst_60634 = cljs.core.async.close_BANG_.call(null,out);
var state_60649__$1 = state_60649;
var statearr_60660_60677 = state_60649__$1;
(statearr_60660_60677[(2)] = inst_60634);

(statearr_60660_60677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60650 === (10))){
var inst_60642 = (state_60649[(2)]);
var state_60649__$1 = (function (){var statearr_60661 = state_60649;
(statearr_60661[(8)] = inst_60642);

return statearr_60661;
})();
var statearr_60662_60678 = state_60649__$1;
(statearr_60662_60678[(2)] = null);

(statearr_60662_60678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60650 === (8))){
var inst_60631 = (state_60649[(7)]);
var state_60649__$1 = state_60649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60649__$1,(11),out,inst_60631);
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
});})(c__27974__auto___60668,out))
;
return ((function (switch__27884__auto__,c__27974__auto___60668,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_60663 = [null,null,null,null,null,null,null,null,null];
(statearr_60663[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_60663[(1)] = (1));

return statearr_60663;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_60649){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_60649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e60664){if((e60664 instanceof Object)){
var ex__27888__auto__ = e60664;
var statearr_60665_60679 = state_60649;
(statearr_60665_60679[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60680 = state_60649;
state_60649 = G__60680;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_60649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_60649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___60668,out))
})();
var state__27976__auto__ = (function (){var statearr_60666 = f__27975__auto__.call(null);
(statearr_60666[(6)] = c__27974__auto___60668);

return statearr_60666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___60668,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__60682 = arguments.length;
switch (G__60682) {
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
return (function (state_60745){
var state_val_60746 = (state_60745[(1)]);
if((state_val_60746 === (7))){
var inst_60741 = (state_60745[(2)]);
var state_60745__$1 = state_60745;
var statearr_60747_60785 = state_60745__$1;
(statearr_60747_60785[(2)] = inst_60741);

(statearr_60747_60785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (20))){
var inst_60711 = (state_60745[(7)]);
var inst_60722 = (state_60745[(2)]);
var inst_60723 = cljs.core.next.call(null,inst_60711);
var inst_60697 = inst_60723;
var inst_60698 = null;
var inst_60699 = (0);
var inst_60700 = (0);
var state_60745__$1 = (function (){var statearr_60748 = state_60745;
(statearr_60748[(8)] = inst_60698);

(statearr_60748[(9)] = inst_60697);

(statearr_60748[(10)] = inst_60699);

(statearr_60748[(11)] = inst_60700);

(statearr_60748[(12)] = inst_60722);

return statearr_60748;
})();
var statearr_60749_60786 = state_60745__$1;
(statearr_60749_60786[(2)] = null);

(statearr_60749_60786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (1))){
var state_60745__$1 = state_60745;
var statearr_60750_60787 = state_60745__$1;
(statearr_60750_60787[(2)] = null);

(statearr_60750_60787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (4))){
var inst_60686 = (state_60745[(13)]);
var inst_60686__$1 = (state_60745[(2)]);
var inst_60687 = (inst_60686__$1 == null);
var state_60745__$1 = (function (){var statearr_60751 = state_60745;
(statearr_60751[(13)] = inst_60686__$1);

return statearr_60751;
})();
if(cljs.core.truth_(inst_60687)){
var statearr_60752_60788 = state_60745__$1;
(statearr_60752_60788[(1)] = (5));

} else {
var statearr_60753_60789 = state_60745__$1;
(statearr_60753_60789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (15))){
var state_60745__$1 = state_60745;
var statearr_60757_60790 = state_60745__$1;
(statearr_60757_60790[(2)] = null);

(statearr_60757_60790[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (21))){
var state_60745__$1 = state_60745;
var statearr_60758_60791 = state_60745__$1;
(statearr_60758_60791[(2)] = null);

(statearr_60758_60791[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (13))){
var inst_60698 = (state_60745[(8)]);
var inst_60697 = (state_60745[(9)]);
var inst_60699 = (state_60745[(10)]);
var inst_60700 = (state_60745[(11)]);
var inst_60707 = (state_60745[(2)]);
var inst_60708 = (inst_60700 + (1));
var tmp60754 = inst_60698;
var tmp60755 = inst_60697;
var tmp60756 = inst_60699;
var inst_60697__$1 = tmp60755;
var inst_60698__$1 = tmp60754;
var inst_60699__$1 = tmp60756;
var inst_60700__$1 = inst_60708;
var state_60745__$1 = (function (){var statearr_60759 = state_60745;
(statearr_60759[(8)] = inst_60698__$1);

(statearr_60759[(9)] = inst_60697__$1);

(statearr_60759[(10)] = inst_60699__$1);

(statearr_60759[(14)] = inst_60707);

(statearr_60759[(11)] = inst_60700__$1);

return statearr_60759;
})();
var statearr_60760_60792 = state_60745__$1;
(statearr_60760_60792[(2)] = null);

(statearr_60760_60792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (22))){
var state_60745__$1 = state_60745;
var statearr_60761_60793 = state_60745__$1;
(statearr_60761_60793[(2)] = null);

(statearr_60761_60793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (6))){
var inst_60686 = (state_60745[(13)]);
var inst_60695 = f.call(null,inst_60686);
var inst_60696 = cljs.core.seq.call(null,inst_60695);
var inst_60697 = inst_60696;
var inst_60698 = null;
var inst_60699 = (0);
var inst_60700 = (0);
var state_60745__$1 = (function (){var statearr_60762 = state_60745;
(statearr_60762[(8)] = inst_60698);

(statearr_60762[(9)] = inst_60697);

(statearr_60762[(10)] = inst_60699);

(statearr_60762[(11)] = inst_60700);

return statearr_60762;
})();
var statearr_60763_60794 = state_60745__$1;
(statearr_60763_60794[(2)] = null);

(statearr_60763_60794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (17))){
var inst_60711 = (state_60745[(7)]);
var inst_60715 = cljs.core.chunk_first.call(null,inst_60711);
var inst_60716 = cljs.core.chunk_rest.call(null,inst_60711);
var inst_60717 = cljs.core.count.call(null,inst_60715);
var inst_60697 = inst_60716;
var inst_60698 = inst_60715;
var inst_60699 = inst_60717;
var inst_60700 = (0);
var state_60745__$1 = (function (){var statearr_60764 = state_60745;
(statearr_60764[(8)] = inst_60698);

(statearr_60764[(9)] = inst_60697);

(statearr_60764[(10)] = inst_60699);

(statearr_60764[(11)] = inst_60700);

return statearr_60764;
})();
var statearr_60765_60795 = state_60745__$1;
(statearr_60765_60795[(2)] = null);

(statearr_60765_60795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (3))){
var inst_60743 = (state_60745[(2)]);
var state_60745__$1 = state_60745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60745__$1,inst_60743);
} else {
if((state_val_60746 === (12))){
var inst_60731 = (state_60745[(2)]);
var state_60745__$1 = state_60745;
var statearr_60766_60796 = state_60745__$1;
(statearr_60766_60796[(2)] = inst_60731);

(statearr_60766_60796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (2))){
var state_60745__$1 = state_60745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60745__$1,(4),in$);
} else {
if((state_val_60746 === (23))){
var inst_60739 = (state_60745[(2)]);
var state_60745__$1 = state_60745;
var statearr_60767_60797 = state_60745__$1;
(statearr_60767_60797[(2)] = inst_60739);

(statearr_60767_60797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (19))){
var inst_60726 = (state_60745[(2)]);
var state_60745__$1 = state_60745;
var statearr_60768_60798 = state_60745__$1;
(statearr_60768_60798[(2)] = inst_60726);

(statearr_60768_60798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (11))){
var inst_60697 = (state_60745[(9)]);
var inst_60711 = (state_60745[(7)]);
var inst_60711__$1 = cljs.core.seq.call(null,inst_60697);
var state_60745__$1 = (function (){var statearr_60769 = state_60745;
(statearr_60769[(7)] = inst_60711__$1);

return statearr_60769;
})();
if(inst_60711__$1){
var statearr_60770_60799 = state_60745__$1;
(statearr_60770_60799[(1)] = (14));

} else {
var statearr_60771_60800 = state_60745__$1;
(statearr_60771_60800[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (9))){
var inst_60733 = (state_60745[(2)]);
var inst_60734 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_60745__$1 = (function (){var statearr_60772 = state_60745;
(statearr_60772[(15)] = inst_60733);

return statearr_60772;
})();
if(cljs.core.truth_(inst_60734)){
var statearr_60773_60801 = state_60745__$1;
(statearr_60773_60801[(1)] = (21));

} else {
var statearr_60774_60802 = state_60745__$1;
(statearr_60774_60802[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (5))){
var inst_60689 = cljs.core.async.close_BANG_.call(null,out);
var state_60745__$1 = state_60745;
var statearr_60775_60803 = state_60745__$1;
(statearr_60775_60803[(2)] = inst_60689);

(statearr_60775_60803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (14))){
var inst_60711 = (state_60745[(7)]);
var inst_60713 = cljs.core.chunked_seq_QMARK_.call(null,inst_60711);
var state_60745__$1 = state_60745;
if(inst_60713){
var statearr_60776_60804 = state_60745__$1;
(statearr_60776_60804[(1)] = (17));

} else {
var statearr_60777_60805 = state_60745__$1;
(statearr_60777_60805[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (16))){
var inst_60729 = (state_60745[(2)]);
var state_60745__$1 = state_60745;
var statearr_60778_60806 = state_60745__$1;
(statearr_60778_60806[(2)] = inst_60729);

(statearr_60778_60806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60746 === (10))){
var inst_60698 = (state_60745[(8)]);
var inst_60700 = (state_60745[(11)]);
var inst_60705 = cljs.core._nth.call(null,inst_60698,inst_60700);
var state_60745__$1 = state_60745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60745__$1,(13),out,inst_60705);
} else {
if((state_val_60746 === (18))){
var inst_60711 = (state_60745[(7)]);
var inst_60720 = cljs.core.first.call(null,inst_60711);
var state_60745__$1 = state_60745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60745__$1,(20),out,inst_60720);
} else {
if((state_val_60746 === (8))){
var inst_60699 = (state_60745[(10)]);
var inst_60700 = (state_60745[(11)]);
var inst_60702 = (inst_60700 < inst_60699);
var inst_60703 = inst_60702;
var state_60745__$1 = state_60745;
if(cljs.core.truth_(inst_60703)){
var statearr_60779_60807 = state_60745__$1;
(statearr_60779_60807[(1)] = (10));

} else {
var statearr_60780_60808 = state_60745__$1;
(statearr_60780_60808[(1)] = (11));

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
var statearr_60781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60781[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__);

(statearr_60781[(1)] = (1));

return statearr_60781;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____1 = (function (state_60745){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_60745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e60782){if((e60782 instanceof Object)){
var ex__27888__auto__ = e60782;
var statearr_60783_60809 = state_60745;
(statearr_60783_60809[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60810 = state_60745;
state_60745 = G__60810;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__ = function(state_60745){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____1.call(this,state_60745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_60784 = f__27975__auto__.call(null);
(statearr_60784[(6)] = c__27974__auto__);

return statearr_60784;
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
var G__60812 = arguments.length;
switch (G__60812) {
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
var G__60815 = arguments.length;
switch (G__60815) {
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
var G__60818 = arguments.length;
switch (G__60818) {
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
var c__27974__auto___60865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___60865,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___60865,out){
return (function (state_60842){
var state_val_60843 = (state_60842[(1)]);
if((state_val_60843 === (7))){
var inst_60837 = (state_60842[(2)]);
var state_60842__$1 = state_60842;
var statearr_60844_60866 = state_60842__$1;
(statearr_60844_60866[(2)] = inst_60837);

(statearr_60844_60866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60843 === (1))){
var inst_60819 = null;
var state_60842__$1 = (function (){var statearr_60845 = state_60842;
(statearr_60845[(7)] = inst_60819);

return statearr_60845;
})();
var statearr_60846_60867 = state_60842__$1;
(statearr_60846_60867[(2)] = null);

(statearr_60846_60867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60843 === (4))){
var inst_60822 = (state_60842[(8)]);
var inst_60822__$1 = (state_60842[(2)]);
var inst_60823 = (inst_60822__$1 == null);
var inst_60824 = cljs.core.not.call(null,inst_60823);
var state_60842__$1 = (function (){var statearr_60847 = state_60842;
(statearr_60847[(8)] = inst_60822__$1);

return statearr_60847;
})();
if(inst_60824){
var statearr_60848_60868 = state_60842__$1;
(statearr_60848_60868[(1)] = (5));

} else {
var statearr_60849_60869 = state_60842__$1;
(statearr_60849_60869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60843 === (6))){
var state_60842__$1 = state_60842;
var statearr_60850_60870 = state_60842__$1;
(statearr_60850_60870[(2)] = null);

(statearr_60850_60870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60843 === (3))){
var inst_60839 = (state_60842[(2)]);
var inst_60840 = cljs.core.async.close_BANG_.call(null,out);
var state_60842__$1 = (function (){var statearr_60851 = state_60842;
(statearr_60851[(9)] = inst_60839);

return statearr_60851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60842__$1,inst_60840);
} else {
if((state_val_60843 === (2))){
var state_60842__$1 = state_60842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60842__$1,(4),ch);
} else {
if((state_val_60843 === (11))){
var inst_60822 = (state_60842[(8)]);
var inst_60831 = (state_60842[(2)]);
var inst_60819 = inst_60822;
var state_60842__$1 = (function (){var statearr_60852 = state_60842;
(statearr_60852[(7)] = inst_60819);

(statearr_60852[(10)] = inst_60831);

return statearr_60852;
})();
var statearr_60853_60871 = state_60842__$1;
(statearr_60853_60871[(2)] = null);

(statearr_60853_60871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60843 === (9))){
var inst_60822 = (state_60842[(8)]);
var state_60842__$1 = state_60842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60842__$1,(11),out,inst_60822);
} else {
if((state_val_60843 === (5))){
var inst_60819 = (state_60842[(7)]);
var inst_60822 = (state_60842[(8)]);
var inst_60826 = cljs.core._EQ_.call(null,inst_60822,inst_60819);
var state_60842__$1 = state_60842;
if(inst_60826){
var statearr_60855_60872 = state_60842__$1;
(statearr_60855_60872[(1)] = (8));

} else {
var statearr_60856_60873 = state_60842__$1;
(statearr_60856_60873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60843 === (10))){
var inst_60834 = (state_60842[(2)]);
var state_60842__$1 = state_60842;
var statearr_60857_60874 = state_60842__$1;
(statearr_60857_60874[(2)] = inst_60834);

(statearr_60857_60874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60843 === (8))){
var inst_60819 = (state_60842[(7)]);
var tmp60854 = inst_60819;
var inst_60819__$1 = tmp60854;
var state_60842__$1 = (function (){var statearr_60858 = state_60842;
(statearr_60858[(7)] = inst_60819__$1);

return statearr_60858;
})();
var statearr_60859_60875 = state_60842__$1;
(statearr_60859_60875[(2)] = null);

(statearr_60859_60875[(1)] = (2));


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
});})(c__27974__auto___60865,out))
;
return ((function (switch__27884__auto__,c__27974__auto___60865,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_60860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60860[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_60860[(1)] = (1));

return statearr_60860;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_60842){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_60842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e60861){if((e60861 instanceof Object)){
var ex__27888__auto__ = e60861;
var statearr_60862_60876 = state_60842;
(statearr_60862_60876[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60877 = state_60842;
state_60842 = G__60877;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_60842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_60842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___60865,out))
})();
var state__27976__auto__ = (function (){var statearr_60863 = f__27975__auto__.call(null);
(statearr_60863[(6)] = c__27974__auto___60865);

return statearr_60863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___60865,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60879 = arguments.length;
switch (G__60879) {
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
var c__27974__auto___60945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___60945,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___60945,out){
return (function (state_60917){
var state_val_60918 = (state_60917[(1)]);
if((state_val_60918 === (7))){
var inst_60913 = (state_60917[(2)]);
var state_60917__$1 = state_60917;
var statearr_60919_60946 = state_60917__$1;
(statearr_60919_60946[(2)] = inst_60913);

(statearr_60919_60946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (1))){
var inst_60880 = (new Array(n));
var inst_60881 = inst_60880;
var inst_60882 = (0);
var state_60917__$1 = (function (){var statearr_60920 = state_60917;
(statearr_60920[(7)] = inst_60882);

(statearr_60920[(8)] = inst_60881);

return statearr_60920;
})();
var statearr_60921_60947 = state_60917__$1;
(statearr_60921_60947[(2)] = null);

(statearr_60921_60947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (4))){
var inst_60885 = (state_60917[(9)]);
var inst_60885__$1 = (state_60917[(2)]);
var inst_60886 = (inst_60885__$1 == null);
var inst_60887 = cljs.core.not.call(null,inst_60886);
var state_60917__$1 = (function (){var statearr_60922 = state_60917;
(statearr_60922[(9)] = inst_60885__$1);

return statearr_60922;
})();
if(inst_60887){
var statearr_60923_60948 = state_60917__$1;
(statearr_60923_60948[(1)] = (5));

} else {
var statearr_60924_60949 = state_60917__$1;
(statearr_60924_60949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (15))){
var inst_60907 = (state_60917[(2)]);
var state_60917__$1 = state_60917;
var statearr_60925_60950 = state_60917__$1;
(statearr_60925_60950[(2)] = inst_60907);

(statearr_60925_60950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (13))){
var state_60917__$1 = state_60917;
var statearr_60926_60951 = state_60917__$1;
(statearr_60926_60951[(2)] = null);

(statearr_60926_60951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (6))){
var inst_60882 = (state_60917[(7)]);
var inst_60903 = (inst_60882 > (0));
var state_60917__$1 = state_60917;
if(cljs.core.truth_(inst_60903)){
var statearr_60927_60952 = state_60917__$1;
(statearr_60927_60952[(1)] = (12));

} else {
var statearr_60928_60953 = state_60917__$1;
(statearr_60928_60953[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (3))){
var inst_60915 = (state_60917[(2)]);
var state_60917__$1 = state_60917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60917__$1,inst_60915);
} else {
if((state_val_60918 === (12))){
var inst_60881 = (state_60917[(8)]);
var inst_60905 = cljs.core.vec.call(null,inst_60881);
var state_60917__$1 = state_60917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60917__$1,(15),out,inst_60905);
} else {
if((state_val_60918 === (2))){
var state_60917__$1 = state_60917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60917__$1,(4),ch);
} else {
if((state_val_60918 === (11))){
var inst_60897 = (state_60917[(2)]);
var inst_60898 = (new Array(n));
var inst_60881 = inst_60898;
var inst_60882 = (0);
var state_60917__$1 = (function (){var statearr_60929 = state_60917;
(statearr_60929[(7)] = inst_60882);

(statearr_60929[(10)] = inst_60897);

(statearr_60929[(8)] = inst_60881);

return statearr_60929;
})();
var statearr_60930_60954 = state_60917__$1;
(statearr_60930_60954[(2)] = null);

(statearr_60930_60954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (9))){
var inst_60881 = (state_60917[(8)]);
var inst_60895 = cljs.core.vec.call(null,inst_60881);
var state_60917__$1 = state_60917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60917__$1,(11),out,inst_60895);
} else {
if((state_val_60918 === (5))){
var inst_60882 = (state_60917[(7)]);
var inst_60885 = (state_60917[(9)]);
var inst_60890 = (state_60917[(11)]);
var inst_60881 = (state_60917[(8)]);
var inst_60889 = (inst_60881[inst_60882] = inst_60885);
var inst_60890__$1 = (inst_60882 + (1));
var inst_60891 = (inst_60890__$1 < n);
var state_60917__$1 = (function (){var statearr_60931 = state_60917;
(statearr_60931[(12)] = inst_60889);

(statearr_60931[(11)] = inst_60890__$1);

return statearr_60931;
})();
if(cljs.core.truth_(inst_60891)){
var statearr_60932_60955 = state_60917__$1;
(statearr_60932_60955[(1)] = (8));

} else {
var statearr_60933_60956 = state_60917__$1;
(statearr_60933_60956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (14))){
var inst_60910 = (state_60917[(2)]);
var inst_60911 = cljs.core.async.close_BANG_.call(null,out);
var state_60917__$1 = (function (){var statearr_60935 = state_60917;
(statearr_60935[(13)] = inst_60910);

return statearr_60935;
})();
var statearr_60936_60957 = state_60917__$1;
(statearr_60936_60957[(2)] = inst_60911);

(statearr_60936_60957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (10))){
var inst_60901 = (state_60917[(2)]);
var state_60917__$1 = state_60917;
var statearr_60937_60958 = state_60917__$1;
(statearr_60937_60958[(2)] = inst_60901);

(statearr_60937_60958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60918 === (8))){
var inst_60890 = (state_60917[(11)]);
var inst_60881 = (state_60917[(8)]);
var tmp60934 = inst_60881;
var inst_60881__$1 = tmp60934;
var inst_60882 = inst_60890;
var state_60917__$1 = (function (){var statearr_60938 = state_60917;
(statearr_60938[(7)] = inst_60882);

(statearr_60938[(8)] = inst_60881__$1);

return statearr_60938;
})();
var statearr_60939_60959 = state_60917__$1;
(statearr_60939_60959[(2)] = null);

(statearr_60939_60959[(1)] = (2));


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
});})(c__27974__auto___60945,out))
;
return ((function (switch__27884__auto__,c__27974__auto___60945,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_60940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60940[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_60940[(1)] = (1));

return statearr_60940;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_60917){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_60917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e60941){if((e60941 instanceof Object)){
var ex__27888__auto__ = e60941;
var statearr_60942_60960 = state_60917;
(statearr_60942_60960[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60961 = state_60917;
state_60917 = G__60961;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_60917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_60917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___60945,out))
})();
var state__27976__auto__ = (function (){var statearr_60943 = f__27975__auto__.call(null);
(statearr_60943[(6)] = c__27974__auto___60945);

return statearr_60943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___60945,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60963 = arguments.length;
switch (G__60963) {
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
var c__27974__auto___61033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___61033,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___61033,out){
return (function (state_61005){
var state_val_61006 = (state_61005[(1)]);
if((state_val_61006 === (7))){
var inst_61001 = (state_61005[(2)]);
var state_61005__$1 = state_61005;
var statearr_61007_61034 = state_61005__$1;
(statearr_61007_61034[(2)] = inst_61001);

(statearr_61007_61034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (1))){
var inst_60964 = [];
var inst_60965 = inst_60964;
var inst_60966 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_61005__$1 = (function (){var statearr_61008 = state_61005;
(statearr_61008[(7)] = inst_60965);

(statearr_61008[(8)] = inst_60966);

return statearr_61008;
})();
var statearr_61009_61035 = state_61005__$1;
(statearr_61009_61035[(2)] = null);

(statearr_61009_61035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (4))){
var inst_60969 = (state_61005[(9)]);
var inst_60969__$1 = (state_61005[(2)]);
var inst_60970 = (inst_60969__$1 == null);
var inst_60971 = cljs.core.not.call(null,inst_60970);
var state_61005__$1 = (function (){var statearr_61010 = state_61005;
(statearr_61010[(9)] = inst_60969__$1);

return statearr_61010;
})();
if(inst_60971){
var statearr_61011_61036 = state_61005__$1;
(statearr_61011_61036[(1)] = (5));

} else {
var statearr_61012_61037 = state_61005__$1;
(statearr_61012_61037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (15))){
var inst_60995 = (state_61005[(2)]);
var state_61005__$1 = state_61005;
var statearr_61013_61038 = state_61005__$1;
(statearr_61013_61038[(2)] = inst_60995);

(statearr_61013_61038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (13))){
var state_61005__$1 = state_61005;
var statearr_61014_61039 = state_61005__$1;
(statearr_61014_61039[(2)] = null);

(statearr_61014_61039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (6))){
var inst_60965 = (state_61005[(7)]);
var inst_60990 = inst_60965.length;
var inst_60991 = (inst_60990 > (0));
var state_61005__$1 = state_61005;
if(cljs.core.truth_(inst_60991)){
var statearr_61015_61040 = state_61005__$1;
(statearr_61015_61040[(1)] = (12));

} else {
var statearr_61016_61041 = state_61005__$1;
(statearr_61016_61041[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (3))){
var inst_61003 = (state_61005[(2)]);
var state_61005__$1 = state_61005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61005__$1,inst_61003);
} else {
if((state_val_61006 === (12))){
var inst_60965 = (state_61005[(7)]);
var inst_60993 = cljs.core.vec.call(null,inst_60965);
var state_61005__$1 = state_61005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61005__$1,(15),out,inst_60993);
} else {
if((state_val_61006 === (2))){
var state_61005__$1 = state_61005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61005__$1,(4),ch);
} else {
if((state_val_61006 === (11))){
var inst_60973 = (state_61005[(10)]);
var inst_60969 = (state_61005[(9)]);
var inst_60983 = (state_61005[(2)]);
var inst_60984 = [];
var inst_60985 = inst_60984.push(inst_60969);
var inst_60965 = inst_60984;
var inst_60966 = inst_60973;
var state_61005__$1 = (function (){var statearr_61017 = state_61005;
(statearr_61017[(11)] = inst_60983);

(statearr_61017[(12)] = inst_60985);

(statearr_61017[(7)] = inst_60965);

(statearr_61017[(8)] = inst_60966);

return statearr_61017;
})();
var statearr_61018_61042 = state_61005__$1;
(statearr_61018_61042[(2)] = null);

(statearr_61018_61042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (9))){
var inst_60965 = (state_61005[(7)]);
var inst_60981 = cljs.core.vec.call(null,inst_60965);
var state_61005__$1 = state_61005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61005__$1,(11),out,inst_60981);
} else {
if((state_val_61006 === (5))){
var inst_60973 = (state_61005[(10)]);
var inst_60969 = (state_61005[(9)]);
var inst_60966 = (state_61005[(8)]);
var inst_60973__$1 = f.call(null,inst_60969);
var inst_60974 = cljs.core._EQ_.call(null,inst_60973__$1,inst_60966);
var inst_60975 = cljs.core.keyword_identical_QMARK_.call(null,inst_60966,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60976 = ((inst_60974) || (inst_60975));
var state_61005__$1 = (function (){var statearr_61019 = state_61005;
(statearr_61019[(10)] = inst_60973__$1);

return statearr_61019;
})();
if(cljs.core.truth_(inst_60976)){
var statearr_61020_61043 = state_61005__$1;
(statearr_61020_61043[(1)] = (8));

} else {
var statearr_61021_61044 = state_61005__$1;
(statearr_61021_61044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (14))){
var inst_60998 = (state_61005[(2)]);
var inst_60999 = cljs.core.async.close_BANG_.call(null,out);
var state_61005__$1 = (function (){var statearr_61023 = state_61005;
(statearr_61023[(13)] = inst_60998);

return statearr_61023;
})();
var statearr_61024_61045 = state_61005__$1;
(statearr_61024_61045[(2)] = inst_60999);

(statearr_61024_61045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (10))){
var inst_60988 = (state_61005[(2)]);
var state_61005__$1 = state_61005;
var statearr_61025_61046 = state_61005__$1;
(statearr_61025_61046[(2)] = inst_60988);

(statearr_61025_61046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61006 === (8))){
var inst_60973 = (state_61005[(10)]);
var inst_60969 = (state_61005[(9)]);
var inst_60965 = (state_61005[(7)]);
var inst_60978 = inst_60965.push(inst_60969);
var tmp61022 = inst_60965;
var inst_60965__$1 = tmp61022;
var inst_60966 = inst_60973;
var state_61005__$1 = (function (){var statearr_61026 = state_61005;
(statearr_61026[(14)] = inst_60978);

(statearr_61026[(7)] = inst_60965__$1);

(statearr_61026[(8)] = inst_60966);

return statearr_61026;
})();
var statearr_61027_61047 = state_61005__$1;
(statearr_61027_61047[(2)] = null);

(statearr_61027_61047[(1)] = (2));


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
});})(c__27974__auto___61033,out))
;
return ((function (switch__27884__auto__,c__27974__auto___61033,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_61028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61028[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_61028[(1)] = (1));

return statearr_61028;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_61005){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_61005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e61029){if((e61029 instanceof Object)){
var ex__27888__auto__ = e61029;
var statearr_61030_61048 = state_61005;
(statearr_61030_61048[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61049 = state_61005;
state_61005 = G__61049;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_61005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_61005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___61033,out))
})();
var state__27976__auto__ = (function (){var statearr_61031 = f__27975__auto__.call(null);
(statearr_61031[(6)] = c__27974__auto___61033);

return statearr_61031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___61033,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525389498062

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
var G__26958 = arguments.length;
switch (G__26958) {
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
if(typeof cljs.core.async.t_cljs$core$async26959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26959 = (function (f,blockable,meta26960){
this.f = f;
this.blockable = blockable;
this.meta26960 = meta26960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26961,meta26960__$1){
var self__ = this;
var _26961__$1 = this;
return (new cljs.core.async.t_cljs$core$async26959(self__.f,self__.blockable,meta26960__$1));
});

cljs.core.async.t_cljs$core$async26959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26961){
var self__ = this;
var _26961__$1 = this;
return self__.meta26960;
});

cljs.core.async.t_cljs$core$async26959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26960","meta26960",33367722,null)], null);
});

cljs.core.async.t_cljs$core$async26959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26959";

cljs.core.async.t_cljs$core$async26959.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26959");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26959.
 */
cljs.core.async.__GT_t_cljs$core$async26959 = (function cljs$core$async$__GT_t_cljs$core$async26959(f__$1,blockable__$1,meta26960){
return (new cljs.core.async.t_cljs$core$async26959(f__$1,blockable__$1,meta26960));
});

}

return (new cljs.core.async.t_cljs$core$async26959(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26965 = arguments.length;
switch (G__26965) {
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
var G__26968 = arguments.length;
switch (G__26968) {
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
var G__26971 = arguments.length;
switch (G__26971) {
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
var val_26973 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26973);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26973,ret){
return (function (){
return fn1.call(null,val_26973);
});})(val_26973,ret))
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
var G__26975 = arguments.length;
switch (G__26975) {
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
var n__4376__auto___26977 = n;
var x_26978 = (0);
while(true){
if((x_26978 < n__4376__auto___26977)){
(a[x_26978] = (0));

var G__26979 = (x_26978 + (1));
x_26978 = G__26979;
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

var G__26980 = (i + (1));
i = G__26980;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26981 = (function (flag,meta26982){
this.flag = flag;
this.meta26982 = meta26982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26983,meta26982__$1){
var self__ = this;
var _26983__$1 = this;
return (new cljs.core.async.t_cljs$core$async26981(self__.flag,meta26982__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26983){
var self__ = this;
var _26983__$1 = this;
return self__.meta26982;
});})(flag))
;

cljs.core.async.t_cljs$core$async26981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26981.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26982","meta26982",-1188225042,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26981";

cljs.core.async.t_cljs$core$async26981.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26981");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26981.
 */
cljs.core.async.__GT_t_cljs$core$async26981 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26981(flag__$1,meta26982){
return (new cljs.core.async.t_cljs$core$async26981(flag__$1,meta26982));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26981(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26984 = (function (flag,cb,meta26985){
this.flag = flag;
this.cb = cb;
this.meta26985 = meta26985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26986,meta26985__$1){
var self__ = this;
var _26986__$1 = this;
return (new cljs.core.async.t_cljs$core$async26984(self__.flag,self__.cb,meta26985__$1));
});

cljs.core.async.t_cljs$core$async26984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26986){
var self__ = this;
var _26986__$1 = this;
return self__.meta26985;
});

cljs.core.async.t_cljs$core$async26984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26985","meta26985",1802398802,null)], null);
});

cljs.core.async.t_cljs$core$async26984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26984";

cljs.core.async.t_cljs$core$async26984.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26984");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26984.
 */
cljs.core.async.__GT_t_cljs$core$async26984 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26984(flag__$1,cb__$1,meta26985){
return (new cljs.core.async.t_cljs$core$async26984(flag__$1,cb__$1,meta26985));
});

}

return (new cljs.core.async.t_cljs$core$async26984(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26987_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26987_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26988_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26988_SHARP_,port], null));
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
var G__26989 = (i + (1));
i = G__26989;
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
var len__4499__auto___26995 = arguments.length;
var i__4500__auto___26996 = (0);
while(true){
if((i__4500__auto___26996 < len__4499__auto___26995)){
args__4502__auto__.push((arguments[i__4500__auto___26996]));

var G__26997 = (i__4500__auto___26996 + (1));
i__4500__auto___26996 = G__26997;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26992){
var map__26993 = p__26992;
var map__26993__$1 = ((((!((map__26993 == null)))?(((((map__26993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26993):map__26993);
var opts = map__26993__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26990){
var G__26991 = cljs.core.first.call(null,seq26990);
var seq26990__$1 = cljs.core.next.call(null,seq26990);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26991,seq26990__$1);
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
var G__26999 = arguments.length;
switch (G__26999) {
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
var c__26898__auto___27045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___27045){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___27045){
return (function (state_27023){
var state_val_27024 = (state_27023[(1)]);
if((state_val_27024 === (7))){
var inst_27019 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27025_27046 = state_27023__$1;
(statearr_27025_27046[(2)] = inst_27019);

(statearr_27025_27046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (1))){
var state_27023__$1 = state_27023;
var statearr_27026_27047 = state_27023__$1;
(statearr_27026_27047[(2)] = null);

(statearr_27026_27047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (4))){
var inst_27002 = (state_27023[(7)]);
var inst_27002__$1 = (state_27023[(2)]);
var inst_27003 = (inst_27002__$1 == null);
var state_27023__$1 = (function (){var statearr_27027 = state_27023;
(statearr_27027[(7)] = inst_27002__$1);

return statearr_27027;
})();
if(cljs.core.truth_(inst_27003)){
var statearr_27028_27048 = state_27023__$1;
(statearr_27028_27048[(1)] = (5));

} else {
var statearr_27029_27049 = state_27023__$1;
(statearr_27029_27049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (13))){
var state_27023__$1 = state_27023;
var statearr_27030_27050 = state_27023__$1;
(statearr_27030_27050[(2)] = null);

(statearr_27030_27050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (6))){
var inst_27002 = (state_27023[(7)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27023__$1,(11),to,inst_27002);
} else {
if((state_val_27024 === (3))){
var inst_27021 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27023__$1,inst_27021);
} else {
if((state_val_27024 === (12))){
var state_27023__$1 = state_27023;
var statearr_27031_27051 = state_27023__$1;
(statearr_27031_27051[(2)] = null);

(statearr_27031_27051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (2))){
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(4),from);
} else {
if((state_val_27024 === (11))){
var inst_27012 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
if(cljs.core.truth_(inst_27012)){
var statearr_27032_27052 = state_27023__$1;
(statearr_27032_27052[(1)] = (12));

} else {
var statearr_27033_27053 = state_27023__$1;
(statearr_27033_27053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (9))){
var state_27023__$1 = state_27023;
var statearr_27034_27054 = state_27023__$1;
(statearr_27034_27054[(2)] = null);

(statearr_27034_27054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (5))){
var state_27023__$1 = state_27023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27035_27055 = state_27023__$1;
(statearr_27035_27055[(1)] = (8));

} else {
var statearr_27036_27056 = state_27023__$1;
(statearr_27036_27056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (14))){
var inst_27017 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27037_27057 = state_27023__$1;
(statearr_27037_27057[(2)] = inst_27017);

(statearr_27037_27057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (10))){
var inst_27009 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27038_27058 = state_27023__$1;
(statearr_27038_27058[(2)] = inst_27009);

(statearr_27038_27058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (8))){
var inst_27006 = cljs.core.async.close_BANG_.call(null,to);
var state_27023__$1 = state_27023;
var statearr_27039_27059 = state_27023__$1;
(statearr_27039_27059[(2)] = inst_27006);

(statearr_27039_27059[(1)] = (10));


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
});})(c__26898__auto___27045))
;
return ((function (switch__26808__auto__,c__26898__auto___27045){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_27040 = [null,null,null,null,null,null,null,null];
(statearr_27040[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_27040[(1)] = (1));

return statearr_27040;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_27023){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27041){if((e27041 instanceof Object)){
var ex__26812__auto__ = e27041;
var statearr_27042_27060 = state_27023;
(statearr_27042_27060[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27061 = state_27023;
state_27023 = G__27061;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___27045))
})();
var state__26900__auto__ = (function (){var statearr_27043 = f__26899__auto__.call(null);
(statearr_27043[(6)] = c__26898__auto___27045);

return statearr_27043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___27045))
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
return (function (p__27062){
var vec__27063 = p__27062;
var v = cljs.core.nth.call(null,vec__27063,(0),null);
var p = cljs.core.nth.call(null,vec__27063,(1),null);
var job = vec__27063;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26898__auto___27234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___27234,res,vec__27063,v,p,job,jobs,results){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___27234,res,vec__27063,v,p,job,jobs,results){
return (function (state_27070){
var state_val_27071 = (state_27070[(1)]);
if((state_val_27071 === (1))){
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27070__$1,(2),res,v);
} else {
if((state_val_27071 === (2))){
var inst_27067 = (state_27070[(2)]);
var inst_27068 = cljs.core.async.close_BANG_.call(null,res);
var state_27070__$1 = (function (){var statearr_27072 = state_27070;
(statearr_27072[(7)] = inst_27067);

return statearr_27072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27070__$1,inst_27068);
} else {
return null;
}
}
});})(c__26898__auto___27234,res,vec__27063,v,p,job,jobs,results))
;
return ((function (switch__26808__auto__,c__26898__auto___27234,res,vec__27063,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27073 = [null,null,null,null,null,null,null,null];
(statearr_27073[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27073[(1)] = (1));

return statearr_27073;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27070){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27074){if((e27074 instanceof Object)){
var ex__26812__auto__ = e27074;
var statearr_27075_27235 = state_27070;
(statearr_27075_27235[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27236 = state_27070;
state_27070 = G__27236;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___27234,res,vec__27063,v,p,job,jobs,results))
})();
var state__26900__auto__ = (function (){var statearr_27076 = f__26899__auto__.call(null);
(statearr_27076[(6)] = c__26898__auto___27234);

return statearr_27076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___27234,res,vec__27063,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27077){
var vec__27078 = p__27077;
var v = cljs.core.nth.call(null,vec__27078,(0),null);
var p = cljs.core.nth.call(null,vec__27078,(1),null);
var job = vec__27078;
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
var n__4376__auto___27237 = n;
var __27238 = (0);
while(true){
if((__27238 < n__4376__auto___27237)){
var G__27081_27239 = type;
var G__27081_27240__$1 = (((G__27081_27239 instanceof cljs.core.Keyword))?G__27081_27239.fqn:null);
switch (G__27081_27240__$1) {
case "compute":
var c__26898__auto___27242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27238,c__26898__auto___27242,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (__27238,c__26898__auto___27242,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async){
return (function (state_27094){
var state_val_27095 = (state_27094[(1)]);
if((state_val_27095 === (1))){
var state_27094__$1 = state_27094;
var statearr_27096_27243 = state_27094__$1;
(statearr_27096_27243[(2)] = null);

(statearr_27096_27243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (2))){
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27094__$1,(4),jobs);
} else {
if((state_val_27095 === (3))){
var inst_27092 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27094__$1,inst_27092);
} else {
if((state_val_27095 === (4))){
var inst_27084 = (state_27094[(2)]);
var inst_27085 = process.call(null,inst_27084);
var state_27094__$1 = state_27094;
if(cljs.core.truth_(inst_27085)){
var statearr_27097_27244 = state_27094__$1;
(statearr_27097_27244[(1)] = (5));

} else {
var statearr_27098_27245 = state_27094__$1;
(statearr_27098_27245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (5))){
var state_27094__$1 = state_27094;
var statearr_27099_27246 = state_27094__$1;
(statearr_27099_27246[(2)] = null);

(statearr_27099_27246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (6))){
var state_27094__$1 = state_27094;
var statearr_27100_27247 = state_27094__$1;
(statearr_27100_27247[(2)] = null);

(statearr_27100_27247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (7))){
var inst_27090 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27101_27248 = state_27094__$1;
(statearr_27101_27248[(2)] = inst_27090);

(statearr_27101_27248[(1)] = (3));


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
});})(__27238,c__26898__auto___27242,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async))
;
return ((function (__27238,switch__26808__auto__,c__26898__auto___27242,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27102 = [null,null,null,null,null,null,null];
(statearr_27102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27102[(1)] = (1));

return statearr_27102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27094){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27103){if((e27103 instanceof Object)){
var ex__26812__auto__ = e27103;
var statearr_27104_27249 = state_27094;
(statearr_27104_27249[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27250 = state_27094;
state_27094 = G__27250;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(__27238,switch__26808__auto__,c__26898__auto___27242,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async))
})();
var state__26900__auto__ = (function (){var statearr_27105 = f__26899__auto__.call(null);
(statearr_27105[(6)] = c__26898__auto___27242);

return statearr_27105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(__27238,c__26898__auto___27242,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async))
);


break;
case "async":
var c__26898__auto___27251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27238,c__26898__auto___27251,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (__27238,c__26898__auto___27251,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async){
return (function (state_27118){
var state_val_27119 = (state_27118[(1)]);
if((state_val_27119 === (1))){
var state_27118__$1 = state_27118;
var statearr_27120_27252 = state_27118__$1;
(statearr_27120_27252[(2)] = null);

(statearr_27120_27252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (2))){
var state_27118__$1 = state_27118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27118__$1,(4),jobs);
} else {
if((state_val_27119 === (3))){
var inst_27116 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27118__$1,inst_27116);
} else {
if((state_val_27119 === (4))){
var inst_27108 = (state_27118[(2)]);
var inst_27109 = async.call(null,inst_27108);
var state_27118__$1 = state_27118;
if(cljs.core.truth_(inst_27109)){
var statearr_27121_27253 = state_27118__$1;
(statearr_27121_27253[(1)] = (5));

} else {
var statearr_27122_27254 = state_27118__$1;
(statearr_27122_27254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (5))){
var state_27118__$1 = state_27118;
var statearr_27123_27255 = state_27118__$1;
(statearr_27123_27255[(2)] = null);

(statearr_27123_27255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (6))){
var state_27118__$1 = state_27118;
var statearr_27124_27256 = state_27118__$1;
(statearr_27124_27256[(2)] = null);

(statearr_27124_27256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (7))){
var inst_27114 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
var statearr_27125_27257 = state_27118__$1;
(statearr_27125_27257[(2)] = inst_27114);

(statearr_27125_27257[(1)] = (3));


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
});})(__27238,c__26898__auto___27251,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async))
;
return ((function (__27238,switch__26808__auto__,c__26898__auto___27251,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27126 = [null,null,null,null,null,null,null];
(statearr_27126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27126[(1)] = (1));

return statearr_27126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27118){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27127){if((e27127 instanceof Object)){
var ex__26812__auto__ = e27127;
var statearr_27128_27258 = state_27118;
(statearr_27128_27258[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27259 = state_27118;
state_27118 = G__27259;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(__27238,switch__26808__auto__,c__26898__auto___27251,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async))
})();
var state__26900__auto__ = (function (){var statearr_27129 = f__26899__auto__.call(null);
(statearr_27129[(6)] = c__26898__auto___27251);

return statearr_27129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(__27238,c__26898__auto___27251,G__27081_27239,G__27081_27240__$1,n__4376__auto___27237,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27081_27240__$1)].join('')));

}

var G__27260 = (__27238 + (1));
__27238 = G__27260;
continue;
} else {
}
break;
}

var c__26898__auto___27261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___27261,jobs,results,process,async){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___27261,jobs,results,process,async){
return (function (state_27151){
var state_val_27152 = (state_27151[(1)]);
if((state_val_27152 === (1))){
var state_27151__$1 = state_27151;
var statearr_27153_27262 = state_27151__$1;
(statearr_27153_27262[(2)] = null);

(statearr_27153_27262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27152 === (2))){
var state_27151__$1 = state_27151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27151__$1,(4),from);
} else {
if((state_val_27152 === (3))){
var inst_27149 = (state_27151[(2)]);
var state_27151__$1 = state_27151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27151__$1,inst_27149);
} else {
if((state_val_27152 === (4))){
var inst_27132 = (state_27151[(7)]);
var inst_27132__$1 = (state_27151[(2)]);
var inst_27133 = (inst_27132__$1 == null);
var state_27151__$1 = (function (){var statearr_27154 = state_27151;
(statearr_27154[(7)] = inst_27132__$1);

return statearr_27154;
})();
if(cljs.core.truth_(inst_27133)){
var statearr_27155_27263 = state_27151__$1;
(statearr_27155_27263[(1)] = (5));

} else {
var statearr_27156_27264 = state_27151__$1;
(statearr_27156_27264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27152 === (5))){
var inst_27135 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27151__$1 = state_27151;
var statearr_27157_27265 = state_27151__$1;
(statearr_27157_27265[(2)] = inst_27135);

(statearr_27157_27265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27152 === (6))){
var inst_27132 = (state_27151[(7)]);
var inst_27137 = (state_27151[(8)]);
var inst_27137__$1 = cljs.core.async.chan.call(null,(1));
var inst_27138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27139 = [inst_27132,inst_27137__$1];
var inst_27140 = (new cljs.core.PersistentVector(null,2,(5),inst_27138,inst_27139,null));
var state_27151__$1 = (function (){var statearr_27158 = state_27151;
(statearr_27158[(8)] = inst_27137__$1);

return statearr_27158;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27151__$1,(8),jobs,inst_27140);
} else {
if((state_val_27152 === (7))){
var inst_27147 = (state_27151[(2)]);
var state_27151__$1 = state_27151;
var statearr_27159_27266 = state_27151__$1;
(statearr_27159_27266[(2)] = inst_27147);

(statearr_27159_27266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27152 === (8))){
var inst_27137 = (state_27151[(8)]);
var inst_27142 = (state_27151[(2)]);
var state_27151__$1 = (function (){var statearr_27160 = state_27151;
(statearr_27160[(9)] = inst_27142);

return statearr_27160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27151__$1,(9),results,inst_27137);
} else {
if((state_val_27152 === (9))){
var inst_27144 = (state_27151[(2)]);
var state_27151__$1 = (function (){var statearr_27161 = state_27151;
(statearr_27161[(10)] = inst_27144);

return statearr_27161;
})();
var statearr_27162_27267 = state_27151__$1;
(statearr_27162_27267[(2)] = null);

(statearr_27162_27267[(1)] = (2));


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
});})(c__26898__auto___27261,jobs,results,process,async))
;
return ((function (switch__26808__auto__,c__26898__auto___27261,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27163[(1)] = (1));

return statearr_27163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27151){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27164){if((e27164 instanceof Object)){
var ex__26812__auto__ = e27164;
var statearr_27165_27268 = state_27151;
(statearr_27165_27268[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27269 = state_27151;
state_27151 = G__27269;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___27261,jobs,results,process,async))
})();
var state__26900__auto__ = (function (){var statearr_27166 = f__26899__auto__.call(null);
(statearr_27166[(6)] = c__26898__auto___27261);

return statearr_27166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___27261,jobs,results,process,async))
);


var c__26898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto__,jobs,results,process,async){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto__,jobs,results,process,async){
return (function (state_27204){
var state_val_27205 = (state_27204[(1)]);
if((state_val_27205 === (7))){
var inst_27200 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27206_27270 = state_27204__$1;
(statearr_27206_27270[(2)] = inst_27200);

(statearr_27206_27270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (20))){
var state_27204__$1 = state_27204;
var statearr_27207_27271 = state_27204__$1;
(statearr_27207_27271[(2)] = null);

(statearr_27207_27271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (1))){
var state_27204__$1 = state_27204;
var statearr_27208_27272 = state_27204__$1;
(statearr_27208_27272[(2)] = null);

(statearr_27208_27272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (4))){
var inst_27169 = (state_27204[(7)]);
var inst_27169__$1 = (state_27204[(2)]);
var inst_27170 = (inst_27169__$1 == null);
var state_27204__$1 = (function (){var statearr_27209 = state_27204;
(statearr_27209[(7)] = inst_27169__$1);

return statearr_27209;
})();
if(cljs.core.truth_(inst_27170)){
var statearr_27210_27273 = state_27204__$1;
(statearr_27210_27273[(1)] = (5));

} else {
var statearr_27211_27274 = state_27204__$1;
(statearr_27211_27274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (15))){
var inst_27182 = (state_27204[(8)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27204__$1,(18),to,inst_27182);
} else {
if((state_val_27205 === (21))){
var inst_27195 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27212_27275 = state_27204__$1;
(statearr_27212_27275[(2)] = inst_27195);

(statearr_27212_27275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (13))){
var inst_27197 = (state_27204[(2)]);
var state_27204__$1 = (function (){var statearr_27213 = state_27204;
(statearr_27213[(9)] = inst_27197);

return statearr_27213;
})();
var statearr_27214_27276 = state_27204__$1;
(statearr_27214_27276[(2)] = null);

(statearr_27214_27276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (6))){
var inst_27169 = (state_27204[(7)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(11),inst_27169);
} else {
if((state_val_27205 === (17))){
var inst_27190 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
if(cljs.core.truth_(inst_27190)){
var statearr_27215_27277 = state_27204__$1;
(statearr_27215_27277[(1)] = (19));

} else {
var statearr_27216_27278 = state_27204__$1;
(statearr_27216_27278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (3))){
var inst_27202 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27204__$1,inst_27202);
} else {
if((state_val_27205 === (12))){
var inst_27179 = (state_27204[(10)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(14),inst_27179);
} else {
if((state_val_27205 === (2))){
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(4),results);
} else {
if((state_val_27205 === (19))){
var state_27204__$1 = state_27204;
var statearr_27217_27279 = state_27204__$1;
(statearr_27217_27279[(2)] = null);

(statearr_27217_27279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (11))){
var inst_27179 = (state_27204[(2)]);
var state_27204__$1 = (function (){var statearr_27218 = state_27204;
(statearr_27218[(10)] = inst_27179);

return statearr_27218;
})();
var statearr_27219_27280 = state_27204__$1;
(statearr_27219_27280[(2)] = null);

(statearr_27219_27280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (9))){
var state_27204__$1 = state_27204;
var statearr_27220_27281 = state_27204__$1;
(statearr_27220_27281[(2)] = null);

(statearr_27220_27281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (5))){
var state_27204__$1 = state_27204;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27221_27282 = state_27204__$1;
(statearr_27221_27282[(1)] = (8));

} else {
var statearr_27222_27283 = state_27204__$1;
(statearr_27222_27283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (14))){
var inst_27182 = (state_27204[(8)]);
var inst_27184 = (state_27204[(11)]);
var inst_27182__$1 = (state_27204[(2)]);
var inst_27183 = (inst_27182__$1 == null);
var inst_27184__$1 = cljs.core.not.call(null,inst_27183);
var state_27204__$1 = (function (){var statearr_27223 = state_27204;
(statearr_27223[(8)] = inst_27182__$1);

(statearr_27223[(11)] = inst_27184__$1);

return statearr_27223;
})();
if(inst_27184__$1){
var statearr_27224_27284 = state_27204__$1;
(statearr_27224_27284[(1)] = (15));

} else {
var statearr_27225_27285 = state_27204__$1;
(statearr_27225_27285[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (16))){
var inst_27184 = (state_27204[(11)]);
var state_27204__$1 = state_27204;
var statearr_27226_27286 = state_27204__$1;
(statearr_27226_27286[(2)] = inst_27184);

(statearr_27226_27286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (10))){
var inst_27176 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27227_27287 = state_27204__$1;
(statearr_27227_27287[(2)] = inst_27176);

(statearr_27227_27287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (18))){
var inst_27187 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27228_27288 = state_27204__$1;
(statearr_27228_27288[(2)] = inst_27187);

(statearr_27228_27288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (8))){
var inst_27173 = cljs.core.async.close_BANG_.call(null,to);
var state_27204__$1 = state_27204;
var statearr_27229_27289 = state_27204__$1;
(statearr_27229_27289[(2)] = inst_27173);

(statearr_27229_27289[(1)] = (10));


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
});})(c__26898__auto__,jobs,results,process,async))
;
return ((function (switch__26808__auto__,c__26898__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27230[(1)] = (1));

return statearr_27230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27204){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27231){if((e27231 instanceof Object)){
var ex__26812__auto__ = e27231;
var statearr_27232_27290 = state_27204;
(statearr_27232_27290[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27291 = state_27204;
state_27204 = G__27291;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto__,jobs,results,process,async))
})();
var state__26900__auto__ = (function (){var statearr_27233 = f__26899__auto__.call(null);
(statearr_27233[(6)] = c__26898__auto__);

return statearr_27233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto__,jobs,results,process,async))
);

return c__26898__auto__;
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
var G__27293 = arguments.length;
switch (G__27293) {
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
var G__27296 = arguments.length;
switch (G__27296) {
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
var G__27299 = arguments.length;
switch (G__27299) {
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
var c__26898__auto___27348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___27348,tc,fc){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___27348,tc,fc){
return (function (state_27325){
var state_val_27326 = (state_27325[(1)]);
if((state_val_27326 === (7))){
var inst_27321 = (state_27325[(2)]);
var state_27325__$1 = state_27325;
var statearr_27327_27349 = state_27325__$1;
(statearr_27327_27349[(2)] = inst_27321);

(statearr_27327_27349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (1))){
var state_27325__$1 = state_27325;
var statearr_27328_27350 = state_27325__$1;
(statearr_27328_27350[(2)] = null);

(statearr_27328_27350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (4))){
var inst_27302 = (state_27325[(7)]);
var inst_27302__$1 = (state_27325[(2)]);
var inst_27303 = (inst_27302__$1 == null);
var state_27325__$1 = (function (){var statearr_27329 = state_27325;
(statearr_27329[(7)] = inst_27302__$1);

return statearr_27329;
})();
if(cljs.core.truth_(inst_27303)){
var statearr_27330_27351 = state_27325__$1;
(statearr_27330_27351[(1)] = (5));

} else {
var statearr_27331_27352 = state_27325__$1;
(statearr_27331_27352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (13))){
var state_27325__$1 = state_27325;
var statearr_27332_27353 = state_27325__$1;
(statearr_27332_27353[(2)] = null);

(statearr_27332_27353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (6))){
var inst_27302 = (state_27325[(7)]);
var inst_27308 = p.call(null,inst_27302);
var state_27325__$1 = state_27325;
if(cljs.core.truth_(inst_27308)){
var statearr_27333_27354 = state_27325__$1;
(statearr_27333_27354[(1)] = (9));

} else {
var statearr_27334_27355 = state_27325__$1;
(statearr_27334_27355[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (3))){
var inst_27323 = (state_27325[(2)]);
var state_27325__$1 = state_27325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27325__$1,inst_27323);
} else {
if((state_val_27326 === (12))){
var state_27325__$1 = state_27325;
var statearr_27335_27356 = state_27325__$1;
(statearr_27335_27356[(2)] = null);

(statearr_27335_27356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (2))){
var state_27325__$1 = state_27325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27325__$1,(4),ch);
} else {
if((state_val_27326 === (11))){
var inst_27302 = (state_27325[(7)]);
var inst_27312 = (state_27325[(2)]);
var state_27325__$1 = state_27325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27325__$1,(8),inst_27312,inst_27302);
} else {
if((state_val_27326 === (9))){
var state_27325__$1 = state_27325;
var statearr_27336_27357 = state_27325__$1;
(statearr_27336_27357[(2)] = tc);

(statearr_27336_27357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (5))){
var inst_27305 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27306 = cljs.core.async.close_BANG_.call(null,fc);
var state_27325__$1 = (function (){var statearr_27337 = state_27325;
(statearr_27337[(8)] = inst_27305);

return statearr_27337;
})();
var statearr_27338_27358 = state_27325__$1;
(statearr_27338_27358[(2)] = inst_27306);

(statearr_27338_27358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (14))){
var inst_27319 = (state_27325[(2)]);
var state_27325__$1 = state_27325;
var statearr_27339_27359 = state_27325__$1;
(statearr_27339_27359[(2)] = inst_27319);

(statearr_27339_27359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (10))){
var state_27325__$1 = state_27325;
var statearr_27340_27360 = state_27325__$1;
(statearr_27340_27360[(2)] = fc);

(statearr_27340_27360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (8))){
var inst_27314 = (state_27325[(2)]);
var state_27325__$1 = state_27325;
if(cljs.core.truth_(inst_27314)){
var statearr_27341_27361 = state_27325__$1;
(statearr_27341_27361[(1)] = (12));

} else {
var statearr_27342_27362 = state_27325__$1;
(statearr_27342_27362[(1)] = (13));

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
});})(c__26898__auto___27348,tc,fc))
;
return ((function (switch__26808__auto__,c__26898__auto___27348,tc,fc){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_27343 = [null,null,null,null,null,null,null,null,null];
(statearr_27343[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_27343[(1)] = (1));

return statearr_27343;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_27325){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27344){if((e27344 instanceof Object)){
var ex__26812__auto__ = e27344;
var statearr_27345_27363 = state_27325;
(statearr_27345_27363[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27364 = state_27325;
state_27325 = G__27364;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_27325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_27325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___27348,tc,fc))
})();
var state__26900__auto__ = (function (){var statearr_27346 = f__26899__auto__.call(null);
(statearr_27346[(6)] = c__26898__auto___27348);

return statearr_27346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___27348,tc,fc))
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
var c__26898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto__){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto__){
return (function (state_27385){
var state_val_27386 = (state_27385[(1)]);
if((state_val_27386 === (7))){
var inst_27381 = (state_27385[(2)]);
var state_27385__$1 = state_27385;
var statearr_27387_27405 = state_27385__$1;
(statearr_27387_27405[(2)] = inst_27381);

(statearr_27387_27405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (1))){
var inst_27365 = init;
var state_27385__$1 = (function (){var statearr_27388 = state_27385;
(statearr_27388[(7)] = inst_27365);

return statearr_27388;
})();
var statearr_27389_27406 = state_27385__$1;
(statearr_27389_27406[(2)] = null);

(statearr_27389_27406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (4))){
var inst_27368 = (state_27385[(8)]);
var inst_27368__$1 = (state_27385[(2)]);
var inst_27369 = (inst_27368__$1 == null);
var state_27385__$1 = (function (){var statearr_27390 = state_27385;
(statearr_27390[(8)] = inst_27368__$1);

return statearr_27390;
})();
if(cljs.core.truth_(inst_27369)){
var statearr_27391_27407 = state_27385__$1;
(statearr_27391_27407[(1)] = (5));

} else {
var statearr_27392_27408 = state_27385__$1;
(statearr_27392_27408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (6))){
var inst_27365 = (state_27385[(7)]);
var inst_27368 = (state_27385[(8)]);
var inst_27372 = (state_27385[(9)]);
var inst_27372__$1 = f.call(null,inst_27365,inst_27368);
var inst_27373 = cljs.core.reduced_QMARK_.call(null,inst_27372__$1);
var state_27385__$1 = (function (){var statearr_27393 = state_27385;
(statearr_27393[(9)] = inst_27372__$1);

return statearr_27393;
})();
if(inst_27373){
var statearr_27394_27409 = state_27385__$1;
(statearr_27394_27409[(1)] = (8));

} else {
var statearr_27395_27410 = state_27385__$1;
(statearr_27395_27410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (3))){
var inst_27383 = (state_27385[(2)]);
var state_27385__$1 = state_27385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27385__$1,inst_27383);
} else {
if((state_val_27386 === (2))){
var state_27385__$1 = state_27385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27385__$1,(4),ch);
} else {
if((state_val_27386 === (9))){
var inst_27372 = (state_27385[(9)]);
var inst_27365 = inst_27372;
var state_27385__$1 = (function (){var statearr_27396 = state_27385;
(statearr_27396[(7)] = inst_27365);

return statearr_27396;
})();
var statearr_27397_27411 = state_27385__$1;
(statearr_27397_27411[(2)] = null);

(statearr_27397_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (5))){
var inst_27365 = (state_27385[(7)]);
var state_27385__$1 = state_27385;
var statearr_27398_27412 = state_27385__$1;
(statearr_27398_27412[(2)] = inst_27365);

(statearr_27398_27412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (10))){
var inst_27379 = (state_27385[(2)]);
var state_27385__$1 = state_27385;
var statearr_27399_27413 = state_27385__$1;
(statearr_27399_27413[(2)] = inst_27379);

(statearr_27399_27413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (8))){
var inst_27372 = (state_27385[(9)]);
var inst_27375 = cljs.core.deref.call(null,inst_27372);
var state_27385__$1 = state_27385;
var statearr_27400_27414 = state_27385__$1;
(statearr_27400_27414[(2)] = inst_27375);

(statearr_27400_27414[(1)] = (10));


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
});})(c__26898__auto__))
;
return ((function (switch__26808__auto__,c__26898__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26809__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26809__auto____0 = (function (){
var statearr_27401 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27401[(0)] = cljs$core$async$reduce_$_state_machine__26809__auto__);

(statearr_27401[(1)] = (1));

return statearr_27401;
});
var cljs$core$async$reduce_$_state_machine__26809__auto____1 = (function (state_27385){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27402){if((e27402 instanceof Object)){
var ex__26812__auto__ = e27402;
var statearr_27403_27415 = state_27385;
(statearr_27403_27415[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27416 = state_27385;
state_27385 = G__27416;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26809__auto__ = function(state_27385){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26809__auto____1.call(this,state_27385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26809__auto____0;
cljs$core$async$reduce_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26809__auto____1;
return cljs$core$async$reduce_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto__))
})();
var state__26900__auto__ = (function (){var statearr_27404 = f__26899__auto__.call(null);
(statearr_27404[(6)] = c__26898__auto__);

return statearr_27404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto__))
);

return c__26898__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto__,f__$1){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto__,f__$1){
return (function (state_27422){
var state_val_27423 = (state_27422[(1)]);
if((state_val_27423 === (1))){
var inst_27417 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27422__$1 = state_27422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27422__$1,(2),inst_27417);
} else {
if((state_val_27423 === (2))){
var inst_27419 = (state_27422[(2)]);
var inst_27420 = f__$1.call(null,inst_27419);
var state_27422__$1 = state_27422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27422__$1,inst_27420);
} else {
return null;
}
}
});})(c__26898__auto__,f__$1))
;
return ((function (switch__26808__auto__,c__26898__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26809__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26809__auto____0 = (function (){
var statearr_27424 = [null,null,null,null,null,null,null];
(statearr_27424[(0)] = cljs$core$async$transduce_$_state_machine__26809__auto__);

(statearr_27424[(1)] = (1));

return statearr_27424;
});
var cljs$core$async$transduce_$_state_machine__26809__auto____1 = (function (state_27422){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27425){if((e27425 instanceof Object)){
var ex__26812__auto__ = e27425;
var statearr_27426_27428 = state_27422;
(statearr_27426_27428[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27429 = state_27422;
state_27422 = G__27429;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26809__auto__ = function(state_27422){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26809__auto____1.call(this,state_27422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26809__auto____0;
cljs$core$async$transduce_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26809__auto____1;
return cljs$core$async$transduce_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto__,f__$1))
})();
var state__26900__auto__ = (function (){var statearr_27427 = f__26899__auto__.call(null);
(statearr_27427[(6)] = c__26898__auto__);

return statearr_27427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto__,f__$1))
);

return c__26898__auto__;
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
var G__27431 = arguments.length;
switch (G__27431) {
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
var c__26898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto__){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto__){
return (function (state_27456){
var state_val_27457 = (state_27456[(1)]);
if((state_val_27457 === (7))){
var inst_27438 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27458_27479 = state_27456__$1;
(statearr_27458_27479[(2)] = inst_27438);

(statearr_27458_27479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (1))){
var inst_27432 = cljs.core.seq.call(null,coll);
var inst_27433 = inst_27432;
var state_27456__$1 = (function (){var statearr_27459 = state_27456;
(statearr_27459[(7)] = inst_27433);

return statearr_27459;
})();
var statearr_27460_27480 = state_27456__$1;
(statearr_27460_27480[(2)] = null);

(statearr_27460_27480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (4))){
var inst_27433 = (state_27456[(7)]);
var inst_27436 = cljs.core.first.call(null,inst_27433);
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27456__$1,(7),ch,inst_27436);
} else {
if((state_val_27457 === (13))){
var inst_27450 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27461_27481 = state_27456__$1;
(statearr_27461_27481[(2)] = inst_27450);

(statearr_27461_27481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (6))){
var inst_27441 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
if(cljs.core.truth_(inst_27441)){
var statearr_27462_27482 = state_27456__$1;
(statearr_27462_27482[(1)] = (8));

} else {
var statearr_27463_27483 = state_27456__$1;
(statearr_27463_27483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (3))){
var inst_27454 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27456__$1,inst_27454);
} else {
if((state_val_27457 === (12))){
var state_27456__$1 = state_27456;
var statearr_27464_27484 = state_27456__$1;
(statearr_27464_27484[(2)] = null);

(statearr_27464_27484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (2))){
var inst_27433 = (state_27456[(7)]);
var state_27456__$1 = state_27456;
if(cljs.core.truth_(inst_27433)){
var statearr_27465_27485 = state_27456__$1;
(statearr_27465_27485[(1)] = (4));

} else {
var statearr_27466_27486 = state_27456__$1;
(statearr_27466_27486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (11))){
var inst_27447 = cljs.core.async.close_BANG_.call(null,ch);
var state_27456__$1 = state_27456;
var statearr_27467_27487 = state_27456__$1;
(statearr_27467_27487[(2)] = inst_27447);

(statearr_27467_27487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (9))){
var state_27456__$1 = state_27456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27468_27488 = state_27456__$1;
(statearr_27468_27488[(1)] = (11));

} else {
var statearr_27469_27489 = state_27456__$1;
(statearr_27469_27489[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (5))){
var inst_27433 = (state_27456[(7)]);
var state_27456__$1 = state_27456;
var statearr_27470_27490 = state_27456__$1;
(statearr_27470_27490[(2)] = inst_27433);

(statearr_27470_27490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (10))){
var inst_27452 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27471_27491 = state_27456__$1;
(statearr_27471_27491[(2)] = inst_27452);

(statearr_27471_27491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (8))){
var inst_27433 = (state_27456[(7)]);
var inst_27443 = cljs.core.next.call(null,inst_27433);
var inst_27433__$1 = inst_27443;
var state_27456__$1 = (function (){var statearr_27472 = state_27456;
(statearr_27472[(7)] = inst_27433__$1);

return statearr_27472;
})();
var statearr_27473_27492 = state_27456__$1;
(statearr_27473_27492[(2)] = null);

(statearr_27473_27492[(1)] = (2));


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
});})(c__26898__auto__))
;
return ((function (switch__26808__auto__,c__26898__auto__){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_27474 = [null,null,null,null,null,null,null,null];
(statearr_27474[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_27474[(1)] = (1));

return statearr_27474;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_27456){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27475){if((e27475 instanceof Object)){
var ex__26812__auto__ = e27475;
var statearr_27476_27493 = state_27456;
(statearr_27476_27493[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27494 = state_27456;
state_27456 = G__27494;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_27456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_27456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto__))
})();
var state__26900__auto__ = (function (){var statearr_27477 = f__26899__auto__.call(null);
(statearr_27477[(6)] = c__26898__auto__);

return statearr_27477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto__))
);

return c__26898__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async27495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27495 = (function (ch,cs,meta27496){
this.ch = ch;
this.cs = cs;
this.meta27496 = meta27496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27497,meta27496__$1){
var self__ = this;
var _27497__$1 = this;
return (new cljs.core.async.t_cljs$core$async27495(self__.ch,self__.cs,meta27496__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27497){
var self__ = this;
var _27497__$1 = this;
return self__.meta27496;
});})(cs))
;

cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27495.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27496","meta27496",86593300,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27495";

cljs.core.async.t_cljs$core$async27495.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27495");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27495.
 */
cljs.core.async.__GT_t_cljs$core$async27495 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27495(ch__$1,cs__$1,meta27496){
return (new cljs.core.async.t_cljs$core$async27495(ch__$1,cs__$1,meta27496));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27495(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26898__auto___27717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___27717,cs,m,dchan,dctr,done){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___27717,cs,m,dchan,dctr,done){
return (function (state_27632){
var state_val_27633 = (state_27632[(1)]);
if((state_val_27633 === (7))){
var inst_27628 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27634_27718 = state_27632__$1;
(statearr_27634_27718[(2)] = inst_27628);

(statearr_27634_27718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (20))){
var inst_27531 = (state_27632[(7)]);
var inst_27543 = cljs.core.first.call(null,inst_27531);
var inst_27544 = cljs.core.nth.call(null,inst_27543,(0),null);
var inst_27545 = cljs.core.nth.call(null,inst_27543,(1),null);
var state_27632__$1 = (function (){var statearr_27635 = state_27632;
(statearr_27635[(8)] = inst_27544);

return statearr_27635;
})();
if(cljs.core.truth_(inst_27545)){
var statearr_27636_27719 = state_27632__$1;
(statearr_27636_27719[(1)] = (22));

} else {
var statearr_27637_27720 = state_27632__$1;
(statearr_27637_27720[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (27))){
var inst_27500 = (state_27632[(9)]);
var inst_27580 = (state_27632[(10)]);
var inst_27573 = (state_27632[(11)]);
var inst_27575 = (state_27632[(12)]);
var inst_27580__$1 = cljs.core._nth.call(null,inst_27573,inst_27575);
var inst_27581 = cljs.core.async.put_BANG_.call(null,inst_27580__$1,inst_27500,done);
var state_27632__$1 = (function (){var statearr_27638 = state_27632;
(statearr_27638[(10)] = inst_27580__$1);

return statearr_27638;
})();
if(cljs.core.truth_(inst_27581)){
var statearr_27639_27721 = state_27632__$1;
(statearr_27639_27721[(1)] = (30));

} else {
var statearr_27640_27722 = state_27632__$1;
(statearr_27640_27722[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (1))){
var state_27632__$1 = state_27632;
var statearr_27641_27723 = state_27632__$1;
(statearr_27641_27723[(2)] = null);

(statearr_27641_27723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (24))){
var inst_27531 = (state_27632[(7)]);
var inst_27550 = (state_27632[(2)]);
var inst_27551 = cljs.core.next.call(null,inst_27531);
var inst_27509 = inst_27551;
var inst_27510 = null;
var inst_27511 = (0);
var inst_27512 = (0);
var state_27632__$1 = (function (){var statearr_27642 = state_27632;
(statearr_27642[(13)] = inst_27512);

(statearr_27642[(14)] = inst_27510);

(statearr_27642[(15)] = inst_27511);

(statearr_27642[(16)] = inst_27550);

(statearr_27642[(17)] = inst_27509);

return statearr_27642;
})();
var statearr_27643_27724 = state_27632__$1;
(statearr_27643_27724[(2)] = null);

(statearr_27643_27724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (39))){
var state_27632__$1 = state_27632;
var statearr_27647_27725 = state_27632__$1;
(statearr_27647_27725[(2)] = null);

(statearr_27647_27725[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (4))){
var inst_27500 = (state_27632[(9)]);
var inst_27500__$1 = (state_27632[(2)]);
var inst_27501 = (inst_27500__$1 == null);
var state_27632__$1 = (function (){var statearr_27648 = state_27632;
(statearr_27648[(9)] = inst_27500__$1);

return statearr_27648;
})();
if(cljs.core.truth_(inst_27501)){
var statearr_27649_27726 = state_27632__$1;
(statearr_27649_27726[(1)] = (5));

} else {
var statearr_27650_27727 = state_27632__$1;
(statearr_27650_27727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (15))){
var inst_27512 = (state_27632[(13)]);
var inst_27510 = (state_27632[(14)]);
var inst_27511 = (state_27632[(15)]);
var inst_27509 = (state_27632[(17)]);
var inst_27527 = (state_27632[(2)]);
var inst_27528 = (inst_27512 + (1));
var tmp27644 = inst_27510;
var tmp27645 = inst_27511;
var tmp27646 = inst_27509;
var inst_27509__$1 = tmp27646;
var inst_27510__$1 = tmp27644;
var inst_27511__$1 = tmp27645;
var inst_27512__$1 = inst_27528;
var state_27632__$1 = (function (){var statearr_27651 = state_27632;
(statearr_27651[(13)] = inst_27512__$1);

(statearr_27651[(18)] = inst_27527);

(statearr_27651[(14)] = inst_27510__$1);

(statearr_27651[(15)] = inst_27511__$1);

(statearr_27651[(17)] = inst_27509__$1);

return statearr_27651;
})();
var statearr_27652_27728 = state_27632__$1;
(statearr_27652_27728[(2)] = null);

(statearr_27652_27728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (21))){
var inst_27554 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27656_27729 = state_27632__$1;
(statearr_27656_27729[(2)] = inst_27554);

(statearr_27656_27729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (31))){
var inst_27580 = (state_27632[(10)]);
var inst_27584 = done.call(null,null);
var inst_27585 = cljs.core.async.untap_STAR_.call(null,m,inst_27580);
var state_27632__$1 = (function (){var statearr_27657 = state_27632;
(statearr_27657[(19)] = inst_27584);

return statearr_27657;
})();
var statearr_27658_27730 = state_27632__$1;
(statearr_27658_27730[(2)] = inst_27585);

(statearr_27658_27730[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (32))){
var inst_27572 = (state_27632[(20)]);
var inst_27574 = (state_27632[(21)]);
var inst_27573 = (state_27632[(11)]);
var inst_27575 = (state_27632[(12)]);
var inst_27587 = (state_27632[(2)]);
var inst_27588 = (inst_27575 + (1));
var tmp27653 = inst_27572;
var tmp27654 = inst_27574;
var tmp27655 = inst_27573;
var inst_27572__$1 = tmp27653;
var inst_27573__$1 = tmp27655;
var inst_27574__$1 = tmp27654;
var inst_27575__$1 = inst_27588;
var state_27632__$1 = (function (){var statearr_27659 = state_27632;
(statearr_27659[(22)] = inst_27587);

(statearr_27659[(20)] = inst_27572__$1);

(statearr_27659[(21)] = inst_27574__$1);

(statearr_27659[(11)] = inst_27573__$1);

(statearr_27659[(12)] = inst_27575__$1);

return statearr_27659;
})();
var statearr_27660_27731 = state_27632__$1;
(statearr_27660_27731[(2)] = null);

(statearr_27660_27731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (40))){
var inst_27600 = (state_27632[(23)]);
var inst_27604 = done.call(null,null);
var inst_27605 = cljs.core.async.untap_STAR_.call(null,m,inst_27600);
var state_27632__$1 = (function (){var statearr_27661 = state_27632;
(statearr_27661[(24)] = inst_27604);

return statearr_27661;
})();
var statearr_27662_27732 = state_27632__$1;
(statearr_27662_27732[(2)] = inst_27605);

(statearr_27662_27732[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (33))){
var inst_27591 = (state_27632[(25)]);
var inst_27593 = cljs.core.chunked_seq_QMARK_.call(null,inst_27591);
var state_27632__$1 = state_27632;
if(inst_27593){
var statearr_27663_27733 = state_27632__$1;
(statearr_27663_27733[(1)] = (36));

} else {
var statearr_27664_27734 = state_27632__$1;
(statearr_27664_27734[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (13))){
var inst_27521 = (state_27632[(26)]);
var inst_27524 = cljs.core.async.close_BANG_.call(null,inst_27521);
var state_27632__$1 = state_27632;
var statearr_27665_27735 = state_27632__$1;
(statearr_27665_27735[(2)] = inst_27524);

(statearr_27665_27735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (22))){
var inst_27544 = (state_27632[(8)]);
var inst_27547 = cljs.core.async.close_BANG_.call(null,inst_27544);
var state_27632__$1 = state_27632;
var statearr_27666_27736 = state_27632__$1;
(statearr_27666_27736[(2)] = inst_27547);

(statearr_27666_27736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (36))){
var inst_27591 = (state_27632[(25)]);
var inst_27595 = cljs.core.chunk_first.call(null,inst_27591);
var inst_27596 = cljs.core.chunk_rest.call(null,inst_27591);
var inst_27597 = cljs.core.count.call(null,inst_27595);
var inst_27572 = inst_27596;
var inst_27573 = inst_27595;
var inst_27574 = inst_27597;
var inst_27575 = (0);
var state_27632__$1 = (function (){var statearr_27667 = state_27632;
(statearr_27667[(20)] = inst_27572);

(statearr_27667[(21)] = inst_27574);

(statearr_27667[(11)] = inst_27573);

(statearr_27667[(12)] = inst_27575);

return statearr_27667;
})();
var statearr_27668_27737 = state_27632__$1;
(statearr_27668_27737[(2)] = null);

(statearr_27668_27737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (41))){
var inst_27591 = (state_27632[(25)]);
var inst_27607 = (state_27632[(2)]);
var inst_27608 = cljs.core.next.call(null,inst_27591);
var inst_27572 = inst_27608;
var inst_27573 = null;
var inst_27574 = (0);
var inst_27575 = (0);
var state_27632__$1 = (function (){var statearr_27669 = state_27632;
(statearr_27669[(27)] = inst_27607);

(statearr_27669[(20)] = inst_27572);

(statearr_27669[(21)] = inst_27574);

(statearr_27669[(11)] = inst_27573);

(statearr_27669[(12)] = inst_27575);

return statearr_27669;
})();
var statearr_27670_27738 = state_27632__$1;
(statearr_27670_27738[(2)] = null);

(statearr_27670_27738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (43))){
var state_27632__$1 = state_27632;
var statearr_27671_27739 = state_27632__$1;
(statearr_27671_27739[(2)] = null);

(statearr_27671_27739[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (29))){
var inst_27616 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27672_27740 = state_27632__$1;
(statearr_27672_27740[(2)] = inst_27616);

(statearr_27672_27740[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (44))){
var inst_27625 = (state_27632[(2)]);
var state_27632__$1 = (function (){var statearr_27673 = state_27632;
(statearr_27673[(28)] = inst_27625);

return statearr_27673;
})();
var statearr_27674_27741 = state_27632__$1;
(statearr_27674_27741[(2)] = null);

(statearr_27674_27741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (6))){
var inst_27564 = (state_27632[(29)]);
var inst_27563 = cljs.core.deref.call(null,cs);
var inst_27564__$1 = cljs.core.keys.call(null,inst_27563);
var inst_27565 = cljs.core.count.call(null,inst_27564__$1);
var inst_27566 = cljs.core.reset_BANG_.call(null,dctr,inst_27565);
var inst_27571 = cljs.core.seq.call(null,inst_27564__$1);
var inst_27572 = inst_27571;
var inst_27573 = null;
var inst_27574 = (0);
var inst_27575 = (0);
var state_27632__$1 = (function (){var statearr_27675 = state_27632;
(statearr_27675[(20)] = inst_27572);

(statearr_27675[(29)] = inst_27564__$1);

(statearr_27675[(21)] = inst_27574);

(statearr_27675[(30)] = inst_27566);

(statearr_27675[(11)] = inst_27573);

(statearr_27675[(12)] = inst_27575);

return statearr_27675;
})();
var statearr_27676_27742 = state_27632__$1;
(statearr_27676_27742[(2)] = null);

(statearr_27676_27742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (28))){
var inst_27572 = (state_27632[(20)]);
var inst_27591 = (state_27632[(25)]);
var inst_27591__$1 = cljs.core.seq.call(null,inst_27572);
var state_27632__$1 = (function (){var statearr_27677 = state_27632;
(statearr_27677[(25)] = inst_27591__$1);

return statearr_27677;
})();
if(inst_27591__$1){
var statearr_27678_27743 = state_27632__$1;
(statearr_27678_27743[(1)] = (33));

} else {
var statearr_27679_27744 = state_27632__$1;
(statearr_27679_27744[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (25))){
var inst_27574 = (state_27632[(21)]);
var inst_27575 = (state_27632[(12)]);
var inst_27577 = (inst_27575 < inst_27574);
var inst_27578 = inst_27577;
var state_27632__$1 = state_27632;
if(cljs.core.truth_(inst_27578)){
var statearr_27680_27745 = state_27632__$1;
(statearr_27680_27745[(1)] = (27));

} else {
var statearr_27681_27746 = state_27632__$1;
(statearr_27681_27746[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (34))){
var state_27632__$1 = state_27632;
var statearr_27682_27747 = state_27632__$1;
(statearr_27682_27747[(2)] = null);

(statearr_27682_27747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (17))){
var state_27632__$1 = state_27632;
var statearr_27683_27748 = state_27632__$1;
(statearr_27683_27748[(2)] = null);

(statearr_27683_27748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (3))){
var inst_27630 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27632__$1,inst_27630);
} else {
if((state_val_27633 === (12))){
var inst_27559 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27684_27749 = state_27632__$1;
(statearr_27684_27749[(2)] = inst_27559);

(statearr_27684_27749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (2))){
var state_27632__$1 = state_27632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27632__$1,(4),ch);
} else {
if((state_val_27633 === (23))){
var state_27632__$1 = state_27632;
var statearr_27685_27750 = state_27632__$1;
(statearr_27685_27750[(2)] = null);

(statearr_27685_27750[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (35))){
var inst_27614 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27686_27751 = state_27632__$1;
(statearr_27686_27751[(2)] = inst_27614);

(statearr_27686_27751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (19))){
var inst_27531 = (state_27632[(7)]);
var inst_27535 = cljs.core.chunk_first.call(null,inst_27531);
var inst_27536 = cljs.core.chunk_rest.call(null,inst_27531);
var inst_27537 = cljs.core.count.call(null,inst_27535);
var inst_27509 = inst_27536;
var inst_27510 = inst_27535;
var inst_27511 = inst_27537;
var inst_27512 = (0);
var state_27632__$1 = (function (){var statearr_27687 = state_27632;
(statearr_27687[(13)] = inst_27512);

(statearr_27687[(14)] = inst_27510);

(statearr_27687[(15)] = inst_27511);

(statearr_27687[(17)] = inst_27509);

return statearr_27687;
})();
var statearr_27688_27752 = state_27632__$1;
(statearr_27688_27752[(2)] = null);

(statearr_27688_27752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (11))){
var inst_27531 = (state_27632[(7)]);
var inst_27509 = (state_27632[(17)]);
var inst_27531__$1 = cljs.core.seq.call(null,inst_27509);
var state_27632__$1 = (function (){var statearr_27689 = state_27632;
(statearr_27689[(7)] = inst_27531__$1);

return statearr_27689;
})();
if(inst_27531__$1){
var statearr_27690_27753 = state_27632__$1;
(statearr_27690_27753[(1)] = (16));

} else {
var statearr_27691_27754 = state_27632__$1;
(statearr_27691_27754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (9))){
var inst_27561 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27692_27755 = state_27632__$1;
(statearr_27692_27755[(2)] = inst_27561);

(statearr_27692_27755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (5))){
var inst_27507 = cljs.core.deref.call(null,cs);
var inst_27508 = cljs.core.seq.call(null,inst_27507);
var inst_27509 = inst_27508;
var inst_27510 = null;
var inst_27511 = (0);
var inst_27512 = (0);
var state_27632__$1 = (function (){var statearr_27693 = state_27632;
(statearr_27693[(13)] = inst_27512);

(statearr_27693[(14)] = inst_27510);

(statearr_27693[(15)] = inst_27511);

(statearr_27693[(17)] = inst_27509);

return statearr_27693;
})();
var statearr_27694_27756 = state_27632__$1;
(statearr_27694_27756[(2)] = null);

(statearr_27694_27756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (14))){
var state_27632__$1 = state_27632;
var statearr_27695_27757 = state_27632__$1;
(statearr_27695_27757[(2)] = null);

(statearr_27695_27757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (45))){
var inst_27622 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27696_27758 = state_27632__$1;
(statearr_27696_27758[(2)] = inst_27622);

(statearr_27696_27758[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (26))){
var inst_27564 = (state_27632[(29)]);
var inst_27618 = (state_27632[(2)]);
var inst_27619 = cljs.core.seq.call(null,inst_27564);
var state_27632__$1 = (function (){var statearr_27697 = state_27632;
(statearr_27697[(31)] = inst_27618);

return statearr_27697;
})();
if(inst_27619){
var statearr_27698_27759 = state_27632__$1;
(statearr_27698_27759[(1)] = (42));

} else {
var statearr_27699_27760 = state_27632__$1;
(statearr_27699_27760[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (16))){
var inst_27531 = (state_27632[(7)]);
var inst_27533 = cljs.core.chunked_seq_QMARK_.call(null,inst_27531);
var state_27632__$1 = state_27632;
if(inst_27533){
var statearr_27700_27761 = state_27632__$1;
(statearr_27700_27761[(1)] = (19));

} else {
var statearr_27701_27762 = state_27632__$1;
(statearr_27701_27762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (38))){
var inst_27611 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27702_27763 = state_27632__$1;
(statearr_27702_27763[(2)] = inst_27611);

(statearr_27702_27763[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (30))){
var state_27632__$1 = state_27632;
var statearr_27703_27764 = state_27632__$1;
(statearr_27703_27764[(2)] = null);

(statearr_27703_27764[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (10))){
var inst_27512 = (state_27632[(13)]);
var inst_27510 = (state_27632[(14)]);
var inst_27520 = cljs.core._nth.call(null,inst_27510,inst_27512);
var inst_27521 = cljs.core.nth.call(null,inst_27520,(0),null);
var inst_27522 = cljs.core.nth.call(null,inst_27520,(1),null);
var state_27632__$1 = (function (){var statearr_27704 = state_27632;
(statearr_27704[(26)] = inst_27521);

return statearr_27704;
})();
if(cljs.core.truth_(inst_27522)){
var statearr_27705_27765 = state_27632__$1;
(statearr_27705_27765[(1)] = (13));

} else {
var statearr_27706_27766 = state_27632__$1;
(statearr_27706_27766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (18))){
var inst_27557 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27707_27767 = state_27632__$1;
(statearr_27707_27767[(2)] = inst_27557);

(statearr_27707_27767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (42))){
var state_27632__$1 = state_27632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27632__$1,(45),dchan);
} else {
if((state_val_27633 === (37))){
var inst_27591 = (state_27632[(25)]);
var inst_27500 = (state_27632[(9)]);
var inst_27600 = (state_27632[(23)]);
var inst_27600__$1 = cljs.core.first.call(null,inst_27591);
var inst_27601 = cljs.core.async.put_BANG_.call(null,inst_27600__$1,inst_27500,done);
var state_27632__$1 = (function (){var statearr_27708 = state_27632;
(statearr_27708[(23)] = inst_27600__$1);

return statearr_27708;
})();
if(cljs.core.truth_(inst_27601)){
var statearr_27709_27768 = state_27632__$1;
(statearr_27709_27768[(1)] = (39));

} else {
var statearr_27710_27769 = state_27632__$1;
(statearr_27710_27769[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (8))){
var inst_27512 = (state_27632[(13)]);
var inst_27511 = (state_27632[(15)]);
var inst_27514 = (inst_27512 < inst_27511);
var inst_27515 = inst_27514;
var state_27632__$1 = state_27632;
if(cljs.core.truth_(inst_27515)){
var statearr_27711_27770 = state_27632__$1;
(statearr_27711_27770[(1)] = (10));

} else {
var statearr_27712_27771 = state_27632__$1;
(statearr_27712_27771[(1)] = (11));

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
});})(c__26898__auto___27717,cs,m,dchan,dctr,done))
;
return ((function (switch__26808__auto__,c__26898__auto___27717,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26809__auto__ = null;
var cljs$core$async$mult_$_state_machine__26809__auto____0 = (function (){
var statearr_27713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27713[(0)] = cljs$core$async$mult_$_state_machine__26809__auto__);

(statearr_27713[(1)] = (1));

return statearr_27713;
});
var cljs$core$async$mult_$_state_machine__26809__auto____1 = (function (state_27632){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27714){if((e27714 instanceof Object)){
var ex__26812__auto__ = e27714;
var statearr_27715_27772 = state_27632;
(statearr_27715_27772[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27773 = state_27632;
state_27632 = G__27773;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26809__auto__ = function(state_27632){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26809__auto____1.call(this,state_27632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26809__auto____0;
cljs$core$async$mult_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26809__auto____1;
return cljs$core$async$mult_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___27717,cs,m,dchan,dctr,done))
})();
var state__26900__auto__ = (function (){var statearr_27716 = f__26899__auto__.call(null);
(statearr_27716[(6)] = c__26898__auto___27717);

return statearr_27716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___27717,cs,m,dchan,dctr,done))
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
var G__27775 = arguments.length;
switch (G__27775) {
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
var len__4499__auto___27787 = arguments.length;
var i__4500__auto___27788 = (0);
while(true){
if((i__4500__auto___27788 < len__4499__auto___27787)){
args__4502__auto__.push((arguments[i__4500__auto___27788]));

var G__27789 = (i__4500__auto___27788 + (1));
i__4500__auto___27788 = G__27789;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27781){
var map__27782 = p__27781;
var map__27782__$1 = ((((!((map__27782 == null)))?(((((map__27782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27782):map__27782);
var opts = map__27782__$1;
var statearr_27784_27790 = state;
(statearr_27784_27790[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27782,map__27782__$1,opts){
return (function (val){
var statearr_27785_27791 = state;
(statearr_27785_27791[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27782,map__27782__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27786_27792 = state;
(statearr_27786_27792[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27777){
var G__27778 = cljs.core.first.call(null,seq27777);
var seq27777__$1 = cljs.core.next.call(null,seq27777);
var G__27779 = cljs.core.first.call(null,seq27777__$1);
var seq27777__$2 = cljs.core.next.call(null,seq27777__$1);
var G__27780 = cljs.core.first.call(null,seq27777__$2);
var seq27777__$3 = cljs.core.next.call(null,seq27777__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27778,G__27779,G__27780,seq27777__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27793 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27794){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27794 = meta27794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27795,meta27794__$1){
var self__ = this;
var _27795__$1 = this;
return (new cljs.core.async.t_cljs$core$async27793(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27794__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27795){
var self__ = this;
var _27795__$1 = this;
return self__.meta27794;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27793.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27794","meta27794",-1424219801,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27793";

cljs.core.async.t_cljs$core$async27793.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27793");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27793.
 */
cljs.core.async.__GT_t_cljs$core$async27793 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27793(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27794){
return (new cljs.core.async.t_cljs$core$async27793(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27794));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27793(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26898__auto___27957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___27957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___27957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27897){
var state_val_27898 = (state_27897[(1)]);
if((state_val_27898 === (7))){
var inst_27812 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27899_27958 = state_27897__$1;
(statearr_27899_27958[(2)] = inst_27812);

(statearr_27899_27958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (20))){
var inst_27824 = (state_27897[(7)]);
var state_27897__$1 = state_27897;
var statearr_27900_27959 = state_27897__$1;
(statearr_27900_27959[(2)] = inst_27824);

(statearr_27900_27959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (27))){
var state_27897__$1 = state_27897;
var statearr_27901_27960 = state_27897__$1;
(statearr_27901_27960[(2)] = null);

(statearr_27901_27960[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (1))){
var inst_27799 = (state_27897[(8)]);
var inst_27799__$1 = calc_state.call(null);
var inst_27801 = (inst_27799__$1 == null);
var inst_27802 = cljs.core.not.call(null,inst_27801);
var state_27897__$1 = (function (){var statearr_27902 = state_27897;
(statearr_27902[(8)] = inst_27799__$1);

return statearr_27902;
})();
if(inst_27802){
var statearr_27903_27961 = state_27897__$1;
(statearr_27903_27961[(1)] = (2));

} else {
var statearr_27904_27962 = state_27897__$1;
(statearr_27904_27962[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (24))){
var inst_27857 = (state_27897[(9)]);
var inst_27848 = (state_27897[(10)]);
var inst_27871 = (state_27897[(11)]);
var inst_27871__$1 = inst_27848.call(null,inst_27857);
var state_27897__$1 = (function (){var statearr_27905 = state_27897;
(statearr_27905[(11)] = inst_27871__$1);

return statearr_27905;
})();
if(cljs.core.truth_(inst_27871__$1)){
var statearr_27906_27963 = state_27897__$1;
(statearr_27906_27963[(1)] = (29));

} else {
var statearr_27907_27964 = state_27897__$1;
(statearr_27907_27964[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (4))){
var inst_27815 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
if(cljs.core.truth_(inst_27815)){
var statearr_27908_27965 = state_27897__$1;
(statearr_27908_27965[(1)] = (8));

} else {
var statearr_27909_27966 = state_27897__$1;
(statearr_27909_27966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (15))){
var inst_27842 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
if(cljs.core.truth_(inst_27842)){
var statearr_27910_27967 = state_27897__$1;
(statearr_27910_27967[(1)] = (19));

} else {
var statearr_27911_27968 = state_27897__$1;
(statearr_27911_27968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (21))){
var inst_27847 = (state_27897[(12)]);
var inst_27847__$1 = (state_27897[(2)]);
var inst_27848 = cljs.core.get.call(null,inst_27847__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27849 = cljs.core.get.call(null,inst_27847__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27850 = cljs.core.get.call(null,inst_27847__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27897__$1 = (function (){var statearr_27912 = state_27897;
(statearr_27912[(13)] = inst_27849);

(statearr_27912[(12)] = inst_27847__$1);

(statearr_27912[(10)] = inst_27848);

return statearr_27912;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27897__$1,(22),inst_27850);
} else {
if((state_val_27898 === (31))){
var inst_27879 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
if(cljs.core.truth_(inst_27879)){
var statearr_27913_27969 = state_27897__$1;
(statearr_27913_27969[(1)] = (32));

} else {
var statearr_27914_27970 = state_27897__$1;
(statearr_27914_27970[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (32))){
var inst_27856 = (state_27897[(14)]);
var state_27897__$1 = state_27897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27897__$1,(35),out,inst_27856);
} else {
if((state_val_27898 === (33))){
var inst_27847 = (state_27897[(12)]);
var inst_27824 = inst_27847;
var state_27897__$1 = (function (){var statearr_27915 = state_27897;
(statearr_27915[(7)] = inst_27824);

return statearr_27915;
})();
var statearr_27916_27971 = state_27897__$1;
(statearr_27916_27971[(2)] = null);

(statearr_27916_27971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (13))){
var inst_27824 = (state_27897[(7)]);
var inst_27831 = inst_27824.cljs$lang$protocol_mask$partition0$;
var inst_27832 = (inst_27831 & (64));
var inst_27833 = inst_27824.cljs$core$ISeq$;
var inst_27834 = (cljs.core.PROTOCOL_SENTINEL === inst_27833);
var inst_27835 = ((inst_27832) || (inst_27834));
var state_27897__$1 = state_27897;
if(cljs.core.truth_(inst_27835)){
var statearr_27917_27972 = state_27897__$1;
(statearr_27917_27972[(1)] = (16));

} else {
var statearr_27918_27973 = state_27897__$1;
(statearr_27918_27973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (22))){
var inst_27856 = (state_27897[(14)]);
var inst_27857 = (state_27897[(9)]);
var inst_27855 = (state_27897[(2)]);
var inst_27856__$1 = cljs.core.nth.call(null,inst_27855,(0),null);
var inst_27857__$1 = cljs.core.nth.call(null,inst_27855,(1),null);
var inst_27858 = (inst_27856__$1 == null);
var inst_27859 = cljs.core._EQ_.call(null,inst_27857__$1,change);
var inst_27860 = ((inst_27858) || (inst_27859));
var state_27897__$1 = (function (){var statearr_27919 = state_27897;
(statearr_27919[(14)] = inst_27856__$1);

(statearr_27919[(9)] = inst_27857__$1);

return statearr_27919;
})();
if(cljs.core.truth_(inst_27860)){
var statearr_27920_27974 = state_27897__$1;
(statearr_27920_27974[(1)] = (23));

} else {
var statearr_27921_27975 = state_27897__$1;
(statearr_27921_27975[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (36))){
var inst_27847 = (state_27897[(12)]);
var inst_27824 = inst_27847;
var state_27897__$1 = (function (){var statearr_27922 = state_27897;
(statearr_27922[(7)] = inst_27824);

return statearr_27922;
})();
var statearr_27923_27976 = state_27897__$1;
(statearr_27923_27976[(2)] = null);

(statearr_27923_27976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (29))){
var inst_27871 = (state_27897[(11)]);
var state_27897__$1 = state_27897;
var statearr_27924_27977 = state_27897__$1;
(statearr_27924_27977[(2)] = inst_27871);

(statearr_27924_27977[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (6))){
var state_27897__$1 = state_27897;
var statearr_27925_27978 = state_27897__$1;
(statearr_27925_27978[(2)] = false);

(statearr_27925_27978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (28))){
var inst_27867 = (state_27897[(2)]);
var inst_27868 = calc_state.call(null);
var inst_27824 = inst_27868;
var state_27897__$1 = (function (){var statearr_27926 = state_27897;
(statearr_27926[(15)] = inst_27867);

(statearr_27926[(7)] = inst_27824);

return statearr_27926;
})();
var statearr_27927_27979 = state_27897__$1;
(statearr_27927_27979[(2)] = null);

(statearr_27927_27979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (25))){
var inst_27893 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27928_27980 = state_27897__$1;
(statearr_27928_27980[(2)] = inst_27893);

(statearr_27928_27980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (34))){
var inst_27891 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27929_27981 = state_27897__$1;
(statearr_27929_27981[(2)] = inst_27891);

(statearr_27929_27981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (17))){
var state_27897__$1 = state_27897;
var statearr_27930_27982 = state_27897__$1;
(statearr_27930_27982[(2)] = false);

(statearr_27930_27982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (3))){
var state_27897__$1 = state_27897;
var statearr_27931_27983 = state_27897__$1;
(statearr_27931_27983[(2)] = false);

(statearr_27931_27983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (12))){
var inst_27895 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27897__$1,inst_27895);
} else {
if((state_val_27898 === (2))){
var inst_27799 = (state_27897[(8)]);
var inst_27804 = inst_27799.cljs$lang$protocol_mask$partition0$;
var inst_27805 = (inst_27804 & (64));
var inst_27806 = inst_27799.cljs$core$ISeq$;
var inst_27807 = (cljs.core.PROTOCOL_SENTINEL === inst_27806);
var inst_27808 = ((inst_27805) || (inst_27807));
var state_27897__$1 = state_27897;
if(cljs.core.truth_(inst_27808)){
var statearr_27932_27984 = state_27897__$1;
(statearr_27932_27984[(1)] = (5));

} else {
var statearr_27933_27985 = state_27897__$1;
(statearr_27933_27985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (23))){
var inst_27856 = (state_27897[(14)]);
var inst_27862 = (inst_27856 == null);
var state_27897__$1 = state_27897;
if(cljs.core.truth_(inst_27862)){
var statearr_27934_27986 = state_27897__$1;
(statearr_27934_27986[(1)] = (26));

} else {
var statearr_27935_27987 = state_27897__$1;
(statearr_27935_27987[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (35))){
var inst_27882 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
if(cljs.core.truth_(inst_27882)){
var statearr_27936_27988 = state_27897__$1;
(statearr_27936_27988[(1)] = (36));

} else {
var statearr_27937_27989 = state_27897__$1;
(statearr_27937_27989[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (19))){
var inst_27824 = (state_27897[(7)]);
var inst_27844 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27824);
var state_27897__$1 = state_27897;
var statearr_27938_27990 = state_27897__$1;
(statearr_27938_27990[(2)] = inst_27844);

(statearr_27938_27990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (11))){
var inst_27824 = (state_27897[(7)]);
var inst_27828 = (inst_27824 == null);
var inst_27829 = cljs.core.not.call(null,inst_27828);
var state_27897__$1 = state_27897;
if(inst_27829){
var statearr_27939_27991 = state_27897__$1;
(statearr_27939_27991[(1)] = (13));

} else {
var statearr_27940_27992 = state_27897__$1;
(statearr_27940_27992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (9))){
var inst_27799 = (state_27897[(8)]);
var state_27897__$1 = state_27897;
var statearr_27941_27993 = state_27897__$1;
(statearr_27941_27993[(2)] = inst_27799);

(statearr_27941_27993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (5))){
var state_27897__$1 = state_27897;
var statearr_27942_27994 = state_27897__$1;
(statearr_27942_27994[(2)] = true);

(statearr_27942_27994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (14))){
var state_27897__$1 = state_27897;
var statearr_27943_27995 = state_27897__$1;
(statearr_27943_27995[(2)] = false);

(statearr_27943_27995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (26))){
var inst_27857 = (state_27897[(9)]);
var inst_27864 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27857);
var state_27897__$1 = state_27897;
var statearr_27944_27996 = state_27897__$1;
(statearr_27944_27996[(2)] = inst_27864);

(statearr_27944_27996[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (16))){
var state_27897__$1 = state_27897;
var statearr_27945_27997 = state_27897__$1;
(statearr_27945_27997[(2)] = true);

(statearr_27945_27997[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (38))){
var inst_27887 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27946_27998 = state_27897__$1;
(statearr_27946_27998[(2)] = inst_27887);

(statearr_27946_27998[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (30))){
var inst_27849 = (state_27897[(13)]);
var inst_27857 = (state_27897[(9)]);
var inst_27848 = (state_27897[(10)]);
var inst_27874 = cljs.core.empty_QMARK_.call(null,inst_27848);
var inst_27875 = inst_27849.call(null,inst_27857);
var inst_27876 = cljs.core.not.call(null,inst_27875);
var inst_27877 = ((inst_27874) && (inst_27876));
var state_27897__$1 = state_27897;
var statearr_27947_27999 = state_27897__$1;
(statearr_27947_27999[(2)] = inst_27877);

(statearr_27947_27999[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (10))){
var inst_27799 = (state_27897[(8)]);
var inst_27820 = (state_27897[(2)]);
var inst_27821 = cljs.core.get.call(null,inst_27820,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27822 = cljs.core.get.call(null,inst_27820,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27823 = cljs.core.get.call(null,inst_27820,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27824 = inst_27799;
var state_27897__$1 = (function (){var statearr_27948 = state_27897;
(statearr_27948[(16)] = inst_27823);

(statearr_27948[(7)] = inst_27824);

(statearr_27948[(17)] = inst_27821);

(statearr_27948[(18)] = inst_27822);

return statearr_27948;
})();
var statearr_27949_28000 = state_27897__$1;
(statearr_27949_28000[(2)] = null);

(statearr_27949_28000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (18))){
var inst_27839 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27950_28001 = state_27897__$1;
(statearr_27950_28001[(2)] = inst_27839);

(statearr_27950_28001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (37))){
var state_27897__$1 = state_27897;
var statearr_27951_28002 = state_27897__$1;
(statearr_27951_28002[(2)] = null);

(statearr_27951_28002[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (8))){
var inst_27799 = (state_27897[(8)]);
var inst_27817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27799);
var state_27897__$1 = state_27897;
var statearr_27952_28003 = state_27897__$1;
(statearr_27952_28003[(2)] = inst_27817);

(statearr_27952_28003[(1)] = (10));


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
});})(c__26898__auto___27957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26808__auto__,c__26898__auto___27957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26809__auto__ = null;
var cljs$core$async$mix_$_state_machine__26809__auto____0 = (function (){
var statearr_27953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27953[(0)] = cljs$core$async$mix_$_state_machine__26809__auto__);

(statearr_27953[(1)] = (1));

return statearr_27953;
});
var cljs$core$async$mix_$_state_machine__26809__auto____1 = (function (state_27897){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27954){if((e27954 instanceof Object)){
var ex__26812__auto__ = e27954;
var statearr_27955_28004 = state_27897;
(statearr_27955_28004[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28005 = state_27897;
state_27897 = G__28005;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26809__auto__ = function(state_27897){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26809__auto____1.call(this,state_27897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26809__auto____0;
cljs$core$async$mix_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26809__auto____1;
return cljs$core$async$mix_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___27957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26900__auto__ = (function (){var statearr_27956 = f__26899__auto__.call(null);
(statearr_27956[(6)] = c__26898__auto___27957);

return statearr_27956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___27957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28007 = arguments.length;
switch (G__28007) {
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
var G__28011 = arguments.length;
switch (G__28011) {
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
return (function (p1__28009_SHARP_){
if(cljs.core.truth_(p1__28009_SHARP_.call(null,topic))){
return p1__28009_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28009_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28012 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28013){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28013 = meta28013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28014,meta28013__$1){
var self__ = this;
var _28014__$1 = this;
return (new cljs.core.async.t_cljs$core$async28012(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28013__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28014){
var self__ = this;
var _28014__$1 = this;
return self__.meta28013;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28012.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28012.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28012.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28012.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28013","meta28013",-1349822453,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28012";

cljs.core.async.t_cljs$core$async28012.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28012");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28012.
 */
cljs.core.async.__GT_t_cljs$core$async28012 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28013){
return (new cljs.core.async.t_cljs$core$async28012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28013));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28012(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26898__auto___28132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___28132,mults,ensure_mult,p){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___28132,mults,ensure_mult,p){
return (function (state_28086){
var state_val_28087 = (state_28086[(1)]);
if((state_val_28087 === (7))){
var inst_28082 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
var statearr_28088_28133 = state_28086__$1;
(statearr_28088_28133[(2)] = inst_28082);

(statearr_28088_28133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (20))){
var state_28086__$1 = state_28086;
var statearr_28089_28134 = state_28086__$1;
(statearr_28089_28134[(2)] = null);

(statearr_28089_28134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (1))){
var state_28086__$1 = state_28086;
var statearr_28090_28135 = state_28086__$1;
(statearr_28090_28135[(2)] = null);

(statearr_28090_28135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (24))){
var inst_28065 = (state_28086[(7)]);
var inst_28074 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28065);
var state_28086__$1 = state_28086;
var statearr_28091_28136 = state_28086__$1;
(statearr_28091_28136[(2)] = inst_28074);

(statearr_28091_28136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (4))){
var inst_28017 = (state_28086[(8)]);
var inst_28017__$1 = (state_28086[(2)]);
var inst_28018 = (inst_28017__$1 == null);
var state_28086__$1 = (function (){var statearr_28092 = state_28086;
(statearr_28092[(8)] = inst_28017__$1);

return statearr_28092;
})();
if(cljs.core.truth_(inst_28018)){
var statearr_28093_28137 = state_28086__$1;
(statearr_28093_28137[(1)] = (5));

} else {
var statearr_28094_28138 = state_28086__$1;
(statearr_28094_28138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (15))){
var inst_28059 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
var statearr_28095_28139 = state_28086__$1;
(statearr_28095_28139[(2)] = inst_28059);

(statearr_28095_28139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (21))){
var inst_28079 = (state_28086[(2)]);
var state_28086__$1 = (function (){var statearr_28096 = state_28086;
(statearr_28096[(9)] = inst_28079);

return statearr_28096;
})();
var statearr_28097_28140 = state_28086__$1;
(statearr_28097_28140[(2)] = null);

(statearr_28097_28140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (13))){
var inst_28041 = (state_28086[(10)]);
var inst_28043 = cljs.core.chunked_seq_QMARK_.call(null,inst_28041);
var state_28086__$1 = state_28086;
if(inst_28043){
var statearr_28098_28141 = state_28086__$1;
(statearr_28098_28141[(1)] = (16));

} else {
var statearr_28099_28142 = state_28086__$1;
(statearr_28099_28142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (22))){
var inst_28071 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
if(cljs.core.truth_(inst_28071)){
var statearr_28100_28143 = state_28086__$1;
(statearr_28100_28143[(1)] = (23));

} else {
var statearr_28101_28144 = state_28086__$1;
(statearr_28101_28144[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (6))){
var inst_28065 = (state_28086[(7)]);
var inst_28017 = (state_28086[(8)]);
var inst_28067 = (state_28086[(11)]);
var inst_28065__$1 = topic_fn.call(null,inst_28017);
var inst_28066 = cljs.core.deref.call(null,mults);
var inst_28067__$1 = cljs.core.get.call(null,inst_28066,inst_28065__$1);
var state_28086__$1 = (function (){var statearr_28102 = state_28086;
(statearr_28102[(7)] = inst_28065__$1);

(statearr_28102[(11)] = inst_28067__$1);

return statearr_28102;
})();
if(cljs.core.truth_(inst_28067__$1)){
var statearr_28103_28145 = state_28086__$1;
(statearr_28103_28145[(1)] = (19));

} else {
var statearr_28104_28146 = state_28086__$1;
(statearr_28104_28146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (25))){
var inst_28076 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
var statearr_28105_28147 = state_28086__$1;
(statearr_28105_28147[(2)] = inst_28076);

(statearr_28105_28147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (17))){
var inst_28041 = (state_28086[(10)]);
var inst_28050 = cljs.core.first.call(null,inst_28041);
var inst_28051 = cljs.core.async.muxch_STAR_.call(null,inst_28050);
var inst_28052 = cljs.core.async.close_BANG_.call(null,inst_28051);
var inst_28053 = cljs.core.next.call(null,inst_28041);
var inst_28027 = inst_28053;
var inst_28028 = null;
var inst_28029 = (0);
var inst_28030 = (0);
var state_28086__$1 = (function (){var statearr_28106 = state_28086;
(statearr_28106[(12)] = inst_28052);

(statearr_28106[(13)] = inst_28028);

(statearr_28106[(14)] = inst_28027);

(statearr_28106[(15)] = inst_28030);

(statearr_28106[(16)] = inst_28029);

return statearr_28106;
})();
var statearr_28107_28148 = state_28086__$1;
(statearr_28107_28148[(2)] = null);

(statearr_28107_28148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (3))){
var inst_28084 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28086__$1,inst_28084);
} else {
if((state_val_28087 === (12))){
var inst_28061 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
var statearr_28108_28149 = state_28086__$1;
(statearr_28108_28149[(2)] = inst_28061);

(statearr_28108_28149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (2))){
var state_28086__$1 = state_28086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28086__$1,(4),ch);
} else {
if((state_val_28087 === (23))){
var state_28086__$1 = state_28086;
var statearr_28109_28150 = state_28086__$1;
(statearr_28109_28150[(2)] = null);

(statearr_28109_28150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (19))){
var inst_28017 = (state_28086[(8)]);
var inst_28067 = (state_28086[(11)]);
var inst_28069 = cljs.core.async.muxch_STAR_.call(null,inst_28067);
var state_28086__$1 = state_28086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28086__$1,(22),inst_28069,inst_28017);
} else {
if((state_val_28087 === (11))){
var inst_28041 = (state_28086[(10)]);
var inst_28027 = (state_28086[(14)]);
var inst_28041__$1 = cljs.core.seq.call(null,inst_28027);
var state_28086__$1 = (function (){var statearr_28110 = state_28086;
(statearr_28110[(10)] = inst_28041__$1);

return statearr_28110;
})();
if(inst_28041__$1){
var statearr_28111_28151 = state_28086__$1;
(statearr_28111_28151[(1)] = (13));

} else {
var statearr_28112_28152 = state_28086__$1;
(statearr_28112_28152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (9))){
var inst_28063 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
var statearr_28113_28153 = state_28086__$1;
(statearr_28113_28153[(2)] = inst_28063);

(statearr_28113_28153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (5))){
var inst_28024 = cljs.core.deref.call(null,mults);
var inst_28025 = cljs.core.vals.call(null,inst_28024);
var inst_28026 = cljs.core.seq.call(null,inst_28025);
var inst_28027 = inst_28026;
var inst_28028 = null;
var inst_28029 = (0);
var inst_28030 = (0);
var state_28086__$1 = (function (){var statearr_28114 = state_28086;
(statearr_28114[(13)] = inst_28028);

(statearr_28114[(14)] = inst_28027);

(statearr_28114[(15)] = inst_28030);

(statearr_28114[(16)] = inst_28029);

return statearr_28114;
})();
var statearr_28115_28154 = state_28086__$1;
(statearr_28115_28154[(2)] = null);

(statearr_28115_28154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (14))){
var state_28086__$1 = state_28086;
var statearr_28119_28155 = state_28086__$1;
(statearr_28119_28155[(2)] = null);

(statearr_28119_28155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (16))){
var inst_28041 = (state_28086[(10)]);
var inst_28045 = cljs.core.chunk_first.call(null,inst_28041);
var inst_28046 = cljs.core.chunk_rest.call(null,inst_28041);
var inst_28047 = cljs.core.count.call(null,inst_28045);
var inst_28027 = inst_28046;
var inst_28028 = inst_28045;
var inst_28029 = inst_28047;
var inst_28030 = (0);
var state_28086__$1 = (function (){var statearr_28120 = state_28086;
(statearr_28120[(13)] = inst_28028);

(statearr_28120[(14)] = inst_28027);

(statearr_28120[(15)] = inst_28030);

(statearr_28120[(16)] = inst_28029);

return statearr_28120;
})();
var statearr_28121_28156 = state_28086__$1;
(statearr_28121_28156[(2)] = null);

(statearr_28121_28156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (10))){
var inst_28028 = (state_28086[(13)]);
var inst_28027 = (state_28086[(14)]);
var inst_28030 = (state_28086[(15)]);
var inst_28029 = (state_28086[(16)]);
var inst_28035 = cljs.core._nth.call(null,inst_28028,inst_28030);
var inst_28036 = cljs.core.async.muxch_STAR_.call(null,inst_28035);
var inst_28037 = cljs.core.async.close_BANG_.call(null,inst_28036);
var inst_28038 = (inst_28030 + (1));
var tmp28116 = inst_28028;
var tmp28117 = inst_28027;
var tmp28118 = inst_28029;
var inst_28027__$1 = tmp28117;
var inst_28028__$1 = tmp28116;
var inst_28029__$1 = tmp28118;
var inst_28030__$1 = inst_28038;
var state_28086__$1 = (function (){var statearr_28122 = state_28086;
(statearr_28122[(17)] = inst_28037);

(statearr_28122[(13)] = inst_28028__$1);

(statearr_28122[(14)] = inst_28027__$1);

(statearr_28122[(15)] = inst_28030__$1);

(statearr_28122[(16)] = inst_28029__$1);

return statearr_28122;
})();
var statearr_28123_28157 = state_28086__$1;
(statearr_28123_28157[(2)] = null);

(statearr_28123_28157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (18))){
var inst_28056 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
var statearr_28124_28158 = state_28086__$1;
(statearr_28124_28158[(2)] = inst_28056);

(statearr_28124_28158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (8))){
var inst_28030 = (state_28086[(15)]);
var inst_28029 = (state_28086[(16)]);
var inst_28032 = (inst_28030 < inst_28029);
var inst_28033 = inst_28032;
var state_28086__$1 = state_28086;
if(cljs.core.truth_(inst_28033)){
var statearr_28125_28159 = state_28086__$1;
(statearr_28125_28159[(1)] = (10));

} else {
var statearr_28126_28160 = state_28086__$1;
(statearr_28126_28160[(1)] = (11));

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
});})(c__26898__auto___28132,mults,ensure_mult,p))
;
return ((function (switch__26808__auto__,c__26898__auto___28132,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28127[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28127[(1)] = (1));

return statearr_28127;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28086){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28128){if((e28128 instanceof Object)){
var ex__26812__auto__ = e28128;
var statearr_28129_28161 = state_28086;
(statearr_28129_28161[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28162 = state_28086;
state_28086 = G__28162;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___28132,mults,ensure_mult,p))
})();
var state__26900__auto__ = (function (){var statearr_28130 = f__26899__auto__.call(null);
(statearr_28130[(6)] = c__26898__auto___28132);

return statearr_28130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___28132,mults,ensure_mult,p))
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
var G__28164 = arguments.length;
switch (G__28164) {
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
var G__28167 = arguments.length;
switch (G__28167) {
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
var G__28170 = arguments.length;
switch (G__28170) {
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
var c__26898__auto___28237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___28237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___28237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28209){
var state_val_28210 = (state_28209[(1)]);
if((state_val_28210 === (7))){
var state_28209__$1 = state_28209;
var statearr_28211_28238 = state_28209__$1;
(statearr_28211_28238[(2)] = null);

(statearr_28211_28238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (1))){
var state_28209__$1 = state_28209;
var statearr_28212_28239 = state_28209__$1;
(statearr_28212_28239[(2)] = null);

(statearr_28212_28239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (4))){
var inst_28173 = (state_28209[(7)]);
var inst_28175 = (inst_28173 < cnt);
var state_28209__$1 = state_28209;
if(cljs.core.truth_(inst_28175)){
var statearr_28213_28240 = state_28209__$1;
(statearr_28213_28240[(1)] = (6));

} else {
var statearr_28214_28241 = state_28209__$1;
(statearr_28214_28241[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (15))){
var inst_28205 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28215_28242 = state_28209__$1;
(statearr_28215_28242[(2)] = inst_28205);

(statearr_28215_28242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (13))){
var inst_28198 = cljs.core.async.close_BANG_.call(null,out);
var state_28209__$1 = state_28209;
var statearr_28216_28243 = state_28209__$1;
(statearr_28216_28243[(2)] = inst_28198);

(statearr_28216_28243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (6))){
var state_28209__$1 = state_28209;
var statearr_28217_28244 = state_28209__$1;
(statearr_28217_28244[(2)] = null);

(statearr_28217_28244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (3))){
var inst_28207 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28209__$1,inst_28207);
} else {
if((state_val_28210 === (12))){
var inst_28195 = (state_28209[(8)]);
var inst_28195__$1 = (state_28209[(2)]);
var inst_28196 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28195__$1);
var state_28209__$1 = (function (){var statearr_28218 = state_28209;
(statearr_28218[(8)] = inst_28195__$1);

return statearr_28218;
})();
if(cljs.core.truth_(inst_28196)){
var statearr_28219_28245 = state_28209__$1;
(statearr_28219_28245[(1)] = (13));

} else {
var statearr_28220_28246 = state_28209__$1;
(statearr_28220_28246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (2))){
var inst_28172 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28173 = (0);
var state_28209__$1 = (function (){var statearr_28221 = state_28209;
(statearr_28221[(7)] = inst_28173);

(statearr_28221[(9)] = inst_28172);

return statearr_28221;
})();
var statearr_28222_28247 = state_28209__$1;
(statearr_28222_28247[(2)] = null);

(statearr_28222_28247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (11))){
var inst_28173 = (state_28209[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28209,(10),Object,null,(9));
var inst_28182 = chs__$1.call(null,inst_28173);
var inst_28183 = done.call(null,inst_28173);
var inst_28184 = cljs.core.async.take_BANG_.call(null,inst_28182,inst_28183);
var state_28209__$1 = state_28209;
var statearr_28223_28248 = state_28209__$1;
(statearr_28223_28248[(2)] = inst_28184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (9))){
var inst_28173 = (state_28209[(7)]);
var inst_28186 = (state_28209[(2)]);
var inst_28187 = (inst_28173 + (1));
var inst_28173__$1 = inst_28187;
var state_28209__$1 = (function (){var statearr_28224 = state_28209;
(statearr_28224[(10)] = inst_28186);

(statearr_28224[(7)] = inst_28173__$1);

return statearr_28224;
})();
var statearr_28225_28249 = state_28209__$1;
(statearr_28225_28249[(2)] = null);

(statearr_28225_28249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (5))){
var inst_28193 = (state_28209[(2)]);
var state_28209__$1 = (function (){var statearr_28226 = state_28209;
(statearr_28226[(11)] = inst_28193);

return statearr_28226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28209__$1,(12),dchan);
} else {
if((state_val_28210 === (14))){
var inst_28195 = (state_28209[(8)]);
var inst_28200 = cljs.core.apply.call(null,f,inst_28195);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28209__$1,(16),out,inst_28200);
} else {
if((state_val_28210 === (16))){
var inst_28202 = (state_28209[(2)]);
var state_28209__$1 = (function (){var statearr_28227 = state_28209;
(statearr_28227[(12)] = inst_28202);

return statearr_28227;
})();
var statearr_28228_28250 = state_28209__$1;
(statearr_28228_28250[(2)] = null);

(statearr_28228_28250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (10))){
var inst_28177 = (state_28209[(2)]);
var inst_28178 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28209__$1 = (function (){var statearr_28229 = state_28209;
(statearr_28229[(13)] = inst_28177);

return statearr_28229;
})();
var statearr_28230_28251 = state_28209__$1;
(statearr_28230_28251[(2)] = inst_28178);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (8))){
var inst_28191 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28231_28252 = state_28209__$1;
(statearr_28231_28252[(2)] = inst_28191);

(statearr_28231_28252[(1)] = (5));


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
});})(c__26898__auto___28237,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26808__auto__,c__26898__auto___28237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28232[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28232[(1)] = (1));

return statearr_28232;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28209){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28233){if((e28233 instanceof Object)){
var ex__26812__auto__ = e28233;
var statearr_28234_28253 = state_28209;
(statearr_28234_28253[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28254 = state_28209;
state_28209 = G__28254;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___28237,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26900__auto__ = (function (){var statearr_28235 = f__26899__auto__.call(null);
(statearr_28235[(6)] = c__26898__auto___28237);

return statearr_28235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___28237,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28257 = arguments.length;
switch (G__28257) {
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
var c__26898__auto___28311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___28311,out){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___28311,out){
return (function (state_28289){
var state_val_28290 = (state_28289[(1)]);
if((state_val_28290 === (7))){
var inst_28268 = (state_28289[(7)]);
var inst_28269 = (state_28289[(8)]);
var inst_28268__$1 = (state_28289[(2)]);
var inst_28269__$1 = cljs.core.nth.call(null,inst_28268__$1,(0),null);
var inst_28270 = cljs.core.nth.call(null,inst_28268__$1,(1),null);
var inst_28271 = (inst_28269__$1 == null);
var state_28289__$1 = (function (){var statearr_28291 = state_28289;
(statearr_28291[(7)] = inst_28268__$1);

(statearr_28291[(8)] = inst_28269__$1);

(statearr_28291[(9)] = inst_28270);

return statearr_28291;
})();
if(cljs.core.truth_(inst_28271)){
var statearr_28292_28312 = state_28289__$1;
(statearr_28292_28312[(1)] = (8));

} else {
var statearr_28293_28313 = state_28289__$1;
(statearr_28293_28313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28290 === (1))){
var inst_28258 = cljs.core.vec.call(null,chs);
var inst_28259 = inst_28258;
var state_28289__$1 = (function (){var statearr_28294 = state_28289;
(statearr_28294[(10)] = inst_28259);

return statearr_28294;
})();
var statearr_28295_28314 = state_28289__$1;
(statearr_28295_28314[(2)] = null);

(statearr_28295_28314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28290 === (4))){
var inst_28259 = (state_28289[(10)]);
var state_28289__$1 = state_28289;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28289__$1,(7),inst_28259);
} else {
if((state_val_28290 === (6))){
var inst_28285 = (state_28289[(2)]);
var state_28289__$1 = state_28289;
var statearr_28296_28315 = state_28289__$1;
(statearr_28296_28315[(2)] = inst_28285);

(statearr_28296_28315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28290 === (3))){
var inst_28287 = (state_28289[(2)]);
var state_28289__$1 = state_28289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28289__$1,inst_28287);
} else {
if((state_val_28290 === (2))){
var inst_28259 = (state_28289[(10)]);
var inst_28261 = cljs.core.count.call(null,inst_28259);
var inst_28262 = (inst_28261 > (0));
var state_28289__$1 = state_28289;
if(cljs.core.truth_(inst_28262)){
var statearr_28298_28316 = state_28289__$1;
(statearr_28298_28316[(1)] = (4));

} else {
var statearr_28299_28317 = state_28289__$1;
(statearr_28299_28317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28290 === (11))){
var inst_28259 = (state_28289[(10)]);
var inst_28278 = (state_28289[(2)]);
var tmp28297 = inst_28259;
var inst_28259__$1 = tmp28297;
var state_28289__$1 = (function (){var statearr_28300 = state_28289;
(statearr_28300[(10)] = inst_28259__$1);

(statearr_28300[(11)] = inst_28278);

return statearr_28300;
})();
var statearr_28301_28318 = state_28289__$1;
(statearr_28301_28318[(2)] = null);

(statearr_28301_28318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28290 === (9))){
var inst_28269 = (state_28289[(8)]);
var state_28289__$1 = state_28289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28289__$1,(11),out,inst_28269);
} else {
if((state_val_28290 === (5))){
var inst_28283 = cljs.core.async.close_BANG_.call(null,out);
var state_28289__$1 = state_28289;
var statearr_28302_28319 = state_28289__$1;
(statearr_28302_28319[(2)] = inst_28283);

(statearr_28302_28319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28290 === (10))){
var inst_28281 = (state_28289[(2)]);
var state_28289__$1 = state_28289;
var statearr_28303_28320 = state_28289__$1;
(statearr_28303_28320[(2)] = inst_28281);

(statearr_28303_28320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28290 === (8))){
var inst_28268 = (state_28289[(7)]);
var inst_28259 = (state_28289[(10)]);
var inst_28269 = (state_28289[(8)]);
var inst_28270 = (state_28289[(9)]);
var inst_28273 = (function (){var cs = inst_28259;
var vec__28264 = inst_28268;
var v = inst_28269;
var c = inst_28270;
return ((function (cs,vec__28264,v,c,inst_28268,inst_28259,inst_28269,inst_28270,state_val_28290,c__26898__auto___28311,out){
return (function (p1__28255_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28255_SHARP_);
});
;})(cs,vec__28264,v,c,inst_28268,inst_28259,inst_28269,inst_28270,state_val_28290,c__26898__auto___28311,out))
})();
var inst_28274 = cljs.core.filterv.call(null,inst_28273,inst_28259);
var inst_28259__$1 = inst_28274;
var state_28289__$1 = (function (){var statearr_28304 = state_28289;
(statearr_28304[(10)] = inst_28259__$1);

return statearr_28304;
})();
var statearr_28305_28321 = state_28289__$1;
(statearr_28305_28321[(2)] = null);

(statearr_28305_28321[(1)] = (2));


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
});})(c__26898__auto___28311,out))
;
return ((function (switch__26808__auto__,c__26898__auto___28311,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28306[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28306[(1)] = (1));

return statearr_28306;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28289){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28307){if((e28307 instanceof Object)){
var ex__26812__auto__ = e28307;
var statearr_28308_28322 = state_28289;
(statearr_28308_28322[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28323 = state_28289;
state_28289 = G__28323;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___28311,out))
})();
var state__26900__auto__ = (function (){var statearr_28309 = f__26899__auto__.call(null);
(statearr_28309[(6)] = c__26898__auto___28311);

return statearr_28309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___28311,out))
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
var G__28325 = arguments.length;
switch (G__28325) {
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
var c__26898__auto___28370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___28370,out){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___28370,out){
return (function (state_28349){
var state_val_28350 = (state_28349[(1)]);
if((state_val_28350 === (7))){
var inst_28331 = (state_28349[(7)]);
var inst_28331__$1 = (state_28349[(2)]);
var inst_28332 = (inst_28331__$1 == null);
var inst_28333 = cljs.core.not.call(null,inst_28332);
var state_28349__$1 = (function (){var statearr_28351 = state_28349;
(statearr_28351[(7)] = inst_28331__$1);

return statearr_28351;
})();
if(inst_28333){
var statearr_28352_28371 = state_28349__$1;
(statearr_28352_28371[(1)] = (8));

} else {
var statearr_28353_28372 = state_28349__$1;
(statearr_28353_28372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28350 === (1))){
var inst_28326 = (0);
var state_28349__$1 = (function (){var statearr_28354 = state_28349;
(statearr_28354[(8)] = inst_28326);

return statearr_28354;
})();
var statearr_28355_28373 = state_28349__$1;
(statearr_28355_28373[(2)] = null);

(statearr_28355_28373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28350 === (4))){
var state_28349__$1 = state_28349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28349__$1,(7),ch);
} else {
if((state_val_28350 === (6))){
var inst_28344 = (state_28349[(2)]);
var state_28349__$1 = state_28349;
var statearr_28356_28374 = state_28349__$1;
(statearr_28356_28374[(2)] = inst_28344);

(statearr_28356_28374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28350 === (3))){
var inst_28346 = (state_28349[(2)]);
var inst_28347 = cljs.core.async.close_BANG_.call(null,out);
var state_28349__$1 = (function (){var statearr_28357 = state_28349;
(statearr_28357[(9)] = inst_28346);

return statearr_28357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28349__$1,inst_28347);
} else {
if((state_val_28350 === (2))){
var inst_28326 = (state_28349[(8)]);
var inst_28328 = (inst_28326 < n);
var state_28349__$1 = state_28349;
if(cljs.core.truth_(inst_28328)){
var statearr_28358_28375 = state_28349__$1;
(statearr_28358_28375[(1)] = (4));

} else {
var statearr_28359_28376 = state_28349__$1;
(statearr_28359_28376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28350 === (11))){
var inst_28326 = (state_28349[(8)]);
var inst_28336 = (state_28349[(2)]);
var inst_28337 = (inst_28326 + (1));
var inst_28326__$1 = inst_28337;
var state_28349__$1 = (function (){var statearr_28360 = state_28349;
(statearr_28360[(10)] = inst_28336);

(statearr_28360[(8)] = inst_28326__$1);

return statearr_28360;
})();
var statearr_28361_28377 = state_28349__$1;
(statearr_28361_28377[(2)] = null);

(statearr_28361_28377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28350 === (9))){
var state_28349__$1 = state_28349;
var statearr_28362_28378 = state_28349__$1;
(statearr_28362_28378[(2)] = null);

(statearr_28362_28378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28350 === (5))){
var state_28349__$1 = state_28349;
var statearr_28363_28379 = state_28349__$1;
(statearr_28363_28379[(2)] = null);

(statearr_28363_28379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28350 === (10))){
var inst_28341 = (state_28349[(2)]);
var state_28349__$1 = state_28349;
var statearr_28364_28380 = state_28349__$1;
(statearr_28364_28380[(2)] = inst_28341);

(statearr_28364_28380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28350 === (8))){
var inst_28331 = (state_28349[(7)]);
var state_28349__$1 = state_28349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28349__$1,(11),out,inst_28331);
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
});})(c__26898__auto___28370,out))
;
return ((function (switch__26808__auto__,c__26898__auto___28370,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28365[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28365[(1)] = (1));

return statearr_28365;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28349){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28366){if((e28366 instanceof Object)){
var ex__26812__auto__ = e28366;
var statearr_28367_28381 = state_28349;
(statearr_28367_28381[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28382 = state_28349;
state_28349 = G__28382;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___28370,out))
})();
var state__26900__auto__ = (function (){var statearr_28368 = f__26899__auto__.call(null);
(statearr_28368[(6)] = c__26898__auto___28370);

return statearr_28368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___28370,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28384 = (function (f,ch,meta28385){
this.f = f;
this.ch = ch;
this.meta28385 = meta28385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28386,meta28385__$1){
var self__ = this;
var _28386__$1 = this;
return (new cljs.core.async.t_cljs$core$async28384(self__.f,self__.ch,meta28385__$1));
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28386){
var self__ = this;
var _28386__$1 = this;
return self__.meta28385;
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28387 = (function (f,ch,meta28385,_,fn1,meta28388){
this.f = f;
this.ch = ch;
this.meta28385 = meta28385;
this._ = _;
this.fn1 = fn1;
this.meta28388 = meta28388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28389,meta28388__$1){
var self__ = this;
var _28389__$1 = this;
return (new cljs.core.async.t_cljs$core$async28387(self__.f,self__.ch,self__.meta28385,self__._,self__.fn1,meta28388__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28389){
var self__ = this;
var _28389__$1 = this;
return self__.meta28388;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28383_SHARP_){
return f1.call(null,(((p1__28383_SHARP_ == null))?null:self__.f.call(null,p1__28383_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28387.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28385","meta28385",-67056209,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28384","cljs.core.async/t_cljs$core$async28384",1228234343,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28388","meta28388",-1052404652,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28387";

cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28387");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28387.
 */
cljs.core.async.__GT_t_cljs$core$async28387 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28387(f__$1,ch__$1,meta28385__$1,___$2,fn1__$1,meta28388){
return (new cljs.core.async.t_cljs$core$async28387(f__$1,ch__$1,meta28385__$1,___$2,fn1__$1,meta28388));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28387(self__.f,self__.ch,self__.meta28385,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28385","meta28385",-67056209,null)], null);
});

cljs.core.async.t_cljs$core$async28384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28384";

cljs.core.async.t_cljs$core$async28384.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28384");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28384.
 */
cljs.core.async.__GT_t_cljs$core$async28384 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28384(f__$1,ch__$1,meta28385){
return (new cljs.core.async.t_cljs$core$async28384(f__$1,ch__$1,meta28385));
});

}

return (new cljs.core.async.t_cljs$core$async28384(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28390 = (function (f,ch,meta28391){
this.f = f;
this.ch = ch;
this.meta28391 = meta28391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28392,meta28391__$1){
var self__ = this;
var _28392__$1 = this;
return (new cljs.core.async.t_cljs$core$async28390(self__.f,self__.ch,meta28391__$1));
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28392){
var self__ = this;
var _28392__$1 = this;
return self__.meta28391;
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28391","meta28391",-1266027561,null)], null);
});

cljs.core.async.t_cljs$core$async28390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28390";

cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28390");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28390.
 */
cljs.core.async.__GT_t_cljs$core$async28390 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28390(f__$1,ch__$1,meta28391){
return (new cljs.core.async.t_cljs$core$async28390(f__$1,ch__$1,meta28391));
});

}

return (new cljs.core.async.t_cljs$core$async28390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28393 = (function (p,ch,meta28394){
this.p = p;
this.ch = ch;
this.meta28394 = meta28394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28395,meta28394__$1){
var self__ = this;
var _28395__$1 = this;
return (new cljs.core.async.t_cljs$core$async28393(self__.p,self__.ch,meta28394__$1));
});

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28395){
var self__ = this;
var _28395__$1 = this;
return self__.meta28394;
});

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28394","meta28394",-609032296,null)], null);
});

cljs.core.async.t_cljs$core$async28393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28393";

cljs.core.async.t_cljs$core$async28393.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28393");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28393.
 */
cljs.core.async.__GT_t_cljs$core$async28393 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28393(p__$1,ch__$1,meta28394){
return (new cljs.core.async.t_cljs$core$async28393(p__$1,ch__$1,meta28394));
});

}

return (new cljs.core.async.t_cljs$core$async28393(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28397 = arguments.length;
switch (G__28397) {
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
var c__26898__auto___28437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___28437,out){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___28437,out){
return (function (state_28418){
var state_val_28419 = (state_28418[(1)]);
if((state_val_28419 === (7))){
var inst_28414 = (state_28418[(2)]);
var state_28418__$1 = state_28418;
var statearr_28420_28438 = state_28418__$1;
(statearr_28420_28438[(2)] = inst_28414);

(statearr_28420_28438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (1))){
var state_28418__$1 = state_28418;
var statearr_28421_28439 = state_28418__$1;
(statearr_28421_28439[(2)] = null);

(statearr_28421_28439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (4))){
var inst_28400 = (state_28418[(7)]);
var inst_28400__$1 = (state_28418[(2)]);
var inst_28401 = (inst_28400__$1 == null);
var state_28418__$1 = (function (){var statearr_28422 = state_28418;
(statearr_28422[(7)] = inst_28400__$1);

return statearr_28422;
})();
if(cljs.core.truth_(inst_28401)){
var statearr_28423_28440 = state_28418__$1;
(statearr_28423_28440[(1)] = (5));

} else {
var statearr_28424_28441 = state_28418__$1;
(statearr_28424_28441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (6))){
var inst_28400 = (state_28418[(7)]);
var inst_28405 = p.call(null,inst_28400);
var state_28418__$1 = state_28418;
if(cljs.core.truth_(inst_28405)){
var statearr_28425_28442 = state_28418__$1;
(statearr_28425_28442[(1)] = (8));

} else {
var statearr_28426_28443 = state_28418__$1;
(statearr_28426_28443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (3))){
var inst_28416 = (state_28418[(2)]);
var state_28418__$1 = state_28418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28418__$1,inst_28416);
} else {
if((state_val_28419 === (2))){
var state_28418__$1 = state_28418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28418__$1,(4),ch);
} else {
if((state_val_28419 === (11))){
var inst_28408 = (state_28418[(2)]);
var state_28418__$1 = state_28418;
var statearr_28427_28444 = state_28418__$1;
(statearr_28427_28444[(2)] = inst_28408);

(statearr_28427_28444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (9))){
var state_28418__$1 = state_28418;
var statearr_28428_28445 = state_28418__$1;
(statearr_28428_28445[(2)] = null);

(statearr_28428_28445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (5))){
var inst_28403 = cljs.core.async.close_BANG_.call(null,out);
var state_28418__$1 = state_28418;
var statearr_28429_28446 = state_28418__$1;
(statearr_28429_28446[(2)] = inst_28403);

(statearr_28429_28446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (10))){
var inst_28411 = (state_28418[(2)]);
var state_28418__$1 = (function (){var statearr_28430 = state_28418;
(statearr_28430[(8)] = inst_28411);

return statearr_28430;
})();
var statearr_28431_28447 = state_28418__$1;
(statearr_28431_28447[(2)] = null);

(statearr_28431_28447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (8))){
var inst_28400 = (state_28418[(7)]);
var state_28418__$1 = state_28418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28418__$1,(11),out,inst_28400);
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
});})(c__26898__auto___28437,out))
;
return ((function (switch__26808__auto__,c__26898__auto___28437,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28432 = [null,null,null,null,null,null,null,null,null];
(statearr_28432[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28432[(1)] = (1));

return statearr_28432;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28418){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28433){if((e28433 instanceof Object)){
var ex__26812__auto__ = e28433;
var statearr_28434_28448 = state_28418;
(statearr_28434_28448[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28449 = state_28418;
state_28418 = G__28449;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___28437,out))
})();
var state__26900__auto__ = (function (){var statearr_28435 = f__26899__auto__.call(null);
(statearr_28435[(6)] = c__26898__auto___28437);

return statearr_28435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___28437,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28451 = arguments.length;
switch (G__28451) {
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
var c__26898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto__){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto__){
return (function (state_28514){
var state_val_28515 = (state_28514[(1)]);
if((state_val_28515 === (7))){
var inst_28510 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28516_28554 = state_28514__$1;
(statearr_28516_28554[(2)] = inst_28510);

(statearr_28516_28554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (20))){
var inst_28480 = (state_28514[(7)]);
var inst_28491 = (state_28514[(2)]);
var inst_28492 = cljs.core.next.call(null,inst_28480);
var inst_28466 = inst_28492;
var inst_28467 = null;
var inst_28468 = (0);
var inst_28469 = (0);
var state_28514__$1 = (function (){var statearr_28517 = state_28514;
(statearr_28517[(8)] = inst_28467);

(statearr_28517[(9)] = inst_28491);

(statearr_28517[(10)] = inst_28469);

(statearr_28517[(11)] = inst_28468);

(statearr_28517[(12)] = inst_28466);

return statearr_28517;
})();
var statearr_28518_28555 = state_28514__$1;
(statearr_28518_28555[(2)] = null);

(statearr_28518_28555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (1))){
var state_28514__$1 = state_28514;
var statearr_28519_28556 = state_28514__$1;
(statearr_28519_28556[(2)] = null);

(statearr_28519_28556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (4))){
var inst_28455 = (state_28514[(13)]);
var inst_28455__$1 = (state_28514[(2)]);
var inst_28456 = (inst_28455__$1 == null);
var state_28514__$1 = (function (){var statearr_28520 = state_28514;
(statearr_28520[(13)] = inst_28455__$1);

return statearr_28520;
})();
if(cljs.core.truth_(inst_28456)){
var statearr_28521_28557 = state_28514__$1;
(statearr_28521_28557[(1)] = (5));

} else {
var statearr_28522_28558 = state_28514__$1;
(statearr_28522_28558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (15))){
var state_28514__$1 = state_28514;
var statearr_28526_28559 = state_28514__$1;
(statearr_28526_28559[(2)] = null);

(statearr_28526_28559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (21))){
var state_28514__$1 = state_28514;
var statearr_28527_28560 = state_28514__$1;
(statearr_28527_28560[(2)] = null);

(statearr_28527_28560[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (13))){
var inst_28467 = (state_28514[(8)]);
var inst_28469 = (state_28514[(10)]);
var inst_28468 = (state_28514[(11)]);
var inst_28466 = (state_28514[(12)]);
var inst_28476 = (state_28514[(2)]);
var inst_28477 = (inst_28469 + (1));
var tmp28523 = inst_28467;
var tmp28524 = inst_28468;
var tmp28525 = inst_28466;
var inst_28466__$1 = tmp28525;
var inst_28467__$1 = tmp28523;
var inst_28468__$1 = tmp28524;
var inst_28469__$1 = inst_28477;
var state_28514__$1 = (function (){var statearr_28528 = state_28514;
(statearr_28528[(8)] = inst_28467__$1);

(statearr_28528[(14)] = inst_28476);

(statearr_28528[(10)] = inst_28469__$1);

(statearr_28528[(11)] = inst_28468__$1);

(statearr_28528[(12)] = inst_28466__$1);

return statearr_28528;
})();
var statearr_28529_28561 = state_28514__$1;
(statearr_28529_28561[(2)] = null);

(statearr_28529_28561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (22))){
var state_28514__$1 = state_28514;
var statearr_28530_28562 = state_28514__$1;
(statearr_28530_28562[(2)] = null);

(statearr_28530_28562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (6))){
var inst_28455 = (state_28514[(13)]);
var inst_28464 = f.call(null,inst_28455);
var inst_28465 = cljs.core.seq.call(null,inst_28464);
var inst_28466 = inst_28465;
var inst_28467 = null;
var inst_28468 = (0);
var inst_28469 = (0);
var state_28514__$1 = (function (){var statearr_28531 = state_28514;
(statearr_28531[(8)] = inst_28467);

(statearr_28531[(10)] = inst_28469);

(statearr_28531[(11)] = inst_28468);

(statearr_28531[(12)] = inst_28466);

return statearr_28531;
})();
var statearr_28532_28563 = state_28514__$1;
(statearr_28532_28563[(2)] = null);

(statearr_28532_28563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (17))){
var inst_28480 = (state_28514[(7)]);
var inst_28484 = cljs.core.chunk_first.call(null,inst_28480);
var inst_28485 = cljs.core.chunk_rest.call(null,inst_28480);
var inst_28486 = cljs.core.count.call(null,inst_28484);
var inst_28466 = inst_28485;
var inst_28467 = inst_28484;
var inst_28468 = inst_28486;
var inst_28469 = (0);
var state_28514__$1 = (function (){var statearr_28533 = state_28514;
(statearr_28533[(8)] = inst_28467);

(statearr_28533[(10)] = inst_28469);

(statearr_28533[(11)] = inst_28468);

(statearr_28533[(12)] = inst_28466);

return statearr_28533;
})();
var statearr_28534_28564 = state_28514__$1;
(statearr_28534_28564[(2)] = null);

(statearr_28534_28564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (3))){
var inst_28512 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28514__$1,inst_28512);
} else {
if((state_val_28515 === (12))){
var inst_28500 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28535_28565 = state_28514__$1;
(statearr_28535_28565[(2)] = inst_28500);

(statearr_28535_28565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (2))){
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(4),in$);
} else {
if((state_val_28515 === (23))){
var inst_28508 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28536_28566 = state_28514__$1;
(statearr_28536_28566[(2)] = inst_28508);

(statearr_28536_28566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (19))){
var inst_28495 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28537_28567 = state_28514__$1;
(statearr_28537_28567[(2)] = inst_28495);

(statearr_28537_28567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (11))){
var inst_28480 = (state_28514[(7)]);
var inst_28466 = (state_28514[(12)]);
var inst_28480__$1 = cljs.core.seq.call(null,inst_28466);
var state_28514__$1 = (function (){var statearr_28538 = state_28514;
(statearr_28538[(7)] = inst_28480__$1);

return statearr_28538;
})();
if(inst_28480__$1){
var statearr_28539_28568 = state_28514__$1;
(statearr_28539_28568[(1)] = (14));

} else {
var statearr_28540_28569 = state_28514__$1;
(statearr_28540_28569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (9))){
var inst_28502 = (state_28514[(2)]);
var inst_28503 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28514__$1 = (function (){var statearr_28541 = state_28514;
(statearr_28541[(15)] = inst_28502);

return statearr_28541;
})();
if(cljs.core.truth_(inst_28503)){
var statearr_28542_28570 = state_28514__$1;
(statearr_28542_28570[(1)] = (21));

} else {
var statearr_28543_28571 = state_28514__$1;
(statearr_28543_28571[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (5))){
var inst_28458 = cljs.core.async.close_BANG_.call(null,out);
var state_28514__$1 = state_28514;
var statearr_28544_28572 = state_28514__$1;
(statearr_28544_28572[(2)] = inst_28458);

(statearr_28544_28572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (14))){
var inst_28480 = (state_28514[(7)]);
var inst_28482 = cljs.core.chunked_seq_QMARK_.call(null,inst_28480);
var state_28514__$1 = state_28514;
if(inst_28482){
var statearr_28545_28573 = state_28514__$1;
(statearr_28545_28573[(1)] = (17));

} else {
var statearr_28546_28574 = state_28514__$1;
(statearr_28546_28574[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (16))){
var inst_28498 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28547_28575 = state_28514__$1;
(statearr_28547_28575[(2)] = inst_28498);

(statearr_28547_28575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (10))){
var inst_28467 = (state_28514[(8)]);
var inst_28469 = (state_28514[(10)]);
var inst_28474 = cljs.core._nth.call(null,inst_28467,inst_28469);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28514__$1,(13),out,inst_28474);
} else {
if((state_val_28515 === (18))){
var inst_28480 = (state_28514[(7)]);
var inst_28489 = cljs.core.first.call(null,inst_28480);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28514__$1,(20),out,inst_28489);
} else {
if((state_val_28515 === (8))){
var inst_28469 = (state_28514[(10)]);
var inst_28468 = (state_28514[(11)]);
var inst_28471 = (inst_28469 < inst_28468);
var inst_28472 = inst_28471;
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28472)){
var statearr_28548_28576 = state_28514__$1;
(statearr_28548_28576[(1)] = (10));

} else {
var statearr_28549_28577 = state_28514__$1;
(statearr_28549_28577[(1)] = (11));

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
});})(c__26898__auto__))
;
return ((function (switch__26808__auto__,c__26898__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_28550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28550[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__);

(statearr_28550[(1)] = (1));

return statearr_28550;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____1 = (function (state_28514){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28551){if((e28551 instanceof Object)){
var ex__26812__auto__ = e28551;
var statearr_28552_28578 = state_28514;
(statearr_28552_28578[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28579 = state_28514;
state_28514 = G__28579;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__ = function(state_28514){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____1.call(this,state_28514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto__))
})();
var state__26900__auto__ = (function (){var statearr_28553 = f__26899__auto__.call(null);
(statearr_28553[(6)] = c__26898__auto__);

return statearr_28553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto__))
);

return c__26898__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28581 = arguments.length;
switch (G__28581) {
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
var G__28584 = arguments.length;
switch (G__28584) {
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
var G__28587 = arguments.length;
switch (G__28587) {
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
var c__26898__auto___28634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___28634,out){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___28634,out){
return (function (state_28611){
var state_val_28612 = (state_28611[(1)]);
if((state_val_28612 === (7))){
var inst_28606 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28613_28635 = state_28611__$1;
(statearr_28613_28635[(2)] = inst_28606);

(statearr_28613_28635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (1))){
var inst_28588 = null;
var state_28611__$1 = (function (){var statearr_28614 = state_28611;
(statearr_28614[(7)] = inst_28588);

return statearr_28614;
})();
var statearr_28615_28636 = state_28611__$1;
(statearr_28615_28636[(2)] = null);

(statearr_28615_28636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (4))){
var inst_28591 = (state_28611[(8)]);
var inst_28591__$1 = (state_28611[(2)]);
var inst_28592 = (inst_28591__$1 == null);
var inst_28593 = cljs.core.not.call(null,inst_28592);
var state_28611__$1 = (function (){var statearr_28616 = state_28611;
(statearr_28616[(8)] = inst_28591__$1);

return statearr_28616;
})();
if(inst_28593){
var statearr_28617_28637 = state_28611__$1;
(statearr_28617_28637[(1)] = (5));

} else {
var statearr_28618_28638 = state_28611__$1;
(statearr_28618_28638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (6))){
var state_28611__$1 = state_28611;
var statearr_28619_28639 = state_28611__$1;
(statearr_28619_28639[(2)] = null);

(statearr_28619_28639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (3))){
var inst_28608 = (state_28611[(2)]);
var inst_28609 = cljs.core.async.close_BANG_.call(null,out);
var state_28611__$1 = (function (){var statearr_28620 = state_28611;
(statearr_28620[(9)] = inst_28608);

return statearr_28620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28611__$1,inst_28609);
} else {
if((state_val_28612 === (2))){
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28611__$1,(4),ch);
} else {
if((state_val_28612 === (11))){
var inst_28591 = (state_28611[(8)]);
var inst_28600 = (state_28611[(2)]);
var inst_28588 = inst_28591;
var state_28611__$1 = (function (){var statearr_28621 = state_28611;
(statearr_28621[(7)] = inst_28588);

(statearr_28621[(10)] = inst_28600);

return statearr_28621;
})();
var statearr_28622_28640 = state_28611__$1;
(statearr_28622_28640[(2)] = null);

(statearr_28622_28640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (9))){
var inst_28591 = (state_28611[(8)]);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28611__$1,(11),out,inst_28591);
} else {
if((state_val_28612 === (5))){
var inst_28588 = (state_28611[(7)]);
var inst_28591 = (state_28611[(8)]);
var inst_28595 = cljs.core._EQ_.call(null,inst_28591,inst_28588);
var state_28611__$1 = state_28611;
if(inst_28595){
var statearr_28624_28641 = state_28611__$1;
(statearr_28624_28641[(1)] = (8));

} else {
var statearr_28625_28642 = state_28611__$1;
(statearr_28625_28642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (10))){
var inst_28603 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28626_28643 = state_28611__$1;
(statearr_28626_28643[(2)] = inst_28603);

(statearr_28626_28643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (8))){
var inst_28588 = (state_28611[(7)]);
var tmp28623 = inst_28588;
var inst_28588__$1 = tmp28623;
var state_28611__$1 = (function (){var statearr_28627 = state_28611;
(statearr_28627[(7)] = inst_28588__$1);

return statearr_28627;
})();
var statearr_28628_28644 = state_28611__$1;
(statearr_28628_28644[(2)] = null);

(statearr_28628_28644[(1)] = (2));


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
});})(c__26898__auto___28634,out))
;
return ((function (switch__26808__auto__,c__26898__auto___28634,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28629[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28629[(1)] = (1));

return statearr_28629;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28611){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28630){if((e28630 instanceof Object)){
var ex__26812__auto__ = e28630;
var statearr_28631_28645 = state_28611;
(statearr_28631_28645[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28646 = state_28611;
state_28611 = G__28646;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___28634,out))
})();
var state__26900__auto__ = (function (){var statearr_28632 = f__26899__auto__.call(null);
(statearr_28632[(6)] = c__26898__auto___28634);

return statearr_28632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___28634,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28648 = arguments.length;
switch (G__28648) {
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
var c__26898__auto___28714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___28714,out){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___28714,out){
return (function (state_28686){
var state_val_28687 = (state_28686[(1)]);
if((state_val_28687 === (7))){
var inst_28682 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
var statearr_28688_28715 = state_28686__$1;
(statearr_28688_28715[(2)] = inst_28682);

(statearr_28688_28715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (1))){
var inst_28649 = (new Array(n));
var inst_28650 = inst_28649;
var inst_28651 = (0);
var state_28686__$1 = (function (){var statearr_28689 = state_28686;
(statearr_28689[(7)] = inst_28650);

(statearr_28689[(8)] = inst_28651);

return statearr_28689;
})();
var statearr_28690_28716 = state_28686__$1;
(statearr_28690_28716[(2)] = null);

(statearr_28690_28716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (4))){
var inst_28654 = (state_28686[(9)]);
var inst_28654__$1 = (state_28686[(2)]);
var inst_28655 = (inst_28654__$1 == null);
var inst_28656 = cljs.core.not.call(null,inst_28655);
var state_28686__$1 = (function (){var statearr_28691 = state_28686;
(statearr_28691[(9)] = inst_28654__$1);

return statearr_28691;
})();
if(inst_28656){
var statearr_28692_28717 = state_28686__$1;
(statearr_28692_28717[(1)] = (5));

} else {
var statearr_28693_28718 = state_28686__$1;
(statearr_28693_28718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (15))){
var inst_28676 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
var statearr_28694_28719 = state_28686__$1;
(statearr_28694_28719[(2)] = inst_28676);

(statearr_28694_28719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (13))){
var state_28686__$1 = state_28686;
var statearr_28695_28720 = state_28686__$1;
(statearr_28695_28720[(2)] = null);

(statearr_28695_28720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (6))){
var inst_28651 = (state_28686[(8)]);
var inst_28672 = (inst_28651 > (0));
var state_28686__$1 = state_28686;
if(cljs.core.truth_(inst_28672)){
var statearr_28696_28721 = state_28686__$1;
(statearr_28696_28721[(1)] = (12));

} else {
var statearr_28697_28722 = state_28686__$1;
(statearr_28697_28722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (3))){
var inst_28684 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28686__$1,inst_28684);
} else {
if((state_val_28687 === (12))){
var inst_28650 = (state_28686[(7)]);
var inst_28674 = cljs.core.vec.call(null,inst_28650);
var state_28686__$1 = state_28686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28686__$1,(15),out,inst_28674);
} else {
if((state_val_28687 === (2))){
var state_28686__$1 = state_28686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28686__$1,(4),ch);
} else {
if((state_val_28687 === (11))){
var inst_28666 = (state_28686[(2)]);
var inst_28667 = (new Array(n));
var inst_28650 = inst_28667;
var inst_28651 = (0);
var state_28686__$1 = (function (){var statearr_28698 = state_28686;
(statearr_28698[(7)] = inst_28650);

(statearr_28698[(10)] = inst_28666);

(statearr_28698[(8)] = inst_28651);

return statearr_28698;
})();
var statearr_28699_28723 = state_28686__$1;
(statearr_28699_28723[(2)] = null);

(statearr_28699_28723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (9))){
var inst_28650 = (state_28686[(7)]);
var inst_28664 = cljs.core.vec.call(null,inst_28650);
var state_28686__$1 = state_28686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28686__$1,(11),out,inst_28664);
} else {
if((state_val_28687 === (5))){
var inst_28659 = (state_28686[(11)]);
var inst_28654 = (state_28686[(9)]);
var inst_28650 = (state_28686[(7)]);
var inst_28651 = (state_28686[(8)]);
var inst_28658 = (inst_28650[inst_28651] = inst_28654);
var inst_28659__$1 = (inst_28651 + (1));
var inst_28660 = (inst_28659__$1 < n);
var state_28686__$1 = (function (){var statearr_28700 = state_28686;
(statearr_28700[(11)] = inst_28659__$1);

(statearr_28700[(12)] = inst_28658);

return statearr_28700;
})();
if(cljs.core.truth_(inst_28660)){
var statearr_28701_28724 = state_28686__$1;
(statearr_28701_28724[(1)] = (8));

} else {
var statearr_28702_28725 = state_28686__$1;
(statearr_28702_28725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (14))){
var inst_28679 = (state_28686[(2)]);
var inst_28680 = cljs.core.async.close_BANG_.call(null,out);
var state_28686__$1 = (function (){var statearr_28704 = state_28686;
(statearr_28704[(13)] = inst_28679);

return statearr_28704;
})();
var statearr_28705_28726 = state_28686__$1;
(statearr_28705_28726[(2)] = inst_28680);

(statearr_28705_28726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (10))){
var inst_28670 = (state_28686[(2)]);
var state_28686__$1 = state_28686;
var statearr_28706_28727 = state_28686__$1;
(statearr_28706_28727[(2)] = inst_28670);

(statearr_28706_28727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28687 === (8))){
var inst_28659 = (state_28686[(11)]);
var inst_28650 = (state_28686[(7)]);
var tmp28703 = inst_28650;
var inst_28650__$1 = tmp28703;
var inst_28651 = inst_28659;
var state_28686__$1 = (function (){var statearr_28707 = state_28686;
(statearr_28707[(7)] = inst_28650__$1);

(statearr_28707[(8)] = inst_28651);

return statearr_28707;
})();
var statearr_28708_28728 = state_28686__$1;
(statearr_28708_28728[(2)] = null);

(statearr_28708_28728[(1)] = (2));


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
});})(c__26898__auto___28714,out))
;
return ((function (switch__26808__auto__,c__26898__auto___28714,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28709[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28709[(1)] = (1));

return statearr_28709;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28686){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28710){if((e28710 instanceof Object)){
var ex__26812__auto__ = e28710;
var statearr_28711_28729 = state_28686;
(statearr_28711_28729[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28730 = state_28686;
state_28686 = G__28730;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___28714,out))
})();
var state__26900__auto__ = (function (){var statearr_28712 = f__26899__auto__.call(null);
(statearr_28712[(6)] = c__26898__auto___28714);

return statearr_28712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___28714,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28732 = arguments.length;
switch (G__28732) {
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
var c__26898__auto___28802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___28802,out){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___28802,out){
return (function (state_28774){
var state_val_28775 = (state_28774[(1)]);
if((state_val_28775 === (7))){
var inst_28770 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28776_28803 = state_28774__$1;
(statearr_28776_28803[(2)] = inst_28770);

(statearr_28776_28803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (1))){
var inst_28733 = [];
var inst_28734 = inst_28733;
var inst_28735 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28774__$1 = (function (){var statearr_28777 = state_28774;
(statearr_28777[(7)] = inst_28735);

(statearr_28777[(8)] = inst_28734);

return statearr_28777;
})();
var statearr_28778_28804 = state_28774__$1;
(statearr_28778_28804[(2)] = null);

(statearr_28778_28804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (4))){
var inst_28738 = (state_28774[(9)]);
var inst_28738__$1 = (state_28774[(2)]);
var inst_28739 = (inst_28738__$1 == null);
var inst_28740 = cljs.core.not.call(null,inst_28739);
var state_28774__$1 = (function (){var statearr_28779 = state_28774;
(statearr_28779[(9)] = inst_28738__$1);

return statearr_28779;
})();
if(inst_28740){
var statearr_28780_28805 = state_28774__$1;
(statearr_28780_28805[(1)] = (5));

} else {
var statearr_28781_28806 = state_28774__$1;
(statearr_28781_28806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (15))){
var inst_28764 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28782_28807 = state_28774__$1;
(statearr_28782_28807[(2)] = inst_28764);

(statearr_28782_28807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (13))){
var state_28774__$1 = state_28774;
var statearr_28783_28808 = state_28774__$1;
(statearr_28783_28808[(2)] = null);

(statearr_28783_28808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (6))){
var inst_28734 = (state_28774[(8)]);
var inst_28759 = inst_28734.length;
var inst_28760 = (inst_28759 > (0));
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28760)){
var statearr_28784_28809 = state_28774__$1;
(statearr_28784_28809[(1)] = (12));

} else {
var statearr_28785_28810 = state_28774__$1;
(statearr_28785_28810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (3))){
var inst_28772 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28774__$1,inst_28772);
} else {
if((state_val_28775 === (12))){
var inst_28734 = (state_28774[(8)]);
var inst_28762 = cljs.core.vec.call(null,inst_28734);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28774__$1,(15),out,inst_28762);
} else {
if((state_val_28775 === (2))){
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(4),ch);
} else {
if((state_val_28775 === (11))){
var inst_28738 = (state_28774[(9)]);
var inst_28742 = (state_28774[(10)]);
var inst_28752 = (state_28774[(2)]);
var inst_28753 = [];
var inst_28754 = inst_28753.push(inst_28738);
var inst_28734 = inst_28753;
var inst_28735 = inst_28742;
var state_28774__$1 = (function (){var statearr_28786 = state_28774;
(statearr_28786[(11)] = inst_28754);

(statearr_28786[(7)] = inst_28735);

(statearr_28786[(12)] = inst_28752);

(statearr_28786[(8)] = inst_28734);

return statearr_28786;
})();
var statearr_28787_28811 = state_28774__$1;
(statearr_28787_28811[(2)] = null);

(statearr_28787_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (9))){
var inst_28734 = (state_28774[(8)]);
var inst_28750 = cljs.core.vec.call(null,inst_28734);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28774__$1,(11),out,inst_28750);
} else {
if((state_val_28775 === (5))){
var inst_28738 = (state_28774[(9)]);
var inst_28742 = (state_28774[(10)]);
var inst_28735 = (state_28774[(7)]);
var inst_28742__$1 = f.call(null,inst_28738);
var inst_28743 = cljs.core._EQ_.call(null,inst_28742__$1,inst_28735);
var inst_28744 = cljs.core.keyword_identical_QMARK_.call(null,inst_28735,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28745 = ((inst_28743) || (inst_28744));
var state_28774__$1 = (function (){var statearr_28788 = state_28774;
(statearr_28788[(10)] = inst_28742__$1);

return statearr_28788;
})();
if(cljs.core.truth_(inst_28745)){
var statearr_28789_28812 = state_28774__$1;
(statearr_28789_28812[(1)] = (8));

} else {
var statearr_28790_28813 = state_28774__$1;
(statearr_28790_28813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (14))){
var inst_28767 = (state_28774[(2)]);
var inst_28768 = cljs.core.async.close_BANG_.call(null,out);
var state_28774__$1 = (function (){var statearr_28792 = state_28774;
(statearr_28792[(13)] = inst_28767);

return statearr_28792;
})();
var statearr_28793_28814 = state_28774__$1;
(statearr_28793_28814[(2)] = inst_28768);

(statearr_28793_28814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (10))){
var inst_28757 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28794_28815 = state_28774__$1;
(statearr_28794_28815[(2)] = inst_28757);

(statearr_28794_28815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (8))){
var inst_28738 = (state_28774[(9)]);
var inst_28742 = (state_28774[(10)]);
var inst_28734 = (state_28774[(8)]);
var inst_28747 = inst_28734.push(inst_28738);
var tmp28791 = inst_28734;
var inst_28734__$1 = tmp28791;
var inst_28735 = inst_28742;
var state_28774__$1 = (function (){var statearr_28795 = state_28774;
(statearr_28795[(7)] = inst_28735);

(statearr_28795[(8)] = inst_28734__$1);

(statearr_28795[(14)] = inst_28747);

return statearr_28795;
})();
var statearr_28796_28816 = state_28774__$1;
(statearr_28796_28816[(2)] = null);

(statearr_28796_28816[(1)] = (2));


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
});})(c__26898__auto___28802,out))
;
return ((function (switch__26808__auto__,c__26898__auto___28802,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28797[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28797[(1)] = (1));

return statearr_28797;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28774){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28798){if((e28798 instanceof Object)){
var ex__26812__auto__ = e28798;
var statearr_28799_28817 = state_28774;
(statearr_28799_28817[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28818 = state_28774;
state_28774 = G__28818;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___28802,out))
})();
var state__26900__auto__ = (function (){var statearr_28800 = f__26899__auto__.call(null);
(statearr_28800[(6)] = c__26898__auto___28802);

return statearr_28800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___28802,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525289327941

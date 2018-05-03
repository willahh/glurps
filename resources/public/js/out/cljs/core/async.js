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
var G__79075 = arguments.length;
switch (G__79075) {
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
if(typeof cljs.core.async.t_cljs$core$async79076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79076 = (function (f,blockable,meta79077){
this.f = f;
this.blockable = blockable;
this.meta79077 = meta79077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79078,meta79077__$1){
var self__ = this;
var _79078__$1 = this;
return (new cljs.core.async.t_cljs$core$async79076(self__.f,self__.blockable,meta79077__$1));
});

cljs.core.async.t_cljs$core$async79076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79078){
var self__ = this;
var _79078__$1 = this;
return self__.meta79077;
});

cljs.core.async.t_cljs$core$async79076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async79076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async79076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async79076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta79077","meta79077",2071829993,null)], null);
});

cljs.core.async.t_cljs$core$async79076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79076";

cljs.core.async.t_cljs$core$async79076.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async79076");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79076.
 */
cljs.core.async.__GT_t_cljs$core$async79076 = (function cljs$core$async$__GT_t_cljs$core$async79076(f__$1,blockable__$1,meta79077){
return (new cljs.core.async.t_cljs$core$async79076(f__$1,blockable__$1,meta79077));
});

}

return (new cljs.core.async.t_cljs$core$async79076(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__79082 = arguments.length;
switch (G__79082) {
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
var G__79085 = arguments.length;
switch (G__79085) {
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
var G__79088 = arguments.length;
switch (G__79088) {
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
var val_79090 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_79090);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_79090,ret){
return (function (){
return fn1.call(null,val_79090);
});})(val_79090,ret))
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
var G__79092 = arguments.length;
switch (G__79092) {
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
var n__4376__auto___79094 = n;
var x_79095 = (0);
while(true){
if((x_79095 < n__4376__auto___79094)){
(a[x_79095] = (0));

var G__79096 = (x_79095 + (1));
x_79095 = G__79096;
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

var G__79097 = (i + (1));
i = G__79097;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async79098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79098 = (function (flag,meta79099){
this.flag = flag;
this.meta79099 = meta79099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_79100,meta79099__$1){
var self__ = this;
var _79100__$1 = this;
return (new cljs.core.async.t_cljs$core$async79098(self__.flag,meta79099__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async79098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_79100){
var self__ = this;
var _79100__$1 = this;
return self__.meta79099;
});})(flag))
;

cljs.core.async.t_cljs$core$async79098.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async79098.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async79098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async79098.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta79099","meta79099",-1089186020,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async79098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79098";

cljs.core.async.t_cljs$core$async79098.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async79098");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79098.
 */
cljs.core.async.__GT_t_cljs$core$async79098 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async79098(flag__$1,meta79099){
return (new cljs.core.async.t_cljs$core$async79098(flag__$1,meta79099));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async79098(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async79101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79101 = (function (flag,cb,meta79102){
this.flag = flag;
this.cb = cb;
this.meta79102 = meta79102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79103,meta79102__$1){
var self__ = this;
var _79103__$1 = this;
return (new cljs.core.async.t_cljs$core$async79101(self__.flag,self__.cb,meta79102__$1));
});

cljs.core.async.t_cljs$core$async79101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79103){
var self__ = this;
var _79103__$1 = this;
return self__.meta79102;
});

cljs.core.async.t_cljs$core$async79101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async79101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async79101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async79101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta79102","meta79102",1168309178,null)], null);
});

cljs.core.async.t_cljs$core$async79101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79101";

cljs.core.async.t_cljs$core$async79101.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async79101");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79101.
 */
cljs.core.async.__GT_t_cljs$core$async79101 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async79101(flag__$1,cb__$1,meta79102){
return (new cljs.core.async.t_cljs$core$async79101(flag__$1,cb__$1,meta79102));
});

}

return (new cljs.core.async.t_cljs$core$async79101(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__79104_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79104_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__79105_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79105_SHARP_,port], null));
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
var G__79106 = (i + (1));
i = G__79106;
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
var len__4499__auto___79112 = arguments.length;
var i__4500__auto___79113 = (0);
while(true){
if((i__4500__auto___79113 < len__4499__auto___79112)){
args__4502__auto__.push((arguments[i__4500__auto___79113]));

var G__79114 = (i__4500__auto___79113 + (1));
i__4500__auto___79113 = G__79114;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__79109){
var map__79110 = p__79109;
var map__79110__$1 = ((((!((map__79110 == null)))?(((((map__79110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79110):map__79110);
var opts = map__79110__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq79107){
var G__79108 = cljs.core.first.call(null,seq79107);
var seq79107__$1 = cljs.core.next.call(null,seq79107);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79108,seq79107__$1);
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
var G__79116 = arguments.length;
switch (G__79116) {
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
var c__27974__auto___79162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___79162){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___79162){
return (function (state_79140){
var state_val_79141 = (state_79140[(1)]);
if((state_val_79141 === (7))){
var inst_79136 = (state_79140[(2)]);
var state_79140__$1 = state_79140;
var statearr_79142_79163 = state_79140__$1;
(statearr_79142_79163[(2)] = inst_79136);

(statearr_79142_79163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (1))){
var state_79140__$1 = state_79140;
var statearr_79143_79164 = state_79140__$1;
(statearr_79143_79164[(2)] = null);

(statearr_79143_79164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (4))){
var inst_79119 = (state_79140[(7)]);
var inst_79119__$1 = (state_79140[(2)]);
var inst_79120 = (inst_79119__$1 == null);
var state_79140__$1 = (function (){var statearr_79144 = state_79140;
(statearr_79144[(7)] = inst_79119__$1);

return statearr_79144;
})();
if(cljs.core.truth_(inst_79120)){
var statearr_79145_79165 = state_79140__$1;
(statearr_79145_79165[(1)] = (5));

} else {
var statearr_79146_79166 = state_79140__$1;
(statearr_79146_79166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (13))){
var state_79140__$1 = state_79140;
var statearr_79147_79167 = state_79140__$1;
(statearr_79147_79167[(2)] = null);

(statearr_79147_79167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (6))){
var inst_79119 = (state_79140[(7)]);
var state_79140__$1 = state_79140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79140__$1,(11),to,inst_79119);
} else {
if((state_val_79141 === (3))){
var inst_79138 = (state_79140[(2)]);
var state_79140__$1 = state_79140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79140__$1,inst_79138);
} else {
if((state_val_79141 === (12))){
var state_79140__$1 = state_79140;
var statearr_79148_79168 = state_79140__$1;
(statearr_79148_79168[(2)] = null);

(statearr_79148_79168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (2))){
var state_79140__$1 = state_79140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79140__$1,(4),from);
} else {
if((state_val_79141 === (11))){
var inst_79129 = (state_79140[(2)]);
var state_79140__$1 = state_79140;
if(cljs.core.truth_(inst_79129)){
var statearr_79149_79169 = state_79140__$1;
(statearr_79149_79169[(1)] = (12));

} else {
var statearr_79150_79170 = state_79140__$1;
(statearr_79150_79170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (9))){
var state_79140__$1 = state_79140;
var statearr_79151_79171 = state_79140__$1;
(statearr_79151_79171[(2)] = null);

(statearr_79151_79171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (5))){
var state_79140__$1 = state_79140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79152_79172 = state_79140__$1;
(statearr_79152_79172[(1)] = (8));

} else {
var statearr_79153_79173 = state_79140__$1;
(statearr_79153_79173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (14))){
var inst_79134 = (state_79140[(2)]);
var state_79140__$1 = state_79140;
var statearr_79154_79174 = state_79140__$1;
(statearr_79154_79174[(2)] = inst_79134);

(statearr_79154_79174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (10))){
var inst_79126 = (state_79140[(2)]);
var state_79140__$1 = state_79140;
var statearr_79155_79175 = state_79140__$1;
(statearr_79155_79175[(2)] = inst_79126);

(statearr_79155_79175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79141 === (8))){
var inst_79123 = cljs.core.async.close_BANG_.call(null,to);
var state_79140__$1 = state_79140;
var statearr_79156_79176 = state_79140__$1;
(statearr_79156_79176[(2)] = inst_79123);

(statearr_79156_79176[(1)] = (10));


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
});})(c__27974__auto___79162))
;
return ((function (switch__27884__auto__,c__27974__auto___79162){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_79157 = [null,null,null,null,null,null,null,null];
(statearr_79157[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_79157[(1)] = (1));

return statearr_79157;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_79140){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79158){if((e79158 instanceof Object)){
var ex__27888__auto__ = e79158;
var statearr_79159_79177 = state_79140;
(statearr_79159_79177[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79178 = state_79140;
state_79140 = G__79178;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_79140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_79140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___79162))
})();
var state__27976__auto__ = (function (){var statearr_79160 = f__27975__auto__.call(null);
(statearr_79160[(6)] = c__27974__auto___79162);

return statearr_79160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___79162))
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
return (function (p__79179){
var vec__79180 = p__79179;
var v = cljs.core.nth.call(null,vec__79180,(0),null);
var p = cljs.core.nth.call(null,vec__79180,(1),null);
var job = vec__79180;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27974__auto___79351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___79351,res,vec__79180,v,p,job,jobs,results){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___79351,res,vec__79180,v,p,job,jobs,results){
return (function (state_79187){
var state_val_79188 = (state_79187[(1)]);
if((state_val_79188 === (1))){
var state_79187__$1 = state_79187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79187__$1,(2),res,v);
} else {
if((state_val_79188 === (2))){
var inst_79184 = (state_79187[(2)]);
var inst_79185 = cljs.core.async.close_BANG_.call(null,res);
var state_79187__$1 = (function (){var statearr_79189 = state_79187;
(statearr_79189[(7)] = inst_79184);

return statearr_79189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79187__$1,inst_79185);
} else {
return null;
}
}
});})(c__27974__auto___79351,res,vec__79180,v,p,job,jobs,results))
;
return ((function (switch__27884__auto__,c__27974__auto___79351,res,vec__79180,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_79190 = [null,null,null,null,null,null,null,null];
(statearr_79190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_79190[(1)] = (1));

return statearr_79190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_79187){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79191){if((e79191 instanceof Object)){
var ex__27888__auto__ = e79191;
var statearr_79192_79352 = state_79187;
(statearr_79192_79352[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79353 = state_79187;
state_79187 = G__79353;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_79187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_79187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___79351,res,vec__79180,v,p,job,jobs,results))
})();
var state__27976__auto__ = (function (){var statearr_79193 = f__27975__auto__.call(null);
(statearr_79193[(6)] = c__27974__auto___79351);

return statearr_79193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___79351,res,vec__79180,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__79194){
var vec__79195 = p__79194;
var v = cljs.core.nth.call(null,vec__79195,(0),null);
var p = cljs.core.nth.call(null,vec__79195,(1),null);
var job = vec__79195;
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
var n__4376__auto___79354 = n;
var __79355 = (0);
while(true){
if((__79355 < n__4376__auto___79354)){
var G__79198_79356 = type;
var G__79198_79357__$1 = (((G__79198_79356 instanceof cljs.core.Keyword))?G__79198_79356.fqn:null);
switch (G__79198_79357__$1) {
case "compute":
var c__27974__auto___79359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__79355,c__27974__auto___79359,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (__79355,c__27974__auto___79359,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async){
return (function (state_79211){
var state_val_79212 = (state_79211[(1)]);
if((state_val_79212 === (1))){
var state_79211__$1 = state_79211;
var statearr_79213_79360 = state_79211__$1;
(statearr_79213_79360[(2)] = null);

(statearr_79213_79360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79212 === (2))){
var state_79211__$1 = state_79211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79211__$1,(4),jobs);
} else {
if((state_val_79212 === (3))){
var inst_79209 = (state_79211[(2)]);
var state_79211__$1 = state_79211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79211__$1,inst_79209);
} else {
if((state_val_79212 === (4))){
var inst_79201 = (state_79211[(2)]);
var inst_79202 = process__$1.call(null,inst_79201);
var state_79211__$1 = state_79211;
if(cljs.core.truth_(inst_79202)){
var statearr_79214_79361 = state_79211__$1;
(statearr_79214_79361[(1)] = (5));

} else {
var statearr_79215_79362 = state_79211__$1;
(statearr_79215_79362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79212 === (5))){
var state_79211__$1 = state_79211;
var statearr_79216_79363 = state_79211__$1;
(statearr_79216_79363[(2)] = null);

(statearr_79216_79363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79212 === (6))){
var state_79211__$1 = state_79211;
var statearr_79217_79364 = state_79211__$1;
(statearr_79217_79364[(2)] = null);

(statearr_79217_79364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79212 === (7))){
var inst_79207 = (state_79211[(2)]);
var state_79211__$1 = state_79211;
var statearr_79218_79365 = state_79211__$1;
(statearr_79218_79365[(2)] = inst_79207);

(statearr_79218_79365[(1)] = (3));


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
});})(__79355,c__27974__auto___79359,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async))
;
return ((function (__79355,switch__27884__auto__,c__27974__auto___79359,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_79219 = [null,null,null,null,null,null,null];
(statearr_79219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_79219[(1)] = (1));

return statearr_79219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_79211){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79220){if((e79220 instanceof Object)){
var ex__27888__auto__ = e79220;
var statearr_79221_79366 = state_79211;
(statearr_79221_79366[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79367 = state_79211;
state_79211 = G__79367;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_79211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_79211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(__79355,switch__27884__auto__,c__27974__auto___79359,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async))
})();
var state__27976__auto__ = (function (){var statearr_79222 = f__27975__auto__.call(null);
(statearr_79222[(6)] = c__27974__auto___79359);

return statearr_79222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(__79355,c__27974__auto___79359,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async))
);


break;
case "async":
var c__27974__auto___79368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__79355,c__27974__auto___79368,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (__79355,c__27974__auto___79368,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async){
return (function (state_79235){
var state_val_79236 = (state_79235[(1)]);
if((state_val_79236 === (1))){
var state_79235__$1 = state_79235;
var statearr_79237_79369 = state_79235__$1;
(statearr_79237_79369[(2)] = null);

(statearr_79237_79369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79236 === (2))){
var state_79235__$1 = state_79235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79235__$1,(4),jobs);
} else {
if((state_val_79236 === (3))){
var inst_79233 = (state_79235[(2)]);
var state_79235__$1 = state_79235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79235__$1,inst_79233);
} else {
if((state_val_79236 === (4))){
var inst_79225 = (state_79235[(2)]);
var inst_79226 = async.call(null,inst_79225);
var state_79235__$1 = state_79235;
if(cljs.core.truth_(inst_79226)){
var statearr_79238_79370 = state_79235__$1;
(statearr_79238_79370[(1)] = (5));

} else {
var statearr_79239_79371 = state_79235__$1;
(statearr_79239_79371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79236 === (5))){
var state_79235__$1 = state_79235;
var statearr_79240_79372 = state_79235__$1;
(statearr_79240_79372[(2)] = null);

(statearr_79240_79372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79236 === (6))){
var state_79235__$1 = state_79235;
var statearr_79241_79373 = state_79235__$1;
(statearr_79241_79373[(2)] = null);

(statearr_79241_79373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79236 === (7))){
var inst_79231 = (state_79235[(2)]);
var state_79235__$1 = state_79235;
var statearr_79242_79374 = state_79235__$1;
(statearr_79242_79374[(2)] = inst_79231);

(statearr_79242_79374[(1)] = (3));


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
});})(__79355,c__27974__auto___79368,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async))
;
return ((function (__79355,switch__27884__auto__,c__27974__auto___79368,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_79243 = [null,null,null,null,null,null,null];
(statearr_79243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_79243[(1)] = (1));

return statearr_79243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_79235){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79244){if((e79244 instanceof Object)){
var ex__27888__auto__ = e79244;
var statearr_79245_79375 = state_79235;
(statearr_79245_79375[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79376 = state_79235;
state_79235 = G__79376;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_79235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_79235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(__79355,switch__27884__auto__,c__27974__auto___79368,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async))
})();
var state__27976__auto__ = (function (){var statearr_79246 = f__27975__auto__.call(null);
(statearr_79246[(6)] = c__27974__auto___79368);

return statearr_79246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(__79355,c__27974__auto___79368,G__79198_79356,G__79198_79357__$1,n__4376__auto___79354,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79198_79357__$1)].join('')));

}

var G__79377 = (__79355 + (1));
__79355 = G__79377;
continue;
} else {
}
break;
}

var c__27974__auto___79378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___79378,jobs,results,process__$1,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___79378,jobs,results,process__$1,async){
return (function (state_79268){
var state_val_79269 = (state_79268[(1)]);
if((state_val_79269 === (1))){
var state_79268__$1 = state_79268;
var statearr_79270_79379 = state_79268__$1;
(statearr_79270_79379[(2)] = null);

(statearr_79270_79379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79269 === (2))){
var state_79268__$1 = state_79268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79268__$1,(4),from);
} else {
if((state_val_79269 === (3))){
var inst_79266 = (state_79268[(2)]);
var state_79268__$1 = state_79268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79268__$1,inst_79266);
} else {
if((state_val_79269 === (4))){
var inst_79249 = (state_79268[(7)]);
var inst_79249__$1 = (state_79268[(2)]);
var inst_79250 = (inst_79249__$1 == null);
var state_79268__$1 = (function (){var statearr_79271 = state_79268;
(statearr_79271[(7)] = inst_79249__$1);

return statearr_79271;
})();
if(cljs.core.truth_(inst_79250)){
var statearr_79272_79380 = state_79268__$1;
(statearr_79272_79380[(1)] = (5));

} else {
var statearr_79273_79381 = state_79268__$1;
(statearr_79273_79381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79269 === (5))){
var inst_79252 = cljs.core.async.close_BANG_.call(null,jobs);
var state_79268__$1 = state_79268;
var statearr_79274_79382 = state_79268__$1;
(statearr_79274_79382[(2)] = inst_79252);

(statearr_79274_79382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79269 === (6))){
var inst_79254 = (state_79268[(8)]);
var inst_79249 = (state_79268[(7)]);
var inst_79254__$1 = cljs.core.async.chan.call(null,(1));
var inst_79255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_79256 = [inst_79249,inst_79254__$1];
var inst_79257 = (new cljs.core.PersistentVector(null,2,(5),inst_79255,inst_79256,null));
var state_79268__$1 = (function (){var statearr_79275 = state_79268;
(statearr_79275[(8)] = inst_79254__$1);

return statearr_79275;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79268__$1,(8),jobs,inst_79257);
} else {
if((state_val_79269 === (7))){
var inst_79264 = (state_79268[(2)]);
var state_79268__$1 = state_79268;
var statearr_79276_79383 = state_79268__$1;
(statearr_79276_79383[(2)] = inst_79264);

(statearr_79276_79383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79269 === (8))){
var inst_79254 = (state_79268[(8)]);
var inst_79259 = (state_79268[(2)]);
var state_79268__$1 = (function (){var statearr_79277 = state_79268;
(statearr_79277[(9)] = inst_79259);

return statearr_79277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79268__$1,(9),results,inst_79254);
} else {
if((state_val_79269 === (9))){
var inst_79261 = (state_79268[(2)]);
var state_79268__$1 = (function (){var statearr_79278 = state_79268;
(statearr_79278[(10)] = inst_79261);

return statearr_79278;
})();
var statearr_79279_79384 = state_79268__$1;
(statearr_79279_79384[(2)] = null);

(statearr_79279_79384[(1)] = (2));


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
});})(c__27974__auto___79378,jobs,results,process__$1,async))
;
return ((function (switch__27884__auto__,c__27974__auto___79378,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0 = (function (){
var statearr_79280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_79280[(1)] = (1));

return statearr_79280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_79268){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79281){if((e79281 instanceof Object)){
var ex__27888__auto__ = e79281;
var statearr_79282_79385 = state_79268;
(statearr_79282_79385[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79386 = state_79268;
state_79268 = G__79386;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_79268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_79268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___79378,jobs,results,process__$1,async))
})();
var state__27976__auto__ = (function (){var statearr_79283 = f__27975__auto__.call(null);
(statearr_79283[(6)] = c__27974__auto___79378);

return statearr_79283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___79378,jobs,results,process__$1,async))
);


var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__,jobs,results,process__$1,async){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__,jobs,results,process__$1,async){
return (function (state_79321){
var state_val_79322 = (state_79321[(1)]);
if((state_val_79322 === (7))){
var inst_79317 = (state_79321[(2)]);
var state_79321__$1 = state_79321;
var statearr_79323_79387 = state_79321__$1;
(statearr_79323_79387[(2)] = inst_79317);

(statearr_79323_79387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (20))){
var state_79321__$1 = state_79321;
var statearr_79324_79388 = state_79321__$1;
(statearr_79324_79388[(2)] = null);

(statearr_79324_79388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (1))){
var state_79321__$1 = state_79321;
var statearr_79325_79389 = state_79321__$1;
(statearr_79325_79389[(2)] = null);

(statearr_79325_79389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (4))){
var inst_79286 = (state_79321[(7)]);
var inst_79286__$1 = (state_79321[(2)]);
var inst_79287 = (inst_79286__$1 == null);
var state_79321__$1 = (function (){var statearr_79326 = state_79321;
(statearr_79326[(7)] = inst_79286__$1);

return statearr_79326;
})();
if(cljs.core.truth_(inst_79287)){
var statearr_79327_79390 = state_79321__$1;
(statearr_79327_79390[(1)] = (5));

} else {
var statearr_79328_79391 = state_79321__$1;
(statearr_79328_79391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (15))){
var inst_79299 = (state_79321[(8)]);
var state_79321__$1 = state_79321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79321__$1,(18),to,inst_79299);
} else {
if((state_val_79322 === (21))){
var inst_79312 = (state_79321[(2)]);
var state_79321__$1 = state_79321;
var statearr_79329_79392 = state_79321__$1;
(statearr_79329_79392[(2)] = inst_79312);

(statearr_79329_79392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (13))){
var inst_79314 = (state_79321[(2)]);
var state_79321__$1 = (function (){var statearr_79330 = state_79321;
(statearr_79330[(9)] = inst_79314);

return statearr_79330;
})();
var statearr_79331_79393 = state_79321__$1;
(statearr_79331_79393[(2)] = null);

(statearr_79331_79393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (6))){
var inst_79286 = (state_79321[(7)]);
var state_79321__$1 = state_79321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79321__$1,(11),inst_79286);
} else {
if((state_val_79322 === (17))){
var inst_79307 = (state_79321[(2)]);
var state_79321__$1 = state_79321;
if(cljs.core.truth_(inst_79307)){
var statearr_79332_79394 = state_79321__$1;
(statearr_79332_79394[(1)] = (19));

} else {
var statearr_79333_79395 = state_79321__$1;
(statearr_79333_79395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (3))){
var inst_79319 = (state_79321[(2)]);
var state_79321__$1 = state_79321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79321__$1,inst_79319);
} else {
if((state_val_79322 === (12))){
var inst_79296 = (state_79321[(10)]);
var state_79321__$1 = state_79321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79321__$1,(14),inst_79296);
} else {
if((state_val_79322 === (2))){
var state_79321__$1 = state_79321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79321__$1,(4),results);
} else {
if((state_val_79322 === (19))){
var state_79321__$1 = state_79321;
var statearr_79334_79396 = state_79321__$1;
(statearr_79334_79396[(2)] = null);

(statearr_79334_79396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (11))){
var inst_79296 = (state_79321[(2)]);
var state_79321__$1 = (function (){var statearr_79335 = state_79321;
(statearr_79335[(10)] = inst_79296);

return statearr_79335;
})();
var statearr_79336_79397 = state_79321__$1;
(statearr_79336_79397[(2)] = null);

(statearr_79336_79397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (9))){
var state_79321__$1 = state_79321;
var statearr_79337_79398 = state_79321__$1;
(statearr_79337_79398[(2)] = null);

(statearr_79337_79398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (5))){
var state_79321__$1 = state_79321;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79338_79399 = state_79321__$1;
(statearr_79338_79399[(1)] = (8));

} else {
var statearr_79339_79400 = state_79321__$1;
(statearr_79339_79400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (14))){
var inst_79301 = (state_79321[(11)]);
var inst_79299 = (state_79321[(8)]);
var inst_79299__$1 = (state_79321[(2)]);
var inst_79300 = (inst_79299__$1 == null);
var inst_79301__$1 = cljs.core.not.call(null,inst_79300);
var state_79321__$1 = (function (){var statearr_79340 = state_79321;
(statearr_79340[(11)] = inst_79301__$1);

(statearr_79340[(8)] = inst_79299__$1);

return statearr_79340;
})();
if(inst_79301__$1){
var statearr_79341_79401 = state_79321__$1;
(statearr_79341_79401[(1)] = (15));

} else {
var statearr_79342_79402 = state_79321__$1;
(statearr_79342_79402[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (16))){
var inst_79301 = (state_79321[(11)]);
var state_79321__$1 = state_79321;
var statearr_79343_79403 = state_79321__$1;
(statearr_79343_79403[(2)] = inst_79301);

(statearr_79343_79403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (10))){
var inst_79293 = (state_79321[(2)]);
var state_79321__$1 = state_79321;
var statearr_79344_79404 = state_79321__$1;
(statearr_79344_79404[(2)] = inst_79293);

(statearr_79344_79404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (18))){
var inst_79304 = (state_79321[(2)]);
var state_79321__$1 = state_79321;
var statearr_79345_79405 = state_79321__$1;
(statearr_79345_79405[(2)] = inst_79304);

(statearr_79345_79405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79322 === (8))){
var inst_79290 = cljs.core.async.close_BANG_.call(null,to);
var state_79321__$1 = state_79321;
var statearr_79346_79406 = state_79321__$1;
(statearr_79346_79406[(2)] = inst_79290);

(statearr_79346_79406[(1)] = (10));


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
var statearr_79347 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__);

(statearr_79347[(1)] = (1));

return statearr_79347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1 = (function (state_79321){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79348){if((e79348 instanceof Object)){
var ex__27888__auto__ = e79348;
var statearr_79349_79407 = state_79321;
(statearr_79349_79407[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79408 = state_79321;
state_79321 = G__79408;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__ = function(state_79321){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1.call(this,state_79321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,jobs,results,process__$1,async))
})();
var state__27976__auto__ = (function (){var statearr_79350 = f__27975__auto__.call(null);
(statearr_79350[(6)] = c__27974__auto__);

return statearr_79350;
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
var G__79410 = arguments.length;
switch (G__79410) {
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
var G__79413 = arguments.length;
switch (G__79413) {
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
var G__79416 = arguments.length;
switch (G__79416) {
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
var c__27974__auto___79465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___79465,tc,fc){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___79465,tc,fc){
return (function (state_79442){
var state_val_79443 = (state_79442[(1)]);
if((state_val_79443 === (7))){
var inst_79438 = (state_79442[(2)]);
var state_79442__$1 = state_79442;
var statearr_79444_79466 = state_79442__$1;
(statearr_79444_79466[(2)] = inst_79438);

(statearr_79444_79466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (1))){
var state_79442__$1 = state_79442;
var statearr_79445_79467 = state_79442__$1;
(statearr_79445_79467[(2)] = null);

(statearr_79445_79467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (4))){
var inst_79419 = (state_79442[(7)]);
var inst_79419__$1 = (state_79442[(2)]);
var inst_79420 = (inst_79419__$1 == null);
var state_79442__$1 = (function (){var statearr_79446 = state_79442;
(statearr_79446[(7)] = inst_79419__$1);

return statearr_79446;
})();
if(cljs.core.truth_(inst_79420)){
var statearr_79447_79468 = state_79442__$1;
(statearr_79447_79468[(1)] = (5));

} else {
var statearr_79448_79469 = state_79442__$1;
(statearr_79448_79469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (13))){
var state_79442__$1 = state_79442;
var statearr_79449_79470 = state_79442__$1;
(statearr_79449_79470[(2)] = null);

(statearr_79449_79470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (6))){
var inst_79419 = (state_79442[(7)]);
var inst_79425 = p.call(null,inst_79419);
var state_79442__$1 = state_79442;
if(cljs.core.truth_(inst_79425)){
var statearr_79450_79471 = state_79442__$1;
(statearr_79450_79471[(1)] = (9));

} else {
var statearr_79451_79472 = state_79442__$1;
(statearr_79451_79472[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (3))){
var inst_79440 = (state_79442[(2)]);
var state_79442__$1 = state_79442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79442__$1,inst_79440);
} else {
if((state_val_79443 === (12))){
var state_79442__$1 = state_79442;
var statearr_79452_79473 = state_79442__$1;
(statearr_79452_79473[(2)] = null);

(statearr_79452_79473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (2))){
var state_79442__$1 = state_79442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79442__$1,(4),ch);
} else {
if((state_val_79443 === (11))){
var inst_79419 = (state_79442[(7)]);
var inst_79429 = (state_79442[(2)]);
var state_79442__$1 = state_79442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79442__$1,(8),inst_79429,inst_79419);
} else {
if((state_val_79443 === (9))){
var state_79442__$1 = state_79442;
var statearr_79453_79474 = state_79442__$1;
(statearr_79453_79474[(2)] = tc);

(statearr_79453_79474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (5))){
var inst_79422 = cljs.core.async.close_BANG_.call(null,tc);
var inst_79423 = cljs.core.async.close_BANG_.call(null,fc);
var state_79442__$1 = (function (){var statearr_79454 = state_79442;
(statearr_79454[(8)] = inst_79422);

return statearr_79454;
})();
var statearr_79455_79475 = state_79442__$1;
(statearr_79455_79475[(2)] = inst_79423);

(statearr_79455_79475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (14))){
var inst_79436 = (state_79442[(2)]);
var state_79442__$1 = state_79442;
var statearr_79456_79476 = state_79442__$1;
(statearr_79456_79476[(2)] = inst_79436);

(statearr_79456_79476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (10))){
var state_79442__$1 = state_79442;
var statearr_79457_79477 = state_79442__$1;
(statearr_79457_79477[(2)] = fc);

(statearr_79457_79477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79443 === (8))){
var inst_79431 = (state_79442[(2)]);
var state_79442__$1 = state_79442;
if(cljs.core.truth_(inst_79431)){
var statearr_79458_79478 = state_79442__$1;
(statearr_79458_79478[(1)] = (12));

} else {
var statearr_79459_79479 = state_79442__$1;
(statearr_79459_79479[(1)] = (13));

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
});})(c__27974__auto___79465,tc,fc))
;
return ((function (switch__27884__auto__,c__27974__auto___79465,tc,fc){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_79460 = [null,null,null,null,null,null,null,null,null];
(statearr_79460[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_79460[(1)] = (1));

return statearr_79460;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_79442){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79461){if((e79461 instanceof Object)){
var ex__27888__auto__ = e79461;
var statearr_79462_79480 = state_79442;
(statearr_79462_79480[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79481 = state_79442;
state_79442 = G__79481;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_79442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_79442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___79465,tc,fc))
})();
var state__27976__auto__ = (function (){var statearr_79463 = f__27975__auto__.call(null);
(statearr_79463[(6)] = c__27974__auto___79465);

return statearr_79463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___79465,tc,fc))
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
return (function (state_79502){
var state_val_79503 = (state_79502[(1)]);
if((state_val_79503 === (7))){
var inst_79498 = (state_79502[(2)]);
var state_79502__$1 = state_79502;
var statearr_79504_79522 = state_79502__$1;
(statearr_79504_79522[(2)] = inst_79498);

(statearr_79504_79522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79503 === (1))){
var inst_79482 = init;
var state_79502__$1 = (function (){var statearr_79505 = state_79502;
(statearr_79505[(7)] = inst_79482);

return statearr_79505;
})();
var statearr_79506_79523 = state_79502__$1;
(statearr_79506_79523[(2)] = null);

(statearr_79506_79523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79503 === (4))){
var inst_79485 = (state_79502[(8)]);
var inst_79485__$1 = (state_79502[(2)]);
var inst_79486 = (inst_79485__$1 == null);
var state_79502__$1 = (function (){var statearr_79507 = state_79502;
(statearr_79507[(8)] = inst_79485__$1);

return statearr_79507;
})();
if(cljs.core.truth_(inst_79486)){
var statearr_79508_79524 = state_79502__$1;
(statearr_79508_79524[(1)] = (5));

} else {
var statearr_79509_79525 = state_79502__$1;
(statearr_79509_79525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79503 === (6))){
var inst_79485 = (state_79502[(8)]);
var inst_79489 = (state_79502[(9)]);
var inst_79482 = (state_79502[(7)]);
var inst_79489__$1 = f.call(null,inst_79482,inst_79485);
var inst_79490 = cljs.core.reduced_QMARK_.call(null,inst_79489__$1);
var state_79502__$1 = (function (){var statearr_79510 = state_79502;
(statearr_79510[(9)] = inst_79489__$1);

return statearr_79510;
})();
if(inst_79490){
var statearr_79511_79526 = state_79502__$1;
(statearr_79511_79526[(1)] = (8));

} else {
var statearr_79512_79527 = state_79502__$1;
(statearr_79512_79527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79503 === (3))){
var inst_79500 = (state_79502[(2)]);
var state_79502__$1 = state_79502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79502__$1,inst_79500);
} else {
if((state_val_79503 === (2))){
var state_79502__$1 = state_79502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79502__$1,(4),ch);
} else {
if((state_val_79503 === (9))){
var inst_79489 = (state_79502[(9)]);
var inst_79482 = inst_79489;
var state_79502__$1 = (function (){var statearr_79513 = state_79502;
(statearr_79513[(7)] = inst_79482);

return statearr_79513;
})();
var statearr_79514_79528 = state_79502__$1;
(statearr_79514_79528[(2)] = null);

(statearr_79514_79528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79503 === (5))){
var inst_79482 = (state_79502[(7)]);
var state_79502__$1 = state_79502;
var statearr_79515_79529 = state_79502__$1;
(statearr_79515_79529[(2)] = inst_79482);

(statearr_79515_79529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79503 === (10))){
var inst_79496 = (state_79502[(2)]);
var state_79502__$1 = state_79502;
var statearr_79516_79530 = state_79502__$1;
(statearr_79516_79530[(2)] = inst_79496);

(statearr_79516_79530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79503 === (8))){
var inst_79489 = (state_79502[(9)]);
var inst_79492 = cljs.core.deref.call(null,inst_79489);
var state_79502__$1 = state_79502;
var statearr_79517_79531 = state_79502__$1;
(statearr_79517_79531[(2)] = inst_79492);

(statearr_79517_79531[(1)] = (10));


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
var statearr_79518 = [null,null,null,null,null,null,null,null,null,null];
(statearr_79518[(0)] = cljs$core$async$reduce_$_state_machine__27885__auto__);

(statearr_79518[(1)] = (1));

return statearr_79518;
});
var cljs$core$async$reduce_$_state_machine__27885__auto____1 = (function (state_79502){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79519){if((e79519 instanceof Object)){
var ex__27888__auto__ = e79519;
var statearr_79520_79532 = state_79502;
(statearr_79520_79532[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79533 = state_79502;
state_79502 = G__79533;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27885__auto__ = function(state_79502){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27885__auto____1.call(this,state_79502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27885__auto____0;
cljs$core$async$reduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27885__auto____1;
return cljs$core$async$reduce_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_79521 = f__27975__auto__.call(null);
(statearr_79521[(6)] = c__27974__auto__);

return statearr_79521;
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
return (function (state_79539){
var state_val_79540 = (state_79539[(1)]);
if((state_val_79540 === (1))){
var inst_79534 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_79539__$1 = state_79539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79539__$1,(2),inst_79534);
} else {
if((state_val_79540 === (2))){
var inst_79536 = (state_79539[(2)]);
var inst_79537 = f__$1.call(null,inst_79536);
var state_79539__$1 = state_79539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79539__$1,inst_79537);
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
var statearr_79541 = [null,null,null,null,null,null,null];
(statearr_79541[(0)] = cljs$core$async$transduce_$_state_machine__27885__auto__);

(statearr_79541[(1)] = (1));

return statearr_79541;
});
var cljs$core$async$transduce_$_state_machine__27885__auto____1 = (function (state_79539){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79542){if((e79542 instanceof Object)){
var ex__27888__auto__ = e79542;
var statearr_79543_79545 = state_79539;
(statearr_79543_79545[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79546 = state_79539;
state_79539 = G__79546;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27885__auto__ = function(state_79539){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27885__auto____1.call(this,state_79539);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27885__auto____0;
cljs$core$async$transduce_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27885__auto____1;
return cljs$core$async$transduce_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,f__$1))
})();
var state__27976__auto__ = (function (){var statearr_79544 = f__27975__auto__.call(null);
(statearr_79544[(6)] = c__27974__auto__);

return statearr_79544;
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
var G__79548 = arguments.length;
switch (G__79548) {
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
return (function (state_79573){
var state_val_79574 = (state_79573[(1)]);
if((state_val_79574 === (7))){
var inst_79555 = (state_79573[(2)]);
var state_79573__$1 = state_79573;
var statearr_79575_79596 = state_79573__$1;
(statearr_79575_79596[(2)] = inst_79555);

(statearr_79575_79596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (1))){
var inst_79549 = cljs.core.seq.call(null,coll);
var inst_79550 = inst_79549;
var state_79573__$1 = (function (){var statearr_79576 = state_79573;
(statearr_79576[(7)] = inst_79550);

return statearr_79576;
})();
var statearr_79577_79597 = state_79573__$1;
(statearr_79577_79597[(2)] = null);

(statearr_79577_79597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (4))){
var inst_79550 = (state_79573[(7)]);
var inst_79553 = cljs.core.first.call(null,inst_79550);
var state_79573__$1 = state_79573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79573__$1,(7),ch,inst_79553);
} else {
if((state_val_79574 === (13))){
var inst_79567 = (state_79573[(2)]);
var state_79573__$1 = state_79573;
var statearr_79578_79598 = state_79573__$1;
(statearr_79578_79598[(2)] = inst_79567);

(statearr_79578_79598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (6))){
var inst_79558 = (state_79573[(2)]);
var state_79573__$1 = state_79573;
if(cljs.core.truth_(inst_79558)){
var statearr_79579_79599 = state_79573__$1;
(statearr_79579_79599[(1)] = (8));

} else {
var statearr_79580_79600 = state_79573__$1;
(statearr_79580_79600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (3))){
var inst_79571 = (state_79573[(2)]);
var state_79573__$1 = state_79573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79573__$1,inst_79571);
} else {
if((state_val_79574 === (12))){
var state_79573__$1 = state_79573;
var statearr_79581_79601 = state_79573__$1;
(statearr_79581_79601[(2)] = null);

(statearr_79581_79601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (2))){
var inst_79550 = (state_79573[(7)]);
var state_79573__$1 = state_79573;
if(cljs.core.truth_(inst_79550)){
var statearr_79582_79602 = state_79573__$1;
(statearr_79582_79602[(1)] = (4));

} else {
var statearr_79583_79603 = state_79573__$1;
(statearr_79583_79603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (11))){
var inst_79564 = cljs.core.async.close_BANG_.call(null,ch);
var state_79573__$1 = state_79573;
var statearr_79584_79604 = state_79573__$1;
(statearr_79584_79604[(2)] = inst_79564);

(statearr_79584_79604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (9))){
var state_79573__$1 = state_79573;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79585_79605 = state_79573__$1;
(statearr_79585_79605[(1)] = (11));

} else {
var statearr_79586_79606 = state_79573__$1;
(statearr_79586_79606[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (5))){
var inst_79550 = (state_79573[(7)]);
var state_79573__$1 = state_79573;
var statearr_79587_79607 = state_79573__$1;
(statearr_79587_79607[(2)] = inst_79550);

(statearr_79587_79607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (10))){
var inst_79569 = (state_79573[(2)]);
var state_79573__$1 = state_79573;
var statearr_79588_79608 = state_79573__$1;
(statearr_79588_79608[(2)] = inst_79569);

(statearr_79588_79608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79574 === (8))){
var inst_79550 = (state_79573[(7)]);
var inst_79560 = cljs.core.next.call(null,inst_79550);
var inst_79550__$1 = inst_79560;
var state_79573__$1 = (function (){var statearr_79589 = state_79573;
(statearr_79589[(7)] = inst_79550__$1);

return statearr_79589;
})();
var statearr_79590_79609 = state_79573__$1;
(statearr_79590_79609[(2)] = null);

(statearr_79590_79609[(1)] = (2));


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
var statearr_79591 = [null,null,null,null,null,null,null,null];
(statearr_79591[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_79591[(1)] = (1));

return statearr_79591;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_79573){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79592){if((e79592 instanceof Object)){
var ex__27888__auto__ = e79592;
var statearr_79593_79610 = state_79573;
(statearr_79593_79610[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79611 = state_79573;
state_79573 = G__79611;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_79573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_79573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_79594 = f__27975__auto__.call(null);
(statearr_79594[(6)] = c__27974__auto__);

return statearr_79594;
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
if(typeof cljs.core.async.t_cljs$core$async79612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79612 = (function (ch,cs,meta79613){
this.ch = ch;
this.cs = cs;
this.meta79613 = meta79613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_79614,meta79613__$1){
var self__ = this;
var _79614__$1 = this;
return (new cljs.core.async.t_cljs$core$async79612(self__.ch,self__.cs,meta79613__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async79612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_79614){
var self__ = this;
var _79614__$1 = this;
return self__.meta79613;
});})(cs))
;

cljs.core.async.t_cljs$core$async79612.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async79612.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79612.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async79612.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async79612.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async79612.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta79613","meta79613",-449656360,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async79612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79612";

cljs.core.async.t_cljs$core$async79612.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async79612");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79612.
 */
cljs.core.async.__GT_t_cljs$core$async79612 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async79612(ch__$1,cs__$1,meta79613){
return (new cljs.core.async.t_cljs$core$async79612(ch__$1,cs__$1,meta79613));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async79612(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27974__auto___79834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___79834,cs,m,dchan,dctr,done){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___79834,cs,m,dchan,dctr,done){
return (function (state_79749){
var state_val_79750 = (state_79749[(1)]);
if((state_val_79750 === (7))){
var inst_79745 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
var statearr_79751_79835 = state_79749__$1;
(statearr_79751_79835[(2)] = inst_79745);

(statearr_79751_79835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (20))){
var inst_79648 = (state_79749[(7)]);
var inst_79660 = cljs.core.first.call(null,inst_79648);
var inst_79661 = cljs.core.nth.call(null,inst_79660,(0),null);
var inst_79662 = cljs.core.nth.call(null,inst_79660,(1),null);
var state_79749__$1 = (function (){var statearr_79752 = state_79749;
(statearr_79752[(8)] = inst_79661);

return statearr_79752;
})();
if(cljs.core.truth_(inst_79662)){
var statearr_79753_79836 = state_79749__$1;
(statearr_79753_79836[(1)] = (22));

} else {
var statearr_79754_79837 = state_79749__$1;
(statearr_79754_79837[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (27))){
var inst_79697 = (state_79749[(9)]);
var inst_79617 = (state_79749[(10)]);
var inst_79692 = (state_79749[(11)]);
var inst_79690 = (state_79749[(12)]);
var inst_79697__$1 = cljs.core._nth.call(null,inst_79690,inst_79692);
var inst_79698 = cljs.core.async.put_BANG_.call(null,inst_79697__$1,inst_79617,done);
var state_79749__$1 = (function (){var statearr_79755 = state_79749;
(statearr_79755[(9)] = inst_79697__$1);

return statearr_79755;
})();
if(cljs.core.truth_(inst_79698)){
var statearr_79756_79838 = state_79749__$1;
(statearr_79756_79838[(1)] = (30));

} else {
var statearr_79757_79839 = state_79749__$1;
(statearr_79757_79839[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (1))){
var state_79749__$1 = state_79749;
var statearr_79758_79840 = state_79749__$1;
(statearr_79758_79840[(2)] = null);

(statearr_79758_79840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (24))){
var inst_79648 = (state_79749[(7)]);
var inst_79667 = (state_79749[(2)]);
var inst_79668 = cljs.core.next.call(null,inst_79648);
var inst_79626 = inst_79668;
var inst_79627 = null;
var inst_79628 = (0);
var inst_79629 = (0);
var state_79749__$1 = (function (){var statearr_79759 = state_79749;
(statearr_79759[(13)] = inst_79628);

(statearr_79759[(14)] = inst_79667);

(statearr_79759[(15)] = inst_79627);

(statearr_79759[(16)] = inst_79626);

(statearr_79759[(17)] = inst_79629);

return statearr_79759;
})();
var statearr_79760_79841 = state_79749__$1;
(statearr_79760_79841[(2)] = null);

(statearr_79760_79841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (39))){
var state_79749__$1 = state_79749;
var statearr_79764_79842 = state_79749__$1;
(statearr_79764_79842[(2)] = null);

(statearr_79764_79842[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (4))){
var inst_79617 = (state_79749[(10)]);
var inst_79617__$1 = (state_79749[(2)]);
var inst_79618 = (inst_79617__$1 == null);
var state_79749__$1 = (function (){var statearr_79765 = state_79749;
(statearr_79765[(10)] = inst_79617__$1);

return statearr_79765;
})();
if(cljs.core.truth_(inst_79618)){
var statearr_79766_79843 = state_79749__$1;
(statearr_79766_79843[(1)] = (5));

} else {
var statearr_79767_79844 = state_79749__$1;
(statearr_79767_79844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (15))){
var inst_79628 = (state_79749[(13)]);
var inst_79627 = (state_79749[(15)]);
var inst_79626 = (state_79749[(16)]);
var inst_79629 = (state_79749[(17)]);
var inst_79644 = (state_79749[(2)]);
var inst_79645 = (inst_79629 + (1));
var tmp79761 = inst_79628;
var tmp79762 = inst_79627;
var tmp79763 = inst_79626;
var inst_79626__$1 = tmp79763;
var inst_79627__$1 = tmp79762;
var inst_79628__$1 = tmp79761;
var inst_79629__$1 = inst_79645;
var state_79749__$1 = (function (){var statearr_79768 = state_79749;
(statearr_79768[(13)] = inst_79628__$1);

(statearr_79768[(15)] = inst_79627__$1);

(statearr_79768[(16)] = inst_79626__$1);

(statearr_79768[(17)] = inst_79629__$1);

(statearr_79768[(18)] = inst_79644);

return statearr_79768;
})();
var statearr_79769_79845 = state_79749__$1;
(statearr_79769_79845[(2)] = null);

(statearr_79769_79845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (21))){
var inst_79671 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
var statearr_79773_79846 = state_79749__$1;
(statearr_79773_79846[(2)] = inst_79671);

(statearr_79773_79846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (31))){
var inst_79697 = (state_79749[(9)]);
var inst_79701 = done.call(null,null);
var inst_79702 = cljs.core.async.untap_STAR_.call(null,m,inst_79697);
var state_79749__$1 = (function (){var statearr_79774 = state_79749;
(statearr_79774[(19)] = inst_79701);

return statearr_79774;
})();
var statearr_79775_79847 = state_79749__$1;
(statearr_79775_79847[(2)] = inst_79702);

(statearr_79775_79847[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (32))){
var inst_79689 = (state_79749[(20)]);
var inst_79692 = (state_79749[(11)]);
var inst_79691 = (state_79749[(21)]);
var inst_79690 = (state_79749[(12)]);
var inst_79704 = (state_79749[(2)]);
var inst_79705 = (inst_79692 + (1));
var tmp79770 = inst_79689;
var tmp79771 = inst_79691;
var tmp79772 = inst_79690;
var inst_79689__$1 = tmp79770;
var inst_79690__$1 = tmp79772;
var inst_79691__$1 = tmp79771;
var inst_79692__$1 = inst_79705;
var state_79749__$1 = (function (){var statearr_79776 = state_79749;
(statearr_79776[(22)] = inst_79704);

(statearr_79776[(20)] = inst_79689__$1);

(statearr_79776[(11)] = inst_79692__$1);

(statearr_79776[(21)] = inst_79691__$1);

(statearr_79776[(12)] = inst_79690__$1);

return statearr_79776;
})();
var statearr_79777_79848 = state_79749__$1;
(statearr_79777_79848[(2)] = null);

(statearr_79777_79848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (40))){
var inst_79717 = (state_79749[(23)]);
var inst_79721 = done.call(null,null);
var inst_79722 = cljs.core.async.untap_STAR_.call(null,m,inst_79717);
var state_79749__$1 = (function (){var statearr_79778 = state_79749;
(statearr_79778[(24)] = inst_79721);

return statearr_79778;
})();
var statearr_79779_79849 = state_79749__$1;
(statearr_79779_79849[(2)] = inst_79722);

(statearr_79779_79849[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (33))){
var inst_79708 = (state_79749[(25)]);
var inst_79710 = cljs.core.chunked_seq_QMARK_.call(null,inst_79708);
var state_79749__$1 = state_79749;
if(inst_79710){
var statearr_79780_79850 = state_79749__$1;
(statearr_79780_79850[(1)] = (36));

} else {
var statearr_79781_79851 = state_79749__$1;
(statearr_79781_79851[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (13))){
var inst_79638 = (state_79749[(26)]);
var inst_79641 = cljs.core.async.close_BANG_.call(null,inst_79638);
var state_79749__$1 = state_79749;
var statearr_79782_79852 = state_79749__$1;
(statearr_79782_79852[(2)] = inst_79641);

(statearr_79782_79852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (22))){
var inst_79661 = (state_79749[(8)]);
var inst_79664 = cljs.core.async.close_BANG_.call(null,inst_79661);
var state_79749__$1 = state_79749;
var statearr_79783_79853 = state_79749__$1;
(statearr_79783_79853[(2)] = inst_79664);

(statearr_79783_79853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (36))){
var inst_79708 = (state_79749[(25)]);
var inst_79712 = cljs.core.chunk_first.call(null,inst_79708);
var inst_79713 = cljs.core.chunk_rest.call(null,inst_79708);
var inst_79714 = cljs.core.count.call(null,inst_79712);
var inst_79689 = inst_79713;
var inst_79690 = inst_79712;
var inst_79691 = inst_79714;
var inst_79692 = (0);
var state_79749__$1 = (function (){var statearr_79784 = state_79749;
(statearr_79784[(20)] = inst_79689);

(statearr_79784[(11)] = inst_79692);

(statearr_79784[(21)] = inst_79691);

(statearr_79784[(12)] = inst_79690);

return statearr_79784;
})();
var statearr_79785_79854 = state_79749__$1;
(statearr_79785_79854[(2)] = null);

(statearr_79785_79854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (41))){
var inst_79708 = (state_79749[(25)]);
var inst_79724 = (state_79749[(2)]);
var inst_79725 = cljs.core.next.call(null,inst_79708);
var inst_79689 = inst_79725;
var inst_79690 = null;
var inst_79691 = (0);
var inst_79692 = (0);
var state_79749__$1 = (function (){var statearr_79786 = state_79749;
(statearr_79786[(20)] = inst_79689);

(statearr_79786[(27)] = inst_79724);

(statearr_79786[(11)] = inst_79692);

(statearr_79786[(21)] = inst_79691);

(statearr_79786[(12)] = inst_79690);

return statearr_79786;
})();
var statearr_79787_79855 = state_79749__$1;
(statearr_79787_79855[(2)] = null);

(statearr_79787_79855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (43))){
var state_79749__$1 = state_79749;
var statearr_79788_79856 = state_79749__$1;
(statearr_79788_79856[(2)] = null);

(statearr_79788_79856[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (29))){
var inst_79733 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
var statearr_79789_79857 = state_79749__$1;
(statearr_79789_79857[(2)] = inst_79733);

(statearr_79789_79857[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (44))){
var inst_79742 = (state_79749[(2)]);
var state_79749__$1 = (function (){var statearr_79790 = state_79749;
(statearr_79790[(28)] = inst_79742);

return statearr_79790;
})();
var statearr_79791_79858 = state_79749__$1;
(statearr_79791_79858[(2)] = null);

(statearr_79791_79858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (6))){
var inst_79681 = (state_79749[(29)]);
var inst_79680 = cljs.core.deref.call(null,cs);
var inst_79681__$1 = cljs.core.keys.call(null,inst_79680);
var inst_79682 = cljs.core.count.call(null,inst_79681__$1);
var inst_79683 = cljs.core.reset_BANG_.call(null,dctr,inst_79682);
var inst_79688 = cljs.core.seq.call(null,inst_79681__$1);
var inst_79689 = inst_79688;
var inst_79690 = null;
var inst_79691 = (0);
var inst_79692 = (0);
var state_79749__$1 = (function (){var statearr_79792 = state_79749;
(statearr_79792[(29)] = inst_79681__$1);

(statearr_79792[(20)] = inst_79689);

(statearr_79792[(30)] = inst_79683);

(statearr_79792[(11)] = inst_79692);

(statearr_79792[(21)] = inst_79691);

(statearr_79792[(12)] = inst_79690);

return statearr_79792;
})();
var statearr_79793_79859 = state_79749__$1;
(statearr_79793_79859[(2)] = null);

(statearr_79793_79859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (28))){
var inst_79689 = (state_79749[(20)]);
var inst_79708 = (state_79749[(25)]);
var inst_79708__$1 = cljs.core.seq.call(null,inst_79689);
var state_79749__$1 = (function (){var statearr_79794 = state_79749;
(statearr_79794[(25)] = inst_79708__$1);

return statearr_79794;
})();
if(inst_79708__$1){
var statearr_79795_79860 = state_79749__$1;
(statearr_79795_79860[(1)] = (33));

} else {
var statearr_79796_79861 = state_79749__$1;
(statearr_79796_79861[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (25))){
var inst_79692 = (state_79749[(11)]);
var inst_79691 = (state_79749[(21)]);
var inst_79694 = (inst_79692 < inst_79691);
var inst_79695 = inst_79694;
var state_79749__$1 = state_79749;
if(cljs.core.truth_(inst_79695)){
var statearr_79797_79862 = state_79749__$1;
(statearr_79797_79862[(1)] = (27));

} else {
var statearr_79798_79863 = state_79749__$1;
(statearr_79798_79863[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (34))){
var state_79749__$1 = state_79749;
var statearr_79799_79864 = state_79749__$1;
(statearr_79799_79864[(2)] = null);

(statearr_79799_79864[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (17))){
var state_79749__$1 = state_79749;
var statearr_79800_79865 = state_79749__$1;
(statearr_79800_79865[(2)] = null);

(statearr_79800_79865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (3))){
var inst_79747 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79749__$1,inst_79747);
} else {
if((state_val_79750 === (12))){
var inst_79676 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
var statearr_79801_79866 = state_79749__$1;
(statearr_79801_79866[(2)] = inst_79676);

(statearr_79801_79866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (2))){
var state_79749__$1 = state_79749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79749__$1,(4),ch);
} else {
if((state_val_79750 === (23))){
var state_79749__$1 = state_79749;
var statearr_79802_79867 = state_79749__$1;
(statearr_79802_79867[(2)] = null);

(statearr_79802_79867[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (35))){
var inst_79731 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
var statearr_79803_79868 = state_79749__$1;
(statearr_79803_79868[(2)] = inst_79731);

(statearr_79803_79868[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (19))){
var inst_79648 = (state_79749[(7)]);
var inst_79652 = cljs.core.chunk_first.call(null,inst_79648);
var inst_79653 = cljs.core.chunk_rest.call(null,inst_79648);
var inst_79654 = cljs.core.count.call(null,inst_79652);
var inst_79626 = inst_79653;
var inst_79627 = inst_79652;
var inst_79628 = inst_79654;
var inst_79629 = (0);
var state_79749__$1 = (function (){var statearr_79804 = state_79749;
(statearr_79804[(13)] = inst_79628);

(statearr_79804[(15)] = inst_79627);

(statearr_79804[(16)] = inst_79626);

(statearr_79804[(17)] = inst_79629);

return statearr_79804;
})();
var statearr_79805_79869 = state_79749__$1;
(statearr_79805_79869[(2)] = null);

(statearr_79805_79869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (11))){
var inst_79648 = (state_79749[(7)]);
var inst_79626 = (state_79749[(16)]);
var inst_79648__$1 = cljs.core.seq.call(null,inst_79626);
var state_79749__$1 = (function (){var statearr_79806 = state_79749;
(statearr_79806[(7)] = inst_79648__$1);

return statearr_79806;
})();
if(inst_79648__$1){
var statearr_79807_79870 = state_79749__$1;
(statearr_79807_79870[(1)] = (16));

} else {
var statearr_79808_79871 = state_79749__$1;
(statearr_79808_79871[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (9))){
var inst_79678 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
var statearr_79809_79872 = state_79749__$1;
(statearr_79809_79872[(2)] = inst_79678);

(statearr_79809_79872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (5))){
var inst_79624 = cljs.core.deref.call(null,cs);
var inst_79625 = cljs.core.seq.call(null,inst_79624);
var inst_79626 = inst_79625;
var inst_79627 = null;
var inst_79628 = (0);
var inst_79629 = (0);
var state_79749__$1 = (function (){var statearr_79810 = state_79749;
(statearr_79810[(13)] = inst_79628);

(statearr_79810[(15)] = inst_79627);

(statearr_79810[(16)] = inst_79626);

(statearr_79810[(17)] = inst_79629);

return statearr_79810;
})();
var statearr_79811_79873 = state_79749__$1;
(statearr_79811_79873[(2)] = null);

(statearr_79811_79873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (14))){
var state_79749__$1 = state_79749;
var statearr_79812_79874 = state_79749__$1;
(statearr_79812_79874[(2)] = null);

(statearr_79812_79874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (45))){
var inst_79739 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
var statearr_79813_79875 = state_79749__$1;
(statearr_79813_79875[(2)] = inst_79739);

(statearr_79813_79875[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (26))){
var inst_79681 = (state_79749[(29)]);
var inst_79735 = (state_79749[(2)]);
var inst_79736 = cljs.core.seq.call(null,inst_79681);
var state_79749__$1 = (function (){var statearr_79814 = state_79749;
(statearr_79814[(31)] = inst_79735);

return statearr_79814;
})();
if(inst_79736){
var statearr_79815_79876 = state_79749__$1;
(statearr_79815_79876[(1)] = (42));

} else {
var statearr_79816_79877 = state_79749__$1;
(statearr_79816_79877[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (16))){
var inst_79648 = (state_79749[(7)]);
var inst_79650 = cljs.core.chunked_seq_QMARK_.call(null,inst_79648);
var state_79749__$1 = state_79749;
if(inst_79650){
var statearr_79817_79878 = state_79749__$1;
(statearr_79817_79878[(1)] = (19));

} else {
var statearr_79818_79879 = state_79749__$1;
(statearr_79818_79879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (38))){
var inst_79728 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
var statearr_79819_79880 = state_79749__$1;
(statearr_79819_79880[(2)] = inst_79728);

(statearr_79819_79880[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (30))){
var state_79749__$1 = state_79749;
var statearr_79820_79881 = state_79749__$1;
(statearr_79820_79881[(2)] = null);

(statearr_79820_79881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (10))){
var inst_79627 = (state_79749[(15)]);
var inst_79629 = (state_79749[(17)]);
var inst_79637 = cljs.core._nth.call(null,inst_79627,inst_79629);
var inst_79638 = cljs.core.nth.call(null,inst_79637,(0),null);
var inst_79639 = cljs.core.nth.call(null,inst_79637,(1),null);
var state_79749__$1 = (function (){var statearr_79821 = state_79749;
(statearr_79821[(26)] = inst_79638);

return statearr_79821;
})();
if(cljs.core.truth_(inst_79639)){
var statearr_79822_79882 = state_79749__$1;
(statearr_79822_79882[(1)] = (13));

} else {
var statearr_79823_79883 = state_79749__$1;
(statearr_79823_79883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (18))){
var inst_79674 = (state_79749[(2)]);
var state_79749__$1 = state_79749;
var statearr_79824_79884 = state_79749__$1;
(statearr_79824_79884[(2)] = inst_79674);

(statearr_79824_79884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (42))){
var state_79749__$1 = state_79749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79749__$1,(45),dchan);
} else {
if((state_val_79750 === (37))){
var inst_79617 = (state_79749[(10)]);
var inst_79708 = (state_79749[(25)]);
var inst_79717 = (state_79749[(23)]);
var inst_79717__$1 = cljs.core.first.call(null,inst_79708);
var inst_79718 = cljs.core.async.put_BANG_.call(null,inst_79717__$1,inst_79617,done);
var state_79749__$1 = (function (){var statearr_79825 = state_79749;
(statearr_79825[(23)] = inst_79717__$1);

return statearr_79825;
})();
if(cljs.core.truth_(inst_79718)){
var statearr_79826_79885 = state_79749__$1;
(statearr_79826_79885[(1)] = (39));

} else {
var statearr_79827_79886 = state_79749__$1;
(statearr_79827_79886[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79750 === (8))){
var inst_79628 = (state_79749[(13)]);
var inst_79629 = (state_79749[(17)]);
var inst_79631 = (inst_79629 < inst_79628);
var inst_79632 = inst_79631;
var state_79749__$1 = state_79749;
if(cljs.core.truth_(inst_79632)){
var statearr_79828_79887 = state_79749__$1;
(statearr_79828_79887[(1)] = (10));

} else {
var statearr_79829_79888 = state_79749__$1;
(statearr_79829_79888[(1)] = (11));

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
});})(c__27974__auto___79834,cs,m,dchan,dctr,done))
;
return ((function (switch__27884__auto__,c__27974__auto___79834,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27885__auto__ = null;
var cljs$core$async$mult_$_state_machine__27885__auto____0 = (function (){
var statearr_79830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79830[(0)] = cljs$core$async$mult_$_state_machine__27885__auto__);

(statearr_79830[(1)] = (1));

return statearr_79830;
});
var cljs$core$async$mult_$_state_machine__27885__auto____1 = (function (state_79749){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_79749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e79831){if((e79831 instanceof Object)){
var ex__27888__auto__ = e79831;
var statearr_79832_79889 = state_79749;
(statearr_79832_79889[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79890 = state_79749;
state_79749 = G__79890;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27885__auto__ = function(state_79749){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27885__auto____1.call(this,state_79749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27885__auto____0;
cljs$core$async$mult_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27885__auto____1;
return cljs$core$async$mult_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___79834,cs,m,dchan,dctr,done))
})();
var state__27976__auto__ = (function (){var statearr_79833 = f__27975__auto__.call(null);
(statearr_79833[(6)] = c__27974__auto___79834);

return statearr_79833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___79834,cs,m,dchan,dctr,done))
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
var G__79892 = arguments.length;
switch (G__79892) {
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
var len__4499__auto___79904 = arguments.length;
var i__4500__auto___79905 = (0);
while(true){
if((i__4500__auto___79905 < len__4499__auto___79904)){
args__4502__auto__.push((arguments[i__4500__auto___79905]));

var G__79906 = (i__4500__auto___79905 + (1));
i__4500__auto___79905 = G__79906;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__79898){
var map__79899 = p__79898;
var map__79899__$1 = ((((!((map__79899 == null)))?(((((map__79899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79899):map__79899);
var opts = map__79899__$1;
var statearr_79901_79907 = state;
(statearr_79901_79907[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__79899,map__79899__$1,opts){
return (function (val){
var statearr_79902_79908 = state;
(statearr_79902_79908[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__79899,map__79899__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_79903_79909 = state;
(statearr_79903_79909[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq79894){
var G__79895 = cljs.core.first.call(null,seq79894);
var seq79894__$1 = cljs.core.next.call(null,seq79894);
var G__79896 = cljs.core.first.call(null,seq79894__$1);
var seq79894__$2 = cljs.core.next.call(null,seq79894__$1);
var G__79897 = cljs.core.first.call(null,seq79894__$2);
var seq79894__$3 = cljs.core.next.call(null,seq79894__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79895,G__79896,G__79897,seq79894__$3);
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
if(typeof cljs.core.async.t_cljs$core$async79910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79910 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta79911){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta79911 = meta79911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_79912,meta79911__$1){
var self__ = this;
var _79912__$1 = this;
return (new cljs.core.async.t_cljs$core$async79910(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta79911__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_79912){
var self__ = this;
var _79912__$1 = this;
return self__.meta79911;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79910.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async79910.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta79911","meta79911",-741814484,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79910";

cljs.core.async.t_cljs$core$async79910.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async79910");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79910.
 */
cljs.core.async.__GT_t_cljs$core$async79910 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async79910(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta79911){
return (new cljs.core.async.t_cljs$core$async79910(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta79911));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async79910(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27974__auto___80074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___80074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___80074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_80014){
var state_val_80015 = (state_80014[(1)]);
if((state_val_80015 === (7))){
var inst_79929 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
var statearr_80016_80075 = state_80014__$1;
(statearr_80016_80075[(2)] = inst_79929);

(statearr_80016_80075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (20))){
var inst_79941 = (state_80014[(7)]);
var state_80014__$1 = state_80014;
var statearr_80017_80076 = state_80014__$1;
(statearr_80017_80076[(2)] = inst_79941);

(statearr_80017_80076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (27))){
var state_80014__$1 = state_80014;
var statearr_80018_80077 = state_80014__$1;
(statearr_80018_80077[(2)] = null);

(statearr_80018_80077[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (1))){
var inst_79916 = (state_80014[(8)]);
var inst_79916__$1 = calc_state.call(null);
var inst_79918 = (inst_79916__$1 == null);
var inst_79919 = cljs.core.not.call(null,inst_79918);
var state_80014__$1 = (function (){var statearr_80019 = state_80014;
(statearr_80019[(8)] = inst_79916__$1);

return statearr_80019;
})();
if(inst_79919){
var statearr_80020_80078 = state_80014__$1;
(statearr_80020_80078[(1)] = (2));

} else {
var statearr_80021_80079 = state_80014__$1;
(statearr_80021_80079[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (24))){
var inst_79965 = (state_80014[(9)]);
var inst_79988 = (state_80014[(10)]);
var inst_79974 = (state_80014[(11)]);
var inst_79988__$1 = inst_79965.call(null,inst_79974);
var state_80014__$1 = (function (){var statearr_80022 = state_80014;
(statearr_80022[(10)] = inst_79988__$1);

return statearr_80022;
})();
if(cljs.core.truth_(inst_79988__$1)){
var statearr_80023_80080 = state_80014__$1;
(statearr_80023_80080[(1)] = (29));

} else {
var statearr_80024_80081 = state_80014__$1;
(statearr_80024_80081[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (4))){
var inst_79932 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
if(cljs.core.truth_(inst_79932)){
var statearr_80025_80082 = state_80014__$1;
(statearr_80025_80082[(1)] = (8));

} else {
var statearr_80026_80083 = state_80014__$1;
(statearr_80026_80083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (15))){
var inst_79959 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
if(cljs.core.truth_(inst_79959)){
var statearr_80027_80084 = state_80014__$1;
(statearr_80027_80084[(1)] = (19));

} else {
var statearr_80028_80085 = state_80014__$1;
(statearr_80028_80085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (21))){
var inst_79964 = (state_80014[(12)]);
var inst_79964__$1 = (state_80014[(2)]);
var inst_79965 = cljs.core.get.call(null,inst_79964__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_79966 = cljs.core.get.call(null,inst_79964__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_79967 = cljs.core.get.call(null,inst_79964__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_80014__$1 = (function (){var statearr_80029 = state_80014;
(statearr_80029[(9)] = inst_79965);

(statearr_80029[(13)] = inst_79966);

(statearr_80029[(12)] = inst_79964__$1);

return statearr_80029;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_80014__$1,(22),inst_79967);
} else {
if((state_val_80015 === (31))){
var inst_79996 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
if(cljs.core.truth_(inst_79996)){
var statearr_80030_80086 = state_80014__$1;
(statearr_80030_80086[(1)] = (32));

} else {
var statearr_80031_80087 = state_80014__$1;
(statearr_80031_80087[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (32))){
var inst_79973 = (state_80014[(14)]);
var state_80014__$1 = state_80014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80014__$1,(35),out,inst_79973);
} else {
if((state_val_80015 === (33))){
var inst_79964 = (state_80014[(12)]);
var inst_79941 = inst_79964;
var state_80014__$1 = (function (){var statearr_80032 = state_80014;
(statearr_80032[(7)] = inst_79941);

return statearr_80032;
})();
var statearr_80033_80088 = state_80014__$1;
(statearr_80033_80088[(2)] = null);

(statearr_80033_80088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (13))){
var inst_79941 = (state_80014[(7)]);
var inst_79948 = inst_79941.cljs$lang$protocol_mask$partition0$;
var inst_79949 = (inst_79948 & (64));
var inst_79950 = inst_79941.cljs$core$ISeq$;
var inst_79951 = (cljs.core.PROTOCOL_SENTINEL === inst_79950);
var inst_79952 = ((inst_79949) || (inst_79951));
var state_80014__$1 = state_80014;
if(cljs.core.truth_(inst_79952)){
var statearr_80034_80089 = state_80014__$1;
(statearr_80034_80089[(1)] = (16));

} else {
var statearr_80035_80090 = state_80014__$1;
(statearr_80035_80090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (22))){
var inst_79973 = (state_80014[(14)]);
var inst_79974 = (state_80014[(11)]);
var inst_79972 = (state_80014[(2)]);
var inst_79973__$1 = cljs.core.nth.call(null,inst_79972,(0),null);
var inst_79974__$1 = cljs.core.nth.call(null,inst_79972,(1),null);
var inst_79975 = (inst_79973__$1 == null);
var inst_79976 = cljs.core._EQ_.call(null,inst_79974__$1,change);
var inst_79977 = ((inst_79975) || (inst_79976));
var state_80014__$1 = (function (){var statearr_80036 = state_80014;
(statearr_80036[(14)] = inst_79973__$1);

(statearr_80036[(11)] = inst_79974__$1);

return statearr_80036;
})();
if(cljs.core.truth_(inst_79977)){
var statearr_80037_80091 = state_80014__$1;
(statearr_80037_80091[(1)] = (23));

} else {
var statearr_80038_80092 = state_80014__$1;
(statearr_80038_80092[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (36))){
var inst_79964 = (state_80014[(12)]);
var inst_79941 = inst_79964;
var state_80014__$1 = (function (){var statearr_80039 = state_80014;
(statearr_80039[(7)] = inst_79941);

return statearr_80039;
})();
var statearr_80040_80093 = state_80014__$1;
(statearr_80040_80093[(2)] = null);

(statearr_80040_80093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (29))){
var inst_79988 = (state_80014[(10)]);
var state_80014__$1 = state_80014;
var statearr_80041_80094 = state_80014__$1;
(statearr_80041_80094[(2)] = inst_79988);

(statearr_80041_80094[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (6))){
var state_80014__$1 = state_80014;
var statearr_80042_80095 = state_80014__$1;
(statearr_80042_80095[(2)] = false);

(statearr_80042_80095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (28))){
var inst_79984 = (state_80014[(2)]);
var inst_79985 = calc_state.call(null);
var inst_79941 = inst_79985;
var state_80014__$1 = (function (){var statearr_80043 = state_80014;
(statearr_80043[(7)] = inst_79941);

(statearr_80043[(15)] = inst_79984);

return statearr_80043;
})();
var statearr_80044_80096 = state_80014__$1;
(statearr_80044_80096[(2)] = null);

(statearr_80044_80096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (25))){
var inst_80010 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
var statearr_80045_80097 = state_80014__$1;
(statearr_80045_80097[(2)] = inst_80010);

(statearr_80045_80097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (34))){
var inst_80008 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
var statearr_80046_80098 = state_80014__$1;
(statearr_80046_80098[(2)] = inst_80008);

(statearr_80046_80098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (17))){
var state_80014__$1 = state_80014;
var statearr_80047_80099 = state_80014__$1;
(statearr_80047_80099[(2)] = false);

(statearr_80047_80099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (3))){
var state_80014__$1 = state_80014;
var statearr_80048_80100 = state_80014__$1;
(statearr_80048_80100[(2)] = false);

(statearr_80048_80100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (12))){
var inst_80012 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80014__$1,inst_80012);
} else {
if((state_val_80015 === (2))){
var inst_79916 = (state_80014[(8)]);
var inst_79921 = inst_79916.cljs$lang$protocol_mask$partition0$;
var inst_79922 = (inst_79921 & (64));
var inst_79923 = inst_79916.cljs$core$ISeq$;
var inst_79924 = (cljs.core.PROTOCOL_SENTINEL === inst_79923);
var inst_79925 = ((inst_79922) || (inst_79924));
var state_80014__$1 = state_80014;
if(cljs.core.truth_(inst_79925)){
var statearr_80049_80101 = state_80014__$1;
(statearr_80049_80101[(1)] = (5));

} else {
var statearr_80050_80102 = state_80014__$1;
(statearr_80050_80102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (23))){
var inst_79973 = (state_80014[(14)]);
var inst_79979 = (inst_79973 == null);
var state_80014__$1 = state_80014;
if(cljs.core.truth_(inst_79979)){
var statearr_80051_80103 = state_80014__$1;
(statearr_80051_80103[(1)] = (26));

} else {
var statearr_80052_80104 = state_80014__$1;
(statearr_80052_80104[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (35))){
var inst_79999 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
if(cljs.core.truth_(inst_79999)){
var statearr_80053_80105 = state_80014__$1;
(statearr_80053_80105[(1)] = (36));

} else {
var statearr_80054_80106 = state_80014__$1;
(statearr_80054_80106[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (19))){
var inst_79941 = (state_80014[(7)]);
var inst_79961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79941);
var state_80014__$1 = state_80014;
var statearr_80055_80107 = state_80014__$1;
(statearr_80055_80107[(2)] = inst_79961);

(statearr_80055_80107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (11))){
var inst_79941 = (state_80014[(7)]);
var inst_79945 = (inst_79941 == null);
var inst_79946 = cljs.core.not.call(null,inst_79945);
var state_80014__$1 = state_80014;
if(inst_79946){
var statearr_80056_80108 = state_80014__$1;
(statearr_80056_80108[(1)] = (13));

} else {
var statearr_80057_80109 = state_80014__$1;
(statearr_80057_80109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (9))){
var inst_79916 = (state_80014[(8)]);
var state_80014__$1 = state_80014;
var statearr_80058_80110 = state_80014__$1;
(statearr_80058_80110[(2)] = inst_79916);

(statearr_80058_80110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (5))){
var state_80014__$1 = state_80014;
var statearr_80059_80111 = state_80014__$1;
(statearr_80059_80111[(2)] = true);

(statearr_80059_80111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (14))){
var state_80014__$1 = state_80014;
var statearr_80060_80112 = state_80014__$1;
(statearr_80060_80112[(2)] = false);

(statearr_80060_80112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (26))){
var inst_79974 = (state_80014[(11)]);
var inst_79981 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_79974);
var state_80014__$1 = state_80014;
var statearr_80061_80113 = state_80014__$1;
(statearr_80061_80113[(2)] = inst_79981);

(statearr_80061_80113[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (16))){
var state_80014__$1 = state_80014;
var statearr_80062_80114 = state_80014__$1;
(statearr_80062_80114[(2)] = true);

(statearr_80062_80114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (38))){
var inst_80004 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
var statearr_80063_80115 = state_80014__$1;
(statearr_80063_80115[(2)] = inst_80004);

(statearr_80063_80115[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (30))){
var inst_79965 = (state_80014[(9)]);
var inst_79966 = (state_80014[(13)]);
var inst_79974 = (state_80014[(11)]);
var inst_79991 = cljs.core.empty_QMARK_.call(null,inst_79965);
var inst_79992 = inst_79966.call(null,inst_79974);
var inst_79993 = cljs.core.not.call(null,inst_79992);
var inst_79994 = ((inst_79991) && (inst_79993));
var state_80014__$1 = state_80014;
var statearr_80064_80116 = state_80014__$1;
(statearr_80064_80116[(2)] = inst_79994);

(statearr_80064_80116[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (10))){
var inst_79916 = (state_80014[(8)]);
var inst_79937 = (state_80014[(2)]);
var inst_79938 = cljs.core.get.call(null,inst_79937,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_79939 = cljs.core.get.call(null,inst_79937,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_79940 = cljs.core.get.call(null,inst_79937,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_79941 = inst_79916;
var state_80014__$1 = (function (){var statearr_80065 = state_80014;
(statearr_80065[(7)] = inst_79941);

(statearr_80065[(16)] = inst_79940);

(statearr_80065[(17)] = inst_79938);

(statearr_80065[(18)] = inst_79939);

return statearr_80065;
})();
var statearr_80066_80117 = state_80014__$1;
(statearr_80066_80117[(2)] = null);

(statearr_80066_80117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (18))){
var inst_79956 = (state_80014[(2)]);
var state_80014__$1 = state_80014;
var statearr_80067_80118 = state_80014__$1;
(statearr_80067_80118[(2)] = inst_79956);

(statearr_80067_80118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (37))){
var state_80014__$1 = state_80014;
var statearr_80068_80119 = state_80014__$1;
(statearr_80068_80119[(2)] = null);

(statearr_80068_80119[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80015 === (8))){
var inst_79916 = (state_80014[(8)]);
var inst_79934 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79916);
var state_80014__$1 = state_80014;
var statearr_80069_80120 = state_80014__$1;
(statearr_80069_80120[(2)] = inst_79934);

(statearr_80069_80120[(1)] = (10));


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
});})(c__27974__auto___80074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27884__auto__,c__27974__auto___80074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27885__auto__ = null;
var cljs$core$async$mix_$_state_machine__27885__auto____0 = (function (){
var statearr_80070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80070[(0)] = cljs$core$async$mix_$_state_machine__27885__auto__);

(statearr_80070[(1)] = (1));

return statearr_80070;
});
var cljs$core$async$mix_$_state_machine__27885__auto____1 = (function (state_80014){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80071){if((e80071 instanceof Object)){
var ex__27888__auto__ = e80071;
var statearr_80072_80121 = state_80014;
(statearr_80072_80121[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80122 = state_80014;
state_80014 = G__80122;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27885__auto__ = function(state_80014){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27885__auto____1.call(this,state_80014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27885__auto____0;
cljs$core$async$mix_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27885__auto____1;
return cljs$core$async$mix_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___80074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27976__auto__ = (function (){var statearr_80073 = f__27975__auto__.call(null);
(statearr_80073[(6)] = c__27974__auto___80074);

return statearr_80073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___80074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__80124 = arguments.length;
switch (G__80124) {
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
var G__80128 = arguments.length;
switch (G__80128) {
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
return (function (p1__80126_SHARP_){
if(cljs.core.truth_(p1__80126_SHARP_.call(null,topic))){
return p1__80126_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__80126_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async80129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80129 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta80130){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta80130 = meta80130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_80131,meta80130__$1){
var self__ = this;
var _80131__$1 = this;
return (new cljs.core.async.t_cljs$core$async80129(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta80130__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_80131){
var self__ = this;
var _80131__$1 = this;
return self__.meta80130;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80129.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80129.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80129.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80129.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async80129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80129.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta80130","meta80130",-561189879,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80129";

cljs.core.async.t_cljs$core$async80129.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async80129");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80129.
 */
cljs.core.async.__GT_t_cljs$core$async80129 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async80129(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta80130){
return (new cljs.core.async.t_cljs$core$async80129(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta80130));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async80129(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27974__auto___80249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___80249,mults,ensure_mult,p){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___80249,mults,ensure_mult,p){
return (function (state_80203){
var state_val_80204 = (state_80203[(1)]);
if((state_val_80204 === (7))){
var inst_80199 = (state_80203[(2)]);
var state_80203__$1 = state_80203;
var statearr_80205_80250 = state_80203__$1;
(statearr_80205_80250[(2)] = inst_80199);

(statearr_80205_80250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (20))){
var state_80203__$1 = state_80203;
var statearr_80206_80251 = state_80203__$1;
(statearr_80206_80251[(2)] = null);

(statearr_80206_80251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (1))){
var state_80203__$1 = state_80203;
var statearr_80207_80252 = state_80203__$1;
(statearr_80207_80252[(2)] = null);

(statearr_80207_80252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (24))){
var inst_80182 = (state_80203[(7)]);
var inst_80191 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_80182);
var state_80203__$1 = state_80203;
var statearr_80208_80253 = state_80203__$1;
(statearr_80208_80253[(2)] = inst_80191);

(statearr_80208_80253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (4))){
var inst_80134 = (state_80203[(8)]);
var inst_80134__$1 = (state_80203[(2)]);
var inst_80135 = (inst_80134__$1 == null);
var state_80203__$1 = (function (){var statearr_80209 = state_80203;
(statearr_80209[(8)] = inst_80134__$1);

return statearr_80209;
})();
if(cljs.core.truth_(inst_80135)){
var statearr_80210_80254 = state_80203__$1;
(statearr_80210_80254[(1)] = (5));

} else {
var statearr_80211_80255 = state_80203__$1;
(statearr_80211_80255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (15))){
var inst_80176 = (state_80203[(2)]);
var state_80203__$1 = state_80203;
var statearr_80212_80256 = state_80203__$1;
(statearr_80212_80256[(2)] = inst_80176);

(statearr_80212_80256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (21))){
var inst_80196 = (state_80203[(2)]);
var state_80203__$1 = (function (){var statearr_80213 = state_80203;
(statearr_80213[(9)] = inst_80196);

return statearr_80213;
})();
var statearr_80214_80257 = state_80203__$1;
(statearr_80214_80257[(2)] = null);

(statearr_80214_80257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (13))){
var inst_80158 = (state_80203[(10)]);
var inst_80160 = cljs.core.chunked_seq_QMARK_.call(null,inst_80158);
var state_80203__$1 = state_80203;
if(inst_80160){
var statearr_80215_80258 = state_80203__$1;
(statearr_80215_80258[(1)] = (16));

} else {
var statearr_80216_80259 = state_80203__$1;
(statearr_80216_80259[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (22))){
var inst_80188 = (state_80203[(2)]);
var state_80203__$1 = state_80203;
if(cljs.core.truth_(inst_80188)){
var statearr_80217_80260 = state_80203__$1;
(statearr_80217_80260[(1)] = (23));

} else {
var statearr_80218_80261 = state_80203__$1;
(statearr_80218_80261[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (6))){
var inst_80182 = (state_80203[(7)]);
var inst_80134 = (state_80203[(8)]);
var inst_80184 = (state_80203[(11)]);
var inst_80182__$1 = topic_fn.call(null,inst_80134);
var inst_80183 = cljs.core.deref.call(null,mults);
var inst_80184__$1 = cljs.core.get.call(null,inst_80183,inst_80182__$1);
var state_80203__$1 = (function (){var statearr_80219 = state_80203;
(statearr_80219[(7)] = inst_80182__$1);

(statearr_80219[(11)] = inst_80184__$1);

return statearr_80219;
})();
if(cljs.core.truth_(inst_80184__$1)){
var statearr_80220_80262 = state_80203__$1;
(statearr_80220_80262[(1)] = (19));

} else {
var statearr_80221_80263 = state_80203__$1;
(statearr_80221_80263[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (25))){
var inst_80193 = (state_80203[(2)]);
var state_80203__$1 = state_80203;
var statearr_80222_80264 = state_80203__$1;
(statearr_80222_80264[(2)] = inst_80193);

(statearr_80222_80264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (17))){
var inst_80158 = (state_80203[(10)]);
var inst_80167 = cljs.core.first.call(null,inst_80158);
var inst_80168 = cljs.core.async.muxch_STAR_.call(null,inst_80167);
var inst_80169 = cljs.core.async.close_BANG_.call(null,inst_80168);
var inst_80170 = cljs.core.next.call(null,inst_80158);
var inst_80144 = inst_80170;
var inst_80145 = null;
var inst_80146 = (0);
var inst_80147 = (0);
var state_80203__$1 = (function (){var statearr_80223 = state_80203;
(statearr_80223[(12)] = inst_80169);

(statearr_80223[(13)] = inst_80147);

(statearr_80223[(14)] = inst_80144);

(statearr_80223[(15)] = inst_80145);

(statearr_80223[(16)] = inst_80146);

return statearr_80223;
})();
var statearr_80224_80265 = state_80203__$1;
(statearr_80224_80265[(2)] = null);

(statearr_80224_80265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (3))){
var inst_80201 = (state_80203[(2)]);
var state_80203__$1 = state_80203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80203__$1,inst_80201);
} else {
if((state_val_80204 === (12))){
var inst_80178 = (state_80203[(2)]);
var state_80203__$1 = state_80203;
var statearr_80225_80266 = state_80203__$1;
(statearr_80225_80266[(2)] = inst_80178);

(statearr_80225_80266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (2))){
var state_80203__$1 = state_80203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80203__$1,(4),ch);
} else {
if((state_val_80204 === (23))){
var state_80203__$1 = state_80203;
var statearr_80226_80267 = state_80203__$1;
(statearr_80226_80267[(2)] = null);

(statearr_80226_80267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (19))){
var inst_80134 = (state_80203[(8)]);
var inst_80184 = (state_80203[(11)]);
var inst_80186 = cljs.core.async.muxch_STAR_.call(null,inst_80184);
var state_80203__$1 = state_80203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80203__$1,(22),inst_80186,inst_80134);
} else {
if((state_val_80204 === (11))){
var inst_80144 = (state_80203[(14)]);
var inst_80158 = (state_80203[(10)]);
var inst_80158__$1 = cljs.core.seq.call(null,inst_80144);
var state_80203__$1 = (function (){var statearr_80227 = state_80203;
(statearr_80227[(10)] = inst_80158__$1);

return statearr_80227;
})();
if(inst_80158__$1){
var statearr_80228_80268 = state_80203__$1;
(statearr_80228_80268[(1)] = (13));

} else {
var statearr_80229_80269 = state_80203__$1;
(statearr_80229_80269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (9))){
var inst_80180 = (state_80203[(2)]);
var state_80203__$1 = state_80203;
var statearr_80230_80270 = state_80203__$1;
(statearr_80230_80270[(2)] = inst_80180);

(statearr_80230_80270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (5))){
var inst_80141 = cljs.core.deref.call(null,mults);
var inst_80142 = cljs.core.vals.call(null,inst_80141);
var inst_80143 = cljs.core.seq.call(null,inst_80142);
var inst_80144 = inst_80143;
var inst_80145 = null;
var inst_80146 = (0);
var inst_80147 = (0);
var state_80203__$1 = (function (){var statearr_80231 = state_80203;
(statearr_80231[(13)] = inst_80147);

(statearr_80231[(14)] = inst_80144);

(statearr_80231[(15)] = inst_80145);

(statearr_80231[(16)] = inst_80146);

return statearr_80231;
})();
var statearr_80232_80271 = state_80203__$1;
(statearr_80232_80271[(2)] = null);

(statearr_80232_80271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (14))){
var state_80203__$1 = state_80203;
var statearr_80236_80272 = state_80203__$1;
(statearr_80236_80272[(2)] = null);

(statearr_80236_80272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (16))){
var inst_80158 = (state_80203[(10)]);
var inst_80162 = cljs.core.chunk_first.call(null,inst_80158);
var inst_80163 = cljs.core.chunk_rest.call(null,inst_80158);
var inst_80164 = cljs.core.count.call(null,inst_80162);
var inst_80144 = inst_80163;
var inst_80145 = inst_80162;
var inst_80146 = inst_80164;
var inst_80147 = (0);
var state_80203__$1 = (function (){var statearr_80237 = state_80203;
(statearr_80237[(13)] = inst_80147);

(statearr_80237[(14)] = inst_80144);

(statearr_80237[(15)] = inst_80145);

(statearr_80237[(16)] = inst_80146);

return statearr_80237;
})();
var statearr_80238_80273 = state_80203__$1;
(statearr_80238_80273[(2)] = null);

(statearr_80238_80273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (10))){
var inst_80147 = (state_80203[(13)]);
var inst_80144 = (state_80203[(14)]);
var inst_80145 = (state_80203[(15)]);
var inst_80146 = (state_80203[(16)]);
var inst_80152 = cljs.core._nth.call(null,inst_80145,inst_80147);
var inst_80153 = cljs.core.async.muxch_STAR_.call(null,inst_80152);
var inst_80154 = cljs.core.async.close_BANG_.call(null,inst_80153);
var inst_80155 = (inst_80147 + (1));
var tmp80233 = inst_80144;
var tmp80234 = inst_80145;
var tmp80235 = inst_80146;
var inst_80144__$1 = tmp80233;
var inst_80145__$1 = tmp80234;
var inst_80146__$1 = tmp80235;
var inst_80147__$1 = inst_80155;
var state_80203__$1 = (function (){var statearr_80239 = state_80203;
(statearr_80239[(17)] = inst_80154);

(statearr_80239[(13)] = inst_80147__$1);

(statearr_80239[(14)] = inst_80144__$1);

(statearr_80239[(15)] = inst_80145__$1);

(statearr_80239[(16)] = inst_80146__$1);

return statearr_80239;
})();
var statearr_80240_80274 = state_80203__$1;
(statearr_80240_80274[(2)] = null);

(statearr_80240_80274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (18))){
var inst_80173 = (state_80203[(2)]);
var state_80203__$1 = state_80203;
var statearr_80241_80275 = state_80203__$1;
(statearr_80241_80275[(2)] = inst_80173);

(statearr_80241_80275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80204 === (8))){
var inst_80147 = (state_80203[(13)]);
var inst_80146 = (state_80203[(16)]);
var inst_80149 = (inst_80147 < inst_80146);
var inst_80150 = inst_80149;
var state_80203__$1 = state_80203;
if(cljs.core.truth_(inst_80150)){
var statearr_80242_80276 = state_80203__$1;
(statearr_80242_80276[(1)] = (10));

} else {
var statearr_80243_80277 = state_80203__$1;
(statearr_80243_80277[(1)] = (11));

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
});})(c__27974__auto___80249,mults,ensure_mult,p))
;
return ((function (switch__27884__auto__,c__27974__auto___80249,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_80244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80244[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_80244[(1)] = (1));

return statearr_80244;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_80203){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80245){if((e80245 instanceof Object)){
var ex__27888__auto__ = e80245;
var statearr_80246_80278 = state_80203;
(statearr_80246_80278[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80279 = state_80203;
state_80203 = G__80279;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_80203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_80203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___80249,mults,ensure_mult,p))
})();
var state__27976__auto__ = (function (){var statearr_80247 = f__27975__auto__.call(null);
(statearr_80247[(6)] = c__27974__auto___80249);

return statearr_80247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___80249,mults,ensure_mult,p))
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
var G__80281 = arguments.length;
switch (G__80281) {
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
var G__80284 = arguments.length;
switch (G__80284) {
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
var G__80287 = arguments.length;
switch (G__80287) {
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
var c__27974__auto___80354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___80354,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___80354,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_80326){
var state_val_80327 = (state_80326[(1)]);
if((state_val_80327 === (7))){
var state_80326__$1 = state_80326;
var statearr_80328_80355 = state_80326__$1;
(statearr_80328_80355[(2)] = null);

(statearr_80328_80355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (1))){
var state_80326__$1 = state_80326;
var statearr_80329_80356 = state_80326__$1;
(statearr_80329_80356[(2)] = null);

(statearr_80329_80356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (4))){
var inst_80290 = (state_80326[(7)]);
var inst_80292 = (inst_80290 < cnt);
var state_80326__$1 = state_80326;
if(cljs.core.truth_(inst_80292)){
var statearr_80330_80357 = state_80326__$1;
(statearr_80330_80357[(1)] = (6));

} else {
var statearr_80331_80358 = state_80326__$1;
(statearr_80331_80358[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (15))){
var inst_80322 = (state_80326[(2)]);
var state_80326__$1 = state_80326;
var statearr_80332_80359 = state_80326__$1;
(statearr_80332_80359[(2)] = inst_80322);

(statearr_80332_80359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (13))){
var inst_80315 = cljs.core.async.close_BANG_.call(null,out);
var state_80326__$1 = state_80326;
var statearr_80333_80360 = state_80326__$1;
(statearr_80333_80360[(2)] = inst_80315);

(statearr_80333_80360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (6))){
var state_80326__$1 = state_80326;
var statearr_80334_80361 = state_80326__$1;
(statearr_80334_80361[(2)] = null);

(statearr_80334_80361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (3))){
var inst_80324 = (state_80326[(2)]);
var state_80326__$1 = state_80326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80326__$1,inst_80324);
} else {
if((state_val_80327 === (12))){
var inst_80312 = (state_80326[(8)]);
var inst_80312__$1 = (state_80326[(2)]);
var inst_80313 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_80312__$1);
var state_80326__$1 = (function (){var statearr_80335 = state_80326;
(statearr_80335[(8)] = inst_80312__$1);

return statearr_80335;
})();
if(cljs.core.truth_(inst_80313)){
var statearr_80336_80362 = state_80326__$1;
(statearr_80336_80362[(1)] = (13));

} else {
var statearr_80337_80363 = state_80326__$1;
(statearr_80337_80363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (2))){
var inst_80289 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_80290 = (0);
var state_80326__$1 = (function (){var statearr_80338 = state_80326;
(statearr_80338[(7)] = inst_80290);

(statearr_80338[(9)] = inst_80289);

return statearr_80338;
})();
var statearr_80339_80364 = state_80326__$1;
(statearr_80339_80364[(2)] = null);

(statearr_80339_80364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (11))){
var inst_80290 = (state_80326[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_80326,(10),Object,null,(9));
var inst_80299 = chs__$1.call(null,inst_80290);
var inst_80300 = done.call(null,inst_80290);
var inst_80301 = cljs.core.async.take_BANG_.call(null,inst_80299,inst_80300);
var state_80326__$1 = state_80326;
var statearr_80340_80365 = state_80326__$1;
(statearr_80340_80365[(2)] = inst_80301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (9))){
var inst_80290 = (state_80326[(7)]);
var inst_80303 = (state_80326[(2)]);
var inst_80304 = (inst_80290 + (1));
var inst_80290__$1 = inst_80304;
var state_80326__$1 = (function (){var statearr_80341 = state_80326;
(statearr_80341[(7)] = inst_80290__$1);

(statearr_80341[(10)] = inst_80303);

return statearr_80341;
})();
var statearr_80342_80366 = state_80326__$1;
(statearr_80342_80366[(2)] = null);

(statearr_80342_80366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (5))){
var inst_80310 = (state_80326[(2)]);
var state_80326__$1 = (function (){var statearr_80343 = state_80326;
(statearr_80343[(11)] = inst_80310);

return statearr_80343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80326__$1,(12),dchan);
} else {
if((state_val_80327 === (14))){
var inst_80312 = (state_80326[(8)]);
var inst_80317 = cljs.core.apply.call(null,f,inst_80312);
var state_80326__$1 = state_80326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80326__$1,(16),out,inst_80317);
} else {
if((state_val_80327 === (16))){
var inst_80319 = (state_80326[(2)]);
var state_80326__$1 = (function (){var statearr_80344 = state_80326;
(statearr_80344[(12)] = inst_80319);

return statearr_80344;
})();
var statearr_80345_80367 = state_80326__$1;
(statearr_80345_80367[(2)] = null);

(statearr_80345_80367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (10))){
var inst_80294 = (state_80326[(2)]);
var inst_80295 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_80326__$1 = (function (){var statearr_80346 = state_80326;
(statearr_80346[(13)] = inst_80294);

return statearr_80346;
})();
var statearr_80347_80368 = state_80326__$1;
(statearr_80347_80368[(2)] = inst_80295);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80327 === (8))){
var inst_80308 = (state_80326[(2)]);
var state_80326__$1 = state_80326;
var statearr_80348_80369 = state_80326__$1;
(statearr_80348_80369[(2)] = inst_80308);

(statearr_80348_80369[(1)] = (5));


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
});})(c__27974__auto___80354,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27884__auto__,c__27974__auto___80354,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_80349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80349[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_80349[(1)] = (1));

return statearr_80349;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_80326){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80350){if((e80350 instanceof Object)){
var ex__27888__auto__ = e80350;
var statearr_80351_80370 = state_80326;
(statearr_80351_80370[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80371 = state_80326;
state_80326 = G__80371;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_80326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_80326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___80354,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27976__auto__ = (function (){var statearr_80352 = f__27975__auto__.call(null);
(statearr_80352[(6)] = c__27974__auto___80354);

return statearr_80352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___80354,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__80374 = arguments.length;
switch (G__80374) {
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
var c__27974__auto___80428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___80428,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___80428,out){
return (function (state_80406){
var state_val_80407 = (state_80406[(1)]);
if((state_val_80407 === (7))){
var inst_80386 = (state_80406[(7)]);
var inst_80385 = (state_80406[(8)]);
var inst_80385__$1 = (state_80406[(2)]);
var inst_80386__$1 = cljs.core.nth.call(null,inst_80385__$1,(0),null);
var inst_80387 = cljs.core.nth.call(null,inst_80385__$1,(1),null);
var inst_80388 = (inst_80386__$1 == null);
var state_80406__$1 = (function (){var statearr_80408 = state_80406;
(statearr_80408[(9)] = inst_80387);

(statearr_80408[(7)] = inst_80386__$1);

(statearr_80408[(8)] = inst_80385__$1);

return statearr_80408;
})();
if(cljs.core.truth_(inst_80388)){
var statearr_80409_80429 = state_80406__$1;
(statearr_80409_80429[(1)] = (8));

} else {
var statearr_80410_80430 = state_80406__$1;
(statearr_80410_80430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80407 === (1))){
var inst_80375 = cljs.core.vec.call(null,chs);
var inst_80376 = inst_80375;
var state_80406__$1 = (function (){var statearr_80411 = state_80406;
(statearr_80411[(10)] = inst_80376);

return statearr_80411;
})();
var statearr_80412_80431 = state_80406__$1;
(statearr_80412_80431[(2)] = null);

(statearr_80412_80431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80407 === (4))){
var inst_80376 = (state_80406[(10)]);
var state_80406__$1 = state_80406;
return cljs.core.async.ioc_alts_BANG_.call(null,state_80406__$1,(7),inst_80376);
} else {
if((state_val_80407 === (6))){
var inst_80402 = (state_80406[(2)]);
var state_80406__$1 = state_80406;
var statearr_80413_80432 = state_80406__$1;
(statearr_80413_80432[(2)] = inst_80402);

(statearr_80413_80432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80407 === (3))){
var inst_80404 = (state_80406[(2)]);
var state_80406__$1 = state_80406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80406__$1,inst_80404);
} else {
if((state_val_80407 === (2))){
var inst_80376 = (state_80406[(10)]);
var inst_80378 = cljs.core.count.call(null,inst_80376);
var inst_80379 = (inst_80378 > (0));
var state_80406__$1 = state_80406;
if(cljs.core.truth_(inst_80379)){
var statearr_80415_80433 = state_80406__$1;
(statearr_80415_80433[(1)] = (4));

} else {
var statearr_80416_80434 = state_80406__$1;
(statearr_80416_80434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80407 === (11))){
var inst_80376 = (state_80406[(10)]);
var inst_80395 = (state_80406[(2)]);
var tmp80414 = inst_80376;
var inst_80376__$1 = tmp80414;
var state_80406__$1 = (function (){var statearr_80417 = state_80406;
(statearr_80417[(10)] = inst_80376__$1);

(statearr_80417[(11)] = inst_80395);

return statearr_80417;
})();
var statearr_80418_80435 = state_80406__$1;
(statearr_80418_80435[(2)] = null);

(statearr_80418_80435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80407 === (9))){
var inst_80386 = (state_80406[(7)]);
var state_80406__$1 = state_80406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80406__$1,(11),out,inst_80386);
} else {
if((state_val_80407 === (5))){
var inst_80400 = cljs.core.async.close_BANG_.call(null,out);
var state_80406__$1 = state_80406;
var statearr_80419_80436 = state_80406__$1;
(statearr_80419_80436[(2)] = inst_80400);

(statearr_80419_80436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80407 === (10))){
var inst_80398 = (state_80406[(2)]);
var state_80406__$1 = state_80406;
var statearr_80420_80437 = state_80406__$1;
(statearr_80420_80437[(2)] = inst_80398);

(statearr_80420_80437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80407 === (8))){
var inst_80387 = (state_80406[(9)]);
var inst_80386 = (state_80406[(7)]);
var inst_80376 = (state_80406[(10)]);
var inst_80385 = (state_80406[(8)]);
var inst_80390 = (function (){var cs = inst_80376;
var vec__80381 = inst_80385;
var v = inst_80386;
var c = inst_80387;
return ((function (cs,vec__80381,v,c,inst_80387,inst_80386,inst_80376,inst_80385,state_val_80407,c__27974__auto___80428,out){
return (function (p1__80372_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__80372_SHARP_);
});
;})(cs,vec__80381,v,c,inst_80387,inst_80386,inst_80376,inst_80385,state_val_80407,c__27974__auto___80428,out))
})();
var inst_80391 = cljs.core.filterv.call(null,inst_80390,inst_80376);
var inst_80376__$1 = inst_80391;
var state_80406__$1 = (function (){var statearr_80421 = state_80406;
(statearr_80421[(10)] = inst_80376__$1);

return statearr_80421;
})();
var statearr_80422_80438 = state_80406__$1;
(statearr_80422_80438[(2)] = null);

(statearr_80422_80438[(1)] = (2));


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
});})(c__27974__auto___80428,out))
;
return ((function (switch__27884__auto__,c__27974__auto___80428,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_80423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80423[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_80423[(1)] = (1));

return statearr_80423;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_80406){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80424){if((e80424 instanceof Object)){
var ex__27888__auto__ = e80424;
var statearr_80425_80439 = state_80406;
(statearr_80425_80439[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80440 = state_80406;
state_80406 = G__80440;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_80406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_80406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___80428,out))
})();
var state__27976__auto__ = (function (){var statearr_80426 = f__27975__auto__.call(null);
(statearr_80426[(6)] = c__27974__auto___80428);

return statearr_80426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___80428,out))
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
var G__80442 = arguments.length;
switch (G__80442) {
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
var c__27974__auto___80487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___80487,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___80487,out){
return (function (state_80466){
var state_val_80467 = (state_80466[(1)]);
if((state_val_80467 === (7))){
var inst_80448 = (state_80466[(7)]);
var inst_80448__$1 = (state_80466[(2)]);
var inst_80449 = (inst_80448__$1 == null);
var inst_80450 = cljs.core.not.call(null,inst_80449);
var state_80466__$1 = (function (){var statearr_80468 = state_80466;
(statearr_80468[(7)] = inst_80448__$1);

return statearr_80468;
})();
if(inst_80450){
var statearr_80469_80488 = state_80466__$1;
(statearr_80469_80488[(1)] = (8));

} else {
var statearr_80470_80489 = state_80466__$1;
(statearr_80470_80489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80467 === (1))){
var inst_80443 = (0);
var state_80466__$1 = (function (){var statearr_80471 = state_80466;
(statearr_80471[(8)] = inst_80443);

return statearr_80471;
})();
var statearr_80472_80490 = state_80466__$1;
(statearr_80472_80490[(2)] = null);

(statearr_80472_80490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80467 === (4))){
var state_80466__$1 = state_80466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80466__$1,(7),ch);
} else {
if((state_val_80467 === (6))){
var inst_80461 = (state_80466[(2)]);
var state_80466__$1 = state_80466;
var statearr_80473_80491 = state_80466__$1;
(statearr_80473_80491[(2)] = inst_80461);

(statearr_80473_80491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80467 === (3))){
var inst_80463 = (state_80466[(2)]);
var inst_80464 = cljs.core.async.close_BANG_.call(null,out);
var state_80466__$1 = (function (){var statearr_80474 = state_80466;
(statearr_80474[(9)] = inst_80463);

return statearr_80474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80466__$1,inst_80464);
} else {
if((state_val_80467 === (2))){
var inst_80443 = (state_80466[(8)]);
var inst_80445 = (inst_80443 < n);
var state_80466__$1 = state_80466;
if(cljs.core.truth_(inst_80445)){
var statearr_80475_80492 = state_80466__$1;
(statearr_80475_80492[(1)] = (4));

} else {
var statearr_80476_80493 = state_80466__$1;
(statearr_80476_80493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80467 === (11))){
var inst_80443 = (state_80466[(8)]);
var inst_80453 = (state_80466[(2)]);
var inst_80454 = (inst_80443 + (1));
var inst_80443__$1 = inst_80454;
var state_80466__$1 = (function (){var statearr_80477 = state_80466;
(statearr_80477[(8)] = inst_80443__$1);

(statearr_80477[(10)] = inst_80453);

return statearr_80477;
})();
var statearr_80478_80494 = state_80466__$1;
(statearr_80478_80494[(2)] = null);

(statearr_80478_80494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80467 === (9))){
var state_80466__$1 = state_80466;
var statearr_80479_80495 = state_80466__$1;
(statearr_80479_80495[(2)] = null);

(statearr_80479_80495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80467 === (5))){
var state_80466__$1 = state_80466;
var statearr_80480_80496 = state_80466__$1;
(statearr_80480_80496[(2)] = null);

(statearr_80480_80496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80467 === (10))){
var inst_80458 = (state_80466[(2)]);
var state_80466__$1 = state_80466;
var statearr_80481_80497 = state_80466__$1;
(statearr_80481_80497[(2)] = inst_80458);

(statearr_80481_80497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80467 === (8))){
var inst_80448 = (state_80466[(7)]);
var state_80466__$1 = state_80466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80466__$1,(11),out,inst_80448);
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
});})(c__27974__auto___80487,out))
;
return ((function (switch__27884__auto__,c__27974__auto___80487,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_80482 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80482[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_80482[(1)] = (1));

return statearr_80482;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_80466){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80483){if((e80483 instanceof Object)){
var ex__27888__auto__ = e80483;
var statearr_80484_80498 = state_80466;
(statearr_80484_80498[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80499 = state_80466;
state_80466 = G__80499;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_80466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_80466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___80487,out))
})();
var state__27976__auto__ = (function (){var statearr_80485 = f__27975__auto__.call(null);
(statearr_80485[(6)] = c__27974__auto___80487);

return statearr_80485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___80487,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async80501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80501 = (function (f,ch,meta80502){
this.f = f;
this.ch = ch;
this.meta80502 = meta80502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80503,meta80502__$1){
var self__ = this;
var _80503__$1 = this;
return (new cljs.core.async.t_cljs$core$async80501(self__.f,self__.ch,meta80502__$1));
});

cljs.core.async.t_cljs$core$async80501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80503){
var self__ = this;
var _80503__$1 = this;
return self__.meta80502;
});

cljs.core.async.t_cljs$core$async80501.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80501.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80501.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80501.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80501.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async80504 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80504 = (function (f,ch,meta80502,_,fn1,meta80505){
this.f = f;
this.ch = ch;
this.meta80502 = meta80502;
this._ = _;
this.fn1 = fn1;
this.meta80505 = meta80505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_80506,meta80505__$1){
var self__ = this;
var _80506__$1 = this;
return (new cljs.core.async.t_cljs$core$async80504(self__.f,self__.ch,self__.meta80502,self__._,self__.fn1,meta80505__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async80504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_80506){
var self__ = this;
var _80506__$1 = this;
return self__.meta80505;
});})(___$1))
;

cljs.core.async.t_cljs$core$async80504.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async80504.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async80504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__80500_SHARP_){
return f1.call(null,(((p1__80500_SHARP_ == null))?null:self__.f.call(null,p1__80500_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async80504.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80502","meta80502",-391108986,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async80501","cljs.core.async/t_cljs$core$async80501",-790072127,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta80505","meta80505",1643740171,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async80504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80504";

cljs.core.async.t_cljs$core$async80504.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async80504");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80504.
 */
cljs.core.async.__GT_t_cljs$core$async80504 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async80504(f__$1,ch__$1,meta80502__$1,___$2,fn1__$1,meta80505){
return (new cljs.core.async.t_cljs$core$async80504(f__$1,ch__$1,meta80502__$1,___$2,fn1__$1,meta80505));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async80504(self__.f,self__.ch,self__.meta80502,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async80501.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80501.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async80501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80502","meta80502",-391108986,null)], null);
});

cljs.core.async.t_cljs$core$async80501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80501";

cljs.core.async.t_cljs$core$async80501.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async80501");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80501.
 */
cljs.core.async.__GT_t_cljs$core$async80501 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async80501(f__$1,ch__$1,meta80502){
return (new cljs.core.async.t_cljs$core$async80501(f__$1,ch__$1,meta80502));
});

}

return (new cljs.core.async.t_cljs$core$async80501(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async80507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80507 = (function (f,ch,meta80508){
this.f = f;
this.ch = ch;
this.meta80508 = meta80508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80509,meta80508__$1){
var self__ = this;
var _80509__$1 = this;
return (new cljs.core.async.t_cljs$core$async80507(self__.f,self__.ch,meta80508__$1));
});

cljs.core.async.t_cljs$core$async80507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80509){
var self__ = this;
var _80509__$1 = this;
return self__.meta80508;
});

cljs.core.async.t_cljs$core$async80507.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80507.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80507.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80507.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async80507.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80507.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async80507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80508","meta80508",-968676109,null)], null);
});

cljs.core.async.t_cljs$core$async80507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80507";

cljs.core.async.t_cljs$core$async80507.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async80507");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80507.
 */
cljs.core.async.__GT_t_cljs$core$async80507 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async80507(f__$1,ch__$1,meta80508){
return (new cljs.core.async.t_cljs$core$async80507(f__$1,ch__$1,meta80508));
});

}

return (new cljs.core.async.t_cljs$core$async80507(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async80510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80510 = (function (p,ch,meta80511){
this.p = p;
this.ch = ch;
this.meta80511 = meta80511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80512,meta80511__$1){
var self__ = this;
var _80512__$1 = this;
return (new cljs.core.async.t_cljs$core$async80510(self__.p,self__.ch,meta80511__$1));
});

cljs.core.async.t_cljs$core$async80510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80512){
var self__ = this;
var _80512__$1 = this;
return self__.meta80511;
});

cljs.core.async.t_cljs$core$async80510.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80510.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80510.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async80510.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async80510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80511","meta80511",-2133054138,null)], null);
});

cljs.core.async.t_cljs$core$async80510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80510";

cljs.core.async.t_cljs$core$async80510.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async80510");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80510.
 */
cljs.core.async.__GT_t_cljs$core$async80510 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async80510(p__$1,ch__$1,meta80511){
return (new cljs.core.async.t_cljs$core$async80510(p__$1,ch__$1,meta80511));
});

}

return (new cljs.core.async.t_cljs$core$async80510(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__80514 = arguments.length;
switch (G__80514) {
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
var c__27974__auto___80554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___80554,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___80554,out){
return (function (state_80535){
var state_val_80536 = (state_80535[(1)]);
if((state_val_80536 === (7))){
var inst_80531 = (state_80535[(2)]);
var state_80535__$1 = state_80535;
var statearr_80537_80555 = state_80535__$1;
(statearr_80537_80555[(2)] = inst_80531);

(statearr_80537_80555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80536 === (1))){
var state_80535__$1 = state_80535;
var statearr_80538_80556 = state_80535__$1;
(statearr_80538_80556[(2)] = null);

(statearr_80538_80556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80536 === (4))){
var inst_80517 = (state_80535[(7)]);
var inst_80517__$1 = (state_80535[(2)]);
var inst_80518 = (inst_80517__$1 == null);
var state_80535__$1 = (function (){var statearr_80539 = state_80535;
(statearr_80539[(7)] = inst_80517__$1);

return statearr_80539;
})();
if(cljs.core.truth_(inst_80518)){
var statearr_80540_80557 = state_80535__$1;
(statearr_80540_80557[(1)] = (5));

} else {
var statearr_80541_80558 = state_80535__$1;
(statearr_80541_80558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80536 === (6))){
var inst_80517 = (state_80535[(7)]);
var inst_80522 = p.call(null,inst_80517);
var state_80535__$1 = state_80535;
if(cljs.core.truth_(inst_80522)){
var statearr_80542_80559 = state_80535__$1;
(statearr_80542_80559[(1)] = (8));

} else {
var statearr_80543_80560 = state_80535__$1;
(statearr_80543_80560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80536 === (3))){
var inst_80533 = (state_80535[(2)]);
var state_80535__$1 = state_80535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80535__$1,inst_80533);
} else {
if((state_val_80536 === (2))){
var state_80535__$1 = state_80535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80535__$1,(4),ch);
} else {
if((state_val_80536 === (11))){
var inst_80525 = (state_80535[(2)]);
var state_80535__$1 = state_80535;
var statearr_80544_80561 = state_80535__$1;
(statearr_80544_80561[(2)] = inst_80525);

(statearr_80544_80561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80536 === (9))){
var state_80535__$1 = state_80535;
var statearr_80545_80562 = state_80535__$1;
(statearr_80545_80562[(2)] = null);

(statearr_80545_80562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80536 === (5))){
var inst_80520 = cljs.core.async.close_BANG_.call(null,out);
var state_80535__$1 = state_80535;
var statearr_80546_80563 = state_80535__$1;
(statearr_80546_80563[(2)] = inst_80520);

(statearr_80546_80563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80536 === (10))){
var inst_80528 = (state_80535[(2)]);
var state_80535__$1 = (function (){var statearr_80547 = state_80535;
(statearr_80547[(8)] = inst_80528);

return statearr_80547;
})();
var statearr_80548_80564 = state_80535__$1;
(statearr_80548_80564[(2)] = null);

(statearr_80548_80564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80536 === (8))){
var inst_80517 = (state_80535[(7)]);
var state_80535__$1 = state_80535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80535__$1,(11),out,inst_80517);
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
});})(c__27974__auto___80554,out))
;
return ((function (switch__27884__auto__,c__27974__auto___80554,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_80549 = [null,null,null,null,null,null,null,null,null];
(statearr_80549[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_80549[(1)] = (1));

return statearr_80549;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_80535){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80550){if((e80550 instanceof Object)){
var ex__27888__auto__ = e80550;
var statearr_80551_80565 = state_80535;
(statearr_80551_80565[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80566 = state_80535;
state_80535 = G__80566;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_80535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_80535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___80554,out))
})();
var state__27976__auto__ = (function (){var statearr_80552 = f__27975__auto__.call(null);
(statearr_80552[(6)] = c__27974__auto___80554);

return statearr_80552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___80554,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__80568 = arguments.length;
switch (G__80568) {
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
return (function (state_80631){
var state_val_80632 = (state_80631[(1)]);
if((state_val_80632 === (7))){
var inst_80627 = (state_80631[(2)]);
var state_80631__$1 = state_80631;
var statearr_80633_80671 = state_80631__$1;
(statearr_80633_80671[(2)] = inst_80627);

(statearr_80633_80671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (20))){
var inst_80597 = (state_80631[(7)]);
var inst_80608 = (state_80631[(2)]);
var inst_80609 = cljs.core.next.call(null,inst_80597);
var inst_80583 = inst_80609;
var inst_80584 = null;
var inst_80585 = (0);
var inst_80586 = (0);
var state_80631__$1 = (function (){var statearr_80634 = state_80631;
(statearr_80634[(8)] = inst_80585);

(statearr_80634[(9)] = inst_80584);

(statearr_80634[(10)] = inst_80608);

(statearr_80634[(11)] = inst_80586);

(statearr_80634[(12)] = inst_80583);

return statearr_80634;
})();
var statearr_80635_80672 = state_80631__$1;
(statearr_80635_80672[(2)] = null);

(statearr_80635_80672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (1))){
var state_80631__$1 = state_80631;
var statearr_80636_80673 = state_80631__$1;
(statearr_80636_80673[(2)] = null);

(statearr_80636_80673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (4))){
var inst_80572 = (state_80631[(13)]);
var inst_80572__$1 = (state_80631[(2)]);
var inst_80573 = (inst_80572__$1 == null);
var state_80631__$1 = (function (){var statearr_80637 = state_80631;
(statearr_80637[(13)] = inst_80572__$1);

return statearr_80637;
})();
if(cljs.core.truth_(inst_80573)){
var statearr_80638_80674 = state_80631__$1;
(statearr_80638_80674[(1)] = (5));

} else {
var statearr_80639_80675 = state_80631__$1;
(statearr_80639_80675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (15))){
var state_80631__$1 = state_80631;
var statearr_80643_80676 = state_80631__$1;
(statearr_80643_80676[(2)] = null);

(statearr_80643_80676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (21))){
var state_80631__$1 = state_80631;
var statearr_80644_80677 = state_80631__$1;
(statearr_80644_80677[(2)] = null);

(statearr_80644_80677[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (13))){
var inst_80585 = (state_80631[(8)]);
var inst_80584 = (state_80631[(9)]);
var inst_80586 = (state_80631[(11)]);
var inst_80583 = (state_80631[(12)]);
var inst_80593 = (state_80631[(2)]);
var inst_80594 = (inst_80586 + (1));
var tmp80640 = inst_80585;
var tmp80641 = inst_80584;
var tmp80642 = inst_80583;
var inst_80583__$1 = tmp80642;
var inst_80584__$1 = tmp80641;
var inst_80585__$1 = tmp80640;
var inst_80586__$1 = inst_80594;
var state_80631__$1 = (function (){var statearr_80645 = state_80631;
(statearr_80645[(8)] = inst_80585__$1);

(statearr_80645[(9)] = inst_80584__$1);

(statearr_80645[(14)] = inst_80593);

(statearr_80645[(11)] = inst_80586__$1);

(statearr_80645[(12)] = inst_80583__$1);

return statearr_80645;
})();
var statearr_80646_80678 = state_80631__$1;
(statearr_80646_80678[(2)] = null);

(statearr_80646_80678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (22))){
var state_80631__$1 = state_80631;
var statearr_80647_80679 = state_80631__$1;
(statearr_80647_80679[(2)] = null);

(statearr_80647_80679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (6))){
var inst_80572 = (state_80631[(13)]);
var inst_80581 = f.call(null,inst_80572);
var inst_80582 = cljs.core.seq.call(null,inst_80581);
var inst_80583 = inst_80582;
var inst_80584 = null;
var inst_80585 = (0);
var inst_80586 = (0);
var state_80631__$1 = (function (){var statearr_80648 = state_80631;
(statearr_80648[(8)] = inst_80585);

(statearr_80648[(9)] = inst_80584);

(statearr_80648[(11)] = inst_80586);

(statearr_80648[(12)] = inst_80583);

return statearr_80648;
})();
var statearr_80649_80680 = state_80631__$1;
(statearr_80649_80680[(2)] = null);

(statearr_80649_80680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (17))){
var inst_80597 = (state_80631[(7)]);
var inst_80601 = cljs.core.chunk_first.call(null,inst_80597);
var inst_80602 = cljs.core.chunk_rest.call(null,inst_80597);
var inst_80603 = cljs.core.count.call(null,inst_80601);
var inst_80583 = inst_80602;
var inst_80584 = inst_80601;
var inst_80585 = inst_80603;
var inst_80586 = (0);
var state_80631__$1 = (function (){var statearr_80650 = state_80631;
(statearr_80650[(8)] = inst_80585);

(statearr_80650[(9)] = inst_80584);

(statearr_80650[(11)] = inst_80586);

(statearr_80650[(12)] = inst_80583);

return statearr_80650;
})();
var statearr_80651_80681 = state_80631__$1;
(statearr_80651_80681[(2)] = null);

(statearr_80651_80681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (3))){
var inst_80629 = (state_80631[(2)]);
var state_80631__$1 = state_80631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80631__$1,inst_80629);
} else {
if((state_val_80632 === (12))){
var inst_80617 = (state_80631[(2)]);
var state_80631__$1 = state_80631;
var statearr_80652_80682 = state_80631__$1;
(statearr_80652_80682[(2)] = inst_80617);

(statearr_80652_80682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (2))){
var state_80631__$1 = state_80631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80631__$1,(4),in$);
} else {
if((state_val_80632 === (23))){
var inst_80625 = (state_80631[(2)]);
var state_80631__$1 = state_80631;
var statearr_80653_80683 = state_80631__$1;
(statearr_80653_80683[(2)] = inst_80625);

(statearr_80653_80683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (19))){
var inst_80612 = (state_80631[(2)]);
var state_80631__$1 = state_80631;
var statearr_80654_80684 = state_80631__$1;
(statearr_80654_80684[(2)] = inst_80612);

(statearr_80654_80684[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (11))){
var inst_80597 = (state_80631[(7)]);
var inst_80583 = (state_80631[(12)]);
var inst_80597__$1 = cljs.core.seq.call(null,inst_80583);
var state_80631__$1 = (function (){var statearr_80655 = state_80631;
(statearr_80655[(7)] = inst_80597__$1);

return statearr_80655;
})();
if(inst_80597__$1){
var statearr_80656_80685 = state_80631__$1;
(statearr_80656_80685[(1)] = (14));

} else {
var statearr_80657_80686 = state_80631__$1;
(statearr_80657_80686[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (9))){
var inst_80619 = (state_80631[(2)]);
var inst_80620 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_80631__$1 = (function (){var statearr_80658 = state_80631;
(statearr_80658[(15)] = inst_80619);

return statearr_80658;
})();
if(cljs.core.truth_(inst_80620)){
var statearr_80659_80687 = state_80631__$1;
(statearr_80659_80687[(1)] = (21));

} else {
var statearr_80660_80688 = state_80631__$1;
(statearr_80660_80688[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (5))){
var inst_80575 = cljs.core.async.close_BANG_.call(null,out);
var state_80631__$1 = state_80631;
var statearr_80661_80689 = state_80631__$1;
(statearr_80661_80689[(2)] = inst_80575);

(statearr_80661_80689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (14))){
var inst_80597 = (state_80631[(7)]);
var inst_80599 = cljs.core.chunked_seq_QMARK_.call(null,inst_80597);
var state_80631__$1 = state_80631;
if(inst_80599){
var statearr_80662_80690 = state_80631__$1;
(statearr_80662_80690[(1)] = (17));

} else {
var statearr_80663_80691 = state_80631__$1;
(statearr_80663_80691[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (16))){
var inst_80615 = (state_80631[(2)]);
var state_80631__$1 = state_80631;
var statearr_80664_80692 = state_80631__$1;
(statearr_80664_80692[(2)] = inst_80615);

(statearr_80664_80692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80632 === (10))){
var inst_80584 = (state_80631[(9)]);
var inst_80586 = (state_80631[(11)]);
var inst_80591 = cljs.core._nth.call(null,inst_80584,inst_80586);
var state_80631__$1 = state_80631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80631__$1,(13),out,inst_80591);
} else {
if((state_val_80632 === (18))){
var inst_80597 = (state_80631[(7)]);
var inst_80606 = cljs.core.first.call(null,inst_80597);
var state_80631__$1 = state_80631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80631__$1,(20),out,inst_80606);
} else {
if((state_val_80632 === (8))){
var inst_80585 = (state_80631[(8)]);
var inst_80586 = (state_80631[(11)]);
var inst_80588 = (inst_80586 < inst_80585);
var inst_80589 = inst_80588;
var state_80631__$1 = state_80631;
if(cljs.core.truth_(inst_80589)){
var statearr_80665_80693 = state_80631__$1;
(statearr_80665_80693[(1)] = (10));

} else {
var statearr_80666_80694 = state_80631__$1;
(statearr_80666_80694[(1)] = (11));

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
var statearr_80667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80667[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__);

(statearr_80667[(1)] = (1));

return statearr_80667;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____1 = (function (state_80631){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80668){if((e80668 instanceof Object)){
var ex__27888__auto__ = e80668;
var statearr_80669_80695 = state_80631;
(statearr_80669_80695[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80696 = state_80631;
state_80631 = G__80696;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__ = function(state_80631){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____1.call(this,state_80631);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27885__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_80670 = f__27975__auto__.call(null);
(statearr_80670[(6)] = c__27974__auto__);

return statearr_80670;
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
var G__80698 = arguments.length;
switch (G__80698) {
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
var G__80701 = arguments.length;
switch (G__80701) {
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
var G__80704 = arguments.length;
switch (G__80704) {
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
var c__27974__auto___80751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___80751,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___80751,out){
return (function (state_80728){
var state_val_80729 = (state_80728[(1)]);
if((state_val_80729 === (7))){
var inst_80723 = (state_80728[(2)]);
var state_80728__$1 = state_80728;
var statearr_80730_80752 = state_80728__$1;
(statearr_80730_80752[(2)] = inst_80723);

(statearr_80730_80752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80729 === (1))){
var inst_80705 = null;
var state_80728__$1 = (function (){var statearr_80731 = state_80728;
(statearr_80731[(7)] = inst_80705);

return statearr_80731;
})();
var statearr_80732_80753 = state_80728__$1;
(statearr_80732_80753[(2)] = null);

(statearr_80732_80753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80729 === (4))){
var inst_80708 = (state_80728[(8)]);
var inst_80708__$1 = (state_80728[(2)]);
var inst_80709 = (inst_80708__$1 == null);
var inst_80710 = cljs.core.not.call(null,inst_80709);
var state_80728__$1 = (function (){var statearr_80733 = state_80728;
(statearr_80733[(8)] = inst_80708__$1);

return statearr_80733;
})();
if(inst_80710){
var statearr_80734_80754 = state_80728__$1;
(statearr_80734_80754[(1)] = (5));

} else {
var statearr_80735_80755 = state_80728__$1;
(statearr_80735_80755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80729 === (6))){
var state_80728__$1 = state_80728;
var statearr_80736_80756 = state_80728__$1;
(statearr_80736_80756[(2)] = null);

(statearr_80736_80756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80729 === (3))){
var inst_80725 = (state_80728[(2)]);
var inst_80726 = cljs.core.async.close_BANG_.call(null,out);
var state_80728__$1 = (function (){var statearr_80737 = state_80728;
(statearr_80737[(9)] = inst_80725);

return statearr_80737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80728__$1,inst_80726);
} else {
if((state_val_80729 === (2))){
var state_80728__$1 = state_80728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80728__$1,(4),ch);
} else {
if((state_val_80729 === (11))){
var inst_80708 = (state_80728[(8)]);
var inst_80717 = (state_80728[(2)]);
var inst_80705 = inst_80708;
var state_80728__$1 = (function (){var statearr_80738 = state_80728;
(statearr_80738[(7)] = inst_80705);

(statearr_80738[(10)] = inst_80717);

return statearr_80738;
})();
var statearr_80739_80757 = state_80728__$1;
(statearr_80739_80757[(2)] = null);

(statearr_80739_80757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80729 === (9))){
var inst_80708 = (state_80728[(8)]);
var state_80728__$1 = state_80728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80728__$1,(11),out,inst_80708);
} else {
if((state_val_80729 === (5))){
var inst_80705 = (state_80728[(7)]);
var inst_80708 = (state_80728[(8)]);
var inst_80712 = cljs.core._EQ_.call(null,inst_80708,inst_80705);
var state_80728__$1 = state_80728;
if(inst_80712){
var statearr_80741_80758 = state_80728__$1;
(statearr_80741_80758[(1)] = (8));

} else {
var statearr_80742_80759 = state_80728__$1;
(statearr_80742_80759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80729 === (10))){
var inst_80720 = (state_80728[(2)]);
var state_80728__$1 = state_80728;
var statearr_80743_80760 = state_80728__$1;
(statearr_80743_80760[(2)] = inst_80720);

(statearr_80743_80760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80729 === (8))){
var inst_80705 = (state_80728[(7)]);
var tmp80740 = inst_80705;
var inst_80705__$1 = tmp80740;
var state_80728__$1 = (function (){var statearr_80744 = state_80728;
(statearr_80744[(7)] = inst_80705__$1);

return statearr_80744;
})();
var statearr_80745_80761 = state_80728__$1;
(statearr_80745_80761[(2)] = null);

(statearr_80745_80761[(1)] = (2));


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
});})(c__27974__auto___80751,out))
;
return ((function (switch__27884__auto__,c__27974__auto___80751,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_80746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80746[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_80746[(1)] = (1));

return statearr_80746;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_80728){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80747){if((e80747 instanceof Object)){
var ex__27888__auto__ = e80747;
var statearr_80748_80762 = state_80728;
(statearr_80748_80762[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80763 = state_80728;
state_80728 = G__80763;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_80728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_80728);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___80751,out))
})();
var state__27976__auto__ = (function (){var statearr_80749 = f__27975__auto__.call(null);
(statearr_80749[(6)] = c__27974__auto___80751);

return statearr_80749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___80751,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__80765 = arguments.length;
switch (G__80765) {
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
var c__27974__auto___80831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___80831,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___80831,out){
return (function (state_80803){
var state_val_80804 = (state_80803[(1)]);
if((state_val_80804 === (7))){
var inst_80799 = (state_80803[(2)]);
var state_80803__$1 = state_80803;
var statearr_80805_80832 = state_80803__$1;
(statearr_80805_80832[(2)] = inst_80799);

(statearr_80805_80832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (1))){
var inst_80766 = (new Array(n));
var inst_80767 = inst_80766;
var inst_80768 = (0);
var state_80803__$1 = (function (){var statearr_80806 = state_80803;
(statearr_80806[(7)] = inst_80767);

(statearr_80806[(8)] = inst_80768);

return statearr_80806;
})();
var statearr_80807_80833 = state_80803__$1;
(statearr_80807_80833[(2)] = null);

(statearr_80807_80833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (4))){
var inst_80771 = (state_80803[(9)]);
var inst_80771__$1 = (state_80803[(2)]);
var inst_80772 = (inst_80771__$1 == null);
var inst_80773 = cljs.core.not.call(null,inst_80772);
var state_80803__$1 = (function (){var statearr_80808 = state_80803;
(statearr_80808[(9)] = inst_80771__$1);

return statearr_80808;
})();
if(inst_80773){
var statearr_80809_80834 = state_80803__$1;
(statearr_80809_80834[(1)] = (5));

} else {
var statearr_80810_80835 = state_80803__$1;
(statearr_80810_80835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (15))){
var inst_80793 = (state_80803[(2)]);
var state_80803__$1 = state_80803;
var statearr_80811_80836 = state_80803__$1;
(statearr_80811_80836[(2)] = inst_80793);

(statearr_80811_80836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (13))){
var state_80803__$1 = state_80803;
var statearr_80812_80837 = state_80803__$1;
(statearr_80812_80837[(2)] = null);

(statearr_80812_80837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (6))){
var inst_80768 = (state_80803[(8)]);
var inst_80789 = (inst_80768 > (0));
var state_80803__$1 = state_80803;
if(cljs.core.truth_(inst_80789)){
var statearr_80813_80838 = state_80803__$1;
(statearr_80813_80838[(1)] = (12));

} else {
var statearr_80814_80839 = state_80803__$1;
(statearr_80814_80839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (3))){
var inst_80801 = (state_80803[(2)]);
var state_80803__$1 = state_80803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80803__$1,inst_80801);
} else {
if((state_val_80804 === (12))){
var inst_80767 = (state_80803[(7)]);
var inst_80791 = cljs.core.vec.call(null,inst_80767);
var state_80803__$1 = state_80803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80803__$1,(15),out,inst_80791);
} else {
if((state_val_80804 === (2))){
var state_80803__$1 = state_80803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80803__$1,(4),ch);
} else {
if((state_val_80804 === (11))){
var inst_80783 = (state_80803[(2)]);
var inst_80784 = (new Array(n));
var inst_80767 = inst_80784;
var inst_80768 = (0);
var state_80803__$1 = (function (){var statearr_80815 = state_80803;
(statearr_80815[(10)] = inst_80783);

(statearr_80815[(7)] = inst_80767);

(statearr_80815[(8)] = inst_80768);

return statearr_80815;
})();
var statearr_80816_80840 = state_80803__$1;
(statearr_80816_80840[(2)] = null);

(statearr_80816_80840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (9))){
var inst_80767 = (state_80803[(7)]);
var inst_80781 = cljs.core.vec.call(null,inst_80767);
var state_80803__$1 = state_80803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80803__$1,(11),out,inst_80781);
} else {
if((state_val_80804 === (5))){
var inst_80767 = (state_80803[(7)]);
var inst_80776 = (state_80803[(11)]);
var inst_80768 = (state_80803[(8)]);
var inst_80771 = (state_80803[(9)]);
var inst_80775 = (inst_80767[inst_80768] = inst_80771);
var inst_80776__$1 = (inst_80768 + (1));
var inst_80777 = (inst_80776__$1 < n);
var state_80803__$1 = (function (){var statearr_80817 = state_80803;
(statearr_80817[(11)] = inst_80776__$1);

(statearr_80817[(12)] = inst_80775);

return statearr_80817;
})();
if(cljs.core.truth_(inst_80777)){
var statearr_80818_80841 = state_80803__$1;
(statearr_80818_80841[(1)] = (8));

} else {
var statearr_80819_80842 = state_80803__$1;
(statearr_80819_80842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (14))){
var inst_80796 = (state_80803[(2)]);
var inst_80797 = cljs.core.async.close_BANG_.call(null,out);
var state_80803__$1 = (function (){var statearr_80821 = state_80803;
(statearr_80821[(13)] = inst_80796);

return statearr_80821;
})();
var statearr_80822_80843 = state_80803__$1;
(statearr_80822_80843[(2)] = inst_80797);

(statearr_80822_80843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (10))){
var inst_80787 = (state_80803[(2)]);
var state_80803__$1 = state_80803;
var statearr_80823_80844 = state_80803__$1;
(statearr_80823_80844[(2)] = inst_80787);

(statearr_80823_80844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80804 === (8))){
var inst_80767 = (state_80803[(7)]);
var inst_80776 = (state_80803[(11)]);
var tmp80820 = inst_80767;
var inst_80767__$1 = tmp80820;
var inst_80768 = inst_80776;
var state_80803__$1 = (function (){var statearr_80824 = state_80803;
(statearr_80824[(7)] = inst_80767__$1);

(statearr_80824[(8)] = inst_80768);

return statearr_80824;
})();
var statearr_80825_80845 = state_80803__$1;
(statearr_80825_80845[(2)] = null);

(statearr_80825_80845[(1)] = (2));


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
});})(c__27974__auto___80831,out))
;
return ((function (switch__27884__auto__,c__27974__auto___80831,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_80826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80826[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_80826[(1)] = (1));

return statearr_80826;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_80803){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80827){if((e80827 instanceof Object)){
var ex__27888__auto__ = e80827;
var statearr_80828_80846 = state_80803;
(statearr_80828_80846[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80847 = state_80803;
state_80803 = G__80847;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_80803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_80803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___80831,out))
})();
var state__27976__auto__ = (function (){var statearr_80829 = f__27975__auto__.call(null);
(statearr_80829[(6)] = c__27974__auto___80831);

return statearr_80829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___80831,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__80849 = arguments.length;
switch (G__80849) {
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
var c__27974__auto___80919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___80919,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___80919,out){
return (function (state_80891){
var state_val_80892 = (state_80891[(1)]);
if((state_val_80892 === (7))){
var inst_80887 = (state_80891[(2)]);
var state_80891__$1 = state_80891;
var statearr_80893_80920 = state_80891__$1;
(statearr_80893_80920[(2)] = inst_80887);

(statearr_80893_80920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (1))){
var inst_80850 = [];
var inst_80851 = inst_80850;
var inst_80852 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_80891__$1 = (function (){var statearr_80894 = state_80891;
(statearr_80894[(7)] = inst_80852);

(statearr_80894[(8)] = inst_80851);

return statearr_80894;
})();
var statearr_80895_80921 = state_80891__$1;
(statearr_80895_80921[(2)] = null);

(statearr_80895_80921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (4))){
var inst_80855 = (state_80891[(9)]);
var inst_80855__$1 = (state_80891[(2)]);
var inst_80856 = (inst_80855__$1 == null);
var inst_80857 = cljs.core.not.call(null,inst_80856);
var state_80891__$1 = (function (){var statearr_80896 = state_80891;
(statearr_80896[(9)] = inst_80855__$1);

return statearr_80896;
})();
if(inst_80857){
var statearr_80897_80922 = state_80891__$1;
(statearr_80897_80922[(1)] = (5));

} else {
var statearr_80898_80923 = state_80891__$1;
(statearr_80898_80923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (15))){
var inst_80881 = (state_80891[(2)]);
var state_80891__$1 = state_80891;
var statearr_80899_80924 = state_80891__$1;
(statearr_80899_80924[(2)] = inst_80881);

(statearr_80899_80924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (13))){
var state_80891__$1 = state_80891;
var statearr_80900_80925 = state_80891__$1;
(statearr_80900_80925[(2)] = null);

(statearr_80900_80925[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (6))){
var inst_80851 = (state_80891[(8)]);
var inst_80876 = inst_80851.length;
var inst_80877 = (inst_80876 > (0));
var state_80891__$1 = state_80891;
if(cljs.core.truth_(inst_80877)){
var statearr_80901_80926 = state_80891__$1;
(statearr_80901_80926[(1)] = (12));

} else {
var statearr_80902_80927 = state_80891__$1;
(statearr_80902_80927[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (3))){
var inst_80889 = (state_80891[(2)]);
var state_80891__$1 = state_80891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80891__$1,inst_80889);
} else {
if((state_val_80892 === (12))){
var inst_80851 = (state_80891[(8)]);
var inst_80879 = cljs.core.vec.call(null,inst_80851);
var state_80891__$1 = state_80891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80891__$1,(15),out,inst_80879);
} else {
if((state_val_80892 === (2))){
var state_80891__$1 = state_80891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80891__$1,(4),ch);
} else {
if((state_val_80892 === (11))){
var inst_80855 = (state_80891[(9)]);
var inst_80859 = (state_80891[(10)]);
var inst_80869 = (state_80891[(2)]);
var inst_80870 = [];
var inst_80871 = inst_80870.push(inst_80855);
var inst_80851 = inst_80870;
var inst_80852 = inst_80859;
var state_80891__$1 = (function (){var statearr_80903 = state_80891;
(statearr_80903[(7)] = inst_80852);

(statearr_80903[(11)] = inst_80869);

(statearr_80903[(12)] = inst_80871);

(statearr_80903[(8)] = inst_80851);

return statearr_80903;
})();
var statearr_80904_80928 = state_80891__$1;
(statearr_80904_80928[(2)] = null);

(statearr_80904_80928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (9))){
var inst_80851 = (state_80891[(8)]);
var inst_80867 = cljs.core.vec.call(null,inst_80851);
var state_80891__$1 = state_80891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80891__$1,(11),out,inst_80867);
} else {
if((state_val_80892 === (5))){
var inst_80852 = (state_80891[(7)]);
var inst_80855 = (state_80891[(9)]);
var inst_80859 = (state_80891[(10)]);
var inst_80859__$1 = f.call(null,inst_80855);
var inst_80860 = cljs.core._EQ_.call(null,inst_80859__$1,inst_80852);
var inst_80861 = cljs.core.keyword_identical_QMARK_.call(null,inst_80852,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_80862 = ((inst_80860) || (inst_80861));
var state_80891__$1 = (function (){var statearr_80905 = state_80891;
(statearr_80905[(10)] = inst_80859__$1);

return statearr_80905;
})();
if(cljs.core.truth_(inst_80862)){
var statearr_80906_80929 = state_80891__$1;
(statearr_80906_80929[(1)] = (8));

} else {
var statearr_80907_80930 = state_80891__$1;
(statearr_80907_80930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (14))){
var inst_80884 = (state_80891[(2)]);
var inst_80885 = cljs.core.async.close_BANG_.call(null,out);
var state_80891__$1 = (function (){var statearr_80909 = state_80891;
(statearr_80909[(13)] = inst_80884);

return statearr_80909;
})();
var statearr_80910_80931 = state_80891__$1;
(statearr_80910_80931[(2)] = inst_80885);

(statearr_80910_80931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (10))){
var inst_80874 = (state_80891[(2)]);
var state_80891__$1 = state_80891;
var statearr_80911_80932 = state_80891__$1;
(statearr_80911_80932[(2)] = inst_80874);

(statearr_80911_80932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80892 === (8))){
var inst_80855 = (state_80891[(9)]);
var inst_80851 = (state_80891[(8)]);
var inst_80859 = (state_80891[(10)]);
var inst_80864 = inst_80851.push(inst_80855);
var tmp80908 = inst_80851;
var inst_80851__$1 = tmp80908;
var inst_80852 = inst_80859;
var state_80891__$1 = (function (){var statearr_80912 = state_80891;
(statearr_80912[(7)] = inst_80852);

(statearr_80912[(14)] = inst_80864);

(statearr_80912[(8)] = inst_80851__$1);

return statearr_80912;
})();
var statearr_80913_80933 = state_80891__$1;
(statearr_80913_80933[(2)] = null);

(statearr_80913_80933[(1)] = (2));


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
});})(c__27974__auto___80919,out))
;
return ((function (switch__27884__auto__,c__27974__auto___80919,out){
return (function() {
var cljs$core$async$state_machine__27885__auto__ = null;
var cljs$core$async$state_machine__27885__auto____0 = (function (){
var statearr_80914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80914[(0)] = cljs$core$async$state_machine__27885__auto__);

(statearr_80914[(1)] = (1));

return statearr_80914;
});
var cljs$core$async$state_machine__27885__auto____1 = (function (state_80891){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_80891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e80915){if((e80915 instanceof Object)){
var ex__27888__auto__ = e80915;
var statearr_80916_80934 = state_80891;
(statearr_80916_80934[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80935 = state_80891;
state_80891 = G__80935;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
cljs$core$async$state_machine__27885__auto__ = function(state_80891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27885__auto____1.call(this,state_80891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27885__auto____0;
cljs$core$async$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27885__auto____1;
return cljs$core$async$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___80919,out))
})();
var state__27976__auto__ = (function (){var statearr_80917 = f__27975__auto__.call(null);
(statearr_80917[(6)] = c__27974__auto___80919);

return statearr_80917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___80919,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525389584738

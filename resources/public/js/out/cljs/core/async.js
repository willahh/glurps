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
var G__45640 = arguments.length;
switch (G__45640) {
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
if(typeof cljs.core.async.t_cljs$core$async45641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45641 = (function (f,blockable,meta45642){
this.f = f;
this.blockable = blockable;
this.meta45642 = meta45642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45643,meta45642__$1){
var self__ = this;
var _45643__$1 = this;
return (new cljs.core.async.t_cljs$core$async45641(self__.f,self__.blockable,meta45642__$1));
});

cljs.core.async.t_cljs$core$async45641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45643){
var self__ = this;
var _45643__$1 = this;
return self__.meta45642;
});

cljs.core.async.t_cljs$core$async45641.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45642","meta45642",-1526738946,null)], null);
});

cljs.core.async.t_cljs$core$async45641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45641";

cljs.core.async.t_cljs$core$async45641.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async45641");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45641.
 */
cljs.core.async.__GT_t_cljs$core$async45641 = (function cljs$core$async$__GT_t_cljs$core$async45641(f__$1,blockable__$1,meta45642){
return (new cljs.core.async.t_cljs$core$async45641(f__$1,blockable__$1,meta45642));
});

}

return (new cljs.core.async.t_cljs$core$async45641(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45647 = arguments.length;
switch (G__45647) {
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
var G__45650 = arguments.length;
switch (G__45650) {
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
var G__45653 = arguments.length;
switch (G__45653) {
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
var val_45655 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45655);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45655,ret){
return (function (){
return fn1.call(null,val_45655);
});})(val_45655,ret))
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
var G__45657 = arguments.length;
switch (G__45657) {
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
var n__4376__auto___45659 = n;
var x_45660 = (0);
while(true){
if((x_45660 < n__4376__auto___45659)){
(a[x_45660] = (0));

var G__45661 = (x_45660 + (1));
x_45660 = G__45661;
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

var G__45662 = (i + (1));
i = G__45662;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45663 = (function (flag,meta45664){
this.flag = flag;
this.meta45664 = meta45664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45665,meta45664__$1){
var self__ = this;
var _45665__$1 = this;
return (new cljs.core.async.t_cljs$core$async45663(self__.flag,meta45664__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45665){
var self__ = this;
var _45665__$1 = this;
return self__.meta45664;
});})(flag))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45663.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45664","meta45664",-823349645,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45663";

cljs.core.async.t_cljs$core$async45663.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async45663");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45663.
 */
cljs.core.async.__GT_t_cljs$core$async45663 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45663(flag__$1,meta45664){
return (new cljs.core.async.t_cljs$core$async45663(flag__$1,meta45664));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45663(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45666 = (function (flag,cb,meta45667){
this.flag = flag;
this.cb = cb;
this.meta45667 = meta45667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45668,meta45667__$1){
var self__ = this;
var _45668__$1 = this;
return (new cljs.core.async.t_cljs$core$async45666(self__.flag,self__.cb,meta45667__$1));
});

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45668){
var self__ = this;
var _45668__$1 = this;
return self__.meta45667;
});

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45667","meta45667",1400835184,null)], null);
});

cljs.core.async.t_cljs$core$async45666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45666";

cljs.core.async.t_cljs$core$async45666.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async45666");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45666.
 */
cljs.core.async.__GT_t_cljs$core$async45666 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45666(flag__$1,cb__$1,meta45667){
return (new cljs.core.async.t_cljs$core$async45666(flag__$1,cb__$1,meta45667));
});

}

return (new cljs.core.async.t_cljs$core$async45666(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45669_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45669_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45670_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45670_SHARP_,port], null));
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
var G__45671 = (i + (1));
i = G__45671;
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
var len__4499__auto___45677 = arguments.length;
var i__4500__auto___45678 = (0);
while(true){
if((i__4500__auto___45678 < len__4499__auto___45677)){
args__4502__auto__.push((arguments[i__4500__auto___45678]));

var G__45679 = (i__4500__auto___45678 + (1));
i__4500__auto___45678 = G__45679;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45674){
var map__45675 = p__45674;
var map__45675__$1 = ((((!((map__45675 == null)))?(((((map__45675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45675):map__45675);
var opts = map__45675__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45672){
var G__45673 = cljs.core.first.call(null,seq45672);
var seq45672__$1 = cljs.core.next.call(null,seq45672);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45673,seq45672__$1);
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
var G__45681 = arguments.length;
switch (G__45681) {
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
var c__43716__auto___45727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___45727){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___45727){
return (function (state_45705){
var state_val_45706 = (state_45705[(1)]);
if((state_val_45706 === (7))){
var inst_45701 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
var statearr_45707_45728 = state_45705__$1;
(statearr_45707_45728[(2)] = inst_45701);

(statearr_45707_45728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (1))){
var state_45705__$1 = state_45705;
var statearr_45708_45729 = state_45705__$1;
(statearr_45708_45729[(2)] = null);

(statearr_45708_45729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (4))){
var inst_45684 = (state_45705[(7)]);
var inst_45684__$1 = (state_45705[(2)]);
var inst_45685 = (inst_45684__$1 == null);
var state_45705__$1 = (function (){var statearr_45709 = state_45705;
(statearr_45709[(7)] = inst_45684__$1);

return statearr_45709;
})();
if(cljs.core.truth_(inst_45685)){
var statearr_45710_45730 = state_45705__$1;
(statearr_45710_45730[(1)] = (5));

} else {
var statearr_45711_45731 = state_45705__$1;
(statearr_45711_45731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (13))){
var state_45705__$1 = state_45705;
var statearr_45712_45732 = state_45705__$1;
(statearr_45712_45732[(2)] = null);

(statearr_45712_45732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (6))){
var inst_45684 = (state_45705[(7)]);
var state_45705__$1 = state_45705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45705__$1,(11),to,inst_45684);
} else {
if((state_val_45706 === (3))){
var inst_45703 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45705__$1,inst_45703);
} else {
if((state_val_45706 === (12))){
var state_45705__$1 = state_45705;
var statearr_45713_45733 = state_45705__$1;
(statearr_45713_45733[(2)] = null);

(statearr_45713_45733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (2))){
var state_45705__$1 = state_45705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45705__$1,(4),from);
} else {
if((state_val_45706 === (11))){
var inst_45694 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
if(cljs.core.truth_(inst_45694)){
var statearr_45714_45734 = state_45705__$1;
(statearr_45714_45734[(1)] = (12));

} else {
var statearr_45715_45735 = state_45705__$1;
(statearr_45715_45735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (9))){
var state_45705__$1 = state_45705;
var statearr_45716_45736 = state_45705__$1;
(statearr_45716_45736[(2)] = null);

(statearr_45716_45736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (5))){
var state_45705__$1 = state_45705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45717_45737 = state_45705__$1;
(statearr_45717_45737[(1)] = (8));

} else {
var statearr_45718_45738 = state_45705__$1;
(statearr_45718_45738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (14))){
var inst_45699 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
var statearr_45719_45739 = state_45705__$1;
(statearr_45719_45739[(2)] = inst_45699);

(statearr_45719_45739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (10))){
var inst_45691 = (state_45705[(2)]);
var state_45705__$1 = state_45705;
var statearr_45720_45740 = state_45705__$1;
(statearr_45720_45740[(2)] = inst_45691);

(statearr_45720_45740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45706 === (8))){
var inst_45688 = cljs.core.async.close_BANG_.call(null,to);
var state_45705__$1 = state_45705;
var statearr_45721_45741 = state_45705__$1;
(statearr_45721_45741[(2)] = inst_45688);

(statearr_45721_45741[(1)] = (10));


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
});})(c__43716__auto___45727))
;
return ((function (switch__43559__auto__,c__43716__auto___45727){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_45722 = [null,null,null,null,null,null,null,null];
(statearr_45722[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_45722[(1)] = (1));

return statearr_45722;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_45705){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_45705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e45723){if((e45723 instanceof Object)){
var ex__43563__auto__ = e45723;
var statearr_45724_45742 = state_45705;
(statearr_45724_45742[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45743 = state_45705;
state_45705 = G__45743;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_45705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_45705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___45727))
})();
var state__43718__auto__ = (function (){var statearr_45725 = f__43717__auto__.call(null);
(statearr_45725[(6)] = c__43716__auto___45727);

return statearr_45725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___45727))
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
return (function (p__45744){
var vec__45745 = p__45744;
var v = cljs.core.nth.call(null,vec__45745,(0),null);
var p = cljs.core.nth.call(null,vec__45745,(1),null);
var job = vec__45745;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43716__auto___45916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___45916,res,vec__45745,v,p,job,jobs,results){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___45916,res,vec__45745,v,p,job,jobs,results){
return (function (state_45752){
var state_val_45753 = (state_45752[(1)]);
if((state_val_45753 === (1))){
var state_45752__$1 = state_45752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45752__$1,(2),res,v);
} else {
if((state_val_45753 === (2))){
var inst_45749 = (state_45752[(2)]);
var inst_45750 = cljs.core.async.close_BANG_.call(null,res);
var state_45752__$1 = (function (){var statearr_45754 = state_45752;
(statearr_45754[(7)] = inst_45749);

return statearr_45754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45752__$1,inst_45750);
} else {
return null;
}
}
});})(c__43716__auto___45916,res,vec__45745,v,p,job,jobs,results))
;
return ((function (switch__43559__auto__,c__43716__auto___45916,res,vec__45745,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_45755 = [null,null,null,null,null,null,null,null];
(statearr_45755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_45755[(1)] = (1));

return statearr_45755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_45752){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_45752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e45756){if((e45756 instanceof Object)){
var ex__43563__auto__ = e45756;
var statearr_45757_45917 = state_45752;
(statearr_45757_45917[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45918 = state_45752;
state_45752 = G__45918;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_45752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_45752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___45916,res,vec__45745,v,p,job,jobs,results))
})();
var state__43718__auto__ = (function (){var statearr_45758 = f__43717__auto__.call(null);
(statearr_45758[(6)] = c__43716__auto___45916);

return statearr_45758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___45916,res,vec__45745,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45759){
var vec__45760 = p__45759;
var v = cljs.core.nth.call(null,vec__45760,(0),null);
var p = cljs.core.nth.call(null,vec__45760,(1),null);
var job = vec__45760;
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
var n__4376__auto___45919 = n;
var __45920 = (0);
while(true){
if((__45920 < n__4376__auto___45919)){
var G__45763_45921 = type;
var G__45763_45922__$1 = (((G__45763_45921 instanceof cljs.core.Keyword))?G__45763_45921.fqn:null);
switch (G__45763_45922__$1) {
case "compute":
var c__43716__auto___45924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45920,c__43716__auto___45924,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (__45920,c__43716__auto___45924,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async){
return (function (state_45776){
var state_val_45777 = (state_45776[(1)]);
if((state_val_45777 === (1))){
var state_45776__$1 = state_45776;
var statearr_45778_45925 = state_45776__$1;
(statearr_45778_45925[(2)] = null);

(statearr_45778_45925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (2))){
var state_45776__$1 = state_45776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45776__$1,(4),jobs);
} else {
if((state_val_45777 === (3))){
var inst_45774 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45776__$1,inst_45774);
} else {
if((state_val_45777 === (4))){
var inst_45766 = (state_45776[(2)]);
var inst_45767 = process.call(null,inst_45766);
var state_45776__$1 = state_45776;
if(cljs.core.truth_(inst_45767)){
var statearr_45779_45926 = state_45776__$1;
(statearr_45779_45926[(1)] = (5));

} else {
var statearr_45780_45927 = state_45776__$1;
(statearr_45780_45927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (5))){
var state_45776__$1 = state_45776;
var statearr_45781_45928 = state_45776__$1;
(statearr_45781_45928[(2)] = null);

(statearr_45781_45928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (6))){
var state_45776__$1 = state_45776;
var statearr_45782_45929 = state_45776__$1;
(statearr_45782_45929[(2)] = null);

(statearr_45782_45929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (7))){
var inst_45772 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
var statearr_45783_45930 = state_45776__$1;
(statearr_45783_45930[(2)] = inst_45772);

(statearr_45783_45930[(1)] = (3));


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
});})(__45920,c__43716__auto___45924,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async))
;
return ((function (__45920,switch__43559__auto__,c__43716__auto___45924,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_45784 = [null,null,null,null,null,null,null];
(statearr_45784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_45784[(1)] = (1));

return statearr_45784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_45776){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_45776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e45785){if((e45785 instanceof Object)){
var ex__43563__auto__ = e45785;
var statearr_45786_45931 = state_45776;
(statearr_45786_45931[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45932 = state_45776;
state_45776 = G__45932;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_45776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_45776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(__45920,switch__43559__auto__,c__43716__auto___45924,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async))
})();
var state__43718__auto__ = (function (){var statearr_45787 = f__43717__auto__.call(null);
(statearr_45787[(6)] = c__43716__auto___45924);

return statearr_45787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(__45920,c__43716__auto___45924,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async))
);


break;
case "async":
var c__43716__auto___45933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45920,c__43716__auto___45933,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (__45920,c__43716__auto___45933,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async){
return (function (state_45800){
var state_val_45801 = (state_45800[(1)]);
if((state_val_45801 === (1))){
var state_45800__$1 = state_45800;
var statearr_45802_45934 = state_45800__$1;
(statearr_45802_45934[(2)] = null);

(statearr_45802_45934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (2))){
var state_45800__$1 = state_45800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45800__$1,(4),jobs);
} else {
if((state_val_45801 === (3))){
var inst_45798 = (state_45800[(2)]);
var state_45800__$1 = state_45800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45800__$1,inst_45798);
} else {
if((state_val_45801 === (4))){
var inst_45790 = (state_45800[(2)]);
var inst_45791 = async.call(null,inst_45790);
var state_45800__$1 = state_45800;
if(cljs.core.truth_(inst_45791)){
var statearr_45803_45935 = state_45800__$1;
(statearr_45803_45935[(1)] = (5));

} else {
var statearr_45804_45936 = state_45800__$1;
(statearr_45804_45936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (5))){
var state_45800__$1 = state_45800;
var statearr_45805_45937 = state_45800__$1;
(statearr_45805_45937[(2)] = null);

(statearr_45805_45937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (6))){
var state_45800__$1 = state_45800;
var statearr_45806_45938 = state_45800__$1;
(statearr_45806_45938[(2)] = null);

(statearr_45806_45938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (7))){
var inst_45796 = (state_45800[(2)]);
var state_45800__$1 = state_45800;
var statearr_45807_45939 = state_45800__$1;
(statearr_45807_45939[(2)] = inst_45796);

(statearr_45807_45939[(1)] = (3));


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
});})(__45920,c__43716__auto___45933,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async))
;
return ((function (__45920,switch__43559__auto__,c__43716__auto___45933,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_45808 = [null,null,null,null,null,null,null];
(statearr_45808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_45808[(1)] = (1));

return statearr_45808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_45800){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_45800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e45809){if((e45809 instanceof Object)){
var ex__43563__auto__ = e45809;
var statearr_45810_45940 = state_45800;
(statearr_45810_45940[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45941 = state_45800;
state_45800 = G__45941;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_45800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_45800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(__45920,switch__43559__auto__,c__43716__auto___45933,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async))
})();
var state__43718__auto__ = (function (){var statearr_45811 = f__43717__auto__.call(null);
(statearr_45811[(6)] = c__43716__auto___45933);

return statearr_45811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(__45920,c__43716__auto___45933,G__45763_45921,G__45763_45922__$1,n__4376__auto___45919,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45763_45922__$1)].join('')));

}

var G__45942 = (__45920 + (1));
__45920 = G__45942;
continue;
} else {
}
break;
}

var c__43716__auto___45943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___45943,jobs,results,process,async){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___45943,jobs,results,process,async){
return (function (state_45833){
var state_val_45834 = (state_45833[(1)]);
if((state_val_45834 === (1))){
var state_45833__$1 = state_45833;
var statearr_45835_45944 = state_45833__$1;
(statearr_45835_45944[(2)] = null);

(statearr_45835_45944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (2))){
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45833__$1,(4),from);
} else {
if((state_val_45834 === (3))){
var inst_45831 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45833__$1,inst_45831);
} else {
if((state_val_45834 === (4))){
var inst_45814 = (state_45833[(7)]);
var inst_45814__$1 = (state_45833[(2)]);
var inst_45815 = (inst_45814__$1 == null);
var state_45833__$1 = (function (){var statearr_45836 = state_45833;
(statearr_45836[(7)] = inst_45814__$1);

return statearr_45836;
})();
if(cljs.core.truth_(inst_45815)){
var statearr_45837_45945 = state_45833__$1;
(statearr_45837_45945[(1)] = (5));

} else {
var statearr_45838_45946 = state_45833__$1;
(statearr_45838_45946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (5))){
var inst_45817 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45833__$1 = state_45833;
var statearr_45839_45947 = state_45833__$1;
(statearr_45839_45947[(2)] = inst_45817);

(statearr_45839_45947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (6))){
var inst_45819 = (state_45833[(8)]);
var inst_45814 = (state_45833[(7)]);
var inst_45819__$1 = cljs.core.async.chan.call(null,(1));
var inst_45820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45821 = [inst_45814,inst_45819__$1];
var inst_45822 = (new cljs.core.PersistentVector(null,2,(5),inst_45820,inst_45821,null));
var state_45833__$1 = (function (){var statearr_45840 = state_45833;
(statearr_45840[(8)] = inst_45819__$1);

return statearr_45840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45833__$1,(8),jobs,inst_45822);
} else {
if((state_val_45834 === (7))){
var inst_45829 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45841_45948 = state_45833__$1;
(statearr_45841_45948[(2)] = inst_45829);

(statearr_45841_45948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (8))){
var inst_45819 = (state_45833[(8)]);
var inst_45824 = (state_45833[(2)]);
var state_45833__$1 = (function (){var statearr_45842 = state_45833;
(statearr_45842[(9)] = inst_45824);

return statearr_45842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45833__$1,(9),results,inst_45819);
} else {
if((state_val_45834 === (9))){
var inst_45826 = (state_45833[(2)]);
var state_45833__$1 = (function (){var statearr_45843 = state_45833;
(statearr_45843[(10)] = inst_45826);

return statearr_45843;
})();
var statearr_45844_45949 = state_45833__$1;
(statearr_45844_45949[(2)] = null);

(statearr_45844_45949[(1)] = (2));


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
});})(c__43716__auto___45943,jobs,results,process,async))
;
return ((function (switch__43559__auto__,c__43716__auto___45943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_45845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_45845[(1)] = (1));

return statearr_45845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_45833){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_45833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e45846){if((e45846 instanceof Object)){
var ex__43563__auto__ = e45846;
var statearr_45847_45950 = state_45833;
(statearr_45847_45950[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45951 = state_45833;
state_45833 = G__45951;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_45833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_45833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___45943,jobs,results,process,async))
})();
var state__43718__auto__ = (function (){var statearr_45848 = f__43717__auto__.call(null);
(statearr_45848[(6)] = c__43716__auto___45943);

return statearr_45848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___45943,jobs,results,process,async))
);


var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__,jobs,results,process,async){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__,jobs,results,process,async){
return (function (state_45886){
var state_val_45887 = (state_45886[(1)]);
if((state_val_45887 === (7))){
var inst_45882 = (state_45886[(2)]);
var state_45886__$1 = state_45886;
var statearr_45888_45952 = state_45886__$1;
(statearr_45888_45952[(2)] = inst_45882);

(statearr_45888_45952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (20))){
var state_45886__$1 = state_45886;
var statearr_45889_45953 = state_45886__$1;
(statearr_45889_45953[(2)] = null);

(statearr_45889_45953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (1))){
var state_45886__$1 = state_45886;
var statearr_45890_45954 = state_45886__$1;
(statearr_45890_45954[(2)] = null);

(statearr_45890_45954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (4))){
var inst_45851 = (state_45886[(7)]);
var inst_45851__$1 = (state_45886[(2)]);
var inst_45852 = (inst_45851__$1 == null);
var state_45886__$1 = (function (){var statearr_45891 = state_45886;
(statearr_45891[(7)] = inst_45851__$1);

return statearr_45891;
})();
if(cljs.core.truth_(inst_45852)){
var statearr_45892_45955 = state_45886__$1;
(statearr_45892_45955[(1)] = (5));

} else {
var statearr_45893_45956 = state_45886__$1;
(statearr_45893_45956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (15))){
var inst_45864 = (state_45886[(8)]);
var state_45886__$1 = state_45886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45886__$1,(18),to,inst_45864);
} else {
if((state_val_45887 === (21))){
var inst_45877 = (state_45886[(2)]);
var state_45886__$1 = state_45886;
var statearr_45894_45957 = state_45886__$1;
(statearr_45894_45957[(2)] = inst_45877);

(statearr_45894_45957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (13))){
var inst_45879 = (state_45886[(2)]);
var state_45886__$1 = (function (){var statearr_45895 = state_45886;
(statearr_45895[(9)] = inst_45879);

return statearr_45895;
})();
var statearr_45896_45958 = state_45886__$1;
(statearr_45896_45958[(2)] = null);

(statearr_45896_45958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (6))){
var inst_45851 = (state_45886[(7)]);
var state_45886__$1 = state_45886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45886__$1,(11),inst_45851);
} else {
if((state_val_45887 === (17))){
var inst_45872 = (state_45886[(2)]);
var state_45886__$1 = state_45886;
if(cljs.core.truth_(inst_45872)){
var statearr_45897_45959 = state_45886__$1;
(statearr_45897_45959[(1)] = (19));

} else {
var statearr_45898_45960 = state_45886__$1;
(statearr_45898_45960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (3))){
var inst_45884 = (state_45886[(2)]);
var state_45886__$1 = state_45886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45886__$1,inst_45884);
} else {
if((state_val_45887 === (12))){
var inst_45861 = (state_45886[(10)]);
var state_45886__$1 = state_45886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45886__$1,(14),inst_45861);
} else {
if((state_val_45887 === (2))){
var state_45886__$1 = state_45886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45886__$1,(4),results);
} else {
if((state_val_45887 === (19))){
var state_45886__$1 = state_45886;
var statearr_45899_45961 = state_45886__$1;
(statearr_45899_45961[(2)] = null);

(statearr_45899_45961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (11))){
var inst_45861 = (state_45886[(2)]);
var state_45886__$1 = (function (){var statearr_45900 = state_45886;
(statearr_45900[(10)] = inst_45861);

return statearr_45900;
})();
var statearr_45901_45962 = state_45886__$1;
(statearr_45901_45962[(2)] = null);

(statearr_45901_45962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (9))){
var state_45886__$1 = state_45886;
var statearr_45902_45963 = state_45886__$1;
(statearr_45902_45963[(2)] = null);

(statearr_45902_45963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (5))){
var state_45886__$1 = state_45886;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45903_45964 = state_45886__$1;
(statearr_45903_45964[(1)] = (8));

} else {
var statearr_45904_45965 = state_45886__$1;
(statearr_45904_45965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (14))){
var inst_45864 = (state_45886[(8)]);
var inst_45866 = (state_45886[(11)]);
var inst_45864__$1 = (state_45886[(2)]);
var inst_45865 = (inst_45864__$1 == null);
var inst_45866__$1 = cljs.core.not.call(null,inst_45865);
var state_45886__$1 = (function (){var statearr_45905 = state_45886;
(statearr_45905[(8)] = inst_45864__$1);

(statearr_45905[(11)] = inst_45866__$1);

return statearr_45905;
})();
if(inst_45866__$1){
var statearr_45906_45966 = state_45886__$1;
(statearr_45906_45966[(1)] = (15));

} else {
var statearr_45907_45967 = state_45886__$1;
(statearr_45907_45967[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (16))){
var inst_45866 = (state_45886[(11)]);
var state_45886__$1 = state_45886;
var statearr_45908_45968 = state_45886__$1;
(statearr_45908_45968[(2)] = inst_45866);

(statearr_45908_45968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (10))){
var inst_45858 = (state_45886[(2)]);
var state_45886__$1 = state_45886;
var statearr_45909_45969 = state_45886__$1;
(statearr_45909_45969[(2)] = inst_45858);

(statearr_45909_45969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (18))){
var inst_45869 = (state_45886[(2)]);
var state_45886__$1 = state_45886;
var statearr_45910_45970 = state_45886__$1;
(statearr_45910_45970[(2)] = inst_45869);

(statearr_45910_45970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45887 === (8))){
var inst_45855 = cljs.core.async.close_BANG_.call(null,to);
var state_45886__$1 = state_45886;
var statearr_45911_45971 = state_45886__$1;
(statearr_45911_45971[(2)] = inst_45855);

(statearr_45911_45971[(1)] = (10));


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
});})(c__43716__auto__,jobs,results,process,async))
;
return ((function (switch__43559__auto__,c__43716__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0 = (function (){
var statearr_45912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__);

(statearr_45912[(1)] = (1));

return statearr_45912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1 = (function (state_45886){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_45886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e45913){if((e45913 instanceof Object)){
var ex__43563__auto__ = e45913;
var statearr_45914_45972 = state_45886;
(statearr_45914_45972[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45973 = state_45886;
state_45886 = G__45973;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__ = function(state_45886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1.call(this,state_45886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,jobs,results,process,async))
})();
var state__43718__auto__ = (function (){var statearr_45915 = f__43717__auto__.call(null);
(statearr_45915[(6)] = c__43716__auto__);

return statearr_45915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__,jobs,results,process,async))
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
var G__45975 = arguments.length;
switch (G__45975) {
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
var G__45978 = arguments.length;
switch (G__45978) {
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
var G__45981 = arguments.length;
switch (G__45981) {
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
var c__43716__auto___46030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___46030,tc,fc){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___46030,tc,fc){
return (function (state_46007){
var state_val_46008 = (state_46007[(1)]);
if((state_val_46008 === (7))){
var inst_46003 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
var statearr_46009_46031 = state_46007__$1;
(statearr_46009_46031[(2)] = inst_46003);

(statearr_46009_46031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (1))){
var state_46007__$1 = state_46007;
var statearr_46010_46032 = state_46007__$1;
(statearr_46010_46032[(2)] = null);

(statearr_46010_46032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (4))){
var inst_45984 = (state_46007[(7)]);
var inst_45984__$1 = (state_46007[(2)]);
var inst_45985 = (inst_45984__$1 == null);
var state_46007__$1 = (function (){var statearr_46011 = state_46007;
(statearr_46011[(7)] = inst_45984__$1);

return statearr_46011;
})();
if(cljs.core.truth_(inst_45985)){
var statearr_46012_46033 = state_46007__$1;
(statearr_46012_46033[(1)] = (5));

} else {
var statearr_46013_46034 = state_46007__$1;
(statearr_46013_46034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (13))){
var state_46007__$1 = state_46007;
var statearr_46014_46035 = state_46007__$1;
(statearr_46014_46035[(2)] = null);

(statearr_46014_46035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (6))){
var inst_45984 = (state_46007[(7)]);
var inst_45990 = p.call(null,inst_45984);
var state_46007__$1 = state_46007;
if(cljs.core.truth_(inst_45990)){
var statearr_46015_46036 = state_46007__$1;
(statearr_46015_46036[(1)] = (9));

} else {
var statearr_46016_46037 = state_46007__$1;
(statearr_46016_46037[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (3))){
var inst_46005 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46007__$1,inst_46005);
} else {
if((state_val_46008 === (12))){
var state_46007__$1 = state_46007;
var statearr_46017_46038 = state_46007__$1;
(statearr_46017_46038[(2)] = null);

(statearr_46017_46038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (2))){
var state_46007__$1 = state_46007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46007__$1,(4),ch);
} else {
if((state_val_46008 === (11))){
var inst_45984 = (state_46007[(7)]);
var inst_45994 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46007__$1,(8),inst_45994,inst_45984);
} else {
if((state_val_46008 === (9))){
var state_46007__$1 = state_46007;
var statearr_46018_46039 = state_46007__$1;
(statearr_46018_46039[(2)] = tc);

(statearr_46018_46039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (5))){
var inst_45987 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45988 = cljs.core.async.close_BANG_.call(null,fc);
var state_46007__$1 = (function (){var statearr_46019 = state_46007;
(statearr_46019[(8)] = inst_45987);

return statearr_46019;
})();
var statearr_46020_46040 = state_46007__$1;
(statearr_46020_46040[(2)] = inst_45988);

(statearr_46020_46040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (14))){
var inst_46001 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
var statearr_46021_46041 = state_46007__$1;
(statearr_46021_46041[(2)] = inst_46001);

(statearr_46021_46041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (10))){
var state_46007__$1 = state_46007;
var statearr_46022_46042 = state_46007__$1;
(statearr_46022_46042[(2)] = fc);

(statearr_46022_46042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (8))){
var inst_45996 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
if(cljs.core.truth_(inst_45996)){
var statearr_46023_46043 = state_46007__$1;
(statearr_46023_46043[(1)] = (12));

} else {
var statearr_46024_46044 = state_46007__$1;
(statearr_46024_46044[(1)] = (13));

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
});})(c__43716__auto___46030,tc,fc))
;
return ((function (switch__43559__auto__,c__43716__auto___46030,tc,fc){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_46025 = [null,null,null,null,null,null,null,null,null];
(statearr_46025[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_46025[(1)] = (1));

return statearr_46025;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_46007){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_46007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e46026){if((e46026 instanceof Object)){
var ex__43563__auto__ = e46026;
var statearr_46027_46045 = state_46007;
(statearr_46027_46045[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46046 = state_46007;
state_46007 = G__46046;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_46007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_46007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___46030,tc,fc))
})();
var state__43718__auto__ = (function (){var statearr_46028 = f__43717__auto__.call(null);
(statearr_46028[(6)] = c__43716__auto___46030);

return statearr_46028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___46030,tc,fc))
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
return (function (state_46067){
var state_val_46068 = (state_46067[(1)]);
if((state_val_46068 === (7))){
var inst_46063 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
var statearr_46069_46087 = state_46067__$1;
(statearr_46069_46087[(2)] = inst_46063);

(statearr_46069_46087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (1))){
var inst_46047 = init;
var state_46067__$1 = (function (){var statearr_46070 = state_46067;
(statearr_46070[(7)] = inst_46047);

return statearr_46070;
})();
var statearr_46071_46088 = state_46067__$1;
(statearr_46071_46088[(2)] = null);

(statearr_46071_46088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (4))){
var inst_46050 = (state_46067[(8)]);
var inst_46050__$1 = (state_46067[(2)]);
var inst_46051 = (inst_46050__$1 == null);
var state_46067__$1 = (function (){var statearr_46072 = state_46067;
(statearr_46072[(8)] = inst_46050__$1);

return statearr_46072;
})();
if(cljs.core.truth_(inst_46051)){
var statearr_46073_46089 = state_46067__$1;
(statearr_46073_46089[(1)] = (5));

} else {
var statearr_46074_46090 = state_46067__$1;
(statearr_46074_46090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (6))){
var inst_46054 = (state_46067[(9)]);
var inst_46047 = (state_46067[(7)]);
var inst_46050 = (state_46067[(8)]);
var inst_46054__$1 = f.call(null,inst_46047,inst_46050);
var inst_46055 = cljs.core.reduced_QMARK_.call(null,inst_46054__$1);
var state_46067__$1 = (function (){var statearr_46075 = state_46067;
(statearr_46075[(9)] = inst_46054__$1);

return statearr_46075;
})();
if(inst_46055){
var statearr_46076_46091 = state_46067__$1;
(statearr_46076_46091[(1)] = (8));

} else {
var statearr_46077_46092 = state_46067__$1;
(statearr_46077_46092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (3))){
var inst_46065 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46067__$1,inst_46065);
} else {
if((state_val_46068 === (2))){
var state_46067__$1 = state_46067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46067__$1,(4),ch);
} else {
if((state_val_46068 === (9))){
var inst_46054 = (state_46067[(9)]);
var inst_46047 = inst_46054;
var state_46067__$1 = (function (){var statearr_46078 = state_46067;
(statearr_46078[(7)] = inst_46047);

return statearr_46078;
})();
var statearr_46079_46093 = state_46067__$1;
(statearr_46079_46093[(2)] = null);

(statearr_46079_46093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (5))){
var inst_46047 = (state_46067[(7)]);
var state_46067__$1 = state_46067;
var statearr_46080_46094 = state_46067__$1;
(statearr_46080_46094[(2)] = inst_46047);

(statearr_46080_46094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (10))){
var inst_46061 = (state_46067[(2)]);
var state_46067__$1 = state_46067;
var statearr_46081_46095 = state_46067__$1;
(statearr_46081_46095[(2)] = inst_46061);

(statearr_46081_46095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46068 === (8))){
var inst_46054 = (state_46067[(9)]);
var inst_46057 = cljs.core.deref.call(null,inst_46054);
var state_46067__$1 = state_46067;
var statearr_46082_46096 = state_46067__$1;
(statearr_46082_46096[(2)] = inst_46057);

(statearr_46082_46096[(1)] = (10));


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
var statearr_46083 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46083[(0)] = cljs$core$async$reduce_$_state_machine__43560__auto__);

(statearr_46083[(1)] = (1));

return statearr_46083;
});
var cljs$core$async$reduce_$_state_machine__43560__auto____1 = (function (state_46067){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_46067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e46084){if((e46084 instanceof Object)){
var ex__43563__auto__ = e46084;
var statearr_46085_46097 = state_46067;
(statearr_46085_46097[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46098 = state_46067;
state_46067 = G__46098;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43560__auto__ = function(state_46067){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43560__auto____1.call(this,state_46067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43560__auto____0;
cljs$core$async$reduce_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43560__auto____1;
return cljs$core$async$reduce_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_46086 = f__43717__auto__.call(null);
(statearr_46086[(6)] = c__43716__auto__);

return statearr_46086;
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
return (function (state_46104){
var state_val_46105 = (state_46104[(1)]);
if((state_val_46105 === (1))){
var inst_46099 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_46104__$1 = state_46104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46104__$1,(2),inst_46099);
} else {
if((state_val_46105 === (2))){
var inst_46101 = (state_46104[(2)]);
var inst_46102 = f__$1.call(null,inst_46101);
var state_46104__$1 = state_46104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46104__$1,inst_46102);
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
var statearr_46106 = [null,null,null,null,null,null,null];
(statearr_46106[(0)] = cljs$core$async$transduce_$_state_machine__43560__auto__);

(statearr_46106[(1)] = (1));

return statearr_46106;
});
var cljs$core$async$transduce_$_state_machine__43560__auto____1 = (function (state_46104){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_46104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e46107){if((e46107 instanceof Object)){
var ex__43563__auto__ = e46107;
var statearr_46108_46110 = state_46104;
(statearr_46108_46110[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46111 = state_46104;
state_46104 = G__46111;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43560__auto__ = function(state_46104){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43560__auto____1.call(this,state_46104);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43560__auto____0;
cljs$core$async$transduce_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43560__auto____1;
return cljs$core$async$transduce_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,f__$1))
})();
var state__43718__auto__ = (function (){var statearr_46109 = f__43717__auto__.call(null);
(statearr_46109[(6)] = c__43716__auto__);

return statearr_46109;
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
var G__46113 = arguments.length;
switch (G__46113) {
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
return (function (state_46138){
var state_val_46139 = (state_46138[(1)]);
if((state_val_46139 === (7))){
var inst_46120 = (state_46138[(2)]);
var state_46138__$1 = state_46138;
var statearr_46140_46161 = state_46138__$1;
(statearr_46140_46161[(2)] = inst_46120);

(statearr_46140_46161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (1))){
var inst_46114 = cljs.core.seq.call(null,coll);
var inst_46115 = inst_46114;
var state_46138__$1 = (function (){var statearr_46141 = state_46138;
(statearr_46141[(7)] = inst_46115);

return statearr_46141;
})();
var statearr_46142_46162 = state_46138__$1;
(statearr_46142_46162[(2)] = null);

(statearr_46142_46162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (4))){
var inst_46115 = (state_46138[(7)]);
var inst_46118 = cljs.core.first.call(null,inst_46115);
var state_46138__$1 = state_46138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46138__$1,(7),ch,inst_46118);
} else {
if((state_val_46139 === (13))){
var inst_46132 = (state_46138[(2)]);
var state_46138__$1 = state_46138;
var statearr_46143_46163 = state_46138__$1;
(statearr_46143_46163[(2)] = inst_46132);

(statearr_46143_46163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (6))){
var inst_46123 = (state_46138[(2)]);
var state_46138__$1 = state_46138;
if(cljs.core.truth_(inst_46123)){
var statearr_46144_46164 = state_46138__$1;
(statearr_46144_46164[(1)] = (8));

} else {
var statearr_46145_46165 = state_46138__$1;
(statearr_46145_46165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (3))){
var inst_46136 = (state_46138[(2)]);
var state_46138__$1 = state_46138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46138__$1,inst_46136);
} else {
if((state_val_46139 === (12))){
var state_46138__$1 = state_46138;
var statearr_46146_46166 = state_46138__$1;
(statearr_46146_46166[(2)] = null);

(statearr_46146_46166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (2))){
var inst_46115 = (state_46138[(7)]);
var state_46138__$1 = state_46138;
if(cljs.core.truth_(inst_46115)){
var statearr_46147_46167 = state_46138__$1;
(statearr_46147_46167[(1)] = (4));

} else {
var statearr_46148_46168 = state_46138__$1;
(statearr_46148_46168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (11))){
var inst_46129 = cljs.core.async.close_BANG_.call(null,ch);
var state_46138__$1 = state_46138;
var statearr_46149_46169 = state_46138__$1;
(statearr_46149_46169[(2)] = inst_46129);

(statearr_46149_46169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (9))){
var state_46138__$1 = state_46138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46150_46170 = state_46138__$1;
(statearr_46150_46170[(1)] = (11));

} else {
var statearr_46151_46171 = state_46138__$1;
(statearr_46151_46171[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (5))){
var inst_46115 = (state_46138[(7)]);
var state_46138__$1 = state_46138;
var statearr_46152_46172 = state_46138__$1;
(statearr_46152_46172[(2)] = inst_46115);

(statearr_46152_46172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (10))){
var inst_46134 = (state_46138[(2)]);
var state_46138__$1 = state_46138;
var statearr_46153_46173 = state_46138__$1;
(statearr_46153_46173[(2)] = inst_46134);

(statearr_46153_46173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46139 === (8))){
var inst_46115 = (state_46138[(7)]);
var inst_46125 = cljs.core.next.call(null,inst_46115);
var inst_46115__$1 = inst_46125;
var state_46138__$1 = (function (){var statearr_46154 = state_46138;
(statearr_46154[(7)] = inst_46115__$1);

return statearr_46154;
})();
var statearr_46155_46174 = state_46138__$1;
(statearr_46155_46174[(2)] = null);

(statearr_46155_46174[(1)] = (2));


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
var statearr_46156 = [null,null,null,null,null,null,null,null];
(statearr_46156[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_46156[(1)] = (1));

return statearr_46156;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_46138){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_46138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e46157){if((e46157 instanceof Object)){
var ex__43563__auto__ = e46157;
var statearr_46158_46175 = state_46138;
(statearr_46158_46175[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46176 = state_46138;
state_46138 = G__46176;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_46138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_46138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_46159 = f__43717__auto__.call(null);
(statearr_46159[(6)] = c__43716__auto__);

return statearr_46159;
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
if(typeof cljs.core.async.t_cljs$core$async46177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46177 = (function (ch,cs,meta46178){
this.ch = ch;
this.cs = cs;
this.meta46178 = meta46178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46179,meta46178__$1){
var self__ = this;
var _46179__$1 = this;
return (new cljs.core.async.t_cljs$core$async46177(self__.ch,self__.cs,meta46178__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46179){
var self__ = this;
var _46179__$1 = this;
return self__.meta46178;
});})(cs))
;

cljs.core.async.t_cljs$core$async46177.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46177.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46177.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46177.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46177.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46177.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46178","meta46178",1344986894,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46177";

cljs.core.async.t_cljs$core$async46177.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async46177");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46177.
 */
cljs.core.async.__GT_t_cljs$core$async46177 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46177(ch__$1,cs__$1,meta46178){
return (new cljs.core.async.t_cljs$core$async46177(ch__$1,cs__$1,meta46178));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46177(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43716__auto___46399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___46399,cs,m,dchan,dctr,done){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___46399,cs,m,dchan,dctr,done){
return (function (state_46314){
var state_val_46315 = (state_46314[(1)]);
if((state_val_46315 === (7))){
var inst_46310 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46316_46400 = state_46314__$1;
(statearr_46316_46400[(2)] = inst_46310);

(statearr_46316_46400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (20))){
var inst_46213 = (state_46314[(7)]);
var inst_46225 = cljs.core.first.call(null,inst_46213);
var inst_46226 = cljs.core.nth.call(null,inst_46225,(0),null);
var inst_46227 = cljs.core.nth.call(null,inst_46225,(1),null);
var state_46314__$1 = (function (){var statearr_46317 = state_46314;
(statearr_46317[(8)] = inst_46226);

return statearr_46317;
})();
if(cljs.core.truth_(inst_46227)){
var statearr_46318_46401 = state_46314__$1;
(statearr_46318_46401[(1)] = (22));

} else {
var statearr_46319_46402 = state_46314__$1;
(statearr_46319_46402[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (27))){
var inst_46262 = (state_46314[(9)]);
var inst_46182 = (state_46314[(10)]);
var inst_46257 = (state_46314[(11)]);
var inst_46255 = (state_46314[(12)]);
var inst_46262__$1 = cljs.core._nth.call(null,inst_46255,inst_46257);
var inst_46263 = cljs.core.async.put_BANG_.call(null,inst_46262__$1,inst_46182,done);
var state_46314__$1 = (function (){var statearr_46320 = state_46314;
(statearr_46320[(9)] = inst_46262__$1);

return statearr_46320;
})();
if(cljs.core.truth_(inst_46263)){
var statearr_46321_46403 = state_46314__$1;
(statearr_46321_46403[(1)] = (30));

} else {
var statearr_46322_46404 = state_46314__$1;
(statearr_46322_46404[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (1))){
var state_46314__$1 = state_46314;
var statearr_46323_46405 = state_46314__$1;
(statearr_46323_46405[(2)] = null);

(statearr_46323_46405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (24))){
var inst_46213 = (state_46314[(7)]);
var inst_46232 = (state_46314[(2)]);
var inst_46233 = cljs.core.next.call(null,inst_46213);
var inst_46191 = inst_46233;
var inst_46192 = null;
var inst_46193 = (0);
var inst_46194 = (0);
var state_46314__$1 = (function (){var statearr_46324 = state_46314;
(statearr_46324[(13)] = inst_46192);

(statearr_46324[(14)] = inst_46232);

(statearr_46324[(15)] = inst_46191);

(statearr_46324[(16)] = inst_46193);

(statearr_46324[(17)] = inst_46194);

return statearr_46324;
})();
var statearr_46325_46406 = state_46314__$1;
(statearr_46325_46406[(2)] = null);

(statearr_46325_46406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (39))){
var state_46314__$1 = state_46314;
var statearr_46329_46407 = state_46314__$1;
(statearr_46329_46407[(2)] = null);

(statearr_46329_46407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (4))){
var inst_46182 = (state_46314[(10)]);
var inst_46182__$1 = (state_46314[(2)]);
var inst_46183 = (inst_46182__$1 == null);
var state_46314__$1 = (function (){var statearr_46330 = state_46314;
(statearr_46330[(10)] = inst_46182__$1);

return statearr_46330;
})();
if(cljs.core.truth_(inst_46183)){
var statearr_46331_46408 = state_46314__$1;
(statearr_46331_46408[(1)] = (5));

} else {
var statearr_46332_46409 = state_46314__$1;
(statearr_46332_46409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (15))){
var inst_46192 = (state_46314[(13)]);
var inst_46191 = (state_46314[(15)]);
var inst_46193 = (state_46314[(16)]);
var inst_46194 = (state_46314[(17)]);
var inst_46209 = (state_46314[(2)]);
var inst_46210 = (inst_46194 + (1));
var tmp46326 = inst_46192;
var tmp46327 = inst_46191;
var tmp46328 = inst_46193;
var inst_46191__$1 = tmp46327;
var inst_46192__$1 = tmp46326;
var inst_46193__$1 = tmp46328;
var inst_46194__$1 = inst_46210;
var state_46314__$1 = (function (){var statearr_46333 = state_46314;
(statearr_46333[(13)] = inst_46192__$1);

(statearr_46333[(15)] = inst_46191__$1);

(statearr_46333[(16)] = inst_46193__$1);

(statearr_46333[(17)] = inst_46194__$1);

(statearr_46333[(18)] = inst_46209);

return statearr_46333;
})();
var statearr_46334_46410 = state_46314__$1;
(statearr_46334_46410[(2)] = null);

(statearr_46334_46410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (21))){
var inst_46236 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46338_46411 = state_46314__$1;
(statearr_46338_46411[(2)] = inst_46236);

(statearr_46338_46411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (31))){
var inst_46262 = (state_46314[(9)]);
var inst_46266 = done.call(null,null);
var inst_46267 = cljs.core.async.untap_STAR_.call(null,m,inst_46262);
var state_46314__$1 = (function (){var statearr_46339 = state_46314;
(statearr_46339[(19)] = inst_46266);

return statearr_46339;
})();
var statearr_46340_46412 = state_46314__$1;
(statearr_46340_46412[(2)] = inst_46267);

(statearr_46340_46412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (32))){
var inst_46254 = (state_46314[(20)]);
var inst_46256 = (state_46314[(21)]);
var inst_46257 = (state_46314[(11)]);
var inst_46255 = (state_46314[(12)]);
var inst_46269 = (state_46314[(2)]);
var inst_46270 = (inst_46257 + (1));
var tmp46335 = inst_46254;
var tmp46336 = inst_46256;
var tmp46337 = inst_46255;
var inst_46254__$1 = tmp46335;
var inst_46255__$1 = tmp46337;
var inst_46256__$1 = tmp46336;
var inst_46257__$1 = inst_46270;
var state_46314__$1 = (function (){var statearr_46341 = state_46314;
(statearr_46341[(22)] = inst_46269);

(statearr_46341[(20)] = inst_46254__$1);

(statearr_46341[(21)] = inst_46256__$1);

(statearr_46341[(11)] = inst_46257__$1);

(statearr_46341[(12)] = inst_46255__$1);

return statearr_46341;
})();
var statearr_46342_46413 = state_46314__$1;
(statearr_46342_46413[(2)] = null);

(statearr_46342_46413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (40))){
var inst_46282 = (state_46314[(23)]);
var inst_46286 = done.call(null,null);
var inst_46287 = cljs.core.async.untap_STAR_.call(null,m,inst_46282);
var state_46314__$1 = (function (){var statearr_46343 = state_46314;
(statearr_46343[(24)] = inst_46286);

return statearr_46343;
})();
var statearr_46344_46414 = state_46314__$1;
(statearr_46344_46414[(2)] = inst_46287);

(statearr_46344_46414[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (33))){
var inst_46273 = (state_46314[(25)]);
var inst_46275 = cljs.core.chunked_seq_QMARK_.call(null,inst_46273);
var state_46314__$1 = state_46314;
if(inst_46275){
var statearr_46345_46415 = state_46314__$1;
(statearr_46345_46415[(1)] = (36));

} else {
var statearr_46346_46416 = state_46314__$1;
(statearr_46346_46416[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (13))){
var inst_46203 = (state_46314[(26)]);
var inst_46206 = cljs.core.async.close_BANG_.call(null,inst_46203);
var state_46314__$1 = state_46314;
var statearr_46347_46417 = state_46314__$1;
(statearr_46347_46417[(2)] = inst_46206);

(statearr_46347_46417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (22))){
var inst_46226 = (state_46314[(8)]);
var inst_46229 = cljs.core.async.close_BANG_.call(null,inst_46226);
var state_46314__$1 = state_46314;
var statearr_46348_46418 = state_46314__$1;
(statearr_46348_46418[(2)] = inst_46229);

(statearr_46348_46418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (36))){
var inst_46273 = (state_46314[(25)]);
var inst_46277 = cljs.core.chunk_first.call(null,inst_46273);
var inst_46278 = cljs.core.chunk_rest.call(null,inst_46273);
var inst_46279 = cljs.core.count.call(null,inst_46277);
var inst_46254 = inst_46278;
var inst_46255 = inst_46277;
var inst_46256 = inst_46279;
var inst_46257 = (0);
var state_46314__$1 = (function (){var statearr_46349 = state_46314;
(statearr_46349[(20)] = inst_46254);

(statearr_46349[(21)] = inst_46256);

(statearr_46349[(11)] = inst_46257);

(statearr_46349[(12)] = inst_46255);

return statearr_46349;
})();
var statearr_46350_46419 = state_46314__$1;
(statearr_46350_46419[(2)] = null);

(statearr_46350_46419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (41))){
var inst_46273 = (state_46314[(25)]);
var inst_46289 = (state_46314[(2)]);
var inst_46290 = cljs.core.next.call(null,inst_46273);
var inst_46254 = inst_46290;
var inst_46255 = null;
var inst_46256 = (0);
var inst_46257 = (0);
var state_46314__$1 = (function (){var statearr_46351 = state_46314;
(statearr_46351[(20)] = inst_46254);

(statearr_46351[(27)] = inst_46289);

(statearr_46351[(21)] = inst_46256);

(statearr_46351[(11)] = inst_46257);

(statearr_46351[(12)] = inst_46255);

return statearr_46351;
})();
var statearr_46352_46420 = state_46314__$1;
(statearr_46352_46420[(2)] = null);

(statearr_46352_46420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (43))){
var state_46314__$1 = state_46314;
var statearr_46353_46421 = state_46314__$1;
(statearr_46353_46421[(2)] = null);

(statearr_46353_46421[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (29))){
var inst_46298 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46354_46422 = state_46314__$1;
(statearr_46354_46422[(2)] = inst_46298);

(statearr_46354_46422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (44))){
var inst_46307 = (state_46314[(2)]);
var state_46314__$1 = (function (){var statearr_46355 = state_46314;
(statearr_46355[(28)] = inst_46307);

return statearr_46355;
})();
var statearr_46356_46423 = state_46314__$1;
(statearr_46356_46423[(2)] = null);

(statearr_46356_46423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (6))){
var inst_46246 = (state_46314[(29)]);
var inst_46245 = cljs.core.deref.call(null,cs);
var inst_46246__$1 = cljs.core.keys.call(null,inst_46245);
var inst_46247 = cljs.core.count.call(null,inst_46246__$1);
var inst_46248 = cljs.core.reset_BANG_.call(null,dctr,inst_46247);
var inst_46253 = cljs.core.seq.call(null,inst_46246__$1);
var inst_46254 = inst_46253;
var inst_46255 = null;
var inst_46256 = (0);
var inst_46257 = (0);
var state_46314__$1 = (function (){var statearr_46357 = state_46314;
(statearr_46357[(30)] = inst_46248);

(statearr_46357[(29)] = inst_46246__$1);

(statearr_46357[(20)] = inst_46254);

(statearr_46357[(21)] = inst_46256);

(statearr_46357[(11)] = inst_46257);

(statearr_46357[(12)] = inst_46255);

return statearr_46357;
})();
var statearr_46358_46424 = state_46314__$1;
(statearr_46358_46424[(2)] = null);

(statearr_46358_46424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (28))){
var inst_46273 = (state_46314[(25)]);
var inst_46254 = (state_46314[(20)]);
var inst_46273__$1 = cljs.core.seq.call(null,inst_46254);
var state_46314__$1 = (function (){var statearr_46359 = state_46314;
(statearr_46359[(25)] = inst_46273__$1);

return statearr_46359;
})();
if(inst_46273__$1){
var statearr_46360_46425 = state_46314__$1;
(statearr_46360_46425[(1)] = (33));

} else {
var statearr_46361_46426 = state_46314__$1;
(statearr_46361_46426[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (25))){
var inst_46256 = (state_46314[(21)]);
var inst_46257 = (state_46314[(11)]);
var inst_46259 = (inst_46257 < inst_46256);
var inst_46260 = inst_46259;
var state_46314__$1 = state_46314;
if(cljs.core.truth_(inst_46260)){
var statearr_46362_46427 = state_46314__$1;
(statearr_46362_46427[(1)] = (27));

} else {
var statearr_46363_46428 = state_46314__$1;
(statearr_46363_46428[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (34))){
var state_46314__$1 = state_46314;
var statearr_46364_46429 = state_46314__$1;
(statearr_46364_46429[(2)] = null);

(statearr_46364_46429[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (17))){
var state_46314__$1 = state_46314;
var statearr_46365_46430 = state_46314__$1;
(statearr_46365_46430[(2)] = null);

(statearr_46365_46430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (3))){
var inst_46312 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46314__$1,inst_46312);
} else {
if((state_val_46315 === (12))){
var inst_46241 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46366_46431 = state_46314__$1;
(statearr_46366_46431[(2)] = inst_46241);

(statearr_46366_46431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (2))){
var state_46314__$1 = state_46314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46314__$1,(4),ch);
} else {
if((state_val_46315 === (23))){
var state_46314__$1 = state_46314;
var statearr_46367_46432 = state_46314__$1;
(statearr_46367_46432[(2)] = null);

(statearr_46367_46432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (35))){
var inst_46296 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46368_46433 = state_46314__$1;
(statearr_46368_46433[(2)] = inst_46296);

(statearr_46368_46433[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (19))){
var inst_46213 = (state_46314[(7)]);
var inst_46217 = cljs.core.chunk_first.call(null,inst_46213);
var inst_46218 = cljs.core.chunk_rest.call(null,inst_46213);
var inst_46219 = cljs.core.count.call(null,inst_46217);
var inst_46191 = inst_46218;
var inst_46192 = inst_46217;
var inst_46193 = inst_46219;
var inst_46194 = (0);
var state_46314__$1 = (function (){var statearr_46369 = state_46314;
(statearr_46369[(13)] = inst_46192);

(statearr_46369[(15)] = inst_46191);

(statearr_46369[(16)] = inst_46193);

(statearr_46369[(17)] = inst_46194);

return statearr_46369;
})();
var statearr_46370_46434 = state_46314__$1;
(statearr_46370_46434[(2)] = null);

(statearr_46370_46434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (11))){
var inst_46191 = (state_46314[(15)]);
var inst_46213 = (state_46314[(7)]);
var inst_46213__$1 = cljs.core.seq.call(null,inst_46191);
var state_46314__$1 = (function (){var statearr_46371 = state_46314;
(statearr_46371[(7)] = inst_46213__$1);

return statearr_46371;
})();
if(inst_46213__$1){
var statearr_46372_46435 = state_46314__$1;
(statearr_46372_46435[(1)] = (16));

} else {
var statearr_46373_46436 = state_46314__$1;
(statearr_46373_46436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (9))){
var inst_46243 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46374_46437 = state_46314__$1;
(statearr_46374_46437[(2)] = inst_46243);

(statearr_46374_46437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (5))){
var inst_46189 = cljs.core.deref.call(null,cs);
var inst_46190 = cljs.core.seq.call(null,inst_46189);
var inst_46191 = inst_46190;
var inst_46192 = null;
var inst_46193 = (0);
var inst_46194 = (0);
var state_46314__$1 = (function (){var statearr_46375 = state_46314;
(statearr_46375[(13)] = inst_46192);

(statearr_46375[(15)] = inst_46191);

(statearr_46375[(16)] = inst_46193);

(statearr_46375[(17)] = inst_46194);

return statearr_46375;
})();
var statearr_46376_46438 = state_46314__$1;
(statearr_46376_46438[(2)] = null);

(statearr_46376_46438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (14))){
var state_46314__$1 = state_46314;
var statearr_46377_46439 = state_46314__$1;
(statearr_46377_46439[(2)] = null);

(statearr_46377_46439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (45))){
var inst_46304 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46378_46440 = state_46314__$1;
(statearr_46378_46440[(2)] = inst_46304);

(statearr_46378_46440[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (26))){
var inst_46246 = (state_46314[(29)]);
var inst_46300 = (state_46314[(2)]);
var inst_46301 = cljs.core.seq.call(null,inst_46246);
var state_46314__$1 = (function (){var statearr_46379 = state_46314;
(statearr_46379[(31)] = inst_46300);

return statearr_46379;
})();
if(inst_46301){
var statearr_46380_46441 = state_46314__$1;
(statearr_46380_46441[(1)] = (42));

} else {
var statearr_46381_46442 = state_46314__$1;
(statearr_46381_46442[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (16))){
var inst_46213 = (state_46314[(7)]);
var inst_46215 = cljs.core.chunked_seq_QMARK_.call(null,inst_46213);
var state_46314__$1 = state_46314;
if(inst_46215){
var statearr_46382_46443 = state_46314__$1;
(statearr_46382_46443[(1)] = (19));

} else {
var statearr_46383_46444 = state_46314__$1;
(statearr_46383_46444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (38))){
var inst_46293 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46384_46445 = state_46314__$1;
(statearr_46384_46445[(2)] = inst_46293);

(statearr_46384_46445[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (30))){
var state_46314__$1 = state_46314;
var statearr_46385_46446 = state_46314__$1;
(statearr_46385_46446[(2)] = null);

(statearr_46385_46446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (10))){
var inst_46192 = (state_46314[(13)]);
var inst_46194 = (state_46314[(17)]);
var inst_46202 = cljs.core._nth.call(null,inst_46192,inst_46194);
var inst_46203 = cljs.core.nth.call(null,inst_46202,(0),null);
var inst_46204 = cljs.core.nth.call(null,inst_46202,(1),null);
var state_46314__$1 = (function (){var statearr_46386 = state_46314;
(statearr_46386[(26)] = inst_46203);

return statearr_46386;
})();
if(cljs.core.truth_(inst_46204)){
var statearr_46387_46447 = state_46314__$1;
(statearr_46387_46447[(1)] = (13));

} else {
var statearr_46388_46448 = state_46314__$1;
(statearr_46388_46448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (18))){
var inst_46239 = (state_46314[(2)]);
var state_46314__$1 = state_46314;
var statearr_46389_46449 = state_46314__$1;
(statearr_46389_46449[(2)] = inst_46239);

(statearr_46389_46449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (42))){
var state_46314__$1 = state_46314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46314__$1,(45),dchan);
} else {
if((state_val_46315 === (37))){
var inst_46273 = (state_46314[(25)]);
var inst_46182 = (state_46314[(10)]);
var inst_46282 = (state_46314[(23)]);
var inst_46282__$1 = cljs.core.first.call(null,inst_46273);
var inst_46283 = cljs.core.async.put_BANG_.call(null,inst_46282__$1,inst_46182,done);
var state_46314__$1 = (function (){var statearr_46390 = state_46314;
(statearr_46390[(23)] = inst_46282__$1);

return statearr_46390;
})();
if(cljs.core.truth_(inst_46283)){
var statearr_46391_46450 = state_46314__$1;
(statearr_46391_46450[(1)] = (39));

} else {
var statearr_46392_46451 = state_46314__$1;
(statearr_46392_46451[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46315 === (8))){
var inst_46193 = (state_46314[(16)]);
var inst_46194 = (state_46314[(17)]);
var inst_46196 = (inst_46194 < inst_46193);
var inst_46197 = inst_46196;
var state_46314__$1 = state_46314;
if(cljs.core.truth_(inst_46197)){
var statearr_46393_46452 = state_46314__$1;
(statearr_46393_46452[(1)] = (10));

} else {
var statearr_46394_46453 = state_46314__$1;
(statearr_46394_46453[(1)] = (11));

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
});})(c__43716__auto___46399,cs,m,dchan,dctr,done))
;
return ((function (switch__43559__auto__,c__43716__auto___46399,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43560__auto__ = null;
var cljs$core$async$mult_$_state_machine__43560__auto____0 = (function (){
var statearr_46395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46395[(0)] = cljs$core$async$mult_$_state_machine__43560__auto__);

(statearr_46395[(1)] = (1));

return statearr_46395;
});
var cljs$core$async$mult_$_state_machine__43560__auto____1 = (function (state_46314){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_46314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e46396){if((e46396 instanceof Object)){
var ex__43563__auto__ = e46396;
var statearr_46397_46454 = state_46314;
(statearr_46397_46454[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46455 = state_46314;
state_46314 = G__46455;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43560__auto__ = function(state_46314){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43560__auto____1.call(this,state_46314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43560__auto____0;
cljs$core$async$mult_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43560__auto____1;
return cljs$core$async$mult_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___46399,cs,m,dchan,dctr,done))
})();
var state__43718__auto__ = (function (){var statearr_46398 = f__43717__auto__.call(null);
(statearr_46398[(6)] = c__43716__auto___46399);

return statearr_46398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___46399,cs,m,dchan,dctr,done))
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
var G__46457 = arguments.length;
switch (G__46457) {
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
var len__4499__auto___46469 = arguments.length;
var i__4500__auto___46470 = (0);
while(true){
if((i__4500__auto___46470 < len__4499__auto___46469)){
args__4502__auto__.push((arguments[i__4500__auto___46470]));

var G__46471 = (i__4500__auto___46470 + (1));
i__4500__auto___46470 = G__46471;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46463){
var map__46464 = p__46463;
var map__46464__$1 = ((((!((map__46464 == null)))?(((((map__46464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46464):map__46464);
var opts = map__46464__$1;
var statearr_46466_46472 = state;
(statearr_46466_46472[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__46464,map__46464__$1,opts){
return (function (val){
var statearr_46467_46473 = state;
(statearr_46467_46473[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46464,map__46464__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_46468_46474 = state;
(statearr_46468_46474[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46459){
var G__46460 = cljs.core.first.call(null,seq46459);
var seq46459__$1 = cljs.core.next.call(null,seq46459);
var G__46461 = cljs.core.first.call(null,seq46459__$1);
var seq46459__$2 = cljs.core.next.call(null,seq46459__$1);
var G__46462 = cljs.core.first.call(null,seq46459__$2);
var seq46459__$3 = cljs.core.next.call(null,seq46459__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46460,G__46461,G__46462,seq46459__$3);
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
if(typeof cljs.core.async.t_cljs$core$async46475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46475 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46476){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46476 = meta46476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46477,meta46476__$1){
var self__ = this;
var _46477__$1 = this;
return (new cljs.core.async.t_cljs$core$async46475(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46476__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46477){
var self__ = this;
var _46477__$1 = this;
return self__.meta46476;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46475.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async46475.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46476","meta46476",402422556,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46475";

cljs.core.async.t_cljs$core$async46475.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async46475");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46475.
 */
cljs.core.async.__GT_t_cljs$core$async46475 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46475(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46476){
return (new cljs.core.async.t_cljs$core$async46475(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46476));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46475(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43716__auto___46639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___46639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___46639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46579){
var state_val_46580 = (state_46579[(1)]);
if((state_val_46580 === (7))){
var inst_46494 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
var statearr_46581_46640 = state_46579__$1;
(statearr_46581_46640[(2)] = inst_46494);

(statearr_46581_46640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (20))){
var inst_46506 = (state_46579[(7)]);
var state_46579__$1 = state_46579;
var statearr_46582_46641 = state_46579__$1;
(statearr_46582_46641[(2)] = inst_46506);

(statearr_46582_46641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (27))){
var state_46579__$1 = state_46579;
var statearr_46583_46642 = state_46579__$1;
(statearr_46583_46642[(2)] = null);

(statearr_46583_46642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (1))){
var inst_46481 = (state_46579[(8)]);
var inst_46481__$1 = calc_state.call(null);
var inst_46483 = (inst_46481__$1 == null);
var inst_46484 = cljs.core.not.call(null,inst_46483);
var state_46579__$1 = (function (){var statearr_46584 = state_46579;
(statearr_46584[(8)] = inst_46481__$1);

return statearr_46584;
})();
if(inst_46484){
var statearr_46585_46643 = state_46579__$1;
(statearr_46585_46643[(1)] = (2));

} else {
var statearr_46586_46644 = state_46579__$1;
(statearr_46586_46644[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (24))){
var inst_46539 = (state_46579[(9)]);
var inst_46553 = (state_46579[(10)]);
var inst_46530 = (state_46579[(11)]);
var inst_46553__$1 = inst_46530.call(null,inst_46539);
var state_46579__$1 = (function (){var statearr_46587 = state_46579;
(statearr_46587[(10)] = inst_46553__$1);

return statearr_46587;
})();
if(cljs.core.truth_(inst_46553__$1)){
var statearr_46588_46645 = state_46579__$1;
(statearr_46588_46645[(1)] = (29));

} else {
var statearr_46589_46646 = state_46579__$1;
(statearr_46589_46646[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (4))){
var inst_46497 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
if(cljs.core.truth_(inst_46497)){
var statearr_46590_46647 = state_46579__$1;
(statearr_46590_46647[(1)] = (8));

} else {
var statearr_46591_46648 = state_46579__$1;
(statearr_46591_46648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (15))){
var inst_46524 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
if(cljs.core.truth_(inst_46524)){
var statearr_46592_46649 = state_46579__$1;
(statearr_46592_46649[(1)] = (19));

} else {
var statearr_46593_46650 = state_46579__$1;
(statearr_46593_46650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (21))){
var inst_46529 = (state_46579[(12)]);
var inst_46529__$1 = (state_46579[(2)]);
var inst_46530 = cljs.core.get.call(null,inst_46529__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46531 = cljs.core.get.call(null,inst_46529__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46532 = cljs.core.get.call(null,inst_46529__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46579__$1 = (function (){var statearr_46594 = state_46579;
(statearr_46594[(13)] = inst_46531);

(statearr_46594[(11)] = inst_46530);

(statearr_46594[(12)] = inst_46529__$1);

return statearr_46594;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46579__$1,(22),inst_46532);
} else {
if((state_val_46580 === (31))){
var inst_46561 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
if(cljs.core.truth_(inst_46561)){
var statearr_46595_46651 = state_46579__$1;
(statearr_46595_46651[(1)] = (32));

} else {
var statearr_46596_46652 = state_46579__$1;
(statearr_46596_46652[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (32))){
var inst_46538 = (state_46579[(14)]);
var state_46579__$1 = state_46579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46579__$1,(35),out,inst_46538);
} else {
if((state_val_46580 === (33))){
var inst_46529 = (state_46579[(12)]);
var inst_46506 = inst_46529;
var state_46579__$1 = (function (){var statearr_46597 = state_46579;
(statearr_46597[(7)] = inst_46506);

return statearr_46597;
})();
var statearr_46598_46653 = state_46579__$1;
(statearr_46598_46653[(2)] = null);

(statearr_46598_46653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (13))){
var inst_46506 = (state_46579[(7)]);
var inst_46513 = inst_46506.cljs$lang$protocol_mask$partition0$;
var inst_46514 = (inst_46513 & (64));
var inst_46515 = inst_46506.cljs$core$ISeq$;
var inst_46516 = (cljs.core.PROTOCOL_SENTINEL === inst_46515);
var inst_46517 = ((inst_46514) || (inst_46516));
var state_46579__$1 = state_46579;
if(cljs.core.truth_(inst_46517)){
var statearr_46599_46654 = state_46579__$1;
(statearr_46599_46654[(1)] = (16));

} else {
var statearr_46600_46655 = state_46579__$1;
(statearr_46600_46655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (22))){
var inst_46539 = (state_46579[(9)]);
var inst_46538 = (state_46579[(14)]);
var inst_46537 = (state_46579[(2)]);
var inst_46538__$1 = cljs.core.nth.call(null,inst_46537,(0),null);
var inst_46539__$1 = cljs.core.nth.call(null,inst_46537,(1),null);
var inst_46540 = (inst_46538__$1 == null);
var inst_46541 = cljs.core._EQ_.call(null,inst_46539__$1,change);
var inst_46542 = ((inst_46540) || (inst_46541));
var state_46579__$1 = (function (){var statearr_46601 = state_46579;
(statearr_46601[(9)] = inst_46539__$1);

(statearr_46601[(14)] = inst_46538__$1);

return statearr_46601;
})();
if(cljs.core.truth_(inst_46542)){
var statearr_46602_46656 = state_46579__$1;
(statearr_46602_46656[(1)] = (23));

} else {
var statearr_46603_46657 = state_46579__$1;
(statearr_46603_46657[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (36))){
var inst_46529 = (state_46579[(12)]);
var inst_46506 = inst_46529;
var state_46579__$1 = (function (){var statearr_46604 = state_46579;
(statearr_46604[(7)] = inst_46506);

return statearr_46604;
})();
var statearr_46605_46658 = state_46579__$1;
(statearr_46605_46658[(2)] = null);

(statearr_46605_46658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (29))){
var inst_46553 = (state_46579[(10)]);
var state_46579__$1 = state_46579;
var statearr_46606_46659 = state_46579__$1;
(statearr_46606_46659[(2)] = inst_46553);

(statearr_46606_46659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (6))){
var state_46579__$1 = state_46579;
var statearr_46607_46660 = state_46579__$1;
(statearr_46607_46660[(2)] = false);

(statearr_46607_46660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (28))){
var inst_46549 = (state_46579[(2)]);
var inst_46550 = calc_state.call(null);
var inst_46506 = inst_46550;
var state_46579__$1 = (function (){var statearr_46608 = state_46579;
(statearr_46608[(15)] = inst_46549);

(statearr_46608[(7)] = inst_46506);

return statearr_46608;
})();
var statearr_46609_46661 = state_46579__$1;
(statearr_46609_46661[(2)] = null);

(statearr_46609_46661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (25))){
var inst_46575 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
var statearr_46610_46662 = state_46579__$1;
(statearr_46610_46662[(2)] = inst_46575);

(statearr_46610_46662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (34))){
var inst_46573 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
var statearr_46611_46663 = state_46579__$1;
(statearr_46611_46663[(2)] = inst_46573);

(statearr_46611_46663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (17))){
var state_46579__$1 = state_46579;
var statearr_46612_46664 = state_46579__$1;
(statearr_46612_46664[(2)] = false);

(statearr_46612_46664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (3))){
var state_46579__$1 = state_46579;
var statearr_46613_46665 = state_46579__$1;
(statearr_46613_46665[(2)] = false);

(statearr_46613_46665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (12))){
var inst_46577 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46579__$1,inst_46577);
} else {
if((state_val_46580 === (2))){
var inst_46481 = (state_46579[(8)]);
var inst_46486 = inst_46481.cljs$lang$protocol_mask$partition0$;
var inst_46487 = (inst_46486 & (64));
var inst_46488 = inst_46481.cljs$core$ISeq$;
var inst_46489 = (cljs.core.PROTOCOL_SENTINEL === inst_46488);
var inst_46490 = ((inst_46487) || (inst_46489));
var state_46579__$1 = state_46579;
if(cljs.core.truth_(inst_46490)){
var statearr_46614_46666 = state_46579__$1;
(statearr_46614_46666[(1)] = (5));

} else {
var statearr_46615_46667 = state_46579__$1;
(statearr_46615_46667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (23))){
var inst_46538 = (state_46579[(14)]);
var inst_46544 = (inst_46538 == null);
var state_46579__$1 = state_46579;
if(cljs.core.truth_(inst_46544)){
var statearr_46616_46668 = state_46579__$1;
(statearr_46616_46668[(1)] = (26));

} else {
var statearr_46617_46669 = state_46579__$1;
(statearr_46617_46669[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (35))){
var inst_46564 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
if(cljs.core.truth_(inst_46564)){
var statearr_46618_46670 = state_46579__$1;
(statearr_46618_46670[(1)] = (36));

} else {
var statearr_46619_46671 = state_46579__$1;
(statearr_46619_46671[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (19))){
var inst_46506 = (state_46579[(7)]);
var inst_46526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46506);
var state_46579__$1 = state_46579;
var statearr_46620_46672 = state_46579__$1;
(statearr_46620_46672[(2)] = inst_46526);

(statearr_46620_46672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (11))){
var inst_46506 = (state_46579[(7)]);
var inst_46510 = (inst_46506 == null);
var inst_46511 = cljs.core.not.call(null,inst_46510);
var state_46579__$1 = state_46579;
if(inst_46511){
var statearr_46621_46673 = state_46579__$1;
(statearr_46621_46673[(1)] = (13));

} else {
var statearr_46622_46674 = state_46579__$1;
(statearr_46622_46674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (9))){
var inst_46481 = (state_46579[(8)]);
var state_46579__$1 = state_46579;
var statearr_46623_46675 = state_46579__$1;
(statearr_46623_46675[(2)] = inst_46481);

(statearr_46623_46675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (5))){
var state_46579__$1 = state_46579;
var statearr_46624_46676 = state_46579__$1;
(statearr_46624_46676[(2)] = true);

(statearr_46624_46676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (14))){
var state_46579__$1 = state_46579;
var statearr_46625_46677 = state_46579__$1;
(statearr_46625_46677[(2)] = false);

(statearr_46625_46677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (26))){
var inst_46539 = (state_46579[(9)]);
var inst_46546 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46539);
var state_46579__$1 = state_46579;
var statearr_46626_46678 = state_46579__$1;
(statearr_46626_46678[(2)] = inst_46546);

(statearr_46626_46678[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (16))){
var state_46579__$1 = state_46579;
var statearr_46627_46679 = state_46579__$1;
(statearr_46627_46679[(2)] = true);

(statearr_46627_46679[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (38))){
var inst_46569 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
var statearr_46628_46680 = state_46579__$1;
(statearr_46628_46680[(2)] = inst_46569);

(statearr_46628_46680[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (30))){
var inst_46539 = (state_46579[(9)]);
var inst_46531 = (state_46579[(13)]);
var inst_46530 = (state_46579[(11)]);
var inst_46556 = cljs.core.empty_QMARK_.call(null,inst_46530);
var inst_46557 = inst_46531.call(null,inst_46539);
var inst_46558 = cljs.core.not.call(null,inst_46557);
var inst_46559 = ((inst_46556) && (inst_46558));
var state_46579__$1 = state_46579;
var statearr_46629_46681 = state_46579__$1;
(statearr_46629_46681[(2)] = inst_46559);

(statearr_46629_46681[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (10))){
var inst_46481 = (state_46579[(8)]);
var inst_46502 = (state_46579[(2)]);
var inst_46503 = cljs.core.get.call(null,inst_46502,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46504 = cljs.core.get.call(null,inst_46502,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46505 = cljs.core.get.call(null,inst_46502,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46506 = inst_46481;
var state_46579__$1 = (function (){var statearr_46630 = state_46579;
(statearr_46630[(16)] = inst_46505);

(statearr_46630[(17)] = inst_46504);

(statearr_46630[(18)] = inst_46503);

(statearr_46630[(7)] = inst_46506);

return statearr_46630;
})();
var statearr_46631_46682 = state_46579__$1;
(statearr_46631_46682[(2)] = null);

(statearr_46631_46682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (18))){
var inst_46521 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
var statearr_46632_46683 = state_46579__$1;
(statearr_46632_46683[(2)] = inst_46521);

(statearr_46632_46683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (37))){
var state_46579__$1 = state_46579;
var statearr_46633_46684 = state_46579__$1;
(statearr_46633_46684[(2)] = null);

(statearr_46633_46684[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (8))){
var inst_46481 = (state_46579[(8)]);
var inst_46499 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46481);
var state_46579__$1 = state_46579;
var statearr_46634_46685 = state_46579__$1;
(statearr_46634_46685[(2)] = inst_46499);

(statearr_46634_46685[(1)] = (10));


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
});})(c__43716__auto___46639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43559__auto__,c__43716__auto___46639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43560__auto__ = null;
var cljs$core$async$mix_$_state_machine__43560__auto____0 = (function (){
var statearr_46635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46635[(0)] = cljs$core$async$mix_$_state_machine__43560__auto__);

(statearr_46635[(1)] = (1));

return statearr_46635;
});
var cljs$core$async$mix_$_state_machine__43560__auto____1 = (function (state_46579){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_46579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e46636){if((e46636 instanceof Object)){
var ex__43563__auto__ = e46636;
var statearr_46637_46686 = state_46579;
(statearr_46637_46686[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46687 = state_46579;
state_46579 = G__46687;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43560__auto__ = function(state_46579){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43560__auto____1.call(this,state_46579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43560__auto____0;
cljs$core$async$mix_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43560__auto____1;
return cljs$core$async$mix_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___46639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43718__auto__ = (function (){var statearr_46638 = f__43717__auto__.call(null);
(statearr_46638[(6)] = c__43716__auto___46639);

return statearr_46638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___46639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__46689 = arguments.length;
switch (G__46689) {
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
var G__46693 = arguments.length;
switch (G__46693) {
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
return (function (p1__46691_SHARP_){
if(cljs.core.truth_(p1__46691_SHARP_.call(null,topic))){
return p1__46691_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46691_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46694 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46695){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46695 = meta46695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46696,meta46695__$1){
var self__ = this;
var _46696__$1 = this;
return (new cljs.core.async.t_cljs$core$async46694(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46695__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46696){
var self__ = this;
var _46696__$1 = this;
return self__.meta46695;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46694.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46694.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46694.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46694.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46694.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46695","meta46695",-2061214679,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46694";

cljs.core.async.t_cljs$core$async46694.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async46694");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46694.
 */
cljs.core.async.__GT_t_cljs$core$async46694 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46695){
return (new cljs.core.async.t_cljs$core$async46694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46695));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46694(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43716__auto___46814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___46814,mults,ensure_mult,p){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___46814,mults,ensure_mult,p){
return (function (state_46768){
var state_val_46769 = (state_46768[(1)]);
if((state_val_46769 === (7))){
var inst_46764 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46770_46815 = state_46768__$1;
(statearr_46770_46815[(2)] = inst_46764);

(statearr_46770_46815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (20))){
var state_46768__$1 = state_46768;
var statearr_46771_46816 = state_46768__$1;
(statearr_46771_46816[(2)] = null);

(statearr_46771_46816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (1))){
var state_46768__$1 = state_46768;
var statearr_46772_46817 = state_46768__$1;
(statearr_46772_46817[(2)] = null);

(statearr_46772_46817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (24))){
var inst_46747 = (state_46768[(7)]);
var inst_46756 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46747);
var state_46768__$1 = state_46768;
var statearr_46773_46818 = state_46768__$1;
(statearr_46773_46818[(2)] = inst_46756);

(statearr_46773_46818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (4))){
var inst_46699 = (state_46768[(8)]);
var inst_46699__$1 = (state_46768[(2)]);
var inst_46700 = (inst_46699__$1 == null);
var state_46768__$1 = (function (){var statearr_46774 = state_46768;
(statearr_46774[(8)] = inst_46699__$1);

return statearr_46774;
})();
if(cljs.core.truth_(inst_46700)){
var statearr_46775_46819 = state_46768__$1;
(statearr_46775_46819[(1)] = (5));

} else {
var statearr_46776_46820 = state_46768__$1;
(statearr_46776_46820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (15))){
var inst_46741 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46777_46821 = state_46768__$1;
(statearr_46777_46821[(2)] = inst_46741);

(statearr_46777_46821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (21))){
var inst_46761 = (state_46768[(2)]);
var state_46768__$1 = (function (){var statearr_46778 = state_46768;
(statearr_46778[(9)] = inst_46761);

return statearr_46778;
})();
var statearr_46779_46822 = state_46768__$1;
(statearr_46779_46822[(2)] = null);

(statearr_46779_46822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (13))){
var inst_46723 = (state_46768[(10)]);
var inst_46725 = cljs.core.chunked_seq_QMARK_.call(null,inst_46723);
var state_46768__$1 = state_46768;
if(inst_46725){
var statearr_46780_46823 = state_46768__$1;
(statearr_46780_46823[(1)] = (16));

} else {
var statearr_46781_46824 = state_46768__$1;
(statearr_46781_46824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (22))){
var inst_46753 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
if(cljs.core.truth_(inst_46753)){
var statearr_46782_46825 = state_46768__$1;
(statearr_46782_46825[(1)] = (23));

} else {
var statearr_46783_46826 = state_46768__$1;
(statearr_46783_46826[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (6))){
var inst_46747 = (state_46768[(7)]);
var inst_46699 = (state_46768[(8)]);
var inst_46749 = (state_46768[(11)]);
var inst_46747__$1 = topic_fn.call(null,inst_46699);
var inst_46748 = cljs.core.deref.call(null,mults);
var inst_46749__$1 = cljs.core.get.call(null,inst_46748,inst_46747__$1);
var state_46768__$1 = (function (){var statearr_46784 = state_46768;
(statearr_46784[(7)] = inst_46747__$1);

(statearr_46784[(11)] = inst_46749__$1);

return statearr_46784;
})();
if(cljs.core.truth_(inst_46749__$1)){
var statearr_46785_46827 = state_46768__$1;
(statearr_46785_46827[(1)] = (19));

} else {
var statearr_46786_46828 = state_46768__$1;
(statearr_46786_46828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (25))){
var inst_46758 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46787_46829 = state_46768__$1;
(statearr_46787_46829[(2)] = inst_46758);

(statearr_46787_46829[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (17))){
var inst_46723 = (state_46768[(10)]);
var inst_46732 = cljs.core.first.call(null,inst_46723);
var inst_46733 = cljs.core.async.muxch_STAR_.call(null,inst_46732);
var inst_46734 = cljs.core.async.close_BANG_.call(null,inst_46733);
var inst_46735 = cljs.core.next.call(null,inst_46723);
var inst_46709 = inst_46735;
var inst_46710 = null;
var inst_46711 = (0);
var inst_46712 = (0);
var state_46768__$1 = (function (){var statearr_46788 = state_46768;
(statearr_46788[(12)] = inst_46710);

(statearr_46788[(13)] = inst_46709);

(statearr_46788[(14)] = inst_46734);

(statearr_46788[(15)] = inst_46712);

(statearr_46788[(16)] = inst_46711);

return statearr_46788;
})();
var statearr_46789_46830 = state_46768__$1;
(statearr_46789_46830[(2)] = null);

(statearr_46789_46830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (3))){
var inst_46766 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46768__$1,inst_46766);
} else {
if((state_val_46769 === (12))){
var inst_46743 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46790_46831 = state_46768__$1;
(statearr_46790_46831[(2)] = inst_46743);

(statearr_46790_46831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (2))){
var state_46768__$1 = state_46768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46768__$1,(4),ch);
} else {
if((state_val_46769 === (23))){
var state_46768__$1 = state_46768;
var statearr_46791_46832 = state_46768__$1;
(statearr_46791_46832[(2)] = null);

(statearr_46791_46832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (19))){
var inst_46699 = (state_46768[(8)]);
var inst_46749 = (state_46768[(11)]);
var inst_46751 = cljs.core.async.muxch_STAR_.call(null,inst_46749);
var state_46768__$1 = state_46768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46768__$1,(22),inst_46751,inst_46699);
} else {
if((state_val_46769 === (11))){
var inst_46723 = (state_46768[(10)]);
var inst_46709 = (state_46768[(13)]);
var inst_46723__$1 = cljs.core.seq.call(null,inst_46709);
var state_46768__$1 = (function (){var statearr_46792 = state_46768;
(statearr_46792[(10)] = inst_46723__$1);

return statearr_46792;
})();
if(inst_46723__$1){
var statearr_46793_46833 = state_46768__$1;
(statearr_46793_46833[(1)] = (13));

} else {
var statearr_46794_46834 = state_46768__$1;
(statearr_46794_46834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (9))){
var inst_46745 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46795_46835 = state_46768__$1;
(statearr_46795_46835[(2)] = inst_46745);

(statearr_46795_46835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (5))){
var inst_46706 = cljs.core.deref.call(null,mults);
var inst_46707 = cljs.core.vals.call(null,inst_46706);
var inst_46708 = cljs.core.seq.call(null,inst_46707);
var inst_46709 = inst_46708;
var inst_46710 = null;
var inst_46711 = (0);
var inst_46712 = (0);
var state_46768__$1 = (function (){var statearr_46796 = state_46768;
(statearr_46796[(12)] = inst_46710);

(statearr_46796[(13)] = inst_46709);

(statearr_46796[(15)] = inst_46712);

(statearr_46796[(16)] = inst_46711);

return statearr_46796;
})();
var statearr_46797_46836 = state_46768__$1;
(statearr_46797_46836[(2)] = null);

(statearr_46797_46836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (14))){
var state_46768__$1 = state_46768;
var statearr_46801_46837 = state_46768__$1;
(statearr_46801_46837[(2)] = null);

(statearr_46801_46837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (16))){
var inst_46723 = (state_46768[(10)]);
var inst_46727 = cljs.core.chunk_first.call(null,inst_46723);
var inst_46728 = cljs.core.chunk_rest.call(null,inst_46723);
var inst_46729 = cljs.core.count.call(null,inst_46727);
var inst_46709 = inst_46728;
var inst_46710 = inst_46727;
var inst_46711 = inst_46729;
var inst_46712 = (0);
var state_46768__$1 = (function (){var statearr_46802 = state_46768;
(statearr_46802[(12)] = inst_46710);

(statearr_46802[(13)] = inst_46709);

(statearr_46802[(15)] = inst_46712);

(statearr_46802[(16)] = inst_46711);

return statearr_46802;
})();
var statearr_46803_46838 = state_46768__$1;
(statearr_46803_46838[(2)] = null);

(statearr_46803_46838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (10))){
var inst_46710 = (state_46768[(12)]);
var inst_46709 = (state_46768[(13)]);
var inst_46712 = (state_46768[(15)]);
var inst_46711 = (state_46768[(16)]);
var inst_46717 = cljs.core._nth.call(null,inst_46710,inst_46712);
var inst_46718 = cljs.core.async.muxch_STAR_.call(null,inst_46717);
var inst_46719 = cljs.core.async.close_BANG_.call(null,inst_46718);
var inst_46720 = (inst_46712 + (1));
var tmp46798 = inst_46710;
var tmp46799 = inst_46709;
var tmp46800 = inst_46711;
var inst_46709__$1 = tmp46799;
var inst_46710__$1 = tmp46798;
var inst_46711__$1 = tmp46800;
var inst_46712__$1 = inst_46720;
var state_46768__$1 = (function (){var statearr_46804 = state_46768;
(statearr_46804[(12)] = inst_46710__$1);

(statearr_46804[(17)] = inst_46719);

(statearr_46804[(13)] = inst_46709__$1);

(statearr_46804[(15)] = inst_46712__$1);

(statearr_46804[(16)] = inst_46711__$1);

return statearr_46804;
})();
var statearr_46805_46839 = state_46768__$1;
(statearr_46805_46839[(2)] = null);

(statearr_46805_46839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (18))){
var inst_46738 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46806_46840 = state_46768__$1;
(statearr_46806_46840[(2)] = inst_46738);

(statearr_46806_46840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (8))){
var inst_46712 = (state_46768[(15)]);
var inst_46711 = (state_46768[(16)]);
var inst_46714 = (inst_46712 < inst_46711);
var inst_46715 = inst_46714;
var state_46768__$1 = state_46768;
if(cljs.core.truth_(inst_46715)){
var statearr_46807_46841 = state_46768__$1;
(statearr_46807_46841[(1)] = (10));

} else {
var statearr_46808_46842 = state_46768__$1;
(statearr_46808_46842[(1)] = (11));

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
});})(c__43716__auto___46814,mults,ensure_mult,p))
;
return ((function (switch__43559__auto__,c__43716__auto___46814,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_46809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46809[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_46809[(1)] = (1));

return statearr_46809;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_46768){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_46768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e46810){if((e46810 instanceof Object)){
var ex__43563__auto__ = e46810;
var statearr_46811_46843 = state_46768;
(statearr_46811_46843[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46844 = state_46768;
state_46768 = G__46844;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_46768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_46768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___46814,mults,ensure_mult,p))
})();
var state__43718__auto__ = (function (){var statearr_46812 = f__43717__auto__.call(null);
(statearr_46812[(6)] = c__43716__auto___46814);

return statearr_46812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___46814,mults,ensure_mult,p))
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
var G__46846 = arguments.length;
switch (G__46846) {
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
var G__46849 = arguments.length;
switch (G__46849) {
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
var G__46852 = arguments.length;
switch (G__46852) {
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
var c__43716__auto___46919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___46919,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___46919,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46891){
var state_val_46892 = (state_46891[(1)]);
if((state_val_46892 === (7))){
var state_46891__$1 = state_46891;
var statearr_46893_46920 = state_46891__$1;
(statearr_46893_46920[(2)] = null);

(statearr_46893_46920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (1))){
var state_46891__$1 = state_46891;
var statearr_46894_46921 = state_46891__$1;
(statearr_46894_46921[(2)] = null);

(statearr_46894_46921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (4))){
var inst_46855 = (state_46891[(7)]);
var inst_46857 = (inst_46855 < cnt);
var state_46891__$1 = state_46891;
if(cljs.core.truth_(inst_46857)){
var statearr_46895_46922 = state_46891__$1;
(statearr_46895_46922[(1)] = (6));

} else {
var statearr_46896_46923 = state_46891__$1;
(statearr_46896_46923[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (15))){
var inst_46887 = (state_46891[(2)]);
var state_46891__$1 = state_46891;
var statearr_46897_46924 = state_46891__$1;
(statearr_46897_46924[(2)] = inst_46887);

(statearr_46897_46924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (13))){
var inst_46880 = cljs.core.async.close_BANG_.call(null,out);
var state_46891__$1 = state_46891;
var statearr_46898_46925 = state_46891__$1;
(statearr_46898_46925[(2)] = inst_46880);

(statearr_46898_46925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (6))){
var state_46891__$1 = state_46891;
var statearr_46899_46926 = state_46891__$1;
(statearr_46899_46926[(2)] = null);

(statearr_46899_46926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (3))){
var inst_46889 = (state_46891[(2)]);
var state_46891__$1 = state_46891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46891__$1,inst_46889);
} else {
if((state_val_46892 === (12))){
var inst_46877 = (state_46891[(8)]);
var inst_46877__$1 = (state_46891[(2)]);
var inst_46878 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46877__$1);
var state_46891__$1 = (function (){var statearr_46900 = state_46891;
(statearr_46900[(8)] = inst_46877__$1);

return statearr_46900;
})();
if(cljs.core.truth_(inst_46878)){
var statearr_46901_46927 = state_46891__$1;
(statearr_46901_46927[(1)] = (13));

} else {
var statearr_46902_46928 = state_46891__$1;
(statearr_46902_46928[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (2))){
var inst_46854 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46855 = (0);
var state_46891__$1 = (function (){var statearr_46903 = state_46891;
(statearr_46903[(7)] = inst_46855);

(statearr_46903[(9)] = inst_46854);

return statearr_46903;
})();
var statearr_46904_46929 = state_46891__$1;
(statearr_46904_46929[(2)] = null);

(statearr_46904_46929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (11))){
var inst_46855 = (state_46891[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46891,(10),Object,null,(9));
var inst_46864 = chs__$1.call(null,inst_46855);
var inst_46865 = done.call(null,inst_46855);
var inst_46866 = cljs.core.async.take_BANG_.call(null,inst_46864,inst_46865);
var state_46891__$1 = state_46891;
var statearr_46905_46930 = state_46891__$1;
(statearr_46905_46930[(2)] = inst_46866);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46891__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (9))){
var inst_46855 = (state_46891[(7)]);
var inst_46868 = (state_46891[(2)]);
var inst_46869 = (inst_46855 + (1));
var inst_46855__$1 = inst_46869;
var state_46891__$1 = (function (){var statearr_46906 = state_46891;
(statearr_46906[(7)] = inst_46855__$1);

(statearr_46906[(10)] = inst_46868);

return statearr_46906;
})();
var statearr_46907_46931 = state_46891__$1;
(statearr_46907_46931[(2)] = null);

(statearr_46907_46931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (5))){
var inst_46875 = (state_46891[(2)]);
var state_46891__$1 = (function (){var statearr_46908 = state_46891;
(statearr_46908[(11)] = inst_46875);

return statearr_46908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46891__$1,(12),dchan);
} else {
if((state_val_46892 === (14))){
var inst_46877 = (state_46891[(8)]);
var inst_46882 = cljs.core.apply.call(null,f,inst_46877);
var state_46891__$1 = state_46891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46891__$1,(16),out,inst_46882);
} else {
if((state_val_46892 === (16))){
var inst_46884 = (state_46891[(2)]);
var state_46891__$1 = (function (){var statearr_46909 = state_46891;
(statearr_46909[(12)] = inst_46884);

return statearr_46909;
})();
var statearr_46910_46932 = state_46891__$1;
(statearr_46910_46932[(2)] = null);

(statearr_46910_46932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (10))){
var inst_46859 = (state_46891[(2)]);
var inst_46860 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46891__$1 = (function (){var statearr_46911 = state_46891;
(statearr_46911[(13)] = inst_46859);

return statearr_46911;
})();
var statearr_46912_46933 = state_46891__$1;
(statearr_46912_46933[(2)] = inst_46860);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46891__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46892 === (8))){
var inst_46873 = (state_46891[(2)]);
var state_46891__$1 = state_46891;
var statearr_46913_46934 = state_46891__$1;
(statearr_46913_46934[(2)] = inst_46873);

(statearr_46913_46934[(1)] = (5));


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
});})(c__43716__auto___46919,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43559__auto__,c__43716__auto___46919,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_46914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46914[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_46914[(1)] = (1));

return statearr_46914;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_46891){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_46891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e46915){if((e46915 instanceof Object)){
var ex__43563__auto__ = e46915;
var statearr_46916_46935 = state_46891;
(statearr_46916_46935[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46936 = state_46891;
state_46891 = G__46936;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_46891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_46891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___46919,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43718__auto__ = (function (){var statearr_46917 = f__43717__auto__.call(null);
(statearr_46917[(6)] = c__43716__auto___46919);

return statearr_46917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___46919,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__46939 = arguments.length;
switch (G__46939) {
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
var c__43716__auto___46993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___46993,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___46993,out){
return (function (state_46971){
var state_val_46972 = (state_46971[(1)]);
if((state_val_46972 === (7))){
var inst_46951 = (state_46971[(7)]);
var inst_46950 = (state_46971[(8)]);
var inst_46950__$1 = (state_46971[(2)]);
var inst_46951__$1 = cljs.core.nth.call(null,inst_46950__$1,(0),null);
var inst_46952 = cljs.core.nth.call(null,inst_46950__$1,(1),null);
var inst_46953 = (inst_46951__$1 == null);
var state_46971__$1 = (function (){var statearr_46973 = state_46971;
(statearr_46973[(7)] = inst_46951__$1);

(statearr_46973[(9)] = inst_46952);

(statearr_46973[(8)] = inst_46950__$1);

return statearr_46973;
})();
if(cljs.core.truth_(inst_46953)){
var statearr_46974_46994 = state_46971__$1;
(statearr_46974_46994[(1)] = (8));

} else {
var statearr_46975_46995 = state_46971__$1;
(statearr_46975_46995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (1))){
var inst_46940 = cljs.core.vec.call(null,chs);
var inst_46941 = inst_46940;
var state_46971__$1 = (function (){var statearr_46976 = state_46971;
(statearr_46976[(10)] = inst_46941);

return statearr_46976;
})();
var statearr_46977_46996 = state_46971__$1;
(statearr_46977_46996[(2)] = null);

(statearr_46977_46996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (4))){
var inst_46941 = (state_46971[(10)]);
var state_46971__$1 = state_46971;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46971__$1,(7),inst_46941);
} else {
if((state_val_46972 === (6))){
var inst_46967 = (state_46971[(2)]);
var state_46971__$1 = state_46971;
var statearr_46978_46997 = state_46971__$1;
(statearr_46978_46997[(2)] = inst_46967);

(statearr_46978_46997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (3))){
var inst_46969 = (state_46971[(2)]);
var state_46971__$1 = state_46971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46971__$1,inst_46969);
} else {
if((state_val_46972 === (2))){
var inst_46941 = (state_46971[(10)]);
var inst_46943 = cljs.core.count.call(null,inst_46941);
var inst_46944 = (inst_46943 > (0));
var state_46971__$1 = state_46971;
if(cljs.core.truth_(inst_46944)){
var statearr_46980_46998 = state_46971__$1;
(statearr_46980_46998[(1)] = (4));

} else {
var statearr_46981_46999 = state_46971__$1;
(statearr_46981_46999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (11))){
var inst_46941 = (state_46971[(10)]);
var inst_46960 = (state_46971[(2)]);
var tmp46979 = inst_46941;
var inst_46941__$1 = tmp46979;
var state_46971__$1 = (function (){var statearr_46982 = state_46971;
(statearr_46982[(11)] = inst_46960);

(statearr_46982[(10)] = inst_46941__$1);

return statearr_46982;
})();
var statearr_46983_47000 = state_46971__$1;
(statearr_46983_47000[(2)] = null);

(statearr_46983_47000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (9))){
var inst_46951 = (state_46971[(7)]);
var state_46971__$1 = state_46971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46971__$1,(11),out,inst_46951);
} else {
if((state_val_46972 === (5))){
var inst_46965 = cljs.core.async.close_BANG_.call(null,out);
var state_46971__$1 = state_46971;
var statearr_46984_47001 = state_46971__$1;
(statearr_46984_47001[(2)] = inst_46965);

(statearr_46984_47001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (10))){
var inst_46963 = (state_46971[(2)]);
var state_46971__$1 = state_46971;
var statearr_46985_47002 = state_46971__$1;
(statearr_46985_47002[(2)] = inst_46963);

(statearr_46985_47002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46972 === (8))){
var inst_46951 = (state_46971[(7)]);
var inst_46941 = (state_46971[(10)]);
var inst_46952 = (state_46971[(9)]);
var inst_46950 = (state_46971[(8)]);
var inst_46955 = (function (){var cs = inst_46941;
var vec__46946 = inst_46950;
var v = inst_46951;
var c = inst_46952;
return ((function (cs,vec__46946,v,c,inst_46951,inst_46941,inst_46952,inst_46950,state_val_46972,c__43716__auto___46993,out){
return (function (p1__46937_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46937_SHARP_);
});
;})(cs,vec__46946,v,c,inst_46951,inst_46941,inst_46952,inst_46950,state_val_46972,c__43716__auto___46993,out))
})();
var inst_46956 = cljs.core.filterv.call(null,inst_46955,inst_46941);
var inst_46941__$1 = inst_46956;
var state_46971__$1 = (function (){var statearr_46986 = state_46971;
(statearr_46986[(10)] = inst_46941__$1);

return statearr_46986;
})();
var statearr_46987_47003 = state_46971__$1;
(statearr_46987_47003[(2)] = null);

(statearr_46987_47003[(1)] = (2));


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
});})(c__43716__auto___46993,out))
;
return ((function (switch__43559__auto__,c__43716__auto___46993,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_46988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46988[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_46988[(1)] = (1));

return statearr_46988;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_46971){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_46971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e46989){if((e46989 instanceof Object)){
var ex__43563__auto__ = e46989;
var statearr_46990_47004 = state_46971;
(statearr_46990_47004[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47005 = state_46971;
state_46971 = G__47005;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_46971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_46971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___46993,out))
})();
var state__43718__auto__ = (function (){var statearr_46991 = f__43717__auto__.call(null);
(statearr_46991[(6)] = c__43716__auto___46993);

return statearr_46991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___46993,out))
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
var G__47007 = arguments.length;
switch (G__47007) {
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
var c__43716__auto___47052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___47052,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___47052,out){
return (function (state_47031){
var state_val_47032 = (state_47031[(1)]);
if((state_val_47032 === (7))){
var inst_47013 = (state_47031[(7)]);
var inst_47013__$1 = (state_47031[(2)]);
var inst_47014 = (inst_47013__$1 == null);
var inst_47015 = cljs.core.not.call(null,inst_47014);
var state_47031__$1 = (function (){var statearr_47033 = state_47031;
(statearr_47033[(7)] = inst_47013__$1);

return statearr_47033;
})();
if(inst_47015){
var statearr_47034_47053 = state_47031__$1;
(statearr_47034_47053[(1)] = (8));

} else {
var statearr_47035_47054 = state_47031__$1;
(statearr_47035_47054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (1))){
var inst_47008 = (0);
var state_47031__$1 = (function (){var statearr_47036 = state_47031;
(statearr_47036[(8)] = inst_47008);

return statearr_47036;
})();
var statearr_47037_47055 = state_47031__$1;
(statearr_47037_47055[(2)] = null);

(statearr_47037_47055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (4))){
var state_47031__$1 = state_47031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47031__$1,(7),ch);
} else {
if((state_val_47032 === (6))){
var inst_47026 = (state_47031[(2)]);
var state_47031__$1 = state_47031;
var statearr_47038_47056 = state_47031__$1;
(statearr_47038_47056[(2)] = inst_47026);

(statearr_47038_47056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (3))){
var inst_47028 = (state_47031[(2)]);
var inst_47029 = cljs.core.async.close_BANG_.call(null,out);
var state_47031__$1 = (function (){var statearr_47039 = state_47031;
(statearr_47039[(9)] = inst_47028);

return statearr_47039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47031__$1,inst_47029);
} else {
if((state_val_47032 === (2))){
var inst_47008 = (state_47031[(8)]);
var inst_47010 = (inst_47008 < n);
var state_47031__$1 = state_47031;
if(cljs.core.truth_(inst_47010)){
var statearr_47040_47057 = state_47031__$1;
(statearr_47040_47057[(1)] = (4));

} else {
var statearr_47041_47058 = state_47031__$1;
(statearr_47041_47058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (11))){
var inst_47008 = (state_47031[(8)]);
var inst_47018 = (state_47031[(2)]);
var inst_47019 = (inst_47008 + (1));
var inst_47008__$1 = inst_47019;
var state_47031__$1 = (function (){var statearr_47042 = state_47031;
(statearr_47042[(8)] = inst_47008__$1);

(statearr_47042[(10)] = inst_47018);

return statearr_47042;
})();
var statearr_47043_47059 = state_47031__$1;
(statearr_47043_47059[(2)] = null);

(statearr_47043_47059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (9))){
var state_47031__$1 = state_47031;
var statearr_47044_47060 = state_47031__$1;
(statearr_47044_47060[(2)] = null);

(statearr_47044_47060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (5))){
var state_47031__$1 = state_47031;
var statearr_47045_47061 = state_47031__$1;
(statearr_47045_47061[(2)] = null);

(statearr_47045_47061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (10))){
var inst_47023 = (state_47031[(2)]);
var state_47031__$1 = state_47031;
var statearr_47046_47062 = state_47031__$1;
(statearr_47046_47062[(2)] = inst_47023);

(statearr_47046_47062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47032 === (8))){
var inst_47013 = (state_47031[(7)]);
var state_47031__$1 = state_47031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47031__$1,(11),out,inst_47013);
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
});})(c__43716__auto___47052,out))
;
return ((function (switch__43559__auto__,c__43716__auto___47052,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_47047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47047[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_47047[(1)] = (1));

return statearr_47047;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_47031){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_47031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e47048){if((e47048 instanceof Object)){
var ex__43563__auto__ = e47048;
var statearr_47049_47063 = state_47031;
(statearr_47049_47063[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47064 = state_47031;
state_47031 = G__47064;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_47031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_47031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___47052,out))
})();
var state__43718__auto__ = (function (){var statearr_47050 = f__43717__auto__.call(null);
(statearr_47050[(6)] = c__43716__auto___47052);

return statearr_47050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___47052,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47066 = (function (f,ch,meta47067){
this.f = f;
this.ch = ch;
this.meta47067 = meta47067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47068,meta47067__$1){
var self__ = this;
var _47068__$1 = this;
return (new cljs.core.async.t_cljs$core$async47066(self__.f,self__.ch,meta47067__$1));
});

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47068){
var self__ = this;
var _47068__$1 = this;
return self__.meta47067;
});

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47069 = (function (f,ch,meta47067,_,fn1,meta47070){
this.f = f;
this.ch = ch;
this.meta47067 = meta47067;
this._ = _;
this.fn1 = fn1;
this.meta47070 = meta47070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47071,meta47070__$1){
var self__ = this;
var _47071__$1 = this;
return (new cljs.core.async.t_cljs$core$async47069(self__.f,self__.ch,self__.meta47067,self__._,self__.fn1,meta47070__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47071){
var self__ = this;
var _47071__$1 = this;
return self__.meta47070;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47065_SHARP_){
return f1.call(null,(((p1__47065_SHARP_ == null))?null:self__.f.call(null,p1__47065_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47069.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47067","meta47067",216659158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47066","cljs.core.async/t_cljs$core$async47066",-187104634,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47070","meta47070",1091777910,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47069";

cljs.core.async.t_cljs$core$async47069.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async47069");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47069.
 */
cljs.core.async.__GT_t_cljs$core$async47069 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47069(f__$1,ch__$1,meta47067__$1,___$2,fn1__$1,meta47070){
return (new cljs.core.async.t_cljs$core$async47069(f__$1,ch__$1,meta47067__$1,___$2,fn1__$1,meta47070));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47069(self__.f,self__.ch,self__.meta47067,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47067","meta47067",216659158,null)], null);
});

cljs.core.async.t_cljs$core$async47066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47066";

cljs.core.async.t_cljs$core$async47066.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async47066");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47066.
 */
cljs.core.async.__GT_t_cljs$core$async47066 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47066(f__$1,ch__$1,meta47067){
return (new cljs.core.async.t_cljs$core$async47066(f__$1,ch__$1,meta47067));
});

}

return (new cljs.core.async.t_cljs$core$async47066(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47072 = (function (f,ch,meta47073){
this.f = f;
this.ch = ch;
this.meta47073 = meta47073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47074,meta47073__$1){
var self__ = this;
var _47074__$1 = this;
return (new cljs.core.async.t_cljs$core$async47072(self__.f,self__.ch,meta47073__$1));
});

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47074){
var self__ = this;
var _47074__$1 = this;
return self__.meta47073;
});

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47073","meta47073",-860111684,null)], null);
});

cljs.core.async.t_cljs$core$async47072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47072";

cljs.core.async.t_cljs$core$async47072.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async47072");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47072.
 */
cljs.core.async.__GT_t_cljs$core$async47072 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47072(f__$1,ch__$1,meta47073){
return (new cljs.core.async.t_cljs$core$async47072(f__$1,ch__$1,meta47073));
});

}

return (new cljs.core.async.t_cljs$core$async47072(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47075 = (function (p,ch,meta47076){
this.p = p;
this.ch = ch;
this.meta47076 = meta47076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47077,meta47076__$1){
var self__ = this;
var _47077__$1 = this;
return (new cljs.core.async.t_cljs$core$async47075(self__.p,self__.ch,meta47076__$1));
});

cljs.core.async.t_cljs$core$async47075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47077){
var self__ = this;
var _47077__$1 = this;
return self__.meta47076;
});

cljs.core.async.t_cljs$core$async47075.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47075.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47075.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47075.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47075.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47075.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47075.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47076","meta47076",1319502919,null)], null);
});

cljs.core.async.t_cljs$core$async47075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47075";

cljs.core.async.t_cljs$core$async47075.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async47075");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47075.
 */
cljs.core.async.__GT_t_cljs$core$async47075 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47075(p__$1,ch__$1,meta47076){
return (new cljs.core.async.t_cljs$core$async47075(p__$1,ch__$1,meta47076));
});

}

return (new cljs.core.async.t_cljs$core$async47075(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47079 = arguments.length;
switch (G__47079) {
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
var c__43716__auto___47119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___47119,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___47119,out){
return (function (state_47100){
var state_val_47101 = (state_47100[(1)]);
if((state_val_47101 === (7))){
var inst_47096 = (state_47100[(2)]);
var state_47100__$1 = state_47100;
var statearr_47102_47120 = state_47100__$1;
(statearr_47102_47120[(2)] = inst_47096);

(statearr_47102_47120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (1))){
var state_47100__$1 = state_47100;
var statearr_47103_47121 = state_47100__$1;
(statearr_47103_47121[(2)] = null);

(statearr_47103_47121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (4))){
var inst_47082 = (state_47100[(7)]);
var inst_47082__$1 = (state_47100[(2)]);
var inst_47083 = (inst_47082__$1 == null);
var state_47100__$1 = (function (){var statearr_47104 = state_47100;
(statearr_47104[(7)] = inst_47082__$1);

return statearr_47104;
})();
if(cljs.core.truth_(inst_47083)){
var statearr_47105_47122 = state_47100__$1;
(statearr_47105_47122[(1)] = (5));

} else {
var statearr_47106_47123 = state_47100__$1;
(statearr_47106_47123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (6))){
var inst_47082 = (state_47100[(7)]);
var inst_47087 = p.call(null,inst_47082);
var state_47100__$1 = state_47100;
if(cljs.core.truth_(inst_47087)){
var statearr_47107_47124 = state_47100__$1;
(statearr_47107_47124[(1)] = (8));

} else {
var statearr_47108_47125 = state_47100__$1;
(statearr_47108_47125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (3))){
var inst_47098 = (state_47100[(2)]);
var state_47100__$1 = state_47100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47100__$1,inst_47098);
} else {
if((state_val_47101 === (2))){
var state_47100__$1 = state_47100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47100__$1,(4),ch);
} else {
if((state_val_47101 === (11))){
var inst_47090 = (state_47100[(2)]);
var state_47100__$1 = state_47100;
var statearr_47109_47126 = state_47100__$1;
(statearr_47109_47126[(2)] = inst_47090);

(statearr_47109_47126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (9))){
var state_47100__$1 = state_47100;
var statearr_47110_47127 = state_47100__$1;
(statearr_47110_47127[(2)] = null);

(statearr_47110_47127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (5))){
var inst_47085 = cljs.core.async.close_BANG_.call(null,out);
var state_47100__$1 = state_47100;
var statearr_47111_47128 = state_47100__$1;
(statearr_47111_47128[(2)] = inst_47085);

(statearr_47111_47128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (10))){
var inst_47093 = (state_47100[(2)]);
var state_47100__$1 = (function (){var statearr_47112 = state_47100;
(statearr_47112[(8)] = inst_47093);

return statearr_47112;
})();
var statearr_47113_47129 = state_47100__$1;
(statearr_47113_47129[(2)] = null);

(statearr_47113_47129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (8))){
var inst_47082 = (state_47100[(7)]);
var state_47100__$1 = state_47100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47100__$1,(11),out,inst_47082);
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
});})(c__43716__auto___47119,out))
;
return ((function (switch__43559__auto__,c__43716__auto___47119,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_47114 = [null,null,null,null,null,null,null,null,null];
(statearr_47114[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_47114[(1)] = (1));

return statearr_47114;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_47100){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_47100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e47115){if((e47115 instanceof Object)){
var ex__43563__auto__ = e47115;
var statearr_47116_47130 = state_47100;
(statearr_47116_47130[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47131 = state_47100;
state_47100 = G__47131;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_47100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_47100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___47119,out))
})();
var state__43718__auto__ = (function (){var statearr_47117 = f__43717__auto__.call(null);
(statearr_47117[(6)] = c__43716__auto___47119);

return statearr_47117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___47119,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47133 = arguments.length;
switch (G__47133) {
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
return (function (state_47196){
var state_val_47197 = (state_47196[(1)]);
if((state_val_47197 === (7))){
var inst_47192 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47198_47236 = state_47196__$1;
(statearr_47198_47236[(2)] = inst_47192);

(statearr_47198_47236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (20))){
var inst_47162 = (state_47196[(7)]);
var inst_47173 = (state_47196[(2)]);
var inst_47174 = cljs.core.next.call(null,inst_47162);
var inst_47148 = inst_47174;
var inst_47149 = null;
var inst_47150 = (0);
var inst_47151 = (0);
var state_47196__$1 = (function (){var statearr_47199 = state_47196;
(statearr_47199[(8)] = inst_47149);

(statearr_47199[(9)] = inst_47150);

(statearr_47199[(10)] = inst_47173);

(statearr_47199[(11)] = inst_47151);

(statearr_47199[(12)] = inst_47148);

return statearr_47199;
})();
var statearr_47200_47237 = state_47196__$1;
(statearr_47200_47237[(2)] = null);

(statearr_47200_47237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (1))){
var state_47196__$1 = state_47196;
var statearr_47201_47238 = state_47196__$1;
(statearr_47201_47238[(2)] = null);

(statearr_47201_47238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (4))){
var inst_47137 = (state_47196[(13)]);
var inst_47137__$1 = (state_47196[(2)]);
var inst_47138 = (inst_47137__$1 == null);
var state_47196__$1 = (function (){var statearr_47202 = state_47196;
(statearr_47202[(13)] = inst_47137__$1);

return statearr_47202;
})();
if(cljs.core.truth_(inst_47138)){
var statearr_47203_47239 = state_47196__$1;
(statearr_47203_47239[(1)] = (5));

} else {
var statearr_47204_47240 = state_47196__$1;
(statearr_47204_47240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (15))){
var state_47196__$1 = state_47196;
var statearr_47208_47241 = state_47196__$1;
(statearr_47208_47241[(2)] = null);

(statearr_47208_47241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (21))){
var state_47196__$1 = state_47196;
var statearr_47209_47242 = state_47196__$1;
(statearr_47209_47242[(2)] = null);

(statearr_47209_47242[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (13))){
var inst_47149 = (state_47196[(8)]);
var inst_47150 = (state_47196[(9)]);
var inst_47151 = (state_47196[(11)]);
var inst_47148 = (state_47196[(12)]);
var inst_47158 = (state_47196[(2)]);
var inst_47159 = (inst_47151 + (1));
var tmp47205 = inst_47149;
var tmp47206 = inst_47150;
var tmp47207 = inst_47148;
var inst_47148__$1 = tmp47207;
var inst_47149__$1 = tmp47205;
var inst_47150__$1 = tmp47206;
var inst_47151__$1 = inst_47159;
var state_47196__$1 = (function (){var statearr_47210 = state_47196;
(statearr_47210[(8)] = inst_47149__$1);

(statearr_47210[(14)] = inst_47158);

(statearr_47210[(9)] = inst_47150__$1);

(statearr_47210[(11)] = inst_47151__$1);

(statearr_47210[(12)] = inst_47148__$1);

return statearr_47210;
})();
var statearr_47211_47243 = state_47196__$1;
(statearr_47211_47243[(2)] = null);

(statearr_47211_47243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (22))){
var state_47196__$1 = state_47196;
var statearr_47212_47244 = state_47196__$1;
(statearr_47212_47244[(2)] = null);

(statearr_47212_47244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (6))){
var inst_47137 = (state_47196[(13)]);
var inst_47146 = f.call(null,inst_47137);
var inst_47147 = cljs.core.seq.call(null,inst_47146);
var inst_47148 = inst_47147;
var inst_47149 = null;
var inst_47150 = (0);
var inst_47151 = (0);
var state_47196__$1 = (function (){var statearr_47213 = state_47196;
(statearr_47213[(8)] = inst_47149);

(statearr_47213[(9)] = inst_47150);

(statearr_47213[(11)] = inst_47151);

(statearr_47213[(12)] = inst_47148);

return statearr_47213;
})();
var statearr_47214_47245 = state_47196__$1;
(statearr_47214_47245[(2)] = null);

(statearr_47214_47245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (17))){
var inst_47162 = (state_47196[(7)]);
var inst_47166 = cljs.core.chunk_first.call(null,inst_47162);
var inst_47167 = cljs.core.chunk_rest.call(null,inst_47162);
var inst_47168 = cljs.core.count.call(null,inst_47166);
var inst_47148 = inst_47167;
var inst_47149 = inst_47166;
var inst_47150 = inst_47168;
var inst_47151 = (0);
var state_47196__$1 = (function (){var statearr_47215 = state_47196;
(statearr_47215[(8)] = inst_47149);

(statearr_47215[(9)] = inst_47150);

(statearr_47215[(11)] = inst_47151);

(statearr_47215[(12)] = inst_47148);

return statearr_47215;
})();
var statearr_47216_47246 = state_47196__$1;
(statearr_47216_47246[(2)] = null);

(statearr_47216_47246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (3))){
var inst_47194 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47196__$1,inst_47194);
} else {
if((state_val_47197 === (12))){
var inst_47182 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47217_47247 = state_47196__$1;
(statearr_47217_47247[(2)] = inst_47182);

(statearr_47217_47247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (2))){
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47196__$1,(4),in$);
} else {
if((state_val_47197 === (23))){
var inst_47190 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47218_47248 = state_47196__$1;
(statearr_47218_47248[(2)] = inst_47190);

(statearr_47218_47248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (19))){
var inst_47177 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47219_47249 = state_47196__$1;
(statearr_47219_47249[(2)] = inst_47177);

(statearr_47219_47249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (11))){
var inst_47162 = (state_47196[(7)]);
var inst_47148 = (state_47196[(12)]);
var inst_47162__$1 = cljs.core.seq.call(null,inst_47148);
var state_47196__$1 = (function (){var statearr_47220 = state_47196;
(statearr_47220[(7)] = inst_47162__$1);

return statearr_47220;
})();
if(inst_47162__$1){
var statearr_47221_47250 = state_47196__$1;
(statearr_47221_47250[(1)] = (14));

} else {
var statearr_47222_47251 = state_47196__$1;
(statearr_47222_47251[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (9))){
var inst_47184 = (state_47196[(2)]);
var inst_47185 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47196__$1 = (function (){var statearr_47223 = state_47196;
(statearr_47223[(15)] = inst_47184);

return statearr_47223;
})();
if(cljs.core.truth_(inst_47185)){
var statearr_47224_47252 = state_47196__$1;
(statearr_47224_47252[(1)] = (21));

} else {
var statearr_47225_47253 = state_47196__$1;
(statearr_47225_47253[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (5))){
var inst_47140 = cljs.core.async.close_BANG_.call(null,out);
var state_47196__$1 = state_47196;
var statearr_47226_47254 = state_47196__$1;
(statearr_47226_47254[(2)] = inst_47140);

(statearr_47226_47254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (14))){
var inst_47162 = (state_47196[(7)]);
var inst_47164 = cljs.core.chunked_seq_QMARK_.call(null,inst_47162);
var state_47196__$1 = state_47196;
if(inst_47164){
var statearr_47227_47255 = state_47196__$1;
(statearr_47227_47255[(1)] = (17));

} else {
var statearr_47228_47256 = state_47196__$1;
(statearr_47228_47256[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (16))){
var inst_47180 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47229_47257 = state_47196__$1;
(statearr_47229_47257[(2)] = inst_47180);

(statearr_47229_47257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (10))){
var inst_47149 = (state_47196[(8)]);
var inst_47151 = (state_47196[(11)]);
var inst_47156 = cljs.core._nth.call(null,inst_47149,inst_47151);
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47196__$1,(13),out,inst_47156);
} else {
if((state_val_47197 === (18))){
var inst_47162 = (state_47196[(7)]);
var inst_47171 = cljs.core.first.call(null,inst_47162);
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47196__$1,(20),out,inst_47171);
} else {
if((state_val_47197 === (8))){
var inst_47150 = (state_47196[(9)]);
var inst_47151 = (state_47196[(11)]);
var inst_47153 = (inst_47151 < inst_47150);
var inst_47154 = inst_47153;
var state_47196__$1 = state_47196;
if(cljs.core.truth_(inst_47154)){
var statearr_47230_47258 = state_47196__$1;
(statearr_47230_47258[(1)] = (10));

} else {
var statearr_47231_47259 = state_47196__$1;
(statearr_47231_47259[(1)] = (11));

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
var statearr_47232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47232[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__);

(statearr_47232[(1)] = (1));

return statearr_47232;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____1 = (function (state_47196){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_47196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e47233){if((e47233 instanceof Object)){
var ex__43563__auto__ = e47233;
var statearr_47234_47260 = state_47196;
(statearr_47234_47260[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47261 = state_47196;
state_47196 = G__47261;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__ = function(state_47196){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____1.call(this,state_47196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43560__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_47235 = f__43717__auto__.call(null);
(statearr_47235[(6)] = c__43716__auto__);

return statearr_47235;
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
var G__47263 = arguments.length;
switch (G__47263) {
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
var G__47266 = arguments.length;
switch (G__47266) {
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
var G__47269 = arguments.length;
switch (G__47269) {
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
var c__43716__auto___47316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___47316,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___47316,out){
return (function (state_47293){
var state_val_47294 = (state_47293[(1)]);
if((state_val_47294 === (7))){
var inst_47288 = (state_47293[(2)]);
var state_47293__$1 = state_47293;
var statearr_47295_47317 = state_47293__$1;
(statearr_47295_47317[(2)] = inst_47288);

(statearr_47295_47317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (1))){
var inst_47270 = null;
var state_47293__$1 = (function (){var statearr_47296 = state_47293;
(statearr_47296[(7)] = inst_47270);

return statearr_47296;
})();
var statearr_47297_47318 = state_47293__$1;
(statearr_47297_47318[(2)] = null);

(statearr_47297_47318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (4))){
var inst_47273 = (state_47293[(8)]);
var inst_47273__$1 = (state_47293[(2)]);
var inst_47274 = (inst_47273__$1 == null);
var inst_47275 = cljs.core.not.call(null,inst_47274);
var state_47293__$1 = (function (){var statearr_47298 = state_47293;
(statearr_47298[(8)] = inst_47273__$1);

return statearr_47298;
})();
if(inst_47275){
var statearr_47299_47319 = state_47293__$1;
(statearr_47299_47319[(1)] = (5));

} else {
var statearr_47300_47320 = state_47293__$1;
(statearr_47300_47320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (6))){
var state_47293__$1 = state_47293;
var statearr_47301_47321 = state_47293__$1;
(statearr_47301_47321[(2)] = null);

(statearr_47301_47321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (3))){
var inst_47290 = (state_47293[(2)]);
var inst_47291 = cljs.core.async.close_BANG_.call(null,out);
var state_47293__$1 = (function (){var statearr_47302 = state_47293;
(statearr_47302[(9)] = inst_47290);

return statearr_47302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47293__$1,inst_47291);
} else {
if((state_val_47294 === (2))){
var state_47293__$1 = state_47293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47293__$1,(4),ch);
} else {
if((state_val_47294 === (11))){
var inst_47273 = (state_47293[(8)]);
var inst_47282 = (state_47293[(2)]);
var inst_47270 = inst_47273;
var state_47293__$1 = (function (){var statearr_47303 = state_47293;
(statearr_47303[(7)] = inst_47270);

(statearr_47303[(10)] = inst_47282);

return statearr_47303;
})();
var statearr_47304_47322 = state_47293__$1;
(statearr_47304_47322[(2)] = null);

(statearr_47304_47322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (9))){
var inst_47273 = (state_47293[(8)]);
var state_47293__$1 = state_47293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47293__$1,(11),out,inst_47273);
} else {
if((state_val_47294 === (5))){
var inst_47273 = (state_47293[(8)]);
var inst_47270 = (state_47293[(7)]);
var inst_47277 = cljs.core._EQ_.call(null,inst_47273,inst_47270);
var state_47293__$1 = state_47293;
if(inst_47277){
var statearr_47306_47323 = state_47293__$1;
(statearr_47306_47323[(1)] = (8));

} else {
var statearr_47307_47324 = state_47293__$1;
(statearr_47307_47324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (10))){
var inst_47285 = (state_47293[(2)]);
var state_47293__$1 = state_47293;
var statearr_47308_47325 = state_47293__$1;
(statearr_47308_47325[(2)] = inst_47285);

(statearr_47308_47325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (8))){
var inst_47270 = (state_47293[(7)]);
var tmp47305 = inst_47270;
var inst_47270__$1 = tmp47305;
var state_47293__$1 = (function (){var statearr_47309 = state_47293;
(statearr_47309[(7)] = inst_47270__$1);

return statearr_47309;
})();
var statearr_47310_47326 = state_47293__$1;
(statearr_47310_47326[(2)] = null);

(statearr_47310_47326[(1)] = (2));


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
});})(c__43716__auto___47316,out))
;
return ((function (switch__43559__auto__,c__43716__auto___47316,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_47311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47311[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_47311[(1)] = (1));

return statearr_47311;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_47293){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_47293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e47312){if((e47312 instanceof Object)){
var ex__43563__auto__ = e47312;
var statearr_47313_47327 = state_47293;
(statearr_47313_47327[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47328 = state_47293;
state_47293 = G__47328;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_47293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_47293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___47316,out))
})();
var state__43718__auto__ = (function (){var statearr_47314 = f__43717__auto__.call(null);
(statearr_47314[(6)] = c__43716__auto___47316);

return statearr_47314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___47316,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47330 = arguments.length;
switch (G__47330) {
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
var c__43716__auto___47396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___47396,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___47396,out){
return (function (state_47368){
var state_val_47369 = (state_47368[(1)]);
if((state_val_47369 === (7))){
var inst_47364 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47370_47397 = state_47368__$1;
(statearr_47370_47397[(2)] = inst_47364);

(statearr_47370_47397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (1))){
var inst_47331 = (new Array(n));
var inst_47332 = inst_47331;
var inst_47333 = (0);
var state_47368__$1 = (function (){var statearr_47371 = state_47368;
(statearr_47371[(7)] = inst_47332);

(statearr_47371[(8)] = inst_47333);

return statearr_47371;
})();
var statearr_47372_47398 = state_47368__$1;
(statearr_47372_47398[(2)] = null);

(statearr_47372_47398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (4))){
var inst_47336 = (state_47368[(9)]);
var inst_47336__$1 = (state_47368[(2)]);
var inst_47337 = (inst_47336__$1 == null);
var inst_47338 = cljs.core.not.call(null,inst_47337);
var state_47368__$1 = (function (){var statearr_47373 = state_47368;
(statearr_47373[(9)] = inst_47336__$1);

return statearr_47373;
})();
if(inst_47338){
var statearr_47374_47399 = state_47368__$1;
(statearr_47374_47399[(1)] = (5));

} else {
var statearr_47375_47400 = state_47368__$1;
(statearr_47375_47400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (15))){
var inst_47358 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47376_47401 = state_47368__$1;
(statearr_47376_47401[(2)] = inst_47358);

(statearr_47376_47401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (13))){
var state_47368__$1 = state_47368;
var statearr_47377_47402 = state_47368__$1;
(statearr_47377_47402[(2)] = null);

(statearr_47377_47402[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (6))){
var inst_47333 = (state_47368[(8)]);
var inst_47354 = (inst_47333 > (0));
var state_47368__$1 = state_47368;
if(cljs.core.truth_(inst_47354)){
var statearr_47378_47403 = state_47368__$1;
(statearr_47378_47403[(1)] = (12));

} else {
var statearr_47379_47404 = state_47368__$1;
(statearr_47379_47404[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (3))){
var inst_47366 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47368__$1,inst_47366);
} else {
if((state_val_47369 === (12))){
var inst_47332 = (state_47368[(7)]);
var inst_47356 = cljs.core.vec.call(null,inst_47332);
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47368__$1,(15),out,inst_47356);
} else {
if((state_val_47369 === (2))){
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47368__$1,(4),ch);
} else {
if((state_val_47369 === (11))){
var inst_47348 = (state_47368[(2)]);
var inst_47349 = (new Array(n));
var inst_47332 = inst_47349;
var inst_47333 = (0);
var state_47368__$1 = (function (){var statearr_47380 = state_47368;
(statearr_47380[(7)] = inst_47332);

(statearr_47380[(8)] = inst_47333);

(statearr_47380[(10)] = inst_47348);

return statearr_47380;
})();
var statearr_47381_47405 = state_47368__$1;
(statearr_47381_47405[(2)] = null);

(statearr_47381_47405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (9))){
var inst_47332 = (state_47368[(7)]);
var inst_47346 = cljs.core.vec.call(null,inst_47332);
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47368__$1,(11),out,inst_47346);
} else {
if((state_val_47369 === (5))){
var inst_47332 = (state_47368[(7)]);
var inst_47333 = (state_47368[(8)]);
var inst_47336 = (state_47368[(9)]);
var inst_47341 = (state_47368[(11)]);
var inst_47340 = (inst_47332[inst_47333] = inst_47336);
var inst_47341__$1 = (inst_47333 + (1));
var inst_47342 = (inst_47341__$1 < n);
var state_47368__$1 = (function (){var statearr_47382 = state_47368;
(statearr_47382[(11)] = inst_47341__$1);

(statearr_47382[(12)] = inst_47340);

return statearr_47382;
})();
if(cljs.core.truth_(inst_47342)){
var statearr_47383_47406 = state_47368__$1;
(statearr_47383_47406[(1)] = (8));

} else {
var statearr_47384_47407 = state_47368__$1;
(statearr_47384_47407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (14))){
var inst_47361 = (state_47368[(2)]);
var inst_47362 = cljs.core.async.close_BANG_.call(null,out);
var state_47368__$1 = (function (){var statearr_47386 = state_47368;
(statearr_47386[(13)] = inst_47361);

return statearr_47386;
})();
var statearr_47387_47408 = state_47368__$1;
(statearr_47387_47408[(2)] = inst_47362);

(statearr_47387_47408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (10))){
var inst_47352 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47388_47409 = state_47368__$1;
(statearr_47388_47409[(2)] = inst_47352);

(statearr_47388_47409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (8))){
var inst_47332 = (state_47368[(7)]);
var inst_47341 = (state_47368[(11)]);
var tmp47385 = inst_47332;
var inst_47332__$1 = tmp47385;
var inst_47333 = inst_47341;
var state_47368__$1 = (function (){var statearr_47389 = state_47368;
(statearr_47389[(7)] = inst_47332__$1);

(statearr_47389[(8)] = inst_47333);

return statearr_47389;
})();
var statearr_47390_47410 = state_47368__$1;
(statearr_47390_47410[(2)] = null);

(statearr_47390_47410[(1)] = (2));


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
});})(c__43716__auto___47396,out))
;
return ((function (switch__43559__auto__,c__43716__auto___47396,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_47391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47391[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_47391[(1)] = (1));

return statearr_47391;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_47368){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_47368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e47392){if((e47392 instanceof Object)){
var ex__43563__auto__ = e47392;
var statearr_47393_47411 = state_47368;
(statearr_47393_47411[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47412 = state_47368;
state_47368 = G__47412;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_47368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_47368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___47396,out))
})();
var state__43718__auto__ = (function (){var statearr_47394 = f__43717__auto__.call(null);
(statearr_47394[(6)] = c__43716__auto___47396);

return statearr_47394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___47396,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47414 = arguments.length;
switch (G__47414) {
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
var c__43716__auto___47484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___47484,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___47484,out){
return (function (state_47456){
var state_val_47457 = (state_47456[(1)]);
if((state_val_47457 === (7))){
var inst_47452 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
var statearr_47458_47485 = state_47456__$1;
(statearr_47458_47485[(2)] = inst_47452);

(statearr_47458_47485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (1))){
var inst_47415 = [];
var inst_47416 = inst_47415;
var inst_47417 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47456__$1 = (function (){var statearr_47459 = state_47456;
(statearr_47459[(7)] = inst_47417);

(statearr_47459[(8)] = inst_47416);

return statearr_47459;
})();
var statearr_47460_47486 = state_47456__$1;
(statearr_47460_47486[(2)] = null);

(statearr_47460_47486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (4))){
var inst_47420 = (state_47456[(9)]);
var inst_47420__$1 = (state_47456[(2)]);
var inst_47421 = (inst_47420__$1 == null);
var inst_47422 = cljs.core.not.call(null,inst_47421);
var state_47456__$1 = (function (){var statearr_47461 = state_47456;
(statearr_47461[(9)] = inst_47420__$1);

return statearr_47461;
})();
if(inst_47422){
var statearr_47462_47487 = state_47456__$1;
(statearr_47462_47487[(1)] = (5));

} else {
var statearr_47463_47488 = state_47456__$1;
(statearr_47463_47488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (15))){
var inst_47446 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
var statearr_47464_47489 = state_47456__$1;
(statearr_47464_47489[(2)] = inst_47446);

(statearr_47464_47489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (13))){
var state_47456__$1 = state_47456;
var statearr_47465_47490 = state_47456__$1;
(statearr_47465_47490[(2)] = null);

(statearr_47465_47490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (6))){
var inst_47416 = (state_47456[(8)]);
var inst_47441 = inst_47416.length;
var inst_47442 = (inst_47441 > (0));
var state_47456__$1 = state_47456;
if(cljs.core.truth_(inst_47442)){
var statearr_47466_47491 = state_47456__$1;
(statearr_47466_47491[(1)] = (12));

} else {
var statearr_47467_47492 = state_47456__$1;
(statearr_47467_47492[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (3))){
var inst_47454 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47456__$1,inst_47454);
} else {
if((state_val_47457 === (12))){
var inst_47416 = (state_47456[(8)]);
var inst_47444 = cljs.core.vec.call(null,inst_47416);
var state_47456__$1 = state_47456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47456__$1,(15),out,inst_47444);
} else {
if((state_val_47457 === (2))){
var state_47456__$1 = state_47456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47456__$1,(4),ch);
} else {
if((state_val_47457 === (11))){
var inst_47420 = (state_47456[(9)]);
var inst_47424 = (state_47456[(10)]);
var inst_47434 = (state_47456[(2)]);
var inst_47435 = [];
var inst_47436 = inst_47435.push(inst_47420);
var inst_47416 = inst_47435;
var inst_47417 = inst_47424;
var state_47456__$1 = (function (){var statearr_47468 = state_47456;
(statearr_47468[(11)] = inst_47436);

(statearr_47468[(7)] = inst_47417);

(statearr_47468[(12)] = inst_47434);

(statearr_47468[(8)] = inst_47416);

return statearr_47468;
})();
var statearr_47469_47493 = state_47456__$1;
(statearr_47469_47493[(2)] = null);

(statearr_47469_47493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (9))){
var inst_47416 = (state_47456[(8)]);
var inst_47432 = cljs.core.vec.call(null,inst_47416);
var state_47456__$1 = state_47456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47456__$1,(11),out,inst_47432);
} else {
if((state_val_47457 === (5))){
var inst_47420 = (state_47456[(9)]);
var inst_47417 = (state_47456[(7)]);
var inst_47424 = (state_47456[(10)]);
var inst_47424__$1 = f.call(null,inst_47420);
var inst_47425 = cljs.core._EQ_.call(null,inst_47424__$1,inst_47417);
var inst_47426 = cljs.core.keyword_identical_QMARK_.call(null,inst_47417,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47427 = ((inst_47425) || (inst_47426));
var state_47456__$1 = (function (){var statearr_47470 = state_47456;
(statearr_47470[(10)] = inst_47424__$1);

return statearr_47470;
})();
if(cljs.core.truth_(inst_47427)){
var statearr_47471_47494 = state_47456__$1;
(statearr_47471_47494[(1)] = (8));

} else {
var statearr_47472_47495 = state_47456__$1;
(statearr_47472_47495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (14))){
var inst_47449 = (state_47456[(2)]);
var inst_47450 = cljs.core.async.close_BANG_.call(null,out);
var state_47456__$1 = (function (){var statearr_47474 = state_47456;
(statearr_47474[(13)] = inst_47449);

return statearr_47474;
})();
var statearr_47475_47496 = state_47456__$1;
(statearr_47475_47496[(2)] = inst_47450);

(statearr_47475_47496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (10))){
var inst_47439 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
var statearr_47476_47497 = state_47456__$1;
(statearr_47476_47497[(2)] = inst_47439);

(statearr_47476_47497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (8))){
var inst_47420 = (state_47456[(9)]);
var inst_47424 = (state_47456[(10)]);
var inst_47416 = (state_47456[(8)]);
var inst_47429 = inst_47416.push(inst_47420);
var tmp47473 = inst_47416;
var inst_47416__$1 = tmp47473;
var inst_47417 = inst_47424;
var state_47456__$1 = (function (){var statearr_47477 = state_47456;
(statearr_47477[(7)] = inst_47417);

(statearr_47477[(8)] = inst_47416__$1);

(statearr_47477[(14)] = inst_47429);

return statearr_47477;
})();
var statearr_47478_47498 = state_47456__$1;
(statearr_47478_47498[(2)] = null);

(statearr_47478_47498[(1)] = (2));


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
});})(c__43716__auto___47484,out))
;
return ((function (switch__43559__auto__,c__43716__auto___47484,out){
return (function() {
var cljs$core$async$state_machine__43560__auto__ = null;
var cljs$core$async$state_machine__43560__auto____0 = (function (){
var statearr_47479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47479[(0)] = cljs$core$async$state_machine__43560__auto__);

(statearr_47479[(1)] = (1));

return statearr_47479;
});
var cljs$core$async$state_machine__43560__auto____1 = (function (state_47456){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_47456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e47480){if((e47480 instanceof Object)){
var ex__43563__auto__ = e47480;
var statearr_47481_47499 = state_47456;
(statearr_47481_47499[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47500 = state_47456;
state_47456 = G__47500;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
cljs$core$async$state_machine__43560__auto__ = function(state_47456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43560__auto____1.call(this,state_47456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43560__auto____0;
cljs$core$async$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43560__auto____1;
return cljs$core$async$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___47484,out))
})();
var state__43718__auto__ = (function (){var statearr_47482 = f__43717__auto__.call(null);
(statearr_47482[(6)] = c__43716__auto___47484);

return statearr_47482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___47484,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525299190289

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
var G__27681 = arguments.length;
switch (G__27681) {
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
if(typeof cljs.core.async.t_cljs$core$async27682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27682 = (function (f,blockable,meta27683){
this.f = f;
this.blockable = blockable;
this.meta27683 = meta27683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27684,meta27683__$1){
var self__ = this;
var _27684__$1 = this;
return (new cljs.core.async.t_cljs$core$async27682(self__.f,self__.blockable,meta27683__$1));
});

cljs.core.async.t_cljs$core$async27682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27684){
var self__ = this;
var _27684__$1 = this;
return self__.meta27683;
});

cljs.core.async.t_cljs$core$async27682.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27683","meta27683",1357593398,null)], null);
});

cljs.core.async.t_cljs$core$async27682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27682";

cljs.core.async.t_cljs$core$async27682.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27682");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27682.
 */
cljs.core.async.__GT_t_cljs$core$async27682 = (function cljs$core$async$__GT_t_cljs$core$async27682(f__$1,blockable__$1,meta27683){
return (new cljs.core.async.t_cljs$core$async27682(f__$1,blockable__$1,meta27683));
});

}

return (new cljs.core.async.t_cljs$core$async27682(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27688 = arguments.length;
switch (G__27688) {
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
var G__27691 = arguments.length;
switch (G__27691) {
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
var G__27694 = arguments.length;
switch (G__27694) {
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
var val_27696 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27696);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27696,ret){
return (function (){
return fn1.call(null,val_27696);
});})(val_27696,ret))
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
var G__27698 = arguments.length;
switch (G__27698) {
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
var n__4376__auto___27700 = n;
var x_27701 = (0);
while(true){
if((x_27701 < n__4376__auto___27700)){
(a[x_27701] = (0));

var G__27702 = (x_27701 + (1));
x_27701 = G__27702;
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

var G__27703 = (i + (1));
i = G__27703;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27704 = (function (flag,meta27705){
this.flag = flag;
this.meta27705 = meta27705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27706,meta27705__$1){
var self__ = this;
var _27706__$1 = this;
return (new cljs.core.async.t_cljs$core$async27704(self__.flag,meta27705__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27706){
var self__ = this;
var _27706__$1 = this;
return self__.meta27705;
});})(flag))
;

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27704.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27705","meta27705",2104502253,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27704";

cljs.core.async.t_cljs$core$async27704.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27704");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27704.
 */
cljs.core.async.__GT_t_cljs$core$async27704 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27704(flag__$1,meta27705){
return (new cljs.core.async.t_cljs$core$async27704(flag__$1,meta27705));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27704(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27707 = (function (flag,cb,meta27708){
this.flag = flag;
this.cb = cb;
this.meta27708 = meta27708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27709,meta27708__$1){
var self__ = this;
var _27709__$1 = this;
return (new cljs.core.async.t_cljs$core$async27707(self__.flag,self__.cb,meta27708__$1));
});

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27709){
var self__ = this;
var _27709__$1 = this;
return self__.meta27708;
});

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27708","meta27708",1800936663,null)], null);
});

cljs.core.async.t_cljs$core$async27707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27707";

cljs.core.async.t_cljs$core$async27707.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27707");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27707.
 */
cljs.core.async.__GT_t_cljs$core$async27707 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27707(flag__$1,cb__$1,meta27708){
return (new cljs.core.async.t_cljs$core$async27707(flag__$1,cb__$1,meta27708));
});

}

return (new cljs.core.async.t_cljs$core$async27707(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27710_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27711_SHARP_,port], null));
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
var G__27712 = (i + (1));
i = G__27712;
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
var len__4499__auto___27718 = arguments.length;
var i__4500__auto___27719 = (0);
while(true){
if((i__4500__auto___27719 < len__4499__auto___27718)){
args__4502__auto__.push((arguments[i__4500__auto___27719]));

var G__27720 = (i__4500__auto___27719 + (1));
i__4500__auto___27719 = G__27720;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27715){
var map__27716 = p__27715;
var map__27716__$1 = ((((!((map__27716 == null)))?(((((map__27716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27716):map__27716);
var opts = map__27716__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27713){
var G__27714 = cljs.core.first.call(null,seq27713);
var seq27713__$1 = cljs.core.next.call(null,seq27713);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27714,seq27713__$1);
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
var G__27722 = arguments.length;
switch (G__27722) {
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
var c__27621__auto___27768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___27768){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___27768){
return (function (state_27746){
var state_val_27747 = (state_27746[(1)]);
if((state_val_27747 === (7))){
var inst_27742 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
var statearr_27748_27769 = state_27746__$1;
(statearr_27748_27769[(2)] = inst_27742);

(statearr_27748_27769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (1))){
var state_27746__$1 = state_27746;
var statearr_27749_27770 = state_27746__$1;
(statearr_27749_27770[(2)] = null);

(statearr_27749_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (4))){
var inst_27725 = (state_27746[(7)]);
var inst_27725__$1 = (state_27746[(2)]);
var inst_27726 = (inst_27725__$1 == null);
var state_27746__$1 = (function (){var statearr_27750 = state_27746;
(statearr_27750[(7)] = inst_27725__$1);

return statearr_27750;
})();
if(cljs.core.truth_(inst_27726)){
var statearr_27751_27771 = state_27746__$1;
(statearr_27751_27771[(1)] = (5));

} else {
var statearr_27752_27772 = state_27746__$1;
(statearr_27752_27772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (13))){
var state_27746__$1 = state_27746;
var statearr_27753_27773 = state_27746__$1;
(statearr_27753_27773[(2)] = null);

(statearr_27753_27773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (6))){
var inst_27725 = (state_27746[(7)]);
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27746__$1,(11),to,inst_27725);
} else {
if((state_val_27747 === (3))){
var inst_27744 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27746__$1,inst_27744);
} else {
if((state_val_27747 === (12))){
var state_27746__$1 = state_27746;
var statearr_27754_27774 = state_27746__$1;
(statearr_27754_27774[(2)] = null);

(statearr_27754_27774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (2))){
var state_27746__$1 = state_27746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27746__$1,(4),from);
} else {
if((state_val_27747 === (11))){
var inst_27735 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
if(cljs.core.truth_(inst_27735)){
var statearr_27755_27775 = state_27746__$1;
(statearr_27755_27775[(1)] = (12));

} else {
var statearr_27756_27776 = state_27746__$1;
(statearr_27756_27776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (9))){
var state_27746__$1 = state_27746;
var statearr_27757_27777 = state_27746__$1;
(statearr_27757_27777[(2)] = null);

(statearr_27757_27777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (5))){
var state_27746__$1 = state_27746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27758_27778 = state_27746__$1;
(statearr_27758_27778[(1)] = (8));

} else {
var statearr_27759_27779 = state_27746__$1;
(statearr_27759_27779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (14))){
var inst_27740 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
var statearr_27760_27780 = state_27746__$1;
(statearr_27760_27780[(2)] = inst_27740);

(statearr_27760_27780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (10))){
var inst_27732 = (state_27746[(2)]);
var state_27746__$1 = state_27746;
var statearr_27761_27781 = state_27746__$1;
(statearr_27761_27781[(2)] = inst_27732);

(statearr_27761_27781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27747 === (8))){
var inst_27729 = cljs.core.async.close_BANG_.call(null,to);
var state_27746__$1 = state_27746;
var statearr_27762_27782 = state_27746__$1;
(statearr_27762_27782[(2)] = inst_27729);

(statearr_27762_27782[(1)] = (10));


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
});})(c__27621__auto___27768))
;
return ((function (switch__27531__auto__,c__27621__auto___27768){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_27763 = [null,null,null,null,null,null,null,null];
(statearr_27763[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_27763[(1)] = (1));

return statearr_27763;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_27746){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_27746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e27764){if((e27764 instanceof Object)){
var ex__27535__auto__ = e27764;
var statearr_27765_27783 = state_27746;
(statearr_27765_27783[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27784 = state_27746;
state_27746 = G__27784;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_27746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_27746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___27768))
})();
var state__27623__auto__ = (function (){var statearr_27766 = f__27622__auto__.call(null);
(statearr_27766[(6)] = c__27621__auto___27768);

return statearr_27766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___27768))
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
return (function (p__27785){
var vec__27786 = p__27785;
var v = cljs.core.nth.call(null,vec__27786,(0),null);
var p = cljs.core.nth.call(null,vec__27786,(1),null);
var job = vec__27786;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27621__auto___27957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___27957,res,vec__27786,v,p,job,jobs,results){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___27957,res,vec__27786,v,p,job,jobs,results){
return (function (state_27793){
var state_val_27794 = (state_27793[(1)]);
if((state_val_27794 === (1))){
var state_27793__$1 = state_27793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27793__$1,(2),res,v);
} else {
if((state_val_27794 === (2))){
var inst_27790 = (state_27793[(2)]);
var inst_27791 = cljs.core.async.close_BANG_.call(null,res);
var state_27793__$1 = (function (){var statearr_27795 = state_27793;
(statearr_27795[(7)] = inst_27790);

return statearr_27795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27793__$1,inst_27791);
} else {
return null;
}
}
});})(c__27621__auto___27957,res,vec__27786,v,p,job,jobs,results))
;
return ((function (switch__27531__auto__,c__27621__auto___27957,res,vec__27786,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0 = (function (){
var statearr_27796 = [null,null,null,null,null,null,null,null];
(statearr_27796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__);

(statearr_27796[(1)] = (1));

return statearr_27796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1 = (function (state_27793){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_27793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e27797){if((e27797 instanceof Object)){
var ex__27535__auto__ = e27797;
var statearr_27798_27958 = state_27793;
(statearr_27798_27958[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27959 = state_27793;
state_27793 = G__27959;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = function(state_27793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1.call(this,state_27793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___27957,res,vec__27786,v,p,job,jobs,results))
})();
var state__27623__auto__ = (function (){var statearr_27799 = f__27622__auto__.call(null);
(statearr_27799[(6)] = c__27621__auto___27957);

return statearr_27799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___27957,res,vec__27786,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27800){
var vec__27801 = p__27800;
var v = cljs.core.nth.call(null,vec__27801,(0),null);
var p = cljs.core.nth.call(null,vec__27801,(1),null);
var job = vec__27801;
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
var n__4376__auto___27960 = n;
var __27961 = (0);
while(true){
if((__27961 < n__4376__auto___27960)){
var G__27804_27962 = type;
var G__27804_27963__$1 = (((G__27804_27962 instanceof cljs.core.Keyword))?G__27804_27962.fqn:null);
switch (G__27804_27963__$1) {
case "compute":
var c__27621__auto___27965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27961,c__27621__auto___27965,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (__27961,c__27621__auto___27965,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async){
return (function (state_27817){
var state_val_27818 = (state_27817[(1)]);
if((state_val_27818 === (1))){
var state_27817__$1 = state_27817;
var statearr_27819_27966 = state_27817__$1;
(statearr_27819_27966[(2)] = null);

(statearr_27819_27966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27818 === (2))){
var state_27817__$1 = state_27817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27817__$1,(4),jobs);
} else {
if((state_val_27818 === (3))){
var inst_27815 = (state_27817[(2)]);
var state_27817__$1 = state_27817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27817__$1,inst_27815);
} else {
if((state_val_27818 === (4))){
var inst_27807 = (state_27817[(2)]);
var inst_27808 = process.call(null,inst_27807);
var state_27817__$1 = state_27817;
if(cljs.core.truth_(inst_27808)){
var statearr_27820_27967 = state_27817__$1;
(statearr_27820_27967[(1)] = (5));

} else {
var statearr_27821_27968 = state_27817__$1;
(statearr_27821_27968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27818 === (5))){
var state_27817__$1 = state_27817;
var statearr_27822_27969 = state_27817__$1;
(statearr_27822_27969[(2)] = null);

(statearr_27822_27969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27818 === (6))){
var state_27817__$1 = state_27817;
var statearr_27823_27970 = state_27817__$1;
(statearr_27823_27970[(2)] = null);

(statearr_27823_27970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27818 === (7))){
var inst_27813 = (state_27817[(2)]);
var state_27817__$1 = state_27817;
var statearr_27824_27971 = state_27817__$1;
(statearr_27824_27971[(2)] = inst_27813);

(statearr_27824_27971[(1)] = (3));


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
});})(__27961,c__27621__auto___27965,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async))
;
return ((function (__27961,switch__27531__auto__,c__27621__auto___27965,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0 = (function (){
var statearr_27825 = [null,null,null,null,null,null,null];
(statearr_27825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__);

(statearr_27825[(1)] = (1));

return statearr_27825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1 = (function (state_27817){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_27817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e27826){if((e27826 instanceof Object)){
var ex__27535__auto__ = e27826;
var statearr_27827_27972 = state_27817;
(statearr_27827_27972[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27973 = state_27817;
state_27817 = G__27973;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = function(state_27817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1.call(this,state_27817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__;
})()
;})(__27961,switch__27531__auto__,c__27621__auto___27965,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async))
})();
var state__27623__auto__ = (function (){var statearr_27828 = f__27622__auto__.call(null);
(statearr_27828[(6)] = c__27621__auto___27965);

return statearr_27828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(__27961,c__27621__auto___27965,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async))
);


break;
case "async":
var c__27621__auto___27974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27961,c__27621__auto___27974,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (__27961,c__27621__auto___27974,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async){
return (function (state_27841){
var state_val_27842 = (state_27841[(1)]);
if((state_val_27842 === (1))){
var state_27841__$1 = state_27841;
var statearr_27843_27975 = state_27841__$1;
(statearr_27843_27975[(2)] = null);

(statearr_27843_27975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (2))){
var state_27841__$1 = state_27841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27841__$1,(4),jobs);
} else {
if((state_val_27842 === (3))){
var inst_27839 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27841__$1,inst_27839);
} else {
if((state_val_27842 === (4))){
var inst_27831 = (state_27841[(2)]);
var inst_27832 = async.call(null,inst_27831);
var state_27841__$1 = state_27841;
if(cljs.core.truth_(inst_27832)){
var statearr_27844_27976 = state_27841__$1;
(statearr_27844_27976[(1)] = (5));

} else {
var statearr_27845_27977 = state_27841__$1;
(statearr_27845_27977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (5))){
var state_27841__$1 = state_27841;
var statearr_27846_27978 = state_27841__$1;
(statearr_27846_27978[(2)] = null);

(statearr_27846_27978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (6))){
var state_27841__$1 = state_27841;
var statearr_27847_27979 = state_27841__$1;
(statearr_27847_27979[(2)] = null);

(statearr_27847_27979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27842 === (7))){
var inst_27837 = (state_27841[(2)]);
var state_27841__$1 = state_27841;
var statearr_27848_27980 = state_27841__$1;
(statearr_27848_27980[(2)] = inst_27837);

(statearr_27848_27980[(1)] = (3));


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
});})(__27961,c__27621__auto___27974,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async))
;
return ((function (__27961,switch__27531__auto__,c__27621__auto___27974,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0 = (function (){
var statearr_27849 = [null,null,null,null,null,null,null];
(statearr_27849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__);

(statearr_27849[(1)] = (1));

return statearr_27849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1 = (function (state_27841){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_27841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e27850){if((e27850 instanceof Object)){
var ex__27535__auto__ = e27850;
var statearr_27851_27981 = state_27841;
(statearr_27851_27981[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27982 = state_27841;
state_27841 = G__27982;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = function(state_27841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1.call(this,state_27841);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__;
})()
;})(__27961,switch__27531__auto__,c__27621__auto___27974,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async))
})();
var state__27623__auto__ = (function (){var statearr_27852 = f__27622__auto__.call(null);
(statearr_27852[(6)] = c__27621__auto___27974);

return statearr_27852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(__27961,c__27621__auto___27974,G__27804_27962,G__27804_27963__$1,n__4376__auto___27960,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27804_27963__$1)].join('')));

}

var G__27983 = (__27961 + (1));
__27961 = G__27983;
continue;
} else {
}
break;
}

var c__27621__auto___27984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___27984,jobs,results,process,async){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___27984,jobs,results,process,async){
return (function (state_27874){
var state_val_27875 = (state_27874[(1)]);
if((state_val_27875 === (1))){
var state_27874__$1 = state_27874;
var statearr_27876_27985 = state_27874__$1;
(statearr_27876_27985[(2)] = null);

(statearr_27876_27985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (2))){
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27874__$1,(4),from);
} else {
if((state_val_27875 === (3))){
var inst_27872 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27874__$1,inst_27872);
} else {
if((state_val_27875 === (4))){
var inst_27855 = (state_27874[(7)]);
var inst_27855__$1 = (state_27874[(2)]);
var inst_27856 = (inst_27855__$1 == null);
var state_27874__$1 = (function (){var statearr_27877 = state_27874;
(statearr_27877[(7)] = inst_27855__$1);

return statearr_27877;
})();
if(cljs.core.truth_(inst_27856)){
var statearr_27878_27986 = state_27874__$1;
(statearr_27878_27986[(1)] = (5));

} else {
var statearr_27879_27987 = state_27874__$1;
(statearr_27879_27987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (5))){
var inst_27858 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27874__$1 = state_27874;
var statearr_27880_27988 = state_27874__$1;
(statearr_27880_27988[(2)] = inst_27858);

(statearr_27880_27988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (6))){
var inst_27860 = (state_27874[(8)]);
var inst_27855 = (state_27874[(7)]);
var inst_27860__$1 = cljs.core.async.chan.call(null,(1));
var inst_27861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27862 = [inst_27855,inst_27860__$1];
var inst_27863 = (new cljs.core.PersistentVector(null,2,(5),inst_27861,inst_27862,null));
var state_27874__$1 = (function (){var statearr_27881 = state_27874;
(statearr_27881[(8)] = inst_27860__$1);

return statearr_27881;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27874__$1,(8),jobs,inst_27863);
} else {
if((state_val_27875 === (7))){
var inst_27870 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27882_27989 = state_27874__$1;
(statearr_27882_27989[(2)] = inst_27870);

(statearr_27882_27989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (8))){
var inst_27860 = (state_27874[(8)]);
var inst_27865 = (state_27874[(2)]);
var state_27874__$1 = (function (){var statearr_27883 = state_27874;
(statearr_27883[(9)] = inst_27865);

return statearr_27883;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27874__$1,(9),results,inst_27860);
} else {
if((state_val_27875 === (9))){
var inst_27867 = (state_27874[(2)]);
var state_27874__$1 = (function (){var statearr_27884 = state_27874;
(statearr_27884[(10)] = inst_27867);

return statearr_27884;
})();
var statearr_27885_27990 = state_27874__$1;
(statearr_27885_27990[(2)] = null);

(statearr_27885_27990[(1)] = (2));


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
});})(c__27621__auto___27984,jobs,results,process,async))
;
return ((function (switch__27531__auto__,c__27621__auto___27984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0 = (function (){
var statearr_27886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__);

(statearr_27886[(1)] = (1));

return statearr_27886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1 = (function (state_27874){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_27874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e27887){if((e27887 instanceof Object)){
var ex__27535__auto__ = e27887;
var statearr_27888_27991 = state_27874;
(statearr_27888_27991[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27992 = state_27874;
state_27874 = G__27992;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = function(state_27874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1.call(this,state_27874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___27984,jobs,results,process,async))
})();
var state__27623__auto__ = (function (){var statearr_27889 = f__27622__auto__.call(null);
(statearr_27889[(6)] = c__27621__auto___27984);

return statearr_27889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___27984,jobs,results,process,async))
);


var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__,jobs,results,process,async){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__,jobs,results,process,async){
return (function (state_27927){
var state_val_27928 = (state_27927[(1)]);
if((state_val_27928 === (7))){
var inst_27923 = (state_27927[(2)]);
var state_27927__$1 = state_27927;
var statearr_27929_27993 = state_27927__$1;
(statearr_27929_27993[(2)] = inst_27923);

(statearr_27929_27993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (20))){
var state_27927__$1 = state_27927;
var statearr_27930_27994 = state_27927__$1;
(statearr_27930_27994[(2)] = null);

(statearr_27930_27994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (1))){
var state_27927__$1 = state_27927;
var statearr_27931_27995 = state_27927__$1;
(statearr_27931_27995[(2)] = null);

(statearr_27931_27995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (4))){
var inst_27892 = (state_27927[(7)]);
var inst_27892__$1 = (state_27927[(2)]);
var inst_27893 = (inst_27892__$1 == null);
var state_27927__$1 = (function (){var statearr_27932 = state_27927;
(statearr_27932[(7)] = inst_27892__$1);

return statearr_27932;
})();
if(cljs.core.truth_(inst_27893)){
var statearr_27933_27996 = state_27927__$1;
(statearr_27933_27996[(1)] = (5));

} else {
var statearr_27934_27997 = state_27927__$1;
(statearr_27934_27997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (15))){
var inst_27905 = (state_27927[(8)]);
var state_27927__$1 = state_27927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27927__$1,(18),to,inst_27905);
} else {
if((state_val_27928 === (21))){
var inst_27918 = (state_27927[(2)]);
var state_27927__$1 = state_27927;
var statearr_27935_27998 = state_27927__$1;
(statearr_27935_27998[(2)] = inst_27918);

(statearr_27935_27998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (13))){
var inst_27920 = (state_27927[(2)]);
var state_27927__$1 = (function (){var statearr_27936 = state_27927;
(statearr_27936[(9)] = inst_27920);

return statearr_27936;
})();
var statearr_27937_27999 = state_27927__$1;
(statearr_27937_27999[(2)] = null);

(statearr_27937_27999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (6))){
var inst_27892 = (state_27927[(7)]);
var state_27927__$1 = state_27927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27927__$1,(11),inst_27892);
} else {
if((state_val_27928 === (17))){
var inst_27913 = (state_27927[(2)]);
var state_27927__$1 = state_27927;
if(cljs.core.truth_(inst_27913)){
var statearr_27938_28000 = state_27927__$1;
(statearr_27938_28000[(1)] = (19));

} else {
var statearr_27939_28001 = state_27927__$1;
(statearr_27939_28001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (3))){
var inst_27925 = (state_27927[(2)]);
var state_27927__$1 = state_27927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27927__$1,inst_27925);
} else {
if((state_val_27928 === (12))){
var inst_27902 = (state_27927[(10)]);
var state_27927__$1 = state_27927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27927__$1,(14),inst_27902);
} else {
if((state_val_27928 === (2))){
var state_27927__$1 = state_27927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27927__$1,(4),results);
} else {
if((state_val_27928 === (19))){
var state_27927__$1 = state_27927;
var statearr_27940_28002 = state_27927__$1;
(statearr_27940_28002[(2)] = null);

(statearr_27940_28002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (11))){
var inst_27902 = (state_27927[(2)]);
var state_27927__$1 = (function (){var statearr_27941 = state_27927;
(statearr_27941[(10)] = inst_27902);

return statearr_27941;
})();
var statearr_27942_28003 = state_27927__$1;
(statearr_27942_28003[(2)] = null);

(statearr_27942_28003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (9))){
var state_27927__$1 = state_27927;
var statearr_27943_28004 = state_27927__$1;
(statearr_27943_28004[(2)] = null);

(statearr_27943_28004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (5))){
var state_27927__$1 = state_27927;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27944_28005 = state_27927__$1;
(statearr_27944_28005[(1)] = (8));

} else {
var statearr_27945_28006 = state_27927__$1;
(statearr_27945_28006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (14))){
var inst_27905 = (state_27927[(8)]);
var inst_27907 = (state_27927[(11)]);
var inst_27905__$1 = (state_27927[(2)]);
var inst_27906 = (inst_27905__$1 == null);
var inst_27907__$1 = cljs.core.not.call(null,inst_27906);
var state_27927__$1 = (function (){var statearr_27946 = state_27927;
(statearr_27946[(8)] = inst_27905__$1);

(statearr_27946[(11)] = inst_27907__$1);

return statearr_27946;
})();
if(inst_27907__$1){
var statearr_27947_28007 = state_27927__$1;
(statearr_27947_28007[(1)] = (15));

} else {
var statearr_27948_28008 = state_27927__$1;
(statearr_27948_28008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (16))){
var inst_27907 = (state_27927[(11)]);
var state_27927__$1 = state_27927;
var statearr_27949_28009 = state_27927__$1;
(statearr_27949_28009[(2)] = inst_27907);

(statearr_27949_28009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (10))){
var inst_27899 = (state_27927[(2)]);
var state_27927__$1 = state_27927;
var statearr_27950_28010 = state_27927__$1;
(statearr_27950_28010[(2)] = inst_27899);

(statearr_27950_28010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (18))){
var inst_27910 = (state_27927[(2)]);
var state_27927__$1 = state_27927;
var statearr_27951_28011 = state_27927__$1;
(statearr_27951_28011[(2)] = inst_27910);

(statearr_27951_28011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27928 === (8))){
var inst_27896 = cljs.core.async.close_BANG_.call(null,to);
var state_27927__$1 = state_27927;
var statearr_27952_28012 = state_27927__$1;
(statearr_27952_28012[(2)] = inst_27896);

(statearr_27952_28012[(1)] = (10));


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
});})(c__27621__auto__,jobs,results,process,async))
;
return ((function (switch__27531__auto__,c__27621__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0 = (function (){
var statearr_27953 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__);

(statearr_27953[(1)] = (1));

return statearr_27953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1 = (function (state_27927){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_27927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e27954){if((e27954 instanceof Object)){
var ex__27535__auto__ = e27954;
var statearr_27955_28013 = state_27927;
(statearr_27955_28013[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28014 = state_27927;
state_27927 = G__28014;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__ = function(state_27927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1.call(this,state_27927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__,jobs,results,process,async))
})();
var state__27623__auto__ = (function (){var statearr_27956 = f__27622__auto__.call(null);
(statearr_27956[(6)] = c__27621__auto__);

return statearr_27956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__,jobs,results,process,async))
);

return c__27621__auto__;
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
var G__28016 = arguments.length;
switch (G__28016) {
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
var G__28019 = arguments.length;
switch (G__28019) {
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
var G__28022 = arguments.length;
switch (G__28022) {
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
var c__27621__auto___28071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___28071,tc,fc){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___28071,tc,fc){
return (function (state_28048){
var state_val_28049 = (state_28048[(1)]);
if((state_val_28049 === (7))){
var inst_28044 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28050_28072 = state_28048__$1;
(statearr_28050_28072[(2)] = inst_28044);

(statearr_28050_28072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (1))){
var state_28048__$1 = state_28048;
var statearr_28051_28073 = state_28048__$1;
(statearr_28051_28073[(2)] = null);

(statearr_28051_28073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (4))){
var inst_28025 = (state_28048[(7)]);
var inst_28025__$1 = (state_28048[(2)]);
var inst_28026 = (inst_28025__$1 == null);
var state_28048__$1 = (function (){var statearr_28052 = state_28048;
(statearr_28052[(7)] = inst_28025__$1);

return statearr_28052;
})();
if(cljs.core.truth_(inst_28026)){
var statearr_28053_28074 = state_28048__$1;
(statearr_28053_28074[(1)] = (5));

} else {
var statearr_28054_28075 = state_28048__$1;
(statearr_28054_28075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (13))){
var state_28048__$1 = state_28048;
var statearr_28055_28076 = state_28048__$1;
(statearr_28055_28076[(2)] = null);

(statearr_28055_28076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (6))){
var inst_28025 = (state_28048[(7)]);
var inst_28031 = p.call(null,inst_28025);
var state_28048__$1 = state_28048;
if(cljs.core.truth_(inst_28031)){
var statearr_28056_28077 = state_28048__$1;
(statearr_28056_28077[(1)] = (9));

} else {
var statearr_28057_28078 = state_28048__$1;
(statearr_28057_28078[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (3))){
var inst_28046 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28048__$1,inst_28046);
} else {
if((state_val_28049 === (12))){
var state_28048__$1 = state_28048;
var statearr_28058_28079 = state_28048__$1;
(statearr_28058_28079[(2)] = null);

(statearr_28058_28079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (2))){
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28048__$1,(4),ch);
} else {
if((state_val_28049 === (11))){
var inst_28025 = (state_28048[(7)]);
var inst_28035 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28048__$1,(8),inst_28035,inst_28025);
} else {
if((state_val_28049 === (9))){
var state_28048__$1 = state_28048;
var statearr_28059_28080 = state_28048__$1;
(statearr_28059_28080[(2)] = tc);

(statearr_28059_28080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (5))){
var inst_28028 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28029 = cljs.core.async.close_BANG_.call(null,fc);
var state_28048__$1 = (function (){var statearr_28060 = state_28048;
(statearr_28060[(8)] = inst_28028);

return statearr_28060;
})();
var statearr_28061_28081 = state_28048__$1;
(statearr_28061_28081[(2)] = inst_28029);

(statearr_28061_28081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (14))){
var inst_28042 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
var statearr_28062_28082 = state_28048__$1;
(statearr_28062_28082[(2)] = inst_28042);

(statearr_28062_28082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (10))){
var state_28048__$1 = state_28048;
var statearr_28063_28083 = state_28048__$1;
(statearr_28063_28083[(2)] = fc);

(statearr_28063_28083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28049 === (8))){
var inst_28037 = (state_28048[(2)]);
var state_28048__$1 = state_28048;
if(cljs.core.truth_(inst_28037)){
var statearr_28064_28084 = state_28048__$1;
(statearr_28064_28084[(1)] = (12));

} else {
var statearr_28065_28085 = state_28048__$1;
(statearr_28065_28085[(1)] = (13));

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
});})(c__27621__auto___28071,tc,fc))
;
return ((function (switch__27531__auto__,c__27621__auto___28071,tc,fc){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_28066 = [null,null,null,null,null,null,null,null,null];
(statearr_28066[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_28066[(1)] = (1));

return statearr_28066;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_28048){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_28048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e28067){if((e28067 instanceof Object)){
var ex__27535__auto__ = e28067;
var statearr_28068_28086 = state_28048;
(statearr_28068_28086[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28087 = state_28048;
state_28048 = G__28087;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_28048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_28048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___28071,tc,fc))
})();
var state__27623__auto__ = (function (){var statearr_28069 = f__27622__auto__.call(null);
(statearr_28069[(6)] = c__27621__auto___28071);

return statearr_28069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___28071,tc,fc))
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
var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__){
return (function (state_28108){
var state_val_28109 = (state_28108[(1)]);
if((state_val_28109 === (7))){
var inst_28104 = (state_28108[(2)]);
var state_28108__$1 = state_28108;
var statearr_28110_28128 = state_28108__$1;
(statearr_28110_28128[(2)] = inst_28104);

(statearr_28110_28128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (1))){
var inst_28088 = init;
var state_28108__$1 = (function (){var statearr_28111 = state_28108;
(statearr_28111[(7)] = inst_28088);

return statearr_28111;
})();
var statearr_28112_28129 = state_28108__$1;
(statearr_28112_28129[(2)] = null);

(statearr_28112_28129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (4))){
var inst_28091 = (state_28108[(8)]);
var inst_28091__$1 = (state_28108[(2)]);
var inst_28092 = (inst_28091__$1 == null);
var state_28108__$1 = (function (){var statearr_28113 = state_28108;
(statearr_28113[(8)] = inst_28091__$1);

return statearr_28113;
})();
if(cljs.core.truth_(inst_28092)){
var statearr_28114_28130 = state_28108__$1;
(statearr_28114_28130[(1)] = (5));

} else {
var statearr_28115_28131 = state_28108__$1;
(statearr_28115_28131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (6))){
var inst_28088 = (state_28108[(7)]);
var inst_28095 = (state_28108[(9)]);
var inst_28091 = (state_28108[(8)]);
var inst_28095__$1 = f.call(null,inst_28088,inst_28091);
var inst_28096 = cljs.core.reduced_QMARK_.call(null,inst_28095__$1);
var state_28108__$1 = (function (){var statearr_28116 = state_28108;
(statearr_28116[(9)] = inst_28095__$1);

return statearr_28116;
})();
if(inst_28096){
var statearr_28117_28132 = state_28108__$1;
(statearr_28117_28132[(1)] = (8));

} else {
var statearr_28118_28133 = state_28108__$1;
(statearr_28118_28133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (3))){
var inst_28106 = (state_28108[(2)]);
var state_28108__$1 = state_28108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28108__$1,inst_28106);
} else {
if((state_val_28109 === (2))){
var state_28108__$1 = state_28108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28108__$1,(4),ch);
} else {
if((state_val_28109 === (9))){
var inst_28095 = (state_28108[(9)]);
var inst_28088 = inst_28095;
var state_28108__$1 = (function (){var statearr_28119 = state_28108;
(statearr_28119[(7)] = inst_28088);

return statearr_28119;
})();
var statearr_28120_28134 = state_28108__$1;
(statearr_28120_28134[(2)] = null);

(statearr_28120_28134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (5))){
var inst_28088 = (state_28108[(7)]);
var state_28108__$1 = state_28108;
var statearr_28121_28135 = state_28108__$1;
(statearr_28121_28135[(2)] = inst_28088);

(statearr_28121_28135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (10))){
var inst_28102 = (state_28108[(2)]);
var state_28108__$1 = state_28108;
var statearr_28122_28136 = state_28108__$1;
(statearr_28122_28136[(2)] = inst_28102);

(statearr_28122_28136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (8))){
var inst_28095 = (state_28108[(9)]);
var inst_28098 = cljs.core.deref.call(null,inst_28095);
var state_28108__$1 = state_28108;
var statearr_28123_28137 = state_28108__$1;
(statearr_28123_28137[(2)] = inst_28098);

(statearr_28123_28137[(1)] = (10));


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
});})(c__27621__auto__))
;
return ((function (switch__27531__auto__,c__27621__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27532__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27532__auto____0 = (function (){
var statearr_28124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28124[(0)] = cljs$core$async$reduce_$_state_machine__27532__auto__);

(statearr_28124[(1)] = (1));

return statearr_28124;
});
var cljs$core$async$reduce_$_state_machine__27532__auto____1 = (function (state_28108){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_28108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e28125){if((e28125 instanceof Object)){
var ex__27535__auto__ = e28125;
var statearr_28126_28138 = state_28108;
(statearr_28126_28138[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28139 = state_28108;
state_28108 = G__28139;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27532__auto__ = function(state_28108){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27532__auto____1.call(this,state_28108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27532__auto____0;
cljs$core$async$reduce_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27532__auto____1;
return cljs$core$async$reduce_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__))
})();
var state__27623__auto__ = (function (){var statearr_28127 = f__27622__auto__.call(null);
(statearr_28127[(6)] = c__27621__auto__);

return statearr_28127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__))
);

return c__27621__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__,f__$1){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__,f__$1){
return (function (state_28145){
var state_val_28146 = (state_28145[(1)]);
if((state_val_28146 === (1))){
var inst_28140 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(2),inst_28140);
} else {
if((state_val_28146 === (2))){
var inst_28142 = (state_28145[(2)]);
var inst_28143 = f__$1.call(null,inst_28142);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28145__$1,inst_28143);
} else {
return null;
}
}
});})(c__27621__auto__,f__$1))
;
return ((function (switch__27531__auto__,c__27621__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27532__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27532__auto____0 = (function (){
var statearr_28147 = [null,null,null,null,null,null,null];
(statearr_28147[(0)] = cljs$core$async$transduce_$_state_machine__27532__auto__);

(statearr_28147[(1)] = (1));

return statearr_28147;
});
var cljs$core$async$transduce_$_state_machine__27532__auto____1 = (function (state_28145){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_28145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e28148){if((e28148 instanceof Object)){
var ex__27535__auto__ = e28148;
var statearr_28149_28151 = state_28145;
(statearr_28149_28151[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28152 = state_28145;
state_28145 = G__28152;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27532__auto__ = function(state_28145){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27532__auto____1.call(this,state_28145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27532__auto____0;
cljs$core$async$transduce_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27532__auto____1;
return cljs$core$async$transduce_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__,f__$1))
})();
var state__27623__auto__ = (function (){var statearr_28150 = f__27622__auto__.call(null);
(statearr_28150[(6)] = c__27621__auto__);

return statearr_28150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__,f__$1))
);

return c__27621__auto__;
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
var G__28154 = arguments.length;
switch (G__28154) {
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
var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__){
return (function (state_28179){
var state_val_28180 = (state_28179[(1)]);
if((state_val_28180 === (7))){
var inst_28161 = (state_28179[(2)]);
var state_28179__$1 = state_28179;
var statearr_28181_28202 = state_28179__$1;
(statearr_28181_28202[(2)] = inst_28161);

(statearr_28181_28202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (1))){
var inst_28155 = cljs.core.seq.call(null,coll);
var inst_28156 = inst_28155;
var state_28179__$1 = (function (){var statearr_28182 = state_28179;
(statearr_28182[(7)] = inst_28156);

return statearr_28182;
})();
var statearr_28183_28203 = state_28179__$1;
(statearr_28183_28203[(2)] = null);

(statearr_28183_28203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (4))){
var inst_28156 = (state_28179[(7)]);
var inst_28159 = cljs.core.first.call(null,inst_28156);
var state_28179__$1 = state_28179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28179__$1,(7),ch,inst_28159);
} else {
if((state_val_28180 === (13))){
var inst_28173 = (state_28179[(2)]);
var state_28179__$1 = state_28179;
var statearr_28184_28204 = state_28179__$1;
(statearr_28184_28204[(2)] = inst_28173);

(statearr_28184_28204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (6))){
var inst_28164 = (state_28179[(2)]);
var state_28179__$1 = state_28179;
if(cljs.core.truth_(inst_28164)){
var statearr_28185_28205 = state_28179__$1;
(statearr_28185_28205[(1)] = (8));

} else {
var statearr_28186_28206 = state_28179__$1;
(statearr_28186_28206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (3))){
var inst_28177 = (state_28179[(2)]);
var state_28179__$1 = state_28179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28179__$1,inst_28177);
} else {
if((state_val_28180 === (12))){
var state_28179__$1 = state_28179;
var statearr_28187_28207 = state_28179__$1;
(statearr_28187_28207[(2)] = null);

(statearr_28187_28207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (2))){
var inst_28156 = (state_28179[(7)]);
var state_28179__$1 = state_28179;
if(cljs.core.truth_(inst_28156)){
var statearr_28188_28208 = state_28179__$1;
(statearr_28188_28208[(1)] = (4));

} else {
var statearr_28189_28209 = state_28179__$1;
(statearr_28189_28209[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (11))){
var inst_28170 = cljs.core.async.close_BANG_.call(null,ch);
var state_28179__$1 = state_28179;
var statearr_28190_28210 = state_28179__$1;
(statearr_28190_28210[(2)] = inst_28170);

(statearr_28190_28210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (9))){
var state_28179__$1 = state_28179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28191_28211 = state_28179__$1;
(statearr_28191_28211[(1)] = (11));

} else {
var statearr_28192_28212 = state_28179__$1;
(statearr_28192_28212[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (5))){
var inst_28156 = (state_28179[(7)]);
var state_28179__$1 = state_28179;
var statearr_28193_28213 = state_28179__$1;
(statearr_28193_28213[(2)] = inst_28156);

(statearr_28193_28213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (10))){
var inst_28175 = (state_28179[(2)]);
var state_28179__$1 = state_28179;
var statearr_28194_28214 = state_28179__$1;
(statearr_28194_28214[(2)] = inst_28175);

(statearr_28194_28214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (8))){
var inst_28156 = (state_28179[(7)]);
var inst_28166 = cljs.core.next.call(null,inst_28156);
var inst_28156__$1 = inst_28166;
var state_28179__$1 = (function (){var statearr_28195 = state_28179;
(statearr_28195[(7)] = inst_28156__$1);

return statearr_28195;
})();
var statearr_28196_28215 = state_28179__$1;
(statearr_28196_28215[(2)] = null);

(statearr_28196_28215[(1)] = (2));


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
});})(c__27621__auto__))
;
return ((function (switch__27531__auto__,c__27621__auto__){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_28197 = [null,null,null,null,null,null,null,null];
(statearr_28197[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_28197[(1)] = (1));

return statearr_28197;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_28179){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_28179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e28198){if((e28198 instanceof Object)){
var ex__27535__auto__ = e28198;
var statearr_28199_28216 = state_28179;
(statearr_28199_28216[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28217 = state_28179;
state_28179 = G__28217;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_28179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_28179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__))
})();
var state__27623__auto__ = (function (){var statearr_28200 = f__27622__auto__.call(null);
(statearr_28200[(6)] = c__27621__auto__);

return statearr_28200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__))
);

return c__27621__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28218 = (function (ch,cs,meta28219){
this.ch = ch;
this.cs = cs;
this.meta28219 = meta28219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28220,meta28219__$1){
var self__ = this;
var _28220__$1 = this;
return (new cljs.core.async.t_cljs$core$async28218(self__.ch,self__.cs,meta28219__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28220){
var self__ = this;
var _28220__$1 = this;
return self__.meta28219;
});})(cs))
;

cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28218.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28219","meta28219",-1303350649,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28218";

cljs.core.async.t_cljs$core$async28218.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28218");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28218.
 */
cljs.core.async.__GT_t_cljs$core$async28218 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28218(ch__$1,cs__$1,meta28219){
return (new cljs.core.async.t_cljs$core$async28218(ch__$1,cs__$1,meta28219));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28218(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27621__auto___28440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___28440,cs,m,dchan,dctr,done){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___28440,cs,m,dchan,dctr,done){
return (function (state_28355){
var state_val_28356 = (state_28355[(1)]);
if((state_val_28356 === (7))){
var inst_28351 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28357_28441 = state_28355__$1;
(statearr_28357_28441[(2)] = inst_28351);

(statearr_28357_28441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (20))){
var inst_28254 = (state_28355[(7)]);
var inst_28266 = cljs.core.first.call(null,inst_28254);
var inst_28267 = cljs.core.nth.call(null,inst_28266,(0),null);
var inst_28268 = cljs.core.nth.call(null,inst_28266,(1),null);
var state_28355__$1 = (function (){var statearr_28358 = state_28355;
(statearr_28358[(8)] = inst_28267);

return statearr_28358;
})();
if(cljs.core.truth_(inst_28268)){
var statearr_28359_28442 = state_28355__$1;
(statearr_28359_28442[(1)] = (22));

} else {
var statearr_28360_28443 = state_28355__$1;
(statearr_28360_28443[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (27))){
var inst_28296 = (state_28355[(9)]);
var inst_28303 = (state_28355[(10)]);
var inst_28223 = (state_28355[(11)]);
var inst_28298 = (state_28355[(12)]);
var inst_28303__$1 = cljs.core._nth.call(null,inst_28296,inst_28298);
var inst_28304 = cljs.core.async.put_BANG_.call(null,inst_28303__$1,inst_28223,done);
var state_28355__$1 = (function (){var statearr_28361 = state_28355;
(statearr_28361[(10)] = inst_28303__$1);

return statearr_28361;
})();
if(cljs.core.truth_(inst_28304)){
var statearr_28362_28444 = state_28355__$1;
(statearr_28362_28444[(1)] = (30));

} else {
var statearr_28363_28445 = state_28355__$1;
(statearr_28363_28445[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (1))){
var state_28355__$1 = state_28355;
var statearr_28364_28446 = state_28355__$1;
(statearr_28364_28446[(2)] = null);

(statearr_28364_28446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (24))){
var inst_28254 = (state_28355[(7)]);
var inst_28273 = (state_28355[(2)]);
var inst_28274 = cljs.core.next.call(null,inst_28254);
var inst_28232 = inst_28274;
var inst_28233 = null;
var inst_28234 = (0);
var inst_28235 = (0);
var state_28355__$1 = (function (){var statearr_28365 = state_28355;
(statearr_28365[(13)] = inst_28234);

(statearr_28365[(14)] = inst_28273);

(statearr_28365[(15)] = inst_28235);

(statearr_28365[(16)] = inst_28232);

(statearr_28365[(17)] = inst_28233);

return statearr_28365;
})();
var statearr_28366_28447 = state_28355__$1;
(statearr_28366_28447[(2)] = null);

(statearr_28366_28447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (39))){
var state_28355__$1 = state_28355;
var statearr_28370_28448 = state_28355__$1;
(statearr_28370_28448[(2)] = null);

(statearr_28370_28448[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (4))){
var inst_28223 = (state_28355[(11)]);
var inst_28223__$1 = (state_28355[(2)]);
var inst_28224 = (inst_28223__$1 == null);
var state_28355__$1 = (function (){var statearr_28371 = state_28355;
(statearr_28371[(11)] = inst_28223__$1);

return statearr_28371;
})();
if(cljs.core.truth_(inst_28224)){
var statearr_28372_28449 = state_28355__$1;
(statearr_28372_28449[(1)] = (5));

} else {
var statearr_28373_28450 = state_28355__$1;
(statearr_28373_28450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (15))){
var inst_28234 = (state_28355[(13)]);
var inst_28235 = (state_28355[(15)]);
var inst_28232 = (state_28355[(16)]);
var inst_28233 = (state_28355[(17)]);
var inst_28250 = (state_28355[(2)]);
var inst_28251 = (inst_28235 + (1));
var tmp28367 = inst_28234;
var tmp28368 = inst_28232;
var tmp28369 = inst_28233;
var inst_28232__$1 = tmp28368;
var inst_28233__$1 = tmp28369;
var inst_28234__$1 = tmp28367;
var inst_28235__$1 = inst_28251;
var state_28355__$1 = (function (){var statearr_28374 = state_28355;
(statearr_28374[(13)] = inst_28234__$1);

(statearr_28374[(18)] = inst_28250);

(statearr_28374[(15)] = inst_28235__$1);

(statearr_28374[(16)] = inst_28232__$1);

(statearr_28374[(17)] = inst_28233__$1);

return statearr_28374;
})();
var statearr_28375_28451 = state_28355__$1;
(statearr_28375_28451[(2)] = null);

(statearr_28375_28451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (21))){
var inst_28277 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28379_28452 = state_28355__$1;
(statearr_28379_28452[(2)] = inst_28277);

(statearr_28379_28452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (31))){
var inst_28303 = (state_28355[(10)]);
var inst_28307 = done.call(null,null);
var inst_28308 = cljs.core.async.untap_STAR_.call(null,m,inst_28303);
var state_28355__$1 = (function (){var statearr_28380 = state_28355;
(statearr_28380[(19)] = inst_28307);

return statearr_28380;
})();
var statearr_28381_28453 = state_28355__$1;
(statearr_28381_28453[(2)] = inst_28308);

(statearr_28381_28453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (32))){
var inst_28296 = (state_28355[(9)]);
var inst_28297 = (state_28355[(20)]);
var inst_28295 = (state_28355[(21)]);
var inst_28298 = (state_28355[(12)]);
var inst_28310 = (state_28355[(2)]);
var inst_28311 = (inst_28298 + (1));
var tmp28376 = inst_28296;
var tmp28377 = inst_28297;
var tmp28378 = inst_28295;
var inst_28295__$1 = tmp28378;
var inst_28296__$1 = tmp28376;
var inst_28297__$1 = tmp28377;
var inst_28298__$1 = inst_28311;
var state_28355__$1 = (function (){var statearr_28382 = state_28355;
(statearr_28382[(9)] = inst_28296__$1);

(statearr_28382[(20)] = inst_28297__$1);

(statearr_28382[(21)] = inst_28295__$1);

(statearr_28382[(22)] = inst_28310);

(statearr_28382[(12)] = inst_28298__$1);

return statearr_28382;
})();
var statearr_28383_28454 = state_28355__$1;
(statearr_28383_28454[(2)] = null);

(statearr_28383_28454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (40))){
var inst_28323 = (state_28355[(23)]);
var inst_28327 = done.call(null,null);
var inst_28328 = cljs.core.async.untap_STAR_.call(null,m,inst_28323);
var state_28355__$1 = (function (){var statearr_28384 = state_28355;
(statearr_28384[(24)] = inst_28327);

return statearr_28384;
})();
var statearr_28385_28455 = state_28355__$1;
(statearr_28385_28455[(2)] = inst_28328);

(statearr_28385_28455[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (33))){
var inst_28314 = (state_28355[(25)]);
var inst_28316 = cljs.core.chunked_seq_QMARK_.call(null,inst_28314);
var state_28355__$1 = state_28355;
if(inst_28316){
var statearr_28386_28456 = state_28355__$1;
(statearr_28386_28456[(1)] = (36));

} else {
var statearr_28387_28457 = state_28355__$1;
(statearr_28387_28457[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (13))){
var inst_28244 = (state_28355[(26)]);
var inst_28247 = cljs.core.async.close_BANG_.call(null,inst_28244);
var state_28355__$1 = state_28355;
var statearr_28388_28458 = state_28355__$1;
(statearr_28388_28458[(2)] = inst_28247);

(statearr_28388_28458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (22))){
var inst_28267 = (state_28355[(8)]);
var inst_28270 = cljs.core.async.close_BANG_.call(null,inst_28267);
var state_28355__$1 = state_28355;
var statearr_28389_28459 = state_28355__$1;
(statearr_28389_28459[(2)] = inst_28270);

(statearr_28389_28459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (36))){
var inst_28314 = (state_28355[(25)]);
var inst_28318 = cljs.core.chunk_first.call(null,inst_28314);
var inst_28319 = cljs.core.chunk_rest.call(null,inst_28314);
var inst_28320 = cljs.core.count.call(null,inst_28318);
var inst_28295 = inst_28319;
var inst_28296 = inst_28318;
var inst_28297 = inst_28320;
var inst_28298 = (0);
var state_28355__$1 = (function (){var statearr_28390 = state_28355;
(statearr_28390[(9)] = inst_28296);

(statearr_28390[(20)] = inst_28297);

(statearr_28390[(21)] = inst_28295);

(statearr_28390[(12)] = inst_28298);

return statearr_28390;
})();
var statearr_28391_28460 = state_28355__$1;
(statearr_28391_28460[(2)] = null);

(statearr_28391_28460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (41))){
var inst_28314 = (state_28355[(25)]);
var inst_28330 = (state_28355[(2)]);
var inst_28331 = cljs.core.next.call(null,inst_28314);
var inst_28295 = inst_28331;
var inst_28296 = null;
var inst_28297 = (0);
var inst_28298 = (0);
var state_28355__$1 = (function (){var statearr_28392 = state_28355;
(statearr_28392[(9)] = inst_28296);

(statearr_28392[(20)] = inst_28297);

(statearr_28392[(27)] = inst_28330);

(statearr_28392[(21)] = inst_28295);

(statearr_28392[(12)] = inst_28298);

return statearr_28392;
})();
var statearr_28393_28461 = state_28355__$1;
(statearr_28393_28461[(2)] = null);

(statearr_28393_28461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (43))){
var state_28355__$1 = state_28355;
var statearr_28394_28462 = state_28355__$1;
(statearr_28394_28462[(2)] = null);

(statearr_28394_28462[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (29))){
var inst_28339 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28395_28463 = state_28355__$1;
(statearr_28395_28463[(2)] = inst_28339);

(statearr_28395_28463[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (44))){
var inst_28348 = (state_28355[(2)]);
var state_28355__$1 = (function (){var statearr_28396 = state_28355;
(statearr_28396[(28)] = inst_28348);

return statearr_28396;
})();
var statearr_28397_28464 = state_28355__$1;
(statearr_28397_28464[(2)] = null);

(statearr_28397_28464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (6))){
var inst_28287 = (state_28355[(29)]);
var inst_28286 = cljs.core.deref.call(null,cs);
var inst_28287__$1 = cljs.core.keys.call(null,inst_28286);
var inst_28288 = cljs.core.count.call(null,inst_28287__$1);
var inst_28289 = cljs.core.reset_BANG_.call(null,dctr,inst_28288);
var inst_28294 = cljs.core.seq.call(null,inst_28287__$1);
var inst_28295 = inst_28294;
var inst_28296 = null;
var inst_28297 = (0);
var inst_28298 = (0);
var state_28355__$1 = (function (){var statearr_28398 = state_28355;
(statearr_28398[(9)] = inst_28296);

(statearr_28398[(20)] = inst_28297);

(statearr_28398[(29)] = inst_28287__$1);

(statearr_28398[(30)] = inst_28289);

(statearr_28398[(21)] = inst_28295);

(statearr_28398[(12)] = inst_28298);

return statearr_28398;
})();
var statearr_28399_28465 = state_28355__$1;
(statearr_28399_28465[(2)] = null);

(statearr_28399_28465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (28))){
var inst_28314 = (state_28355[(25)]);
var inst_28295 = (state_28355[(21)]);
var inst_28314__$1 = cljs.core.seq.call(null,inst_28295);
var state_28355__$1 = (function (){var statearr_28400 = state_28355;
(statearr_28400[(25)] = inst_28314__$1);

return statearr_28400;
})();
if(inst_28314__$1){
var statearr_28401_28466 = state_28355__$1;
(statearr_28401_28466[(1)] = (33));

} else {
var statearr_28402_28467 = state_28355__$1;
(statearr_28402_28467[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (25))){
var inst_28297 = (state_28355[(20)]);
var inst_28298 = (state_28355[(12)]);
var inst_28300 = (inst_28298 < inst_28297);
var inst_28301 = inst_28300;
var state_28355__$1 = state_28355;
if(cljs.core.truth_(inst_28301)){
var statearr_28403_28468 = state_28355__$1;
(statearr_28403_28468[(1)] = (27));

} else {
var statearr_28404_28469 = state_28355__$1;
(statearr_28404_28469[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (34))){
var state_28355__$1 = state_28355;
var statearr_28405_28470 = state_28355__$1;
(statearr_28405_28470[(2)] = null);

(statearr_28405_28470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (17))){
var state_28355__$1 = state_28355;
var statearr_28406_28471 = state_28355__$1;
(statearr_28406_28471[(2)] = null);

(statearr_28406_28471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (3))){
var inst_28353 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28355__$1,inst_28353);
} else {
if((state_val_28356 === (12))){
var inst_28282 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28407_28472 = state_28355__$1;
(statearr_28407_28472[(2)] = inst_28282);

(statearr_28407_28472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (2))){
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28355__$1,(4),ch);
} else {
if((state_val_28356 === (23))){
var state_28355__$1 = state_28355;
var statearr_28408_28473 = state_28355__$1;
(statearr_28408_28473[(2)] = null);

(statearr_28408_28473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (35))){
var inst_28337 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28409_28474 = state_28355__$1;
(statearr_28409_28474[(2)] = inst_28337);

(statearr_28409_28474[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (19))){
var inst_28254 = (state_28355[(7)]);
var inst_28258 = cljs.core.chunk_first.call(null,inst_28254);
var inst_28259 = cljs.core.chunk_rest.call(null,inst_28254);
var inst_28260 = cljs.core.count.call(null,inst_28258);
var inst_28232 = inst_28259;
var inst_28233 = inst_28258;
var inst_28234 = inst_28260;
var inst_28235 = (0);
var state_28355__$1 = (function (){var statearr_28410 = state_28355;
(statearr_28410[(13)] = inst_28234);

(statearr_28410[(15)] = inst_28235);

(statearr_28410[(16)] = inst_28232);

(statearr_28410[(17)] = inst_28233);

return statearr_28410;
})();
var statearr_28411_28475 = state_28355__$1;
(statearr_28411_28475[(2)] = null);

(statearr_28411_28475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (11))){
var inst_28254 = (state_28355[(7)]);
var inst_28232 = (state_28355[(16)]);
var inst_28254__$1 = cljs.core.seq.call(null,inst_28232);
var state_28355__$1 = (function (){var statearr_28412 = state_28355;
(statearr_28412[(7)] = inst_28254__$1);

return statearr_28412;
})();
if(inst_28254__$1){
var statearr_28413_28476 = state_28355__$1;
(statearr_28413_28476[(1)] = (16));

} else {
var statearr_28414_28477 = state_28355__$1;
(statearr_28414_28477[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (9))){
var inst_28284 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28415_28478 = state_28355__$1;
(statearr_28415_28478[(2)] = inst_28284);

(statearr_28415_28478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (5))){
var inst_28230 = cljs.core.deref.call(null,cs);
var inst_28231 = cljs.core.seq.call(null,inst_28230);
var inst_28232 = inst_28231;
var inst_28233 = null;
var inst_28234 = (0);
var inst_28235 = (0);
var state_28355__$1 = (function (){var statearr_28416 = state_28355;
(statearr_28416[(13)] = inst_28234);

(statearr_28416[(15)] = inst_28235);

(statearr_28416[(16)] = inst_28232);

(statearr_28416[(17)] = inst_28233);

return statearr_28416;
})();
var statearr_28417_28479 = state_28355__$1;
(statearr_28417_28479[(2)] = null);

(statearr_28417_28479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (14))){
var state_28355__$1 = state_28355;
var statearr_28418_28480 = state_28355__$1;
(statearr_28418_28480[(2)] = null);

(statearr_28418_28480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (45))){
var inst_28345 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28419_28481 = state_28355__$1;
(statearr_28419_28481[(2)] = inst_28345);

(statearr_28419_28481[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (26))){
var inst_28287 = (state_28355[(29)]);
var inst_28341 = (state_28355[(2)]);
var inst_28342 = cljs.core.seq.call(null,inst_28287);
var state_28355__$1 = (function (){var statearr_28420 = state_28355;
(statearr_28420[(31)] = inst_28341);

return statearr_28420;
})();
if(inst_28342){
var statearr_28421_28482 = state_28355__$1;
(statearr_28421_28482[(1)] = (42));

} else {
var statearr_28422_28483 = state_28355__$1;
(statearr_28422_28483[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (16))){
var inst_28254 = (state_28355[(7)]);
var inst_28256 = cljs.core.chunked_seq_QMARK_.call(null,inst_28254);
var state_28355__$1 = state_28355;
if(inst_28256){
var statearr_28423_28484 = state_28355__$1;
(statearr_28423_28484[(1)] = (19));

} else {
var statearr_28424_28485 = state_28355__$1;
(statearr_28424_28485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (38))){
var inst_28334 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28425_28486 = state_28355__$1;
(statearr_28425_28486[(2)] = inst_28334);

(statearr_28425_28486[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (30))){
var state_28355__$1 = state_28355;
var statearr_28426_28487 = state_28355__$1;
(statearr_28426_28487[(2)] = null);

(statearr_28426_28487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (10))){
var inst_28235 = (state_28355[(15)]);
var inst_28233 = (state_28355[(17)]);
var inst_28243 = cljs.core._nth.call(null,inst_28233,inst_28235);
var inst_28244 = cljs.core.nth.call(null,inst_28243,(0),null);
var inst_28245 = cljs.core.nth.call(null,inst_28243,(1),null);
var state_28355__$1 = (function (){var statearr_28427 = state_28355;
(statearr_28427[(26)] = inst_28244);

return statearr_28427;
})();
if(cljs.core.truth_(inst_28245)){
var statearr_28428_28488 = state_28355__$1;
(statearr_28428_28488[(1)] = (13));

} else {
var statearr_28429_28489 = state_28355__$1;
(statearr_28429_28489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (18))){
var inst_28280 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28430_28490 = state_28355__$1;
(statearr_28430_28490[(2)] = inst_28280);

(statearr_28430_28490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (42))){
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28355__$1,(45),dchan);
} else {
if((state_val_28356 === (37))){
var inst_28323 = (state_28355[(23)]);
var inst_28314 = (state_28355[(25)]);
var inst_28223 = (state_28355[(11)]);
var inst_28323__$1 = cljs.core.first.call(null,inst_28314);
var inst_28324 = cljs.core.async.put_BANG_.call(null,inst_28323__$1,inst_28223,done);
var state_28355__$1 = (function (){var statearr_28431 = state_28355;
(statearr_28431[(23)] = inst_28323__$1);

return statearr_28431;
})();
if(cljs.core.truth_(inst_28324)){
var statearr_28432_28491 = state_28355__$1;
(statearr_28432_28491[(1)] = (39));

} else {
var statearr_28433_28492 = state_28355__$1;
(statearr_28433_28492[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (8))){
var inst_28234 = (state_28355[(13)]);
var inst_28235 = (state_28355[(15)]);
var inst_28237 = (inst_28235 < inst_28234);
var inst_28238 = inst_28237;
var state_28355__$1 = state_28355;
if(cljs.core.truth_(inst_28238)){
var statearr_28434_28493 = state_28355__$1;
(statearr_28434_28493[(1)] = (10));

} else {
var statearr_28435_28494 = state_28355__$1;
(statearr_28435_28494[(1)] = (11));

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
});})(c__27621__auto___28440,cs,m,dchan,dctr,done))
;
return ((function (switch__27531__auto__,c__27621__auto___28440,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27532__auto__ = null;
var cljs$core$async$mult_$_state_machine__27532__auto____0 = (function (){
var statearr_28436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28436[(0)] = cljs$core$async$mult_$_state_machine__27532__auto__);

(statearr_28436[(1)] = (1));

return statearr_28436;
});
var cljs$core$async$mult_$_state_machine__27532__auto____1 = (function (state_28355){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_28355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e28437){if((e28437 instanceof Object)){
var ex__27535__auto__ = e28437;
var statearr_28438_28495 = state_28355;
(statearr_28438_28495[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28496 = state_28355;
state_28355 = G__28496;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27532__auto__ = function(state_28355){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27532__auto____1.call(this,state_28355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27532__auto____0;
cljs$core$async$mult_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27532__auto____1;
return cljs$core$async$mult_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___28440,cs,m,dchan,dctr,done))
})();
var state__27623__auto__ = (function (){var statearr_28439 = f__27622__auto__.call(null);
(statearr_28439[(6)] = c__27621__auto___28440);

return statearr_28439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___28440,cs,m,dchan,dctr,done))
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
var G__28498 = arguments.length;
switch (G__28498) {
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
var len__4499__auto___28510 = arguments.length;
var i__4500__auto___28511 = (0);
while(true){
if((i__4500__auto___28511 < len__4499__auto___28510)){
args__4502__auto__.push((arguments[i__4500__auto___28511]));

var G__28512 = (i__4500__auto___28511 + (1));
i__4500__auto___28511 = G__28512;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28504){
var map__28505 = p__28504;
var map__28505__$1 = ((((!((map__28505 == null)))?(((((map__28505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28505):map__28505);
var opts = map__28505__$1;
var statearr_28507_28513 = state;
(statearr_28507_28513[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28505,map__28505__$1,opts){
return (function (val){
var statearr_28508_28514 = state;
(statearr_28508_28514[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28505,map__28505__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28509_28515 = state;
(statearr_28509_28515[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28500){
var G__28501 = cljs.core.first.call(null,seq28500);
var seq28500__$1 = cljs.core.next.call(null,seq28500);
var G__28502 = cljs.core.first.call(null,seq28500__$1);
var seq28500__$2 = cljs.core.next.call(null,seq28500__$1);
var G__28503 = cljs.core.first.call(null,seq28500__$2);
var seq28500__$3 = cljs.core.next.call(null,seq28500__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28501,G__28502,G__28503,seq28500__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28516 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28517){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28517 = meta28517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28518,meta28517__$1){
var self__ = this;
var _28518__$1 = this;
return (new cljs.core.async.t_cljs$core$async28516(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28517__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28518){
var self__ = this;
var _28518__$1 = this;
return self__.meta28517;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28516.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28517","meta28517",735581370,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28516";

cljs.core.async.t_cljs$core$async28516.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28516");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28516.
 */
cljs.core.async.__GT_t_cljs$core$async28516 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28516(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28517){
return (new cljs.core.async.t_cljs$core$async28516(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28517));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28516(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27621__auto___28680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___28680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___28680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28620){
var state_val_28621 = (state_28620[(1)]);
if((state_val_28621 === (7))){
var inst_28535 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28622_28681 = state_28620__$1;
(statearr_28622_28681[(2)] = inst_28535);

(statearr_28622_28681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (20))){
var inst_28547 = (state_28620[(7)]);
var state_28620__$1 = state_28620;
var statearr_28623_28682 = state_28620__$1;
(statearr_28623_28682[(2)] = inst_28547);

(statearr_28623_28682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (27))){
var state_28620__$1 = state_28620;
var statearr_28624_28683 = state_28620__$1;
(statearr_28624_28683[(2)] = null);

(statearr_28624_28683[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (1))){
var inst_28522 = (state_28620[(8)]);
var inst_28522__$1 = calc_state.call(null);
var inst_28524 = (inst_28522__$1 == null);
var inst_28525 = cljs.core.not.call(null,inst_28524);
var state_28620__$1 = (function (){var statearr_28625 = state_28620;
(statearr_28625[(8)] = inst_28522__$1);

return statearr_28625;
})();
if(inst_28525){
var statearr_28626_28684 = state_28620__$1;
(statearr_28626_28684[(1)] = (2));

} else {
var statearr_28627_28685 = state_28620__$1;
(statearr_28627_28685[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (24))){
var inst_28571 = (state_28620[(9)]);
var inst_28580 = (state_28620[(10)]);
var inst_28594 = (state_28620[(11)]);
var inst_28594__$1 = inst_28571.call(null,inst_28580);
var state_28620__$1 = (function (){var statearr_28628 = state_28620;
(statearr_28628[(11)] = inst_28594__$1);

return statearr_28628;
})();
if(cljs.core.truth_(inst_28594__$1)){
var statearr_28629_28686 = state_28620__$1;
(statearr_28629_28686[(1)] = (29));

} else {
var statearr_28630_28687 = state_28620__$1;
(statearr_28630_28687[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (4))){
var inst_28538 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28538)){
var statearr_28631_28688 = state_28620__$1;
(statearr_28631_28688[(1)] = (8));

} else {
var statearr_28632_28689 = state_28620__$1;
(statearr_28632_28689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (15))){
var inst_28565 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28565)){
var statearr_28633_28690 = state_28620__$1;
(statearr_28633_28690[(1)] = (19));

} else {
var statearr_28634_28691 = state_28620__$1;
(statearr_28634_28691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (21))){
var inst_28570 = (state_28620[(12)]);
var inst_28570__$1 = (state_28620[(2)]);
var inst_28571 = cljs.core.get.call(null,inst_28570__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28572 = cljs.core.get.call(null,inst_28570__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28573 = cljs.core.get.call(null,inst_28570__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28620__$1 = (function (){var statearr_28635 = state_28620;
(statearr_28635[(12)] = inst_28570__$1);

(statearr_28635[(9)] = inst_28571);

(statearr_28635[(13)] = inst_28572);

return statearr_28635;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28620__$1,(22),inst_28573);
} else {
if((state_val_28621 === (31))){
var inst_28602 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28602)){
var statearr_28636_28692 = state_28620__$1;
(statearr_28636_28692[(1)] = (32));

} else {
var statearr_28637_28693 = state_28620__$1;
(statearr_28637_28693[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (32))){
var inst_28579 = (state_28620[(14)]);
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28620__$1,(35),out,inst_28579);
} else {
if((state_val_28621 === (33))){
var inst_28570 = (state_28620[(12)]);
var inst_28547 = inst_28570;
var state_28620__$1 = (function (){var statearr_28638 = state_28620;
(statearr_28638[(7)] = inst_28547);

return statearr_28638;
})();
var statearr_28639_28694 = state_28620__$1;
(statearr_28639_28694[(2)] = null);

(statearr_28639_28694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (13))){
var inst_28547 = (state_28620[(7)]);
var inst_28554 = inst_28547.cljs$lang$protocol_mask$partition0$;
var inst_28555 = (inst_28554 & (64));
var inst_28556 = inst_28547.cljs$core$ISeq$;
var inst_28557 = (cljs.core.PROTOCOL_SENTINEL === inst_28556);
var inst_28558 = ((inst_28555) || (inst_28557));
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28558)){
var statearr_28640_28695 = state_28620__$1;
(statearr_28640_28695[(1)] = (16));

} else {
var statearr_28641_28696 = state_28620__$1;
(statearr_28641_28696[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (22))){
var inst_28579 = (state_28620[(14)]);
var inst_28580 = (state_28620[(10)]);
var inst_28578 = (state_28620[(2)]);
var inst_28579__$1 = cljs.core.nth.call(null,inst_28578,(0),null);
var inst_28580__$1 = cljs.core.nth.call(null,inst_28578,(1),null);
var inst_28581 = (inst_28579__$1 == null);
var inst_28582 = cljs.core._EQ_.call(null,inst_28580__$1,change);
var inst_28583 = ((inst_28581) || (inst_28582));
var state_28620__$1 = (function (){var statearr_28642 = state_28620;
(statearr_28642[(14)] = inst_28579__$1);

(statearr_28642[(10)] = inst_28580__$1);

return statearr_28642;
})();
if(cljs.core.truth_(inst_28583)){
var statearr_28643_28697 = state_28620__$1;
(statearr_28643_28697[(1)] = (23));

} else {
var statearr_28644_28698 = state_28620__$1;
(statearr_28644_28698[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (36))){
var inst_28570 = (state_28620[(12)]);
var inst_28547 = inst_28570;
var state_28620__$1 = (function (){var statearr_28645 = state_28620;
(statearr_28645[(7)] = inst_28547);

return statearr_28645;
})();
var statearr_28646_28699 = state_28620__$1;
(statearr_28646_28699[(2)] = null);

(statearr_28646_28699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (29))){
var inst_28594 = (state_28620[(11)]);
var state_28620__$1 = state_28620;
var statearr_28647_28700 = state_28620__$1;
(statearr_28647_28700[(2)] = inst_28594);

(statearr_28647_28700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (6))){
var state_28620__$1 = state_28620;
var statearr_28648_28701 = state_28620__$1;
(statearr_28648_28701[(2)] = false);

(statearr_28648_28701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (28))){
var inst_28590 = (state_28620[(2)]);
var inst_28591 = calc_state.call(null);
var inst_28547 = inst_28591;
var state_28620__$1 = (function (){var statearr_28649 = state_28620;
(statearr_28649[(7)] = inst_28547);

(statearr_28649[(15)] = inst_28590);

return statearr_28649;
})();
var statearr_28650_28702 = state_28620__$1;
(statearr_28650_28702[(2)] = null);

(statearr_28650_28702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (25))){
var inst_28616 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28651_28703 = state_28620__$1;
(statearr_28651_28703[(2)] = inst_28616);

(statearr_28651_28703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (34))){
var inst_28614 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28652_28704 = state_28620__$1;
(statearr_28652_28704[(2)] = inst_28614);

(statearr_28652_28704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (17))){
var state_28620__$1 = state_28620;
var statearr_28653_28705 = state_28620__$1;
(statearr_28653_28705[(2)] = false);

(statearr_28653_28705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (3))){
var state_28620__$1 = state_28620;
var statearr_28654_28706 = state_28620__$1;
(statearr_28654_28706[(2)] = false);

(statearr_28654_28706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (12))){
var inst_28618 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28620__$1,inst_28618);
} else {
if((state_val_28621 === (2))){
var inst_28522 = (state_28620[(8)]);
var inst_28527 = inst_28522.cljs$lang$protocol_mask$partition0$;
var inst_28528 = (inst_28527 & (64));
var inst_28529 = inst_28522.cljs$core$ISeq$;
var inst_28530 = (cljs.core.PROTOCOL_SENTINEL === inst_28529);
var inst_28531 = ((inst_28528) || (inst_28530));
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28531)){
var statearr_28655_28707 = state_28620__$1;
(statearr_28655_28707[(1)] = (5));

} else {
var statearr_28656_28708 = state_28620__$1;
(statearr_28656_28708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (23))){
var inst_28579 = (state_28620[(14)]);
var inst_28585 = (inst_28579 == null);
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28585)){
var statearr_28657_28709 = state_28620__$1;
(statearr_28657_28709[(1)] = (26));

} else {
var statearr_28658_28710 = state_28620__$1;
(statearr_28658_28710[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (35))){
var inst_28605 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28605)){
var statearr_28659_28711 = state_28620__$1;
(statearr_28659_28711[(1)] = (36));

} else {
var statearr_28660_28712 = state_28620__$1;
(statearr_28660_28712[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (19))){
var inst_28547 = (state_28620[(7)]);
var inst_28567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28547);
var state_28620__$1 = state_28620;
var statearr_28661_28713 = state_28620__$1;
(statearr_28661_28713[(2)] = inst_28567);

(statearr_28661_28713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (11))){
var inst_28547 = (state_28620[(7)]);
var inst_28551 = (inst_28547 == null);
var inst_28552 = cljs.core.not.call(null,inst_28551);
var state_28620__$1 = state_28620;
if(inst_28552){
var statearr_28662_28714 = state_28620__$1;
(statearr_28662_28714[(1)] = (13));

} else {
var statearr_28663_28715 = state_28620__$1;
(statearr_28663_28715[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (9))){
var inst_28522 = (state_28620[(8)]);
var state_28620__$1 = state_28620;
var statearr_28664_28716 = state_28620__$1;
(statearr_28664_28716[(2)] = inst_28522);

(statearr_28664_28716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (5))){
var state_28620__$1 = state_28620;
var statearr_28665_28717 = state_28620__$1;
(statearr_28665_28717[(2)] = true);

(statearr_28665_28717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (14))){
var state_28620__$1 = state_28620;
var statearr_28666_28718 = state_28620__$1;
(statearr_28666_28718[(2)] = false);

(statearr_28666_28718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (26))){
var inst_28580 = (state_28620[(10)]);
var inst_28587 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28580);
var state_28620__$1 = state_28620;
var statearr_28667_28719 = state_28620__$1;
(statearr_28667_28719[(2)] = inst_28587);

(statearr_28667_28719[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (16))){
var state_28620__$1 = state_28620;
var statearr_28668_28720 = state_28620__$1;
(statearr_28668_28720[(2)] = true);

(statearr_28668_28720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (38))){
var inst_28610 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28669_28721 = state_28620__$1;
(statearr_28669_28721[(2)] = inst_28610);

(statearr_28669_28721[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (30))){
var inst_28571 = (state_28620[(9)]);
var inst_28580 = (state_28620[(10)]);
var inst_28572 = (state_28620[(13)]);
var inst_28597 = cljs.core.empty_QMARK_.call(null,inst_28571);
var inst_28598 = inst_28572.call(null,inst_28580);
var inst_28599 = cljs.core.not.call(null,inst_28598);
var inst_28600 = ((inst_28597) && (inst_28599));
var state_28620__$1 = state_28620;
var statearr_28670_28722 = state_28620__$1;
(statearr_28670_28722[(2)] = inst_28600);

(statearr_28670_28722[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (10))){
var inst_28522 = (state_28620[(8)]);
var inst_28543 = (state_28620[(2)]);
var inst_28544 = cljs.core.get.call(null,inst_28543,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28545 = cljs.core.get.call(null,inst_28543,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28546 = cljs.core.get.call(null,inst_28543,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28547 = inst_28522;
var state_28620__$1 = (function (){var statearr_28671 = state_28620;
(statearr_28671[(7)] = inst_28547);

(statearr_28671[(16)] = inst_28544);

(statearr_28671[(17)] = inst_28545);

(statearr_28671[(18)] = inst_28546);

return statearr_28671;
})();
var statearr_28672_28723 = state_28620__$1;
(statearr_28672_28723[(2)] = null);

(statearr_28672_28723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (18))){
var inst_28562 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28673_28724 = state_28620__$1;
(statearr_28673_28724[(2)] = inst_28562);

(statearr_28673_28724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (37))){
var state_28620__$1 = state_28620;
var statearr_28674_28725 = state_28620__$1;
(statearr_28674_28725[(2)] = null);

(statearr_28674_28725[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (8))){
var inst_28522 = (state_28620[(8)]);
var inst_28540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28522);
var state_28620__$1 = state_28620;
var statearr_28675_28726 = state_28620__$1;
(statearr_28675_28726[(2)] = inst_28540);

(statearr_28675_28726[(1)] = (10));


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
});})(c__27621__auto___28680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27531__auto__,c__27621__auto___28680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27532__auto__ = null;
var cljs$core$async$mix_$_state_machine__27532__auto____0 = (function (){
var statearr_28676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28676[(0)] = cljs$core$async$mix_$_state_machine__27532__auto__);

(statearr_28676[(1)] = (1));

return statearr_28676;
});
var cljs$core$async$mix_$_state_machine__27532__auto____1 = (function (state_28620){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_28620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e28677){if((e28677 instanceof Object)){
var ex__27535__auto__ = e28677;
var statearr_28678_28727 = state_28620;
(statearr_28678_28727[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28728 = state_28620;
state_28620 = G__28728;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27532__auto__ = function(state_28620){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27532__auto____1.call(this,state_28620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27532__auto____0;
cljs$core$async$mix_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27532__auto____1;
return cljs$core$async$mix_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___28680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27623__auto__ = (function (){var statearr_28679 = f__27622__auto__.call(null);
(statearr_28679[(6)] = c__27621__auto___28680);

return statearr_28679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___28680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28730 = arguments.length;
switch (G__28730) {
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
var G__28734 = arguments.length;
switch (G__28734) {
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
return (function (p1__28732_SHARP_){
if(cljs.core.truth_(p1__28732_SHARP_.call(null,topic))){
return p1__28732_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28732_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28735 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28736){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28736 = meta28736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28737,meta28736__$1){
var self__ = this;
var _28737__$1 = this;
return (new cljs.core.async.t_cljs$core$async28735(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28736__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28737){
var self__ = this;
var _28737__$1 = this;
return self__.meta28736;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28735.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28736","meta28736",754761917,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28735";

cljs.core.async.t_cljs$core$async28735.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28735");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28735.
 */
cljs.core.async.__GT_t_cljs$core$async28735 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28735(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28736){
return (new cljs.core.async.t_cljs$core$async28735(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28736));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28735(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27621__auto___28855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___28855,mults,ensure_mult,p){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___28855,mults,ensure_mult,p){
return (function (state_28809){
var state_val_28810 = (state_28809[(1)]);
if((state_val_28810 === (7))){
var inst_28805 = (state_28809[(2)]);
var state_28809__$1 = state_28809;
var statearr_28811_28856 = state_28809__$1;
(statearr_28811_28856[(2)] = inst_28805);

(statearr_28811_28856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (20))){
var state_28809__$1 = state_28809;
var statearr_28812_28857 = state_28809__$1;
(statearr_28812_28857[(2)] = null);

(statearr_28812_28857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (1))){
var state_28809__$1 = state_28809;
var statearr_28813_28858 = state_28809__$1;
(statearr_28813_28858[(2)] = null);

(statearr_28813_28858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (24))){
var inst_28788 = (state_28809[(7)]);
var inst_28797 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28788);
var state_28809__$1 = state_28809;
var statearr_28814_28859 = state_28809__$1;
(statearr_28814_28859[(2)] = inst_28797);

(statearr_28814_28859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (4))){
var inst_28740 = (state_28809[(8)]);
var inst_28740__$1 = (state_28809[(2)]);
var inst_28741 = (inst_28740__$1 == null);
var state_28809__$1 = (function (){var statearr_28815 = state_28809;
(statearr_28815[(8)] = inst_28740__$1);

return statearr_28815;
})();
if(cljs.core.truth_(inst_28741)){
var statearr_28816_28860 = state_28809__$1;
(statearr_28816_28860[(1)] = (5));

} else {
var statearr_28817_28861 = state_28809__$1;
(statearr_28817_28861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (15))){
var inst_28782 = (state_28809[(2)]);
var state_28809__$1 = state_28809;
var statearr_28818_28862 = state_28809__$1;
(statearr_28818_28862[(2)] = inst_28782);

(statearr_28818_28862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (21))){
var inst_28802 = (state_28809[(2)]);
var state_28809__$1 = (function (){var statearr_28819 = state_28809;
(statearr_28819[(9)] = inst_28802);

return statearr_28819;
})();
var statearr_28820_28863 = state_28809__$1;
(statearr_28820_28863[(2)] = null);

(statearr_28820_28863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (13))){
var inst_28764 = (state_28809[(10)]);
var inst_28766 = cljs.core.chunked_seq_QMARK_.call(null,inst_28764);
var state_28809__$1 = state_28809;
if(inst_28766){
var statearr_28821_28864 = state_28809__$1;
(statearr_28821_28864[(1)] = (16));

} else {
var statearr_28822_28865 = state_28809__$1;
(statearr_28822_28865[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (22))){
var inst_28794 = (state_28809[(2)]);
var state_28809__$1 = state_28809;
if(cljs.core.truth_(inst_28794)){
var statearr_28823_28866 = state_28809__$1;
(statearr_28823_28866[(1)] = (23));

} else {
var statearr_28824_28867 = state_28809__$1;
(statearr_28824_28867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (6))){
var inst_28790 = (state_28809[(11)]);
var inst_28740 = (state_28809[(8)]);
var inst_28788 = (state_28809[(7)]);
var inst_28788__$1 = topic_fn.call(null,inst_28740);
var inst_28789 = cljs.core.deref.call(null,mults);
var inst_28790__$1 = cljs.core.get.call(null,inst_28789,inst_28788__$1);
var state_28809__$1 = (function (){var statearr_28825 = state_28809;
(statearr_28825[(11)] = inst_28790__$1);

(statearr_28825[(7)] = inst_28788__$1);

return statearr_28825;
})();
if(cljs.core.truth_(inst_28790__$1)){
var statearr_28826_28868 = state_28809__$1;
(statearr_28826_28868[(1)] = (19));

} else {
var statearr_28827_28869 = state_28809__$1;
(statearr_28827_28869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (25))){
var inst_28799 = (state_28809[(2)]);
var state_28809__$1 = state_28809;
var statearr_28828_28870 = state_28809__$1;
(statearr_28828_28870[(2)] = inst_28799);

(statearr_28828_28870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (17))){
var inst_28764 = (state_28809[(10)]);
var inst_28773 = cljs.core.first.call(null,inst_28764);
var inst_28774 = cljs.core.async.muxch_STAR_.call(null,inst_28773);
var inst_28775 = cljs.core.async.close_BANG_.call(null,inst_28774);
var inst_28776 = cljs.core.next.call(null,inst_28764);
var inst_28750 = inst_28776;
var inst_28751 = null;
var inst_28752 = (0);
var inst_28753 = (0);
var state_28809__$1 = (function (){var statearr_28829 = state_28809;
(statearr_28829[(12)] = inst_28775);

(statearr_28829[(13)] = inst_28751);

(statearr_28829[(14)] = inst_28750);

(statearr_28829[(15)] = inst_28753);

(statearr_28829[(16)] = inst_28752);

return statearr_28829;
})();
var statearr_28830_28871 = state_28809__$1;
(statearr_28830_28871[(2)] = null);

(statearr_28830_28871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (3))){
var inst_28807 = (state_28809[(2)]);
var state_28809__$1 = state_28809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28809__$1,inst_28807);
} else {
if((state_val_28810 === (12))){
var inst_28784 = (state_28809[(2)]);
var state_28809__$1 = state_28809;
var statearr_28831_28872 = state_28809__$1;
(statearr_28831_28872[(2)] = inst_28784);

(statearr_28831_28872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (2))){
var state_28809__$1 = state_28809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28809__$1,(4),ch);
} else {
if((state_val_28810 === (23))){
var state_28809__$1 = state_28809;
var statearr_28832_28873 = state_28809__$1;
(statearr_28832_28873[(2)] = null);

(statearr_28832_28873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (19))){
var inst_28790 = (state_28809[(11)]);
var inst_28740 = (state_28809[(8)]);
var inst_28792 = cljs.core.async.muxch_STAR_.call(null,inst_28790);
var state_28809__$1 = state_28809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28809__$1,(22),inst_28792,inst_28740);
} else {
if((state_val_28810 === (11))){
var inst_28764 = (state_28809[(10)]);
var inst_28750 = (state_28809[(14)]);
var inst_28764__$1 = cljs.core.seq.call(null,inst_28750);
var state_28809__$1 = (function (){var statearr_28833 = state_28809;
(statearr_28833[(10)] = inst_28764__$1);

return statearr_28833;
})();
if(inst_28764__$1){
var statearr_28834_28874 = state_28809__$1;
(statearr_28834_28874[(1)] = (13));

} else {
var statearr_28835_28875 = state_28809__$1;
(statearr_28835_28875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (9))){
var inst_28786 = (state_28809[(2)]);
var state_28809__$1 = state_28809;
var statearr_28836_28876 = state_28809__$1;
(statearr_28836_28876[(2)] = inst_28786);

(statearr_28836_28876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (5))){
var inst_28747 = cljs.core.deref.call(null,mults);
var inst_28748 = cljs.core.vals.call(null,inst_28747);
var inst_28749 = cljs.core.seq.call(null,inst_28748);
var inst_28750 = inst_28749;
var inst_28751 = null;
var inst_28752 = (0);
var inst_28753 = (0);
var state_28809__$1 = (function (){var statearr_28837 = state_28809;
(statearr_28837[(13)] = inst_28751);

(statearr_28837[(14)] = inst_28750);

(statearr_28837[(15)] = inst_28753);

(statearr_28837[(16)] = inst_28752);

return statearr_28837;
})();
var statearr_28838_28877 = state_28809__$1;
(statearr_28838_28877[(2)] = null);

(statearr_28838_28877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (14))){
var state_28809__$1 = state_28809;
var statearr_28842_28878 = state_28809__$1;
(statearr_28842_28878[(2)] = null);

(statearr_28842_28878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (16))){
var inst_28764 = (state_28809[(10)]);
var inst_28768 = cljs.core.chunk_first.call(null,inst_28764);
var inst_28769 = cljs.core.chunk_rest.call(null,inst_28764);
var inst_28770 = cljs.core.count.call(null,inst_28768);
var inst_28750 = inst_28769;
var inst_28751 = inst_28768;
var inst_28752 = inst_28770;
var inst_28753 = (0);
var state_28809__$1 = (function (){var statearr_28843 = state_28809;
(statearr_28843[(13)] = inst_28751);

(statearr_28843[(14)] = inst_28750);

(statearr_28843[(15)] = inst_28753);

(statearr_28843[(16)] = inst_28752);

return statearr_28843;
})();
var statearr_28844_28879 = state_28809__$1;
(statearr_28844_28879[(2)] = null);

(statearr_28844_28879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (10))){
var inst_28751 = (state_28809[(13)]);
var inst_28750 = (state_28809[(14)]);
var inst_28753 = (state_28809[(15)]);
var inst_28752 = (state_28809[(16)]);
var inst_28758 = cljs.core._nth.call(null,inst_28751,inst_28753);
var inst_28759 = cljs.core.async.muxch_STAR_.call(null,inst_28758);
var inst_28760 = cljs.core.async.close_BANG_.call(null,inst_28759);
var inst_28761 = (inst_28753 + (1));
var tmp28839 = inst_28751;
var tmp28840 = inst_28750;
var tmp28841 = inst_28752;
var inst_28750__$1 = tmp28840;
var inst_28751__$1 = tmp28839;
var inst_28752__$1 = tmp28841;
var inst_28753__$1 = inst_28761;
var state_28809__$1 = (function (){var statearr_28845 = state_28809;
(statearr_28845[(13)] = inst_28751__$1);

(statearr_28845[(14)] = inst_28750__$1);

(statearr_28845[(15)] = inst_28753__$1);

(statearr_28845[(16)] = inst_28752__$1);

(statearr_28845[(17)] = inst_28760);

return statearr_28845;
})();
var statearr_28846_28880 = state_28809__$1;
(statearr_28846_28880[(2)] = null);

(statearr_28846_28880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (18))){
var inst_28779 = (state_28809[(2)]);
var state_28809__$1 = state_28809;
var statearr_28847_28881 = state_28809__$1;
(statearr_28847_28881[(2)] = inst_28779);

(statearr_28847_28881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28810 === (8))){
var inst_28753 = (state_28809[(15)]);
var inst_28752 = (state_28809[(16)]);
var inst_28755 = (inst_28753 < inst_28752);
var inst_28756 = inst_28755;
var state_28809__$1 = state_28809;
if(cljs.core.truth_(inst_28756)){
var statearr_28848_28882 = state_28809__$1;
(statearr_28848_28882[(1)] = (10));

} else {
var statearr_28849_28883 = state_28809__$1;
(statearr_28849_28883[(1)] = (11));

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
});})(c__27621__auto___28855,mults,ensure_mult,p))
;
return ((function (switch__27531__auto__,c__27621__auto___28855,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_28850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28850[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_28850[(1)] = (1));

return statearr_28850;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_28809){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_28809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e28851){if((e28851 instanceof Object)){
var ex__27535__auto__ = e28851;
var statearr_28852_28884 = state_28809;
(statearr_28852_28884[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28885 = state_28809;
state_28809 = G__28885;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_28809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_28809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___28855,mults,ensure_mult,p))
})();
var state__27623__auto__ = (function (){var statearr_28853 = f__27622__auto__.call(null);
(statearr_28853[(6)] = c__27621__auto___28855);

return statearr_28853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___28855,mults,ensure_mult,p))
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
var G__28887 = arguments.length;
switch (G__28887) {
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
var G__28890 = arguments.length;
switch (G__28890) {
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
var G__28893 = arguments.length;
switch (G__28893) {
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
var c__27621__auto___28960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___28960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___28960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28932){
var state_val_28933 = (state_28932[(1)]);
if((state_val_28933 === (7))){
var state_28932__$1 = state_28932;
var statearr_28934_28961 = state_28932__$1;
(statearr_28934_28961[(2)] = null);

(statearr_28934_28961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (1))){
var state_28932__$1 = state_28932;
var statearr_28935_28962 = state_28932__$1;
(statearr_28935_28962[(2)] = null);

(statearr_28935_28962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (4))){
var inst_28896 = (state_28932[(7)]);
var inst_28898 = (inst_28896 < cnt);
var state_28932__$1 = state_28932;
if(cljs.core.truth_(inst_28898)){
var statearr_28936_28963 = state_28932__$1;
(statearr_28936_28963[(1)] = (6));

} else {
var statearr_28937_28964 = state_28932__$1;
(statearr_28937_28964[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (15))){
var inst_28928 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
var statearr_28938_28965 = state_28932__$1;
(statearr_28938_28965[(2)] = inst_28928);

(statearr_28938_28965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (13))){
var inst_28921 = cljs.core.async.close_BANG_.call(null,out);
var state_28932__$1 = state_28932;
var statearr_28939_28966 = state_28932__$1;
(statearr_28939_28966[(2)] = inst_28921);

(statearr_28939_28966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (6))){
var state_28932__$1 = state_28932;
var statearr_28940_28967 = state_28932__$1;
(statearr_28940_28967[(2)] = null);

(statearr_28940_28967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (3))){
var inst_28930 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28932__$1,inst_28930);
} else {
if((state_val_28933 === (12))){
var inst_28918 = (state_28932[(8)]);
var inst_28918__$1 = (state_28932[(2)]);
var inst_28919 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28918__$1);
var state_28932__$1 = (function (){var statearr_28941 = state_28932;
(statearr_28941[(8)] = inst_28918__$1);

return statearr_28941;
})();
if(cljs.core.truth_(inst_28919)){
var statearr_28942_28968 = state_28932__$1;
(statearr_28942_28968[(1)] = (13));

} else {
var statearr_28943_28969 = state_28932__$1;
(statearr_28943_28969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (2))){
var inst_28895 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28896 = (0);
var state_28932__$1 = (function (){var statearr_28944 = state_28932;
(statearr_28944[(9)] = inst_28895);

(statearr_28944[(7)] = inst_28896);

return statearr_28944;
})();
var statearr_28945_28970 = state_28932__$1;
(statearr_28945_28970[(2)] = null);

(statearr_28945_28970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (11))){
var inst_28896 = (state_28932[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28932,(10),Object,null,(9));
var inst_28905 = chs__$1.call(null,inst_28896);
var inst_28906 = done.call(null,inst_28896);
var inst_28907 = cljs.core.async.take_BANG_.call(null,inst_28905,inst_28906);
var state_28932__$1 = state_28932;
var statearr_28946_28971 = state_28932__$1;
(statearr_28946_28971[(2)] = inst_28907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (9))){
var inst_28896 = (state_28932[(7)]);
var inst_28909 = (state_28932[(2)]);
var inst_28910 = (inst_28896 + (1));
var inst_28896__$1 = inst_28910;
var state_28932__$1 = (function (){var statearr_28947 = state_28932;
(statearr_28947[(7)] = inst_28896__$1);

(statearr_28947[(10)] = inst_28909);

return statearr_28947;
})();
var statearr_28948_28972 = state_28932__$1;
(statearr_28948_28972[(2)] = null);

(statearr_28948_28972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (5))){
var inst_28916 = (state_28932[(2)]);
var state_28932__$1 = (function (){var statearr_28949 = state_28932;
(statearr_28949[(11)] = inst_28916);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28932__$1,(12),dchan);
} else {
if((state_val_28933 === (14))){
var inst_28918 = (state_28932[(8)]);
var inst_28923 = cljs.core.apply.call(null,f,inst_28918);
var state_28932__$1 = state_28932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28932__$1,(16),out,inst_28923);
} else {
if((state_val_28933 === (16))){
var inst_28925 = (state_28932[(2)]);
var state_28932__$1 = (function (){var statearr_28950 = state_28932;
(statearr_28950[(12)] = inst_28925);

return statearr_28950;
})();
var statearr_28951_28973 = state_28932__$1;
(statearr_28951_28973[(2)] = null);

(statearr_28951_28973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (10))){
var inst_28900 = (state_28932[(2)]);
var inst_28901 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28932__$1 = (function (){var statearr_28952 = state_28932;
(statearr_28952[(13)] = inst_28900);

return statearr_28952;
})();
var statearr_28953_28974 = state_28932__$1;
(statearr_28953_28974[(2)] = inst_28901);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (8))){
var inst_28914 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
var statearr_28954_28975 = state_28932__$1;
(statearr_28954_28975[(2)] = inst_28914);

(statearr_28954_28975[(1)] = (5));


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
});})(c__27621__auto___28960,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27531__auto__,c__27621__auto___28960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_28955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28955[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_28955[(1)] = (1));

return statearr_28955;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_28932){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_28932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e28956){if((e28956 instanceof Object)){
var ex__27535__auto__ = e28956;
var statearr_28957_28976 = state_28932;
(statearr_28957_28976[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28977 = state_28932;
state_28932 = G__28977;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_28932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_28932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___28960,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27623__auto__ = (function (){var statearr_28958 = f__27622__auto__.call(null);
(statearr_28958[(6)] = c__27621__auto___28960);

return statearr_28958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___28960,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28980 = arguments.length;
switch (G__28980) {
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
var c__27621__auto___29034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___29034,out){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___29034,out){
return (function (state_29012){
var state_val_29013 = (state_29012[(1)]);
if((state_val_29013 === (7))){
var inst_28991 = (state_29012[(7)]);
var inst_28992 = (state_29012[(8)]);
var inst_28991__$1 = (state_29012[(2)]);
var inst_28992__$1 = cljs.core.nth.call(null,inst_28991__$1,(0),null);
var inst_28993 = cljs.core.nth.call(null,inst_28991__$1,(1),null);
var inst_28994 = (inst_28992__$1 == null);
var state_29012__$1 = (function (){var statearr_29014 = state_29012;
(statearr_29014[(7)] = inst_28991__$1);

(statearr_29014[(9)] = inst_28993);

(statearr_29014[(8)] = inst_28992__$1);

return statearr_29014;
})();
if(cljs.core.truth_(inst_28994)){
var statearr_29015_29035 = state_29012__$1;
(statearr_29015_29035[(1)] = (8));

} else {
var statearr_29016_29036 = state_29012__$1;
(statearr_29016_29036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (1))){
var inst_28981 = cljs.core.vec.call(null,chs);
var inst_28982 = inst_28981;
var state_29012__$1 = (function (){var statearr_29017 = state_29012;
(statearr_29017[(10)] = inst_28982);

return statearr_29017;
})();
var statearr_29018_29037 = state_29012__$1;
(statearr_29018_29037[(2)] = null);

(statearr_29018_29037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (4))){
var inst_28982 = (state_29012[(10)]);
var state_29012__$1 = state_29012;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29012__$1,(7),inst_28982);
} else {
if((state_val_29013 === (6))){
var inst_29008 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29019_29038 = state_29012__$1;
(statearr_29019_29038[(2)] = inst_29008);

(statearr_29019_29038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (3))){
var inst_29010 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29012__$1,inst_29010);
} else {
if((state_val_29013 === (2))){
var inst_28982 = (state_29012[(10)]);
var inst_28984 = cljs.core.count.call(null,inst_28982);
var inst_28985 = (inst_28984 > (0));
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28985)){
var statearr_29021_29039 = state_29012__$1;
(statearr_29021_29039[(1)] = (4));

} else {
var statearr_29022_29040 = state_29012__$1;
(statearr_29022_29040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (11))){
var inst_28982 = (state_29012[(10)]);
var inst_29001 = (state_29012[(2)]);
var tmp29020 = inst_28982;
var inst_28982__$1 = tmp29020;
var state_29012__$1 = (function (){var statearr_29023 = state_29012;
(statearr_29023[(11)] = inst_29001);

(statearr_29023[(10)] = inst_28982__$1);

return statearr_29023;
})();
var statearr_29024_29041 = state_29012__$1;
(statearr_29024_29041[(2)] = null);

(statearr_29024_29041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (9))){
var inst_28992 = (state_29012[(8)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29012__$1,(11),out,inst_28992);
} else {
if((state_val_29013 === (5))){
var inst_29006 = cljs.core.async.close_BANG_.call(null,out);
var state_29012__$1 = state_29012;
var statearr_29025_29042 = state_29012__$1;
(statearr_29025_29042[(2)] = inst_29006);

(statearr_29025_29042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (10))){
var inst_29004 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29026_29043 = state_29012__$1;
(statearr_29026_29043[(2)] = inst_29004);

(statearr_29026_29043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (8))){
var inst_28982 = (state_29012[(10)]);
var inst_28991 = (state_29012[(7)]);
var inst_28993 = (state_29012[(9)]);
var inst_28992 = (state_29012[(8)]);
var inst_28996 = (function (){var cs = inst_28982;
var vec__28987 = inst_28991;
var v = inst_28992;
var c = inst_28993;
return ((function (cs,vec__28987,v,c,inst_28982,inst_28991,inst_28993,inst_28992,state_val_29013,c__27621__auto___29034,out){
return (function (p1__28978_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28978_SHARP_);
});
;})(cs,vec__28987,v,c,inst_28982,inst_28991,inst_28993,inst_28992,state_val_29013,c__27621__auto___29034,out))
})();
var inst_28997 = cljs.core.filterv.call(null,inst_28996,inst_28982);
var inst_28982__$1 = inst_28997;
var state_29012__$1 = (function (){var statearr_29027 = state_29012;
(statearr_29027[(10)] = inst_28982__$1);

return statearr_29027;
})();
var statearr_29028_29044 = state_29012__$1;
(statearr_29028_29044[(2)] = null);

(statearr_29028_29044[(1)] = (2));


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
});})(c__27621__auto___29034,out))
;
return ((function (switch__27531__auto__,c__27621__auto___29034,out){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_29029 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29029[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_29029[(1)] = (1));

return statearr_29029;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_29012){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_29012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e29030){if((e29030 instanceof Object)){
var ex__27535__auto__ = e29030;
var statearr_29031_29045 = state_29012;
(statearr_29031_29045[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29046 = state_29012;
state_29012 = G__29046;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_29012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_29012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___29034,out))
})();
var state__27623__auto__ = (function (){var statearr_29032 = f__27622__auto__.call(null);
(statearr_29032[(6)] = c__27621__auto___29034);

return statearr_29032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___29034,out))
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
var G__29048 = arguments.length;
switch (G__29048) {
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
var c__27621__auto___29093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___29093,out){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___29093,out){
return (function (state_29072){
var state_val_29073 = (state_29072[(1)]);
if((state_val_29073 === (7))){
var inst_29054 = (state_29072[(7)]);
var inst_29054__$1 = (state_29072[(2)]);
var inst_29055 = (inst_29054__$1 == null);
var inst_29056 = cljs.core.not.call(null,inst_29055);
var state_29072__$1 = (function (){var statearr_29074 = state_29072;
(statearr_29074[(7)] = inst_29054__$1);

return statearr_29074;
})();
if(inst_29056){
var statearr_29075_29094 = state_29072__$1;
(statearr_29075_29094[(1)] = (8));

} else {
var statearr_29076_29095 = state_29072__$1;
(statearr_29076_29095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (1))){
var inst_29049 = (0);
var state_29072__$1 = (function (){var statearr_29077 = state_29072;
(statearr_29077[(8)] = inst_29049);

return statearr_29077;
})();
var statearr_29078_29096 = state_29072__$1;
(statearr_29078_29096[(2)] = null);

(statearr_29078_29096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (4))){
var state_29072__$1 = state_29072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29072__$1,(7),ch);
} else {
if((state_val_29073 === (6))){
var inst_29067 = (state_29072[(2)]);
var state_29072__$1 = state_29072;
var statearr_29079_29097 = state_29072__$1;
(statearr_29079_29097[(2)] = inst_29067);

(statearr_29079_29097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (3))){
var inst_29069 = (state_29072[(2)]);
var inst_29070 = cljs.core.async.close_BANG_.call(null,out);
var state_29072__$1 = (function (){var statearr_29080 = state_29072;
(statearr_29080[(9)] = inst_29069);

return statearr_29080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29072__$1,inst_29070);
} else {
if((state_val_29073 === (2))){
var inst_29049 = (state_29072[(8)]);
var inst_29051 = (inst_29049 < n);
var state_29072__$1 = state_29072;
if(cljs.core.truth_(inst_29051)){
var statearr_29081_29098 = state_29072__$1;
(statearr_29081_29098[(1)] = (4));

} else {
var statearr_29082_29099 = state_29072__$1;
(statearr_29082_29099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (11))){
var inst_29049 = (state_29072[(8)]);
var inst_29059 = (state_29072[(2)]);
var inst_29060 = (inst_29049 + (1));
var inst_29049__$1 = inst_29060;
var state_29072__$1 = (function (){var statearr_29083 = state_29072;
(statearr_29083[(8)] = inst_29049__$1);

(statearr_29083[(10)] = inst_29059);

return statearr_29083;
})();
var statearr_29084_29100 = state_29072__$1;
(statearr_29084_29100[(2)] = null);

(statearr_29084_29100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (9))){
var state_29072__$1 = state_29072;
var statearr_29085_29101 = state_29072__$1;
(statearr_29085_29101[(2)] = null);

(statearr_29085_29101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (5))){
var state_29072__$1 = state_29072;
var statearr_29086_29102 = state_29072__$1;
(statearr_29086_29102[(2)] = null);

(statearr_29086_29102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (10))){
var inst_29064 = (state_29072[(2)]);
var state_29072__$1 = state_29072;
var statearr_29087_29103 = state_29072__$1;
(statearr_29087_29103[(2)] = inst_29064);

(statearr_29087_29103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (8))){
var inst_29054 = (state_29072[(7)]);
var state_29072__$1 = state_29072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29072__$1,(11),out,inst_29054);
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
});})(c__27621__auto___29093,out))
;
return ((function (switch__27531__auto__,c__27621__auto___29093,out){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_29088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29088[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_29088[(1)] = (1));

return statearr_29088;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_29072){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_29072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e29089){if((e29089 instanceof Object)){
var ex__27535__auto__ = e29089;
var statearr_29090_29104 = state_29072;
(statearr_29090_29104[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29105 = state_29072;
state_29072 = G__29105;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_29072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_29072);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___29093,out))
})();
var state__27623__auto__ = (function (){var statearr_29091 = f__27622__auto__.call(null);
(statearr_29091[(6)] = c__27621__auto___29093);

return statearr_29091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___29093,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29107 = (function (f,ch,meta29108){
this.f = f;
this.ch = ch;
this.meta29108 = meta29108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29109,meta29108__$1){
var self__ = this;
var _29109__$1 = this;
return (new cljs.core.async.t_cljs$core$async29107(self__.f,self__.ch,meta29108__$1));
});

cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29109){
var self__ = this;
var _29109__$1 = this;
return self__.meta29108;
});

cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29110 = (function (f,ch,meta29108,_,fn1,meta29111){
this.f = f;
this.ch = ch;
this.meta29108 = meta29108;
this._ = _;
this.fn1 = fn1;
this.meta29111 = meta29111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29112,meta29111__$1){
var self__ = this;
var _29112__$1 = this;
return (new cljs.core.async.t_cljs$core$async29110(self__.f,self__.ch,self__.meta29108,self__._,self__.fn1,meta29111__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29112){
var self__ = this;
var _29112__$1 = this;
return self__.meta29111;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29106_SHARP_){
return f1.call(null,(((p1__29106_SHARP_ == null))?null:self__.f.call(null,p1__29106_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29110.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29108","meta29108",1480727367,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29107","cljs.core.async/t_cljs$core$async29107",-800973466,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29111","meta29111",-163232455,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29110";

cljs.core.async.t_cljs$core$async29110.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29110");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29110.
 */
cljs.core.async.__GT_t_cljs$core$async29110 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29110(f__$1,ch__$1,meta29108__$1,___$2,fn1__$1,meta29111){
return (new cljs.core.async.t_cljs$core$async29110(f__$1,ch__$1,meta29108__$1,___$2,fn1__$1,meta29111));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29110(self__.f,self__.ch,self__.meta29108,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29108","meta29108",1480727367,null)], null);
});

cljs.core.async.t_cljs$core$async29107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29107";

cljs.core.async.t_cljs$core$async29107.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29107");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29107.
 */
cljs.core.async.__GT_t_cljs$core$async29107 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29107(f__$1,ch__$1,meta29108){
return (new cljs.core.async.t_cljs$core$async29107(f__$1,ch__$1,meta29108));
});

}

return (new cljs.core.async.t_cljs$core$async29107(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29113 = (function (f,ch,meta29114){
this.f = f;
this.ch = ch;
this.meta29114 = meta29114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29115,meta29114__$1){
var self__ = this;
var _29115__$1 = this;
return (new cljs.core.async.t_cljs$core$async29113(self__.f,self__.ch,meta29114__$1));
});

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29115){
var self__ = this;
var _29115__$1 = this;
return self__.meta29114;
});

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29114","meta29114",936232268,null)], null);
});

cljs.core.async.t_cljs$core$async29113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29113";

cljs.core.async.t_cljs$core$async29113.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29113");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29113.
 */
cljs.core.async.__GT_t_cljs$core$async29113 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29113(f__$1,ch__$1,meta29114){
return (new cljs.core.async.t_cljs$core$async29113(f__$1,ch__$1,meta29114));
});

}

return (new cljs.core.async.t_cljs$core$async29113(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29116 = (function (p,ch,meta29117){
this.p = p;
this.ch = ch;
this.meta29117 = meta29117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29118,meta29117__$1){
var self__ = this;
var _29118__$1 = this;
return (new cljs.core.async.t_cljs$core$async29116(self__.p,self__.ch,meta29117__$1));
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29118){
var self__ = this;
var _29118__$1 = this;
return self__.meta29117;
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29117","meta29117",-1265947973,null)], null);
});

cljs.core.async.t_cljs$core$async29116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29116";

cljs.core.async.t_cljs$core$async29116.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29116");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29116.
 */
cljs.core.async.__GT_t_cljs$core$async29116 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29116(p__$1,ch__$1,meta29117){
return (new cljs.core.async.t_cljs$core$async29116(p__$1,ch__$1,meta29117));
});

}

return (new cljs.core.async.t_cljs$core$async29116(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29120 = arguments.length;
switch (G__29120) {
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
var c__27621__auto___29160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___29160,out){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___29160,out){
return (function (state_29141){
var state_val_29142 = (state_29141[(1)]);
if((state_val_29142 === (7))){
var inst_29137 = (state_29141[(2)]);
var state_29141__$1 = state_29141;
var statearr_29143_29161 = state_29141__$1;
(statearr_29143_29161[(2)] = inst_29137);

(statearr_29143_29161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29142 === (1))){
var state_29141__$1 = state_29141;
var statearr_29144_29162 = state_29141__$1;
(statearr_29144_29162[(2)] = null);

(statearr_29144_29162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29142 === (4))){
var inst_29123 = (state_29141[(7)]);
var inst_29123__$1 = (state_29141[(2)]);
var inst_29124 = (inst_29123__$1 == null);
var state_29141__$1 = (function (){var statearr_29145 = state_29141;
(statearr_29145[(7)] = inst_29123__$1);

return statearr_29145;
})();
if(cljs.core.truth_(inst_29124)){
var statearr_29146_29163 = state_29141__$1;
(statearr_29146_29163[(1)] = (5));

} else {
var statearr_29147_29164 = state_29141__$1;
(statearr_29147_29164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29142 === (6))){
var inst_29123 = (state_29141[(7)]);
var inst_29128 = p.call(null,inst_29123);
var state_29141__$1 = state_29141;
if(cljs.core.truth_(inst_29128)){
var statearr_29148_29165 = state_29141__$1;
(statearr_29148_29165[(1)] = (8));

} else {
var statearr_29149_29166 = state_29141__$1;
(statearr_29149_29166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29142 === (3))){
var inst_29139 = (state_29141[(2)]);
var state_29141__$1 = state_29141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29141__$1,inst_29139);
} else {
if((state_val_29142 === (2))){
var state_29141__$1 = state_29141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29141__$1,(4),ch);
} else {
if((state_val_29142 === (11))){
var inst_29131 = (state_29141[(2)]);
var state_29141__$1 = state_29141;
var statearr_29150_29167 = state_29141__$1;
(statearr_29150_29167[(2)] = inst_29131);

(statearr_29150_29167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29142 === (9))){
var state_29141__$1 = state_29141;
var statearr_29151_29168 = state_29141__$1;
(statearr_29151_29168[(2)] = null);

(statearr_29151_29168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29142 === (5))){
var inst_29126 = cljs.core.async.close_BANG_.call(null,out);
var state_29141__$1 = state_29141;
var statearr_29152_29169 = state_29141__$1;
(statearr_29152_29169[(2)] = inst_29126);

(statearr_29152_29169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29142 === (10))){
var inst_29134 = (state_29141[(2)]);
var state_29141__$1 = (function (){var statearr_29153 = state_29141;
(statearr_29153[(8)] = inst_29134);

return statearr_29153;
})();
var statearr_29154_29170 = state_29141__$1;
(statearr_29154_29170[(2)] = null);

(statearr_29154_29170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29142 === (8))){
var inst_29123 = (state_29141[(7)]);
var state_29141__$1 = state_29141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29141__$1,(11),out,inst_29123);
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
});})(c__27621__auto___29160,out))
;
return ((function (switch__27531__auto__,c__27621__auto___29160,out){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_29155 = [null,null,null,null,null,null,null,null,null];
(statearr_29155[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_29155[(1)] = (1));

return statearr_29155;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_29141){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_29141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e29156){if((e29156 instanceof Object)){
var ex__27535__auto__ = e29156;
var statearr_29157_29171 = state_29141;
(statearr_29157_29171[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29172 = state_29141;
state_29141 = G__29172;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_29141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_29141);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___29160,out))
})();
var state__27623__auto__ = (function (){var statearr_29158 = f__27622__auto__.call(null);
(statearr_29158[(6)] = c__27621__auto___29160);

return statearr_29158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___29160,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29174 = arguments.length;
switch (G__29174) {
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
var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__){
return (function (state_29237){
var state_val_29238 = (state_29237[(1)]);
if((state_val_29238 === (7))){
var inst_29233 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29239_29277 = state_29237__$1;
(statearr_29239_29277[(2)] = inst_29233);

(statearr_29239_29277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (20))){
var inst_29203 = (state_29237[(7)]);
var inst_29214 = (state_29237[(2)]);
var inst_29215 = cljs.core.next.call(null,inst_29203);
var inst_29189 = inst_29215;
var inst_29190 = null;
var inst_29191 = (0);
var inst_29192 = (0);
var state_29237__$1 = (function (){var statearr_29240 = state_29237;
(statearr_29240[(8)] = inst_29191);

(statearr_29240[(9)] = inst_29189);

(statearr_29240[(10)] = inst_29192);

(statearr_29240[(11)] = inst_29190);

(statearr_29240[(12)] = inst_29214);

return statearr_29240;
})();
var statearr_29241_29278 = state_29237__$1;
(statearr_29241_29278[(2)] = null);

(statearr_29241_29278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (1))){
var state_29237__$1 = state_29237;
var statearr_29242_29279 = state_29237__$1;
(statearr_29242_29279[(2)] = null);

(statearr_29242_29279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (4))){
var inst_29178 = (state_29237[(13)]);
var inst_29178__$1 = (state_29237[(2)]);
var inst_29179 = (inst_29178__$1 == null);
var state_29237__$1 = (function (){var statearr_29243 = state_29237;
(statearr_29243[(13)] = inst_29178__$1);

return statearr_29243;
})();
if(cljs.core.truth_(inst_29179)){
var statearr_29244_29280 = state_29237__$1;
(statearr_29244_29280[(1)] = (5));

} else {
var statearr_29245_29281 = state_29237__$1;
(statearr_29245_29281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (15))){
var state_29237__$1 = state_29237;
var statearr_29249_29282 = state_29237__$1;
(statearr_29249_29282[(2)] = null);

(statearr_29249_29282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (21))){
var state_29237__$1 = state_29237;
var statearr_29250_29283 = state_29237__$1;
(statearr_29250_29283[(2)] = null);

(statearr_29250_29283[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (13))){
var inst_29191 = (state_29237[(8)]);
var inst_29189 = (state_29237[(9)]);
var inst_29192 = (state_29237[(10)]);
var inst_29190 = (state_29237[(11)]);
var inst_29199 = (state_29237[(2)]);
var inst_29200 = (inst_29192 + (1));
var tmp29246 = inst_29191;
var tmp29247 = inst_29189;
var tmp29248 = inst_29190;
var inst_29189__$1 = tmp29247;
var inst_29190__$1 = tmp29248;
var inst_29191__$1 = tmp29246;
var inst_29192__$1 = inst_29200;
var state_29237__$1 = (function (){var statearr_29251 = state_29237;
(statearr_29251[(8)] = inst_29191__$1);

(statearr_29251[(9)] = inst_29189__$1);

(statearr_29251[(10)] = inst_29192__$1);

(statearr_29251[(11)] = inst_29190__$1);

(statearr_29251[(14)] = inst_29199);

return statearr_29251;
})();
var statearr_29252_29284 = state_29237__$1;
(statearr_29252_29284[(2)] = null);

(statearr_29252_29284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (22))){
var state_29237__$1 = state_29237;
var statearr_29253_29285 = state_29237__$1;
(statearr_29253_29285[(2)] = null);

(statearr_29253_29285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (6))){
var inst_29178 = (state_29237[(13)]);
var inst_29187 = f.call(null,inst_29178);
var inst_29188 = cljs.core.seq.call(null,inst_29187);
var inst_29189 = inst_29188;
var inst_29190 = null;
var inst_29191 = (0);
var inst_29192 = (0);
var state_29237__$1 = (function (){var statearr_29254 = state_29237;
(statearr_29254[(8)] = inst_29191);

(statearr_29254[(9)] = inst_29189);

(statearr_29254[(10)] = inst_29192);

(statearr_29254[(11)] = inst_29190);

return statearr_29254;
})();
var statearr_29255_29286 = state_29237__$1;
(statearr_29255_29286[(2)] = null);

(statearr_29255_29286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (17))){
var inst_29203 = (state_29237[(7)]);
var inst_29207 = cljs.core.chunk_first.call(null,inst_29203);
var inst_29208 = cljs.core.chunk_rest.call(null,inst_29203);
var inst_29209 = cljs.core.count.call(null,inst_29207);
var inst_29189 = inst_29208;
var inst_29190 = inst_29207;
var inst_29191 = inst_29209;
var inst_29192 = (0);
var state_29237__$1 = (function (){var statearr_29256 = state_29237;
(statearr_29256[(8)] = inst_29191);

(statearr_29256[(9)] = inst_29189);

(statearr_29256[(10)] = inst_29192);

(statearr_29256[(11)] = inst_29190);

return statearr_29256;
})();
var statearr_29257_29287 = state_29237__$1;
(statearr_29257_29287[(2)] = null);

(statearr_29257_29287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (3))){
var inst_29235 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29237__$1,inst_29235);
} else {
if((state_val_29238 === (12))){
var inst_29223 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29258_29288 = state_29237__$1;
(statearr_29258_29288[(2)] = inst_29223);

(statearr_29258_29288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (2))){
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29237__$1,(4),in$);
} else {
if((state_val_29238 === (23))){
var inst_29231 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29259_29289 = state_29237__$1;
(statearr_29259_29289[(2)] = inst_29231);

(statearr_29259_29289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (19))){
var inst_29218 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29260_29290 = state_29237__$1;
(statearr_29260_29290[(2)] = inst_29218);

(statearr_29260_29290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (11))){
var inst_29203 = (state_29237[(7)]);
var inst_29189 = (state_29237[(9)]);
var inst_29203__$1 = cljs.core.seq.call(null,inst_29189);
var state_29237__$1 = (function (){var statearr_29261 = state_29237;
(statearr_29261[(7)] = inst_29203__$1);

return statearr_29261;
})();
if(inst_29203__$1){
var statearr_29262_29291 = state_29237__$1;
(statearr_29262_29291[(1)] = (14));

} else {
var statearr_29263_29292 = state_29237__$1;
(statearr_29263_29292[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (9))){
var inst_29225 = (state_29237[(2)]);
var inst_29226 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29237__$1 = (function (){var statearr_29264 = state_29237;
(statearr_29264[(15)] = inst_29225);

return statearr_29264;
})();
if(cljs.core.truth_(inst_29226)){
var statearr_29265_29293 = state_29237__$1;
(statearr_29265_29293[(1)] = (21));

} else {
var statearr_29266_29294 = state_29237__$1;
(statearr_29266_29294[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (5))){
var inst_29181 = cljs.core.async.close_BANG_.call(null,out);
var state_29237__$1 = state_29237;
var statearr_29267_29295 = state_29237__$1;
(statearr_29267_29295[(2)] = inst_29181);

(statearr_29267_29295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (14))){
var inst_29203 = (state_29237[(7)]);
var inst_29205 = cljs.core.chunked_seq_QMARK_.call(null,inst_29203);
var state_29237__$1 = state_29237;
if(inst_29205){
var statearr_29268_29296 = state_29237__$1;
(statearr_29268_29296[(1)] = (17));

} else {
var statearr_29269_29297 = state_29237__$1;
(statearr_29269_29297[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (16))){
var inst_29221 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29270_29298 = state_29237__$1;
(statearr_29270_29298[(2)] = inst_29221);

(statearr_29270_29298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (10))){
var inst_29192 = (state_29237[(10)]);
var inst_29190 = (state_29237[(11)]);
var inst_29197 = cljs.core._nth.call(null,inst_29190,inst_29192);
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29237__$1,(13),out,inst_29197);
} else {
if((state_val_29238 === (18))){
var inst_29203 = (state_29237[(7)]);
var inst_29212 = cljs.core.first.call(null,inst_29203);
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29237__$1,(20),out,inst_29212);
} else {
if((state_val_29238 === (8))){
var inst_29191 = (state_29237[(8)]);
var inst_29192 = (state_29237[(10)]);
var inst_29194 = (inst_29192 < inst_29191);
var inst_29195 = inst_29194;
var state_29237__$1 = state_29237;
if(cljs.core.truth_(inst_29195)){
var statearr_29271_29299 = state_29237__$1;
(statearr_29271_29299[(1)] = (10));

} else {
var statearr_29272_29300 = state_29237__$1;
(statearr_29272_29300[(1)] = (11));

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
});})(c__27621__auto__))
;
return ((function (switch__27531__auto__,c__27621__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27532__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27532__auto____0 = (function (){
var statearr_29273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29273[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27532__auto__);

(statearr_29273[(1)] = (1));

return statearr_29273;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27532__auto____1 = (function (state_29237){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_29237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e29274){if((e29274 instanceof Object)){
var ex__27535__auto__ = e29274;
var statearr_29275_29301 = state_29237;
(statearr_29275_29301[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29302 = state_29237;
state_29237 = G__29302;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27532__auto__ = function(state_29237){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27532__auto____1.call(this,state_29237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27532__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27532__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__))
})();
var state__27623__auto__ = (function (){var statearr_29276 = f__27622__auto__.call(null);
(statearr_29276[(6)] = c__27621__auto__);

return statearr_29276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__))
);

return c__27621__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29304 = arguments.length;
switch (G__29304) {
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
var G__29307 = arguments.length;
switch (G__29307) {
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
var G__29310 = arguments.length;
switch (G__29310) {
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
var c__27621__auto___29357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___29357,out){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___29357,out){
return (function (state_29334){
var state_val_29335 = (state_29334[(1)]);
if((state_val_29335 === (7))){
var inst_29329 = (state_29334[(2)]);
var state_29334__$1 = state_29334;
var statearr_29336_29358 = state_29334__$1;
(statearr_29336_29358[(2)] = inst_29329);

(statearr_29336_29358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29335 === (1))){
var inst_29311 = null;
var state_29334__$1 = (function (){var statearr_29337 = state_29334;
(statearr_29337[(7)] = inst_29311);

return statearr_29337;
})();
var statearr_29338_29359 = state_29334__$1;
(statearr_29338_29359[(2)] = null);

(statearr_29338_29359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29335 === (4))){
var inst_29314 = (state_29334[(8)]);
var inst_29314__$1 = (state_29334[(2)]);
var inst_29315 = (inst_29314__$1 == null);
var inst_29316 = cljs.core.not.call(null,inst_29315);
var state_29334__$1 = (function (){var statearr_29339 = state_29334;
(statearr_29339[(8)] = inst_29314__$1);

return statearr_29339;
})();
if(inst_29316){
var statearr_29340_29360 = state_29334__$1;
(statearr_29340_29360[(1)] = (5));

} else {
var statearr_29341_29361 = state_29334__$1;
(statearr_29341_29361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29335 === (6))){
var state_29334__$1 = state_29334;
var statearr_29342_29362 = state_29334__$1;
(statearr_29342_29362[(2)] = null);

(statearr_29342_29362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29335 === (3))){
var inst_29331 = (state_29334[(2)]);
var inst_29332 = cljs.core.async.close_BANG_.call(null,out);
var state_29334__$1 = (function (){var statearr_29343 = state_29334;
(statearr_29343[(9)] = inst_29331);

return statearr_29343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29334__$1,inst_29332);
} else {
if((state_val_29335 === (2))){
var state_29334__$1 = state_29334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29334__$1,(4),ch);
} else {
if((state_val_29335 === (11))){
var inst_29314 = (state_29334[(8)]);
var inst_29323 = (state_29334[(2)]);
var inst_29311 = inst_29314;
var state_29334__$1 = (function (){var statearr_29344 = state_29334;
(statearr_29344[(7)] = inst_29311);

(statearr_29344[(10)] = inst_29323);

return statearr_29344;
})();
var statearr_29345_29363 = state_29334__$1;
(statearr_29345_29363[(2)] = null);

(statearr_29345_29363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29335 === (9))){
var inst_29314 = (state_29334[(8)]);
var state_29334__$1 = state_29334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29334__$1,(11),out,inst_29314);
} else {
if((state_val_29335 === (5))){
var inst_29311 = (state_29334[(7)]);
var inst_29314 = (state_29334[(8)]);
var inst_29318 = cljs.core._EQ_.call(null,inst_29314,inst_29311);
var state_29334__$1 = state_29334;
if(inst_29318){
var statearr_29347_29364 = state_29334__$1;
(statearr_29347_29364[(1)] = (8));

} else {
var statearr_29348_29365 = state_29334__$1;
(statearr_29348_29365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29335 === (10))){
var inst_29326 = (state_29334[(2)]);
var state_29334__$1 = state_29334;
var statearr_29349_29366 = state_29334__$1;
(statearr_29349_29366[(2)] = inst_29326);

(statearr_29349_29366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29335 === (8))){
var inst_29311 = (state_29334[(7)]);
var tmp29346 = inst_29311;
var inst_29311__$1 = tmp29346;
var state_29334__$1 = (function (){var statearr_29350 = state_29334;
(statearr_29350[(7)] = inst_29311__$1);

return statearr_29350;
})();
var statearr_29351_29367 = state_29334__$1;
(statearr_29351_29367[(2)] = null);

(statearr_29351_29367[(1)] = (2));


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
});})(c__27621__auto___29357,out))
;
return ((function (switch__27531__auto__,c__27621__auto___29357,out){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_29352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29352[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_29352[(1)] = (1));

return statearr_29352;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_29334){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_29334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e29353){if((e29353 instanceof Object)){
var ex__27535__auto__ = e29353;
var statearr_29354_29368 = state_29334;
(statearr_29354_29368[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29369 = state_29334;
state_29334 = G__29369;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_29334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_29334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___29357,out))
})();
var state__27623__auto__ = (function (){var statearr_29355 = f__27622__auto__.call(null);
(statearr_29355[(6)] = c__27621__auto___29357);

return statearr_29355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___29357,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29371 = arguments.length;
switch (G__29371) {
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
var c__27621__auto___29437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___29437,out){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___29437,out){
return (function (state_29409){
var state_val_29410 = (state_29409[(1)]);
if((state_val_29410 === (7))){
var inst_29405 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
var statearr_29411_29438 = state_29409__$1;
(statearr_29411_29438[(2)] = inst_29405);

(statearr_29411_29438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (1))){
var inst_29372 = (new Array(n));
var inst_29373 = inst_29372;
var inst_29374 = (0);
var state_29409__$1 = (function (){var statearr_29412 = state_29409;
(statearr_29412[(7)] = inst_29374);

(statearr_29412[(8)] = inst_29373);

return statearr_29412;
})();
var statearr_29413_29439 = state_29409__$1;
(statearr_29413_29439[(2)] = null);

(statearr_29413_29439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (4))){
var inst_29377 = (state_29409[(9)]);
var inst_29377__$1 = (state_29409[(2)]);
var inst_29378 = (inst_29377__$1 == null);
var inst_29379 = cljs.core.not.call(null,inst_29378);
var state_29409__$1 = (function (){var statearr_29414 = state_29409;
(statearr_29414[(9)] = inst_29377__$1);

return statearr_29414;
})();
if(inst_29379){
var statearr_29415_29440 = state_29409__$1;
(statearr_29415_29440[(1)] = (5));

} else {
var statearr_29416_29441 = state_29409__$1;
(statearr_29416_29441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (15))){
var inst_29399 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
var statearr_29417_29442 = state_29409__$1;
(statearr_29417_29442[(2)] = inst_29399);

(statearr_29417_29442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (13))){
var state_29409__$1 = state_29409;
var statearr_29418_29443 = state_29409__$1;
(statearr_29418_29443[(2)] = null);

(statearr_29418_29443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (6))){
var inst_29374 = (state_29409[(7)]);
var inst_29395 = (inst_29374 > (0));
var state_29409__$1 = state_29409;
if(cljs.core.truth_(inst_29395)){
var statearr_29419_29444 = state_29409__$1;
(statearr_29419_29444[(1)] = (12));

} else {
var statearr_29420_29445 = state_29409__$1;
(statearr_29420_29445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (3))){
var inst_29407 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29409__$1,inst_29407);
} else {
if((state_val_29410 === (12))){
var inst_29373 = (state_29409[(8)]);
var inst_29397 = cljs.core.vec.call(null,inst_29373);
var state_29409__$1 = state_29409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29409__$1,(15),out,inst_29397);
} else {
if((state_val_29410 === (2))){
var state_29409__$1 = state_29409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29409__$1,(4),ch);
} else {
if((state_val_29410 === (11))){
var inst_29389 = (state_29409[(2)]);
var inst_29390 = (new Array(n));
var inst_29373 = inst_29390;
var inst_29374 = (0);
var state_29409__$1 = (function (){var statearr_29421 = state_29409;
(statearr_29421[(7)] = inst_29374);

(statearr_29421[(8)] = inst_29373);

(statearr_29421[(10)] = inst_29389);

return statearr_29421;
})();
var statearr_29422_29446 = state_29409__$1;
(statearr_29422_29446[(2)] = null);

(statearr_29422_29446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (9))){
var inst_29373 = (state_29409[(8)]);
var inst_29387 = cljs.core.vec.call(null,inst_29373);
var state_29409__$1 = state_29409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29409__$1,(11),out,inst_29387);
} else {
if((state_val_29410 === (5))){
var inst_29374 = (state_29409[(7)]);
var inst_29377 = (state_29409[(9)]);
var inst_29382 = (state_29409[(11)]);
var inst_29373 = (state_29409[(8)]);
var inst_29381 = (inst_29373[inst_29374] = inst_29377);
var inst_29382__$1 = (inst_29374 + (1));
var inst_29383 = (inst_29382__$1 < n);
var state_29409__$1 = (function (){var statearr_29423 = state_29409;
(statearr_29423[(12)] = inst_29381);

(statearr_29423[(11)] = inst_29382__$1);

return statearr_29423;
})();
if(cljs.core.truth_(inst_29383)){
var statearr_29424_29447 = state_29409__$1;
(statearr_29424_29447[(1)] = (8));

} else {
var statearr_29425_29448 = state_29409__$1;
(statearr_29425_29448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (14))){
var inst_29402 = (state_29409[(2)]);
var inst_29403 = cljs.core.async.close_BANG_.call(null,out);
var state_29409__$1 = (function (){var statearr_29427 = state_29409;
(statearr_29427[(13)] = inst_29402);

return statearr_29427;
})();
var statearr_29428_29449 = state_29409__$1;
(statearr_29428_29449[(2)] = inst_29403);

(statearr_29428_29449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (10))){
var inst_29393 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
var statearr_29429_29450 = state_29409__$1;
(statearr_29429_29450[(2)] = inst_29393);

(statearr_29429_29450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (8))){
var inst_29382 = (state_29409[(11)]);
var inst_29373 = (state_29409[(8)]);
var tmp29426 = inst_29373;
var inst_29373__$1 = tmp29426;
var inst_29374 = inst_29382;
var state_29409__$1 = (function (){var statearr_29430 = state_29409;
(statearr_29430[(7)] = inst_29374);

(statearr_29430[(8)] = inst_29373__$1);

return statearr_29430;
})();
var statearr_29431_29451 = state_29409__$1;
(statearr_29431_29451[(2)] = null);

(statearr_29431_29451[(1)] = (2));


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
});})(c__27621__auto___29437,out))
;
return ((function (switch__27531__auto__,c__27621__auto___29437,out){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_29432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29432[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_29432[(1)] = (1));

return statearr_29432;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_29409){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_29409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e29433){if((e29433 instanceof Object)){
var ex__27535__auto__ = e29433;
var statearr_29434_29452 = state_29409;
(statearr_29434_29452[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29453 = state_29409;
state_29409 = G__29453;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_29409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_29409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___29437,out))
})();
var state__27623__auto__ = (function (){var statearr_29435 = f__27622__auto__.call(null);
(statearr_29435[(6)] = c__27621__auto___29437);

return statearr_29435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___29437,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29455 = arguments.length;
switch (G__29455) {
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
var c__27621__auto___29525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___29525,out){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___29525,out){
return (function (state_29497){
var state_val_29498 = (state_29497[(1)]);
if((state_val_29498 === (7))){
var inst_29493 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29499_29526 = state_29497__$1;
(statearr_29499_29526[(2)] = inst_29493);

(statearr_29499_29526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (1))){
var inst_29456 = [];
var inst_29457 = inst_29456;
var inst_29458 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29497__$1 = (function (){var statearr_29500 = state_29497;
(statearr_29500[(7)] = inst_29457);

(statearr_29500[(8)] = inst_29458);

return statearr_29500;
})();
var statearr_29501_29527 = state_29497__$1;
(statearr_29501_29527[(2)] = null);

(statearr_29501_29527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (4))){
var inst_29461 = (state_29497[(9)]);
var inst_29461__$1 = (state_29497[(2)]);
var inst_29462 = (inst_29461__$1 == null);
var inst_29463 = cljs.core.not.call(null,inst_29462);
var state_29497__$1 = (function (){var statearr_29502 = state_29497;
(statearr_29502[(9)] = inst_29461__$1);

return statearr_29502;
})();
if(inst_29463){
var statearr_29503_29528 = state_29497__$1;
(statearr_29503_29528[(1)] = (5));

} else {
var statearr_29504_29529 = state_29497__$1;
(statearr_29504_29529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (15))){
var inst_29487 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29505_29530 = state_29497__$1;
(statearr_29505_29530[(2)] = inst_29487);

(statearr_29505_29530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (13))){
var state_29497__$1 = state_29497;
var statearr_29506_29531 = state_29497__$1;
(statearr_29506_29531[(2)] = null);

(statearr_29506_29531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (6))){
var inst_29457 = (state_29497[(7)]);
var inst_29482 = inst_29457.length;
var inst_29483 = (inst_29482 > (0));
var state_29497__$1 = state_29497;
if(cljs.core.truth_(inst_29483)){
var statearr_29507_29532 = state_29497__$1;
(statearr_29507_29532[(1)] = (12));

} else {
var statearr_29508_29533 = state_29497__$1;
(statearr_29508_29533[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (3))){
var inst_29495 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29497__$1,inst_29495);
} else {
if((state_val_29498 === (12))){
var inst_29457 = (state_29497[(7)]);
var inst_29485 = cljs.core.vec.call(null,inst_29457);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29497__$1,(15),out,inst_29485);
} else {
if((state_val_29498 === (2))){
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29497__$1,(4),ch);
} else {
if((state_val_29498 === (11))){
var inst_29465 = (state_29497[(10)]);
var inst_29461 = (state_29497[(9)]);
var inst_29475 = (state_29497[(2)]);
var inst_29476 = [];
var inst_29477 = inst_29476.push(inst_29461);
var inst_29457 = inst_29476;
var inst_29458 = inst_29465;
var state_29497__$1 = (function (){var statearr_29509 = state_29497;
(statearr_29509[(11)] = inst_29475);

(statearr_29509[(12)] = inst_29477);

(statearr_29509[(7)] = inst_29457);

(statearr_29509[(8)] = inst_29458);

return statearr_29509;
})();
var statearr_29510_29534 = state_29497__$1;
(statearr_29510_29534[(2)] = null);

(statearr_29510_29534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (9))){
var inst_29457 = (state_29497[(7)]);
var inst_29473 = cljs.core.vec.call(null,inst_29457);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29497__$1,(11),out,inst_29473);
} else {
if((state_val_29498 === (5))){
var inst_29465 = (state_29497[(10)]);
var inst_29461 = (state_29497[(9)]);
var inst_29458 = (state_29497[(8)]);
var inst_29465__$1 = f.call(null,inst_29461);
var inst_29466 = cljs.core._EQ_.call(null,inst_29465__$1,inst_29458);
var inst_29467 = cljs.core.keyword_identical_QMARK_.call(null,inst_29458,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29468 = ((inst_29466) || (inst_29467));
var state_29497__$1 = (function (){var statearr_29511 = state_29497;
(statearr_29511[(10)] = inst_29465__$1);

return statearr_29511;
})();
if(cljs.core.truth_(inst_29468)){
var statearr_29512_29535 = state_29497__$1;
(statearr_29512_29535[(1)] = (8));

} else {
var statearr_29513_29536 = state_29497__$1;
(statearr_29513_29536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (14))){
var inst_29490 = (state_29497[(2)]);
var inst_29491 = cljs.core.async.close_BANG_.call(null,out);
var state_29497__$1 = (function (){var statearr_29515 = state_29497;
(statearr_29515[(13)] = inst_29490);

return statearr_29515;
})();
var statearr_29516_29537 = state_29497__$1;
(statearr_29516_29537[(2)] = inst_29491);

(statearr_29516_29537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (10))){
var inst_29480 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29517_29538 = state_29497__$1;
(statearr_29517_29538[(2)] = inst_29480);

(statearr_29517_29538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (8))){
var inst_29465 = (state_29497[(10)]);
var inst_29461 = (state_29497[(9)]);
var inst_29457 = (state_29497[(7)]);
var inst_29470 = inst_29457.push(inst_29461);
var tmp29514 = inst_29457;
var inst_29457__$1 = tmp29514;
var inst_29458 = inst_29465;
var state_29497__$1 = (function (){var statearr_29518 = state_29497;
(statearr_29518[(14)] = inst_29470);

(statearr_29518[(7)] = inst_29457__$1);

(statearr_29518[(8)] = inst_29458);

return statearr_29518;
})();
var statearr_29519_29539 = state_29497__$1;
(statearr_29519_29539[(2)] = null);

(statearr_29519_29539[(1)] = (2));


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
});})(c__27621__auto___29525,out))
;
return ((function (switch__27531__auto__,c__27621__auto___29525,out){
return (function() {
var cljs$core$async$state_machine__27532__auto__ = null;
var cljs$core$async$state_machine__27532__auto____0 = (function (){
var statearr_29520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29520[(0)] = cljs$core$async$state_machine__27532__auto__);

(statearr_29520[(1)] = (1));

return statearr_29520;
});
var cljs$core$async$state_machine__27532__auto____1 = (function (state_29497){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_29497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e29521){if((e29521 instanceof Object)){
var ex__27535__auto__ = e29521;
var statearr_29522_29540 = state_29497;
(statearr_29522_29540[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29541 = state_29497;
state_29497 = G__29541;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
cljs$core$async$state_machine__27532__auto__ = function(state_29497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27532__auto____1.call(this,state_29497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27532__auto____0;
cljs$core$async$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27532__auto____1;
return cljs$core$async$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___29525,out))
})();
var state__27623__auto__ = (function (){var statearr_29523 = f__27622__auto__.call(null);
(statearr_29523[(6)] = c__27621__auto___29525);

return statearr_29523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___29525,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525301024808

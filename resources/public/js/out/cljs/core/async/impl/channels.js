// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
<<<<<<< HEAD
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523 !== 'undefined'){
=======
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414 !== 'undefined'){
>>>>>>> sqlite
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523 = (function (val,meta56524){
this.val = val;
this.meta56524 = meta56524;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56525,meta56524__$1){
var self__ = this;
var _56525__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523(self__.val,meta56524__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56525){
var self__ = this;
var _56525__$1 = this;
return self__.meta56524;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
=======
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414 = (function (val,meta76415){
this.val = val;
this.meta76415 = meta76415;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76416,meta76415__$1){
var self__ = this;
var _76416__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414(self__.val,meta76415__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76416){
var self__ = this;
var _76416__$1 = this;
return self__.meta76415;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
>>>>>>> sqlite
var self__ = this;
var ___$1 = this;
return self__.val;
});

<<<<<<< HEAD
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta56524","meta56524",-474995543,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels56523";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels56523");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels56523.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels56523 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels56523(val__$1,meta56524){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523(val__$1,meta56524));
=======
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta76415","meta76415",432221303,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels76414";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels76414");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels76414.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels76414 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels76414(val__$1,meta76415){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414(val__$1,meta76415));
>>>>>>> sqlite
});

}

<<<<<<< HEAD
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels56523(val,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels76414(val,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> sqlite
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async.impl.channels/PutBox");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if(((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
<<<<<<< HEAD
var putter_56537 = self__.puts.pop();
if((putter_56537 == null)){
} else {
var put_handler_56538 = putter_56537.handler;
var val_56539 = putter_56537.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_56538)){
var put_cb_56540 = cljs.core.async.impl.protocols.commit.call(null,put_handler_56538);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_56540,put_handler_56538,val_56539,putter_56537,this$__$1){
return (function (){
return put_cb_56540.call(null,true);
});})(put_cb_56540,put_handler_56538,val_56539,putter_56537,this$__$1))
=======
var putter_76428 = self__.puts.pop();
if((putter_76428 == null)){
} else {
var put_handler_76429 = putter_76428.handler;
var val_76430 = putter_76428.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_76429)){
var put_cb_76431 = cljs.core.async.impl.protocols.commit.call(null,put_handler_76429);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_76431,put_handler_76429,val_76430,putter_76428,this$__$1){
return (function (){
return put_cb_76431.call(null,true);
});})(put_cb_76431,put_handler_76429,val_76430,putter_76428,this$__$1))
>>>>>>> sqlite
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = self__.buf;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__3911__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
<<<<<<< HEAD
var G__56541 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
=======
var G__76432 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
>>>>>>> sqlite
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
<<<<<<< HEAD
takers = G__56541;
continue;
} else {
var G__56542 = takers;
takers = G__56542;
=======
takers = G__76432;
continue;
} else {
var G__76433 = takers;
takers = G__76433;
>>>>>>> sqlite
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
<<<<<<< HEAD
var seq__56526_56543 = cljs.core.seq.call(null,take_cbs);
var chunk__56527_56544 = null;
var count__56528_56545 = (0);
var i__56529_56546 = (0);
while(true){
if((i__56529_56546 < count__56528_56545)){
var f_56547 = cljs.core._nth.call(null,chunk__56527_56544,i__56529_56546);
cljs.core.async.impl.dispatch.run.call(null,f_56547);


var G__56548 = seq__56526_56543;
var G__56549 = chunk__56527_56544;
var G__56550 = count__56528_56545;
var G__56551 = (i__56529_56546 + (1));
seq__56526_56543 = G__56548;
chunk__56527_56544 = G__56549;
count__56528_56545 = G__56550;
i__56529_56546 = G__56551;
continue;
} else {
var temp__5457__auto___56552 = cljs.core.seq.call(null,seq__56526_56543);
if(temp__5457__auto___56552){
var seq__56526_56553__$1 = temp__5457__auto___56552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56526_56553__$1)){
var c__4319__auto___56554 = cljs.core.chunk_first.call(null,seq__56526_56553__$1);
var G__56555 = cljs.core.chunk_rest.call(null,seq__56526_56553__$1);
var G__56556 = c__4319__auto___56554;
var G__56557 = cljs.core.count.call(null,c__4319__auto___56554);
var G__56558 = (0);
seq__56526_56543 = G__56555;
chunk__56527_56544 = G__56556;
count__56528_56545 = G__56557;
i__56529_56546 = G__56558;
continue;
} else {
var f_56559 = cljs.core.first.call(null,seq__56526_56553__$1);
cljs.core.async.impl.dispatch.run.call(null,f_56559);


var G__56560 = cljs.core.next.call(null,seq__56526_56553__$1);
var G__56561 = null;
var G__56562 = (0);
var G__56563 = (0);
seq__56526_56543 = G__56560;
chunk__56527_56544 = G__56561;
count__56528_56545 = G__56562;
i__56529_56546 = G__56563;
=======
var seq__76417_76434 = cljs.core.seq.call(null,take_cbs);
var chunk__76418_76435 = null;
var count__76419_76436 = (0);
var i__76420_76437 = (0);
while(true){
if((i__76420_76437 < count__76419_76436)){
var f_76438 = cljs.core._nth.call(null,chunk__76418_76435,i__76420_76437);
cljs.core.async.impl.dispatch.run.call(null,f_76438);


var G__76439 = seq__76417_76434;
var G__76440 = chunk__76418_76435;
var G__76441 = count__76419_76436;
var G__76442 = (i__76420_76437 + (1));
seq__76417_76434 = G__76439;
chunk__76418_76435 = G__76440;
count__76419_76436 = G__76441;
i__76420_76437 = G__76442;
continue;
} else {
var temp__5457__auto___76443 = cljs.core.seq.call(null,seq__76417_76434);
if(temp__5457__auto___76443){
var seq__76417_76444__$1 = temp__5457__auto___76443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76417_76444__$1)){
var c__4319__auto___76445 = cljs.core.chunk_first.call(null,seq__76417_76444__$1);
var G__76446 = cljs.core.chunk_rest.call(null,seq__76417_76444__$1);
var G__76447 = c__4319__auto___76445;
var G__76448 = cljs.core.count.call(null,c__4319__auto___76445);
var G__76449 = (0);
seq__76417_76434 = G__76446;
chunk__76418_76435 = G__76447;
count__76419_76436 = G__76448;
i__76420_76437 = G__76449;
continue;
} else {
var f_76450 = cljs.core.first.call(null,seq__76417_76444__$1);
cljs.core.async.impl.dispatch.run.call(null,f_76450);


var G__76451 = cljs.core.next.call(null,seq__76417_76444__$1);
var G__76452 = null;
var G__76453 = (0);
var G__76454 = (0);
seq__76417_76434 = G__76451;
chunk__76418_76435 = G__76452;
count__76419_76436 = G__76453;
i__76420_76437 = G__76454;
>>>>>>> sqlite
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if(((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5455__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
<<<<<<< HEAD
var vec__56530 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
=======
var vec__76421 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
>>>>>>> sqlite
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__3911__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__3911__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))){
<<<<<<< HEAD
var G__56564 = cbs__$1;
cbs = G__56564;
=======
var G__76455 = cbs__$1;
cbs = G__76455;
>>>>>>> sqlite
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
<<<<<<< HEAD
var done_QMARK_ = cljs.core.nth.call(null,vec__56530,(0),null);
var cbs = cljs.core.nth.call(null,vec__56530,(1),null);
=======
var done_QMARK_ = cljs.core.nth.call(null,vec__76421,(0),null);
var cbs = cljs.core.nth.call(null,vec__76421,(1),null);
>>>>>>> sqlite
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

<<<<<<< HEAD
var seq__56533_56565 = cljs.core.seq.call(null,cbs);
var chunk__56534_56566 = null;
var count__56535_56567 = (0);
var i__56536_56568 = (0);
while(true){
if((i__56536_56568 < count__56535_56567)){
var cb_56569 = cljs.core._nth.call(null,chunk__56534_56566,i__56536_56568);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__56533_56565,chunk__56534_56566,count__56535_56567,i__56536_56568,cb_56569,val,vec__56530,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_56569.call(null,true);
});})(seq__56533_56565,chunk__56534_56566,count__56535_56567,i__56536_56568,cb_56569,val,vec__56530,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);


var G__56570 = seq__56533_56565;
var G__56571 = chunk__56534_56566;
var G__56572 = count__56535_56567;
var G__56573 = (i__56536_56568 + (1));
seq__56533_56565 = G__56570;
chunk__56534_56566 = G__56571;
count__56535_56567 = G__56572;
i__56536_56568 = G__56573;
continue;
} else {
var temp__5457__auto___56574 = cljs.core.seq.call(null,seq__56533_56565);
if(temp__5457__auto___56574){
var seq__56533_56575__$1 = temp__5457__auto___56574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56533_56575__$1)){
var c__4319__auto___56576 = cljs.core.chunk_first.call(null,seq__56533_56575__$1);
var G__56577 = cljs.core.chunk_rest.call(null,seq__56533_56575__$1);
var G__56578 = c__4319__auto___56576;
var G__56579 = cljs.core.count.call(null,c__4319__auto___56576);
var G__56580 = (0);
seq__56533_56565 = G__56577;
chunk__56534_56566 = G__56578;
count__56535_56567 = G__56579;
i__56536_56568 = G__56580;
continue;
} else {
var cb_56581 = cljs.core.first.call(null,seq__56533_56575__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__56533_56565,chunk__56534_56566,count__56535_56567,i__56536_56568,cb_56581,seq__56533_56575__$1,temp__5457__auto___56574,val,vec__56530,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_56581.call(null,true);
});})(seq__56533_56565,chunk__56534_56566,count__56535_56567,i__56536_56568,cb_56581,seq__56533_56575__$1,temp__5457__auto___56574,val,vec__56530,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);


var G__56582 = cljs.core.next.call(null,seq__56533_56575__$1);
var G__56583 = null;
var G__56584 = (0);
var G__56585 = (0);
seq__56533_56565 = G__56582;
chunk__56534_56566 = G__56583;
count__56535_56567 = G__56584;
i__56536_56568 = G__56585;
=======
var seq__76424_76456 = cljs.core.seq.call(null,cbs);
var chunk__76425_76457 = null;
var count__76426_76458 = (0);
var i__76427_76459 = (0);
while(true){
if((i__76427_76459 < count__76426_76458)){
var cb_76460 = cljs.core._nth.call(null,chunk__76425_76457,i__76427_76459);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__76424_76456,chunk__76425_76457,count__76426_76458,i__76427_76459,cb_76460,val,vec__76421,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_76460.call(null,true);
});})(seq__76424_76456,chunk__76425_76457,count__76426_76458,i__76427_76459,cb_76460,val,vec__76421,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);


var G__76461 = seq__76424_76456;
var G__76462 = chunk__76425_76457;
var G__76463 = count__76426_76458;
var G__76464 = (i__76427_76459 + (1));
seq__76424_76456 = G__76461;
chunk__76425_76457 = G__76462;
count__76426_76458 = G__76463;
i__76427_76459 = G__76464;
continue;
} else {
var temp__5457__auto___76465 = cljs.core.seq.call(null,seq__76424_76456);
if(temp__5457__auto___76465){
var seq__76424_76466__$1 = temp__5457__auto___76465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76424_76466__$1)){
var c__4319__auto___76467 = cljs.core.chunk_first.call(null,seq__76424_76466__$1);
var G__76468 = cljs.core.chunk_rest.call(null,seq__76424_76466__$1);
var G__76469 = c__4319__auto___76467;
var G__76470 = cljs.core.count.call(null,c__4319__auto___76467);
var G__76471 = (0);
seq__76424_76456 = G__76468;
chunk__76425_76457 = G__76469;
count__76426_76458 = G__76470;
i__76427_76459 = G__76471;
continue;
} else {
var cb_76472 = cljs.core.first.call(null,seq__76424_76466__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__76424_76456,chunk__76425_76457,count__76426_76458,i__76427_76459,cb_76472,seq__76424_76466__$1,temp__5457__auto___76465,val,vec__76421,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_76472.call(null,true);
});})(seq__76424_76456,chunk__76425_76457,count__76426_76458,i__76427_76459,cb_76472,seq__76424_76466__$1,temp__5457__auto___76465,val,vec__76421,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);


var G__76473 = cljs.core.next.call(null,seq__76424_76466__$1);
var G__76474 = null;
var G__76475 = (0);
var G__76476 = (0);
seq__76424_76456 = G__76473;
chunk__76425_76457 = G__76474;
count__76426_76458 = G__76475;
i__76427_76459 = G__76476;
>>>>>>> sqlite
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__3911__auto__;
}
})())){
var has_val = (function (){var and__3911__auto__ = self__.buf;
if(cljs.core.truth_(and__3911__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__3911__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__3911__auto__ = self__.buf;
if(cljs.core.truth_(and__3911__auto__)){
return (self__.puts.length === (0));
} else {
return and__3911__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
<<<<<<< HEAD
var taker_56586 = self__.takes.pop();
if((taker_56586 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_56586)){
var take_cb_56587 = cljs.core.async.impl.protocols.commit.call(null,taker_56586);
var val_56588 = (cljs.core.truth_((function (){var and__3911__auto__ = self__.buf;
=======
var taker_76477 = self__.takes.pop();
if((taker_76477 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_76477)){
var take_cb_76478 = cljs.core.async.impl.protocols.commit.call(null,taker_76477);
var val_76479 = (cljs.core.truth_((function (){var and__3911__auto__ = self__.buf;
>>>>>>> sqlite
if(cljs.core.truth_(and__3911__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__3911__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
<<<<<<< HEAD
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_56587,val_56588,taker_56586,this$__$1){
return (function (){
return take_cb_56587.call(null,val_56588);
});})(take_cb_56587,val_56588,taker_56586,this$__$1))
=======
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_76478,val_76479,taker_76477,this$__$1){
return (function (){
return take_cb_76478.call(null,val_76479);
});})(take_cb_76478,val_76479,taker_76477,this$__$1))
>>>>>>> sqlite
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__3922__auto__ = exh;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
<<<<<<< HEAD
var G__56590 = arguments.length;
switch (G__56590) {
=======
var G__76481 = arguments.length;
switch (G__76481) {
>>>>>>> sqlite
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
<<<<<<< HEAD
var G__56594 = null;
var G__56594__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e56591){var t = e56591;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__56594__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e56592){var t = e56592;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__56594 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__56594__1.call(this,buf__$1);
case 2:
return G__56594__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__56594.cljs$core$IFn$_invoke$arity$1 = G__56594__1;
G__56594.cljs$core$IFn$_invoke$arity$2 = G__56594__2;
return G__56594;
=======
var G__76485 = null;
var G__76485__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e76482){var t = e76482;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__76485__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e76483){var t = e76483;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__76485 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__76485__1.call(this,buf__$1);
case 2:
return G__76485__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__76485.cljs$core$IFn$_invoke$arity$1 = G__76485__1;
G__76485.cljs$core$IFn$_invoke$arity$2 = G__76485__2;
return G__76485;
>>>>>>> sqlite
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


<<<<<<< HEAD
//# sourceMappingURL=channels.js.map?rel=1525389493869
=======
//# sourceMappingURL=channels.js.map?rel=1525389580281
>>>>>>> sqlite

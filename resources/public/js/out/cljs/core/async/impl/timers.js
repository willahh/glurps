// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
cljs.core.async.impl.timers.MAX_LEVEL = (15);
cljs.core.async.impl.timers.P = ((1) / (2));
cljs.core.async.impl.timers.random_level = (function cljs$core$async$impl$timers$random_level(var_args){
<<<<<<< HEAD
var G__57290 = arguments.length;
switch (G__57290) {
=======
var G__77176 = arguments.length;
switch (G__77176) {
>>>>>>> sqlite
case 0:
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.impl.timers.random_level.call(null,(0));
});

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1 = (function (level){
while(true){
if((((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))){
<<<<<<< HEAD
var G__57292 = (level + (1));
level = G__57292;
=======
var G__77178 = (level + (1));
level = G__77178;
>>>>>>> sqlite
continue;
} else {
return level;
}
break;
}
});

cljs.core.async.impl.timers.random_level.cljs$lang$maxFixedArity = 1;


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(null,self__.key,(new cljs.core.List(null,self__.val,null,(1),null)),(2),null));
});

cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipListNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"forward","forward",1083186224,null)], null);
});

cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async.impl.timers/SkipListNode");
});

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipListNode.
 */
cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});

cljs.core.async.impl.timers.skip_list_node = (function cljs$core$async$impl$timers$skip_list_node(var_args){
<<<<<<< HEAD
var G__57294 = arguments.length;
switch (G__57294) {
=======
var G__77180 = arguments.length;
switch (G__77180) {
>>>>>>> sqlite
case 1:
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1 = (function (level){
return cljs.core.async.impl.timers.skip_list_node.call(null,null,null,level);
});

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3 = (function (k,v,level){
var arr = (new Array((level + (1))));
<<<<<<< HEAD
var i_57296 = (0);
while(true){
if((i_57296 < arr.length)){
(arr[i_57296] = null);

var G__57297 = (i_57296 + (1));
i_57296 = G__57297;
=======
var i_77182 = (0);
while(true){
if((i_77182 < arr.length)){
(arr[i_77182] = null);

var G__77183 = (i_77182 + (1));
i_77182 = G__77183;
>>>>>>> sqlite
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});

cljs.core.async.impl.timers.skip_list_node.cljs$lang$maxFixedArity = 3;

cljs.core.async.impl.timers.least_greater_node = (function cljs$core$async$impl$timers$least_greater_node(var_args){
<<<<<<< HEAD
var G__57299 = arguments.length;
switch (G__57299) {
=======
var G__77185 = arguments.length;
switch (G__77185) {
>>>>>>> sqlite
case 3:
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3 = (function (x,k,level){
return cljs.core.async.impl.timers.least_greater_node.call(null,x,k,level,null);
});

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4 = (function (x,k,level,update){
while(true){
if(!((level < (0)))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__5455__auto__ = (((level < x__$1.forward.length))?(x__$1.forward[level]):null);
if(cljs.core.truth_(temp__5455__auto__)){
var x_SINGLEQUOTE_ = temp__5455__auto__;
if((x_SINGLEQUOTE_.key < k)){
<<<<<<< HEAD
var G__57301 = x_SINGLEQUOTE_;
x__$1 = G__57301;
=======
var G__77187 = x_SINGLEQUOTE_;
x__$1 = G__77187;
>>>>>>> sqlite
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

<<<<<<< HEAD
var G__57302 = x__$1;
var G__57303 = k;
var G__57304 = (level - (1));
var G__57305 = update;
x = G__57302;
k = G__57303;
level = G__57304;
update = G__57305;
=======
var G__77188 = x__$1;
var G__77189 = k;
var G__77190 = (level - (1));
var G__77191 = update;
x = G__77188;
k = G__77189;
level = G__77190;
update = G__77191;
>>>>>>> sqlite
continue;
} else {
return x;
}
break;
}
});

cljs.core.async.impl.timers.least_greater_node.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.async.impl.timers.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if(((!((x__$1 == null))) && ((x__$1.key === k)))){
return x__$1.val = v;
} else {
var new_level = cljs.core.async.impl.timers.random_level.call(null);
if((new_level > self__.level)){
<<<<<<< HEAD
var i_57306 = (self__.level + (1));
while(true){
if((i_57306 <= (new_level + (1)))){
(update[i_57306] = self__.header);

var G__57307 = (i_57306 + (1));
i_57306 = G__57307;
=======
var i_77192 = (self__.level + (1));
while(true){
if((i_77192 <= (new_level + (1)))){
(update[i_77192] = self__.header);

var G__77193 = (i_77192 + (1));
i_77192 = G__77193;
>>>>>>> sqlite
continue;
} else {
}
break;
}

self__.level = new_level;
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links = (update[i]).forward;
(x__$2.forward[i] = (links[i]));

return (links[i] = x__$2);
} else {
return null;
}
break;
}
}
});

cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (((x.forward.length === (0)))?null:(x.forward[(0)]));
if(((!((x__$1 == null))) && ((x__$1.key === k)))){
<<<<<<< HEAD
var i_57308 = (0);
while(true){
if((i_57308 <= self__.level)){
var links_57309 = (update[i_57308]).forward;
if((x__$1 === (((i_57308 < links_57309.length))?(links_57309[i_57308]):null))){
(links_57309[i_57308] = (x__$1.forward[i_57308]));

var G__57310 = (i_57308 + (1));
i_57308 = G__57310;
continue;
} else {
var G__57311 = (i_57308 + (1));
i_57308 = G__57311;
=======
var i_77194 = (0);
while(true){
if((i_77194 <= self__.level)){
var links_77195 = (update[i_77194]).forward;
if((x__$1 === (((i_77194 < links_77195.length))?(links_77195[i_77194]):null))){
(links_77195[i_77194] = (x__$1.forward[i_77194]));

var G__77196 = (i_77194 + (1));
i_77194 = G__77196;
continue;
} else {
var G__77197 = (i_77194 + (1));
i_77194 = G__77197;
>>>>>>> sqlite
continue;
}
} else {
}
break;
}

while(true){
if(((((((0) < self__.level)) && ((self__.level < self__.header.forward.length)))) && (((self__.header.forward[self__.level]) == null)))){
self__.level = (self__.level - (1));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});

cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if((x_SINGLEQUOTE_ == null)){
return null;
} else {
if((x_SINGLEQUOTE_.key >= k)){
return x_SINGLEQUOTE_;
} else {
<<<<<<< HEAD
var G__57312 = x_SINGLEQUOTE_;
x__$1 = G__57312;
=======
var G__77198 = x_SINGLEQUOTE_;
x__$1 = G__77198;
>>>>>>> sqlite
continue;
}
}
break;
}
})();
if(!((nx == null))){
<<<<<<< HEAD
var G__57313 = nx;
var G__57314 = (level__$1 - (1));
x = G__57313;
level__$1 = G__57314;
continue;
} else {
var G__57315 = x;
var G__57316 = (level__$1 - (1));
x = G__57315;
level__$1 = G__57316;
=======
var G__77199 = nx;
var G__77200 = (level__$1 - (1));
x = G__77199;
level__$1 = G__77200;
continue;
} else {
var G__77201 = x;
var G__77202 = (level__$1 - (1));
x = G__77201;
level__$1 = G__77202;
>>>>>>> sqlite
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if(!((x_SINGLEQUOTE_ == null))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
<<<<<<< HEAD
var G__57317 = x_SINGLEQUOTE_;
x__$1 = G__57317;
=======
var G__77203 = x_SINGLEQUOTE_;
x__$1 = G__77203;
>>>>>>> sqlite
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
<<<<<<< HEAD
var G__57318 = nx;
var G__57319 = (level__$1 - (1));
x = G__57318;
level__$1 = G__57319;
continue;
} else {
var G__57320 = x;
var G__57321 = (level__$1 - (1));
x = G__57320;
level__$1 = G__57321;
=======
var G__77204 = nx;
var G__77205 = (level__$1 - (1));
x = G__77204;
level__$1 = G__77205;
continue;
} else {
var G__77206 = x;
var G__77207 = (level__$1 - (1));
x = G__77206;
level__$1 = G__77207;
>>>>>>> sqlite
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = ((function (coll__$1){
return (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
if((node == null)){
return null;
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter.call(null,(node.forward[(0)])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[(0)]));
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async.impl.timers/SkipList");
});

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipList.
 */
cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
});

cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,(0)),(0)));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10);
/**
 * returns a channel that will close after msecs
 */
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout);
var or__3922__auto__ = (cljs.core.truth_((function (){var and__3911__auto__ = me;
if(cljs.core.truth_(and__3911__auto__)){
return (me.key < (timeout + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__3911__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);
cljs.core.async.impl.timers.timeouts_map.put(timeout,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__3922__auto__,timeout,me){
return (function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout);

return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__3922__auto__,timeout,me))
,msecs);

return timeout_channel;
}
});

<<<<<<< HEAD
//# sourceMappingURL=timers.js.map?rel=1525389495895
=======
//# sourceMappingURL=timers.js.map?rel=1525389582351
>>>>>>> sqlite

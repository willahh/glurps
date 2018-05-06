// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
<<<<<<< HEAD
return (function (p1__54366_SHARP_){
return (max === p1__54366_SHARP_);
=======
return (function (p1__70684_SHARP_){
return (max === p1__70684_SHARP_);
>>>>>>> sqlite
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
<<<<<<< HEAD
var G__54371 = arguments.length;
switch (G__54371) {
=======
var G__70689 = arguments.length;
switch (G__70689) {
>>>>>>> sqlite
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___54373 = arguments.length;
var i__4500__auto___54374 = (0);
while(true){
if((i__4500__auto___54374 < len__4499__auto___54373)){
args_arr__4514__auto__.push((arguments[i__4500__auto___54374]));

var G__54375 = (i__4500__auto___54374 + (1));
i__4500__auto___54374 = G__54375;
=======
var len__4499__auto___70691 = arguments.length;
var i__4500__auto___70692 = (0);
while(true){
if((i__4500__auto___70692 < len__4499__auto___70691)){
args_arr__4514__auto__.push((arguments[i__4500__auto___70692]));

var G__70693 = (i__4500__auto___70692 + (1));
i__4500__auto___70692 = G__70693;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

/** @this {Function} */
<<<<<<< HEAD
clojure.set.union.cljs$lang$applyTo = (function (seq54368){
var G__54369 = cljs.core.first.call(null,seq54368);
var seq54368__$1 = cljs.core.next.call(null,seq54368);
var G__54370 = cljs.core.first.call(null,seq54368__$1);
var seq54368__$2 = cljs.core.next.call(null,seq54368__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54369,G__54370,seq54368__$2);
=======
clojure.set.union.cljs$lang$applyTo = (function (seq70686){
var G__70687 = cljs.core.first.call(null,seq70686);
var seq70686__$1 = cljs.core.next.call(null,seq70686);
var G__70688 = cljs.core.first.call(null,seq70686__$1);
var seq70686__$2 = cljs.core.next.call(null,seq70686__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70687,G__70688,seq70686__$2);
>>>>>>> sqlite
});

clojure.set.union.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
<<<<<<< HEAD
var G__54381 = arguments.length;
switch (G__54381) {
=======
var G__70699 = arguments.length;
switch (G__70699) {
>>>>>>> sqlite
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___54383 = arguments.length;
var i__4500__auto___54384 = (0);
while(true){
if((i__4500__auto___54384 < len__4499__auto___54383)){
args_arr__4514__auto__.push((arguments[i__4500__auto___54384]));

var G__54385 = (i__4500__auto___54384 + (1));
i__4500__auto___54384 = G__54385;
=======
var len__4499__auto___70701 = arguments.length;
var i__4500__auto___70702 = (0);
while(true){
if((i__4500__auto___70702 < len__4499__auto___70701)){
args_arr__4514__auto__.push((arguments[i__4500__auto___70702]));

var G__70703 = (i__4500__auto___70702 + (1));
i__4500__auto___70702 = G__70703;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
<<<<<<< HEAD
var G__54386 = s2;
var G__54387 = s1;
s1 = G__54386;
s2 = G__54387;
=======
var G__70704 = s2;
var G__70705 = s1;
s1 = G__70704;
s2 = G__70705;
>>>>>>> sqlite
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
<<<<<<< HEAD
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__54376_SHARP_){
return (- cljs.core.count.call(null,p1__54376_SHARP_));
=======
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__70694_SHARP_){
return (- cljs.core.count.call(null,p1__70694_SHARP_));
>>>>>>> sqlite
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

/** @this {Function} */
<<<<<<< HEAD
clojure.set.intersection.cljs$lang$applyTo = (function (seq54378){
var G__54379 = cljs.core.first.call(null,seq54378);
var seq54378__$1 = cljs.core.next.call(null,seq54378);
var G__54380 = cljs.core.first.call(null,seq54378__$1);
var seq54378__$2 = cljs.core.next.call(null,seq54378__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54379,G__54380,seq54378__$2);
=======
clojure.set.intersection.cljs$lang$applyTo = (function (seq70696){
var G__70697 = cljs.core.first.call(null,seq70696);
var seq70696__$1 = cljs.core.next.call(null,seq70696);
var G__70698 = cljs.core.first.call(null,seq70696__$1);
var seq70696__$2 = cljs.core.next.call(null,seq70696__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70697,G__70698,seq70696__$2);
>>>>>>> sqlite
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
<<<<<<< HEAD
var G__54392 = arguments.length;
switch (G__54392) {
=======
var G__70710 = arguments.length;
switch (G__70710) {
>>>>>>> sqlite
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___54394 = arguments.length;
var i__4500__auto___54395 = (0);
while(true){
if((i__4500__auto___54395 < len__4499__auto___54394)){
args_arr__4514__auto__.push((arguments[i__4500__auto___54395]));

var G__54396 = (i__4500__auto___54395 + (1));
i__4500__auto___54395 = G__54396;
=======
var len__4499__auto___70712 = arguments.length;
var i__4500__auto___70713 = (0);
while(true){
if((i__4500__auto___70713 < len__4499__auto___70712)){
args_arr__4514__auto__.push((arguments[i__4500__auto___70713]));

var G__70714 = (i__4500__auto___70713 + (1));
i__4500__auto___70713 = G__70714;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

/** @this {Function} */
<<<<<<< HEAD
clojure.set.difference.cljs$lang$applyTo = (function (seq54389){
var G__54390 = cljs.core.first.call(null,seq54389);
var seq54389__$1 = cljs.core.next.call(null,seq54389);
var G__54391 = cljs.core.first.call(null,seq54389__$1);
var seq54389__$2 = cljs.core.next.call(null,seq54389__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54390,G__54391,seq54389__$2);
=======
clojure.set.difference.cljs$lang$applyTo = (function (seq70707){
var G__70708 = cljs.core.first.call(null,seq70707);
var seq70707__$1 = cljs.core.next.call(null,seq70707);
var G__70709 = cljs.core.first.call(null,seq70707__$1);
var seq70707__$2 = cljs.core.next.call(null,seq70707__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70708,G__70709,seq70707__$2);
>>>>>>> sqlite
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);

/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
<<<<<<< HEAD
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__54397_SHARP_){
return cljs.core.select_keys.call(null,p1__54397_SHARP_,ks);
=======
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__70715_SHARP_){
return cljs.core.select_keys.call(null,p1__70715_SHARP_,ks);
>>>>>>> sqlite
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (m,p__54398){
var vec__54399 = p__54398;
var old = cljs.core.nth.call(null,vec__54399,(0),null);
var new$ = cljs.core.nth.call(null,vec__54399,(1),null);
=======
return cljs.core.reduce.call(null,(function (m,p__70716){
var vec__70717 = p__70716;
var old = cljs.core.nth.call(null,vec__70717,(0),null);
var new$ = cljs.core.nth.call(null,vec__70717,(1),null);
>>>>>>> sqlite
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
<<<<<<< HEAD
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__54402_SHARP_){
return clojure.set.rename_keys.call(null,p1__54402_SHARP_,kmap);
=======
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__70720_SHARP_){
return clojure.set.rename_keys.call(null,p1__70720_SHARP_,kmap);
>>>>>>> sqlite
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (m__$1,p__54403){
var vec__54404 = p__54403;
var k = cljs.core.nth.call(null,vec__54404,(0),null);
var v = cljs.core.nth.call(null,vec__54404,(1),null);
=======
return cljs.core.reduce.call(null,(function (m__$1,p__70721){
var vec__70722 = p__70721;
var k = cljs.core.nth.call(null,vec__70722,(0),null);
var v = cljs.core.nth.call(null,vec__70722,(1),null);
>>>>>>> sqlite
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
<<<<<<< HEAD
var G__54412 = arguments.length;
switch (G__54412) {
=======
var G__70730 = arguments.length;
switch (G__70730) {
>>>>>>> sqlite
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if(((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel)))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
<<<<<<< HEAD
var vec__54413 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__54413,(0),null);
var s = cljs.core.nth.call(null,vec__54413,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__54413,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__54413,r,s,idx){
return (function (p1__54407_SHARP_,p2__54408_SHARP_){
return cljs.core.conj.call(null,p1__54407_SHARP_,cljs.core.merge.call(null,p2__54408_SHARP_,x));
});})(found,ks,vec__54413,r,s,idx))
=======
var vec__70731 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__70731,(0),null);
var s = cljs.core.nth.call(null,vec__70731,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__70731,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__70731,r,s,idx){
return (function (p1__70725_SHARP_,p2__70726_SHARP_){
return cljs.core.conj.call(null,p1__70725_SHARP_,cljs.core.merge.call(null,p2__70726_SHARP_,x));
});})(found,ks,vec__70731,r,s,idx))
>>>>>>> sqlite
,ret,found);
} else {
return ret;
}
<<<<<<< HEAD
});})(ks,vec__54413,r,s,idx))
=======
});})(ks,vec__70731,r,s,idx))
>>>>>>> sqlite
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
<<<<<<< HEAD
var vec__54416 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__54416,(0),null);
var s = cljs.core.nth.call(null,vec__54416,(1),null);
var k = cljs.core.nth.call(null,vec__54416,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__54416,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__54416,r,s,k,idx){
return (function (p1__54409_SHARP_,p2__54410_SHARP_){
return cljs.core.conj.call(null,p1__54409_SHARP_,cljs.core.merge.call(null,p2__54410_SHARP_,x));
});})(found,vec__54416,r,s,k,idx))
=======
var vec__70734 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__70734,(0),null);
var s = cljs.core.nth.call(null,vec__70734,(1),null);
var k = cljs.core.nth.call(null,vec__70734,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__70734,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__70734,r,s,k,idx){
return (function (p1__70727_SHARP_,p2__70728_SHARP_){
return cljs.core.conj.call(null,p1__70727_SHARP_,cljs.core.merge.call(null,p2__70728_SHARP_,x));
});})(found,vec__70734,r,s,k,idx))
>>>>>>> sqlite
,ret,found);
} else {
return ret;
}
<<<<<<< HEAD
});})(vec__54416,r,s,k,idx))
=======
});})(vec__70734,r,s,k,idx))
>>>>>>> sqlite
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;

/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
<<<<<<< HEAD
return (((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__54420_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__54420_SHARP_);
=======
return (((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__70738_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__70738_SHARP_);
>>>>>>> sqlite
}),set1)));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
<<<<<<< HEAD
return (((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__54421_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__54421_SHARP_);
}),set2)));
});

//# sourceMappingURL=set.js.map?rel=1525389489264
=======
return (((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__70739_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__70739_SHARP_);
}),set2)));
});

//# sourceMappingURL=set.js.map?rel=1525389568569
>>>>>>> sqlite

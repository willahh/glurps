// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined'))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___64627 = arguments.length;
var i__4500__auto___64628 = (0);
while(true){
if((i__4500__auto___64628 < len__4499__auto___64627)){
args__4502__auto__.push((arguments[i__4500__auto___64628]));

var G__64629 = (i__4500__auto___64628 + (1));
i__4500__auto___64628 = G__64629;
=======
var len__4499__auto___73604 = arguments.length;
var i__4500__auto___73605 = (0);
while(true){
if((i__4500__auto___73605 < len__4499__auto___73604)){
args__4502__auto__.push((arguments[i__4500__auto___73605]));

var G__73606 = (i__4500__auto___73605 + (1));
i__4500__auto___73605 = G__73606;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq64626){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64626));
=======
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq73603){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73603));
>>>>>>> sqlite
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined'))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___64631 = arguments.length;
var i__4500__auto___64632 = (0);
while(true){
if((i__4500__auto___64632 < len__4499__auto___64631)){
args__4502__auto__.push((arguments[i__4500__auto___64632]));

var G__64633 = (i__4500__auto___64632 + (1));
i__4500__auto___64632 = G__64633;
=======
var len__4499__auto___73608 = arguments.length;
var i__4500__auto___73609 = (0);
while(true){
if((i__4500__auto___73609 < len__4499__auto___73608)){
args__4502__auto__.push((arguments[i__4500__auto___73609]));

var G__73610 = (i__4500__auto___73609 + (1));
i__4500__auto___73609 = G__73610;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq64630){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64630));
});

var g_QMARK__64634 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq73607){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73607));
});

var g_QMARK__73611 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined'))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
<<<<<<< HEAD
var g_64635 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__64634){
=======
var g_73612 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__73611){
>>>>>>> sqlite
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined'))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
<<<<<<< HEAD
});})(g_QMARK__64634))
,null));
var mkg_64636 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__64634,g_64635){
=======
});})(g_QMARK__73611))
,null));
var mkg_73613 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__73611,g_73612){
>>>>>>> sqlite
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined'))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
<<<<<<< HEAD
});})(g_QMARK__64634,g_64635))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__64634,g_64635,mkg_64636){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__64634).call(null,x);
});})(g_QMARK__64634,g_64635,mkg_64636))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__64634,g_64635,mkg_64636){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_64636).call(null,gfn);
});})(g_QMARK__64634,g_64635,mkg_64636))
=======
});})(g_QMARK__73611,g_73612))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__73611,g_73612,mkg_73613){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__73611).call(null,x);
});})(g_QMARK__73611,g_73612,mkg_73613))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__73611,g_73612,mkg_73613){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_73613).call(null,gfn);
});})(g_QMARK__73611,g_73612,mkg_73613))
>>>>>>> sqlite
;

/**
 * Generate a single value using generator.
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.generate = ((function (g_QMARK__64634,g_64635,mkg_64636){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_64635).call(null,generator);
});})(g_QMARK__64634,g_64635,mkg_64636))
=======
cljs.spec.gen.alpha.generate = ((function (g_QMARK__73611,g_73612,mkg_73613){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_73612).call(null,generator);
});})(g_QMARK__73611,g_73612,mkg_73613))
>>>>>>> sqlite
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
<<<<<<< HEAD
var g__21410__auto___64656 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
var g__21410__auto___73633 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined'))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.hash_map = ((function (g__21410__auto___64656){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64657 = arguments.length;
var i__4500__auto___64658 = (0);
while(true){
if((i__4500__auto___64658 < len__4499__auto___64657)){
args__4502__auto__.push((arguments[i__4500__auto___64658]));

var G__64659 = (i__4500__auto___64658 + (1));
i__4500__auto___64658 = G__64659;
=======
cljs.spec.gen.alpha.hash_map = ((function (g__21410__auto___73633){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73634 = arguments.length;
var i__4500__auto___73635 = (0);
while(true){
if((i__4500__auto___73635 < len__4499__auto___73634)){
args__4502__auto__.push((arguments[i__4500__auto___73635]));

var G__73636 = (i__4500__auto___73635 + (1));
i__4500__auto___73635 = G__73636;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64656))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64656){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64656),args);
});})(g__21410__auto___64656))
=======
});})(g__21410__auto___73633))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73633),args);
});})(g__21410__auto___73633))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__21410__auto___64656){
return (function (seq64637){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64637));
});})(g__21410__auto___64656))
;


var g__21410__auto___64660 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__21410__auto___73633){
return (function (seq73614){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73614));
});})(g__21410__auto___73633))
;


var g__21410__auto___73637 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined'))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.list = ((function (g__21410__auto___64660){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64661 = arguments.length;
var i__4500__auto___64662 = (0);
while(true){
if((i__4500__auto___64662 < len__4499__auto___64661)){
args__4502__auto__.push((arguments[i__4500__auto___64662]));

var G__64663 = (i__4500__auto___64662 + (1));
i__4500__auto___64662 = G__64663;
=======
cljs.spec.gen.alpha.list = ((function (g__21410__auto___73637){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73638 = arguments.length;
var i__4500__auto___73639 = (0);
while(true){
if((i__4500__auto___73639 < len__4499__auto___73638)){
args__4502__auto__.push((arguments[i__4500__auto___73639]));

var G__73640 = (i__4500__auto___73639 + (1));
i__4500__auto___73639 = G__73640;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64660))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64660){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64660),args);
});})(g__21410__auto___64660))
=======
});})(g__21410__auto___73637))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73637),args);
});})(g__21410__auto___73637))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__21410__auto___64660){
return (function (seq64638){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64638));
});})(g__21410__auto___64660))
;


var g__21410__auto___64664 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__21410__auto___73637){
return (function (seq73615){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73615));
});})(g__21410__auto___73637))
;


var g__21410__auto___73641 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined'))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.map = ((function (g__21410__auto___64664){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64665 = arguments.length;
var i__4500__auto___64666 = (0);
while(true){
if((i__4500__auto___64666 < len__4499__auto___64665)){
args__4502__auto__.push((arguments[i__4500__auto___64666]));

var G__64667 = (i__4500__auto___64666 + (1));
i__4500__auto___64666 = G__64667;
=======
cljs.spec.gen.alpha.map = ((function (g__21410__auto___73641){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73642 = arguments.length;
var i__4500__auto___73643 = (0);
while(true){
if((i__4500__auto___73643 < len__4499__auto___73642)){
args__4502__auto__.push((arguments[i__4500__auto___73643]));

var G__73644 = (i__4500__auto___73643 + (1));
i__4500__auto___73643 = G__73644;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64664))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64664){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64664),args);
});})(g__21410__auto___64664))
=======
});})(g__21410__auto___73641))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73641),args);
});})(g__21410__auto___73641))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__21410__auto___64664){
return (function (seq64639){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64639));
});})(g__21410__auto___64664))
;


var g__21410__auto___64668 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__21410__auto___73641){
return (function (seq73616){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73616));
});})(g__21410__auto___73641))
;


var g__21410__auto___73645 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined'))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.not_empty = ((function (g__21410__auto___64668){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64669 = arguments.length;
var i__4500__auto___64670 = (0);
while(true){
if((i__4500__auto___64670 < len__4499__auto___64669)){
args__4502__auto__.push((arguments[i__4500__auto___64670]));

var G__64671 = (i__4500__auto___64670 + (1));
i__4500__auto___64670 = G__64671;
=======
cljs.spec.gen.alpha.not_empty = ((function (g__21410__auto___73645){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73646 = arguments.length;
var i__4500__auto___73647 = (0);
while(true){
if((i__4500__auto___73647 < len__4499__auto___73646)){
args__4502__auto__.push((arguments[i__4500__auto___73647]));

var G__73648 = (i__4500__auto___73647 + (1));
i__4500__auto___73647 = G__73648;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64668))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64668),args);
});})(g__21410__auto___64668))
=======
});})(g__21410__auto___73645))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73645),args);
});})(g__21410__auto___73645))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__21410__auto___64668){
return (function (seq64640){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64640));
});})(g__21410__auto___64668))
;


var g__21410__auto___64672 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__21410__auto___73645){
return (function (seq73617){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73617));
});})(g__21410__auto___73645))
;


var g__21410__auto___73649 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined'))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.set = ((function (g__21410__auto___64672){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64673 = arguments.length;
var i__4500__auto___64674 = (0);
while(true){
if((i__4500__auto___64674 < len__4499__auto___64673)){
args__4502__auto__.push((arguments[i__4500__auto___64674]));

var G__64675 = (i__4500__auto___64674 + (1));
i__4500__auto___64674 = G__64675;
=======
cljs.spec.gen.alpha.set = ((function (g__21410__auto___73649){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73650 = arguments.length;
var i__4500__auto___73651 = (0);
while(true){
if((i__4500__auto___73651 < len__4499__auto___73650)){
args__4502__auto__.push((arguments[i__4500__auto___73651]));

var G__73652 = (i__4500__auto___73651 + (1));
i__4500__auto___73651 = G__73652;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64672))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64672){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64672),args);
});})(g__21410__auto___64672))
=======
});})(g__21410__auto___73649))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73649),args);
});})(g__21410__auto___73649))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__21410__auto___64672){
return (function (seq64641){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64641));
});})(g__21410__auto___64672))
;


var g__21410__auto___64676 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__21410__auto___73649){
return (function (seq73618){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73618));
});})(g__21410__auto___73649))
;


var g__21410__auto___73653 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined'))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.vector = ((function (g__21410__auto___64676){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64677 = arguments.length;
var i__4500__auto___64678 = (0);
while(true){
if((i__4500__auto___64678 < len__4499__auto___64677)){
args__4502__auto__.push((arguments[i__4500__auto___64678]));

var G__64679 = (i__4500__auto___64678 + (1));
i__4500__auto___64678 = G__64679;
=======
cljs.spec.gen.alpha.vector = ((function (g__21410__auto___73653){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73654 = arguments.length;
var i__4500__auto___73655 = (0);
while(true){
if((i__4500__auto___73655 < len__4499__auto___73654)){
args__4502__auto__.push((arguments[i__4500__auto___73655]));

var G__73656 = (i__4500__auto___73655 + (1));
i__4500__auto___73655 = G__73656;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64676))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64676){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64676),args);
});})(g__21410__auto___64676))
=======
});})(g__21410__auto___73653))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73653),args);
});})(g__21410__auto___73653))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__21410__auto___64676){
return (function (seq64642){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64642));
});})(g__21410__auto___64676))
;


var g__21410__auto___64680 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__21410__auto___73653){
return (function (seq73619){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73619));
});})(g__21410__auto___73653))
;


var g__21410__auto___73657 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined'))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.vector_distinct = ((function (g__21410__auto___64680){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64681 = arguments.length;
var i__4500__auto___64682 = (0);
while(true){
if((i__4500__auto___64682 < len__4499__auto___64681)){
args__4502__auto__.push((arguments[i__4500__auto___64682]));

var G__64683 = (i__4500__auto___64682 + (1));
i__4500__auto___64682 = G__64683;
=======
cljs.spec.gen.alpha.vector_distinct = ((function (g__21410__auto___73657){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73658 = arguments.length;
var i__4500__auto___73659 = (0);
while(true){
if((i__4500__auto___73659 < len__4499__auto___73658)){
args__4502__auto__.push((arguments[i__4500__auto___73659]));

var G__73660 = (i__4500__auto___73659 + (1));
i__4500__auto___73659 = G__73660;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64680))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64680){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64680),args);
});})(g__21410__auto___64680))
=======
});})(g__21410__auto___73657))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73657),args);
});})(g__21410__auto___73657))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__21410__auto___64680){
return (function (seq64643){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64643));
});})(g__21410__auto___64680))
;


var g__21410__auto___64684 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__21410__auto___73657){
return (function (seq73620){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73620));
});})(g__21410__auto___73657))
;


var g__21410__auto___73661 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined'))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.fmap = ((function (g__21410__auto___64684){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64685 = arguments.length;
var i__4500__auto___64686 = (0);
while(true){
if((i__4500__auto___64686 < len__4499__auto___64685)){
args__4502__auto__.push((arguments[i__4500__auto___64686]));

var G__64687 = (i__4500__auto___64686 + (1));
i__4500__auto___64686 = G__64687;
=======
cljs.spec.gen.alpha.fmap = ((function (g__21410__auto___73661){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73662 = arguments.length;
var i__4500__auto___73663 = (0);
while(true){
if((i__4500__auto___73663 < len__4499__auto___73662)){
args__4502__auto__.push((arguments[i__4500__auto___73663]));

var G__73664 = (i__4500__auto___73663 + (1));
i__4500__auto___73663 = G__73664;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64684))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64684){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64684),args);
});})(g__21410__auto___64684))
=======
});})(g__21410__auto___73661))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73661),args);
});})(g__21410__auto___73661))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__21410__auto___64684){
return (function (seq64644){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64644));
});})(g__21410__auto___64684))
;


var g__21410__auto___64688 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__21410__auto___73661){
return (function (seq73621){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73621));
});})(g__21410__auto___73661))
;


var g__21410__auto___73665 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined'))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.elements = ((function (g__21410__auto___64688){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64689 = arguments.length;
var i__4500__auto___64690 = (0);
while(true){
if((i__4500__auto___64690 < len__4499__auto___64689)){
args__4502__auto__.push((arguments[i__4500__auto___64690]));

var G__64691 = (i__4500__auto___64690 + (1));
i__4500__auto___64690 = G__64691;
=======
cljs.spec.gen.alpha.elements = ((function (g__21410__auto___73665){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73666 = arguments.length;
var i__4500__auto___73667 = (0);
while(true){
if((i__4500__auto___73667 < len__4499__auto___73666)){
args__4502__auto__.push((arguments[i__4500__auto___73667]));

var G__73668 = (i__4500__auto___73667 + (1));
i__4500__auto___73667 = G__73668;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64688))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64688){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64688),args);
});})(g__21410__auto___64688))
=======
});})(g__21410__auto___73665))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73665){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73665),args);
});})(g__21410__auto___73665))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__21410__auto___64688){
return (function (seq64645){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64645));
});})(g__21410__auto___64688))
;


var g__21410__auto___64692 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__21410__auto___73665){
return (function (seq73622){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73622));
});})(g__21410__auto___73665))
;


var g__21410__auto___73669 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined'))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.bind = ((function (g__21410__auto___64692){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64693 = arguments.length;
var i__4500__auto___64694 = (0);
while(true){
if((i__4500__auto___64694 < len__4499__auto___64693)){
args__4502__auto__.push((arguments[i__4500__auto___64694]));

var G__64695 = (i__4500__auto___64694 + (1));
i__4500__auto___64694 = G__64695;
=======
cljs.spec.gen.alpha.bind = ((function (g__21410__auto___73669){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73670 = arguments.length;
var i__4500__auto___73671 = (0);
while(true){
if((i__4500__auto___73671 < len__4499__auto___73670)){
args__4502__auto__.push((arguments[i__4500__auto___73671]));

var G__73672 = (i__4500__auto___73671 + (1));
i__4500__auto___73671 = G__73672;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64692))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64692){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64692),args);
});})(g__21410__auto___64692))
=======
});})(g__21410__auto___73669))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73669){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73669),args);
});})(g__21410__auto___73669))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__21410__auto___64692){
return (function (seq64646){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64646));
});})(g__21410__auto___64692))
;


var g__21410__auto___64696 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__21410__auto___73669){
return (function (seq73623){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73623));
});})(g__21410__auto___73669))
;


var g__21410__auto___73673 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined'))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.choose = ((function (g__21410__auto___64696){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64697 = arguments.length;
var i__4500__auto___64698 = (0);
while(true){
if((i__4500__auto___64698 < len__4499__auto___64697)){
args__4502__auto__.push((arguments[i__4500__auto___64698]));

var G__64699 = (i__4500__auto___64698 + (1));
i__4500__auto___64698 = G__64699;
=======
cljs.spec.gen.alpha.choose = ((function (g__21410__auto___73673){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73674 = arguments.length;
var i__4500__auto___73675 = (0);
while(true){
if((i__4500__auto___73675 < len__4499__auto___73674)){
args__4502__auto__.push((arguments[i__4500__auto___73675]));

var G__73676 = (i__4500__auto___73675 + (1));
i__4500__auto___73675 = G__73676;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64696))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64696){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64696),args);
});})(g__21410__auto___64696))
=======
});})(g__21410__auto___73673))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73673){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73673),args);
});})(g__21410__auto___73673))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__21410__auto___64696){
return (function (seq64647){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64647));
});})(g__21410__auto___64696))
;


var g__21410__auto___64700 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__21410__auto___73673){
return (function (seq73624){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73624));
});})(g__21410__auto___73673))
;


var g__21410__auto___73677 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined'))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.one_of = ((function (g__21410__auto___64700){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64701 = arguments.length;
var i__4500__auto___64702 = (0);
while(true){
if((i__4500__auto___64702 < len__4499__auto___64701)){
args__4502__auto__.push((arguments[i__4500__auto___64702]));

var G__64703 = (i__4500__auto___64702 + (1));
i__4500__auto___64702 = G__64703;
=======
cljs.spec.gen.alpha.one_of = ((function (g__21410__auto___73677){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73678 = arguments.length;
var i__4500__auto___73679 = (0);
while(true){
if((i__4500__auto___73679 < len__4499__auto___73678)){
args__4502__auto__.push((arguments[i__4500__auto___73679]));

var G__73680 = (i__4500__auto___73679 + (1));
i__4500__auto___73679 = G__73680;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64700))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64700){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64700),args);
});})(g__21410__auto___64700))
=======
});})(g__21410__auto___73677))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73677),args);
});})(g__21410__auto___73677))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__21410__auto___64700){
return (function (seq64648){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64648));
});})(g__21410__auto___64700))
;


var g__21410__auto___64704 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__21410__auto___73677){
return (function (seq73625){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73625));
});})(g__21410__auto___73677))
;


var g__21410__auto___73681 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined'))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.such_that = ((function (g__21410__auto___64704){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64705 = arguments.length;
var i__4500__auto___64706 = (0);
while(true){
if((i__4500__auto___64706 < len__4499__auto___64705)){
args__4502__auto__.push((arguments[i__4500__auto___64706]));

var G__64707 = (i__4500__auto___64706 + (1));
i__4500__auto___64706 = G__64707;
=======
cljs.spec.gen.alpha.such_that = ((function (g__21410__auto___73681){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73682 = arguments.length;
var i__4500__auto___73683 = (0);
while(true){
if((i__4500__auto___73683 < len__4499__auto___73682)){
args__4502__auto__.push((arguments[i__4500__auto___73683]));

var G__73684 = (i__4500__auto___73683 + (1));
i__4500__auto___73683 = G__73684;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64704))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64704){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64704),args);
});})(g__21410__auto___64704))
=======
});})(g__21410__auto___73681))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73681){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73681),args);
});})(g__21410__auto___73681))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__21410__auto___64704){
return (function (seq64649){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64649));
});})(g__21410__auto___64704))
;


var g__21410__auto___64708 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__21410__auto___73681){
return (function (seq73626){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73626));
});})(g__21410__auto___73681))
;


var g__21410__auto___73685 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined'))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.tuple = ((function (g__21410__auto___64708){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64709 = arguments.length;
var i__4500__auto___64710 = (0);
while(true){
if((i__4500__auto___64710 < len__4499__auto___64709)){
args__4502__auto__.push((arguments[i__4500__auto___64710]));

var G__64711 = (i__4500__auto___64710 + (1));
i__4500__auto___64710 = G__64711;
=======
cljs.spec.gen.alpha.tuple = ((function (g__21410__auto___73685){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73686 = arguments.length;
var i__4500__auto___73687 = (0);
while(true){
if((i__4500__auto___73687 < len__4499__auto___73686)){
args__4502__auto__.push((arguments[i__4500__auto___73687]));

var G__73688 = (i__4500__auto___73687 + (1));
i__4500__auto___73687 = G__73688;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64708))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64708){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64708),args);
});})(g__21410__auto___64708))
=======
});})(g__21410__auto___73685))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73685){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73685),args);
});})(g__21410__auto___73685))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__21410__auto___64708){
return (function (seq64650){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64650));
});})(g__21410__auto___64708))
;


var g__21410__auto___64712 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__21410__auto___73685){
return (function (seq73627){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73627));
});})(g__21410__auto___73685))
;


var g__21410__auto___73689 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined'))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.sample = ((function (g__21410__auto___64712){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64713 = arguments.length;
var i__4500__auto___64714 = (0);
while(true){
if((i__4500__auto___64714 < len__4499__auto___64713)){
args__4502__auto__.push((arguments[i__4500__auto___64714]));

var G__64715 = (i__4500__auto___64714 + (1));
i__4500__auto___64714 = G__64715;
=======
cljs.spec.gen.alpha.sample = ((function (g__21410__auto___73689){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73690 = arguments.length;
var i__4500__auto___73691 = (0);
while(true){
if((i__4500__auto___73691 < len__4499__auto___73690)){
args__4502__auto__.push((arguments[i__4500__auto___73691]));

var G__73692 = (i__4500__auto___73691 + (1));
i__4500__auto___73691 = G__73692;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64712))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64712){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64712),args);
});})(g__21410__auto___64712))
=======
});})(g__21410__auto___73689))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73689),args);
});})(g__21410__auto___73689))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__21410__auto___64712){
return (function (seq64651){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64651));
});})(g__21410__auto___64712))
;


var g__21410__auto___64716 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__21410__auto___73689){
return (function (seq73628){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73628));
});})(g__21410__auto___73689))
;


var g__21410__auto___73693 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined'))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.return$ = ((function (g__21410__auto___64716){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64717 = arguments.length;
var i__4500__auto___64718 = (0);
while(true){
if((i__4500__auto___64718 < len__4499__auto___64717)){
args__4502__auto__.push((arguments[i__4500__auto___64718]));

var G__64719 = (i__4500__auto___64718 + (1));
i__4500__auto___64718 = G__64719;
=======
cljs.spec.gen.alpha.return$ = ((function (g__21410__auto___73693){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73694 = arguments.length;
var i__4500__auto___73695 = (0);
while(true){
if((i__4500__auto___73695 < len__4499__auto___73694)){
args__4502__auto__.push((arguments[i__4500__auto___73695]));

var G__73696 = (i__4500__auto___73695 + (1));
i__4500__auto___73695 = G__73696;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64716))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64716){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64716),args);
});})(g__21410__auto___64716))
=======
});})(g__21410__auto___73693))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73693),args);
});})(g__21410__auto___73693))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__21410__auto___64716){
return (function (seq64652){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64652));
});})(g__21410__auto___64716))
;


var g__21410__auto___64720 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__21410__auto___73693){
return (function (seq73629){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73629));
});})(g__21410__auto___73693))
;


var g__21410__auto___73697 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined'))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__21410__auto___64720){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64721 = arguments.length;
var i__4500__auto___64722 = (0);
while(true){
if((i__4500__auto___64722 < len__4499__auto___64721)){
args__4502__auto__.push((arguments[i__4500__auto___64722]));

var G__64723 = (i__4500__auto___64722 + (1));
i__4500__auto___64722 = G__64723;
=======
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__21410__auto___73697){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73698 = arguments.length;
var i__4500__auto___73699 = (0);
while(true){
if((i__4500__auto___73699 < len__4499__auto___73698)){
args__4502__auto__.push((arguments[i__4500__auto___73699]));

var G__73700 = (i__4500__auto___73699 + (1));
i__4500__auto___73699 = G__73700;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64720))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64720){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64720),args);
});})(g__21410__auto___64720))
=======
});})(g__21410__auto___73697))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73697),args);
});})(g__21410__auto___73697))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21410__auto___64720){
return (function (seq64653){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64653));
});})(g__21410__auto___64720))
;


var g__21410__auto___64724 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21410__auto___73697){
return (function (seq73630){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73630));
});})(g__21410__auto___73697))
;


var g__21410__auto___73701 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined'))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.double_STAR_ = ((function (g__21410__auto___64724){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64725 = arguments.length;
var i__4500__auto___64726 = (0);
while(true){
if((i__4500__auto___64726 < len__4499__auto___64725)){
args__4502__auto__.push((arguments[i__4500__auto___64726]));

var G__64727 = (i__4500__auto___64726 + (1));
i__4500__auto___64726 = G__64727;
=======
cljs.spec.gen.alpha.double_STAR_ = ((function (g__21410__auto___73701){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73702 = arguments.length;
var i__4500__auto___73703 = (0);
while(true){
if((i__4500__auto___73703 < len__4499__auto___73702)){
args__4502__auto__.push((arguments[i__4500__auto___73703]));

var G__73704 = (i__4500__auto___73703 + (1));
i__4500__auto___73703 = G__73704;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64724))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64724){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64724),args);
});})(g__21410__auto___64724))
=======
});})(g__21410__auto___73701))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73701),args);
});})(g__21410__auto___73701))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__21410__auto___64724){
return (function (seq64654){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64654));
});})(g__21410__auto___64724))
;


var g__21410__auto___64728 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__21410__auto___73701){
return (function (seq73631){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73631));
});})(g__21410__auto___73701))
;


var g__21410__auto___73705 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined'))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.frequency = ((function (g__21410__auto___64728){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64729 = arguments.length;
var i__4500__auto___64730 = (0);
while(true){
if((i__4500__auto___64730 < len__4499__auto___64729)){
args__4502__auto__.push((arguments[i__4500__auto___64730]));

var G__64731 = (i__4500__auto___64730 + (1));
i__4500__auto___64730 = G__64731;
=======
cljs.spec.gen.alpha.frequency = ((function (g__21410__auto___73705){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73706 = arguments.length;
var i__4500__auto___73707 = (0);
while(true){
if((i__4500__auto___73707 < len__4499__auto___73706)){
args__4502__auto__.push((arguments[i__4500__auto___73707]));

var G__73708 = (i__4500__auto___73707 + (1));
i__4500__auto___73707 = G__73708;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21410__auto___64728))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___64728){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___64728),args);
});})(g__21410__auto___64728))
=======
});})(g__21410__auto___73705))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21410__auto___73705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21410__auto___73705),args);
});})(g__21410__auto___73705))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__21410__auto___64728){
return (function (seq64655){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64655));
});})(g__21410__auto___64728))
;

var g__21423__auto___64753 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__21410__auto___73705){
return (function (seq73632){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73632));
});})(g__21410__auto___73705))
;

var g__21423__auto___73730 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined'))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.any = ((function (g__21423__auto___64753){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64754 = arguments.length;
var i__4500__auto___64755 = (0);
while(true){
if((i__4500__auto___64755 < len__4499__auto___64754)){
args__4502__auto__.push((arguments[i__4500__auto___64755]));

var G__64756 = (i__4500__auto___64755 + (1));
i__4500__auto___64755 = G__64756;
=======
cljs.spec.gen.alpha.any = ((function (g__21423__auto___73730){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73731 = arguments.length;
var i__4500__auto___73732 = (0);
while(true){
if((i__4500__auto___73732 < len__4499__auto___73731)){
args__4502__auto__.push((arguments[i__4500__auto___73732]));

var G__73733 = (i__4500__auto___73732 + (1));
i__4500__auto___73732 = G__73733;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64753))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64753){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64753);
});})(g__21423__auto___64753))
=======
});})(g__21423__auto___73730))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73730){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73730);
});})(g__21423__auto___73730))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__21423__auto___64753){
return (function (seq64732){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64732));
});})(g__21423__auto___64753))
;


var g__21423__auto___64757 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__21423__auto___73730){
return (function (seq73709){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73709));
});})(g__21423__auto___73730))
;


var g__21423__auto___73734 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined'))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.any_printable = ((function (g__21423__auto___64757){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64758 = arguments.length;
var i__4500__auto___64759 = (0);
while(true){
if((i__4500__auto___64759 < len__4499__auto___64758)){
args__4502__auto__.push((arguments[i__4500__auto___64759]));

var G__64760 = (i__4500__auto___64759 + (1));
i__4500__auto___64759 = G__64760;
=======
cljs.spec.gen.alpha.any_printable = ((function (g__21423__auto___73734){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73735 = arguments.length;
var i__4500__auto___73736 = (0);
while(true){
if((i__4500__auto___73736 < len__4499__auto___73735)){
args__4502__auto__.push((arguments[i__4500__auto___73736]));

var G__73737 = (i__4500__auto___73736 + (1));
i__4500__auto___73736 = G__73737;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64757))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64757){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64757);
});})(g__21423__auto___64757))
=======
});})(g__21423__auto___73734))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73734){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73734);
});})(g__21423__auto___73734))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__21423__auto___64757){
return (function (seq64733){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64733));
});})(g__21423__auto___64757))
;


var g__21423__auto___64761 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__21423__auto___73734){
return (function (seq73710){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73710));
});})(g__21423__auto___73734))
;


var g__21423__auto___73738 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined'))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.boolean$ = ((function (g__21423__auto___64761){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64762 = arguments.length;
var i__4500__auto___64763 = (0);
while(true){
if((i__4500__auto___64763 < len__4499__auto___64762)){
args__4502__auto__.push((arguments[i__4500__auto___64763]));

var G__64764 = (i__4500__auto___64763 + (1));
i__4500__auto___64763 = G__64764;
=======
cljs.spec.gen.alpha.boolean$ = ((function (g__21423__auto___73738){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73739 = arguments.length;
var i__4500__auto___73740 = (0);
while(true){
if((i__4500__auto___73740 < len__4499__auto___73739)){
args__4502__auto__.push((arguments[i__4500__auto___73740]));

var G__73741 = (i__4500__auto___73740 + (1));
i__4500__auto___73740 = G__73741;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64761))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64761){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64761);
});})(g__21423__auto___64761))
=======
});})(g__21423__auto___73738))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73738){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73738);
});})(g__21423__auto___73738))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__21423__auto___64761){
return (function (seq64734){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64734));
});})(g__21423__auto___64761))
;


var g__21423__auto___64765 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__21423__auto___73738){
return (function (seq73711){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73711));
});})(g__21423__auto___73738))
;


var g__21423__auto___73742 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined'))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.char$ = ((function (g__21423__auto___64765){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64766 = arguments.length;
var i__4500__auto___64767 = (0);
while(true){
if((i__4500__auto___64767 < len__4499__auto___64766)){
args__4502__auto__.push((arguments[i__4500__auto___64767]));

var G__64768 = (i__4500__auto___64767 + (1));
i__4500__auto___64767 = G__64768;
=======
cljs.spec.gen.alpha.char$ = ((function (g__21423__auto___73742){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73743 = arguments.length;
var i__4500__auto___73744 = (0);
while(true){
if((i__4500__auto___73744 < len__4499__auto___73743)){
args__4502__auto__.push((arguments[i__4500__auto___73744]));

var G__73745 = (i__4500__auto___73744 + (1));
i__4500__auto___73744 = G__73745;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64765))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64765){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64765);
});})(g__21423__auto___64765))
=======
});})(g__21423__auto___73742))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73742){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73742);
});})(g__21423__auto___73742))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__21423__auto___64765){
return (function (seq64735){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64735));
});})(g__21423__auto___64765))
;


var g__21423__auto___64769 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__21423__auto___73742){
return (function (seq73712){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73712));
});})(g__21423__auto___73742))
;


var g__21423__auto___73746 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined'))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.char_alpha = ((function (g__21423__auto___64769){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64770 = arguments.length;
var i__4500__auto___64771 = (0);
while(true){
if((i__4500__auto___64771 < len__4499__auto___64770)){
args__4502__auto__.push((arguments[i__4500__auto___64771]));

var G__64772 = (i__4500__auto___64771 + (1));
i__4500__auto___64771 = G__64772;
=======
cljs.spec.gen.alpha.char_alpha = ((function (g__21423__auto___73746){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73747 = arguments.length;
var i__4500__auto___73748 = (0);
while(true){
if((i__4500__auto___73748 < len__4499__auto___73747)){
args__4502__auto__.push((arguments[i__4500__auto___73748]));

var G__73749 = (i__4500__auto___73748 + (1));
i__4500__auto___73748 = G__73749;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64769))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64769){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64769);
});})(g__21423__auto___64769))
=======
});})(g__21423__auto___73746))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73746){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73746);
});})(g__21423__auto___73746))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__21423__auto___64769){
return (function (seq64736){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64736));
});})(g__21423__auto___64769))
;


var g__21423__auto___64773 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__21423__auto___73746){
return (function (seq73713){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73713));
});})(g__21423__auto___73746))
;


var g__21423__auto___73750 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__21423__auto___64773){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64774 = arguments.length;
var i__4500__auto___64775 = (0);
while(true){
if((i__4500__auto___64775 < len__4499__auto___64774)){
args__4502__auto__.push((arguments[i__4500__auto___64775]));

var G__64776 = (i__4500__auto___64775 + (1));
i__4500__auto___64775 = G__64776;
=======
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__21423__auto___73750){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73751 = arguments.length;
var i__4500__auto___73752 = (0);
while(true){
if((i__4500__auto___73752 < len__4499__auto___73751)){
args__4502__auto__.push((arguments[i__4500__auto___73752]));

var G__73753 = (i__4500__auto___73752 + (1));
i__4500__auto___73752 = G__73753;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64773))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64773){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64773);
});})(g__21423__auto___64773))
=======
});})(g__21423__auto___73750))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73750){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73750);
});})(g__21423__auto___73750))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__21423__auto___64773){
return (function (seq64737){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64737));
});})(g__21423__auto___64773))
;


var g__21423__auto___64777 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__21423__auto___73750){
return (function (seq73714){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73714));
});})(g__21423__auto___73750))
;


var g__21423__auto___73754 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined'))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.char_ascii = ((function (g__21423__auto___64777){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64778 = arguments.length;
var i__4500__auto___64779 = (0);
while(true){
if((i__4500__auto___64779 < len__4499__auto___64778)){
args__4502__auto__.push((arguments[i__4500__auto___64779]));

var G__64780 = (i__4500__auto___64779 + (1));
i__4500__auto___64779 = G__64780;
=======
cljs.spec.gen.alpha.char_ascii = ((function (g__21423__auto___73754){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73755 = arguments.length;
var i__4500__auto___73756 = (0);
while(true){
if((i__4500__auto___73756 < len__4499__auto___73755)){
args__4502__auto__.push((arguments[i__4500__auto___73756]));

var G__73757 = (i__4500__auto___73756 + (1));
i__4500__auto___73756 = G__73757;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64777))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64777){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64777);
});})(g__21423__auto___64777))
=======
});})(g__21423__auto___73754))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73754){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73754);
});})(g__21423__auto___73754))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__21423__auto___64777){
return (function (seq64738){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64738));
});})(g__21423__auto___64777))
;


var g__21423__auto___64781 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__21423__auto___73754){
return (function (seq73715){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73715));
});})(g__21423__auto___73754))
;


var g__21423__auto___73758 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined'))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.double$ = ((function (g__21423__auto___64781){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64782 = arguments.length;
var i__4500__auto___64783 = (0);
while(true){
if((i__4500__auto___64783 < len__4499__auto___64782)){
args__4502__auto__.push((arguments[i__4500__auto___64783]));

var G__64784 = (i__4500__auto___64783 + (1));
i__4500__auto___64783 = G__64784;
=======
cljs.spec.gen.alpha.double$ = ((function (g__21423__auto___73758){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73759 = arguments.length;
var i__4500__auto___73760 = (0);
while(true){
if((i__4500__auto___73760 < len__4499__auto___73759)){
args__4502__auto__.push((arguments[i__4500__auto___73760]));

var G__73761 = (i__4500__auto___73760 + (1));
i__4500__auto___73760 = G__73761;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64781))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64781){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64781);
});})(g__21423__auto___64781))
=======
});})(g__21423__auto___73758))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73758){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73758);
});})(g__21423__auto___73758))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__21423__auto___64781){
return (function (seq64739){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64739));
});})(g__21423__auto___64781))
;


var g__21423__auto___64785 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__21423__auto___73758){
return (function (seq73716){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73716));
});})(g__21423__auto___73758))
;


var g__21423__auto___73762 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined'))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.int$ = ((function (g__21423__auto___64785){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64786 = arguments.length;
var i__4500__auto___64787 = (0);
while(true){
if((i__4500__auto___64787 < len__4499__auto___64786)){
args__4502__auto__.push((arguments[i__4500__auto___64787]));

var G__64788 = (i__4500__auto___64787 + (1));
i__4500__auto___64787 = G__64788;
=======
cljs.spec.gen.alpha.int$ = ((function (g__21423__auto___73762){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73763 = arguments.length;
var i__4500__auto___73764 = (0);
while(true){
if((i__4500__auto___73764 < len__4499__auto___73763)){
args__4502__auto__.push((arguments[i__4500__auto___73764]));

var G__73765 = (i__4500__auto___73764 + (1));
i__4500__auto___73764 = G__73765;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64785))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64785){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64785);
});})(g__21423__auto___64785))
=======
});})(g__21423__auto___73762))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73762){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73762);
});})(g__21423__auto___73762))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__21423__auto___64785){
return (function (seq64740){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64740));
});})(g__21423__auto___64785))
;


var g__21423__auto___64789 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__21423__auto___73762){
return (function (seq73717){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73717));
});})(g__21423__auto___73762))
;


var g__21423__auto___73766 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined'))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.keyword = ((function (g__21423__auto___64789){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64790 = arguments.length;
var i__4500__auto___64791 = (0);
while(true){
if((i__4500__auto___64791 < len__4499__auto___64790)){
args__4502__auto__.push((arguments[i__4500__auto___64791]));

var G__64792 = (i__4500__auto___64791 + (1));
i__4500__auto___64791 = G__64792;
=======
cljs.spec.gen.alpha.keyword = ((function (g__21423__auto___73766){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73767 = arguments.length;
var i__4500__auto___73768 = (0);
while(true){
if((i__4500__auto___73768 < len__4499__auto___73767)){
args__4502__auto__.push((arguments[i__4500__auto___73768]));

var G__73769 = (i__4500__auto___73768 + (1));
i__4500__auto___73768 = G__73769;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64789))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64789){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64789);
});})(g__21423__auto___64789))
=======
});})(g__21423__auto___73766))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73766){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73766);
});})(g__21423__auto___73766))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__21423__auto___64789){
return (function (seq64741){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64741));
});})(g__21423__auto___64789))
;


var g__21423__auto___64793 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__21423__auto___73766){
return (function (seq73718){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73718));
});})(g__21423__auto___73766))
;


var g__21423__auto___73770 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined'))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.keyword_ns = ((function (g__21423__auto___64793){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64794 = arguments.length;
var i__4500__auto___64795 = (0);
while(true){
if((i__4500__auto___64795 < len__4499__auto___64794)){
args__4502__auto__.push((arguments[i__4500__auto___64795]));

var G__64796 = (i__4500__auto___64795 + (1));
i__4500__auto___64795 = G__64796;
=======
cljs.spec.gen.alpha.keyword_ns = ((function (g__21423__auto___73770){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73771 = arguments.length;
var i__4500__auto___73772 = (0);
while(true){
if((i__4500__auto___73772 < len__4499__auto___73771)){
args__4502__auto__.push((arguments[i__4500__auto___73772]));

var G__73773 = (i__4500__auto___73772 + (1));
i__4500__auto___73772 = G__73773;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64793))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64793){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64793);
});})(g__21423__auto___64793))
=======
});})(g__21423__auto___73770))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73770){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73770);
});})(g__21423__auto___73770))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__21423__auto___64793){
return (function (seq64742){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64742));
});})(g__21423__auto___64793))
;


var g__21423__auto___64797 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__21423__auto___73770){
return (function (seq73719){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73719));
});})(g__21423__auto___73770))
;


var g__21423__auto___73774 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined'))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.large_integer = ((function (g__21423__auto___64797){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64798 = arguments.length;
var i__4500__auto___64799 = (0);
while(true){
if((i__4500__auto___64799 < len__4499__auto___64798)){
args__4502__auto__.push((arguments[i__4500__auto___64799]));

var G__64800 = (i__4500__auto___64799 + (1));
i__4500__auto___64799 = G__64800;
=======
cljs.spec.gen.alpha.large_integer = ((function (g__21423__auto___73774){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73775 = arguments.length;
var i__4500__auto___73776 = (0);
while(true){
if((i__4500__auto___73776 < len__4499__auto___73775)){
args__4502__auto__.push((arguments[i__4500__auto___73776]));

var G__73777 = (i__4500__auto___73776 + (1));
i__4500__auto___73776 = G__73777;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64797))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64797){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64797);
});})(g__21423__auto___64797))
=======
});})(g__21423__auto___73774))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73774){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73774);
});})(g__21423__auto___73774))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__21423__auto___64797){
return (function (seq64743){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64743));
});})(g__21423__auto___64797))
;


var g__21423__auto___64801 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__21423__auto___73774){
return (function (seq73720){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73720));
});})(g__21423__auto___73774))
;


var g__21423__auto___73778 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined'))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.ratio = ((function (g__21423__auto___64801){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64802 = arguments.length;
var i__4500__auto___64803 = (0);
while(true){
if((i__4500__auto___64803 < len__4499__auto___64802)){
args__4502__auto__.push((arguments[i__4500__auto___64803]));

var G__64804 = (i__4500__auto___64803 + (1));
i__4500__auto___64803 = G__64804;
=======
cljs.spec.gen.alpha.ratio = ((function (g__21423__auto___73778){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73779 = arguments.length;
var i__4500__auto___73780 = (0);
while(true){
if((i__4500__auto___73780 < len__4499__auto___73779)){
args__4502__auto__.push((arguments[i__4500__auto___73780]));

var G__73781 = (i__4500__auto___73780 + (1));
i__4500__auto___73780 = G__73781;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64801))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64801){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64801);
});})(g__21423__auto___64801))
=======
});})(g__21423__auto___73778))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73778){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73778);
});})(g__21423__auto___73778))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__21423__auto___64801){
return (function (seq64744){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64744));
});})(g__21423__auto___64801))
;


var g__21423__auto___64805 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__21423__auto___73778){
return (function (seq73721){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73721));
});})(g__21423__auto___73778))
;


var g__21423__auto___73782 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined'))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.simple_type = ((function (g__21423__auto___64805){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64806 = arguments.length;
var i__4500__auto___64807 = (0);
while(true){
if((i__4500__auto___64807 < len__4499__auto___64806)){
args__4502__auto__.push((arguments[i__4500__auto___64807]));

var G__64808 = (i__4500__auto___64807 + (1));
i__4500__auto___64807 = G__64808;
=======
cljs.spec.gen.alpha.simple_type = ((function (g__21423__auto___73782){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73783 = arguments.length;
var i__4500__auto___73784 = (0);
while(true){
if((i__4500__auto___73784 < len__4499__auto___73783)){
args__4502__auto__.push((arguments[i__4500__auto___73784]));

var G__73785 = (i__4500__auto___73784 + (1));
i__4500__auto___73784 = G__73785;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64805))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64805){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64805);
});})(g__21423__auto___64805))
=======
});})(g__21423__auto___73782))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73782){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73782);
});})(g__21423__auto___73782))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__21423__auto___64805){
return (function (seq64745){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64745));
});})(g__21423__auto___64805))
;


var g__21423__auto___64809 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__21423__auto___73782){
return (function (seq73722){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73722));
});})(g__21423__auto___73782))
;


var g__21423__auto___73786 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined'))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.simple_type_printable = ((function (g__21423__auto___64809){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64810 = arguments.length;
var i__4500__auto___64811 = (0);
while(true){
if((i__4500__auto___64811 < len__4499__auto___64810)){
args__4502__auto__.push((arguments[i__4500__auto___64811]));

var G__64812 = (i__4500__auto___64811 + (1));
i__4500__auto___64811 = G__64812;
=======
cljs.spec.gen.alpha.simple_type_printable = ((function (g__21423__auto___73786){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73787 = arguments.length;
var i__4500__auto___73788 = (0);
while(true){
if((i__4500__auto___73788 < len__4499__auto___73787)){
args__4502__auto__.push((arguments[i__4500__auto___73788]));

var G__73789 = (i__4500__auto___73788 + (1));
i__4500__auto___73788 = G__73789;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64809))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64809){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64809);
});})(g__21423__auto___64809))
=======
});})(g__21423__auto___73786))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73786){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73786);
});})(g__21423__auto___73786))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__21423__auto___64809){
return (function (seq64746){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64746));
});})(g__21423__auto___64809))
;


var g__21423__auto___64813 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__21423__auto___73786){
return (function (seq73723){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73723));
});})(g__21423__auto___73786))
;


var g__21423__auto___73790 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined'))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.string = ((function (g__21423__auto___64813){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64814 = arguments.length;
var i__4500__auto___64815 = (0);
while(true){
if((i__4500__auto___64815 < len__4499__auto___64814)){
args__4502__auto__.push((arguments[i__4500__auto___64815]));

var G__64816 = (i__4500__auto___64815 + (1));
i__4500__auto___64815 = G__64816;
=======
cljs.spec.gen.alpha.string = ((function (g__21423__auto___73790){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73791 = arguments.length;
var i__4500__auto___73792 = (0);
while(true){
if((i__4500__auto___73792 < len__4499__auto___73791)){
args__4502__auto__.push((arguments[i__4500__auto___73792]));

var G__73793 = (i__4500__auto___73792 + (1));
i__4500__auto___73792 = G__73793;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64813))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64813){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64813);
});})(g__21423__auto___64813))
=======
});})(g__21423__auto___73790))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73790){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73790);
});})(g__21423__auto___73790))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__21423__auto___64813){
return (function (seq64747){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64747));
});})(g__21423__auto___64813))
;


var g__21423__auto___64817 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__21423__auto___73790){
return (function (seq73724){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73724));
});})(g__21423__auto___73790))
;


var g__21423__auto___73794 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined'))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.string_ascii = ((function (g__21423__auto___64817){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64818 = arguments.length;
var i__4500__auto___64819 = (0);
while(true){
if((i__4500__auto___64819 < len__4499__auto___64818)){
args__4502__auto__.push((arguments[i__4500__auto___64819]));

var G__64820 = (i__4500__auto___64819 + (1));
i__4500__auto___64819 = G__64820;
=======
cljs.spec.gen.alpha.string_ascii = ((function (g__21423__auto___73794){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73795 = arguments.length;
var i__4500__auto___73796 = (0);
while(true){
if((i__4500__auto___73796 < len__4499__auto___73795)){
args__4502__auto__.push((arguments[i__4500__auto___73796]));

var G__73797 = (i__4500__auto___73796 + (1));
i__4500__auto___73796 = G__73797;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64817))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64817){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64817);
});})(g__21423__auto___64817))
=======
});})(g__21423__auto___73794))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73794){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73794);
});})(g__21423__auto___73794))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__21423__auto___64817){
return (function (seq64748){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64748));
});})(g__21423__auto___64817))
;


var g__21423__auto___64821 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__21423__auto___73794){
return (function (seq73725){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73725));
});})(g__21423__auto___73794))
;


var g__21423__auto___73798 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__21423__auto___64821){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64822 = arguments.length;
var i__4500__auto___64823 = (0);
while(true){
if((i__4500__auto___64823 < len__4499__auto___64822)){
args__4502__auto__.push((arguments[i__4500__auto___64823]));

var G__64824 = (i__4500__auto___64823 + (1));
i__4500__auto___64823 = G__64824;
=======
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__21423__auto___73798){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73799 = arguments.length;
var i__4500__auto___73800 = (0);
while(true){
if((i__4500__auto___73800 < len__4499__auto___73799)){
args__4502__auto__.push((arguments[i__4500__auto___73800]));

var G__73801 = (i__4500__auto___73800 + (1));
i__4500__auto___73800 = G__73801;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64821))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64821){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64821);
});})(g__21423__auto___64821))
=======
});})(g__21423__auto___73798))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73798){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73798);
});})(g__21423__auto___73798))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__21423__auto___64821){
return (function (seq64749){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64749));
});})(g__21423__auto___64821))
;


var g__21423__auto___64825 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__21423__auto___73798){
return (function (seq73726){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73726));
});})(g__21423__auto___73798))
;


var g__21423__auto___73802 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined'))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.symbol = ((function (g__21423__auto___64825){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64826 = arguments.length;
var i__4500__auto___64827 = (0);
while(true){
if((i__4500__auto___64827 < len__4499__auto___64826)){
args__4502__auto__.push((arguments[i__4500__auto___64827]));

var G__64828 = (i__4500__auto___64827 + (1));
i__4500__auto___64827 = G__64828;
=======
cljs.spec.gen.alpha.symbol = ((function (g__21423__auto___73802){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73803 = arguments.length;
var i__4500__auto___73804 = (0);
while(true){
if((i__4500__auto___73804 < len__4499__auto___73803)){
args__4502__auto__.push((arguments[i__4500__auto___73804]));

var G__73805 = (i__4500__auto___73804 + (1));
i__4500__auto___73804 = G__73805;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64825))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64825){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64825);
});})(g__21423__auto___64825))
=======
});})(g__21423__auto___73802))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73802){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73802);
});})(g__21423__auto___73802))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__21423__auto___64825){
return (function (seq64750){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64750));
});})(g__21423__auto___64825))
;


var g__21423__auto___64829 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__21423__auto___73802){
return (function (seq73727){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73727));
});})(g__21423__auto___73802))
;


var g__21423__auto___73806 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined'))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.symbol_ns = ((function (g__21423__auto___64829){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64830 = arguments.length;
var i__4500__auto___64831 = (0);
while(true){
if((i__4500__auto___64831 < len__4499__auto___64830)){
args__4502__auto__.push((arguments[i__4500__auto___64831]));

var G__64832 = (i__4500__auto___64831 + (1));
i__4500__auto___64831 = G__64832;
=======
cljs.spec.gen.alpha.symbol_ns = ((function (g__21423__auto___73806){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73807 = arguments.length;
var i__4500__auto___73808 = (0);
while(true){
if((i__4500__auto___73808 < len__4499__auto___73807)){
args__4502__auto__.push((arguments[i__4500__auto___73808]));

var G__73809 = (i__4500__auto___73808 + (1));
i__4500__auto___73808 = G__73809;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64829))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64829){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64829);
});})(g__21423__auto___64829))
=======
});})(g__21423__auto___73806))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73806){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73806);
});})(g__21423__auto___73806))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__21423__auto___64829){
return (function (seq64751){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64751));
});})(g__21423__auto___64829))
;


var g__21423__auto___64833 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__21423__auto___73806){
return (function (seq73728){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73728));
});})(g__21423__auto___73806))
;


var g__21423__auto___73810 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> sqlite
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined'))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.uuid = ((function (g__21423__auto___64833){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4502__auto__ = [];
var len__4499__auto___64834 = arguments.length;
var i__4500__auto___64835 = (0);
while(true){
if((i__4500__auto___64835 < len__4499__auto___64834)){
args__4502__auto__.push((arguments[i__4500__auto___64835]));

var G__64836 = (i__4500__auto___64835 + (1));
i__4500__auto___64835 = G__64836;
=======
cljs.spec.gen.alpha.uuid = ((function (g__21423__auto___73810){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73811 = arguments.length;
var i__4500__auto___73812 = (0);
while(true){
if((i__4500__auto___73812 < len__4499__auto___73811)){
args__4502__auto__.push((arguments[i__4500__auto___73812]));

var G__73813 = (i__4500__auto___73812 + (1));
i__4500__auto___73812 = G__73813;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
<<<<<<< HEAD
});})(g__21423__auto___64833))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___64833){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___64833);
});})(g__21423__auto___64833))
=======
});})(g__21423__auto___73810))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21423__auto___73810){
return (function (args){
return cljs.core.deref.call(null,g__21423__auto___73810);
});})(g__21423__auto___73810))
>>>>>>> sqlite
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__21423__auto___64833){
return (function (seq64752){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64752));
});})(g__21423__auto___64833))
=======
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__21423__auto___73810){
return (function (seq73729){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73729));
});})(g__21423__auto___73810))
>>>>>>> sqlite
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___64839 = arguments.length;
var i__4500__auto___64840 = (0);
while(true){
if((i__4500__auto___64840 < len__4499__auto___64839)){
args__4502__auto__.push((arguments[i__4500__auto___64840]));

var G__64841 = (i__4500__auto___64840 + (1));
i__4500__auto___64840 = G__64841;
=======
var len__4499__auto___73816 = arguments.length;
var i__4500__auto___73817 = (0);
while(true){
if((i__4500__auto___73817 < len__4499__auto___73816)){
args__4502__auto__.push((arguments[i__4500__auto___73817]));

var G__73818 = (i__4500__auto___73817 + (1));
i__4500__auto___73817 = G__73818;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
<<<<<<< HEAD
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__64837_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__64837_SHARP_);
=======
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__73814_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__73814_SHARP_);
>>>>>>> sqlite
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq64838){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64838));
=======
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq73815){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73815));
>>>>>>> sqlite
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
<<<<<<< HEAD
return (function (p1__64842_SHARP_){
return (new Date(p1__64842_SHARP_));
=======
return (function (p1__73819_SHARP_){
return (new Date(p1__73819_SHARP_));
>>>>>>> sqlite
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

<<<<<<< HEAD
//# sourceMappingURL=alpha.js.map?rel=1525389502878
=======
//# sourceMappingURL=alpha.js.map?rel=1525389575750
>>>>>>> sqlite

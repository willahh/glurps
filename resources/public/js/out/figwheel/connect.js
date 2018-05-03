// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__67548__delegate = function (x__32224__auto__){
if(cljs.core.truth_(glurps.client.module.asset.list.mount_root)){
return cljs.core.apply.call(null,glurps.client.module.asset.list.mount_root,x__32224__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("glurps.client.module.asset.list/mount-root"),"' is missing"].join(''));
}
};
var G__67548 = function (var_args){
var x__32224__auto__ = null;
if (arguments.length > 0) {
var G__67549__i = 0, G__67549__a = new Array(arguments.length -  0);
while (G__67549__i < G__67549__a.length) {G__67549__a[G__67549__i] = arguments[G__67549__i + 0]; ++G__67549__i;}
  x__32224__auto__ = new cljs.core.IndexedSeq(G__67549__a,0,null);
} 
return G__67548__delegate.call(this,x__32224__auto__);};
G__67548.cljs$lang$maxFixedArity = 0;
G__67548.cljs$lang$applyTo = (function (arglist__67550){
var x__32224__auto__ = cljs.core.seq(arglist__67550);
return G__67548__delegate(x__32224__auto__);
});
G__67548.cljs$core$IFn$_invoke$arity$variadic = G__67548__delegate;
return G__67548;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1525389506068

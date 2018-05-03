// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_73398 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_73398){
return (function (){
var _STAR_always_update_STAR_73399 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_73399;
}});})(_STAR_always_update_STAR_73398))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_73398;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__73401 = arguments.length;
switch (G__73401) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__73403_73407 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__73404_73408 = null;
var count__73405_73409 = (0);
var i__73406_73410 = (0);
while(true){
if((i__73406_73410 < count__73405_73409)){
var v_73411 = cljs.core._nth.call(null,chunk__73404_73408,i__73406_73410);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_73411);


var G__73412 = seq__73403_73407;
var G__73413 = chunk__73404_73408;
var G__73414 = count__73405_73409;
var G__73415 = (i__73406_73410 + (1));
seq__73403_73407 = G__73412;
chunk__73404_73408 = G__73413;
count__73405_73409 = G__73414;
i__73406_73410 = G__73415;
continue;
} else {
var temp__5457__auto___73416 = cljs.core.seq.call(null,seq__73403_73407);
if(temp__5457__auto___73416){
var seq__73403_73417__$1 = temp__5457__auto___73416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73403_73417__$1)){
var c__4319__auto___73418 = cljs.core.chunk_first.call(null,seq__73403_73417__$1);
var G__73419 = cljs.core.chunk_rest.call(null,seq__73403_73417__$1);
var G__73420 = c__4319__auto___73418;
var G__73421 = cljs.core.count.call(null,c__4319__auto___73418);
var G__73422 = (0);
seq__73403_73407 = G__73419;
chunk__73404_73408 = G__73420;
count__73405_73409 = G__73421;
i__73406_73410 = G__73422;
continue;
} else {
var v_73423 = cljs.core.first.call(null,seq__73403_73417__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_73423);


var G__73424 = cljs.core.next.call(null,seq__73403_73417__$1);
var G__73425 = null;
var G__73426 = (0);
var G__73427 = (0);
seq__73403_73407 = G__73424;
chunk__73404_73408 = G__73425;
count__73405_73409 = G__73426;
i__73406_73410 = G__73427;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1525389575013

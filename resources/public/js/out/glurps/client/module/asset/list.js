// Compiled by ClojureScript 1.10.238 {}
goog.provide('glurps.client.module.asset.list');
goog.require('cljs.core');
goog.require('reagent.core');
glurps.client.module.asset.list.simple_component = (function glurps$client$module$asset$list$simple_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
glurps.client.module.asset.list.home_page = (function glurps$client$module$asset$list$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Reagent"], null),glurps.client.module.asset.list.simple_component.call(null)], null);
});
glurps.client.module.asset.list.mount_root = (function glurps$client$module$asset$list$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [glurps.client.module.asset.list.home_page], null),document.getElementById("app"));
});
glurps.client.module.asset.list.init_BANG_ = (function glurps$client$module$asset$list$init_BANG_(){
return glurps.client.module.asset.list.mount_root.call(null);
});

//# sourceMappingURL=list.js.map?rel=1525289589544

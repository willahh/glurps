// Compiled by ClojureScript 1.10.238 {}
goog.provide('glurps.client.module.asset.list');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('glurps.client.main');
goog.require('glurps.component.card.card');
goog.require('glurps.component.form.select');
goog.require('ajax.core');
goog.require('cljs.reader');
if(typeof glurps.client.module.asset.list.state !== 'undefined'){
} else {
glurps.client.module.asset.list.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"records","records",1326822832),cljs.core.PersistentVector.EMPTY], null));
}
glurps.client.module.asset.list.map_records_to_cards_html = (function glurps$client$module$asset$list$map_records_to_cards_html(records){
return cljs.core.map.call(null,(function (v){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"picture","picture",-921943404).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"nationality","nationality",-539165719).cljs$core$IFn$_invoke$arity$1(v)], null);
}),records);
});
glurps.client.module.asset.list.vec_str_to_vec = (function glurps$client$module$asset$list$vec_str_to_vec(vec_str){
return cljs.reader.read_string.call(null,vec_str);
});
glurps.client.module.asset.list.do_some_ajax = (function glurps$client$module$asset$list$do_some_ajax(){
return ajax.core.GET.call(null,"http://localhost:3000/asset/ajax/actor",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var cards = glurps.client.module.asset.list.map_records_to_cards_html.call(null,glurps.client.module.asset.list.vec_str_to_vec.call(null,response));
console.log("cards:",cljs.core.clj__GT_js.call(null,cards));

console.log("state:",cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,glurps.client.module.asset.list.state)));

return cljs.core.swap_BANG_.call(null,glurps.client.module.asset.list.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"records","records",1326822832)], null),((function (cards){
return (function (v){
return cards;
});})(cards))
);
}));
});
glurps.client.module.asset.list.simple_component = (function glurps$client$module$asset$list$simple_component(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The component below is shared between server and client... that's awesome !"], null),glurps.component.card.card.cards_html.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,glurps.client.module.asset.list.state))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Maybe some ajax ?"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),glurps.component.form.select.select_html.call(null,"page",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"label","label",1718410804),"Page 1"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"page",new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"limit",new cljs.core.Keyword(null,"value","value",305978217),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),glurps.client.module.asset.list.do_some_ajax], null),"Load some actors from database"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Here is the application state:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,glurps.client.module.asset.list.state))].join('')], null)], null)], null);
});
glurps.client.module.asset.list.home_page = (function glurps$client$module$asset$list$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Reagent2"], null),glurps.client.module.asset.list.simple_component.call(null)], null);
});
glurps.client.module.asset.list.mount_root = (function glurps$client$module$asset$list$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [glurps.client.module.asset.list.home_page], null),document.getElementById("app"));
});
glurps.client.module.asset.list.init_BANG_ = (function glurps$client$module$asset$list$init_BANG_(){
return glurps.client.module.asset.list.mount_root.call(null);
});

//# sourceMappingURL=list.js.map?rel=1525375004260

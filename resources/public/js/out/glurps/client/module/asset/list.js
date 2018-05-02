// Compiled by ClojureScript 1.10.238 {}
goog.provide('glurps.client.module.asset.list');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('glurps.client.main');
goog.require('glurps.component.card.card');
goog.require('ajax.core');
glurps.client.module.asset.list.records = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"http://fr.web.img5.acsta.net/c_215_290/pictures/15/07/10/15/28/007683.jpg",new cljs.core.Keyword(null,"title","title",636505583),"Emmanuel Gillibert 2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"http://fr.web.img5.acsta.net/c_215_290/pictures/15/07/10/15/28/007683.jpg",new cljs.core.Keyword(null,"title","title",636505583),"Emmanuel Gillibert 2"], null)], null);
glurps.client.module.asset.list.state = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"birthdate","birthdate",-534621599),new cljs.core.Keyword(null,"date_update","date_update",-2024575454),new cljs.core.Keyword(null,"alloid","alloid",570176451),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"fav","fav",58282341),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nationality","nationality",-539165719),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"picture","picture",-921943404),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"biography","biography",-1922131653),new cljs.core.Keyword(null,"date_create","date_create",-549969219),new cljs.core.Keyword(null,"filmography","filmography",40051743),new cljs.core.Keyword(null,"job","job",850873087)],["ok","2018-01-10 16:10:20",(101001),(1),(1),"John","Fr",(1),(1),"img",(1),"","2018-01-10 16:10:20","","Test 4"])], null));
glurps.client.module.asset.list.do_some_ajax = (function glurps$client$module$asset$list$do_some_ajax(){
console.log("do-some-ajax 2");

return ajax.core.GET.call(null,"http://localhost:3000/admin/asset/ajax/actor",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.raw_response_format.call(null),new cljs.core.Keyword(null,"ajax-success-handler","ajax-success-handler",-187555012),(function (response,b,c){
cljs.core.reset_BANG_.call(null,cljs.core.deref.call(null,glurps.client.module.asset.list.state),cljs.core.PersistentVector.EMPTY);

return alert("ok");
})], null));
});
glurps.client.module.asset.list.simple_component = (function glurps$client$module$asset$list$simple_component(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The component below is shared between server and client... that's awesome !"], null),glurps.component.card.card.cards_html.call(null,cljs.core.deref.call(null,glurps.client.module.asset.list.state)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Maybe some ajax ?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),glurps.client.module.asset.list.do_some_ajax], null),"Do some ajax please"], null)], null);
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

//# sourceMappingURL=list.js.map?rel=1525302304964

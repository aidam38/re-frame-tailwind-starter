goog.provide('re_frame_tailwind_starter.core');
re_frame_tailwind_starter.core.mount_root = (function re_frame_tailwind_starter$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_tailwind_starter.views.main], null),document.getElementById("app"));
});
re_frame_tailwind_starter.core.re_render = (function re_frame_tailwind_starter$core$re_render(){
return re_frame_tailwind_starter.core.mount_root();
});
re_frame_tailwind_starter.core.init = (function re_frame_tailwind_starter$core$init(){
(re_frame_tailwind_starter.routes.start_routes.cljs$core$IFn$_invoke$arity$0 ? re_frame_tailwind_starter.routes.start_routes.cljs$core$IFn$_invoke$arity$0() : re_frame_tailwind_starter.routes.start_routes.call(null));

return re_frame_tailwind_starter.core.mount_root();
});
goog.exportSymbol('re_frame_tailwind_starter.core.init', re_frame_tailwind_starter.core.init);

//# sourceMappingURL=re_frame_tailwind_starter.core.js.map

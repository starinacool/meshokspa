(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1023:function(t,e,i){"use strict";var n=i(2);e.a=n.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function data(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function runDelay(t,e){var i=this;this.clearDelay();var n=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})},1147:function(t,e,i){"use strict";var n=i(2);e.a=n.a.extend().extend({name:"bootable",props:{lazy:Boolean},data:function data(){return{isBooted:!1}},computed:{hasContent:function hasContent(){return this.isBooted||!this.lazy||this.isActive}},watch:{isActive:function isActive(){this.isBooted=!0}},methods:{showLazyContent:function showLazyContent(t){return this.hasContent?t:void 0}}})},1198:function(t,e,i){"use strict";i(24),i(13),i(14);var n=i(80);function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function searchChildren(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];n.isActive&&n.isDependent?e.push(n):e.push.apply(e,_toConsumableArray(searchChildren(n.$children)))}return e}e.a=Object(n.a)().extend({name:"dependent",data:function data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function isActive(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function getOpenDependents(){return this.closeDependents?searchChildren(this.$children):[]},getOpenDependentElements:function getOpenDependentElements(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,_toConsumableArray(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function getClickableDependentElements(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay),t.push.apply(t,_toConsumableArray(this.getOpenDependentElements())),t}}})},1199:function(t,e,i){"use strict";i(24),i(13),i(14);var n=i(1147),o=i(67),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={name:"detachable",mixins:[n.a],props:{attach:{type:null,default:!1,validator:function validateAttachTarget(t){var e=void 0===t?"undefined":s(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{default:""}},data:function data(){return{hasDetached:!1}},watch:{attach:function attach(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function beforeMount(){var t=this;this.$nextTick((function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach((function(e){e.elm&&t.$el.parentNode.insertBefore(e.elm,t.$el)}))}))},mounted:function mounted(){!this.lazy&&this.initDetach()},deactivated:function deactivated(){this.isActive=!1},beforeDestroy:function beforeDestroy(){try{if(this.$refs.content&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode)(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach((function(t){t.elm&&t.elm.parentNode.removeChild(t.elm)}))}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function getScopeIdAttrs(){var t=this.$vnode&&this.$vnode.context.$options._scopeId;return t&&function _defineProperty(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}({},t,"")},initDetach:function initDetach(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var t=void 0;(t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(o.c)("Unable to locate target "+(this.attach||"[data-app]"),this)}}}}},1278:function(t,e,i){"use strict";i(24),i(13),i(14);var n=i(2),o=i(176),s=i(70);function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var a=n.a.extend().extend({name:"stackable",data:function data(){return{stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function activeZIndex(){if("undefined"==typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(s.l)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function getMaxZIndex(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(s.l)(e)],n=[].concat(_toConsumableArray(document.getElementsByClassName(this.stackClass))),o=0;o<n.length;o++)t.includes(n[o])||i.push(Object(s.l)(n[o]));return Math.max.apply(Math,i)}}}),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c={activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},hasWindow:!1};e.a=n.a.extend({name:"menuable",mixins:[o.a,a],props:{activator:{default:null,validator:function validator(t){return["string","object"].includes(void 0===t?"undefined":r(t))}},allowOverflow:Boolean,inputActivator:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function data(){return{absoluteX:0,absoluteY:0,activatorFixed:!1,dimensions:Object.assign({},c),isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function computedLeft(){var t=this.dimensions.activator,e=this.dimensions.content,i=(this.isAttached?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),o=0;if(o+=this.left?i-(n-t.width):i,this.offsetX){var s=isNaN(this.maxWidth)?t.width:Math.min(t.width,this.maxWidth);o+=this.left?-s:t.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function computedTop(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),this.isAttached?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||this.activator||this.inputActivator},isAttached:function isAttached(){return!1!==this.attach}},watch:{disabled:function disabled(t){t&&this.callDeactivate()},isActive:function isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function beforeMount(){this.checkForWindow()},methods:{absolutePosition:function absolutePosition(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function activate(){},calcLeft:function calcLeft(t){return(this.isAttached?this.computedLeft:this.calcXOverflow(this.computedLeft,t))+"px"},calcTop:function calcTop(){return(this.isAttached?this.computedTop:this.calcYOverflow(this.computedTop))+"px"},calcXOverflow:function calcXOverflow(t,e){var i=t+e-this.pageWidth+12;return(t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12))+this.getOffsetLeft()},calcYOverflow:function calcYOverflow(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,o=this.dimensions.content.height,s=i<t+o;return s&&this.offsetOverflow&&n.top>o?t=this.pageYOffset+(n.top-o):s&&!this.allowOverflow?t=i-o-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function callActivate(){this.hasWindow&&this.activate()},callDeactivate:function callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForWindow:function checkForWindow(){this.hasWindow||(this.hasWindow="undefined"!=typeof window)},checkForPageYOffset:function checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function checkActivatorFixed(){if(!1===this.attach){for(var t=this.getActivator();t;){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function deactivate(){},getActivator:function getActivator(t){if(this.inputActivator)return this.$el.querySelector(".v-input__slot");if(this.activator)return"string"==typeof this.activator?document.querySelector(this.activator):this.activator;if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t)return this.activatedBy=t.currentTarget||t.target,this.activatedBy;if(this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,i=e&&e.elm;if(i)return i}},getInnerHeight:function getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function getRoundedBoundedClientRect(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function measure(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(this.isAttached){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function sneakPeek(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;if(!i||e.isShown(i))return t();i.style.display="inline-block",t(),i.style.display="none"}))},startTransition:function startTransition(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},isShown:function isShown(t){return"none"!==t.style.display},updateDimensions:function updateDimensions(){var t=this;this.checkForWindow(),this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,this.isAttached?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){e.content=t.measure(t.$refs.content),t.dimensions=e}))}}})},1383:function(t,e,i){"use strict";function closeConditional(){return!1}e.a={inserted:function inserted(t,e){var i=function onClick(i){return function directive(t,e,i){i.args=i.args||{};var n=i.args.closeConditional||closeConditional;if(t&&!1!==n(t)&&!("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)){var o=(i.args.include||function(){return[]})();o.push(e),!o.some((function(e){return e.contains(t.target)}))&&setTimeout((function(){n(t)&&i.value&&i.value(t)}),0)}}(i,t,e)};(document.querySelector("[data-app]")||document.body).addEventListener("click",i,!0),t._clickOutside=i},unbind:function unbind(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}}},1425:function(t,e,i){var n=i(1426);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(26).default)("2dacb911",n,!0,{sourceMap:!1})},1426:function(t,e,i){var n=i(25)(!1);n.push([t.i,".v-menu{display:block;vertical-align:middle}.v-menu--inline{display:inline-block}.v-menu__activator{align-items:center;cursor:pointer;display:flex}.v-menu__activator *{cursor:pointer}.v-menu__content{position:absolute;display:inline-block;border-radius:2px;max-width:80%;overflow-y:auto;overflow-x:hidden;contain:content;will-change:transform;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-menu__content--active{pointer-events:none}.v-menu__content--fixed{position:fixed}.v-menu__content>.card{contain:content;-webkit-backface-visibility:hidden;backface-visibility:hidden}.v-menu>.v-menu__content{max-width:none}.v-menu-transition-enter .v-list__tile{min-width:0;pointer-events:none}.v-menu-transition-enter-to .v-list__tile{pointer-events:auto;transition-delay:.1s}.v-menu-transition-leave-active,.v-menu-transition-leave-to{pointer-events:none}.v-menu-transition-enter,.v-menu-transition-leave-to{opacity:0}.v-menu-transition-enter-active,.v-menu-transition-leave-active{transition:all .3s cubic-bezier(.25,.8,.25,1)}.v-menu-transition-enter.v-menu__content--auto{transition:none!important}.v-menu-transition-enter.v-menu__content--auto .v-list__tile{opacity:0;transform:translateY(-15px)}.v-menu-transition-enter.v-menu__content--auto .v-list__tile--active{opacity:1;transform:none!important;pointer-events:auto}",""]),t.exports=n},1633:function(t,e,i){"use strict";i(1425);var n=i(2),o=i(1023),s=i(1198),a=i(1199),r=i(1278),c=n.a.extend({name:"returnable",props:{returnValue:null},data:function data(){return{isActive:!1,originalValue:null}},watch:{isActive:function isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function save(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}}),l=i(168),h=i(109),u={methods:{activatorClickHandler:function activatorClickHandler(t){this.openOnClick&&!this.isActive?(this.getActivator(t).focus(),this.isActive=!0,this.absoluteX=t.clientX,this.absoluteY=t.clientY):this.closeOnClick&&this.isActive&&(this.getActivator(t).blur(),this.isActive=!1)},mouseEnterHandler:function mouseEnterHandler(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0,t.isActive=!0)}))},mouseLeaveHandler:function mouseLeaveHandler(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},addActivatorEvents:function addActivatorEvents(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&!this.disabled&&t.addEventListener("click",this.activatorClickHandler)},removeActivatorEvents:function removeActivatorEvents(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.removeEventListener("click",this.activatorClickHandler)}}},d=(i(24),i(13),i(14),i(70)),f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};var v={methods:{genActivator:function genActivator(){if(!this.$slots.activator&&!this.$scopedSlots.activator)return null;var t={};if(this.disabled||(this.openOnHover?(t.mouseenter=this.mouseEnterHandler,t.mouseleave=this.mouseLeaveHandler):this.openOnClick&&(t.click=this.activatorClickHandler)),"scoped"===Object(d.k)(this,"activator")){t.keydown=this.onKeyDown;var e=this.$scopedSlots.activator({on:t});return this.activatorNode=e,e}return this.$createElement("div",{staticClass:"v-menu__activator",class:{"v-menu__activator--active":this.hasJustFocused||this.isActive,"v-menu__activator--disabled":this.disabled},ref:"activator",on:t},this.$slots.activator)},genTransition:function genTransition(){return this.transition?this.$createElement("transition",{props:{name:this.transition}},[this.genContent()]):this.genContent()},genDirectives:function genDirectives(){var t=this,e=!this.openOnHover&&this.closeOnClick?[{name:"click-outside",value:function value(){t.isActive=!1},args:{closeConditional:this.closeConditional,include:function include(){return[t.$el].concat(function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(t.getOpenDependentElements()))}}}]:[];return e.push({name:"show",value:this.isContentActive}),e},genContent:function genContent(){var t,e,i,n=this,o={attrs:this.getScopeIdAttrs(),staticClass:"v-menu__content",class:f({},this.rootThemeClasses,(t={"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},e=this.contentClass.trim(),i=!0,e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function click(t){t.stopPropagation(),t.target.getAttribute("disabled")||n.closeOnContentClick&&(n.isActive=!1)},keydown:this.onKeyDown}};return!this.disabled&&this.openOnHover&&(o.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(o.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",o,this.showLazyContent(this.$slots.default))}}},p={props:{disableKeys:Boolean},data:function data(){return{listIndex:-1,tiles:[]}},watch:{isActive:function isActive(t){t||(this.listIndex=-1)},listIndex:function listIndex(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list__tile--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list__tile--highlighted")}},methods:{onKeyDown:function onKeyDown(t){var e=this;if(t.keyCode===d.n.esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else t.keyCode===d.n.tab?setTimeout((function(){e.$refs.content.contains(document.activeElement)||(e.isActive=!1)})):this.changeListIndex(t)},changeListIndex:function changeListIndex(t){if(this.getTiles(),t.keyCode===d.n.down&&this.listIndex<this.tiles.length-1)this.listIndex++;else if(t.keyCode===d.n.up&&this.listIndex>-1)this.listIndex--;else{if(t.keyCode!==d.n.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()},getTiles:function getTiles(){this.tiles=this.$refs.content.querySelectorAll(".v-list__tile")}}},m={data:function data(){return{calculatedTopAuto:0}},methods:{calcScrollPosition:function calcScrollPosition(){var t=this.$refs.content,e=t.querySelector(".v-list__tile--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function calcLeftAuto(){return this.isAttached?0:parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function calcTopAuto(){var t=this.$refs.content,e=t.querySelector(".v-list__tile--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list__tile").offsetTop;return this.computedTop-i-n}}},g=i(1383),y=i(452),b=i(80),A=Object(b.a)(h.a).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function isDark(){return this.root?this.rootIsDark:h.a.options.computed.isDark.call(this)}},render:function render(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}}),x=i(67);e.a=n.a.extend({name:"v-menu",provide:function provide(){return{theme:this.theme}},directives:{ClickOutside:g.a,Resize:y.a},mixins:[u,s.a,o.a,a.a,v,p,r.a,m,c,l.a,h.a],props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,fullWidth:Boolean,maxHeight:{default:"auto"},openOnClick:{type:Boolean,default:!0},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function data(){return{defaultOffset:8,hasJustFocused:!1,resizeTimeout:null}},computed:{calculatedLeft:function calculatedLeft(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?this.calcXOverflow(this.calcLeftAuto(),t)+"px":this.calcLeft(t)},calculatedMaxHeight:function calculatedMaxHeight(){return this.auto?"200px":Object(d.b)(this.maxHeight)},calculatedMaxWidth:function calculatedMaxWidth(){return isNaN(this.maxWidth)?this.maxWidth:this.maxWidth+"px"},calculatedMinWidth:function calculatedMinWidth(){if(this.minWidth)return isNaN(this.minWidth)?this.minWidth:this.minWidth+"px";var t=Math.min(this.dimensions.activator.width+this.nudgeWidth+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Math.min(e,t)+"px"},calculatedTop:function calculatedTop(){return!this.auto||this.isAttached?this.calcTop():this.calcYOverflow(this.calculatedTopAuto)+"px"},styles:function styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{activator:function activator(t,e){this.removeActivatorEvents(e),this.addActivatorEvents(t)},disabled:function disabled(t){this.activator&&(t?this.removeActivatorEvents(this.activator):this.addActivatorEvents(this.activator))},isContentActive:function isContentActive(t){this.hasJustFocused=t}},mounted:function mounted(){this.isActive&&this.activate(),"v-slot"===Object(d.k)(this,"activator",!0)&&Object(x.a)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function activate(){var t=this;this.getTiles(),this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},closeConditional:function closeConditional(t){return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(t.target)},onResize:function onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateDimensions,100))}},render:function render(t){return t("div",{staticClass:"v-menu",class:{"v-menu--inline":!this.fullWidth&&this.$slots.activator},directives:[{arg:500,name:"resize",value:this.onResize}],on:this.disableKeys?void 0:{keydown:this.onKeyDown}},[this.genActivator(),this.$createElement(A,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])}})}}]);
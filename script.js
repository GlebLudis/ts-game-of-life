!function(){"use strict";function n(n,t,r){var e="<table border=1>".concat(t.map((function(n,t){return"<tr>".concat(n.map((function(n,r){return 1===n?"<td \n        data-x=".concat(r,"\n        data-y=").concat(t,'\n        class="cell alive" \n        ></td>'):"<td \n      data-x=".concat(r,"\n      data-y=").concat(t,'\n      class="cell dead" \n      ></td>')})).join(""),"</tr>")})).join(""),"</table>");n.innerHTML=e,n.querySelector("table").addEventListener("click",(function(n){var t=n.target;if(!t)throw Error;var e=t.getAttribute("data-x"),a=t.getAttribute("data-y");Number(e)>=0&&Number(a)>=0&&r(Number(e),Number(a))}))}function t(n,t,r){var e=n[r];if(void 0===e)return 0;var a=e[t];return void 0===a?0:a}var r=document.createElement("div");document.body.appendChild(r),function(r,e,a){var u,i=!1;a.innerHTML='\n    <div class="field-wrapper"></div>\n    <label > Скорость\n      <input type="range" min="100" max="2000" /> \n    <button>Start</button>\n  ';var c=a.querySelector(".field-wrapper"),o=a.querySelector("button"),l=a.querySelector("input"),d=new Array(10).fill(0).map((function(){return new Array(10).fill(0)})),f=function t(r,e){d[e][r]=0===d[e][r]?1:0,n(c,d,t)};function v(){i=!1,o.innerHTML="Start",clearInterval(u)}function b(r){i=!0,o.innerHTML="Stop",u=setInterval((function(){d=function(n){return n.map((function(r,e){return r.map((function(r,a){var u,i=function(n,r,e){for(var a=0,u=n-1;u<=n+1;u+=1)a+=Number(t(e,u,r-1)),a+=Number(t(e,u,r+1));return(a+=Number(t(e,n-1,r)))+Number(t(e,n+1,r))}(a,e,n),c=t(n,a,e);return 3===(u=i)||2===u&&1===c?1:0}))}))}(d),n(c,d,f),function(n){for(var t=0;t<n.length;t+=1)for(var r=n[t],e=0;e<r.length;e+=1)if(r[e])return!0;return!1}(d)||v()}),r)}n(c,d,f),o.addEventListener("click",(function(){i?v():b(Number(l.value))})),l.addEventListener("change",(function(){if(i){var n=Number(l.value);v(),b(n)}}))}(0,0,r)}();
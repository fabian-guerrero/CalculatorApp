parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
var t=document.getElementById("body"),e=document.querySelector(".calculator-wrapper"),a=document.querySelector(".calculator-buttons"),r=document.querySelector(".result");a.addEventListener("click",function(t){if(t.target.matches("button")){var a=t.target,o=a.dataset.number,s=a.dataset.operator,d=r.textContent,i=e.dataset.previousKeyType;if(o){var u=a.textContent;r.textContent="0"===d||"operator"===i?u:d+u,e.dataset.previousKeyType="number"}else if(s){if("result"===s){var c=e.dataset.firstNumber,l=e.dataset.operator,m=r.textContent;c&&"result"===i&&(c=r.textContent,m=e.dataset.secondNumber),r.textContent=n(c,l,m),e.dataset.secondNumber=m,e.dataset.previousKeyType="result"}if("adding"===s||"subtracting"===s||"dividing"===s||"multiplying"===s){var p=e.dataset.firstNumber,y=e.dataset.operator,v=r.textContent;if(p&&y&&"operator"!==i){var g=n(p,y,v);r.textContent=g,e.dataset.firstNumber=g}else e.dataset.firstNumber=r.textContent;e.dataset.previousKeyType="operator",e.dataset.operator=s}"decimal"===s&&(d.includes(".")||"operator"===i?"operator"===i&&(r.textContent="0."):r.textContent=d+".",e.dataset.previousKeyType="decimal"),"reset"===s&&(r.textContent="0",e.dataset.firstNumber="",e.dataset.previousKeyType="",e.dataset.operator=""),"delete"===s&&(r.textContent="0")}}});var n=function(t,e,a){var r;return t=parseFloat(t),a=parseFloat(a),"adding"===e?r=t+a:"subtracting"===e?r=t-a:"multiplying"===e?r=t*a:"dividing"===e&&(r=t/a),r},o=document.getElementById("theme-1"),s=document.getElementById("theme-2"),d=document.getElementById("theme-3");function i(e){var a=e.target.id;switch(a){case"theme-1":case"theme-2":case"theme-3":t.className="",t.classList.add(a)}}o.addEventListener("click",i),s.addEventListener("click",i),d.addEventListener("click",i);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=../main.790088e8.js.map
import{S as H,i as z,s as G,e as d,t as q,k as $,c as f,a as v,h as E,d as i,m as N,b as n,g as L,J as a,n as M,x as R,y as T,z as B,L as J,j as O,r as P,p as U,C as Y}from"../../chunks/index-0b8a7a3e.js";import{b as F}from"../../chunks/paths-396f020f.js";function K(x){let e,t,r,s,h,c,k,m,l,b;return{c(){e=d("div"),t=d("nav"),r=d("a"),s=q("Home"),h=$(),c=d("a"),k=q("About Me"),m=$(),l=d("a"),b=q("My Achievements"),this.h()},l(_){e=f(_,"DIV",{class:!0});var p=v(e);t=f(p,"NAV",{class:!0});var o=v(t);r=f(o,"A",{href:!0,class:!0});var w=v(r);s=E(w,"Home"),w.forEach(i),h=N(o),c=f(o,"A",{href:!0,class:!0});var g=v(c);k=E(g,"About Me"),g.forEach(i),m=N(o),l=f(o,"A",{href:!0,class:!0});var A=v(l);b=E(A,"My Achievements"),A.forEach(i),o.forEach(i),p.forEach(i),this.h()},h(){n(r,"href",F+"/"),n(r,"class","svelte-1ip6vjx"),n(c,"href",F+"/#about"),n(c,"class","svelte-1ip6vjx"),n(l,"href",F+"/#portfolio"),n(l,"class","svelte-1ip6vjx"),n(t,"class","svelte-1ip6vjx"),n(e,"class","wrapper")},m(_,p){L(_,e,p),a(e,t),a(t,r),a(r,s),a(t,h),a(t,c),a(c,k),a(t,m),a(t,l),a(l,b)},p:M,i:M,o:M,d(_){_&&i(e)}}}class Q extends H{constructor(e){super(),z(this,e,null,K,G,{})}}function W(x){let e,t,r,s,h,c,k,m,l=(x[0]||"")+"",b,_,p,o,w,g,A,S;return t=new Q({}),{c(){e=d("div"),R(t.$$.fragment),r=$(),s=d("div"),h=d("h2"),c=q("Random Fact About Numbers"),k=$(),m=d("p"),b=q(l),_=$(),p=d("div"),o=d("button"),w=q("Get Fact!"),this.h()},l(u){e=f(u,"DIV",{class:!0,id:!0});var y=v(e);T(t.$$.fragment,y),r=N(y),s=f(y,"DIV",{class:!0});var j=v(s);h=f(j,"H2",{class:!0});var V=v(h);c=E(V,"Random Fact About Numbers"),V.forEach(i),k=N(j),m=f(j,"P",{class:!0});var C=v(m);b=E(C,l),C.forEach(i),_=N(j),p=f(j,"DIV",{class:!0});var D=v(p);o=f(D,"BUTTON",{class:!0});var I=v(o);w=E(I,"Get Fact!"),I.forEach(i),D.forEach(i),j.forEach(i),y.forEach(i),this.h()},h(){n(h,"class","svelte-1aqukcs"),n(m,"class","svelte-1aqukcs"),n(o,"class","svelte-1aqukcs"),n(p,"class","button_wrapper svelte-1aqukcs"),n(s,"class","api"),n(e,"class","wrapper"),n(e,"id","api")},m(u,y){L(u,e,y),B(t,e,null),a(e,r),a(e,s),a(s,h),a(h,c),a(s,k),a(s,m),a(m,b),a(s,_),a(s,p),a(p,o),a(o,w),g=!0,A||(S=J(o,"click",x[1]),A=!0)},p(u,[y]){(!g||y&1)&&l!==(l=(u[0]||"")+"")&&O(b,l)},i(u){g||(P(t.$$.fragment,u),g=!0)},o(u){U(t.$$.fragment,u),g=!1},d(u){u&&i(e),Y(t),A=!1,S()}}}const ae=!1;function X(){return fetch("http://numbersapi.com/random/math").then(x=>x.text())}function Z(x,e,t){let r;async function s(){t(0,r="Loading..."),t(0,r=await X())}return[r,s]}class se extends H{constructor(e){super(),z(this,e,Z,W,G,{})}}export{se as default,ae as prerender};
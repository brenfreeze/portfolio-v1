(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(n,e,t){n.exports=t(51)},50:function(n,e,t){},51:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=t(20),u=t(2),l=t(1),s=t(3),f=t(6);function d(){var n=Object(u.a)(["\n  min-height: 100vh;\n"]);return d=function(){return n},n}function b(){var n=Object(u.a)(["\n    justify-content: flex-start;\n    margin: 0;\n    margin-right: 1rem;\n\n    "," {\n      display: none;\n    }\n  "]);return b=function(){return n},n}function m(){var n=Object(u.a)(["\n  text-decoration: none;\n  line-height: 1;\n  font-size: 2.5rem;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 0.5rem;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  &:last-child {\n    margin: 0;\n  }\n\n  ","\n\n  &:hover {\n    "," {\n      opacity: 1;\n      transition: opacity 300ms ease;\n    }\n  }\n"]);return m=function(){return n},n}function v(){var n=Object(u.a)(["\n  font-size: 0.875rem;\n  opacity: 0;\n  transition: opacity 300ms ease;\n  margin-right: 0.5rem;\n"]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n    justify-content: flex-start;\n    flex-flow: row;\n  "]);return h=function(){return n},n}function p(){var n=Object(u.a)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-end;\n  padding: var(--space);\n  text-align: right;\n\n\n  ","\n"]);return p=function(){return n},n}function g(){var n=Object(u.a)(["\n  margin: 0;\n"]);return g=function(){return n},n}function w(){var n=Object(u.a)(["\n  margin: 0;\n  margin-bottom: 0.5rem;\n"]);return w=function(){return n},n}function j(){var n=Object(u.a)(["\n  margin: 0;\n  margin-bottom: 0.5rem;\n"]);return j=function(){return n},n}function x(){var n=Object(u.a)(["\n  max-width: 700px;\n  padding: var(--space);\n"]);return x=function(){return n},n}function E(){var n=Object(u.a)(["\n    flex-direction: column;\n  "]);return E=function(){return n},n}function O(){var n=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n\n  ","\n"]);return O=function(){return n},n}function y(){var n=Object(u.a)(['\n  --bw: 2px;\n  \n  --bw05: calc(var(--bw) / 2);\n  --wh: 100%;\n  --offset-a: calc((50% - var(--bw05)) * -1);\n  --offset-b: calc(50% - var(--bw05));\n  --truchet: (\n    content: "";\n    display: block;\n    position: absolute;\n    width: var(--wh);\n    height: var(--wh);\n    border: var(--bw) solid #fff;\n    border-radius: 100%;\n  );\n  --truchet-a: (\n    transform: translate(var(--offset-a), var(--offset-a));\n  );\n  --truchet-b: (\n    transform: translate(var(--offset-b), var(--offset-b));\n  )\n\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-size: 200%;\n  background-repeat: no-repeat;\n  z-index: -1;\n']);return y=function(){return n},n}function k(){var n=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: calc(100vh - calc(var(--space) * 2));\n  background: linear-gradient(to bottom left, rgba(255,255,255,0), rgba(255,255,255,0.75));\n  border-radius: 20px;\n  overflow: hidden;\n"]);return k=function(){return n},n}function z(){var n=Object(u.a)(["\n    --space: 1rem;\n  "]);return z=function(){return n},n}function T(){var n=Object(u.a)(["\n  --space: 2rem\n\n  width: 100%;\n  min-height: 100vh;\n  padding: var(--space);\n\n  ","\n"]);return T=function(){return n},n}var B=l.b.div(T(),s.a.lessThan("small")(z())),J=Object(l.b)(f.a.div)(k()),M=Object(l.b)(f.a.div)(y()),N=l.b.div(O(),s.a.lessThan("medium")(E())),q=l.b.div(x()),A=l.b.h1(j()),H=l.b.h3(w()),I=l.b.p(g()),L=l.b.div(p(),s.a.lessThan("medium")(h())),S=l.b.span(v()),V=l.b.a(m(),s.a.lessThan("medium")(b(),S),S),W=l.b.div(d()),X=function(n,e){return"translate3d(".concat((0-n-window.innerWidth)/20,"px, ").concat((0-e-window.innerHeight)/20,"px, 0)")};var Y=function(){var n=Object(f.b)(function(){return{xy:[0,0],config:{mass:10,tension:550,friction:140}}}),e=Object(c.a)(n,2),t=e[0].xy,r=e[1];return a.a.createElement(B,null,a.a.createElement(J,{onMouseMove:function(n){var e=n.clientX,t=n.clientY;return r({xy:[e,t]})}},a.a.createElement(M,{style:{transform:t.interpolate(X)}},a.a.createElement("css-doodle",null,":doodle {\n              @grid: @rand(512, 1024) / 200vmax;\n              background: @pick(red, blue, green);\n            }\n              \n            overflow: hidden;\n            position: relative;\n            transform: rotate(@pick(90deg, 180deg, 270deg, 360deg));\n            \n            :before {\n              @use: var(--truchet);\n              @use: var(--truchet-a);\n            }\n            \n            :after {\n              @use: var(--truchet);\n              @use: var(--truchet-b);\n            }")),a.a.createElement(N,null,a.a.createElement(q,null,a.a.createElement(A,null,"Bren Aviador"),a.a.createElement(H,null,"Software Engineer"),a.a.createElement(I,null,'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ea voluptas obcaecati libero, dolor dolores officia praesentium sunt repudiandae modi!"')),a.a.createElement(L,null,a.a.createElement(V,{href:"https://github.com/brenfreeze"},a.a.createElement(S,null,"https://github.com/brenfreeze")," ",a.a.createElement("i",{className:"fab fa-github-square"})),a.a.createElement(V,{href:"https://www.linkedin.com/in/bren-aviador/"},a.a.createElement(S,null,"https://linkedin.com/in/bren-aviador")," ",a.a.createElement("i",{className:"fab fa-linkedin"}))))),a.a.createElement(W,null))};t(31),t(34),t(50);o.a.render(a.a.createElement(Y,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.00fa0fcd.chunk.js.map
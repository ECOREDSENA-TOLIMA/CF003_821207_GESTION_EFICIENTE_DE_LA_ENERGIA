(function(e){function n(n){for(var a,i,c=n[0],s=n[1],d=n[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(n);while(u.length)u.shift()();return t.push.apply(t,d||[]),o()}function o(){for(var e,n=0;n<t.length;n++){for(var o=t[n],a=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(a=!1)}a&&(t.splice(n--,1),e=s(s.s=o[0]))}return e}var a={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"f3d7d8c7","chunk-0206bfa0":"fbcb801b","chunk-0c047e41":"c93e636b","chunk-13a6037e":"47d7da63","chunk-18f95272":"8cc31be1","chunk-25b302c8":"e4a9087b","chunk-26fc7596":"eba76383","chunk-2c06842c":"ee78365c","chunk-2d0c5615":"d7c7fea3","chunk-2d0e96ec":"6332f6f8","chunk-2d208d90":"440b5e7e","chunk-2d21d0e2":"d061f3e9","chunk-2d22c123":"4eaafe36","chunk-2d2747e2":"92eb3dc5","chunk-2e80bb9a":"f5f91733","chunk-319206de":"3faa5257","chunk-32334cb6":"e4cb5e8f","chunk-36769079":"00cac6ab","chunk-3c57cd7b":"25993372","chunk-4cdd78c0":"be97f210","chunk-4f2d402a":"8e19b5a7","chunk-515a8379":"1a9ac9f5","chunk-53ccb27e":"a4d1166c","chunk-55d286b8":"5f60a1a0","chunk-59974754":"c8c954a2","chunk-60cbc06b":"e2d94f73","chunk-659152b8":"d4cd6718","chunk-6e1e538a":"d5b7f1d6","chunk-766a929b":"3e7bd3ca","chunk-c796899c":"702a4d0c","chunk-e8a7823a":"78e05249","chunk-f2df7d2c":"213e5ca0","chunk-fde47172":"1e5f4771",comple:"6851c768",creditos:"903a22f5",glosario:"bbc4f7a0",intro:"19021c6f",referencias:"70300d09",sintesis:"8ba3ea7d",tema1:"baa8e983",tema2:"026b8282",tema3:"7f205904"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var n=[],o={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&o[e]&&n.push(i[e]=new Promise((function(n,o){for(var a="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"423e4325","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"321e0161","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"9ea99275","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"b9336906",creditos:"a6ebcd82",glosario:"23c3cb34",intro:"31d6cfe0",referencias:"11af4ab1",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+a,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===r))return n()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===a||l===r)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var a=n&&n.target&&n.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=a,delete i[e],m.parentNode.removeChild(m),o(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var t=new Promise((function(n,o){a=r[e]=[n,o]}));n.push(a[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,o){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(o,a,function(n){return e[n]}.bind(null,a));return o},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var m=l;t.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"52e5":function(e,n,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("68f3"),i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=o("2877"),d=Object(s["a"])(c,i,r,!1,null,null,null),l=d.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),f=o("ae58"),p=o("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return o.e("sintesis").then(o.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Principios de medidas eléctricas",descripcionCurso:"Este componente se relaciona con la medición que hace parte de las actividades de la vida, en especial hoy donde es normal usar dispositivos electrónicos que miden las pulsaciones y la distancia recorrida. También se hace imprescindible para controlar los procesos y obtener datos para la toma de decisiones; medir parámetros eléctricos permitirá adentrarse en el mundo de la medición.",imagenBannerPrincipal:o("9128"),fondoBannerPrincipal:o("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:o("71f8")},{clases:["banner-principal-decorativo-2"],imagen:o("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Instrumentos de medida",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Exactitud y precisión",hash:"t_1_1"},{numero:"1.2",titulo:"Clase de precisión, <i>burden</i> y error",hash:"t_1_2"},{numero:"1.3",titulo:"Calibración de instrumentos",hash:"t_1_3"}]},{nombreRuta:"tema2",numero:"2",titulo:"Tipos de instrumentos",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Medida de potencia trifásica",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Instrumentos trifásicos",hash:"t_3_1"},{numero:"3.2",titulo:"Diagramas de conexión",hash:"t_3_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_003.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1.3 Calibración de instrumentos.",referencia:"Técnicas de control metrológico S.L. (2021). <em>Certificado de calibración</em>",tipo:"Página web",link:"https://www.tcmetrologia.com/blog/interpretacion-y-modelo-de-certificado-de-calibracion/"},{tema:"1.3 Calibración de instrumentos.",referencia:"Organismo Nacional de Acreditación de Colombia - ONAC. (2021). <em>Acreditación laboratorio de calibración y mediciones industriales</em> SENA.",tipo:"Acreditación laboratorio de Calibración y Mediciones Industriales SENA",link:"https://onac.org.co/certificados/16-LAC-016.pdf"}],glosario:[{termino:"<em>Burden</em>",significado:"Carga impuesta a un instrumento de medida eléctrico o electrónico en la entrada del circuito a medir, su unidad de medida es el voltio-amperio (VA)."},{termino:"CT",significado:"Transformador de corriente (siglas en inglés de <em>Current Transformer</em>)."},{termino:"ONAC",significado:"Organismo Nacional de Acreditación de Colombia."},{termino:"PT",significado:"Transformador de potencial (siglas en inglés de <em>Potential Transformer</em>)."},{termino:"<em>True RMS</em>",significado:"Valor eficaz verdadero de las ondas en corriente alterna."}],referencias:[{referencia:"Organismo Nacional de Acreditación de Colombia - ONAC. (2021). <em>Acreditación laboratorio de calibración y mediciones industriales</em> SENA.",link:"https://onac.org.co/certificados/16-LAC-016.pdf"},{referencia:"Purkait, P., Biswas, B., Das, S., y Koley, C. (2013). <em>Electrical and Electronics Measurements and Instrumentation.</em> McGraw Hill Education (India)."},{referencia:"Técnicas de control metrológico. (2021). <em>Certificado de calibración.</em>",link:"https://www.tcmetrologia.com/blog/interpretacion-y-modelo-de-certificado-de-calibracion/ "},{referencia:"Villalobos, O., G. (2006). <em>Medición y control de procesos industriales.</em> Instituto Politécnico Nacional."}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de línea de producción",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Carlos Javier González Cuevas",cargo:"Experto Técnico",centro:"Regional Distrito Capital - Centro Electricidad Electrónica y Telecomunicaciones"},{nombre:"Marlon Augusto Villamizar Morales",cargo:"Experto Técnico",centro:"Global Green Growth Institute (GGGI)"},{nombre:"Cristian Metaute Medina",cargo:"Diseñadora Instruccional",centro:"Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica del SENA"},{nombre:"Carolina Coca Salazar",cargo:"Revisora Metodológica y Pedagógica",centro:"Regional Distrito Capital - Centro de diseño y metrología"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de Estilo",centro:"Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica del SENA"},{nombre:"Juan Gilberto Giraldo Cortés",cargo:"Diseñador Instruccional",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"María Inés Machado López",cargo:"Metodóloga",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"José Yobani Penagos Mora",cargo:"Diseñador Web",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oscar Daniel Espitia Marin",cargo:"Desarrollador Fullstack",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboard e Ilustración",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Francisco Javier Vásquez Suarez",cargo:"Actividad Didáctica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Jorge Bustos Gómez",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de contenidos accesibles",centro:"Regional Tolima - Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});a["a"].prototype.$config=v;var k=o("9224");a["a"].prototype.$package=k,new a["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,n,o){e.exports=o.p+"img/banner-principal-decorativo-1.3e520921.svg"},"8f04":function(e,n,o){e.exports=o.p+"img/banner-principal-decorativo-2.0b852c21.svg"},9128:function(e,n,o){e.exports=o.p+"img/banner-princiapal.8dac3131.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,o){},ce7c:function(e,n,o){e.exports=o.p+"img/fondo-banner-principal.5958094f.png"}});
//# sourceMappingURL=app.409d6f9a.js.map
import{v as s,c as r,h as t,D as l}from"./index.edc29a52.js";var i=s({name:"QToolbarTitle",props:{shrink:Boolean},setup(o,{slots:e}){const a=r(()=>"q-toolbar__title ellipsis"+(o.shrink===!0?" col-shrink":""));return()=>t("div",{class:a.value},l(e.default))}}),p=s({name:"QToolbar",props:{inset:Boolean},setup(o,{slots:e}){const a=r(()=>"q-toolbar row no-wrap items-center"+(o.inset===!0?" q-toolbar--inset":""));return()=>t("div",{class:a.value,role:"toolbar"},l(e.default))}});export{i as Q,p as a};

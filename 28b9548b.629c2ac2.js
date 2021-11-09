(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),b=(a(0),a(273)),c={id:"index-redisgraph-cheatsheet",title:"RedisGRAPH Cheatsheet",sidebar_label:"RedisGRAPH CheatSheet",slug:"/howtos/redisgraph/redisgraph-cheatsheet"},l={unversionedId:"howtos/redisgraph/redisgraph-cheatsheet/index-redisgraph-cheatsheet",id:"howtos/redisgraph/redisgraph-cheatsheet/index-redisgraph-cheatsheet",isDocsHomePage:!1,title:"RedisGRAPH Cheatsheet",description:"| Command       | Purpose        | Syntax               |",source:"@site/docs/howtos/redisgraph/redisgraph-cheatsheet/index-redisgraph-cheatsheet.mdx",slug:"/howtos/redisgraph/redisgraph-cheatsheet",permalink:"/howtos/redisgraph/redisgraph-cheatsheet",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/redisgraph-cheatsheet/index-redisgraph-cheatsheet.mdx",version:"current",sidebar_label:"RedisGRAPH CheatSheet"},s=[],o={toc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Command"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Syntax"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#graphquery"}),"GRAPH.QUERY")))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Execute a query against a named graph"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "',"<","query",">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#graphro_query"}),"GRAPH.RO_QUERY")))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Executes a read only query against a named graph"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.RO_QUERY ","<","graph name",">",' "',"<","query",">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#match"}),'GRAPH.QUERY ... "MATCH ..."')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Query Structure: MATCH describes the relationship between queried entities, using ascii art to represent pattern(s) to match against"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#optional-match"}),'GRAPH.QUERY ... "MATCH ... OPTIONAL MATCH"')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The OPTIONAL MATCH clause is a MATCH variant that produces null values for elements that do not match successfully, rather than the all-or-nothing logic for patterns in MATCH clauses"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," OPTIONAL MATCH ","<","pattern",">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#where"}),'GRAPH.QUERY ... "MATCH ... WHERE ..."')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The WHERE clause is not mandatory, but if you want to filter results, you can specify your predicates here.  Click the link to see supported operations."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#return"}),'GRAPH.QUERY ... "MATCH ... WHERE ... RETURN ..."')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The RETURN clause essentially defines the result set.  In this way, a tailored result-set is customized."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">"," RETURN ","<","pattern",">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#order-by"}),'GRAPH.QUERY ... "MATCH ... WHERE ... RETRUN ... ORDER BY ..."')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ORDER BY specifies that the output be sorted and how"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">"," RETURN ","<","pattern",">"," ORDER BY ","<","variables",">"," ","[","ASC","|","DESC","]",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#skip"}),'GRAPH.QUERY ... "MATCH \u2026 WHERE \u2026 RETURN \u2026 ORDER BY \u2026 SKIP ..."')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SKIP optional clause allows for a specified number of records to be omitted from the result set"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">"," RETURN ","<","pattern",">"," ORDER BY ","<","variables",">"," ","<","[ASC ","|"," DESC ","]",' SKIP \\" where "n" is an integer'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#limit"}),'GRAPH.QUERY ... "MATCH \u2026 WHERE \u2026 RETURN \u2026 ORDER BY \u2026 LIMIT ..."')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LIMIT clause is not mandatory and can be used to limit the number of records returned by a RETURN set."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">"," RETURN ","<","pattern",">"," ORDER BY ","<","variables",">"," ","[","ASC ","|"," DESC ","]",' LIMIT " where "n" is an integer'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#limit"}),'GRAPH.QUERY ... "MATCH \u2026 WHERE \u2026 RETURN \u2026 ORDER BY \u2026 LIMIT ..."')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LIMIT clause is not mandatory and can be used to limit the number of records returned by a RETURN set."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH \\<pattern',">"," WHERE \\<pattern",">"," RETURN \\<pattern",">"," ORDER BY \\<variables",">"," ","[","ASC ","|"," DESC ","]"," LIMIT \\<n",">",'" where "n" is an integer'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#create"}),'GRAPH.QUERY ... "MATCH ... CREATE \u2026"')," "))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CREATE clause is used to introduce new nodes and relationships"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," CREATE ","<","nodes",">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#delete"}),'GRAPH.QUERY ... "MATCH \u2026 DELETE \u2026"')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DELETE clause is used to remove both nodes and relationships"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH \\<pattern',">"," DELETE \\<alias",">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#set"}),'GRAPH.QUERY ... "MATCH \u2026 SET \u2026"')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SET clause is used to create or update properties on nodes and relationships"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH \\<pattern',">"," SET \\<property value",">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#merge"}),'GRAPH.QUERY ... "MERGE \u2026"')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MERGE clause ensures that a path exists in the graph"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MERGE \\<property value',">",'"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("button",null,Object(b.b)("b",null,Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://oss.redis.com/redisgraph/commands/#with"}),'GRAPH.QUERY ... "MATCH \u2026 WITH \u2026 AS ..."')))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WITH clause allows  parts of queries to be independently executed and have their results handled uniquely."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH \\<pattern',">"," WITH \\<property value",">"," AS \\<property value",">",'"'))))))}p.isMDXComponent=!0},273:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),i=p(a),O=r,j=i["".concat(c,".").concat(O)]||i[O]||d[O]||b;return a?n.a.createElement(j,l(l({ref:t},o),{},{components:a})):n.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);
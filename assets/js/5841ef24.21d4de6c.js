"use strict";(self.webpackChunktwl=self.webpackChunktwl||[]).push([[900],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return s}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),d=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),s=a,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||r;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4052:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={id:"hadoop command",title:"Hadoop Command"},p=void 0,d={unversionedId:"Data Engineering/Hadoop/hadoop command",id:"Data Engineering/Hadoop/hadoop command",isDocsHomePage:!1,title:"Hadoop Command",description:"$ COMMAND [OPTIONS] SUBCOMMAND [SUBCOMMAND OPTIONS]",source:"@site/docs/Data Engineering/Hadoop/commands.md",sourceDirName:"Data Engineering/Hadoop",slug:"/Data Engineering/Hadoop/hadoop command",permalink:"/Data Engineering/Hadoop/hadoop command",editUrl:"https://github.com/wookiist/twl/edit/documentation/docs/Data Engineering/Hadoop/commands.md",tags:[],version:"current",lastUpdatedAt:1633838036,formattedLastUpdatedAt:"10/10/2021",frontMatter:{id:"hadoop command",title:"Hadoop Command"},sidebar:"tutorialSidebar",previous:{title:"Druid\ub780",permalink:"/Data Engineering/Druid/druid-intro-01"},next:{title:"Hadoop Installation Demo (Single Node, Standalone Mode)",permalink:"/Data Engineering/Hadoop/hadoop-installation-test-01"}},c=[{value:"COMMAND",id:"command",children:[]},{value:"OPTIONS",id:"options",children:[]},{value:"SUBCOMMAND",id:"subcommand",children:[]},{value:"SUBCOMMAND OPTIONS",id:"subcommand-options",children:[]},{value:"File System Shell (FS)",id:"file-system-shell-fs",children:[{value:"put",id:"put",children:[]},{value:"copyFromLocal",id:"copyfromlocal",children:[]}]},{value:"Question",id:"question",children:[]}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ COMMAND [OPTIONS] SUBCOMMAND [SUBCOMMAND OPTIONS]")),(0,r.kt)("h2",{id:"command"},"COMMAND"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hdfs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn")," \uba85\ub839\uc5b4\uac00 \uc5ec\uae30\uc5d0 \uc18d\ud568")),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java \uad00\ub828 \ud504\ub85c\uc138\uc2a4 \uc635\uc158\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"li"},"--buildpaths"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--config"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--debug"),"\uac00 \uc774\uc5d0 \uc18d\ud568")),(0,r.kt)("h2",{id:"subcommand"},"SUBCOMMAND"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2e4\uc81c \uc791\uc5c5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud55c \uba85\ub839\uc5b4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"jar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"archive"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rmadmin")," \ub4f1\uc758 \uba85\ub839\uc5b4\uac00 \uc5ec\uae30\uc5d0 \uc18d\ud568")),(0,r.kt)("h2",{id:"subcommand-options"},"SUBCOMMAND OPTIONS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\ub984 \uadf8\ub300\ub85c SUBCOMMAND\uc5d0\uc11c \ubc1b\uc744 \ucd94\uac00\uc801\uc778 \uc635\uc158 \uc778\uc790\ub4e4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-P"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-h"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-format")," \ub4f1\uc774 \uc18d\ud568")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"file-system-shell-fs"},"File System Shell (FS)"),(0,r.kt)("h3",{id:"put"},"put"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--put fs ..."),"\ub294 \ud604\uc7ac \ub85c\uceec \ub9ac\ub205\uc2a4 FS\uc5d0\uc11c \ud558\ub098\uc758 \ud30c\uc77c\uc774\ub098 \ub514\ub809\ud130\ub9ac\ub97c HDFS\uc758 \ubaa9\uc801\uc9c0\ub85c \ubcf5\uc0ac\ud558\ub294 \uba85\ub839\uc5b4\uc774\ub2e4. "),(0,r.kt)("h3",{id:"copyfromlocal"},"copyFromLocal"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"put")," \uba85\ub839\uc5b4\uc640 \uc720\uc0ac\ud558\ub2e4. \uadf8\ub7ec\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"copyFromLocal"),"\uc740 \uc624\ub85c\uc9c0 local\uc5d0\uc11c HDFS\ub85c\ub9cc \ub370\uc774\ud130\ub97c \ubcf5\uc0ac\ud558\ub294 \ubc18\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"put"),"\uc740 HDFS\ub4e0 \ub85c\uceec \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc774 \ub418\uc5c8\ub4e0 \uc5b4\ub514\uc11c\ub4e0 \ud30c\uc77c\uc744 \ubcf5\uc0ac\ud574\uc62c \uc218 \uc788\ub2e4. \ube44\uc2b7\ud55c \ub17c\ub9ac\ub85c \ud30c\uc77c\uc744 hdfs\ub85c\ubd80\ud130 \uac00\uc838\uc624\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"copyToLocal"),"\ub3c4 \uac19\uc740 \ub17c\ub9ac\ub85c \uc774\ud574\ud560 \uc218 \uc788\ub2e4. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucc38\uace0 : ",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/7811284/difference-between-hadoop-fs-put-and-hadoop-fs-copyfromlocal"},"https://stackoverflow.com/questions/7811284/difference-between-hadoop-fs-put-and-hadoop-fs-copyfromlocal"))),(0,r.kt)("h2",{id:"question"},"Question"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop fs")," \uba85\ub839\uc774\ub098 ",(0,r.kt)("inlineCode",{parentName:"li"},"hdfs dfs")," \uba85\ub839\uc740 \uacb0\uad6d \uac19\uc740 \uc77c\uc744 \ud558\ub294 \uac70 \uac19\uc740\ub370 \uc65c \ubd84\ub9ac \ub418\uc5b4 \uc788\ub294\uac70\uc9c0? ",(0,r.kt)("inlineCode",{parentName:"li"},"docker ps"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"docker container ls"),"\uac00 \uac19\uc740 \uc5ed\ud560\uc744 \ud558\ub294 \uac83\uacfc \ube44\uc2b7\ud55c \uc774\uc720\uc778\uac00?")))}m.isMDXComponent=!0}}]);
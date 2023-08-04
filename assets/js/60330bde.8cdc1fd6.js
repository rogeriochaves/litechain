"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6446],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},s="Working with Streams",i={unversionedId:"stream-basics/working_with_streams",id:"stream-basics/working_with_streams",title:"Working with Streams",description:"By default, all LLMs generate a stream of tokens:",source:"@site/docs/stream-basics/working_with_streams.md",sourceDirName:"stream-basics",slug:"/stream-basics/working_with_streams",permalink:"/langstream/docs/stream-basics/working_with_streams",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stream-basics/working_with_streams.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Why Streams?",permalink:"/langstream/docs/stream-basics/why_streams"},next:{title:"Composing Streams",permalink:"/langstream/docs/stream-basics/composing_streams"}},l={},u=[{value:"All original outputs are streamed",id:"all-original-outputs-are-streamed",level:2},{value:"Output Utils",id:"output-utils",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-streams"},"Working with Streams"),(0,r.kt)("p",null,"By default, all LLMs generate a stream of tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langstream.contrib import OpenAICompletionStream\n\nbacon_stream = OpenAICompletionStream[str, str](\n    "BaconStream",\n    lambda input: input,\n    model="ada",\n)\n\nasync for output in bacon_stream("I like bacon and"):\n    print(output.data)\n#=> iced\n#=>  tea\n#=> .\n#=>  I\n#=>  like\n#=>  to\n#=>  eat\n#=>  bacon\n#=>  and\n#=>\n#=> iced\n#=>  tea\n#=> .\n')),(0,r.kt)("p",null,"You can notice that it will print more or less one word per line, those are the tokens it is generating, since Python by default adds a new line for each ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," statement, we end up with one token per line."),(0,r.kt)("p",null,"When creating a simple Stream, if you return a single value, it will also output just that single value, so if you want to simulate an LLM, and create a stream that produces a stream of outputs, you can use the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/index.html#langstream.as_async_generator"},(0,r.kt)("inlineCode",{parentName:"a"},"as_async_generator()"))," utility function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langstream import Stream, as_async_generator\n\nstream_of_bacon_stream = Stream[None, str](\n    "StreamOfBaconStream",\n    lambda _: as_async_generator("I", "like", "bacon"),\n)\n\nasync for output in stream_of_bacon_stream(None):\n    print(output.data)\n#=> I\n#=> like\n#=> bacon\n')),(0,r.kt)("h2",{id:"all-original-outputs-are-streamed"},"All original outputs are streamed"),(0,r.kt)("p",null,"On LangStream, when you compose two or more streams, map the results or apply any operations on it, still the original values of anything generating outputs anywhere in the stream gets streamed, this means that if you have a stream being mapped,\nboth the original output and the transformed ones will be outputted, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langstream import Stream, as_async_generator\n\nstream_of_bacon_stream = Stream[None, str](\n    "StreamOfBaconStream",\n    lambda _: as_async_generator("I", "like", "bacon"),\n)\n\ntell_the_world = stream_of_bacon_stream.map(lambda token: token.upper())\n\nasync for output in tell_the_world(None):\n    print(output.stream, ":", output.data)\n#=> StreamOfBaconStream : I\n#=> StreamOfBaconStream@map : I\n#=> StreamOfBaconStream : like\n#=> StreamOfBaconStream@map : LIKE\n#=> StreamOfBaconStream : bacon\n#=> StreamOfBaconStream@map : BACON\n')),(0,r.kt)("p",null,"This is done by design so that you can always inspect what is going in the middle of a complex stream, either to debug it, or to display to the user for a better user experience."),(0,r.kt)("p",null,"If you want just the final output, you can check for the property ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/index.html#langstream.StreamOutput.final"},(0,r.kt)("inlineCode",{parentName:"a"},"output.final")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import time\n\nasync for output in tell_the_world(None):\n    if output.final:\n        time.sleep(1) # added for dramatic effect\n        print(output.data)\n#=> I\n#=> LIKE\n#=> BACON\n")),(0,r.kt)("h2",{id:"output-utils"},"Output Utils"),(0,r.kt)("p",null,"Now, as shown on the examples, you need to iterate over it with ",(0,r.kt)("inlineCode",{parentName:"p"},"async for")," to get the final output. However, you might not care about streaming or inspecting the middle results at all, and just want the final result as a whole. For that, you can use some utility functions that LangStream provides, for example, ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/index.html#langstream.collect_final_output"},(0,r.kt)("inlineCode",{parentName:"a"},"collect_final_output()")),", which gives you a single list with the final outputs all at once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langstream import collect_final_output\n\nawait collect_final_output(tell_the_world(None))\n#=> ['I', 'LIKE', 'BACON']\n")),(0,r.kt)("p",null,"Or, if your stream's final output is ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),", then you can use ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/index.html#langstream.join_final_output"},(0,r.kt)("inlineCode",{parentName:"a"},"join_final_output()")),", which gives you already the full string, concatenated"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langstream import join_final_output\n\nawait join_final_output(tell_the_world(None))\n#=> 'ILIKEBACON'\n")),(0,r.kt)("p",null,"(LLMs produce spaces as token as well, so normally the lack of spaces in here is not a problem)"),(0,r.kt)("p",null,"Check out also ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/index.html#langstream.filter_final_output"},(0,r.kt)("inlineCode",{parentName:"a"},"filter_final_output()")),", which gives you still an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncGenerator")," to loop over, but including only the final results."),(0,r.kt)("p",null,"Now that you know all about streams, you need to understand what does that mean when you are composing them together, keep on reading to learn about Composing Streams."))}c.isMDXComponent=!0}}]);
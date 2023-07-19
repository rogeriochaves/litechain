"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Extracting Schema for OpenAI Functions",c={unversionedId:"examples/openai-function-call-extract-schema",id:"examples/openai-function-call-extract-schema",title:"Extracting Schema for OpenAI Functions",description:"In the code example below, we use the openaifunctioncall library to extract a schema to be used on OpenAIChatChain from a good old python function, so you don't need to write the schema yourself.",source:"@site/docs/examples/openai-function-call-extract-schema.md",sourceDirName:"examples",slug:"/examples/openai-function-call-extract-schema",permalink:"/litechain/docs/examples/openai-function-call-extract-schema",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/openai-function-call-extract-schema.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Simple Bot with Weather Tool",permalink:"/litechain/docs/examples/weather-bot"}},l={},s=[],p=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const h={toc:s},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extracting-schema-for-openai-functions"},"Extracting Schema for OpenAI Functions"),(0,r.kt)("p",null,"In the code example below, we use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jxnl/openai_function_call"},"openai_function_call")," library to extract a schema to be used on ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/litechain/contrib/index.html#litechain.contrib.OpenAIChatChain"},(0,r.kt)("inlineCode",{parentName:"a"},"OpenAIChatChain"))," from a good old python function, so you don't need to write the schema yourself."),(0,r.kt)("p",null,"First you need to install the library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install openai-function-call\n")),(0,r.kt)("p",null,"Then simply annotate your function using ",(0,r.kt)("inlineCode",{parentName:"p"},"@openai_function")," and you will be able to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"openai_schema")," out of it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Literal, TypedDict\n\nfrom openai_function_call import openai_function\n\n\nclass WeatherReturn(TypedDict):\n    location: str\n    forecast: str\n    temperature: str\n\n# highlight-next-line\n@openai_function\ndef get_current_weather(\n    location: str, format: Literal["celsius", "fahrenheit"] = "celsius"\n) -> WeatherReturn:\n    """\n    Gets the current weather in a given location, use this function for any questions related to the weather\n\n    Parameters\n    ----------\n    location\n        The city to get the weather, e.g. San Francisco. Guess the location from user messages\n\n    format\n        A string with the full content of what the given role said\n    """\n\n    return WeatherReturn(\n        location=location,\n        forecast="sunny",\n        temperature="25 C" if format == "celsius" else "77 F",\n    )\n\n\nget_current_weather.openai_schema\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    {'name': 'get_current_weather',\n     'description': '\\n    Gets the current weather in a given location, use this function for any questions related to the weather\\n\\n    Parameters\\n    ----------\\n    location\\n        The city to get the weather, e.g. San Francisco. Guess the location from user messages\\n\\n    format\\n        A string with the full content of what the given role said\\n    ',\n     'parameters': {'properties': {'location': {'type': 'string'},\n       'format': {'default': 'celsius',\n        'enum': ['celsius', 'fahrenheit'],\n        'type': 'string'}},\n      'required': ['format', 'location'],\n      'type': 'object'}}\n"))),(0,r.kt)("p",null,"We can then use this schema directly on our chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json\nfrom typing import Union\n\nfrom litechain import Chain, collect_final_output\nfrom litechain.contrib import OpenAIChatChain, OpenAIChatDelta, OpenAIChatMessage\n\nchain: Chain[str, Union[OpenAIChatDelta, WeatherReturn]] = OpenAIChatChain[\n    str, OpenAIChatDelta\n](\n    "WeatherChain",\n    lambda user_input: [\n        OpenAIChatMessage(role="user", content=user_input),\n    ],\n    model="gpt-3.5-turbo",\n    # highlight-next-line\n    functions=[get_current_weather.openai_schema],\n    temperature=0,\n).map(\n    lambda delta: get_current_weather(**json.loads(delta.content))\n    if delta.role == "function" and delta.name == "get_current_weather"\n    else delta\n)\n\nawait collect_final_output(\n    chain(\n        "I\'m in my appartment in Amsterdam, thinking... should I take an umbrella for my pet chicken?"\n    )\n)\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    [{'location': 'Amsterdam', 'forecast': 'sunny', 'temperature': '25 C'}]\n"))),(0,r.kt)("p",null,"That's it, if you have any questions about this example, ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/48ZM5KkKgw"},"join our discord community")," and we can help you out."))}f.isMDXComponent=!0}}]);
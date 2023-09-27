"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5},i="Lite LLM (Azure, Anthropic, etc)",l={unversionedId:"llms/lite_llm",id:"llms/lite_llm",title:"Lite LLM (Azure, Anthropic, etc)",description:"Lite LLM is a library that wraps the API of many other LLMs APIs such as Azure, Anthropic, Cohere, HuggingFace, Replicate, and so on, standardizing all of them to use the same API surface as OpenAI Chat Completion API. LangStream provides a wrapper to LiteLLM so you can build your streams on most of the LLMs available on the market. To check all possible models, take a look at Lite LLM Docs.",source:"@site/docs/llms/lite_llm.md",sourceDirName:"llms",slug:"/llms/lite_llm",permalink:"/langstream/docs/llms/lite_llm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/llms/lite_llm.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"GPT4All LLMs",permalink:"/langstream/docs/llms/gpt4all"},next:{title:"Adding Memory",permalink:"/langstream/docs/llms/memory"}},s={},c=[{value:"Chat Completion",id:"chat-completion",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lite-llm-azure-anthropic-etc"},"Lite LLM (Azure, Anthropic, etc)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/BerriAI/litellm"},"Lite LLM")," is a library that wraps the API of many other LLMs APIs such as Azure, Anthropic, Cohere, HuggingFace, Replicate, and so on, standardizing all of them to use the same API surface as OpenAI Chat Completion API. LangStream provides a wrapper to LiteLLM so you can build your streams on most of the LLMs available on the market. To check all possible models, take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.litellm.ai/docs/completion/supported"},"Lite LLM Docs"),"."),(0,o.kt)("p",null,"To use the multiple LLMs provided by Lite LLM, you will need to have in your environment the API keys depending on which model you are going to use of course, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export OPENAI_API_KEY=<your key here>\nexport AZURE_API_BASE=<your key here>\nexport ANTHROPIC_API_KEY=<your key here>\nexport HUGGINGFACE_API_KEY=<your key here>\n")),(0,o.kt)("p",null,"Make sure you have LiteLLM installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install litellm\n")),(0,o.kt)("p",null,"Then, you should be able to use the ",(0,o.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/contrib/index.html#langstream.contrib.LiteLLMChatStream"},(0,o.kt)("inlineCode",{parentName:"a"},"LiteLLMChatStream")),", which has basically the same interface as as the ",(0,o.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/contrib/index.html#langstream.contrib.OpenAIChatStream"},(0,o.kt)("inlineCode",{parentName:"a"},"OpenAIChatStream")),", check it out:"),(0,o.kt)("h2",{id:"chat-completion"},"Chat Completion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langstream import Stream, join_final_output\nfrom langstream.contrib import LiteLLMChatStream, LiteLLMChatMessage, LiteLLMChatDelta\n\nrecipe_stream: Stream[str, str] = LiteLLMChatStream[str, LiteLLMChatDelta](\n    "RecipeStream",\n    lambda recipe_name: [\n        LiteLLMChatMessage(\n            role="system",\n            content="You are ChefLiteLLM, an assistant bot trained on all culinary knowledge of world\'s most proeminant Michelin Chefs",\n        ),\n        LiteLLMChatMessage(\n            role="user",\n            content=f"Hello, could you write me a recipe for {recipe_name}?",\n        ),\n    ],\n    model="gpt-3.5-turbo",\n).map(lambda delta: delta.content)\n\nawait join_final_output(recipe_stream("instant noodles"))\n#=> "Of course! Here\'s a simple and delicious recipe for instant noodles:\\n\\nIngredients:\\n- 1 packet of instant noodles (your choice of flavor)\\n- 2 cups of water\\n- 1 tablespoon of vegetable oil\\n- 1 small onion, thinly sliced\\n- 1 clove of garlic, minced\\n- 1 small carrot, julienned\\n- 1/2 cup of sliced mushrooms\\n- 1/2 cup of shredded cabbage\\n- 2 tablespoons of soy sauce\\n- 1 teaspoon of sesame oil\\n- Optional toppings: sliced green onions, boiled egg, cooked chicken or shrimp, chili flakes\\n\\nInstructions:\\n1. In a medium-sized pot, bring the water to a boil. Add the instant noodles and cook according to the package instructions until they are al dente. Drain and set aside.\\n\\n2. In the same pot, heat the vegetable oil over medium heat. Add the sliced onion and minced garlic, and saut\xe9 until they become fragrant and slightly caramelized.\\n\\n3. Add the julienned carrot, sliced mushrooms, and shredded cabbage to the pot. Stir-fry for a few minutes until the vegetables are slightly softened.\\n\\n4. Add the cooked instant noodles to the pot and toss them with the vegetables.\\n\\n5. In a small bowl, mix together the soy sauce and sesame oil. Pour this mixture over the noodles and vegetables, and toss everything together until well combined.\\n\\n6. Cook for an additional 2-3 minutes, stirring occasionally, to allow the flavors to meld together.\\n\\n7. Remove the pot from heat and divide the noodles into serving bowls. Top with your desired toppings such as sliced green onions, boiled egg, cooked chicken or shrimp, and chili flakes.\\n\\n8. Serve the instant noodles hot and enjoy!\\n\\nFeel free to customize this recipe by adding your favorite vegetables or protein. Enjoy your homemade instant noodles!"\n')),(0,o.kt)("p",null,"Analogous to OpenAI, it takes ",(0,o.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/contrib/index.html#langstream.contrib.LiteLLMChatMessage"},(0,o.kt)("inlineCode",{parentName:"a"},"LiteLLMChatMessage")),"s and produces ",(0,o.kt)("a",{parentName:"p",href:"pathname:///reference/langstream/contrib/index.html#langstream.contrib.LiteLLMChatDelta"},(0,o.kt)("inlineCode",{parentName:"a"},"LiteLLMChatDelta")),"s, it can also take ",(0,o.kt)("inlineCode",{parentName:"p"},"functions")," as an argument for function calling, but keep in mind not all models support it and it might simply be ignored, be sure to check ",(0,o.kt)("a",{parentName:"p",href:"https://docs.litellm.ai/docs/completion/supported"},"Lite LLM Docs")," for the model you are using."),(0,o.kt)("p",null,"Another caveat is that, by default, LangStream tries to stream all outputs, but not all models and APIs support streaming, so you might need to disable it with ",(0,o.kt)("inlineCode",{parentName:"p"},"stream=False")," or they might throw exceptions, again be sure to check which models support it or not."),(0,o.kt)("p",null,"We hope that with that you will be able to use the best LLM available to you, or even mix and match on the middle of your streams depending on the need, or falling back if one LLM is not generating the right answer, and so on."),(0,o.kt)("p",null,"Keep on reading the next part of the docs!"))}d.isMDXComponent=!0}}]);
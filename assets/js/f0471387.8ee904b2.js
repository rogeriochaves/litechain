"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),h=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Simple Bot with Weather Tool and Error Handling",s={unversionedId:"examples/weather-bot-error-handling",id:"examples/weather-bot-error-handling",title:"Simple Bot with Weather Tool and Error Handling",description:"The example below is similar to the Simple Bot with Weather Tool example, but here we add on_error for error handling in case something went wrong when calling the weather function. What we do is simply inject the error back into the LLM, so it can figure out itself what is missing, which in example below is the location field, and ask the user for more input",source:"@site/docs/examples/weather-bot-error-handling.md",sourceDirName:"examples",slug:"/examples/weather-bot-error-handling",permalink:"/litechain/docs/examples/weather-bot-error-handling",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/weather-bot-error-handling.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Simple Bot with Weather Tool",permalink:"/litechain/docs/examples/weather-bot"},next:{title:"Extracting Schema for OpenAI Functions",permalink:"/litechain/docs/examples/openai-function-call-extract-schema"}},l={},h=[],c=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:h},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-bot-with-weather-tool-and-error-handling"},"Simple Bot with Weather Tool and Error Handling"),(0,a.kt)("p",null,"The example below is similar to the ",(0,a.kt)("a",{parentName:"p",href:"./weather-bot"},"Simple Bot with Weather Tool")," example, but here we add ",(0,a.kt)("inlineCode",{parentName:"p"},"on_error")," for error handling in case something went wrong when calling the weather function. What we do is simply inject the error back into the LLM, so it can figure out itself what is missing, which in example below is the ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," field, and ask the user for more input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import json\nfrom typing import Any, AsyncGenerator, List, Literal, Tuple, TypedDict\nfrom litechain import debug, as_async_generator\n\nfrom litechain.contrib.llms.open_ai import (\n    OpenAIChatChain,\n    OpenAIChatDelta,\n    OpenAIChatMessage,\n)\nfrom litechain.core.chain import Chain, ChainOutput\n\n\nclass Memory(TypedDict):\n    history: List[OpenAIChatMessage]\n\n\nmemory = Memory(history=[])\n\n\ndef save_message_to_memory(message: OpenAIChatMessage) -> OpenAIChatMessage:\n    memory["history"].append(message)\n    return message\n\n\ndef update_delta_on_memory(delta: OpenAIChatDelta) -> OpenAIChatDelta:\n    if not isinstance(delta, OpenAIChatDelta):\n        return delta\n\n    if memory["history"][-1].role != delta.role and delta.role is not None:\n        memory["history"].append(\n            OpenAIChatMessage(role=delta.role, content=delta.content, name=delta.name)\n        )\n    else:\n        memory["history"][-1].content += delta.content\n    return delta\n\n\ndef get_current_weather(\n    location: str, format: Literal["celsius", "fahrenheit"] = "celsius"\n) -> OpenAIChatDelta:\n    result = {\n        "location": location,\n        "forecast": "sunny",\n        "temperature": "25 C" if format == "celsius" else "77 F",\n    }\n\n    return OpenAIChatDelta(\n        role="function", name="get_current_weather", content=json.dumps(result)\n    )\n\n\ndef error_handler(\n    err: Exception,\n) -> AsyncGenerator[ChainOutput[OpenAIChatDelta], Any]:\n    # Try to recover from the error if it happened on the function calling\n    if "get_current_weather" in str(err):\n        x = function_error_chain(("get_current_weather", err))\n        return x\n    else:\n        # Otherwise just re-raise it\n        raise err\n\n\n# Chain Definitions\n\nweather_chain = debug(\n    OpenAIChatChain[str, OpenAIChatDelta](\n        "WeatherChain",\n        lambda user_input: [\n            OpenAIChatMessage(\n                role="system",\n                content="You are a chatbot that has access to real-time weather information",\n            ),\n            *memory["history"],\n            save_message_to_memory(\n                OpenAIChatMessage(role="user", content=user_input),\n            ),\n        ],\n        model="gpt-3.5-turbo-0613",\n        functions=[\n            {\n                "name": "get_current_weather",\n                "description": "Gets the current weather in a given location, use this function for any questions related to the weather",\n                "parameters": {\n                    "type": "object",\n                    "properties": {\n                        "location": {\n                            "description": "The city to get the weather, e.g. San Francisco. Guess the location from user messages",\n                            "type": "string",\n                        },\n                        "format": {\n                            "description": "A string with the full content of what the given role said",\n                            "type": "string",\n                            "enum": ("celsius", "fahrenheit"),\n                        },\n                    },\n                    # highlight-next-line\n                    # We comment this out so the model can send empty location by mistake\n                    # highlight-next-line\n                    # "required": ["location"],\n                },\n            }\n        ],\n        temperature=0,\n    )\n    .map(\n        # We store the function call that the LLM made with it\'s arguments in memory, so it can inspect itself back later on\n        lambda delta: save_message_to_memory(\n            OpenAIChatMessage(\n                role="function",\n                name="get_current_weather",\n                content=delta.content,\n            )\n        )\n        # Then we call the function\n        and get_current_weather(**json.loads(delta.content))\n        # If it was called of course\n        if delta.role == "function" and delta.name == "get_current_weather"\n        else delta\n    )\n    # highlight-next-line\n    .on_error(error_handler)\n    .map(update_delta_on_memory)\n)\n\nfunction_reply_chain = debug(\n    OpenAIChatChain[None, OpenAIChatDelta](\n        "FunctionReplyChain",\n        lambda _: memory["history"],\n        model="gpt-3.5-turbo-0613",\n        temperature=0,\n    ).map(update_delta_on_memory)\n)\n\n# If an error happens, this chain is triggered, it simply takes the current history, plus a user message with the error message\n# this is enough for the model to figure out what was the issue and ask user for additional input\nfunction_error_chain = OpenAIChatChain[Tuple[str, Exception], OpenAIChatDelta](\n    "FunctionErrorChain",\n    lambda name_and_err: [\n        *memory["history"],\n        save_message_to_memory(\n            OpenAIChatMessage(\n                role="user",\n                content=str(name_and_err[1]),\n            ),\n        ),\n    ],\n    model="gpt-3.5-turbo-0613",\n    temperature=0,\n)\n\nweather_bot: Chain[str, OpenAIChatDelta] = weather_chain.and_then(\n    # Reply based on function result if last output was a function output\n    lambda outputs: function_reply_chain(None)\n    if list(outputs)[-1].role == "function"\n    # Otherwise just re-yield the outputs\n    else as_async_generator(*outputs)\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from litechain.utils.chain import collect_final_output\n\n_ = await collect_final_output(weather_bot("hi there"))\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > WeatherChain\n    \n    Assistant: Hello! How can I assist you today?\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from litechain.utils.chain import collect_final_output\n\n_ = await collect_final_output(weather_bot("it is hot today?"))\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > WeatherChain\n    \n    Function get_current_weather: {}\n    \n    > WeatherChain@map\n    \n    Exception: get_current_weather() missing 1 required positional argument: 'location'\n    \n    > FunctionErrorChain\n    \n    Assistant: I apologize for the inconvenience. In order to provide you with the current weather, could you please provide me with your location?\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'_ = await collect_final_output(weather_bot("I am in Amsterdam"))\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > WeatherChain\n    \n    Function get_current_weather: {\n      "location": "Amsterdam"\n    }\n    \n    > WeatherChain@map\n    \n    Function get_current_weather: {"location": "Amsterdam", "forecast": "sunny", "temperature": "25 C"}\n    \n    > FunctionReplyChain\n    \n    Assistant: It seems that the current weather in Amsterdam is sunny with a temperature of 25\xb0C. Stay hydrated and enjoy the day!\n'))),(0,a.kt)("p",null,"As you can see, the bot first tried to call ",(0,a.kt)("inlineCode",{parentName:"p"},"get_current_weather")," with empty arguments, which threw an error, we inject this error back into the ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionErrorChain"),", making the bot realize the mistake and ask the user to provide the location. Once provided, the function call is triggered again, this time with the right location and response."),(0,a.kt)("p",null,"Now take a look on what happened inside the memory, we save both the original function call and the error message there:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'memory["history"]\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [OpenAIChatMessage(role='user', content='hi there', name=None),\n     OpenAIChatMessage(role='assistant', content='Hello! How can I assist you today?', name=None),\n     OpenAIChatMessage(role='user', content='it is hot today?', name=None),\n     OpenAIChatMessage(role='function', content='{}', name='get_current_weather'),\n     OpenAIChatMessage(role='user', content=\"get_current_weather() missing 1 required positional argument: 'location'\", name=None),\n     OpenAIChatMessage(role='assistant', content='I apologize for the inconvenience. In order to provide you with the current weather, could you please provide me with your location?', name=None),\n     OpenAIChatMessage(role='user', content='I am in Amsterdam', name=None),\n     OpenAIChatMessage(role='function', content='{\\n  \"location\": \"Amsterdam\"\\n}{\"location\": \"Amsterdam\", \"forecast\": \"sunny\", \"temperature\": \"25 C\"}', name='get_current_weather'),\n     OpenAIChatMessage(role='assistant', content='It seems that the current weather in Amsterdam is sunny with a temperature of 25\xb0C. Stay hydrated and enjoy the day!', name=None)]\n"))),(0,a.kt)("p",null,"That's it, if you have any questions about this example, ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/48ZM5KkKgw"},"join our discord community")," and we can help you out."),(0,a.kt)("p",null,"Also, if you are interested in running a bot like this inside a nice UI, check out our ",(0,a.kt)("a",{parentName:"p",href:"../ui/chainlit"},"docs on Chainlit"),"."))}d.isMDXComponent=!0}}]);
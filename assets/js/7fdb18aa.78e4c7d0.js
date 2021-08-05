"use strict";(self.webpackChunkreact_kakao_maps_sdk_docs=self.webpackChunkreact_kakao_maps_sdk_docs||[]).push([[965],{7479:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return k},toc:function(){return v}});var n=t(7462),s=t(3366),o=t(7294),r=t(3905),l=t(8086),c=t(6980),p=t(6823),i=function(){var e=(0,c.iu)({apiKey:"6ec8020798deac7ef2f8897ad1c5ccf1"});return o.createElement(p.D5,{loading:e,center:{lat:33.450701,lng:126.570667},size:{width:"100%",height:"450px"},option:{level:3}},o.createElement(p.le,{position:{lat:33.450701,lng:126.570667}},o.createElement("div",{className:"label"},o.createElement("span",{className:"left"}),o.createElement("span",{className:"center"},"\uce74\uce74\uc624!"),o.createElement("span",{className:"right"}))))},m=["components"],u={title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae301",sidebar_position:3},d=void 0,k={unversionedId:"sample/customOverlay1",id:"sample/customOverlay1",isDocsHomePage:!1,title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae301",description:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/customOverlay1.mdx",sourceDirName:"sample",slug:"/sample/customOverlay1",permalink:"/docs/sample/customOverlay1",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/customOverlay1.mdx",version:"current",sidebarPosition:3,frontMatter:{title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae301",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\uc9c0\ub3c4 \uc774\ub3d9\uc2dc\ud0a4\uae30",permalink:"/docs/sample/moveMap"},next:{title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae302",permalink:"/docs/sample/customOverlay2"}},v=[{value:"Source Code",id:"source-code",children:[]}],f={toc:v};function h(e){var a=e.components,t=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)(i,{mdxType:"SampleCreateMap"}),(0,r.kt)("h3",{id:"source-code"},"Source Code"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"original docs : ",(0,r.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/customOverlay1/"},"https://apis.map.kakao.com/web/sample/customOverlay1/"))),(0,r.kt)(l.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React from "react";\nimport { useKakaoMapsSDK } from "react-kakao-maps-sdk/hooks";\nimport { Map, CustomOverlayMap } from "react-kakao-maps-sdk";\nimport "./customOverlay1.css";\n\nconst SampleCreateMap = () => {\n  //  script \ub3d9\uc801 \ub85c\ub529\ud558\ub294 hook, HTML\uc5d0 Sciprt \uc0bd\uc785 \ud558\uc5ec \uc0ac\uc6a9\ud558\uc5ec\ub3c4 \uac00\ub2a5\ud568.\n  const loading = useKakaoMapsSDK({\n    apiKey: process.env.KAKAOMAP_API_KEY,\n  });\n\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      loading={loading} // useKakaoMapsSDK\ub97c \uc774\uc6a9\ud558\uc5ec script \ub3d9\uc801 \ub85c\ub529 \ud560 \ub54c \uc0ac\uc6a9\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      size={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      option={{\n        level: 3, // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      }}\n    >\n      <CustomOverlayMap // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\ub97c \ud45c\uc2dc\ud560 Container\n        // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uac00 \ud45c\uc2dc\ub420 \uc704\uce58\uc785\ub2c8\ub2e4\n        position={{\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n      >\n        {/* \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uc5d0 \ud45c\uc2dc\ud560 \ub0b4\uc6a9\uc785\ub2c8\ub2e4 */}\n        <div className="label">\n          <span className="left"></span>\n          <span className="center">\uce74\uce74\uc624!</span>\n          <span className="right"></span>\n        </div>\n      </CustomOverlayMap>\n    </Map>\n  );\n};\n\nexport default SampleCreateMap;\n'))}h.isMDXComponent=!0}}]);
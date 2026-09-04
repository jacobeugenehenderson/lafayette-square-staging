import{r as a,a as k,j as y}from"./react-CYSrURN_.js";import{a4 as _,r as v,b6 as A}from"./vendor-CQmybvCZ.js";import{bH as n,bA as R,X as p,a0 as F,I as E}from"./treeAtlasMaterial-_Ncx1M0K.js";const Y=Object.freeze({values:{...n}}),B=["bearingX","bearingZ","distance","scale","rotation","yOffset"];function G(c){if(c)return c;if(typeof window>"u")return E.lookId;const i=window.location.search.match(/look=([^&]+)/);return i?decodeURIComponent(i[1]):E.lookId}const L=void 0;function h(c){return c??"production"}function j({lookId:c,bakeLastMs:i,landscapeOverride:M}){const m=G(c),b=a.useRef(),d=a.useRef(null),x=R(m,i),u=(M??x?.landscape??Y).values,[r,C]=a.useState(null);a.useEffect(()=>{let o=!1;const e=h(i);return fetch(`${p}baked/${m}/landscape/landscape.json?t=${e}`,L).then(l=>l.ok?l.json():null).then(l=>{o||C(l)}).catch(()=>{o||C(null)}),()=>{o=!0}},[m,i]);const z=a.useMemo(()=>{const o=new _({color:"#ffffff",metalness:0,roughness:1});return o.customProgramCacheKey=()=>"mountain-backdrop-v1",o.onBeforeCompile=e=>{e.uniforms.uSnowline={value:n.snowline},e.uniforms.uSnowSoft={value:n.snowSoftness},e.uniforms.uSnowColor={value:new v(n.snowColor)},e.uniforms.uRockColor={value:new v(n.rockColor)},e.uniforms.uScrubColor={value:new v(n.scrubColor)},e.uniforms.uElevMin={value:0},e.uniforms.uElevMax={value:2e3},e.uniforms.uHaze={value:n.haze},e.uniforms.uHazeColor={value:new v(n.hazeColor)},e.uniforms.uGroundY={value:0},e.uniforms.uReliefH={value:1500},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
         varying float vElevation;
         varying float vWorldY;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
         vElevation = position.y;
         vWorldY = (modelMatrix * vec4(transformed, 1.0)).y;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
         uniform float uSnowline;
         uniform float uSnowSoft;
         uniform vec3  uSnowColor;
         uniform vec3  uRockColor;
         uniform vec3  uScrubColor;
         uniform float uElevMin;
         uniform float uElevMax;
         uniform float uHaze;
         uniform vec3  uHazeColor;
         uniform float uGroundY;
         uniform float uReliefH;
         varying float vElevation;
         varying float vWorldY;`),e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
         float scrubMid = mix(uElevMin, uSnowline, 0.5);
         float tScrub = smoothstep(uElevMin, scrubMid, vElevation);
         vec3  lower  = mix(uScrubColor, uRockColor, tScrub);
         float tSnow  = smoothstep(uSnowline - uSnowSoft, uSnowline + uSnowSoft, vElevation);
         diffuseColor.rgb = mix(lower, uSnowColor, tSnow);`),e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
         float dist = length(vViewPosition);
         float distHaze = smoothstep(1500.0, 14000.0, dist);
         float heightFade = 1.0 - clamp((vWorldY - uGroundY) / max(uReliefH, 1.0), 0.0, 1.0);
         float hazeAmt = clamp(uHaze * distHaze * mix(0.35, 1.0, heightFade), 0.0, 1.0);
         gl_FragColor.rgb = mix(gl_FragColor.rgb, uHazeColor, hazeAmt);`),d.current=e},o},[]),[S,H]=a.useState(null);a.useEffect(()=>{if(!r?.asset)return;let o=!1;const e=h(i),l=`${p}baked/${m}/landscape/${r.asset}?t=${e}`;return new A().load(l,f=>{if(o)return;let s=null;f.scene.traverse(g=>{g.isMesh&&!s&&(s=g.geometry)}),s&&(s.computeBoundingSphere(),H(s))},void 0,f=>console.warn("[MountainBackdrop] GLB load failed:",f)),()=>{o=!0}},[r,m,i]);const t=a.useMemo(()=>{const o=r?.placement||{},e={};for(const l of B){const f=u[l],s=n[l];e[l]=f!==void 0&&f!==s?f:o[l]??s}return e},[r,u]);a.useEffect(()=>{const o=d.current;o&&(o.uniforms.uSnowline.value=u.snowline??n.snowline,o.uniforms.uSnowSoft.value=u.snowSoftness??n.snowSoftness,o.uniforms.uSnowColor.value.set(u.snowColor??n.snowColor),o.uniforms.uRockColor.value.set(u.rockColor??n.rockColor),o.uniforms.uScrubColor.value.set(u.scrubColor??n.scrubColor),o.uniforms.uHaze.value=u.haze??n.haze,r?.elevM&&(o.uniforms.uElevMin.value=r.elevM.min,o.uniforms.uElevMax.value=r.elevM.max,o.uniforms.uGroundY.value=r.elevM.min*t.scale+t.yOffset,o.uniforms.uReliefH.value=Math.max(1,(r.elevM.max-r.elevM.min)*t.scale)))},[u,r,t,S]);const w=a.useMemo(()=>new v,[]);return k(()=>{const o=d.current;if(!o)return;w.set(u.hazeColor??n.hazeColor);const e=F.getState().horizonColor;o.uniforms.uHazeColor.value.copy(w).lerp(e,.5)}),!r||!S?null:y.jsx("mesh",{ref:b,geometry:S,material:z,position:[t.distance*t.bearingX,t.yOffset,t.distance*t.bearingZ],rotation:[0,t.rotation,0],scale:t.scale,frustumCulled:!1})}export{j as M};

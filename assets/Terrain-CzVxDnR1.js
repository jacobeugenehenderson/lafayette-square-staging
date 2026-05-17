import{r as m,j as b}from"./react-BCTB4csF.js";import{aC as d,a4 as f}from"./vendor-Cefv4pHc.js";import{by as o,bz as n,bA as h,bB as c,bC as v}from"./index--kPpTIq3.js";function y(){const x=m.useMemo(()=>{const r=o.maxX-o.minX,e=o.maxZ-o.minZ,a=new d(r,e,n-1,h-1);a.rotateX(-Math.PI/2);const i=a.attributes.position.array;for(let t=0;t<i.length/3;t++){const g=Math.floor(t/n),p=t%n,s=g*n+p;s<c.length&&(i[t*3+1]=c[s])}return a.computeVertexNormals(),a},[]),l=m.useMemo(()=>{const r=new f({color:"#2a2a26",roughness:.95});return r.onBeforeCompile=e=>{e.uniforms.uExag=v,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform float uExag;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y *= uExag;`),e.vertexShader=e.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        objectNormal = normalize(vec3(
          objectNormal.x * max(uExag, 0.01),
          objectNormal.y,
          objectNormal.z * max(uExag, 0.01)
        ));`)},r.customProgramCacheKey=()=>"terrain-exag",r},[]),u=m.useMemo(()=>[(o.minX+o.maxX)/2,-.1,(o.minZ+o.maxZ)/2],[]);return b.jsx("mesh",{geometry:x,position:u,receiveShadow:!0,material:l})}export{y as T};

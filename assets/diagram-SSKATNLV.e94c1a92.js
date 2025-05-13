var R=Object.defineProperty;var w=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var M=(a,t,e)=>t in a?R(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,b=(a,t)=>{for(var e in t||(t={}))F.call(t,e)&&M(a,e,t[e]);if(w)for(var e of w(t))I.call(t,e)&&M(a,e,t[e]);return a};import{p as D}from"./chunk-4BMEZGHF.c0a410ae.js";import{N as P,_ as l,g as j,h as G,y as z,z as B,i as H,k as V,t as W,O as C,P as A,E as Z,aT as N,aZ as U}from"./vendor.4aa0284a.js";import{p as q}from"./mermaid-parser.core.2c03b4f3.js";import"./_baseUniq.337d6ccb.js";import"./_basePickBy.d9144985.js";import"./clone.1ce294ba.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},L={axes:[],curves:[],options:x},h=structuredClone(L),X=P.radar,Y=l(()=>C(b(b({},X),A().radar)),"getConfig"),T=l(()=>h.axes,"getAxes"),J=l(()=>h.curves,"getCurves"),K=l(()=>h.options,"getOptions"),Q=l(a=>{h.axes=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name}})},"setAxes"),tt=l(a=>{h.curves=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name,entries:et(t.entries)}})},"setCurves"),et=l(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=T();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(s=>{var o;return((o=s.axis)==null?void 0:o.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),at=l(a=>{var e,r,s,o,i,n,c,d,u,p;const t=a.reduce((g,m)=>(g[m.name]=m,g),{});h.options={showLegend:(r=(e=t.showLegend)==null?void 0:e.value)!=null?r:x.showLegend,ticks:(o=(s=t.ticks)==null?void 0:s.value)!=null?o:x.ticks,max:(n=(i=t.max)==null?void 0:i.value)!=null?n:x.max,min:(d=(c=t.min)==null?void 0:c.value)!=null?d:x.min,graticule:(p=(u=t.graticule)==null?void 0:u.value)!=null?p:x.graticule}},"setOptions"),rt=l(()=>{Z(),h=structuredClone(L)},"clear"),y={getAxes:T,getCurves:J,getOptions:K,setAxes:Q,setCurves:tt,setOptions:at,getConfig:Y,clear:rt,setAccTitle:j,getAccTitle:G,setDiagramTitle:z,getDiagramTitle:B,getAccDescription:H,setAccDescription:V},st=l(a=>{D(a,y);const{axes:t,curves:e,options:r}=a;y.setAxes(t),y.setCurves(e),y.setOptions(r)},"populate"),nt={parse:l(async a=>{const t=await q("radar",a);W.debug(t),st(t)},"parse")},ot=l((a,t,e,r)=>{var $;const s=r.db,o=s.getAxes(),i=s.getCurves(),n=s.getOptions(),c=s.getConfig(),d=s.getDiagramTitle(),u=N(t),p=it(u,c),g=($=n.max)!=null?$:Math.max(...i.map(f=>Math.max(...f.entries))),m=n.min,v=Math.min(c.width,c.height)/2;lt(p,o,v,n.ticks,n.graticule),ct(p,o,v,c),O(p,o,i,m,g,n.graticule,c),_(p,i,n.showLegend,c),p.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),it=l((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r),a.append("g").attr("transform",`translate(${s.x}, ${s.y})`)},"drawFrame"),lt=l((a,t,e,r,s)=>{if(s==="circle")for(let o=0;o<r;o++){const i=e*(o+1)/r;a.append("circle").attr("r",i).attr("class","radarGraticule")}else if(s==="polygon"){const o=t.length;for(let i=0;i<r;i++){const n=e*(i+1)/r,c=t.map((d,u)=>{const p=2*u*Math.PI/o-Math.PI/2,g=n*Math.cos(p),m=n*Math.sin(p);return`${g},${m}`}).join(" ");a.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),ct=l((a,t,e,r)=>{const s=t.length;for(let o=0;o<s;o++){const i=t[o].label,n=2*o*Math.PI/s-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(n)).attr("y2",e*r.axisScaleFactor*Math.sin(n)).attr("class","radarAxisLine"),a.append("text").text(i).attr("x",e*r.axisLabelFactor*Math.cos(n)).attr("y",e*r.axisLabelFactor*Math.sin(n)).attr("class","radarAxisLabel")}},"drawAxes");function O(a,t,e,r,s,o,i){const n=t.length,c=Math.min(i.width,i.height)/2;e.forEach((d,u)=>{if(d.entries.length!==n)return;const p=d.entries.map((g,m)=>{const v=2*Math.PI*m/n-Math.PI/2,$=k(g,r,s,c),f=$*Math.cos(v),E=$*Math.sin(v);return{x:f,y:E}});o==="circle"?a.append("path").attr("d",S(p,i.curveTension)).attr("class",`radarCurve-${u}`):o==="polygon"&&a.append("polygon").attr("points",p.map(g=>`${g.x},${g.y}`).join(" ")).attr("class",`radarCurve-${u}`)})}l(O,"drawCurves");function k(a,t,e,r){const s=Math.min(Math.max(a,t),e);return r*(s-t)/(e-t)}l(k,"relativeRadius");function S(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){const o=a[(s-1+e)%e],i=a[s],n=a[(s+1)%e],c=a[(s+2)%e],d={x:i.x+(n.x-o.x)*t,y:i.y+(n.y-o.y)*t},u={x:n.x-(c.x-i.x)*t,y:n.y-(c.y-i.y)*t};r+=` C${d.x},${d.y} ${u.x},${u.y} ${n.x},${n.y}`}return`${r} Z`}l(S,"closedRoundCurve");function _(a,t,e,r){if(!e)return;const s=(r.width/2+r.marginRight)*3/4,o=-(r.height/2+r.marginTop)*3/4,i=20;t.forEach((n,c)=>{const d=a.append("g").attr("transform",`translate(${s}, ${o+c*i})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(n.label)})}l(_,"drawLegend");var dt={draw:ot},pt=l((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles"),ut=l(a=>{const t=U(),e=A(),r=C(t,e.themeVariables),s=C(r.radar,a);return{themeVariables:r,radarOptions:s}},"buildRadarStyleOptions"),gt=l(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=ut(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${pt(t,e)}
	`},"styles"),bt={parser:nt,db:y,renderer:dt,styles:gt};export{bt as diagram};

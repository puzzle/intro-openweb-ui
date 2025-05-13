var F=Object.defineProperty;var x=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var C=(t,e,a)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))P.call(e,a)&&C(t,a,e[a]);if(x)for(var a of x(e))z.call(e,a)&&C(t,a,e[a]);return t};import{p as T}from"./chunk-4BMEZGHF.c0a410ae.js";import{N as W,g as _,h as E,y as D,z as A,i as j,k as N,_ as l,t as y,O as $,P as L,E as M,aT as O,u as Y}from"./vendor.4aa0284a.js";import{p as G}from"./mermaid-parser.core.2c03b4f3.js";import"./_baseUniq.337d6ccb.js";import"./_basePickBy.d9144985.js";import"./clone.1ce294ba.js";var w={packet:[]},v=structuredClone(w),H=W.packet,I=l(()=>{const t=$(m(m({},H),L().packet));return t.showBits&&(t.paddingY+=10),t},"getConfig"),U=l(()=>v.packet,"getPacket"),q=l(t=>{t.length>0&&v.packet.push(t)},"pushWord"),K=l(()=>{M(),v=structuredClone(w)},"clear"),h={pushWord:q,getPacket:U,getConfig:I,clear:K,setAccTitle:_,getAccTitle:E,setDiagramTitle:D,getDiagramTitle:A,getAccDescription:j,setAccDescription:N},R=1e4,X=l(t=>{T(t,h);let e=-1,a=[],n=1;const{bitsPerRow:i}=h.getConfig();for(let{start:o,end:r,label:p}of t.blocks){if(r&&r<o)throw new Error(`Packet block ${o} - ${r} is invalid. End must be greater than start.`);if(o!==e+1)throw new Error(`Packet block ${o} - ${r!=null?r:o} is not contiguous. It should start from ${e+1}.`);for(e=r!=null?r:o,y.debug(`Packet block ${o} - ${e} with label ${p}`);a.length<=i+1&&h.getPacket().length<R;){const[b,c]=Z({start:o,end:r,label:p},n,i);if(a.push(b),b.end+1===n*i&&(h.pushWord(a),a=[],n++),!c)break;({start:o,end:r,label:p}=c)}}h.pushWord(a)},"populate"),Z=l((t,e,a)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]},"getNextFittingBlock"),J={parse:l(async t=>{const e=await G("packet",t);y.debug(e),X(e)},"parse")},Q=l((t,e,a,n)=>{const i=n.db,o=i.getConfig(),{rowHeight:r,paddingY:p,bitWidth:b,bitsPerRow:c}=o,u=i.getPacket(),s=i.getDiagramTitle(),g=r+p,d=g*(u.length+1)-(s?0:r),k=b*c+2,f=O(e);f.attr("viewbox",`0 0 ${k} ${d}`),Y(f,d,k,o.useMaxWidth);for(const[B,S]of u.entries())V(f,S,B,o);f.append("text").text(s).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),V=l((t,e,a,{rowHeight:n,paddingX:i,paddingY:o,bitWidth:r,bitsPerRow:p,showBits:b})=>{const c=t.append("g"),u=a*(n+o)+o;for(const s of e){const g=s.start%p*r+1,d=(s.end-s.start+1)*r-i;if(c.append("rect").attr("x",g).attr("y",u).attr("width",d).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",u+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(s.label),!b)continue;const k=s.end===s.start,f=u-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(s.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(s.end)}},"drawWord"),tt={draw:Q},et={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},at=l(({packet:t}={})=>{const e=$(et,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),dt={parser:J,db:h,renderer:tt,styles:at};export{dt as diagram};

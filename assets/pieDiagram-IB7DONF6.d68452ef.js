import{p as N}from"./chunk-4BMEZGHF.c0a410ae.js";import{N as B,y as U,z as V,g as Z,h as q,k as H,i as X,_ as i,t as D,E as Y,n as J,O as K,aT as Q,aV as ee,aW as z,aX as te,u as ae,aY as re}from"./vendor.4aa0284a.js";import{p as ie}from"./mermaid-parser.core.2c03b4f3.js";import"./_baseUniq.337d6ccb.js";import"./_basePickBy.d9144985.js";import"./clone.1ce294ba.js";var F=B.pie,w={sections:new Map,showData:!1,config:F},m=w.sections,y=w.showData,se=structuredClone(F),ne=i(()=>structuredClone(se),"getConfig"),oe=i(()=>{m=new Map,y=w.showData,Y()},"clear"),le=i(({label:e,value:a})=>{m.has(e)||(m.set(e,a),D.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=i(()=>m,"getSections"),de=i(e=>{y=e},"setShowData"),pe=i(()=>y,"getShowData"),G={getConfig:ne,clear:oe,setDiagramTitle:U,getDiagramTitle:V,setAccTitle:Z,getAccTitle:q,setAccDescription:H,getAccDescription:X,addSection:le,getSections:ce,setShowData:de,getShowData:pe},ge=i((e,a)=>{N(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ue={parse:i(async e=>{const a=await ie("pie",e);D.debug(a),ge(a,G)},"parse")},fe=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),he=fe,me=i(e=>{const a=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,l)=>l.value-s.value);return re().value(s=>s.value)(a)},"createPieArcs"),ve=i((e,a,M,s)=>{D.debug(`rendering pie chart
`+e);const l=s.db,T=J(),$=K(l.getConfig(),T.pie),b=40,n=18,g=4,c=450,v=c,S=Q(a),d=S.append("g");d.attr("transform","translate("+v/2+","+c/2+")");const{themeVariables:r}=T;let[u]=ee(r.pieOuterStrokeWidth);u!=null||(u=2);const A=$.textPosition,f=Math.min(v,c)/2-b,O=z().innerRadius(0).outerRadius(f),P=z().innerRadius(f*A).outerRadius(f*A);d.append("circle").attr("cx",0).attr("cy",0).attr("r",f+u/2).attr("class","pieOuterCircle");const _=l.getSections(),x=me(_),R=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=te(R);d.selectAll("mySlices").data(x).enter().append("path").attr("d",O).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let E=0;_.forEach(t=>{E+=t}),d.selectAll("mySlices").data(x).enter().append("text").text(t=>(t.data.value/E*100).toFixed(0)+"%").attr("transform",t=>"translate("+P.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),d.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const C=d.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,o)=>{const h=n+g,j=h*p.domain().length/2,I=12*n,L=o*h-j;return"translate("+I+","+L+")"});C.append("rect").attr("width",n).attr("height",n).style("fill",p).style("stroke",p),C.data(x).append("text").attr("x",n+g).attr("y",n-g).text(t=>{const{label:o,value:h}=t.data;return l.getShowData()?`${o} [${h}]`:o});const W=Math.max(...C.selectAll("text").nodes().map(t=>{var o;return(o=t==null?void 0:t.getBoundingClientRect().width)!=null?o:0})),k=v+b+n+g+W;S.attr("viewBox",`0 0 ${k} ${c}`),ae(S,c,k,$.useMaxWidth)},"draw"),Se={draw:ve},$e={parser:ue,db:G,renderer:Se,styles:he};export{$e as diagram};

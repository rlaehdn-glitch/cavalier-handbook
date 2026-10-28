/* 빼꼼 핸드북 — 쇼츠 V6.5.1 (2026-10-28)
   index.html(V6.5.1)이 앨범을 열 때 불러오는 별도 파일. 화면정의서 SH-01~SH-08 중 1단계(공통 화면 + 직접 올리기 A).
   데이터: /handbook/{가족코드}-shorts/ (cfg · r 레시피 · fp 지문) + 앨범 meta 추가 항목(ts·tm·sd·su·sl·ih).
   완성 영상은 저장하지 않는다(폰 메모리에서만). */
(function () {
'use strict';
if (window.SHORTS) return;
const SXV = '6.5.1';
/*! mp4-muxer 5.2.2 · MIT License · Copyright (c) 2023 Vanilagy · https://github.com/Vanilagy/mp4-muxer */
const Mp4Muxer = (()=>{var we=Object.defineProperty,at=Object.getOwnPropertyDescriptor,nt=Object.getOwnPropertyNames,ot=Object.prototype.hasOwnProperty,ht=(e,t)=>{for(var r in t)we(e,r,{get:t[r],enumerable:!0})},lt=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of nt(t))!ot.call(e,a)&&a!==r&&we(e,a,{get:()=>t[a],enumerable:!(s=at(t,a))||s.enumerable});return e},ft=e=>lt(we({},"__esModule",{value:!0}),e),ve=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},i=(e,t,r)=>(ve(e,t,"read from private field"),r?r.call(e):t.get(e)),d=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},S=(e,t,r,s)=>(ve(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r),ut=(e,t,r,s)=>({set _(a){S(e,t,a,r)},get _(){return i(e,t,s)}}),m=(e,t,r)=>(ve(e,t,"access private method"),r),Re={};ht(Re,{ArrayBufferTarget:()=>qe,FileSystemWritableFileStreamTarget:()=>Xe,Muxer:()=>vi,StreamTarget:()=>Te});var p=new Uint8Array(8),A=new DataView(p.buffer),C=e=>[(e%256+256)%256],w=e=>(A.setUint16(0,e,!1),[p[0],p[1]]),dt=e=>(A.setInt16(0,e,!1),[p[0],p[1]]),Pe=e=>(A.setUint32(0,e,!1),[p[1],p[2],p[3]]),o=e=>(A.setUint32(0,e,!1),[p[0],p[1],p[2],p[3]]),mt=e=>(A.setInt32(0,e,!1),[p[0],p[1],p[2],p[3]]),x=e=>(A.setUint32(0,Math.floor(e/2**32),!1),A.setUint32(4,e,!1),[p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7]]),ge=e=>(A.setInt16(0,2**8*e,!1),[p[0],p[1]]),O=e=>(A.setInt32(0,2**16*e,!1),[p[0],p[1],p[2],p[3]]),ye=e=>(A.setInt32(0,2**30*e,!1),[p[0],p[1],p[2],p[3]]),z=(e,t=!1)=>{let r=Array(e.length).fill(null).map((s,a)=>e.charCodeAt(a));return t&&r.push(0),r},re=e=>e&&e[e.length-1],Ce=e=>{let t;for(let r of e)(!t||r.presentationTimestamp>t.presentationTimestamp)&&(t=r);return t},M=(e,t,r=!0)=>{let s=e*t;return r?Math.round(s):s},Le=e=>{let t=e*(Math.PI/180),r=Math.cos(t),s=Math.sin(t);return[r,s,0,-s,r,0,0,0,1]},Ve=Le(0),je=e=>[O(e[0]),O(e[1]),ye(e[2]),O(e[3]),O(e[4]),ye(e[5]),O(e[6]),O(e[7]),ye(e[8])],X=e=>!e||typeof e!="object"?e:Array.isArray(e)?e.map(X):Object.fromEntries(Object.entries(e).map(([t,r])=>[t,X(r)])),V=e=>e>=0&&e<2**32,y=(e,t,r)=>({type:e,contents:t&&new Uint8Array(t.flat(10)),children:r}),v=(e,t,r,s,a)=>y(e,[C(t),Pe(r),s!=null?s:[]],a),pt=e=>{let t=512;return e.fragmented?y("ftyp",[z("iso5"),o(t),z("iso5"),z("iso6"),z("mp41")]):y("ftyp",[z("isom"),o(t),z("isom"),e.holdsAvc?z("avc1"):[],z("mp41")])},Se=e=>({type:"mdat",largeSize:e}),ct=e=>({type:"free",size:e}),se=(e,t,r=!1)=>y("moov",null,[wt(t,e),...e.map(s=>vt(s,t)),r?Gt(e):null]),wt=(e,t)=>{let r=M(Math.max(0,...t.filter(h=>h.samples.length>0).map(h=>{const l=Ce(h.samples);return l.presentationTimestamp+l.duration})),Ae),s=Math.max(...t.map(h=>h.id))+1,a=!V(e)||!V(r),n=a?x:o;return v("mvhd",+a,0,[n(e),n(e),o(Ae),n(r),O(1),ge(1),Array(10).fill(0),je(Ve),Array(24).fill(0),o(s)])},vt=(e,t)=>y("trak",null,[gt(e,t),yt(e,t)]),gt=(e,t)=>{let r=Ce(e.samples),s=M(r?r.presentationTimestamp+r.duration:0,Ae),a=!V(t)||!V(s),n=a?x:o,h;return e.info.type==="video"?h=typeof e.info.rotation=="number"?Le(e.info.rotation):e.info.rotation:h=Ve,v("tkhd",+a,3,[n(t),n(t),o(e.id),o(0),n(s),Array(8).fill(0),w(0),w(0),ge(e.info.type==="audio"?1:0),w(0),je(h),O(e.info.type==="video"?e.info.width:0),O(e.info.type==="video"?e.info.height:0)])},yt=(e,t)=>y("mdia",null,[Ct(e,t),St(e.info.type==="video"?"vide":"soun"),Tt(e)]),Ct=(e,t)=>{let r=Ce(e.samples),s=M(r?r.presentationTimestamp+r.duration:0,e.timescale),a=!V(t)||!V(s),n=a?x:o;return v("mdhd",+a,0,[n(t),n(t),o(e.timescale),n(s),w(21956),w(0)])},St=e=>v("hdlr",0,0,[z("mhlr"),z(e),o(0),o(0),o(0),z("mp4-muxer-hdlr",!0)]),Tt=e=>y("minf",null,[e.info.type==="video"?bt():_t(),kt(),At(e)]),bt=()=>v("vmhd",0,1,[w(0),w(0),w(0),w(0)]),_t=()=>v("smhd",0,0,[w(0),w(0)]),kt=()=>y("dinf",null,[Et()]),Et=()=>v("dref",0,0,[o(1)],[zt()]),zt=()=>v("url ",0,1),At=e=>{const t=e.compositionTimeOffsetTable.length>1||e.compositionTimeOffsetTable.some(r=>r.sampleCompositionTimeOffset!==0);return y("stbl",null,[Ot(e),Vt(e),jt(e),$t(e),Ht(e),qt(e),t?Xt(e):null])},Ot=e=>v("stsd",0,0,[o(1)],[e.info.type==="video"?Mt(si[e.info.codec],e):Rt(ni[e.info.codec],e)]),Mt=(e,t)=>y(e,[Array(6).fill(0),w(1),w(0),w(0),Array(12).fill(0),w(t.info.width),w(t.info.height),o(4718592),o(4718592),o(0),w(1),Array(32).fill(0),w(24),dt(65535)],[ai[t.info.codec](t),t.info.decoderConfig.colorSpace?Ut(t):null]),Bt={bt709:1,bt470bg:5,smpte170m:6},It={bt709:1,smpte170m:6,"iec61966-2-1":13},Dt={rgb:0,bt709:1,bt470bg:5,smpte170m:6},Ut=e=>y("colr",[z("nclx"),w(Bt[e.info.decoderConfig.colorSpace.primaries]),w(It[e.info.decoderConfig.colorSpace.transfer]),w(Dt[e.info.decoderConfig.colorSpace.matrix]),C((e.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),xt=e=>e.info.decoderConfig&&y("avcC",[...new Uint8Array(e.info.decoderConfig.description)]),Wt=e=>e.info.decoderConfig&&y("hvcC",[...new Uint8Array(e.info.decoderConfig.description)]),Ft=e=>{if(!e.info.decoderConfig)return null;let t=e.info.decoderConfig;if(!t.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let r=t.codec.split("."),s=Number(r[1]),a=Number(r[2]),l=(Number(r[3])<<4)+(0<<1)+Number(t.colorSpace.fullRange);return v("vpcC",1,0,[C(s),C(a),C(l),C(2),C(2),C(2),w(0)])},Nt=()=>{let r=(1<<7)+1;return y("av1C",[r,0,0,0])},Rt=(e,t)=>y(e,[Array(6).fill(0),w(1),w(0),w(0),o(0),w(t.info.numberOfChannels),w(16),w(0),w(0),O(t.info.sampleRate)],[oi[t.info.codec](t)]),Pt=e=>{let t=new Uint8Array(e.info.decoderConfig.description);return v("esds",0,0,[o(58753152),C(32+t.byteLength),w(1),C(0),o(75530368),C(18+t.byteLength),C(64),C(21),Pe(0),o(130071),o(130071),o(92307584),C(t.byteLength),...t,o(109084800),C(1),C(2)])},Lt=e=>{var a;let t=3840,r=0;const s=(a=e.info.decoderConfig)==null?void 0:a.description;if(s){if(s.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");const n=ArrayBuffer.isView(s)?new DataView(s.buffer,s.byteOffset,s.byteLength):new DataView(s);t=n.getUint16(10,!0),r=n.getInt16(14,!0)}return y("dOps",[C(0),C(e.info.numberOfChannels),w(t),o(e.info.sampleRate),ge(r),C(0)])},Vt=e=>v("stts",0,0,[o(e.timeToSampleTable.length),e.timeToSampleTable.map(t=>[o(t.sampleCount),o(t.sampleDelta)])]),jt=e=>{if(e.samples.every(r=>r.type==="key"))return null;let t=[...e.samples.entries()].filter(([,r])=>r.type==="key");return v("stss",0,0,[o(t.length),t.map(([r])=>o(r+1))])},$t=e=>v("stsc",0,0,[o(e.compactlyCodedChunkTable.length),e.compactlyCodedChunkTable.map(t=>[o(t.firstChunk),o(t.samplesPerChunk),o(1)])]),Ht=e=>v("stsz",0,0,[o(0),o(e.samples.length),e.samples.map(t=>o(t.size))]),qt=e=>e.finalizedChunks.length>0&&re(e.finalizedChunks).offset>=2**32?v("co64",0,0,[o(e.finalizedChunks.length),e.finalizedChunks.map(t=>x(t.offset))]):v("stco",0,0,[o(e.finalizedChunks.length),e.finalizedChunks.map(t=>o(t.offset))]),Xt=e=>v("ctts",0,0,[o(e.compositionTimeOffsetTable.length),e.compositionTimeOffsetTable.map(t=>[o(t.sampleCount),o(t.sampleCompositionTimeOffset)])]),Gt=e=>y("mvex",null,e.map(Zt)),Zt=e=>v("trex",0,0,[o(e.id),o(1),o(0),o(0),o(0)]),$e=(e,t)=>y("moof",null,[Kt(e),...t.map(Qt)]),Kt=e=>v("mfhd",0,0,[o(e)]),He=e=>{let t=0,r=0,s=0,a=0,n=e.type==="delta";return r|=+n,n?t|=1:t|=2,t<<24|r<<16|s<<8|a},Qt=e=>y("traf",null,[Jt(e),Yt(e),ei(e)]),Jt=e=>{var a;let t=0;t|=8,t|=16,t|=32,t|=131072;let r=(a=e.currentChunk.samples[1])!=null?a:e.currentChunk.samples[0],s={duration:r.timescaleUnitsToNextSample,size:r.size,flags:He(r)};return v("tfhd",0,t,[o(e.id),o(s.duration),o(s.size),o(s.flags)])},Yt=e=>v("tfdt",1,0,[x(M(e.currentChunk.startTimestamp,e.timescale))]),ei=e=>{let t=e.currentChunk.samples.map(U=>U.timescaleUnitsToNextSample),r=e.currentChunk.samples.map(U=>U.size),s=e.currentChunk.samples.map(He),a=e.currentChunk.samples.map(U=>M(U.presentationTimestamp-U.decodeTimestamp,e.timescale)),n=new Set(t),h=new Set(r),l=new Set(s),c=new Set(a),g=l.size===2&&s[0]!==s[1],E=n.size>1,ie=h.size>1,rt=!g&&l.size>1,st=c.size>1||[...c].some(U=>U!==0),L=0;return L|=1,L|=4*+g,L|=256*+E,L|=512*+ie,L|=1024*+rt,L|=2048*+st,v("trun",1,L,[o(e.currentChunk.samples.length),o(e.currentChunk.offset-e.currentChunk.moofOffset||0),g?o(s[0]):[],e.currentChunk.samples.map((U,ce)=>[E?o(t[ce]):[],ie?o(r[ce]):[],rt?o(s[ce]):[],st?mt(a[ce]):[]])])},ti=e=>y("mfra",null,[...e.map(ii),ri()]),ii=(e,t)=>v("tfra",1,0,[o(e.id),o(63),o(e.finalizedChunks.length),e.finalizedChunks.map(s=>[x(M(s.startTimestamp,e.timescale)),x(s.moofOffset),o(t+1),o(1),o(1)])]),ri=()=>v("mfro",0,0,[o(0)]),si={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},ai={avc:xt,hevc:Wt,vp9:Ft,av1:Nt},ni={aac:"mp4a",opus:"Opus"},oi={aac:Pt,opus:Lt},hi=Symbol("isTarget"),ae=class{},qe=class extends ae{constructor(){super(...arguments),this.buffer=null}},Te=class extends ae{constructor(e){if(super(),this.options=e,typeof e!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(e.onData){if(typeof e.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(e.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(e.chunked!==void 0&&typeof e.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},Xe=class extends ae{constructor(e,t){if(super(),this.stream=e,this.options=t,!(e instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(t!==void 0&&typeof t!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(t&&t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},W,j,Ge=class{constructor(){this.pos=0,d(this,W,new Uint8Array(8)),d(this,j,new DataView(i(this,W).buffer)),this.offsets=new WeakMap}seek(e){this.pos=e}writeU32(e){i(this,j).setUint32(0,e,!1),this.write(i(this,W).subarray(0,4))}writeU64(e){i(this,j).setUint32(0,Math.floor(e/2**32),!1),i(this,j).setUint32(4,e,!1),this.write(i(this,W).subarray(0,8))}writeAscii(e){for(let t=0;t<e.length;t++)i(this,j).setUint8(t%8,e.charCodeAt(t)),t%8===7&&this.write(i(this,W));e.length%8!==0&&this.write(i(this,W).subarray(0,e.length%8))}writeBox(e){var t,r;if(this.offsets.set(e,this.pos),e.contents&&!e.children)this.writeBoxHeader(e,(t=e.size)!=null?t:e.contents.byteLength+8),this.write(e.contents);else{let s=this.pos;if(this.writeBoxHeader(e,0),e.contents&&this.write(e.contents),e.children)for(let h of e.children)h&&this.writeBox(h);let a=this.pos,n=(r=e.size)!=null?r:a-s;this.seek(s),this.writeBoxHeader(e,n),this.seek(a)}}writeBoxHeader(e,t){this.writeU32(e.largeSize?1:t),this.writeAscii(e.type),e.largeSize&&this.writeU64(t)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){let t=this.pos;this.seek(this.offsets.get(e)),this.writeBox(e),this.seek(t)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let t=this.measureBoxHeader(e);if(e.contents&&(t+=e.contents.byteLength),e.children)for(let r of e.children)r&&(t+=this.measureBox(r));return t}}};W=new WeakMap,j=new WeakMap;var ne,F,G,Z,oe,be,li=class extends Ge{constructor(e){super(),d(this,oe),d(this,ne,void 0),d(this,F,new ArrayBuffer(2**16)),d(this,G,new Uint8Array(i(this,F))),d(this,Z,0),S(this,ne,e)}write(e){m(this,oe,be).call(this,this.pos+e.byteLength),i(this,G).set(e,this.pos),this.pos+=e.byteLength,S(this,Z,Math.max(i(this,Z),this.pos))}finalize(){m(this,oe,be).call(this,this.pos),i(this,ne).buffer=i(this,F).slice(0,Math.max(i(this,Z),this.pos))}};ne=new WeakMap,F=new WeakMap,G=new WeakMap,Z=new WeakMap,oe=new WeakSet,be=function(e){let t=i(this,F).byteLength;for(;t<e;)t*=2;if(t===i(this,F).byteLength)return;let r=new ArrayBuffer(t),s=new Uint8Array(r);s.set(i(this,G),0),S(this,F,r),S(this,G,s)};var fi=2**24,ui=2,K,N,Q,I,_,he,_e,ke,Ze,Ee,Ke,J,le,ze=class extends Ge{constructor(e){var t,r,s,a;super(),d(this,he),d(this,ke),d(this,Ee),d(this,J),d(this,K,void 0),d(this,N,[]),d(this,Q,void 0),d(this,I,void 0),d(this,_,[]),S(this,K,e),S(this,Q,(r=(t=e.options)==null?void 0:t.chunked)!=null?r:!1),S(this,I,(a=(s=e.options)==null?void 0:s.chunkSize)!=null?a:fi)}write(e){i(this,N).push({data:e.slice(),start:this.pos}),this.pos+=e.byteLength}flush(){var r,s;if(i(this,N).length===0)return;let e=[],t=[...i(this,N)].sort((a,n)=>a.start-n.start);e.push({start:t[0].start,size:t[0].data.byteLength});for(let a=1;a<t.length;a++){let n=e[e.length-1],h=t[a];h.start<=n.start+n.size?n.size=Math.max(n.size,h.start+h.data.byteLength-n.start):e.push({start:h.start,size:h.data.byteLength})}for(let a of e){a.data=new Uint8Array(a.size);for(let n of i(this,N))a.start<=n.start&&n.start<a.start+a.size&&a.data.set(n.data,n.start-a.start);i(this,Q)?(m(this,he,_e).call(this,a.data,a.start),m(this,J,le).call(this)):(s=(r=i(this,K).options).onData)==null||s.call(r,a.data,a.start)}i(this,N).length=0}finalize(){i(this,Q)&&m(this,J,le).call(this,!0)}};K=new WeakMap,N=new WeakMap,Q=new WeakMap,I=new WeakMap,_=new WeakMap,he=new WeakSet,_e=function(e,t){let r=i(this,_).findIndex(l=>l.start<=t&&t<l.start+i(this,I));r===-1&&(r=m(this,Ee,Ke).call(this,t));let s=i(this,_)[r],a=t-s.start,n=e.subarray(0,Math.min(i(this,I)-a,e.byteLength));s.data.set(n,a);let h={start:a,end:a+n.byteLength};if(m(this,ke,Ze).call(this,s,h),s.written[0].start===0&&s.written[0].end===i(this,I)&&(s.shouldFlush=!0),i(this,_).length>ui){for(let l=0;l<i(this,_).length-1;l++)i(this,_)[l].shouldFlush=!0;m(this,J,le).call(this)}n.byteLength<e.byteLength&&m(this,he,_e).call(this,e.subarray(n.byteLength),t+n.byteLength)},ke=new WeakSet,Ze=function(e,t){let r=0,s=e.written.length-1,a=-1;for(;r<=s;){let n=Math.floor(r+(s-r+1)/2);e.written[n].start<=t.start?(r=n+1,a=n):s=n-1}for(e.written.splice(a+1,0,t),(a===-1||e.written[a].end<t.start)&&a++;a<e.written.length-1&&e.written[a].end>=e.written[a+1].start;)e.written[a].end=Math.max(e.written[a].end,e.written[a+1].end),e.written.splice(a+1,1)},Ee=new WeakSet,Ke=function(e){let r={start:Math.floor(e/i(this,I))*i(this,I),data:new Uint8Array(i(this,I)),written:[],shouldFlush:!1};return i(this,_).push(r),i(this,_).sort((s,a)=>s.start-a.start),i(this,_).indexOf(r)},J=new WeakSet,le=function(e=!1){var t,r;for(let s=0;s<i(this,_).length;s++){let a=i(this,_)[s];if(!(!a.shouldFlush&&!e)){for(let n of a.written)(r=(t=i(this,K).options).onData)==null||r.call(t,a.data.subarray(n.start,n.end),a.start+n.start);i(this,_).splice(s--,1)}}};var di=class extends ze{constructor(e){var t;super(new Te({onData:(r,s)=>e.stream.write({type:"write",data:r,position:s}),chunked:!0,chunkSize:(t=e.options)==null?void 0:t.chunkSize}))}},Ae=1e3,mi=["avc","hevc","vp9","av1"],pi=["aac","opus"],ci=2082844800,wi=["strict","offset","cross-track-offset"],f,u,fe,k,b,T,$,H,Oe,R,P,Y,Me,Qe,Be,Je,Ie,Ye,De,et,Ue,tt,ue,xe,B,D,We,it,ee,de,me,Fe,q,te,pe,Ne,vi=class{constructor(e){if(d(this,Me),d(this,Be),d(this,Ie),d(this,De),d(this,Ue),d(this,ue),d(this,B),d(this,We),d(this,ee),d(this,me),d(this,q),d(this,pe),d(this,f,void 0),d(this,u,void 0),d(this,fe,void 0),d(this,k,void 0),d(this,b,null),d(this,T,null),d(this,$,Math.floor(Date.now()/1e3)+ci),d(this,H,[]),d(this,Oe,1),d(this,R,[]),d(this,P,[]),d(this,Y,!1),m(this,Me,Qe).call(this,e),e.video=X(e.video),e.audio=X(e.audio),e.fastStart=X(e.fastStart),this.target=e.target,S(this,f,{firstTimestampBehavior:"strict",...e}),e.target instanceof qe)S(this,u,new li(e.target));else if(e.target instanceof Te)S(this,u,new ze(e.target));else if(e.target instanceof Xe)S(this,u,new di(e.target));else throw new Error(`Invalid target: ${e.target}`);m(this,De,et).call(this),m(this,Be,Je).call(this)}addVideoChunk(e,t,r,s){if(!(e instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(t&&typeof t!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(r!==void 0&&(!Number.isFinite(r)||r<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(s!==void 0&&!Number.isFinite(s))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let a=new Uint8Array(e.byteLength);e.copyTo(a),this.addVideoChunkRaw(a,e.type,r!=null?r:e.timestamp,e.duration,t,s)}addVideoChunkRaw(e,t,r,s,a,n){if(!(e instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(t!=="key"&&t!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(r)||r<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(s)||s<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(a&&typeof a!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(n!==void 0&&!Number.isFinite(n))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(m(this,pe,Ne).call(this),!i(this,f).video)throw new Error("No video track declared.");if(typeof i(this,f).fastStart=="object"&&i(this,b).samples.length===i(this,f).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${i(this,f).fastStart.expectedVideoChunks}).`);let h=m(this,ue,xe).call(this,i(this,b),e,t,r,s,a,n);if(i(this,f).fastStart==="fragmented"&&i(this,T)){for(;i(this,P).length>0&&i(this,P)[0].decodeTimestamp<=h.decodeTimestamp;){let l=i(this,P).shift();m(this,B,D).call(this,i(this,T),l)}h.decodeTimestamp<=i(this,T).lastDecodeTimestamp?m(this,B,D).call(this,i(this,b),h):i(this,R).push(h)}else m(this,B,D).call(this,i(this,b),h)}addAudioChunk(e,t,r){if(!(e instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(t&&typeof t!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(r!==void 0&&(!Number.isFinite(r)||r<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let s=new Uint8Array(e.byteLength);e.copyTo(s),this.addAudioChunkRaw(s,e.type,r!=null?r:e.timestamp,e.duration,t)}addAudioChunkRaw(e,t,r,s,a){if(!(e instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(t!=="key"&&t!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(r)||r<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(s)||s<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(a&&typeof a!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(m(this,pe,Ne).call(this),!i(this,f).audio)throw new Error("No audio track declared.");if(typeof i(this,f).fastStart=="object"&&i(this,T).samples.length===i(this,f).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${i(this,f).fastStart.expectedAudioChunks}).`);let n=m(this,ue,xe).call(this,i(this,T),e,t,r,s,a);if(i(this,f).fastStart==="fragmented"&&i(this,b)){for(;i(this,R).length>0&&i(this,R)[0].decodeTimestamp<=n.decodeTimestamp;){let h=i(this,R).shift();m(this,B,D).call(this,i(this,b),h)}n.decodeTimestamp<=i(this,b).lastDecodeTimestamp?m(this,B,D).call(this,i(this,T),n):i(this,P).push(n)}else m(this,B,D).call(this,i(this,T),n)}finalize(){if(i(this,Y))throw new Error("Cannot finalize a muxer more than once.");if(i(this,f).fastStart==="fragmented"){for(let t of i(this,R))m(this,B,D).call(this,i(this,b),t);for(let t of i(this,P))m(this,B,D).call(this,i(this,T),t);m(this,me,Fe).call(this,!1)}else i(this,b)&&m(this,ee,de).call(this,i(this,b)),i(this,T)&&m(this,ee,de).call(this,i(this,T));let e=[i(this,b),i(this,T)].filter(Boolean);if(i(this,f).fastStart==="in-memory"){let t;for(let s=0;s<2;s++){let a=se(e,i(this,$)),n=i(this,u).measureBox(a);t=i(this,u).measureBox(i(this,k));let h=i(this,u).pos+n+t;for(let l of i(this,H)){l.offset=h;for(let{data:c}of l.samples)h+=c.byteLength,t+=c.byteLength}if(h<2**32)break;t>=2**32&&(i(this,k).largeSize=!0)}let r=se(e,i(this,$));i(this,u).writeBox(r),i(this,k).size=t,i(this,u).writeBox(i(this,k));for(let s of i(this,H))for(let a of s.samples)i(this,u).write(a.data),a.data=null}else if(i(this,f).fastStart==="fragmented"){let t=i(this,u).pos,r=ti(e);i(this,u).writeBox(r);let s=i(this,u).pos-t;i(this,u).seek(i(this,u).pos-4),i(this,u).writeU32(s)}else{let t=i(this,u).offsets.get(i(this,k)),r=i(this,u).pos-t;i(this,k).size=r,i(this,k).largeSize=r>=2**32,i(this,u).patchBox(i(this,k));let s=se(e,i(this,$));if(typeof i(this,f).fastStart=="object"){i(this,u).seek(i(this,fe)),i(this,u).writeBox(s);let a=t-i(this,u).pos;i(this,u).writeBox(ct(a))}else i(this,u).writeBox(s)}m(this,q,te).call(this),i(this,u).finalize(),S(this,Y,!0)}};return f=new WeakMap,u=new WeakMap,fe=new WeakMap,k=new WeakMap,b=new WeakMap,T=new WeakMap,$=new WeakMap,H=new WeakMap,Oe=new WeakMap,R=new WeakMap,P=new WeakMap,Y=new WeakMap,Me=new WeakSet,Qe=function(e){if(typeof e!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(e.target instanceof ae))throw new TypeError("The target must be provided and an instance of Target.");if(e.video){if(!mi.includes(e.video.codec))throw new TypeError(`Unsupported video codec: ${e.video.codec}`);if(!Number.isInteger(e.video.width)||e.video.width<=0)throw new TypeError(`Invalid video width: ${e.video.width}. Must be a positive integer.`);if(!Number.isInteger(e.video.height)||e.video.height<=0)throw new TypeError(`Invalid video height: ${e.video.height}. Must be a positive integer.`);const t=e.video.rotation;if(typeof t=="number"&&![0,90,180,270].includes(t))throw new TypeError(`Invalid video rotation: ${t}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(t)&&(t.length!==9||t.some(r=>typeof r!="number")))throw new TypeError(`Invalid video transformation matrix: ${t.join()}`);if(e.video.frameRate!==void 0&&(!Number.isInteger(e.video.frameRate)||e.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${e.video.frameRate}. Must be a positive integer.`)}if(e.audio){if(!pi.includes(e.audio.codec))throw new TypeError(`Unsupported audio codec: ${e.audio.codec}`);if(!Number.isInteger(e.audio.numberOfChannels)||e.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${e.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(e.audio.sampleRate)||e.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${e.audio.sampleRate}. Must be a positive integer.`)}if(e.firstTimestampBehavior&&!wi.includes(e.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${e.firstTimestampBehavior}`);if(typeof e.fastStart=="object"){if(e.video){if(e.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(e.fastStart.expectedVideoChunks)||e.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(e.audio){if(e.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(e.fastStart.expectedAudioChunks)||e.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(e.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(e.minFragmentDuration!==void 0&&(!Number.isFinite(e.minFragmentDuration)||e.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")},Be=new WeakSet,Je=function(){var e;if(i(this,u).writeBox(pt({holdsAvc:((e=i(this,f).video)==null?void 0:e.codec)==="avc",fragmented:i(this,f).fastStart==="fragmented"})),S(this,fe,i(this,u).pos),i(this,f).fastStart==="in-memory")S(this,k,Se(!1));else if(i(this,f).fastStart!=="fragmented"){if(typeof i(this,f).fastStart=="object"){let t=m(this,Ie,Ye).call(this);i(this,u).seek(i(this,u).pos+t)}S(this,k,Se(!0)),i(this,u).writeBox(i(this,k))}m(this,q,te).call(this)},Ie=new WeakSet,Ye=function(){if(typeof i(this,f).fastStart!="object")return;let e=0,t=[i(this,f).fastStart.expectedVideoChunks,i(this,f).fastStart.expectedAudioChunks];for(let r of t)r&&(e+=8*Math.ceil(.6666666666666666*r),e+=4*r,e+=12*Math.ceil(.6666666666666666*r),e+=4*r,e+=8*r);return e+=4096,e},De=new WeakSet,et=function(){var e,t;if(i(this,f).video&&S(this,b,{id:1,info:{type:"video",codec:i(this,f).video.codec,width:i(this,f).video.width,height:i(this,f).video.height,rotation:(e=i(this,f).video.rotation)!=null?e:0,decoderConfig:null},timescale:(t=i(this,f).video.frameRate)!=null?t:57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),i(this,f).audio&&(S(this,T,{id:i(this,f).video?2:1,info:{type:"audio",codec:i(this,f).audio.codec,numberOfChannels:i(this,f).audio.numberOfChannels,sampleRate:i(this,f).audio.sampleRate,decoderConfig:null},timescale:i(this,f).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),i(this,f).audio.codec==="aac")){let r=m(this,Ue,tt).call(this,2,i(this,f).audio.sampleRate,i(this,f).audio.numberOfChannels);i(this,T).info.decoderConfig={codec:i(this,f).audio.codec,description:r,numberOfChannels:i(this,f).audio.numberOfChannels,sampleRate:i(this,f).audio.sampleRate}}},Ue=new WeakSet,tt=function(e,t,r){let a=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(t),n=r,h="";h+=e.toString(2).padStart(5,"0"),h+=a.toString(2).padStart(4,"0"),a===15&&(h+=t.toString(2).padStart(24,"0")),h+=n.toString(2).padStart(4,"0");let l=Math.ceil(h.length/8)*8;h=h.padEnd(l,"0");let c=new Uint8Array(h.length/8);for(let g=0;g<h.length;g+=8)c[g/8]=parseInt(h.slice(g,g+8),2);return c},ue=new WeakSet,xe=function(e,t,r,s,a,n,h){let l=s/1e6,c=(s-(h!=null?h:0))/1e6,g=a/1e6,E=m(this,We,it).call(this,l,c,e);return l=E.presentationTimestamp,c=E.decodeTimestamp,n!=null&&n.decoderConfig&&(e.info.decoderConfig===null?e.info.decoderConfig=n.decoderConfig:Object.assign(e.info.decoderConfig,n.decoderConfig)),{presentationTimestamp:l,decodeTimestamp:c,duration:g,data:t,size:t.byteLength,type:r,timescaleUnitsToNextSample:M(g,e.timescale)}},B=new WeakSet,D=function(e,t){var a,n;i(this,f).fastStart!=="fragmented"&&e.samples.push(t);const r=M(t.presentationTimestamp-t.decodeTimestamp,e.timescale);if(e.lastTimescaleUnits!==null){let h=M(t.decodeTimestamp,e.timescale,!1),l=Math.round(h-e.lastTimescaleUnits);if(e.lastTimescaleUnits+=l,e.lastSample.timescaleUnitsToNextSample=l,i(this,f).fastStart!=="fragmented"){let c=re(e.timeToSampleTable);c.sampleCount===1?(c.sampleDelta=l,c.sampleCount++):c.sampleDelta===l?c.sampleCount++:(c.sampleCount--,e.timeToSampleTable.push({sampleCount:2,sampleDelta:l}));const g=re(e.compositionTimeOffsetTable);g.sampleCompositionTimeOffset===r?g.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:r})}}else e.lastTimescaleUnits=0,i(this,f).fastStart!=="fragmented"&&(e.timeToSampleTable.push({sampleCount:1,sampleDelta:M(t.duration,e.timescale)}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:r}));e.lastSample=t;let s=!1;if(!e.currentChunk)s=!0;else{let h=t.presentationTimestamp-e.currentChunk.startTimestamp;if(i(this,f).fastStart==="fragmented"){let l=(a=i(this,b))!=null?a:i(this,T);const c=(n=i(this,f).minFragmentDuration)!=null?n:1;e===l&&t.type==="key"&&h>=c&&(s=!0,m(this,me,Fe).call(this))}else s=h>=.5}s&&(e.currentChunk&&m(this,ee,de).call(this,e),e.currentChunk={startTimestamp:t.presentationTimestamp,samples:[]}),e.currentChunk.samples.push(t)},We=new WeakSet,it=function(e,t,r){var h,l,c,g;const s=i(this,f).firstTimestampBehavior==="strict",a=r.lastDecodeTimestamp===-1;if(s&&a&&t!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${t}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(i(this,f).firstTimestampBehavior==="offset"||i(this,f).firstTimestampBehavior==="cross-track-offset"){r.firstDecodeTimestamp===void 0&&(r.firstDecodeTimestamp=t);let E;i(this,f).firstTimestampBehavior==="offset"?E=r.firstDecodeTimestamp:E=Math.min((l=(h=i(this,b))==null?void 0:h.firstDecodeTimestamp)!=null?l:1/0,(g=(c=i(this,T))==null?void 0:c.firstDecodeTimestamp)!=null?g:1/0),t-=E,e-=E}if(t<r.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${r.lastDecodeTimestamp*1e6} to ${t*1e6}).`);return r.lastDecodeTimestamp=t,{presentationTimestamp:e,decodeTimestamp:t}},ee=new WeakSet,de=function(e){if(i(this,f).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(e.currentChunk){if(e.finalizedChunks.push(e.currentChunk),i(this,H).push(e.currentChunk),(e.compactlyCodedChunkTable.length===0||re(e.compactlyCodedChunkTable).samplesPerChunk!==e.currentChunk.samples.length)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:e.currentChunk.samples.length}),i(this,f).fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=i(this,u).pos;for(let t of e.currentChunk.samples)i(this,u).write(t.data),t.data=null;m(this,q,te).call(this)}},me=new WeakSet,Fe=function(e=!0){if(i(this,f).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let t=[i(this,b),i(this,T)].filter(l=>l&&l.currentChunk);if(t.length===0)return;let r=ut(this,Oe)._++;if(r===1){let l=se(t,i(this,$),!0);i(this,u).writeBox(l)}let s=i(this,u).pos,a=$e(r,t);i(this,u).writeBox(a);{let l=Se(!1),c=0;for(let E of t)for(let ie of E.currentChunk.samples)c+=ie.size;let g=i(this,u).measureBox(l)+c;g>=4294967296&&(l.largeSize=!0,g=i(this,u).measureBox(l)+c),l.size=g,i(this,u).writeBox(l)}for(let l of t){l.currentChunk.offset=i(this,u).pos,l.currentChunk.moofOffset=s;for(let c of l.currentChunk.samples)i(this,u).write(c.data),c.data=null}let n=i(this,u).pos;i(this,u).seek(i(this,u).offsets.get(a));let h=$e(r,t);i(this,u).writeBox(h),i(this,u).seek(n);for(let l of t)l.finalizedChunks.push(l.currentChunk),i(this,H).push(l.currentChunk),l.currentChunk=null;e&&m(this,q,te).call(this)},q=new WeakSet,te=function(){i(this,u)instanceof ze&&i(this,u).flush()},pe=new WeakSet,Ne=function(){if(i(this,Y))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")},ft(Re)})();

/* ================= 쇼츠 엔진 — 추천·구성·포맷·제목·중복 방지 (순수 함수) =================
   화면정의서 12장(처리 규칙)·13장(중복 방지)·14장(데이터 정의) 기준.
   입력: 앨범 메타(ALB.meta 형태), 쇼츠 설정(cfg), 레시피 목록, 오늘 날짜 → 출력: 추천 묶음·레시피 초안 */
const E = {};
E.SIT = ['놀이', '교감', '잠', '산책', '목욕', '식사', '유치원', '훈련', '사고'];
E.MOODS = ['포근', '신남', '졸림', '엉뚱', '의젓'];
E.FMTS = ['TRUST', 'ATTACK', 'SLEEP', 'GROWTH', 'FAIL', 'TRAIN', 'PHOTOS'];
E.SIT_FMT = { '놀이': 'ATTACK', '교감': 'TRUST', '잠': 'SLEEP', '사고': 'FAIL', '훈련': 'TRAIN' };
/* 메모 키워드 → 상황 (12-3: 메모에 '사고·말썽' → FAIL, '훈련' → TRAIN 등). '잠깐' 같은 오탐을 피하려고 '잠'은 단독·복합어만 */
E.MEMO_KW = [
  [/우다다|입질|놀이|장난감|터그|공놀이|뛰어|신나게/, '놀이'],
  [/교감|배\s?뒤집|배를\s?보|안기|안겨|품에|무릎|뽀뽀|애교|쓰다듬/, '교감'],
  [/낮잠|꿀잠|잠든|잠자|자는\s?중|자요|졸려|졸음|숙면|(^|[\s,.!])잠($|[\s,.!])/, '잠'],
  [/사고|말썽|저지레|물어뜯|엎질|난장/, '사고'],
  [/훈련|앉아|기다려|엎드려|하우스|하이파이브|교육/, '훈련'],
  [/산책/, '산책'],
  [/목욕|샤워/, '목욕'],
  [/유치원|도그스테이/, '유치원'],
  [/밥|식사|간식|사료|먹방|먹는/, '식사']
];
E.SIT_EN = { '놀이': 'playtime', '교감': 'cuddles', '잠': 'nap', '산책': 'walk', '목욕': 'bath', '식사': 'snack time', '유치원': 'puppy school', '훈련': 'training', '사고': 'mischief' };
E.SIT_TAG = { '놀이': '#puppyplay', '교감': '#puppylove', '잠': '#sleepypuppy', '산책': '#puppywalk', '목욕': '#puppybath', '식사': '#puppyfood', '유치원': '#doggydaycare', '훈련': '#puppytraining', '사고': '#puppyfail' };
E.SEASON = [['겨울', 'winter'], ['겨울', 'winter'], ['봄', 'spring'], ['봄', 'spring'], ['봄', 'spring'], ['여름', 'summer'], ['여름', 'summer'], ['여름', 'summer'], ['가을', 'autumn'], ['가을', 'autumn'], ['가을', 'autumn'], ['겨울', 'winter']];
E.DEF_CFG = { mode: 'A', recN: 3, cool: 30, maxUse: 3, ovl: 50, ch: '@DWKIM_CA', nsn: 0 };

/* ---------- 날짜 ---------- */
E.pad = function (n) { return String(n).padStart(2, '0'); };
E.dkey = function (dt) { return dt.getFullYear() + '-' + E.pad(dt.getMonth() + 1) + '-' + E.pad(dt.getDate()); };
E.dparse = function (s) { return new Date(String(s).slice(0, 10) + 'T00:00:00'); };
E.daysBetween = function (a, b) { return Math.round((E.dparse(b) - E.dparse(a)) / 86400000); };
E.isClip = function (m) { return !!m && m.t === 'r' && !!m.k; };
E.isPhoto = function (m) { return !!m && m.t !== 'v' && m.t !== 'r'; };
E.usable = function (m) { return E.isPhoto(m) || E.isClip(m); };
/* 촬영일(sd)이 있으면 촬영일, 없으면 올린 날(d) */
E.dOf = function (m) { const s = String((m && m.sd) || ''); return /^\d{4}-\d{2}-\d{2}/.test(s) ? s.slice(0, 10) : String((m && m.d) || ''); };
E.tOf = function (m) {
  const s = String((m && m.sd) || '');
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(s)) { const t = new Date(s.slice(0, 19)).getTime(); if (isFinite(t)) return t; }
  if (m && m.at) return m.at;
  const d = E.dOf(m); return d ? new Date(d + 'T12:00:00').getTime() : 0;
};
E.season = function (dstr) { const mo = +String(dstr).slice(5, 7); return E.SEASON[(mo || 1) - 1]; };
E.seasonKey = function (dstr) {   /* 12·1·2월 겨울은 12월이 속한 해로 묶는다 */
  let y = +String(dstr).slice(0, 4), mo = +String(dstr).slice(5, 7);
  if (mo <= 2) y -= 1;
  return y + '-' + E.season(dstr)[1];
};
E.weekKey = function (dstr) { const d = E.dparse(dstr); const wd = (d.getDay() + 6) % 7; d.setDate(d.getDate() - wd); return E.dkey(d); };
/* day N — 입양일 = day 1 (카탈로그 규칙) */
E.dayN = function (dstr, home) { if (!home || !dstr) return 0; return E.daysBetween(home, dstr) + 1; };

/* ---------- 태그·점수 ---------- */
E.likeCount = function (m) { return (m && m.lk && typeof m.lk === 'object') ? Object.keys(m.lk).length : 0; };
E.sits = function (m) {
  const out = [];
  String((m && m.ts) || '').split(',').map(function (s) { return s.trim(); }).forEach(function (s) { if (s && E.SIT.indexOf(s) > -1 && out.indexOf(s) < 0) out.push(s); });
  const memo = String((m && m.m) || '');
  if (memo) E.MEMO_KW.forEach(function (kw) { if (kw[0].test(memo) && out.indexOf(kw[1]) < 0) out.push(kw[1]); });
  return out;
};
E.mood = function (m) { const v = String((m && m.tm) || ''); return E.MOODS.indexOf(v) > -1 ? v : ''; };
/* 12-1 점수: 좋아요 +3, 메모 있음 +2, 안 쓴 사진 +2, 눈맞춤 +2, 최근 14일 +1 (태그 없는 항목은 0점) */
E.score = function (m, today) {
  let s = 0;
  if (E.likeCount(m) > 0) s += 3;
  if (String(m.m || '').trim()) s += 2;
  if (!(m.su > 0)) s += 2;
  if (m.ec) s += 2;
  const d = E.dOf(m); if (d && E.daysBetween(d, today) <= 14) s += 1;
  return s;
};
E.inCool = function (m, cfg, today) { return !!(m && m.sl && E.daysBetween(m.sl, today) < cfg.cool); };
E.maxed = function (m, cfg) { return ((m && m.su) || 0) >= cfg.maxUse; };
E.isNew = function (m, today) { return !(m.su > 0) && E.daysBetween(E.dOf(m), today) <= 14; };

/* ---------- 연사(거의 같은 사진) — 이미지 지문(dHash 64비트, 16진수 16자) 해밍 거리 ≤ 6, 또는 촬영 시각 2초 이내 ---------- */
E.hamming = function (a, b) {
  if (!a || !b || a.length !== 16 || b.length !== 16) return 64;
  let d = 0;
  for (let i = 0; i < 16; i += 8) {
    let x = (parseInt(a.slice(i, i + 8), 16) ^ parseInt(b.slice(i, i + 8), 16)) >>> 0;
    while (x) { x &= x - 1; d++; }
  }
  return d;
};
E.sameBurst = function (a, b) {
  if (a.ih && b.ih && E.hamming(a.ih, b.ih) <= 6) return true;
  const sa = String(a.sd || ''), sb = String(b.sd || '');
  if (sa.length >= 19 && sb.length >= 19 && Math.abs(E.tOf(a) - E.tOf(b)) <= 2000) return true;
  return false;
};
/* 한 묶음 안에서 연사는 점수 높은 1장만 */
E.dedupeBursts = function (list) {   /* list: [{id, m, sc}] 점수 내림차순 */
  const kept = [];
  list.forEach(function (x) { if (!kept.some(function (k) { return E.sameBurst(k.m, x.m); })) kept.push(x); });
  return kept;
};

/* ---------- 지문 — 사진 조합(순서 무관) 해시 ---------- */
E.fnv = function (s, seed) { let h = seed >>> 0; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; };
E.fpOf = function (ids) { const s = ids.slice().sort().join(','); return 'f' + E.fnv(s, 2166136261).toString(36) + E.fnv(s, 3735928559).toString(36); };

/* ---------- 포맷 판정 (12-3) ---------- */
E.ACTIVE = ['놀이', '산책', '훈련', '사고', '목욕', '식사', '유치원', '교감'];
E.fmtOf = function (items) {   /* items: [{m}] */
  const cnt = {};
  let sleep = 0, active = 0;
  items.forEach(function (x) {
    const ss = E.sits(x.m);
    if (ss.indexOf('잠') > -1) sleep++;
    if (ss.some(function (s) { return s !== '잠'; }) || (E.isClip(x.m) && ss.indexOf('잠') < 0)) active++;
    ss.forEach(function (s) { const f = E.SIT_FMT[s]; if (f && f !== 'SLEEP') cnt[f] = (cnt[f] || 0) + 1; });
  });
  /* SLEEP: 활동 컷 2장 이상 섞은 반전 구성만 허용 (단독 금지) */
  if (sleep >= 1 && active >= 2 && sleep * 2 >= items.length * 0.5) return { fm: 'SLEEP', sleep: sleep, active: active };
  if (sleep === items.length) return { fm: '', sleep: sleep, active: active, bad: 'sleep-only' };
  let best = '', bn = 0;
  ['ATTACK', 'TRUST', 'FAIL', 'TRAIN'].forEach(function (f) { if ((cnt[f] || 0) > bn) { bn = cnt[f]; best = f; } });
  /* 한 포맷이 묶음의 40% 이상(최소 2장)일 때만 그 포맷, 아니면 PHOTOS(장별 캡션·통합 서사) */
  if (best && bn >= Math.max(2, Math.ceil(items.length * 0.4))) return { fm: best, sleep: sleep, active: active };
  return { fm: 'PHOTOS', sleep: sleep, active: active };
};

/* ---------- 겹침 — 올린 쇼츠와 겹치는 사진 비율 ---------- */
E.usedSets = function (recipes) {
  const out = [];
  Object.keys(recipes || {}).forEach(function (rid) {
    const r = recipes[rid]; if (!r || r.st !== 'up' || !Array.isArray(r.it)) return;
    out.push({ rid: rid, ids: r.it.map(function (x) { return x.id; }) });
  });
  return out;
};
E.overlap = function (ids, sets) {
  let best = { n: 0, frac: 0, rid: '', ids: [] };
  sets.forEach(function (s) {
    const hit = ids.filter(function (id) { return s.ids.indexOf(id) > -1; });
    const frac = ids.length ? hit.length / ids.length : 0;
    if (hit.length > best.n) best = { n: hit.length, frac: frac, rid: s.rid, ids: hit };
  });
  return best;
};
E.overlapIds = function (ids, sets) {
  const all = {};
  sets.forEach(function (s) { s.ids.forEach(function (id) { all[id] = 1; }); });
  return ids.filter(function (id) { return all[id]; });
};

/* ---------- 추천 생성 (12-1) ---------- */
E.candidates = function (meta, cfg, today, opt) {
  opt = opt || {};
  const out = [];
  Object.keys(meta || {}).forEach(function (id) {
    const m = meta[id];
    if (!E.usable(m) || E.maxed(m, cfg)) return;
    if (!opt.cool && E.inCool(m, cfg, today)) return;
    out.push({ id: id, m: m, sc: E.score(m, today) });
  });
  return out;
};
E.pickGroup = function (raw) {   /* 같은 묶음 후보 → 연사 정리 → 점수 상위 6~8장 */
  const sorted = raw.slice().sort(function (a, b) { return b.sc - a.sc || E.tOf(b.m) - E.tOf(a.m); });
  const ded = E.dedupeBursts(sorted);
  /* 영상은 한 편에 1개까지 (첫 2초용) */
  let clips = 0;
  const sel = [];
  ded.forEach(function (x) { if (sel.length >= 8) return; if (E.isClip(x.m)) { if (clips >= 1) return; clips++; } sel.push(x); });
  return sel.length >= 6 ? sel : null;
};
E.groups = function (cands, today) {
  const by = {};
  function add(k, x) { (by[k] = by[k] || []).push(x); }
  cands.forEach(function (x) {
    const d = E.dOf(x.m); if (!d) return;
    add('w:' + E.weekKey(d), x);
    add('s:' + E.seasonKey(d), x);
    E.sits(x.m).forEach(function (s) { add('t:' + s, x); });
  });
  const seen = {}, out = [];
  Object.keys(by).forEach(function (k) {
    const sel = E.pickGroup(by[k]); if (!sel) return;
    const ids = sel.map(function (x) { return x.id; });
    const sig = ids.slice().sort().join(',');
    if (seen[sig]) return; seen[sig] = 1;
    const f = E.fmtOf(sel); if (!f.fm) return;
    const top = sel.map(function (x) { return x.sc; }).sort(function (a, b) { return b - a; }).slice(0, 6);
    const score = top.reduce(function (a, b) { return a + b; }, 0) + (sel.some(function (x) { return E.isClip(x.m); }) ? 0.5 : 0) + (f.fm !== 'PHOTOS' ? 0.3 : 0);
    out.push({ key: k, sel: sel, ids: ids, sig: sig, fm: f.fm, score: score, nNew: sel.filter(function (x) { return E.isNew(x.m, today); }).length });
  });
  out.sort(function (a, b) { return b.score - a.score || (a.key < b.key ? 1 : -1); });
  return out;
};
/* 점수 높은 순으로 포맷이 서로 다른 n편 · n편끼리 사진 겹침 0.
   한 편을 고를 때마다 남은 사진으로 묶음을 다시 만든다(겹침 0을 지키면서 다음 편이 사라지지 않게).
   포맷이 모자라면 같은 포맷도 허용. opt.skip: 이미 보여 준 묶음(키·조합) — '다시 추천' */
E.recommend = function (meta, cfg, recipes, fps, today, opt) {
  opt = opt || {};
  cfg = Object.assign({}, E.DEF_CFG, cfg || {});
  const cands = E.candidates(meta, cfg, today, opt);
  const newCount = cands.filter(function (x) { return !(x.m.su > 0); }).length;
  const sets = E.usedSets(recipes);
  const skip = opt.skip || {};
  const n = cfg.recN || 3, picked = [], used = {}, fmts = {};
  let groupCount = 0;
  for (let round = 0; round < n; round++) {
    const rem = cands.filter(function (x) { return !used[x.id]; });
    const gs = E.groups(rem, today).filter(function (g) {
      if (skip[g.sig] || skip[g.key]) return false;
      if (picked.some(function (p) { return p.key === g.key; })) return false;
      if (fps && fps[E.fpOf(g.ids)]) return false;                                  /* 같은 사진 조합: 금지 */
      const o = E.overlap(g.ids, sets);
      return !(o.frac * 100 >= cfg.ovl);                                             /* 절반 이상 겹침: 추천에서 제외 */
    });
    if (round === 0) groupCount = gs.length;
    const g = gs.filter(function (x) { return !fmts[x.fm]; })[0] || gs[0];
    if (!g) break;
    picked.push(g); fmts[g.fm] = 1; g.ids.forEach(function (id) { used[id] = 1; });
  }
  return { recs: picked, newCount: newCount, candCount: cands.length, groupCount: groupCount };
};

/* ---------- 15~20초 구성 (12-2) ---------- */
E.XF = 0.35;   /* 크로스페이드(초) */
E.compose = function (sel, fm, today, opt) {   /* sel: [{id, m, sc}] → it[] */
  opt = opt || {};
  sel = sel.slice();
  const byScore = function (a, b) { return (b.m.ec ? 2 : 0) - (a.m.ec ? 2 : 0) || E.likeCount(b.m) - E.likeCount(a.m) || b.sc - a.sc; };
  const sleepOf = function (x) { return E.sits(x.m).indexOf('잠') > -1; };
  const clips = sel.filter(function (x) { return E.isClip(x.m); });
  let rest = sel.slice();
  let intro, outro;
  /* 0~2초: 지정한 첫 장 → 영상 클립 → 눈맞춤·좋아요 최다 사진(+빠른 줌인) */
  if (opt.firstId) intro = sel.filter(function (x) { return x.id === opt.firstId; })[0];
  if (!intro && clips.length) intro = clips.slice().sort(function (a, b) { return b.sc - a.sc; })[0];
  if (!intro) {
    const ph = sel.filter(function (x) { return !E.isClip(x.m); });
    intro = (fm === 'SLEEP' ? ph.filter(function (x) { return !sleepOf(x); }).sort(byScore)[0] : null) || ph.slice().sort(byScore)[0] || sel[0];
  }
  rest = rest.filter(function (x) { return x !== intro; });
  /* 16~20초: 첫 장과 다른 눈맞춤 사진 (SLEEP은 잠든 사진으로 끝내는 반전) */
  const photos = rest.filter(function (x) { return !E.isClip(x.m); });
  if (fm === 'SLEEP') outro = photos.filter(sleepOf).sort(byScore)[0] || photos.slice().sort(byScore)[0];
  else outro = photos.filter(function (x) { return x.m.ec; }).sort(byScore)[0] || photos.slice().sort(byScore)[0];
  rest = rest.filter(function (x) { return x !== outro; });
  if (!opt.keepAll) rest = rest.filter(function (x) { return !E.isClip(x.m); });   /* 자동 추천: 영상은 첫 2초에만 */
  /* 2~16초: 찍은 순서대로 5~6장 (직접 고른 경우는 모두 유지) */
  let mid = rest.slice().sort(function (a, b) { return E.tOf(a.m) - E.tOf(b.m); });
  if (fm === 'SLEEP') mid = mid.filter(function (x) { return !sleepOf(x); }).concat(mid.filter(sleepOf));
  if (!opt.keepAll && mid.length > 6) mid = mid.slice().sort(function (a, b) { return b.sc - a.sc; }).slice(0, 6).sort(function (a, b) { return E.tOf(a.m) - E.tOf(b.m); });
  const per = fm === 'TRUST' ? 2.5 : 2.2;
  const it = [];
  const zs = ['r', 'in', 'l', 'out'];
  if (intro) it.push(E.itemOf(intro, 2.0, 'in', { fast: !E.isClip(intro.m), slow: fm === 'ATTACK' && E.isClip(intro.m) }));
  mid.forEach(function (x, i) { it.push(E.itemOf(x, E.isClip(x.m) ? 2.5 : per, zs[i % zs.length])); });
  if (outro) it.push(E.itemOf(outro, 3.0, 'in'));
  E.fitLength(it);
  return it;
};
E.itemOf = function (x, du, z, o) {
  o = o || {};
  const it = { id: x.id, du: du, z: z, c: '' };
  if (E.isClip(x.m)) { it.v = 1; it.ss = 0; it.sp = o.slow ? 0.5 : 1; const d = +x.m.dur || 0; if (d > 6) it.ss = Math.max(0, Math.min(d - 3, d * 0.3)); }
  if (o.fast) it.zf = 1;
  if (typeof x.m.fx === 'number') it.fx = x.m.fx;
  if (typeof x.m.fy === 'number') it.fy = x.m.fy;
  return it;
};
E.total = function (it) { return Math.round(it.reduce(function (a, x) { return a + (+x.du || 0); }, 0) * 10) / 10; };
/* 길이를 15~20초 안으로 — 가운데 사진 길이만 1.5~3초 범위에서 조정 */
E.fitLength = function (it) {
  if (it.length < 3) return it;
  const mid = it.slice(1, -1).filter(function (x) { return !x.v; });
  let guard = 0;
  while (E.total(it) < 15 && guard++ < 60) { const c = mid.filter(function (x) { return x.du < 3; }); if (!c.length) break; c.forEach(function (x) { x.du = Math.min(3, Math.round((x.du + 0.1) * 10) / 10); }); }
  guard = 0;
  while (E.total(it) > 20 && guard++ < 60) { const c = mid.filter(function (x) { return x.du > 1.5; }); if (!c.length) break; c.forEach(function (x) { x.du = Math.max(1.5, Math.round((x.du - 0.1) * 10) / 10); }); }
  return it;
};

/* ---------- 제목·설명 틀 (12-4) — 영문, 감정·호기심형, 날짜형 금지. 포맷별 5개 ---------- */
E.TPL = {
  TRUST: [
    { t: 'She chose my lap on day {N}', h: 'She chose my lap', d: 'She found her spot.', k: '{N}일째, 내 무릎을 골랐어요', kh: '내 무릎을 골랐어요', kd: '자기 자리를 찾았어요.' },
    { t: '{N} days home and still a lap dog', h: 'Still a lap dog', d: 'Some things never change.', k: '집에 온 지 {N}일, 여전히 무릎 강아지', kh: '여전히 무릎 강아지', kd: '변하지 않는 것도 있죠.' },
    { t: 'Her favorite spot in the whole world', h: 'Her favorite spot', d: 'Guess where she wants to be.', k: '세상에서 제일 좋아하는 자리', kh: '제일 좋아하는 자리', kd: '어디에 있고 싶은지 맞혀 보세요.' },
    { t: 'This is how she says I love you', h: 'How she says I love you', d: 'No words needed.', k: '이게 사랑한다고 말하는 방법이에요', kh: '사랑한다고 말하는 방법', kd: '말이 필요 없어요.' },
    { t: 'She trusts me with her whole heart', h: 'Full trust unlocked', d: 'Belly up means total trust.', k: '온 마음으로 나를 믿어요', kh: '완전한 신뢰 달성', kd: '배를 보이는 건 완전히 믿는다는 뜻이에요.' }
  ],
  ATTACK: [
    { t: 'Tiny Cavalier in full attack mode', h: 'Full attack mode', d: 'Small but mighty.', k: '작은 카발리에, 전투 모드 돌입', kh: '전투 모드 돌입', kd: '작지만 강해요.' },
    { t: 'Who let the tiny shark out?', h: 'Tiny shark alert', d: 'Those puppy teeth though.', k: '누가 이 아기 상어를 풀어놨어?', kh: '아기 상어 경보', kd: '저 강아지 이빨 좀 봐요.' },
    { t: 'She thinks she is a lion', h: 'She thinks she is a lion', d: 'Fearless, as always.', k: '자기가 사자인 줄 알아요', kh: '자기가 사자인 줄 알아요', kd: '언제나처럼 겁이 없어요.' },
    { t: 'Zoomies level: maximum', h: 'Zoomies: MAX', d: 'Nobody can stop her now.', k: '우다다 레벨: 최대', kh: '우다다: 최대', kd: '이제 아무도 못 말려요.' },
    { t: 'The cutest little troublemaker', h: 'Little troublemaker', d: 'Chaos, but make it cute.', k: '세상에서 제일 귀여운 말썽꾸러기', kh: '작은 말썽꾸러기', kd: '난장판인데 귀여워요.' }
  ],
  SLEEP: [
    { t: 'Puppy battery: 0%', h: 'Puppy battery: 0%', d: 'From full power to nap mode.', k: '강아지 배터리: 0%', kh: '강아지 배터리: 0%', kd: '풀파워에서 낮잠 모드로.' },
    { t: 'From chaos to coma in seconds', h: 'Chaos to coma', d: 'She went all in, then crashed.', k: '몇 초 만에 난리에서 기절까지', kh: '난리 → 기절', kd: '온 힘을 다해 놀고 뻗었어요.' },
    { t: 'She fought sleep and lost', h: 'She fought sleep', d: 'Sleep always wins.', k: '잠이랑 싸우다 졌어요', kh: '잠이랑 싸우는 중', kd: '잠은 언제나 이겨요.' },
    { t: 'Energy saving mode: activated', h: 'Energy saving mode', d: 'Recharging for the next adventure.', k: '절전 모드: 켜짐', kh: '절전 모드', kd: '다음 모험을 위해 충전 중이에요.' },
    { t: 'Play hard, nap harder', h: 'Play hard, nap harder', d: 'A puppy’s perfect day.', k: '열심히 놀고, 더 열심히 자기', kh: '열심히 놀고, 더 열심히 자기', kd: '강아지의 완벽한 하루.' }
  ],
  GROWTH: [
    { t: 'Day 1 vs day {N}', h: 'Day 1 vs day {N}', d: 'Look how much she has grown.', k: '1일째 vs {N}일째', kh: '1일째 vs {N}일째', kd: '얼마나 컸는지 보세요.' },
    { t: 'She used to fit in one hand', h: 'She used to be this tiny', d: 'Time flies with a puppy.', k: '한 손에 쏙 들어오던 아이였는데', kh: '이만큼 작았었는데', kd: '강아지와 있으면 시간이 정말 빨라요.' },
    { t: 'Watch her grow up in seconds', h: 'Watch her grow', d: 'Growing up way too fast.', k: '몇 초 만에 크는 모습 보기', kh: '크는 모습 보기', kd: '너무 빨리 커요.' },
    { t: 'How it started vs how it’s going', h: 'How it started', d: 'Same puppy, new chapter.', k: '처음 모습 vs 지금 모습', kh: '처음엔 이랬어요', kd: '같은 강아지, 새로운 이야기.' },
    { t: '{N} days of growing up', h: '{N} days of growing up', d: 'Every day a little bigger.', k: '{N}일 동안 자란 기록', kh: '{N}일 동안 자란 기록', kd: '날마다 조금씩 커요.' }
  ],
  FAIL: [
    { t: 'She tried. She really tried.', h: 'She really tried', d: 'Points for effort.', k: '노력했어요. 정말 노력했어요.', kh: '정말 노력했어요', kd: '노력 점수는 만점.' },
    { t: 'Nobody tell her she missed', h: 'Nobody tell her', d: 'She thinks it went perfectly.', k: '빗나간 거 아무도 말해주지 마세요', kh: '아무도 말하지 마세요', kd: '본인은 완벽했다고 생각해요.' },
    { t: 'Expectation vs reality: puppy edition', h: 'Expectation vs reality', d: 'It did not go as planned.', k: '기대 vs 현실: 강아지 편', kh: '기대 vs 현실', kd: '계획대로 되지 않았어요.' },
    { t: 'Well… that didn’t go as planned', h: 'That didn’t go as planned', d: 'Oops.', k: '음… 계획대로 안 됐네요', kh: '계획대로 안 됐어요', kd: '앗.' },
    { t: 'She has zero regrets', h: 'Zero regrets', d: 'Would do it again.', k: '후회는 전혀 없대요', kh: '후회 없음', kd: '또 할 거래요.' }
  ],
  TRAIN: [
    { t: 'Training diary #{k}: she did it', h: 'Training diary #{k}', d: 'Little steps, big progress.', k: '훈련 일기 #{k}: 해냈어요', kh: '훈련 일기 #{k}', kd: '작은 걸음, 큰 발전.' },
    { t: 'Puppy school progress report', h: 'Progress report', d: 'Getting better every day.', k: '강아지 학교 성적표', kh: '성적표', kd: '날마다 나아지고 있어요.' },
    { t: 'Smarter than I thought', h: 'Smarter than I thought', d: 'She learns so fast.', k: '생각보다 똑똑해요', kh: '생각보다 똑똑해요', kd: '정말 빨리 배워요.' },
    { t: 'Day {N} of teaching a Cavalier', h: 'Teaching a Cavalier', d: 'Patience pays off.', k: '카발리에 가르치기 {N}일째', kh: '카발리에 가르치기', kd: '인내는 보답받아요.' },
    { t: 'She actually listened this time', h: 'She actually listened', d: 'A proud puppy parent moment.', k: '이번엔 진짜 말을 들었어요', kh: '진짜 말을 들었어요', kd: '견주로서 뿌듯한 순간.' }
  ],
  PHOTOS: [
    { t: 'Her first {season} {act}', h: 'Her first {season} {act}', d: 'Small moments, big love.', t0: 'Her first {season} with us', h0: 'Her first {season} with us',
      k: '처음 맞는 {seasonKo} {actKo}', kh: '처음 맞는 {seasonKo} {actKo}', k0: '우리와 함께하는 첫 {seasonKo}', kh0: '우리와 함께하는 첫 {seasonKo}', kd: '작은 순간, 큰 사랑.' },
    { t: 'A little {act} with my Cavalier', h: 'A little {act}', d: 'Just another happy day.', t0: 'A little moment with my Cavalier', h0: 'A little moment',
      k: '우리 카발리에와 함께한 {actKo}', kh: '소소한 {actKo}', k0: '우리 카발리에와의 작은 순간', kh0: '작은 순간', kd: '또 하나의 행복한 하루.' },
    { t: 'Every day with her is the best day', h: 'Every day is the best day', d: 'Life is better with her.', k: '함께하는 모든 날이 최고의 날', kh: '모든 날이 최고의 날', kd: '함께라서 더 좋은 하루하루.' },
    { t: 'Small moments, big love', h: 'Small moments, big love', d: 'These are the days.', k: '작은 순간, 큰 사랑', kh: '작은 순간, 큰 사랑', kd: '바로 이런 날들.' },
    { t: 'Just a puppy living her best life', h: 'Living her best life', d: 'Nothing but good vibes.', k: '최고의 삶을 사는 강아지', kh: '최고의 삶을 사는 중', kd: '좋은 기운만 가득.' }
  ]
};
E.SEASON_KO = { winter: '겨울', spring: '봄', summer: '여름', autumn: '가을' };
E.ACT_KO = { '놀이': '놀이 시간', '교감': '포옹', '잠': '낮잠', '산책': '산책', '목욕': '목욕', '식사': '간식 시간', '유치원': '유치원', '훈련': '훈련', '사고': '말썽' };
E.koFill = function (s, ctx) {
  return String(s || '').replace(/\{N\}/g, ctx.N || '').replace(/\{k\}/g, ctx.k || 1)
    .replace(/\{seasonKo\}/g, E.SEASON_KO[ctx.season] || '').replace(/\{actKo\}/g, E.ACT_KO[ctx.sit] || '하루').replace(/\s{2,}/g, ' ').trim();
};
E.fill = function (s, ctx) {
  return String(s || '').replace(/\{N\}/g, ctx.N || '').replace(/\{act\}/g, ctx.act || 'day').replace(/\{season\}/g, ctx.season || '').replace(/\{k\}/g, ctx.k || 1).replace(/\s{2,}/g, ' ').trim();
};
/* 묶음의 대표 상황 — 2장 이상에 붙은 상황만, 동점이면 상황 목록 순서 (어디서 계산해도 같은 결과) */
E.mainSit = function (sel) {
  const cnt = {};
  sel.forEach(function (x) { E.sits(x.m).forEach(function (s) { cnt[s] = (cnt[s] || 0) + 1; }); });
  let best = '', bn = 1;
  E.SIT.forEach(function (s) { if ((cnt[s] || 0) > bn) { bn = cnt[s]; best = s; } });
  return best;
};
E.mainMood = function (sel) {
  const cnt = {};
  sel.forEach(function (x) { const md = E.mood(x.m); if (md) cnt[md] = (cnt[md] || 0) + 1; });
  let best = '', bn = 0;
  E.MOODS.forEach(function (s) { if ((cnt[s] || 0) > bn) { bn = cnt[s]; best = s; } });
  return best;
};
E.ctxOf = function (sel, fm, home, recipes) {
  const dates = sel.map(function (x) { return E.dOf(x.m); }).filter(Boolean).sort();
  const last = dates[dates.length - 1] || '';
  const sit = E.mainSit(sel);
  let k = 1;
  if (fm === 'TRAIN') Object.keys(recipes || {}).forEach(function (rid) { const r = recipes[rid]; if (r && r.st === 'up' && r.fm === 'TRAIN') k++; });
  return { N: E.dayN(last, home) || '', act: E.SIT_EN[sit] || '', season: last ? E.season(last)[1] : '', k: k, sit: sit, last: last, mood: E.mainMood(sel) };
};
/* 포맷별 틀 5개 중 최근 10편에 안 쓴 틀로 3안 */
E.titles = function (fm, ctx, recipes) {
  const tpl = E.TPL[fm] || E.TPL.PHOTOS;
  const ups = Object.keys(recipes || {}).map(function (rid) { return recipes[rid]; })
    .filter(function (r) { return r && r.st === 'up'; })
    .sort(function (a, b) { return (b.up || 0) - (a.up || 0); }).slice(0, 10);
  const usedT = {}; ups.forEach(function (r, i) { if (r.tt && usedT[r.tt] === undefined) usedT[r.tt] = i; });
  const order = tpl.map(function (t, i) { return { i: i, key: fm + '.' + i, used: usedT[fm + '.' + i] }; });
  const fresh = order.filter(function (o) { return o.used === undefined; });
  const old = order.filter(function (o) { return o.used !== undefined; }).sort(function (a, b) { return b.used - a.used; });   /* 오래전에 쓴 것부터 */
  return fresh.concat(old).slice(0, 3).map(function (o) {
    const t = tpl[o.i];
    const noAct = !ctx.act && /\{act\}/.test(t.t);
    let ti = E.fill(noAct ? (t.t0 || t.t) : t.t, ctx), hk = E.fill(noAct ? (t.h0 || t.h) : t.h, ctx);
    let kt = E.koFill(noAct ? (t.k0 || t.k) : t.k, ctx), kh = E.koFill(noAct ? (t.kh0 || t.kh) : t.kh, ctx);
    if (!ctx.N) { ti = ti.replace(/\s*on day\s*$/i, '').replace(/^\s*days? home and/i, 'Home and'); hk = hk.replace(/day\s*$/i, '').trim(); kt = kt.replace(/^일째, /, '').replace(/^집에 온 지 일, /, ''); }
    return { key: o.key, t: ti, h: hk, d: E.fill(t.d, ctx), kt: kt, kh: kh, kd: t.kd || '' };
  });
};
/* 설명의 한글 한 줄 — 기본값은 상황·계절로 만든 짧은 문구(메모를 그대로 넣지 않음). 후보는 E.koLines */
E.koLine = function (sel, ctx) { return E.koLines(sel, ctx).p[0] || '빼꼼이의 하루'; };
E.koLines = function (sel, ctx) {
  const ss = ctx.last ? E.season(ctx.last)[0] : '';
  const sit = ctx.sit, act = E.ACT_KO[sit] || '';
  const p = [], st = [];
  if (sit) { p.push('빼꼼이의 ' + (ss ? ss + ' ' : '') + act); p.push((ss ? ss + ' ' : '') + act + ' 기록'); }
  else { p.push('빼꼼이의 ' + (ss ? ss + ' ' : '') + '하루'); }
  if (ctx.N) p.push('빼꼼이와 함께한 ' + ctx.N + '일째');
  const bank = E.KO_SUG[sit] || E.KO_SUG._;
  bank.s.forEach(function (x) { st.push(x); });
  E.KO_SUG._.s.forEach(function (x) { if (st.indexOf(x) < 0) st.push(x); });
  const memos = [];
  sel.slice().sort(function (a, b) { return E.likeCount(b.m) - E.likeCount(a.m); }).forEach(function (x) { const mm = String(x.m.m || '').trim(); if (mm && memos.indexOf(mm) < 0) memos.push(mm); });
  return { p: p.slice(0, 3), s: st.slice(0, 3), memo: memos.slice(0, 2) };
};
/* 설명: 카탈로그 고정 템플릿(화면정의서 12-4 코드 블록 그대로)
   Day N with our Cavalier King Charles Spaniel puppy 🐾 / [영문 훅 한 줄] / (빈 줄) / [한글 한 줄] / (빈 줄) / 해시태그 8개 + 상황 태그 1~2개 / 빼꼼 #N */
E.DESC_TAGS = '#cavalierkingcharlesspaniel #cavalier #puppy #cutepuppy #dogsofyoutube #puppylove #blenheim #shorts';
E.desc = function (title, sel, ctx, sn, ko) {
  const l1 = (ctx.N ? 'Day ' + ctx.N + ' with our Cavalier King Charles Spaniel puppy' : 'Life with our Cavalier King Charles Spaniel puppy') + ' 🐾';
  const l2 = title.d || title.t || '';
  const sitCnt = {}, extra = [];
  sel.forEach(function (x) { E.sits(x.m).forEach(function (s) { sitCnt[s] = (sitCnt[s] || 0) + 1; }); });
  Object.keys(sitCnt).sort(function (a, b) { return sitCnt[b] - sitCnt[a]; }).slice(0, 2).forEach(function (s) { if (E.SIT_TAG[s]) extra.push(E.SIT_TAG[s]); });
  const k = (ko === undefined || ko === null) ? E.koLine(sel, ctx) : ko;
  const out = [l1, l2, ''];
  if (k) out.push(k, '');
  out.push(E.DESC_TAGS + (extra.length ? ' ' + extra.join(' ') : ''), '빼꼼 #' + (sn || '?'));
  return out.join('\n');
};
E.descSn = function (de, sn) {   /* 끝줄 시리즈 번호 갱신 */
  const lines = String(de || '').split('\n');
  if (/^빼꼼 #/.test(lines[lines.length - 1] || '')) lines[lines.length - 1] = '빼꼼 #' + sn; else lines.push('빼꼼 #' + sn);
  return lines.join('\n');
};

/* ---------- 음악 (12-5) — A: 유튜브 앱 '사운드' 검색어 2~3개 ---------- */
E.MQ_FMT = {
  TRUST: ['cute piano', 'heartwarming'],
  ATTACK: ['Monkeys Spinning Monkeys', 'Sneaky Snitch'],
  SLEEP: ['lullaby', 'sleepy piano'],
  GROWTH: ['emotional piano', 'growing up'],
  FAIL: ['funny fail', 'Sneaky Snitch'],
  TRAIN: ['upbeat ukulele', 'proud moment'],
  PHOTOS: ['happy acoustic', 'cute puppy']
};
E.MQ_MOOD = { '포근': 'cozy piano', '신남': 'upbeat funny', '졸림': 'calm lullaby', '엉뚱': 'quirky funny', '의젓': 'cinematic inspiring' };
E.music = function (fm, mood) {
  const out = (E.MQ_FMT[fm] || E.MQ_FMT.PHOTOS).slice();
  const mq = E.MQ_MOOD[mood];
  if (mq && out.indexOf(mq) < 0) out.push(mq);
  return out.slice(0, 3);
};

/* ---------- 장면 자막 — 자동으로 넣지 않는다 (V6.5.1). 영상에는 위쪽 영문 2줄(훅 · day N)만.
   한글은 장면마다 추천 문구·문장을 보여 주고 사람이 고른 것만 붙인다. ---------- */
E.captions = function (it) { it.forEach(function (x) { x.c = ''; }); return it; };
E.KO_SUG = {
  '산책': { p: ['산책 가자!', '킁킁 탐색 중', '낙엽 밟기'], s: ['오늘도 신나게 산책했어요', '밖에 나오면 세상이 다 신기해요'] },
  '놀이': { p: ['우다다 타임', '장난감은 내 거야', '놀아 주세요!'], s: ['한 번 시작하면 멈출 수 없어요', '에너지 충전 완료, 이제 놀 시간!'] },
  '교감': { p: ['품이 제일 좋아', '꼭 안아 줘', '눈 맞춤 중'], s: ['여기가 제일 편해요', '오늘도 사랑받는 중이에요'] },
  '잠': { p: ['꿀잠 중', '배터리 0%', '쿨쿨'], s: ['놀다 지쳐서 잠들었어요', '깨우지 마세요, 꿈꾸는 중이에요'] },
  '목욕': { p: ['목욕 싫어요', '뽀송뽀송', '젖은 빼꼼이'], s: ['목욕은 싫지만 끝나면 개운해요', '말리는 시간이 제일 길어요'] },
  '식사': { p: ['냠냠', '간식 주세요', '밥 먹는 중'], s: ['밥그릇 앞에서는 진지해요', '간식 소리만 들어도 달려와요'] },
  '유치원': { p: ['유치원 가는 날', '친구들 만나러', '하원했어요'], s: ['오늘도 유치원에서 신나게 놀았어요', '친구들이랑 노는 게 제일 좋아요'] },
  '훈련': { p: ['앉아 성공!', '기다려…', '칭찬받는 중'], s: ['오늘은 앉아를 해냈어요', '간식 앞에서 꾹 참는 중이에요'] },
  '사고': { p: ['제가 안 그랬어요', '범인은 나', '앗, 들켰다'], s: ['잠깐 혼자 뒀더니 이렇게 됐어요', '반성은 하는데 후회는 없어요'] },
  _: { p: ['귀여움 주의', '빼꼼이 등장', '오늘의 빼꼼'], s: ['오늘도 귀여움 한도 초과', '빼꼼이의 하루를 소개합니다'] }
};
E.KO_MOOD = { '포근': '포근포근', '신남': '신난다!', '졸림': '졸려요…', '엉뚱': '이게 뭐지?', '의젓': '의젓한 빼꼼이' };
/* 영어 장면 자막 후보 — 뜻과 함께 (FAIL 1인칭 문장, GROWTH 날짜 표시) */
E.FAIL_LINES = [['Me: totally under control', '나: 완벽하게 통제 중'], ['The plan:', '계획:'], ['What actually happened:', '실제로 일어난 일:'], ['No regrets.', '후회 없음.']];
E.sceneSug = function (m, i, fm, home) {   /* → {p:[], s:[], en:[[영문, 뜻]], memo:''} */
  const ss = E.sits(m || {});
  const p = [], st = [], en = [];
  ss.forEach(function (sit) { const b = E.KO_SUG[sit]; if (!b) return; b.p.forEach(function (x) { if (p.indexOf(x) < 0) p.push(x); }); b.s.forEach(function (x) { if (st.indexOf(x) < 0) st.push(x); }); });
  const md = E.mood(m || {}); if (md && E.KO_MOOD[md] && p.indexOf(E.KO_MOOD[md]) < 0) p.push(E.KO_MOOD[md]);
  E.KO_SUG._.p.forEach(function (x) { if (p.length < 5 && p.indexOf(x) < 0) p.push(x); });
  E.KO_SUG._.s.forEach(function (x) { if (st.length < 3 && st.indexOf(x) < 0) st.push(x); });
  if (fm === 'FAIL') E.FAIL_LINES.forEach(function (x) { en.push(x); });
  const n = E.dayN(E.dOf(m || {}), home);
  if (n) en.push(['day ' + n, n + '일째']);
  return { p: p.slice(0, 5), s: st.slice(0, 3), en: en, memo: String((m && m.m) || '').trim() };
};

/* ---------- 영어 문구 → 한글 뜻 (내장 문구만. 직접 쓴 문장은 파파고 링크) ---------- */
E.DL_KO = function (N) { return N ? '우리 카발리에와 함께한 ' + N + '일째' : '우리 카발리에와 함께'; };
E.MQ_KO = { 'cute piano': '귀여운 피아노', 'heartwarming': '마음이 따뜻해지는', 'Monkeys Spinning Monkeys': '곡명 — 경쾌하고 장난스러운 곡', 'Sneaky Snitch': '곡명 — 살금살금 장난스러운 곡',
  'lullaby': '자장가', 'sleepy piano': '잔잔한 피아노', 'emotional piano': '감성 피아노', 'growing up': '성장', 'funny fail': '웃긴 실수', 'upbeat ukulele': '경쾌한 우쿨렐레',
  'proud moment': '뿌듯한 순간', 'happy acoustic': '밝은 어쿠스틱', 'cute puppy': '귀여운 강아지', 'cozy piano': '포근한 피아노', 'upbeat funny': '신나고 웃긴',
  'calm lullaby': '잔잔한 자장가', 'quirky funny': '엉뚱하고 웃긴', 'cinematic inspiring': '웅장하고 감동적인' };
E.gloss = function (ctx) {
  const g = {};
  Object.keys(E.TPL).forEach(function (fm) {
    E.TPL[fm].forEach(function (t) {
      [[t.t, t.k], [t.h, t.kh], [t.t0, t.k0], [t.h0, t.kh0], [t.d, t.kd]].forEach(function (pr) {
        if (!pr[0] || !pr[1]) return;
        g[E.fill(pr[0], ctx)] = E.koFill(pr[1], ctx);
      });
    });
  });
  g['day ' + (ctx.N || '') + ' with my Cavalier'] = E.DL_KO(ctx.N);
  g['with my Cavalier'] = E.DL_KO(0);
  E.FAIL_LINES.forEach(function (x) { g[x[0]] = x[1]; });
  Object.keys(E.MQ_KO).forEach(function (k) { g[k] = E.MQ_KO[k]; });
  return g;
};
E.meaning = function (text, ctx) {
  const t = String(text || '').trim(); if (!t) return '';
  const g = E.gloss(ctx || {});
  if (g[t]) return g[t];
  const m = /^day (\d+)$/i.exec(t); if (m) return m[1] + '일째';
  const m2 = /^day (\d+) with my Cavalier$/i.exec(t); if (m2) return E.DL_KO(m2[1]);
  /* 설명 첫 줄: 'Day N with our Cavalier King Charles Spaniel puppy 🐾' (예전 형식 '— 문장'도 읽음) */
  const m3 = /^(Day (\d+) with our|Life with our) Cavalier King Charles Spaniel puppy(?: 🐾)?(?: — (.+))?$/.exec(t);
  if (m3) { const tail = m3[3] ? (g[m3[3].trim()] || '') : ''; return (m3[2] ? '카발리에 킹 찰스 스패니얼 강아지와 함께한 ' + m3[2] + '일째' : '카발리에 킹 찰스 스패니얼 강아지와 함께하는 삶') + (tail ? ' — ' + tail : ''); }
  return '';
};
E.papago = function (text) { return 'https://papago.naver.com/?sk=en&tk=ko&st=' + encodeURIComponent(String(text || '')); };

/* ---------- 레시피 초안 ---------- */
E.draft = function (sel, fm, opt) {
  opt = opt || {};
  const home = opt.home || '', recipes = opt.recipes || {}, today = opt.today;
  const ctx = E.ctxOf(sel, fm, home, recipes);
  const it = E.captions(E.compose(sel, fm, today, { firstId: opt.firstId, keepAll: opt.keepAll }), sel, fm, ctx, home);
  const ts = E.titles(fm, ctx, recipes);
  const t0 = ts[0] || { key: '', t: '', h: '', d: '' };
  return {
    st: 'draft', mo: 'A', fm: fm, it: it, ti: t0.t, tt: t0.key, hk: t0.h,
    dl: ctx.N ? 'day ' + ctx.N + ' with my Cavalier' : 'with my Cavalier',
    ko: E.koLine(sel, ctx), de: E.desc(t0, sel, ctx, opt.sn || 0), mq: E.music(fm, ctx.mood), dn: ctx.N || 0,
    ln: E.total(it), src: opt.src || 'rec'
  };
};
/* 사진 한 장에서 시작 — 같은 시기·분위기 사진 6~8장을 자동으로 묶음 (SH-00-2) */
E.bundleFrom = function (id, meta, cfg, today) {
  cfg = Object.assign({}, E.DEF_CFG, cfg || {});
  const m0 = meta[id]; if (!m0) return [];
  const d0 = E.dOf(m0), md0 = E.mood(m0), s0 = E.sits(m0);
  const cands = E.candidates(meta, cfg, today, {}).filter(function (x) { return x.id !== id; });
  cands.forEach(function (x) {
    const dd = Math.abs(E.daysBetween(d0, E.dOf(x.m)));
    let r = x.sc;
    if (dd <= 3) r += 4; else if (dd <= 10) r += 2; else if (dd > 45) r -= 3;
    if (md0 && E.mood(x.m) === md0) r += 2;
    if (s0.length && E.sits(x.m).some(function (s) { return s0.indexOf(s) > -1; })) r += 2;
    x.rel = r;
  });
  cands.sort(function (a, b) { return b.rel - a.rel; });
  const first = { id: id, m: m0, sc: E.score(m0, today) + 10 };
  const sel = E.dedupeBursts([first].concat(cands));
  let clips = E.isClip(m0) ? 1 : 0;
  const out = [];
  sel.forEach(function (x) { if (out.length >= 8) return; if (E.isClip(x.m)) { if (clips >= 1 && x.id !== id) return; if (x.id !== id) clips++; } out.push(x); });
  return out.slice(0, 8);
};



/* ================= 영상 합성·인코딩 (12-2·12-6) =================
   1080×1920 · 60fps · H.264(+AAC: 영상 클립 원본 소리, 기기가 AAC 인코딩을 지원할 때만).
   사진: 세로는 화면 꽉 채움(초점 fx·fy), 가로는 흐린 배경 위 가운데. 켄번즈 + 크로스페이드 0.35초.
   자막: 영문 Poppins ExtraBold · 한글 Jua, 흰색 + 검은 테두리, 상단. 폰 브라우저에서 직접 만든다. */
const R = { W: 1080, H: 1920, FPS: 60, BR: 8000000, XF: 0.35, TOPY: 250 };
R.HANGUL = /[ㄱ-ㆎ가-힣]/;
R.easeOut = function (p) { return 1 - Math.pow(1 - p, 3); };
R.clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

/* ---------- 서체 ---------- */
R.fontP = null;
R.loadFonts = function () {
  if (R.fontP) return R.fontP;
  R.fontP = new Promise(function (res) {
    let done = false; const fin = function () { if (!done) { done = true; res(true); } };
    try {
      let l = document.getElementById('sxFontCss');
      const go = function () {
        if (!document.fonts || !document.fonts.load) return fin();
        Promise.all([document.fonts.load('800 80px Poppins', 'Aa'), document.fonts.load('80px Jua', '가나')]).then(fin, fin);
      };
      if (!l) {
        l = document.createElement('link'); l.id = 'sxFontCss'; l.rel = 'stylesheet';
        l.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Jua&display=swap';
        l.onload = go; l.onerror = fin; document.head.appendChild(l);
      } else go();
    } catch (e) { fin(); }
    setTimeout(fin, 7000);
  });
  return R.fontP;
};
/* 구글 폰트는 한글을 글자 묶음(조각)별로 나눠 받는다 → 실제로 쓸 글자를 미리 받아 둔다 */
R.ensureGlyphs = function (texts) {
  if (!document.fonts || !document.fonts.load) return Promise.resolve();
  const jobs = [];
  (texts || []).forEach(function (t) { t = String(t || '').trim(); if (!t) return; jobs.push(document.fonts.load(R.fontOf(t, 60), t).catch(function () { })); });
  return Promise.race([Promise.all(jobs), new Promise(function (r) { setTimeout(r, 5000); })]);
};
R.textsOf = function (rcp) { return [rcp.hk, rcp.dl].concat((rcp.it || []).map(function (x) { return x.c; })); };
R.fontsOK = function () { try { return document.fonts.check('800 40px Poppins') && document.fonts.check('40px Jua', '가') ? 1 : 0; } catch (e) { return 0; } };
R.fontOf = function (txt, px) {
  return R.HANGUL.test(txt) ? (px + 'px Jua, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif') : ('800 ' + px + 'px Poppins, "Helvetica Neue", Arial, sans-serif');
};
/* 줄바꿈 — 영문은 단어, 한글은 어절 단위(넘치면 글자 단위) */
R.wrap = function (g, txt, maxW, maxLines) {
  const words = String(txt || '').split(/\s+/).filter(Boolean), lines = [];
  let cur = '';
  words.forEach(function (w) {
    const t = cur ? cur + ' ' + w : w;
    if (g.measureText(t).width <= maxW || !cur) {
      if (!cur && g.measureText(w).width > maxW) {   /* 한 단어가 너무 길면 글자 단위 */
        let part = '';
        Array.from(w).forEach(function (ch) { if (g.measureText(part + ch).width > maxW && part) { lines.push(part); part = ch; } else part += ch; });
        cur = part;
      } else cur = t;
    } else { lines.push(cur); cur = w; }
  });
  if (cur) lines.push(cur);
  if (lines.length > maxLines) { const keep = lines.slice(0, maxLines); keep[maxLines - 1] = keep[maxLines - 1].replace(/.{0,2}$/, '…'); return keep; }
  /* 두 줄이면 줄 길이를 고르게 (한 단어만 아래로 떨어지지 않게) */
  if (lines.length === 2 && words.length >= 3) {
    let best = null;
    for (let k = 1; k < words.length; k++) {
      const a = words.slice(0, k).join(' '), b = words.slice(k).join(' ');
      const wa = g.measureText(a).width, wb = g.measureText(b).width;
      if (wa > maxW || wb > maxW) continue;
      const m = Math.max(wa, wb);
      if (!best || m < best.m) best = { m: m, l: [a, b] };
    }
    if (best) return best.l;
  }
  return lines;
};
/* 흰 글씨 + 검은 테두리 텍스트를 미리 그려 둔 레이어(캔버스) */
R.TL = new Map();
R.textLayer = function (blocks) {   /* 같은 글자·크기는 다시 그리지 않음 (최근 40개) */
  let ok = 1; try { blocks.forEach(function (b) { if (b.t && !document.fonts.check(R.fontOf(b.t, b.px), b.t)) ok = 0; }); } catch (e) { ok = 0; }
  const key = JSON.stringify(blocks) + '|' + ok;   /* 글자가 늦게 도착하면 다시 그림 */
  if (R.TL.has(key)) { const v = R.TL.get(key); R.TL.delete(key); R.TL.set(key, v); return v; }
  const v = R.textLayer0(blocks);
  R.TL.set(key, v);
  if (R.TL.size > 40) { const k0 = R.TL.keys().next().value; const o = R.TL.get(k0); R.TL.delete(k0); if (o && o.c) { o.c.width = 0; o.c.height = 0; } }
  return v;
};
R.textLayer0 = function (blocks) {   /* blocks: [{t, px, gap}] → {c, h} */
  const W = R.W, padX = 80, maxW = W - padX * 2;
  const tmp = document.createElement('canvas').getContext('2d');
  const rows = []; let h = 0;
  blocks.forEach(function (b) {
    if (!b.t || !String(b.t).trim()) return;
    tmp.font = R.fontOf(b.t, b.px);
    const ls = R.wrap(tmp, b.t, maxW, b.max || 2);
    ls.forEach(function (ln, i) { rows.push({ t: ln, px: b.px, y: h + b.px * 1.08 * i + b.px }); });
    h += b.px * 1.08 * ls.length + (b.gap || 10);
  });
  if (!rows.length) return null;
  const c = document.createElement('canvas'); c.width = W; c.height = Math.ceil(h + 30);
  const g = c.getContext('2d');
  g.textAlign = 'center'; g.textBaseline = 'alphabetic'; g.lineJoin = 'round'; g.miterLimit = 2;
  rows.forEach(function (r) {
    g.font = R.fontOf(r.t, r.px);
    g.lineWidth = R.HANGUL.test(r.t) ? Math.max(5, r.px * 0.12) : Math.max(6, r.px * 0.17); g.strokeStyle = '#000';
    g.shadowColor = 'rgba(0,0,0,.35)'; g.shadowBlur = r.px * 0.12; g.shadowOffsetY = r.px * 0.04;
    g.strokeText(r.t, W / 2, r.y + 6);
    g.shadowColor = 'transparent'; g.fillStyle = '#fff';
    g.fillText(r.t, W / 2, r.y + 6);
  });
  return { c: c, h: c.height };
};
R.layers = function (rcp) {
  const top = R.textLayer([{ t: rcp.hk, px: 82, max: 2, gap: 14 }, { t: rcp.dl, px: 46, max: 1, gap: 0 }]);
  const caps = rcp.it.map(function (x) { return x.c ? R.textLayer([{ t: x.c, px: 60, max: 3 }]) : null; });
  return { top: top, caps: caps };
};

/* ---------- 원본 준비 ---------- */
/* 흐린 배경 — 90×160으로 줄여 상자 흐림 3번(가우스 근사) → 270×480. 그릴 때 4배 확대 (canvas filter 없는 사파리도 같은 결과) */
R.blurBg = function (src, w, h) {
  const SW = 90, SH = 160;
  const a = document.createElement('canvas'); a.width = SW; a.height = SH;
  const ga = a.getContext('2d'); ga.imageSmoothingEnabled = true; ga.imageSmoothingQuality = 'high';
  R.cover(ga, src, w, h, SW, SH, 0.5, 0.5, 1);
  try {
    const id = ga.getImageData(0, 0, SW, SH);
    for (let i = 0; i < 3; i++) R.blur2(id.data, SW, SH, 5);
    ga.putImageData(id, 0, 0);
  } catch (e) { }
  const b = document.createElement('canvas'); b.width = 270; b.height = 480;
  const g = b.getContext('2d'); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
  g.drawImage(a, 0, 0, 270, 480);
  g.fillStyle = 'rgba(0,0,0,.28)'; g.fillRect(0, 0, 270, 480);
  a.width = a.height = 0;
  return b;
};
/* 가로·세로 상자 흐림 1회 */
R.blur2 = function (d, W, H, r) {
  const t = new Float32Array(W * H * 4), win = r * 2 + 1;
  for (let y = 0; y < H; y++) {
    for (let c = 0; c < 4; c++) {
      let acc = 0;
      for (let k = -r; k <= r; k++) acc += d[(y * W + Math.min(W - 1, Math.max(0, k))) * 4 + c];
      for (let x = 0; x < W; x++) {
        t[(y * W + x) * 4 + c] = acc / win;
        acc += d[(y * W + Math.min(W - 1, x + r + 1)) * 4 + c] - d[(y * W + Math.max(0, x - r)) * 4 + c];
      }
    }
  }
  for (let x = 0; x < W; x++) {
    for (let c = 0; c < 4; c++) {
      let acc = 0;
      for (let k = -r; k <= r; k++) acc += t[(Math.min(H - 1, Math.max(0, k)) * W + x) * 4 + c];
      for (let y = 0; y < H; y++) {
        d[(y * W + x) * 4 + c] = acc / win;
        acc += t[(Math.min(H - 1, y + r + 1) * W + x) * 4 + c] - t[(Math.max(0, y - r) * W + x) * 4 + c];
      }
    }
  }
};
R.cover = function (g, src, w, h, W, H, fx, fy, k) {
  const base = Math.max(W / w, H / h) * (k || 1);
  const dw = w * base, dh = h * base;
  const x = R.clamp(W / 2 - fx * dw, W - dw, 0), y = R.clamp(H / 2 - fy * dh, H - dh, 0);
  g.drawImage(src, x, y, dw, dh);
};
R.loadPhoto = async function (id) {
  const url = await albImgSrc('full', id);
  const r = await fetch(url); if (!r.ok) throw new Error('사진 HTTP ' + r.status);
  const bl = await r.blob();
  const bmp = await createImageBitmap(bl);
  return { kind: 'img', src: bmp, w: bmp.width, h: bmp.height, bg: (bmp.width / bmp.height >= 0.9) ? R.blurBg(bmp, bmp.width, bmp.height) : null };
};
R.hiddenBox = function () {
  let b = document.getElementById('sxVidBox');
  if (!b) { b = document.createElement('div'); b.id = 'sxVidBox'; b.setAttribute('aria-hidden', 'true'); b.style.cssText = 'position:fixed;left:0;top:0;width:2px;height:2px;overflow:hidden;opacity:0.01;pointer-events:none;z-index:-1;'; document.body.appendChild(b); }
  return b;
};
R.makeVideo = function (src) {
  const v = document.createElement('video');
  v.muted = true; v.defaultMuted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('muted', '');
  v.preload = 'auto'; v.crossOrigin = 'anonymous'; v.width = 2; v.height = 2;
  v.src = src; R.hiddenBox().appendChild(v);
  return v;
};
R.waitMeta = function (v, ms) {
  return new Promise(function (res, rej) {
    if (v.readyState >= 1 && v.videoWidth) return res();
    const to = setTimeout(function () { cl(); rej(new Error('영상 정보를 읽지 못했어요')); }, ms || 20000);
    const ok = function () { if (v.videoWidth) { cl(); res(); } };
    const bad = function () { cl(); rej(new Error('이 영상은 이 폰에서 열 수 없어요')); };
    function cl() { clearTimeout(to); v.removeEventListener('loadedmetadata', ok); v.removeEventListener('loadeddata', ok); v.removeEventListener('error', bad); }
    v.addEventListener('loadedmetadata', ok); v.addEventListener('loadeddata', ok); v.addEventListener('error', bad);
    try { const p = v.play(); if (p && p.then) p.then(function () { v.pause(); }, function () { }); } catch (e) { }   /* 아이폰: 재생을 한 번 걸어야 불러온다 */
  });
};
R.seekTo = function (v, t) {
  return new Promise(function (res) {
    if (Math.abs(v.currentTime - t) < 0.002 && v.readyState >= 2) return res();
    let done = false, seeked = false, framed = !('requestVideoFrameCallback' in v);
    const fin = function () { if (done) return; done = true; v.removeEventListener('seeked', onS); clearTimeout(to); res(); };
    const onS = function () { seeked = true; if (framed) fin(); else setTimeout(fin, 120); };
    if (!framed) { try { v.requestVideoFrameCallback(function () { framed = true; if (seeked) fin(); }); } catch (e) { framed = true; } }
    v.addEventListener('seeked', onS);
    const to = setTimeout(fin, 3000);
    try { v.currentTime = t; } catch (e) { fin(); }
  });
};
/* 영상 원본 받기 — 소리를 쓰거나 빠른 탐색을 위해. 150MB 넘으면 받지 않고 스트리밍 */
R.MAXDL = 150 * 1048576;
R.loadClip = async function (id, m, o) {
  o = o || {};
  const url = mediaApi('/file/' + m.k);
  let src = url, buf = null, blobUrl = '';
  if (o.download && (!m.vs || m.vs <= R.MAXDL)) {
    try {
      const r = await fetch(url, { signal: o.signal });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const total = +r.headers.get('content-length') || m.vs || 0;
      let got = 0; const parts = [];
      if (r.body && r.body.getReader) {
        const rd = r.body.getReader();
        for (; ;) { const x = await rd.read(); if (x.done) break; parts.push(x.value); got += x.value.length; if (o.onProg && total) o.onProg(got / total); }
      } else { parts.push(new Uint8Array(await r.arrayBuffer())); }
      const bl = new Blob(parts, { type: m.ct || 'video/mp4' });
      blobUrl = URL.createObjectURL(bl); src = blobUrl;
      if (o.audio) { try { buf = await bl.arrayBuffer(); } catch (e) { buf = null; } }
    } catch (e) { if (e && e.name === 'AbortError') throw e; src = url; }
  }
  const v = R.makeVideo(src);
  await R.waitMeta(v, 25000);
  const s = { kind: 'vid', src: v, w: v.videoWidth, h: v.videoHeight, dur: isFinite(v.duration) ? v.duration : (+m.dur || 0), blobUrl: blobUrl, ab: buf, bg: null };
  if (s.w / s.h >= 0.9) {
    try { await R.seekTo(v, Math.min(0.5, (s.dur || 1) / 2)); s.bg = R.blurBg(v, s.w, s.h); } catch (e) { s.bg = null; }
  }
  return s;
};
R.release = function (srcs) {
  (srcs || []).forEach(function (s) {
    if (!s) return;
    try { if (s.kind === 'img' && s.src && s.src.close) s.src.close(); } catch (e) { }
    try { if (s.bg) { s.bg.width = 0; s.bg.height = 0; s.bg = null; } } catch (e) { }
    if (s.kind === 'vid') { try { s.src.pause(); s.src.removeAttribute('src'); s.src.load(); s.src.remove(); } catch (e) { } if (s.blobUrl) { try { URL.revokeObjectURL(s.blobUrl); } catch (e) { } } }
  });
};

/* ---------- 한 장면 그리기 ---------- */
R.drawItem = function (g, s, it, p, alpha) {
  if (!s || alpha <= 0) return;
  const W = R.W, H = R.H;
  p = R.clamp(p, 0, 1);
  let k = 1;
  if (it.zf) k = 1 + 0.18 * R.easeOut(p);
  else if (it.z === 'out') k = 1.09 - 0.08 * p;
  else if (it.z === 'in') k = 1.01 + 0.08 * p;
  else k = 1.07;
  let dx = 0;
  if (it.z === 'l') dx = (0.5 - p) * 0.05 * W; else if (it.z === 'r') dx = (p - 0.5) * 0.05 * W;
  g.globalAlpha = alpha;
  const w = s.w, h = s.h;
  if (!w || !h) { g.globalAlpha = 1; return; }
  if (w / h >= 0.9) {
    /* 가로·정사각: 흐린 배경 + 원본 가운데(가로 꽉) */
    if (s.bg) g.drawImage(s.bg, 0, 0, W, H); else { g.fillStyle = '#111'; g.fillRect(0, 0, W, H); }
    const k2 = 1 + (k - 1) * 0.5;
    const dw = W * k2, dh = dw * h / w;
    g.drawImage(s.src, (W - dw) / 2 + dx * 0.3, (H - dh) / 2, dw, dh);
  } else {
    const fx = typeof it.fx === 'number' ? it.fx : 0.5, fy = typeof it.fy === 'number' ? it.fy : 0.45;
    const base = Math.max(W / w, H / h) * k;
    const dw = w * base, dh = h * base;
    const x = R.clamp(W / 2 - fx * dw + dx, W - dw, 0), y = R.clamp(H / 2 - fy * dh, H - dh, 0);
    g.drawImage(s.src, x, y, dw, dh);
  }
  g.globalAlpha = 1;
};
/* 시간표: 각 항목의 시작·끝 */
R.timeline = function (it) {
  let t = 0;
  return it.map(function (x) { const s = t; t += +x.du || 0; return { s: s, e: t }; });
};
R.at = function (tl, t) { for (let i = 0; i < tl.length; i++) { if (t < tl[i].e) return i; } return tl.length - 1; };
/* 프레임 t초 — 지금 장면 + (끝나기 0.35초 전부터) 다음 장면 크로스페이드 + 자막 */
R.drawFrame = function (g, rcp, srcs, lay, tl, t) {
  const W = R.W, H = R.H, it = rcp.it;
  g.globalAlpha = 1; g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
  const i = R.at(tl, t);
  const cur = tl[i];
  R.drawItem(g, srcs[i], it[i], (t - cur.s) / Math.max(0.01, cur.e - cur.s), 1);
  let a = 0;
  if (i + 1 < it.length && t > cur.e - R.XF) {
    a = R.clamp((t - (cur.e - R.XF)) / R.XF, 0, 1);
    const nx = tl[i + 1];
    R.drawItem(g, srcs[i + 1], it[i + 1], (t - nx.s) / Math.max(0.01, nx.e - nx.s), a);
  }
  if (lay) {
    const total = tl.length ? tl[tl.length - 1].e : 0;
    const ta = R.clamp(t / 0.3, 0, 1) * R.clamp((total - t) / 0.25 + 0.2, 0, 1);
    let y = R.TOPY;
    if (lay.top) { g.globalAlpha = ta; g.drawImage(lay.top.c, 0, y); y += lay.top.h + 10; }
    const c1 = lay.caps[i], c2 = lay.caps[i + 1];
    if (c1) { g.globalAlpha = (1 - a) * R.clamp((t - cur.s) / 0.25, 0, 1); g.drawImage(c1.c, 0, y); }
    if (c2 && a > 0) { g.globalAlpha = a; g.drawImage(c2.c, 0, y); }
    g.globalAlpha = 1;
  }
};
/* 프레임 t초에 보여야 하는 영상 장면의 원본 시각 */
R.vidTime = function (x, seg, t, s) {
  const sp = +x.sp || 1;
  let vt = (+x.ss || 0) + Math.max(0, t - seg.s) * sp;
  const dur = (s && s.dur) || 0;
  if (dur) vt = Math.min(vt, Math.max(0, dur - 0.05));
  return vt;
};

/* ---------- 기기 지원 확인 ---------- */
R.CODECS = ['avc1.64002A', 'avc1.640033', 'avc1.4D002A', 'avc1.4D0033', 'avc1.42002A', 'avc1.420033'];
/* 1080×1920 60fps가 기본. 기기 인코더가 세로 크기를 못 받으면 가로(1920×1080)로 눕혀 만들고 회전 정보(90°)를 붙인다 — 재생·유튜브에서는 세로로 보임.
   60fps가 안 되는 기기만 30fps. */
R.ATTEMPTS = [{ w: 1080, h: 1920, fps: 60, rot: 0 }, { w: 1920, h: 1080, fps: 60, rot: 90 }, { w: 1080, h: 1920, fps: 30, rot: 0 }, { w: 1920, h: 1080, fps: 30, rot: 90 }];
R.FORCE = null;   /* 테스트용: {rot:90} 등 */
R.pickCodec = async function () {
  if (typeof VideoEncoder === 'undefined' || typeof VideoFrame === 'undefined') return null;
  const hws = ['prefer-hardware', 'no-preference'];
  for (let a = 0; a < R.ATTEMPTS.length; a++) {
    const at = R.ATTEMPTS[a];
    if (R.FORCE && Object.keys(R.FORCE).some(function (k) { return R.FORCE[k] !== at[k]; })) continue;
    for (let h = 0; h < hws.length; h++) {
      for (let i = 0; i < R.CODECS.length; i++) {
        const cfg = { codec: R.CODECS[i], width: at.w, height: at.h, framerate: at.fps, bitrate: R.BR, hardwareAcceleration: hws[h], avc: { format: 'avc' } };
        try { const s = await VideoEncoder.isConfigSupported(cfg); if (s && s.supported) return { cfg: cfg, fps: at.fps, rot: at.rot }; } catch (e) { }
      }
    }
  }
  return null;
};
R.AC = { enc: 'mp4a.40.2', mux: 'aac' };   /* AAC (유튜브 권장) */
R.audioOk = async function () {
  if (typeof AudioEncoder === 'undefined' || typeof AudioData === 'undefined' || typeof OfflineAudioContext === 'undefined') return false;
  try { const s = await AudioEncoder.isConfigSupported({ codec: R.AC.enc, sampleRate: 48000, numberOfChannels: 2, bitrate: 128000 }); return !!(s && s.supported); } catch (e) { return false; }
};
R.caps = async function () { const c = await R.pickCodec(); return { video: !!c, codec: c && c.cfg.codec, fps: c && c.fps, rot: c && c.rot, audio: c ? await R.audioOk() : false }; };

/* ---------- 원본 소리 섞기 (영상 클립, 1배속 구간만) ---------- */
R.mixAudio = async function (rcp, srcs, tl) {
  const SR = 48000, total = tl[tl.length - 1].e;
  const len = Math.ceil(total * SR);
  const dec = new OfflineAudioContext(2, SR, SR);
  const ctx = new OfflineAudioContext(2, len, SR);
  let any = false;
  for (let i = 0; i < rcp.it.length; i++) {
    const x = rcp.it[i], s = srcs[i];
    if (!x.v || !s || !s.ab || (+x.sp || 1) !== 1) continue;
    let ab = null;
    try { ab = await dec.decodeAudioData(s.ab.slice(0)); } catch (e) { ab = null; }
    s.ab = null;
    if (!ab) continue;
    const st = tl[i].s, du = tl[i].e - tl[i].s, off = +x.ss || 0;
    if (off >= ab.duration) continue;
    const src = ctx.createBufferSource(); src.buffer = ab;
    const gn = ctx.createGain();
    gn.gain.setValueAtTime(0, st); gn.gain.linearRampToValueAtTime(1, st + 0.08);
    gn.gain.setValueAtTime(1, Math.max(st + 0.08, st + du - 0.12)); gn.gain.linearRampToValueAtTime(0, st + du);
    src.connect(gn); gn.connect(ctx.destination);
    src.start(st, off, Math.min(du, ab.duration - off));
    any = true;
  }
  if (!any) return null;
  return await ctx.startRendering();
};
R.encodeAudio = async function (buf) {   /* → [[chunk, meta], …] (실패하면 throw) */
  const SR = 48000, len = buf.length, CH = 2, out = [];
  let err = null;
  const enc = new AudioEncoder({ output: function (c, m) { out.push([c, m]); }, error: function (e) { err = e; } });
  enc.configure({ codec: R.AC.enc, sampleRate: SR, numberOfChannels: CH, bitrate: 128000 });
  const L = buf.getChannelData(0), Rr = buf.numberOfChannels > 1 ? buf.getChannelData(1) : L;
  const STEP = 4096;
  for (let off = 0; off < len; off += STEP) {
    const n = Math.min(STEP, len - off);
    const data = new Float32Array(n * CH);
    data.set(L.subarray(off, off + n), 0); data.set(Rr.subarray(off, off + n), n);
    const ad = new AudioData({ format: 'f32-planar', sampleRate: SR, numberOfFrames: n, numberOfChannels: CH, timestamp: Math.round(off / SR * 1e6), data: data });
    enc.encode(ad); ad.close();
    if (err) throw err;
    while (enc.encodeQueueSize > 16) await new Promise(function (r) { setTimeout(r, 0); });
  }
  await enc.flush(); enc.close();
  if (err) throw err;
  if (!out.length) throw new Error('no audio');
  return out;
};

/* ---------- 영상 만들기 ---------- */
R.make = async function (rcp, o) {
  o = o || {};
  const prog = o.onProg || function () { };
  const sig = o.signal || { aborted: false };
  const chk = function () { if (sig.aborted) { const e = new Error('취소'); e.name = 'AbortError'; throw e; } };
  const pk = await R.pickCodec();
  if (!pk) { const e = new Error('이 폰에서는 영상을 만들 수 없어요. iOS를 업데이트하거나 다른 기기에서 열어 주세요.'); e.code = 'nosupport'; throw e; }
  const cfg = pk.cfg, FPS = pk.fps;
  const wantAudio = rcp.it.some(function (x) { return x.v && (+x.sp || 1) === 1; }) && await R.audioOk();
  await R.loadFonts();
  await R.ensureGlyphs(R.textsOf(rcp));
  const tl = R.timeline(rcp.it), total = tl.length ? tl[tl.length - 1].e : 0;
  const srcs = [];
  let encV = null;
  try {
    /* 1) 사진 준비 */
    prog({ step: 0, p: 0 });
    const n = rcp.it.length;
    for (let i = 0; i < n; i++) {
      chk();
      const x = rcp.it[i], m = (ALB.meta || {})[x.id];
      if (!m) throw new Error('앨범에서 사라진 사진이 있어요 (' + (i + 1) + '번째)');
      if (x.v) srcs.push(await R.loadClip(x.id, m, { download: true, audio: wantAudio, signal: o.signal, onProg: function (p) { prog({ step: 0, p: (i + p) / n }); } }));
      else srcs.push(await R.loadPhoto(x.id));
      prog({ step: 0, p: (i + 1) / n });
    }
    const lay = R.layers(rcp);
    chk();
    /* 2) 소리 */
    let audioBuf = null;
    if (wantAudio) { try { audioBuf = await R.mixAudio(rcp, srcs, tl); } catch (e) { audioBuf = null; } }
    let achunks = null;
    if (audioBuf) { try { achunks = await R.encodeAudio(audioBuf); } catch (e) { achunks = null; } }
    const target = new Mp4Muxer.ArrayBufferTarget();
    const mux = new Mp4Muxer.Muxer({
      target: target,
      video: { codec: 'avc', width: cfg.width, height: cfg.height, frameRate: FPS, rotation: pk.rot || 0 },
      audio: achunks ? { codec: R.AC.mux, sampleRate: 48000, numberOfChannels: 2 } : undefined,
      fastStart: 'in-memory', firstTimestampBehavior: 'offset'
    });
    const hasAudio = !!achunks;
    if (achunks) achunks.forEach(function (a) { mux.addAudioChunk(a[0], a[1]); });
    /* 3) 영상 만들기 */
    const cv = document.createElement('canvas'); cv.width = R.W; cv.height = R.H;
    const g = cv.getContext('2d', { alpha: false });
    g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
    let cv2 = null, g2 = null;
    if (pk.rot === 90) {   /* 세로 화면을 왼쪽으로 눕혀 담기 — 재생 때 시계 방향 90° 회전 */
      cv2 = document.createElement('canvas'); cv2.width = cfg.width; cv2.height = cfg.height;
      g2 = cv2.getContext('2d', { alpha: false }); g2.setTransform(0, -1, 1, 0, 0, R.W);
    }
    let verr = null;
    encV = new VideoEncoder({ output: function (c, m) { mux.addVideoChunk(c, m); }, error: function (e) { verr = e; } });
    encV.configure(cfg);
    const N = Math.round(total * FPS), dt = 1e6 / FPS;
    const lastQ = {};
    for (let f = 0; f < N; f++) {
      chk(); if (verr) throw verr;
      const t = f / FPS;
      const i = R.at(tl, t);
      const vis = [i]; if (i + 1 < n && t > tl[i].e - R.XF) vis.push(i + 1);
      for (let k = 0; k < vis.length; k++) {
        const j = vis[k], x = rcp.it[j], s = srcs[j];
        if (!x.v || !s) continue;
        const step = (+x.sp || 1) < 1 ? 60 : 30;
        const q = Math.round(R.vidTime(x, tl[j], t, s) * step) / step;
        if (lastQ[j] !== q) { await R.seekTo(s.src, q); lastQ[j] = q; }
      }
      R.drawFrame(g, rcp, srcs, lay, tl, t);
      if (g2) g2.drawImage(cv, 0, 0);
      const fr = new VideoFrame(g2 ? cv2 : cv, { timestamp: Math.round(f * dt), duration: Math.round(dt) });
      encV.encode(fr, { keyFrame: f % (FPS * 2) === 0 }); fr.close();
      while (encV.encodeQueueSize > 6) { await new Promise(function (r) { setTimeout(r, 0); }); if (verr) throw verr; }
      if (f % 6 === 0) prog({ step: 1, p: f / N });
    }
    await encV.flush(); encV.close(); encV = null;
    if (verr) throw verr;
    mux.finalize();
    cv.width = 0; cv.height = 0; if (cv2) { cv2.width = 0; cv2.height = 0; }
    prog({ step: 1, p: 1 });
    const blob = new Blob([target.buffer], { type: 'video/mp4' });
    return { blob: blob, hasAudio: hasAudio, dur: total, codec: cfg.codec, frames: N, fps: FPS, rot: pk.rot || 0 };
  } finally {
    try { if (encV && encV.state !== 'closed') encV.close(); } catch (e) { }
    R.release(srcs);
  }
};

/* ---------- 미리보기 (저해상도, 실시간) ---------- */
R.Player = function (canvas, onTick) {
  this.cv = canvas; this.g = canvas.getContext('2d'); this.onTick = onTick || function () { };
  this.rcp = null; this.srcs = []; this.lay = null; this.tl = []; this.t = 0; this.playing = false; this.raf = 0; this.t0 = 0; this.gen = 0; this.cache = {};
};
R.Player.prototype.set = async function (rcp) {
  const gen = ++this.gen;
  this.rcp = JSON.parse(JSON.stringify(rcp));
  this.tl = R.timeline(this.rcp.it);
  this.t = Math.min(this.t, this.total());
  await R.loadFonts();
  await R.ensureGlyphs(R.textsOf(this.rcp));
  if (gen !== this.gen) return;
  this.lay = R.layers(this.rcp);
  const self = this, need = {};
  this.srcs = this.rcp.it.map(function (x) { need[x.id] = 1; return self.cache[x.id] || null; });
  this.draw();
  for (let i = 0; i < this.rcp.it.length; i++) {
    const x = this.rcp.it[i];
    if (this.cache[x.id]) continue;
    try {
      const m = (ALB.meta || {})[x.id]; if (!m) continue;
      const s = x.v ? await R.loadClip(x.id, m, { download: false }) : await R.loadPhoto(x.id);
      this.cache[x.id] = s;
    } catch (e) { this.cache[x.id] = null; }
    if (gen !== this.gen) return;
    this.srcs = this.rcp.it.map(function (y) { return self.cache[y.id] || null; });
    if (!this.playing) this.draw();
  }
  Object.keys(this.cache).forEach(function (id) { if (!need[id]) { R.release([self.cache[id]]); delete self.cache[id]; } });
};
R.Player.prototype.total = function () { return this.tl.length ? this.tl[this.tl.length - 1].e : 0; };
R.Player.prototype.draw = function () {
  const g = this.g, sc = this.cv.width / R.W;
  g.setTransform(sc, 0, 0, sc, 0, 0);
  if (!this.rcp || !this.tl.length) { g.fillStyle = '#222'; g.fillRect(0, 0, R.W, R.H); return; }
  const srcs = this.srcs.map(function (s) { return s; });
  R.drawFrame(g, this.rcp, srcs.map(function (s) { return s || null; }), this.lay, this.tl, Math.min(this.t, this.total() - 0.001));
  this.onTick(this.t, this.total());
};
R.Player.prototype.syncVideos = function () {
  const t = this.t, i = R.at(this.tl, t), self = this;
  this.rcp.it.forEach(function (x, j) {
    const s = self.srcs[j]; if (!x.v || !s) return;
    const v = s.src;
    const active = self.playing && (j === i || (j === i + 1 && t > self.tl[i].e - R.XF));
    if (active) {
      const want = R.vidTime(x, self.tl[j], t, s);
      if (Math.abs(v.currentTime - want) > 0.25) { try { v.currentTime = want; } catch (e) { } }
      v.playbackRate = +x.sp || 1;
      if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(function () { }); }
    } else {
      if (!v.paused) v.pause();
      if (!self.playing) { const want = R.vidTime(x, self.tl[j], Math.max(t, self.tl[j].s), s); if (Math.abs(v.currentTime - want) > 0.05) { try { v.currentTime = want; } catch (e) { } } }
    }
  });
};
R.Player.prototype.play = function () {
  if (this.playing || !this.rcp) return;
  if (this.t >= this.total() - 0.05) this.t = 0;
  this.playing = true; this.t0 = performance.now() - this.t * 1000;
  const self = this;
  const loop = function (now) {
    if (!self.playing) return;
    self.t = (now - self.t0) / 1000;
    if (self.t >= self.total()) { self.t = self.total(); self.pause(); self.draw(); return; }
    self.syncVideos(); self.draw();
    self.raf = requestAnimationFrame(loop);
  };
  this.raf = requestAnimationFrame(loop);
};
R.Player.prototype.pause = function () { this.playing = false; cancelAnimationFrame(this.raf); this.syncVideos(); };
R.Player.prototype.toggle = function () { if (this.playing) this.pause(); else this.play(); };
R.Player.prototype.seek = function (t) { this.t = R.clamp(t, 0, this.total()); if (this.playing) this.t0 = performance.now() - this.t * 1000; this.syncVideos(); this.draw(); };
R.Player.prototype.destroy = function () { this.pause(); this.gen++; const c = this.cache; R.release(Object.keys(c).map(function (k) { return c[k]; })); this.cache = {}; this.srcs = []; };

/* ---------- 이미지 지문(dHash) — 연사 묶기용 ---------- */
R.dhash = async function (url) {
  const r = await fetch(url); const bl = await r.blob(); const bmp = await createImageBitmap(bl);
  const c = document.createElement('canvas'); c.width = 9; c.height = 8;
  const g = c.getContext('2d'); g.drawImage(bmp, 0, 0, 9, 8); try { bmp.close(); } catch (e) { }
  const d = g.getImageData(0, 0, 9, 8).data;
  let hex = '', nib = 0, nb = 0;
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
    const a = (y * 9 + x) * 4, b = (y * 9 + x + 1) * 4;
    const la = d[a] * 0.299 + d[a + 1] * 0.587 + d[a + 2] * 0.114, lb = d[b] * 0.299 + d[b + 1] * 0.587 + d[b + 2] * 0.114;
    nib = (nib << 1) | (la > lb ? 1 : 0); nb++;
    if (nb === 4) { hex += nib.toString(16); nib = 0; nb = 0; }
  }
  return hex;
};

/* ================= 쇼츠 화면 — 공통(스타일·데이터·화면 쌓기) ================= */
const CSS = `
#sxRoot{position:fixed; inset:0; z-index:95; pointer-events:none;}
body.sx-open{overflow:hidden;}
.sx-scr{position:absolute; inset:0; background:var(--bg); color:var(--label); overflow-y:auto; -webkit-overflow-scrolling:touch; overscroll-behavior:contain; pointer-events:auto;
  transform:translateX(104%); transition:transform .34s cubic-bezier(.2,.9,.3,1); box-shadow:-8px 0 24px rgba(0,0,0,.08); padding-bottom:calc(28px + env(safe-area-inset-bottom));}
.sx-scr.on{transform:none;}
.sx-scr.under{transform:translateX(-22%); transition:transform .34s cubic-bezier(.2,.9,.3,1);}
.sx-scr.noanim{transition:none;}
@media (prefers-reduced-motion: reduce){ .sx-scr, .sx-scr.under{transition:none;} }
.sx-nav{position:sticky; top:0; z-index:5; display:flex; align-items:center; justify-content:space-between; gap:8px;
  min-height:calc(48px + env(safe-area-inset-top)); padding:calc(4px + env(safe-area-inset-top)) 10px 4px;
  background:var(--glass-bar); -webkit-backdrop-filter:saturate(180%) blur(20px); backdrop-filter:saturate(180%) blur(20px);}
.sx-nav.line{border-bottom:.5px solid var(--sep);}
.sx-back, .sx-nbtn{display:flex; align-items:center; gap:1px; background:none; border:none; color:var(--tint); font-family:inherit; font-size:17px; padding:8px 6px; cursor:pointer; min-height:40px;}
.sx-back svg{width:22px; height:22px; fill:none; stroke:currentColor; stroke-width:2.4; stroke-linecap:round; stroke-linejoin:round; margin-left:-4px;}
.sx-nbtn svg{width:25px; height:25px; fill:none; stroke:currentColor; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round;}
.sx-nbtn.mute{color:var(--label2);}
.sx-ttl{position:absolute; left:50%; transform:translateX(-50%); font-size:17px; font-weight:600; white-space:nowrap; pointer-events:none; bottom:12px;}
.sx-big{font-size:34px; font-weight:800; letter-spacing:-.03em; line-height:1.15; margin:2px 0 14px;}
.sx-body{padding:4px 16px 0; max-width:640px; margin:0 auto;}
.sx-seg{display:flex; background:var(--fill2); border-radius:11px; padding:2px; margin:0 0 16px; position:relative;}
.sx-seg button{flex:1; border:none; background:none; font-family:inherit; font-size:14.5px; font-weight:600; padding:8px 0; border-radius:9px; color:var(--label); cursor:pointer; position:relative; z-index:1;}
.sx-seg button.on{background:var(--card); box-shadow:0 2px 8px rgba(0,0,0,.12);}
.sx-seg button:disabled{color:var(--label3);}
.sx-row{display:flex; align-items:center; justify-content:space-between; gap:10px; margin:4px 2px 10px;}
.sx-h{font-size:17px; font-weight:700; letter-spacing:-.01em;}
.sx-lnk{background:none; border:none; color:var(--tint); font-family:inherit; font-size:15px; font-weight:500; cursor:pointer; padding:6px 2px;}
.sx-lnk:disabled{color:var(--label3);}
.sx-card{background:var(--card); border-radius:20px; padding:12px; margin-bottom:12px;}
.sx-sub{font-size:13px; color:var(--label2); line-height:1.45;}
.sx-sec{font-size:13px; color:var(--label2); margin:18px 6px 7px; letter-spacing:.01em;}
.sx-btn{display:block; width:100%; border:none; border-radius:15px; padding:15px; font-family:inherit; font-size:17px; font-weight:600; background:var(--tint-btn,var(--tint)); color:#fff; cursor:pointer;}
.sx-btn:disabled{background:var(--fill2); color:var(--label3); cursor:default;}
.sx-btn.soft{background:var(--tint-fill); color:var(--tint-ink);}
.sx-btn.gray{background:var(--fill2); color:var(--label);}
.sx-btn.sm{display:inline-block; width:auto; padding:9px 18px; font-size:15px; border-radius:999px;}
.sx-edit .sx-foot, .sx-fin .sx-foot{position:static; background:none;}
.sx-foot{position:sticky; bottom:0; padding:12px 16px calc(12px + env(safe-area-inset-bottom)); background:linear-gradient(transparent, var(--bg) 30%); max-width:640px; margin:0 auto; z-index:4;}
.sx-chip{display:inline-flex; align-items:center; gap:4px; border:1px solid var(--sep); background:var(--card); color:var(--label); border-radius:999px; padding:7px 14px; font-family:inherit; font-size:15px; cursor:pointer; white-space:nowrap;}
.sx-chip.on{background:var(--tint-btn,var(--tint)); border-color:transparent; color:#fff;}
.sx-chip.soft{background:var(--tint-fill); border-color:transparent; color:var(--tint-ink);}
.sx-chips{display:flex; flex-wrap:wrap; gap:8px;}
.sx-hs{display:flex; gap:8px; overflow-x:auto; -webkit-overflow-scrolling:touch; scrollbar-width:none; padding:2px 16px 4px; margin:0 -16px;}
.sx-hs::-webkit-scrollbar{display:none;}
.sx-badge{display:inline-block; font-size:12px; font-weight:700; letter-spacing:.02em; padding:3px 9px; border-radius:999px; background:var(--tint-fill); color:var(--tint-ink);}
.sx-badge.gray{background:var(--fill2); color:var(--label2);}
.sx-new{color:var(--green); font-size:14px; font-weight:500;}
.sx-warn{background:var(--amber-bg); color:var(--warn-ink); border-radius:14px; padding:11px 13px; font-size:14px; line-height:1.45; margin:10px 0;}
.sx-note{background:var(--tint-fill); color:var(--tint-ink); border-radius:14px; padding:11px 13px; font-size:14px; line-height:1.45; margin:10px 0;}
.sx-empty{text-align:center; color:var(--label2); font-size:15px; line-height:1.55; padding:26px 12px;}
.sx-ph{background:var(--fill2); display:block; width:100%; height:100%; object-fit:cover; opacity:0; transition:opacity .25s;}
.sx-ph.ld{opacity:1;}
/* 추천 카드 */
.sx-rec{display:flex; gap:14px; background:var(--card); border-radius:22px; padding:12px; margin-bottom:12px; cursor:pointer;}
.sx-rec .cv{position:relative; flex:0 0 112px; height:200px; border-radius:14px; overflow:hidden; background:var(--fill2);}
.sx-rec .cv .len{position:absolute; right:7px; bottom:7px; background:rgba(0,0,0,.55); color:#fff; font-size:12.5px; font-weight:600; border-radius:8px; padding:2px 7px;}
.sx-rec .bd{flex:1; min-width:0; display:flex; flex-direction:column; gap:6px; padding:2px 0;}
.sx-rec .tg{display:flex; align-items:center; gap:7px; flex-wrap:wrap; font-size:13px; color:var(--label2);}
.sx-rec .tt{font-size:19px; font-weight:700; line-height:1.25; letter-spacing:-.01em; word-break:break-word;}
.sx-rec .in{font-size:14px; color:var(--label2);}
.sx-rec .go{margin-top:auto; align-self:flex-start;}
.sx-draft{display:flex; align-items:center; gap:12px; padding:10px 4px; border-bottom:.5px solid var(--sep); cursor:pointer;}
.sx-draft:last-child{border-bottom:none;}
.sx-draft .th{flex:0 0 44px; height:62px; border-radius:9px; overflow:hidden; background:var(--fill2);}
.sx-draft .tx{flex:1; min-width:0;}
.sx-draft .t1{font-size:15.5px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
/* 기록 */
.sx-list{background:var(--card); border-radius:20px; overflow:hidden; margin-bottom:12px;}
.sx-li{display:flex; align-items:center; gap:13px; padding:12px 14px; cursor:pointer; position:relative;}
.sx-li + .sx-li::before{content:""; position:absolute; top:0; left:86px; right:0; border-top:.5px solid var(--sep);}
.sx-li .th{flex:0 0 58px; height:82px; border-radius:10px; overflow:hidden; background:var(--fill2);}
.sx-li .tx{flex:1; min-width:0;}
.sx-li .t1{font-size:16.5px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
.sx-li .t2{font-size:14px; color:var(--label2); margin-top:3px;}
.sx-li .t3{font-size:14px; margin-top:3px; color:var(--warn-ink);}
.sx-li .t3.ok{color:var(--green);}
.sx-li .bg{flex:0 0 auto; align-self:flex-start; margin-top:4px;}
/* 설정 */
.sx-grp{background:var(--card); border-radius:16px; overflow:hidden;}
.sx-set{display:flex; align-items:center; justify-content:space-between; gap:12px; padding:13px 16px; min-height:50px; font-size:16.5px; position:relative; cursor:default;}
.sx-set + .sx-set::before{content:""; position:absolute; top:0; left:16px; right:0; border-top:.5px solid var(--sep);}
.sx-set .v{color:var(--label2); display:flex; align-items:center; gap:4px; text-align:right;}
.sx-set.tap{cursor:pointer;}
.sx-set .v svg{width:15px; height:15px; fill:none; stroke:var(--label3); stroke-width:2.4; stroke-linecap:round; stroke-linejoin:round;}
.sx-set .act{color:var(--tint);}
.sx-set .dis{color:var(--label3);}
.sx-mini{display:flex; background:var(--fill2); border-radius:9px; padding:2px;}
.sx-mini button{border:none; background:none; font-family:inherit; font-size:14px; font-weight:600; padding:6px 16px; border-radius:7px; color:var(--label); cursor:pointer;}
.sx-mini button.on{background:var(--card); box-shadow:0 1px 5px rgba(0,0,0,.14);}
.sx-mini button:disabled{color:var(--label3);}
.sx-step{display:flex; align-items:center; gap:2px;}
.sx-step button{width:34px; height:30px; border:none; background:var(--fill2); color:var(--label); font-size:18px; border-radius:8px; cursor:pointer; font-family:inherit;}
.sx-step b{min-width:52px; text-align:center; font-weight:600; font-size:15.5px;}
/* 편집 */
.sx-pv{position:relative; width:min(46vw, 212px); aspect-ratio:9/16; margin:4px auto 0; border-radius:22px; overflow:hidden; background:#111; cursor:pointer; box-shadow:0 8px 28px rgba(0,0,0,.18);}
.sx-pv canvas{width:100%; height:100%; display:block;}
.sx-pv .pl{position:absolute; left:50%; top:50%; width:64px; height:64px; margin:-32px 0 0 -32px; border-radius:50%; background:rgba(255,255,255,.88); display:flex; align-items:center; justify-content:center; transition:opacity .2s; pointer-events:none;}
.sx-pv .pl svg{width:26px; height:26px; fill:#111; margin-left:4px;}
.sx-pv.playing .pl{opacity:0;}
.sx-pv .tm{position:absolute; right:12px; bottom:20px; color:#fff; font-size:13px; font-weight:600; text-shadow:0 1px 3px rgba(0,0,0,.6); font-variant-numeric:tabular-nums;}
.sx-pv .pb{position:absolute; left:14px; right:14px; bottom:10px; height:4px; border-radius:2px; background:rgba(255,255,255,.35); overflow:hidden;}
.sx-pv .pb i{display:block; height:100%; width:0; background:#fff;}
.sx-pv .ld{position:absolute; left:0; right:0; top:45%; text-align:center; color:rgba(255,255,255,.75); font-size:13px;}
.sx-len{margin:18px 2px 6px;}
.sx-len .hd{display:flex; justify-content:space-between; align-items:baseline;}
.sx-len .hd b{font-size:17px; font-weight:700;}
.sx-len .hd span{font-size:13.5px; color:var(--label2);}
.sx-len .bar{position:relative; height:8px; border-radius:4px; background:var(--fill2); margin-top:10px;}
.sx-len .ok{position:absolute; top:0; bottom:0; border-radius:4px; background:rgba(52,199,89,.45);}
.sx-len .kn{position:absolute; top:50%; width:20px; height:20px; margin:-10px 0 0 -10px; border-radius:50%; background:var(--card); border:3px solid var(--green); box-shadow:0 1px 4px rgba(0,0,0,.2);}
.sx-len .kn.out{border-color:var(--warn-ink);}
.sx-len .msg{font-size:13.5px; color:var(--warn-ink); margin-top:7px; min-height:1px;}
.sx-fmts{margin:12px -16px 4px; padding:2px 16px 6px;}
.sx-fmts .sx-chip{font-weight:600; letter-spacing:.02em;}
.sx-strip{display:flex; gap:9px; overflow-x:auto; -webkit-overflow-scrolling:touch; padding:4px 16px 8px; margin:0 -16px; scrollbar-width:none;}
.sx-strip::-webkit-scrollbar{display:none;}
.sx-it{flex:0 0 74px; text-align:center; touch-action:pan-x; user-select:none; -webkit-user-select:none; -webkit-touch-callout:none;}
.sx-it .im{position:relative; width:74px; height:104px; border-radius:12px; overflow:hidden; background:var(--fill2); cursor:pointer;}
.sx-it .no{position:absolute; left:5px; top:5px; width:21px; height:21px; border-radius:50%; background:rgba(0,0,0,.55); color:#fff; font-size:12px; font-weight:700; display:flex; align-items:center; justify-content:center;}
.sx-it .vb{position:absolute; left:5px; bottom:5px; right:5px; background:rgba(0,0,0,.55); color:#fff; font-size:11px; font-weight:600; border-radius:7px; padding:1px 4px;}
.sx-it .cp{position:absolute; right:5px; top:5px; width:19px; height:19px; border-radius:50%; background:rgba(255,255,255,.9); color:#111; font-size:11px; font-weight:800; display:flex; align-items:center; justify-content:center;}
.sx-it .du{font-size:13px; color:var(--label2); margin-top:5px; font-variant-numeric:tabular-nums;}
.sx-it.ovl .im{box-shadow:0 0 0 3px var(--warn-ink) inset;}
.sx-it.drag{opacity:.35;}
.sx-ghost{position:fixed; z-index:200; width:74px; height:104px; border-radius:12px; overflow:hidden; pointer-events:none; box-shadow:0 12px 30px rgba(0,0,0,.35); transform:scale(1.08);}
.sx-add{background:none; border:none; color:var(--tint); font-family:inherit; font-size:16px; font-weight:500; padding:8px 2px; cursor:pointer;}
/* 마무리 */
.sx-opt{display:flex; align-items:center; gap:13px; padding:14px 14px; cursor:pointer; position:relative; font-size:16.5px; line-height:1.35;}
.sx-opt + .sx-opt::before{content:""; position:absolute; top:0; left:50px; right:0; border-top:.5px solid var(--sep);}
.sx-rad{flex:0 0 22px; height:22px; border-radius:50%; border:2px solid var(--label3); position:relative;}
.sx-opt.on .sx-rad{border-color:var(--tint);}
.sx-opt.on .sx-rad::after{content:""; position:absolute; inset:3px; border-radius:50%; background:var(--tint);}
.sx-desc{font-size:15px; line-height:1.55; white-space:pre-wrap; word-break:break-word; color:var(--label);}
.sx-desc.fold{max-height:4.65em; overflow:hidden; -webkit-mask-image:linear-gradient(#000 60%, transparent);}
.sx-ta{width:100%; border:none; background:var(--fill3); border-radius:12px; padding:10px 12px; font-family:inherit; font-size:15px; line-height:1.5; color:var(--label); resize:vertical;}
.sx-in{width:100%; border:none; background:var(--fill3); border-radius:12px; padding:11px 12px; font-family:inherit; font-size:16px; color:var(--label);}
/* 만드는 중 */
.sx-mk{min-height:100%; display:flex; flex-direction:column; align-items:center; padding:calc(70px + env(safe-area-inset-top)) 18px calc(24px + env(safe-area-inset-bottom));}
.sx-ring{position:relative; width:190px; height:190px; margin-top:6vh;}
.sx-ring svg{width:100%; height:100%; transform:rotate(-90deg);}
.sx-ring circle{fill:none; stroke-width:16;}
.sx-ring .bgc{stroke:var(--fill2); stroke-dasharray:none !important;} .sx-ring .fgc{stroke:var(--tint); stroke-linecap:round; transition:stroke-dashoffset .2s linear;}
.sx-ring b{position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:44px; font-weight:800; letter-spacing:-.02em; font-variant-numeric:tabular-nums;}
.sx-mk h2{font-size:24px; font-weight:800; margin:26px 0 4px;}
.sx-steps{width:100%; max-width:420px; background:var(--card); border-radius:18px; margin-top:22px; overflow:hidden;}
.sx-steps div{display:flex; align-items:center; gap:12px; padding:14px 15px; font-size:16.5px; position:relative;}
.sx-steps div + div::before{content:""; position:absolute; top:0; left:52px; right:0; border-top:.5px solid var(--sep);}
.sx-steps i{flex:0 0 24px; height:24px; border-radius:50%; border:2px solid var(--label3); position:relative;}
.sx-steps .now i{border-color:var(--tint);}
.sx-steps .now i::after{content:""; position:absolute; inset:4px; border-radius:50%; background:var(--tint);}
.sx-steps .done i{border:none; background:var(--green);}
.sx-steps .done i::after{content:""; position:absolute; left:8px; top:4px; width:6px; height:11px; border:solid #fff; border-width:0 2.5px 2.5px 0; transform:rotate(45deg);}
.sx-steps .off{color:var(--label3);}
.sx-steps span{margin-left:auto; color:var(--label2); font-size:14.5px;}
.sx-mk .warn{color:var(--warn-ink); font-size:15px; font-weight:500; margin-top:18px;}
/* 직접 올리기 */
.sx-done{display:flex; gap:14px; align-items:center; margin:4px 0 16px;}
.sx-done .th{flex:0 0 74px; height:120px; border-radius:12px; overflow:hidden; background:var(--fill2);}
.sx-done video{width:100%; height:100%; object-fit:cover; display:block;}
.sx-st{display:flex; gap:12px; padding:14px 2px; position:relative;}
.sx-st + .sx-st{border-top:.5px solid var(--sep);}
.sx-st .n{flex:0 0 28px; height:28px; border-radius:50%; background:var(--tint-fill); color:var(--tint-ink); font-weight:700; display:flex; align-items:center; justify-content:center; font-size:15px;}
.sx-st .b{flex:1; min-width:0;}
.sx-st .h{font-size:16.5px; font-weight:700;}
/* 고르기 */
.sx-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:3px; margin:0 -14px;}
.sx-gc{position:relative; aspect-ratio:1; background:var(--fill2); overflow:hidden; cursor:pointer;}
.sx-gc .ck{position:absolute; right:5px; top:5px; width:22px; height:22px; border-radius:50%; border:2px solid #fff; background:rgba(0,0,0,.18);}
.sx-gc.on .ck{background:var(--tint); border-color:#fff;}
.sx-gc.on .ck::after{content:""; position:absolute; left:6px; top:2px; width:5px; height:10px; border:solid #fff; border-width:0 2px 2px 0; transform:rotate(45deg);}
.sx-gc.cool img{filter:grayscale(.9) opacity(.55);}
.sx-gc .u{position:absolute; left:4px; bottom:4px; font-size:10.5px; color:#fff; background:rgba(0,0,0,.55); border-radius:6px; padding:1px 5px;}
.sx-gc .vd{position:absolute; left:4px; top:4px; font-size:10.5px; color:#fff; background:rgba(0,0,0,.55); border-radius:6px; padding:1px 5px;}
/* 시트 */
.sx-ovl{position:fixed; inset:0; z-index:120; background:rgba(0,0,0,.35); display:flex; align-items:flex-end; justify-content:center; opacity:0; transition:opacity .2s;}
.sx-ovl.on{opacity:1;}
.sx-sheet{width:100%; max-width:540px; max-height:90vh; overflow-y:auto; background:var(--sheet); color:var(--label); border-radius:28px 28px 0 0; padding:8px 18px calc(18px + env(safe-area-inset-bottom)); transform:translateY(100%); transition:transform .3s cubic-bezier(.2,.9,.3,1);}
.sx-ovl.on .sx-sheet{transform:none;}
.sx-sheet .grab{width:36px; height:5px; border-radius:3px; background:var(--label3); margin:4px auto 12px;}
.sx-sheet h3{font-size:22px; font-weight:800; margin:6px 0 4px; letter-spacing:-.02em;}
.sx-sheet .lbl{font-size:13.5px; color:var(--label2); margin:16px 2px 8px;}
.sx-btns{display:flex; gap:10px; margin-top:18px;}
.sx-btns .sx-btn{flex:1;}
.sx-thr{display:flex; align-items:center; gap:8px; margin:12px 0 2px;}
.sx-thr .t{width:58px; height:58px; border-radius:12px; overflow:hidden; background:var(--fill2);}
.sx-slider{width:100%; accent-color:var(--tint);}
.sx-focus{position:relative; width:150px; aspect-ratio:3/4; margin:4px auto; border-radius:12px; overflow:hidden; background:var(--fill2); touch-action:none;}
.sx-focus img{width:100%; height:100%; object-fit:contain;}
.sx-focus .fr{position:absolute; top:0; bottom:0; border:2px solid #fff; box-shadow:0 0 0 999px rgba(0,0,0,.45); border-radius:6px;}
.sx-vstrip{position:relative; height:46px; border-radius:10px; background:var(--fill2); margin:8px 0 2px; overflow:hidden;}
.sx-vstrip .sg{position:absolute; top:0; bottom:0; background:var(--tint-fill); border:2px solid var(--tint); border-radius:8px;}
.sx-kv{display:flex; justify-content:space-between; font-size:14px; color:var(--label2); margin:4px 2px;}
/* V6.5.1 — 뜻 · 추천 칩 · 영상 자막 카드 */
.sx-mean{font-size:13.5px; color:var(--label2); margin-top:3px; line-height:1.4; font-weight:400;}
.sx-pap{color:var(--tint); text-decoration:none;}
.sx-opt .tx{display:flex; flex-direction:column; min-width:0;}
.sx-sugs{margin-top:4px;}
.sx-sg{margin-top:10px;}
.sx-sg .t{display:block; font-size:12.5px; color:var(--label2); margin:0 2px 6px;}
.sx-chip.sm{font-size:14px; padding:6px 12px;}
.sx-chip .k{color:var(--label2); font-size:12px; margin-left:6px; font-weight:400;}
.sx-chip.soft .k{color:var(--tint-ink); opacity:.7;}
.sx-capc{background:var(--card); border-radius:16px; padding:11px 14px 12px; margin:12px 0 0; cursor:pointer;}
.sx-capc .hd{display:flex; justify-content:space-between; font-size:12.5px; color:var(--label2); margin-bottom:3px;}
.sx-capc .ed{color:var(--tint); font-size:14px;}
.sx-capc .en{font-weight:700; font-size:15.5px; line-height:1.3;}
.sx-capc .en2{font-weight:600; font-size:14px; margin-top:5px;}
.sx-scap{padding:6px 0; border-bottom:.5px solid var(--sep);}
.sx-scap:last-of-type{border-bottom:none;}
.sx-scap .r1{display:flex; gap:10px; align-items:flex-start;}
.sx-scap .th{flex:0 0 40px; height:56px; border-radius:8px; overflow:hidden; background:var(--fill2);}
.sx-scap .in{flex:1; min-width:0;}
.sx-scap .sg{padding-left:50px;}
`;

/* ---------- 데이터: /handbook/{가족코드}-shorts/ (cfg · r · fp) ---------- */
const D = { cfg: null, rec: {}, fp: {}, ok: false, p: null, at: 0 };
function shPath(p) { return SYNC.url.replace(/\/+$/, '') + '/handbook/' + SYNC.code + '-shorts/' + p + '.json'; }
async function shFetch(p, method, body) {
  const ctl = new AbortController(); const to = setTimeout(function () { ctl.abort(); }, 20000);
  try {
    const r = await fetch(shPath(p), { method: method || 'GET', body: body === undefined ? undefined : JSON.stringify(body), signal: ctl.signal });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } finally { clearTimeout(to); }
}
function C() { return Object.assign({}, E.DEF_CFG, D.cfg || {}); }
function today() { return todayKey(); }
async function dLoad(force) {
  if (!syncConfigured()) throw new Error('동기화가 꺼져 있어요');
  if (D.ok && !force && Date.now() - D.at < 20000) return;
  if (D.p) return D.p;
  D.p = (async function () {
    try {
      const all = await Promise.all([shFetch('cfg'), shFetch('r'), shFetch('fp')]);
      D.cfg = all[0] || {}; D.rec = all[1] || {}; D.fp = all[2] || {};
      D.ok = true; D.at = Date.now();
      await migrate();
      await cleanDrafts();
    } finally { D.p = null; }
  })();
  return D.p;
}
async function cfgSet(k, v) { D.cfg = D.cfg || {}; D.cfg[k] = v; await shFetch('cfg/' + k, 'PUT', v); }
async function recPut(rid, r) { r.ut = Date.now(); D.rec[rid] = r; await shFetch('r/' + rid, 'PUT', r); }
async function recDel(rid) { delete D.rec[rid]; await shFetch('r/' + rid, 'DELETE'); }
function newRid() { return 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5); }
/* 첫 실행: 기존에 손으로 만든 쇼츠의 원본 영상(앨범 영상)을 한 번 '사용됨'으로 표시. 시리즈 번호 시작값 = 앨범 유튜브 링크 수 + 1(추정) */
async function migrate() {
  const c = D.cfg || {};
  if (c.mig1) return;
  const meta = ALB.meta || {};
  const up = {};
  Object.keys(meta).forEach(function (id) {
    const m = meta[id];
    if (E.isClip(m) && !(m.su > 0)) { up[id + '/su'] = 1; up[id + '/sl'] = E.dOf(m) || today(); m.su = 1; m.sl = E.dOf(m) || today(); }
  });
  try {
    if (Object.keys(up).length) { await albFetch('meta', 'PATCH', JSON.stringify(up)); await albBumpIdx(); }
    if (!c.nsn) { const yt = Object.keys(meta).filter(function (id) { return meta[id] && meta[id].t === 'v'; }).length; await cfgSet('nsn', yt + 1); await cfgSet('nsnGuess', 1); }
    await cfgSet('mig1', Date.now());
  } catch (e) { }
}
/* 작성 중 초안: 14일 안 열면 자동 삭제 */
async function cleanDrafts() {
  const lim = Date.now() - 14 * 86400000;
  const ids = Object.keys(D.rec).filter(function (rid) { const r = D.rec[rid]; return r && r.st !== 'up' && (r.ut || r.at || 0) < lim; });
  for (let i = 0; i < ids.length; i++) { try { await releaseSn(D.rec[ids[i]]); await recDel(ids[i]); } catch (e) { } }
}
/* 예약해 둔 시리즈 번호를 아무도 안 쓰면 되돌린다 */
async function releaseSn(r) {
  if (!r || !r.sn || r.st === 'up') return;
  if (C().nsn === r.sn + 1) { try { await cfgSet('nsn', r.sn); } catch (e) { } }
}
async function reserveSn(r) {
  if (r.sn) return r.sn;
  try { const v = await shFetch('cfg/nsn'); if (v) D.cfg.nsn = v; } catch (e) { }
  let sn = +C().nsn || 1;
  Object.keys(D.rec).forEach(function (rid) { const x = D.rec[rid]; if (x && x.sn && x.sn >= sn) sn = x.sn + 1; });
  r.sn = sn;
  await cfgSet('nsn', sn + 1);
  r.de = E.descSn(r.de, sn);
  return sn;
}
function ups() { return Object.keys(D.rec).map(function (k) { return Object.assign({ rid: k }, D.rec[k]); }).filter(function (r) { return r.st === 'up'; }).sort(function (a, b) { return (b.up || 0) - (a.up || 0); }); }
function drafts() { return Object.keys(D.rec).map(function (k) { return Object.assign({ rid: k }, D.rec[k]); }).filter(function (r) { return r.st !== 'up'; }).sort(function (a, b) { return (b.ut || 0) - (a.ut || 0); }); }

/* ---------- 작은 도구 ---------- */
const ICO = {
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  chev: '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 4.5v15l12.5-7.5z"/></svg>'
};
function h(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
function $(root, sel) { return root.querySelector(sel); }
function $$(root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
function fmtSec(s) { return (Math.round(s * 10) / 10).toFixed(1) + '초'; }
function mmss(s) { s = Math.max(0, Math.floor(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
function mdK(d) { d = String(d || ''); return d ? (+d.slice(5, 7)) + '월 ' + (+d.slice(8, 10)) + '일' : ''; }
function thumbSrc(id) {
  if (ALB.thumbs && ALB.thumbs.has(id)) return Promise.resolve(ALB.thumbs.get(id));
  return albImgSrc('th', id).then(function (v) { if (v && ALB.thumbs) ALB.thumbs.set(id, v); return v; });
}
function fillThumb(img, id) {
  if (!img || !id) return;
  thumbSrc(id).then(function (v) { if (v) { img.src = v; img.classList.add('ld'); } }).catch(function () { });
}
function thumbsIn(root) { $$(root, 'img[data-th]').forEach(function (im) { fillThumb(im, im.getAttribute('data-th')); }); }
function copyText(t) {
  t = String(t || '');
  try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t).catch(function () { copyFallback(t); }); return true; } } catch (e) { }
  return copyFallback(t);
}
function copyFallback(t) {
  try { const ta = document.createElement('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:-100px;opacity:0;'; document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok; } catch (e) { return false; }
}
function toast(m) { try { uiToast(m); } catch (e) { } }
/* 영어 문구의 한글 뜻 — 내장 문구는 뜻, 직접 쓴 문장은 파파고 링크. 한글 문구는 표시 안 함 */
function meanHTML(text, ctx) {
  const t = String(text || '').trim(); if (!t || R.HANGUL.test(t)) return '';
  const m = E.meaning(t, ctx || {});
  if (m) return '<div class="sx-mean">뜻 · ' + esc(m) + '</div>';
  return '<div class="sx-mean"><a class="sx-pap" href="' + esc(E.papago(t)) + '" target="_blank" rel="noopener">파파고에서 뜻 보기</a></div>';
}
/* 장면 자막 추천 — 추천 문구 · 추천 문장 · 사진 메모 · 영문(뜻) · 자막 없음 */
function sugHTML(sg) {
  function chips(list, en) { return list.map(function (x) { const t = en ? x[0] : x, k = en ? x[1] : ''; return '<button type="button" class="sx-chip sm" data-sug="' + esc(t) + '">' + esc(t) + (k ? '<span class="k">' + esc(k) + '</span>' : '') + '</button>'; }).join(''); }
  return '<div class="sx-sugs">' +
    (sg.p.length ? '<div class="sx-sg"><span class="t">추천 문구</span><div class="sx-chips">' + chips(sg.p) + '</div></div>' : '') +
    (sg.s.length ? '<div class="sx-sg"><span class="t">추천 문장</span><div class="sx-chips">' + chips(sg.s) + '</div></div>' : '') +
    (sg.memo ? '<div class="sx-sg"><span class="t">사진 메모</span><div class="sx-chips">' + chips([sg.memo]) + '</div></div>' : '') +
    (sg.en.length ? '<div class="sx-sg"><span class="t">영문</span><div class="sx-chips">' + chips(sg.en, true) + '</div></div>' : '') +
    '<div class="sx-sg"><div class="sx-chips"><button type="button" class="sx-chip sm" data-sug="">자막 없음</button></div></div></div>';
}
function selOf(ids) { return ids.map(function (id) { return { id: id, m: (ALB.meta || {})[id], sc: E.score((ALB.meta || {})[id] || {}, today()) }; }).filter(function (x) { return x.m; }); }

/* ---------- 화면 쌓기 + 뒤로가기 (V6.5.1) ----------
   기록(history) 한 칸 = 화면 한 장 또는 시트 한 장. 각 칸에 깊이(sx: 화면 수, sh: 시트 수)를 적어 두고,
   폰 뒤로가기가 오면 그 깊이에 맞춰 '시트 → 화면' 순서로 닫는다 — 브라우저가 칸을 건너뛰어도 화면이 어긋나지 않게.
   앱 안 버튼(뒤로·닫기)은 화면을 먼저 닫고 기록을 한 칸 되돌린다(그때 오는 popstate는 무시). */
const U = { stack: [], sheets: [], closing: 0 };
function hstate() { return { tab: 'album', sx: U.stack.length, sh: U.sheets.length, d: ((history.state && history.state.d) || 0) + 1 }; }
function hpush() { try { history.pushState(hstate(), '', location.hash || '#album'); return true; } catch (e) { return false; } }
function hback(n) { U.closing++; try { if ((n || 1) === 1) history.back(); else history.go(-n); } catch (e) { U.closing--; } }
function root() {
  let r = document.getElementById('sxRoot');
  if (!r) {
    if (!document.getElementById('sxCss')) { const st = document.createElement('style'); st.id = 'sxCss'; st.textContent = CSS; document.head.appendChild(st); }
    r = document.createElement('div'); r.id = 'sxRoot'; document.body.appendChild(r);
  }
  return r;
}
function navBar(o) {
  return '<div class="sx-nav' + (o.line ? ' line' : '') + '">' +
    (o.back ? '<button type="button" class="sx-back" data-act="back">' + ICO.back + '<span>' + esc(o.back) + '</span></button>' : '<span></span>') +
    (o.title ? '<div class="sx-ttl">' + esc(o.title) + '</div>' : '') +
    (o.right || '<span></span>') + '</div>';
}
function bindBack(scr) { scr.el.addEventListener('click', function (e) { const b = e.target.closest('[data-act="back"]'); if (b && scr.el.contains(b)) { e.preventDefault(); back(); } }); }
function push(scr) {
  const r = root();
  const prev = U.stack[U.stack.length - 1];
  U.stack.push(scr);
  r.appendChild(scr.el);
  document.body.classList.add('sx-open');
  bindBack(scr);
  requestAnimationFrame(function () { requestAnimationFrame(function () { scr.el.classList.add('on'); if (prev) prev.el.classList.add('under'); }); });
  scr.h = hpush();
  return scr;
}
function dropTop(anim) {
  const s = U.stack.pop(); if (!s) return;
  try { if (s.destroy) s.destroy(); } catch (e) { }
  const prev = U.stack[U.stack.length - 1];
  if (prev) { prev.el.classList.remove('under'); try { if (prev.resume) prev.resume(); } catch (e) { } }
  if (anim === false) s.el.remove();
  else { s.el.classList.remove('on'); setTimeout(function () { s.el.remove(); }, 380); }
  if (!U.stack.length) document.body.classList.remove('sx-open');
}
/* 앱 안 '뒤로' 버튼 */
function back() {
  if (U.sheets.length) { U.sheets[U.sheets.length - 1].close(); return; }
  if (!U.stack.length) return;
  const top = U.stack[U.stack.length - 1];
  if (top.onBack && top.onBack() === false) return;
  const st = history.state || {};
  const mine = top.h && st.sx === U.stack.length && !(st.sh > 0);
  dropTop();
  if (mine) hback(1);
}
/* 화면 여러 장을 한 번에 닫기(예: 올렸어요 → 쇼츠 홈) */
function popTo(n) {
  let hk = 0;
  U.sheets.slice().reverse().forEach(function (sh) { if (sh.h) hk++; sh.close(true); });
  const k = U.stack.length - n;
  for (let i = 0; i < k; i++) { const s = U.stack[U.stack.length - 1]; if (s.h) hk++; dropTop(i === k - 1); }
  if (hk) hback(hk);
}
function restoreEntry() { hpush(); }
/* 폰 뒤로가기 (index.html의 popstate가 먼저 여기로 보낸다) */
function onPop(e) {
  if (U.closing > 0) { U.closing--; return true; }
  if (!U.stack.length && !U.sheets.length) return false;
  const st = (e && e.state) || {};
  const tS = typeof st.sh === 'number' ? st.sh : 0;
  const tD = typeof st.sx === 'number' ? st.sx : 0;
  /* 앱 확인창(시트)이 쇼츠 위에 떠 있으면 그것만 닫는다 */
  const us = document.getElementById('uiSheet');
  if (us && us.classList.contains('on')) { try { uiSheetClose({ ok: false }); } catch (er) { } restoreEntry(); return true; }
  let did = false;
  if (U.sheets.length > tS) {
    const noHist = U.sheets.length && !U.sheets[U.sheets.length - 1].h;
    while (U.sheets.length > tS) U.sheets[U.sheets.length - 1].close(true);
    did = true;
    if (noHist && tD >= U.stack.length) { restoreEntry(); return true; }   /* 기록 없이 뜬 시트: 닫기만 하고 칸 되살림 */
  }
  if (U.stack.length > tD) {
    const top = U.stack[U.stack.length - 1];
    if (top.onBack && top.onBack() === false) { restoreEntry(); return true; }   /* 만드는 중: 확인 먼저 */
    while (U.stack.length > tD) dropTop(U.stack.length - 1 === tD);
    did = true;
  }
  return did || true;
}
function closeAll() { popTo(0); }
function scrEl(cls) { return h('<div class="sx-scr ' + (cls || '') + '" role="dialog" aria-modal="true"></div>'); }

/* ---------- 시트 — 열 때 기록 한 칸(폰 뒤로가기 = 시트 닫기) ---------- */
function sheet(inner, o) {
  o = o || {};
  const ov = h('<div class="sx-ovl" role="dialog" aria-modal="true"><div class="sx-sheet"><div class="grab"></div></div></div>');
  const sh = $(ov, '.sx-sheet');
  sh.insertAdjacentHTML('beforeend', inner);
  document.body.appendChild(ov);
  requestAnimationFrame(function () { requestAnimationFrame(function () { ov.classList.add('on'); }); });
  const api = {
    el: sh, ov: ov, closed: false, h: false,
    close: function (fromPop) {
      if (api.closed) return; api.closed = true;
      const i = U.sheets.indexOf(api);
      if (i > -1) U.sheets.splice(i, 1);
      ov.classList.remove('on'); setTimeout(function () { ov.remove(); }, 320);
      if (fromPop !== true && api.h && history.state && history.state.sh === i + 1) hback(1);
      if (o.onClose) o.onClose();
    }
  };
  U.sheets.push(api);
  if (!o.noHist) api.h = hpush();
  ov.addEventListener('click', function (e) { if (e.target === ov && !o.modal) api.close(); });
  return api;
}

/* ================= SH-01 쇼츠 홈(추천) · SH-07 기록 · SH-08 설정 · 장면 태그 시트 ================= */
const RC = { recs: null, skip: {}, at: 0, metaN: 0, cool: false, info: null };
function metaCount() { return Object.keys(ALB.meta || {}).filter(function (id) { return E.usable(ALB.meta[id]); }).length; }
function needRefresh() {
  if (!RC.recs) return true;
  const n = metaCount();
  return Math.abs(n - RC.metaN) >= 5;   /* 새 사진이 5장 이상 쌓였을 때 */
}
function computeRecs(force) {
  if (!force && !needRefresh()) return RC.recs;
  const r = E.recommend(ALB.meta || {}, C(), D.rec, D.fp, today(), { skip: RC.skip, cool: RC.cool });
  RC.recs = r.recs; RC.info = r; RC.at = Date.now(); RC.metaN = metaCount();
  return RC.recs;
}
function recDraft(g) {
  const fm = g.fm;
  const r = E.draft(g.sel, fm, { home: (S.profile || {}).home, today: today(), recipes: D.rec, src: 'rec' });
  return r;
}
function coverId(g) { return g.ids[0]; }
function fmtTags(g) {
  const ctx = E.ctxOf(g.sel, g.fm, (S.profile || {}).home, D.rec);
  const out = [];
  if (ctx.last) out.push(E.season(ctx.last)[0]);
  if (ctx.sit) out.push(ctx.sit);
  if (g.fm === 'SLEEP') out.push('반전'); else if (ctx.mood) out.push(ctx.mood);
  return out.join(' · ');
}

/* ---------- SH-01 / SH-07 ---------- */
function openHome(tab) {
  const el = scrEl('sx-home');
  el.innerHTML = navBar({ back: '앨범', right: '<button type="button" class="sx-nbtn" data-act="set" aria-label="쇼츠 설정">' + ICO.gear + '</button>' }) +
    '<div class="sx-body"><div class="sx-big">쇼츠</div>' +
    '<div class="sx-seg" role="tablist"><button type="button" data-tab="rec">추천</button><button type="button" data-tab="log">기록</button></div>' +
    '<div class="sx-pane"></div></div>';
  const scr = { el: el, tab: tab || 'rec' };
  function paint() {
    $$(el, '.sx-seg button').forEach(function (b) { b.classList.toggle('on', b.dataset.tab === scr.tab); b.setAttribute('aria-selected', b.dataset.tab === scr.tab); });
    const pane = $(el, '.sx-pane');
    if (scr.tab === 'rec') paintRecs(pane, scr); else paintLog(pane, scr);
  }
  scr.paint = paint;
  scr.resume = function () { paint(); };
  el.addEventListener('click', function (e) {
    const t = e.target.closest('.sx-seg [data-tab]'); if (t && el.contains(t)) { scr.tab = t.dataset.tab; paint(); return; }
    if (e.target.closest('[data-act="set"]')) { openSettings(); return; }
  });
  push(scr);
  paint();
  dLoad().then(function () { paint(); idxHashes(); }).catch(function (e) { $(el, '.sx-pane').innerHTML = '<div class="sx-empty">쇼츠 기록을 불러오지 못했어요.<br>인터넷을 확인해 주세요.<br><small>' + esc(String(e && e.message || e)) + '</small></div>'; });
  return scr;
}
function paintRecs(pane, scr) {
  if (!D.ok) { pane.innerHTML = '<div class="sx-empty">불러오는 중…</div>'; return; }
  const recs = computeRecs(false) || [];
  const info = RC.info || { newCount: 0 };
  let html = '';
  const dr = drafts();
  if (dr.length) {
    html += '<div class="sx-row"><span class="sx-h">만들다 만 쇼츠 ' + dr.length + '편</span></div><div class="sx-card" style="padding:4px 12px;">' +
      dr.map(function (r) {
        const left = Math.max(0, 14 - Math.floor((Date.now() - (r.ut || r.at || Date.now())) / 86400000));
        return '<div class="sx-draft" data-draft="' + esc(r.rid) + '"><div class="th"><img class="sx-ph" data-th="' + esc((r.it[0] || {}).id || '') + '" alt=""></div><div class="tx"><div class="t1">' + esc(r.ti || '제목 없음') + '</div><div class="sx-sub">' + esc(r.fm) + ' · ' + fmtSec(E.total(r.it)) + ' · ' + left + '일 뒤 자동 삭제</div></div><span class="sx-badge">이어서</span></div>';
      }).join('') + '</div>';
  }
  const showRecs = RC.cool || info.newCount >= 5;
  if (!showRecs) {
    const need = Math.max(1, 5 - info.newCount);
    html += '<div class="sx-card"><div class="sx-empty" style="padding:18px 8px;">추천할 새 사진이 부족해요.<br>사진을 ' + need + '장 더 올리면 새 추천이 생겨요.</div>' +
      '<button type="button" class="sx-btn soft" data-act="cool">쉬는 중인 사진도 넣어서 추천</button></div>';
  } else if (!recs.length) {
    html += '<div class="sx-card"><div class="sx-empty" style="padding:18px 8px;">지금 사진으로는 만들 수 있는 묶음이 없어요.<br>한 편에 사진 6장 이상이 필요해요.</div></div>';
  } else {
    html += '<div class="sx-row"><span class="sx-h">이번 주 후보 ' + recs.length + '편</span><button type="button" class="sx-lnk" data-act="again">다시 추천</button></div>';
    html += recs.map(function (g, i) {
      const d = recDraft(g);
      const nV = g.sel.filter(function (x) { return E.isClip(x.m); }).length, nP = g.sel.length - nV;
      const nNew = g.sel.filter(function (x) { return E.isNew(x.m, today()); }).length;
      return '<div class="sx-rec" data-rec="' + i + '"><div class="cv"><img class="sx-ph" data-th="' + esc(d.it[0].id) + '" alt=""><span class="len">' + Math.round(E.total(d.it)) + '초</span></div>' +
        '<div class="bd"><div class="tg"><span class="sx-badge">' + g.fm + '</span><span>' + esc(fmtTags(g)) + '</span></div>' +
        '<div class="tt">' + esc(d.ti) + '</div>' + meanHTML(d.ti, E.ctxOf(g.sel, g.fm, (S.profile || {}).home, D.rec)) + '<div class="in">' + (nV ? '영상 ' + nV + ' · ' : '') + '사진 ' + nP + '장 · ' + Math.round(E.total(d.it)) + '초</div>' +
        (nNew ? '<div class="sx-new">새 사진 ' + nNew + '장 포함</div>' : '') +
        '<button type="button" class="sx-btn sm soft go" data-rec="' + i + '">만들기</button></div></div>';
    }).join('');
  }
  html += '<button type="button" class="sx-btn gray" data-act="pick" style="margin-top:6px; background:var(--card); color:var(--tint);">사진 직접 골라 만들기</button>';
  pane.innerHTML = html;
  thumbsIn(pane);
  pane.onclick = function (e) {
    const dr2 = e.target.closest('[data-draft]'); if (dr2) { const r = D.rec[dr2.dataset.draft]; if (r) openEdit(Object.assign({}, JSON.parse(JSON.stringify(r)), { rid: dr2.dataset.draft })); return; }
    const rc = e.target.closest('[data-rec]'); if (rc) { const g = (RC.recs || [])[+rc.dataset.rec]; if (g) { const d = recDraft(g); d.key = g.key; openEdit(d); } return; }
    if (e.target.closest('[data-act="again"]')) { (RC.recs || []).forEach(function (g) { RC.skip[g.sig] = 1; RC.skip[g.key] = 1; }); const r = computeRecs(true); if (!r.length) { RC.skip = {}; computeRecs(true); toast('추천을 처음부터 다시 보여 드려요'); } paintRecs(pane, scr); return; }
    if (e.target.closest('[data-act="cool"]')) { RC.cool = true; RC.skip = {}; computeRecs(true); paintRecs(pane, scr); if (!(RC.recs || []).length) toast('쉬는 사진을 넣어도 만들 수 있는 묶음이 없어요'); return; }
    if (e.target.closest('[data-act="pick"]')) { closeAll(); setTimeout(function () { try { albSelStart(); } catch (er) { } }, 420); return; }
  };
}
function paintLog(pane) {
  if (!D.ok) { pane.innerHTML = '<div class="sx-empty">불러오는 중…</div>'; return; }
  const list = ups();
  const nRec = Object.keys(D.rec).length, nFp = Object.keys(D.fp).length;
  let html = '<div class="sx-card" style="padding:16px 18px;"><div style="font-size:20px;font-weight:800;">올린 쇼츠 ' + list.length + '편</div><div class="sx-sub" style="margin-top:3px;">레시피 ' + nRec + '건 · 지문 ' + nFp + '건 보관 중</div></div>';
  if (list.length) {
    html += '<div class="sx-list">' + list.map(function (r) {
      const link = r.yu ? '' : '<div class="t3">유튜브 링크 붙여넣기</div>';
      return '<div class="sx-li" data-log="' + esc(r.rid) + '"><div class="th"><img class="sx-ph" data-th="' + esc((r.it[0] || {}).id || '') + '" alt=""></div><div class="tx"><div class="t1">' + esc(r.ti || '') + '</div><div class="t2">' + mdK(E.dkey(new Date(r.up || r.at || Date.now()))) + ' · 빼꼼 #' + esc(r.sn || '?') + '</div>' + link + '</div><span class="bg sx-badge ' + (r.mo === 'B' ? '' : 'gray') + '">' + (r.mo === 'B' ? '자동' : '직접') + '</span></div>';
    }).join('') + '</div>';
  } else html += '<div class="sx-empty">아직 올린 쇼츠가 없어요.<br>추천 탭에서 첫 편을 만들어 보세요.</div>';
  html += '<p class="sx-sub" style="margin:6px 6px 0;">오래된 기록은 설정에서 정리해요. 지문은 남아요.</p>';
  pane.innerHTML = html;
  thumbsIn(pane);
  pane.onclick = function (e) { const li = e.target.closest('[data-log]'); if (li) logSheet(li.dataset.log, function () { paintLog(pane); }); };
}
/* 기록 상세 시트 */
function logSheet(rid, after) {
  const r = D.rec[rid]; if (!r) return;
  const ids = (r.it || []).map(function (x) { return x.id; });
  const lctx = E.ctxOf(selOf(ids), r.fm, (S.profile || {}).home, D.rec);
  const sh = sheet('<h3>' + esc(r.ti || '') + '</h3>' + meanHTML(r.ti, lctx) + '<div class="sx-sub">' + mdK(E.dkey(new Date(r.up || r.at || Date.now()))) + ' · 빼꼼 #' + esc(r.sn || '?') + ' · ' + esc(r.fm) + ' · ' + fmtSec(E.total(r.it || [])) + '</div>' +
    '<div class="lbl">사용한 사진 ' + ids.length + '장</div><div class="sx-hs">' + ids.map(function (id) { return '<div style="flex:0 0 54px;height:76px;border-radius:9px;overflow:hidden;background:var(--fill2);"><img class="sx-ph" data-th="' + esc(id) + '" alt=""></div>'; }).join('') + '</div>' +
    '<div class="lbl">음악 검색어</div><div class="sx-chips">' + mqChips(r.mq, lctx) + '</div>' +
    '<div class="lbl">설명</div><div class="sx-card" style="background:var(--card);"><div class="sx-desc">' + esc(r.de || '') + '</div></div>' +
    '<div class="sx-btns"><button type="button" class="sx-btn gray" data-act="cpt">제목 복사</button><button type="button" class="sx-btn gray" data-act="cpd">설명 복사</button></div>' +
    (r.yu ? '<button type="button" class="sx-btn" style="margin-top:10px;" data-act="open">유튜브에서 열기</button>' : '<button type="button" class="sx-btn" style="margin-top:10px;" data-act="link">유튜브 링크 붙여넣기</button>') +
    '<button type="button" class="sx-btn gray" style="margin-top:10px;" data-act="x">닫기</button>');
  thumbsIn(sh.el);
  sh.el.addEventListener('click', async function (e) {
    if (e.target.closest('.sx-pap')) return;
    const cp = e.target.closest('[data-copy]'); if (cp) { copyText(cp.dataset.copy); toast('복사했어요: ' + cp.dataset.copy); return; }
    const a = e.target.closest('[data-act]'); if (!a) return;
    if (a.dataset.act === 'x') sh.close();
    else if (a.dataset.act === 'cpt') { copyText(r.ti); toast('제목을 복사했어요'); }
    else if (a.dataset.act === 'cpd') { copyText(r.de); toast('설명을 복사했어요'); }
    else if (a.dataset.act === 'open') { try { window.open(r.yu, '_blank', 'noopener'); } catch (er) { } }
    else if (a.dataset.act === 'link') { sh.close(); await pasteLink(rid); if (after) after(); }
  });
}
/* 유튜브 링크 붙여넣기 → 레시피에 저장 + 앨범 유튜브 카드로 자동 등록 */
async function pasteLink(rid) {
  const r = D.rec[rid]; if (!r) return false;
  const v = await uiPrompt('유튜브 링크 붙여넣기', '');
  if (v === null) return false;
  const u = String(v).trim(); const yid = ytId(u);
  if (!yid) { uiAlert('유튜브 링크가 아니에요. 유튜브 앱에서 공유 → 링크 복사 후 붙여넣어 주세요.'); return false; }
  r.yu = 'https://youtube.com/shorts/' + yid; r.yi = yid;
  try {
    await recPut(rid, r);
    const aid = 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const meta = { t: 'v', d: E.dkey(new Date(r.up || Date.now())), m: r.ti || '', u: r.yu, at: Date.now(), s: 0, sh: rid };
    await albFetch('meta/' + aid, 'PUT', JSON.stringify(meta));
    await albBumpIdx();
    ALB.meta = ALB.meta || {}; ALB.meta[aid] = meta;
    try { renderAlbum(); } catch (e) { }
    toast('링크를 연결하고 앨범에도 넣었어요');
    return true;
  } catch (e) { uiAlert('저장하지 못했어요 — 인터넷 확인 후 다시 시도해 주세요.'); return false; }
}

/* ---------- SH-08 쇼츠 설정 ---------- */
function openSettings() {
  const el = scrEl();
  const scr = { el: el };
  function row(label, val, attr, cls) { return '<div class="sx-set' + (attr ? ' tap' : '') + '"' + (attr || '') + '><span>' + label + '</span><span class="v ' + (cls || '') + '">' + val + (attr ? ICO.chev : '') + '</span></div>'; }
  function paint() {
    const c = C();
    el.innerHTML = navBar({ back: '쇼츠', title: '쇼츠 설정' }) + '<div class="sx-body">' +
      '<div class="sx-sec">기본</div><div class="sx-grp">' +
      '<div class="sx-set"><span>기본 올리기 방식</span><div class="sx-mini"><button type="button" class="on">직접</button><button type="button" data-act="auto">자동</button></div></div>' +
      '<div class="sx-set"><span>주간 추천 편수</span><div class="sx-step"><button type="button" data-st="recN" data-d="-1" aria-label="줄이기">−</button><b>' + c.recN + '편</b><button type="button" data-st="recN" data-d="1" aria-label="늘리기">+</button></div></div>' +
      '</div>' +
      '<div class="sx-sec">채널</div><div class="sx-grp">' +
      row('내 채널', esc(c.ch || '설정 안 됨'), ' data-act="ch"') +
      row('다음 시리즈 번호', '빼꼼 #' + esc(c.nsn || 1), ' data-act="sn"') +
      '</div>' + (c.nsnGuess ? '<p class="sx-sub" style="margin:7px 8px 0;">처음 값은 앨범의 유튜브 링크 수로 추정했어요. 채널에 올린 쇼츠 편수 + 1이 맞는지 확인해 주세요.</p>' : '') +
      '<div class="sx-sec">자동 올리기</div><div class="sx-grp">' + row('자동 올리기', '다음 업데이트(V6.6)', '', 'dis') + '</div>' +
      '<div class="sx-sec">중복 방지</div><div class="sx-grp">' +
      '<div class="sx-set"><span>같은 사진 쉬는 기간</span><div class="sx-step"><button type="button" data-st="cool" data-d="-5">−</button><b>' + c.cool + '일</b><button type="button" data-st="cool" data-d="5">+</button></div></div>' +
      '<div class="sx-set"><span>최대 사용</span><div class="sx-step"><button type="button" data-st="maxUse" data-d="-1">−</button><b>' + c.maxUse + '회</b><button type="button" data-st="maxUse" data-d="1">+</button></div></div>' +
      '<div class="sx-set"><span>겹침 허용</span><div class="sx-step"><button type="button" data-st="ovl" data-d="-10">−</button><b>' + c.ovl + '%</b><button type="button" data-st="ovl" data-d="10">+</button></div></div>' +
      '</div>' +
      '<div class="sx-sec">저장공간</div><div class="sx-grp">' +
      row('보관 중', '레시피 ' + Object.keys(D.rec).length + '건 · 지문 ' + Object.keys(D.fp).length + '건', '') +
      '<div class="sx-set tap" data-act="clean"><span>오래된 기록 정리</span><span class="v act">지문은 남아요</span></div>' +
      '</div>' +
      '<div class="sx-sec">이 폰</div><div class="sx-grp">' + row('영상 만들기', '<span id="sxCapV">확인 중…</span>', '') + row('원본 소리 넣기', '<span id="sxCapA">확인 중…</span>', '') + '</div>' +
      '<p class="sx-sub" style="margin:10px 8px 0;">쇼츠 V' + SXV + ' · 설정은 두 폰이 함께 씁니다.</p></div>';
    R.caps().then(function (cp) {
      const v = document.getElementById('sxCapV'), a = document.getElementById('sxCapA');
      if (v) v.textContent = cp.video ? '가능 (' + cp.fps + 'fps' + (cp.rot ? ' · 눕혀 저장' : '') + ')' : '안 됨 — iOS 26 이상 또는 안드로이드 크롬';
      if (a) a.textContent = cp.audio ? '가능 (AAC)' : '안 됨 — 소리 없이 만들어요';
    });
  }
  el.addEventListener('click', async function (e) {
    const st = e.target.closest('[data-st]');
    if (st) {
      const k = st.dataset.st, d = +st.dataset.d, c = C();
      const lim = { recN: [1, 5], cool: [0, 120], maxUse: [1, 10], ovl: [0, 100] }[k];
      const v = Math.max(lim[0], Math.min(lim[1], (+c[k] || 0) + d));
      try { await cfgSet(k, v); RC.recs = null; } catch (er) { toast('저장 실패 — 인터넷 확인'); }
      paint(); return;
    }
    const a = e.target.closest('[data-act]'); if (!a) return;
    const act = a.dataset.act;
    if (act === 'auto') { uiAlert('자동 올리기는 첫 설정이 필요해요.\n다음 업데이트(V6.6)에서 Zapier 연결과 함께 열려요.'); return; }
    if (act === 'ch') { const v = await uiPrompt('내 채널 (예: @DWKIM_CA)', C().ch || ''); if (v !== null) { try { await cfgSet('ch', v.trim()); } catch (er) { } paint(); } return; }
    if (act === 'sn') {
      const v = await uiPrompt('다음 시리즈 번호 (채널에 올린 쇼츠 편수 + 1)', String(C().nsn || 1));
      if (v === null) return;
      const n = parseInt(v, 10); if (!(n > 0)) { uiAlert('숫자를 입력해 주세요.'); return; }
      try { await cfgSet('nsn', n); await cfgSet('nsnGuess', null); } catch (er) { }
      paint(); return;
    }
    if (act === 'clean') {
      const lim = Date.now() - 90 * 86400000;
      const old = ups().filter(function (r) { return (r.up || 0) < lim; });
      if (!old.length) { uiAlert('정리할 기록이 없어요.\n올린 지 90일 지난 레시피만 지웁니다.'); return; }
      const ok = await uiConfirm({ title: '오래된 기록 정리', msg: '올린 지 90일 지난 레시피 ' + old.length + '건을 지웁니다.\n지문은 남아서 같은 사진 조합은 다시 만들어지지 않아요.', ok: '정리', destr: true });
      if (!ok) return;
      for (let i = 0; i < old.length; i++) { try { await recDel(old[i].rid); } catch (er) { } }
      toast('레시피 ' + old.length + '건을 정리했어요'); paint();
    }
  });
  push(scr); paint();
}

/* ---------- SH-00-3 장면 태그 시트 (사진 올린 뒤 · 태그 수정) ---------- */
function shotMs(m) { const s = String((m && m.sd) || ''); return /T\d{2}:\d{2}/.test(s) ? E.tOf(m) : 0; }
function within(segs, t, pad) { return (segs || []).some(function (x) { return x && x.o && t >= x.o - pad && t <= (x.i || Date.now()) + pad; }); }
function logSegs(log, t) {
  const k = E.dkey(new Date(t)), prev = E.dkey(new Date(t - 86400000));
  return [].concat((log || {})[k] || [], (log || {})[prev] || []);
}
/* 찍은 시각이 산책·목욕·유치원·수면 기록과 겹치면 미리 선택 */
function suggest(ids) {
  const out = {}; const why = [];
  ids.forEach(function (id) {
    const m = (ALB.meta || {})[id]; let t = shotMs(m);
    if (!t && m && m.at && Date.now() - m.at < 10 * 60000) t = m.at;   /* 촬영 정보가 없고 방금 올렸으면 지금 시각 */
    if (!t) return;
    const PAD = 10 * 60000;
    if (within(logSegs(S.walkLog, t), t, PAD) || (S.walkCur && t >= S.walkCur - PAD)) { out['산책'] = 1; }
    if (within(logSegs(S.kgLog, t), t, 0)) out['유치원'] = 1;
    if (within(logSegs(S.sleepLog, t), t, 0) || (S.sleepCur && t >= S.sleepCur)) out['잠'] = 1;
    const bl = S.bathLog || {}; const bk = E.dkey(new Date(t));
    if (bl[bk] && bl[bk].t && Math.abs(bl[bk].t - t) < 3 * 3600000) out['목욕'] = 1;
  });
  Object.keys(out).forEach(function (s) { why.push(s); });
  return { pick: out, why: why };
}
function tagSheet(ids, o) {
  o = o || {};
  ids = (ids || []).filter(function (id) { return (ALB.meta || {})[id]; });
  if (!ids.length) return Promise.resolve(false);
  const one = ids.length === 1 ? ALB.meta[ids[0]] : null;
  const pick = {}; let mood = '';
  if (one) { E.sits({ ts: one.ts }).forEach(function (s) { pick[s] = 1; }); mood = E.mood(one); }
  let sg = { pick: {}, why: [] };
  if (o.auto) { sg = suggest(ids); Object.keys(sg.pick).forEach(function (s) { pick[s] = 1; }); }
  return new Promise(function (resolve) {
    const head = o.auto ? '어떤 장면인가요?' : '장면 태그';
    const sub = o.auto ? '고르면 쇼츠 추천이 정확해져요. 건너뛰어도 돼요.' : '쇼츠 추천과 포맷 정하기에 쓰여요.';
    const sh = sheet('<h3>' + head + '</h3><div class="sx-sub">' + sub + '</div>' +
      '<div class="sx-thr">' + ids.slice(0, 4).map(function (id) { return '<div class="t"><img class="sx-ph" data-th="' + esc(id) + '" alt=""></div>'; }).join('') + '<span class="sx-sub" style="margin-left:6px;">' + (o.auto ? '방금 올린 ' : '') + ids.length + '장</span></div>' +
      '<div class="lbl">상황</div><div class="sx-chips" data-g="sit">' + E.SIT.map(function (s) { return '<button type="button" class="sx-chip' + (pick[s] ? ' on' : '') + '" data-v="' + s + '">' + s + '</button>'; }).join('') + '</div>' +
      (sg.why.length ? '<div class="sx-note">' + sg.why.map(function (s) { return s + ' 기록'; }).join('·') + '과 시간이 겹쳐 ' + sg.why.map(function (s) { return '‘' + s + '’'; }).join('·') + '을 미리 골랐어요</div>' : '') +
      '<div class="lbl">분위기</div><div class="sx-chips" data-g="mood">' + E.MOODS.map(function (s) { return '<button type="button" class="sx-chip' + (mood === s ? ' on' : '') + '" data-v="' + s + '">' + s + '</button>'; }).join('') + '</div>' +
      '<div class="sx-btns"><button type="button" class="sx-btn gray" data-act="skip">' + (o.auto ? '건너뛰기' : '취소') + '</button><button type="button" class="sx-btn" data-act="save">저장</button></div>',
      { onClose: function () { resolve(false); }, noHist: !!o.auto && !(navigator.userActivation && navigator.userActivation.isActive) });
    thumbsIn(sh.el);
    sh.el.addEventListener('click', async function (e) {
      const c = e.target.closest('.sx-chip');
      if (c) {
        const g = c.parentNode.dataset.g, v = c.dataset.v;
        if (g === 'sit') { if (pick[v]) delete pick[v]; else pick[v] = 1; c.classList.toggle('on', !!pick[v]); }
        else { mood = mood === v ? '' : v; $$(c.parentNode, '.sx-chip').forEach(function (b) { b.classList.toggle('on', b.dataset.v === mood); }); }
        return;
      }
      const a = e.target.closest('[data-act]'); if (!a) return;
      if (a.dataset.act === 'skip') { sh.close(); return; }
      const ts = E.SIT.filter(function (s) { return pick[s]; }).join(',');
      const up = {};
      ids.forEach(function (id) { up[id + '/ts'] = ts || null; up[id + '/tm'] = mood || null; });
      a.disabled = true;
      try {
        await albFetch('meta', 'PATCH', JSON.stringify(up));
        await albBumpIdx();
        ids.forEach(function (id) { const m = ALB.meta[id]; if (!m) return; if (ts) m.ts = ts; else delete m.ts; if (mood) m.tm = mood; else delete m.tm; });
        RC.recs = null;
        sh.close(); resolve(true);
        if (o.after) o.after();
      } catch (er) { a.disabled = false; toast('저장 실패 — 인터넷 확인 후 다시 시도'); }
    });
  });
}
/* 사진마다 이미지 지문(ih) — 연사 묶기용. 한 번에 3장씩, 없는 것만 */
let IDX_RUN = false;
async function idxHashes(ids) {
  if (IDX_RUN || !syncConfigured()) return;
  IDX_RUN = true;
  try {
    const meta = ALB.meta || {};
    const todo = (ids || Object.keys(meta)).filter(function (id) { const m = meta[id]; return m && E.isPhoto(m) && !m.ih; }).slice(0, 60);
    const up = {};
    for (let i = 0; i < todo.length; i += 3) {
      await Promise.all(todo.slice(i, i + 3).map(async function (id) {
        try { const u = await thumbSrc(id); if (!u) return; const hx = await R.dhash(u); if (hx && hx.length === 16) { up[id + '/ih'] = hx; meta[id].ih = hx; } } catch (e) { }
      }));
    }
    if (Object.keys(up).length) { await albFetch('meta', 'PATCH', JSON.stringify(up)); }
  } catch (e) { } finally { IDX_RUN = false; }
}

/* ================= SH-02 구성 편집 · SH-03 마무리 · SH-04 만드는 중 · SH-05A 직접 올리기 ================= */
const FMT_KO = { TRUST: '교감', ATTACK: '놀이·우다다', SLEEP: '잠 반전', GROWTH: '성장', FAIL: '말썽', TRAIN: '훈련', PHOTOS: '사진 모음' };
function ctxFor(rcp) { return E.ctxOf(selOf(rcp.it.map(function (x) { return x.id; })), rcp.fm, (S.profile || {}).home, D.rec); }
function idsOf(rcp) { return rcp.it.map(function (x) { return x.id; }); }

/* 포맷 바꾸기 — 자막 문체·장당 시간·음악 분위기가 함께 바뀜 (사람이 고친 값은 유지) */
function applyFormat(rcp, fm) {
  rcp.fm = fm;
  const sel = selOf(idsOf(rcp)), home = (S.profile || {}).home;
  const ctx = E.ctxOf(sel, fm, home, D.rec);
  const per = fm === 'TRUST' ? 2.5 : 2.2;
  rcp.it.forEach(function (x, i) {
    if (i > 0 && i < rcp.it.length - 1 && !x.v && !x.dm) x.du = per;
    if (x.v && !x.spm) x.sp = (fm === 'ATTACK' && i === 0) ? 0.5 : 1;
  });
  E.fitLength(rcp.it);
  rcp.it.forEach(function (x) { if (!x.ce) x.c = ''; });   /* 장면 자막은 사람이 고른 것만 */
  if (!rcp.koe) rcp.ko = E.koLine(sel, ctx);
  if (!rcp.tc) {
    const ts = E.titles(fm, ctx, D.rec); const t0 = ts[0];
    if (t0) { rcp.ti = t0.t; rcp.tt = t0.key; if (!rcp.hke) rcp.hk = t0.h; if (!rcp.dee) rcp.de = E.desc(t0, sel, ctx, rcp.sn || nextSn(), rcp.ko); }
  }
  rcp.mq = E.music(fm, ctx.mood);
  rcp.dn = ctx.N || 0;
  if (!rcp.dle) rcp.dl = ctx.N ? 'day ' + ctx.N + ' with my Cavalier' : 'with my Cavalier';
}

/* ---------- SH-02 구성 편집 ---------- */
function openEdit(rcp, o) {
  o = o || {};
  rcp = JSON.parse(JSON.stringify(rcp));
  const el = scrEl('sx-edit');
  const backLbl = U.stack.length ? '쇼츠' : '앨범';
  el.innerHTML = navBar({ back: backLbl, title: '구성 편집' }) +
    '<div class="sx-body">' +
    '<div class="sx-pv"><canvas></canvas><div class="pl">' + ICO.play + '</div><div class="ld">불러오는 중…</div><div class="tm">0:00 / 0:00</div><div class="pb"><i></i></div></div>' +
    '<div class="sx-capc" data-act="cap"><div class="hd"><span>영상 자막</span><span class="ed">수정</span></div><div class="cc"></div></div>' +
    '<div class="sx-len"><div class="hd"><b class="lt"></b><span>권장 15~20초</span></div><div class="bar"><div class="ok"></div><div class="kn"></div></div><div class="msg"></div></div>' +
    '<div class="sx-hs sx-fmts">' + E.FMTS.map(function (f) { return '<button type="button" class="sx-chip" data-fm="' + f + '">' + f + '</button>'; }).join('') + '</div>' +
    '<div class="sx-row" style="margin-top:14px;"><span class="sx-h cnt"></span><span class="sx-sub">눌러서 장면 자막·길이</span></div>' +
    '<div class="sx-strip"></div>' +
    '<button type="button" class="sx-add" data-act="add">+ 사진 추가</button>' +
    '<div class="ovw"></div>' +
    '</div><div class="sx-foot"><button type="button" class="sx-btn" data-act="next">다음</button></div>';
  const scr = { el: el, rcp: rcp, player: null };
  const cv = $(el, '.sx-pv canvas');
  function sizeCanvas() {
    const w = Math.max(160, Math.round(($(el, '.sx-pv').getBoundingClientRect().width || 240)));
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.min(540, Math.round(w * dpr)); cv.height = Math.round(cv.width * 16 / 9);
  }
  function onTick(t, total) {
    $(el, '.sx-pv .tm').textContent = mmss(t) + ' / ' + mmss(total);
    $(el, '.sx-pv .pb i').style.width = (total ? Math.min(100, t / total * 100) : 0) + '%';
    $(el, '.sx-pv').classList.toggle('playing', !!(scr.player && scr.player.playing));
  }
  function paintLen() {
    const tot = E.total(rcp.it); rcp.ln = tot;
    $(el, '.sx-len .lt').textContent = '길이 ' + tot.toFixed(1) + '초';
    const MIN = 8, MAX = 26, pos = function (v) { return (Math.max(MIN, Math.min(MAX, v)) - MIN) / (MAX - MIN) * 100; };
    const ok = $(el, '.sx-len .ok'); ok.style.left = pos(15) + '%'; ok.style.width = (pos(20) - pos(15)) + '%';
    const kn = $(el, '.sx-len .kn'); kn.style.left = pos(tot) + '%';
    const out = tot < 15 || tot > 20; kn.classList.toggle('out', out);
    $(el, '.sx-len .msg').textContent = out ? '추천 길이는 15~20초예요. 이대로도 만들 수 있어요.' : '';
  }
  function paintCap() {
    const ctx = ctxFor(rcp);
    $(el, '.sx-capc .cc').innerHTML =
      '<div class="en">' + esc(rcp.hk || '') + '</div>' + meanHTML(rcp.hk, ctx) +
      '<div class="en en2">' + esc(rcp.dl || '') + '</div>' + meanHTML(rcp.dl, ctx) +
      (rcp.it.some(function (x) { return x.c; }) ? '<div class="sx-sub" style="margin-top:6px;">장면 자막 ' + rcp.it.filter(function (x) { return x.c; }).length + '개</div>' : '');
  }
  function paintFmts() {
    $$(el, '[data-fm]').forEach(function (b) { b.classList.toggle('on', b.dataset.fm === rcp.fm); });
    const on = $(el, '[data-fm].on'), row = $(el, '.sx-fmts');
    if (on && row) { const l = on.offsetLeft - 16; if (l < row.scrollLeft || l + on.offsetWidth > row.scrollLeft + row.clientWidth) row.scrollLeft = Math.max(0, l - 8); }
  }
  function ovlInfo() {
    const ids = idsOf(rcp), sets = E.usedSets(D.rec);
    const hit = E.overlapIds(ids, sets);
    const o2 = E.overlap(ids, sets);
    const same = !!D.fp[E.fpOf(ids)];
    return { hit: hit, frac: o2.frac, same: same };
  }
  function paintStrip() {
    const ov = ovlInfo();
    $(el, '.cnt').textContent = '구성 ' + rcp.it.length + '개';
    $(el, '.sx-strip').innerHTML = rcp.it.map(function (x, i) {
      return '<div class="sx-it' + (ov.hit.indexOf(x.id) > -1 && scr.showOvl ? ' ovl' : '') + '" data-i="' + i + '"><div class="im"><img class="sx-ph" draggable="false" data-th="' + esc(x.id) + '" alt=""><span class="no">' + (i + 1) + '</span>' +
        (x.c ? '<span class="cp" title="자막">T</span>' : '') + (x.v ? '<span class="vb">▶ 영상' + ((+x.sp || 1) < 1 ? ' ½' : '') + '</span>' : '') + '</div><div class="du">' + fmtSec(x.du) + '</div></div>';
    }).join('');
    thumbsIn($(el, '.sx-strip'));
    const w = $(el, '.ovw');
    if (ov.same) w.innerHTML = '<div class="sx-warn">이 사진 조합은 이미 올렸어요. 사진을 바꾸거나 빼 주세요.</div>';
    else if (ov.hit.length) w.innerHTML = '<div class="sx-warn" data-act="ovl" style="cursor:pointer;">사진 ' + ov.hit.length + '장이 올린 쇼츠와 겹쳐요 · ' + (scr.showOvl ? '표시 끄기' : '보기') + '</div>';
    else w.innerHTML = '';
    $(el, '[data-act="next"]').disabled = ov.same || rcp.it.length < 2;
  }
  function refresh(noPlayer) {
    /* 빠른 줌인은 첫 장(사진)에만 — 순서를 바꿔도 첫 장이 이어받는다(직접 고른 확대 방향은 유지) */
    rcp.it.forEach(function (x, i) { if (i === 0 && !x.v && !x.zm) x.zf = 1; else if (!(i === 0 && x.zf && !x.zm)) delete x.zf; });
    paintCap(); paintLen(); paintFmts(); paintStrip();
    if (!noPlayer && scr.player) { scr.player.set(rcp).then(function () { const ld = $(el, '.sx-pv .ld'); if (ld) ld.style.display = 'none'; }); }
  }
  scr.refresh = refresh;
  scr.destroy = function () { if (scr.player) scr.player.destroy(); };
  scr.resume = function () { refresh(true); };
  el.addEventListener('click', function (e) {
    if (scr.suppress) { scr.suppress = false; return; }
    if (e.target.closest('.sx-pap')) return;
    if (e.target.closest('.sx-pv')) { if (scr.player) scr.player.toggle(); onTick(scr.player ? scr.player.t : 0, scr.player ? scr.player.total() : 0); return; }
    const f = e.target.closest('[data-fm]'); if (f) { if (f.dataset.fm !== rcp.fm) { applyFormat(rcp, f.dataset.fm); refresh(); } return; }
    const it = e.target.closest('.sx-it'); if (it) { itemSheet(scr, +it.dataset.i); return; }
    const a = e.target.closest('[data-act]'); if (!a) return;
    const act = a.dataset.act;
    if (act === 'cap') capSheet(scr);
    else if (act === 'add') openPick(scr);
    else if (act === 'ovl') { scr.showOvl = !scr.showOvl; paintStrip(); }
    else if (act === 'next') goNext();
  });
  async function goNext() {
    if (scr.player) scr.player.pause();
    const ov = ovlInfo();
    if (ov.same) return;
    if (ov.frac * 100 >= C().ovl) {
      const r = await uiSheetOpen({ title: '올린 쇼츠와 사진이 ' + Math.round(ov.frac * 100) + '% 겹쳐요', msg: '같은 사진이 너무 많이 들어가면 비슷한 영상이 돼요.', actions: [{ label: '그래도 만들기' }, { label: '다른 후보 보기' }], cancel: '계속 편집' });
      if (!r || !r.ok) return;
      if (r.idx === 1) { back(); return; }
    }
    if (!rcp.rid) rcp.rid = newRid();
    rcp.st = rcp.st === 'up' ? 'up' : 'draft'; rcp.at = rcp.at || Date.now(); rcp.by = myName() || '';
    rcp.ln = E.total(rcp.it);
    try { await recPut(rcp.rid, stripLocal(rcp)); } catch (er) { toast('초안 저장 실패 — 인터넷 확인'); }
    openFin(scr);
  }
  bindDrag(scr);
  push(scr);
  requestAnimationFrame(function () {
    sizeCanvas();
    scr.player = new R.Player(cv, onTick);
    refresh();
  });
  return scr;
}
function stripLocal(r) { const c = JSON.parse(JSON.stringify(r)); delete c.rid; delete c.key; return c; }

/* 구성 줄 — 꾹 눌러 끌어서 순서 바꾸기 (터치·마우스) */
function bindDrag(scr) {
  const el = scr.el;
  let dg = null;
  function strip() { return $(el, '.sx-strip'); }
  function start(itEl, x, y) {
    const r = itEl.getBoundingClientRect();
    const g = h('<div class="sx-ghost"></div>');
    const im = $(itEl, 'img'); if (im && im.src) g.innerHTML = '<img src="' + im.src + '" style="width:100%;height:100%;object-fit:cover;">';
    document.body.appendChild(g);
    dg.on = true; dg.g = g; dg.dx = x - r.left; dg.dy = y - r.top; dg.from = +itEl.dataset.i; dg.to = dg.from; itEl.classList.add('drag');
    move(x, y);
    try { if (navigator.vibrate) navigator.vibrate(12); } catch (e) { }
  }
  function move(x, y) {
    if (!dg || !dg.on) return;
    dg.g.style.left = (x - dg.dx) + 'px'; dg.g.style.top = (y - dg.dy) + 'px';
    const items = $$(strip(), '.sx-it');
    let to = items.length - 1;
    for (let i = 0; i < items.length; i++) { const r = items[i].getBoundingClientRect(); if (x < r.left + r.width / 2) { to = i; break; } }
    dg.to = to;
    const sr = strip().getBoundingClientRect();
    if (x > sr.right - 30) strip().scrollLeft += 8; else if (x < sr.left + 30) strip().scrollLeft -= 8;
  }
  function end() {
    if (!dg) return;
    const was = dg; dg = null;
    clearTimeout(was.t);
    if (!was.on) return;
    was.g.remove();
    scr.suppress = true; setTimeout(function () { scr.suppress = false; }, 60);
    let to = was.to; if (to > was.from) to--;
    if (to !== was.from && to >= 0) { const a = scr.rcp.it.splice(was.from, 1)[0]; scr.rcp.it.splice(to, 0, a); }
    scr.refresh();
  }
  el.addEventListener('touchstart', function (e) {
    const it = e.target.closest('.sx-it'); if (!it || e.touches.length !== 1) return;
    const t = e.touches[0];
    dg = { x: t.clientX, y: t.clientY, on: false, it: it };
    dg.t = setTimeout(function () { if (dg && !dg.on) start(it, dg.x, dg.y); }, 320);
  }, { passive: true });
  el.addEventListener('touchmove', function (e) {
    if (!dg) return;
    const t = e.touches[0];
    if (!dg.on) { if (Math.abs(t.clientX - dg.x) > 9 || Math.abs(t.clientY - dg.y) > 9) { clearTimeout(dg.t); dg = null; } return; }
    e.preventDefault(); move(t.clientX, t.clientY);
  }, { passive: false });
  el.addEventListener('touchend', function (e) { if (dg && dg.on) e.preventDefault(); end(); });
  el.addEventListener('touchcancel', end);
  el.addEventListener('contextmenu', function (e) { if (e.target.closest('.sx-it')) e.preventDefault(); });
  el.addEventListener('mousedown', function (e) {
    const it = e.target.closest('.sx-it'); if (!it || e.button !== 0) return;
    dg = { x: e.clientX, y: e.clientY, on: false, it: it, mouse: true };
  });
  window.addEventListener('mousemove', function (e) {
    if (!dg || !dg.mouse) return;
    if (!dg.on) { if (Math.abs(e.clientX - dg.x) > 6) start(dg.it, e.clientX, e.clientY); return; }
    move(e.clientX, e.clientY);
  });
  window.addEventListener('mouseup', function () { if (dg && dg.mouse) end(); });
}

/* 항목 시트 — 자막·길이(1.5~3초)·확대 방향·초점·빼기 / 영상은 쓸 구간 */
function itemSheet(scr, i) {
  const rcp = scr.rcp, x = rcp.it[i]; if (!x) return;
  const m = (ALB.meta || {})[x.id] || {};
  const vdur = Math.max(1, +m.dur || 8);
  const ZS = [['in', '확대'], ['out', '축소'], ['l', '왼쪽'], ['r', '오른쪽']];
  const sh = sheet('<h3>' + (i + 1) + '번째 · ' + (x.v ? '영상' : '사진') + '</h3><div class="sx-sub">' + esc(m.d || '') + (m.m ? ' · ' + esc(m.m) : '') + '</div>' +
    '<div class="lbl">장면 자막 — 비워 두면 위쪽 영문 2줄만 나와요</div><input type="text" class="sx-in" data-k="c" maxlength="40" placeholder="없음" value="' + esc(x.c || '') + '"><div class="cm"></div>' +
    sugHTML(E.sceneSug(m, i, rcp.fm, (S.profile || {}).home)) +
    (x.v ?
      '<div class="lbl">쓸 구간 · <b class="vs"></b></div><div class="sx-vstrip"><div class="sg"></div></div>' +
      '<input type="range" class="sx-slider" data-k="ss" min="0" max="' + Math.max(0, vdur - 1).toFixed(1) + '" step="0.1" value="' + (+x.ss || 0) + '">' +
      '<div class="sx-kv"><span>길이</span><b class="dv"></b></div><input type="range" class="sx-slider" data-k="du" min="2" max="5" step="0.1" value="' + x.du + '">' +
      '<label class="sx-set" style="padding:12px 2px;"><span>0.5배속 (슬로모션)</span><input type="checkbox" class="sw" data-k="sp"' + ((+x.sp || 1) < 1 ? ' checked' : '') + '></label>'
      :
      '<div class="sx-kv" style="margin-top:14px;"><span>길이</span><b class="dv"></b></div><input type="range" class="sx-slider" data-k="du" min="1.5" max="3" step="0.1" value="' + x.du + '">') +
    '<div class="lbl">확대 방향</div><div class="sx-mini" data-k="z" style="display:flex;">' + ZS.map(function (z) { return '<button type="button" style="flex:1;" data-z="' + z[0] + '" class="' + (x.z === z[0] ? 'on' : '') + '">' + z[1] + '</button>'; }).join('') + '</div>' +
    (!x.v ? '<div class="lbl">초점 — 세로로 자를 때 가운데 (좌우로 밀기)</div><div class="sx-focus"><img alt=""><div class="fr"></div></div>' : '') +
    '<div class="sx-btns"><button type="button" class="sx-btn gray" data-act="l"' + (i === 0 ? ' disabled' : '') + '>◀ 앞으로</button><button type="button" class="sx-btn gray" data-act="r"' + (i === rcp.it.length - 1 ? ' disabled' : '') + '>뒤로 ▶</button></div>' +
    '<div class="sx-btns" style="margin-top:10px;"><button type="button" class="sx-btn gray" style="color:var(--red-sys);" data-act="del">빼기</button><button type="button" class="sx-btn" data-act="ok">완료</button></div>',
    { onClose: function () { scr.refresh(); } });
  function paintV() {
    const dv = $(sh.el, '.dv'); if (dv) dv.textContent = fmtSec(x.du);
    if (x.v) {
      const used = x.du * (+x.sp || 1);
      if (x.ss + used > vdur) x.ss = Math.max(0, vdur - used);
      const sg = $(sh.el, '.sg'); sg.style.left = (x.ss / vdur * 100) + '%'; sg.style.width = Math.min(100, used / vdur * 100) + '%';
      $(sh.el, '.vs').textContent = x.ss.toFixed(1) + '초 ~ ' + (x.ss + used).toFixed(1) + '초 (원본 ' + mmss(vdur) + ')';
      $(sh.el, '[data-k="ss"]').value = x.ss;
    }
  }
  paintV();
  /* 초점 */
  const fc = $(sh.el, '.sx-focus');
  if (fc) {
    const img = $(fc, 'img'), fr = $(fc, '.fr');
    albImgSrc('full', x.id).then(function (u) { img.src = u; }).catch(function () { fillThumb(img, x.id); });
    function paintF() {
      const W = img.naturalWidth || 3, H = img.naturalHeight || 4;
      const box = fc.getBoundingClientRect(); const bw = box.width || 150, bh = box.height || 200;
      const sc = Math.min(bw / W, bh / H), iw = W * sc, ih = H * sc, ox = (bw - iw) / 2;
      if (W / H >= 0.9) { fr.style.display = 'none'; return; }
      const cw = Math.min(iw, ih * 9 / 16);
      const fx = typeof x.fx === 'number' ? x.fx : 0.5;
      const left = Math.max(0, Math.min(iw - cw, fx * iw - cw / 2));
      fr.style.display = ''; fr.style.left = (ox + left) + 'px'; fr.style.width = cw + 'px'; fr.style.top = ((bh - ih) / 2) + 'px'; fr.style.bottom = ((bh - ih) / 2) + 'px';
    }
    img.onload = paintF; setTimeout(paintF, 60);
    let fd = false;
    function setF(cx) { const r = img.getBoundingClientRect(); const W = img.naturalWidth || 3, H = img.naturalHeight || 4; const sc = Math.min(r.width / W, r.height / H), iw = W * sc, ox = (r.width - iw) / 2; x.fx = Math.max(0, Math.min(1, (cx - r.left - ox) / iw)); paintF(); }
    fc.addEventListener('pointerdown', function (e) { fd = true; setF(e.clientX); try { fc.setPointerCapture(e.pointerId); } catch (er) { } });
    fc.addEventListener('pointermove', function (e) { if (fd) setF(e.clientX); });
    fc.addEventListener('pointerup', function () { fd = false; });
  }
  const ctx0 = ctxFor(rcp);
  function paintCm() { const cm = $(sh.el, '.cm'); if (cm) cm.innerHTML = meanHTML(x.c, ctx0); }
  paintCm();
  sh.el.addEventListener('click', function (e) {
    const sg = e.target.closest('[data-sug]'); if (!sg) return;
    x.c = sg.getAttribute('data-sug'); x.ce = 1;
    const inp = $(sh.el, '[data-k="c"]'); if (inp) inp.value = x.c;
    paintCm();
  });
  sh.el.addEventListener('input', function (e) {
    const k = e.target.dataset.k;
    if (k === 'c') { x.c = e.target.value; x.ce = 1; paintCm(); }
    else if (k === 'du') { x.du = Math.round(+e.target.value * 10) / 10; x.dm = 1; paintV(); }
    else if (k === 'ss') { x.ss = Math.round(+e.target.value * 10) / 10; paintV(); }
  });
  sh.el.addEventListener('change', function (e) { if (e.target.dataset.k === 'sp') { x.sp = e.target.checked ? 0.5 : 1; x.spm = 1; paintV(); } });
  sh.el.addEventListener('click', function (e) {
    const z = e.target.closest('[data-z]'); if (z) { x.z = z.dataset.z; delete x.zf; x.zm = 1; $$(sh.el, '[data-z]').forEach(function (b) { b.classList.toggle('on', b === z); }); return; }
    const a = e.target.closest('[data-act]'); if (!a) return;
    if (a.dataset.act === 'ok') sh.close();
    else if (a.dataset.act === 'l' && i > 0) { rcp.it.splice(i - 1, 0, rcp.it.splice(i, 1)[0]); sh.close(); }
    else if (a.dataset.act === 'r' && i < rcp.it.length - 1) { rcp.it.splice(i + 1, 0, rcp.it.splice(i, 1)[0]); sh.close(); }
    else if (a.dataset.act === 'del') { if (rcp.it.length <= 2) { toast('최소 2장은 있어야 해요'); return; } rcp.it.splice(i, 1); sh.close(); }
  });
}

/* 자막 전체 수정 — 위쪽 영문 2줄(뜻 표시) + 장면별 자막(추천 문구·문장에서 고르기) */
function capSheet(scr) {
  const rcp = scr.rcp, ctx = ctxFor(rcp), home = (S.profile || {}).home;
  const sh = sheet('<h3>영상 자막</h3><div class="sx-sub">위쪽 영문 2줄은 모든 장면에 나와요. 장면 자막은 고른 장면에만 들어가요(영문 Poppins · 한글 Jua).</div>' +
    '<div class="lbl">맨 위 큰 자막</div><input type="text" class="sx-in" data-k="hk" maxlength="60" value="' + esc(rcp.hk || '') + '"><div class="m-hk"></div>' +
    '<div class="lbl">둘째 줄</div><input type="text" class="sx-in" data-k="dl" maxlength="60" value="' + esc(rcp.dl || '') + '"><div class="m-dl"></div>' +
    '<div class="lbl">장면 자막 — 비워 두면 없음</div>' + rcp.it.map(function (x, i) {
      return '<div class="sx-scap" data-row="' + i + '"><div class="r1"><div class="th"><img class="sx-ph" data-th="' + esc(x.id) + '" alt=""></div>' +
        '<div class="in"><input type="text" class="sx-in" data-i="' + i + '" maxlength="40" placeholder="' + (i + 1) + '번째 — 없음" value="' + esc(x.c || '') + '"><div class="m-c"></div></div>' +
        '<button type="button" class="sx-lnk" data-tg="' + i + '">추천</button></div><div class="sg"></div></div>';
    }).join('') +
    '<div class="sx-btns"><button type="button" class="sx-btn" data-act="ok">완료</button></div>', { onClose: function () { scr.refresh(); } });
  thumbsIn(sh.el);
  function paintM() {
    $(sh.el, '.m-hk').innerHTML = meanHTML(rcp.hk, ctx);
    $(sh.el, '.m-dl').innerHTML = meanHTML(rcp.dl, ctx);
    $$(sh.el, '.sx-scap').forEach(function (row) { const i = +row.dataset.row; $(row, '.m-c').innerHTML = meanHTML(rcp.it[i].c, ctx); });
  }
  paintM();
  sh.el.addEventListener('input', function (e) {
    const t = e.target;
    if (t.dataset.k === 'hk') { rcp.hk = t.value; rcp.hke = 1; }
    else if (t.dataset.k === 'dl') { rcp.dl = t.value; rcp.dle = 1; }
    else if (t.dataset.i !== undefined) { const x = rcp.it[+t.dataset.i]; x.c = t.value; x.ce = 1; }
    paintM();
  });
  sh.el.addEventListener('click', function (e) {
    const tg = e.target.closest('[data-tg]');
    if (tg) {
      const i = +tg.dataset.tg, box = $(sh.el, '.sx-scap[data-row="' + i + '"] .sg');
      if (box.innerHTML) { box.innerHTML = ''; tg.textContent = '추천'; return; }
      box.innerHTML = sugHTML(E.sceneSug((ALB.meta || {})[rcp.it[i].id] || {}, i, rcp.fm, home)); tg.textContent = '닫기'; return;
    }
    const sg = e.target.closest('[data-sug]');
    if (sg) {
      const row = sg.closest('.sx-scap'); if (!row) return;
      const i = +row.dataset.row, x = rcp.it[i];
      x.c = sg.getAttribute('data-sug'); x.ce = 1;
      $(row, '[data-i]').value = x.c; paintM(); return;
    }
    if (e.target.closest('[data-act="ok"]')) sh.close();
  });
}

/* 사진 추가 — 앨범에서 고르기 (쿨다운 사진은 회색) */
function openPick(edit) {
  const rcp = edit.rcp, have = {}; idsOf(rcp).forEach(function (id) { have[id] = 1; });
  const c = C(), td = today();
  const ids = Object.keys(ALB.meta || {}).filter(function (id) { return E.usable(ALB.meta[id]); }).sort(function (a, b) { return (ALB.meta[b].at || 0) - (ALB.meta[a].at || 0); });
  const el = scrEl();
  const pick = {};
  el.innerHTML = navBar({ back: '편집', title: '사진 추가', right: '<button type="button" class="sx-nbtn" data-act="done" style="font-weight:600;">추가</button>' }) +
    '<div class="sx-body"><p class="sx-sub" style="margin:4px 2px 12px;">회색은 쉬는 중(최근 ' + c.cool + '일 안에 쓴 사진)이에요. 골라도 되지만 겹침 경고가 떠요.</p><div class="sx-grid">' +
    ids.map(function (id) {
      const m = ALB.meta[id]; const cool = E.inCool(m, c, td) || E.maxed(m, c);
      return '<div class="sx-gc' + (have[id] ? ' on' : '') + (cool ? ' cool' : '') + '" data-id="' + esc(id) + '"' + (have[id] ? ' data-have="1"' : '') + '><img class="sx-ph" data-th="' + esc(id) + '" loading="lazy" alt=""><span class="ck"></span>' + (E.isClip(m) ? '<span class="vd">▶ ' + (m.dur ? mediaDur(m.dur) : '영상') + '</span>' : '') + (m.su ? '<span class="u">' + m.su + '회</span>' : '') + '</div>';
    }).join('') + '</div></div>';
  const scr = { el: el };
  el.addEventListener('click', function (e) {
    const gc = e.target.closest('.sx-gc');
    if (gc) { if (gc.dataset.have) { toast('이미 들어간 사진이에요'); return; } const id = gc.dataset.id; if (pick[id]) delete pick[id]; else pick[id] = 1; gc.classList.toggle('on', !!pick[id]); const n = Object.keys(pick).length; $(el, '[data-act="done"]').textContent = n ? '추가 (' + n + ')' : '추가'; return; }
    if (e.target.closest('[data-act="done"]')) {
      const add = ids.filter(function (id) { return pick[id]; });
      if (add.length) {
        const per = rcp.fm === 'TRUST' ? 2.5 : 2.2;
        const items = selOf(add).map(function (x) { return E.itemOf(x, E.isClip(x.m) ? 2.5 : per, 'in'); });
        const at = Math.max(1, rcp.it.length - 1);
        Array.prototype.splice.apply(rcp.it, [at, 0].concat(items));
      }
      back();
    }
  });
  push(scr);
  /* 화면에 보이는 칸만 썸네일 */
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { io.unobserve(en.target); fillThumb(en.target, en.target.getAttribute('data-th')); } }); }, { root: el, rootMargin: '300px' }) : null;
  $$(el, 'img[data-th]').forEach(function (im) { if (io) io.observe(im); else fillThumb(im, im.getAttribute('data-th')); });
}

/* ---------- SH-03 마무리 (A) ---------- */
function setKo(rcp, v) {
  const old = rcp.ko || '';
  rcp.ko = v; rcp.koe = 1;
  if (!rcp.dee) { const ctx = ctxFor(rcp); const t = E.titles(rcp.fm, ctx, D.rec).filter(function (x) { return x.t === rcp.ti; })[0] || { t: rcp.ti, d: '' }; rcp.de = E.desc(t, selOf(idsOf(rcp)), ctx, rcp.sn || nextSn(), v); return; }
  const lines = String(rcp.de || '').split('\n');
  const i = old ? lines.indexOf(old) : -1;
  if (i > -1) { if (v) lines[i] = v; else { lines.splice(i, 1); if (lines[i] === '' && lines[i - 1] === '') lines.splice(i, 1); } }
  else if (v) lines.splice(Math.min(3, lines.length), 0, v, '');   /* 템플릿 자리: 영문 두 줄 + 빈 줄 다음 */
  rcp.de = lines.join('\n');
}
/* 설명의 영문 두 줄(첫 줄 · 영문 훅) 뜻 */
function descMean(de, ctx) {
  const ls = String(de || '').split('\n').slice(0, 2).map(function (x) { return x.trim(); }).filter(function (x) { return x && !R.HANGUL.test(x); });
  if (!ls.length) return '';
  return '<div class="sx-mean">영문 줄 뜻 · ' + ls.map(function (x) { const m = E.meaning(x, ctx); return m ? esc(m) : '<a class="sx-pap" href="' + esc(E.papago(x)) + '" target="_blank" rel="noopener">파파고</a>'; }).join(' / ') + '</div>';
}
function mqChips(list, ctx) {
  return (list || []).map(function (q) { const k = E.meaning(q, ctx); return '<button type="button" class="sx-chip soft" data-copy="' + esc(q) + '">' + esc(q) + (k ? '<span class="k">' + esc(k) + '</span>' : '') + '</button>'; }).join('');
}
function nextSn() {
  let sn = +C().nsn || 1;
  Object.keys(D.rec).forEach(function (rid) { const x = D.rec[rid]; if (x && x.sn && x.sn >= sn) sn = x.sn + 1; });
  return sn;
}
function openFin(edit) {
  const rcp = edit.rcp;
  if (!rcp.sn) rcp.de = E.descSn(rcp.de, nextSn());   /* 끝줄 번호는 미리 보여 주고, 확정은 '영상 만들기' 때 */
  const el = scrEl('sx-fin');
  const scr = { el: el, open: false, koOpen: false };
  function paint() {
    const ctx = ctxFor(rcp);
    const ts = E.titles(rcp.fm, ctx, D.rec);
    const custom = !ts.some(function (t) { return t.t === rcp.ti; });
    const kl = E.koLines(selOf(idsOf(rcp)), ctx);
    el.innerHTML = navBar({ back: '편집', title: '마무리' }) + '<div class="sx-body">' +
      '<div class="sx-seg"><button type="button" class="on">직접 올리기</button><button type="button" data-act="auto">자동 올리기</button></div>' +
      '<div class="sx-row" style="margin-bottom:6px;"><span class="sx-sub" style="font-size:14px;">제목</span><button type="button" class="sx-lnk" data-act="own">직접 쓰기</button></div>' +
      '<div class="sx-card" style="padding:0;">' + ts.map(function (t, i) { return '<div class="sx-opt' + (rcp.ti === t.t ? ' on' : '') + '" data-t="' + i + '"><span class="sx-rad"></span><span class="tx">' + esc(t.t) + '<span class="sx-mean">뜻 · ' + esc(t.kt) + '</span></span></div>'; }).join('') +
      (custom ? '<div class="sx-opt on"><span class="sx-rad"></span><span class="tx">' + esc(rcp.ti) + meanHTML(rcp.ti, ctx) + '</span></div>' : '') + '</div>' +
      '<div class="sx-card" style="padding:12px 14px;"><div class="sx-sub" style="font-size:13px;">영상 맨 위 자막</div><div style="font-weight:700;margin-top:2px;">' + esc(rcp.hk || '') + '</div>' + meanHTML(rcp.hk, ctx) +
      '<div style="font-weight:600;margin-top:6px;font-size:14.5px;">' + esc(rcp.dl || '') + '</div>' + meanHTML(rcp.dl, ctx) + '</div>' +
      '<div class="sx-row" style="margin-bottom:6px;"><span class="sx-sub" style="font-size:14px;">설명의 한글 한 줄</span><button type="button" class="sx-lnk" data-act="kotg">' + (scr.koOpen ? '닫기' : '바꾸기') + '</button></div>' +
      '<div class="sx-card" style="padding:12px 14px;"><div style="font-size:15.5px;">' + (rcp.ko ? esc(rcp.ko) : '<span class="sx-sub">없음</span>') + '</div>' +
      (scr.koOpen ? '<div class="sx-sg"><span class="t">추천 문구</span><div class="sx-chips">' + kl.p.map(function (x) { return '<button type="button" class="sx-chip sm" data-ko="' + esc(x) + '">' + esc(x) + '</button>'; }).join('') + '</div></div>' +
        '<div class="sx-sg"><span class="t">추천 문장</span><div class="sx-chips">' + kl.s.map(function (x) { return '<button type="button" class="sx-chip sm" data-ko="' + esc(x) + '">' + esc(x) + '</button>'; }).join('') + '</div></div>' +
        (kl.memo.length ? '<div class="sx-sg"><span class="t">사진 메모</span><div class="sx-chips">' + kl.memo.map(function (x) { return '<button type="button" class="sx-chip sm" data-ko="' + esc(x) + '">' + esc(x) + '</button>'; }).join('') + '</div></div>' : '') +
        '<div class="sx-sg"><div class="sx-chips"><button type="button" class="sx-chip sm" data-act="kown">직접 쓰기</button><button type="button" class="sx-chip sm" data-ko="">없음</button></div></div>' : '') + '</div>' +
      '<div class="sx-row" style="margin-bottom:6px;"><span class="sx-sub" style="font-size:14px;">설명</span></div>' +
      '<div class="sx-card">' + (scr.open ? '<textarea class="sx-ta" rows="7" data-k="de">' + esc(rcp.de || '') + '</textarea>' : '<div class="sx-desc fold">' + esc(rcp.de || '') + '</div>') +
      descMean(rcp.de, ctx) +
      '<div style="text-align:right;"><button type="button" class="sx-lnk" data-act="fold">' + (scr.open ? '접기' : '펼치기') + '</button></div></div>' +
      '<div class="sx-row" style="margin-bottom:6px;"><span class="sx-sub" style="font-size:14px;">음악</span></div>' +
      '<div class="sx-card" style="padding:14px 16px;"><div style="font-size:17px;font-weight:700;">유튜브 앱에서 고를 곡</div><div class="sx-sub" style="margin:2px 0 10px;">누르면 검색어가 복사돼요</div><div class="sx-chips">' + mqChips(rcp.mq, ctx) + '</div></div>' +
      '<p class="sx-sub" style="margin:4px 6px 0;">음악은 유튜브 앱의 사운드에서 넣어요. 인기곡도 쓸 수 있어요.</p>' +
      '</div><div class="sx-foot"><button type="button" class="sx-btn" data-act="make">영상 만들기</button></div>';
  }
  el.addEventListener('input', function (e) { if (e.target.dataset.k === 'de') { rcp.de = e.target.value; rcp.dee = 1; } });
  el.addEventListener('click', async function (e) {
    if (e.target.closest('.sx-pap')) return;
    const cp = e.target.closest('[data-copy]'); if (cp) { copyText(cp.dataset.copy); toast('복사했어요: ' + cp.dataset.copy); return; }
    const ko = e.target.closest('[data-ko]'); if (ko) { setKo(rcp, ko.getAttribute('data-ko')); paint(); return; }
    const o = e.target.closest('[data-t]');
    if (o) {
      const ctx = ctxFor(rcp); const t = E.titles(rcp.fm, ctx, D.rec)[+o.dataset.t];
      if (t) { rcp.ti = t.t; rcp.tt = t.key; rcp.tc = 0; if (!rcp.hke) rcp.hk = t.h; if (!rcp.dee) rcp.de = E.desc(t, selOf(idsOf(rcp)), ctx, rcp.sn || nextSn(), rcp.ko); }
      paint(); return;
    }
    const a = e.target.closest('[data-act]'); if (!a) return;
    if (a.dataset.act === 'auto') { uiAlert('자동 올리기는 첫 설정이 필요해요.\n다음 업데이트(V6.6)에서 열려요. 지금은 직접 올리기로 만들어요.'); return; }
    if (a.dataset.act === 'kotg') { scr.koOpen = !scr.koOpen; paint(); return; }
    if (a.dataset.act === 'kown') { const v = await uiPrompt('설명의 한글 한 줄', rcp.ko || ''); if (v !== null) { setKo(rcp, v.trim()); paint(); } return; }
    if (a.dataset.act === 'own') {
      const v = await uiPrompt('제목 (영문 권장)', rcp.ti || '');
      if (v === null || !v.trim()) return;
      rcp.ti = v.trim(); rcp.tt = ''; rcp.tc = 1;
      if (!rcp.hke) rcp.hk = rcp.ti.length <= 40 ? rcp.ti : rcp.ti.slice(0, 38) + '…';
      paint(); return;
    }
    if (a.dataset.act === 'fold') { scr.open = !scr.open; paint(); return; }
    if (a.dataset.act === 'make') {
      a.disabled = true;
      try { await reserveSn(rcp); await recPut(rcp.rid, stripLocal(rcp)); }
      catch (er) { a.disabled = false; uiAlert('저장하지 못했어요 — 인터넷 확인 후 다시 시도해 주세요.'); return; }
      openMake(rcp, edit);
      setTimeout(function () { a.disabled = false; }, 600);
    }
  });
  scr.resume = paint;
  push(scr); paint();
}

/* ---------- SH-04 만드는 중 ---------- */
function openMake(rcp, edit) {
  const el = scrEl();
  const nV = rcp.it.filter(function (x) { return x.v; }).length, nP = rcp.it.length - nV;
  el.innerHTML = '<div class="sx-mk"><div class="sx-ring"><svg viewBox="0 0 200 200"><circle class="bgc" cx="100" cy="100" r="86"/><circle class="fgc" cx="100" cy="100" r="86" stroke-dasharray="540.4" stroke-dashoffset="540.4"/></svg><b>0%</b></div>' +
    '<h2>영상 만드는 중</h2><div class="sx-sub" style="font-size:15px;">' + (nV ? '영상 ' + nV + ' · ' : '') + '사진 ' + nP + '장 · ' + Math.round(E.total(rcp.it)) + '초 · 1080×1920</div>' +
    '<div class="sx-steps"><div class="s0 now"><i></i>사진 준비<span>0%</span></div><div class="s1"><i></i>영상 만들기<span></span></div><div class="s2 off"><i></i>저장소로 보내기<span>자동 올리기만</span></div></div>' +
    '<div class="warn">화면을 끄거나 닫지 마세요</div><div class="err"></div><div style="flex:1;"></div>' +
    '<button type="button" class="sx-lnk" data-act="cancel" style="font-size:17px;font-weight:600;">취소</button></div>';
  const ctl = new AbortController();
  const scr = { el: el, ctl: ctl, busy: true };
  let wl = null;
  function setP(p) { const v = Math.round(p * 100); $(el, '.sx-ring b').textContent = v + '%'; $(el, '.fgc').setAttribute('stroke-dashoffset', String(540.4 * (1 - p))); }
  function onProg(o) {
    if (o.step === 0) { $(el, '.s0 span').textContent = Math.round(o.p * 100) + '%'; setP(o.p * 0.15); }
    else { const s0 = $(el, '.s0'); s0.className = 's0 done'; $(el, '.s0 span').textContent = '완료'; const s1 = $(el, '.s1'); s1.className = 's1 now'; $(el, '.s1 span').textContent = Math.round(o.p * 100) + '%'; setP(0.15 + o.p * 0.85); }
  }
  function onVis() { if (document.visibilityState === 'hidden' && scr.busy) { scr.hidden = true; ctl.abort(); } }
  document.addEventListener('visibilitychange', onVis);
  scr.destroy = function () { scr.busy = false; try { ctl.abort(); } catch (e) { } document.removeEventListener('visibilitychange', onVis); try { if (wl) wl.release(); } catch (e) { } };
  scr.onBack = function () {
    if (!scr.busy) return true;
    uiConfirm({ title: '만들기를 멈출까요?', msg: '지금까지 만든 부분은 남지 않아요.', ok: '멈추기', destr: true }).then(function (ok) { if (ok) { try { ctl.abort(); } catch (e) { } scr.busy = false; back(); } });
    return false;
  };
  el.addEventListener('click', function (e) {
    const a = e.target.closest('[data-act]'); if (!a) return;
    if (a.dataset.act === 'cancel') { scr.busy = false; try { ctl.abort(); } catch (er) { } back(); }
    else if (a.dataset.act === 'retry') { back(); setTimeout(function () { openMake(rcp, edit); }, 420); }
  });
  push(scr);
  (async function () {
    try { if (navigator.wakeLock) wl = await navigator.wakeLock.request('screen'); } catch (e) { }
    try {
      const out = await R.make(rcp, { onProg: onProg, signal: ctl.signal });
      if (!scr.busy) return;
      scr.busy = false;
      rcp.st = 'draft'; rcp.mk = Date.now();
      try { await recPut(rcp.rid, stripLocal(rcp)); } catch (e) { }
      replaceTop(upScreen(rcp, out));
    } catch (e) {
      scr.busy = false;
      if (e && e.name === 'AbortError') {
        if (scr.hidden) { $(el, '.warn').textContent = '화면이 꺼져서 만들기가 멈췄어요.'; $(el, '.err').innerHTML = '<p class="sx-sub" style="margin:8px 0 14px;text-align:center;">처음부터 다시 만들어요.</p><button type="button" class="sx-btn" data-act="retry">다시 만들기</button>'; }
        return;
      }
      $(el, '.warn').textContent = e && e.code === 'nosupport' ? e.message : '만들지 못했어요';
      $(el, '.err').innerHTML = (e && e.code === 'nosupport' ? '' : '<p class="sx-sub" style="margin:8px 0 14px;text-align:center;">' + esc(String(e && e.message || e)) + '</p><button type="button" class="sx-btn" data-act="retry">다시 시도</button>');
    } finally { try { if (wl) wl.release(); } catch (e) { } wl = null; }
  })();
}
function replaceTop(scr) {
  const old = U.stack.pop();
  if (old) { try { if (old.destroy) old.destroy(); } catch (e) { } old.el.remove(); }
  scr.h = old ? old.h : false;
  U.stack.push(scr);
  root().appendChild(scr.el);
  scr.el.classList.add('noanim', 'on');
  bindBack(scr);
  setTimeout(function () { scr.el.classList.remove('noanim'); }, 50);
}

/* ---------- SH-05A 직접 올리기 안내 ---------- */
function upScreen(rcp, out) {
  const el = scrEl();
  const file = new File([out.blob], 'bbaekkom_' + (rcp.sn || 'shorts') + '.mp4', { type: 'video/mp4' });
  const url = URL.createObjectURL(out.blob);
  el.innerHTML = navBar({ title: '직접 올리기', right: '<button type="button" class="sx-nbtn mute" data-act="later">나중에</button>' }) +
    '<div class="sx-body"><div class="sx-done"><div class="th"><video src="' + url + '" muted playsinline loop autoplay></video></div><div><div style="font-size:21px;font-weight:800;">영상이 준비됐어요</div>' +
    '<div class="sx-sub" style="font-size:15px;margin-top:3px;">' + esc(rcp.ti) + '</div>' + meanHTML(rcp.ti, ctxFor(rcp)) + '<div class="sx-sub" style="margin-top:3px;">' + Math.round(out.dur) + '초 · ' + (out.hasAudio ? '영상 원본 소리 포함 · 음악은 유튜브 앱에서' : '음악 없음 (유튜브 앱에서 추가)') + ' · ' + (out.blob.size / 1048576).toFixed(1) + 'MB' + (out.fps && out.fps !== 60 ? ' · ' + out.fps + 'fps(이 폰 한계)' : '') + '</div></div></div>' +
    '<div class="sx-card" style="padding:4px 16px;">' +
    '<div class="sx-st"><span class="n">1</span><div class="b"><div class="h">유튜브로 보내기</div><div class="sx-sub">누르면 제목이 자동으로 복사돼요</div><button type="button" class="sx-btn" style="margin-top:10px;" data-act="share">유튜브로 보내기</button></div></div>' +
    '<div class="sx-st"><span class="n">2</span><div class="b"><div class="h">유튜브에서 ‘사운드’를 눌러 검색</div><div class="sx-chips" style="margin-top:9px;">' + mqChips(rcp.mq, ctxFor(rcp)) + '</div><div class="sx-sub" style="margin-top:7px;">누르면 검색어가 복사돼요</div></div></div>' +
    '<div class="sx-st"><span class="n">3</span><div class="b"><div class="h">‘다음’ → 제목 붙여넣기 → 업로드</div><div class="sx-chips" style="margin-top:9px;"><button type="button" class="sx-chip soft" data-act="cpt">제목 다시 복사</button><button type="button" class="sx-chip soft" data-act="cpd">설명 복사</button></div></div></div>' +
    '</div><div style="text-align:center;"><button type="button" class="sx-lnk" data-act="save">유튜브가 안 보이면 사진에 저장</button></div></div>' +
    '<div class="sx-foot"><button type="button" class="sx-btn soft" data-act="done">올렸어요</button></div>';
  const scr = { el: el };
  scr.destroy = function () { try { URL.revokeObjectURL(url); } catch (e) { } };
  function saveFile() {
    const ios = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (ios && navigator.canShare && navigator.canShare({ files: [file] })) { navigator.share({ files: [file] }).catch(function () { }); return; }
    const a = document.createElement('a'); a.href = url; a.download = file.name; document.body.appendChild(a); a.click(); a.remove();
    toast('사진 앱(다운로드)에 저장했어요. 유튜브 앱에서 이 영상을 골라 주세요.');
  }
  el.addEventListener('click', async function (e) {
    if (e.target.closest('.sx-pap')) return;
    const cp = e.target.closest('[data-copy]'); if (cp) { copyText(cp.dataset.copy); toast('복사했어요: ' + cp.dataset.copy); return; }
    const a = e.target.closest('[data-act]'); if (!a) return;
    const act = a.dataset.act;
    if (act === 'share') {
      copyText(rcp.ti);
      if (navigator.canShare && navigator.canShare({ files: [file] })) { navigator.share({ files: [file], title: rcp.ti }).catch(function () { }); toast('제목을 복사했어요. 공유 메뉴에서 유튜브를 고르세요.'); }
      else { saveFile(); }
      return;
    }
    if (act === 'cpt') { copyText(rcp.ti); toast('제목을 복사했어요'); return; }
    if (act === 'cpd') { copyText(rcp.de); toast('설명을 복사했어요'); return; }
    if (act === 'save') { saveFile(); return; }
    if (act === 'later') { rcp.st = 'draft'; try { await recPut(rcp.rid, stripLocal(rcp)); } catch (er) { } toast('초안으로 보관했어요 (14일)'); goHome('rec'); return; }
    if (act === 'done') {
      a.disabled = true;
      try { await markUp(rcp); toast('기록했어요 — 빼꼼 #' + rcp.sn); goHome('log'); }
      catch (er) { a.disabled = false; uiAlert('기록하지 못했어요 — 인터넷 확인 후 다시 눌러 주세요.'); }
    }
  });
  return scr;
}
/* 쇼츠 홈으로 — 아래에 홈이 있으면 거기까지 닫고, 없으면 새로 연다 */
function goHome(tab) {
  const i = U.stack.findIndex(function (s) { return s.el.classList.contains('sx-home'); });
  if (i > -1) { const home = U.stack[i]; home.tab = tab; popTo(i + 1); setTimeout(function () { try { home.paint(); } catch (e) { } }, 30); }
  else { popTo(0); setTimeout(function () { openHome(tab); }, 420); }
}
/* 올렸어요 — 지문 저장 · 사진 사용 횟수 · 시리즈 번호 확정 */
async function markUp(rcp) {
  const rid = rcp.rid;
  const r = stripLocal(rcp);
  r.st = 'up'; r.up = Date.now(); r.mo = 'A'; r.by = myName() || '';
  r.fp = E.fpOf(idsOf(rcp));
  await recPut(rid, r);
  await shFetch('fp/' + r.fp, 'PUT', r.sn || 0); D.fp[r.fp] = r.sn || 0;
  const up = {}, td = today();
  rcp.it.forEach(function (x) { const m = (ALB.meta || {})[x.id]; if (!m || up[x.id + '/su']) return; const su = (m.su || 0) + 1; up[x.id + '/su'] = su; up[x.id + '/sl'] = td; m.su = su; m.sl = td; });
  if (Object.keys(up).length) { await albFetch('meta', 'PATCH', JSON.stringify(up)); await albBumpIdx(); }
  if ((+C().nsn || 1) <= (r.sn || 0)) await cfgSet('nsn', r.sn + 1);
  RC.recs = null;
  try { renderAlbum(); } catch (e) { }
}

/* ---------- 바깥에서 여는 길 ---------- */
async function ensure() {
  if (!syncConfigured()) { uiAlert('설정에서 동기화를 먼저 켜주세요.'); return false; }
  try { await dLoad(); return true; }
  catch (e) { uiAlert('쇼츠 기록을 불러오지 못했어요. 인터넷 확인 후 다시 시도해 주세요.'); return false; }
}
async function fromIds(ids) {
  if (!(await ensure())) return;
  const sel = selOf(ids);
  if (sel.length < 2) { toast('2장 이상 골라 주세요'); return; }
  const f = E.fmtOf(sel).fm || 'PHOTOS';
  const r = E.draft(sel, f, { home: (S.profile || {}).home, today: today(), recipes: D.rec, keepAll: true, src: 'pick' });
  openEdit(r);
}
async function fromPhoto(id) {
  if (!(await ensure())) return;
  const b = E.bundleFrom(id, ALB.meta || {}, C(), today());
  if (b.length < 2) { toast('같이 묶을 사진이 부족해요'); return; }
  const f = E.fmtOf(b).fm || 'PHOTOS';
  const r = E.draft(b, f, { home: (S.profile || {}).home, today: today(), recipes: D.rec, firstId: id, src: 'photo' });
  openEdit(r);
}
async function badge() {
  if (!syncConfigured()) return 0;
  try { await dLoad(); } catch (e) { return 0; }
  const r = computeRecs(false) || [];
  return (RC.info && RC.info.newCount >= 5) ? r.length : 0;
}
window.SHORTS = {
  v: SXV,
  open: async function (tab) { if (await ensure()) openHome(tab); },
  fromIds: fromIds,
  fromPhoto: fromPhoto,
  tagSheet: function (ids, o) { const p = tagSheet(ids, o); setTimeout(function () { idxHashes(ids); }, 1500); return p; },
  badge: badge,
  onPop: onPop,
  isOpen: function () { return U.stack.length > 0; },
  caps: function () { return R.caps(); },
  _E: E, _R: R, _D: D, _RC: RC, _markUp: markUp, _recPut: recPut, _newRid: newRid
};

})();

import { useState, useRef, useEffect } from "react";

const KJV = {}; const KJV_UNUSED = {
"John":{1:[{v:1,t:"In the beginning was the Word, and the Word was with God, and the Word was God."},{v:2,t:"The same was in the beginning with God."},{v:3,t:"All things were made by him; and without him was not any thing made that was made."},{v:4,t:"In him was life; and the life was the light of men."},{v:5,t:"And the light shineth in darkness; and the darkness comprehended it not."},{v:6,t:"There was a man sent from God, whose name was John."},{v:7,t:"The same came for a witness, to bear witness of the Light, that all men through him might believe."},{v:8,t:"He was not that Light, but was sent to bear witness of that Light."},{v:9,t:"That was the true Light, which lighteth every man that cometh into the world."},{v:10,t:"He was in the world, and the world was made by him, and the world knew him not."},{v:11,t:"He came unto his own, and his own received him not."},{v:12,t:"But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:"},{v:13,t:"Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God."},{v:14,t:"And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth."},{v:15,t:"John bare witness of him, and cried, saying, This was he of whom I spake, He that cometh after me is preferred before me: for he was before me."},{v:16,t:"And of his fulness have all we received, and grace for grace."},{v:17,t:"For the law was given by Moses, but grace and truth came by Jesus Christ."},{v:18,t:"No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him."},{v:19,t:"And this is the record of John, when the Jews sent priests and Levites from Jerusalem to ask him, Who art thou?"},{v:20,t:"And he confessed, and denied not; but confessed, I am not the Christ."}],3:[{v:1,t:"There was a man of the Pharisees, named Nicodemus, a ruler of the Jews:"},{v:2,t:"The same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him."},{v:3,t:"Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God."},{v:4,t:"Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother's womb, and be born?"},{v:5,t:"Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God."},{v:6,t:"That which is born of the flesh is flesh; and that which is born of the Spirit is spirit."},{v:7,t:"Marvel not that I said unto thee, Ye must be born again."},{v:8,t:"The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit."},{v:9,t:"Nicodemus answered and said unto him, How can these things be?"},{v:10,t:"Jesus answered and said unto him, Art thou a master of Israel, and knowest not these things?"},{v:16,t:"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."},{v:17,t:"For God sent not his Son into the world to condemn the world; but that the world through him might be saved."},{v:36,t:"He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him."}],14:[{v:1,t:"Let not your heart be troubled: ye believe in God, believe also in me."},{v:2,t:"In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you."},{v:6,t:"Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."},{v:15,t:"If ye love me, keep my commandments."},{v:27,t:"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."}]},
"Psalms":{23:[{v:1,t:"The LORD is my shepherd; I shall not want."},{v:2,t:"He maketh me to lie down in green pastures: he leadeth me beside the still waters."},{v:3,t:"He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake."},{v:4,t:"Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me."},{v:5,t:"Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over."},{v:6,t:"Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever."}],119:[{v:11,t:"Thy word have I hid in mine heart, that I might not sin against thee."},{v:105,t:"Thy word is a lamp unto my feet, and a light unto my path."}]},
"Genesis":{1:[{v:1,t:"In the beginning God created the heaven and the earth."},{v:3,t:"And God said, Let there be light: and there was light."},{v:27,t:"So God created man in his own image, in the image of God created he him; male and female created he them."}]},
"Romans":{8:[{v:1,t:"There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit."},{v:28,t:"And we know that all things work together for good to them that love God, to them who are the called according to his purpose."},{v:38,t:"For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,"},{v:39,t:"Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord."}]},
"Matthew":{5:[{v:3,t:"Blessed are the poor in spirit: for theirs is the kingdom of heaven."},{v:4,t:"Blessed are they that mourn: for they shall be comforted."},{v:6,t:"Blessed are they which do hunger and thirst after righteousness: for they shall be filled."},{v:9,t:"Blessed are the peacemakers: for they shall be called the children of God."}]},
"Proverbs":{3:[{v:5,t:"Trust in the LORD with all thine heart; and lean not unto thine own understanding."},{v:6,t:"In all thy ways acknowledge him, and he shall direct thy paths."}]}
};

const BOOKS = {
  OT:["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"],
  NT:["Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"]
};

const CHAPTER_COUNTS = {
  Genesis:50,Exodus:40,Leviticus:27,Numbers:36,Deuteronomy:34,Joshua:24,Judges:21,Ruth:4,"1 Samuel":31,"2 Samuel":24,"1 Kings":22,"2 Kings":25,"1 Chronicles":29,"2 Chronicles":36,Ezra:10,Nehemiah:13,Esther:10,Job:42,Psalms:150,Proverbs:31,Ecclesiastes:12,"Song of Solomon":8,Isaiah:66,Jeremiah:52,Lamentations:5,Ezekiel:48,Daniel:12,Hosea:14,Joel:3,Amos:9,Obadiah:1,Jonah:4,Micah:7,Nahum:3,Habakkuk:3,Zephaniah:3,Haggai:2,Zechariah:14,Malachi:4,Matthew:28,Mark:16,Luke:24,John:21,Acts:28,Romans:16,"1 Corinthians":16,"2 Corinthians":13,Galatians:6,Ephesians:6,Philippians:4,Colossians:4,"1 Thessalonians":5,"2 Thessalonians":3,"1 Timothy":6,"2 Timothy":4,Titus:3,Philemon:1,Hebrews:13,James:5,"1 Peter":5,"2 Peter":3,"1 John":5,"2 John":1,"3 John":1,Jude:1,Revelation:22
};

const THEMES = {
  Parchment:{name:"Parchment",icon:"📜",gold:"#c9a84c",darkGold:"#8a5e1a",bg:"#0f0c07",surface:"#1a1208",border:"#3a2a0a",text:"#e8d9b5",textSec:"#a08060",textMuted:"#5a3e1b",headerBg:"linear-gradient(135deg,#150f05,#231808,#150f05)",sidebarBg:"linear-gradient(180deg,#150f05,#0c0a04)",chatBg:"linear-gradient(180deg,#100e06,#0c0a04)",bodyBg:"radial-gradient(ellipse at 20% 20%,rgba(180,130,40,.07) 0%,transparent 55%),radial-gradient(ellipse at 80% 80%,rgba(100,50,10,.08) 0%,transparent 55%)",verseSelBg:"rgba(180,140,60,.11)",verseSelBorder:"rgba(180,140,60,.32)",verseText:"#c9b890",verseSelText:"#e8d9b5",font:"'Palatino Linotype',Palatino,'Book Antiqua',Georgia,serif",scrollThumb:"#2a1f0a"},
  Manuscript:{name:"Manuscript",icon:"✍️",gold:"#7eb8a0",darkGold:"#3d7a68",bg:"#060d0b",surface:"#0c1e1a",border:"#1a3530",text:"#c8e8e0",textSec:"#6a9e92",textMuted:"#2a5248",headerBg:"linear-gradient(135deg,#060d0b,#0c1e1a,#060d0b)",sidebarBg:"linear-gradient(180deg,#080f0d,#040908)",chatBg:"linear-gradient(180deg,#060e0c,#040908)",bodyBg:"radial-gradient(ellipse at 30% 70%,rgba(40,160,120,.06) 0%,transparent 60%)",verseSelBg:"rgba(60,180,140,.1)",verseSelBorder:"rgba(60,180,140,.3)",verseText:"#8ec9b8",verseSelText:"#c8e8e0",font:"Georgia,'Times New Roman',serif",scrollThumb:"#1a3530"},
  Cathedral:{name:"Cathedral",icon:"⛪",gold:"#a78bca",darkGold:"#6b4f9a",bg:"#07050f",surface:"#150e25",border:"#2a1a4a",text:"#e0d8f0",textSec:"#8070a8",textMuted:"#4a3570",headerBg:"linear-gradient(135deg,#0a0715,#150e25,#0a0715)",sidebarBg:"linear-gradient(180deg,#0a0715,#05030c)",chatBg:"linear-gradient(180deg,#080510,#05030c)",bodyBg:"radial-gradient(ellipse at 25% 25%,rgba(100,60,180,.08) 0%,transparent 55%)",verseSelBg:"rgba(140,90,200,.1)",verseSelBorder:"rgba(140,90,200,.3)",verseText:"#b0a0d0",verseSelText:"#e0d8f0",font:"Georgia,'Times New Roman',serif",scrollThumb:"#2a1a4a"},
  Daylight:{name:"Daylight",icon:"☀️",gold:"#8a6020",darkGold:"#5a3c10",bg:"#faf6ee",surface:"#f0e8d0",border:"#d4c49a",text:"#2a1a08",textSec:"#7a5830",textMuted:"#b89a5a",headerBg:"linear-gradient(135deg,#f0e8d0,#efe0c0,#f0e8d0)",sidebarBg:"linear-gradient(180deg,#f5edd8,#ede0c4)",chatBg:"linear-gradient(180deg,#f5edd8,#ede0c4)",bodyBg:"radial-gradient(ellipse at 20% 20%,rgba(220,180,80,.08) 0%,transparent 55%)",verseSelBg:"rgba(140,96,32,.08)",verseSelBorder:"rgba(140,96,32,.28)",verseText:"#4a3010",verseSelText:"#2a1a08",font:"Georgia,'Book Antiqua',serif",scrollThumb:"#c4a870"},
  Papyrus:{name:"Papyrus",icon:"🏺",gold:"#c8884a",darkGold:"#8a4e1a",bg:"#0c0803",surface:"#201408",border:"#3a2010",text:"#f0d8a8",textSec:"#a07840",textMuted:"#5a3818",headerBg:"linear-gradient(135deg,#140a02,#201408,#140a02)",sidebarBg:"linear-gradient(180deg,#140a02,#090602)",chatBg:"linear-gradient(180deg,#100804,#090602)",bodyBg:"radial-gradient(ellipse at 20% 20%,rgba(200,130,40,.07) 0%,transparent 55%)",verseSelBg:"rgba(200,130,60,.1)",verseSelBorder:"rgba(200,130,60,.3)",verseText:"#d0a870",verseSelText:"#f0d8a8",font:"Georgia,'Times New Roman',serif",scrollThumb:"#3a2010"},
};

const EMBEDDED_API_KEY = import.meta.env.VITE_GEMINI_KEY || "";

const Ic = {
  menu:(s=20)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  x:(s=16)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  left:(s=14)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>,
  right:(s=14)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>,
  volume:(s=16)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>,
  stop:(s=14)=><svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>,
  palette:(s=16)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></svg>,
  book:(s=15)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  pray:(s=15)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>,
  notes:(s=15)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>,
  send:(s=15)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  trash:(s=13)=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6M9 6V4h6v2"/></svg>,
  star:(s=13)=><svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
};

function getKJV(book,chapter){return KJV[book]?.[chapter]?.map(v=>({verse:v.v,text:v.t}))||null;}

async function askGemini(history,systemPrompt,apiKey){
  const models=["gemini-2.5-flash","gemini-2.0-flash","gemini-2.0-flash-lite"];
  let lastErr=null;
  for(const model of models){
    try{
      const url="https://generativelanguage.googleapis.com/v1beta/models/"+model+":generateContent?key="+apiKey;
      const contents=history.map(m=>({role:m.role==="assistant"?"model":"user",parts:[{text:m.content}]}));
      const res=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system_instruction:{parts:[{text:systemPrompt}]},contents,generationConfig:{temperature:0.7,maxOutputTokens:4096}})});
      if(!res.ok){const e=await res.json().catch(()=>({}));throw new Error(e?.error?.message||"HTTP "+res.status);}
      const data=await res.json();
      const text=data.candidates?.[0]?.content?.parts?.[0]?.text;
      if(!text)throw new Error("Empty response");
      return text;
    }catch(e){lastErr=e;}
  }
  throw lastErr;
}

async function fetchWEB(book,chapter){
  const slug=book.toLowerCase().replace(/ /g,"+");
  const res=await fetch("https://bible-api.com/"+slug+"+"+chapter+"?translation=web");
  if(!res.ok)throw new Error("API error");
  const data=await res.json();
  if(!data.verses||data.verses.length===0)throw new Error("No verses returned");
  return data.verses.map(v=>({verse:v.verse,text:v.text.trim()}));
}

function MdText({text,gold}){
  const g=gold||"#c9a84c";
  return(
    <div>{text.split("\n").map((line,i)=>{
      if(line.startsWith("### "))return<div key={i} style={{fontSize:15,fontWeight:"bold",color:g,marginTop:10,marginBottom:3}}>{line.slice(4)}</div>;
      if(line.startsWith("## "))return<div key={i} style={{fontSize:16,fontWeight:"bold",color:g,marginTop:12,marginBottom:4}}>{line.slice(3)}</div>;
      if(line.startsWith("# "))return<div key={i} style={{fontSize:17,fontWeight:"bold",color:g,marginTop:14,marginBottom:5}}>{line.slice(2)}</div>;
      if(line.match(/^- /))return<div key={i} style={{paddingLeft:14,marginBottom:3}}>{"• "+line.slice(2)}</div>;
      if(line.trim()==="")return<div key={i} style={{height:6}}/>;
      const parts=line.split(/\*\*(.*?)\*\*/g);
      return<div key={i} style={{marginBottom:2}}>{parts.map((p,j)=>j%2===1?<strong key={j} style={{color:g}}>{p}</strong>:p)}</div>;
    })}</div>
  );
}

function PrayerPanel({C}){
  const [prayers,setPrayers]=useState(()=>{try{return JSON.parse(localStorage.getItem("gospel_prayers")||"[]");}catch{return[];}});
  const [text,setText]=useState("");
  const [title,setTitle]=useState("");
  function save(){
    if(!text.trim())return;
    const p={id:Date.now(),title:title.trim()||"Prayer — "+new Date().toLocaleDateString(),text:text.trim(),date:new Date().toLocaleDateString(),answered:false};
    const u=[p,...prayers];setPrayers(u);localStorage.setItem("gospel_prayers",JSON.stringify(u));setText("");setTitle("");
  }
  function toggle(id){const u=prayers.map(p=>p.id===id?{...p,answered:!p.answered}:p);setPrayers(u);localStorage.setItem("gospel_prayers",JSON.stringify(u));}
  function del(id){const u=prayers.filter(p=>p.id!==id);setPrayers(u);localStorage.setItem("gospel_prayers",JSON.stringify(u));}
  const inp={background:"rgba(255,255,255,.04)",border:"1px solid "+C.border,borderRadius:8,padding:"9px 12px",color:C.text,fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"};
  return(
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{padding:"14px 16px",borderBottom:"1px solid "+C.border,flexShrink:0}}>
        <div style={{color:C.gold,fontWeight:"bold",fontSize:13,marginBottom:10}}>New Prayer</div>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title (optional)" style={{...inp,marginBottom:8}}/>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Write your prayer…" style={{...inp,height:80,resize:"none",lineHeight:1.5,marginBottom:8}}/>
        <button onClick={save} disabled={!text.trim()} style={{background:text.trim()?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.2)",border:"none",borderRadius:8,padding:"8px 20px",color:C.bg,fontSize:13,fontWeight:"bold",cursor:text.trim()?"pointer":"not-allowed",width:"100%",fontFamily:"inherit"}}>
          Save Prayer
        </button>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"12px 16px",display:"flex",flexDirection:"column",gap:10}}>
        {prayers.length===0&&<div style={{textAlign:"center",color:C.textMuted,fontSize:13,marginTop:40,fontStyle:"italic"}}>Your prayers will appear here</div>}
        {prayers.map(p=>(
          <div key={p.id} style={{background:p.answered?"rgba(60,180,100,.06)":"rgba(255,255,255,.025)",border:"1px solid "+(p.answered?"rgba(60,180,100,.2)":C.border),borderRadius:8,padding:"12px 14px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
              <div style={{color:C.text,fontWeight:"bold",fontSize:13,flex:1}}>{p.title}</div>
              <div style={{display:"flex",gap:6,flexShrink:0,marginLeft:8}}>
                <button onClick={()=>toggle(p.id)} title={p.answered?"Unmark":"Mark answered"} style={{background:"none",border:"none",color:p.answered?"#6db86d":C.textMuted,cursor:"pointer",padding:3,display:"flex"}}>{Ic.star()}</button>
                <button onClick={()=>del(p.id)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",padding:3,display:"flex"}}>{Ic.trash()}</button>
              </div>
            </div>
            <div style={{color:C.textSec,fontSize:13,lineHeight:1.6,whiteSpace:"pre-wrap"}}>{p.text}</div>
            <div style={{color:C.textMuted,fontSize:10,marginTop:8,display:"flex",gap:8}}>
              <span>{p.date}</span>
              {p.answered&&<span style={{color:"#6db86d",fontWeight:"bold"}}>✓ Answered</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotesPanel({C,book,chapter,selectedVerses}){
  const [notes,setNotes]=useState(()=>{try{return JSON.parse(localStorage.getItem("gospel_notes")||"[]");}catch{return[];}});
  const [text,setText]=useState("");
  const [title,setTitle]=useState("");
  const ref=selectedVerses.length>0?book+" "+chapter+":"+[...selectedVerses].sort((a,b)=>a-b).join(","):book+" "+chapter;
  function save(){
    if(!text.trim())return;
    const n={id:Date.now(),title:title.trim()||ref,text:text.trim(),ref,date:new Date().toLocaleDateString()};
    const u=[n,...notes];setNotes(u);localStorage.setItem("gospel_notes",JSON.stringify(u));setText("");setTitle("");
  }
  function del(id){const u=notes.filter(n=>n.id!==id);setNotes(u);localStorage.setItem("gospel_notes",JSON.stringify(u));}
  const inp={background:"rgba(255,255,255,.04)",border:"1px solid "+C.border,borderRadius:8,padding:"9px 12px",color:C.text,fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"};
  return(
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{padding:"14px 16px",borderBottom:"1px solid "+C.border,flexShrink:0}}>
        <div style={{color:C.gold,fontWeight:"bold",fontSize:13,marginBottom:4}}>New Study Note</div>
        {selectedVerses.length>0&&<div style={{color:C.textMuted,fontSize:11,marginBottom:8}}>Linked to {ref}</div>}
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title (optional)" style={{...inp,marginBottom:8}}/>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Observations, reflections, study notes…" style={{...inp,height:80,resize:"none",lineHeight:1.5,marginBottom:8}}/>
        <button onClick={save} disabled={!text.trim()} style={{background:text.trim()?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.2)",border:"none",borderRadius:8,padding:"8px 20px",color:C.bg,fontSize:13,fontWeight:"bold",cursor:text.trim()?"pointer":"not-allowed",width:"100%",fontFamily:"inherit"}}>
          Save Note
        </button>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"12px 16px",display:"flex",flexDirection:"column",gap:10}}>
        {notes.length===0&&<div style={{textAlign:"center",color:C.textMuted,fontSize:13,marginTop:40,fontStyle:"italic"}}>Your study notes will appear here</div>}
        {notes.map(n=>(
          <div key={n.id} style={{background:"rgba(255,255,255,.025)",border:"1px solid "+C.border,borderRadius:8,padding:"12px 14px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
              <div style={{color:C.text,fontWeight:"bold",fontSize:13,flex:1}}>{n.title}</div>
              <button onClick={()=>del(n.id)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",padding:3,display:"flex",flexShrink:0,marginLeft:8}}>{Ic.trash()}</button>
            </div>
            <div style={{color:C.gold,fontSize:11,marginBottom:6}}>{n.ref}</div>
            <div style={{color:C.textSec,fontSize:13,lineHeight:1.6,whiteSpace:"pre-wrap"}}>{n.text}</div>
            <div style={{color:C.textMuted,fontSize:10,marginTop:8}}>{n.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BibleApp(){
  const [book,setBook]=useState("John");
  const [chapter,setChapter]=useState(3);
  const [verses,setVerses]=useState([]);
  const [loading,setLoading]=useState(false);
  const [loadError,setLoadError]=useState(false);
  const [translation,setTranslation]=useState("KJV");
  const [selectedVerses,setSelectedVerses]=useState([]);
  const [panel,setPanel]=useState(null);
  const [sidebarOpen,setSidebarOpen]=useState(false);
  const [themeName,setThemeName]=useState("Parchment");
  const [showThemePicker,setShowThemePicker]=useState(false);
  const [messages,setMessages]=useState([{role:"assistant",content:"Shalom! I'm your Biblical Scholar AI (powered by Gemini).\n\nClick any verse to select it, then tap a quick button or ask me anything:\n\n- Original Greek or Hebrew word meanings\n- Historical & cultural context\n- What scholars & theologians say\n- Cross-references & typology\n\nAll 66 books available. Toggle between KJV and WEB using the button in the header."}]);
  const [input,setInput]=useState("");
  const [thinking,setThinking]=useState(false);
  const [speakingIdx,setSpeakingIdx]=useState(null);
  const chatEnd=useRef(null);

  const C=THEMES[themeName];
  const panelOpen=panel!==null;
  const qBtn={background:"rgba(180,140,60,0.1)",border:"1px solid rgba(180,140,60,0.28)",color:C.gold,padding:"5px 11px",borderRadius:14,cursor:"pointer",fontSize:12,fontFamily:"inherit",whiteSpace:"nowrap"};

  async function loadVerses(b,ch,trans){
    setLoading(true);setLoadError(false);setVerses([]);setSelectedVerses([]);
    try{
      if(trans==="KJV"){const v=getKJV(b,ch);if(v&&v.length>0){setVerses(v);}else{setVerses(await fetchWEB(b,ch));}}
      else{setVerses(await fetchWEB(b,ch));}
    }catch(e){setLoadError(true);}
    setLoading(false);
  }

  useEffect(()=>{loadVerses(book,chapter,translation);},[book,chapter,translation]);
  useEffect(()=>{chatEnd.current?.scrollIntoView({behavior:"smooth"});},[messages,thinking]);

  function toggleVerse(n){setSelectedVerses(p=>p.includes(n)?p.filter(x=>x!==n):[...p,n]);}

  function getSelText(){
    return[...selectedVerses].sort((a,b)=>a-b).map(n=>{
      const v=verses.find(v=>v.verse===n);
      return v?book+" "+chapter+":"+n+" — \""+v.text+"\"":"";
    }).filter(Boolean).join("\n");
  }

  function getBestVoice(){
    const voices=window.speechSynthesis.getVoices();
    const preferred=["Google UK English Male","Microsoft George - English (United Kingdom)","Microsoft David - English (United States)","Daniel","Arthur","UK English Male"];
    for(const name of preferred){const v=voices.find(x=>x.name===name);if(v)return v;}
    return voices.find(v=>v.lang.startsWith("en")&&v.name.toLowerCase().includes("male"))||voices.find(v=>v.lang.startsWith("en"))||null;
  }

  function stripMd(t){return t.replace(/#{1,3} /g,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/^- /gm,"").trim();}

  function speakText(text,idx){
    if(speakingIdx===idx){window.speechSynthesis.cancel();setSpeakingIdx(null);return;}
    window.speechSynthesis.cancel();
    const utt=new SpeechSynthesisUtterance(stripMd(text));
    const v=getBestVoice();if(v)utt.voice=v;
    utt.rate=0.87;utt.pitch=0.9;utt.volume=1;
    utt.onend=()=>setSpeakingIdx(null);utt.onerror=()=>setSpeakingIdx(null);
    setSpeakingIdx(idx);window.speechSynthesis.speak(utt);
  }

  function speakChapter(){
    if(speakingIdx==="ch"){window.speechSynthesis.cancel();setSpeakingIdx(null);return;}
    window.speechSynthesis.cancel();
    const text=verses.map(v=>"Verse "+v.verse+". "+v.text).join(" ");
    const utt=new SpeechSynthesisUtterance(text);
    const v=getBestVoice();if(v)utt.voice=v;
    utt.rate=0.85;utt.pitch=0.88;utt.volume=1;
    utt.onend=()=>setSpeakingIdx(null);utt.onerror=()=>setSpeakingIdx(null);
    setSpeakingIdx("ch");window.speechSynthesis.speak(utt);
  }

  async function send(override){
    const raw=(override??input).trim();
    if(!raw||thinking)return;
    setInput("");
    const sel=getSelText();
    const apiContent=sel?"Selected verses:\n"+sel+"\n\nQuestion: "+raw:raw;
    const displayed=[...messages,{role:"user",content:raw}];
    setMessages(displayed);setThinking(true);
    const sys="You are a brilliant, warm Biblical scholar AI with expertise in Koine Greek and Biblical Hebrew/Aramaic, Ancient Near Eastern history, Church Fathers, Reformers, and modern scholars like N.T. Wright and F.F. Bruce. When explaining verses give original language words with transliteration, historical context, scholar references, and cross-references. Be warm and make the ancient text come alive. Currently studying: "+book+" Chapter "+chapter;
    const history=displayed.slice(1).map(m=>({role:m.role,content:m.content}));
    history[history.length-1]={role:"user",content:apiContent};
    try{
      const reply=await askGemini(history,sys,EMBEDDED_API_KEY);
      setMessages([...displayed,{role:"assistant",content:reply}]);
    }catch(e){setMessages([...displayed,{role:"assistant",content:"Error: "+e.message}]);}
    setThinking(false);
  }

  function quickAsk(p){
    const sel=getSelText();
    const full=sel?"For these verses:\n"+sel+"\n\n"+p:"For "+book+" "+chapter+": "+p;
    setPanel("ai");send(full);
  }

  function togglePanel(name){setPanel(p=>p===name?null:name);}

  const totalCh=CHAPTER_COUNTS[book]||1;
  const isNT=BOOKS.NT.includes(book);

  const hdrBtn=(active,circle=false)=>({
    background:active?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.1)",
    border:"1px solid "+(active?C.gold:C.border),
    color:active?C.bg:C.gold,
    width:34,height:34,
    borderRadius:circle?"50%":8,
    cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
    flexShrink:0,transition:"all .18s",padding:0,
  });

  return(
    <div style={{fontFamily:C.font,background:C.bg,minHeight:"100vh",width:"100vw",color:C.text,display:"flex",flexDirection:"column",margin:0,padding:0}}>
      <div style={{position:"fixed",inset:0,background:C.bodyBg,pointerEvents:"none",zIndex:0}}/>

      {showThemePicker&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",zIndex:998,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setShowThemePicker(false)}>
          <div style={{background:C.surface,border:"1px solid "+C.gold,borderRadius:14,padding:28,maxWidth:480,width:"92%"}} onClick={e=>e.stopPropagation()}>
            <div style={{color:C.gold,fontWeight:"bold",fontSize:16,marginBottom:16}}>Choose Theme</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {Object.values(THEMES).map(t=>(
                <button key={t.name} onClick={()=>{setThemeName(t.name);setShowThemePicker(false);}}
                  style={{background:t.bg,border:"2px solid "+(themeName===t.name?t.gold:t.border),borderRadius:10,padding:"12px 14px",cursor:"pointer",textAlign:"left",transition:"border-color .2s"}}>
                  <div style={{fontSize:20,marginBottom:4}}>{t.icon}</div>
                  <div style={{color:t.gold,fontWeight:"bold",fontSize:13}}>{t.name}</div>
                  <div style={{display:"flex",gap:4,marginTop:8}}>
                    {[t.bg,t.gold,t.text,t.textSec].map((col,i)=><div key={i} style={{width:12,height:12,borderRadius:"50%",background:col,border:"1px solid "+t.border}}/>)}
                  </div>
                  {themeName===t.name&&<div style={{color:t.gold,fontSize:10,marginTop:6}}>✓ Active</div>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header style={{background:C.headerBg,borderBottom:"1px solid "+C.border,padding:"0 12px",display:"flex",alignItems:"center",gap:7,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 20px rgba(0,0,0,.6)",height:52,flexShrink:0}}>
        <button onClick={()=>setSidebarOpen(o=>!o)} style={{...hdrBtn(false),background:"none",border:"none",width:30}}>
          {Ic.menu()}
        </button>

        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:9,letterSpacing:4,color:C.textMuted,textTransform:"uppercase",marginBottom:1}}>{isNT?"New Testament":"Old Testament"} · {translation}</div>
          <div style={{fontSize:17,fontWeight:"bold",color:C.gold,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{book} — Chapter {chapter}</div>
        </div>

        <div style={{display:"flex",gap:3,alignItems:"center",flexShrink:0}}>
          <button onClick={()=>chapter>1&&setChapter(c=>c-1)} disabled={chapter<=1} style={{...hdrBtn(false),borderRadius:6,opacity:chapter<=1?0.3:1,cursor:chapter<=1?"not-allowed":"pointer"}}>{Ic.left()}</button>
          <span style={{color:C.textMuted,fontSize:11,minWidth:28,textAlign:"center"}}>{chapter}/{totalCh}</span>
          <button onClick={()=>chapter<totalCh&&setChapter(c=>c+1)} disabled={chapter>=totalCh} style={{...hdrBtn(false),borderRadius:6,opacity:chapter>=totalCh?0.3:1,cursor:chapter>=totalCh?"not-allowed":"pointer"}}>{Ic.right()}</button>
        </div>

        <button onClick={()=>setTranslation(t=>t==="KJV"?"WEB":"KJV")} style={{background:"rgba(180,140,60,.1)",border:"1px solid "+C.border,color:C.gold,padding:"0 10px",height:32,borderRadius:6,cursor:"pointer",fontSize:11,fontWeight:"bold",flexShrink:0}}>
          {translation}
        </button>

        <button onClick={speakChapter} title={speakingIdx==="ch"?"Stop":"Read aloud"} style={hdrBtn(speakingIdx==="ch",true)}>
          {speakingIdx==="ch"?Ic.stop():Ic.volume()}
        </button>

        <button onClick={()=>togglePanel("ai")} title="Scholar AI" style={{...hdrBtn(panel==="ai"),width:"auto",padding:"0 10px",gap:5,fontSize:12,fontWeight:"bold"}}>
          {Ic.book()} <span>Scholar</span>
        </button>
        <button onClick={()=>togglePanel("prayer")} title="Prayer Journal" style={hdrBtn(panel==="prayer")}>
          {Ic.pray()}
        </button>
        <button onClick={()=>togglePanel("notes")} title="Study Notes" style={hdrBtn(panel==="notes")}>
          {Ic.notes()}
        </button>
        <button onClick={()=>setShowThemePicker(t=>!t)} title="Theme" style={hdrBtn(false,true)}>
          {Ic.palette()}
        </button>
      </header>

      <div style={{display:"flex",flex:1,position:"relative",zIndex:1,overflow:"hidden",width:"100%"}}>
        <aside style={{position:"fixed",top:0,left:sidebarOpen?0:-290,width:280,height:"100vh",background:C.sidebarBg,borderRight:"1px solid "+C.border,zIndex:200,transition:"left .3s ease",overflowY:"auto",paddingTop:52}}>
          <div style={{padding:"10px 16px 4px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:10,letterSpacing:3,color:C.textMuted,textTransform:"uppercase"}}>Books of the Bible</span>
            <button onClick={()=>setSidebarOpen(false)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",display:"flex"}}>{Ic.x()}</button>
          </div>
          {["OT","NT"].map(t=>(
            <div key={t}>
              <div style={{padding:"10px 18px 5px",fontSize:9,letterSpacing:4,color:C.textMuted,textTransform:"uppercase",fontWeight:"bold",borderTop:"1px solid "+C.border,marginTop:4}}>
                {t==="OT"?"Old Testament":"New Testament"}
              </div>
              {BOOKS[t].map(b=>(
                <button key={b} onClick={()=>{setBook(b);setChapter(1);setSidebarOpen(false);}}
                  style={{display:"block",width:"100%",textAlign:"left",padding:"8px 22px",background:b===book?"rgba(180,140,60,.14)":"none",border:"none",borderLeft:b===book?"3px solid "+C.gold:"3px solid transparent",color:b===book?C.gold:C.textSec,cursor:"pointer",fontSize:13.5,fontFamily:"inherit",transition:"all .15s"}}>
                  {b}
                </button>
              ))}
            </div>
          ))}
        </aside>
        {sidebarOpen&&<div onClick={()=>setSidebarOpen(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:199}}/>}

        {/* Bible Text */}
        <main style={{flex:1,padding:"18px 5vw 40px",width:"100%",minWidth:0,boxSizing:"border-box",overflowY:"auto",height:"calc(100vh - 52px)"}}>
          {selectedVerses.length>0&&(
            <div style={{background:"rgba(180,140,60,.07)",border:"1px solid rgba(180,140,60,.22)",borderRadius:8,padding:"10px 14px",marginBottom:16,display:"flex",gap:7,flexWrap:"wrap",alignItems:"center"}}>
              <span style={{color:C.textMuted,fontSize:12}}>{selectedVerses.length} verse{selectedVerses.length>1?"s":""} selected</span>
              <button style={qBtn} onClick={()=>quickAsk("Explain the meaning of these verses in depth.")}>Explain</button>
              <button style={qBtn} onClick={()=>quickAsk("What are the original Greek or Hebrew words? Give transliterations and meanings.")}>Greek/Hebrew</button>
              <button style={qBtn} onClick={()=>quickAsk("What was the historical and cultural context when this was written?")}>History</button>
              <button style={qBtn} onClick={()=>quickAsk("What have major Biblical scholars said about these verses?")}>Scholars</button>
              <button style={qBtn} onClick={()=>quickAsk("Show me cross-references and biblical connections to these verses.")}>Cross-refs</button>
              <button style={qBtn} onClick={()=>setPanel("notes")}>📝 Note</button>
              <button style={{...qBtn,background:"rgba(180,60,60,.1)",borderColor:"rgba(180,60,60,.28)",color:"#c08080"}} onClick={()=>setSelectedVerses([])}>✕ Clear</button>
            </div>
          )}
          {loading?(
            <div style={{textAlign:"center",padding:"60px 20px",color:C.textMuted}}>
              <div style={{fontSize:30,marginBottom:14}}>📖</div>
              <div style={{fontSize:14,fontStyle:"italic",color:C.textSec}}>Loading {book} {chapter}…</div>
            </div>
          ):loadError?(
            <div style={{textAlign:"center",padding:"60px 20px"}}>
              <div style={{fontSize:28,marginBottom:12}}>⚠️</div>
              <div style={{fontSize:14,color:C.textSec,marginBottom:16}}>Could not load {book} {chapter}.<br/>Check your internet connection.</div>
              <button onClick={()=>loadVerses(book,chapter,translation)} style={{...qBtn,padding:"8px 18px",fontSize:13}}>Try again</button>
            </div>
          ):(
            <div>
              <div style={{fontSize:10,letterSpacing:3,color:C.textMuted,marginBottom:14,textTransform:"uppercase"}}>
                {translation} · {verses.length} verses · Click to select
              </div>
              {verses.map(v=>{
                const sel=selectedVerses.includes(v.verse);
                return(
                  <div key={v.verse} onClick={()=>toggleVerse(v.verse)}
                    style={{display:"flex",gap:14,marginBottom:10,padding:"10px 12px",borderRadius:6,cursor:"pointer",background:sel?C.verseSelBg:"rgba(255,255,255,.01)",border:"1px solid "+(sel?C.verseSelBorder:"transparent"),transition:"all .18s",lineHeight:1.8}}>
                    <span style={{color:C.gold,fontSize:13,fontWeight:"bold",minWidth:28,marginTop:4,flexShrink:0}}>{v.verse}</span>
                    <span style={{fontSize:18,color:sel?C.verseSelText:C.verseText,letterSpacing:0.2}}>{v.text}</span>
                  </div>
                );
              })}
            </div>
          )}
        </main>

        {/* Side Panel */}
        {panelOpen&&(
          <aside style={{width:"42%",maxWidth:480,minWidth:300,borderLeft:"1px solid "+C.border,display:"flex",flexDirection:"column",height:"calc(100vh - 52px)",position:"sticky",top:52,background:C.chatBg,flexShrink:0}}>
            {/* Tab bar */}
            <div style={{display:"flex",borderBottom:"1px solid "+C.border,flexShrink:0,background:"rgba(0,0,0,.15)"}}>
              {[{key:"ai",label:"Scholar AI",icon:Ic.book()},{key:"prayer",label:"Prayer",icon:Ic.pray()},{key:"notes",label:"Notes",icon:Ic.notes()}].map(tab=>(
                <button key={tab.key} onClick={()=>setPanel(tab.key)}
                  style={{flex:1,padding:"10px 4px",background:"none",border:"none",borderBottom:panel===tab.key?"2px solid "+C.gold:"2px solid transparent",color:panel===tab.key?C.gold:C.textMuted,cursor:"pointer",fontSize:11,fontWeight:panel===tab.key?"bold":"normal",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all .2s"}}>
                  {tab.icon}{tab.label}
                </button>
              ))}
              <button onClick={()=>setPanel(null)} style={{padding:"0 12px",background:"none",border:"none",color:C.textMuted,cursor:"pointer",display:"flex",alignItems:"center",borderBottom:"2px solid transparent"}}>
                {Ic.x()}
              </button>
            </div>

            {panel==="ai"&&(
              <>
                <div style={{flex:1,overflowY:"auto",padding:"14px 14px 6px",display:"flex",flexDirection:"column",gap:11}}>
                  {messages.map((m,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",gap:8,alignItems:"flex-start"}}>
                      {m.role==="assistant"&&(
                        <div style={{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg,"+C.gold+","+C.darkGold+")",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,flexShrink:0,marginTop:2}}>✦</div>
                      )}
                      <div style={{maxWidth:"83%"}}>
                        <div style={{padding:"10px 13px",borderRadius:m.role==="user"?"15px 15px 4px 15px":"15px 15px 15px 4px",background:m.role==="user"?"rgba(180,140,60,0.15)":"rgba(255,255,255,.035)",border:m.role==="user"?"none":"1px solid "+C.border,fontSize:13.5,lineHeight:1.65,color:m.role==="user"?C.gold:C.textSec,wordBreak:"break-word"}}>
                          {m.role==="assistant"?<MdText text={m.content} gold={C.gold}/>:m.content}
                        </div>
                        {m.role==="assistant"&&(
                          <button onClick={()=>speakText(m.content,i)} style={{marginTop:4,background:"none",border:"none",color:speakingIdx===i?C.gold:C.textMuted,cursor:"pointer",fontSize:12,padding:"2px 4px",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4}}>
                            {speakingIdx===i?<>{Ic.stop(12)} stop</>:<>{Ic.volume(12)} listen</>}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {thinking&&(
                    <div style={{display:"flex",gap:8,alignItems:"center"}}>
                      <div style={{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg,"+C.gold+","+C.darkGold+")",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11}}>✦</div>
                      <span style={{color:C.textMuted,fontSize:13,fontStyle:"italic"}}>Consulting scriptures and scholars…</span>
                    </div>
                  )}
                  <div ref={chatEnd}/>
                </div>
                <div style={{padding:"10px 12px 14px",borderTop:"1px solid "+C.border,flexShrink:0}}>
                  {selectedVerses.length>0&&(
                    <div style={{fontSize:11,color:C.textMuted,marginBottom:7,padding:"3px 7px",background:"rgba(180,140,60,.05)",borderRadius:4}}>
                      📌 {book} {chapter}:{[...selectedVerses].sort((a,b)=>a-b).join(",")}
                    </div>
                  )}
                  <div style={{display:"flex",gap:7}}>
                    <textarea value={input} onChange={e=>setInput(e.target.value)}
                      onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}
                      placeholder="Ask about translation, history, theology…"
                      style={{flex:1,background:"rgba(255,255,255,.04)",border:"1px solid "+C.border,borderRadius:10,padding:"9px 12px",color:C.text,fontSize:13.5,resize:"none",height:56,fontFamily:"inherit",outline:"none",lineHeight:1.5}}/>
                    <button onClick={()=>send()} disabled={thinking||!input.trim()}
                      style={{background:thinking||!input.trim()?"rgba(180,140,60,.15)":"linear-gradient(135deg,"+C.gold+","+C.darkGold+")",border:"none",borderRadius:10,width:44,cursor:thinking||!input.trim()?"not-allowed":"pointer",color:C.bg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      {Ic.send()}
                    </button>
                  </div>
                </div>
              </>
            )}
            {panel==="prayer"&&<PrayerPanel C={C}/>}
            {panel==="notes"&&<NotesPanel C={C} book={book} chapter={chapter} selectedVerses={selectedVerses}/>}
          </aside>
        )}
      </div>

      <style>{`*{box-sizing:border-box;margin:0;padding:0}body,html{width:100%;overflow-x:hidden}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${C.scrollThumb};border-radius:3px}button:not(:disabled):hover{filter:brightness(1.15)}textarea:focus{border-color:rgba(180,140,60,.4)!important}input:focus{border-color:rgba(180,140,60,.4)!important;outline:none}`}</style>
    </div>
  );
}

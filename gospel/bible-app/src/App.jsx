import { useState, useRef, useEffect } from "react";

const KJV = {}; const KJV_UNUSED = {
"John":{
1:[
{v:1,t:"In the beginning was the Word, and the Word was with God, and the Word was God."},
{v:2,t:"The same was in the beginning with God."},
{v:3,t:"All things were made by him; and without him was not any thing made that was made."},
{v:4,t:"In him was life; and the life was the light of men."},
{v:5,t:"And the light shineth in darkness; and the darkness comprehended it not."},
{v:6,t:"There was a man sent from God, whose name was John."},
{v:7,t:"The same came for a witness, to bear witness of the Light, that all men through him might believe."},
{v:8,t:"He was not that Light, but was sent to bear witness of that Light."},
{v:9,t:"That was the true Light, which lighteth every man that cometh into the world."},
{v:10,t:"He was in the world, and the world was made by him, and the world knew him not."},
{v:11,t:"He came unto his own, and his own received him not."},
{v:12,t:"But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:"},
{v:13,t:"Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God."},
{v:14,t:"And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth."},
{v:15,t:"John bare witness of him, and cried, saying, This was he of whom I spake, He that cometh after me is preferred before me: for he was before me."},
{v:16,t:"And of his fulness have all we received, and grace for grace."},
{v:17,t:"For the law was given by Moses, but grace and truth came by Jesus Christ."},
{v:18,t:"No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him."},
{v:19,t:"And this is the record of John, when the Jews sent priests and Levites from Jerusalem to ask him, Who art thou?"},
{v:20,t:"And he confessed, and denied not; but confessed, I am not the Christ."}
],
3:[
{v:1,t:"There was a man of the Pharisees, named Nicodemus, a ruler of the Jews:"},
{v:2,t:"The same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him."},
{v:3,t:"Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God."},
{v:4,t:"Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother's womb, and be born?"},
{v:5,t:"Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God."},
{v:6,t:"That which is born of the flesh is flesh; and that which is born of the Spirit is spirit."},
{v:7,t:"Marvel not that I said unto thee, Ye must be born again."},
{v:8,t:"The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit."},
{v:9,t:"Nicodemus answered and said unto him, How can these things be?"},
{v:10,t:"Jesus answered and said unto him, Art thou a master of Israel, and knowest not these things?"},
{v:11,t:"Verily, verily, I say unto thee, We speak that we do know, and testify that we have seen; and ye receive not our witness."},
{v:12,t:"If I have told you earthly things, and ye believe not, how shall ye believe, if I tell you of heavenly things?"},
{v:13,t:"And no man hath ascended up to heaven, but he that came down from heaven, even the Son of man which is in heaven."},
{v:14,t:"And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up:"},
{v:15,t:"That whosoever believeth in him should not perish, but have eternal life."},
{v:16,t:"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."},
{v:17,t:"For God sent not his Son into the world to condemn the world; but that the world through him might be saved."},
{v:18,t:"He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God."},
{v:19,t:"And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil."},
{v:20,t:"For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved."},
{v:21,t:"But he that doeth truth cometh to the light, that his deeds may be made manifest, that they are wrought in God."},
{v:36,t:"He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him."}
],
14:[
{v:1,t:"Let not your heart be troubled: ye believe in God, believe also in me."},
{v:2,t:"In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you."},
{v:3,t:"And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also."},
{v:6,t:"Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."},
{v:15,t:"If ye love me, keep my commandments."},
{v:27,t:"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."}
]
},
"Psalms":{
23:[
{v:1,t:"The LORD is my shepherd; I shall not want."},
{v:2,t:"He maketh me to lie down in green pastures: he leadeth me beside the still waters."},
{v:3,t:"He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake."},
{v:4,t:"Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me."},
{v:5,t:"Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over."},
{v:6,t:"Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever."}
],
119:[
{v:1,t:"Blessed are the undefiled in the way, who walk in the law of the LORD."},
{v:9,t:"Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word."},
{v:11,t:"Thy word have I hid in mine heart, that I might not sin against thee."},
{v:16,t:"I will delight myself in thy statutes: I will not forget thy word."}
]
},
"Genesis":{
1:[
{v:1,t:"In the beginning God created the heaven and the earth."},
{v:2,t:"And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters."},
{v:3,t:"And God said, Let there be light: and there was light."},
{v:26,t:"And God said, Let us make man in our image, after our likeness."},
{v:27,t:"So God created man in his own image, in the image of God created he him; male and female created he them."},
{v:31,t:"And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day."}
]
},
"Romans":{
8:[
{v:1,t:"There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit."},
{v:28,t:"And we know that all things work together for good to them that love God, to them who are the called according to his purpose."},
{v:38,t:"For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,"},
{v:39,t:"Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord."}
]
},
"Matthew":{
5:[
{v:3,t:"Blessed are the poor in spirit: for theirs is the kingdom of heaven."},
{v:4,t:"Blessed are they that mourn: for they shall be comforted."},
{v:5,t:"Blessed are the meek: for they shall inherit the earth."},
{v:6,t:"Blessed are they which do hunger and thirst after righteousness: for they shall be filled."},
{v:7,t:"Blessed are the merciful: for they shall obtain mercy."},
{v:8,t:"Blessed are the pure in heart: for they shall see God."},
{v:9,t:"Blessed are the peacemakers: for they shall be called the children of God."}
]
},
"1 Corinthians":{
13:[
{v:1,t:"Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal."},
{v:4,t:"Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,"},
{v:13,t:"And now abideth faith, hope, charity, these three; but the greatest of these is charity."}
]
},
"Proverbs":{
3:[
{v:5,t:"Trust in the LORD with all thine heart; and lean not unto thine own understanding."},
{v:6,t:"In all thy ways acknowledge him, and he shall direct thy paths."},
{v:13,t:"Happy is the man that findeth wisdom, and the man that getteth understanding."}
]
}
};

const BOOKS = {
  OT:["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"],
  NT:["Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"]
};

const CHAPTER_COUNTS = {
  Genesis:50,Exodus:40,Leviticus:27,Numbers:36,Deuteronomy:34,Joshua:24,Judges:21,Ruth:4,"1 Samuel":31,"2 Samuel":24,"1 Kings":22,"2 Kings":25,"1 Chronicles":29,"2 Chronicles":36,Ezra:10,Nehemiah:13,Esther:10,Job:42,Psalms:150,Proverbs:31,Ecclesiastes:12,"Song of Solomon":8,Isaiah:66,Jeremiah:52,Lamentations:5,Ezekiel:48,Daniel:12,Hosea:14,Joel:3,Amos:9,Obadiah:1,Jonah:4,Micah:7,Nahum:3,Habakkuk:3,Zephaniah:3,Haggai:2,Zechariah:14,Malachi:4,Matthew:28,Mark:16,Luke:24,John:21,Acts:28,Romans:16,"1 Corinthians":16,"2 Corinthians":13,Galatians:6,Ephesians:6,Philippians:4,Colossians:4,"1 Thessalonians":5,"2 Thessalonians":3,"1 Timothy":6,"2 Timothy":4,Titus:3,Philemon:1,Hebrews:13,James:5,"1 Peter":5,"2 Peter":3,"1 John":5,"2 John":1,"3 John":1,Jude:1,Revelation:22
};

const THEMES = {
  Parchment: {
    name:"Parchment", icon:"📜",
    gold:"#c9a84c", darkGold:"#8a5e1a",
    bg:"#0f0c07", surface:"#1a1208", border:"#3a2a0a",
    text:"#e8d9b5", textSec:"#a08060", textMuted:"#5a3e1b",
    headerBg:"linear-gradient(135deg,#150f05,#231808,#150f05)",
    sidebarBg:"linear-gradient(180deg,#150f05,#0c0a04)",
    chatBg:"linear-gradient(180deg,#100e06,#0c0a04)",
    bodyBg:"radial-gradient(ellipse at 20% 20%,rgba(180,130,40,.07) 0%,transparent 55%),radial-gradient(ellipse at 80% 80%,rgba(100,50,10,.08) 0%,transparent 55%)",
    verseSelBg:"rgba(180,140,60,.11)", verseSelBorder:"rgba(180,140,60,.32)",
    verseText:"#c9b890", verseSelText:"#e8d9b5",
    font:"'Palatino Linotype',Palatino,'Book Antiqua',Georgia,serif",
    scrollThumb:"#2a1f0a",
  },
  Manuscript: {
    name:"Manuscript", icon:"✍️",
    gold:"#7eb8a0", darkGold:"#3d7a68",
    bg:"#060d0b", surface:"#0c1e1a", border:"#1a3530",
    text:"#c8e8e0", textSec:"#6a9e92", textMuted:"#2a5248",
    headerBg:"linear-gradient(135deg,#060d0b,#0c1e1a,#060d0b)",
    sidebarBg:"linear-gradient(180deg,#080f0d,#040908)",
    chatBg:"linear-gradient(180deg,#060e0c,#040908)",
    bodyBg:"radial-gradient(ellipse at 30% 70%,rgba(40,160,120,.06) 0%,transparent 60%),radial-gradient(ellipse at 70% 20%,rgba(20,100,80,.07) 0%,transparent 55%)",
    verseSelBg:"rgba(60,180,140,.1)", verseSelBorder:"rgba(60,180,140,.3)",
    verseText:"#8ec9b8", verseSelText:"#c8e8e0",
    font:"Georgia,'Times New Roman',serif",
    scrollThumb:"#1a3530",
  },
  Cathedral: {
    name:"Cathedral", icon:"⛪",
    gold:"#a78bca", darkGold:"#6b4f9a",
    bg:"#07050f", surface:"#150e25", border:"#2a1a4a",
    text:"#e0d8f0", textSec:"#8070a8", textMuted:"#4a3570",
    headerBg:"linear-gradient(135deg,#0a0715,#150e25,#0a0715)",
    sidebarBg:"linear-gradient(180deg,#0a0715,#05030c)",
    chatBg:"linear-gradient(180deg,#080510,#05030c)",
    bodyBg:"radial-gradient(ellipse at 25% 25%,rgba(100,60,180,.08) 0%,transparent 55%),radial-gradient(ellipse at 75% 75%,rgba(60,20,120,.09) 0%,transparent 55%)",
    verseSelBg:"rgba(140,90,200,.1)", verseSelBorder:"rgba(140,90,200,.3)",
    verseText:"#b0a0d0", verseSelText:"#e0d8f0",
    font:"Georgia,'Times New Roman',serif",
    scrollThumb:"#2a1a4a",
  },
  Daylight: {
    name:"Daylight", icon:"☀️",
    gold:"#8a6020", darkGold:"#5a3c10",
    bg:"#faf6ee", surface:"#f0e8d0", border:"#d4c49a",
    text:"#2a1a08", textSec:"#7a5830", textMuted:"#b89a5a",
    headerBg:"linear-gradient(135deg,#f0e8d0,#efe0c0,#f0e8d0)",
    sidebarBg:"linear-gradient(180deg,#f5edd8,#ede0c4)",
    chatBg:"linear-gradient(180deg,#f5edd8,#ede0c4)",
    bodyBg:"radial-gradient(ellipse at 20% 20%,rgba(220,180,80,.08) 0%,transparent 55%),radial-gradient(ellipse at 80% 80%,rgba(180,130,60,.06) 0%,transparent 55%)",
    verseSelBg:"rgba(140,96,32,.08)", verseSelBorder:"rgba(140,96,32,.28)",
    verseText:"#4a3010", verseSelText:"#2a1a08",
    font:"Georgia,'Book Antiqua',serif",
    scrollThumb:"#c4a870",
  },
  Papyrus: {
    name:"Papyrus", icon:"🏺",
    gold:"#c8884a", darkGold:"#8a4e1a",
    bg:"#0c0803", surface:"#201408", border:"#3a2010",
    text:"#f0d8a8", textSec:"#a07840", textMuted:"#5a3818",
    headerBg:"linear-gradient(135deg,#140a02,#201408,#140a02)",
    sidebarBg:"linear-gradient(180deg,#140a02,#090602)",
    chatBg:"linear-gradient(180deg,#100804,#090602)",
    bodyBg:"radial-gradient(ellipse at 20% 20%,rgba(200,130,40,.07) 0%,transparent 55%),radial-gradient(ellipse at 80% 80%,rgba(140,70,10,.09) 0%,transparent 55%)",
    verseSelBg:"rgba(200,130,60,.1)", verseSelBorder:"rgba(200,130,60,.3)",
    verseText:"#d0a870", verseSelText:"#f0d8a8",
    font:"Georgia,'Times New Roman',serif",
    scrollThumb:"#3a2010",
  },
};

// ── Friend codes ─────────────────────────────────────────────────────────────
const CODE_ADJ  = ["BOLD","CALM","DEEP","FIRM","FREE","GLAD","HOLY","JUST","KIND","MEEK","PURE","SAFE","TRUE","WARM","WISE","BRAVE","CLEAR","FAITH","GRACE","LIGHT","NOBLE","PEACE","QUIET","STILL","SWIFT"];
const CODE_NOUN = ["ARK","DAWN","DOVE","FIRE","GATE","GOLD","HILL","HOPE","LAMB","LAMP","LION","PALM","PATH","RAIN","ROCK","ROSE","SALT","SEED","STAR","VINE","WAVE","WING","WORD","CEDAR","FLAME","RIVER","SHORE","STONE","WATER"];
function generateCode() { return CODE_ADJ[Math.floor(Math.random()*CODE_ADJ.length)] + CODE_NOUN[Math.floor(Math.random()*CODE_NOUN.length)]; }

// ── Persistent storage helpers ────────────────────────────────────────────────
async function sGet(key, shared=false) {
  try { const r = await window.storage.get(key, shared); return r ? JSON.parse(r.value) : null; } catch { return null; }
}
async function sSet(key, val, shared=false) {
  try { await window.storage.set(key, JSON.stringify(val), shared); } catch {}
}

// ── Gemini AI (original, unchanged) ──────────────────────────────────────────
async function askGemini(history, systemPrompt, userKey) {
  const apiKey = userKey || "";
  const models = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-2.0-flash-lite"];
  let lastErr = null;
  for (const model of models) {
    try {
      const url = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent?key=" + apiKey;
      const contents = history.map(m => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] }));
      const res = await fetch(url, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ system_instruction: { parts: [{ text: systemPrompt }] }, contents, generationConfig: { temperature: 0.7, maxOutputTokens: 4096 } })
      });
      if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e?.error?.message || "HTTP " + res.status); }
      const data = await res.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("Empty response");
      return text;
    } catch(e) { lastErr = e; }
  }
  throw lastErr;
}

async function fetchWEB(book, chapter) {
  const slug = book.toLowerCase().replace(/ /g, "+");
  const res = await fetch("https://bible-api.com/" + slug + "+" + chapter + "?translation=web");
  if (!res.ok) throw new Error("API error");
  const data = await res.json();
  if (!data.verses || data.verses.length === 0) throw new Error("No verses returned");
  return data.verses.map(v => ({ verse: v.verse, text: v.text.trim() }));
}

function getKJV(book, chapter) {
  return KJV[book]?.[chapter]?.map(v => ({ verse: v.v, text: v.t })) || null;
}

// ── Markdown renderer (original, unchanged) ───────────────────────────────────
function MdText({ text, gold }) {
  const g = gold || "#c9a84c";
  return (
    <div>
      {text.split("\n").map((line, i) => {
        if (line.startsWith("### ")) return <div key={i} style={{fontSize:15,fontWeight:"bold",color:g,marginTop:10,marginBottom:3}}>{line.slice(4)}</div>;
        if (line.startsWith("## "))  return <div key={i} style={{fontSize:16,fontWeight:"bold",color:g,marginTop:12,marginBottom:4}}>{line.slice(3)}</div>;
        if (line.startsWith("# "))   return <div key={i} style={{fontSize:17,fontWeight:"bold",color:g,marginTop:14,marginBottom:5}}>{line.slice(2)}</div>;
        if (line.match(/^- /))       return <div key={i} style={{paddingLeft:14,marginBottom:3}}>{"\u2022 " + line.slice(2)}</div>;
        if (line.trim() === "")      return <div key={i} style={{height:6}} />;
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return <div key={i} style={{marginBottom:2}}>{parts.map((p, j) => j%2===1 ? <strong key={j} style={{color:g}}>{p}</strong> : p)}</div>;
      })}
    </div>
  );
}

// ── Prayer Panel ──────────────────────────────────────────────────────────────
function PrayerPanel({ C, setShareModal }) {
  const [prayers, setPrayers] = useState(() => { try { return JSON.parse(localStorage.getItem("gospel_prayers") || "[]"); } catch { return []; } });
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  function save() {
    if (!text.trim()) return;
    const p = { id: Date.now(), title: title.trim() || "Prayer — " + new Date().toLocaleDateString(), text: text.trim(), date: new Date().toLocaleDateString(), answered: false };
    const u = [p, ...prayers]; setPrayers(u); localStorage.setItem("gospel_prayers", JSON.stringify(u)); setText(""); setTitle("");
  }
  function toggle(id) { const u = prayers.map(p => p.id===id ? {...p, answered:!p.answered} : p); setPrayers(u); localStorage.setItem("gospel_prayers", JSON.stringify(u)); }
  function del(id) { const u = prayers.filter(p => p.id!==id); setPrayers(u); localStorage.setItem("gospel_prayers", JSON.stringify(u)); }
  const inp = { background:"rgba(255,255,255,.04)", border:"1px solid "+C.border, borderRadius:8, padding:"9px 12px", color:C.text, fontSize:13, fontFamily:"inherit", outline:"none", width:"100%", boxSizing:"border-box" };
  return (
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{padding:"14px 16px",borderBottom:"1px solid "+C.border,flexShrink:0}}>
        <div style={{color:C.gold,fontWeight:"bold",fontSize:13,marginBottom:10}}>New Prayer</div>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title (optional)" style={{...inp,marginBottom:8}} />
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Write your prayer…" style={{...inp,height:80,resize:"none",lineHeight:1.5,marginBottom:8}} />
        <button onClick={save} disabled={!text.trim()} style={{background:text.trim()?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.2)",border:"none",borderRadius:8,padding:"8px 20px",color:C.bg,fontSize:13,fontWeight:"bold",cursor:text.trim()?"pointer":"not-allowed",width:"100%",fontFamily:"inherit"}}>
          Save Prayer
        </button>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"12px 16px",display:"flex",flexDirection:"column",gap:10}}>
        {prayers.length===0 && <div style={{textAlign:"center",color:C.textMuted,fontSize:13,marginTop:40,fontStyle:"italic"}}>Your prayers will appear here</div>}
        {prayers.map(p => (
          <div key={p.id} style={{background:p.answered?"rgba(60,180,100,.06)":"rgba(255,255,255,.025)",border:"1px solid "+(p.answered?"rgba(60,180,100,.2)":C.border),borderRadius:8,padding:"12px 14px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
              <div style={{color:C.text,fontWeight:"bold",fontSize:13,flex:1}}>{p.title}</div>
              <div style={{display:"flex",gap:5,flexShrink:0,marginLeft:8}}>
                <button onClick={()=>setShareModal({type:"prayer",payload:{title:p.title,body:p.text}})} title="Share with a friend" style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",padding:3,fontSize:14}}>✉</button>
                <button onClick={()=>toggle(p.id)} title={p.answered?"Unmark":"Mark answered"} style={{background:"none",border:"none",color:p.answered?"#6db86d":C.textMuted,cursor:"pointer",padding:3,fontSize:14}}>★</button>
                <button onClick={()=>del(p.id)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",padding:3,fontSize:14}}>🗑</button>
              </div>
            </div>
            <div style={{color:C.textSec,fontSize:13,lineHeight:1.6,whiteSpace:"pre-wrap"}}>{p.text}</div>
            <div style={{color:C.textMuted,fontSize:10,marginTop:8,display:"flex",gap:8}}>
              <span>{p.date}</span>
              {p.answered && <span style={{color:"#6db86d",fontWeight:"bold"}}>✓ Answered</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Notes Panel ───────────────────────────────────────────────────────────────
function NotesPanel({ C, book, chapter, selectedVerses, setShareModal }) {
  const [notes, setNotes] = useState(() => { try { return JSON.parse(localStorage.getItem("gospel_notes") || "[]"); } catch { return []; } });
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const ref = selectedVerses.length>0 ? book+" "+chapter+":"+[...selectedVerses].sort((a,b)=>a-b).join(",") : book+" "+chapter;
  function save() {
    if (!text.trim()) return;
    const n = { id: Date.now(), title: title.trim()||ref, text: text.trim(), ref, date: new Date().toLocaleDateString() };
    const u = [n, ...notes]; setNotes(u); localStorage.setItem("gospel_notes", JSON.stringify(u)); setText(""); setTitle("");
  }
  function del(id) { const u = notes.filter(n=>n.id!==id); setNotes(u); localStorage.setItem("gospel_notes", JSON.stringify(u)); }
  const inp = { background:"rgba(255,255,255,.04)", border:"1px solid "+C.border, borderRadius:8, padding:"9px 12px", color:C.text, fontSize:13, fontFamily:"inherit", outline:"none", width:"100%", boxSizing:"border-box" };
  return (
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{padding:"14px 16px",borderBottom:"1px solid "+C.border,flexShrink:0}}>
        <div style={{color:C.gold,fontWeight:"bold",fontSize:13,marginBottom:4}}>New Study Note</div>
        {selectedVerses.length>0 && <div style={{color:C.textMuted,fontSize:11,marginBottom:8}}>Linked to {ref}</div>}
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title (optional)" style={{...inp,marginBottom:8}} />
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Observations, reflections, study notes…" style={{...inp,height:80,resize:"none",lineHeight:1.5,marginBottom:8}} />
        <button onClick={save} disabled={!text.trim()} style={{background:text.trim()?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.2)",border:"none",borderRadius:8,padding:"8px 20px",color:C.bg,fontSize:13,fontWeight:"bold",cursor:text.trim()?"pointer":"not-allowed",width:"100%",fontFamily:"inherit"}}>
          Save Note
        </button>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"12px 16px",display:"flex",flexDirection:"column",gap:10}}>
        {notes.length===0 && <div style={{textAlign:"center",color:C.textMuted,fontSize:13,marginTop:40,fontStyle:"italic"}}>Your study notes will appear here</div>}
        {notes.map(n => (
          <div key={n.id} style={{background:"rgba(255,255,255,.025)",border:"1px solid "+C.border,borderRadius:8,padding:"12px 14px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
              <div style={{color:C.text,fontWeight:"bold",fontSize:13,flex:1}}>{n.title}</div>
              <div style={{display:"flex",gap:5,flexShrink:0,marginLeft:8}}>
                <button onClick={()=>setShareModal({type:"note",payload:{title:n.title,body:n.text}})} title="Share with a friend" style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",padding:3,fontSize:14}}>✉</button>
                <button onClick={()=>del(n.id)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",padding:3,fontSize:14}}>🗑</button>
              </div>
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

// ── Share Modal ───────────────────────────────────────────────────────────────
function ShareModal({ C, type, payload, myCode, friends, onClose }) {
  const [to, setTo] = useState(null);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("idle");
  const typeLabel = { prayer:"🙏 Prayer", note:"📝 Study Note", ai:"✦ Scholar AI Insight" }[type];
  const preview = (payload?.body || "").slice(0, 200) + ((payload?.body||"").length>200?"…":"");
  async function doSend() {
    if (!to) return; setStatus("sending");
    const msg = { id: Date.now()+Math.random(), type, from: myCode, title: payload?.title||typeLabel, body: payload?.body||"", note: note.trim(), date: new Date().toLocaleDateString(), read: false };
    try { const ex = await sGet("inbox:"+to, true) || []; await sSet("inbox:"+to, [msg,...ex.slice(0,99)], true); setStatus("done"); setTimeout(onClose, 1400); }
    catch { setStatus("err"); }
  }
  const inp = { background:"rgba(255,255,255,.04)", border:"1px solid "+C.border, borderRadius:8, padding:"8px 11px", color:C.text, fontSize:13, fontFamily:"inherit", outline:"none", width:"100%", boxSizing:"border-box" };
  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.88)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div onClick={e=>e.stopPropagation()} style={{background:C.surface,border:"1px solid "+C.gold,borderRadius:14,padding:24,width:"min(440px,94vw)",maxHeight:"88vh",overflowY:"auto",fontFamily:C.font}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
          <div style={{color:C.gold,fontWeight:"bold",fontSize:15}}>Share with a Friend</div>
          <button onClick={onClose} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",fontSize:18}}>✕</button>
        </div>
        <div style={{background:"rgba(255,255,255,.03)",border:"1px solid "+C.border,borderRadius:8,padding:"10px 12px",marginBottom:16}}>
          <div style={{fontSize:11,color:C.gold,fontWeight:"bold",marginBottom:5}}>{typeLabel}</div>
          <div style={{fontSize:12.5,color:C.textSec,lineHeight:1.6,maxHeight:72,overflow:"hidden"}}>{preview}</div>
        </div>
        {friends.length===0
          ? <div style={{textAlign:"center",color:C.textMuted,fontSize:13,padding:"20px 0"}}>No friends yet. Add friends in the <strong style={{color:C.gold}}>Community</strong> tab.</div>
          : <>
            <div style={{fontSize:11,color:C.textMuted,marginBottom:8,letterSpacing:1,textTransform:"uppercase"}}>Send to:</div>
            <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:12,maxHeight:160,overflowY:"auto"}}>
              {friends.map(f=>(
                <button key={f.code} onClick={()=>setTo(f.code)}
                  style={{background:to===f.code?"rgba(180,140,60,.14)":"rgba(255,255,255,.02)",border:"1px solid "+(to===f.code?C.gold:C.border),borderRadius:8,padding:"9px 12px",cursor:"pointer",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <div style={{color:C.text,fontWeight:"bold",fontSize:13}}>{f.name}</div>
                    <div style={{color:C.textMuted,fontSize:10,fontFamily:"monospace",marginTop:1}}>{f.code}</div>
                  </div>
                  {to===f.code && <span style={{color:C.gold,fontSize:16}}>✓</span>}
                </button>
              ))}
            </div>
            <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Add a personal message (optional)…"
              style={{...inp,height:60,resize:"none",lineHeight:1.5,marginBottom:12}} />
            <button onClick={doSend} disabled={!to||status!=="idle"}
              style={{width:"100%",padding:"11px",borderRadius:9,border:"none",cursor:to&&status==="idle"?"pointer":"not-allowed",fontFamily:C.font,fontWeight:"bold",fontSize:14,
                background:status==="done"?"rgba(60,180,100,.25)":to&&status==="idle"?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.15)",
                color:status==="done"?"#6db86d":C.bg}}>
              {status==="idle"?"✉ Send":status==="sending"?"Sending…":status==="done"?"✓ Sent!":"Error — try again"}
            </button>
          </>
        }
      </div>
    </div>
  );
}

// ── Community Panel ───────────────────────────────────────────────────────────
function CommunityPanel({ C, myCode, friends, setFriends, inbox, setInbox }) {
  const [tab, setTab] = useState("friends");
  const [newCode, setNewCode] = useState("");
  const [newName, setNewName] = useState("");
  const [addErr, setAddErr] = useState("");
  const [addOk, setAddOk] = useState("");
  const [copied, setCopied] = useState(false);
  const [viewMsg, setViewMsg] = useState(null);
  const unread = inbox.filter(m=>!m.read).length;

  function addFriend() {
    const code = newCode.trim().toUpperCase().replace(/[^A-Z]/g,"");
    if (code.length<4) { setAddErr("Code must be at least 4 letters"); return; }
    if (code===myCode) { setAddErr("That's your own code!"); return; }
    if (friends.find(f=>f.code===code)) { setAddErr("Already added"); return; }
    const u = [...friends, { code, name: newName.trim()||code, addedAt: Date.now() }];
    setFriends(u); sSet("friends", u);
    setNewCode(""); setNewName(""); setAddErr("");
    setAddOk("Friend added!"); setTimeout(()=>setAddOk(""), 2000);
  }
  function removeFriend(code) { const u=friends.filter(f=>f.code!==code); setFriends(u); sSet("friends",u); }
  async function markRead(msg) { const u=inbox.map(m=>m.id===msg.id?{...m,read:true}:m); setInbox(u); await sSet("inbox:"+myCode,u,true); setViewMsg({...msg,read:true}); }
  async function deleteMsg(id) { const u=inbox.filter(m=>m.id!==id); setInbox(u); await sSet("inbox:"+myCode,u,true); setViewMsg(null); }
  function copyCode() { navigator.clipboard.writeText(myCode).catch(()=>{}); setCopied(true); setTimeout(()=>setCopied(false),2000); }

  const inp = { background:"rgba(255,255,255,.04)", border:"1px solid "+C.border, borderRadius:8, padding:"8px 11px", color:C.text, fontSize:13, fontFamily:"inherit", outline:"none", boxSizing:"border-box" };
  const tabS = k => ({ flex:1,padding:"9px 4px",background:"none",border:"none",borderBottom:tab===k?"2px solid "+C.gold:"2px solid transparent",color:tab===k?C.gold:C.textMuted,cursor:"pointer",fontSize:11,fontWeight:tab===k?"bold":"normal",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:4 });
  const typeIcon = t => t==="prayer"?"🙏":t==="note"?"📝":"✦";
  const typeColor = t => t==="prayer"?"#6db86d":t==="note"?C.gold:"#a78bca";

  return (
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{padding:"12px 16px",borderBottom:"1px solid "+C.border,flexShrink:0,background:"rgba(180,140,60,.04)"}}>
        <div style={{fontSize:10,color:C.textMuted,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>Your Prayer Code</div>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontFamily:"monospace",fontSize:20,fontWeight:"bold",color:C.gold,letterSpacing:3,flex:1}}>{myCode}</span>
          <button onClick={copyCode} style={{background:"rgba(180,140,60,.1)",border:"1px solid "+C.border,borderRadius:6,padding:"5px 10px",color:C.gold,cursor:"pointer",fontSize:11,fontFamily:"inherit"}}>{copied?"✓ Copied":"⎘ Copy"}</button>
        </div>
        <div style={{fontSize:11,color:C.textMuted,marginTop:3}}>Share this code so friends can send you prayers, notes & AI insights</div>
      </div>

      <div style={{display:"flex",borderBottom:"1px solid "+C.border,flexShrink:0,background:"rgba(0,0,0,.1)"}}>
        <button style={tabS("friends")} onClick={()=>setTab("friends")}>👥 Friends ({friends.length})</button>
        <button style={tabS("inbox")} onClick={()=>{setTab("inbox");setViewMsg(null);}}>
          📬 Inbox {unread>0&&<span style={{background:"#c05050",color:"#fff",borderRadius:10,fontSize:10,padding:"0 5px",fontWeight:"bold"}}>{unread}</span>}
        </button>
      </div>

      <div style={{flex:1,overflowY:"auto"}}>
        {tab==="friends" && (
          <div style={{padding:"14px 16px",display:"flex",flexDirection:"column",gap:12}}>
            <div style={{background:"rgba(255,255,255,.02)",border:"1px solid "+C.border,borderRadius:10,padding:"12px 14px"}}>
              <div style={{color:C.gold,fontWeight:"bold",fontSize:12,marginBottom:10}}>Add a Friend by Code</div>
              <input value={newName} onChange={e=>setNewName(e.target.value)} placeholder="Nickname (optional)" style={{...inp,width:"100%",marginBottom:7}} />
              <div style={{display:"flex",gap:7}}>
                <input value={newCode} onChange={e=>{setNewCode(e.target.value.toUpperCase().replace(/[^A-Z]/g,""));setAddErr("");}}
                  placeholder="e.g. BOLDROCK or GRACESTAR"
                  style={{...inp,flex:1,fontFamily:"monospace",textTransform:"uppercase"}}
                  onKeyDown={e=>e.key==="Enter"&&addFriend()} />
                <button onClick={addFriend} style={{background:"linear-gradient(135deg,"+C.gold+","+C.darkGold+")",border:"none",borderRadius:8,padding:"0 14px",color:C.bg,fontWeight:"bold",cursor:"pointer",fontSize:13,fontFamily:"inherit"}}>Add</button>
              </div>
              {addErr&&<div style={{color:"#d08080",fontSize:12,marginTop:6}}>{addErr}</div>}
              {addOk&&<div style={{color:"#6db86d",fontSize:12,marginTop:6}}>✓ {addOk}</div>}
            </div>
            {friends.length===0
              ? <div style={{textAlign:"center",color:C.textMuted,fontSize:13,marginTop:16,fontStyle:"italic"}}>No friends yet. Add someone by their code above.</div>
              : friends.map(f=>(
                <div key={f.code} style={{background:"rgba(255,255,255,.025)",border:"1px solid "+C.border,borderRadius:9,padding:"11px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div>
                    <div style={{color:C.text,fontWeight:"bold",fontSize:13}}>{f.name}</div>
                    <div style={{color:C.textMuted,fontSize:10,fontFamily:"monospace",marginTop:2}}>{f.code}</div>
                  </div>
                  <button onClick={()=>removeFriend(f.code)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",fontSize:14,padding:4}}>🗑</button>
                </div>
              ))
            }
          </div>
        )}

        {tab==="inbox" && !viewMsg && (
          <div style={{padding:"12px 16px",display:"flex",flexDirection:"column",gap:9}}>
            {inbox.length===0
              ? <div style={{textAlign:"center",color:C.textMuted,fontSize:13,marginTop:40,fontStyle:"italic"}}>Your inbox is empty.<br/>When friends share with you, it'll appear here.</div>
              : inbox.map(m=>(
                <div key={m.id} onClick={()=>markRead(m)}
                  style={{background:m.read?"rgba(255,255,255,.02)":"rgba(180,140,60,.06)",border:"1px solid "+(m.read?C.border:"rgba(180,140,60,.3)"),borderRadius:9,padding:"11px 13px",cursor:"pointer",position:"relative"}}>
                  {!m.read&&<div style={{position:"absolute",top:9,right:9,width:7,height:7,borderRadius:"50%",background:C.gold}} />}
                  <div style={{display:"flex",gap:7,alignItems:"center",marginBottom:4}}>
                    <span style={{fontSize:15}}>{typeIcon(m.type)}</span>
                    <div>
                      <span style={{fontSize:11,color:typeColor(m.type),fontWeight:"bold"}}>{m.type==="prayer"?"Prayer":m.type==="note"?"Study Note":"Scholar AI"}</span>
                      <span style={{fontSize:10,color:C.textMuted,marginLeft:7}}>from <code style={{fontFamily:"monospace"}}>{m.from}</code> · {m.date}</span>
                    </div>
                  </div>
                  <div style={{color:C.text,fontWeight:"bold",fontSize:13,marginBottom:2}}>{m.title}</div>
                  <div style={{color:C.textSec,fontSize:12,lineHeight:1.5,overflow:"hidden",maxHeight:38,WebkitLineClamp:2,WebkitBoxOrient:"vertical",display:"-webkit-box"}}>{(m.body||"").slice(0,140)}</div>
                  {m.note&&<div style={{marginTop:5,color:C.textMuted,fontSize:11,fontStyle:"italic"}}>"{m.note}"</div>}
                </div>
              ))
            }
          </div>
        )}

        {tab==="inbox" && viewMsg && (
          <div style={{padding:"14px 16px",display:"flex",flexDirection:"column",gap:12}}>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>setViewMsg(null)} style={{background:"rgba(180,140,60,.1)",border:"1px solid "+C.border,borderRadius:6,padding:"5px 10px",color:C.gold,cursor:"pointer",fontSize:12,fontFamily:"inherit"}}>← Back</button>
              <button onClick={()=>deleteMsg(viewMsg.id)} style={{background:"rgba(180,60,60,.08)",border:"1px solid rgba(180,60,60,.2)",borderRadius:6,padding:"5px 10px",color:"#c08080",cursor:"pointer",fontSize:12,fontFamily:"inherit",marginLeft:"auto"}}>Delete</button>
            </div>
            <div style={{display:"flex",gap:8,alignItems:"center"}}>
              <span style={{fontSize:18}}>{typeIcon(viewMsg.type)}</span>
              <div>
                <div style={{color:typeColor(viewMsg.type),fontWeight:"bold",fontSize:12}}>{viewMsg.type==="prayer"?"Prayer":viewMsg.type==="note"?"Study Note":"Scholar AI Insight"}</div>
                <div style={{color:C.textMuted,fontSize:11}}>from <code style={{fontFamily:"monospace"}}>{viewMsg.from}</code> · {viewMsg.date}</div>
              </div>
            </div>
            <div style={{color:C.gold,fontWeight:"bold",fontSize:16}}>{viewMsg.title}</div>
            {viewMsg.note&&<div style={{background:"rgba(180,140,60,.05)",border:"1px solid rgba(180,140,60,.15)",borderRadius:7,padding:"9px 12px",color:C.textSec,fontSize:13,fontStyle:"italic"}}>"{viewMsg.note}"</div>}
            <div style={{color:C.text,fontSize:14,lineHeight:1.8,whiteSpace:"pre-wrap"}}>
              {viewMsg.type==="ai" ? <MdText text={viewMsg.body||""} gold={C.gold} /> : viewMsg.body}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function BibleApp() {
  const [book, setBook] = useState("John");
  const [chapter, setChapter] = useState(3);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [translation, setTranslation] = useState("KJV");
  const [selectedVerses, setSelectedVerses] = useState([]);
  // panel: null | "ai" | "prayer" | "notes" | "community"
  const [panel, setPanel] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [themeName, setThemeName] = useState("Parchment");
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [layoutMode, setLayoutMode] = useState(() => localStorage.getItem("gospel_layout") || null); // null = show picker
  // Scholar AI (original state)
  const [messages, setMessages] = useState([{role:"assistant",content:"Shalom! I'm your Biblical Scholar AI (powered by Gemini).\n\nClick any verse to select it, then tap a quick button or ask me anything:\n\n- Original Greek or Hebrew word meanings\n- Historical & cultural context\n- What scholars & theologians say\n- Cross-references & typology\n\nAll 66 books available. Toggle between KJV and WEB (World English Bible) using the button in the header."}]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  // Ad system
  const [adUseCount, setAdUseCount] = useState(() => { try { return parseInt(localStorage.getItem("gospel_ad_uses")||"0"); } catch { return 0; } });
  const [adDeclineCount, setAdDeclineCount] = useState(() => { try { return parseInt(localStorage.getItem("gospel_ad_declines")||"0"); } catch { return 0; } });
  const [adSuppressUntil, setAdSuppressUntil] = useState(() => { try { return parseInt(localStorage.getItem("gospel_ad_suppress")||"0"); } catch { return 0; } });
  const [showAdPopup, setShowAdPopup] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [speakingIdx, setSpeakingIdx] = useState(null);
  const chatEnd = useRef(null);
  // Social
  const [myCode] = useState(() => { let c=localStorage.getItem("gospel_mycode"); if(!c){c=generateCode();localStorage.setItem("gospel_mycode",c);} return c; });
  const [friends, setFriends] = useState([]);
  const [inbox, setInbox] = useState([]);
  const [shareModal, setShareModal] = useState(null);
  const pollRef = useRef(null);

  const C = THEMES[themeName];
  const panelOpen = panel !== null;
  const unread = inbox.filter(m=>!m.read).length;
  const qBtn = { background:"rgba(180,140,60,0.1)", border:"1px solid rgba(180,140,60,0.28)", color:C.gold, padding:"5px 11px", borderRadius:14, cursor:"pointer", fontSize:12, fontFamily:"inherit", whiteSpace:"nowrap" };

  useEffect(() => {
    sGet("friends").then(f=>{ if(f) setFriends(f); });
    sGet("inbox:"+myCode, true).then(msgs=>{ if(msgs) setInbox(msgs); });
  }, [myCode]);

  useEffect(() => {
    pollRef.current = setInterval(()=>{ sGet("inbox:"+myCode,true).then(msgs=>{ if(msgs) setInbox(msgs); }); }, 30000);
    return ()=>clearInterval(pollRef.current);
  }, [myCode]);

  useEffect(() => { document.title = "Gospl"; }, []);

  async function loadVerses(b, ch, trans) {
    setLoading(true); setLoadError(false); setVerses([]); setSelectedVerses([]);
    try {
      if (trans === "KJV") { const v=getKJV(b,ch); if(v&&v.length>0){setVerses(v);}else{setVerses(await fetchWEB(b,ch));} }
      else { setVerses(await fetchWEB(b,ch)); }
    } catch(e) { setLoadError(true); }
    setLoading(false);
  }

  useEffect(() => { loadVerses(book, chapter, translation); }, [book, chapter, translation]);
  useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, thinking]);

  function toggleVerse(n) { setSelectedVerses(p => p.includes(n) ? p.filter(x=>x!==n) : [...p,n]); }
  function getSelText() {
    return [...selectedVerses].sort((a,b)=>a-b).map(n => { const v=verses.find(v=>v.verse===n); return v?book+" "+chapter+":"+n+" - \""+v.text+"\"":""; }).filter(Boolean).join("\n");
  }
  function getBestVoice() {
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
    try{const reply=await askGemini(history,sys,"");setMessages([...displayed,{role:"assistant",content:reply}]);maybeShowAd();}
    catch(e){setMessages([...displayed,{role:"assistant",content:"Error: "+e.message+"\n\nYou can add your own Gemini key at aistudio.google.com/apikey using the Key button."}]);}
    setThinking(false);
  }
  function quickAsk(p){const sel=getSelText();const full=sel?"For these verses:\n"+sel+"\n\n"+p:"For "+book+" "+chapter+": "+p;setPanel("ai");send(full);}
  function togglePanel(name){setPanel(p=>p===name?null:name);}
  function maybeShowAd(){
    const sup=parseInt(localStorage.getItem("gospel_ad_suppress")||"0");
    const uses=parseInt(localStorage.getItem("gospel_ai_sends")||"0");
    if(uses<sup&&sup>0) return;
    const newSends=uses+1;
    localStorage.setItem("gospel_ai_sends",String(newSends));
    const declines=parseInt(localStorage.getItem("gospel_ad_declines")||"0");
    if(declines>=3){
      const suppressedUntil=parseInt(localStorage.getItem("gospel_ad_suppress")||"0");
      if(newSends<=suppressedUntil) return;
    }
    if(newSends===1||(newSends>1&&(newSends-1)%3===0)){setShowAdPopup(true);}
  }

  const totalCh=CHAPTER_COUNTS[book]||1;
  const isNT=BOOKS.NT.includes(book);

  return(
    <div style={{fontFamily:C.font,background:C.bg,height:"100vh",width:"100vw",color:C.text,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{position:"fixed",inset:0,background:C.bodyBg,pointerEvents:"none",zIndex:0}}/>

      {shareModal&&<ShareModal C={C} type={shareModal.type} payload={shareModal.payload} myCode={myCode} friends={friends} onClose={()=>setShareModal(null)}/>}

      {/* ── Layout Mode Picker (first launch) ── */}
      {!layoutMode&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.96)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:C.surface,border:"1px solid "+C.gold,borderRadius:20,padding:40,maxWidth:480,width:"92%",textAlign:"center",fontFamily:C.font}}>
            <div style={{fontSize:38,marginBottom:12}}>✝</div>
            <div style={{color:C.gold,fontSize:22,fontWeight:"bold",marginBottom:6,letterSpacing:1}}>The Gospel</div>
            <div style={{color:C.textSec,fontSize:13,marginBottom:32,lineHeight:1.7}}>Choose how you'd like to read today</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              <button onClick={()=>{setLayoutMode("phone");localStorage.setItem("gospel_layout","phone");}}
                style={{background:"rgba(255,255,255,.04)",border:"2px solid "+C.border,borderRadius:14,padding:"24px 16px",cursor:"pointer",textAlign:"center",transition:"border-color .2s",fontFamily:C.font}}>
                <div style={{fontSize:36,marginBottom:10}}>📱</div>
                <div style={{color:C.gold,fontWeight:"bold",fontSize:15,marginBottom:6}}>Phone</div>
                <div style={{color:C.textMuted,fontSize:11,lineHeight:1.5}}>Single column,<br/>larger text,<br/>touch-friendly</div>
              </button>
              <button onClick={()=>{setLayoutMode("laptop");localStorage.setItem("gospel_layout","laptop");}}
                style={{background:"rgba(255,255,255,.04)",border:"2px solid "+C.border,borderRadius:14,padding:"24px 16px",cursor:"pointer",textAlign:"center",transition:"border-color .2s",fontFamily:C.font}}>
                <div style={{fontSize:36,marginBottom:10}}>💻</div>
                <div style={{color:C.gold,fontWeight:"bold",fontSize:15,marginBottom:6}}>Laptop / Desktop</div>
                <div style={{color:C.textMuted,fontSize:11,lineHeight:1.5}}>Full width,<br/>side-by-side panels,<br/>compact header</div>
              </button>
            </div>
            <div style={{color:C.textMuted,fontSize:11,marginTop:20}}>You can change this anytime in settings</div>
          </div>
        </div>
      )}

      {/* Ad Popup */}
      {showAdPopup&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:C.surface,border:"1px solid "+C.gold,borderRadius:16,padding:32,maxWidth:440,width:"92%",textAlign:"center",fontFamily:C.font}}>
            <div style={{fontSize:32,marginBottom:10}}>✝</div>
            <div style={{color:C.gold,fontSize:17,fontWeight:"bold",marginBottom:8}}>Support the Gospel</div>
            <div style={{color:C.textSec,fontSize:13,lineHeight:1.7,marginBottom:20}}>
              Would you like to watch a short ad?<br/>
              <strong style={{color:C.gold}}>100% of ad proceeds</strong> go directly toward developing this app and spreading the Gospel to the world. 🌍
            </div>
            <div style={{display:"flex",gap:10,flexDirection:"column"}}>
              <button onClick={()=>{
                setShowAdPopup(false);
                window.open("about:blank","_blank");
                const newCount = adUseCount + 1;
                setAdUseCount(newCount); localStorage.setItem("gospel_ad_uses", String(newCount));
                setAdDeclineCount(0); localStorage.setItem("gospel_ad_declines","0");
              }} style={{background:"linear-gradient(135deg,"+C.gold+","+C.darkGold+")",border:"none",borderRadius:10,padding:"13px",color:C.bg,fontSize:14,fontWeight:"bold",cursor:"pointer",fontFamily:"inherit"}}>
                Yes, watch an ad ✦
              </button>
              <button onClick={()=>{
                setShowAdPopup(false);
                const newDeclines = adDeclineCount + 1;
                setAdDeclineCount(newDeclines); localStorage.setItem("gospel_ad_declines", String(newDeclines));
                if (newDeclines >= 3) {
                  const suppressUntil = adUseCount + 20;
                  setAdSuppressUntil(suppressUntil); localStorage.setItem("gospel_ad_suppress", String(suppressUntil));
                }
              }} style={{background:"rgba(255,255,255,.07)",border:"1px solid "+C.border,borderRadius:10,padding:"12px",color:C.text,fontSize:13,cursor:"pointer",fontFamily:"inherit",fontWeight:"500"}}>
                No thanks{adDeclineCount===2?" (won't ask again for a while)":""}
              </button>
              <button onClick={()=>{ setShowDonateModal(true); setShowAdPopup(false); }} style={{background:"none",border:"none",color:C.gold,fontSize:12,cursor:"pointer",fontFamily:"inherit",textDecoration:"underline"}}>
                I'd rather donate directly
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Donate Modal */}
      {showDonateModal&&(
        <div onClick={()=>setShowDonateModal(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div onClick={e=>e.stopPropagation()} style={{background:C.surface,border:"1px solid "+C.gold,borderRadius:16,padding:32,maxWidth:420,width:"92%",textAlign:"center",fontFamily:C.font}}>
            <div style={{fontSize:32,marginBottom:10}}>❤</div>
            <div style={{color:C.gold,fontSize:17,fontWeight:"bold",marginBottom:8}}>Donate to the Mission</div>
            <div style={{color:C.textSec,fontSize:13,lineHeight:1.7,marginBottom:20}}>
              Your donation goes <strong style={{color:C.gold}}>100%</strong> toward developing this Bible app and spreading the Gospel worldwide. Every gift makes an eternal difference.
            </div>
            <button onClick={()=>{ window.open("https://www.paypal.com/donate","_blank"); setShowDonateModal(false); }}
              style={{background:"linear-gradient(135deg,"+C.gold+","+C.darkGold+")",border:"none",borderRadius:10,padding:"13px 28px",color:C.bg,fontSize:14,fontWeight:"bold",cursor:"pointer",width:"100%",marginBottom:10,fontFamily:"inherit"}}>
              Give via PayPal ❤
            </button>
            <button onClick={()=>setShowDonateModal(false)} style={{background:"none",border:"none",color:C.textMuted,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>Maybe later</button>
          </div>
        </div>
      )}

      {showThemePicker&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",zIndex:998,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setShowThemePicker(false)}>
          <div style={{background:C.surface,border:"1px solid "+C.gold,borderRadius:14,padding:28,maxWidth:480,width:"92%"}} onClick={e=>e.stopPropagation()}>
            <div style={{color:C.gold,fontWeight:"bold",fontSize:17,marginBottom:4}}>🎨 Choose Your Theme</div>
            <div style={{color:C.textMuted,fontSize:12,marginBottom:20}}>Customize the look and feel of your study</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {Object.values(THEMES).map(t=>(
                <button key={t.name} onClick={()=>{setThemeName(t.name);setShowThemePicker(false);}}
                  style={{background:t.bg,border:"2px solid "+(themeName===t.name?t.gold:t.border),borderRadius:10,padding:"12px 14px",cursor:"pointer",textAlign:"left",transition:"border-color .2s"}}>
                  <div style={{fontSize:20,marginBottom:4}}>{t.icon}</div>
                  <div style={{color:t.gold,fontWeight:"bold",fontSize:13,marginBottom:2}}>{t.name}</div>
                  <div style={{display:"flex",gap:5,marginTop:6}}>
                    {[t.bg,t.gold,t.text,t.textSec].map((col,idx)=>(<div key={idx} style={{width:14,height:14,borderRadius:"50%",background:col,border:"1px solid "+t.border}}/>))}
                  </div>
                  {themeName===t.name&&<div style={{color:t.gold,fontSize:10,marginTop:6}}>✓ Active</div>}
                </button>
              ))}
            </div>
            <div style={{borderTop:"1px solid "+C.border,marginTop:16,paddingTop:14}}>
              <div style={{color:C.textMuted,fontSize:11,marginBottom:8}}>Layout mode: <strong style={{color:C.gold}}>{layoutMode==="phone"?"Phone":"Laptop / Desktop"}</strong></div>
              <button onClick={()=>{const m=layoutMode==="phone"?"laptop":"phone";setLayoutMode(m);localStorage.setItem("gospel_layout",m);setShowThemePicker(false);}}
                style={{background:"rgba(180,140,60,.08)",border:"1px solid "+C.border,borderRadius:8,padding:"7px 14px",color:C.textSec,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>
                Switch to {layoutMode==="phone"?"Laptop / Desktop":"Phone"} mode
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <header style={{background:C.headerBg,borderBottom:"1px solid "+C.border,padding:"0 8px",display:"flex",alignItems:"center",gap:4,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 20px rgba(0,0,0,.6)",height:52,flexShrink:0}}>
        <button onClick={()=>setSidebarOpen(o=>!o)} style={{background:"none",border:"none",color:C.gold,fontSize:20,cursor:"pointer",padding:"0 6px",flexShrink:0}}>☰</button>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:8,letterSpacing:3,color:C.textMuted,textTransform:"uppercase"}}>{isNT?"NT":"OT"} · {translation}</div>
          <div style={{fontSize:layoutMode==="phone"?14:16,fontWeight:"bold",color:C.gold,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{book} — Ch.{chapter}</div>
        </div>
        {/* Chapter nav */}
        <div style={{display:"flex",gap:3,alignItems:"center",flexShrink:0}}>
          <button onClick={()=>chapter>1&&setChapter(c=>c-1)} disabled={chapter<=1} style={{background:"rgba(180,140,60,.1)",border:"1px solid "+C.border,color:C.gold,width:26,height:26,borderRadius:4,cursor:chapter<=1?"not-allowed":"pointer",fontSize:14,opacity:chapter<=1?0.3:1,padding:0}}>‹</button>
          <span style={{color:C.textMuted,fontSize:10,minWidth:28,textAlign:"center"}}>{chapter}/{totalCh}</span>
          <button onClick={()=>chapter<totalCh&&setChapter(c=>c+1)} disabled={chapter>=totalCh} style={{background:"rgba(180,140,60,.1)",border:"1px solid "+C.border,color:C.gold,width:26,height:26,borderRadius:4,cursor:chapter>=totalCh?"not-allowed":"pointer",fontSize:14,opacity:chapter>=totalCh?0.3:1,padding:0}}>›</button>
        </div>
        <button onClick={()=>setTranslation(t=>t==="KJV"?"WEB":"KJV")} style={{background:"rgba(180,140,60,.1)",border:"1px solid "+C.border,color:C.gold,padding:"4px 7px",borderRadius:10,cursor:"pointer",fontSize:10,fontWeight:"bold",flexShrink:0}}>{translation==="KJV"?"WEB":"KJV"}</button>
        <button onClick={speakChapter} title="Read chapter aloud" style={{background:speakingIdx==="ch"?"rgba(201,168,76,0.25)":"rgba(180,140,60,.1)",border:"1px solid "+C.border,color:C.gold,width:28,height:28,borderRadius:"50%",cursor:"pointer",fontSize:13,flexShrink:0,padding:0}}>
          {speakingIdx==="ch"?"◼":"🔈"}
        </button>
        {/* Donate */}
        <button onClick={()=>setShowDonateModal(true)} title="Donate to support the mission"
          style={{background:"linear-gradient(135deg,rgba(180,140,60,.25),rgba(180,140,60,.15))",border:"1px solid "+C.gold,color:C.gold,padding:"4px 8px",borderRadius:12,cursor:"pointer",fontSize:10,fontWeight:"bold",flexShrink:0,display:"flex",alignItems:"center",gap:3}}>
          <span>&#9829;</span>{layoutMode!=="phone"&&" Give"}
        </button>
        {/* Panel buttons */}
        <button onClick={()=>togglePanel("ai")} style={{background:panel==="ai"?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.1)",border:"1px solid "+C.gold,color:panel==="ai"?C.bg:C.gold,padding:"4px 8px",borderRadius:14,cursor:"pointer",fontSize:11,fontWeight:"bold",flexShrink:0}}>
          {panel==="ai"?"✕":"✦"}{layoutMode!=="phone"&&(panel==="ai"?" Close":" Scholar")}
        </button>
        <button onClick={()=>togglePanel("prayer")} title="Prayer Journal"
          style={{background:panel==="prayer"?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.1)",border:"1px solid "+(panel==="prayer"?C.gold:C.border),color:panel==="prayer"?C.bg:C.gold,width:28,height:28,borderRadius:"50%",cursor:"pointer",fontSize:14,flexShrink:0,padding:0}}>&#x1F64F;</button>
        <button onClick={()=>togglePanel("notes")} title="Study Notes"
          style={{background:panel==="notes"?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.1)",border:"1px solid "+(panel==="notes"?C.gold:C.border),color:panel==="notes"?C.bg:C.gold,width:28,height:28,borderRadius:"50%",cursor:"pointer",fontSize:14,flexShrink:0,padding:0}}>&#x1F4DD;</button>
        <button onClick={()=>togglePanel("community")} title="Community" style={{background:panel==="community"?"linear-gradient(135deg,"+C.gold+","+C.darkGold+")":"rgba(180,140,60,.1)",border:"1px solid "+(unread>0||panel==="community"?C.gold:C.border),color:panel==="community"?C.bg:C.gold,width:28,height:28,borderRadius:"50%",cursor:"pointer",fontSize:14,flexShrink:0,padding:0,position:"relative"}}>
          &#x1F465;
          {unread>0&&panel!=="community"&&<span style={{position:"absolute",top:-3,right:-3,background:"#c05050",color:"#fff",borderRadius:"50%",fontSize:8,width:13,height:13,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"}}>{unread}</span>}
        </button>
        <button onClick={()=>setShowThemePicker(t=>!t)} title="Theme" style={{background:"rgba(180,140,60,.1)",border:"1px solid "+C.border,color:C.gold,width:28,height:28,borderRadius:"50%",cursor:"pointer",fontSize:13,flexShrink:0,padding:0}}>&#x1F3A8;</button>
        <button onClick={()=>{const m=layoutMode==="phone"?"laptop":"phone";setLayoutMode(m);localStorage.setItem("gospel_layout",m);}} title="Switch layout" style={{background:"rgba(180,140,60,.08)",border:"1px solid "+C.border,color:C.textMuted,width:28,height:28,borderRadius:"50%",cursor:"pointer",fontSize:12,flexShrink:0,padding:0}}>
          {layoutMode==="phone"?"💻":"📱"}
        </button>
      </header>

      <div style={{display:"flex",flex:1,position:"relative",zIndex:1,overflow:"hidden",width:"100%"}}>
        {/* Book sidebar */}
        <aside style={{position:"fixed",top:0,left:sidebarOpen?0:-290,width:280,height:"100vh",background:C.sidebarBg,borderRight:"1px solid "+C.border,zIndex:200,transition:"left .3s ease",overflowY:"auto",paddingTop:54}}>
          <div style={{padding:"10px 16px 4px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:10,letterSpacing:3,color:C.textMuted,textTransform:"uppercase"}}>Books of the Bible</span>
            <button onClick={()=>setSidebarOpen(false)} style={{background:"none",border:"none",color:C.textMuted,fontSize:18,cursor:"pointer"}}>✕</button>
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

        {/* Bible text */}
        <main style={{flex:1,padding:layoutMode==="phone"?"14px 12px 40px":"18px 24px 40px",width:"100%",overflowY:"auto",height:"calc(100vh - 52px)",boxSizing:"border-box"}}>
          {selectedVerses.length>0&&(
            <div style={{background:"rgba(180,140,60,.07)",border:"1px solid rgba(180,140,60,.22)",borderRadius:8,padding:"10px 14px",marginBottom:16,display:"flex",gap:7,flexWrap:"wrap",alignItems:"center"}}>
              <span style={{color:C.textMuted,fontSize:12}}>📌 {selectedVerses.length} verse{selectedVerses.length>1?"s":""} selected</span>
              <button style={qBtn} onClick={()=>quickAsk("Explain the meaning of these verses in depth.")}>Explain</button>
              <button style={qBtn} onClick={()=>quickAsk("What are the original Greek or Hebrew words? Give transliterations and meanings.")}>Greek/Hebrew</button>
              <button style={qBtn} onClick={()=>quickAsk("What was the historical and cultural context when this was written?")}>History</button>
              <button style={qBtn} onClick={()=>quickAsk("What have major Biblical scholars said about these verses?")}>Scholars</button>
              <button style={qBtn} onClick={()=>quickAsk("Show me cross-references and biblical connections to these verses.")}>Cross-refs</button>
              <button style={qBtn} onClick={()=>setPanel("notes")}>📝 Note</button>
              <button style={{...qBtn,background:"rgba(60,120,200,.1)",borderColor:"rgba(60,120,200,.28)",color:"#80a0e0"}}
                onClick={()=>setShareModal({type:"note",payload:{title:book+" "+chapter+":"+[...selectedVerses].sort((a,b)=>a-b).join(","),body:getSelText()}})}>✉ Share</button>
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

        {/* Side panel */}
        {panelOpen&&(
          <aside style={{width:layoutMode==="phone"?"100%":"42%",minWidth:layoutMode==="phone"?"100%":280,borderLeft:"1px solid "+C.border,display:"flex",flexDirection:"column",height:"calc(100vh - 52px)",position:"sticky",top:52,background:C.chatBg,flexShrink:0}}>

            {/* Scholar AI */}
            {panel==="ai"&&(
              <>
                <div style={{padding:"12px 16px",borderBottom:"1px solid "+C.border,flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <div style={{color:C.gold,fontWeight:"bold",fontSize:14}}>✦ Biblical Scholar AI</div>
                    <div style={{color:C.textMuted,fontSize:11,marginTop:1}}>Powered by Gemini · Hebrew · Greek · History</div>
                  </div>
                  <div style={{display:"flex",gap:6}}>
                    <button onClick={()=>{const ai=messages.filter(m=>m.role==="assistant");if(ai.length)setShareModal({type:"ai",payload:{title:book+" "+chapter+" — Scholar AI",body:ai[ai.length-1].content}});}}
                      style={{background:"none",border:"1px solid "+C.border,color:C.gold,fontSize:11,padding:"4px 8px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"}}>✉ Share</button>
                  </div>
                </div>
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
                          <div style={{display:"flex",gap:8,marginTop:4}}>
                            <button onClick={()=>speakText(m.content,i)} style={{background:"none",border:"none",color:speakingIdx===i?C.gold:C.textMuted,cursor:"pointer",fontSize:12,padding:"2px 4px",fontFamily:"inherit"}}>
                              {speakingIdx===i?"◼ stop":"🔈 listen"}
                            </button>
                            <button onClick={()=>setShareModal({type:"ai",payload:{title:book+" "+chapter+" — Scholar AI",body:m.content}})}
                              style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",fontSize:12,padding:"2px 4px",fontFamily:"inherit"}}>✉ share</button>
                          </div>
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
                      style={{background:thinking||!input.trim()?"rgba(180,140,60,.15)":"linear-gradient(135deg,"+C.gold+","+C.darkGold+")",border:"none",borderRadius:10,width:44,cursor:thinking||!input.trim()?"not-allowed":"pointer",color:C.bg,fontSize:18,fontWeight:"bold",flexShrink:0}}>
                      ▶
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Prayer Journal */}
            {panel==="prayer"&&(
              <>
                <div style={{padding:"12px 16px",borderBottom:"1px solid "+C.border,flexShrink:0}}>
                  <div style={{color:C.gold,fontWeight:"bold",fontSize:14}}>🙏 Prayer Journal</div>
                  <div style={{color:C.textMuted,fontSize:11,marginTop:1}}>Write, save & share your prayers with friends</div>
                </div>
                <PrayerPanel C={C} setShareModal={setShareModal}/>
              </>
            )}

            {/* Study Notes */}
            {panel==="notes"&&(
              <>
                <div style={{padding:"12px 16px",borderBottom:"1px solid "+C.border,flexShrink:0}}>
                  <div style={{color:C.gold,fontWeight:"bold",fontSize:14}}>📝 Study Notes</div>
                  <div style={{color:C.textMuted,fontSize:11,marginTop:1}}>Capture observations, reflections & insights</div>
                </div>
                <NotesPanel C={C} book={book} chapter={chapter} selectedVerses={selectedVerses} setShareModal={setShareModal}/>
              </>
            )}

            {/* Community */}
            {panel==="community"&&(
              <CommunityPanel C={C} myCode={myCode} friends={friends} setFriends={setFriends} inbox={inbox} setInbox={setInbox}/>
            )}

          </aside>
        )}
      </div>
      <style>{"*{box-sizing:border-box}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:"+C.scrollThumb+";border-radius:3px}button:not(:disabled):hover{filter:brightness(1.18)}textarea:focus{border-color:rgba(180,140,60,.4)!important}input:focus{border-color:rgba(180,140,60,.4)!important;outline:none}"}</style>
    </div>
  );
}

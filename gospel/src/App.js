import { useState, useRef, useEffect } from "react";

const KJV = {};

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

// SVG Icons
const Icon = {
  Menu: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  Close: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  ChevLeft: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>,
  ChevRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>,
  Volume: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>,
  VolumeOff: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>,
  Book: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  Send: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  Palette: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  Scholar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Notes: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  Prayer: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  Trash: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>,
  Pin: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
};

function getKJV(book, chapter) {
  return KJV[book]?.[chapter]?.map(v => ({ verse: v.v, text: v.t })) || null;
}

async function askGemini(history, systemPrompt) {
  const models = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-2.0-flash-lite"];
  let lastErr = null;
  for (const model of models) {
    try {
      const contents = history.map(m => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] }));
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, contents, system_instruction: { parts: [{ text: systemPrompt }] } })
      });
      if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e?.error || "HTTP " + res.status); }
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

function MdText({ text, gold }) {
  const g = gold || "#c9a84c";
  const lines = text.split("\n");
  return (
    <div>
      {lines.map((line, i) => {
        if (line.startsWith("### ")) return <div key={i} style={{fontSize:15,fontWeight:"bold",color:g,marginTop:10,marginBottom:3}}>{line.slice(4)}</div>;
        if (line.startsWith("## "))  return <div key={i} style={{fontSize:16,fontWeight:"bold",color:g,marginTop:12,marginBottom:4}}>{line.slice(3)}</div>;
        if (line.startsWith("# "))   return <div key={i} style={{fontSize:17,fontWeight:"bold",color:g,marginTop:14,marginBottom:5}}>{line.slice(2)}</div>;
        if (line.match(/^- /))       return <div key={i} style={{paddingLeft:14,marginBottom:3}}>{"\u2022 " + line.slice(2)}</div>;
        if (line.trim() === "")      return <div key={i} style={{height:6}} />;
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <div key={i} style={{marginBottom:2}}>
            {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{color:g}}>{p}</strong> : p)}
          </div>
        );
      })}
    </div>
  );
}

export default function BibleApp() {
  const [book, setBook] = useState("John");
  const [chapter, setChapter] = useState(3);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [translation, setTranslation] = useState("KJV");
  const [selectedVerses, setSelectedVerses] = useState([]);
  const [rightPanel, setRightPanel] = useState(null); // null | "chat" | "notes"
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [themeName, setThemeName] = useState("Parchment");
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [messages, setMessages] = useState([{role:"assistant",content:"Shalom! I'm your Biblical Scholar AI (powered by Gemini).\n\nClick any verse to select it, then tap a quick button or ask me anything:\n\n- Original Greek or Hebrew word meanings\n- Historical & cultural context\n- What scholars & theologians say\n- Cross-references & typology\n\nAll 66 books available. Toggle between KJV and WEB translation using the button in the header."}]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [speakingIdx, setSpeakingIdx] = useState(null);
  const [notes, setNotes] = useState(() => { try { return JSON.parse(localStorage.getItem("gospel_notes") || "[]"); } catch { return []; } });
  const [noteInput, setNoteInput] = useState("");
  const [noteType, setNoteType] = useState("study"); // "study" | "prayer"
  const chatEnd = useRef(null);

  const C = THEMES[themeName];
  const qBtn = {background:"rgba(180,140,60,0.1)",border:"1px solid rgba(180,140,60,0.28)",color:C.gold,padding:"5px 11px",borderRadius:14,cursor:"pointer",fontSize:12,fontFamily:"inherit",whiteSpace:"nowrap"};
  const chatOpen = rightPanel === "chat";
  const notesOpen = rightPanel === "notes";

  useEffect(() => { try { localStorage.setItem("gospel_notes", JSON.stringify(notes)); } catch {} }, [notes]);

  async function loadVerses(b, ch, trans) {
    setLoading(true); setLoadError(false); setVerses([]); setSelectedVerses([]);
    try {
      const v = getKJV(b, ch);
      if (v && v.length > 0) { setVerses(v); } else { setVerses(await fetchWEB(b, ch)); }
    } catch(e) { setLoadError(true); }
    setLoading(false);
  }

  useEffect(() => { loadVerses(book, chapter, translation); }, [book, chapter, translation]);
  useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, thinking]);

  function toggleVerse(n) { setSelectedVerses(p => p.includes(n) ? p.filter(x => x !== n) : [...p, n]); }

  function getSelText() {
    return [...selectedVerses].sort((a,b)=>a-b).map(n => {
      const v = verses.find(v => v.verse === n);
      return v ? book + " " + chapter + ":" + n + " - \"" + v.text + "\"" : "";
    }).filter(Boolean).join("\n");
  }

  function getBestVoice() {
    const voices = window.speechSynthesis.getVoices();
    const preferred = ["Google UK English Male","Microsoft George - English (United Kingdom)","Microsoft David - English (United States)","Daniel","Arthur","UK English Male"];
    for (const name of preferred) { const v = voices.find(x => x.name === name); if (v) return v; }
    return voices.find(v => v.lang.startsWith("en") && v.name.toLowerCase().includes("male")) || voices.find(v => v.lang.startsWith("en")) || null;
  }

  function stripMd(t) { return t.replace(/#{1,3} /g,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/^- /gm,"").trim(); }

  function speakText(text, idx) {
    if (speakingIdx === idx) { window.speechSynthesis.cancel(); setSpeakingIdx(null); return; }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(stripMd(text));
    const v = getBestVoice(); if (v) utt.voice = v;
    utt.rate = 0.87; utt.pitch = 0.9; utt.volume = 1;
    utt.onend = () => setSpeakingIdx(null); utt.onerror = () => setSpeakingIdx(null);
    setSpeakingIdx(idx); window.speechSynthesis.speak(utt);
  }

  function speakChapter() {
    if (speakingIdx === "ch") { window.speechSynthesis.cancel(); setSpeakingIdx(null); return; }
    window.speechSynthesis.cancel();
    const text = verses.map(v => "Verse " + v.verse + ". " + v.text).join(" ");
    const utt = new SpeechSynthesisUtterance(text);
    const v = getBestVoice(); if (v) utt.voice = v;
    utt.rate = 0.85; utt.pitch = 0.88; utt.volume = 1;
    utt.onend = () => setSpeakingIdx(null); utt.onerror = () => setSpeakingIdx(null);
    setSpeakingIdx("ch"); window.speechSynthesis.speak(utt);
  }

  async function send(override) {
    const raw = (override ?? input).trim();
    if (!raw || thinking) return;
    setInput("");
    const sel = getSelText();
    const apiContent = sel ? "Selected verses:\n" + sel + "\n\nQuestion: " + raw : raw;
    const displayed = [...messages, { role:"user", content:raw }];
    setMessages(displayed); setThinking(true);
    const sys = "You are a brilliant, warm Biblical scholar AI with expertise in Koine Greek and Biblical Hebrew/Aramaic, Ancient Near Eastern history, Church Fathers, Reformers, and modern scholars like N.T. Wright and F.F. Bruce. When explaining verses give original language words with transliteration, historical context, scholar references, and cross-references. Be warm and make the ancient text come alive. Currently studying: " + book + " Chapter " + chapter;
    const history = displayed.slice(1).map(m => ({ role: m.role, content: m.content }));
    history[history.length - 1] = { role: "user", content: apiContent };
    try {
      const reply = await askGemini(history, sys);
      setMessages([...displayed, { role:"assistant", content:reply }]);
    } catch(e) {
      setMessages([...displayed, { role:"assistant", content:"Error: " + e.message }]);
    }
    setThinking(false);
  }

  function quickAsk(p) {
    const sel = getSelText();
    const full = sel ? "For these verses:\n" + sel + "\n\n" + p : "For " + book + " " + chapter + ": " + p;
    setRightPanel("chat"); send(full);
  }

  function addNote() {
    if (!noteInput.trim()) return;
    const ref = selectedVerses.length > 0 ? book + " " + chapter + ":" + [...selectedVerses].sort((a,b)=>a-b).join(",") : book + " " + chapter;
    const note = { id: Date.now(), type: noteType, ref, text: noteInput.trim(), date: new Date().toLocaleDateString() };
    setNotes(p => [note, ...p]);
    setNoteInput("");
  }

  function deleteNote(id) { setNotes(p => p.filter(n => n.id !== id)); }

  const totalCh = CHAPTER_COUNTS[book] || 1;
  const isNT = BOOKS.NT.includes(book);
  const panelOpen = rightPanel !== null;

  const iconBtn = (active) => ({
    background: active ? "linear-gradient(135deg," + C.gold + "," + C.darkGold + ")" : "rgba(180,140,60,.1)",
    border: "1px solid " + (active ? C.gold : C.border),
    color: active ? C.bg : C.gold,
    width: 34, height: 34, borderRadius: 8,
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    transition: "all .18s",
  });

  return (
    <div style={{fontFamily:C.font,background:C.bg,minHeight:"100vh",color:C.text,display:"flex",flexDirection:"column"}}>
      <div style={{position:"fixed",inset:0,background:C.bodyBg,pointerEvents:"none",zIndex:0}} />

      {showThemePicker && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",zIndex:998,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={() => setShowThemePicker(false)}>
          <div style={{background:C.surface,border:"1px solid " + C.gold,borderRadius:14,padding:28,maxWidth:480,width:"92%"}} onClick={e => e.stopPropagation()}>
            <div style={{color:C.gold,fontWeight:"bold",fontSize:17,marginBottom:4}}>Choose Your Theme</div>
            <div style={{color:C.textMuted,fontSize:12,marginBottom:20}}>Customize the look and feel of your study</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {Object.values(THEMES).map(t => (
                <button key={t.name} onClick={() => { setThemeName(t.name); setShowThemePicker(false); }}
                  style={{background:t.bg,border:"2px solid " + (themeName===t.name ? t.gold : t.border),borderRadius:10,padding:"12px 14px",cursor:"pointer",textAlign:"left",transition:"border-color .2s"}}>
                  <div style={{fontSize:20,marginBottom:4}}>{t.icon}</div>
                  <div style={{color:t.gold,fontWeight:"bold",fontSize:13,marginBottom:2}}>{t.name}</div>
                  <div style={{display:"flex",gap:5,marginTop:6}}>
                    {[t.bg,t.gold,t.text,t.textSec].map((col,idx) => (
                      <div key={idx} style={{width:14,height:14,borderRadius:"50%",background:col,border:"1px solid " + t.border}} />
                    ))}
                  </div>
                  {themeName===t.name && <div style={{color:t.gold,fontSize:10,marginTop:6}}>✓ Active</div>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <header style={{background:C.headerBg,borderBottom:"1px solid " + C.border,padding:"0 14px",display:"flex",alignItems:"center",gap:8,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 20px rgba(0,0,0,.6)",height:55}}>
        <button onClick={() => setSidebarOpen(o => !o)} style={{...iconBtn(false),background:"none",border:"none"}}>
          <Icon.Menu />
        </button>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:9,letterSpacing:4,color:C.textMuted,textTransform:"uppercase",marginBottom:1}}>{isNT?"New Testament":"Old Testament"} · {translation}</div>
          <div style={{fontSize:18,fontWeight:"bold",color:C.gold,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{book} — Chapter {chapter}</div>
        </div>
        <div style={{display:"flex",gap:5,alignItems:"center",flexShrink:0}}>
          <button onClick={() => chapter > 1 && setChapter(c => c-1)} disabled={chapter<=1} style={{...iconBtn(false),opacity:chapter<=1?0.3:1}}>
            <Icon.ChevLeft />
          </button>
          <span style={{color:C.textMuted,fontSize:11,minWidth:36,textAlign:"center"}}>{chapter}/{totalCh}</span>
          <button onClick={() => chapter < totalCh && setChapter(c => c+1)} disabled={chapter>=totalCh} style={{...iconBtn(false),opacity:chapter>=totalCh?0.3:1}}>
            <Icon.ChevRight />
          </button>
        </div>
        <button onClick={() => setTranslation(t => t==="KJV"?"WEB":"KJV")} style={{...iconBtn(false),width:"auto",padding:"0 10px",fontSize:11,fontWeight:"bold"}}>
          {translation==="KJV"?"WEB":"KJV"}
        </button>
        <button onClick={speakChapter} style={iconBtn(speakingIdx==="ch")} title="Read chapter aloud">
          {speakingIdx==="ch" ? <Icon.VolumeOff /> : <Icon.Volume />}
        </button>
        <button onClick={() => setRightPanel(p => p==="notes" ? null : "notes")} style={iconBtn(notesOpen)} title="Prayer & Study Notes">
          <Icon.Notes />
        </button>
        <button onClick={() => setRightPanel(p => p==="chat" ? null : "chat")} style={iconBtn(chatOpen)} title="Scholar AI">
          <Icon.Scholar />
        </button>
        <button onClick={() => setShowThemePicker(t => !t)} style={iconBtn(showThemePicker)} title="Change theme">
          <Icon.Palette />
        </button>
      </header>

      <div style={{display:"flex",flex:1,position:"relative",zIndex:1}}>
        <aside style={{position:"fixed",top:0,left:sidebarOpen?0:-290,width:280,height:"100vh",background:C.sidebarBg,borderRight:"1px solid " + C.border,zIndex:200,transition:"left .3s ease",overflowY:"auto",paddingTop:54}}>
          <div style={{padding:"10px 16px 4px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:10,letterSpacing:3,color:C.textMuted,textTransform:"uppercase"}}>Books of the Bible</span>
            <button onClick={() => setSidebarOpen(false)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><Icon.Close /></button>
          </div>
          {["OT","NT"].map(t => (
            <div key={t}>
              <div style={{padding:"10px 18px 5px",fontSize:9,letterSpacing:4,color:C.textMuted,textTransform:"uppercase",fontWeight:"bold",borderTop:"1px solid " + C.border,marginTop:4}}>
                {t==="OT"?"Old Testament":"New Testament"}
              </div>
              {BOOKS[t].map(b => (
                <button key={b} onClick={() => { setBook(b); setChapter(1); setSidebarOpen(false); }}
                  style={{display:"block",width:"100%",textAlign:"left",padding:"8px 22px",background:b===book?"rgba(180,140,60,.14)":"none",border:"none",borderLeft:b===book?"3px solid " + C.gold:"3px solid transparent",color:b===book?C.gold:C.textSec,cursor:"pointer",fontSize:13.5,fontFamily:"inherit",transition:"all .15s"}}>
                  {b}
                </button>
              ))}
            </div>
          ))}
        </aside>
        {sidebarOpen && <div onClick={() => setSidebarOpen(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:199}} />}

        <main style={{flex:1,padding:"18px 16px 40px",maxWidth:panelOpen?"52%":760,margin:"0 auto",width:"100%",transition:"max-width .3s"}}>
          {selectedVerses.length > 0 && (
            <div style={{background:"rgba(180,140,60,.07)",border:"1px solid rgba(180,140,60,.22)",borderRadius:8,padding:"10px 14px",marginBottom:16,display:"flex",gap:7,flexWrap:"wrap",alignItems:"center"}}>
              <span style={{color:C.textMuted,fontSize:12,display:"flex",alignItems:"center",gap:4}}><Icon.Pin />{selectedVerses.length} verse{selectedVerses.length>1?"s":""} selected</span>
              <button style={qBtn} onClick={() => quickAsk("Explain the meaning of these verses in depth.")}>Explain</button>
              <button style={qBtn} onClick={() => quickAsk("What are the original Greek or Hebrew words? Give transliterations and meanings.")}>Greek/Hebrew</button>
              <button style={qBtn} onClick={() => quickAsk("What was the historical and cultural context when this was written?")}>History</button>
              <button style={qBtn} onClick={() => quickAsk("What have major Biblical scholars said about these verses?")}>Scholars</button>
              <button style={qBtn} onClick={() => quickAsk("Show me cross-references and biblical connections to these verses.")}>Cross-refs</button>
              <button style={qBtn} onClick={() => { setRightPanel("notes"); }}>+ Add Note</button>
              <button style={{...qBtn,background:"rgba(180,60,60,.1)",borderColor:"rgba(180,60,60,.28)",color:"#c08080",display:"flex",alignItems:"center",gap:4}} onClick={() => setSelectedVerses([])}><Icon.Close /> Clear</button>
            </div>
          )}
          {loading ? (
            <div style={{textAlign:"center",padding:"60px 20px",color:C.textMuted}}>
              <div style={{marginBottom:14,display:"flex",justifyContent:"center",color:C.gold}}><Icon.Book /></div>
              <div style={{fontSize:14,fontStyle:"italic",color:C.textSec}}>Loading {book} {chapter}…</div>
            </div>
          ) : loadError ? (
            <div style={{textAlign:"center",padding:"60px 20px"}}>
              <div style={{fontSize:28,marginBottom:12}}>⚠️</div>
              <div style={{fontSize:14,color:C.textSec,marginBottom:16}}>Could not load {book} {chapter}.<br/>Check your internet connection.</div>
              <button onClick={() => loadVerses(book, chapter, translation)} style={{...qBtn,padding:"8px 18px",fontSize:13}}>Try again</button>
            </div>
          ) : (
            <div>
              <div style={{fontSize:10,letterSpacing:3,color:C.textMuted,marginBottom:14,textTransform:"uppercase"}}>
                {translation} · {verses.length} verses · Click to select
              </div>
              {verses.map(v => {
                const sel = selectedVerses.includes(v.verse);
                return (
                  <div key={v.verse} onClick={() => toggleVerse(v.verse)}
                    style={{display:"flex",gap:14,marginBottom:10,padding:"10px 12px",borderRadius:6,cursor:"pointer",background:sel?C.verseSelBg:"rgba(255,255,255,.01)",border:"1px solid " + (sel?C.verseSelBorder:"transparent"),transition:"all .18s",lineHeight:1.8}}>
                    <span style={{color:C.gold,fontSize:13,fontWeight:"bold",minWidth:28,marginTop:4,flexShrink:0}}>{v.verse}</span>
                    <span style={{fontSize:18,color:sel?C.verseSelText:C.verseText,letterSpacing:0.2}}>{v.text}</span>
                  </div>
                );
              })}
            </div>
          )}
        </main>

        {/* NOTES PANEL */}
        {notesOpen && (
          <aside style={{width:"44%",maxWidth:500,minWidth:300,borderLeft:"1px solid " + C.border,display:"flex",flexDirection:"column",height:"calc(100vh - 55px)",position:"sticky",top:55,background:C.chatBg}}>
            <div style={{padding:"12px 16px",borderBottom:"1px solid " + C.border,flexShrink:0}}>
              <div style={{color:C.gold,fontWeight:"bold",fontSize:14,marginBottom:10}}>Prayer & Study Notes</div>
              <div style={{display:"flex",gap:6,marginBottom:10}}>
                <button onClick={() => setNoteType("study")} style={{...qBtn,background:noteType==="study"?"linear-gradient(135deg," + C.gold + "," + C.darkGold + ")":"rgba(180,140,60,.1)",color:noteType==="study"?C.bg:C.gold,display:"flex",alignItems:"center",gap:5}}>
                  <Icon.Notes /> Study
                </button>
                <button onClick={() => setNoteType("prayer")} style={{...qBtn,background:noteType==="prayer"?"linear-gradient(135deg," + C.gold + "," + C.darkGold + ")":"rgba(180,140,60,.1)",color:noteType==="prayer"?C.bg:C.gold,display:"flex",alignItems:"center",gap:5}}>
                  <Icon.Prayer /> Prayer
                </button>
              </div>
              {selectedVerses.length > 0 && (
                <div style={{fontSize:11,color:C.textMuted,marginBottom:6,padding:"3px 7px",background:"rgba(180,140,60,.05)",borderRadius:4,display:"flex",alignItems:"center",gap:4}}>
                  <Icon.Pin /> {book} {chapter}:{[...selectedVerses].sort((a,b)=>a-b).join(",")}
                </div>
              )}
              <div style={{display:"flex",gap:7}}>
                <textarea value={noteInput} onChange={e => setNoteInput(e.target.value)}
                  onKeyDown={e => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); addNote(); }}}
                  placeholder={noteType==="prayer" ? "Write your prayer…" : "Write your study note…"}
                  style={{flex:1,background:"rgba(255,255,255,.04)",border:"1px solid " + C.border,borderRadius:10,padding:"9px 12px",color:C.text,fontSize:13,resize:"none",height:72,fontFamily:"inherit",outline:"none",lineHeight:1.5}} />
                <button onClick={addNote} disabled={!noteInput.trim()}
                  style={{background:noteInput.trim()?"linear-gradient(135deg," + C.gold + "," + C.darkGold + ")":"rgba(180,140,60,.15)",border:"none",borderRadius:10,width:44,cursor:noteInput.trim()?"pointer":"not-allowed",color:C.bg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <Icon.Send />
                </button>
              </div>
            </div>
            <div style={{flex:1,overflowY:"auto",padding:"12px 14px",display:"flex",flexDirection:"column",gap:10}}>
              {notes.length === 0 && (
                <div style={{textAlign:"center",padding:"40px 20px",color:C.textMuted,fontSize:13,fontStyle:"italic"}}>
                  No notes yet. Start by selecting verses and writing a study note or prayer.
                </div>
              )}
              {notes.map(n => (
                <div key={n.id} style={{background:"rgba(255,255,255,.03)",border:"1px solid " + C.border,borderRadius:10,padding:"12px 14px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <span style={{color:C.gold,fontSize:11,display:"flex",alignItems:"center",gap:4}}>
                        {n.type==="prayer" ? <Icon.Prayer /> : <Icon.Notes />}
                        {n.type==="prayer" ? "Prayer" : "Study Note"}
                      </span>
                      <span style={{color:C.textMuted,fontSize:11}}>· {n.ref}</span>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <span style={{color:C.textMuted,fontSize:10}}>{n.date}</span>
                      <button onClick={() => deleteNote(n.id)} style={{background:"none",border:"none",color:C.textMuted,cursor:"pointer",display:"flex",alignItems:"center",padding:2}}><Icon.Trash /></button>
                    </div>
                  </div>
                  <div style={{color:C.textSec,fontSize:13.5,lineHeight:1.65,whiteSpace:"pre-wrap"}}>{n.text}</div>
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* CHAT PANEL */}
        {chatOpen && (
          <aside style={{width:"44%",maxWidth:500,minWidth:300,borderLeft:"1px solid " + C.border,display:"flex",flexDirection:"column",height:"calc(100vh - 55px)",position:"sticky",top:55,background:C.chatBg}}>
            <div style={{padding:"12px 16px",borderBottom:"1px solid " + C.border,flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{color:C.gold,fontWeight:"bold",fontSize:14,display:"flex",alignItems:"center",gap:6}}><Icon.Scholar /> Biblical Scholar AI</div>
                <div style={{color:C.textMuted,fontSize:11,marginTop:1}}>Powered by Gemini · Hebrew · Greek · History</div>
              </div>
            </div>
            <div style={{flex:1,overflowY:"auto",padding:"14px 14px 6px",display:"flex",flexDirection:"column",gap:11}}>
              {messages.map((m, i) => (
                <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",gap:8,alignItems:"flex-start"}}>
                  {m.role==="assistant" && (
                    <div style={{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg," + C.gold + "," + C.darkGold + ")",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,flexShrink:0,marginTop:2}}>✦</div>
                  )}
                  <div style={{maxWidth:"83%"}}>
                    <div style={{padding:"10px 13px",borderRadius:m.role==="user"?"15px 15px 4px 15px":"15px 15px 15px 4px",background:m.role==="user"?"rgba(180,140,60,0.15)":"rgba(255,255,255,.035)",border:m.role==="user"?"none":"1px solid " + C.border,fontSize:13.5,lineHeight:1.65,color:m.role==="user"?C.gold:C.textSec,wordBreak:"break-word"}}>
                      {m.role==="assistant" ? <MdText text={m.content} gold={C.gold} /> : m.content}
                    </div>
                    {m.role==="assistant" && (
                      <button onClick={() => speakText(m.content, i)} style={{marginTop:4,background:"none",border:"none",color:speakingIdx===i?C.gold:C.textMuted,cursor:"pointer",fontSize:12,padding:"2px 4px",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4}}>
                        {speakingIdx===i ? <><Icon.VolumeOff /> stop</> : <><Icon.Volume /> listen</>}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {thinking && (
                <div style={{display:"flex",gap:8,alignItems:"center"}}>
                  <div style={{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg," + C.gold + "," + C.darkGold + ")",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11}}>✦</div>
                  <span style={{color:C.textMuted,fontSize:13,fontStyle:"italic"}}>Consulting scriptures and scholars…</span>
                </div>
              )}
              <div ref={chatEnd} />
            </div>
            <div style={{padding:"10px 12px 14px",borderTop:"1px solid " + C.border,flexShrink:0}}>
              {selectedVerses.length > 0 && (
                <div style={{fontSize:11,color:C.textMuted,marginBottom:7,padding:"3px 7px",background:"rgba(180,140,60,.05)",borderRadius:4,display:"flex",alignItems:"center",gap:4}}>
                  <Icon.Pin /> {book} {chapter}:{[...selectedVerses].sort((a,b)=>a-b).join(",")}
                </div>
              )}
              <div style={{display:"flex",gap:7}}>
                <textarea value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); send(); }}}
                  placeholder="Ask about translation, history, theology…"
                  style={{flex:1,background:"rgba(255,255,255,.04)",border:"1px solid " + C.border,borderRadius:10,padding:"9px 12px",color:C.text,fontSize:13.5,resize:"none",height:56,fontFamily:"inherit",outline:"none",lineHeight:1.5}} />
                <button onClick={() => send()} disabled={thinking || !input.trim()}
                  style={{background:thinking||!input.trim()?"rgba(180,140,60,.15)":"linear-gradient(135deg," + C.gold + "," + C.darkGold + ")",border:"none",borderRadius:10,width:44,cursor:thinking||!input.trim()?"not-allowed":"pointer",color:C.bg,fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <Icon.Send />
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>
      <style>{"*{box-sizing:border-box}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:" + C.scrollThumb + ";border-radius:3px}button:not(:disabled):hover{filter:brightness(1.15)}textarea:focus{border-color:rgba(180,140,60,.4)!important}input:focus{border-color:rgba(180,140,60,.4)!important;outline:none}"}</style>
    </div>
  );
}

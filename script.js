/* =====================================================================
   EDIT THIS BLOCK ONLY. Everything on the page is generated from it.
   - Leave a link as "" and the page shows a dashed "add link" placeholder.
   - Text in [square brackets] is placeholder copy: replace it with yours.
   ===================================================================== */
const SITE = {
  name: "Samer Themri",
  handle: "jelbene",
  photo: "photo.jpg",   // your photo file in the repository; change the name here if you upload a different one
  status: "Open to connecting with researchers, CTF players and security professionals",
  availability: "Always open to connecting with cybersecurity researchers, fellow CTF players and professionals who share a passion for reverse engineering, digital investigations and information security.",
  categories: ["Digital Forensics", "Reverse Engineering"],   // write-up filters
  links: {
    github: "https://github.com/samerthemri-hub",
    linkedin: "https://www.linkedin.com/in/samer-themri-977639438",
    email: "samerthemri@gmail.com",       // e.g. "you@example.com"
    ctftime: ""      // optional
  },
  about: [
    "I am Samer Themri, a software engineering student at INSAT with a strong passion for cybersecurity, low-level systems and digital investigation. Driven by curiosity and a problem-solving mindset, I enjoy exploring the inner workings of software, uncovering hidden vulnerabilities and understanding how systems behave beneath the surface.",
    "My interests sit at the intersection of reverse engineering and digital forensics, where every binary, memory dump and network packet is a new chance to investigate, analyze and uncover the truth. I combine analytical thinking with hands-on experimentation to understand how security mechanisms work, where they fail and how they can be strengthened.",
    "As an active CTF player, I keep challenging myself with practical security problems that push my technical ability, creativity and persistence."
  ],
  mindset: [
    "I believe that understanding how systems break is an essential step toward building systems that are more resilient.",
    "My goal is to turn curiosity into expertise, challenges into knowledge, and technical discoveries into stronger security."
  ],
  /* The last two focus cards are yours to fill in. */
  focus: [
    { t: "Reverse engineering", d: "Static and dynamic binary analysis, x86/x64 assembly, decompilation" },
    { t: "Digital forensics", d: "Memory forensics, disk images, evidence reconstruction" },
    { t: "Network analysis", d: "PCAP and traffic analysis: what hides in the packets" },
    { t: "Low-level systems", d: "Program internals and how software behaves beneath the surface" },
    { t: "Cybersecurity research", d: "Investigating weaknesses and exploring defensive techniques" },
    { t: "Capture the flag", d: "Practical challenges that build skill, creativity and persistence" },
    { t: "Defensive mindset", d: "Learning how systems break so they can be built to last" },
    { t: "[Your own focus area]", d: "[One line on what you do in it]" },
    { t: "[Currently learning]", d: "[Tool, topic or lab you are working on]" }
  ],

  /* Seed content. Once you export content.json from the root panel and upload it, it takes over. */
  achievements: [
    {
      title: "First place: Securinets CyberCamp 7.0", badge: "first place", date: "", place: "Protocol Reverse Engineering CTF",
      summary: "Won the protocol reverse engineering CTF organized by Securinets at CyberCamp 7.0.",
      details: "A protocol reverse engineering CTF held at CyberCamp 7.0 and organized by Securinets.\n\n## What I learned\n- A method for reading data: compare actions, spot what changes and what stays constant.\n- Every field has a purpose: magic bytes, type, sequence, length, CRC.\n- State machines: the order of commands matters.\n- Reversing the executable in Ghidra or IDA shows how, not only what.\n- Patience: test, fail, adjust, test again.",
      url: ""
    }
  ],
  challenges: [
    {
      title: "Field Beacon", category: "Reverse Engineering", event: "Securinets CyberCamp 7.0", date: "", points: "250", difficulty: "Medium", tags: ["IDA", "Wireshark", "Python"],
      summary: "Recovered a custom UDP protocol and its Fletcher-style checksum, then forged a hidden maintenance request to get the flag.",
      body: "", file: "writeups/field-beacon.md", flag: ""
    }
  ],

  certifications: [
    { name: "[Certification name]", why: "[Why you took it.]", areas: ["[Area 1]", "[Area 2]"], url: "" }
  ]
};
/* ===================== END OF EDITABLE DATA ===================== */

const $ = (id) => document.getElementById(id);
const isPh = (s) => typeof s === "string" && s.trim().startsWith("[");

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
function txt(s) { return `<span class="${isPh(s) ? "ph-text" : ""}">${esc(s)}</span>`; }
function tags(a) { return `<div class="tags">${a.map((t) => `<span>${esc(t)}</span>`).join("")}</div>`; }
function link(label, url, primary) {
  return url
    ? `<a class="btn${primary ? " primary" : ""}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`
    : `<span class="btn ph" title="Add this link in script.js">${esc(label)} (add link)</span>`;
}

/* Sideways strip: glides on its own, pauses on hover/touch/focus, drag it or use the arrows */
function mq(el, items, dir, w) {
  cancelAnimationFrame(el._raf);
  if (!items.length) { el.className = ""; el.innerHTML = '<p class="muted">Nothing here yet.</p>'; return; }
  const one = items.join(""), nf = (t) => t.replace(/<(button|a) /g, '<$1 tabindex="-1" ');
  const build = (n) => one + (n > 1 ? `<div style="display:contents" aria-hidden="true">${nf(one.repeat(n - 1))}</div>` : "");
  el.className = "mq";
  el.innerHTML = '<button class="mq-auto" aria-pressed="true">&#10074;&#10074; Auto-browse: on</button><button class="mq-nav l" aria-label="Scroll left">&larr;</button><button class="mq-nav r" aria-label="Scroll right">&rarr;</button><div class="mq-view"><div class="mq-track"></div></div>';
  const autoBtn = el.querySelector(".mq-auto"); let auto = true;
  autoBtn.onclick = () => { auto = !auto; autoBtn.setAttribute("aria-pressed", auto); autoBtn.innerHTML = auto ? "&#10074;&#10074; Auto-browse: on" : "&#9654; Auto-browse: off"; };
  const view = el.querySelector(".mq-view"), track = el.querySelector(".mq-track"), [bl, br] = el.querySelectorAll(".mq-nav");
  track.innerHTML = one;
  const w1 = track.offsetWidth, k = Math.max(1, Math.ceil(view.clientWidth / Math.max(1, w1)));
  const loop = w1 > 0 && !matchMedia("(prefers-reduced-motion: reduce)").matches;
  const base = one + (k > 1 ? `<div style="display:contents" aria-hidden="true">${nf(one.repeat(k - 1))}</div>` : "");
  if (loop) track.innerHTML = base + `<div style="display:contents" aria-hidden="true">${nf(base.repeat(2))}</div>`;
  autoBtn.hidden = !loop;
  const W = () => track.offsetWidth / (loop ? 3 : 1);
  let pos = loop ? W() : 0, hover = false, hold = 0, drag = null, moved = false, last = performance.now();
  view.scrollLeft = pos;
  const more = view.scrollWidth > view.clientWidth + 2; bl.hidden = br.hidden = !more;
  const pause = (ms) => { hold = performance.now() + ms; };
  const step = (d) => () => { pause(4000); view.scrollBy({ left: d * 360, behavior: "smooth" }); };
  bl.onclick = step(-1); br.onclick = step(1);
  view.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") hover = true; });
  view.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") hover = false; });
  view.addEventListener("pointerdown", (e) => {
    hold = Infinity; moved = false;
    if (e.pointerType === "mouse" && e.button === 0) drag = { x: e.clientX, s: view.scrollLeft };
  });
  addEventListener("pointermove", (e) => {
    if (!drag) return;
    if (Math.abs(e.clientX - drag.x) > 5) { moved = true; view.classList.add("drag"); }
    if (moved) view.scrollLeft = drag.s - (e.clientX - drag.x);
  });
  const up = () => { if (drag) { drag = null; view.classList.remove("drag"); } pause(2500); };
  addEventListener("pointerup", up); addEventListener("pointercancel", up);
  view.addEventListener("click", (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
  view.addEventListener("wheel", () => pause(3000), { passive: true });
  view.addEventListener("focusin", () => { hold = Infinity; });
  view.addEventListener("focusout", () => { hold = 0; });
  (function frame(t) {
    el._raf = requestAnimationFrame(frame);
    const dt = Math.min(50, t - last); last = t;
    if (!el.isConnected) return cancelAnimationFrame(el._raf);
    if (Math.abs(view.scrollLeft - pos) > 2) pos = view.scrollLeft;
    if (!loop) return;
    const w = W(), run = auto && !hover && !drag && t > hold;
    if (run) pos += (dir < 0 ? -1 : 1) * 0.04 * dt;
    while (pos >= 2 * w) pos -= w;
    while (pos < w) pos += w;
    if (run || Math.abs(view.scrollLeft - pos) > 2) view.scrollLeft = pos;
  })(performance.now());
}

/* Certifications */
mq($("certList"), SITE.certifications.map((c) => `
  <article class="card">
    <h3>${txt(c.name)}</h3><p>${txt(c.why)}</p>${tags(c.areas)}
    <div class="btns">${link("Certificate", c.url)}</div>
  </article>`), -1);

/* Mobile menu */
const menuBtn = $("menuBtn"), nav = $("nav");
menuBtn.onclick = () => menuBtn.setAttribute("aria-expanded", nav.classList.toggle("open"));
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });

/* Hero terminal: types once, then rests */
const lines = [
  ["p", "$ whoami"], ["", SITE.handle + "  (" + SITE.name + ")"],
  ["p", "$ cat about.txt"], ["", "reverse engineering\ndigital forensics\nCTF player"],
  ["p", "$ ls evidence/"], ["", "repos  write-ups  screenshots  demos"],
  ["w", "# every claim links to proof"]
];
const out = $("termOut");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
function render(n, partial) {
  out.innerHTML = lines.slice(0, n).map(([c, t]) => `<span class="${c}">${esc(t)}</span>`).join("\n") +
    (partial !== undefined ? "\n<span class=\"" + lines[n][0] + "\">" + esc(lines[n][1].slice(0, partial)) + "</span>" : "") +
    ' <span class="cur"></span>';
}
if (reduce) { render(lines.length); }
else {
  let n = 0, ch = 0;
  (function tick() {
    if (n >= lines.length) return render(lines.length);
    ch++; render(n, ch);
    if (ch >= lines[n][1].length) { n++; ch = 0; setTimeout(tick, 280); } else setTimeout(tick, 28);
  })();
}


/* ---------- Write-ups: tiny Markdown renderer ---------- */
const safeUrl = (u) => /^(https?:\/\/|[\w][\w./%-]*$)/.test(u);
function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (m, a, u) => safeUrl(u) ? `<img src="${u}" alt="${a}" loading="lazy">` : "")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, a, u) => safeUrl(u) ? `<a href="${u}" target="_blank" rel="noopener noreferrer">${a}</a>` : a);
}
function md(src) {
  const out = []; let list = false, code = null, para = [];
  const flush = () => { if (para.length) { out.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; } };
  const endList = () => { if (list) { out.push("</ul>"); list = false; } };
  const pre = (c) => "<pre><code>" + esc(c.join("\n")) + "</code></pre>";
  for (const raw of src.split("\n")) {
    const fence = /^\s*(```|~~~)/.test(raw);
    if (code !== null) { if (fence) { out.push(pre(code)); code = null; } else code.push(raw); continue; }
    if (fence) { flush(); endList(); code = []; continue; }
    const h = raw.match(/^(#{1,4})\s+(.*)/), li = raw.match(/^\s*[-*]\s+(.*)/);
    if (h) { flush(); endList(); const n = h[1].length + 1; out.push(`<h${n}>${inline(h[2])}</h${n}>`); }
    else if (li) { flush(); if (!list) { out.push("<ul>"); list = true; } out.push("<li>" + inline(li[1]) + "</li>"); }
    else if (!raw.trim()) { flush(); endList(); }
    else para.push(raw.trim());
  }
  flush(); endList(); if (code !== null) out.push(pre(code));
  return out.join("");
}

const modal = $("modal");
$("closeBtn").onclick = () => modal.close();
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

/* ---------- Content layer: seed data, content.json, then the local draft made in the root panel ---------- */
const EDITABLE = ["about", "status", "availability", "links", "achievements", "challenges"];
const pickData = () => Object.fromEntries(EDITABLE.map((k) => [k, SITE[k]]));
const applyData = (d) => EDITABLE.forEach((k) => { if (d && d[k] !== undefined) SITE[k] = d[k]; });
let DRAFT = false;
function persist() {
  try { localStorage.setItem("site-draft", JSON.stringify(pickData())); DRAFT = true; } catch (e) {}
  renderDynamic();
}
function renderDynamic() {
  const L = SITE.links;
  $("heroLinks").innerHTML = link("GitHub", L.github, true) + link("LinkedIn", L.linkedin) + `<a class="btn" href="#challenges">CTF challenges</a>`;
  $("aboutText").innerHTML = SITE.about.map((p) => `<p>${txt(p)}</p>`).join("") + `<blockquote class="mind"><b>My mindset</b>${SITE.mindset.map((p) => `<p>${txt(p)}</p>`).join("")}</blockquote>`;
  mq($("focusList"), SITE.focus.map((f) => `<div class="fc"><b>${txt(f.t)}</b>${txt(f.d)}</div>`), 1);
  $("status").innerHTML = txt(SITE.status); $("contactSub").innerHTML = txt(SITE.availability);
  const meta = (a) => [a.date, a.place].filter(Boolean).map(esc).join(" &middot; ");
  mq($("achList"), SITE.achievements.map((a, i) => `
    <button class="card ach" data-ach="${i}" aria-haspopup="dialog">
      <span class="badge gold">${txt(a.badge || "achievement")}</span>
      <h3>${txt(a.title)}</h3><p class="muted">${meta(a)}</p><p>${txt(a.summary)}</p>
      <span class="more">Open details</span>
    </button>`), 1);
  mq($("chList"), SITE.challenges.map((c, i) => `
    <button class="card ${catCls(c.category)}" data-ch="${i}" aria-haspopup="dialog">
      <span class="badge ${catCls(c.category)}">${txt(c.category)}</span>
      <h3>${txt(c.title)}</h3>${c.event ? `<p class="evt">${esc(c.event)}</p>` : ""}
      <p class="muted">${[c.difficulty, c.points && c.points + " pts", c.date].filter(Boolean).map(esc).join(" &middot; ")}</p>
      <p>${txt(c.summary)}</p>${tags(c.tags || [])}
      <span class="more">Read write-up</span>
    </button>`), -1);
  mq($("contactLinks"), [link("GitHub", L.github, true), link("LinkedIn", L.linkedin), link("Email", L.email && "mailto:" + L.email)], -1);
  $("yr").textContent = new Date().getFullYear();
}
async function loadContent() {
  try { const r = await fetch("content.json", { cache: "no-store" }); if (r.ok) applyData(await r.json()); } catch (e) {}
  try { const d = localStorage.getItem("site-draft"); if (d) { applyData(JSON.parse(d)); DRAFT = true; } } catch (e) {}
  renderDynamic();
}
function catCls(c) { return /forensic/i.test(c || "") ? "df" : "re"; }

/* ---------- Detail popups ---------- */
function openAch(i) {
  const a = SITE.achievements[i];
  $("modalBody").innerHTML = `<span class="badge gold">${txt(a.badge || "achievement")}</span><h3 id="mTitle" style="font-size:1.6rem">${txt(a.title)}</h3>
    <p class="muted" style="margin-bottom:12px">${[a.date, a.place].filter(Boolean).map(esc).join(" &middot; ")}</p>
    <div class="md">${md(a.details || a.summary || "")}</div>${a.url ? `<div class="btns">${link("Evidence", a.url)}</div>` : ""}`;
  modal.showModal();
}
function openCh(i) {
  const c = SITE.challenges[i];
  $("modalBody").innerHTML = `<span class="badge ${catCls(c.category)}">${txt(c.category)}</span><h3 id="mTitle" style="font-size:1.6rem">${txt(c.title)}</h3>${c.event ? `<p class="evt">${esc(c.event)}</p>` : ""}
    <p class="muted" style="margin-bottom:10px">${[c.difficulty, c.points && c.points + " pts", c.date].filter(Boolean).map(esc).join(" &middot; ")}</p>${tags(c.tags || [])}
    <div class="md" id="wuBody">Loading write-up...</div>
    ${c.flag ? '<div class="flagbox"><button class="btn" id="flagBtn">Click to reveal the flag</button></div>' : ""}`;
  modal.showModal();
  if (c.flag) $("flagBtn").onclick = (e) => { e.target.parentNode.innerHTML = `<code>${esc(c.flag)}</code>`; };
  if (c.body) $("wuBody").innerHTML = md(c.body);
  else if (c.file) fetch(c.file).then((r) => r.ok ? r.text() : Promise.reject()).then((t) => { $("wuBody").innerHTML = md(t); })
    .catch(() => { $("wuBody").innerHTML = `<p class="ph-text">Could not load ${esc(c.file)}. Opening index.html straight from disk blocks loading; use the published site.</p>`; });
  else $("wuBody").innerHTML = "<p class=\"muted\">No write-up text yet.</p>";
}
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-ach]"), c = e.target.closest("[data-ch]");
  if (a) openAch(+a.dataset.ach); else if (c) openCh(+c.dataset.ch);
});

/* ---------- Root panel (add / edit / delete without touching GitHub files) ---------- */
const FIELDS = {
  achievements: [["title", "Title"], ["badge", "Badge (e.g. first place)"], ["date", "Date"], ["place", "Event / place"], ["summary", "Short summary (shown on the card)", "a"], ["details", "Details (Markdown)", "md"], ["url", "Evidence link (optional)"]],
  challenges: [["title", "Title"], ["category", "Category (Reverse Engineering, Digital Forensics, Pwn...)"], ["event", "Platform / event (e.g. picoCTF, Hack The Box, CyberCamp 7.0)"], ["date", "Date"], ["points", "Points"], ["difficulty", "Difficulty"], ["tags", "Tags / tools (comma separated)"], ["summary", "Short summary (shown on the card)", "a"], ["body", "Write-up (Markdown)", "md"], ["flag", "Flag (hidden until the reader clicks)"]],
  info: [["status", "Status line"], ["availability", "Contact text", "a"], ["about", "About (blank line between paragraphs)", "md"], ["github", "GitHub URL"], ["linkedin", "LinkedIn URL"], ["email", "Email"]]
};
const TPL = {
  "Digital forensics": "## Scenario\nWhat the challenge told you and what you had to find.\n\n## Evidence\n- The file or image you were given\n- How you verified it: `sha256sum evidence.img`\n\n## Analysis\n- The tool you started with and what it showed first\n- The artefact that mattered\n- Dead ends, and why\n\n## Key command\n~~~\npaste the command that surfaced the finding\n~~~\n\n## Findings\nWhat happened, in order.\n\n## What I learned\n- The main takeaway\n",
  "Reverse engineering": "## Challenge\nWhat the binary was supposed to do and what you had to make it do.\n\n## Binary details\n- Format and architecture, stripped or not\n- First look: `file`, `strings`, protections\n\n## Static analysis\n- The functions you found and what each did\n- The check that guarded the flag\n\n## Dynamic analysis\n- Breakpoints and the values you watched\n\n## Solve script\n~~~\npaste the short script or patch that solved it\n~~~\n\n## What I learned\n- The main takeaway\n"
};
let AT = "achievements", AE = null;
const fv = (v) => (Array.isArray(v) ? v.join(", ") : v || "");
function infoVals() { return { status: SITE.status, availability: SITE.availability, about: SITE.about.join("\n\n"), github: SITE.links.github, linkedin: SITE.links.linkedin, email: SITE.links.email }; }
function formHtml() {
  const v = AT === "info" ? infoVals() : AE === "new" ? {} : SITE[AT][AE];
  const tpl = AT === "challenges" && AE === "new" ? `<label>Start from a template<select name="tpl"><option value="">(blank)</option>${Object.keys(TPL).map((k) => `<option>${k}</option>`).join("")}</select></label>` : "";
  return `<form class="fform" id="edForm" onsubmit="return false">${tpl}${FIELDS[AT].map(([k, lab, t]) =>
    t ? `<label>${lab}<textarea name="${k}" class="${t === "md" ? "mdin" : ""}" rows="${t === "md" ? 10 : 3}">${esc(fv(v[k]))}</textarea></label>`
      : `<label>${lab}<input name="${k}" value="${esc(fv(v[k]))}"></label>`).join("")}
    ${AT !== "info" ? '<div class="md prev" id="edPrev"></div>' : ""}
    <div class="btns"><button class="btn primary" data-act="save">Save</button><button class="btn" data-act="cancel">Cancel</button></div></form>`;
}
function panel() {
  const tabs = ["achievements", "challenges", "info"].map((t) => `<button class="chip" data-act="tab" data-t="${t}" aria-pressed="${t === AT}">${t}</button>`).join("");
  let body;
  if (AT === "info" || AE !== null) body = formHtml();
  else body = `<div class="btns" style="margin-bottom:10px"><button class="btn primary" data-act="add">+ Add ${AT === "achievements" ? "achievement" : "CTF challenge"}</button></div>` +
    (SITE[AT].map((x, i) => `<div class="arow"><span>${esc(x.title || "(untitled)")}</span><span class="btns"><button class="btn" data-act="edit" data-i="${i}">Edit</button><button class="btn" data-act="del" data-i="${i}">Delete</button></span></div>`).join("") || '<p class="muted">Nothing yet.</p>');
  $("modalBody").innerHTML = `<h3 id="mTitle" style="font-size:1.4rem">root panel</h3>
    <p class="muted" style="margin:6px 0 14px">Edits are saved in this browser${DRAFT ? " (unpublished draft)" : ""}. To publish them: <b>Export content.json</b> and upload it to the repository root.</p>
    <div class="chips">${tabs}</div>${body}
    <div class="btns adm-foot"><button class="btn primary" data-act="export">Export content.json</button><button class="btn" data-act="discard">Discard local draft</button></div>`;
  const m = $("edForm") && $("edForm").querySelector(".mdin"), pv = $("edPrev");
  if (m && pv) { const u = () => { pv.innerHTML = md(m.value); }; m.oninput = u; u(); }
}
function openAdmin() { AE = null; panel(); modal.showModal(); }
$("modalBody").addEventListener("change", (e) => {
  if (e.target.name !== "tpl") return;
  const b = $("edForm").elements.body;
  if (e.target.value && (!b.value.trim() || confirm("Replace the current write-up text with the template?"))) { b.value = TPL[e.target.value]; b.dispatchEvent(new Event("input")); }
});
$("modalBody").addEventListener("click", (e) => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const a = b.dataset.act;
  if (a === "tab") { AT = b.dataset.t; AE = null; panel(); }
  else if (a === "add") { AE = "new"; panel(); }
  else if (a === "edit") { AE = +b.dataset.i; panel(); }
  else if (a === "cancel") { AE = null; panel(); }
  else if (a === "del") { if (confirm("Delete this entry?")) { SITE[AT].splice(+b.dataset.i, 1); persist(); panel(); } }
  else if (a === "save") {
    const f = $("edForm").elements, o = {};
    FIELDS[AT].forEach(([k]) => { o[k] = f[k].value.trim(); });
    if (AT === "info") {
      SITE.status = o.status; SITE.availability = o.availability; SITE.about = o.about.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
      SITE.links = { ...SITE.links, github: o.github, linkedin: o.linkedin, email: o.email };
    } else {
      if (AT === "challenges") o.tags = o.tags.split(",").map((t) => t.trim()).filter(Boolean);
      if (AE === "new") SITE[AT].push(o); else SITE[AT][AE] = { ...SITE[AT][AE], ...o };
      AE = null;
    }
    persist(); panel();
  }
  else if (a === "export") exportData();
  else if (a === "discard") { if (confirm("Throw away the local draft and reload the published content?")) { try { localStorage.removeItem("site-draft"); } catch (x) {} location.reload(); } }
});
function exportData() {
  const el = document.createElement("a");
  el.href = URL.createObjectURL(new Blob([JSON.stringify(pickData(), null, 2)], { type: "application/json" }));
  el.download = "content.json"; el.click(); URL.revokeObjectURL(el.href);
}

/* ---------- Terminal dock ---------- */
const SECS = { about: "who I am", achievements: "wins and milestones", challenges: "CTF write-ups", certifications: "certifications", contact: "get in touch" };
const ROOT_HASH = "aa866954156307ed5efd9a3e2e913a106a214c7a6f4ff9f175639a00a981fa48";   /* SHA-256 of the root password, not the password itself */
let ADMIN = false;
const dOut = $("dockOut"), cmd = $("cmd"), pwBox = $("pwBox"), pwIn = $("pwIn"), hist = []; let hi = 0;
const say = (t, c) => { dOut.hidden = false; dOut.insertAdjacentHTML("beforeend", `<div class="${c || ""}">${t}</div>`); dOut.scrollTop = dOut.scrollHeight; };
const sha = async (t) => [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)))].map((b) => b.toString(16).padStart(2, "0")).join("");
function jump(s) { const el = SECS[s] && $(s); if (!el) return false; el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); return true; }
function help() {
  say("<b>sections</b>: " + Object.keys(SECS).join(" &middot; "));
  say("<b>goto &lt;section&gt;</b> (or just type its name) &middot; <b>ls</b> &middot; <b>whoami</b> &middot; <b>clear</b> &middot; <b>close</b>");
  if (ADMIN) say("<b>admin</b> open the panel &middot; <b>export</b> download content.json &middot; <b>exit</b> leave root", "ok");
}
function run(v) {
  say(`<span class="dp">$</span> ${esc(v)}`);
  const [c, ...r] = v.toLowerCase().split(/\s+/), arg = r.join(" ");
  if (["--help", "-h", "help", "?"].includes(c)) return help();
  if (["ls", "sections"].includes(c)) return say(Object.entries(SECS).map(([k, d]) => `<b>${k}</b> &ndash; ${d}`).join("<br>"));
  if (SECS[c]) return jump(c);
  if (["goto", "cd"].includes(c)) return jump(arg) || say("no such section, try <b>ls</b>", "err");
  if (c === "whoami") return say(esc(SITE.handle) + " (" + esc(SITE.name) + ")");
  if (c === "clear") { dOut.innerHTML = ""; dOut.hidden = true; return; }
  if (c === "close") { dOut.hidden = true; return; }
  if (c === "root") { if (ADMIN) return say("already root. type <b>admin</b>", "ok"); pwBox.hidden = false; pwIn.value = ""; $("pwMsg").textContent = ""; pwIn.focus(); return; }
  if (["admin", "export", "exit"].includes(c)) {
    if (!ADMIN) return say("permission denied", "err");
    if (c === "admin") return openAdmin();
    if (c === "export") return exportData();
    ADMIN = false; $("dockP").textContent = "jelbene@blog:~$"; return say("root session closed");
  }
  say(`command not found: ${esc(c)}. try <b>--help</b>`, "err");
}
cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && cmd.value.trim()) { hist.push(cmd.value); hi = hist.length; run(cmd.value.trim()); cmd.value = ""; }
  else if (e.key === "ArrowUp" && hist.length) { hi = Math.max(0, hi - 1); cmd.value = hist[hi]; e.preventDefault(); }
  else if (e.key === "ArrowDown") { hi = Math.min(hist.length, hi + 1); cmd.value = hist[hi] || ""; e.preventDefault(); }
  else if (e.key === "Escape") dOut.hidden = true;
});
pwIn.addEventListener("keydown", async (e) => {
  if (e.key === "Escape") { pwBox.hidden = true; cmd.focus(); }
  if (e.key !== "Enter") return;
  const ok = (await sha(pwIn.value)) === ROOT_HASH; pwIn.value = "";
  if (!ok) { $("pwMsg").textContent = "wrong password"; return; }
  pwBox.hidden = true; ADMIN = true; $("dockP").textContent = "root@blog:~#";
  say("access granted. <b>admin</b> reopens the panel", "ok"); cmd.focus(); openAdmin();
});
modal.addEventListener("close", () => { if (ADMIN) cmd.focus(); });

loadContent();

/* ---------- Theme: hex offsets, scroll offset, name bytes ---------- */
function catCls(c) { return /forensic/i.test(c) ? "df" : "re"; }
document.querySelectorAll("h2").forEach((h, i) => { h.dataset.off = "0x" + (0x1000 + i * 0x40).toString(16).toUpperCase(); });
addEventListener("scroll", () => { $("off").textContent = "0x" + Math.round(scrollY).toString(16).toUpperCase().padStart(4, "0"); }, { passive: true });
$("hexBar").innerHTML = (() => {
  const s = SITE.name.slice(0, 16);
  const b = Array.from(s).map((ch) => `<i>${ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")}</i>`).join(" ");
  return `<span>00000000</span><span>${b}</span><span>|${esc(s)}|</span>`;
})();

/* ---------- Background: slowly scrolling hex dump with file signatures ---------- */
(function () {
  const c = $("rain"), x = c.getContext("2d");
  if (!x) return;
  const LH = 18, SIG = ["4D 5A 90 00", "7F 45 4C 46", "89 50 4E 47", "25 50 44 46", "50 4B 03 04", "55 8B EC 83"];
  const hx = () => (Math.random() * 256 | 0).toString(16).toUpperCase().padStart(2, "0");
  let w, h, rows = [], addr = 0, y0 = LH;
  function mk() {
    const b = Array.from({ length: 16 }, hx), sig = Math.random() < .06;
    if (sig) b.splice(Math.random() * 12 | 0, 4, ...SIG[Math.random() * SIG.length | 0].split(" "));
    const s = b.map((v) => { const n = parseInt(v, 16); return n > 31 && n < 127 ? String.fromCharCode(n) : "."; }).join("");
    addr += 16;
    return { a: addr.toString(16).toUpperCase().padStart(8, "0"), b, s, sig, hot: Math.random() < .04 ? Math.random() * 16 | 0 : -1 };
  }
  function size() { w = c.width = innerWidth; h = c.height = innerHeight; rows = Array.from({ length: Math.ceil(h / LH) + 2 }, mk); }
  function paint() {
    x.clearRect(0, 0, w, h); x.font = "13px ui-monospace,Menlo,Consolas,monospace";
    (w > 1100 ? [24, w / 2 + 24] : [24]).forEach((cx, k) => rows.forEach((r0, i) => {
      const r = k ? rows[(i + 9) % rows.length] : r0, y = i * LH + y0;
      x.fillStyle = r.sig ? "rgba(183,140,255,.95)" : "rgba(125,160,185,.9)";
      x.fillText(r.a + "  " + r.b.join(" ") + "  |" + r.s + "|", cx, y);
      if (r.hot >= 0) {
        const px = x.measureText(r.a + "  " + r.b.slice(0, r.hot).map((v) => v + " ").join("")).width;
        x.fillStyle = "#37c9ff"; x.fillText(r.b[r.hot], cx + px, y);
      }
    }));
  }
  size(); paint();
  addEventListener("resize", () => { size(); paint(); });
  if (reduce) return;
  let last = 0;
  (function loop(t) {
    requestAnimationFrame(loop);
    if (document.hidden || t - last < 33) return;
    last = t; y0 -= .5;
    if (y0 <= 0) { y0 += LH; rows.shift(); rows.push(mk()); }
    paint();
  })(0);
})();


/* ---------- Hero: build / break / defend loop ---------- */
(function () {
  const box = $("loop"), cap = $("loopCap");
  const bl = [...box.querySelectorAll(".b")], ws = [...document.querySelectorAll("#headline .w")];
  const caps = ["build: stack the layers, one by one", "break: probe for the weakest layer", "defend: patch it, then learn why it held"];
  const st = [["built", "built", "built", "built", "built"], ["probing", "probed", "vulnerable", "untouched", "untouched"], ["monitoring", "blocking", "patched", "safe", "safe"]];
  let ph = 0;
  function go(p) {
    ph = p; box.dataset.phase = p; cap.textContent = caps[p];
    bl.forEach((b, i) => { b.querySelector("small").textContent = st[p][i]; });
    ws.forEach((w) => w.classList.toggle("act", +w.dataset.p === p));
    if (p === 0) { bl.forEach((b) => b.classList.remove("on")); bl.forEach((b, i) => setTimeout(() => b.classList.add("on"), 150 + i * 320)); }
  }
  if (reduce) { bl.forEach((b) => b.classList.add("on")); go(2); return; }
  go(0); setInterval(() => go((ph + 1) % 3), 3600);
})();

/* ---------- Custom cursor: reticle that shows hex coordinates ---------- */
(function () {
  if (!matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  document.documentElement.classList.add("has-cur");
  const layer = document.createElement("div"); layer.id = "curLayer";
  const ring = document.createElement("div"), dot = document.createElement("div"), lab = document.createElement("div");
  ring.className = "cur-ring"; dot.className = "cur-dot"; lab.className = "cur-lab";
  layer.append(ring, dot, lab); document.body.append(layer);
  const hex = (n) => Math.round(n).toString(16).toUpperCase().padStart(4, "0");
  let mx = -100, my = -100, rx = -100, ry = -100;
  addEventListener("pointermove", (e) => {
    mx = e.clientX; my = e.clientY; layer.classList.add("on");
    dot.style.transform = `translate(${mx}px,${my}px)`;
    const t = e.target.closest ? e.target.closest("a,button,textarea,input,select,[data-ach],[data-ch]") : null;
    ring.classList.toggle("lock", !!t);
    lab.textContent = t ? (t.matches("textarea,input") ? "edit" : t.matches(".close") ? "close" : "open") : "0x" + hex(mx) + ":" + hex(my);
  });
  addEventListener("pointerdown", () => ring.classList.add("press"));
  addEventListener("pointerup", () => ring.classList.remove("press"));
  document.documentElement.addEventListener("mouseleave", () => layer.classList.remove("on"));
  (function loop() {
    rx += (mx - rx) * .2; ry += (my - ry) * .2;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    lab.style.transform = `translate(${rx + 22}px,${ry + 18}px)`;
    requestAnimationFrame(loop);
  })();
  /* the modal lives in the top layer, so carry the cursor into it while it is open */
  new MutationObserver(() => (modal.open ? modal : document.body).append(layer)).observe(modal, { attributes: true, attributeFilter: ["open"] });
})();


/* ---------- Photo badge ---------- */
(function () {
  $("idName").textContent = SITE.name;
  $("idRole").textContent = "Software engineering, INSAT";
  $("idHandle").textContent = "handle: " + SITE.handle;
  const img = $("idImg"), ph = $("idPh");
  if (SITE.photo) {
    img.onerror = () => { img.hidden = true; ph.hidden = false; };
    img.src = SITE.photo; img.hidden = false; ph.hidden = true;
  }
})();

/* ---------- Welcome intro: secure handshake, decrypting title, doors open sideways ---------- */
function scramble(el, text, ms) {
  const chars = "01ABCDEF#$<>/{}", t0 = performance.now(), id = el._s = (el._s || 0) + 1;
  (function f(now) {
    if (el._s !== id) return;
    const p = Math.min(1, (now - t0) / ms), n = Math.floor(p * text.length);
    el.textContent = text.slice(0, n) + Array.from(text.slice(n)).map((c) => c === " " ? " " : chars[Math.random() * chars.length | 0]).join("");
    if (p < 1) requestAnimationFrame(f);
  })(t0);
}
function playIntro() {
  const w = $("welcome"), root = document.documentElement, T = [];
  root.classList.remove("no-intro"); root.classList.add("intro");
  w.className = ""; w.hidden = false;
  $("wLog").textContent = ""; $("wTitle").textContent = ""; $("wSub").style.opacity = 0;
  const bar = $("wBar"); bar.style.transition = "none"; bar.style.width = "0"; void bar.offsetWidth; bar.style.transition = "";
  let done = false;
  const later = (fn, ms) => T.push(setTimeout(fn, ms));
  const finish = () => {
    if (done) return; done = true; T.forEach(clearTimeout);
    w.classList.add("open");
    setTimeout(() => { w.hidden = true; root.classList.remove("intro"); }, 1000);
    try { sessionStorage.setItem("welcomed", "1"); } catch (e) {}
  };
  $("wSkip").onclick = finish; $("wSkip").focus();
  addEventListener("keydown", finish, { once: true });
  ["> opening secure channel ...", "> verifying visitor ............ OK", "> decrypting blog ..............."]
    .forEach((t, i) => later(() => { $("wLog").textContent += t + "\n"; }, 300 + i * 550));
  later(() => { bar.style.width = "100%"; }, 300);
  later(() => scramble($("wTitle"), "Welcome to Samer Themri's blog", 1500), 2100);
  later(() => { $("wSub").style.opacity = 1; }, 3800);
  later(finish, 5300);
}
$("replay").hidden = reduce;
$("replay").onclick = () => { scrollTo(0, 0); playIntro(); };
if (!document.documentElement.classList.contains("no-intro")) playIntro();


/* ---------- Brand: hex monogram decodes to the name on hover ---------- */
(function () {
  const b = document.querySelector(".brand"), t = $("brandTxt");
  const to = (s) => (reduce ? (t.textContent = s) : scramble(t, s, 450));
  ["pointerenter", "focus"].forEach((e) => b.addEventListener(e, () => to("samer_themri")));
  ["pointerleave", "blur"].forEach((e) => b.addEventListener(e, () => to("0x5354")));
})();

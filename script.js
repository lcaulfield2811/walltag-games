:root{
  --bg0:#070708;
  --bg1:#0f0f12;
  --panel:rgba(255,255,255,.06);
  --border:rgba(255,255,255,.12);
  --muted:rgba(255,255,255,.72);
  --ink:#ffffff;

  --purple:#a855f7;
  --cyan:#00e5ff;
  --pink:#ff2bd6;

  --shadow: rgba(0,0,0,.45);
  --grid: rgba(255,255,255,.06);
}

*{ box-sizing:border-box; }
body{
  margin:0;
  min-height:100vh;
  color:var(--ink);
  font-family: system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  background:
    radial-gradient(circle at 15% 12%, rgba(168,85,247,.18), transparent 40%),
    radial-gradient(circle at 85% 18%, rgba(0,229,255,.14), transparent 45%),
    radial-gradient(circle at 55% 92%, rgba(255,43,214,.12), transparent 55%),
    linear-gradient(180deg, var(--bg0), var(--bg1));
}

body::after{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.18;
  background-image:
    linear-gradient(90deg, var(--grid) 1px, transparent 1px),
    linear-gradient(var(--grid) 1px, transparent 1px);
  background-size: 90px 90px;
}

.top{
  width:min(1100px, 100%);
  margin: 22px auto 0;
  padding: 16px 18px;
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:16px;
}

.brand{ text-align:left; }
.spray{
  font-weight:900;
  letter-spacing:6px;
  font-size: clamp(34px, 6vw, 68px);
  line-height:0.95;
  color: var(--purple);
  text-shadow: 0 0 22px rgba(168,85,247,.35);
}
.spray.glow{
  color: var(--ink);
  text-shadow:
    0 0 10px rgba(255,255,255,.20),
    0 0 18px rgba(0,229,255,.20);
}
.tagline{
  margin-top:8px;
  color:var(--muted);
  font-size:14px;
}

.statusPanel{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  justify-content:flex-end;
}
.chip{
  padding:8px 10px;
  border-radius:999px;
  background: rgba(0,0,0,.25);
  border: 1px solid rgba(255,255,255,.14);
  font-size:13px;
  color:var(--muted);
}
.chip b{ color:var(--ink); }

.main{
  width:min(1100px, 100%);
  margin: 10px auto 26px;
  padding: 0 18px;
}

.grid{
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap:14px;
  margin-top: 14px;
}

.card{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:10px;
  padding: 14px;
  border-radius:18px;
  text-decoration:none;
  color:var(--ink);
  background: var(--panel);
  border: 1px solid var(--border);
  box-shadow: 0 12px 30px var(--shadow);
  backdrop-filter: blur(6px);
  overflow:hidden;
  min-height: 170px;
  transition: transform .14s ease, border-color .14s ease, background .14s ease;
}

.card::before{
  content:"";
  position:absolute;
  inset:-14px;
  opacity:.22;
  filter: blur(14px);
  z-index:-1;
}

.cardTop{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
}

.badge{
  font-size:12px;
  padding:6px 9px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.16);
  background: rgba(0,0,0,.22);
  color: var(--muted);
  letter-spacing:.6px;
  text-transform:uppercase;
}
.badge.live{
  color:white;
  border-color: rgba(168,85,247,.45);
  background: rgba(168,85,247,.18);
}
.badge.soonBadge{
  color:white;
  border-color: rgba(255,43,214,.45);
  background: rgba(255,43,214,.14);
}
.badge.mode{
  border-color: rgba(0,229,255,.35);
  background: rgba(0,229,255,.10);
}

.card h2{
  margin:0;
  font-size:22px;
  letter-spacing:.5px;
}

.card p{
  margin:0;
  color:var(--muted);
  font-size:13px;
  line-height:1.35;
}

.cardBottom{
  margin-top:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
}

.pill{
  font-size:12px;
  color: var(--muted);
  border:1px solid rgba(255,255,255,.14);
  background: rgba(0,0,0,.18);
  padding:6px 10px;
  border-radius:999px;
}

.arrow{
  font-weight:900;
  opacity:.85;
}

.playable::before{ background: rgba(168,85,247,.95); }
.playable:hover{
  transform: translateY(-3px);
  border-color: rgba(255,255,255,.26);
  background: rgba(255,255,255,.08);
}

.soon{
  opacity: .78;
  cursor:not-allowed;
}
.soon::before{ background: rgba(255,43,214,.85); }
.soon:hover{ transform:none; }

.lower{
  margin-top: 14px;
  display:grid;
  grid-template-columns: 1.2fr 1fr;
  gap:14px;
}

.panel{
  padding: 14px;
  border-radius:18px;
  background: var(--panel);
  border: 1px solid var(--border);
  box-shadow: 0 12px 30px var(--shadow);
  backdrop-filter: blur(6px);
}
.panel h3{
  margin:0 0 10px;
  letter-spacing:.6px;
}
.panel ul{
  margin:0;
  padding-left: 18px;
  color: var(--muted);
}
.panel li{ margin: 6px 0; }
.panel p{ margin:0; color:var(--muted); line-height:1.45; }
.tiny{ margin-top:10px; color: rgba(255,255,255,.62); font-size:12px; }

.footer{
  width:min(1100px, 100%);
  margin: 0 auto 26px;
  padding: 0 18px;
  display:flex;
  justify-content:space-between;
  color: var(--muted);
  font-size:13px;
}
.muted{ opacity:.75; }

@media (max-width: 980px){
  .grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 680px){
  .top{ flex-direction:column; align-items:flex-start; }
  .statusPanel{ justify-content:flex-start; }
  .grid{ grid-template-columns: 1fr; }
  .lower{ grid-template-columns: 1fr; }
}

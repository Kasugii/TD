/* ============================================================
   Serveur — Le Labo des Chiffres
   PvP live (duel) + leaderboard partagé avec bots.
   Déploiement Render : Node.js. Dépendance unique : "ws".

   Règle des bots : ils montent EN MÊME TEMPS que les vrais
   joueurs mais MOINS vite. Quand un joueur gagne des points,
   chaque bot gagne une fraction de ce gain. Comme ça une
   vraie joueuse peut rester 1ère, mais le classement reste
   vivant et IDENTIQUE sur tous les écrans (autorité serveur).
   ============================================================ */
const http = require("http");
const { WebSocketServer } = require("ws");

const PORT = process.env.PORT || 3000;

// ---- bots (en mémoire serveur) ----
const BOT_NAMES = ["Tina ✦","Léo ✦","Maya ✦","Hugo ✦","Zoé ✦","Sami ✦"];
const bots = BOT_NAMES.map((n, i) => ({ pseudo: n, score: 5 + i * 6, bot: true }));

// ---- état joueurs réels ----
const leaderboard = {};        // pseudo -> score
const players = new Map();     // ws -> { pseudo }
const duels = new Map();       // code -> { host, guest, theme }

function topBoard(n = 30) {
  const real = Object.entries(leaderboard).map(([pseudo, score]) => ({ pseudo, score, bot: false }));
  return [...real, ...bots]
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}
function broadcast(obj) {
  const msg = JSON.stringify(obj);
  for (const ws of players.keys()) if (ws.readyState === 1) ws.send(msg);
}
function sendBoard() { broadcast({ type: "board", board: topBoard() }); }

// quand un VRAI joueur gagne "gain" points -> les bots montent un peu
function botsFollow(gain) {
  if (gain <= 0) return;
  bots.forEach(b => {
    // chaque bot gagne entre 15% et 40% du gain du joueur
    const frac = 0.15 + Math.random() * 0.25;
    b.score += Math.round(gain * frac);
  });
}

// ---- HTTP (health check Render) ----
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Labo des Chiffres — serveur OK\n");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  players.set(ws, { pseudo: null });
  ws.send(JSON.stringify({ type: "board", board: topBoard() }));

  ws.on("message", (raw) => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    const me = players.get(ws);
    if (!me) return;

    switch (m.type) {
      case "hello":
        me.pseudo = String(m.pseudo || "Joueur").slice(0, 16);
        if (!(me.pseudo in leaderboard)) leaderboard[me.pseudo] = 0;
        sendBoard();
        break;

      // score absolu envoyé par le client (on garde le meilleur)
      case "score": {
        if (!me.pseudo) break;
        const s = Math.max(0, Math.min(99999, m.score | 0));
        const old = leaderboard[me.pseudo] || 0;
        if (s > old) {
          botsFollow(s - old);   // les bots suivent la progression
          leaderboard[me.pseudo] = s;
        }
        sendBoard();
        break;
      }

      // ---- DUEL : l'hôte crée ----
      case "duel_create": {
        const code = Math.random().toString(36).slice(2, 6).toUpperCase();
        duels.set(code, { host: ws, guest: null, theme: m.theme });
        ws.send(JSON.stringify({ type: "duel_created", code, theme: m.theme }));
        break;
      }
      // ---- DUEL : l'invité rejoint ----
      case "duel_join": {
        const d = duels.get(m.code);
        if (!d) { ws.send(JSON.stringify({ type: "duel_error", msg: "Code introuvable." })); break; }
        if (d.guest) { ws.send(JSON.stringify({ type: "duel_error", msg: "Duel déjà complet." })); break; }
        d.guest = ws;
        const hostName = players.get(d.host)?.pseudo || "Hôte";
        const guestName = me.pseudo || "Invité";
        // on prévient les deux : la partie démarre
        d.host.send(JSON.stringify({ type: "duel_start", theme: d.theme, you: hostName, opp: guestName, role: "host" }));
        d.guest.send(JSON.stringify({ type: "duel_start", theme: d.theme, you: guestName, opp: hostName, role: "guest" }));
        break;
      }
      // ---- DUEL : relais du score en direct ----
      case "duel_progress": {
        const d = duels.get(m.code);
        if (!d) break;
        const other = (ws === d.host) ? d.guest : d.host;
        if (other && other.readyState === 1) {
          other.send(JSON.stringify({ type: "duel_opp", score: m.score, done: !!m.done }));
        }
        break;
      }
      // ---- DUEL : fin ----
      case "duel_end": {
        const d = duels.get(m.code);
        if (!d) break;
        const other = (ws === d.host) ? d.guest : d.host;
        if (other && other.readyState === 1) {
          other.send(JSON.stringify({ type: "duel_finished" }));
        }
        duels.delete(m.code);
        break;
      }
    }
  });

  ws.on("close", () => {
    // nettoie les duels où ce joueur était présent
    for (const [code, d] of duels) {
      if (d.host === ws || d.guest === ws) {
        const other = d.host === ws ? d.guest : d.host;
        if (other && other.readyState === 1) other.send(JSON.stringify({ type: "duel_left" }));
        duels.delete(code);
      }
    }
    players.delete(ws);
  });
});

server.listen(PORT, () => console.log("Serveur Labo des Chiffres sur le port " + PORT));

const CONFIG = {
  recipient: "Lise",
  launchDate: new Date("2026-08-13T12:00:00+02:00"),
  tripDate: new Date("2026-08-22T15:00:00+02:00"),
  airbnbUrl: "https://www.airbnb.fr/rooms/1088232055415737379?adults=2&check_in=2026-08-22&check_out=2026-08-23&guests=2&location=Le%20Havre%2C%20France&search_mode=regular_search&amenities%5B%5D=25",
  restaurantUrl: "https://bistrot-canaille.com/",
  puzzles: [
    {
      id:"nid", icon:"⌂", label:"Samedi 22 · arrivée", title:"Première pièce du puzzle",
      teaser:"Une seule nuit. Un endroit choisi pour nous deux.",
      question:"Je ne suis ni un hôtel, ni notre maison. Pourtant, samedi soir ma clé sera la nôtre et dimanche matin il faudra déjà me quitter. Qui suis-je ?",
      answers:["airbnb","air bnb","appartement","studio","location"],
      revealTitle:"Notre petit nid pour la nuit",
      revealText:"Une nuit au Havre, du 22 au 23 août, dans un studio rien que pour nous. Je ne te montre pas encore tout : l'endroit cache un détail qui mérite sa propre énigme.",
      meta:["22 → 23 août","1 nuit","Nous deux"]
    },
    {
      id:"muma", icon:"◫", label:"Samedi · une évidence", title:"La seule étape que tu connais déjà",
      teaser:"Celle-ci n'est pas vraiment une surprise. C'est même un peu ta faute.",
      question:"Tu me l'as demandé toi-même. Face à la mer, Monet, Boudin et Dufy y ont rendez-vous avec la lumière du Havre. Où va-t-on ?",
      answers:["muma","musée malraux","musee malraux","musée d'art moderne andré malraux","musee d art moderne andre malraux"],
      revealTitle:"Le MuMa, évidemment",
      revealText:"Promesse tenue. Puisque c'est toi qui l'as demandé, le Musée d'art moderne André Malraux fait officiellement partie de notre samedi.",
      meta:["Samedi","Face à la mer","Choix de Lise ✓"]
    },
    {
      id:"bulles", icon:"♨", label:"Samedi · parenthèse", title:"Ce que l'appartement ne disait pas encore",
      teaser:"Une très bonne raison de prendre notre temps avant de ressortir.",
      question:"Je fais des bulles sans être du champagne, je chauffe sans être un radiateur et je suis beaucoup plus agréable à deux. Qui suis-je ?",
      answers:["jacuzzi","spa","balneo","balnéo","baignoire balneo","baignoire balnéo","bain bouillonnant","bain a remous","bain à remous"],
      revealTitle:"Jacuzzi / baignoire balnéo à l'appartement",
      revealText:"Voilà le détail que je gardais pour moi : notre studio a de quoi transformer une simple pause en vraie parenthèse détente. Les bulles sont au programme.",
      meta:["À l'appartement","Détente","À deux"],
      action:{label:"Voir notre appartement",urlKey:"airbnbUrl"}
    },
    {
      id:"sunset", icon:"☼", label:"Samedi · 21 h", title:"Rendez-vous avec l'horizon",
      teaser:"Pour celui-là, impossible d'être en retard : il n'attendra pas.",
      question:"Je descends sans tomber, je rougis sans être gêné et, au bord de la mer, je transforme quelques minutes en carte postale. Qui suis-je ?",
      answers:["coucher de soleil","couché de soleil","sunset","soleil"],
      revealTitle:"21 h — coucher de soleil sur la plage",
      revealText:"Samedi 22 août, à 21 h, je veux qu'on soit sur la plage pour regarder le soleil disparaître. Profite bien de la vue… mais ne traîne pas trop : la soirée ne fait que commencer.",
      meta:["22 août","21 h","Plage du Havre"]
    },
    {
      id:"table", icon:"✦", label:"Samedi · 21 h 30", title:"La suite de la soirée",
      teaser:"Trente minutes après le soleil, quelqu'un nous attend.",
      question:"Mon premier mot annonce une table conviviale. Mon second désigne quelqu'un d'un peu fripon, espiègle, pas toujours très sage. Quel est le nom du lieu où notre table est réservée ?",
      answers:["bistrot canaille","le bistrot canaille","canaille","Bistrot","bistrot"],
      revealTitle:"21 h 30 — Bistrot Canaille",
      revealText:"Après le coucher de soleil, direction Bistrot Canaille. Une table est réservée pour nous deux à 21 h 30. Pas besoin de réfléchir à la suite : je m'en suis occupé.",
      meta:["21 h 30","Table pour 2","Réservé ✓"],
      action:{label:"Découvrir Bistrot Canaille",urlKey:"restaurantUrl"}
    },
    {
      id:"matin", icon:"?", label:"Dimanche 23 · Matin", title:"Quelqu'un a pris le service",
      teaser:"Pas d'adresse. Pas de réservation. Une seule personne à identifier.",
      question:"Dimanche matin, tu n'auras ni adresse à chercher, ni réservation à retrouver. Le responsable sera déjà sur place. Il n'a probablement aucune étoile Michelin, mais il connaît plutôt bien tes goûts. Qui s'occupe de toi ?",
      answers:["paul","toi","c'est toi","cest toi","tu","mon copain","mon amoureux","mon chéri","mon cheri"],
      revealTitle:"Petit-déjeuner maison — préparé par moi",
      revealText:"Surprise : dimanche matin, tu ne cherches rien et tu ne réserves rien. Je m'occupe du petit-déjeuner à l'appartement. Ta seule mission : profiter pendant que je cuisine.",
      meta:["Dimanche matin","9 h 30","Chef : Paul"]
    },
    {
      id:"photos", icon:"◎", label:"Tout le week-end", title:"Les preuves du crime",
      teaser:"La dernière mission ne se résout pas avec un mot. Elle se collectionne.",
      question:"Je fige une seconde, raconte un souvenir et finis souvent dans la galerie d'un téléphone. Qui suis-je ?",
      answers:["photo","photos","photographie","photographies"],
      revealTitle:"Notre chasse aux photos",
      revealText:"À nous de collectionner : une façade Perret, la mer derrière nous, une pose volontairement ridicule, une photo sans regarder l'objectif et surtout LA photo qu'on voudra garder de ce week-end.",
      meta:["Architecture","Mer","Nous deux"]
    }
  ]
};

const state = JSON.parse(localStorage.getItem("lh-surprise-progress-v3") || "{}");
const timeline=document.getElementById("timeline"), dialog=document.getElementById("puzzleDialog"), dialogContent=document.getElementById("dialogContent"), doneCount=document.getElementById("doneCount"), finale=document.getElementById("finale"), startBtn=document.getElementById("startBtn"), countdown=document.getElementById("countdown"), launchNote=document.getElementById("launchNote");
const previewMode=new URLSearchParams(location.search).get("preview")==="1";
const normalize=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").trim();
const completedCount=()=>CONFIG.puzzles.filter(p=>state[p.id]).length;
const isUnlocked=i=>i===0||Boolean(state[CONFIG.puzzles[i-1].id]);
const gameIsOpen=()=>previewMode||new Date()>=CONFIG.launchDate;
function updateCountdown(){const d=CONFIG.tripDate-new Date(); if(d<=0){countdown.textContent="C'est aujourd'hui ♡";return} const days=Math.ceil(d/86400000); countdown.textContent=`J-${days} avant notre week-end`;}
function updateLaunchState(){updateCountdown();const open=gameIsOpen();startBtn.disabled=!open;startBtn.textContent=open?"Ouvrir le carnet":"Ouverture le 15 août à midi";launchNote.textContent=open?"Le carnet est ouvert. Sept fragments, dans l'ordre. À toi de jouer.":"Encore un peu de patience : le carnet s'ouvrira exactement une semaine avant.";}
function render(){timeline.innerHTML="";CONFIG.puzzles.forEach((p,i)=>{const complete=!!state[p.id],unlocked=isUnlocked(i)&&gameIsOpen();const card=document.createElement("article");card.className=`card ${complete?"complete":""} ${!unlocked?"locked":""}`;card.innerHTML=`<div class="step-no">${String(i+1).padStart(2,"0")}</div><div class="icon">${complete?"✓":p.icon}</div><div><span class="tag">${p.label}</span><h3>${complete?p.revealTitle:p.title}</h3><p>${complete?p.revealText:p.teaser}</p></div><button class="unlock" ${unlocked?"":"disabled"} data-index="${i}">${complete?"Revoir":unlocked?"Résoudre":"Verrouillé"}</button>`;timeline.appendChild(card)});doneCount.textContent=completedCount();finale.classList.toggle("hidden",completedCount()!==CONFIG.puzzles.length);document.querySelectorAll(".unlock:not(:disabled)").forEach(b=>b.onclick=()=>openPuzzle(+b.dataset.index));}
function openPuzzle(i){if(!gameIsOpen())return;const p=CONFIG.puzzles[i],complete=!!state[p.id];dialogContent.innerHTML=complete?revealTemplate(p,true):`<div class="modal-body"><p class="eyebrow">Fragment ${String(i+1).padStart(2,"0")} / 07</p><h3>${p.title}</h3><div class="riddle">${p.question}</div><div class="answer-row"><input id="answerInput" autocomplete="off" placeholder="Ta réponse…" aria-label="Réponse"><button class="primary" id="submitAnswer">Valider</button></div><p class="feedback" id="feedback"></p></div>`;dialog.showModal();if(!complete){const input=document.getElementById("answerInput"),submit=document.getElementById("submitAnswer");setTimeout(()=>input.focus(),80);const check=()=>{const v=normalize(input.value),ok=p.answers.some(a=>normalize(a)===v);if(ok){state[p.id]=true;localStorage.setItem("lh-surprise-progress-v3",JSON.stringify(state));dialogContent.innerHTML=revealTemplate(p,false);render();bindNext(i)}else document.getElementById("feedback").textContent=v?"Pas tout à fait. Essaie encore ♡":"Il me faut quand même une réponse."};submit.onclick=check;input.onkeydown=e=>{if(e.key==="Enter")check()}}else bindNext(i)}
function revealTemplate(p,revisit){const action=p.action?`<a class="reveal-link" href="${CONFIG[p.action.urlKey]}" target="_blank" rel="noopener noreferrer">${p.action.label} ↗</a>`:"";return `<div class="modal-body"><p class="eyebrow">${revisit?"Fragment déjà découvert":"Bien joué, Lise"}</p><h3>${p.revealTitle}</h3><div class="reveal"><p>${p.revealText}</p><div class="meta">${p.meta.map(m=>`<span class="pill">${m}</span>`).join("")}</div>${action}</div><button class="next-btn" id="nextPuzzle">${p.id===CONFIG.puzzles.at(-1).id?"Voir notre week-end":"Fragment suivant"}</button></div>`}
function bindNext(i){const b=document.getElementById("nextPuzzle");if(!b)return;b.onclick=()=>{dialog.close();if(i<CONFIG.puzzles.length-1)setTimeout(()=>openPuzzle(i+1),180);else finale.scrollIntoView({behavior:"smooth"})}}
document.getElementById("closeDialog").onclick=()=>dialog.close();dialog.onclick=e=>{if(e.target===dialog)dialog.close()};startBtn.onclick=()=>{if(!gameIsOpen())return;document.getElementById("game").scrollIntoView({behavior:"smooth"});setTimeout(()=>openPuzzle(0),600)};document.getElementById("resetBtn").onclick=()=>{if(confirm("Effacer toute la progression ?")){localStorage.removeItem("lh-surprise-progress-v3");Object.keys(state).forEach(k=>delete state[k]);render();scrollTo({top:0,behavior:"smooth"})}};
updateLaunchState();render();setInterval(updateLaunchState,60000);

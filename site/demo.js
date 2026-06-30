(function () {
  const totalDuration = 90;

  const artworks = {
    girl: {
      src: "../assets/art/girl.jpg",
      ratio: "1879 / 2200",
      frame: "vermeer",
      width: "20.8%",
      left: "50%",
      top: "45.5%"
    },
    lastSupper: {
      src: "../assets/art/last_supper.jpg",
      ratio: "2200 / 1100",
      frame: "mural",
      width: "71.8%",
      left: "50%",
      top: "53.7%",
      stageBgSize: "100% 100%",
      stageBgPosition: "50% 50%"
    },
    arnolfini: {
      src: "../assets/art/arnolfini.jpg",
      ratio: "1608 / 2200",
      frame: "arnolfini",
      width: "31%",
      left: "39%",
      top: "43.5%"
    }
  };

  const scenes = [
    {
      id: "no-guide",
      start: 0,
      end: 8,
      mode: "NO GUIDE",
      caption: "I'm here, but I don't know what to ask.",
      artwork: "girl"
    },
    {
      id: "audio",
      start: 8,
      end: 16,
      mode: "AUDIO GUIDE",
      caption: "Good context. But where exactly should I look?",
      artwork: "girl"
    },
    {
      id: "phone",
      start: 16,
      end: 26,
      mode: "PHONE GUIDE",
      caption: "Rich explanation. But now I'm looking at pixels.",
      artwork: "girl"
    },
    {
      id: "wearing",
      start: 26,
      end: 34,
      mode: "LOOK AGAIN",
      caption: "Look Again starts from the real work.",
      artwork: "girl",
      xr: true,
      connector: true,
      panel: {
        kicker: "REAL WORK FIRST",
        title: "The cue attaches here.",
        body: "The visitor stays with the physical painting before any explanation appears.",
        target: { x: 55, y: 38 },
        position: { top: "30%", right: "7%" }
      },
      cue: "wearing"
    },
    {
      id: "artist",
      start: 34,
      end: 48,
      mode: "ARTIST LENS",
      caption: "How is this space constructed?",
      artwork: "lastSupper",
      xr: true,
      connector: true,
      panel: {
        kicker: "ARTIST LENS",
        title: "How is this space constructed?",
        body: "Coffered ceiling, side-wall tapestry bands, and table recession converge near Christ's head.",
        target: { x: 50, y: 46.8 },
        position: { top: "31%", right: "2%", width: "13%" }
      },
      cue: "artist"
    },
    {
      id: "restorer",
      start: 48,
      end: 62,
      mode: "CONSERVATOR",
      caption: "What is paint, and what is illusion?",
      artwork: "girl",
      xr: true,
      connector: true,
      panel: {
        kicker: "CONSERVATOR",
        title: "What is paint, and what is illusion?",
        body: "A few bright marks and surrounding darkness create the pearl, rather than a fully described object.",
        target: { x: 63, y: 58 },
        position: { top: "35%", right: "7%" }
      },
      cue: "restorer"
    },
    {
      id: "economist",
      start: 62,
      end: 76,
      mode: "ECONOMIST / SOCIAL",
      caption: "Who is made present in this room?",
      artwork: "arnolfini",
      xr: true,
      connector: true,
      panel: {
        kicker: "ECONOMIST / SOCIAL",
        title: "Who is made present in this room?",
        body: "The mirror and painted signature make witness and authorship visible.",
        target: { x: 50, y: 43 },
        position: { top: "34%", right: "7%" }
      },
      cue: "economist"
    },
    {
      id: "museum",
      start: 76,
      end: 86,
      mode: "MUSEUM HISTORY",
      caption: "Why is this work here?",
      artwork: "arnolfini",
      xr: true,
      connector: true,
      panelType: "timeline",
      panel: {
        target: { x: 50, y: 43 },
        position: { top: "24%", right: "5%" }
      },
      cue: "museum"
    },
    {
      id: "closing",
      start: 86,
      end: 90,
      mode: "LOOK AGAIN",
      caption: "The artwork does not change. The question does.",
      artwork: "lastSupper",
      xr: true,
      connector: false,
      cue: "closing"
    }
  ];

  const frame = document.querySelector("[data-demo-frame]");
  const stage = document.querySelector("[data-stage-scene]");
  const rig = document.querySelector("[data-artwork-rig]");
  const artImg = document.querySelector("[data-artwork-img]");
  const phoneArt = document.querySelector("[data-phone-art]");
  const cueLayer = document.querySelector("[data-cue-layer]");
  const modeChip = document.querySelector("[data-mode-chip]");
  const caption = document.querySelector("[data-caption]");
  const edgePanel = document.querySelector("[data-edge-panel]");
  const timelinePanel = document.querySelector("[data-timeline-panel]");
  const panelKicker = document.querySelector("[data-panel-kicker]");
  const panelTitle = document.querySelector("[data-panel-title]");
  const panelBody = document.querySelector("[data-panel-body]");
  const connectorLine = document.querySelector("[data-connector-line]");
  const connectorDot = document.querySelector("[data-connector-dot]");
  const progress = document.querySelector("[data-progress]");

  let activeId = "";
  let currentScene = scenes[0];
  let startTime = 0;

  function sceneForTime(seconds) {
    return scenes.find((scene) => seconds >= scene.start && seconds < scene.end) || scenes[scenes.length - 1];
  }

  function sceneFromParams() {
    const params = new URLSearchParams(window.location.search);
    const sceneId = params.get("scene");
    if (sceneId) return scenes.find((scene) => scene.id === sceneId) || scenes[0];
    const t = Number.parseFloat(params.get("t"));
    if (Number.isFinite(t)) return sceneForTime(Math.max(0, Math.min(totalDuration, t)));
    return null;
  }

  function timeFromParams() {
    const params = new URLSearchParams(window.location.search);
    const t = Number.parseFloat(params.get("t"));
    if (Number.isFinite(t)) return Math.max(0, Math.min(totalDuration, t));
    const scene = sceneFromParams();
    return scene ? (scene.start + scene.end) / 2 : 0;
  }

  function render(scene) {
    if (activeId === scene.id) return;
    activeId = scene.id;
    currentScene = scene;

    const artwork = artworks[scene.artwork];
    frame.dataset.scene = scene.id;
    frame.dataset.artwork = scene.artwork;
    frame.dataset.frame = artwork.frame;
    frame.dataset.xr = scene.xr ? "true" : "false";
    frame.dataset.connector = scene.connector ? "true" : "false";
    frame.dataset.panel = scene.panelType || (scene.panel ? "edge" : "none");

    stage.style.setProperty("--artwork", scene.artwork);
    stage.style.setProperty("--stage-bg-size", scene.stageBgSize || artwork.stageBgSize || "cover");
    stage.style.setProperty("--stage-bg-position", scene.stageBgPosition || artwork.stageBgPosition || "center");
    rig.style.setProperty("--art-left", scene.artLeft || artwork.left);
    rig.style.setProperty("--art-top", scene.artTop || artwork.top);
    rig.style.setProperty("--art-width", scene.artWidth || artwork.width);
    rig.style.setProperty("--art-ratio", artwork.ratio);

    artImg.src = artwork.src;
    phoneArt.src = artwork.src;
    modeChip.textContent = scene.mode;
    caption.textContent = scene.caption;
    cueLayer.innerHTML = cueMarkup(scene);

    if (scene.panel) {
      const pos = scene.panel.position || {};
      edgePanel.style.setProperty("--panel-top", pos.top || "34%");
      edgePanel.style.setProperty("--panel-right", pos.right || "6%");
      edgePanel.style.setProperty("--panel-width", pos.width || "min(28%, 390px)");
      panelKicker.textContent = scene.panel.kicker || "";
      panelTitle.textContent = scene.panel.title || "";
      panelBody.textContent = scene.panel.body || "";
      timelinePanel.style.setProperty("--panel-top", pos.top || "24%");
      timelinePanel.style.setProperty("--panel-right", pos.right || "5%");
    }

    requestAnimationFrame(updateConnector);
  }

  function cueMarkup(scene) {
    if (!scene.xr) return "";
    const target = scene.panel?.target || { x: 50, y: 50 };
    const pulse = `<span class="target-pulse" style="--x:${target.x}%;--y:${target.y}%;"></span>`;
    if (scene.cue === "wearing") {
      return `${pulse}<span class="soft-region" style="--x:55%;--y:38%;--w:34%;--h:30%;"></span>`;
    }
    if (scene.cue === "artist") {
      return `
        ${pulse}
        <span class="soft-region" style="--x:50%;--y:63%;--w:58%;--h:9%;"></span>
        <span class="soft-region" style="--x:30%;--y:49%;--w:24%;--h:21%;"></span>
        <span class="soft-region" style="--x:70%;--y:49%;--w:24%;--h:21%;"></span>
        <svg class="cue-lines last-supper-cue-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="30" y1="-8" x2="50" y2="46.8"></line>
          <line x1="70" y1="-8" x2="50" y2="46.8"></line>
          <line x1="18" y1="4" x2="50" y2="46.8"></line>
          <line x1="82" y1="4" x2="50" y2="46.8"></line>
          <line x1="-10" y1="18" x2="50" y2="46.8"></line>
          <line x1="110" y1="18" x2="50" y2="46.8"></line>
          <line x1="-10" y1="31" x2="50" y2="46.8"></line>
          <line x1="110" y1="31" x2="50" y2="46.8"></line>
          <line x1="-10" y1="58" x2="50" y2="46.8"></line>
          <line x1="110" y1="58" x2="50" y2="46.8"></line>
          <line x1="-10" y1="66" x2="50" y2="46.8"></line>
          <line x1="110" y1="66" x2="50" y2="46.8"></line>
        </svg>
      `;
    }
    if (scene.cue === "restorer") {
      return `
        ${pulse}
        <span class="material-region" style="--x:63%;--y:58%;--w:16%;--h:17%;"></span>
        <span class="material-region" style="--x:58%;--y:67%;--w:20%;--h:8%;"></span>
      `;
    }
    if (scene.cue === "economist") {
      return `
        ${pulse}
        <span class="object-region" style="--x:23%;--y:63%;--w:17%;--h:11%;"></span>
        <span class="object-region" style="--x:52%;--y:20%;--w:17%;--h:9%;"></span>
        <span class="object-region" style="--x:42%;--y:70%;--w:25%;--h:18%;"></span>
        <svg class="cue-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M23 63 C32 55 42 52 52 20"></path>
          <path d="M23 63 C30 68 35 70 42 70"></path>
        </svg>
      `;
    }
    if (scene.cue === "museum") {
      return `
        ${pulse}
        <span class="mirror-region" style="--x:50%;--y:43%;--w:13%;--h:13%;"></span>
        <svg class="cue-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="sight" x1="50" y1="43" x2="50" y2="9"></line>
        </svg>
      `;
    }
    if (scene.cue === "closing") return "";
    return pulse;
  }

  function updateConnector() {
    if (!currentScene.connector || !currentScene.panel) return;
    const stageRect = stage.getBoundingClientRect();
    const rigRect = rig.getBoundingClientRect();
    const target = currentScene.panel.target || { x: 50, y: 50 };
    const x1 = ((rigRect.left - stageRect.left + rigRect.width * (target.x / 100)) / stageRect.width) * 100;
    const y1 = ((rigRect.top - stageRect.top + rigRect.height * (target.y / 100)) / stageRect.height) * 100;
    const panelRect = (currentScene.panelType === "timeline" ? timelinePanel : edgePanel).getBoundingClientRect();
    const x2 = ((panelRect.left - stageRect.left) / stageRect.width) * 100;
    const y2 = ((panelRect.top - stageRect.top + panelRect.height * 0.5) / stageRect.height) * 100;
    connectorLine.setAttribute("x1", x1.toFixed(2));
    connectorLine.setAttribute("y1", y1.toFixed(2));
    connectorLine.setAttribute("x2", x2.toFixed(2));
    connectorLine.setAttribute("y2", y2.toFixed(2));
    connectorDot.setAttribute("cx", x1.toFixed(2));
    connectorDot.setAttribute("cy", y1.toFixed(2));
  }

  function tick(now) {
    if (!startTime) startTime = now;
    const elapsed = Math.min((now - startTime) / 1000, totalDuration);
    render(sceneForTime(elapsed));
    progress.style.width = `${(elapsed / totalDuration) * 100}%`;
    updateConnector();
    if (elapsed < totalDuration) requestAnimationFrame(tick);
  }

  function boot() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("hold") === "1") {
      const heldTime = timeFromParams();
      frame.classList.add("is-held");
      render(sceneForTime(heldTime));
      progress.style.width = `${(heldTime / totalDuration) * 100}%`;
      requestAnimationFrame(updateConnector);
      return;
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", updateConnector);
  boot();
})();

(function () {
  const I18N = window.LookAgainI18n;
  const existingSequence = ["looking", "audio", "phone"];
  const lookAgainSequence = ["select", "artist", "restorer", "social", "quiet"];
  const heroQueryStates = ["select", "artist", "restorer", "social", "quiet", "lookagain"];
  const defaultHeroArtwork = "arnolfini";
  const lensOrder = ["artist", "restorer", "social"];
  const artworkOrder = ["lastSupper", "girl", "arnolfini"];
  const heroTimingMs = {
    looking: 3200,
    audio: 3600,
    phone: 4200,
    transition: 1400,
    select: 1500,
    artist: 4400,
    restorer: 4400,
    social: 4400,
    quiet: 3000
  };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const parallaxStages = new WeakMap();
  const cueSequenceObservedStages = new WeakSet();
  let cueSequenceObserver = null;
  const heroLookAgainExamples = [
    { key: "selectArtist", stateId: "select", lens: "artist", selectedLens: "artist", artwork: "arnolfini", durationMs: 1900 },
    { key: "artist", stateId: "artist", lens: "artist", artwork: "arnolfini" },
    { key: "restorer", stateId: "restorer", lens: "restorer", artwork: "arnolfini" },
    { key: "social", stateId: "social", lens: "social", artwork: "arnolfini" },
    { key: "quiet", stateId: "quiet", lens: "artist", artwork: "arnolfini" }
  ];

  const artworks = {
    girl: {
      id: "girl",
      src: "../assets/art/girl.jpg",
      ratio: "1879 / 2200",
      labelKey: "art.girl",
      altKey: "art.girlAlt",
      scene: "gallery",
      stageClass: "pearl",
      scaleClass: "small-framed",
      frameClass: "vermeer-frame",
      phoneClass: "portrait",
      displaySize: "44.5 x 39 cm",
      labelMeta: {
        en: {
          artist: "Johannes Vermeer",
          date: "c. 1665",
          medium: "Oil on canvas",
          collection: "Mauritshuis, The Hague"
        },
        ja: {
          artist: "ヨハネス・フェルメール",
          date: "1665年頃",
          medium: "油彩・カンヴァス",
          collection: "マウリッツハイス美術館"
        }
      },
      left: "50%",
      top: "46%",
      width: "20%",
      mobileWidth: "38%"
    },
    arnolfini: {
      id: "arnolfini",
      src: "../assets/art/arnolfini.jpg",
      ratio: "1664 / 2200",
      labelKey: "art.arnolfini",
      altKey: "art.arnolfiniAlt",
      scene: "gallery",
      stageClass: "arnolfini",
      scaleClass: "medium-framed",
      frameClass: "arnolfini-frame",
      phoneClass: "vertical",
      displaySize: "82.2 x 60 cm",
      labelMeta: {
        en: {
          artist: "Jan van Eyck",
          date: "1434",
          medium: "Oil on oak panel",
          collection: "The National Gallery, London"
        },
        ja: {
          artist: "ヤン・ファン・エイク",
          date: "1434年",
          medium: "油彩・オーク板",
          collection: "ナショナル・ギャラリー"
        }
      },
      left: "50%",
      top: "48%",
      width: "35%",
      mobileWidth: "48%"
    },
    lastSupper: {
      id: "lastSupper",
      src: "../assets/art/last_supper.jpg",
      ratio: "2200 / 1100",
      labelKey: "art.lastSupper",
      altKey: "art.lastSupperAlt",
      scene: "refectory",
      stageClass: "last-supper",
      scaleClass: "wall-scale",
      frameClass: "wall-mural",
      phoneClass: "wide",
      displaySize: "460 x 880 cm",
      left: "50%",
      top: "53.7%",
      width: "71.8%",
      mobileWidth: "90%"
    }
  };

  const artworkStage = (artworkId) => {
    const artwork = artworks[artworkId] || artworks.girl;
    return {
      artLeft: artwork.left,
      artTop: artwork.top,
      artWidth: artwork.width,
      artMobileWidth: artwork.mobileWidth
    };
  };

  const detailAssets = {
    pearl: {
      src: "../assets/details/girl_pearl_crop.jpg",
      altKey: "art.pearlCropAlt"
    },
    technical: {
      src: "../assets/details/girl_technical_crop.jpg",
      altKey: "art.technicalCropAlt"
    },
    mirrorSignature: {
      src: "../assets/details/arnolfini_mirror_signature_crop.jpg",
      altKey: "art.arnolfiniMirrorCropAlt"
    }
  };

  const comparativeAssets = {
    "met-study-young-woman": {
      src: "../assets/art/study_young_woman_met.jpg"
    }
  };

  const sceneDefaults = {
    looking: {
      artwork: "girl",
      ...artworkStage("girl")
    },
    audio: {
      artwork: "girl",
      ...artworkStage("girl"),
      audio: true
    },
    phone: {
      artwork: "girl",
      ...artworkStage("girl"),
      phone: true
    },
    wearing: {
      artwork: "girl",
      ...artworkStage("girl"),
      wearing: true
    },
    select: {
      artwork: "arnolfini",
      ...artworkStage("arnolfini"),
      viewpointSelect: true
    },
    artist: {
      artwork: "lastSupper",
      ...artworkStage("lastSupper"),
      cue: "artistLastSupper",
      anchorX: "50%",
      anchorY: "49%",
      panel: true
    },
    restorer: {
      artwork: "girl",
      ...artworkStage("girl"),
      cue: "pearl",
      anchorX: "63%",
      anchorY: "49%",
      panel: true,
      oblique: true
    },
    social: {
      artwork: "arnolfini",
      ...artworkStage("arnolfini"),
      cue: "objects",
      anchorX: "23%",
      anchorY: "63%",
      panel: true
    },
    museum: {
      artwork: "arnolfini",
      ...artworkStage("arnolfini"),
      cue: "museum",
      anchorX: "50%",
      anchorY: "50%",
      panel: true
    },
    quiet: {
      artwork: "girl",
      ...artworkStage("girl"),
      quiet: true
    }
  };

  const lensItems = {
    artist: [
      {
        id: "lastSupperArtist",
        artwork: "lastSupper",
        cue: "artistLastSupper",
        anchorX: "50%",
        anchorY: "49%",
        ...artworkStage("lastSupper")
      },
      {
        id: "girlArtist",
        artwork: "girl",
        cue: "artistPearl",
        anchorX: "54%",
        anchorY: "41%",
        ...artworkStage("girl")
      },
      {
        id: "arnolfiniArtist",
        artwork: "arnolfini",
        cue: "artistArnolfini",
        anchorX: "52%",
        anchorY: "41%",
        ...artworkStage("arnolfini")
      }
    ],
    restorer: [
      {
        id: "lastSupperSurface",
        artwork: "lastSupper",
        cue: "surface",
        anchorX: "58%",
        anchorY: "42%",
        ...artworkStage("lastSupper")
      },
      {
        id: "girlRestorer",
        artwork: "girl",
        cue: "pearl",
        anchorX: "63%",
        anchorY: "49%",
        ...artworkStage("girl"),
        oblique: false
      },
      {
        id: "arnolfiniRestorer",
        artwork: "arnolfini",
        cue: "textile",
        anchorX: "37%",
        anchorY: "62%",
        ...artworkStage("arnolfini")
      }
    ],
    social: [
      {
        id: "lastSupperSocial",
        artwork: "lastSupper",
        cue: "table",
        anchorX: "56%",
        anchorY: "64%",
        ...artworkStage("lastSupper")
      },
      {
        id: "girlSocial",
        artwork: "girl",
        cue: "textile",
        anchorX: "49%",
        anchorY: "22%",
        ...artworkStage("girl")
      },
      {
        id: "arnolfiniSocial",
        artwork: "arnolfini",
        cue: "objects",
        anchorX: "23%",
        anchorY: "63%",
        ...artworkStage("arnolfini")
      }
    ],
    museum: [
      {
        id: "arnolfiniMuseum",
        artwork: "arnolfini",
        cue: "museum",
        anchorX: "50%",
        anchorY: "50%",
        ...artworkStage("arnolfini")
      },
      {
        id: "lastSupperMuseum",
        artwork: "lastSupper",
        cue: "museum",
        anchorX: "50%",
        anchorY: "50%",
        ...artworkStage("lastSupper")
      }
    ]
  };

  let lang = getInitialLang();
  let heroTimer = null;
  let autoplayPhase = "lookagain";
  let autoplayIndex = 0;
  let currentHeroArtwork = defaultHeroArtwork;
  let currentHeroAct = "lookagain";
  let currentHeroPinnedState = null;
  let currentExistingState = "looking";
  let currentLookAgainIndex = 0;
  let currentLens = "artist";
  let currentLensItem = 0;
  let cueSpecs = [];
  let cueSpecsByKey = new Map();

  const heroExperience = document.querySelector("[data-hero-experience]");
  const heroStage = document.querySelector('[data-xr-stage="hero"]');
  const explorerStage = document.querySelector('[data-xr-stage="explorer"]');
  const heroActRail = document.querySelector("[data-hero-act-rail]");
  const existingSubstateRail = document.querySelector("[data-existing-substate-rail]");
  const lookAgainSubstateRail = document.querySelector("[data-lookagain-substate-rail]");
  const heroSequenceCaption = document.querySelector("[data-hero-sequence-caption]");
  const lensMatrix = document.querySelector("[data-lens-matrix]");
  const previewLensControls = document.querySelector("[data-preview-lens-controls]");
  const previewArtworkControls = document.querySelector("[data-preview-artwork-controls]");
  const previewDetails = document.querySelector("[data-preview-details]");
  const sourceFootnotes = document.querySelector("[data-source-footnotes]");

  function getInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (queryLang === "ja" || queryLang === "en") return queryLang;
    const stored = readStoredLang();
    return stored === "ja" || stored === "en" ? stored : "en";
  }

  function readStoredLang() {
    try {
      return window.localStorage.getItem("lookAgainLang");
    } catch (error) {
      return null;
    }
  }

  function writeStoredLang(value) {
    try {
      window.localStorage.setItem("lookAgainLang", value);
    } catch (error) {
      // Safari can block localStorage for some local file/private contexts.
    }
  }

  function dict() {
    return I18N[lang] || I18N.en;
  }

  function t(path) {
    const value = path.split(".").reduce((node, key) => (node ? node[key] : undefined), dict());
    return value == null ? `Missing: ${path}` : value;
  }

  function escapeAttr(value) {
    return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function percentNumber(value, fallback = "50%") {
    return String(value || fallback).replace("%", "");
  }

  function cueSpecKey(artworkId, lensId) {
    return `${artworkId}:${lensId}`;
  }

  function cueSpecText(spec, field) {
    return spec[`${field}_${lang}`] || spec[`${field}_en`] || "";
  }

  function cueSpecExplanation(spec) {
    return cueSpecText(spec, "explanation") || cueSpecText(spec, "micro_evidence");
  }

  function cueSpecStatement(spec) {
    return cueSpecText(spec, "micro_evidence") || cueSpecExplanation(spec);
  }

  function formatMessage(template, values = {}) {
    return String(template || "").replace(/\{([a-zA-Z0-9_]+)\}/g, (_, key) => values[key] ?? "");
  }

  function cueSpecSourceUrls(spec) {
    return Array.isArray(spec?.source_urls) ? spec.source_urls.filter(Boolean) : [];
  }

  function sourceHost(url) {
    try {
      return new URL(url).hostname;
    } catch (error) {
      return url;
    }
  }

  function sourceLabel(url) {
    const labels = dict().sourceLabels || {};
    const titles = dict().sourceTitles || {};
    const host = sourceHost(url);
    const normalizedHost = host.replace(/^www\./, "");
    return titles[url] || labels[host] || labels[normalizedHost] || normalizedHost;
  }

  function sourceFootnoteEntries() {
    const entries = new Map();
    cueSpecs.forEach((spec) => {
      cueSpecSourceUrls(spec).forEach((url) => {
        if (!entries.has(url)) {
          entries.set(url, {
            index: entries.size + 1,
            url,
            label: sourceLabel(url),
            usedBy: []
          });
        }
        const entry = entries.get(url);
        const usedBy = `${cueSpecText(spec, "artwork_title")} / ${cueSpecText(spec, "lens_title")}`;
        if (usedBy.trim() && !entry.usedBy.includes(usedBy)) {
          entry.usedBy.push(usedBy);
        }
      });
    });
    return [...entries.values()];
  }

  function sourceFootnoteNumber(spec) {
    const primaryUrl = cueSpecSourceUrls(spec)[0];
    if (!primaryUrl) return null;
    return sourceFootnoteEntries().find((entry) => entry.url === primaryUrl)?.index || null;
  }

  function sourceFootnoteMark(spec) {
    const number = sourceFootnoteNumber(spec);
    if (!number) return "";
    return `<sup class="source-footnote-mark"><a href="#source-footnote-${number}" aria-label="${escapeAttr(t("sourceFootnotes.kicker"))} ${number}">[${number}]</a></sup>`;
  }

  function localizedCardText(card, field) {
    return card?.[`${field}_${lang}`] || card?.[`${field}_en`] || "";
  }

  function cueSpecSlug(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function cueSpecClass(spec) {
    return `${spec.artwork_id}-${spec.lens_id}`;
  }

  function cueSpecToItem(spec) {
    const artwork = artworks[spec.artwork_id] || artworks.girl;
    return {
      id: cueSpecKey(spec.artwork_id, spec.lens_id),
      artwork: spec.artwork_id,
      cue: "spec",
      cueSpec: spec,
      cueSpecId: cueSpecKey(spec.artwork_id, spec.lens_id),
      pointerDirection: spec.pointer_direction,
      anchorX: `${spec.target_coordinates.x}%`,
      anchorY: `${spec.target_coordinates.y}%`,
      artLeft: artwork.left,
      artTop: artwork.top,
      artWidth: artwork.width,
      artMobileWidth: artwork.mobileWidth,
      oblique: false
    };
  }

  function getCueSpec(artworkId, lensId) {
    return cueSpecsByKey.get(cueSpecKey(artworkId, lensId));
  }

  function fallbackCueSpecs() {
    return Array.isArray(window.LookAgainCueSpecsV23Data) ? window.LookAgainCueSpecsV23Data : null;
  }

  function applyCueSpecs(specs) {
    cueSpecs = specs;
    cueSpecsByKey = new Map(cueSpecs.map((spec) => [cueSpecKey(spec.artwork_id, spec.lens_id), spec]));
    lensOrder.forEach((lens) => {
      lensItems[lens] = artworkOrder
        .map((artworkId) => getCueSpec(artworkId, lens))
        .filter(Boolean)
        .map(cueSpecToItem);
    });
    window.LookAgainCueSpecsV23 = cueSpecs;
  }

  async function fetchCueSpecs() {
    const response = await window.fetch("../data/lens_cue_specs_v23.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Unable to load lens cue specs: ${response.status}`);
    }
    return response.json();
  }

  async function loadCueSpecs() {
    const fallback = fallbackCueSpecs();
    if (window.location.protocol === "file:" && fallback) {
      applyCueSpecs(fallback);
      window.LookAgainCueSpecsV23Source = "inline-fallback";
      document.body.dataset.cueSpecSource = "inline-fallback";
      return;
    }
    try {
      applyCueSpecs(await fetchCueSpecs());
      window.LookAgainCueSpecsV23Source = "fetch";
      document.body.dataset.cueSpecSource = "fetch";
    } catch (error) {
      if (!fallback) throw error;
      applyCueSpecs(fallback);
      window.LookAgainCueSpecsV23Source = "inline-fallback";
      window.LookAgainCueSpecsV23LoadWarning = String(error);
      document.body.dataset.cueSpecSource = "inline-fallback";
    }
  }

  function regionStyle(region) {
    const width = region.x2 - region.x1;
    const height = region.y2 - region.y1;
    return `--region-left: ${region.x1}%; --region-top: ${region.y1}%; --region-width: ${width}%; --region-height: ${height}%;`;
  }

  function pointerDirectionClass(direction) {
    return `pointer-${cueSpecSlug(direction || "from-right")}`;
  }

  function applyStaticI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      node.innerHTML = t(node.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.langButton === lang));
    });
    document.querySelectorAll("[data-plan-link]").forEach((link) => {
      link.setAttribute("href", `./plan.html?lang=${encodeURIComponent(lang)}`);
    });
  }

  function stateIcon(id) {
    const icons = {
      looking: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.8 12s3.2-5.2 9.2-5.2S21.2 12 21.2 12s-3.2 5.2-9.2 5.2S2.8 12 2.8 12Z"></path><circle cx="12" cy="12" r="2.7"></circle></svg>',
      audio: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h3.2L12 18V6L7.2 10H4Z"></path><path d="M15.2 8.3a5.4 5.4 0 0 1 0 7.4"></path><path d="M17.8 5.8a9 9 0 0 1 0 12.4"></path></svg>',
      phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.8" width="10" height="18.4" rx="2.1"></rect><path d="M10.3 5.6h3.4"></path><circle cx="12" cy="18" r=".7"></circle></svg>',
      wearing: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 10.5h6.2l1.2 2.4h2.2l1.2-2.4h6.2"></path><path d="M5 10.5l1 6h3.4l1.5-3.6"></path><path d="M19 10.5l-1 6h-3.4l-1.5-3.6"></path></svg>',
      select: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 10.5h6.2l1.2 2.4h2.2l1.2-2.4h6.2"></path><path d="M5 10.5l1 6h3.4l1.5-3.6"></path><path d="M19 10.5l-1 6h-3.4l-1.5-3.6"></path></svg>',
      artist: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3V5Z"></path><path d="M3 5l9 7 9-7"></path><path d="M3 19l9-7 9 7"></path><circle cx="12" cy="12" r="1.4"></circle></svg>',
      restorer: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="5.2"></circle><path d="m14.4 14.4 5.1 5.1"></path><path d="M8.5 10.7h4"></path><path d="M10.5 8.7v4"></path></svg>',
      social: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="7" cy="13" r="2.4"></circle><circle cx="16.5" cy="8" r="2"></circle><circle cx="17" cy="17" r="2.2"></circle><path d="M9.2 12 14.7 9"></path><path d="M9.2 14.1l5.8 2"></path></svg>',
      museum: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path><circle cx="8" cy="6" r="1.5"></circle><circle cx="13" cy="12" r="1.5"></circle><circle cx="17" cy="18" r="1.5"></circle></svg>',
      quiet: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7"></circle></svg>'
    };
    return `<span class="state-icon">${icons[id] || icons.looking}</span>`;
  }

  function heroExampleDuration(example) {
    if (!example) return 4000;
    return example.durationMs || heroTimingMs[example.stateId] || 4000;
  }

  function setHeroAct(act) {
    currentHeroAct = act === "lookagain" ? "lookagain" : "existing";
    heroExperience.dataset.act = currentHeroAct;
    renderHeroRails();
  }

  function heroSequenceStatus() {
    if (currentHeroPinnedState) {
      if (existingSequence.includes(currentHeroPinnedState)) {
        return {
          act: "existing",
          stateId: currentHeroPinnedState,
          caption: t(`hero.existingCaptions.${currentHeroPinnedState}`),
          duration: heroTimingMs[currentHeroPinnedState] || 3000
        };
      }
      const pinnedIndex = heroLookAgainExamples.findIndex((example) => example.stateId === currentHeroPinnedState);
      if (pinnedIndex >= 0) {
        const example = heroLookAgainExamples[pinnedIndex];
        return {
          act: "lookagain",
          stateId: example.stateId,
          index: pinnedIndex,
          key: example.key,
          caption: t(`hero.lookAgainExamples.${example.key}.caption`),
          duration: heroExampleDuration(example)
        };
      }
    }

    if (currentHeroAct === "lookagain") {
      const example = heroLookAgainExamples[currentLookAgainIndex] || heroLookAgainExamples[0];
      return {
        act: "lookagain",
        stateId: example.stateId,
        index: currentLookAgainIndex,
        key: example.key,
        caption: t(`hero.lookAgainExamples.${example.key}.caption`),
        duration: heroExampleDuration(example)
      };
    }

    return {
      act: "existing",
      stateId: currentExistingState,
      caption: t(`hero.existingCaptions.${currentExistingState}`),
      duration: heroTimingMs[currentExistingState] || 3000
    };
  }

  function renderExistingSubstateRail() {
    if (!existingSubstateRail) return;
    const status = heroSequenceStatus();
    existingSubstateRail.innerHTML = existingSequence
      .map((id) => {
        const selected = status.act === "existing" && id === status.stateId;
        return `
          <button
            class="state-step substate-step hero-sequence-step"
            type="button"
            data-existing-step="${id}"
            aria-current="${selected}"
            style="--segment-duration: ${selected ? status.duration : 0}ms"
          >
            ${stateIcon(id)}
            <span>${t(`states.${id}.short`)}</span>
          </button>
        `;
      })
      .join("");
  }

  function renderLookAgainSubstateRail() {
    if (!lookAgainSubstateRail) return;
    const status = heroSequenceStatus();
    lookAgainSubstateRail.innerHTML = heroLookAgainExamples
      .map((example, index) => {
        const selected = status.act === "lookagain" && index === status.index;
        return `
          <button
            class="state-step substate-step hero-sequence-step"
            type="button"
            data-lookagain-step="${index}"
            aria-current="${selected}"
            style="--segment-duration: ${selected ? status.duration : 0}ms"
          >
            ${stateIcon(example.stateId)}
            <span>${t(`hero.lookAgainExamples.${example.key}.sequenceShort`)}</span>
          </button>
        `;
      })
      .join("");
  }

  function renderHeroRails() {
    const status = heroSequenceStatus();
    heroExperience.dataset.activeAct = status.act;
    heroExperience.dataset.activeState = status.stateId;
    if (heroActRail) heroActRail.innerHTML = "";
    renderLookAgainSubstateRail();
    if (heroSequenceCaption) {
      heroSequenceCaption.textContent = status.caption;
    }
  }

  function stageConfigFor(stateId, overrides = {}) {
    const base = sceneDefaults[stateId] || sceneDefaults.looking;
    const merged = {
      ...base,
      ...overrides,
      stateId,
      panel: overrides.panel != null ? overrides.panel : base.panel
    };
    const artwork = artworks[merged.artwork] || artworks.girl;
    const artworkChanged = Boolean(overrides.artwork && overrides.artwork !== base.artwork);
    return {
      ...merged,
      artLeft: artworkChanged && !overrides.artLeft ? artwork.left : merged.artLeft || artwork.left,
      artTop: artworkChanged && !overrides.artTop ? artwork.top : merged.artTop || artwork.top,
      artWidth: artworkChanged && !overrides.artWidth ? artwork.width : merged.artWidth || artwork.width,
      artMobileWidth:
        artworkChanged && !overrides.artMobileWidth
          ? artwork.mobileWidth
          : merged.artMobileWidth || artwork.mobileWidth
    };
  }

  function renderStage(stage, stateId, overrides = {}) {
    if (!stage) return;
    const config = stageConfigFor(stateId, overrides);
    const artwork = artworks[config.artwork];
    const scene = stage.querySelector("[data-stage-scene]");
    const runCueSequence = Boolean(config.panel && config.cue);
    stage.dataset.state = stateId;
    stage.dataset.artwork = config.artwork;
    stage.dataset.scene = artwork.scene;
    stage.dataset.scale = artwork.scaleClass;
    stage.dataset.cueSpecId = config.cueSpecId || "";
    stage.dataset.cueSequenceKey = runCueSequence
      ? `${stateId}:${config.artwork}:${config.cueSpecId || config.cue}`
      : "";
    stage.classList.remove("is-stage-changing", "is-xr-reveal");
    stage.classList.toggle("is-cue-sequence", runCueSequence);
    stage.classList.toggle("has-floating-anchor", runCueSequence);
    stage.classList.remove("is-cue-sequence-active");
    delete stage.dataset.connectorLockedFor;
    stage.dataset.cueSequenceVisible = "false";
    if (runCueSequence && reducedMotion) {
      stage.classList.add("is-cue-sequence-active");
    }
    if (runCueSequence) {
      ensureCueSequenceObserver(stage);
    }
    void stage.offsetWidth;
    stage.classList.add("is-stage-changing");
    if (stateId === "wearing" || stateId === "select") {
      stage.classList.add("is-xr-reveal");
    }
    const label = config.stageLabelKey ? t(config.stageLabelKey) : t(`states.${stateId}.label`);
    const caption = config.captionKey ? t(config.captionKey) : t(`states.${stateId}.caption`);
    stage.querySelector("[data-stage-label]").innerHTML = `${stateIcon(config.stageIcon || stateId)}<span>${label}</span>`;
    stage.querySelector("[data-stage-caption]").textContent = caption;
    scene.className = `stage-scene stage-layer--room scene-${artwork.scene} stage--${artwork.stageClass}`;

    scene.innerHTML = `
      ${config.panel && config.cue ? renderConnectorSvg() : ""}
      ${renderStagePerspective(config)}
      ${renderArtwork(artwork, config)}
      ${renderViewingPositionHint(config)}
      ${config.uncertainFocus ? '<div class="uncertain-focus-layer stage-layer--overlay" aria-hidden="true"></div>' : ""}
      ${config.phone ? '<div class="phone-focus-veil stage-layer--overlay" aria-hidden="true"></div>' : ""}
      ${config.audio ? renderAudioCue(config) : ""}
      ${config.phone ? renderPhoneMock(artwork) : ""}
      ${config.wearing ? renderWearingHud() : ""}
      ${config.viewpointSelect ? renderViewpointSelector(config.viewpointSelectedLens) : ""}
      ${runCueSequence ? renderFloatingAnchor(config) : ""}
      ${config.panel ? renderPanel(config) : ""}
      ${config.quiet ? renderQuietMessage() : ""}
    `;

    resetStageParallax(stage, { immediate: true });
    const sequenceKey = stage.dataset.cueSequenceKey;
    const startCueSequenceIfVisible = (force = false) => {
      if (!runCueSequence || stage.dataset.cueSequenceKey !== sequenceKey) return;
      positionConnector(stage);
      if (cueStageIsVisible(stage) && (force || !stage.classList.contains("is-cue-sequence-active"))) {
        restartCueSequence(stage);
      }
    };
    requestAnimationFrame(() => {
      startCueSequenceIfVisible(true);
    });
    if (runCueSequence && !reducedMotion) {
      [280, 920].forEach((delay) => {
        window.setTimeout(() => startCueSequenceIfVisible(false), delay);
      });
    }
  }

  function renderConnectorSvg() {
    return `
      <svg class="connector-svg stage-layer--overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line class="connector-line-draw" x1="0" y1="0" x2="0" y2="0"></line>
        <circle class="connector-start" cx="0" cy="0" r="0.55"></circle>
        <circle class="connector-end" cx="0" cy="0" r="0.45"></circle>
      </svg>
    `;
  }

  function renderFloatingAnchor(config) {
    const pointerClass = pointerDirectionClass(config.pointerDirection);
    const targetLabel = config.cueSpec
      ? cueSpecText(config.cueSpec, "target_label")
      : (config.targetLabel || t("cueUi.discoveryPoint"));
    return `
      <div class="floating-anchor-layer stage-layer--overlay" aria-hidden="true">
        <span class="floating-anchor-proxy pointer-cue ${pointerClass}"></span>
        <span class="floating-anchor-target anchor-target" data-pointer-direction="${escapeAttr(config.pointerDirection || "")}">
          <span class="anchor-label">
            <span class="anchor-kicker">${escapeHtml(t("cueUi.discoveryPoint"))}</span>
            <span>${escapeHtml(targetLabel)}</span>
          </span>
        </span>
      </div>
    `;
  }

  function renderStaticStageMarkup(stateId, overrides = {}) {
    const config = stageConfigFor(stateId, overrides);
    const artwork = artworks[config.artwork];
    const anchorX = percentNumber(config.anchorX);
    const anchorY = percentNumber(config.anchorY);
    const connectorEndX = 54;
    const connectorEndY = 34;
    return `
      <div class="xr-stage matrix-mini-stage" data-state="${stateId}" data-artwork="${config.artwork}" data-scene="${artwork.scene}" data-scale="${artwork.scaleClass}">
        <div class="stage-scene scene-${artwork.scene} stage--${artwork.stageClass}">
          <svg class="connector-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="${anchorX}" y1="${anchorY}" x2="${connectorEndX}" y2="${connectorEndY}" pathLength="1"></line>
            <circle class="connector-start" cx="${anchorX}" cy="${anchorY}" r="0.55"></circle>
            <circle class="connector-end" cx="${connectorEndX}" cy="${connectorEndY}" r="0.45"></circle>
          </svg>
          ${renderStagePerspective(config)}
          ${renderArtwork(artwork, config)}
          ${renderViewingPositionHint(config)}
          ${config.panel ? renderPanel(config) : ""}
        </div>
      </div>
    `;
  }

  function renderArtwork(artwork, config) {
    const obliqueClass = config.oblique ? " is-oblique" : "";
    const label = renderMuseumLabel(artwork);
    return `
      <div
        class="artwork-rig stage-layer--artwork ${artwork.frameClass} ${artwork.scaleClass}${obliqueClass}"
        data-display-size="${escapeAttr(artwork.displaySize)}"
        style="--art-ratio: ${artwork.ratio}; --art-left: ${config.artLeft || "39%"}; --art-top: ${config.artTop || "44%"}; --art-width: ${config.artWidth || artwork.width}; --art-mobile-width: ${config.artMobileWidth || artwork.mobileWidth};"
      >
        <div class="artwork-frame">
          <img src="${artwork.src}" alt="${escapeAttr(t(artwork.altKey))}">
          <div class="artwork-cue-layer">
            ${renderCue(config)}
          </div>
        </div>
        ${label}
      </div>
    `;
  }

  function renderMuseumLabel(artwork) {
    if (artwork.frameClass === "wall-mural" || !artwork.labelMeta) {
      return "";
    }
    const meta = artwork.labelMeta[lang] || artwork.labelMeta.en;
    return `
      <aside class="museum-label" aria-hidden="true">
        <strong>${escapeHtml(t(artwork.labelKey))}</strong>
        <span class="museum-label-artist">${escapeHtml(meta.artist)}</span>
        <span class="museum-label-meta">${escapeHtml(meta.date)} · ${escapeHtml(meta.medium)}</span>
        <span class="museum-label-size">${escapeHtml(artwork.displaySize)}</span>
        <span class="museum-label-collection">${escapeHtml(meta.collection)}</span>
      </aside>
    `;
  }

  function renderStagePerspective() {
    // The refectory view is off-axis, so room-scale vanishing lines are not shown.
    // Last Supper perspective cues are drawn from painted objects and may extend beyond the mural edge.
    return "";
  }

  function renderViewingPositionHint(config) {
    if (config.matrixPreview || !config.cueSpec || cueSpecClass(config.cueSpec) !== "lastSupper-artist") return "";
    return `
      <div class="viewing-position-hint stage-layer--overlay" aria-hidden="true">
        <svg class="viewing-position-arrow" viewBox="0 0 260 124" preserveAspectRatio="none">
          <defs>
            <linearGradient id="floorBackArrowFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#37caff" stop-opacity="0.02"></stop>
              <stop offset="44%" stop-color="#37caff" stop-opacity="0.34"></stop>
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0.92"></stop>
            </linearGradient>
            <linearGradient id="floorBackArrowEdge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#4ad1ff" stop-opacity="0.08"></stop>
              <stop offset="100%" stop-color="#6cdeff" stop-opacity="0.95"></stop>
            </linearGradient>
          </defs>
          <path class="floor-guide-ribbon" d="M97 14 C112 25 148 25 163 14 C151 43 148 62 151 78 L190 78 L130 116 L70 78 L109 78 C112 62 109 43 97 14 Z"></path>
        </svg>
        <span class="viewing-position-copy">${escapeHtml(t("cueUi.stepBackHint"))}</span>
      </div>
    `;
  }

  function renderSpecCue(config) {
    const spec = config.cueSpec;
    if (!spec) return "";
    const visualTypes = new Set(spec.visual_cue_types);
    return `
      ${visualTypes.has("material-surface-scan") ? renderMaterialSurfaceScan(spec) : ""}
      ${visualTypes.has("light-edge") ? renderLightEdge(spec) : ""}
      ${visualTypes.has("color-contrast-wash") ? renderColorContrastWash(spec) : ""}
      ${visualTypes.has("object-evidence-ring") ? renderObjectEvidenceRing(spec) : ""}
      ${renderSpecAuxiliaryLines(spec, config)}
      ${anchor({
        anchorX: `${spec.target_coordinates.x}%`,
        anchorY: `${spec.target_coordinates.y}%`,
        pointerDirection: spec.pointer_direction,
        targetLabel: cueSpecText(spec, "target_label")
      })}
    `;
  }

  function renderMaterialSurfaceScan(spec) {
    return `
      <span
        class="spec-material-scan spec-material-${cueSpecClass(spec)}"
        style="${regionStyle(spec.target_region)}"
        data-line-sources="${escapeAttr(spec.line_sources.join(" | "))}"
        aria-hidden="true"
      ></span>
    `;
  }

  function renderLightEdge(spec) {
    const style = spec.artwork_id === "girl"
      ? "--x: 47%; --y: 38%; --w: 20%; --h: 34%;"
      : `${regionStyle(spec.target_region)} --x: 50%; --y: 50%; --w: 28%; --h: 34%;`;
    return `<span class="spec-light-edge spec-light-${cueSpecClass(spec)}" style="${style}" aria-hidden="true"></span>`;
  }

  function renderColorContrastWash(spec) {
    if (cueSpecClass(spec) !== "girl-artist") return "";
    return `
      <span class="spec-color-wash spec-color-green" style="--x: 56%; --y: 26%; --w: 37%; --h: 22%;" aria-hidden="true"></span>
      <span class="spec-color-wash spec-color-green" style="--x: 50%; --y: 63%; --w: 34%; --h: 23%;" aria-hidden="true"></span>
    `;
  }

  function renderObjectEvidenceRing(spec) {
    const regions = {
      "lastSupper-social": { x1: 25, y1: 52, x2: 80, y2: 73 },
      "girl-social": { x1: 24, y1: 7, x2: 74, y2: 66 },
      "arnolfini-social": { x1: 42, y1: 31, x2: 59, y2: 49 }
    };
    const region = regions[cueSpecClass(spec)] || spec.target_region;
    return `
      <span
        class="spec-object-ring spec-ring-${cueSpecClass(spec)}"
        style="${regionStyle(region)}"
        data-line-sources="${escapeAttr(spec.line_sources.join(" | "))}"
        aria-hidden="true"
      ></span>
    `;
  }

  function specLineDefinitions(spec) {
    const definitions = {
      "lastSupper-artist": [
        { source: "coffered ceiling orthogonal", kind: "object", arrow: false, path: "M-51.3 -132 L50.2 43.4" },
        { source: "coffered ceiling orthogonal", kind: "object", arrow: false, path: "M-6.6 -132 L50.2 43.4" },
        { source: "coffered ceiling orthogonal", kind: "object", arrow: false, path: "M106.3 -132 L50.2 43.4" },
        { source: "coffered ceiling orthogonal", kind: "object", arrow: false, path: "M151 -132 L50.2 43.4" },
        { source: "painted wall/tapestry orthogonal", kind: "object", arrow: false, path: "M-55 -8.3 L50.2 43.4" },
        { source: "painted wall/tapestry orthogonal", kind: "object", arrow: false, path: "M-55 9.8 L50.2 43.4" },
        { source: "painted wall/tapestry orthogonal", kind: "object", arrow: false, path: "M155 -8.5 L50.2 43.4" },
        { source: "painted wall/tapestry orthogonal", kind: "object", arrow: false, path: "M155 9.7 L50.2 43.4" },
        { source: "table orthogonal", kind: "object", arrow: false, path: "M-55 99.7 L50.2 43.4" },
        { source: "table orthogonal", kind: "object", arrow: false, path: "M155 99.9 L50.2 43.4" }
      ],
      "lastSupper-social": [
        { source: "table edge", kind: "object", path: "M24 64 L82 64" },
        { source: "figure grouping", kind: "object", path: "M28 51 C38 46 45 48 50 56" },
        { source: "figure grouping", kind: "object", path: "M78 52 C68 46 61 49 55 58" },
        { source: "separation between groups", kind: "object", path: "M50 48 L50 72" }
      ],
      "girl-artist": [
        { source: "gaze direction", kind: "sightline", arrow: true, path: "M47 37 L25 33" },
        { source: "attention path", kind: "sightline", arrow: true, path: "M47 39 C53 42 59 46 63 51" },
        { source: "face light boundary", kind: "object", arrow: false, path: "M42 22 C34 35 36 50 48 61" },
        { source: "mouth/eye highlight boundary", kind: "object", arrow: false, path: "M44 40 C50 37 55 39 58 43" }
      ],
      "girl-social": [
        { source: "turban contour", kind: "object", path: "M30 20 C42 5 64 9 72 28" },
        { source: "face turn", kind: "object", path: "M36 30 C50 29 60 39 59 55" },
        { source: "gaze direction", kind: "sightline", path: "M46 37 L30 34" }
      ],
      "arnolfini-artist": [
        { source: "mirror-to-viewer relation", kind: "sightline", arrow: true, path: "M50 43 L50 8" },
        { source: "raised hand direction", kind: "sightline", arrow: true, path: "M39 38 C44 41 48 42 50 43" },
        { source: "figure placement", kind: "object", arrow: false, path: "M30 28 C37 38 41 52 40 71" },
        { source: "figure placement", kind: "object", arrow: false, path: "M66 30 C59 42 56 58 58 77" },
        { source: "central vertical relation between mirror and figures", kind: "object", arrow: false, path: "M50 24 L50 63" }
      ],
      "arnolfini-restorer": [
        { source: "textile fold direction", kind: "object", path: "M28 59 C34 65 37 74 35 88" },
        { source: "textile fold direction", kind: "object", path: "M40 56 C47 67 49 78 47 90" },
        { source: "painted fabric edge", kind: "object", path: "M24 72 C35 69 47 69 58 75" },
        { source: "fine detail region", kind: "object", path: "M32 62 C40 66 48 67 55 64" }
      ],
      "arnolfini-social": [
        { source: "painted signature", kind: "object", path: "M42 34 C47 32 54 32 59 34" },
        { source: "convex mirror", kind: "object", path: "M43 43 C45 37 55 37 57 43 C55 50 45 50 43 43" },
        { source: "reflected witnesses", kind: "sightline", arrow: true, path: "M50 43 L50 30" }
      ]
    };
    return definitions[cueSpecClass(spec)] || [];
  }

  function lineSourceLabel(source) {
    const key = `cueUi.lineSources.${cueSpecSlug(source)}`;
    const label = t(key);
    return label.startsWith("Missing:") ? source : label;
  }

  function auxiliaryLineLabel(spec, paths) {
    const sourceLimit = cueSpecClass(spec) === "lastSupper-artist" ? 3 : 2;
    const uniqueSources = [...new Set(paths.map((line) => line.source))].slice(0, sourceLimit);
    if (!uniqueSources.length) return t("cueUi.auxiliaryLinePrefix");
    return `${t("cueUi.auxiliaryLinePrefix")} ${uniqueSources.map(lineSourceLabel).join(" / ")}`;
  }

  function matrixAuxiliaryLineLabel(spec) {
    const labels = {
      "lastSupper-artist": "cueUi.matrixGuideLabels.lastSupperArtist",
      "girl-artist": "cueUi.matrixGuideLabels.girlArtist",
      "arnolfini-artist": "cueUi.matrixGuideLabels.arnolfiniArtist"
    };
    const label = t(labels[cueSpecClass(spec)] || "");
    return label.startsWith("Missing:") ? auxiliaryLineLabel(spec, specLineDefinitions(spec)) : label;
  }

  function renderSpecAuxiliaryLines(spec, config = {}) {
    const visualTypes = new Set(spec.visual_cue_types);
    if (config.matrixPreview && spec.lens_id !== "artist") return "";
    if (!visualTypes.has("object-following-line") && !visualTypes.has("sightline")) return "";
    const allowedSources = new Set(spec.line_sources);
    const specClass = cueSpecClass(spec);
    const maxLines = config.matrixPreview
      ? (specClass === "lastSupper-artist" ? 12 : 4)
      : (specClass === "lastSupper-artist" ? 12 : 5);
    const paths = specLineDefinitions(spec)
      .filter((line) => allowedSources.has(line.source))
      .slice(0, maxLines);
    if (!paths.length) return "";
    const showLegend = !config.matrixPreview && specClass === "arnolfini-social";
    const label = showLegend ? auxiliaryLineLabel(spec, paths) : "";
    const arrowId = `spec-arrow-${specClass}${config.matrixPreview ? "-mini" : "-stage"}`;
    const arrowDef = paths.some((line) => line.arrow)
      ? `
        <defs>
          <marker id="${arrowId}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path class="spec-arrow-head" d="M0 0 L8 4 L0 8 Z"></path>
          </marker>
        </defs>
      `
      : "";
    return `
      <svg
        class="spec-aux-lines spec-lines-${specClass}"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        data-line-sources="${escapeAttr(spec.line_sources.join(" | "))}"
        aria-hidden="true"
      >
        ${arrowDef}
        ${paths
          .map((line) => {
            const arrow = line.arrow ? ` marker-end="url(#${arrowId})"` : "";
            const classes = [
              `spec-${line.kind}-line`,
              `spec-source-${cueSpecSlug(line.source)}`,
              line.arrow ? "spec-line-has-arrow" : "spec-line-no-arrow"
            ].join(" ");
            return `<path class="${classes}" data-line-source="${escapeAttr(line.source)}" d="${line.path}" pathLength="1"${arrow}></path>`;
          })
          .join("")}
      </svg>
      ${showLegend ? `<span class="spec-aux-legend spec-aux-legend-${specClass}">${escapeHtml(label)}</span>` : ""}
    `;
  }

  function renderCue(config) {
    if (!config.cue) return "";
    if (config.cueSpec) return renderSpecCue(config);
    if (config.cue === "artistLastSupper") {
      return `
        <div class="table-highlight attention-table-highlight" style="--x: 50%; --y: 63%; --w: 58%; --h: 9%;"></div>
        <div class="figure-placement-highlight" style="--x: 30%; --y: 49%; --w: 24%; --h: 21%;"></div>
        <div class="figure-placement-highlight" style="--x: 70%; --y: 49%; --w: 24%; --h: 21%;"></div>
        <svg class="gesture-rhythm-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M18 54 C28 45 37 47 45 52"></path>
          <path d="M82 54 C72 45 63 47 55 52"></path>
          <path d="M38 41 C43 47 46 49 50 49"></path>
          <path d="M62 41 C57 47 54 49 50 49"></path>
        </svg>
        ${anchor(config)}
      `;
    }
    if (config.cue === "artistPearl") {
      return `
        <div class="light-edge-highlight" style="--x: 47%; --y: 39%; --w: 19%; --h: 32%;"></div>
        <div class="color-contrast-highlight contrast-blue" style="--x: 58%; --y: 31%; --w: 29%; --h: 16%;"></div>
        <div class="color-contrast-highlight contrast-yellow" style="--x: 51%; --y: 70%; --w: 28%; --h: 20%;"></div>
        <svg class="gaze-line-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="44" y1="39" x2="28" y2="36"></line>
        </svg>
        ${anchor(config)}
      `;
    }
    if (config.cue === "artistArnolfini") {
      return `
        <div class="mirror-highlight" style="--x: 52%; --y: 41%; --w: 13%; --h: 13%;"></div>
        <div class="figure-placement-highlight" style="--x: 33%; --y: 49%; --w: 25%; --h: 56%;"></div>
        <div class="figure-placement-highlight" style="--x: 68%; --y: 50%; --w: 24%; --h: 58%;"></div>
        <svg class="sightline-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="34" y1="30" x2="52" y2="41"></line>
          <line x1="68" y1="31" x2="52" y2="41"></line>
          <line x1="52" y1="41" x2="50" y2="9"></line>
        </svg>
        ${anchor(config)}
      `;
    }
    if (config.cue === "perspective") {
      return anchor(config);
    }
    if (config.cue === "perspective-room") {
      return `
        <svg class="perspective-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="8" y1="0" x2="52" y2="47"></line>
          <line x1="8" y1="100" x2="52" y2="47"></line>
          <line x1="92" y1="0" x2="52" y2="47"></line>
          <line x1="92" y1="100" x2="52" y2="47"></line>
        </svg>
        ${anchor(config)}
      `;
    }
    if (config.cue === "objects" || config.cue === "objectsHigh") {
      const primary = config.cue === "objectsHigh"
        ? 'style="--x: 53%; --y: 18%; --w: 18%; --h: 10%;"'
        : 'style="--x: 74%; --y: 67%; --w: 18%; --h: 12%;"';
      return `
        <div class="object-highlight" ${primary}></div>
        <div class="object-highlight" style="--x: 53%; --y: 18%; --w: 18%; --h: 10%;"></div>
        <div class="object-highlight" style="--x: 38%; --y: 52%; --w: 20%; --h: 18%;"></div>
        ${anchor(config)}
      `;
    }
    if (config.cue === "faceLight") {
      return `
        <div class="soft-highlight" style="--x: 55%; --y: 38%; --w: 34%; --h: 30%;"></div>
        ${anchor(config)}
      `;
    }
    if (config.cue === "pearl") {
      return `
        <div class="pearl-highlight" style="--x: ${config.anchorX || "63%"}; --y: ${config.anchorY || "49%"};"></div>
        ${anchor(config)}
      `;
    }
    if (config.cue === "surface") {
      return `
        <div class="surface-highlight" style="--x: 58%; --y: 42%; --w: 16%; --h: 18%;"></div>
        <div class="surface-highlight" style="--x: 39%; --y: 48%; --w: 12%; --h: 12%;"></div>
        ${anchor(config)}
      `;
    }
    if (config.cue === "textile") {
      return `
        <div class="object-highlight textile-highlight" style="--x: ${config.anchorX || "40%"}; --y: ${config.anchorY || "60%"}; --w: 20%; --h: 16%;"></div>
        ${anchor(config)}
      `;
    }
    if (config.cue === "table") {
      return `
        <div class="table-highlight" style="--x: 55%; --y: 64%; --w: 40%; --h: 10%;"></div>
        ${anchor(config)}
      `;
    }
    return anchor(config);
  }

  function anchor(config) {
    const pointerClass = pointerDirectionClass(config.pointerDirection);
    const targetLabel = config.targetLabel || t("cueUi.discoveryPoint");
    return `
      <span
        class="pointer-cue ${pointerClass}"
        style="--anchor-x: ${config.anchorX || "50%"}; --anchor-y: ${config.anchorY || "50%"};"
        data-pointer-direction="${escapeAttr(config.pointerDirection || "")}"
        aria-hidden="true"
      ></span>
      <span
        class="anchor-target"
        style="--anchor-x: ${config.anchorX || "50%"}; --anchor-y: ${config.anchorY || "50%"};"
        aria-label="${escapeAttr(`${t("cueUi.discoveryPoint")}: ${targetLabel}`)}"
      >
        <span class="anchor-label">
          <span class="anchor-kicker">${escapeHtml(t("cueUi.discoveryPoint"))}</span>
          <span>${escapeHtml(targetLabel)}</span>
        </span>
      </span>
    `;
  }

  function renderAudioCue(config) {
    const audio = t(`hero.audioByArtwork.${config.artwork || defaultHeroArtwork}`);
    const transcript = audio.transcript || t("hero.audioTranscript");
    const confusion = audio.confusion || t("hero.whereExactly");
    return `
      <div class="audio-guide-layer stage-layer--overlay" aria-hidden="true">
        <div class="audio-cue">
          <span style="--h: 20px"></span>
          <span style="--h: 34px"></span>
          <span style="--h: 26px"></span>
          <span style="--h: 38px"></span>
        </div>
        <div class="audio-transcript">${escapeHtml(transcript)}</div>
        <div class="audio-confusion">${escapeHtml(confusion)}</div>
      </div>
    `;
  }

  function renderPhoneMock(artwork) {
    const guide = t(`phoneGuide.${artwork.id || "girl"}`);
    const facts = guide.facts
      .map((fact) => `<div class="phone-info-card">${escapeHtml(fact)}</div>`)
      .join("");
    const chips = guide.chips
      .map((chip) => `<span>${escapeHtml(chip)}</span>`)
      .join("");
    return `
      <div class="phone-mock stage-layer--foreground phone-${artwork.phoneClass}" aria-label="${escapeAttr(t("states.phone.label"))}">
        <div class="phone-screen">
          <div class="phone-status" aria-hidden="true">
            <span>11:42</span>
            <span>5G</span>
          </div>
          <div class="phone-app-bar">
            <span class="phone-app-icon" aria-hidden="true"></span>
            <span>${escapeHtml(guide.app)}</span>
          </div>
          <div class="phone-art" style="--phone-art-ratio: ${artwork.ratio};">
            <img src="${artwork.src}" alt="">
          </div>
          <div class="phone-copy">
            <p class="phone-kicker">${escapeHtml(guide.kicker)}</p>
            <h3>${escapeHtml(guide.title)}</h3>
            <p class="phone-meta">${escapeHtml(guide.meta)}</p>
            <div class="phone-chips" aria-hidden="true">${chips}</div>
            <p class="phone-body">${escapeHtml(guide.body)}</p>
            <div class="phone-info-cards">${facts}</div>
            <div class="phone-scroll-indicator" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    `;
  }

  function renderWearingHud() {
    return `
      <div class="wearing-hud stage-layer--overlay" aria-hidden="true">
        <span class="hud-reticle"></span>
        <span>${t("states.wearing.hud")}</span>
      </div>
    `;
  }

  function renderViewpointSelector(selectedLens = "artist") {
    const options = lensOrder
      .map((lens) => {
        const selected = lens === selectedLens;
        return `
        <span class="hero-viewpoint-option hero-viewpoint-option-${escapeAttr(lens)}${selected ? " is-selected" : ""}" aria-current="${selected}">
          ${stateIcon(lens)}
          <span>${escapeHtml(t(`hero.viewpointSelector.options.${lens}`))}</span>
          ${selected ? '<span class="hero-viewpoint-option-check" aria-hidden="true"></span>' : ""}
        </span>
      `;
      })
      .join("");
    return `
      <aside class="hero-viewpoint-selector stage-layer--panel" aria-label="${escapeAttr(t("hero.viewpointSelector.aria"))}">
        <span class="hero-viewpoint-eyebrow">${escapeHtml(t("hero.viewpointSelector.eyebrow"))}</span>
        <strong>${escapeHtml(t("hero.viewpointSelector.title"))}</strong>
        <p>${escapeHtml(t("hero.viewpointSelector.body"))}</p>
        <div class="hero-viewpoint-options">
          ${options}
        </div>
      </aside>
    `;
  }

  function panelTitle(config) {
    return config.panelTitleKey ? t(config.panelTitleKey) : t(`states.${config.stateId}.title`);
  }

  function panelBody(config) {
    return config.panelBodyKey ? t(config.panelBodyKey) : t(`states.${config.stateId}.body`);
  }

  function cropCalloutStyle(spec) {
    const artwork = artworks[spec.artwork_id] || artworks.girl;
    const detailCrop = cueSpecClass(spec) === "girl-restorer" ? detailAssets.pearl.src : artwork.src;
    const x = spec.target_coordinates.x;
    const y = spec.target_coordinates.y;
    return `background-image: url(${detailCrop}); background-position: ${x}% ${y}%;`;
  }

  function materialVisualSrc(asset, spec) {
    const artwork = artworks[spec.artwork_id] || artworks.girl;
    const sources = {
      "artwork-crop": artwork.src,
      "pearl-visible": detailAssets.pearl.src,
      "pearl-technical": detailAssets.technical.src,
      "arnolfini-mirror-signature": detailAssets.mirrorSignature.src
    };
    return sources[asset] || artwork.src;
  }

  function materialVisualStyle(spec, card) {
    const x = Number.isFinite(card.crop_x) ? card.crop_x : spec.target_coordinates.x;
    const y = Number.isFinite(card.crop_y) ? card.crop_y : spec.target_coordinates.y;
    return `background-image: url(${materialVisualSrc(card.asset, spec)}); background-position: ${x}% ${y}%;`;
  }

  function materialModelSpec(spec) {
    const definitions = {
      "lastSupper-restorer": {
        title_en: "3D surface model",
        title_ja: "3D表面モデル",
        note_en: "Support, paint, loss, and repair separate in space.",
        note_ja: "支持体・絵具・損失・補修を空間的に分けて見る。",
        layers: [
          { key: "support", label_en: "wall", label_ja: "壁", z: 0 },
          { key: "paint", label_en: "paint skin", label_ja: "絵具層", z: 14 },
          { key: "loss", label_en: "loss", label_ja: "損失", z: 28 },
          { key: "repair", label_en: "repair", label_ja: "補修", z: 42 }
        ]
      },
      "girl-restorer": {
        title_en: "Paint illusion model",
        title_ja: "絵具の錯視モデル",
        note_en: "This separates visible paint marks, reflected light, and surrounding darkness. It is not a measured 3D scan.",
        note_ja: "明るい筆触、反射光、周囲の暗さを分解して見る模式表示。実測3Dスキャンではない。",
        layers: [
          { key: "ground", label_en: "dark ground", label_ja: "暗い地", z: 0 },
          { key: "shadow", label_en: "shadow basin", label_ja: "影", z: 12 },
          { key: "dab", label_en: "upper dab", label_ja: "上の筆触", z: 30 },
          { key: "reflection", label_en: "reflection", label_ja: "反射", z: 42 }
        ]
      },
      "arnolfini-restorer": {
        title_en: "3D panel/change-layer model",
        title_ja: "3D板・変更層モデル",
        note_en: "Panel, painted finish, textile ridges, and change zones stack.",
        note_ja: "板、表面仕上げ、布の凹凸、変更部分を層として重ねる。",
        layers: [
          { key: "panel", label_en: "wood panel", label_ja: "木板", z: 0 },
          { key: "underdrawing", label_en: "underdrawing", label_ja: "下描き", z: 12 },
          { key: "paint", label_en: "oil surface", label_ja: "油彩表面", z: 27 },
          { key: "ridge", label_en: "textile ridge", label_ja: "布の稜線", z: 42 }
        ]
      }
    };
    return definitions[cueSpecClass(spec)];
  }

  function renderMaterialModel(spec, options = {}) {
    const model = materialModelSpec(spec);
    if (!model) return "";
    const modelClass = cueSpecClass(spec);
    const layerMarkup = model.layers
      .map((layer, index) => `
        <span
          class="material-model-layer material-model-layer-${cueSpecSlug(layer.key)}"
          style="--layer-z: ${layer.z}px; --layer-index: ${index};"
          aria-hidden="true"
        ></span>
      `)
      .join("");
    const labelMarkup = model.layers
      .map((layer) => `<span class="material-model-label material-model-label-${cueSpecSlug(layer.key)}">${escapeHtml(localizedCardText(layer, "label"))}</span>`)
      .join("");
    return `
      <div class="material-model material-model-${modelClass}${options.compact ? " is-compact" : ""}" aria-label="${escapeAttr(localizedCardText(model, "title"))}">
        <div class="material-model-stage" aria-hidden="true">
          <span class="material-model-axis material-model-axis-z"></span>
          ${layerMarkup}
        </div>
        <div class="material-model-copy">
          <strong>${escapeHtml(localizedCardText(model, "title"))}</strong>
          ${options.compact ? "" : `<span>${escapeHtml(localizedCardText(model, "note"))}</span>`}
        </div>
        ${options.compact ? "" : `<div class="material-model-labels">${labelMarkup}</div>`}
      </div>
    `;
  }

  function matrixFeaturedMaterialCards(spec) {
    if (!Array.isArray(spec.material_visual_cards)) return [];
    if (cueSpecClass(spec) === "girl-restorer" && spec.material_visual_cards[0]) {
      return [spec.material_visual_cards[0]];
    }
    return spec.material_visual_cards.slice(0, 1);
  }

  function renderMaterialEvidence(spec, options = {}) {
    if (spec.lens_id !== "restorer" || !Array.isArray(spec.material_visual_cards)) return "";
    const modelMarkup = options.matrixPreview ? "" : renderMaterialModel(spec, options);
    const cards = options.matrixPreview
      ? matrixFeaturedMaterialCards(spec)
      : (options.compact && modelMarkup ? [] : (options.compact ? spec.material_visual_cards.slice(0, 1) : spec.material_visual_cards));
    const mode = spec.material_visual_mode || "surface";
    const title = cueSpecText(spec, "material_visual_title");
    const cardMarkup = cards
      .map((card) => {
        const visualMode = card.visual_mode || mode;
        return `
          <figure class="material-card material-card-${cueSpecSlug(visualMode)}">
            <span class="material-card-image" style="${materialVisualStyle(spec, card)}" aria-hidden="true"></span>
            <figcaption>
              <strong>${escapeHtml(localizedCardText(card, "label"))}</strong>
              <span>${escapeHtml(localizedCardText(card, "body"))}</span>
            </figcaption>
          </figure>
        `;
      })
      .join("");
    return `
      <div class="material-evidence material-evidence-${cueSpecSlug(mode)}${options.compact ? " is-compact" : ""}">
        <span class="material-evidence-title">${escapeHtml(title)}</span>
        ${modelMarkup}
        ${cardMarkup ? `<div class="material-card-grid">${cardMarkup}</div>` : ""}
      </div>
    `;
  }

  function comparativeVisualSrc(asset, spec) {
    const artwork = artworks[spec.artwork_id] || artworks.girl;
    if (asset === "primary-artwork") return artwork.src;
    return comparativeAssets[asset]?.src || artwork.src;
  }

  function comparativeVisualStyle(spec, card) {
    const x = Number.isFinite(card.crop_x) ? card.crop_x : 50;
    const y = Number.isFinite(card.crop_y) ? card.crop_y : 42;
    return `background-image: url(${comparativeVisualSrc(card.asset, spec)}); background-position: ${x}% ${y}%;`;
  }

  function renderComparativeEvidence(spec, options = {}) {
    if (!Array.isArray(spec.comparative_visual_cards)) return "";
    const mode = spec.comparative_visual_mode || "comparison";
    const title = cueSpecText(spec, "comparative_visual_title");
    const cards = spec.comparative_visual_cards;
    const cardMarkup = cards
      .map((card) => `
        <figure class="comparative-card comparative-card-${cueSpecSlug(card.asset)}">
          <span class="comparative-card-image" style="${comparativeVisualStyle(spec, card)}" aria-hidden="true"></span>
          <figcaption>
            <strong>${escapeHtml(localizedCardText(card, "label"))}</strong>
            <span>${escapeHtml(localizedCardText(card, "body"))}</span>
          </figcaption>
        </figure>
      `)
      .join("");
    return `
      <div class="comparative-evidence comparative-evidence-${cueSpecSlug(mode)}${options.compact ? " is-compact" : ""}">
        <span class="comparative-evidence-title">${escapeHtml(title)}</span>
        <div class="comparative-card-grid">
          ${cardMarkup}
        </div>
      </div>
    `;
  }

  function renderSpecPanel(config) {
    const spec = config.cueSpec;
    const title = config.heroQuestionKey
      ? t(config.heroQuestionKey)
      : config.panelTitleKey
        ? t(config.panelTitleKey)
        : cueSpecStatement(spec);
    const target = cueSpecText(spec, "target_label");
    const specClass = cueSpecClass(spec);
    const compactStageMaterialPanel =
      !config.matrixPreview &&
      !config.heroQuestionOnly &&
      spec.lens_id === "restorer" &&
      (specClass === "lastSupper-restorer" || specClass === "arnolfini-restorer");
    const compactEvidence = !!config.matrixPreview || !!config.heroQuestionOnly || compactStageMaterialPanel;
    const microEvidence = compactEvidence
      ? (cueSpecText(spec, "micro_evidence") || cueSpecExplanation(spec))
      : cueSpecExplanation(spec);
    const positionClass = `panel-${cueSpecSlug(spec.edge_panel_position)}`;
    const materialEvidence = renderMaterialEvidence(spec, {
      compact: !!config.matrixPreview || compactStageMaterialPanel,
      matrixPreview: !!config.matrixPreview
    });
    const comparativeEvidence = compactStageMaterialPanel ? "" : renderComparativeEvidence(spec, { compact: compactEvidence });
    const panelKindClass = `${spec.lens_id === "restorer" ? " spec-material-panel" : ""}${comparativeEvidence ? " spec-comparative-panel" : ""} spec-panel-${specClass}`;
    const crop = spec.visual_cue_types.includes("crop-callout") && !materialEvidence
      ? `<div class="spec-crop-callout" style="${cropCalloutStyle(spec)}" aria-hidden="true"></div>`
      : "";
    if (config.heroQuestionOnly) {
      return `
        <aside
          class="edge-panel hero-question-panel spec-edge-panel stage-layer--panel ${positionClass}${panelKindClass}"
          data-panel-position="${escapeAttr(spec.edge_panel_position)}"
          aria-label="${escapeAttr(t("hero.acts.lookagain.label"))}"
        >
          ${spec.lens_id === "restorer" ? renderMaterialEvidence(spec, { compact: true }) : ""}
          ${comparativeEvidence}
          <span class="panel-target">${escapeHtml(target)}</span>
          <h3>${escapeHtml(title)}</h3>
          <p class="micro-evidence">${escapeHtml(microEvidence)}</p>
        </aside>
      `;
    }
    if (config.matrixPreview) {
      const matrixEvidence = [materialEvidence, comparativeEvidence].filter(Boolean).join("");
      return `
        <aside
          class="edge-panel spec-edge-panel matrix-cue-panel stage-layer--panel ${positionClass}${panelKindClass}"
          data-panel-position="${escapeAttr(spec.edge_panel_position)}"
          aria-label="${escapeAttr(`${cueSpecText(spec, "lens_title")} / ${cueSpecText(spec, "target_label")} / ${title}`)}"
        >
          <span class="matrix-cue-icon" aria-hidden="true">${stateIcon(spec.lens_id)}</span>
          <span class="matrix-cue-copy">
            <span class="panel-target">${escapeHtml(target)}</span>
            <h3>${escapeHtml(title)}</h3>
            <p class="micro-evidence">${escapeHtml(microEvidence)}</p>
          </span>
          ${matrixEvidence ? `<div class="matrix-cue-evidence">${matrixEvidence}</div>` : ""}
        </aside>
      `;
    }
    return `
      <aside
        class="edge-panel spec-edge-panel stage-layer--panel ${positionClass}${panelKindClass}"
        data-panel-position="${escapeAttr(spec.edge_panel_position)}"
        data-source-note="${escapeAttr(cueSpecText(spec, "source_note"))}"
        aria-label="${escapeAttr(`${cueSpecText(spec, "lens_title")} / ${cueSpecText(spec, "target_label")}`)}"
      >
        ${crop}
        ${materialEvidence}
        ${comparativeEvidence}
        <span class="panel-target">${escapeHtml(target)}</span>
        <h3>${escapeHtml(title)}${sourceFootnoteMark(spec)}</h3>
        <p class="micro-evidence">${escapeHtml(microEvidence)}</p>
      </aside>
    `;
  }

  function renderPanel(config) {
    if (config.cueSpec) return renderSpecPanel(config);
    const stateId = config.stateId;
    if (config.heroQuestionOnly) {
      return `
        <aside class="edge-panel hero-question-panel stage-layer--panel" aria-label="${escapeAttr(t("hero.acts.lookagain.label"))}">
          <h3>${panelTitle(config)}</h3>
        </aside>
      `;
    }
    if (stateId === "artist") {
      return renderArtistPanel(config);
    }
    if (stateId === "restorer") {
      if (config.artwork !== "girl") {
        return renderSimplePanel(config);
      }
      return `
        <aside class="edge-panel stage-layer--panel" aria-label="${escapeAttr(t("states.restorer.label"))}">
          <h3>${panelTitle(config)}</h3>
          <p>${panelBody(config)}</p>
          <div class="panel-media">
            ${detailFigure(detailAssets.pearl, t("states.restorer.visible"))}
            ${detailFigure(detailAssets.technical, t("states.restorer.technical"))}
          </div>
        </aside>
      `;
    }
    if (stateId === "social") {
      if (config.artwork !== "arnolfini") {
        return renderSimplePanel(config);
      }
      return `
        <aside class="edge-panel stage-layer--panel" aria-label="${escapeAttr(t("states.social.label"))}">
          <h3>${panelTitle(config)}</h3>
          <p>${panelBody(config)}</p>
          <div class="panel-media">
            ${detailFigure(detailAssets.mirrorSignature, t("states.social.witness"))}
          </div>
        </aside>
      `;
    }
    if (stateId === "museum") {
      const items = t("states.museum.timeline")
        .map((item) => `<li><time>${item.year}</time><span>${item.text}</span></li>`)
        .join("");
      return `
        <aside class="edge-panel timeline-panel stage-layer--panel" aria-label="${escapeAttr(t("states.museum.label"))}">
          <h3>${t("states.museum.title")}</h3>
          <p>${t("states.museum.body")}</p>
          <ol>${items}</ol>
        </aside>
      `;
    }
    return renderSimplePanel(config);
  }

  function renderArtistPanel(config) {
    if (config.compactArtistPanel) {
      return `
        <aside class="edge-panel artist-panel compact-artist-panel stage-layer--panel" aria-label="${escapeAttr(t("states.artist.label"))}">
          <h3>${panelTitle(config)}</h3>
        </aside>
      `;
    }
    return `
      <aside class="edge-panel artist-panel stage-layer--panel" aria-label="${escapeAttr(t("states.artist.label"))}">
        <h3>${panelTitle(config)}</h3>
        <p>${panelBody(config)}</p>
        ${renderArtistDiagram(config)}
      </aside>
    `;
  }

  function renderArtistDiagram(config) {
    const artwork = config.artwork || "lastSupper";
    const label = t(`states.artist.diagram.${artwork}`);
    if (artwork === "lastSupper") {
      return `
        <figure class="artist-diagram artist-diagram-perspective" aria-label="${escapeAttr(label)}">
          <svg viewBox="0 0 120 64" aria-hidden="true">
            <rect x="10" y="10" width="100" height="44" rx="2"></rect>
            <line x1="10" y1="12" x2="60" y2="32"></line>
            <line x1="10" y1="52" x2="60" y2="32"></line>
            <line x1="110" y1="12" x2="60" y2="32"></line>
            <line x1="110" y1="52" x2="60" y2="32"></line>
            <circle cx="60" cy="32" r="3"></circle>
          </svg>
          <figcaption>${label}</figcaption>
        </figure>
      `;
    }
    if (artwork === "girl") {
      return `
        <figure class="artist-diagram artist-diagram-light" aria-label="${escapeAttr(label)}">
          <svg viewBox="0 0 120 64" aria-hidden="true">
            <path class="diagram-light" d="M18 14 C44 8 74 12 102 26 L72 52 C48 42 30 30 18 14Z"></path>
            <circle cx="54" cy="31" r="18"></circle>
            <circle cx="49" cy="28" r="2.5"></circle>
            <circle cx="75" cy="43" r="3"></circle>
          </svg>
          <figcaption>${label}</figcaption>
        </figure>
      `;
    }
    return `
      <figure class="artist-diagram artist-diagram-mirror" aria-label="${escapeAttr(label)}">
        <svg viewBox="0 0 120 64" aria-hidden="true">
          <rect x="16" y="10" width="88" height="44" rx="2"></rect>
          <circle cx="60" cy="31" r="7"></circle>
          <line x1="22" y1="14" x2="60" y2="31"></line>
          <line x1="98" y1="14" x2="60" y2="31"></line>
          <line x1="22" y1="50" x2="60" y2="31"></line>
          <line x1="98" y1="50" x2="60" y2="31"></line>
        </svg>
        <figcaption>${label}</figcaption>
      </figure>
    `;
  }

  function renderSimplePanel(config) {
    return `
      <aside class="edge-panel stage-layer--panel" aria-label="${escapeAttr(t(`states.${config.stateId}.label`))}">
        <h3>${panelTitle(config)}</h3>
        <p>${panelBody(config)}</p>
      </aside>
    `;
  }

  function detailFigure(asset, caption) {
    return `
      <figure>
        <img src="${asset.src}" alt="${escapeAttr(t(asset.altKey))}">
        <figcaption>${caption}</figcaption>
      </figure>
    `;
  }

  function renderQuietMessage() {
    return `<div class="quiet-message">${t("states.quiet.message")}</div>`;
  }

  function cueStageIsVisible(stage) {
    if (!stage || !stage.classList.contains("is-cue-sequence")) return false;
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return false;
    const visibleWidth = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
    return visibleWidth * visibleHeight >= rect.width * rect.height * 0.18;
  }

  function restartCueSequence(stage) {
    if (!stage || reducedMotion || !stage.classList.contains("is-cue-sequence")) return;
    stage.classList.remove("is-cue-sequence-active");
    delete stage.dataset.connectorLockedFor;
    void stage.offsetWidth;
    positionConnector(stage, { force: true });
    stage.dataset.connectorLockedFor = stage.dataset.cueSequenceKey || "active";
    requestAnimationFrame(() => {
      if (stage.classList.contains("is-cue-sequence")) {
        stage.classList.add("is-cue-sequence-active");
      }
    });
  }

  function ensureCueSequenceObserver(stage) {
    if (!stage || reducedMotion || cueSequenceObservedStages.has(stage) || !("IntersectionObserver" in window)) return;
    if (!cueSequenceObserver) {
      cueSequenceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const cueStage = entry.target;
          if (!cueStage.classList.contains("is-cue-sequence")) return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.22) {
            if (cueStage.dataset.cueSequenceVisible !== "true") {
              cueStage.dataset.cueSequenceVisible = "true";
              restartCueSequence(cueStage);
            }
          } else {
            cueStage.dataset.cueSequenceVisible = "false";
          }
        });
      }, { threshold: [0, 0.22, 0.5] });
    }
    cueSequenceObservedStages.add(stage);
    cueSequenceObserver.observe(stage);
  }

  function positionConnector(stage, options = {}) {
    if (
      !options.force &&
      stage?.dataset.connectorLockedFor &&
      stage.dataset.connectorLockedFor === (stage.dataset.cueSequenceKey || "active")
    ) {
      return;
    }
    const scene = stage.querySelector("[data-stage-scene]");
    const svg = scene.querySelector(".connector-svg");
    if (!svg) return;
    const lines = svg.querySelectorAll("line");
    const line = svg.querySelector(".connector-line-draw") || lines[0];
    const start = svg.querySelector(".connector-start");
    const end = svg.querySelector(".connector-end");
    const sourceAnchorEl = scene.querySelector(".artwork-cue-layer .anchor-target") || scene.querySelector(".anchor-target");
    const floatingAnchorEl = scene.querySelector(".floating-anchor-target.anchor-target");
    const panel = scene.querySelector(".edge-panel");

    if (!sourceAnchorEl || !panel) {
      svg.style.display = "none";
      return;
    }

    svg.style.display = "block";
    const sceneRect = scene.getBoundingClientRect();
    const sourceAnchorRect = sourceAnchorEl.getBoundingClientRect();
    const sourceAnchorCenterX = sourceAnchorRect.left + sourceAnchorRect.width / 2;
    const sourceAnchorCenterY = sourceAnchorRect.top + sourceAnchorRect.height / 2;
    scene.style.setProperty("--floating-anchor-x", `${(sourceAnchorCenterX - sceneRect.left).toFixed(2)}px`);
    scene.style.setProperty("--floating-anchor-y", `${(sourceAnchorCenterY - sceneRect.top).toFixed(2)}px`);

    const displayedAnchorEl = floatingAnchorEl || sourceAnchorEl;
    avoidPanelAnchorOverlap(scene, panel, displayedAnchorEl);
    const anchorRect = displayedAnchorEl.getBoundingClientRect();
    const anchorCenterX = anchorRect.left + anchorRect.width / 2;
    const anchorCenterY = anchorRect.top + anchorRect.height / 2;
    const panelRect = panel.getBoundingClientRect();
    const panelConnectionX = anchorCenterX <= panelRect.left ? panelRect.left : panelRect.right;
    const panelConnectionY = Math.max(
      panelRect.top + 22,
      Math.min(anchorCenterY, panelRect.bottom - 22)
    );
    const panelOriginX = panelConnectionX === panelRect.left ? "left" : "right";
    const panelOriginY = ((panelConnectionY - panelRect.top) / panelRect.height) * 100;
    const x1 = ((anchorCenterX - sceneRect.left) / sceneRect.width) * 100;
    const y1 = ((anchorCenterY - sceneRect.top) / sceneRect.height) * 100;
    const x2 = ((panelConnectionX - sceneRect.left) / sceneRect.width) * 100;
    const y2 = ((panelConnectionY - sceneRect.top) / sceneRect.height) * 100;
    const connectorPathLength = Math.hypot(panelConnectionX - anchorCenterX, panelConnectionY - anchorCenterY);

    lines.forEach((connectorLine) => {
      connectorLine.setAttribute("x1", x1.toFixed(2));
      connectorLine.setAttribute("y1", y1.toFixed(2));
      connectorLine.setAttribute("x2", x2.toFixed(2));
      connectorLine.setAttribute("y2", y2.toFixed(2));
    });
    svg.style.setProperty("--connector-path-length", `${connectorPathLength.toFixed(2)}px`);
    start.setAttribute("cx", x1.toFixed(2));
    start.setAttribute("cy", y1.toFixed(2));
    end.setAttribute("cx", x2.toFixed(2));
    end.setAttribute("cy", y2.toFixed(2));
    panel.style.setProperty("--connector-origin-x", panelOriginX);
    panel.style.setProperty("--connector-origin-y", `${panelOriginY.toFixed(2)}%`);
    syncPreviewPanelScrollHint(stage);
  }

  function syncPreviewPanelScrollHint(stage) {
    if (!stage || !stage.classList.contains("explorer-stage")) return;
    const panel = stage.querySelector(".edge-panel");
    if (!panel) return;

    const update = () => {
      const hasOverflow = panel.scrollHeight > panel.clientHeight + 2;
      panel.dataset.scrollable = hasOverflow ? "true" : "false";
      if (!hasOverflow) return;

      const trackInset = 10;
      const trackHeight = Math.max(36, panel.clientHeight - trackInset * 2);
      const thumbHeight = Math.max(28, Math.min(trackHeight, trackHeight * (panel.clientHeight / panel.scrollHeight)));
      const maxScroll = Math.max(1, panel.scrollHeight - panel.clientHeight);
      const maxThumbOffset = Math.max(0, trackHeight - thumbHeight);
      const thumbOffset = (panel.scrollTop / maxScroll) * maxThumbOffset;

      panel.style.setProperty("--preview-scroll-track-top", `${(panel.scrollTop + trackInset).toFixed(2)}px`);
      panel.style.setProperty("--preview-scroll-track-height", `${trackHeight.toFixed(2)}px`);
      panel.style.setProperty("--preview-scroll-thumb-top", `${(panel.scrollTop + trackInset + thumbOffset).toFixed(2)}px`);
      panel.style.setProperty("--preview-scroll-thumb-height", `${thumbHeight.toFixed(2)}px`);
    };

    if (panel.dataset.scrollHintBound !== "true") {
      panel.dataset.scrollHintBound = "true";
      panel.addEventListener("scroll", () => {
        window.requestAnimationFrame(update);
      }, { passive: true });
    }

    update();
  }

  function avoidPanelAnchorOverlap(scene, panel, anchorEl) {
    const sceneRect = scene.getBoundingClientRect();
    panel.style.setProperty("--panel-safe-x", "0px");
    panel.style.setProperty("--panel-safe-y", "0px");
    const labelAnchor = scene.querySelector(".floating-anchor-target.anchor-target") || anchorEl;
    new Set([anchorEl, labelAnchor]).forEach((target) => {
      target.style.setProperty("--anchor-label-safe-x", "0px");
      target.style.setProperty("--anchor-label-safe-y", "0px");
      target.classList.remove("is-anchor-label-minimized");
    });

    const panelRect = panel.getBoundingClientRect();
    const anchorRect = inflateRect(labelAnchor.getBoundingClientRect(), 8);
    const label = labelAnchor.querySelector(".anchor-label");
    const labelRect = label ? label.getBoundingClientRect() : null;
    const safeGap = 18;
    const padding = 12;
    const initialTargetRect = labelRect ? unionRects(anchorRect, labelRect) : anchorRect;
    const initialPanelOverlap = overlapArea(panelRect, initialTargetRect, safeGap);
    if (!initialPanelOverlap) return;

    if (labelRect) {
      const labelCandidates = [
        [0, 0],
        [0, -54],
        [0, 54],
        [-58, 0],
        [58, 0],
        [-58, -42],
        [58, -42],
        [-58, 42],
        [58, 42]
      ];
      const bestLabel = labelCandidates
        .map(([x, y]) => {
          const shiftedLabel = shiftRect(labelRect, x, y);
          const targetRect = unionRects(anchorRect, shiftedLabel);
          const panelOverlap = overlapArea(panelRect, targetRect, safeGap);
          return {
            x,
            y,
            panelOverlap,
            boundsPenalty: rectWithinScenePenalty(targetRect, sceneRect, padding),
            distance: Math.abs(x) + Math.abs(y) * 1.08
          };
        })
        .sort((a, b) =>
          a.boundsPenalty - b.boundsPenalty ||
          a.panelOverlap - b.panelOverlap ||
          a.distance - b.distance
        )[0];

      if (
        bestLabel &&
        bestLabel.boundsPenalty === 0 &&
        (bestLabel.panelOverlap < initialPanelOverlap || bestLabel.distance === 0)
      ) {
        labelAnchor.style.setProperty("--anchor-label-safe-x", `${bestLabel.x.toFixed(2)}px`);
        labelAnchor.style.setProperty("--anchor-label-safe-y", `${bestLabel.y.toFixed(2)}px`);
        if (bestLabel.panelOverlap === 0) return;
      }

      if (!initialPanelOverlap) return;
      labelAnchor.classList.add("is-anchor-label-minimized");
      if (!rectsOverlap(panelRect, anchorRect, safeGap)) return;
    }

    const minX = sceneRect.left + padding - panelRect.left;
    const maxX = sceneRect.right - padding - panelRect.right;
    const minY = sceneRect.top + padding - panelRect.top;
    const maxY = sceneRect.bottom - padding - panelRect.bottom;
    const maxNudgeX = 92;
    const maxNudgeY = 92;
    const rawCandidates = [
      [0, 0],
      [0, -maxNudgeY],
      [0, maxNudgeY],
      [-maxNudgeX, 0],
      [maxNudgeX, 0],
      [-maxNudgeX, -maxNudgeY],
      [maxNudgeX, -maxNudgeY],
      [-maxNudgeX, maxNudgeY],
      [maxNudgeX, maxNudgeY]
    ];
    const candidates = rawCandidates
      .map(([x, y]) => ({
        x: clamp(x, minX, maxX),
        y: clamp(y, minY, maxY)
      }))
      .filter((candidate, index, list) =>
        list.findIndex((item) => Math.abs(item.x - candidate.x) < 0.5 && Math.abs(item.y - candidate.y) < 0.5) === index
      );

    const scored = candidates
      .map((candidate) => {
        const shifted = shiftRect(panelRect, candidate.x, candidate.y);
        const overlap = overlapArea(shifted, anchorRect, safeGap);
        const distance = Math.abs(candidate.x) * 1.18 + Math.abs(candidate.y);
        const boundsPenalty = rectWithinScenePenalty(shifted, sceneRect, padding);
        return { ...candidate, overlap, distance, boundsPenalty };
      })
      .sort((a, b) =>
        a.boundsPenalty - b.boundsPenalty ||
        a.overlap - b.overlap ||
        a.distance - b.distance
      );

    const best = scored[0];
    if (!best) return;
    panel.style.setProperty("--panel-safe-x", `${best.x.toFixed(2)}px`);
    panel.style.setProperty("--panel-safe-y", `${best.y.toFixed(2)}px`);
  }

  function unionRects(a, b) {
    return {
      left: Math.min(a.left, b.left),
      top: Math.min(a.top, b.top),
      right: Math.max(a.right, b.right),
      bottom: Math.max(a.bottom, b.bottom),
      width: Math.max(a.right, b.right) - Math.min(a.left, b.left),
      height: Math.max(a.bottom, b.bottom) - Math.min(a.top, b.top)
    };
  }

  function inflateRect(rect, amount) {
    return {
      left: rect.left - amount,
      top: rect.top - amount,
      right: rect.right + amount,
      bottom: rect.bottom + amount,
      width: rect.width + amount * 2,
      height: rect.height + amount * 2
    };
  }

  function shiftRect(rect, x, y) {
    return {
      left: rect.left + x,
      top: rect.top + y,
      right: rect.right + x,
      bottom: rect.bottom + y,
      width: rect.width,
      height: rect.height
    };
  }

  function rectsOverlap(a, b, gap = 0) {
    return a.left < b.right + gap &&
      a.right > b.left - gap &&
      a.top < b.bottom + gap &&
      a.bottom > b.top - gap;
  }

  function overlapArea(a, b, gap = 0) {
    const overlapWidth = Math.max(0, Math.min(a.right, b.right + gap) - Math.max(a.left, b.left - gap));
    const overlapHeight = Math.max(0, Math.min(a.bottom, b.bottom + gap) - Math.max(a.top, b.top - gap));
    return overlapWidth * overlapHeight;
  }

  function rectWithinScenePenalty(rect, sceneRect, padding) {
    const x = Math.max(0, sceneRect.left + padding - rect.left) + Math.max(0, rect.right - sceneRect.right + padding);
    const y = Math.max(0, sceneRect.top + padding - rect.top) + Math.max(0, rect.bottom - sceneRect.bottom + padding);
    return x * 10000 + y * 10000;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function positionMatrixConnector(stage) {
    const scene = stage.querySelector(".stage-scene");
    const svg = scene?.querySelector(".connector-svg");
    if (!scene || !svg) return;
    const line = svg.querySelector("line");
    const start = svg.querySelector(".connector-start");
    const end = svg.querySelector(".connector-end");
    const anchorEl = scene.querySelector(".anchor-target");
    const panel = scene.querySelector(".matrix-cue-panel");

    if (!line || !start || !end || !anchorEl || !panel) {
      svg.style.display = "none";
      return;
    }

    svg.style.display = "block";
    const sceneRect = scene.getBoundingClientRect();
    const anchorRect = anchorEl.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    if (!sceneRect.width || !sceneRect.height) return;

    const anchorCenterX = anchorRect.left + anchorRect.width / 2;
    const anchorCenterY = anchorRect.top + anchorRect.height / 2;
    const panelConnectionX = anchorCenterX <= panelRect.left ? panelRect.left : panelRect.right;
    const panelConnectionY = panelRect.top + panelRect.height / 2;
    const panelOriginX = panelConnectionX === panelRect.left ? "left" : "right";
    const panelOriginY = ((panelConnectionY - panelRect.top) / panelRect.height) * 100;
    const x1 = ((anchorCenterX - sceneRect.left) / sceneRect.width) * 100;
    const y1 = ((anchorCenterY - sceneRect.top) / sceneRect.height) * 100;
    const x2 = ((panelConnectionX - sceneRect.left) / sceneRect.width) * 100;
    const y2 = ((panelConnectionY - sceneRect.top) / sceneRect.height) * 100;

    line.setAttribute("x1", x1.toFixed(2));
    line.setAttribute("y1", y1.toFixed(2));
    line.setAttribute("x2", x2.toFixed(2));
    line.setAttribute("y2", y2.toFixed(2));
    start.setAttribute("cx", x1.toFixed(2));
    start.setAttribute("cy", y1.toFixed(2));
    end.setAttribute("cx", x2.toFixed(2));
    end.setAttribute("cy", y2.toFixed(2));
    panel.style.setProperty("--connector-origin-x", panelOriginX);
    panel.style.setProperty("--connector-origin-y", `${panelOriginY.toFixed(2)}%`);
  }

  function positionMatrixConnectors() {
    const stages = lensMatrix ? lensMatrix.querySelectorAll(".matrix-mini-stage") : [];
    stages.forEach(positionMatrixConnector);
  }

  function scheduleMatrixConnectorPositioning() {
    requestAnimationFrame(() => {
      positionMatrixConnectors();
      requestAnimationFrame(positionMatrixConnectors);
    });
  }

  const PARALLAX_LERP = 0.42;
  const PARALLAX_REST_THRESHOLD = 0.01;
  const PARALLAX_RANGE = {
    roomX: 2.4,
    roomY: 1.6,
    overlayX: 4.8,
    overlayY: 2.8,
    panelX: 3.1,
    panelY: 2,
    phoneX: 10,
    phoneY: 6,
    phoneRotate: 0.8
  };

  function setStageParallax(stage, x, y) {
    if (!stage) return;
    const clampedX = Math.max(-1, Math.min(1, x));
    const clampedY = Math.max(-1, Math.min(1, y));
    const xrResponseCurve = (value) => value * (0.92 + Math.abs(value) * 0.08);
    const easedX = xrResponseCurve(clampedX);
    const easedY = xrResponseCurve(clampedY);
    stage.style.setProperty("--look-x", easedX.toFixed(3));
    stage.style.setProperty("--look-y", easedY.toFixed(3));
    stage.style.setProperty("--room-x", `${(-easedX * PARALLAX_RANGE.roomX).toFixed(2)}px`);
    stage.style.setProperty("--room-y", `${(-easedY * PARALLAX_RANGE.roomY).toFixed(2)}px`);
    stage.style.setProperty("--art-x", `${(-easedX * PARALLAX_RANGE.roomX).toFixed(2)}px`);
    stage.style.setProperty("--art-y", `${(-easedY * PARALLAX_RANGE.roomY).toFixed(2)}px`);
    stage.style.setProperty("--overlay-x", `${(-easedX * PARALLAX_RANGE.overlayX).toFixed(2)}px`);
    stage.style.setProperty("--overlay-y", `${(-easedY * PARALLAX_RANGE.overlayY).toFixed(2)}px`);
    stage.style.setProperty("--panel-x", `${(-easedX * PARALLAX_RANGE.panelX).toFixed(2)}px`);
    stage.style.setProperty("--panel-y", `${(-easedY * PARALLAX_RANGE.panelY).toFixed(2)}px`);
    stage.style.setProperty("--phone-x", `${(-easedX * PARALLAX_RANGE.phoneX).toFixed(2)}px`);
    stage.style.setProperty("--phone-y", `${(-easedY * PARALLAX_RANGE.phoneY).toFixed(2)}px`);
    stage.style.setProperty("--phone-rotate", `${(easedX * PARALLAX_RANGE.phoneRotate).toFixed(2)}deg`);
  }

  function resetStageParallax(stage, options = {}) {
    if (!stage) return;
    const state = parallaxStages.get(stage);
    if (state && !options.immediate) {
      state.targetX = 0;
      state.targetY = 0;
      state.wake();
    } else {
      if (state) {
        state.currentX = 0;
        state.currentY = 0;
        state.targetX = 0;
        state.targetY = 0;
      }
      setStageParallax(stage, 0, 0);
      if (!options.immediate) {
        requestAnimationFrame(() => positionConnector(stage));
      }
    }
  }

  function initStageParallax(stage) {
    if (!stage || reducedMotion || parallaxStages.has(stage)) {
      return;
    }
    stage.classList.add("is-parallax-enabled");
    resetStageParallax(stage, { immediate: true });
    const state = { frame: 0, currentX: 0, currentY: 0, targetX: 0, targetY: 0, wake: null };
    parallaxStages.set(stage, state);

    const animate = () => {
      state.frame = 0;
      const dx = state.targetX - state.currentX;
      const dy = state.targetY - state.currentY;
      state.currentX += dx * PARALLAX_LERP;
      state.currentY += dy * PARALLAX_LERP;
      if (Math.abs(dx) < PARALLAX_REST_THRESHOLD) state.currentX = state.targetX;
      if (Math.abs(dy) < PARALLAX_REST_THRESHOLD) state.currentY = state.targetY;
      setStageParallax(stage, state.currentX, state.currentY);
      positionConnector(stage);
      if (
        Math.abs(state.targetX - state.currentX) > PARALLAX_REST_THRESHOLD ||
        Math.abs(state.targetY - state.currentY) > PARALLAX_REST_THRESHOLD
      ) {
        state.frame = window.requestAnimationFrame(animate);
      }
    };

    state.wake = () => {
      if (state.frame) return;
      state.frame = window.requestAnimationFrame(animate);
    };

    const updateTargetFromPoint = (clientX, clientY) => {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      state.targetX = ((clientX - rect.left) / rect.width - 0.5) * 2;
      state.targetY = ((clientY - rect.top) / rect.height - 0.5) * 2;
      state.wake();
    };

    const updateTargetIfInside = (event) => {
      const rect = stage.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        return;
      }
      updateTargetFromPoint(event.clientX, event.clientY);
    };

    stage.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch" && event.pressure === 0) return;
      updateTargetFromPoint(event.clientX, event.clientY);
    }, { passive: true });

    stage.addEventListener("mousemove", (event) => {
      updateTargetFromPoint(event.clientX, event.clientY);
    }, { passive: true });

    document.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch" && event.pressure === 0) return;
      updateTargetIfInside(event);
    }, { passive: true });

    document.addEventListener("mousemove", updateTargetIfInside, { passive: true });

    stage.addEventListener("pointerleave", () => resetStageParallax(stage), { passive: true });
    stage.addEventListener("pointercancel", () => resetStageParallax(stage), { passive: true });
  }

  function lensOverrideForArtwork(lens, artworkId) {
    const validLens = lensItems[lens] ? lens : "artist";
    const item = lensItems[validLens].find((candidate) => candidate.artwork === artworkId) || lensItems[validLens][0];
    const override = {
      ...item,
      panel: true
    };
    return override;
  }

  function existingHeroOverrides(stateId) {
    return {
      artwork: currentHeroArtwork,
      uncertainFocus: true,
      captionKey: `hero.existingCaptions.${stateId}`
    };
  }

  function lookAgainHeroOverrides() {
    const example = heroLookAgainExamples[currentLookAgainIndex] || heroLookAgainExamples[0];
    if (example.stateId === "select") {
      return {
        artwork: example.artwork,
        viewpointSelect: true,
        viewpointSelectedLens: example.selectedLens || example.lens,
        panel: false,
        stageIcon: "select",
        stageLabelKey: `hero.lookAgainExamples.${example.key}.label`,
        captionKey: `hero.lookAgainExamples.${example.key}.caption`
      };
    }
    if (example.stateId === "quiet") {
      return {
        artwork: example.artwork,
        quiet: true,
        panel: false,
        stageIcon: "quiet",
        stageLabelKey: `hero.lookAgainExamples.${example.key}.label`,
        captionKey: `hero.lookAgainExamples.${example.key}.caption`
      };
    }
    const item =
      (lensItems[example.lens] || []).find((candidate) => candidate.artwork === example.artwork) ||
      (lensItems[example.lens] || [])[0] ||
      lensItems.artist[0];
    return {
      ...item,
      artwork: example.artwork,
      panel: true,
      heroQuestionOnly: true,
      stageIcon: example.stateId,
      stageLabelKey: `hero.lookAgainExamples.${example.key}.label`,
      heroQuestionKey: `hero.lookAgainExamples.${example.key}.question`,
      captionKey: `hero.lookAgainExamples.${example.key}.caption`
    };
  }

  function renderCurrentHeroStage() {
    if (currentHeroPinnedState) {
      renderPinnedHeroStage(currentHeroPinnedState);
      return;
    }
    if (currentHeroAct === "lookagain") {
      const example = heroLookAgainExamples[currentLookAgainIndex] || heroLookAgainExamples[0];
      renderStage(heroStage, example.stateId, lookAgainHeroOverrides());
      return;
    }
    renderStage(heroStage, currentExistingState, existingHeroOverrides(currentExistingState));
  }

  function renderPinnedHeroStage(stateId) {
    if (existingSequence.includes(stateId)) {
      renderStage(heroStage, stateId, existingHeroOverrides(stateId));
      return;
    }
    if (stateId === "lookagain") {
      currentLookAgainIndex = 0;
      renderStage(heroStage, "select", lookAgainHeroOverrides());
      return;
    }
    if (stateId === "wearing" || stateId === "quiet") {
      renderStage(heroStage, stateId, { artwork: currentHeroArtwork });
      return;
    }
    const heroExampleIndex = heroLookAgainExamples.findIndex((example) => example.stateId === stateId);
    if (heroExampleIndex >= 0) {
      currentLookAgainIndex = heroExampleIndex;
      const example = heroLookAgainExamples[heroExampleIndex];
      renderStage(heroStage, example.stateId, lookAgainHeroOverrides());
      return;
    }
    const item = lensOverrideForArtwork(stateId, currentHeroArtwork);
    renderStage(heroStage, stateId, item);
  }

  function setExistingState(stateId, options = {}) {
    if (options.pause) stopHeroAutoplay();
    if (!existingSequence.includes(stateId)) stateId = "looking";
    currentHeroPinnedState = null;
    currentExistingState = stateId;
    currentHeroAct = "existing";
    setHeroAct("existing");
    renderCurrentHeroStage();
  }

  function setLookAgainHero(options = {}) {
    if (options.pause) stopHeroAutoplay();
    currentHeroPinnedState = null;
    currentHeroAct = "lookagain";
    currentLookAgainIndex = Number.isFinite(options.index) ? options.index : 0;
    setHeroAct("lookagain");
    renderCurrentHeroStage();
  }

  function setHeroState(stateId, options = {}) {
    const heroExampleIndex = heroLookAgainExamples.findIndex((example) => example.stateId === stateId);
    if (heroExampleIndex >= 0) {
      setLookAgainHero({ ...options, index: heroExampleIndex });
      return;
    }
    if (heroQueryStates.includes(stateId) && !existingSequence.includes(stateId) && stateId !== "lookagain") {
      if (options.pause) stopHeroAutoplay();
      currentHeroPinnedState = stateId;
      currentHeroAct = "lookagain";
      setHeroAct("lookagain");
      currentHeroPinnedState = stateId;
      renderCurrentHeroStage();
      return;
    }
    if (existingSequence.includes(stateId)) {
      setExistingState(stateId, options);
      return;
    }
    if (stateId === "lookagain") {
      setLookAgainHero(options);
      return;
    }
    setLookAgainHero(options);
  }

  function startHeroAutoplay() {
    stopHeroAutoplay();
    currentHeroPinnedState = null;
    autoplayPhase = "lookagain";
    autoplayIndex = 0;
    currentHeroAct = "lookagain";
    currentLookAgainIndex = 0;
    setHeroAct("lookagain");
    renderCurrentHeroStage();
    if (reducedMotion) return;
    scheduleHeroAutoplay(heroExampleDuration(heroLookAgainExamples[currentLookAgainIndex]));
  }

  function scheduleHeroAutoplay(delay) {
    if (heroTimer) {
      window.clearTimeout(heroTimer);
      heroTimer = null;
    }
    heroTimer = window.setTimeout(advanceHeroAutoplay, delay);
  }

  function advanceHeroAutoplay() {
    heroTimer = null;
    if (autoplayPhase === "lookagain") {
      if (currentLookAgainIndex >= heroLookAgainExamples.length - 1) {
        stopHeroAutoplay();
        return;
      }
      currentLookAgainIndex += 1;
      renderCurrentHeroStage();
      renderHeroRails();
      const example = heroLookAgainExamples[currentLookAgainIndex];
      if (currentLookAgainIndex < heroLookAgainExamples.length - 1) {
        scheduleHeroAutoplay(heroExampleDuration(example));
      }
      return;
    }
    stopHeroAutoplay();
  }

  function stopHeroAutoplay() {
    if (heroTimer) {
      window.clearTimeout(heroTimer);
      heroTimer = null;
    }
  }

  function replayHero() {
    currentHeroPinnedState = null;
    currentHeroAct = "lookagain";
    currentLookAgainIndex = 0;
    renderCurrentHeroStage();
    renderHeroRails();
    startHeroAutoplay();
  }

  function selectedPreviewItem() {
    const items = lensItems[currentLens];
    const item = items[Math.min(currentLensItem, items.length - 1)];
    currentLensItem = items.indexOf(item);
    return item;
  }

  function renderLensMatrix() {
    const currentItem = selectedPreviewItem();
    const headings = lensOrder
      .map((lens, index) => {
        const subhead = t(`lenses.columnSubheads.${lens}`);
        return `
          <div class="matrix-column-heading${index > 0 ? " matrix-col-separator" : ""}" role="columnheader">
            <strong>${escapeHtml(t(`lenses.names.${lens}`))}</strong>
            ${subhead ? `<span>${escapeHtml(subhead)}</span>` : ""}
          </div>
        `;
      })
      .join("");
    const cells = artworkOrder
      .map((artworkId) =>
        lensOrder
          .map((lens, index) => {
            const artwork = artworks[artworkId];
            const spec = getCueSpec(artworkId, lens);
            const selected = currentLens === lens && currentItem.artwork === artworkId;
            return `
              <button
                type="button"
                class="matrix-cell matrix-grid-cell matrix-preview-cell${index > 0 ? " matrix-col-separator" : ""}"
                data-matrix-lens="${lens}"
                data-matrix-artwork="${artworkId}"
                aria-pressed="${selected}"
                aria-label="${escapeAttr(`${t(artwork.labelKey)} / ${t(`lenses.names.${lens}`)} / ${spec ? cueSpecText(spec, "target_label") : ""}`)}"
              >
                ${renderMatrixCell(artworkId, lens)}
                <span class="matrix-preview-cta">
                  <span>${escapeHtml(t("lenses.previewCta"))}</span>
                  <span aria-hidden="true">↓</span>
                </span>
              </button>
            `;
          })
          .join("")
      )
      .join("");

    lensMatrix.innerHTML = `
      <div class="matrix-column-headings" role="row">
        ${headings}
      </div>
      <div class="matrix-grid-cells" role="rowgroup">
        ${cells}
      </div>
    `;
    scheduleMatrixConnectorPositioning();
  }

  function renderMatrixPreview(artworkId, lens) {
    const item = lensItems[lens].find((candidate) => candidate.artwork === artworkId);
    return renderStaticStageMarkup(lens, {
      ...(item || { artwork: artworkId }),
      panel: true,
      matrixPreview: true,
      panelTitleKey: `lenses.matrix.${artworkId}.${lens}.body`,
      panelBodyKey: `lenses.matrix.${artworkId}.${lens}.body`
    });
  }

  function renderMatrixCell(artworkId, lens) {
    const spec = getCueSpec(artworkId, lens);
    if (!spec) return "";
    return `
      <div class="matrix-cue-preview" aria-hidden="true">
        ${renderMatrixPreview(artworkId, lens)}
        <span class="matrix-artwork-chip">${escapeHtml(t(artworks[artworkId].labelKey))}</span>
      </div>
    `;
  }

  function renderPreviewDetails(item) {
    if (!previewDetails || !item?.cueSpec) return;
    const spec = item.cueSpec;
    const target = cueSpecText(spec, "target_label");
    const evidenceTypes = [
      spec.visual_cue_types?.includes("crop-callout") ? (lang === "ja" ? "拡大画像" : "crop") : "",
      spec.visual_cue_types?.includes("material-surface-scan") ? (lang === "ja" ? "素材モデル" : "material model") : "",
      Array.isArray(spec.comparative_visual_cards) && spec.comparative_visual_cards.length ? (lang === "ja" ? "比較画像" : "comparison image") : ""
    ].filter(Boolean);
    const evidenceBody = evidenceTypes.length
      ? formatMessage(t("preview.mechanics.items.evidence.body"), { evidence: evidenceTypes.join(lang === "ja" ? "・" : ", ") })
      : (lang === "ja"
        ? "線と端のパネルが問いの入口を示す。"
        : "The line and edge panel make the first question visible.");
    const sourceNumber = sourceFootnoteNumber(spec);
    const mechanismItems = [
      {
        key: "target",
        label: t("preview.mechanics.items.target.label"),
        body: formatMessage(t("preview.mechanics.items.target.body"), { target })
      },
      {
        key: "anchor",
        label: t("preview.mechanics.items.anchor.label"),
        body: t("preview.mechanics.items.anchor.body")
      },
      {
        key: "panel",
        label: t("preview.mechanics.items.panel.label"),
        body: t("preview.mechanics.items.panel.body")
      },
      {
        key: "evidence",
        label: t("preview.mechanics.items.evidence.label"),
        body: evidenceBody
      },
      {
        key: "timing",
        label: t("preview.mechanics.items.timing.label"),
        body: t("preview.mechanics.items.timing.body")
      },
      {
        key: "source",
        label: t("preview.mechanics.items.source.label"),
        body: sourceNumber
          ? formatMessage(t("preview.mechanics.items.source.body"), { number: `[${sourceNumber}]` })
          : (lang === "ja" ? "出典がある場合は、脚注をページ最下部にまとめる。" : "When a source is present, the full link sits at the bottom of the page.")
      },
      {
        key: "final",
        label: t("preview.mechanics.items.final.label"),
        body: t("preview.mechanics.items.final.body")
      }
    ];
    previewDetails.innerHTML = `
      <p class="preview-kicker">${escapeHtml(t("preview.mechanics.kicker"))}</p>
      <h3>${escapeHtml(t("preview.mechanics.title"))}</h3>
      <div class="preview-display-stack">
        ${mechanismItems
          .map((entry) => `
            <div class="preview-display-item preview-display-item-${escapeAttr(entry.key)}">
              <strong>${escapeHtml(entry.label)}</strong>
              <span>${escapeHtml(entry.body)}</span>
            </div>
          `)
          .join("")}
      </div>
    `;
  }

  function renderPreviewReference(spec) {
    const note = cueSpecText(spec, "source_note");
    const urls = Array.isArray(spec.source_urls) ? spec.source_urls.slice(0, 2) : [];
    if (!note && !urls.length) return "";
    const label = lang === "ja" ? "参照" : "References";
    const links = urls
      .map((url, index) => `
        <a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(lang === "ja" ? `資料${index + 1}` : `Source ${index + 1}`)}
        </a>
      `)
      .join("");
    return `
      <div class="preview-reference-note">
        <span>${escapeHtml(label)}</span>
        ${note ? `<p>${escapeHtml(note)}</p>` : ""}
        ${links ? `<p class="preview-reference-links">${links}</p>` : ""}
      </div>
    `;
  }

  function renderSourceFootnotes() {
    if (!sourceFootnotes) return;
    const entries = sourceFootnoteEntries();
    if (!entries.length) {
      sourceFootnotes.hidden = true;
      sourceFootnotes.innerHTML = "";
      return;
    }
    sourceFootnotes.hidden = false;
    sourceFootnotes.innerHTML = `
      <div class="section-inner source-footnotes-inner">
        <p class="source-footnotes-kicker">${escapeHtml(t("sourceFootnotes.kicker"))}</p>
        <h2>${escapeHtml(t("sourceFootnotes.title"))}</h2>
        <ol>
          ${entries
            .map((entry) => `
              <li id="source-footnote-${entry.index}">
                <a href="${escapeAttr(entry.url)}" target="_blank" rel="noopener noreferrer">
                  <span class="source-footnote-number">[${entry.index}]</span>
                  <span>${escapeHtml(entry.label)}</span>
                </a>
                <small>${escapeHtml(t("sourceFootnotes.itemPrefix"))}: ${escapeHtml(entry.usedBy.join(" / "))}</small>
              </li>
            `)
            .join("")}
        </ol>
      </div>
    `;
  }

  function renderPreviewControls(item) {
    if (!item) return;
    const lensButtons = lensOrder
      .map((lens) => `
        <button
          type="button"
          class="preview-control-button"
          data-preview-lens="${lens}"
          aria-pressed="${currentLens === lens}"
        >
          ${escapeHtml(t(`lenses.names.${lens}`))}
        </button>
      `)
      .join("");
    const artworkButtons = artworkOrder
      .map((artworkId) => `
        <button
          type="button"
          class="preview-control-button"
          data-preview-artwork="${artworkId}"
          aria-pressed="${item.artwork === artworkId}"
        >
          ${escapeHtml(t(artworks[artworkId].labelKey))}
        </button>
      `)
      .join("");

    if (previewLensControls) {
      previewLensControls.innerHTML = `
      <div class="preview-control-group preview-control-group-lens" role="group" aria-label="${escapeAttr(t("preview.controls.viewpoint"))}">
        <span>${escapeHtml(t("preview.controls.viewpoint"))}</span>
        <div class="preview-control-row">${lensButtons}</div>
      </div>
    `;
    }
    if (previewArtworkControls) {
      previewArtworkControls.innerHTML = `
      <div class="preview-control-group preview-control-group-artwork" role="group" aria-label="${escapeAttr(t("preview.controls.artwork"))}">
        <span>${escapeHtml(t("preview.controls.artwork"))}</span>
        <div class="preview-control-row">${artworkButtons}</div>
      </div>
    `;
    }
  }

  function renderExplorer() {
    const item = selectedPreviewItem();
    const overrides = {
      ...item,
      panel: true
    };
    renderLensMatrix();
    renderPreviewControls(item);
    renderStage(explorerStage, currentLens, overrides);
    renderPreviewDetails(item);
    renderSourceFootnotes();
  }

  function setLens(lens, itemIndex = 0) {
    currentLens = lensOrder.includes(lens) ? lens : "artist";
    const maxIndex = lensItems[currentLens].length - 1;
    currentLensItem = Number.isFinite(itemIndex) ? Math.max(0, Math.min(itemIndex, maxIndex)) : 0;
    renderExplorer();
  }

  function setLensByArtwork(lens, artworkId) {
    const validLens = lensOrder.includes(lens) ? lens : "artist";
    const index = lensItems[validLens].findIndex((item) => item.artwork === artworkId);
    setLens(validLens, index >= 0 ? index : 0);
  }

  function setLanguage(nextLang) {
    if (nextLang !== "en" && nextLang !== "ja") return;
    lang = nextLang;
    writeStoredLang(lang);
    applyStaticI18n();
    renderCurrentHeroStage();
    renderHeroRails();
    renderExplorer();
  }

  function handlePreviewControlClick(event) {
    const lensButton = event.target.closest("[data-preview-lens]");
    if (lensButton) {
      const item = selectedPreviewItem();
      setLensByArtwork(lensButton.dataset.previewLens, item.artwork);
      return;
    }
    const artworkButton = event.target.closest("[data-preview-artwork]");
    if (artworkButton) {
      setLensByArtwork(currentLens, artworkButton.dataset.previewArtwork);
    }
  }

  function bindEvents() {
    initStageParallax(heroStage);
    initStageParallax(explorerStage);
    document.querySelector('[data-action="replay"]').addEventListener("click", replayHero);
    document.querySelector('[data-action="explore-lenses"]').addEventListener("click", () => {
      document.querySelector("#lenses").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    heroActRail?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-hero-act]");
      if (!button) return;
      if (button.dataset.heroAct === "lookagain") {
        setLookAgainHero({ pause: true });
      } else {
        setExistingState(currentExistingState, { pause: true });
      }
    });
    existingSubstateRail?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-existing-step]");
      if (!button) return;
      setExistingState(button.dataset.existingStep, { pause: true });
    });
    lookAgainSubstateRail?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-lookagain-step]");
      if (!button) return;
      setLookAgainHero({ index: Number.parseInt(button.dataset.lookagainStep, 10), pause: true });
    });
    lensMatrix.addEventListener("click", (event) => {
      const button = event.target.closest("[data-matrix-lens]");
      if (!button) return;
      setLensByArtwork(button.dataset.matrixLens, button.dataset.matrixArtwork);
      window.setTimeout(() => {
        document.querySelector("#preview")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      }, 40);
    });
    previewLensControls?.addEventListener("click", handlePreviewControlClick);
    previewArtworkControls?.addEventListener("click", handlePreviewControlClick);
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.langButton));
    });
    window.addEventListener("resize", () => {
      positionConnector(heroStage, { force: true });
      positionConnector(explorerStage, { force: true });
      scheduleMatrixConnectorPositioning();
    });
  }

  function applyQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const heroParam = params.get("hero");
    const oldParam = params.get("old");
    const newParam = params.get("new");
    const lensParam = params.get("lens");
    const artworkParam = params.get("artwork");
    const itemParam = Number.parseInt(params.get("item") || "0", 10);
    const sectionParam = params.get("section");
    if (artworkParam && artworks[artworkParam]) {
      currentHeroArtwork = artworkParam;
    }

    if (lensParam && artworkParam && artworks[artworkParam]) {
      setLensByArtwork(lensParam, artworkParam);
    } else if (lensParam) {
      setLens(lensParam, Number.isFinite(itemParam) ? itemParam : 0);
    } else {
      setLens("artist", 0);
    }

    if (heroParam && heroQueryStates.includes(heroParam)) {
      setHeroState(heroParam, { pause: true });
    } else if (newParam === "lookagain" || (newParam && heroQueryStates.includes(newParam))) {
      setHeroState(newParam, { pause: true });
    } else {
      startHeroAutoplay();
    }

    if (sectionParam === "lenses" || sectionParam === "preview") {
      window.setTimeout(() => {
        document.querySelector(sectionParam === "preview" ? "#preview" : "#lenses").scrollIntoView({ behavior: "auto", block: "start" });
      }, 60);
    }
  }

  async function init() {
    await loadCueSpecs();
    applyStaticI18n();
    bindEvents();
    applyQueryParams();
  }

  init().catch((error) => {
    document.body.dataset.cueSpecLoadError = "true";
    console.error(error);
  });
})();

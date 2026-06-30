(function () {
  const en = {
    nav: {
      difference: "What changes",
      lenses: "Ways to look",
      aura: "XR test",
      plan: "Test plan",
      planPage: "Roadmap"
    },
    cueUi: {
      discoveryPoint: "Discovery point",
      auxiliaryLinePrefix: "Guide line:",
      vanishingPoint: "Vanishing point",
      sharedVanishingPoint: "painting + room vanishing point",
      matrixGuideLabels: {
        lastSupperArtist: "Lines show perspective converging on Christ",
        girlArtist: "Arrow shows the gaze and light path",
        arnolfiniArtist: "Lines show mirror, hand, and placement"
      },
      lineSources: {
        "table-edge": "table edge",
        "architectural-edge": "painted architecture",
        "coffered-ceiling-orthogonal": "coffered ceiling",
        "painted-wall-tapestry-orthogonal": "side-wall openings",
        "table-orthogonal": "table recession",
        "gesture-direction": "gesture",
        "figure-grouping": "figure grouping",
        "separation-between-groups": "group boundary",
        "gaze-direction": "gaze",
        "attention-path": "attention path",
        "face-light-boundary": "light boundary",
        "mouth-eye-highlight-boundary": "highlight boundary",
        "turban-contour": "turban contour",
        "face-turn": "face turn",
        "mirror-to-viewer-relation": "mirror sightline",
        "figure-placement": "figure placement",
        "raised-hand-direction": "raised hand",
        "central-vertical-relation-between-mirror-and-figures": "central axis",
        "textile-fold-direction": "textile folds",
        "painted-fabric-edge": "fabric edge",
        "fine-detail-region": "fine detail",
        "paired-tronie-comparison": "paired tronie comparison",
        "convex-mirror": "convex mirror",
        "painted-signature": "painted signature",
        "reflected-witnesses": "reflected witnesses",
        "mirror-relation": "mirror relation",
        "furniture-object-alignment": "object alignment"
      }
    },
    hero: {
      title:
        '<span class="hero-title-kicker">Before you know what to ask,</span><span class="hero-title-focus">an expert points once.</span>',
      subcopy:
        "A museum-first Android XR prototype that shows where to look on the real artwork — then disappears.",
      searchNote:
        "Search helps after the question exists. Look Again helps before that.",
      replay: "Replay the examples",
      explore: "View the Lens Matrix",
      principle: "The artwork does not change.<br>The question does.",
      examplesLabel: "Look Again examples",
      delta: {
        existingLabel: "Today’s ways",
        existingTitle: "More information, but still unsure where to look",
        existingBody: "No guide leaves you guessing. Audio gives context without pointing. Phone guides move attention to a screen.",
        lookAgainLabel: "Look Again",
        lookAgainTitle: "One brief pointer on the real artwork",
        lookAgainBody: "It shows one place to look, asks one question, and then gets out of the way."
      },
      audioTranscript: "Notice how light creates the illusion of the pearl.",
      whereExactly: "Where exactly should I look?",
      lookAgainQuestion: "How does the painting direct attention?",
      lookAgainCaption: "An expert points once. I know where to look.",
      lookAgainExamples: {
        artist: {
          label: "ARTIST",
          short: "Artist",
          sequenceShort: "Artist",
          caption: "The expert points to how attention is built.",
          question: "How does the painting direct the room’s attention?"
        },
        restorer: {
          label: "CONSERVATOR",
          short: "Conservator",
          sequenceShort: "Conservator",
          caption: "The conservator points to how the object was made and changed.",
          question: "How can a few marks become a pearl?"
        },
        social: {
          label: "SOCIAL",
          short: "Social context",
          sequenceShort: "Social",
          caption: "The expert points to witness and authorship.",
          question: "Who is made present in the room?"
        }
      },
      audioByArtwork: {
        lastSupper: {
          transcript: "The composition draws your attention toward the center of the room.",
          confusion: "Where exactly should I look?"
        },
        girl: {
          transcript: "Notice how light creates the illusion of the pearl.",
          confusion: "Where exactly should I look?"
        },
        arnolfini: {
          transcript: "The objects in the room reveal wealth and status.",
          confusion: "Where exactly should I look?"
        }
      },
      existingCaptions: {
        looking: "Looking, but not knowing where to begin.",
        audio: "The audio explains, but I still ask: where?",
        phone: "The phone has information, but now I am looking at a screen."
      },
      acts: {
        existing: {
          label: "Existing ways",
          caption: "No guide → Audio → Phone"
        },
        lookagain: {
          label: "Look Again",
          caption: "Artist → Conservator → Historian"
        }
      }
    },
    category: {
      title: "Not another guide screen.<br>A pointing moment on the real work.",
      body:
        "Audio gives context. Phones give information. Look Again gives one place to look before the visitor knows what to ask.",
      guide: {
        label: "Guide",
        body: "explains what you selected"
      },
      search: {
        label: "Search",
        body: "answers what you ask"
      },
      lookAgain: {
        label: "Look Again",
        body: "points before you know what to ask"
      }
    },
    states: {
      looking: {
        label: "NO GUIDE",
        short: "No guide",
        caption: "I can see the work, but I do not know where to begin."
      },
      audio: {
        label: "AUDIO GUIDE",
        short: "Audio",
        caption: "The audio explains, but I still ask: where?"
      },
      phone: {
        label: "PHONE GUIDE",
        short: "Phone",
        caption: "The phone has information, but now I am looking at a screen."
      },
      wearing: {
        label: "WEARING XR",
        short: "Wearing XR",
        caption: "“Look Again starts from the real work.”",
        hud: "WEARING XR"
      },
      artist: {
        label: "ARTIST LENS",
        short: "Artist",
        caption: "The artwork shows where attention is being led.",
        title: "Artist lens",
        body:
          "How the artist directs attention through composition, light, color, gaze, gesture, and pictorial staging.",
        diagram: {
          lastSupper: "Perspective, table lines, gestures, and figures pull attention toward the center.",
          girl: "Light, color contrast, and gaze pull attention back to the face.",
          arnolfini: "Mirror, sightlines, and figure placement decide who is looking."
        }
      },
      restorer: {
        label: "CONSERVATOR LENS",
        short: "Conservator",
        caption: "A few marks of paint become something you can see.",
        title: "Conservator lens",
        body:
          "How a conservator reads the work as a physical object: surface, damage, repair, technique, support, pigment, and what time has changed.",
        visible: "Visible crop",
        technical: "Concept technical crop"
      },
      social: {
        label: "HISTORIAN / SOCIAL CONTEXT LENS",
        short: "Historian",
        caption: "A mirror and signature become social evidence.",
        title: "Historian / Social Context lens",
        body:
          "How people, objects, institutions, status, belief, trade, power, and display shape what the work meant and why it mattered.",
        witness: "Witness evidence",
      },
      museum: {
        label: "MUSEUM HISTORY LENS",
        short: "History",
        caption: "“Why is this work here?”",
        title: "Why is this work here?",
        body: "The history lives outside the painting, where it can be read without covering the work.",
        timeline: [
          { year: "1434", text: "Painted in Bruges." },
          { year: "16c", text: "In Habsburg collections." },
          { year: "1842", text: "Acquired by the National Gallery." }
        ]
      },
      quiet: {
        label: "QUIET VIEW",
        short: "Quiet",
        caption: "The artwork does not change. What you notice does.",
        message: "The artwork does not change.<br>What you notice does."
      }
    },
    art: {
      girl: "Girl with a Pearl Earring",
      arnolfini: "The Arnolfini Portrait",
      lastSupper: "The Last Supper",
      girlAlt: "Girl with a Pearl Earring artwork source image",
      arnolfiniAlt: "The Arnolfini Portrait artwork source image",
      lastSupperAlt: "The Last Supper artwork source image",
      pearlCropAlt: "Detail crop of the pearl highlight",
      technicalCropAlt: "Simulated technical crop of the pearl highlight",
      arnolfiniMirrorCropAlt: "Detail crop of the mirror and painted signature in The Arnolfini Portrait"
    },
    artDisplay: {
      lastSupper: "Mural / refectory wall",
      girl: "Small framed painting",
      arnolfini: "Framed panel painting"
    },
    phoneGuide: {
      girl: {
        app: "Gallery Guide",
        kicker: "Gallery stop 670",
        title: "Girl with a Pearl Earring",
        meta: "Johannes Vermeer · oil painting",
        chips: ["Overview", "Light", "Materials"],
        body:
          "A small portrait-like work known for gaze, light, and the illusion of the pearl.",
        facts: [
          "The pearl is created through a few carefully placed highlights.",
          "The dark ground pushes the lit face toward the viewer.",
          "The sitter is not securely identified."
        ]
      },
      arnolfini: {
        app: "Gallery Guide",
        kicker: "Object notes",
        title: "The Arnolfini Portrait",
        meta: "Jan van Eyck · oil on panel",
        chips: ["Overview", "Objects", "Context"],
        body:
          "A highly detailed interior filled with objects associated with wealth, status, and social display.",
        facts: [
          "Notice the mirror, painted signature, reflected figures, and gestures.",
          "Oil glazes support the sharp detail and luminous surface.",
          "Objects in the room invite social and material readings."
        ]
      },
      lastSupper: {
        app: "Gallery Guide",
        kicker: "Refectory wall / Context",
        title: "The Last Supper",
        meta: "Leonardo da Vinci · mural · refectory wall",
        chips: ["Overview", "Composition", "Restoration"],
        body:
          "A monumental wall painting known for its dramatic composition and central perspective.",
        facts: [
          "Look for the arrangement of figures, table lines, and gestures.",
          "The central perspective converges near Christ's head.",
          "Today the visible image is inseparable from conservation history."
        ]
      }
    },
    difference: {
      title: "Why it is different from today’s guides",
      subtitle:
        "Museum guidance is the first comparison case — not the whole category.",
      existingLabel: "Today’s ways",
      existingMicrocopy:
        "They give context or information, but you still have to decide where to look.",
      lookAgainLabel: "Look Again",
      lookAgainMicrocopy:
        "It briefly points to one place on the real artwork, before you know what to ask.",
      audioTranscript: "Light creates the illusion of the pearl.",
      audioBubble: "But where should I look?",
      noGuide: {
        title: "No guide",
        body: "Where do I start?"
      },
      audio: {
        title: "Audio",
        body: "Still searching."
      },
      phone: {
        title: "Looking at pixels",
        body: ""
      },
      phoneUi: {
        app: "Gallery Guide",
        kicker: "Gallery stop 670",
        title: "Girl with a Pearl Earring",
        meta: "Johannes Vermeer · oil painting",
        chip1: "Overview",
        chip2: "Light",
        chip3: "Materials",
        body: "A small portrait-like work known for gaze, light, and the illusion of the pearl.",
        fact1: "The pearl is created through a few carefully placed highlights.",
        fact2: "The dark ground pushes the lit face toward the viewer."
      },
      xr: {
        title: "Look Again",
        body: "A quiet cue on the real work.",
        kicker: "WEARING XR",
        target: "Gaze and light",
        question: "Look at this highlight first.",
        explanation:
          "The cue connects the real painting to a floating close-up.",
        detailLabel: "Magnified paint detail",
        modelLabel: "Paint illusion model"
      },
      rows: {
        existingHead: "Today’s ways",
        lookAgainHead: "Look Again",
        contextExisting: "More explanation",
        contextLookAgain: "One clear place to look",
        infoExisting: "Attention can drift",
        infoLookAgain: "Attention returns to the artwork",
        attentionExisting: "Often another screen",
        attentionLookAgain: "On the real artwork"
      }
    },
    lenses: {
      title: "Three ways to look",
      body:
        "Three representative expert viewpoints for looking at paintings. The same artwork points to a different first detail depending on whose eye is looking.",
      explanation:
        "Choose a card to preview how a short pointer appears on the artwork.",
      footerLine:
        "The goal is not to add more facts. The goal is to make the first place to look clear.",
      previewCta: "Open full preview",
      names: {
        artist: "Artist",
        restorer: "Conservator",
        social: "Historian"
      },
      columnSubheads: {
        artist: "composition, light, gaze",
        restorer: "surface, repair, technique",
        social: "objects, status, display"
      },
      targetLabel: "Target:",
      questionLabel: "Explanation:",
      explanationLabel: "Explanation:",
      matrix: {
        lastSupper: {
          artist: {
            target: "Vanishing point and table lines",
            question: "The painted room is built from lines converging near Christ's head.",
            body: "Coffered ceiling, side-wall openings and bands, and table recession converge near Christ's head."
          },
          restorer: {
            target: "Wall surface and losses",
            question: "The wall surface records loss, repainting, and repair.",
            body: "A wall painting carries time on its surface: loss, repainting, and repair become part of what is visible."
          },
          social: {
            target: "Table, food, and seating order",
            question: "The table arrangement makes social and narrative separation visible.",
            body: "The shared table is not neutral; placement, gesture, and separation shape the scene’s order."
          }
        },
        girl: {
          artist: {
            target: "Gaze and light",
            question: "The gaze, light edge, and color contrast pull the viewer into the figure.",
            body: "The gaze, soft light edge, and color contrast make a small image feel immediate."
          },
          restorer: {
            target: "Pearl highlight",
            question: "A few bright marks and surrounding darkness make paint read as pearl.",
            body: "The pearl is produced by a few bright marks and surrounding darkness."
          },
          social: {
            target: "Tronie pair: Pearl Girl and Young Woman",
            question: "The paired Vermeer study turns the famous image into a tronie type.",
            body: "A same-period Vermeer head study reveals a repeated type: gaze, costume, dark ground, and viewer address."
          }
        },
        arnolfini: {
          artist: {
            target: "Mirror and composition",
            question: "The mirror and figure placement make looking part of the composition.",
            body: "The mirror, sightlines, and figure placement turn looking into the subject."
          },
          restorer: {
            target: "Textiles and surface detail",
            question: "Oil, panel, textile detail, and small touches make value material.",
            body: "Oil on panel, fine textile detail, and small touches make wealth visible as material precision."
          },
          social: {
            target: "Convex mirror and painted signature",
            question: "The mirror and signature make witness and authorship visible.",
            body: "The room is not only owned; it is seen, recorded, and staged."
          }
        }
      }
    },
    preview: {
      title: "Try one pointing moment",
      body:
        "Choose an artwork and viewpoint to see how the XR cue appears on the work.",
      controls: {
        viewpoint: "Viewpoint",
        artwork: "Artwork"
      },
      mechanics: {
        kicker: "DISPLAY LOGIC",
        title: "What appears in the XR view",
        body: "",
        items: {
          target: {
            label: "Target",
            body: "The marker locks to: {target}"
          },
          anchor: {
            label: "Anchor",
            body: "The connector starts at the real detail."
          },
          panel: {
            label: "Edge panel",
            body: "A short expert cue appears at the edge of view, then gets out of the way."
          },
          evidence: {
            label: "Evidence",
            body: "Adds supporting visual material when needed: {evidence}."
          },
          timing: {
            label: "Timing",
            body: "Appears briefly at the start of looking."
          },
          source: {
            label: "Footnote",
            body: "The cue carries source footnote {number}; full links are at the bottom of the page."
          }
        }
      }
    },
    sourceFootnotes: {
      kicker: "Source footnotes",
      title: "Sources used for cue grounding",
      body: "Reference links for the visible cue examples.",
      itemPrefix: "Used by"
    },
    sourceLabels: {
      "cenacolovinciano.org": "Cenacolo Vinciano",
      "www.cenacolovinciano.org": "Cenacolo Vinciano",
      "cenacolovinciano.vivaticket.it": "Cenacolo Vinciano",
      "www.nga.gov": "National Gallery of Art",
      "www.mauritshuis.nl": "Mauritshuis",
      "www.metmuseum.org": "The Met",
      "www.nationalgallery.org.uk": "The National Gallery"
    },
    sourceTitles: {
      "https://www.cenacolovinciano.org/en/museum/the-last-supper/": "The Last Supper",
      "https://cenacolovinciano.org/en/museum/the-works/the-last-supper-leonardo-da-vinci-1452-1519/": "The Last Supper",
      "https://cenacolovinciano.org/en/story/a-powerful-theatrical-machine/": "A powerful theatrical machine",
      "https://cenacolovinciano.org/en/museum/backstage/": "Cenacolo backstage",
      "https://cenacolovinciano.vivaticket.it/index.php?nvpg[festivalDetail]&id=2384&lang=en": "Cenacolo Vinciano visitor information",
      "https://www.nga.gov/collection/art-object-page.46590.html": "The Last Supper study",
      "https://www.mauritshuis.nl/en/our-collection/artworks/670-girl-with-a-pearl-earring/": "Girl with a Pearl Earring",
      "https://www.mauritshuis.nl/en/explore/the-collection/artworks/girl-with-a-pearl-earring-670/": "Girl with a Pearl Earring",
      "https://www.metmuseum.org/art/collection/search/437880": "Study of a Young Woman",
      "https://www.metmuseum.org/art/collection/search/437879": "Study of a Young Woman",
      "https://www.nationalgallery.org.uk/technical-bulletin/billinge_campbell1995": "Technical Bulletin on The Arnolfini Portrait",
      "https://www.nationalgallery.org.uk/paintings/jan-van-eyck-the-arnolfini-portrait": "The Arnolfini Portrait"
    },
    xrOnly: {
      title: "Why this needs XR",
      intro:
        "Help appears on the real thing at the moment before the visitor knows what to ask.",
      items: {
        pointing: {
          title: "A brief pointer",
          body: "A small pointer appears on one real detail, then disappears."
        },
        spatial: {
          title: "Fixed to the real artwork",
          body: "The pointer anchors to a visible detail."
        },
        connector: {
          title: "One line from place to explanation",
          body: "The marked detail connects to a short explanation at the edge of view."
        },
        body: {
          title: "Move only when it matters",
          body: "Side viewing is used only for material or surface questions."
        },
        disappear: {
          title: "It gets out of the way",
          body: "The pointer gives one concise explanation, then returns attention to the artwork."
        }
      }
    },
    whyMuseums: {
      title: "Why start with museums?",
      body:
        "Because the problem is easy to see there. You can stand in front of the real thing and still not know where to begin. Artworks also make a strict test: if XR makes the work harder to see, darker, or more distracting, the phone is better.",
      closing:
        "Museums are where the problem is easiest to see, not where the product must end. The broader category is pointing before search in real places."
    },
    aura: {
      title: "Can XR help without getting in the way?",
      body:
        "Look Again has to work while the visitor keeps seeing the real artwork. That makes Project Aura useful for testing: low light, color, comfort, anchoring, and distraction all matter.",
      statement:
        "If the glasses make the artwork harder to see, the phone is the better interface.",
      validationIntro: "What to test",
      points: {
        lowLight: "visibility in low light",
        color: "whether colors still feel right",
        distraction: "whether the overlay distracts",
        anchoring: "whether the pointer stays in the right place",
        comfort: "comfort during looking",
        remove: "whether people keep the glasses on"
      }
    },
    plan: {
      title: "6-month closed test",
      body:
        "A focused Android XR test. The question is simple: can a short pointer help people know where to look better than audio or phone guidance?",
      items: {
        artworks: "Start with 3–5 public-domain artworks.",
        native: "Build a native Android XR prototype.",
        selection: "Use artwork numbers or QR codes to choose the work.",
        scope:
          "Keep the MVP narrow: no museum-wide navigation, no heavy 3D reconstruction, no museum partnership claim.",
        validation: "Compare against audio and phone guidance before calling XR better."
      }
    },
    metrics: {
      title: "What success means",
      body:
        "Look Again only works if it helps people see the real work more clearly without pulling them into another screen.",
      items: {
        discovery: "noticing details people missed before",
        question: "asking better questions after looking",
        remove: "keeping the glasses on",
        time: "time spent looking at the real artwork",
        helpfulness: "helpfulness without distraction",
        intent: "wanting to look again",
        comparison: "comparison with audio and phone guidance"
      }
    },
    futureContexts: {
      title: "Where this could go next",
      intro:
        "Museums are the first test because the problem is easy to see there. The same pattern could later apply anywhere people look before they know what to ask.",
      cards: {
        architecture: {
          title: "Architecture",
          body: "Notice structure, material, and circulation in a real building.",
          panel: "Load path"
        },
        field: {
          title: "Field learning",
          body:
            "Point to one plant, rock, tool, or trace before a learner knows what to ask.",
          panel: "First clue"
        },
        repair: {
          title: "Repair / inspection",
          body: "Show the part that matters before the manual becomes useful.",
          panel: "Check first"
        },
        performance: {
          title: "Live performance",
          body:
            "Point attention to staging, gesture, or musical structure without pulling the viewer into a screen.",
          panel: "Gesture cue"
        },
        training: {
          title: "Training environments",
          body: "Guide attention to one critical detail, then disappear.",
          panel: "Critical step"
        }
      },
      note:
        "Future contexts are examples of the interaction pattern, not current product scope.",
      planCta: {
        kicker: "Next page",
        title: "See the execution plan and roadmap",
        body:
          "The next page explains how this becomes a 6-month Android XR prototype, what gets tested, and what stays out of scope.",
        link: "Open builder readiness and roadmap →"
      }
    },
    footer: {
      exampleNote:
        "The artworks are examples for the prototype. Future use would require rights review for each artwork and display context.",
      disclaimer:
        "Concept visualization. Native Android XR implementation is not yet complete. No museum partnership is claimed. Museum scenes are approximate visualizations, not exact reconstructions.",
      contactHtml:
        "Builder: Kenichiro Eda<br>Contact: ciaoken16@icloud.com<br>Handle: @ciaoken16",
      planLink: "Read builder readiness and roadmap →"
    },
    planPage: {
      home: "Home",
      title: "Builder readiness & roadmap",
      kicker: "Compact execution page",
      intro:
        "Look Again is designed as a focused Android XR prototype, not a broad museum-platform launch. The goal is to test whether short, source-grounded pointing cues can help people know where to look before they know what to ask.",
      readinessTitle: "Why this can be built",
      readiness: {
        rapid: {
          title: "Rapid prototype",
          body: "Browser prototype now, native Android XR prototype next."
        },
        measurable: {
          title: "Measurable interaction",
          body: "Test where-to-look clarity, phone comparison, and do-not-remove-glasses rate."
        },
        source: {
          title: "Source-grounded content",
          body: "Use public-domain artworks and vetted source notes; AI routes cues, not invented interpretations."
        },
        small: {
          title: "Small enough to ship",
          body: "The MVP avoids museum-wide navigation, heavy 3D reconstruction, and partnership dependency."
        }
      },
      roadmapTitle: "6-month roadmap",
      roadmap: {
        month1: {
          label: "Month 1",
          title: "Native Android XR project setup.",
          body: "Port browser cue model into Android / Jetpack XR prototype."
        },
        month2: {
          label: "Month 2",
          title: "Artwork recognition / selection flow.",
          body: "Implement 3 public-domain artwork packs."
        },
        month3: {
          label: "Month 3",
          title: "Spatial cue rendering.",
          body: "Pointer, pulse, connector, peripheral panel, disappear-by-default behavior."
        },
        month4: {
          label: "Month 4",
          title: "Project Aura validation.",
          body: "Low-light visibility, color fidelity, comfort, distraction, anchoring."
        },
        month5: {
          label: "Month 5",
          title: "User study.",
          body: "Compare no guide / audio-like context / phone guide / Look Again cue."
        },
        month6: {
          label: "Month 6",
          title: "Closed test package.",
          body: "Demo video, Google Play closed testing readiness, public documentation."
        }
      },
      grantTitle: "Grant use summary",
      grantIntro: "If funding is awarded, it would support focused prototype validation.",
      grant: {
        native: "Native Android XR prototype",
        aura: "Project Aura validation",
        content: "Public-domain content and source audit",
        testing: "User testing",
        assets: "Demo video and submission assets"
      },
      beyondTitle: "Beyond museums",
      beyondBody1:
        "Museums are the first proof environment because the problem is visible there: people can be looking at the real thing and still not know where to look.",
      beyondBody2:
        "The larger vision is a pre-search pointing layer for the physical world. Before a person knows what to ask, Android XR can point to one meaningful detail, ask one grounded question, and disappear.",
      futureTitle: "Future contexts",
      future: {
        cultural: "cultural sites",
        architecture: "architecture",
        field: "field learning",
        repair: "repair / inspection",
        training: "training environments"
      },
      builderTitle: "Team",
      builderMemberKenichiro: "Kenichiro Eda — Product / prototype",
      builderMemberYuka: "Yuka Nabeshima — Research / language",
      contactTitle: "Contact",
      contactName: "Kenichiro Eda",
      contactEmail: "ciaoken16@icloud.com",
      contactHandle: "@ciaoken16",
      statusTitle: "Current status / disclaimers",
      status: {
        concept: "Concept visualization.",
        browser: "Browser prototype / concept visualization exists.",
        native: "Native Android XR implementation is not yet complete.",
        partnership: "No museum partnership is claimed.",
        scenes: "Display scenes are display-informed approximations, not exact museum reconstructions."
      }
    }
  };

  const ja = {
    nav: {
      difference: "何が変わるか",
      lenses: "三つの見方",
      aura: "XR検証",
      plan: "検証計画",
      planPage: "実行計画"
    },
    cueUi: {
      discoveryPoint: "発見ポイント",
      auxiliaryLinePrefix: "補助線:",
      vanishingPoint: "消失点",
      sharedVanishingPoint: "絵と部屋の消失点",
      matrixGuideLabels: {
        lastSupperArtist: "線はキリストへ収束する遠近法",
        girlArtist: "矢印は視線と光の流れ",
        arnolfiniArtist: "線は鏡・手・人物配置"
      },
      lineSources: {
        "table-edge": "食卓の線",
        "architectural-edge": "描かれた建築の線",
        "coffered-ceiling-orthogonal": "格天井",
        "painted-wall-tapestry-orthogonal": "側壁の開口",
        "table-orthogonal": "食卓の奥行き",
        "gesture-direction": "身振り",
        "figure-grouping": "人物のまとまり",
        "separation-between-groups": "集団の境界",
        "gaze-direction": "視線",
        "attention-path": "注意の流れ",
        "face-light-boundary": "光の境界",
        "mouth-eye-highlight-boundary": "ハイライトの境界",
        "turban-contour": "ターバンの輪郭",
        "face-turn": "顔の向き",
        "mirror-to-viewer-relation": "鏡の視線",
        "figure-placement": "人物配置",
        "raised-hand-direction": "上げた手",
        "central-vertical-relation-between-mirror-and-figures": "中央軸",
        "textile-fold-direction": "布のひだ",
        "painted-fabric-edge": "布地の端",
        "fine-detail-region": "細部",
        "paired-tronie-comparison": "二つのトローニー比較",
        "convex-mirror": "凸面鏡",
        "painted-signature": "壁の署名",
        "reflected-witnesses": "映り込む証人",
        "mirror-relation": "鏡との関係",
        "furniture-object-alignment": "家具と小物の並び"
      }
    },
    hero: {
      title:
        '<span class="hero-title-kicker">何を問えばいいか分かる前に、</span><span class="hero-title-focus">専門家が一度だけ指差す。</span>',
      subcopy:
        "実物作品のどこを見るかを示し、すぐ消える。美術館から始めるAndroid XRプロトタイプ。",
      searchNote:
        "検索は、問いができてから役に立つ。Look Againは、その前を助ける。",
      replay: "例をもう一度見る",
      explore: "視点マトリクスを見る",
      principle: "作品は変わらない。<br>問いが変わる。",
      examplesLabel: "Look Againの例",
      delta: {
        existingLabel: "従来のガイド",
        existingTitle: "情報は増える。でも、どこを見るかはまだ迷う",
        existingBody: "何もなければ手がかりがない。音声は文脈をくれるが、場所は示さない。スマホは注意を画面へ移す。",
        lookAgainLabel: "Look Again",
        lookAgainTitle: "実物作品の上に、一度だけ指差しが出る",
        lookAgainBody: "見る場所を一つ示し、問いを一つだけ出して、すぐ消える。"
      },
      audioTranscript: "光が真珠のような効果を生み出しています。",
      whereExactly: "どこ？",
      lookAgainQuestion: "この絵は注意をどう導くのか？",
      lookAgainCaption: "専門家が一度だけ指差す。どこを見ればいいか分かる。",
      lookAgainExamples: {
        artist: {
          label: "ARTIST",
          short: "画家の視点",
          sequenceShort: "画家",
          caption: "専門家が、注意の作られ方を指差す。",
          question: "この絵は、部屋全体の注意をどう導いているのか？"
        },
        restorer: {
          label: "CONSERVATOR",
          short: "保存修復家の視点",
          sequenceShort: "保存修復家",
          caption: "保存修復家が、作品の作られ方と変化を指差す。",
          question: "わずかな絵具の跡は、どう真珠に見えるのか？"
        },
        social: {
          label: "SOCIAL",
          short: "社会文脈の視点",
          sequenceShort: "社会文脈",
          caption: "専門家が、証人と作者の存在を指差す。",
          question: "この部屋には誰の存在が残されているのか？"
        }
      },
      audioByArtwork: {
        lastSupper: {
          transcript: "構図は視線を部屋の中心へ導きます。",
          confusion: "どこを見ればいい？"
        },
        girl: {
          transcript: "光が真珠のような効果を生み出しています。",
          confusion: "どこを見ればいい？"
        },
        arnolfini: {
          transcript: "部屋の小物が富と地位を示しています。",
          confusion: "どこを見ればいい？"
        }
      },
      existingCaptions: {
        looking: "見ている。でも、どこから見ればいいか分からない。",
        audio: "音声は説明してくれる。でも、どこを見ればいい？",
        phone: "スマホには情報がある。でも今見ているのは画面だ。"
      },
      acts: {
        existing: {
          label: "従来の見方",
          caption: "ガイドなし → 音声 → スマホ"
        },
        lookagain: {
          label: "Look Again",
          caption: "画家の視点 → 保存修復家の視点 → 歴史家の視点"
        }
      }
    },
    category: {
      title: "もう一つのガイド画面ではない。<br>実物作品の上に現れる、一瞬の指差し。",
      body:
        "音声は文脈をくれる。スマホは情報をくれる。Look Againは、来館者が何を問えばいいか分かる前に、まず見るべき一点を示す。",
      guide: {
        label: "ガイド",
        body: "選んだものを説明する"
      },
      search: {
        label: "検索",
        body: "投げた問いに答える"
      },
      lookAgain: {
        label: "Look Again",
        body: "何を問えばいいか分かる前に指差す"
      }
    },
    states: {
      looking: {
        label: "NO GUIDE",
        short: "ガイドなし",
        caption: "作品は見えている。でも、どこから見ればいいか分からない。"
      },
      audio: {
        label: "AUDIO GUIDE",
        short: "音声",
        caption: "音声は説明してくれる。でも、どこを見ればいい？"
      },
      phone: {
        label: "PHONE GUIDE",
        short: "スマホ",
        caption: "スマホには情報がある。でも今見ているのは画面だ。"
      },
      wearing: {
        label: "WEARING XR",
        short: "XR装着",
        caption: "「Look Againは、実物作品から始まる。」",
        hud: "WEARING XR"
      },
      artist: {
        label: "ARTIST LENS",
        short: "画家",
        caption: "作品の中で、視線がどこへ導かれているかが見える。",
        title: "画家の視点",
        body:
          "構図・光・色・視線・身振り・画面設計によって、画家が注意をどう導いているかを見る。",
        diagram: {
          lastSupper: "遠近法、食卓の線、身振り、人物配置が注意を中心へ集める。",
          girl: "光、色の対比、視線が顔へ注意を戻す。",
          arnolfini: "鏡、視線、人物配置が「見る/見られる」を作る。"
        }
      },
      restorer: {
        label: "CONSERVATOR LENS",
        short: "保存修復家",
        caption: "わずかな絵具の跡が、見えるものに変わる。",
        title: "保存修復家の視点",
        body:
          "保存修復家のように、作品を物として読む。表面、損傷、修復、技法、支持体、顔料、時間による変化に注目する。",
        visible: "可視画像",
        technical: "技術画像コンセプト"
      },
      social: {
        label: "HISTORIAN / SOCIAL CONTEXT LENS",
        short: "歴史・社会",
        caption: "鏡と署名が、社会的な証拠になる。",
        title: "歴史家 / 社会文脈の視点",
        body:
          "人物、小物、制度、地位、信仰、交易、権力、展示が、作品の意味と重要性をどう形づくるかを見る。",
        witness: "証人の証拠",
      },
      museum: {
        label: "MUSEUM HISTORY LENS",
        short: "来歴",
        caption: "「なぜこの作品はここにあるのか？」",
        title: "なぜこの作品はここにあるのか？",
        body: "来歴は作品の外側に置き、作品を覆わずに読めるようにする。",
        timeline: [
          { year: "1434", text: "ブルージュで制作。" },
          { year: "16世紀", text: "ハプスブルク家のコレクションへ。" },
          { year: "1842", text: "ナショナル・ギャラリーが取得。" }
        ]
      },
      quiet: {
        label: "QUIET VIEW",
        short: "静かな視界",
        caption: "作品は変わらない。気づく場所が変わる。",
        message: "作品は変わらない。<br>気づく場所が変わる。"
      }
    },
    art: {
      girl: "真珠の耳飾りの少女",
      arnolfini: "アルノルフィーニ夫妻像",
      lastSupper: "最後の晩餐",
      girlAlt: "真珠の耳飾りの少女の作品画像",
      arnolfiniAlt: "アルノルフィーニ夫妻像の作品画像",
      lastSupperAlt: "最後の晩餐の作品画像",
      pearlCropAlt: "真珠のハイライト部分の詳細画像",
      technicalCropAlt: "真珠のハイライト部分の技術画像コンセプト",
      arnolfiniMirrorCropAlt: "アルノルフィーニ夫妻像の凸面鏡と壁の署名の詳細画像"
    },
    artDisplay: {
      lastSupper: "壁画 / 食堂壁面",
      girl: "小さな額装作品",
      arnolfini: "額装された板絵"
    },
    phoneGuide: {
      girl: {
        app: "Gallery Guide",
        kicker: "展示ストップ 670",
        title: "真珠の耳飾りの少女",
        meta: "ヨハネス・フェルメール · 油彩",
        chips: ["概要", "光", "素材"],
        body:
          "視線、光、真珠の錯覚で知られる小さな肖像的作品。",
        facts: [
          "真珠は、わずかなハイライトによって生まれている。",
          "暗い背景が、光を受けた顔を前に押し出す。",
          "モデルが誰かは確定していない。"
        ]
      },
      arnolfini: {
        app: "Gallery Guide",
        kicker: "作品メモ",
        title: "アルノルフィーニ夫妻像",
        meta: "ヤン・ファン・エイク · 板絵",
        chips: ["概要", "小物", "文脈"],
        body:
          "富、地位、社会的演出を示す小物が細かく描かれた室内像。",
        facts: [
          "鏡、壁の署名、映り込む人物、身振りに注目できる。",
          "油彩の層が、細部と光沢を支えている。",
          "室内の物は、社会的・物質的な読みを誘う。"
        ]
      },
      lastSupper: {
        app: "Gallery Guide",
        kicker: "食堂壁面 / 文脈",
        title: "最後の晩餐",
        meta: "レオナルド・ダ・ヴィンチ · 壁画 · 食堂壁面",
        chips: ["概要", "構図", "修復"],
        body:
          "劇的な構図と中央遠近法で知られる大型壁画。",
        facts: [
          "人物配置、食卓の線、身振りに注目できる。",
          "部屋の線はキリスト付近へ収束する。",
          "現在見える像は、保存修復の歴史と切り離せない。"
        ]
      }
    },
    difference: {
      title: "今のガイドと何が違うのか",
      subtitle:
        "美術館ガイドは最初の比較対象であり、カテゴリ全体ではありません。",
      existingLabel: "従来のガイド",
      existingMicrocopy:
        "文脈や情報は届く。でも、どこを見るかは自分で探さなければならない。",
      lookAgainLabel: "Look Again",
      lookAgainMicrocopy:
        "何を問えばいいか分かる前に、実物作品の一点を短く指差す。",
      audioTranscript: "光が、真珠のような効果を作っています。",
      audioBubble: "でも、どこを見ればいい？",
      noGuide: {
        title: "ガイドなし",
        body: "どこから見る？"
      },
      audio: {
        title: "音声",
        body: "どこを見る？"
      },
      phone: {
        title: "ピクセルを見ている",
        body: ""
      },
      phoneUi: {
        app: "Gallery Guide",
        kicker: "展示ストップ 670",
        title: "真珠の耳飾りの少女",
        meta: "ヨハネス・フェルメール · 油彩",
        chip1: "概要",
        chip2: "光",
        chip3: "素材",
        body: "視線、光、真珠の錯覚で知られる小さな肖像的作品。",
        fact1: "真珠は、わずかなハイライトによって生まれている。",
        fact2: "暗い背景が、光を受けた顔を前に押し出す。"
      },
      xr: {
        title: "Look Again",
        body: "実物の上に、静かに出る。",
        kicker: "XR装着中",
        target: "視線と光",
        question: "まずこの光を見る。",
        explanation:
          "実物作品の一点と、浮かぶ拡大表示をつなぐ。",
        detailLabel: "絵具の細部を拡大",
        modelLabel: "絵具の錯覚モデル"
      },
      rows: {
        existingHead: "従来のガイド",
        lookAgainHead: "Look Again",
        contextExisting: "説明が増える",
        contextLookAgain: "見る場所が一つ示される",
        infoExisting: "注意が流れる",
        infoLookAgain: "注意が作品へ戻る",
        attentionExisting: "別の画面を見がち",
        attentionLookAgain: "実物作品の上に出る"
      }
    },
    lenses: {
      title: "三つの見方",
      body:
        "絵画を見る代表的な三つの視点を並べる。同じ作品でも、誰の目で見るかによって最初に指差す場所が変わる。",
      explanation:
        "カードを選ぶと、作品の上に短い指差しが出る様子を確認できる。",
      footerLine:
        "目的は情報を増やすことではない。最初に見る場所を分かるようにすること。",
      previewCta: "下で詳しく見る",
      names: {
        artist: "画家",
        restorer: "保存修復家",
        social: "歴史家"
      },
      columnSubheads: {
        artist: "構図・光・視線",
        restorer: "表面・修復・技法",
        social: "小物・地位・見せ方"
      },
      targetLabel: "見る場所:",
      questionLabel: "解説:",
      explanationLabel: "解説:",
      matrix: {
        lastSupper: {
          artist: {
            target: "消失点と食卓の線",
            question: "描かれた室内は、キリストの頭部付近へ収束する線で組まれている。",
            body: "格天井、側壁の開口と帯、食卓の奥行きがキリストの頭部付近へ収束する。"
          },
          restorer: {
            target: "壁面と損失部分",
            question: "壁面には、損失・補彩・修復の履歴がそのまま見えている。",
            body: "壁画の表面には、損失・補彩・修復の時間が残っている。"
          },
          social: {
            target: "食卓・食物・座る位置",
            question: "食卓の配置が、物語上のまとまりと分離を見える形にしている。",
            body: "共有された食卓は中立ではない。配置、身振り、分離が場の秩序を作っている。"
          }
        },
        girl: {
          artist: {
            target: "視線と光",
            question: "視線、光の境界、色の対比が、人物へ注意を引き寄せる。",
            body: "視線、柔らかな光の境界、色の対比が、小さな像を強く引き寄せる。"
          },
          restorer: {
            target: "真珠のハイライト",
            question: "少数の明るい絵具と周囲の暗さが、真珠という錯覚を作っている。",
            body: "真珠は、少数の明るい跡と周囲の暗さで生まれている。"
          },
          social: {
            target: "二つのトローニー：真珠の少女と若い女性",
            question: "同時期の習作と並べると、トローニーという型として読める。",
            body: "同時期のフェルメールの頭部習作を横に出すと、視線・衣装・暗い背景・見る者への向きという型が見えてくる。"
          }
        },
        arnolfini: {
          artist: {
            target: "鏡と構図",
            question: "鏡と人物配置が、見ること自体を構図の主題にしている。",
            body: "鏡、視線の方向、人物配置が「見る/見られる」を絵の主題にしている。"
          },
          restorer: {
            target: "布地と表面の細部",
            question: "油彩、板、布地の細部、小さな筆触が価値を物質として見せている。",
            body: "板に描かれた油彩、細密な布地、小さな筆触が、富を素材の精度として見せている。"
          },
          social: {
            target: "凸面鏡と壁の署名",
            question: "鏡と署名が、証人と作者の存在を見えるようにしている。",
            body: "この部屋は所有されているだけでなく、見られ、記録され、演出されている。"
          }
        }
      }
    },
    preview: {
      title: "キューのプレビュー",
      body:
        "作品と視点を選ぶと、XRキューが作品上にどう現れるかを確認できる。",
      controls: {
        viewpoint: "視点",
        artwork: "作品"
      },
      mechanics: {
        kicker: "表示の仕組み",
        title: "XR画面に何が出るのか",
        body: "",
        items: {
          target: {
            label: "見る場所",
            body: "マーカーは「{target}」に固定される。"
          },
          anchor: {
            label: "アンカー",
            body: "線は実物の細部から始まる。"
          },
          panel: {
            label: "端のパネル",
            body: "短い専門家キューが視界の端に出て、邪魔になる前に退く。"
          },
          evidence: {
            label: "証拠表示",
            body: "必要な場合に「{evidence}」を重ねる。"
          },
          timing: {
            label: "時間",
            body: "見始めの短い瞬間だけ表示する。"
          },
          source: {
            label: "脚注",
            body: "キューには脚注{number}を付け、出典リンクはページ最下部にまとめる。"
          }
        }
      }
    },
    sourceFootnotes: {
      kicker: "脚注",
      title: "キュー設計で参照した出典",
      body: "表示キュー例の参照リンク。",
      itemPrefix: "使用箇所"
    },
    sourceLabels: {
      "cenacolovinciano.org": "Cenacolo Vinciano",
      "www.cenacolovinciano.org": "Cenacolo Vinciano",
      "cenacolovinciano.vivaticket.it": "Cenacolo Vinciano",
      "www.nga.gov": "National Gallery of Art",
      "www.mauritshuis.nl": "Mauritshuis",
      "www.metmuseum.org": "The Met",
      "www.nationalgallery.org.uk": "The National Gallery"
    },
    sourceTitles: {
      "https://www.cenacolovinciano.org/en/museum/the-last-supper/": "《最後の晩餐》",
      "https://cenacolovinciano.org/en/museum/the-works/the-last-supper-leonardo-da-vinci-1452-1519/": "《最後の晩餐》",
      "https://cenacolovinciano.org/en/story/a-powerful-theatrical-machine/": "強い劇場的装置としての《最後の晩餐》",
      "https://cenacolovinciano.org/en/museum/backstage/": "Cenacolo 修復・舞台裏",
      "https://cenacolovinciano.vivaticket.it/index.php?nvpg[festivalDetail]&id=2384&lang=en": "Cenacolo Vinciano 来館情報",
      "https://www.nga.gov/collection/art-object-page.46590.html": "《最後の晩餐》習作",
      "https://www.mauritshuis.nl/en/our-collection/artworks/670-girl-with-a-pearl-earring/": "《真珠の耳飾りの少女》",
      "https://www.mauritshuis.nl/en/explore/the-collection/artworks/girl-with-a-pearl-earring-670/": "《真珠の耳飾りの少女》",
      "https://www.metmuseum.org/art/collection/search/437880": "《若い女性の習作》",
      "https://www.metmuseum.org/art/collection/search/437879": "《若い女性の習作》",
      "https://www.nationalgallery.org.uk/technical-bulletin/billinge_campbell1995": "《アルノルフィーニ夫妻像》技術研究",
      "https://www.nationalgallery.org.uk/paintings/jan-van-eyck-the-arnolfini-portrait": "《アルノルフィーニ夫妻像》"
    },
    xrOnly: {
      title: "なぜXRなのか",
      intro:
        "問いが生まれる前の瞬間に、実物の上へ助けを置く。",
      items: {
        pointing: {
          title: "短い指差し",
          body: "実物の細部に短い指差しが現れ、すぐ消える。"
        },
        spatial: {
          title: "実物作品に固定される",
          body: "指差しは、見えている細部に固定される。"
        },
        connector: {
          title: "場所と解説を一本の線で結ぶ",
          body: "示された細部が、視界の端にある短い解説へつながる。"
        },
        body: {
          title: "必要な時だけ、見る位置を変える",
          body: "斜めから見る表現は、素材や表面を見る時だけ使う。"
        },
        disappear: {
          title: "すぐ消えて、邪魔をしない",
          body: "指差しは短い解説を一つだけ出し、注意を作品へ戻す。"
        }
      }
    },
    whyMuseums: {
      title: "なぜ美術館から始めるのか？",
      body:
        "この問題が見えやすいからです。実物を目の前にしていても、どこから見ればいいか分からないことがある。美術作品は厳しい検証対象でもある。XRによって作品が見づらくなり、暗くなり、邪魔になるなら、スマホの方がよい。",
      closing:
        "美術館は問題が最も見えやすい場所であり、プロダクトがそこで終わるという意味ではありません。より大きなカテゴリは、検索前に現実の場所で指差す体験です。"
    },
    aura: {
      title: "XRは、邪魔をせずに助けられるのか？",
      body:
        "Look Againは、来館者が実物作品を見続けたまま成立しなければならない。そのため、Project Auraでの検証が重要になる。低照度、色の見え方、快適さ、空間上の固定、邪魔にならなさがすべて関わる。",
      statement:
        "グラスによって作品が見づらくなるなら、スマホの方がよいインターフェースである。",
      validationIntro: "検証すること",
      points: {
        lowLight: "暗い展示室での見やすさ",
        color: "色の見え方が保たれるか",
        distraction: "表示が邪魔にならないか",
        anchoring: "指差しが正しい場所に留まるか",
        comfort: "鑑賞中の快適さ",
        remove: "グラスを外したくならないか"
      }
    },
    plan: {
      title: "6か月のクローズドテスト",
      body:
        "焦点を絞ったAndroid XRの検証。問うのは一つだけ。短い指差しは、音声やスマホガイドよりも「どこを見るか」を助けられるのか。",
      items: {
        artworks: "3〜5点のパブリックドメイン作品から始める。",
        native: "ネイティブAndroid XRプロトタイプを作る。",
        selection: "作品番号またはQRコードで作品を選ぶ。",
        scope:
          "MVPは絞る。館内ナビ、重い3D再構成、美術館提携の主張は入れない。",
        validation: "XRの方が良いと言う前に、音声やスマホガイドと比較する。"
      }
    },
    metrics: {
      title: "成功の基準",
      body:
        "Look Againが成立するのは、別の画面に引き込まず、実物作品をより明確に見る助けになる場合だけである。",
      items: {
        discovery: "それまで見落としていた細部に気づく",
        question: "見た後に、よりよい問いが生まれる",
        remove: "グラスを外したくならない",
        time: "実物作品を見ている時間",
        helpfulness: "邪魔にならない助けになっているか",
        intent: "もう一度見たくなるか",
        comparison: "音声・スマホガイドとの比較"
      }
    },
    futureContexts: {
      title: "この先に広がる場所",
      intro:
        "美術館から始めるのは、問題が見えやすいからです。同じ型は、何を問えばいいか分かる前に人が現実を見ている場面へ広げられる可能性があります。",
      cards: {
        architecture: {
          title: "建築",
          body: "実際の建物の中で、構造・素材・動線に気づく。",
          panel: "荷重の流れ"
        },
        field: {
          title: "フィールド学習",
          body:
            "植物、岩、道具、痕跡など、問いが生まれる前の一点を指し示す。",
          panel: "最初の手がかり"
        },
        repair: {
          title: "修理 / 点検",
          body: "マニュアルを読む前に、まず見るべき部品を示す。",
          panel: "まず確認"
        },
        performance: {
          title: "ライブパフォーマンス",
          body:
            "画面に注意を移さず、演出・身振り・音楽構造への注意を促す。",
          panel: "身振りのキュー"
        },
        training: {
          title: "トレーニング環境",
          body: "重要な一点を示し、すぐ消える。",
          panel: "重要手順"
        }
      },
      note:
        "これらは将来の応用例であり、現在の開発範囲ではありません。",
      planCta: {
        kicker: "次のページ",
        title: "実行体制とロードマップを見る",
        body:
          "次のページでは、6か月のAndroid XRプロトタイプとして何を作り、何を検証し、何を範囲外にするかを示します。",
        link: "実行体制とロードマップを開く →"
      }
    },
    footer: {
      exampleNote:
        "ここで使う作品はプロトタイプ用の例です。今後の利用では、作品ごと・展示文脈ごとに権利確認が必要です。",
      disclaimer:
        "コンセプト可視化。ネイティブAndroid XR実装は未完了。美術館との提携は主張しない。展示シーンは近似的な可視化であり、正確な再現ではない。",
      contactHtml:
        "Builder: 江田健一郎<br>連絡先: ciaoken16@icloud.com<br>Handle: @ciaoken16",
      planLink: "実行体制とロードマップを見る →"
    },
    planPage: {
      home: "ホーム",
      title: "実行体制とロードマップ",
      kicker: "コンパクトな実行ページ",
      intro:
        "Look Againは、大規模な美術館プラットフォームではなく、焦点を絞ったAndroid XRプロトタイプとして設計する。目的は、出典に基づく短い指差しキューが、人が何を問えばいいか分かる前に「どこを見るか」を助けられるかを検証すること。",
      readinessTitle: "なぜ作れるのか",
      readiness: {
        rapid: {
          title: "高速プロトタイプ",
          body: "現在はブラウザプロトタイプ。次にネイティブAndroid XRプロトタイプへ進む。"
        },
        measurable: {
          title: "測定できる体験",
          body: "「どこを見るか」の明確さ、スマホ比較、グラスを外したくならない率を測る。"
        },
        source: {
          title: "出典に基づくコンテンツ",
          body: "パブリックドメイン作品と確認済み出典を使う。AIは解釈を作るのではなく、キューを選ぶ。"
        },
        small: {
          title: "出せる範囲に絞る",
          body: "MVPでは館内ナビ、重い3D再構成、美術館提携依存を避ける。"
        }
      },
      roadmapTitle: "6か月ロードマップ",
      roadmap: {
        month1: {
          label: "1か月目",
          title: "ネイティブAndroid XRプロジェクトを立ち上げる。",
          body: "ブラウザ版のキューモデルをAndroid / Jetpack XRプロトタイプへ移植する。"
        },
        month2: {
          label: "2か月目",
          title: "作品認識 / 選択フローを作る。",
          body: "3点のパブリックドメイン作品パックを実装する。"
        },
        month3: {
          label: "3か月目",
          title: "空間キュー表示を実装する。",
          body: "指差し、パルス、コネクタ、周辺パネル、初期状態では消える挙動を作る。"
        },
        month4: {
          label: "4か月目",
          title: "Project Auraで検証する。",
          body: "低照度での見やすさ、色の見え方、快適さ、邪魔にならなさ、空間上の固定を確認する。"
        },
        month5: {
          label: "5か月目",
          title: "ユーザースタディを行う。",
          body: "ガイドなし / 音声的文脈 / スマホガイド / Look Againの指差しを比較する。"
        },
        month6: {
          label: "6か月目",
          title: "クローズドテスト用パッケージにまとめる。",
          body: "デモ動画、Google Playクローズドテスト準備、公開ドキュメントを整える。"
        }
      },
      grantTitle: "助成金の使途概要",
      grantIntro: "採択された場合、助成金は焦点を絞ったプロトタイプ検証に使う。",
      grant: {
        native: "ネイティブAndroid XRプロトタイプ",
        aura: "Project Auraでの検証",
        content: "パブリックドメイン作品と出典監査",
        testing: "ユーザーテスト",
        assets: "デモ動画と提出用素材"
      },
      beyondTitle: "美術館の先へ",
      beyondBody1:
        "美術館は、この問題が見えやすい最初の検証環境である。人は実物を見ていても、どこを見ればいいか分からないことがある。",
      beyondBody2:
        "より大きな構想は、現実世界のための検索前の指差しレイヤーである。人が何を問えばいいか分かる前に、Android XRが意味のある一点を示し、出典に基づく問いを一つだけ出して、すぐ消える。",
      futureTitle: "今後の文脈",
      future: {
        cultural: "文化遺産・史跡",
        architecture: "建築",
        field: "フィールド学習",
        repair: "修理 / 点検",
        training: "トレーニング環境"
      },
      builderTitle: "Team",
      builderMemberKenichiro: "江田健一郎 — Product / prototype",
      builderMemberYuka: "鍋島優歌 — Research / language",
      contactTitle: "連絡先",
      contactName: "江田健一郎",
      contactEmail: "ciaoken16@icloud.com",
      contactHandle: "@ciaoken16",
      statusTitle: "現在の状態 / 注意書き",
      status: {
        concept: "コンセプト可視化。",
        browser: "ブラウザプロトタイプ / コンセプト可視化は存在する。",
        native: "ネイティブAndroid XR実装は未完了。",
        partnership: "美術館との提携は主張しない。",
        scenes: "展示シーンは実展示を参照した近似であり、正確な再現ではない。"
      }
    }
  };

  window.LookAgainI18n = { en, ja };
})();

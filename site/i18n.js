(function () {
  const en = {
    nav: {
      difference: "What changes",
      lenses: "Perspective Matrix",
      aura: "Why XR",
      plan: "Implementation",
      planPage: "Plan"
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
        '<span class="hero-title-focus">See the artwork through an expert perspective.</span>',
      subcopy:
        "Look Again is an Android XR experience that overlays a short expert perspective on the real artwork. The display appears briefly, then fades so you can return to the artwork itself.",
      searchNote:
        "Search works once the intent is clear. Look Again handles the moment before that.",
      replay: "Replay the flow",
      explore: "See the matrix",
      principle: "The artwork does not change.<br>The perspective does.",
      examplesLabel: "Experience flow",
      delta: {
        existingLabel: "Today’s ways",
        existingTitle: "More explanation, but still outside the work",
        existingBody: "No guide leaves you guessing. Audio gives context without giving an entry point. Phone guides move attention to a screen.",
        lookAgainLabel: "Look Again",
        lookAgainTitle: "One expert perspective on the real artwork",
        lookAgainBody: "It places one short expert perspective on the work, then fades from view."
      },
      audioTranscript: "Notice how light creates the illusion of the pearl.",
      whereExactly: "The focal point stays vague.",
      lookAgainQuestion: "Composition directs attention through the painting.",
      lookAgainCaption: "An expert perspective appears on the artwork.",
      lookAgainExamples: {
        selectArtist: {
          label: "WEARING XR",
          short: "Choose Artist",
          sequenceShort: "1. Choose Artist",
          caption: "After wearing the glasses, the viewpoint menu appears on the artwork. Artist is selected.",
          question: "Artist perspective selected."
        },
        artist: {
          label: "ARTIST",
          short: "Artist",
          sequenceShort: "2. Artist",
          caption: "Mirror, hands, and figure placement organize how the scene is seen.",
          question: "Mirror, hands, and figure placement organize how the scene is seen."
        },
        selectRestorer: {
          label: "SWITCH VIEWPOINT",
          short: "Choose Material",
          sequenceShort: "3. Choose Material",
          caption: "The menu returns briefly. Material is selected before the next view appears.",
          question: "Material perspective selected."
        },
        restorer: {
          label: "MATERIAL",
          short: "Material",
          sequenceShort: "3. Material",
          caption: "Textiles and surface detail show how paint carries value.",
          question: "Textiles and surface detail show how paint carries value."
        },
        selectSocial: {
          label: "SWITCH VIEWPOINT",
          short: "Choose Social",
          sequenceShort: "5. Choose Social",
          caption: "The menu returns briefly. Social context is selected before the next view appears.",
          question: "Social context perspective selected."
        },
        social: {
          label: "SOCIAL CONTEXT",
          short: "Social context",
          sequenceShort: "4. Social context",
          caption: "The convex mirror and signature frame the room as a social scene.",
          question: "The convex mirror and signature frame the room as a social scene."
        },
        quiet: {
          label: "LOOK WITH YOUR OWN EYES",
          short: "Look",
          sequenceShort: "5. Look with your own eyes",
          caption: "Once you have the perspective, look at the artwork with your own eyes.",
          question: "Once you have the perspective, look at the artwork with your own eyes."
        }
      },
      viewpointSelector: {
        aria: "Viewpoint selection",
        eyebrow: "WEARING XR",
        title: "Choose an expert perspective",
        body: "The artwork stays in view. Only the way of looking changes.",
        options: {
          artist: "Artist",
          restorer: "Material",
          social: "Social context"
        }
      },
      audioByArtwork: {
        lastSupper: {
          transcript: "The composition draws your attention toward the center of the room.",
          confusion: "The focal point stays vague."
        },
        girl: {
          transcript: "Notice how light creates the illusion of the pearl.",
          confusion: "The focal point stays vague."
        },
        arnolfini: {
          transcript: "The objects in the room reveal wealth and status.",
          confusion: "The focal point stays vague."
        }
      },
      existingCaptions: {
        looking: "Looking, but not knowing where to begin.",
        audio: "The audio explains, but the focal point stays vague.",
        phone: "The phone has information, but now I am looking at a screen."
      },
      acts: {
        existing: {
          label: "Existing ways",
          caption: "No guide → Audio → Phone"
        },
        lookagain: {
          label: "Look Again",
          caption: "Choose perspective → Artist → Material → Social context → Look with your own eyes"
        }
      }
    },
    experienceFlow: {
      title: "How the experience works",
      intro:
        "Look Again does not ask you to keep watching the overlay. It gives you a perspective, then returns you to the artwork.",
      steps: {
        choose: {
          title: "Choose a perspective",
          body: "Choose an expert perspective such as artist, material, or social context."
        },
        see: {
          title: "See it on the artwork",
          body: "A short question and focus area appear on the real artwork."
        },
        fade: {
          title: "Let the display fade",
          body: "The display stays brief and then fades from view."
        },
        look: {
          title: "Look with your own eyes",
          body: "Once you have the perspective, look at the artwork with your own eyes."
        }
      }
    },
    category: {
      title: "Not a longer guide.<br>A new way into the work.",
      body:
        "Audio gives context. A phone gives information. Look Again adds a perspective for beginning to look.",
      guide: {
        label: "Guide",
        body: "explains the selected work"
      },
      search: {
        label: "Search",
        body: "answers a question"
      },
      lookAgain: {
        label: "Look Again",
        body: "offers a perspective"
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
      select: {
        label: "CHOOSE PERSPECTIVE",
        short: "Choose",
        caption: "Choose an expert perspective while the artwork stays in view."
      },
      artist: {
        label: "ARTIST PERSPECTIVE",
        short: "Artist",
        caption: "The artwork shows where attention is being led.",
        title: "Artist perspective",
        body:
          "How the artist directs attention through composition, light, color, gaze, gesture, and pictorial staging.",
        diagram: {
          lastSupper: "Perspective, table lines, gestures, and figures pull attention toward the center.",
          girl: "Light, color contrast, and gaze pull attention back to the face.",
          arnolfini: "Mirror, sightlines, and figure placement decide who is looking."
        }
      },
      restorer: {
        label: "CONSERVATOR PERSPECTIVE",
        short: "Conservator",
        caption: "A few marks of paint become something you can see.",
        title: "Conservator lens",
        body:
          "How a conservator reads the work as a physical object: surface, damage, repair, technique, support, pigment, and what time has changed.",
        visible: "Visible crop",
        technical: "Concept technical crop"
      },
      social: {
        label: "HISTORIAN PERSPECTIVE",
        short: "Historian",
        caption: "Mirror and signature frame the room as a social scene.",
        title: "Historian / Social Context lens",
        body:
          "How people, objects, institutions, status, belief, trade, power, and display shape what the work meant and why it mattered.",
        witness: "Witness evidence",
      },
      museum: {
        label: "MUSEUM HISTORY PERSPECTIVE",
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
        label: "LOOK WITH YOUR OWN EYES",
        short: "Look",
        caption: "Once you have the perspective, look at the artwork with your own eyes.",
        message: "Once you have the perspective, look at the artwork with your own eyes."
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
      title: "Current Guides Comparison",
      subtitle:
        "Museum guides are the first comparison, not the final goal.",
      existingLabel: "Current guides",
      existingMicrocopy:
        "They are useful, but you still have to find a way into the work.",
      lookAgainLabel: "Look Again",
      lookAgainMicrocopy:
        "Look Again adds one perspective on the real artwork, then fades away.",
      audioTranscript: "Light creates the illusion of the pearl.",
      audioBubble: "But where should I look?",
      noGuide: {
        title: "No guide",
        body: "Where do I start?"
      },
      audio: {
        title: "Audio",
        body: "Where exactly?"
      },
      phone: {
        title: "Phone",
        body: "Looking at the screen"
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
        body: "A quiet perspective on the real work.",
        kicker: "DISPLAY PREVIEW",
        target: "Gaze and light",
        question: "How do light and gaze make the pearl appear?",
        explanation:
          "The perspective appears on the artwork, not on a separate screen.",
        detailLabel: "Magnified paint detail",
        modelLabel: "Paint illusion model"
      },
      rows: {
        existingHead: "Current guides",
        lookAgainHead: "Look Again",
        contextExisting: "More explanation",
        contextLookAgain: "A perspective to begin with",
        infoExisting: "Attention can drift",
        infoLookAgain: "Attention returns to the artwork",
        attentionExisting: "Often another screen",
        attentionLookAgain: "On the real artwork"
      }
    },
    lenses: {
      title: "Perspective Matrix",
      body:
        "Three artworks show how Artist, Conservator, and Historian perspectives open different entries into the work.",
      explanation:
        "The matrix shows the first display moment for each artwork and expert perspective.",
      footerLine:
        "Instead of adding more explanation, Look Again makes the viewing entry visible.",
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
      title: "Display Preview",
      body:
        "Select a matrix card above. The preview shows how one expert perspective appears on the artwork, stays briefly, fades from view, and returns you to looking.",
      controls: {
        viewpoint: "Viewpoint",
        artwork: "Artwork"
      },
      mechanics: {
        kicker: "WHAT APPEARS",
        title: "One display on the artwork",
        body: "",
        items: {
          target: {
            label: "Target",
            body: "The display is anchored to: {target}"
          },
          anchor: {
            label: "Anchor",
            body: "The connector starts at the real detail."
          },
          panel: {
            label: "Edge panel",
            body: "The explanation stays brief so you can return to the artwork."
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
            body: "The display carries source footnote {number}; full links are at the bottom of the page."
          },
          final: {
            label: "Return",
            body: "Once you have the perspective, look at the artwork with your own eyes."
          }
        }
      }
    },
    sourceFootnotes: {
      kicker: "Source footnotes",
      title: "Sources used for perspective grounding",
      body: "Reference links for the visible perspective examples.",
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
      "https://cenacolovinciano.vivaticket.it/index.php?nvpg[festivalDetail]&id=2384&lang=en": "Cenacolo Vinciano visit information",
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
        "This is not about putting more text in glasses. The value is that a perspective can appear on the real artwork while you keep looking at it.",
      items: {
        pointing: {
          title: "A brief visual perspective",
          body: "A short overlay appears on one visible detail, then fades."
        },
        spatial: {
          title: "Attached to the artwork",
          body: "The guidance belongs to a visible detail, not to a floating label."
        },
        connector: {
          title: "Place and explanation stay connected",
          body: "The marked detail connects to a short explanation at the edge of view."
        },
        body: {
          title: "Movement only when useful",
          body: "Side viewing is used only for material or surface questions."
        },
        disappear: {
          title: "It fades from view",
          body: "The display stays brief, then returns attention to the artwork."
        }
      }
    },
    whyMuseums: {
      title: "Museum-first, not museum-only",
      body:
        "Because the problem is easy to see there. You can stand in front of the real thing and still not know where to begin. Artworks also make a strict test: if XR makes the work harder to see, darker, or more distracting, the phone is better.",
      closing:
        "Museums are where the problem is easiest to see, not where the product must end. The broader category is opening a first question before search in real places."
    },
    aura: {
      title: "Android XR hardware validation",
      body:
        "The XR value above only matters if the real artwork remains clear. The hardware test checks the few conditions that decide that.",
      statement:
        "If those conditions fail, the phone is the better interface.",
      validationIntro: "Validation focus",
      points: {
        lowLight: "Artwork remains visible in dim rooms",
        color: "Color and contrast stay close enough to the real work",
        distraction: "The overlay stays peripheral and brief",
        anchoring: "The mark stays attached to the same visible detail",
        comfort: "Viewing remains comfortable"
      }
    },
    plan: {
      title: "Implementation and validation plan",
      body:
        "The first build is deliberately narrow: can a short perspective on the real artwork help you begin looking better than audio or phone guidance?",
      items: {
        artworks: "Start with 3–5 public-domain artworks.",
        native: "Build a native Android XR prototype.",
        selection: "Select works by artwork number or QR code.",
        scope:
          "Keep the MVP focused: no museum-wide navigation, no heavy 3D reconstruction, no museum partnership claim.",
        validation: "Compare with audio and phone guidance before claiming XR is better."
      }
    },
    metrics: {
      title: "How success will be measured",
      body:
        "Look Again only works if it helps you see the real artwork more clearly without pulling you into another screen.",
      items: {
        discovery: "noticing previously missed details",
        question: "forming better questions after looking",
        remove: "keeping the glasses on",
        time: "time spent looking at the real artwork",
        helpfulness: "viewing support without distraction",
        intent: "wanting to look again",
        comparison: "comparison with audio and phone guidance"
      }
    },
    futureContexts: {
      title: "Museum-first, not museum-only",
      intro:
        "Museums are the first proof environment because the problem is easy to see there. The same interaction pattern can later apply to nearby cultural and visual contexts: stage sets, landscape photography, and heritage sites.",
      cards: {
        opera: {
          status: "Scenographer view",
          title: "Opera stage set",
          body:
            "Sightlines and scenery layers explain how the stage creates space before the viewer knows the craft terms.",
          panel: "Sightline / scenery layers",
          insightTitle: "Scenographer reading",
          insightBody: "The set creates depth by stacking flat scenery in the viewer’s sightline."
        },
        landscape: {
          status: "Photographer view",
          title: "Landscape photography",
          body:
            "Composition guides and depth layers show how a photograph leads attention through a real scene.",
          panel: "Foreground / ridge / haze",
          insightTitle: "Photographer reading",
          insightBody: "Foreground rocks anchor scale; repeating ridges move the eye into depth."
        },
        heritage: {
          status: "Heritage conservator view",
          title: "Cultural heritage site",
          body:
            "Material seams and missing fragments make the history of the site readable on the site itself.",
          panel: "Original stone / repair seam",
          insightTitle: "Conservator reading",
          insightBody: "Different stone courses separate original fabric from later repair."
        },
        training: {
          status: "Procedure perspective",
          title: "Training environments",
          body: "Bring attention to one critical detail, then disappear.",
          panel: "Step path / critical detail"
        }
      },
      note:
        "Future contexts are examples of the interaction pattern, not current product scope."
    },
    footer: {
      exampleNote:
        "The artworks are examples for the prototype. Future use would require rights review for each artwork and display context.",
      disclaimer:
        "Prototype visualization. Native Android XR implementation is not complete. No museum partnership is claimed. Museum scenes are approximate visualizations, not exact reconstructions.",
      contactHtml:
        "Builders: Kenichiro Eda / Yuka Nabeshima<br>Contact: ciaoken16@gmail.com",
      copyright: "© 2026 Kenichiro Eda",
      planLink: "Plan"
    },
    executionPlanCta: {
      kicker: "Reviewer page",
      title: "See the execution plan and roadmap",
      body:
        "Build scope, six-month roadmap, validation plan, grant use, team, and current status are separated for review.",
      action: "Open plan"
    },
    planPage: {
      home: "Home",
      title: "Implementation roadmap",
      kicker: "Reviewer execution plan",
      intro:
        "Look Again is designed as a focused Android XR prototype, not a broad museum-platform launch. The goal is to test whether a short perspective on the real artwork can help people begin looking before they know what to ask.",
      readinessTitle: "Build scope",
      readiness: {
        rapid: {
          title: "Rapid prototype",
          body: "Browser prototype now, native Android XR prototype next."
        },
        measurable: {
          title: "Measurable interaction",
          body: "Test first-question clarity, phone comparison, and do-not-remove-glasses rate."
        },
        source: {
          title: "Source-grounded content",
          body: "Use public-domain artworks and vetted source notes; AI routes perspectives, not invented interpretations."
        },
        small: {
          title: "Small enough to ship",
          body: "The MVP avoids museum-wide navigation, heavy 3D reconstruction, and partnership dependency."
        }
      },
      roadmapTitle: "Six-month roadmap",
      roadmap: {
        month1: {
          label: "Month 1",
          title: "Native Android XR project setup.",
          body: "Port the browser perspective model into an Android / Jetpack XR prototype."
        },
        month2: {
          label: "Month 2",
          title: "Artwork recognition / selection flow.",
          body: "Implement 3 public-domain artwork packs."
        },
        month3: {
          label: "Month 3",
          title: "Spatial perspective rendering.",
          body: "Overlay, pulse, connector, peripheral panel, disappear-by-default behavior."
        },
        month4: {
          label: "Month 4",
          title: "Android XR hardware validation.",
          body: "Brightness, color fidelity, comfort, distraction, placement; include XREAL Project Aura if supplied through Catalyst."
        },
        month5: {
          label: "Month 5",
          title: "User study.",
          body: "Compare no guide / audio-like context / phone guide / Look Again perspective."
        },
        month6: {
          label: "Month 6",
          title: "Closed test package.",
          body: "Demo video, Google Play closed testing readiness, public documentation."
        }
      },
      grantTitle: "Grant use",
      grantIntro: "If funding is awarded, it would support focused prototype validation.",
      grant: {
        native: "Native Android XR prototype",
        aura: "Android XR hardware validation, including XREAL Project Aura if supplied through Catalyst",
        content: "Public-domain content and source audit",
        testing: "User testing",
        assets: "Demo video and submission assets"
      },
      beyondTitle: "Beyond museums",
      beyondBody1:
        "Museums are the first proof environment because the problem is visible there: people can be looking at the real thing and still not know how to enter the work.",
      beyondBody2:
        "The larger vision is a pre-search perspective layer for the physical world. Before a person knows what to ask, Android XR can reveal one meaningful detail, open one grounded question, and disappear.",
      futureTitle: "Future contexts",
      future: {
        cultural: "cultural sites",
        architecture: "architect perspective",
        field: "botanist perspective",
        performance: "skeletal review for dance",
        training: "training environments"
      },
      builderTitle: "Team",
      builderMemberKenichiro: "Kenichiro Eda — Product / prototype",
      builderMemberYuka: "Yuka Nabeshima — Research / language",
      contactTitle: "Contact",
      contactName: "Kenichiro Eda",
      contactEmail: "ciaoken16@gmail.com",
      statusTitle: "Current status",
      status: {
        concept: "Prototype visualization.",
        browser: "Browser prototype / prototype visualization exists.",
        native: "Native Android XR implementation is not complete.",
        partnership: "No museum partnership is claimed.",
        scenes: "Display scenes are display-informed approximations, not exact museum reconstructions."
      }
    }
  };

  const ja = {
    nav: {
      difference: "何が変わるか",
      lenses: "視点マトリクス",
      aura: "なぜXRか",
      plan: "実装計画",
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
        '<span class="hero-title-focus">専門家の視点を通して、作品を見る。</span>',
      subcopy:
        "Look Againは、実物作品の上に短い専門家視点を重ねるAndroid XR体験です。表示は短く現れ、その後は作品そのものを見る時間に戻ります。",
      searchNote:
        "検索は、調べたいことが明確になってから役に立つ。Look Againは、その前の鑑賞の入口を扱います。",
      replay: "流れをもう一度見る",
      explore: "マトリクスを見る",
      principle: "作品は変わらない。<br>視点が変わる。",
      examplesLabel: "体験の流れ",
      delta: {
        existingLabel: "従来のガイド",
        existingTitle: "説明は増える。でも、作品の外に留まりやすい",
        existingBody: "何もなければ手がかりがない。音声は文脈をくれるが、場所は示さない。スマホは注意を画面へ移す。",
        lookAgainLabel: "Look Again",
        lookAgainTitle: "実物作品の上に、一つの専門家視点が出る",
        lookAgainBody: "作品の上に短い専門家視点を重ね、すぐ視界から消える。"
      },
      audioTranscript: "光が真珠のような効果を生み出しています。",
      whereExactly: "焦点が曖昧なまま残る。",
      lookAgainQuestion: "構図が、絵の中で注意を導いている。",
      lookAgainCaption: "専門家視点が作品の上に現れる。",
      lookAgainExamples: {
        selectArtist: {
          label: "WEARING XR",
          short: "画家を選択",
          sequenceShort: "1. 画家を選ぶ",
          caption: "装着後、視点メニューが作品上に現れ、画家視点を選択する。",
          question: "画家視点を選択。"
        },
        artist: {
          label: "画家視点",
          short: "画家視点",
          sequenceShort: "2. 画家視点",
          caption: "鏡、手、人物配置が、この場面の見え方を組み立てている。",
          question: "鏡、手、人物配置が、この場面の見え方を組み立てている。"
        },
        selectRestorer: {
          label: "視点切替",
          short: "素材を選択",
          sequenceShort: "3. 素材を選ぶ",
          caption: "視点メニューが一瞬戻り、素材視点へ切り替える。",
          question: "素材視点を選択。"
        },
        restorer: {
          label: "素材視点",
          short: "素材視点",
          sequenceShort: "3. 素材視点",
          caption: "布地と表面の細部が、絵具で価値を担っている。",
          question: "布地と表面の細部が、絵具で価値を担っている。"
        },
        selectSocial: {
          label: "視点切替",
          short: "社会文脈を選択",
          sequenceShort: "5. 社会文脈を選ぶ",
          caption: "視点メニューが一瞬戻り、社会文脈へ切り替える。",
          question: "社会文脈を選択。"
        },
        social: {
          label: "社会文脈",
          short: "社会文脈",
          sequenceShort: "4. 社会文脈",
          caption: "凸面鏡と署名が、室内を社会的な場として見せる。",
          question: "凸面鏡と署名が、室内を社会的な場として見せる。"
        },
        quiet: {
          label: "自分の目で見る",
          short: "自分の目で見る",
          sequenceShort: "5. 自分の目で見る",
          caption: "視点を受け取ったら、自分の目で作品をご覧ください。",
          question: "視点を受け取ったら、自分の目で作品をご覧ください。"
        }
      },
      viewpointSelector: {
        aria: "視点選択",
        eyebrow: "WEARING XR",
        title: "視点を選ぶ",
        body: "作品は見たまま、見るための視点だけを切り替える。",
        options: {
          artist: "画家視点",
          restorer: "素材視点",
          social: "社会文脈"
        }
      },
      audioByArtwork: {
        lastSupper: {
          transcript: "構図は視線を部屋の中心へ導きます。",
          confusion: "焦点が曖昧なまま残る。"
        },
        girl: {
          transcript: "光が真珠のような効果を生み出しています。",
          confusion: "焦点が曖昧なまま残る。"
        },
        arnolfini: {
          transcript: "部屋の小物が富と地位を示しています。",
          confusion: "焦点が曖昧なまま残る。"
        }
      },
      existingCaptions: {
        looking: "見ている。でも、どこから見ればいいか分からない。",
        audio: "音声は説明してくれる。でも、焦点は曖昧なまま残る。",
        phone: "スマホには情報がある。でも今見ているのは画面だ。"
      },
      acts: {
        existing: {
          label: "従来の見方",
          caption: "ガイドなし → 音声 → スマホ"
        },
        lookagain: {
          label: "Look Again",
          caption: "視点選択 → 画家視点 → 素材視点 → 社会文脈 → 自分の目で見る"
        }
      }
    },
    experienceFlow: {
      title: "体験の流れ",
      intro:
        "Look Againは、表示を見続けるための体験ではありません。視点を受け取ったら、作品そのものを見る時間に戻ります。",
      steps: {
        choose: {
          title: "視点を選ぶ",
          body: "画家、素材、社会文脈など、作品を見る入口を選びます。"
        },
        see: {
          title: "作品上で見る",
          body: "選んだ視点に基づいて、短い問いと注目箇所が実物作品の上に表示されます。"
        },
        fade: {
          title: "表示が消える",
          body: "表示は長く残らず、短く表示されたあとに視界から消えます。"
        },
        look: {
          title: "自分の目で見る",
          body: "視点を受け取ったら、自分の目で作品をご覧ください。"
        }
      }
    },
    category: {
      title: "解説を長くするのではない。<br>作品に入るための視点をつくる。",
      body:
        "音声は文脈を伝える。スマホは情報を表示する。Look Againは、作品を見始めるための視点を加える。",
      guide: {
        label: "ガイド",
        body: "選んだ作品を説明する"
      },
      search: {
        label: "検索",
        body: "問いに答える"
      },
      lookAgain: {
        label: "Look Again",
        body: "視点を提示する"
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
      select: {
        label: "視点を選ぶ",
        short: "視点選択",
        caption: "作品を見たまま、視点を選ぶ。"
      },
      artist: {
        label: "ARTIST PERSPECTIVE",
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
        label: "CONSERVATOR PERSPECTIVE",
        short: "保存修復家",
        caption: "わずかな絵具の跡が、見えるものに変わる。",
        title: "保存修復家の視点",
        body:
          "保存修復家のように、作品を物として読む。表面、損傷、修復、技法、支持体、顔料、時間による変化に注目する。",
        visible: "可視画像",
        technical: "技術画像コンセプト"
      },
      social: {
        label: "HISTORIAN PERSPECTIVE",
        short: "歴史・社会",
        caption: "鏡と署名が、室内を社会的な場として見せる。",
        title: "歴史家 / 社会文脈の視点",
        body:
          "人物、小物、制度、地位、信仰、交易、権力、展示が、作品の意味と重要性をどう形づくるかを見る。",
        witness: "証人の証拠",
      },
      museum: {
        label: "MUSEUM HISTORY PERSPECTIVE",
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
        label: "自分の目で見る",
        short: "自分の目で見る",
        caption: "視点を受け取ったら、自分の目で作品をご覧ください。",
        message: "視点を受け取ったら、自分の目で作品をご覧ください。"
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
      title: "現状ガイドとの比較",
      subtitle:
        "美術館ガイドは最初の比較対象であり、最終ゴールではありません。",
      existingLabel: "現状のガイド",
      existingMicrocopy:
        "役には立つ。でも、作品に入っていく視点はまだ自分で見つける必要がある。",
      lookAgainLabel: "Look Again",
      lookAgainMicrocopy:
        "Look Againは、実物作品の上に一つの視点を重ね、すぐ消える。",
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
        title: "スマホ",
        body: "画面を見ている"
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
        kicker: "表示プレビュー",
        target: "視線と光",
        question: "光と視線は、真珠をどう立ち上げているのか？",
        explanation:
          "別の画面ではなく、実物作品の上に視点が現れる。",
        detailLabel: "絵具の細部を拡大",
        modelLabel: "絵具の錯覚モデル"
      },
      rows: {
        existingHead: "現状のガイド",
        lookAgainHead: "Look Again",
        contextExisting: "説明が増える",
        contextLookAgain: "見始めるための視点",
        infoExisting: "注意が流れる",
        infoLookAgain: "注意が作品へ戻る",
        attentionExisting: "別の画面を見がち",
        attentionLookAgain: "実物作品の上に出る"
      }
    },
    lenses: {
      title: "視点マトリクス",
      body:
        "3作品を通して、画家、保存修復家、歴史家の視点が作品への入口をどう変えるかを示す。",
      explanation:
        "マトリクスは、作品と視点ごとに最初の表示場面を示す。",
      footerLine:
        "説明を増やすのではなく、作品を見る入口を見えるようにする。",
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
      targetLabel: "対象:",
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
      title: "表示プレビュー",
      body:
        "上のマトリクスカードを選ぶと、一つの専門家視点が作品の上に現れ、短く表示され、視界から消えて、作品を見る状態に戻る流れを確認できます。",
      controls: {
        viewpoint: "視点",
        artwork: "作品"
      },
      mechanics: {
        kicker: "表示される内容",
        title: "作品の上に出る一つの表示",
        body: "",
        items: {
          target: {
            label: "対象",
            body: "表示は「{target}」に結びつく。"
          },
          anchor: {
            label: "アンカー",
            body: "線は実物の細部から始まる。"
          },
          panel: {
            label: "端のパネル",
            body: "説明は短く留め、すぐ作品を見る状態に戻れるようにします。"
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
            body: "表示には脚注{number}を付け、出典リンクはページ最下部にまとめる。"
          },
          final: {
            label: "戻る",
            body: "視点を受け取ったら、自分の目で作品をご覧ください。"
          }
        }
      }
    },
    sourceFootnotes: {
      kicker: "脚注",
      title: "視点設計で参照した出典",
      body: "表示例の参照リンク。",
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
        "これは、グラスに文字を増やすための体験ではない。実物作品を見続けたまま、その上に視点を重ねられることに意味がある。",
      items: {
        pointing: {
          title: "短い視点表示",
          body: "見えている細部に短い表示が現れ、すぐ消える。"
        },
        spatial: {
          title: "作品に結びつく",
          body: "表示は浮いたラベルではなく、見えている細部に結びつく。"
        },
        connector: {
          title: "場所と説明がつながる",
          body: "示された細部が、視界の端にある短い解説へつながる。"
        },
        body: {
          title: "必要な時だけ動く",
          body: "斜めから見る表現は、素材や表面を見る時だけ使う。"
        },
        disappear: {
          title: "視界から消える",
          body: "表示は短く現れ、注意を作品へ戻す。"
        }
      }
    },
    whyMuseums: {
      title: "美術館から始める。美術館だけでは終わらない。",
      body:
        "この問題が見えやすいからです。実物を目の前にしていても、どこから見ればいいか分からないことがある。美術作品は厳しい検証対象でもある。XRによって作品が見づらくなり、暗くなり、邪魔になるなら、スマホの方がよい。",
      closing:
        "美術館は問題が最も見えやすい場所であり、プロダクトがそこで終わるという意味ではありません。より大きなカテゴリは、検索前に現実の場所で最初の問いを開く体験です。"
    },
    aura: {
      title: "Android XR実機で確かめること",
      body:
        "上で述べたXRの価値は、実物作品がはっきり見え続ける場合にだけ成立する。実機検証では、その成立条件だけを確かめる。",
      statement:
        "この条件を満たせないなら、スマホの方がよい。",
      validationIntro: "検証する成立条件",
      points: {
        lowLight: "暗い展示室でも作品が見える",
        color: "色とコントラストが実物から大きく外れない",
        distraction: "表示が短く、視界の邪魔にならない",
        anchoring: "印が同じ細部に結びついたまま残る",
        comfort: "鑑賞中の負担が小さい"
      }
    },
    plan: {
      title: "実装・実証計画",
      body:
        "最初の実装範囲は意図的に絞る。実物作品の上に重ねる短い視点表示は、音声やスマホガイドよりも、作品を見始める助けになるのかを実証する。",
      items: {
        artworks: "3〜5点のパブリックドメイン作品から始める。",
        native: "ネイティブAndroid XRプロトタイプを実装する。",
        selection: "作品番号またはQRコードで作品を選択する。",
        scope:
          "MVPは絞る。館内ナビ、重い3D再構成、美術館提携の主張は入れない。",
        validation: "XRが優れていると言う前に、音声・スマホガイドと比較する。"
      }
    },
    metrics: {
      title: "成功の測り方",
      body:
        "Look Againが成立するのは、別の画面に引き込まず、実物作品をよりはっきり見られる場合だけです。",
      items: {
        discovery: "それまで見落としていた細部に気づく",
        question: "見た後に、よりよい問いが生まれる",
        remove: "グラスを外したくならない",
        time: "実物作品を見ている時間",
        helpfulness: "邪魔にならない鑑賞補助",
        intent: "もう一度見たくなるか",
        comparison: "音声・スマホガイドとの比較"
      }
    },
    futureContexts: {
      title: "美術館から始める。美術館だけでは終わらない。",
      intro:
        "美術館から始めるのは、問題が見えやすいからです。同じ体験の型は、舞台セット、風景写真、文化財・遺跡など、近い文化・視覚領域にも広げられます。",
      cards: {
        opera: {
          status: "舞台美術家の見方",
          title: "オペラ舞台セット",
          body:
            "視線の通り道と書割の層を重ね、舞台がどう空間を作るかを実物上で見る。",
          panel: "視線 / 書割の層",
          insightTitle: "舞台美術家の読み方",
          insightBody: "平面の書割を視線上に重ねることで、舞台上に奥行きが生まれる。"
        },
        landscape: {
          status: "写真家の見方",
          title: "風景写真の構図",
          body:
            "前景、稜線、霞の層を重ね、写真が視線をどう奥へ運ぶかを見る。",
          panel: "前景 / 稜線 / 霞",
          insightTitle: "写真家の読み方",
          insightBody: "手前の岩がスケールを固定し、重なる稜線が視線を奥へ運ぶ。"
        },
        heritage: {
          status: "文化財修復家の見方",
          title: "文化財・遺跡",
          body:
            "石材の層、修復の継ぎ目、欠損部分を重ね、遺跡の時間をその場で読む。",
          panel: "元の石材 / 修復の継ぎ目",
          insightTitle: "修復家の読み方",
          insightBody: "石材の層と色の違いが、元の部分と後の修復を分けて見せる。"
        },
        training: {
          status: "手順視点",
          title: "トレーニング環境",
          body: "重要な一点へ注意を向け、すぐ消える。",
          panel: "手順の流れ / 重要箇所"
        }
      },
      note:
        "これらは将来の応用例であり、現在の開発範囲ではありません。"
    },
    footer: {
      exampleNote:
        "ここで使う作品はプロトタイプ用の例です。今後の利用では、作品ごと・展示文脈ごとに権利確認が必要です。",
      disclaimer:
        "プロトタイプの可視化です。ネイティブAndroid XR実装は未完了です。美術館との提携は主張していません。美術館シーンは近似的な表現であり、正確な再現ではありません。",
      contactHtml:
        "制作: 江田健一郎 / 鍋島優歌<br>連絡先: ciaoken16@gmail.com",
      copyright: "© 2026 Kenichiro Eda",
      planLink: "実行計画"
    },
    executionPlanCta: {
      kicker: "審査員向けページ",
      title: "実行計画とロードマップを見る",
      body:
        "実装範囲、6か月ロードマップ、検証計画、助成金の使途、チーム、現在の状態を審査用に分けて整理しています。",
      action: "実行計画を開く"
    },
    planPage: {
      home: "ホーム",
      title: "実装ロードマップ",
      kicker: "審査員向け実行計画",
      intro:
        "Look Againは、大規模な美術館プラットフォームではなく、焦点を絞ったAndroid XRプロトタイプとして設計する。目的は、実物作品の上に重ねる短い視点表示が、何を問えばいいか分かる前に作品を見始める助けになるかを検証すること。",
      readinessTitle: "実装範囲",
      readiness: {
        rapid: {
          title: "高速プロトタイプ",
          body: "現在はブラウザプロトタイプ。次にネイティブAndroid XRプロトタイプへ進む。"
        },
        measurable: {
          title: "測定できる体験",
          body: "最初の問いの明確さ、スマホ比較、グラスを外したくならない率を測る。"
        },
        source: {
          title: "出典に基づくコンテンツ",
          body: "パブリックドメイン作品と確認済み出典を使う。AIは解釈を作るのではなく、視点を選ぶ。"
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
          body: "ブラウザ版の視点モデルをAndroid / Jetpack XRプロトタイプへ移植する。"
        },
        month2: {
          label: "2か月目",
          title: "作品認識 / 選択フローを作る。",
          body: "3点のパブリックドメイン作品パックを実装する。"
        },
        month3: {
          label: "3か月目",
          title: "空間視点表示を実装する。",
          body: "表示、パルス、コネクタ、周辺パネル、初期状態では消える挙動を作る。"
        },
        month4: {
          label: "4か月目",
          title: "Android XR実機で検証する。",
          body: "明るさ、色の見え方、快適さ、邪魔にならなさ、表示位置を確認する。Catalystで提供される場合はXREAL Project Auraを含む。"
        },
        month5: {
          label: "5か月目",
          title: "ユーザースタディを行う。",
          body: "ガイドなし / 音声的文脈 / スマホガイド / Look Againの視点表示を比較する。"
        },
        month6: {
          label: "6か月目",
          title: "クローズドテスト用パッケージにまとめる。",
          body: "デモ動画、Google Playクローズドテスト準備、公開ドキュメントを整える。"
        }
      },
      grantTitle: "助成金の使途",
      grantIntro: "採択された場合、助成金は焦点を絞ったプロトタイプ検証に使う。",
      grant: {
        native: "ネイティブAndroid XRプロトタイプ",
        aura: "Android XR実機での実証。Catalystで提供される場合はXREAL Project Auraを含む",
        content: "パブリックドメイン作品と出典監査",
        testing: "ユーザーテスト",
        assets: "デモ動画と提出用素材"
      },
      beyondTitle: "美術館の先へ",
      beyondBody1:
        "美術館は、この問題が見えやすい最初の検証環境である。人は実物を見ていても、どこを見ればいいか分からないことがある。",
      beyondBody2:
        "より大きな構想は、現実世界のための検索前の視点レイヤーである。人が何を問えばいいか分かる前に、Android XRが意味のある一点を見えるようにし、出典に基づく問いを一つだけ開いて、すぐ消える。",
      futureTitle: "今後の文脈",
      future: {
        cultural: "文化遺産・史跡",
        architecture: "建築家視点",
        field: "植物学者視点",
        performance: "ダンスの骨格レビュー",
        training: "トレーニング環境"
      },
      builderTitle: "Team",
      builderMemberKenichiro: "江田健一郎 — Product / prototype",
      builderMemberYuka: "鍋島優歌 — Research / language",
      contactTitle: "連絡先",
      contactName: "江田健一郎",
      contactEmail: "ciaoken16@gmail.com",
      statusTitle: "現在の状態",
      status: {
        concept: "プロトタイプの可視化です。",
        browser: "ブラウザプロトタイプ / プロトタイプ可視化は存在する。",
        native: "ネイティブAndroid XR実装は未完了。",
        partnership: "美術館との提携は主張しない。",
        scenes: "展示シーンは実展示を参照した近似であり、正確な再現ではない。"
      }
    }
  };

  window.LookAgainI18n = { en, ja };
})();

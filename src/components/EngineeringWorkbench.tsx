"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Hotspot {
  id: number;
  x: string;
  y: string;
  name: string;
  spec: string;
  function: string;
}

interface SystemData {
  title: string;
  desc: string;
  svg: React.ReactNode;
  hotspots: Hotspot[];
}

export default function EngineeringWorkbench() {
  const [activeSystem, setActiveSystem] = useState<"balustrade" | "acp">("balustrade");
  const [activeHotspot, setActiveHotspot] = useState<number>(1);

  const systems: Record<"balustrade" | "acp", SystemData> = {
    balustrade: {
      title: "SS 304 Balustrade System",
      desc: "Balcony balustrades require structural bending resistance. We combine Saint-Gobain tempered glass with solid-cast steel spigots and heavy-duty anchors to absorb lateral wind loads.",
      hotspots: [
        {
          id: 1,
          x: "50%",
          y: "8%",
          name: "SS 316 Interconnecting Handrail",
          spec: "50.8mm Ø x 2.0mm wall thickness TIG-welded tube",
          function: "Acts as a structural tie-back, linking the glass panes together. If one pane fails, the handrail distributes lateral load to adjacent panes, preventing fall-offs."
        },
        {
          id: 2,
          x: "50%",
          y: "40%",
          name: "12mm Toughened Safety Glass",
          spec: "Saint-Gobain tempered clear glass with polished flat edges",
          function: "Thermally stressed to resist impact forces up to 5x greater than standard glass. If broken, it fractures safely into small, blunt-edged granules."
        },
        {
          id: 3,
          x: "28%",
          y: "88%",
          name: "Heavy Duty Solid-Cast Spigot",
          spec: "SS 304 duplex-grade friction clamp spigot mount",
          function: "Secures the glass plate firmly using pressure pads. Friction-clamping avoids drilling holes in the glass, which would create micro-fracture stress points."
        },
        {
          id: 4,
          x: "72%",
          y: "93%",
          name: "High-Load Chemical Anchor Bolt",
          spec: "M12 Grade 8.8 Galvanized expansion bolts with epoxy mortar",
          function: "Transfers the bending moment from the spigot base directly into the concrete core, preventing layout pullout under high structural loads."
        }
      ],
      svg: (
        <svg viewBox="0 0 500 350" className="workbench-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Concrete Slab Base */}
          <rect x="20" y="300" width="460" height="40" rx="4" fill="var(--bg-secondary)" stroke="var(--border-strong)" strokeWidth="1.5" />
          <line x1="20" y1="300" x2="480" y2="300" stroke="var(--text-primary)" strokeWidth="2.5" />
          
          {/* Spigot Bracket Left */}
          <path d="M125 300 L135 250 L145 250 L155 300 Z" fill="none" stroke="var(--text-primary)" strokeWidth="2" strokeLinejoin="round" />
          <rect x="137" y="220" width="6" height="30" rx="1" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Spigot Bracket Right */}
          <path d="M345 300 L355 250 L365 250 L375 300 Z" fill="none" stroke="var(--text-primary)" strokeWidth="2" strokeLinejoin="round" />
          <rect x="357" y="220" width="6" height="30" rx="1" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Glass Plate */}
          <rect x="139" y="45" width="222" height="195" rx="3" fill="rgba(95, 131, 133, 0.05)" stroke="var(--accent-glass)" strokeWidth="2" strokeDasharray="6 3" />
          
          {/* Top Handrail */}
          <rect x="120" y="25" width="260" height="20" rx="10" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          <line x1="120" y1="35" x2="380" y2="35" stroke="var(--text-primary)" strokeWidth="1" />
          
          {/* Decorative Detail Hatching */}
          <line x1="30" y1="310" x2="50" y2="330" stroke="var(--border-strong)" strokeWidth="1" />
          <line x1="70" y1="310" x2="90" y2="330" stroke="var(--border-strong)" strokeWidth="1" />
          <line x1="410" y1="310" x2="430" y2="330" stroke="var(--border-strong)" strokeWidth="1" />
          <line x1="450" y1="310" x2="470" y2="330" stroke="var(--border-strong)" strokeWidth="1" />
        </svg>
      )
    },
    acp: {
      title: "Aluminium Cladding Facade Section",
      desc: "ACP cladding protects outer walls from weathering. Our system uses a subframe structure to suspend composite panels with thermal expansion runners and deep silicone backer seals.",
      hotspots: [
        {
          id: 1,
          x: "50%",
          y: "35%",
          name: "ACP Cladding Skin",
          spec: "4mm Aludecor PVDF coated panel (0.5mm skin / LDPE Core)",
          function: "Provides a flat, geometric, weather-resistant facade. The PVDF coating resists UV exposure, acid rain, and color fading for decades."
        },
        {
          id: 2,
          x: "82%",
          y: "48%",
          name: "Aluminium Subframe Column",
          spec: "50x50x2mm high-tensile extruded aluminium runner tube",
          function: "Creates a structural framing matrix. Aligns the exterior cladding line and handles positive/negative wind loads on the wall facade."
        },
        {
          id: 3,
          x: "50%",
          y: "74%",
          name: "Weatherproof Expansion Joint",
          spec: "Dow Corning 789 silicone sealant over open-cell backer rod",
          function: "Fills the 10mm gap between panels. Pre-installed backer rod controls joint depth, allowing structural sealant to flex freely during thermal cycles."
        },
        {
          id: 4,
          x: "18%",
          y: "60%",
          name: "Wall Mounting L-Cleat",
          spec: "50x50x5mm hot-dip galvanized steel mounting brackets",
          function: "Cleats the aluminium framing back to the building brickwork or concrete columns, anchoring the subframe facade weight securely."
        }
      ],
      svg: (
        <svg viewBox="0 0 500 350" className="workbench-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Brickwork wall representation (left) */}
          <rect x="20" y="20" width="100" height="300" fill="var(--bg-secondary)" stroke="var(--border-strong)" strokeWidth="1.5" />
          <line x1="20" y1="80" x2="120" y2="80" stroke="var(--border-strong)" strokeWidth="1" />
          <line x1="20" y1="140" x2="120" y2="140" stroke="var(--border-strong)" strokeWidth="1" />
          <line x1="20" y1="200" x2="120" y2="200" stroke="var(--border-strong)" strokeWidth="1" />
          <line x1="20" y1="260" x2="120" y2="260" stroke="var(--border-strong)" strokeWidth="1" />
          
          {/* L-Cleats */}
          <path d="M120 90 L160 90 L160 110" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" />
          <path d="M120 230 L160 230 L160 250" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" />
          
          {/* Aluminium Runner Tube (Vertical) */}
          <rect x="180" y="30" width="40" height="280" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          <line x1="200" y1="30" x2="200" y2="310" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="4 2" />
          
          {/* Cleat fasteners to runner */}
          <circle cx="190" cy="100" r="4" fill="var(--text-primary)" />
          <circle cx="190" cy="240" r="4" fill="var(--text-primary)" />
          
          {/* ACP Panels (Right side, split by joint) */}
          <rect x="250" y="20" width="20" height="150" rx="1" fill="none" stroke="var(--accent-craft)" strokeWidth="2" />
          <rect x="250" y="180" width="20" height="140" rx="1" fill="none" stroke="var(--accent-craft)" strokeWidth="2" />
          
          {/* Joint Detail */}
          <rect x="245" y="170" width="30" height="10" rx="1" fill="rgba(171, 142, 108, 0.15)" stroke="var(--accent-craft)" strokeWidth="1.5" strokeDasharray="2 2" />
          
          {/* Bracket connecting runner to panel */}
          <path d="M220 70 L250 70" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M220 210 L250 210" stroke="var(--text-primary)" strokeWidth="2" />
        </svg>
      )
    }
  };

  const currentSystem = systems[activeSystem];

  return (
    <section className="section-padding container" style={{ borderTop: "1px solid var(--border-color)" }} aria-label="Interactive Structural Anatomy">
      <div style={{ marginBottom: "4rem" }}>
        <span className="eyebrow">02 — Interactive Drafting Board</span>
        <h2 className="heading-display" style={{ marginBottom: "1rem" }}>The Engineering Workbench</h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", fontSize: "0.95rem" }}>
          Examine the structural anatomy of our high-load steel, glass, and panel installations. Select a system and hover over the hotspots to read technical specs and safety rationales.
        </p>
      </div>

      <div className="workbench-grid">
        {/* Navigation & Details */}
        <div className="workbench-controls">
          <div className="workbench-tabs">
            <button 
              className={`workbench-tab-btn ${activeSystem === "balustrade" ? "active-tab-btn" : ""}`}
              onClick={() => {
                setActiveSystem("balustrade");
                setActiveHotspot(1);
              }}
            >
              ① Balustrade System
            </button>
            <button 
              className={`workbench-tab-btn ${activeSystem === "acp" ? "active-tab-btn" : ""}`}
              onClick={() => {
                setActiveSystem("acp");
                setActiveHotspot(1);
              }}
            >
              ② ACP Cladding Facade
            </button>
          </div>

          <div className="workbench-system-desc">
            <h3 className="workbench-system-title">{currentSystem.title}</h3>
            <p className="workbench-system-body">{currentSystem.desc}</p>
          </div>

          {/* Hotspot details drawer */}
          <div className="workbench-drawer-box">
            <AnimatePresence mode="wait">
              {currentSystem.hotspots.map((hs) => {
                if (hs.id !== activeHotspot) return null;
                return (
                  <motion.div
                    key={hs.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="workbench-spec-drawer"
                  >
                    <span className="drawer-hotspot-num">HOTSPOT {hs.id}</span>
                    <h4 className="drawer-element-name">{hs.name}</h4>
                    
                    <div className="drawer-stat-row">
                      <span className="drawer-label">Material Spec</span>
                      <span className="drawer-val">{hs.spec}</span>
                    </div>

                    <div className="drawer-stat-row" style={{ borderBottom: "none", paddingBottom: 0 }}>
                      <span className="drawer-label">Safety & Function</span>
                      <p className="drawer-para">{hs.function}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Visual Workbench Canvas with absolute Hotspots */}
        <div className="workbench-canvas">
          <div className="canvas-mesh-pattern"></div>
          
          <div className="canvas-svg-container">
            {currentSystem.svg}

            {/* Absolute Hotspots centered on the technical graphic */}
            {currentSystem.hotspots.map((hs) => (
              <button
                key={hs.id}
                className={`workbench-hotspot ${activeHotspot === hs.id ? "active-hotspot" : ""}`}
                style={{ left: hs.x, top: hs.y }}
                onMouseEnter={() => setActiveHotspot(hs.id)}
                onClick={() => setActiveHotspot(hs.id)}
                aria-label={`Show specifications for ${hs.name}`}
              >
                {hs.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import {
  ArrowUpRight,
  Braces,
  Database,
  Globe2,
  Workflow,
  Layers3,
} from "lucide-react";
export function SystemVisual() {
  return (
    <div
      className="system-visual"
      aria-label="Conceptual diagram connecting technology, operations, automation, and markets"
    >
      <div className="visual-meta">
        <span>
          <i /> A CONNECTED APPROACH
        </span>
        <span>SYS. / 001</span>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <svg className="connections" viewBox="0 0 560 460" aria-hidden="true">
        <path d="M280 225 L120 125 M280 225 L440 115 M280 225 L120 335 M280 225 L440 330" />
        <path
          className="signal"
          d="M120 125 L280 225 L440 330 M440 115 L280 225 L120 335"
        />
      </svg>
      <div className="system-core">
        <span className="core-monogram">
          mb<span>.</span>
        </span>
        <div>SYSTEMS THINKING</div>
      </div>
      <div className="node node-tech">
        <span className="node-icon blue">
          <Braces size={22} />
        </span>
        <div>
          <small>01 / BUILD</small>
          <strong>Technology</strong>
        </div>
      </div>
      <div className="node node-ops">
        <span className="node-icon">
          <Layers3 size={21} />
        </span>
        <div>
          <small>02 / STRUCTURE</small>
          <strong>Operations</strong>
        </div>
      </div>
      <div className="node node-auto">
        <span className="node-icon">
          <Workflow size={22} />
        </span>
        <div>
          <small>03 / SIMPLIFY</small>
          <strong>Automation</strong>
        </div>
      </div>
      <div className="node node-market">
        <span className="node-icon amber">
          <Globe2 size={22} />
        </span>
        <div>
          <small>04 / CONNECT</small>
          <strong>Markets</strong>
        </div>
      </div>
      <span className="data-node">
        <Database size={14} /> DATA & INTELLIGENCE
      </span>
      <div className="visual-bottom">
        <span>Technical thinking. Commercial perspective.</span>
        <ArrowUpRight size={17} />
      </div>
    </div>
  );
}
export function ProjectVisual({ id }: { id: string }) {
  if (id === "01")
    return (
      <div className="project-art trade-art">
        <div className="map-grid" />
        <svg viewBox="0 0 600 230" aria-hidden="true">
          <path
            className="map-outline"
            d="M100 55l42-18 30 15 17 27 27 5 12 24-9 28-24 1-8 31-20 31-15-7-13-41-23-19-24-35z M340 31l30 13 28 31 35 9 18 33-24 21-30-20-26-25-18-28z"
          />
          <path className="trade-route" d="M173 134 Q260 3 397 96" />
          <circle cx="173" cy="134" r="5" />
          <circle cx="397" cy="96" r="5" />
        </svg>
        <span className="map-label nigeria">
          NIGERIA <span>Supplier discovery</span>
        </span>
        <span className="map-label saudi">
          SAUDI ARABIA <span>Buyer intelligence</span>
        </span>
        <div className="art-badge">
          <i /> CROSS-BORDER OPPORTUNITY
        </div>
      </div>
    );
  return (
    <div className={"project-art flow-art art-" + id}>
      <span className="art-caption">
        {id === "02"
          ? "MARKETING OPERATIONS"
          : id === "03"
            ? "FINANCIAL SYSTEM ARCHITECTURE"
            : "CONCEPTUAL WORKFLOW"}
      </span>
      <div className="flow-nodes">
        {(id === "02"
          ? ["Campaign", "Lead", "Follow-up"]
          : id === "03"
            ? ["Customer", "Ledger", "Settlement"]
            : id === "04"
              ? ["Request", "Approval", "Audit"]
              : id === "05"
                ? ["Discover", "Manage", "Grow"]
                : id === "06"
                  ? ["Onboard", "Matter", "Collect"]
                  : ["Plan", "Create", "Publish"]
        ).map((x, i) => (
          <div key={x}>
            <span>
              {i === 0 ? (
                <Layers3 size={21} />
              ) : i === 1 ? (
                <Workflow size={21} />
              ) : (
                <ArrowUpRight size={21} />
              )}
            </span>
            <strong>{x}</strong>
            {i < 2 && <b>→</b>}
          </div>
        ))}
      </div>
      <span className="concept-label">
        ILLUSTRATIVE SYSTEM CONCEPT · NOT A PRODUCT SCREENSHOT
      </span>
    </div>
  );
}

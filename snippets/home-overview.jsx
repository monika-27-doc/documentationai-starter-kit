export const description = "Home page overview, styled after the External Sources documents-list design"

export const HomeOverview = () => {
  const icons = {
    zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
    layers: <><path d="m12 2 10 5-10 5L2 7z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></>,
    code: <><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    help: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  }

  const rows = [
    { href: "/quickstart", icon: "zap", name: "Quickstart", meta: "The minimal setup flow for new readers", tone: "green", section: "Start here", pages: 1 },
    { href: "/concepts", icon: "layers", name: "Core Concepts", meta: "How pages, navigation and components fit together", tone: "green", section: "Start here", pages: 1 },
    { href: "/components", icon: "code", name: "Components", meta: "Images, Cards, Code, Callouts, Steps and Tabs", tone: "blue", section: "Documentation", pages: 7 },
    { href: "/authentication", icon: "lock", name: "Authentication", meta: "Auth guide plus sample endpoints from openapi.yaml", tone: "amber", section: "API Reference", pages: 1 },
    { href: "/help-center", icon: "help", name: "Help Center", meta: "FAQs, troubleshooting and step-by-step guides", tone: "gray", section: "Help Center", pages: 4 },
    { href: "/changelog", icon: "clock", name: "Changelog", meta: "What changed in each release", tone: "gray", section: "Changelog", pages: 1 },
  ]

  const Svg = ({ children, width = 1.8, size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
  )

  return (
    <div className="dt-home">
      <div className="dt-head">
        <div className="dt-head-text">
          <span className="dt-title">Browse the documentation</span>
          <span className="dt-sub">Guides, components and API reference for this site, all in one place.</span>
        </div>
        <a className="dt-btn" href="/quickstart">
          <Svg width={2} size={15}>{icons.zap}</Svg>
          <span>Get started</span>
        </a>
      </div>

      <div className="dt-table">
        <div className="dt-row dt-row-head">
          <span />
          <span>Name</span>
          <span className="dt-col-section">Section</span>
          <span className="dt-col-pages">Pages</span>
          <span />
        </div>
        {rows.map((r) => (
          <a key={r.href} className="dt-row" href={r.href}>
            <div className="dt-icon"><Svg>{icons[r.icon]}</Svg></div>
            <div className="dt-name">
              <strong>{r.name}</strong>
              <span>{r.meta}</span>
            </div>
            <div className="dt-pill-cell"><span className={"dt-pill dt-pill-" + r.tone}>{r.section}</span></div>
            <span className="dt-count">{r.pages}</span>
            <span className="dt-chev"><Svg width={2}><path d="m9 18 6-6-6-6" /></Svg></span>
          </a>
        ))}
      </div>

      <span className="dt-note">This site ships with placeholder content. Edit the text, links and examples so they match your product before sharing it.</span>
    </div>
  )
}

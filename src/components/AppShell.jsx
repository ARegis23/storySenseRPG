import { ChevronLeft, ChevronRight, Dice5, Github, ShieldCheck } from 'lucide-react';
import { pages } from '../data/appData';
import Button from './Button';

export default function AppShell({ pageIndex, setPageIndex, children }) {
  const previous = () => setPageIndex((current) => Math.max(current - 1, 0));
  const next = () => setPageIndex((current) => Math.min(current + 1, pages.length - 1));

  return (
    <main className="app-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="grid-overlay" />

      <aside className="sidebar glass-card">
        <div className="brand">
          <div className="brand-icon">
            <Dice5 size={28} />
          </div>
          <div>
            <strong>Story Sense RPG</strong>
            <span>Protótipo navegável</span>
          </div>
        </div>

        <nav className="step-list" aria-label="Navegação do protótipo">
          {pages.map((page, index) => (
            <button
              key={page.id}
              type="button"
              className={`step-button ${index === pageIndex ? 'active' : ''} ${index < pageIndex ? 'done' : ''}`}
              onClick={() => setPageIndex(index)}
            >
              <span className="step-number">{index + 1}</span>
              <span>{page.label}</span>
            </button>
          ))}
        </nav>

        <div className="ethics-box">
          <ShieldCheck size={20} />
          <div>
            <strong>Uso ético</strong>
            <p>Este protótipo não coleta dados reais. Câmera e microfone são apenas indicação visual.</p>
          </div>
        </div>

        <a className="github-link" href="https://github.com/" target="_blank" rel="noreferrer">
          <Github size={18} />
          Portfólio GitHub
        </a>
      </aside>

      <section className="page-area">
        <div className="page-content">{children}</div>

        <footer className="pagination glass-card">
          <Button variant="secondary" onClick={previous} icon={ChevronLeft}>
            Voltar
          </Button>
          <span>
            Tela {pageIndex + 1} de {pages.length} • {pages[pageIndex].label}
          </span>
          <Button variant="secondary" onClick={next} icon={ChevronRight}>
            Avançar
          </Button>
        </footer>
      </section>
    </main>
  );
}

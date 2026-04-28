import { Camera, ChevronRight, Clock, Mic, Pause, Radio } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

export default function ObservationPage({ goTo }) {
  return (
    <div>
      <PageHeader
        eyebrow="Tela 4"
        title="Observação da mesa"
        description="Tela de acompanhamento da análise. Nesta fase visual, o app simula temporizador, status e aviso de câmera/microfone."
        icon={Radio}
      />

      <div className="observation-grid">
        <Card className="timer-card">
          <div className="timer-circle">
            <Clock size={42} />
            <strong>60:00</strong>
            <span>minutos de socialização inicial</span>
          </div>
          <Badge color="green">Análise em andamento</Badge>
          <p>
            Na versão real, a IA analisaria o comportamento geral do grupo durante uma conversa inicial, antes da aventura começar.
          </p>
          <div className="fake-buttons center">
            <Button variant="secondary" icon={Pause}>Pausar</Button>
            <Button onClick={() => goTo('painel')} icon={ChevronRight}>Encerrar análise</Button>
          </div>
        </Card>

        <div className="stacked-cards">
          <Card>
            <h2>Avisos ativos</h2>
            <div className="signal-row red"><Camera /> Câmera ativa</div>
            <div className="signal-row red"><Mic /> Microfone ativo</div>
          </Card>

          <Card>
            <h2>Leituras simuladas</h2>
            <ul>
              <li>Interesse alto por investigação e dedução.</li>
              <li>Boa resposta a tensão social entre personagens.</li>
              <li>Grupo alterna humor e drama com facilidade.</li>
              <li>Baixa necessidade de combate constante.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

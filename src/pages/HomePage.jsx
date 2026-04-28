import { Brain, Play, Sparkles } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';

export default function HomePage({ goTo }) {
  return (
    <div className="hero-grid">
      <Card className="hero-card">
        <div className="logo-mark">
          <Brain size={34} />
          <div>
            <span>IA para RPG de mesa</span>
            <strong>Story Sense RPG</strong>
          </div>
        </div>

        <h1>Um assistente narrativo para mestres criarem aventuras mais conectadas aos jogadores.</h1>
        <p>
          Protótipo web navegável, sem backend, criado para demonstrar o fluxo real de uma aplicação que coleta consentimento,
          simula observação da mesa e gera apoio narrativo ao mestre.
        </p>

        <div className="hero-actions">
          <Button onClick={() => goTo('how')} icon={Play}>Ver fluxo</Button>
          <Button onClick={() => goTo('login')} icon={Sparkles} variant="secondary">Entrar no protótipo</Button>
        </div>
      </Card>

      <div className="stacked-cards">
        <Card>
          <Badge color="gold">Objetivo do trabalho</Badge>
          <h2>Responder ao problema</h2>
          <p>
            Como uma IA poderia ajudar mestres de RPG a adaptar histórias, desafios e NPCs de acordo com o perfil da mesa?
          </p>
        </Card>

        <Card>
          <Badge color="green">Demonstração</Badge>
          <h2>Sem backend por enquanto</h2>
          <p>
            As telas são navegáveis e exibem o caminho do usuário. A captura de áudio, vídeo e geração por IA ficam representadas
            visualmente para apresentação acadêmica e portfólio.
          </p>
        </Card>
      </div>
    </div>
  );
}

import { ChevronRight, Sparkles, Users } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import { players } from '../data/appData';

export default function MasterPanelPage({ goTo }) {
  return (
    <div>
      <PageHeader
        eyebrow="Tela 5"
        title="Painel do mestre"
        description="O mestre recebe uma leitura narrativa da mesa, com perfis sugeridos e recomendações para conduzir a aventura."
        icon={Users}
      />

      <div className="panel-grid">
        <div className="player-cards">
          {players.map((player) => (
            <Card key={player.name}>
              <div className="card-title-line">
                <div className="avatar">{player.name[0]}</div>
                <div>
                  <h2>{player.name}</h2>
                  <Badge>{player.role}</Badge>
                </div>
              </div>
              <p>{player.profile}</p>
              <div className="suggestion-box">
                <strong>Dica ao mestre:</strong>
                <span>{player.suggestion}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="stacked-cards">
          <Card>
            <h2>Tom recomendado</h2>
            <div className="bar-line"><span>Investigação</span><div><i style={{ width: '88%' }} /></div><b>88%</b></div>
            <div className="bar-line"><span>Interpretação</span><div><i style={{ width: '76%' }} /></div><b>76%</b></div>
            <div className="bar-line"><span>Combate</span><div><i style={{ width: '42%' }} /></div><b>42%</b></div>
          </Card>

          <Card>
            <h2><Sparkles size={22} /> Recomendação da IA</h2>
            <p>
              Gerar uma aventura de mistério em D&D 5e, com assassinato entre convidados, pistas contraditórias,
              NPCs manipuladores e poucas cenas de combate.
            </p>
            <Button onClick={() => goTo('campanha')} icon={ChevronRight}>Gerar aventura</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

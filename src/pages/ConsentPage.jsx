import { ChevronRight, ShieldCheck } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import { players } from '../data/appData';

export default function ConsentPage({ goTo }) {
  return (
    <div>
      <PageHeader
        eyebrow="Tela 3"
        title="Consentimento dos jogadores"
        description="Antes da observação, cada jogador precisa aceitar participar e entender como seus dados seriam usados."
        icon={ShieldCheck}
      />

      <div className="two-columns">
        <Card>
          <h2>Termo de participação</h2>
          <p>
            O Story Sense RPG analisaria padrões gerais de interação da mesa, como preferência por investigação, combate,
            interpretação, liderança e tomada de decisão. Em uma versão real, o uso dependeria de consentimento claro,
            possibilidade de recusa e controle do mestre sobre a sessão.
          </p>
          <a className="text-link" href="#privacidade">Como meus dados serão usados?</a>

          <div className="summary-box">
            <strong>Importante para o trabalho</strong>
            <p>
              Nesta versão de portfólio não há gravação, backend ou envio de dados. A tela apenas demonstra o requisito ético do produto.
            </p>
          </div>
        </Card>

        <Card>
          <h2>Status dos jogadores</h2>
          <div className="player-list">
            {players.map((player) => (
              <article key={player.name} className="player-row">
                <div className="avatar">{player.name[0]}</div>
                <div>
                  <strong>{player.name}</strong>
                  <span>Participante da mesa</span>
                </div>
                <Badge color={player.status === 'Aceitou' ? 'green' : 'gold'}>{player.status}</Badge>
              </article>
            ))}
          </div>

          <div className="fake-buttons">
            <Button variant="success">Aceito participar</Button>
            <Button variant="danger">Não aceito participar</Button>
          </div>

          <div className="align-right">
            <Button onClick={() => goTo('observacao')} icon={ChevronRight}>Iniciar observação</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

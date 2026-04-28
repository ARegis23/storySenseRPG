import { Download, Edit3, ScrollText } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import { campaign } from '../data/appData';

export default function CampaignPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Tela 6"
        title="Campanha gerada"
        description="Resultado final do fluxo: um roteiro editável, com título, sinopse, cenas, NPCs, desafios e sistema recomendado."
        icon={ScrollText}
      />

      <div className="campaign-grid">
        <Card className="campaign-main">
          <div className="badge-row">
            <Badge>{campaign.system}</Badge>
            <Badge color="gold">{campaign.tone}</Badge>
          </div>
          <h2>{campaign.title}</h2>
          <p>{campaign.synopsis}</p>

          <div className="summary-box">
            <strong>Utilidade prática</strong>
            <p>
              O mestre não recebe uma aventura fechada como prisão criativa. Ele recebe uma base editável para revisar,
              adaptar e levar para a mesa.
            </p>
          </div>

          <div className="fake-buttons">
            <Button variant="secondary" icon={Edit3}>Editar</Button>
            <Button icon={Download}>Exportar roteiro</Button>
          </div>
        </Card>

        <div className="stacked-cards">
          <Card>
            <h2>Cenas</h2>
            <ol className="content-list">
              {campaign.scenes.map((scene) => <li key={scene}>{scene}</li>)}
            </ol>
          </Card>

          <Card>
            <h2>NPCs</h2>
            <ul className="content-list">
              {campaign.npcs.map((npc) => <li key={npc}>{npc}</li>)}
            </ul>
          </Card>

          <Card>
            <h2>Desafios</h2>
            <ul className="content-list">
              {campaign.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

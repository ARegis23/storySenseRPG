import { MapPinned } from 'lucide-react';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import { howItWorks } from '../data/appData';

export default function HowItWorksPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Fluxo do produto"
        title="Como o Story Sense funciona"
        description="Uma visão geral da jornada: criação da mesa, acordo dos jogadores, observação simulada, análise narrativa, geração de conteúdo e revisão do mestre."
        icon={MapPinned}
      />

      <div className="process-grid">
        {howItWorks.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="process-card">
              <Icon className="process-icon" size={34} />
              <strong>{index + 1}. {item.title}</strong>
              <p>{item.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

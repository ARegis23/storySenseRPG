import { Sparkles } from 'lucide-react';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import { features } from '../data/appData';

export default function FeaturesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Requisitos visuais"
        title="Funcionalidades principais"
        description="Tela de apresentação das funções planejadas para o produto, útil para o trabalho, para banca e para exibição no GitHub."
        icon={Sparkles}
      />

      <Card>
        <div className="features-list">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="feature-item">
                <Icon size={22} />
                <div>
                  <strong>{feature.title}</strong>
                  <p>{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

import { BookOpen, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { FormField, SelectField } from '../components/FormField';
import PageHeader from '../components/PageHeader';

export default function CreateTablePage({ goTo }) {
  return (
    <div>
      <PageHeader
        eyebrow="Tela 2"
        title="Criar nova mesa"
        description="Aqui o mestre define os parâmetros básicos da campanha. Os campos são visuais por enquanto, mas já mostram como seria o caminho real do app."
        icon={BookOpen}
      />

      <Card>
        <div className="form-grid">
          <FormField label="Nome da campanha" value="O Assassinato no Solar Blackthorn" />
          <SelectField label="Sistema base" value="D&D 5e" options={["D&D 5e", "GUMSHOE", "Call of Cthulhu", "Sistema próprio", "Outro"]} />
          <FormField label="Número de jogadores" value="4" type="number" />
          <SelectField label="Duração" value="3 horas" options={["1 hora", "2 horas", "3 horas", "4 horas", "Campanha longa"]} />
          <SelectField label="Tom da aventura" value="Mistério sombrio" options={["Mistério sombrio", "Fantasia heroica", "Terror investigativo", "Intriga política", "Aventura leve"]} />
          <SelectField label="Nível de experiência" value="Intermediário" options={["Iniciante", "Intermediário", "Avançado", "Grupo misto"]} />
        </div>

        <div className="summary-box">
          <h3>Utilidade desta etapa</h3>
          <p>
            A IA usaria esses dados para ajustar linguagem, ritmo, quantidade de combate, nível de complexidade das pistas e tipo de narrativa recomendada.
          </p>
        </div>

        <div className="align-right">
          <Button onClick={() => goTo('consentimento')} icon={ChevronRight}>Continuar</Button>
        </div>
      </Card>
    </div>
  );
}

import { LogIn, UserPlus, Moon } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

export default function LoginPage({ goTo }) {
  return (
    <div>
      <PageHeader
        eyebrow="Tela 1"
        title="Login do mestre"
        description="Entrada inicial do protótipo. Em uma versão real, o mestre acessaria sua conta, mesas salvas e campanhas anteriores."
        icon={Moon}
      />

      <div className="login-layout">
        <Card className="login-card">
          <div className="app-symbol">SSRPG</div>
          <h2>Story Sense RPG</h2>
          <p>
            Painel de apoio narrativo com IA para criar aventuras personalizadas a partir do comportamento e estilo do grupo.
          </p>

          <div className="login-actions">
            <Button onClick={() => goTo('mesa')} icon={LogIn}>Entrar</Button>
            <Button onClick={() => goTo('mesa')} icon={UserPlus} variant="secondary">Criar conta</Button>
          </div>
        </Card>

        <Card className="visual-note">
          <h2>Visual proposto</h2>
          <ul>
            <li>Interface escura, com mapa, dados e pergaminho digital.</li>
            <li>Foco em apresentação para portfólio e trabalho acadêmico.</li>
            <li>Login apenas demonstrativo, sem autenticação real nesta etapa.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

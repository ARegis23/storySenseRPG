import {
  AudioLines,
  Brain,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Dice5,
  FileText,
  Fingerprint,
  MapPinned,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Wand2,
  Users,
} from 'lucide-react';

export const pages = [
  { id: 'home', label: 'Início' },
  { id: 'how', label: 'Como funciona' },
  { id: 'features', label: 'Funcionalidades' },
  { id: 'login', label: 'Login' },
  { id: 'mesa', label: 'Nova mesa' },
  { id: 'consentimento', label: 'Consentimento' },
  { id: 'observacao', label: 'Observação' },
  { id: 'painel', label: 'Painel do mestre' },
  { id: 'campanha', label: 'Campanha gerada' },
];

export const howItWorks = [
  {
    title: 'Criação',
    description: 'O Mestre registra a mesa no sistema e define os parâmetros básicos.',
    icon: Dice5,
  },
  {
    title: 'Acordo',
    description: 'Os jogadores leem e aceitam os termos de consentimento e privacidade.',
    icon: ClipboardCheck,
  },
  {
    title: 'Escuta',
    description: 'O sistema analisa a socialização inicial, captando áudio e vídeo em tempo real.',
    icon: AudioLines,
  },
  {
    title: 'Análise',
    description: 'O Story Sense processa perfis narrativos e identifica estilos da mesa.',
    icon: Brain,
  },
  {
    title: 'Geração',
    description: 'A IA sugere arquétipos, desafios, NPCs ocultos, pistas e cenas.',
    icon: Wand2,
  },
  {
    title: 'Revisão',
    description: 'O Mestre revisa o material, edita os ganchos e inicia sua aventura.',
    icon: ScrollText,
  },
];

export const features = [
  {
    title: 'Cadastro de Mesas',
    description: 'Gerenciamento rápido e intuitivo para múltiplas campanhas e sistemas.',
    icon: Users,
  },
  {
    title: 'Consentimento Integrado',
    description: 'Módulo transparente para aceite, privacidade e uso responsável dos dados.',
    icon: ShieldCheck,
  },
  {
    title: 'Análise Multimodal',
    description: 'Simulação de captura local por câmera e microfone, sem armazenamento permanente no protótipo.',
    icon: Camera,
  },
  {
    title: 'Perfis Narrativos',
    description: 'Identificação de estilos como investigadores, combatentes, diplomatas e estrategistas.',
    icon: Fingerprint,
  },
  {
    title: 'Sugestão de Personagens',
    description: 'Arquétipos sob medida baseados no perfil do grupo e no tom da aventura.',
    icon: Sparkles,
  },
  {
    title: 'Geração de Desafios',
    description: 'Criação de enigmas, pistas, monstros, conflitos e dilemas para a sessão.',
    icon: Dice5,
  },
  {
    title: 'One-Shots Dinâmicos',
    description: 'Campanhas curtas completas, geradas e conectadas de forma narrativa.',
    icon: FileText,
  },
  {
    title: 'Edição do Mestre',
    description: 'Dashboard central para ajustar, reescrever e aprovar as ideias da IA.',
    icon: MapPinned,
  },
];

export const players = [
  {
    name: 'Lia',
    status: 'Aceitou',
    role: 'Investigadora intuitiva',
    profile: 'Observa detalhes, cruza pistas e costuma conduzir as hipóteses do grupo.',
    suggestion: 'Entregar pistas visuais, documentos antigos e decisões morais discretas.',
  },
  {
    name: 'Caio',
    status: 'Aceitou',
    role: 'Executor impulsivo',
    profile: 'Prefere ação rápida, riscos visíveis e cenas com consequência imediata.',
    suggestion: 'Usar pressão de tempo, perseguições e ameaças físicas controladas.',
  },
  {
    name: 'Mara',
    status: 'Pendente',
    role: 'Diplomata estratégica',
    profile: 'Valoriza negociação, leitura social, alianças e manipulação elegante.',
    suggestion: 'Criar NPCs ambíguos, segredos políticos e escolhas de confiança.',
  },
  {
    name: 'Ruan',
    status: 'Aceitou',
    role: 'Caçador de enigmas',
    profile: 'Procura padrões, códigos e explicações para elementos estranhos da mesa.',
    suggestion: 'Inserir símbolos recorrentes, mapas incompletos e cifras fragmentadas.',
  },
];

export const campaign = {
  title: 'O Assassinato no Solar Blackthorn',
  system: 'D&D 5e',
  tone: 'Mistério sombrio com intriga social',
  synopsis:
    'Durante um banquete entre famílias rivais, um nobre é encontrado morto em uma sala trancada. Cada personagem parece ter um motivo, mas o verdadeiro assassino manipula pistas, memórias e testemunhas para transformar o grupo em suspeito.',
  scenes: [
    'Cena 1: Chegada dos convidados ao solar durante uma tempestade.',
    'Cena 2: Banquete interrompido por um grito vindo da biblioteca.',
    'Cena 3: Investigação de cartas, taças, marcas no chão e depoimentos contraditórios.',
    'Cena 4: Confronto no salão dos espelhos, onde a versão final dos fatos é revelada.',
  ],
  npcs: [
    'Lorde Varian Blackthorn, anfitrião orgulhoso e cheio de dívidas.',
    'Dama Sorelle, viúva elegante com informações demais.',
    'Capitão Merek, guarda contratado que mente sobre onde estava.',
    'Escriba Nalia, responsável pelos registros da casa e pelas cartas desaparecidas.',
  ],
  challenges: [
    'Separar pistas verdadeiras de pistas plantadas.',
    'Convencer NPCs a revelar versões incompletas dos fatos.',
    'Resolver uma cifra escondida no brasão da família.',
    'Impedir que um inocente seja acusado antes da última cena.',
  ],
};

import { useMemo, useState } from 'react';
import AppShell from './components/AppShell';
import { pages } from './data/appData';
import CampaignPage from './pages/CampaignPage';
import ConsentPage from './pages/ConsentPage';
import CreateTablePage from './pages/CreateTablePage';
import FeaturesPage from './pages/FeaturesPage';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import LoginPage from './pages/LoginPage';
import MasterPanelPage from './pages/MasterPanelPage';
import ObservationPage from './pages/ObservationPage';

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);

  function goTo(pageId) {
    const nextIndex = pages.findIndex((page) => page.id === pageId);
    if (nextIndex >= 0) setPageIndex(nextIndex);
  }

  const currentPage = useMemo(() => {
    const currentId = pages[pageIndex].id;

    const pageMap = {
      home: <HomePage goTo={goTo} />,
      how: <HowItWorksPage />,
      features: <FeaturesPage />,
      login: <LoginPage goTo={goTo} />,
      mesa: <CreateTablePage goTo={goTo} />,
      consentimento: <ConsentPage goTo={goTo} />,
      observacao: <ObservationPage goTo={goTo} />,
      painel: <MasterPanelPage goTo={goTo} />,
      campanha: <CampaignPage />,
    };

    return pageMap[currentId] || pageMap.home;
  }, [pageIndex]);

  return (
    <AppShell pageIndex={pageIndex} setPageIndex={setPageIndex}>
      {currentPage}
    </AppShell>
  );
}

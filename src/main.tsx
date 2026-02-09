import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './components/extraTasks/App.tsx';
// import { InputTitle } from './inputTitle.tsx';
// import { Header } from './components/Header.tsx';
// import { TaskDetails } from './components/TaskDetails.tsx';
// import { TasksList } from './components/TasksList.tsx';
// import { Footer } from './components/Footer.tsx';
// import { PageTitle } from './components/PageTitle.tsx';
// import { Users } from './components/extraTasks/Users.tsx';
// import { Game } from './components/extraTasks/game.tsx';
import { MainPage } from './ui/MainPage.tsx';
//import { TogglePage } from './ui/extraTasks/togglePage.tsx';

// createRoot(document.getElementById('root')!).render(<InputTitle />);
//createRoot(document.getElementById('root')!).render(<App />);
createRoot(document.getElementById('root')!).render(<MainPage />);

//createRoot(document.getElementById('root')!).render(<Users />);
// createRoot(document.getElementById('root')!).render(<Game />);

//createRoot(document.getElementById('root')!).render(<TogglePage />);

import { TaskDetails } from './TaskDetails';
import { TasksList } from './TasksList';
import { useTaskSelection } from '../bll/useTaskSelection';
import { Counter, CounterWithoutAutoReset } from './CounterPage';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const { selectedTaskId, boardId, onTaskSelected } = useTaskSelection();

  return (
    <div>
      <div className={styles.mainPage}>
        <TasksList
          selectedTaskId={selectedTaskId}
          onTaskSelected={onTaskSelected}
        />
        <TaskDetails boardId={boardId} selectedTaskId={selectedTaskId} />
      </div>
      <Counter />
      <CounterWithoutAutoReset />
    </div>
  );
};

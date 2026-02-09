import { TasksItem } from './TaskItem';
import { useTasks } from '../bll/useTasks';

type Props = {
  selectedTaskId: string | null;
  onTaskSelected: (
    boardId: string | null,
    selectedTaskId: string | null,
  ) => void;
};

export const TasksList = ({ selectedTaskId, onTaskSelected }: Props) => {
  const { tasks } = useTasks();

  const handleResetClick = () => {
    onTaskSelected?.(null, null);
  };

  if (tasks === null) {
    return (
      <div className="todo-container">
        <h1>Список дел</h1>
        <span>Загрузка...</span>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <button onClick={handleResetClick}>reset</button>
      <ul className="todo-list">
        {tasks.map((task: any) => {
          return (
            <TasksItem
              key={task.id}
              task={task}
              isSelected={task.id === selectedTaskId}
              onTaskSelected={onTaskSelected}
            />
          );
        })}
      </ul>
    </div>
  );
};

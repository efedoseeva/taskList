import type { TaskListItemOutput } from '../dal/api-fake';
import styles from './TaskItem.module.css';
import clsx from 'clsx';

type Props = {
  isSelected: boolean;
  onTaskSelected: (trackId: string, boardId: string) => void;
  task: TaskListItemOutput;
};

export const TasksItem = ({ task, isSelected, onTaskSelected }: Props) => {
  const bgColor = [
    styles.bgColorLight,
    styles.bgColorLight2,
    styles.bgColorMiddle,
    styles.bgColorDark,
    styles.bgColorDark2,
  ];

  const className = clsx(
    `backgroundColor: ${bgColor[task.attributes.priority]}`,
    {
      [styles.task]: true,
      [styles.selected]: isSelected,
      [bgColor[task.attributes.priority]]: true,
    },
  );
  console.log({ className });
  return (
    <div className={className}>
      <li
        onClick={() => {
          onTaskSelected(task.id, task.attributes.boardId);
        }}
      >
        <div>Заголовок: {task.attributes.title}</div>
        <div className="item-status">
          <div>Статус: </div>
          <input type="checkbox" />
        </div>
        <div>
          Дата создания задачи:{' '}
          {new Date(task.attributes.addedAt).toLocaleDateString()}
        </div>
      </li>
    </div>
  );
};

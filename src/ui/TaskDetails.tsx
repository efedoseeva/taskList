import { useTaskDetails } from '../bll/useTaskDetails';
import styles from './TaskDetails.module.css';

type Props = {
  selectedTaskId: string | null;
  boardId: string | null;
};

export const TaskDetails = ({ boardId, selectedTaskId }: Props) => {
  const { taskDetails } = useTaskDetails(selectedTaskId, boardId);

  // const selectedTaskId = '4f310604-82b5-4afd-b9a4-ddf12dfac0a3';
  // const boardId = '13923117-72de-4788-a7f0-4c42f162a5ab';

  return (
    <div className={styles.taskDetails}>
      <h2>Details</h2>
      {!selectedTaskId && 'Task is not selected'}
      {!taskDetails && selectedTaskId && 'Loading...'}
      {taskDetails &&
        selectedTaskId &&
        taskDetails.id !== selectedTaskId &&
        'Loading...'}
      {taskDetails && selectedTaskId && (
        <div>
          <div>
            <div>
              <ul>
                <li>Title: {taskDetails.attributes.title}</li>
                <li>Board Title: {taskDetails.attributes.boardTitle}</li>
                <li>
                  Description:{' '}
                  {taskDetails.attributes.description ?? 'no description'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

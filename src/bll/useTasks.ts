import { useEffect, useState } from "react";
import { getTasks, type TaskListItemOutput } from '../dal/api';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Array<TaskListItemOutput> | null>(null);

  useEffect(() => {
    console.log('effect');
    getTasks().then((json) => {
      setTasks(json.data);
    });
  }, []);
  return {tasks}
}
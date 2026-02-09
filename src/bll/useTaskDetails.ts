import { useEffect, useState } from "react";
import { getTask, type TaskDetailsData } from '../dal/api';

export function useTaskDetails(selectedTaskId: string | null, boardId: string | null) {
  const [taskDetails, setTaskDetails] = useState<TaskDetailsData | null>(null)
 
//   const [selectedTask, setSelectedTask] =
//     useState<GetTaskDetailsOutputData | null>(null);

      useEffect(() => {
    console.log('fetching details');
    if (!boardId || !selectedTaskId) {
      return;
    }
    getTask(boardId, selectedTaskId).then((json) => {
      setTaskDetails(json.data);
    });
  }, [selectedTaskId]);
 
  return { taskDetails }
}
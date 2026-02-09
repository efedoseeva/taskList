import { useState } from "react";

  
  export function useTaskSelection() {
  const [boardId, setBoardId] = useState<string | null>(null);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  return {selectedTaskId,
    boardId,
    onTaskSelected :(idTask: string | null, idBoard: string | null) => {
        setBoardId(idBoard);
        setSelectedTaskId(idTask)
    },
  }
}

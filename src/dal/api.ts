export type TaskDetailsDto = {
  status: number;
  title: string;
  priority: number;
  addedAt: string;
  boardId: string;
};

export type TaskListItemOutput = {
  id: string;
  attributes: TaskDetailsDto;
};

export type GlobalTaskListResponse = {
  data: Array<TaskListItemOutput>
}


export type TaskDetailsData = {
  id: string;
  attributes: {
    title: string;
    boardTitle: string;
    description: string | null;
  };
};


export type GetTaskOutput = { data: TaskDetailsData }

export const getTask = (boardId:string,selectedTaskId:string ) => {
const promise: Promise<GetTaskOutput> = fetch(
      'https://trelly.it-incubator.app/api/1.0/boards/' +
        boardId +
        '/tasks/' +
        selectedTaskId,
      {
        headers: {
          'api-key': 'aa8b4436-b34a-4a95-8b2b-ace9f30a5f01',
        },
      }
    )
      .then((res) => res.json())
      return promise
}

export const getTasks= () => {
const promise:Promise<GlobalTaskListResponse>=fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', 
    {
      headers: {
        'api-key': 'aa8b4436-b34a-4a95-8b2b-ace9f30a5f01',
      },
    })
      .then((res) => res.json())
      return promise
}

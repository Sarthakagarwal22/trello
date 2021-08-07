import { Droppable } from 'react-beautiful-dnd'

import { KanBanTask } from '../KanBanTask';
import { KanBanAddTask } from '../KanBanAddTask';

import './kanbanStatusQueue.css'
export const KanBanStatusQueue = ({listOfTasks, index, updateBoardData, title}) => {
    
    return  (
        <Droppable droppableId={`${listOfTasks.taskQueueId}-${index}`}>
        {(provided, snapshot) => (
        <div 
            ref={provided.innerRef} 
            className="kanban-status-queue"
            {...provided.droppableProps}
        >
            <h1>{title}</h1>
            {listOfTasks.data.map((task, index) => {
                return (
                    <div key={task.id}>
                        <KanBanTask queueId={listOfTasks.taskQueueId} task={task} index={index} />
                    </div>
                );
            })}
            {
                listOfTasks.addACard &&
                <KanBanAddTask queueId={listOfTasks.taskQueueId} updateBoardData={updateBoardData} />
            }
        {provided.placeholder}
        </div>
        )}
        </Droppable>
    )

}
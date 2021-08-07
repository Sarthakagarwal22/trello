import { useState } from "react";
import { Draggable } from 'react-beautiful-dnd'

import { KanBanSubTask } from "./Components/KanBanSubTask";
 
import './KanBanTask.css'

export const KanBanTask = ({task, index, queueId}) => {

    const [taskOpen, _setTaskOpen] = useState(false);

    return(
        <Draggable draggableId={`${task.id}-${queueId}`} index={index}>
        {provided => (
        <div 
            className="kanban-status-queue-item" 
            onClick={()=>{_setTaskOpen(!taskOpen)}} 
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
        >
            <h3 className="kanban-status-queue-item-title">{task.title}</h3>
            {
                task.image_url &&
                <><img src={task.image_url} width={"95%"}/><br/><br/></>
            }
            { !taskOpen && 
                <>
                    {task.attachments && <span>{task.attachments.length} <b>Attachments</b></span>}
                    {task.subTasks && <span>{task.subTasks.length} <b>Sub Tasks</b></span>}
                </>
            }
            { taskOpen &&
                <div>
                <div className="kanban-status-queue-item-description">{task.description}</div>
                {task.attachments && 
                    <div> 
                    </div>
                }
                {
                    task.subTasks && 
                    <>
                    <h3>Sub Tasks</h3>
                    <ul>
                        {
                        task.subTasks.map((subTask, index) => 
                            <li key={`${subTask.id}-${index}`}><KanBanSubTask task={subTask}/></li> 
                        )}
                    </ul>
                    </>
                }
                </div>
            }
            <br/>
            <br/>
        </div>
        )}
        </Draggable>
    )
}
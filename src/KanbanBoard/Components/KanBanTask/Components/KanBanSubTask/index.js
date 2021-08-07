import { useState } from "react";

import './KanBanSubTask.css'

export const KanBanSubTask = ({task}) => {
    const [taskOpen, _setTaskOpen] = useState(false)

    const hanldeSubTaskClick = (event) => {
        event.stopPropagation();
        _setTaskOpen(!taskOpen)
    }

    return(
    <div className="kanban-status-subtask" onClick={hanldeSubTaskClick}>
        <h4 className="kanban-status-subtask-title">{task.title}</h4>
        { taskOpen &&
            <div className="kanban-status-subtask-description">{task.description}</div>
        }
    </div>
    )
}
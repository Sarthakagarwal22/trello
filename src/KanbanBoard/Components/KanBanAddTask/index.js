import { useState } from "react";

import { addData }from "../../Network/mockDataForBoard";

export const KanBanAddTask = ({queueId, updateBoardData}) => {
    const [showFormToAddData, _setShowFormToAddData] = useState(false);
    const [title, _setTitle] = useState("");
    const [description, _setDescription] = useState("");
    const [priority, _setPriority] = useState("");

    const addTask = async (event) => {
        event.preventDefault();
        _setShowFormToAddData(false);
        if(!title){
            alert("Title cant be empty");
            return
        }
        if(!priority){
            alert("Priority cant be empty")
            return
        }
        await addData({
            priority: priority,
            title: title,
            description: description,
            taskQueueId: queueId,
        })
        _setTitle("");
        _setDescription("");
        _setPriority("");
        updateBoardData();
    }

    return(
    <div>
        <h1 onClick={()=>{_setShowFormToAddData(!showFormToAddData)}}>Add Task</h1>
        {
            showFormToAddData &&
        <form onSubmit={addTask}>
            Title* : <input type="text" placeholder="Task Title" value={title} onChange={(event)=>{_setTitle(event.target.value)}} />
            <br/><br/>
            Description : <input type="text" placeholder="Task Description" value={description} onChange={(event)=>{_setDescription(event.target.value)}} />
            <br/><br/>
            Priority* : <input type="text" placeholder="Task Priority" value={priority} onChange={(event)=>{_setPriority(event.target.value)}} />
            <br/><br/>
            <input type="submit" value="Add Task" />
        </form>
        }
    </div>
)
}
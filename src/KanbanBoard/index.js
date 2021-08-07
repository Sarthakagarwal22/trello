
import { useEffect,useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'

import { getBoardData, updateBoardData } from './Network/mockDataForBoard';

import { KanBanStatusQueue } from './Components/KanBanStatusQueue'
import './KanBanBoard.css'

export const KanbanBoard = () => {

    const [loading, _setLoading] = useState(false);
    //TODO: Implement error 
    const [error, _setError] = useState(true);
    const [boardData, _setBoardData] = useState();

    useEffect(()=>{
        setBoardDataFromApi();
    },[])
    
    const setBoardDataFromApi = () => {
        // _setLoading(true)
        getBoardData().then(data=>{

            //TODO sort the array as per priority
            _setBoardData([...data.kanbanData]);
            // _setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            _setLoading(false);
        });
    }

    const onDragEnd = async ({ source, destination }) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) return null
    
        // If the source and destination columns are the same
        // AND if the index is the same, the item isn't moving
        if (
          source.droppableId === destination.droppableId &&
          destination.index === source.index
        )
          return null
    
        const sourceTaskQueueId = source.droppableId.split('-')[0];
        const destinationTaskQueueId = destination.droppableId.split('-')[0];
        const sourceTaskId = source.index;
        const destinationTaskId = destination.index;
        
        const reqBody = {
            source:{
                taskQueueId:sourceTaskQueueId,
                taskId:sourceTaskId
            },
            destination:{
                taskQueueId:destinationTaskQueueId,
                taskId:destinationTaskId
            }
        }

        try{
            await updateBoardData(reqBody);
            setBoardDataFromApi();
        }
        catch(error){
            console.log(error);
        }
      }

    return(
        <>
        {loading ? 
            <div className="main-board-loading-container">Loading...</div>
        :
            boardData &&
            <DragDropContext onDragEnd={onDragEnd}>
            <div className="main-kanban-board">
                {
                    boardData.map((status,index) =>
                        <div className="kanban-status-queue-container" key={`${status.title}-${index}`}>
                            <KanBanStatusQueue title={status.title} listOfTasks={status} index={index} updateBoardData={setBoardDataFromApi}/>
                        </div>
                    )
                }
            </div>
            </DragDropContext>
        }
        </>
    )
}

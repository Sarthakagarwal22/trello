import * as _ from "lodash";

let kanbanDataApiResponse = {
    status: "success",
    kanbanData: [
        {
            taskQueueId: "1",
            title: "Resources",
            addACard: true,
            data:[
                {
                    priority:"1",
                    id:"1243",
                    image_url:"https://placekitten.com/640/360",
                    title:"Financial and Growth Data",
                    description:"Financial and Growth Data for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    attachments:[
                        {
                            id:"234",
                            url:"https://placekitten.com/450/360",
                            type: "image"
                        },
                        {
                            id:"264",
                            url:"https://placekitten.com/480/960",
                            type: "image"
                        },
                        {
                            id:"134",
                            url:"https://placekitten.com/500/360",
                            type: "image"
                        }
                    ]
                    
                },
                {
                    priority:"2",
                    id:"1223",
                    title:"2017 Goals and KPIs",
                    description: "2017 Goals and KPIs for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    subTasks:[
                        {
                            id:"12342",
                            title: "2017 Goal 1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        },
                        {
                            id:"12342",
                            title: "2017 Goal 2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        },
                        {
                            id:"12342",
                            title: "2017 Goal 3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }
                    ]
                    
                },
                {
                    priority:"3",
                    id:"122342",
                    title:"Brand Guide",
                    description: "Brand Guide for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    attachments:[
                        {
                            id: "1833",
                            url: "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf",
                            type: "pdf"
                        }
                    ]
                }
            ]
        },
        {
            taskQueueId: "2",
            title: "To Do",
            addACard: true,
            data:[
                {
                    priority:"1",
                    id:"12431",
                    image_url:"https://placekitten.com/640/360",
                    title:"Financial and Growth Data",
                    description:"Financial and Growth Data for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    attachments:[
                        {
                            id:"234",
                            url:"https://placekitten.com/450/360",
                            type: "image"
                        },
                        {
                            id:"264",
                            url:"https://placekitten.com/480/960",
                            type: "image"
                        },
                        {
                            id:"134",
                            url:"https://placekitten.com/500/360",
                            type: "image"
                        }
                    ]
                    
                },
                {
                    priority:"2",
                    id:"12231",
                    title:"2017 Goals and KPIs",
                    description: "2017 Goals and KPIs for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    subTasks:[
                        {
                            id:"12342",
                            title: "2017 Goal 1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        },
                        {
                            id:"12342",
                            title: "2017 Goal 2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        },
                        {
                            id:"12342",
                            title: "2017 Goal 3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }
                    ]
                    
                },
                {
                    priority:"3",
                    id:"1242",
                    title:"Brand Guide",
                    description: "Brand Guide for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    attachments:[
                        {
                            id: "1833",
                            url: "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf",
                            type: "pdf"
                        }
                    ]
                }
            ]
        },
        {
            taskQueueId: "3",
            title: "Doing",
            addACard: true,
            data:[
                {
                    priority:"1",
                    id:"1243431",
                    image_url:"https://placekitten.com/640/360",
                    title:"Financial and Growth Data",
                    description:"Financial and Growth Data for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    attachments:[
                        {
                            id:"234",
                            url:"https://placekitten.com/450/360",
                            type: "image"
                        },
                        {
                            id:"264",
                            url:"https://placekitten.com/480/960",
                            type: "image"
                        },
                        {
                            id:"134",
                            url:"https://placekitten.com/500/360",
                            type: "image"
                        }
                    ]
                    
                },
                {
                    priority:"2",
                    id:"1223199",
                    title:"2017 Goals and KPIs",
                    description: "2017 Goals and KPIs for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    subTasks:[
                        {
                            id:"12342",
                            title: "2017 Goal 1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        },
                        {
                            id:"12342",
                            title: "2017 Goal 2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        },
                        {
                            id:"12342",
                            title: "2017 Goal 3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }
                    ]
                    
                },
                {
                    priority:"3",
                    id:"124258",
                    title:"Brand Guide",
                    description: "Brand Guide for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    attachments:[
                        {
                            id: "1833",
                            url: "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf",
                            type: "pdf"
                        }
                    ]
                }
            ]
        },
        {
            taskQueueId: "4",
            title: "Done",
            addACard: true,
            data:[
                {
                    priority:"1",
                    id:"1226731",
                    image_url:"https://placekitten.com/640/360",
                    title:"Financial and Growth Data",
                    description:"Financial and Growth Data for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    attachments:[
                        {
                            id:"23234",
                            url:"https://placekitten.com/450/360",
                            type: "image"
                        },
                        {
                            id:"223r64",
                            url:"https://placekitten.com/480/960",
                            type: "image"
                        },
                        {
                            id:"12334",
                            url:"https://placekitten.com/500/360",
                            type: "image"
                        }
                    ]
                    
                },
                {
                    priority:"2",
                    id:"1222331",
                    title:"2017 Goals and KPIs",
                    description: "2017 Goals and KPIs for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    subTasks:[
                        {
                            id:"12323442",
                            title: "2017 Goal 1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        },
                        {
                            id:"1232442",
                            title: "2017 Goal 2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        },
                        {
                            id:"1209342",
                            title: "2017 Goal 3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }
                    ]
                    
                },
                {
                    priority:"3",
                    id:"124287",
                    title:"Brand Guide",
                    description: "Brand Guide for our organisation looks like the following. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    attachments:[
                        {
                            id: "1833",
                            url: "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf",
                            type: "pdf"
                        }
                    ]
                }
            ]
        }
    ]
}

export const getBoardData = () => {
    return new Promise((resolve, reject)=>{
        resolve(kanbanDataApiResponse);
    })
}

export const updateBoardData = async (reqBody) => {

    const boardData = kanbanDataApiResponse.kanbanData;
    const sourceTaskId = _.get(reqBody, "source.taskId");
    const sourceTaskQueueId = _.get(reqBody, "source.taskQueueId");
    const destinationTaskId = _.get(reqBody, "destination.taskId");
    const destinationTaskQueueId = _.get(reqBody, "destination.taskQueueId");

    console.log(boardData
        ,sourceTaskId
        ,sourceTaskQueueId
        ,destinationTaskId
        ,destinationTaskQueueId)

    // Set start and end variables
    const startColumnIndex = _.findIndex(boardData, taskQueue => taskQueue.taskQueueId === sourceTaskQueueId);
    const endColumnIndex = _.findIndex(boardData, taskQueue => taskQueue.taskQueueId === destinationTaskQueueId);
    console.log(startColumnIndex, endColumnIndex)
    const start = boardData[startColumnIndex];
    const end = boardData[endColumnIndex];
    console.log(start, end)
    // If start is the same as end, we're in the same column
    if (start === end) {
        // Move the item within the list
        // Start by making a new list without the dragged item
        const newList = start.data.filter(
        (_, idx) => idx !== sourceTaskId
        )
        // Then insert the item at the right location
        newList.splice(destinationTaskId, 0, start.data[sourceTaskId])

        // Then create a new copy of the column object
        const newCol = { ...start, ...{data: newList}}
        boardData.splice(startColumnIndex, 1, newCol);
        console.log(boardData)
        return null
    } else {
    
        const newStartList = start.data.filter(
        (_, idx) => idx !== sourceTaskId
        )

        // Create a new start column
        const newStartCol = { ...start, ...{data: newStartList}}

        // Make a new end list array
        const newEndList = end.data

        // Insert the item into the end list
        newEndList.splice(destinationTaskId, 0, start.data[sourceTaskId])

        // Create a new end column
        const newEndCol = { ...end, ...{data: newEndList}}
        // Update the state
        boardData.splice(startColumnIndex, 1, newStartCol);
        boardData.splice(endColumnIndex, 1, newEndCol);
        console.log(boardData)
        return null
    }
}

let taskId = 10

export const addData = async (reqBody) => {

    const boardData = kanbanDataApiResponse.kanbanData;
    const newTask = {
        priority: reqBody.priority,
        title: reqBody.title,
        description: reqBody.description,
        taskQueueId: reqBody.taskQueueId,
        taskId: taskId++,
    }
    const columnIndex = _.findIndex(boardData, taskQueue => taskQueue.taskQueueId === reqBody.taskQueueId);
    const newList = boardData[columnIndex].data.filter(
        (_, idx) => idx !== reqBody.taskId
    )
    newList.push(newTask)
    boardData[columnIndex].data = newList
    return null
}
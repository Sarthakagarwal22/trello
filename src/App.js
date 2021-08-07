import './App.css';
import { KanbanBoard } from './KanbanBoard';

function App() {
  return (
    <div className="main-content-container">
      <h1>Trello Clone</h1>
      <ul>
      <li>Use a Desktop to view this site</li>
      <li>You can change the priority of any task by drag and drop</li>
      <li>You can change the status of any task using drag and drop</li>
      <li>You can add a new Task with title and description</li>
      <li>If there is an image associated, the status queue will show the image with task, or else just the title</li>
      <li>Clicking on Image, will reveal the description/subtasks, if any</li>
      <li>Subtasks can also be expanded</li>
      </ul>
      <KanbanBoard />
    </div>
  );
}

export default App;

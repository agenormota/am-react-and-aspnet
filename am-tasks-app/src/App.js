import "./App.css";


function App() {
  const tasks = [
    {
      id: 1,
      description: "First Task",
    },
    {
      id: 2,
      description: "Second Task",
    },
  ];
  return (
    <>
      <form>
        <input id="id" type="text" placeholder="id" />
        <input id="description" type="text" placeholder="description"/>
        <button>+ Task</button>
      </form>
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              {task.id} - {task.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

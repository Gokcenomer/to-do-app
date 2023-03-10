import Header from "./componenets/Header";

import AddTodo from "./componenets/AddTodo";
function App() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Header />
      <AddTodo />
    </div>
  );
}

export default App;

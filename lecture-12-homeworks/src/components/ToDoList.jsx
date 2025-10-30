import { Component } from "react";
import ToDoTask from "./ToDoTask";
import ToDoTaskNon from "./ToDoTaskNon";

class ToDoList extends Component {
  state = {
    inputVal: "",
    nontasks: [
      { number: 1, task: "Make Homework" },
      { number: 2, task: "Make todolist" },
    ],
    completed: [{ number: 3, task: "Make Food" }],
    counter: 4,
  };
  onChange = (event) => {
    this.setState({ inputVal: event.target.value });
  };
  onAdd = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      nontasks: [
        ...prevState.nontasks,
        { task: prevState.inputVal, number: prevState.counter },
      ],
      inputVal: "",
    }));
  };
  onComplete = (number) => {
    this.setState((prevState) => {
      const completedTask = prevState.nontasks.find(
        (el) => el.number === number
      );
      const updatedNonTasks = prevState.nontasks.filter(
        (el) => el.number !== number
      );

      return {
        completed: [...prevState.completed, completedTask],
        nontasks: updatedNonTasks,
      };
    });
  };
  onRemove = (number) => {
    this.setState((prevState) => ({
      completed: prevState.completed.filter((el) => el.number != number),
    }));
  };
  onNonComplete = (number) => {
    this.setState((prevState) => {
      const actual = prevState.completed.find((el) => el.number == number);
      const filtered = prevState.completed.filter((el) => el.number != number);

      return {
        nontasks: [...prevState.nontasks, actual],
        completed: filtered,
      };
    });
  };
  render() {
    return (
      <div className="tasks_box">
        <form className="form">
          <input
            onChange={this.onChange}
            type="text"
            placeholder="Input New Task"
            value={this.state.inputVal}
          />
          <button onClick={this.onAdd} type="submit">
            Add
          </button>
        </form>
        <div className="non_completed_tasks">
          <h3>Non Completed Tasks</h3>
          {this.state.nontasks.map((el, index) => (
            <ToDoTask
              key={el.number}
              task={el.task}
              number={el.number}
              index={index}
              action={this.onComplete}
            />
          ))}
        </div>
        <div className="completed_tasks">
          <h3>Completed Tasks</h3>
          {this.state.completed.map((el, index) => (
            <ToDoTaskNon
              key={el.number}
              task={el.task}
              number={el.number}
              index={index}
              action={this.onRemove}
              actionNon={this.onNonComplete}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default ToDoList;

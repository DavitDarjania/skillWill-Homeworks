import { Component } from "react";
import ToDoTask from "./ToDoTask";
import ToDoTaskNon from "./ToDoTaskNon";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      nontasks: [
        { number: 1, task: "Make Homework" },
        { number: 2, task: "Make todolist" },
      ],
      completed: [{ number: 3, task: "Make Food" }],
      counter: 5,
    };
  }
  componentDidMount() {
    console.log("ToDoList component mounted");
  }
  static getDerivedStateFromProps(props, state) {
    if (
      !(
        state.nontasks.find((element) => element.number == 4) ||
        state.completed.find((element) => element.number == 4)
      )
    ) {
      return {
        ...state,
        nontasks: [...state.nontasks, { number: 4, task: "Get Derived State" }],
      };
    }
    return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`Input Before Update: ${snapshot.inputVal}`);
    console.log(`Input After Update: ${this.state.inputVal}`);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.inputVal === nextState.inputVal;
  // }

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
        <form className="form" onSubmit={this.onSubmitForm}>
          <input
            onChange={this.onChange}
            type="text"
            placeholder="Input New Task"
            className="myInput"
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

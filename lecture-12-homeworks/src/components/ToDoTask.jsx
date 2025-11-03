import { PureComponent } from "react";

export default class ToDoTask extends PureComponent {
  render() {
    const { number, task, index, action } = this.props;
    return (
      <div className="task" key={number}>
        <p>
          {index}: {task}
        </p>
        <button onClick={() => action(number)}>complete</button>
      </div>
    );
  }
}

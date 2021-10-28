import React, { Component } from 'react'

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.renderTasks = this.renderTasks.bind(this);
  }

  renderTasks(tasks) {
    return tasks.map((task) => <li>{task}</li>)
  }

  render() {
    const { tasks } = this.props;

    return (
      <ol>
        {this.renderTasks(tasks)}
      </ol>
    )
  }
}

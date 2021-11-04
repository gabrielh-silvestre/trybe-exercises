import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" name="user-name" id="user-name" />
        <input type="number" name="user-age" id="user-age" />
        <select name="user-tech" id="user-tech">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
        <textarea name="user-desc" id="user-desc" cols="30" rows="10"></textarea>
      </form>
    )
  }
}

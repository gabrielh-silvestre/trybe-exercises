import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    const { userInfo, display } = this.props;

    return (
      <div style={{ display: display }}>
        {Object.entries(userInfo).map(([label, value], i) => {
          return label !== 'display' ? (
            <div key={i}>
              <h3>{label}</h3>
              <p>{value}</p>
            </div>
          ) : (
            ''
          );
        })}
      </div>
    );
  }
}

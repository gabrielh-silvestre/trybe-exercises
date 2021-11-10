import React from 'react';

export default function Button(props) {
  const { callback, btnText } = props;

  return <button onClick={callback}>{btnText}</button>;
}

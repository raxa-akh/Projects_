import React from 'react';
import cl from './style/input.module.css';

const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={cl.input} />;
});

export default Input;

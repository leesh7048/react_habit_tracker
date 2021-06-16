import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    // name이 있다면 name이 비어있지않으면 onAdd함수에 name을 전달
    name && props.onAdd(name);
    inputRef.current.value = "";
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    </>
  );
});

export default HabitAddForm;

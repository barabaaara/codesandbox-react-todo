import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key="{todo}">
              <span>{todo}</span>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

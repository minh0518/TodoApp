import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'
import './TodoListItem.scss';

const TodoListItem = ({todo}) => {
  
  const {text,checked}=todo //객체 구조분해할당으로 객체의 값들을 받음


  return (
    <div className="TodoListItem">
      <div className={cn('checkbox',{checked})}>
        {checked?<MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
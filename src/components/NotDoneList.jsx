const NotDoneList = ({
  item,
  clickRemoveButtonHandler,
  clickDoneButtonHandler,
}) => {
  return (
    <div className="Todo-Box" key={item.id}>
      <h2>{item.Title}</h2>
      {item.Content}
      <div className="Button">
        <button
          className="DeleteButton"
          onClick={() => clickRemoveButtonHandler(item.id)}
        >
          삭제하기
        </button>
        <button
          className="DoneButton"
          onClick={() => clickDoneButtonHandler(item.id)}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default NotDoneList;

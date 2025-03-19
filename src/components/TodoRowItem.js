function TodoRowItem(props) {
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
      <td onClick={() => props.deleteTodo(props.rowNumber)}>X</td>
    </tr>
  );
}

export default TodoRowItem;

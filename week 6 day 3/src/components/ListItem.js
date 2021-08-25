const ListItem = (props) => {
    const {todo} = props;
    return ( 
        <li className={todo.isDone ? 'checked' : ''}>{todo.msg}</li>
     );
}
 
export default ListItem;
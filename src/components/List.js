import ListItem from "./ListItem";

export default function List({ listArray }) {
  // console.log(props);
  return (
    <div className="list">
      <ul>
        {listArray.map((arrayItem) => (
          <ListItem item={arrayItem} />
          // Under the hood, React sees this as "replace this with the HTML that comes back when you call ListItem with the supplied key/value pairs on the props object"
          // i.e. the HTML returned by calling: ListItem( { item:arrayItem } )
        ))}
      </ul>
    </div>
  );
}

import { Rate } from "antd";
const desc = [1, 2, 3, 4, 5];
function FilterByRating(props) {
  return (
    <span style={{ paddingLeft: "4%" }}>
      <Rate tooltips={desc} onChange={props.setRate} value={props.rate} />
    </span>
  );
}

export default FilterByRating;

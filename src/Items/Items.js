import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Items({ itemsList }) {
  console.log(itemsList);
  // let arr;
  // useEffect(() => {
  //   arr = itemsList?.map((item, index) => {
  //     return (
  //       <li key={item.name} index={index}>
  //         <Link to={`/item/${item.name}`}> {item.name}</Link>
  //       </li>
  //     );
  //   });
  // }, [itemsList]);

  return (
    <div>
      {itemsList?.map((item, index) => {
        return (
          <li key={item.name} index={index}>
            <Link to={`/item/${item.name}`}> {item.name}</Link>
          </li>
        );
      })}
    </div>
  );
}

export default Items;

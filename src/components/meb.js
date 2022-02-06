import { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from 'react-router-dom'

const MEB = (props) => {
  const [paths, setPaths] = useState([]);
  useEffect(() => {
    let tcp = props.cp || '';
    setPaths(tcp.split('-'));
  }, [props.cp]);

  const getLP = (p) => {
    return paths.slice(0, p + 1).join('-');
  }

  let links = paths.map((p, i) => {
    let tp = `/explore/${getLP(i)}`;
    return (
      <Link className="tree" key={tp} to={tp}>{p}</Link>
    )
  });
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="tree" to="/explore">Root</Link>
        {links}
      </Breadcrumbs>
    </div>
  );
}


export default MEB;

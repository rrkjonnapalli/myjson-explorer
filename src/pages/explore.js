import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Core from '../services/core';
import MEB from '../components/meb';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom'

const Explore = () => {
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cp, setCP] = useState('');
  const [paths, setPaths] = useState([]);
  useEffect(() => {
    let tcp = params.path || '';
    setCP(tcp);
    Core.setCP(tcp);
    Core.listPaths(tcp).then((d) => {
      setPaths(d);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  }, [params.path]);

  const getLP = (p) => {
    if (!cp) return p;
    return cp + '-' + p;
  }

  let PathList = null;
  if (isLoading) {
    PathList = (
      <div>
        <h3>Loading ...</h3>
      </div>
    )
  } else {
    let links = [];
    if (paths.length > 0) {
      for (let p of paths) {
        if (!p) continue;
        let tp = `${getLP(p)}`;
        links.push(p.endsWith('.json') ? (
          <ListItem key={tp}>
            <a target="_blank" rel='noreferrer' href={Core.getEndpoint() + '/json/' + tp.slice(0, -5)} className='leaf'>{p}</a>
          </ListItem>
        ) : (
          <ListItem key={tp}>
            <Link className='tree' to={'/explore/' + tp}>{p}</Link>
          </ListItem>
        ));
      }
      PathList = (
        <List>
          {links}
        </List>
      );
    } else {
      PathList = (
        <div>
          No paths available in {cp}
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Explore</h1>
      <MEB cp={cp} />
      {PathList}
    </div >
  );
}


export default Explore;

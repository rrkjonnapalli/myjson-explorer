import { Link } from "react-router-dom";
import Core from '../services/core';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      /* APIs */
      <ul>
        <li> GET /list </li>
        <li> GET /list/:path </li>
        <li> GET /json/:path /* returns data in given path */ </li>
        <li> POST /json/:path /* saves data in given path if not already exists */ </li>
        <li> PUT /json/:path /* saves/updates data in given path */ </li>
        <li> DELETE /json/:path /* deletes data in given path */ </li>
      </ul>

      /** <br />
      * if `path` is "hello-world" <br />
      * we will create a world.json file in DATA_PATH/hello/ directory <br />
      * if `path` is "hello-sample-world" <br />
      * we will create a world.json file in DATA_PATH/hello/sample/ directory <br />
      * if `path` is "hello-sample" <br />
      * we will create a sample.json file in DATA_PATH/hello/ directory <br />
      * path allows only a-z (case insensitive) and 0-9 and `-` <br />
      * DATA_PATH is an env variable or by default "data". <br />
      */ <br />

      <br />

      You can download postman collection <a target='_blank' rel="noreferrer" className="tree" href={Core.getEndpoint() + '/myjson.postman_collection.json'}>here.</a>
      <br />
      You can <Link className="tree" to='/explore'>Explore</Link> the existing paths here.
    </div>
  );
}


export default Home;

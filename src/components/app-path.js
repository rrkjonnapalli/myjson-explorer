import { FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const AddPath = (props) => {
  let [method, setMethod] = useState('GET');
  let [path, setPath] = useState();
  const handlers = {
    method: setMethod,
    path: setPath
  }

  useEffect(() => {
  }, [props.path]);

  const handleChange = (event, m) => {
    console.log(event.target.value, m);
    handlers[m](event.target.value);
  };
  return (
    <Box>
      CP: {path}
      <form>
        <FormControl className='api'>
          <InputLabel id="method-label">Method</InputLabel>
          <Select
            labelId="method-label"
            id="method-label-select"
            value={method}
            label="Method"
            onChange={(e) => handleChange(e, 'method')}
          >
            <MenuItem value='GET'>GET</MenuItem>
            <MenuItem value='POST'>POST</MenuItem>
            <MenuItem value='PUT'>PUT</MenuItem>
            <MenuItem value='DELETE'>DELETE</MenuItem>
          </Select>
        </FormControl>
        <FormControl className='api'>
          <TextField label="Fixed Path" value={'/' + props.path + '/'} disabled />
        </FormControl>
        <FormControl className='api'>
          <TextField label="Path" onChange={e => handleChange(e, 'path')} />
        </FormControl>
      </form>
    </Box>
  )
}

export default AddPath;
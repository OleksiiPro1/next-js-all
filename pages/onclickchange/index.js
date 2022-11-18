import { Box } from '@mui/system';
import { useState } from 'react';

export default function OnClickChange() {
  const [count, setCount] = useState(0);
  return (
    <Box sx={{ ml: '50%', mt: 40, width: '200px' }}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* <button onClick={() => setCount(count - 1)}>-</button> */}
      <Box
        sx={{
          display: count > 0 && count <= 10 ? 'block' : 'none',
          bgcolor: 'brown',
        }}
      >
        Good Start!
      </Box>
      <Box
        sx={{
          display: count > 10 && count <= 20 ? 'block' : 'none',
          bgcolor: 'red',
        }}
      >
        More than 10!
      </Box>
      <Box
        sx={{
          display: count > 20 && count <= 30 ? 'block' : 'none',
          bgcolor: 'orange',
        }}
      >
        More than 20!
      </Box>
      <Box
        sx={{
          display: count > 30 && count <= 40 ? 'block' : 'none',
          bgcolor: 'yellow',
        }}
      >
        More than 30!
      </Box>
      <Box
        sx={{
          display: count > 40 && count <= 50 ? 'block' : 'none',
          bgcolor: 'pink',
        }}
      >
        More than 40!
      </Box>
      <Box
        sx={{
          display: count > 50 && count <= 100 ? 'block' : 'none',
          bgcolor: 'green',
        }}
      >
        More than 50!
      </Box>
      <Box
        sx={{
          display: count > 100 && count <= 1000 ? 'block' : 'none',
          bgcolor: 'blue',
          color: 'white',
        }}
      >
        More than 100!
      </Box>
      <Box
        sx={{
          display: count > 1000 && count < 1000000 ? 'block' : 'none',
          bgcolor: 'violet',
        }}
      >
        More than 100!
      </Box>
      <Box
        sx={{
          display: count && count >= 1000000 ? 'block' : 'none',
          bgcolor: 'Purple',
          color: 'white',
        }}
      >
        You did it! 1000000
      </Box>
    </Box>
  );
}

// onClick={chosenProcesses.length === 0 ? handleOpen : null}

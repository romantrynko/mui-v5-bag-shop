import { Colors } from '../../styles/theme';
import { clamp } from './clamp';
import { Remove } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Add } from '@mui/icons-material';

export default function IncDec() {

  const clampV = clamp(1, 10)
  const [value, setValue] = useState(0)

  return (
    <Box display={'flex'}>
      <IconButton sx={{
        borderRadius: 0,
        background: `${Colors.secondary}`
      }}
        onClick={() => setValue(clampV(value - 1))}
      >
        <Remove />
      </IconButton>
      <Typography variant='h6'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          border: `1px solid ${Colors.secondary}`
        }}>
        {value}
      </Typography>
      <IconButton sx={{
        borderRadius: 0,
        background: `${Colors.secondary}`
      }}
        onClick={() => setValue(clampV(value + 1))}
      >
        <Add />
      </IconButton>
    </Box>
  )
}
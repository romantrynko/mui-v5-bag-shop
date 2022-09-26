import { Colors } from '../../styles/theme';
import { clamp } from './clamp';
import { Remove } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';

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
    </Box>
  )
}
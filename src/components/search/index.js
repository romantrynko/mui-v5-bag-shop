import React from 'react'
import { IconButton, Slide } from '@mui/material';
import { Search, Close } from '@mui/icons-material';
import { SearchBoxContainer, SearchField } from '../../styles/search';
import { useUIContext } from '../../context/ui';

const SearchBox = () => {
  const { showSearchBox, setShowSearchBox } = useUIContext()

  return (
    <Slide direction='down' in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color='secondary'
          variant='standard'
          fullWidth placeholder='Search' />
        <IconButton>
          <Search sx={{
            fontSize: {
              xs: '2rem',
              md: '3rem'
            }
          }} color='secondary' />
        </IconButton>

        <IconButton onClick={() => setShowSearchBox(false)}
          sx={{
            position: 'absolute',
            top: 10, right: 10
          }}>
          <Close sx={{ fontSize: '4rem' }} color='secondary' />
        </IconButton>
      </SearchBoxContainer>
    </Slide>)
}

export default SearchBox
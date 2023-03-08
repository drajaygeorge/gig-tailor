import { styled } from '@mui/material/styles';

const BodyWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.background.default,
  padding: theme.spacing(3),
  margin: '0 auto',
  maxWidth: '1200px',
  minHeight: '100vh',
}));

export default BodyWrapper;

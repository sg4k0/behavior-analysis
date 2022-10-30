import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export const Footer: React.FunctionComponent = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href={import.meta.env.VITE_MYWEBSITE_URL}
        target="website"
      >
        {import.meta.env.VITE_MYWEBSITE_NAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

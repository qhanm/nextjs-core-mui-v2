import { BoxProps } from '@mui/material/Box'
import FallbackSpinner from 'components/fallback-spinner'

export default function Loading({ sx }: { sx?: BoxProps['sx'] }) {
  return <FallbackSpinner sx={sx} />
}

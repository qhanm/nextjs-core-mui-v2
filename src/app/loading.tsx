import { BoxProps } from '@mui/material/Box'
import CoreComponent from 'components'

export default function Loading({ sx }: { sx?: BoxProps['sx'] }) {
  return <CoreComponent.FallbackSpinner sx={sx} />
}

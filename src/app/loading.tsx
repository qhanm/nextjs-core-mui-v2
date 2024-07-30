import CoreComponent from '@core/components'
import { BoxProps } from '@mui/material/Box'

export default function Loading({ sx }: { sx?: BoxProps['sx'] }) {
  return <CoreComponent.FallbackSpinner sx={sx} />
}

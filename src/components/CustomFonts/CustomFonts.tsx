import { Global } from '@mantine/core'
import GalilRegular from '../../../public/fonts/Galil - Regular.woff2'
import GalilSemiBold from '../../../public/fonts/Galil - SemiBold.woff2'
import Rubik from '../../../public/fonts/Rubik-VariableFont_wght.ttf'

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Galil',
            src: `url('${GalilRegular}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Galil',
            src: `url('${GalilSemiBold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Rubik',
            src: `url('${Rubik}') format("truetype")`,
            fontWeight: [1, 999],
            fontStyle: 'normal',
          },
        },
      ]}
    />
  )
}

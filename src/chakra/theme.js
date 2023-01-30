import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#E0E4E8",
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Epilogue'
  }
})

export default theme;
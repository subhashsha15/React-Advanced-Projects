import { Container, ThemeProvider, Typography } from "@mui/material"
import { useEffect } from "react"
import theme from "./styles/theme"
function App() {
  useEffect(() => {
    document.title = "React Material UI - Home"
  }, [])
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xs" disableGutters={true} sx={{
          backgroundColor: "grey"
        }}>
          <Typography variant="h8">
            welcome to Material UI
          </Typography>
          <h6>welcome to Material UI</h6>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App

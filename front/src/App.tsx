import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRoutes from "./routes"

const queryClient = new QueryClient()
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRoutes></AppRoutes>
      </QueryClientProvider>
    </>
  )
}

export default App

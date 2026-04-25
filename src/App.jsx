import Navbar from "./components/Navbar"
import Page from "./pages/Page"

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Page />
      </div>
    </>
  )
}
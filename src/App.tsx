import About from "./components/about"
import Batches from "./components/batches"
import Header from "./components/header"
import Main from "./components/main"

function App() {

  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Batches />
      </main>
    </>
  )
}

export default App

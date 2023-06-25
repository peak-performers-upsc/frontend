import About from "../components/about"
import Batches from "../components/courses"
import Main from "../components/main"
import Affairs from "../components/affairs"


export default function Home() {
    return (
        <>
            <main>
                <Main />
                <Affairs />
                <About />
                <Batches />
            </main>
        </>
    )
}
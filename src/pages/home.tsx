import About from "../components/about"
import Batches from "../components/courses"
import Main from "../components/main"


export default function Home() {
    return (
        <>
            <main>
                <Main />
                <About />
                <Batches />
            </main>
        </>
    )
}
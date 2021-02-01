import Navbar from "../components/Navbar"
import '../scss/style.scss'
import db from "../server/db"
import Groups from '../components/Groups'

const Index = () => (
    <>
        <Navbar />
        <h1>this is home page</h1>
        <Groups />
    </>
)

export default Index
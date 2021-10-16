import Navbar from '../Navbar/Navbar';
import Countries from '../Countries/Countries';
import Filters from '../Filters/Filters';



function Home() {


    return (
        <div>
            <Navbar />   
            <Filters />         
            <Countries/>    
        </div>
    )
}

export default Home

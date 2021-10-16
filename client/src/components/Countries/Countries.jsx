import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import Country  from '../Country/Country';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import './Countries.css'


export function Countries() {
  var resultado= true;
  const countries = useSelector(state => state.countries);

 // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] =useState(1);
  const [postsPerPage] = useState (9);

  //current countries
  const indexLast=currentPage* postsPerPage;
  const indexFirst= indexLast-postsPerPage;
  const current= countries.slice(indexFirst, indexLast);

  const paginate = (n) => setCurrentPage(n);
  const prevPag = () =>setCurrentPage(currentPage-1);
  const nextPag = () => setCurrentPage(currentPage+1);


  if (typeof countries === 'string') resultado= false;
    return (
        <div>
            <div className= "grid">
                {
                resultado ? current.map(c => (
                        <Link to= {`/home/countries/${c.ID}`} className="nombres" key= {c.ID}>
                            <Country name={c.name} image={c.image} continent={c.continent}/>
                        </Link>
                ))
                 : <h1 className= "nofound">{countries}</h1>
              }   
            </div>
              {
                resultado ? <Pagination perPage={postsPerPage} total={countries.length} paginate={paginate} prevPag={prevPag} nextPag= {nextPag} current={currentPage}/> 
                : <h1></h1>
              }
        </div>                                        
    )
}

export default Countries
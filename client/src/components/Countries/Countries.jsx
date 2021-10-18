import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from "../../actions/index.js";
import Country  from '../Country/Country';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import './Countries.css'


export function Countries() {
  var resultado= true;
  const countries = useSelector(state => state.countries);
  const currentPage= useSelector(state=> state.page);

  const dispatch= useDispatch();

 // const [loading, setLoading] = useState(false);
  const [postsPerPage] = useState (9);

  //current countries
  const indexLast=currentPage* postsPerPage;
  const indexFirst= indexLast-postsPerPage;
  const current= countries.slice(indexFirst, indexLast);

  const paginate = (n) => dispatch(setPage(n));
  const prevPag = () =>dispatch(setPage(currentPage-1));
  const nextPag = () => dispatch(setPage(currentPage+1));


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
                : ""
              }
        </div>                                        
    )
}

export default Countries
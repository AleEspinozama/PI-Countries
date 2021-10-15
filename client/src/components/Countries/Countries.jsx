import React from 'react'
import { connect } from 'react-redux';
import Country  from '../Country/Country';
import { Link } from 'react-router-dom';
import './Countries.css'


export function Countries({countries}) {
    return (
            <div className= "grid">

                {
                countries.map(c => (
                        <Link to= {`/home/countries/${c.id}`} className="nombres"><Country name={c.name} image={c.image} continent={c.continent}/> </Link>
                ))}

            </div>
    )
}

function mapStateToProps(state) {
    return {
      countries: state.countries,
    }
  }

export default connect(mapStateToProps) (Countries);

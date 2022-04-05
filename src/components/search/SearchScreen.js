import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForms';
import { HeroCard } from '../hero/HeroCard';

import queryString from 'query-string';


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q
  })

  const {searchText} = formValues;

  const heroesFilter = getHeroesByName(q);

  const handlerSearch = (event) => {
    
    event.preventDefault();

    const query = '?q='+searchText;

    navigate(query);
  }

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr/>

          <form onSubmit={handlerSearch}>
            <input 
              type="text"
              placeholder="Search hero..."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}/>

              <button
                type="submit"
                className="btn btn-outline-primary mt-2">
                  Search
              </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {
            (q === '') 
              ? <div className="alert alert-info">Search a hero</div>
              : (heroesFilter.length === 0)
                &&  <div className="alert alert-danger">Not found {q}</div>
          }

          {
            heroesFilter.map(hero => (<HeroCard  key={hero.id}  {...hero} />))
          }

        </div>
      </div>
    </div>
  )
}

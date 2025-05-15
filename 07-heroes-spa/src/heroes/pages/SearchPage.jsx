import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = q.length > 0 && heroes.length === 0;

  const { SearchText, onInputChange } = useForm({
    SearchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (SearchText.trim().length <= 1) return;

    navigate(`?q=${ SearchText }`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>  
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="SearchText"
              autoComplete="off"
              value={ SearchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr />

          <div className="alert alert-primary img-thumbnail animate__animated animate__fadeIn" 
            style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>
            
          <div className="alert alert-danger img-thumbnail animate__animated animate__fadeIn"
            style={{display: showError ? '' : 'none'}}>
            No se encuentra <b>{ q }</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}

import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById';
import { heroesImages } from '../../helpers/heroImages';

export const HeroScreen = () => {

  const {heroId} = useParams();

  const hero = getHeroById(heroId);

  const navigate = useNavigate();

  const handlerReturn = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to='/' />
  }

  return (
    <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img src={heroesImages('./'+hero.id+'.jpg')} alt={hero.superhero} className="img-thumbnail"/>
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <b>AlterEgo:  </b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
                <b>Publisher:  </b> {hero.publisher}
            </li>
            <li className="list-group-item">
                <b>First appearance:  </b> {hero.first_appearance}
            </li>
            <li className="list-group-item">
                <b>Characters:  </b> {hero.characters}
            </li>
          </ul>

          <button
            className="btn btn-primary mt-4"
            onClick={handlerReturn}>
            Back
          </button>
        </div>
    </div>
  )
} 

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { FaStarHalfAlt, FaStar, FaBriefcase, FaRegStar } from 'react-icons/fa';

import { AiOutlineTeam } from 'react-icons/ai';

import { MdEventAvailable } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Container, Resume, Stars } from './styles';

const fullStar = <FaStar color="#df7e38" className="star" />;
const halfStar = <FaStarHalfAlt color="#df7e38" className="star" />;
const emptyStar = <FaRegStar color="#df7e38" className="star" />;

export default function ScoreStarry({ rating, hide, handleHover, id }) {
  const [rat, setRat] = useState(rating);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setRat(rating.toFixed(1));

    function calcRating() {
      const _stars = [];
      let flagHalf = false;
      let round = Math.floor(rating);
      let emptyNum = 5;

      setStars([]);

      if (rating - round >= 0.5 && rating - round < 0.9) {
        emptyNum -= 1;
        flagHalf = true;
      }

      if (rating - round >= 0.9) {
        round = Math.round(rating);
        setRat(round);
      }

      let i = 1;
      while (i <= round) {
        _stars.push(fullStar);
        emptyNum -= 1;
        i += 1;
      }

      if (flagHalf) {
        _stars.push(halfStar);
        emptyNum -= 1;
      }

      while (emptyNum > 0) {
        _stars.push(emptyStar);
        emptyNum -= 1;
      }

      setStars([..._stars]);
    }

    calcRating();
  }, [rating]);

  return (
    <Container>
      <Stars>
        <ul>
          {stars.map((star, i) => (
            <li key={`${i + 1}`} onMouseEnter={() => handleHover(id, i + 1)}>
              <span>{star}</span>
            </li>
          ))}
        </ul>
        <div className="rat">
          <span>{rat}</span>
        </div>
      </Stars>
      <Resume hide={hide}>
        <div className="add-info">
          <div className="info">
            <FaBriefcase color="green" />
            <span>Projetos: 42</span>
          </div>

          <div className="info">
            <AiOutlineTeam color="green" />
            <span>Equipes: 7</span>
          </div>

          <div className="info">
            <MdEventAvailable color="green" />
            <span>Disponível</span>
          </div>
        </div>
      </Resume>
    </Container>
  );
}

ScoreStarry.propTypes = {
  rating: PropTypes.number,
  hide: PropTypes.bool,
  handleHover: PropTypes.func,
  id: PropTypes.number,
};

ScoreStarry.defaultProps = {
  rating: 3,
  hide: false,
  handleHover: () => {},
  id: 0,
};

/***
 *
 *
 *  {stars.map(index => {
            return (
              <li key={index}>
                <span onMouseEnter={() => handleHover(id + 1, id + 1)}>
                  <FaStar color="#df7e38" className="star" />
                </span>
              </li>
            );
          })}
          {half ? (
            <li>
              <span>
                <FaStarHalfAlt color="#df7e38" className="star" />
              </span>
            </li>
          ) : (
            ''
          )}
          {emptyStars.map(i => (
            <li key={i}>
              <span>
                <FaRegStar color="#df7e38" className="star" />
              </span>
            </li>
          ))}

 */

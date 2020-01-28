import React, { useEffect, useState } from 'react';

import { FaStarHalfAlt, FaStar, FaBriefcase } from 'react-icons/fa';

import { AiOutlineTeam } from 'react-icons/ai';

import { MdEventAvailable } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Container, Resume, Stars } from './styles';

export default function ScoreStarry({ rating }) {
  const [rat, setRat] = useState(0);

  const [half, setHalf] = useState(false);

  const [stars, setStars] = useState([]);

  useEffect(() => {
    setRat(rating.toFixed(1));

    function calcRating() {
      const newStars = [];
      let round = Math.floor(rating);

      setStars([]);
      setHalf(false);

      if (rating - round >= 0.5 && rating - round < 0.9) {
        setHalf(true);
      }

      if (rating - round >= 0.9) {
        round = Math.round(rating);
        setRat(round);
      }

      let i = 1;
      while (i <= round) {
        newStars.push(i);
        i += 1;
      }

      setStars([...newStars]);
    }

    calcRating();
  }, [rating]);

  return (
    <Container>
      <Stars>
        <ul>
          {stars.map(index => {
            return (
              <li key={index}>
                <FaStar style={{ color: '#df7e38' }} />
              </li>
            );
          })}
          {half ? (
            <li>
              <FaStarHalfAlt style={{ color: '#df7e38' }} />
            </li>
          ) : (
            ''
          )}
        </ul>
        <div>
          <span>{rat}</span>
        </div>
      </Stars>
      <Resume>
        <div>
          <div>
            <FaBriefcase style={{ color: '#BC3A3A' }} />
            <span>Participações 42</span>
          </div>

          <div>
            <AiOutlineTeam style={{ color: '#1A46A8' }} />
            <span>Equipes 7</span>
          </div>

          <div>
            <MdEventAvailable style={{ color: '#6BAA34' }} />
            <span style={{ color: '#6BAA34', fontWeight: 'bold' }}>
              Disponível
            </span>
          </div>
        </div>
      </Resume>
    </Container>
  );
}

ScoreStarry.propTypes = {
  rating: PropTypes.number,
};

ScoreStarry.defaultProps = {
  rating: 5,
};

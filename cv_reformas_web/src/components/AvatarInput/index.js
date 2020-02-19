/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FaCameraRetro, FaTrash } from 'react-icons/fa';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const [image, setImage] = useState({
    preview: '',
    raw: '',
  });

  async function handleUpload() {
    const data = new FormData();

    data.append('image', image.raw);

    const config = { headers: { 'content-type': 'multipart/form-data' } };

    await api.post('avatars', data, config);
  }

  const handleChange = e => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });

    handleUpload();
  };

  function handleClick() {
    setImage({ preview: '', raw: '' });
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {image.preview ? (
          <img src={image.preview} alt="banner" />
        ) : (
          <div className="no-photo">
            {' '}
            <FaCameraRetro
              size={40}
              style={{ color: '#df7e38', opacity: '0.6' }}
            />{' '}
          </div>
        )}

        <input
          accept="image/*"
          type="file"
          id="avatar"
          onChange={handleChange}
        />
      </label>
      <FaTrash
        className="trash-icon"
        size={20}
        style={{ color: '#666', opacity: '0.6' }}
        onClick={handleClick}
      />
    </Container>
  );
}

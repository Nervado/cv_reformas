import React from 'react';
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';

import { MdCopyright } from 'react-icons/md';

import Soft from '~/assets/34s0ft.svg';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div>
        <div>
          <spam>Powered by </spam>
          <img src={Soft} alt="34s0ft" />
        </div>
      </div>
      <div center>
        <div center>
          <div center>
            <MdCopyright style={{ color: 'blue' }} />
            <spam>All rights reserverd CV Reformas e Construções </spam>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <spam>Nos siga!</spam>

            <a href="https://facebook.com" style={{ cursor: 'pointer' }}>
              <FaFacebookSquare style={{ color: '#38539B', width: '20px' }} />
            </a>
            <a
              href="https://www.instagram.com/?hl=pt-br"
              style={{ cursor: 'pointer' }}
            >
              <FaInstagram style={{ color: '#EB4354', width: '20px' }} />
            </a>
            <a href="https://www.whatsapp.com" style={{ cursor: 'pointer' }}>
              <FaWhatsappSquare style={{ color: '#1BD741', width: '20px' }} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

import React from 'react';
import {
  FaPhone,
  FaMoneyBill,
  FaCoins,
  FaMailBulk,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import { MdRecordVoiceOver } from 'react-icons/md';
import GlobalStyle from '~/styles/global';

import Footer from '~/components/Footer';
import { Container, Content } from './styles';
import Header from '~/components/Header';
import ContactForm from '~/components/ContactForm';

export default function Contact() {
  const size = 20;
  return (
    <Container>
      <GlobalStyle spaOn />
      <Header />
      <Content>
        <div className="info-contact">
          <h1 className="info-title">
            Qualquer dúvida não deixe de entrar em contato
          </h1>
          <p className="info-p">
            Estamos sempre prontos para atendê-los, qualquer necessidade, entre
            em contato!
          </p>
          <div className="infos">
            <div className="info-cel">
              {' '}
              <FaPhone size={size} color="darkgreen" />
              <span className="info-text">(21) 97929-6228</span>
            </div>
            <div className="email">
              <FaMailBulk size={size} color="blue" />
              <span className="info-text">
                Contato: contato@cevreformas.com.br
              </span>
            </div>
            <div className="email">
              <FaCoins size={size} color="orange" />{' '}
              <span className="info-text">
                Orçamentos: orcamento@cevreformas.com.br
              </span>
            </div>
            <div className="email">
              <FaMoneyBill size={size} color="green" />{' '}
              <span className="info-text">
                Financeiro: financeiro@cevreformas.com.br
              </span>
            </div>
            <div className="email">
              <MdRecordVoiceOver size={size} color="brown" />{' '}
              <span className="info-text">
                Reclamações: cevreformas@cevreformas.com.br
              </span>
            </div>
            <div className="info-adress">
              <FaMapMarkerAlt size={size} color="red" />
              <span className="info-adress-text">
                Endereço: Av. Pastor Martin Luther King Jr, 126 – Torre 1000 –
                Sala 309 – RJ – 22765-000
              </span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.97072416812!2d-43.27375398488566!3d-22.87753984258001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997c3f37c9d5dd%3A0x7ea3c2a43f46f20d!2sCoworking%20Town%20Nova%20Am%C3%A9rica!5e0!3m2!1spt-BR!2sbr!4v1583104997538!5m2!1spt-BR!2sbr"
              width="680"
              height="400"
              title="C&V Reformas"
              className="info-map"
            />
          </div>
        </div>
        <div className="form-contact">
          <h1 className="form-title">Deixe aqui sua mensagem</h1>
          <aside className="contact">
            <ContactForm />
          </aside>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}

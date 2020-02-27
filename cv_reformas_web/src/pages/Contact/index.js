import React from 'react';
import GlobalStyle from '~/styles/global';

import Footer from '~/components/Footer';
import { Container, Content } from './styles';
import Header from '~/components/Header';
import ContactForm from '~/components/ContactForm';

export default function Contact() {
  return (
    <Container>
      <GlobalStyle spaOn />
      <Header />
      <Content>
        <div className="info-contact">Informacoes para contato</div>
        <div className="form-contact">
          <h1> Formulario para contato</h1>
          <aside className="contact">
            <ContactForm />
          </aside>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}

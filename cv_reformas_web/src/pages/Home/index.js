import React from 'react';

import Footer from '~/components/Footer';

import Background from '~/components/Background';

import job from '~/assets/job.svg';
import mang from '~/assets/mang.svg';
import safe from '~/assets/safe.svg';
import objimage from '~/assets/objimage.svg';

import {
  Container,
  Content,
  Lem,
  Cards,
  Card,
  Mission,
  Objective,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Background logged />

      <Content>
        <Lem>
          <div>
            <p>
              {' '}
              Somos uma empresa criada para todas as pessoas que desejam
              realizar suas Reformas e Construções, sem as dificuldades que toda
              mudança traz. Onde a satisfação é garantida!
            </p>
          </div>
        </Lem>
        <Cards>
          <Card>
            <div>
              <img src={safe} alt="img" />
              <div>
                <span>Compromisso com a segurança das pessoas</span>
              </div>
            </div>
          </Card>
          <Card>
            <div>
              <img src={job} alt="img" />
              <div>
                <span>Desenvolvimento continuo e construção civil</span>
              </div>
            </div>
          </Card>
          <Card>
            <div>
              <img src={mang} alt="img" />
              <div>
                <span>
                  Transparência e profissionalismo na gestão do seu
                  empreendimento
                </span>
              </div>
            </div>
          </Card>
        </Cards>
        <Mission>
          <div>
            <p>
              “Nossa missão é agregar valor aos nossos clientes através da
              prestação de serviços de Reformas, Construções e Gerenciamento de
              projetos de infraestrutura. Acreditamos que a capacitação humana é
              fundamental para prestar os melhores serviços. Nos comprometemos
              com a segurança de nossos colaboradores e prezamos pelo bem-estar
              das comunidades.”
            </p>
          </div>
        </Mission>
        <Objective>
          <div>
            <img src={objimage} alt="img" />
          </div>

          <aside>
            <p>
              “Nosso objetivo é ser a empresa de Reformas e Construções líder no
              que diz respeito a método de trabalho e capacidades de seus
              recursos humanos.”{' '}
            </p>
          </aside>
        </Objective>
      </Content>
      <Footer />
    </Container>
  );
}

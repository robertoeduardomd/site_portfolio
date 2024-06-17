// pages/index.js
import Head from "next/head";
import { useEffect } from "react";
import Swiper from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <meta
          name="description"
          content="Portfólio de Roberto Eduardo Melara Doudement, desenvolvedor web apaixonado por tecnologia e soluções criativas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div class="preloader">
        <div class="portal-container">
          <div class="portal">
            <div class="preloader-body">
              <div class="cssload-container">
                <div class="cssload-speeding-wheel"></div>
              </div>

              <h1>Portfólio</h1>
              <br />
              <h2>Roberto Eduardo Melara</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgfundosite">
        <img src="/imgs/fundobrancotec.jpg" alt="" />
      </div>
      <header>
        <div className="menubar">
          <div className="logo">
            <h2>Roberto Eduardo</h2>
            <p>Desenvolvedor Full Stack</p>
          </div>
          <button className="iconmenuresponsivo">☰</button>

          <div className="menu">
            <ul>
              <li className="inia">
                <a href="#">Inicio</a>
              </li>
              <li className="teca">
                <a href="#tecno">Tecnologias</a>
              </li>
              <li className="expa">
                <a href="#expe">Experiências</a>
              </li>
              <li className="proa">
                <a href="#proje">Projetos</a>
              </li>
              <li className="fora">
                <a href="#form">Formação</a>
              </li>
              <li className="hoba">
                <a href="#hobbies">Hobbies</a>
              </li>
              <li className="ctta">
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <article>
        <section>
          <div className="inicio" id="inicio">
            <div className="conteudoinicio">
              <div className="txtdigitado">
                <p>
                  👨‍💻 <span></span>
                </p>
              </div>

              <br />
              <br />
              <p>
                Sou um desenvolvedor apaixonado nas atividades de minha área, me
                satisfaz entregar resultados e se possível, vou além. Encontrar
                desafios e conseguir trazer soluções é o que me empolga, já
                criei diversos projetos web robustos tanto na parte Frontend
                quanto na Backend, estou buscando aprender sempre novas
                tecnologias e tendências de mercado
              </p>
              <div className="btns">
                <a
                  id="btnlinkedin"
                  href="//www.linkedin.com/in/roberto-eduardo-md01/"
                  target="_blank"
                >
                  <img src="/imgs/lin.png" alt="" />
                  Linkedin
                </a>
                <a
                  id="btngithub"
                  href="https://github.com/robertoeduardomd"
                  target="_blank"
                >
                  <img src="/imgs/github.png" alt="" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="imginicio">
              <img src="/imgs/eucamauzlremovebg.png" alt="" />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className="tecno" id="tecno">
            <div className="tecnoconteudo">
              <div className="tcn">
                <h2>Tecnologias que uso</h2>
              </div>
              <div className="cardhtml">
                <p>
                  HTML5 <br />
                  HyperText Markup Language 5 É uma linguagem de marcação
                  voltada a paginas web
                  <br />
                  <br />
                  <br />
                  Meu Nivel em HTML 7/10
                </p>
              </div>
              <div className="cardcss">
                <p>
                  CSS <br />
                  Cascading Style Sheets É uma linguagem de estilização de
                  paginas usada para descrever a apresentação de um documento
                  escrito em HTML ou XML (incluindo dialetos XML como SVG ,
                  MathML ou XHTML ). CSS descreve como os elementos devem ser
                  renderizados na tela ou em outras mídias.
                  <br />
                  <br />
                  <br />
                  Meu Nivel em CSS 9/10
                </p>
              </div>
              <div className="cardjs">
                <p>
                  JAVA-SCRIPT <br />
                  Linguagem de programação voltada para web,podendo ser
                  utilizada no frontend e back end
                  <br />
                  <br />
                  <br />
                  Meu Nivel em Java-Script 6/10
                </p>
              </div>
              <div className="cardnode">
                <p>
                  NODE.JS <br />É uma plataforma de tempo de execução de
                  JavaScript que permite executar código JavaScript no lado do
                  servidor. Ele é construído sobre a engine JavaScript V8 da
                  Google, que é a mesma utilizada pelo navegador Google Chrome.
                  Node.js permite criar aplicações de rede escaláveis e de alto
                  desempenho, utilizando JavaScript tanto no lado do cliente
                  quanto no lado do servidor. Ele é bastante popular para o
                  desenvolvimento de aplicações web, APIs e serviços back-end.
                  <br />
                  <br />
                  <br />
                  Meu Nivel em Node.js 6/10
                </p>
              </div>
              <div className="cardreact">
                <p>
                  REACT.JS <br />é uma biblioteca JavaScript de código aberto
                  desenvolvida pelo Facebook para a construção de interfaces de
                  usuário (UI). Ela é conhecida por sua eficiência e sua
                  capacidade de criar interfaces de usuário interativas e
                  reativas. O React permite criar componentes reutilizáveis que
                  geram a visualização de dados de forma eficiente.
                  <br />
                  <br />
                  <br />
                  Meu Nivel em react.js 5/10
                </p>
              </div>
              <div className="cardjava">
                <p>
                  JAVA <br />
                  Linguagem de programação robusta,portatil e orientada a
                  objetos criada pela Sun Microsystems mais tarde comprada pela
                  Oracle é umas das linguagens mais populares e utilizadas por
                  causa de suas diversidade de bibliotecas, comunidade bastante
                  ativa,uma de suas caracterias é o java virtual machine,que é a
                  maquina virtual que pode ser instalada em qualquer dispositivo
                  ,e por suas compatibilidades é possivel fazer dispositivos
                  diferentes comunicar-se entre si, no caso o jdk que eu utilizo
                  é o Extended Edition que é o java em que posso intalar
                  dependencias voltadas a web
                  <br />
                  <br />
                  <br />
                  Meu Nivel em JAVA 8/10
                </p>
              </div>
              <div className="cardgit">
                <p>
                  Git
                  <br />
                  É uma tecnologia que serve para controlar versionamento da
                  aplicação,eu posso fazer commits e informar as alterações,é
                  possivel armazenar esses commits em repositorios e utilizar
                  quando precisar
                  <br />
                  GitHub <br />É uma plataforma onde posso enviar meus gits e
                  usa-los alem de minha maquina onde possui meu perfil posso
                  tornar meus repositorios publicos ou privados para que outros
                  colaboradores possam ver os codigos e participar da criação
                  <br />
                  <br />
                  <br />
                  Meu Nivel em Git e GitHub 8/10
                </p>
              </div>
              <div className="cardmysql">
                <p>
                  MYSQL <br />É o Banco de dados Relacional de minha
                  preferência, ele utilizada o conceito de tabelas,para
                  organizar e estruturar os dados inseridos,é um dos mais
                  populares
                  <br />
                  <br />
                  <br />
                  Meu Nivel em Git e MYSQL 8/10
                </p>
              </div>
              <div className="cardmongo">
                <p>
                  MONGODB <br />é um banco de dados NoSQL (Not Only SQL),não
                  relacional orientado a documentos, projetado para armazenar,
                  recuperar e gerenciar dados de forma bastante flexivel
                  <br />
                  <br />
                  <br />
                  Meu Nivel em Git e MongoDB 8/10
                </p>
              </div>
            </div>
            <div className="tecnop">
              <ul>
                <li id="lihtml">HTML5</li>
                <li id="licss">CSS3</li>
                <li id="lijs">JAVA-SCRIPT</li>
                <li id="linode">NODE.JS</li>
                <li id="lireact">REACT.JS</li>
                <li id="lijava">JAVA EE</li>
                <li id="ligit">GIT</li>
                <li id="limysql">MYSQL</li>
                <li id="limongo">MONGODB</li>
              </ul>
              <div className="imgstec">
                <img id="imghtml" src="/imgs/html-5.png" alt="" />
                <img id="imgcss" src="/imgs/css-3.png" alt="" />
                <img id="imgjs" src="/imgs/jsimg.png" alt="" />
                <img id="imgnode" src="/imgs/nodejs.png" alt="" />
                <img id="imggit" src="/imgs/github.png" alt="" />
                <img id="imgreact" src="/imgs/react.png" alt="" />
                <img
                  id="imgjava"
                  src="/imgs/javaoracletransparent.png"
                  alt=""
                />
                <img id="imgmysql" src="/imgs/mysqltransparent.png" alt="" />
                <img id="imgmongo" src="/imgs/mongodbimg.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="expe">
          <div className="experiencias">
            <h2>Experiências</h2>
            <div className="colapsador">
              <div className="label">Estágio</div>
              <div className="conteudocolapsador">
                <p>
                  *Empresa: (SAMF-DF)Superintendências de Administração do
                  Ministerio da Fazenda <br />
                  <br />
                  *SETOR:ESAF Escola de Administração Fazendaria <br />
                  <br />
                  *Atividades: Desenvolvimento acompanhamento e atualização de
                  sistemas; desenvolvia componentes para o SISRH (SISTEMA PARA
                  RECURSOS HUMANOS) fazia o MVC criava componentes como dados
                  pessoais, dados acadêmicos, dados de logradouro para que o
                  usuario possa preencher se cadastrar e utilizar aonde for
                  necessario e onstruia a interação com o banco de dados
                  <br />
                  <br />
                  *tecnologias que usei: JAVA Extended Edition, JAVA SERVER
                  FACES, JAVA SERVER PAGES, GIT, HIBERNATE, TOM CAT, MYSQL
                </p>
              </div>
            </div>
            <div className="colapsador">
              <div className="label">
                Freelancer Site institucional pizzaria
              </div>
              <div className="conteudocolapsador">
                <p>
                  Site institucional de pizzaria, aonde o cliente abre a pagina
                  tem acesso as informações sobre a pizzaria,ao seu
                  cardapio,promoções do dia,informações de contato e podendo
                  fazer seu pedido,layout responsivo <br />
                  <br />
                  tecnologias utilizadas: html5, css3, java-script, node.js,
                  react.js, git, mongodb
                </p>
              </div>
            </div>
            <div className="colapsador">
              <div className="label">
                Freelancer aplicativo de Aluguel de veiculos
              </div>
              <div className="conteudocolapsador">
                <p>
                  Aplicativo aluguel de Veiculos funciona no lado do
                  administrador, gerente e usuário; no lado do adm e gerente ele
                  adiciona veículos com diversos atributos e por padrão ja salva
                  com disponível para uso, no lado do usuário ele se cadastra
                  escolhe um veiculo dentro dos adicionados escolhe os dias para
                  alugar e faz o calculo automático de quanto fica a diária, e
                  após alugar o veiculo não se torna mais disponível(Tecnologias
                  utilizadas: Mendix e CSS)
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section id="proje">
          <h2>Projetos</h2>
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <div className="contem_coisa_gira_de">
            <div className="contem_coisa_gira_dd">
              <div className="rotating-thing">
                <div className="item">
                  {" "}
                  <a
                    href="https://controle-de-despezasversaosimples.vercel.app/"
                    target="_blank"
                  >
                    <img src="/imgs/imgcontrolefinanceiro.png" alt="" />{" "}
                    <p> Controle financeiro</p>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://odontoesteticaversaosimples.vercel.app/"
                    target="_blank"
                  >
                    <img src="/imgs/clinicaodontoesteticasite.jpg" alt="" />{" "}
                    <p> Site institucional odonto e estetica</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#" id="linkhamburgeria">
                    <img src="/imgs/hamburgerblaide.jpg" alt="" />{" "}
                    <p> Hamburgeria Blade</p>
                  </a>
                </div>
                <div className="item">
                  {" "}
                  <a href="#" id="linkpizzaria">
                    <img src="/imgs/saboreartpizzaria.jpg" alt="" />{" "}
                    <p>Pizzaria Sabor e Art</p>
                  </a>
                </div>
                <div className="item">
                  {" "}
                  <a href="https://nigelky.com.br/index.html" target="_blank">
                    <img src="/imgs/institutohenfil.jpg" alt="" />{" "}
                    <p>instituto Henfil</p>
                  </a>
                </div>
              </div>
              <div className="controls">
                <button className="control-button" id="left-button">
                  ⟲
                </button>
                <button className="control-button" id="right-button">
                  ⟳
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="form">
          <br />

          <h2>Formação</h2>
          <br />
          <div className="formacao">
            <div className="escolaridade">
              <h2>Escolaridade</h2>

              <p>
                Ensino Medio Colégio Nossa Senhora do Perpétuo Socorro
                <br />
                <br />
                Ensino Superior em Ciência da Computação IESB- Campus sul
                <br />
                <br />
              </p>
            </div>
            <div className="escolaridade">
              <h2>Idiomas</h2>
              <br />
              <p>
                Español Fluente
                <br />
                <br />
                Ingles Intermediario
                <br />
                <br />
              </p>
            </div>
            <div className="escolaridade">
              <h2>Cursos</h2>
              <br />
              <p>
                Curso de verão Mendix certificado desenvolvedor rapido em Mendix
              </p>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />

        <section id="hobbies">
          <h2>Hobbies</h2>
          <div id="slide">
            <div className="slider-content">
              <input type="radio" name="btn-radio" id="radio1" />
              <input type="radio" name="btn-radio" id="radio2" />
              <input type="radio" name="btn-radio" id="radio3" />

              <div className="slide-box primeiro"></div>
              <div className="slide-box"></div>
              <div className="slide-box">
                <img
                  width="80%"
                  height="80%"
                  style={{ objectFit: "cover" }}
                  src="/imgs/clinicaestetica.jpg"
                  alt=""
                />
              </div>

              <div className="nav-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
              </div>
              <div className="nav-manual">
                <label htmlFor="radio1" className="manual-btn"></label>
                <label htmlFor="radio2" className="manual-btn"></label>
                <label htmlFor="radio3" className="manual-btn"></label>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="recado">
            <h4>Precisa de um desenvolvedor?</h4>
            <h1>VAMOS TRABALHAR JUNTOS!</h1>
          </div>
        </section>
      </article>
      <a
        href="https://github.com/robertoeduardomd"
        target="_blank"
        className="iconegithub"
      >
        <img src="imgs/github.png" alt="" />
      </a>
      <a
        href="//www.linkedin.com/in/roberto-eduardo-md01/"
        target="_blank"
        className="iconelkdin"
      >
        <img src="imgs/lin.png" alt="" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5561986023911"
        className="iconewwp"
      >
        <img src="imgs/whatsappicone.png" alt="" />
      </a>
      <footer id="contato">
        <div className="ctt">
          <h4>Contato:</h4>
          <p>email: robertoemd@gmail.com</p>
        </div>
        <div className="redessociais">
          <h4>Redes Sociais</h4>
          <ul>
            <a
              href="https://www.linkedin.com/in/roberto-eduardo-md01"
              target="_blank"
            >
              <li style={{ "--cor1": "#1900ff", "--cor2": "black" }}>
                <span className="icon">
                  <img
                    style={{ objectFit: "cover", width: "100%" }}
                    src="/imgs/lin.png"
                    alt=""
                  />
                </span>
                <span className="text">Linkedin</span>
              </li>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5561986023911"
              target="_blank"
            >
              <li
                style={{
                  "--cor1": "rgb(124, 255, 37)",
                  "--cor2": "darkgreen",
                }}
              >
                <span className="icon">
                  <img
                    style={{ objectFit: "cover", width: "100%" }}
                    src="/imgs/whatsappicone.png"
                    alt=""
                  />
                </span>
                <span className="text">Whats-App</span>
              </li>
            </a>
            <a href="https://github.com/robertoeduardomd" target="_blank">
              <li style={{ "--cor1": "#2d2c3a", "--cor2": "#000000" }}>
                <span className="icon">
                  <img
                    style={{ objectFit: "cover", width: "100%" }}
                    src="/imgs/github.png"
                    alt=""
                  />
                </span>
                <span className="text">GitHub</span>
              </li>
            </a>
          </ul>
        </div>
        <p>©2024 Portfolio,desenvolvido por mim em React.js,CSS,Java-Script</p>{" "}
        <br />
      </footer>
      <script src="/tecnologias.js"></script>
      <script src="/colapsavel.js"></script>
      <script src="/mensagens.js"></script>
      <script src="/slide.js"></script>
      <script src="/carregador.js"></script>
      <script src="/msgcopia.js"></script>
      <script src="/itensgirando.js"></script>
      <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    </>
  );
}

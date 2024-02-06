import "../Components/Styles/hero.css";
import webchai from "../img/examples/chai.png";
import web1 from "../img/examples/site.png";
import web2 from "../img/examples/kino.png";
import web3 from "../img/examples/5.png";
import web4 from "../img/examples/4.png";
import webrespect from "../img/examples/pcresp.png";
import vkicon from "../img/icons/vk.png";
import tgicon from "../img/icons/tg.png";
import giticon from "../img/icons/git.png";
function Main() {
  return (
    <main>
      <div className="all">
        <div className="hero">
          <div className="naming_port">
            <h1>ПОРТФОЛИО</h1>
          </div>

          <div className="naming">
            <h1>ВЕБ ПРИМЕРЫ</h1>
          </div>

          <div className="examples " id="menu">
            <div>
              <a href="https://github.com/Badadsher/chaihona">
                <img className="example" src={webchai}></img>
              </a>
            </div>

            <div>
              <a href="https://github.com/Badadsher/pcrespect">
                <img className="example" src={webrespect}></img>
              </a>
            </div>

            <div>
              <a href="https://github.com/Badadsher/MovieExample/tree/main">
                <img className="example" src={web2}></img>
              </a>
            </div>

            <div>
              <a href="https://github.com/Badadsher/test-task">
                <img className="example" src={web4}></img>
              </a>
            </div>
            <div>
              <a href="https://github.com/Badadsher/my-clothes-website/tree/main">
                <img className="example" src={web1}></img>
              </a>
            </div>
            <div>
              <img className="example" src={web3}></img>
            </div>
          </div>

          <nav className="about-menu " id="about">
            <div className="abouter">
              <h1>ОБО МНЕ</h1>
            </div>
            <div className="info">
              {" "}
              <p>
                Приветствую! Этот сайт является портфолио с примерами моих
                работ. Я являюсь фронтенд разработчиком. Вы можете просмотреть
                примеры моих работ на гитхабе. На данный момент мой стек состоит
                из: HTML, JS, REDUX, React, TypeScript, CSS/SASS. Также я имею
                опыт на фриланс биржах и командной работы составляющий
                длительность в более чем один год.
              </p>
            </div>
          </nav>

          <nav className="contacts-menu" id="contact">
            <h1>КОНТАКТЫ</h1>
            <nav className="social-medias">
              <a href="https://t.me/necrasfril">
                <img src={tgicon} className="socialic"></img>
              </a>

              <a href="https://github.com/Badadsher">
                <img src={giticon} className="socialic"></img>
              </a>
              <a href="https://vk.com/nasyrovbdash">
                <img src={vkicon} className="socialic"></img>
              </a>
            </nav>
          </nav>
        </div>
        <div id="bg-img" className="bg-img"></div>
      </div>
    </main>
  );
}

export default Main;

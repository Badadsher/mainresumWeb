import "../Components/Styles/hero.css";
import backgroundImage from "../img/gradi.png";
import example1 from "../img/examples/dog.png";
import example2 from "../img/examples/newbattle.png";
import example3 from "../img/examples/newhome.png";
import example4 from "../img/examples/car.jpg";
import example5 from "../img/examples/PLANENEW.png";
import example6 from "../img/examples/samurai.png";
import example7 from "../img/examples/night.png";
import example8 from "../img/examples/samuraiweb.png";
import example9 from "../img/examples/verh.jpg";

import web1 from "../img/examples/site.png";
import web2 from "../img/examples/kino.png";
import web3 from "../img/examples/5.png";
import web4 from "../img/examples/4.png";

import vkicon from "../img/icons/vk.png";
import tgicon from "../img/icons/tg.png";
import giticon from "../img/icons/git.png";
function Main() {
  const MyStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <main>
      <div className="all">
        <div className="hero">
          <div className="naming_port">
            <h1>ПОРТФОЛИО</h1>
          </div>

          {/* <nav className="examples">
              <img className="example"></img>
              <img className="example" src={example1} alt="dog"></img>
              <img className="example"></img>
            </nav> */}

          <div className="naming">
            <h1>ВЕБ ПРИМЕРЫ</h1>
          </div>

          <div className="examples " id="menu">
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

          <div className="naming">
            <h1>ПРИМЕРЫ ИГР</h1>
          </div>

          <div className="examples " id="menu">
            <div>
              <img className="example" src={example1} alt="dog"></img>
            </div>
            <div>
              <img className="example" src={example2} alt="battle"></img>
            </div>
            <div>
              <img className="example" src={example3} alt="home"></img>
            </div>
            <div>
              <img className="example" src={example4} alt="car"></img>
            </div>
            <div>
              <img className="example" src={example5} alt="plane"></img>
            </div>
            <div>
              <img className="example" src={example6} alt="samurai"></img>
            </div>
            <div>
              <img className="example" src={example7} alt="dog"></img>
            </div>
            <div>
              <img className="example" src={example8} alt="battle"></img>
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
                работ. Я являюсь фронтенд разработчиком и разработчиком игр на
                движке Unity. Вы можете просмотреть примеры моих работ на
                гитхабе. На данный момент я зиждлюсь на
                Unity,C#,HTML,JS,ReactJS,TypeScript. Также я имею опыт работы с
                заказчиками на фриланс биржах и командной работы. На данный
                момент мой опыт программирования превышает цифру в один год.
              </p>
            </div>
          </nav>

          <nav className="contacts-menu" id="contact">
            <h1>КОНТАКТЫ</h1>
            <nav className="social-medias">
              <a href="https://t.me/infinityhybrid">
                <img src={tgicon} className="socialic"></img>
              </a>

              <a href="https://github.com/Badadsher">
                <img src={giticon} className="socialic"></img>
              </a>
              <a href="https://vk.com/infinityhybrid">
                <img src={vkicon} className="socialic"></img>
              </a>
            </nav>
          </nav>
        </div>
        <div className="bg-img" style={MyStyle}></div>
      </div>
    </main>
  );
}

export default Main;

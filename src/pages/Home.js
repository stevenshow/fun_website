import "./Home.css";
import TopBar from "../components/TopBar";
import rasp from "../img/raspberrypi.png";
import linux from "../img/linux_logo.png";
import python from "../img/python_logo.png";
import uvu from "../img/uvu_logo.png";

const cards = [
  {
    name: "Linux",
    alt: "linux logo",
    image: linux,
    id: 1,
    content: `The Raspberry Pi is a low cost, credit-card sized computer that
    plugs into a computer monitor or TV, and uses a standard keyboard
    and mouse. It is a capable little device that enables people of
    all ages to explore computing, and to learn how to program in
    languages like Scratch and Python. It’s capable of doing
    everything you’d expect a desktop computer to do, from browsing
    the internet and playing high-definition video, to making
    spreadsheets, word-processing, and playing games.`,
  },
  {
    name: "Raspberry Pi",
    alt: "raspberry pi",
    image: rasp,
    id: 2,
    content: `The Raspberry Pi is a low cost, credit-card sized computer that
    plugs into a computer monitor or TV, and uses a standard keyboard
    and mouse. It is a capable little device that enables people of
    all ages to explore computing, and to learn how to program in
    languages like Scratch and Python. It’s capable of doing
    everything you’d expect a desktop computer to do, from browsing
    the internet and playing high-definition video, to making
    spreadsheets, word-processing, and playing games.`,
  },
  {
    alt: "python logo",
    name: "Python",
    image: python,
    id: 3,
    content: `Python is an interpreted, object-oriented, high-level programming
    language with dynamic semantics. Its high-level built in data
    structures, combined with dynamic typing and dynamic binding, make
    it very attractive for Rapid Application Development, as well as
    for use as a scripting or glue language to connect existing
    components together. Python's simple, easy to learn syntax
    emphasizes readability and therefore reduces the cost of program
    maintenance. Python supports modules and packages, which
    encourages program modularity and code reuse. The Python
    interpreter and the extensive standard library are available in
    source or binary form without charge for all major platforms, and
    can be freely distributed.`,
  },
  {
    name: "UVU",
    alt: "utah valley university logo",
    image: uvu,
    id: 4,
    content: `Utah Valley University is the largest public university in the
    state of Utah, and one of a few in the nation offering a
    dual-mission model that combines the rigor and richness of a
    first-rate teaching university with the openness and vocational
    programs of a community college. The unique model, which focuses
    on student success, engaged learning, rigorous academic
    programs, and faculty-mentored research, is transforming higher
    education by making it more affordable and accessible to
    students of all backgrounds.`,
  },
];

const Home = () => {
  return (
    <div className="home">
      <TopBar />
      <div className="cardHolder">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.alt} />
            <div className="title">{`> ${card.name}`}</div>
            <div className="content">
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

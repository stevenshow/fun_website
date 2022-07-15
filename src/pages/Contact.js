import "./Contact.scss";

const cards = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/steven-schoebinger/",
    ascii: ` _     _       _            _ ___       
| |   (_)_ __ | | _____  __| |_ _|_ __  
| |   | | '_ \\| |/ / _ \\/ _\` || || '_ \\ 
| |___| | | | |   <  __/ (_| || || | | |
|_____|_|_| |_|_|\\_\\___|\\__,_|___|_| |_|
                                      `,
  },
  {
    name: "GitHub",
    link: "https://github.com/stevenshow/",
    ascii: `  ____ _ _   _   _       _     
 / ___(_) |_| | | |_   _| |__  
| |  _| | __| |_| | | | | '_ \\ 
| |_| | | |_|  _  | |_| | |_) |
 \\____|_|\\__|_| |_|\\__,_|_.__/ 
                              `,
  },
  {
    name: "Email",
    link: "mailto:steven.schoebinger@gmail.com",
    ascii: ` _____                 _ _ 
| ____|_ __ ___   __ _(_) |
|  _| | '_ \` _ \\ / _\` | | |
| |___| | | | | | (_| | | |
|_____|_| |_| |_|\\__,_|_|_|
                            `,
  },
];

// in card
const Contact = () => {
  return (
    <div className="contact">
      <div className="card">
        <div className="title">Ways to contact me </div>
        <div className="content">
          {cards.map((card, i) => (
            <>
              <button
                className="ascii-button"
                onClick={() => window.open(`${card.link}`)}
              >
                <pre>
                  <code>{card.ascii}</code>
                </pre>
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

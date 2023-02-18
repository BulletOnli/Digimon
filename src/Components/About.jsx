import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div className="About">
            <NavLink to="/">
                <img src="/images/logo.png" alt="logo" />
            </NavLink>
            <main>
                <NavLink to="/">
                    <i class="fa-solid fa-arrow-left"></i>
                </NavLink>
                <h3>
                    Digimon, short for "Digital Monsters," is a popular Japanese
                    media franchise. It began in 1997 as a virtual pet video
                    game and has since evolved into numerous anime series,
                    manga, video games, and other merchandise. The franchise's
                    central premise is that various Digimon creatures exist in a
                    parallel digital world and can be raised, trained, and
                    evolved by human partners known as "Tamers."
                </h3>
                <h3>
                    Digimon come in a variety of sizes and shapes, each with
                    their own set of abilities, personalities, and appearances.
                    Some are adorable and cuddly, while others are fearsome and
                    intimidating. They can evolve through various levels known
                    as "digivolutions," which grant them new powers and
                    abilities.
                </h3>
                <img src="/images/grouppic.png" alt="" />
            </main>
            <footer>
                <small>Website created by Bullet</small>
            </footer>
        </div>
    );
};

export default About;
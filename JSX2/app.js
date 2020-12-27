const header = <h1 className="title" >Witaj na stronie!</h1>

const classBig = "big";

const handleClick = () => alert('klik')
const main = (
    <div>
        <h1 onClick={handleClick} className="red">Pierwszy artykuł</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat error odio saepe et asperiores explicabo architecto quisquam molestiae exercitationem,
        eaque vitae rem! Officiis minima, eaque temporibus nihil quae aliquid facilis?Aliquam deserunt sapiente perferendis molestiae eligendi facilis nihil obcaecati temporibus,
        quo quas ipsam dolorum incidunt assumenda maxime soluta placeat natus expedita aut reiciendis nesciunt, numquam tempore consectetur cumque vero. Minima?</p>
    </div>
)

const text = "Stopka";
const footer = (
    <footer>
        <p className={classBig}>{text}</p>
    </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById('root'))
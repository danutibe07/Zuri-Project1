import image1 from "../../images/img1.svg"
import image2 from "../..//images/icon.svg"
import image3 from "../../images/Hover.svg"
import image7 from "../../images/slack.svg"
import image8 from "../../images/git.svg"
import image9 from "../../images/more.svg"
import image10 from "../../images/img2.svg"
import image11 from "../../images/more2.svg"
import { Link } from "react-router-dom"
function Home() {
    return (
        <div className="App">
            <div className="profile">
                <div>
                    <img className="sharebtn" src={image2} alt="image2"></img>
                    <img className="sharebtnn" src={image3} alt="image3"></img>
                    <img className="morebtn" src={image9} alt="image9"></img>
                    <img className="morebtnn" src={image11} alt="image11"></img>
                </div>
                <img src={image1} alt="image1" className="profileimage1" id="profile__img"></img>
                <img src={image10} alt="image10" className="profileimage2" id="profile__img"></img>
                <h2 id="slack" className="slack">daniel07</h2>
                <h2 id="slack">Danielutibe07</h2>
            </div>
            <div className="linkstrees">
                <a href="https://twitter.com/Danielutibe07?t=2kvKPTZQ7IGCw2FugE9xCQ&s=09" id="twitter">Twitter Link</a>
                <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
                <a href="https://books.zuri.team/" id="books" title="books about design and coding">Zuri Books</a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=daniel07" id="book__python" title="you can also checkout this my python book">Python Books</a>
                <a href="https://background.zuri.team/" id="pitch" title="can do background checks for your applicants">Background Check for Coders</a>
                <a href="https://books.zuri.team/design-rules" id="book__design" title="free design book offered by Zuri">Design Books</a>
                <Link to="/contact" id="book__design" title="free design book offered by Zuri">Contact Page</Link>
            </div>
            <div className="socialIcons">
                <img src={image7} alt="image7" id="slackicon"></img>
                <img src={image8} alt="image8" id="giticon"></img>
            </div>
        </div>
    );
}

export default Home;


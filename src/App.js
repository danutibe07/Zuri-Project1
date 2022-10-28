import image1 from "../src/images/img1.svg"
import image2 from "../src/images/icon.svg"
import image3 from "../src/images/Hover.svg"
import image4 from "../src/images/footer1.svg"
import image5 from "../src/images/footer2.svg"
import image6 from "../src/images/footer3.svg"
import image7 from "../src/images/slack.svg"
import image8 from "../src/images/git.svg"
import image9 from "../src/images/more.svg"
import image10 from "../src/images/img2.svg"
function App() {
  return (
    <div className="App">
    <div className="profile">
    <div>
      <img className="sharebtn" src={image2} alt="image2"></img> 
      <img className="sharebtnn" src={image3} alt="image3"></img>
      <img className="morebtn" src={image9} alt="image9"></img>
    </div>
    <img src={image1} alt="image1" className="profileimage1" id="profile__img"></img>
    <img src={image10} alt="image10" className="profileimage2" id="profile__img"></img>
      <h2 id="slack" className="slack">daniel07</h2>
      <h2 id="slack">Danielutibe07</h2>
    </div>
      <div className="linkstrees">
        <a href="https://twitter.com/Danielutibe07?t=2kvKPTZQ7IGCw2FugE9xCQ&s=09" id="twitter">Twitter Link</a>
        <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
        <a href="https://books.zuri.team/" id="books">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=daniel07" id="book__python">python Books</a>
        <a href="https://background.zuri.team/" id="pitch">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>
      </div>
      <div className="socialIcons">
        <img src={image7} alt="image7" id="slackicon"></img>
        <img src={image8} alt="image8" id="giticon"></img>
       </div>
      <footer>
      <img src={image4} alt="image4" id="footer1"></img> 
      <img src={image5} alt="image5" id="footer2"></img> 
      <img src={image6} alt="image6" id="footer3"></img> 
      </footer>
    </div>
  );
}

export default App;

import "./App.css";
import profile_pic from "./images/2498.jpeg";

function App() {
  return (
    <main>
      <img src={profile_pic} alt="profile-pic" id="profile_img" />
      <h2>Yahaya Abdullah Danjuma</h2>
      <div>
        <h3 id="twitter">_dhanjuma</h3>
      </div>
      <div className="hide">
        <h3 id="slack">Dhanjuma</h3>
      </div>
      <div>
        <a href="https://training.zuri.team/" id="btn_zuri">
          <h3>
            <span>click </span> to join training
          </h3>
        </a>
      </div>
      <div>
        <a href="http://books.zuri.team" id="books">
          <h3>Find Books Here</h3>
          <h3>
            <span>click </span>to find relevant books in our online library
          </h3>
        </a>
      </div>
      <div>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=Dhanjuma"
          id="book_python"
        >
          <h3> are you interested in learning python ?</h3>
          <h3>
            follow this <span>link</span> to our python guide for absolute
            beginners
          </h3>
        </a>
      </div>
      <div>
        <a href="https://background.zuri.team" id="pitch">
          <h3>
            have any suggestions on how to run background checks on coders ?
          </h3>
          <h3>
            <span>click </span>to find relevant books in our online library
          </h3>
        </a>
      </div>
      <div>
        <a href="https://books.zuri.team/design-rules" id="book_design">
          <h3>are you a beginner, working or aspiring designer ?</h3>
          <h3>
            follow this <span>link</span> to our book on designing to boost your
            skills
          </h3>
        </a>
      </div>
    </main>
  );
}

export default App;

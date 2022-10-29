import "./App.css";
import profile_pic from "./images/2498.jpeg";

function App() {
  return (
    <>
      <header className="profile-section">
        <div className="mobileShare">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQBSURBVHgBzZndbhpHFMfPsrDmozi2k8hSKisgS04qJW1Q8wDkDdLbXlSu+gB1niDqE8R5grSP0avQm15ETjbEONgYvGuIiT/AYLAXdtllcs44kHUSK7vYwP4ktDPDzM5fZ87MnpkBuCCyLE/Jmdy9fj6zuUS/T/lP/40cEkdPxlgym9tWNpUdZlqWgvnafqXO6Edp07SU9XyJUR2qa287fJFordWswrRWm7nlRGvXqK3d4pcrDq2wkS8+xL6e6LrB0FJsUKjtx/bPsrnioixnY040+J1UEqRJeXIyEqO0JAXgIoiir5dcvDoTXSx3Oiqm43BRyIoXsaATC1MfMCjpNeVxXi3X2IhQiu9Zeq3wGNyyhQ11vcNGBfl+Xt2puRKJ7Z6w8fFVNxDsGZqBgiQ9v3MrFrM5/UixrC5kNlSVGY0EUu+Vn1ETjESSN2ZnxiaSoL5nr03FwtGryXMrodn/Zt7h6yuBnCksDXMZcotuGCz9tvBnTx8fY1lWpvx+3+Br2RAQfSL4BN9yLzboT6YTTa+FQ9JoAgaHtNo6hENBrpFbFC2d9JpIIhSc4NoozdVm80Xl9vxcDDzI+mZRbZ8cJnyynLuHvhADjxII+GMQiMS4RU3TVEVRvAkeBD8Aqt8vxnmYhyKvgEtevsmBbphw94c4RCMhXqZ3THiZzvH0zz8uwIR0GkU2T1qwkt6AazNX4O5tdxEdfgD43BEp2hb94sNIKOi48UbhHfy/sgb7lRpUDxtwa36Ol794lYXVdYWX06dw7vvrvPzf1Apsl/agVD5A8QGYvT7tuK+D6lHw19/+OPLxic/AFYZhwKBIkqNY/TN8p7MelwAKr1wtT6vZLajUGnAfhzj6XZiX6UYHh/h06O//tMCtRzSPNXiTVXieyl1SFwRh2vuTqYuTSRTjAi1P0emIPH/zBniRHM4Hrd1KoIMG1I5pqeBRumjRxJ2F1z0fTeLjOXiTB+ijqX5QorV1FpqQwEtoLaMeCU/wtawf5hXUMl/7vAJp2douT/XCPC40kYjXTbP7yEtCCdPqPrLvm/qgry4z7/DMru3MLi5XKKX2DtxtrYdBpXqE4V3pP3vZGaFa00rtVurqOF2A+t7ZP1TblpX6ZmU2XhdYBjcUtss1/HazUUG7TqW0e254dO5JQ+O49XRntwKj4l25Uq83mn/BoNBQ4LE3GxYf3+1uuM/j9dstZb9aZ5fN7t4ho3c70eDokIkJwoNqrfE7Jv/BsItCLxgUamvglgV5etQ8/oXpQgKGAR390IUBHVgwl2gtnZ1eNhSGc9nwhViMDejJ6PoGzwRwD8Uo+Ga965tq7/rGVPHUmlEd1r++UcZ30CFnFNuFWGHJbjH67zLEfQAdkLtA2PORxgAAAABJRU5ErkJggg=="
            alt="mobiles"
          />
        </div>
        <div className="shareIcon">
          <p className="toolTip">Share Link</p>
          <svg
            className="iconsvg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="40"
              height="40"
              rx="20"
              fill="white"
            ></rect>
            <rect
              x="1"
              y="1"
              width="40"
              height="40"
              rx="20"
              stroke="#D0D5DD"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="1 3"
            ></rect>
            <path
              d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="image-container">
          <img src={profile_pic} alt="Profile_Image" id="profile__img" />
          <div className="camera">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB3VXdbcIwED7HQBWJB7pBugFskE7QbtBR2g0YoXSCthMQJoANQicgD0jBdmL3zklQEvJDm4dKPSnYOPZ333fnuwD8pcVx7AuptviYlmcrRPLYhcHawY3n8CSEK0xJs5hOJzv4iQkhVxlL+Tpkz9mI8UmqNR44lMOAYfLazhyPcl4P20mo94szBF4HlhjfWCm/jxjlABXsao4OFScnIT7sC5RsjJnBL80SzcOGBNe0ZpNMCzTqNLlzXXfffDj2DWNzxtgMtA5wX9C0jwhKlRxwGt1MxrdQOCicNLHKc1O9okKGbfkp442gR7LDU5LqESMD5i2T7Tzgj+c4fI2MF6gq6sJpVVCK57acGxuGvABjIV568VodyCSkdbqOcKFO+XkNhAMctOfm2nMOdBiG4qtgW38nZa7KmH0XRrcDMCsaOYdlPQeY6qw9MAi6MCp1gPe20vyyO51uceYRU8PgMzvEnnCY0ZrW6X29di7w+uqgSHal50gZXFMHnQoqjqgvae2jqohxvnPH46Btb5MC2+iG9KEzkaxx2oZH/51chv1YKJUuu9pznxFBztNnO9d6k2Ofv16YTBisILcIG+eCkm8VuC7b63S0MEbTLYmGAOPV3hTg8C/sG0yIPTU3zI/aAAAAAElFTkSuQmCC" />
          </div>
        </div>
        <div className="username">
          <h2 id="twitter">_dhanjuma</h2>
          <h2 id="slack">dhanjuma</h2>
        </div>
      </header>
      <main>
        <section className="link-container">
          <a
            href="https://twitter.com/_dhanjuma"
            target="_blank"
            className="btn"
            id="twitter"
          >
            Twitter Link
          </a>
          <a
            href="https://training.zuri.team/"
            id="btn__zuri"
            target="_blank"
            className="btn"
          >
            Zuri Team
          </a>
          <a
            href="http://books.zuri.team/"
            target="_blank"
            className="btn"
            id="books"
          >
            Zuri Books
          </a>
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=dhanjuma"
            target="_blank"
            className="btn"
            id="book__python"
          >
            Python Books
          </a>
          <a
            href="https://background.zuri.team"
            target="_blank"
            className="btn"
            id="pitch"
          >
            Background Check for Coders
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            target="_blank"
            className="btn"
            id="book__design"
          >
            Design Books
          </a>
        </section>
        <section className="socials">
          <a href="">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJsSURBVHgB3VUxb9NAFH53dlzUVJUzRIKh6DxTKkcCxAKkI8oA2aIumF9A2YtqpAqJAYl/gFkCW1ABMcYgoQ4gYVIGNp8CG5XiIhAoOH6cXeyYxnZLO9Fv8d27773vnd97NsD/DrIX4czr7VWCWIcAH765WLFC26lnt5YpxUuI4HxorN0+sMDZVwODSORBvBdBNc+7CwqW3NiGOLq+2bhj5cWQoQBIQU1n4PvAZF+4SOkMKSuKQYsO/V9giRTfwyFQeANnseKJh562zT9dqcNBBaJ3ToBlEYc+WEKQQw5YZ1mdnSobiOila5IInNvYXhWdYuYFKClwQ+8ONP/bvczz2amZrqiILhKEhecrrNdYi2KNaxAENSiA8FNlGfSABl4OQ0+R6/EyERDKNhQr8LcXKrYyVLjY8D9Gjw5lazcVkVhjtxTObwwY+JM1GFHwytPA7VolyV5/IYr9U3acpukl+wgydy6bPFPAZa1EQPv82I5s6lUVZo7p8T6ydZhahmkmZkDdnYwPPj/R/MgnBNy5luggmkwt67eJe7zFiELfia0IhBy//qhp3hNva30hnGQGOcAR3Kw2e/fD9bgGVLo2wVSosRM8YjBQS+xLZ75eFBx2otbHy1gV8WWK4mQ6+pIqgxye5XTSpH8yB1q/bbpzS1y0kwr0u5XnWWk63qCj13waGFnnJEBebW5aEwKRyKe2BfuAEOHiYe6HK8M/IqwBkWg3XBPxP6ABXQxvlcencAggAd2Xsl9VjOIbIPC/JkUGLooMIwgSExlhYcH3/GW6J5dMiD7ZaGv9R1Fvb62fNhCIIRKwq1d6Jhxp/AYxy9XQlgg+XgAAAABJRU5ErkJggg=="
              alt="slack-Icon"
            />
          </a>
          <a href="https://github.com/Dhanjuma/first_zuri">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFASURBVHgBrVYLscIwENx5CirhJCChEp4DKqEOigNwUBwACloUgIOCguIgJHAZwjVN09CdWWZILrf3yVwKhJFpVpqNZqepmD2vlZqEBBA7UJGsMUOo5AjVTPZ8NogqwbFkFYpcLcS1dE74LssO7wYX+DTX7N+Y1rZjm4zPuOUiV2AvIihEABmGILFeCB+Na6gmBGLgK3H2p3/+sQxuI6KD+94iHdJXYzJYCaMj0nES/8kIyAY+kI6HT2BJDG6bEbiLtRXSIc++MpKN6eG/9zHohK/WZHAWRnZEz8UWw4l6tA6t4tWJokZcuXKMj3ayRtbgwIsXx8gI+sbwGuGxXrvG5BjbVN16+jIhhCcqyQOlZzNH+KUacz768GzwKUuOd38I8wQ2mIBvKsYIRD2ZFoTvN2JKoMUPXxdFYN+M+jywjye49coYs+PGHQAAAABJRU5ErkJggg=="
              alt="slack-Icon"
            />
          </a>
        </section>
      </main>
      <footer>
        <div className="container">
          <img src="data:image/png;base64,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" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src="https://hng-task01.netlify.app/assets/I4G.75927fc6.png" />
        </div>
      </footer>

      {/* <img src={profile_pic} alt="profile-pic" id="profile_img" />
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
      </div> */}
    </>
  );
}

export default App;

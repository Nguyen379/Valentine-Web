import React, { useState } from "react";
import "./index.css";

// Array of phrases to be displayed when the "NO" button is clicked
const phrases = [
  "Hok cục cức",
  "Hông thiệt à :((?",
  "Embe hong iu anhhhh",
  "Ơ kìa 🥺",
  "Anh iu emmm",
  "Embe chọn dạaaa điiiii",
  "Embe chọn DẠAAAAAAAA",
];

function App() {
  const [noCount, setNoCount] = useState(0); // State to keep track of the number of clicks on the "NO" button
  const [yesPressed, setYesPressed] = useState(false); // State to check if the "YES" button has been clicked
  const yesButtonSize = noCount * 10 + 16; // Dynamic adjustment of the "YES" button size based on the number of clicks on the "NO" button

  // Function to handle the click on the "YES" button
  function handleYesClick() {
    setYesPressed(true);
  }

  // Function to handle the click on the "NO" button
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  // Function to get the text for the "NO" button based on the current number of clicks
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? ( // Display content after clicking the "YES" button
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bear-Kissing"
          />
          <div className="text">Anh iu embe cục cức cụa anh nhiềuuuuu!!!</div>
          <div className="text">
            <p>
              Plan của mình là thứ 2 embe đón anh nè rùi mình về nhà nghỉ ngơi
              tắm rửa. Tối mình đi Burwood chụp photobooth rùi đi chơi xong embe
              ngụ lại nhà anh hihi. Thứ 3 trưa mình sẽ đi edition roasters ăn +
              matcha bingsu rùi đi chụp thêm 1 cái photobooth theme valentine
              rùi mình đi chợ mua đồ. Tối nle sẽ làm steak and fries với mình
              mua thêm kem socola và 1 ít cruiser xong 2 đứa sẽ cuddle ngồi xem
              Pride and Prejudice nhéeeeeee. Tạm thời plan là thế hihi à xong
              mình sẽ ngồi unbox đồ trong vali anh mang từ VN sang cho embe nữa
              nhaaaaa.
            </p>
          </div>
        </>
      ) : (
        // Display content before clicking the "YES" button
        <>
          <img
            className="kiss"
            src="https://i.pinimg.com/originals/73/89/aa/7389aaa2a73b071ee7d3d782310e590b.gif"
            alt="bear with heart"
          />
          <div className="text">Will you be my (late) Valentine?</div>
          <div className="both-Button">
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "rgb(248, 229, 89)",
              }}
              onClick={handleYesClick}
            >
              DẠAAAAAAA
            </button>
            <button className="NoButton" style={{}} onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
// import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
// import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const number = "918983212260";
const message = "Tangoo Rate My Efforts (0-5) 😅";
const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [formShow, setFormShow] = useState(true);
  const [answerText, setAnswerText] = useState("");
  const yesButtonSize = noCount * 20 + 16;
  const [questionCounter, setQuestionCounter] = useState(0);
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleSubmit = () => {
    // e.preventDefault(); // prevents page refresh

    if (questionCounter === 0) {
      if (answerText.toLowerCase() === "ca anandi yuvraj mudaliyar") {
        setQuestionCounter(1);
        setAnswerText("");
        toast.success("Correct Answer! On to the next question.");
      } else {
        setAnswerText("");
        toast.error("Wrong Answer! (Hint: Future Full Name).");
      }
    } else if (questionCounter === 1) {
      if (
        answerText.toLowerCase().includes("murgan") ||
        answerText.toLowerCase().includes("murugan")
      ) {
        setQuestionCounter(2);
        setAnswerText("");
        toast.success("Correct Answer! On to the last question.");
      } else {
        setAnswerText("");
        toast.error("Wrong Answer! Try again.");
      }
    } else if (questionCounter === 2) {
      if (
        answerText.toLowerCase() === "i love you illichavayan" ||
        answerText.toLowerCase() === "i love you purshan"
      ) {
        setFormShow(false);
        setAnswerText("");
      } else {
        setAnswerText("");
        toast.error(
          "Ask for Approval in the snap and then type the message I said in the snap here! ❤️",
        );
      }
    }
  };

  useEffect(() => {
    if (yesPressed) {
      setTimeout(() => {
        window.open(`${url}`, "_blank");
      }, 5000);
    }
  }, [yesPressed]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
        {formShow ? (
          <>
            <h3 className="text-4xl md:text-3xl my-4 text-center">
              Q.{questionCounter + 1} -{" "}
              {questionCounter === 0
                ? "What's Your Full Name? (Twist Iruku)🫶"
                : questionCounter === 1
                  ? "Enter The Place Where I proposed you to Marry Me?😅"
                  : questionCounter === 2 &&
                    "Send me a snap in which you should say something for me than I will give the answer 😅"}
            </h3>

            <input
              type="text"
              className="min-w-[50vw] border border-red-900 rounded-lg p-2 mt-4 text-center text-xl md:text-2xl"
              placeholder="Enter your answer here..."
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            {yesPressed ? (
              <>
                <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
                <div className="text-4xl md:text-6xl font-bold my-4">
                  Ok Yayyyyy!!!
                </div>
              </>
            ) : (
              <>
                <img
                  className="h-[230px] rounded-lg shadow-lg"
                  src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
                />
                <h1 className="text-4xl md:text-6xl my-4 text-center">
                  Will you be my Valentine?
                </h1>
                <div className="flex flex-wrap justify-center gap-2 items-center">
                  <button
                    className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
                    style={{ fontSize: yesButtonSize }}
                    onClick={() => setYesPressed(true)}
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleNoClick}
                    className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
                  >
                    {noCount === 0 ? "No" : getNoButtonText()}
                  </button>
                </div>
              </>
            )}
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

const Footer = () => {
  return (
    <button className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300">
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️ By your Purshan (Illichavayan) 😅
      </span>
    </button>
  );
};

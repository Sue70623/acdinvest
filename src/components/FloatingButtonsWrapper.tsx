import TotsElsEspaisButton from "./TotsElsEspaisButton";
import "./FloatingButtonsWrapper.css";
import ChatWidget from "./ChatWidget"; // Ensure the correct path to ChatWidget
import ScrollToTopButton from "./ScrollToTopButton"; // Ensure the correct path to ScrollToTopButton

const FloatingButtonsWrapper: React.FC = () => {
  return (
    <div className="floating-buttons-wrapper">
      <TotsElsEspaisButton
        onClick={() => console.log("TotsElsEspaisButton clicked")}
      />
      <ChatWidget />
      <ScrollToTopButton />
    </div>
  );
};

export default FloatingButtonsWrapper;

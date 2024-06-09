import { useEffect, useState } from "react";
import './Typing.css';

function Typing({
    text, 
    typingSpeed, 
    deletingSpeed,
    duration = 1000 // default duration to pause on the full text
}){
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < text[index].length) {
                    setDisplayedText((prev) => prev + text[index].charAt(prev.length));
                } else {
                    setTimeout(() => setIsDeleting(true), duration);
                }
            } else if (isDeleting) {
                if (displayedText.length > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % text.length);
                }
            }
        };
        
        const timeout = setTimeout(
            handleTyping, 
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index, typingSpeed, deletingSpeed, text, duration]);

    return (
        <div className="typing-effect">
            {displayedText}
        </div>
    );
}

export default Typing;

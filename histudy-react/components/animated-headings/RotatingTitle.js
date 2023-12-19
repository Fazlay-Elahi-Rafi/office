import {useEffect, useRef} from 'react'
import {animateText} from "../../helpers/textAnimation";

const RotatingTitle = ({title, words}) => {
    const wordsRef = useRef([])

    useEffect(() => {
        animateText(words, wordsRef);
    });

    return (
        <>
            <h3 className="title">
                {title}&nbsp;
                <span className="header-caption">
                    <span className="cd-headline rotate-1">
                        <span className="cd-words-wrapper">
                            {words?.map((word, i) => (
                                <b key={i}
                                   ref={el => wordsRef.current[i] = el}
                                   className={`theme-gradient ${i === 0 ? `is-visible` : `is-hidden`}`}>
                                    {word}
                                </b>
                            ))}
                        </span>
                    </span>
                </span>
            </h3>
        </>
    )
}

export default RotatingTitle;

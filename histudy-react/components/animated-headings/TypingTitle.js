import {TypeAnimation} from 'react-type-animation'

const TypingTitle = ({title, words}) => {
    return (
        <>
            <h3 className="title">
                {title}&nbsp;
                <span className="header-caption">
                    <span className="cd-headline type">
                        <span className="cd-words-wrapper theme-gradient">
                            <TypeAnimation
                                sequence={words}
                                speed={20}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </span>
                    </span>
                </span>
            </h3>
        </>
    )
}

export default TypingTitle;

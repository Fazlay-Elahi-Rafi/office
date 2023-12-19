const ClippingTitle = ({title, words}) => {
    return (
        <>
            <h3 className="title">
                Clip Animated&nbsp;
                <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                        <span className="cd-words-wrapper">
                            <b className="is-visible theme-gradient">Clip One.</b>
                            <b className="is-hidden theme-gradient">Clip Two.</b>
                            <b className="is-hidden theme-gradient">Clip Three.</b>
                        </span>
                    </span>
                </span>
            </h3>
        </>
    )
}

export default ClippingTitle;

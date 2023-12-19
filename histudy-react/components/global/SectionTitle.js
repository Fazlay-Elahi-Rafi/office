const SectionTitle = (
    {
        subtitle,
        subtitleColor,
        title,
        titleClass,
        description,
        descriptionClass,
        alignment = 'left'
    }) => {
    const sectionTitleAlignment = () => {
        if (alignment === 'left') return 'text-start'
        else if (alignment === 'right') return 'text-end'
        else if (alignment === 'center') return 'text-center'
    }

    return (
        <>
            <div className={`section-title ${sectionTitleAlignment()}`}>
                {subtitle && (
                    <span className={`subtitle ${subtitleColor}`}>{subtitle}</span>
                )}
                {title && (
                    <h2 className={`title ${titleClass}`} dangerouslySetInnerHTML={{__html: title}}/>
                )}
                {description && (
                    <p className={`${descriptionClass}`} dangerouslySetInnerHTML={{__html: description}}/>
                )}
            </div>
        </>
    )
}

export default SectionTitle;

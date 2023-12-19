const AccordionBody = ({id, accordionItems}) => {
    return (
        <div className="accordion" id={id}>
            {accordionItems?.map((accordionItem, accordionIndex) => (
                <div className="accordion-item card"
                     key={`accordion-item-${accordionIndex}`}>
                    <h2 className="accordion-header card-header"
                        id={`heading${accordionIndex}${id}`}>
                        <button
                            className={`accordion-button ${accordionIndex !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${accordionIndex}${id}`}
                            aria-expanded={accordionIndex === 0 ? 'true' : 'false'}
                            aria-controls={`collapse${accordionIndex}`}>
                            {accordionItem.title}
                        </button>
                    </h2>
                    <div id={`collapse${accordionIndex}${id}`}
                         className={`accordion-collapse collapse ${accordionIndex === 0 ? "show" : ""}`}
                         aria-labelledby={`heading${accordionIndex}${id}`}
                         data-bs-parent={`#${id}`}>
                        <div className="accordion-body card-body">
                            {accordionItem.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AccordionBody;
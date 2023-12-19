import SectionTitle from '../global/SectionTitle';
import AccordionBody from './AccordionBody';
import Image from "next/image";

const accordion = (
    {
        accordionStyle = 'one',
        accordionId,
        title,
        subtitle,
        description,
        descriptionClass,
        subtitleClass,
        sectionTitleAlignment,
        imageOne,
        imageTwo,
        data
    }) => {
    return (
        <>
            {accordionStyle === 'one' && (
                <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
                    <div className="container">
                        <div className="row mb--60">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title={title}
                                    subtitle={subtitle}
                                    alignment={sectionTitleAlignment}
                                    subtitleColor={subtitleClass}
                                />
                            </div>
                        </div>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="thumbnail rbt-image-gallery-1 mb--80">
                                    <Image
                                        width={810}
                                        height={980}
                                        className="image-1 rbt-radius"
                                        src={imageOne}
                                        alt="Education Images"
                                    />
                                    <Image
                                        width={408}
                                        height={500}
                                        className="image-2 rbt-radius"
                                        src={imageTwo}
                                        alt="Education Images"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mt_md--40 mt_sm--40">
                                <div className="rbt-accordion-style rbt-accordion-01 accordion">
                                    <AccordionBody id={accordionId} accordionItems={data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {accordionStyle === 'two' && (
                <div className="rbt-accordion-area accordion-style-1 bg-color-extra2 rbt-section-gap">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="rbt-accordion-style accordion">
                                    <SectionTitle
                                        title={title}
                                        subtitle={subtitle}
                                        description={description}
                                        descriptionClass={descriptionClass}
                                        alignment={sectionTitleAlignment}
                                        subtitleColor={subtitleClass}
                                    />
                                    <div className="rbt-accordion-style rbt-accordion-02 accordion">
                                        <AccordionBody id={accordionId} accordionItems={data}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail rbt-image-gallery-1 mb--80 text-end">
                                    <Image
                                        width={810}
                                        height={990}
                                        className="image-1 rbt-radius"
                                        src={imageOne}
                                        alt="Education Images"
                                    />
                                    <Image
                                        width={408}
                                        height={500}
                                        className="image-2 rbt-radius"
                                        src={imageTwo}
                                        alt="Education Images"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {accordionStyle === 'three' && (
                <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="rbt-accordion-style accordion">
                                    <SectionTitle
                                        title={title}
                                        subtitle={subtitle}
                                        description={description}
                                        descriptionClass={descriptionClass}
                                        alignment={sectionTitleAlignment}
                                        subtitleColor={subtitleClass}
                                    />
                                    <div className="rbt-accordion-style rbt-accordion-04 accordion">
                                        <AccordionBody id={accordionId} accordionItems={data}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {accordionStyle === 'four' && (
                <div className="rbt-accordion-area accordion-style-1 bg-color-extra2 rbt-section-gap">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="rbt-accordion-style accordion">
                                    <SectionTitle
                                        title={title}
                                        subtitle={subtitle}
                                        description={description}
                                        descriptionClass={descriptionClass}
                                        alignment={sectionTitleAlignment}
                                        subtitleColor={subtitleClass}
                                    />
                                    <div className="rbt-accordion-style rbt-accordion-05 accordion">
                                        <AccordionBody id={accordionId} accordionItems={data}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail rbt-image-gallery-1 mb--80 text-end">
                                    <Image
                                        width={786}
                                        height={1052}
                                        className="image-1 rbt-radius"
                                        src="/images/about/about-03.jpg"
                                        alt="Education Images"
                                    />
                                    <Image
                                        width={408}
                                        height={500}
                                        className="image-2 rbt-radius"
                                        src="/images/about/about-11.jpg"
                                        alt="Education Images"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {accordionStyle === 'five' && (
                <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
                    <div className="container">
                        <div className="row mb--50">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title={title}
                                    subtitle={subtitle}
                                    subtitleColor={subtitleClass}
                                    alignment={sectionTitleAlignment}
                                />
                            </div>
                        </div>
                        <div className="row g-5 align-items-start">
                            <div className="col-lg-7 order-2 order-lg-1">
                                <div className="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion">
                                    <div className="accordion" id={accordionId}>
                                        {data?.map((accordionItem, accordionIndex) => (
                                            <div className="accordion-item card"
                                                 key={`accordion-item-${accordionIndex}`}>
                                                <h2 className="accordion-header card-header"
                                                    id={`heading${accordionIndex}${accordionId}`}>
                                                    <button
                                                        className={`accordion-button ${accordionIndex !== 0 ? 'collapsed' : ''}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${accordionIndex}${accordionId}`}
                                                        aria-expanded={accordionIndex === 0 ? 'true' : 'false'}
                                                        aria-controls={`collapse${accordionIndex}`}>
                                                        {accordionItem.title}
                                                    </button>
                                                </h2>
                                                <div id={`collapse${accordionIndex}${accordionId}`}
                                                     className={`accordion-collapse collapse ${accordionIndex === 0 ? "show" : ""}`}
                                                     aria-labelledby={`heading${accordionIndex}${accordionId}`}
                                                     data-bs-parent={`#${accordionId}`}>
                                                    <div className="accordion-body card-body">
                                                        <h6 className="title">{accordionItem.tableTitle}</h6>
                                                        <div className="table-responsive mobile-table-750">
                                                            <table className="rbt-table table table-borderless">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Program Term</th>
                                                                        <th>Tuition Cost</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {accordionItem.tableData?.map((tableRow, index) => (
                                                                        <tr key={`table-row-${index}`}>
                                                                            <th>{tableRow.programTerm}</th>
                                                                            <td>{tableRow.tuitionCost}</td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <th>Total</th>
                                                                        <th>$500</th>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 order-1 order-lg-2">
                                <div className="thumbnail">
                                    <Image
                                        width={1000}
                                        height={1230}
                                        className="radius-6"
                                        src={imageOne}
                                        alt="histudy image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default accordion;



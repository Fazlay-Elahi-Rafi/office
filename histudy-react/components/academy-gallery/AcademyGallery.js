import Image from 'next/image';

const AcademyGallery = ({data, imageColumnClass, contentColumnClass}) => {
    return (
        <>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className={imageColumnClass}>
                        <div className="content">
                            <Image
                                width={816}
                                height={1000}
                                className="w-100 radius-10"
                                src={data.image}
                                alt="About Images"
                            />
                        </div>
                    </div>
                    <div className={contentColumnClass}>
                        <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
                            <div className="section-title text-start">
                                <h2 className="title">{data.title}</h2>
                                <p className="description mt--20"
                                   dangerouslySetInnerHTML={{__html: data.description}}/>
                                <h5 className="mb--20">More Feature List:</h5>
                                <div className="plan-offer-list-wrapper">
                                    <ul className="plan-offer-list">
                                        {data.features?.slice(0, 6).map((feature, featureIndex) => (
                                            <li key={`feature-${featureIndex}`}>
                                                <i className="feather-check"/> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="plan-offer-list">
                                        {data.features?.slice(6).map((feature, featureIndex) => (
                                            <li key={`feature-${featureIndex}`}>
                                                <i className="feather-check"/> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcademyGallery;
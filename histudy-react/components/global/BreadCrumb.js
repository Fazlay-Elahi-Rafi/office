const BreadCrumb = ({title, root, rootUrl}) => {
    return (
        <>
            <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-center">
                                <h2 className="title">{title}</h2>
                                <ul className="page-list">
                                    <li className="rbt-breadcrumb-item"><a href={rootUrl}>{root}</a></li>
                                    <li className="plr--5">
                                        <div className="icon-right"><i className="feather-chevron-right"/></div>
                                    </li>
                                    <li className="rbt-breadcrumb-item active">{title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BreadCrumb;

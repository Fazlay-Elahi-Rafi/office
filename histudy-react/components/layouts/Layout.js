import Header from './partials/Header'
import Footer from './partials/Footer'
import BackToTop from './partials/BackToTop'
import {useEffect} from "react";

const Layout = (
    {
        layoutSetting = {
            headerSetting: {
                headerVariant: 1
            },
            footerSetting: {},
            stickyHeader: true
        }, children
    }) => {

    const transparentHeader = () => {
        const body = document.querySelector('body'),
            header = document.querySelector('.rbt-header'),
            headerSpacer = document.querySelector('.header-transperent-spacer');

        if (header.classList.contains('rbt-transparent-header')) {
            let headerOuterHeight = header.clientHeight;
            body.classList.add('rbt-header-transpernt-active');
            headerSpacer.style.paddingTop = `${headerOuterHeight}px`
        }
    }

    const setStickyHeader = () => {
        const body = document.querySelector('body');

        if (layoutSetting.stickyHeader) {
            body.classList.add('rbt-header-sticky')
        }
    }

    useEffect(() => {
        transparentHeader();
        setStickyHeader();
    })

    return (
        <>
            <Header headerSetting={layoutSetting.headerSetting}/>

            {children}

            <Footer footerSetting={layoutSetting.footerSetting}/>

            <BackToTop/>
        </>
    );
};

export default Layout;

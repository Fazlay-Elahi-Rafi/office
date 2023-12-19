import {useEffect} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import 'react-modal-video/scss/modal-video.scss';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/css/plugins/feather.css';
import '../styles/css/plugins/fontawesome.min.css';
import '../styles/css/plugins/euclid-circulara.css';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return <Component {...pageProps} />
}

export default MyApp

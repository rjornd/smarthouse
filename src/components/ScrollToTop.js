import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {withRouter} from 'react-router-dom';


function ScrollToTop({history}) {

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            
        });
        return () => {
            unlisten();
        }
    }, [history]);

    return null;
}

export default withRouter(ScrollToTop);
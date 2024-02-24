import { useState, useEffect, Suspense } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; // Import the spinner icon

const LazyLayout = ({ component: Component, ...rest }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 200); // Set the duration in milliseconds (e.g., 2000ms = 2 seconds)

        return () => clearTimeout(timer);
    }, []);

    return ( <>
    {isLoading &&
        <div style={{position:"absolute", display: 'flex', justifyContent: 'center', alignItems: 'center',height:"100vh",left:"50%", zIndex:"1"}}> 
            {<FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '48px' }} />}
        </div>
        }
        <div style={{minHeight:"100vh"}}>
        {!isLoading &&
                <Suspense fallback={<div>Loading...</div>}>
                    <Component {...rest} />
                </Suspense>
    }
        </div>
            </>
    );
}

LazyLayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default LazyLayout;

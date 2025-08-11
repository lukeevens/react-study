import React from 'react';
import { useRef } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

export default function CatFriends() {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);

    function handleScrollToFirstCat() {
        firstCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollToSecondCat() {
        secondCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollToThirdCat() {
        thirdCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <>
            <nav>
                <button onClick={handleScrollToFirstCat}>
                    Neo
                </button>
                <button onClick={handleScrollToSecondCat}>
                    Millie
                </button>
                <button onClick={handleScrollToThirdCat}>
                    Bella
                </button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img
                            src={img1}
                            alt="Neo"
                            ref={firstCatRef}
                            style={{ width: '600px' }}
                        />
                    </li>
                    <li>
                        <img
                            src={img2}
                            alt="Millie"
                            ref={secondCatRef}
                            style={{ width: '600px' }}
                        />
                    </li>
                    <li>
                        <img
                            src={img3}
                            alt="Bella"
                            ref={thirdCatRef}
                            style={{ width: '600px' }}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}

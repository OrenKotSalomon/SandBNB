import { placeService } from "../../services/place.service"
import { useEffect, useState } from "react"
// import { CustomRightArrow } from './filter-carousel'
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
// import Carousel from 'react-material-ui-carousel'
import { ArrowProps } from 'react-multi-carousel/lib/types'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Ifilter {
    icon: string,
    txt: string
}

export function PlaceFilter() {
    const [filters, setFilters] = useState<Ifilter[]>(placeService.getFilters())
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 10,
            slidesToSlide: 10
        },
        laptop: {
            breakpoint: { max: 1024, min: 700 },
            items: 8,
            slidesToSlide: 8
        },
        tablet: {
            breakpoint: { max: 700, min: 500 },
            items: 6,
            slidesToSlide: 6
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 4,
            slidesToSlide: 4
        }
    };

    function temp() {

    }

    return (
        <div className="place-filter">
            <Carousel responsive={responsive}
                containerClass="carousel-container"
                autoPlay={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                rtl={false}

                customRightArrow={<button className="arrow-right" onClick={temp}>
                     <FontAwesomeIcon icon={faChevronRight} />
                </button>}

                customLeftArrow={<button className="arrow-left" onClick={temp}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>}
            >
                {filters.map((filter, idx) => {
                    return <div className="filter-container" key={idx}>
                        <span className="material-symbols-outlined filter-icon">{filter.icon}</span>
                        <p className="filter-txt">{filter.txt}</p>
                    </div>
                })}
            </Carousel>
            {/* <FontAwesomeIcon
                      icon={faChevronLeft as IconProp}
                      size="lg"
                      className="absolute top-1/2 left-4 max-w-4 cursor-pointer text-primary-400"
                    /> */}
            <button className="filter-btn">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '14px', width: '14px', fill: 'currentcolor' }}><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                filters
            </button>
        </div>
    )

    {/* <div className="filters-container"> */ }

    {/* </div> */ }

    // )
}
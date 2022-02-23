import CreateIcon from './images/logo192.png';
import CreateSubFeature1 from './images/batman-movie-poster.jpg';
import CreateSubFeature2 from './images/marshall-movie-poster.jpg';
import CreateSubFeature3 from './images/topgun-movie-poster.jpg';

// Movie grid details

export const featuresPageData = [
    {
        featureIcon: CreateIcon,
        featureTitle: "Now Showing",
        // Movies under common heading
        subFeatures: [
            {
                featureTitle: "The Batman",
                featureDesc: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.",
                featureImg: CreateSubFeature1,
                imgPosition: "bottom"
            },
            {
                featureTitle: "Marshall",
                featureDesc: "Young Thurgood Marshall faces one of his greatest challenges while working as a lawyer for the NAACP. Marshall travels to conservative Connecticut when wealthy socialite Eleanor Strubing accuses Black chauffeur Joseph Spell of sexual assault and attempted murder. He soon teams up with Sam Friedman, a local Jewish lawyer who's never handled a criminal case. Together, the two men build a defense while contending with racist and anti-Semitic views from those who deem Spell to be guilty.",
                featureImg: CreateSubFeature2,
                imgPosition: "bottom"
            },
            {
                featureTitle: "Top Gun: Maverick",
                featureDesc: "After more than thirty years of service as one of the Navy’s top aviators, Pete “Maverick” Mitchell (Tom Cruise) is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment of Top Gun graduates for a specialized mission the likes of which no living pilot has ever seen, Maverick encounters Lt. Bradley Bradshaw (Miles Teller), call sign: “Rooster,” the son of Maverick’s late friend and Radar Intercept Officer Lt. Nick Bradshaw, aka “Goose”.",
                featureImg: CreateSubFeature3,
                imgPosition: "bottom"
            },
        ]
    },
];

// Header and footer banner details

export const featuresBannerData = {
    headerBanner: {
        title: "List your Movie",
        description: "What movie do you want to watch on the big screen? Tell us and we'll make it happen!",
        buttonText: "Contact us today!"
    },
    footerBanner: {
        title: "Get tentative show date of future movie",
        description: "Get the release date of Latest Upcoming \nIMAX 3D Movies releasing in 2022 and 2023.\nStay updated with new IMAX 3D movies, release dates, trailers and more",
        buttonText: "Get Release Date"
    }
}

// Theater seats arrangement

export const movieHallConfig = [
    {
        sectionNameLabel: "VIP",
        sectionPriceLabel: "Rs. 350",
        sectionPrice: 350,
        sectionSeatArrangement: [
            {
                rowName: "A",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            },
            {
                rowName: "B",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            },
            {
                rowName: "C",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            }
        ]
    },
    {
        sectionNameLabel: "PREMIUM",
        sectionPriceLabel: "Rs. 230",
        sectionPrice: 230,
        sectionSeatArrangement: [
            {
                rowName: "D",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            },
            {
                rowName: "E",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            },
            {
                rowName: "F",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            }
        ]
    },
    {
        sectionNameLabel: "EXECUTIVE",
        sectionPriceLabel: "Rs. 230",
        sectionPrice: 230,
        sectionSeatArrangement: [
            {
                rowName: "G",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            },
            {
                rowName: "H",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            },
            {
                rowName: "I",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            }
        ]
    },
    {
        sectionNameLabel: "NORMAL",
        sectionPriceLabel: "Rs. 230",
        sectionPrice: 230,
        sectionSeatArrangement: [
            {
                rowName: "J",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            },
            {
                rowName: "K",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    }
                ]

            },
            {
                rowName: "L",
                rowSeats: [
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: false,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: true
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    },
                    {
                        isSeat: true,
                        isSelected: false,
                        isBooked: false
                    }
                ]

            }
        ]
    }
];

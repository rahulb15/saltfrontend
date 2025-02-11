import { IDayTourDataType } from '@/interFace/interFace'
import tourImgEighteen from '../../../public/assets/avtarimage/Social-Events-hp-450x300.webp'
import tourImgNineteen from '../../../public/assets/avtarimage/Wedding-_-Pre-wedding-functions-300x200.jpg'
import tourImgTwenty from '../../../public/assets/avtarimage/occasion-home-page.webp'

export const dayTourData: IDayTourDataType[] = [
    {
        id: 1,
        img: tourImgEighteen,
        tourTitle: 'Social Events',
        tourLocation: 'Gurgaon',
        tourTime: 5,
        description: 'Curate Unforgettable Social Events with Elegance and Flair, Setting the Stage for Unforgettable Gatherings and Cherished Moments.',
    },
    {
        id: 2,
        img: tourImgNineteen,
        tourTitle: 'Wedding Functions',
        tourLocation: 'Gurgaon',
        tourTime: 5,
        description: 'Elevate Your Special Day to Extraordinary Heights, Creating Timeless Memories for Your Wedding and Pre-Wedding Functions.',
    },
    {
        id: 3,
        img: tourImgTwenty,
        tourTitle: 'Occasions',
        tourLocation: 'Gurgaon',
        tourTime: 5,
        description: `Celebrate Life's Special Occasions in Style and Grandeur, Crafting Unforgettable Memories in the Lap of Luxury.`,
    },
    // {
    //     id: 4,
    //     img: tourImgTwenty,
    //     tourTitle: 'Corporate Events',
    //     tourLocation: 'Gurgaon',
    //     tourTime: 5,
    //     description: 'Unleash the Power of Productivity and Immerse Your Corporate Events and MICE Gatherings in an Unforgettable Fusion of Luxury and Professionalism.',
    // },
]
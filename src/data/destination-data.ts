import tripImgOne from '../../public/assets/rooms/4.webp';
import tripImgTwo from '../../public/assets/rooms/5.webp';
import tripImgThree from '../../public/assets/rooms/6.webp';
import tripImgFour from '../../public/assets/rooms/7.webp';
import tripImgFive from '../../public/assets/rooms/10.png';
import tripImgSix from '../../public/assets/rooms/4.webp';
import tripImgSeven from '../../public/assets/rooms/5.webp';
import tripImgEight from '../../public/assets/rooms/6.webp';
import tripImgNine from '../../public/assets/rooms/7.webp';
import tripImgTen from '../../public/assets/rooms/10.png';
import tripImgEleven from '../../public/assets/images/activity/activity-img-16.png';
import destinationImgFour from '../../public/assets/rooms/4.webp';
import destinationImgFive from '../../public/assets/rooms/5.webp';
import destinationImgSix from '../../public/assets/rooms/6.webp';
import destinationImgSeven from '../../public/assets/rooms/7.webp';
import { IDestinationDataType } from '@/interFace/interFace';


export const destinatoinData: IDestinationDataType[] = [
    //home two destination start
    {
        id: 1,
        img: tripImgOne,
        destination: 'Sintra, Portugal',
        tourCount: 90,
    },
    {
        id: 2,
        img: tripImgTwo,
        destination: 'Ronda, Spain',
        tourCount: 40,
    },
    {
        id: 3,
        img: tripImgThree,
        destination: 'Cesky Krumlov',
        tourCount: 10,
    },
    {
        id: 4,
        img: tripImgFour,
        destination: 'Begen, Norway',
        tourCount: 100,
    },
    {
        id: 5,
        img: tripImgFive,
        destination: 'Statue of Liberty',
        tourCount: 25,
    },
    {
        id: 6,
        img: tripImgFive,
        destination: 'Bled, Slovenia',
        tourCount: 30,
    },
    {
        id: 7,
        img: tripImgOne,
        destination: 'Sintra, Portugal',
        tourCount: 90,
    },
    //home two destination end
    //home three destination start
    {
        id: 8,
        img: tripImgSix,
        destination: 'Sintra, Portugal',
        tourCount: 90,
    },
    {
        id: 9,
        img: tripImgSeven,
        destination: 'Ronda, Spain',
        tourCount: 40,
    },
    {
        id: 10,
        img: tripImgEight,
        destination: 'Cesky Krumlov',
        tourCount: 10,
    },
    {
        id: 11,
        img: tripImgNine,
        destination: 'Begen, Norway',
        tourCount: 5,
    },
    {
        id: 12,
        img: tripImgTen,
        destination: 'Matera, Italy',
        tourCount: 9,
    },
    {
        id: 13,
        img: tripImgEleven,
        destination: 'Bled, Slovenia',
        tourCount: 3,
    },
    {
        id: 14,
        img: tripImgSix,
        destination: 'Sintra, Portugal',
        tourCount: 90,
    },
    {
        id: 15,
        img: tripImgSeven,
        destination: 'Matera, Italy',
        tourCount: 40,
    },
    //home three destination start
    //home Four destination start
    {
        id: 16,
        img: destinationImgFour,
        destination: 'Gurugram',
        title: 'Saltstayz Le Icon',
        delay: '.3s'

    },
    {
        id: 17,
        img: destinationImgFive,
        destination: 'Gurugram',
        title: 'Saltstayz Amara',
        delay: '.4s'
    },
    {
        id: 18,
        img: destinationImgSix,
        destination: 'Gurugram',
        title: 'SaltStayz  Horizon',
        delay: '.5s'
    },
    {
        id: 19,
        img: destinationImgSeven,
        destination: 'Gurugram',
        title: 'Saltstayz Hotel Huda City Center',
        delay: '.6s'
    },
    //home Four destination end
]
import featured2 from '../assets/home/featured2.png'
import featured3 from '../assets/home/featured3.png'
import featured4 from '../assets/home/featured4.png'
import featured5 from '../assets/home/featured5.png'

import { WorkDetailProps } from "../pages/work-detail/WorkDetail";

const TTimeFeaturedData: WorkDetailProps = {
    url: "/t-time",
    coverImgURL: featured2,
}

const RiceitFeaturedData: WorkDetailProps = {
    url: "/riceit",
    coverImgURL: featured3,
}

const ACupOfChiangRaiFeaturedData: WorkDetailProps = {
    url: "/a-cup-of-chiangrai",
    coverImgURL: featured4,
}

const CreedFeaturedData: WorkDetailProps = {
    url: "/creed",
    coverImgURL: featured5,
}

export {
    TTimeFeaturedData,
    RiceitFeaturedData,
    ACupOfChiangRaiFeaturedData,
    CreedFeaturedData
}
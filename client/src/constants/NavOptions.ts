import SoftwareIcon from '../assets/icons/software-development.svg'
import _3dIcon from '../assets/icons/3d.svg'
import DesignIcon from '../assets/icons/design.svg'
import DrawPaintIcon from '../assets/icons/drawing-painting.svg'
import SelfImprovementIcon from '../assets/icons/self-improvement.svg'
import FitnessHealthIcon from '../assets/icons/fitness-health.svg'
import MusicSoundDesignIcon from '../assets/icons/music-sound-design.svg'
import PhotographyIcon from '../assets/icons/photography.svg'
import WritingPublishingIcon from '../assets/icons/writing-publishing.svg'
import BusinessMoneyIcon from '../assets/icons/business-money.svg'
import EducationIcon from '../assets/icons/education.svg'
import ComicsGraphicNovelIcon from '../assets/icons/comic-graphics.svg'
import FictionBooksIcon from '../assets/icons/fiction-books.svg'
import AudioIcon from '../assets/icons/audio.svg'
import RecordedMusicIcon from '../assets/icons/recorded-music.svg'
import FilmsIcon from '../assets/icons/films.svg'
import GamingIcon from '../assets/icons/gaming.svg'
import OthersIcon from '../assets/icons/other.svg'

export type NavOptionsType = {
    title: string
    image?: string | null
    id: string
    slug: string
}

const NavOptions: NavOptionsType[] = [
    {
        title: 'Showing Everything',
        image: null,
        id: '0',
        slug: '',
    },
    {
        title: 'Software Development',
        image: SoftwareIcon,
        id: '1',
        slug: 'software-development',
    },
    {
        title: '3D',
        image: _3dIcon,
        id: '2',
        slug: '3d',
    },
    {
        title: 'Design',
        image: DesignIcon,
        id: '3',
        slug: 'design',
    },
    {
        title: 'Drawing & Painting',
        image: DrawPaintIcon,
        id: '4',
        slug: 'drawing-painting',
    },
    {
        title: 'Self Improvement',
        image: SelfImprovementIcon,
        id: '5',
        slug: 'self-improvement',
    },
    {
        title: 'Fitness & Health',
        image: FitnessHealthIcon,
        id: '6',
        slug: 'fitness-health',
    },
    {
        title: 'Music & Sound Design',
        image: MusicSoundDesignIcon,
        id: '7',
        slug: 'music-sound-design',
    },
    {
        title: 'Photography',
        image: PhotographyIcon,
        id: '8',
        slug: 'photography',
    },
    {
        title: 'Writing & Publishing',
        image: WritingPublishingIcon,
        id: '9',
        slug: 'writing-publishing',
    },
    {
        title: 'Business & Money',
        image: BusinessMoneyIcon,
        id: '10',
        slug: 'business-money',
    },
    {
        title: 'Education',
        image: EducationIcon,
        id: '11',
        slug: 'education',
    },
    {
        title: 'Comics & Graphic Novel',
        image: ComicsGraphicNovelIcon,
        id: '12',
        slug: 'comics-graphic-novel',
    },
    {
        title: 'Fiction Books',
        image: FictionBooksIcon,
        id: '13',
        slug: 'fiction-books',
    },
    {
        title: 'Audio',
        image: AudioIcon,
        id: '14',
        slug: 'audio',
    },
    {
        title: 'Recorded Music',
        image: RecordedMusicIcon,
        id: '15',
        slug: 'recorded-music',
    },
    {
        title: 'Films',
        image: FilmsIcon,
        id: '16',
        slug: 'films',
    },
    {
        title: 'Gaming',
        image: GamingIcon,
        id: '17',
        slug: 'gaming',
    },
    {
        title: 'Other',
        image: OthersIcon,
        id: '18',
        slug: 'other',
    },
]

export default NavOptions
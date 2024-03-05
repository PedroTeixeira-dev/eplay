import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

import residente from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis facilis saepe temporibus excepturi possimus quod impedit. Quibusdam harum natus reiciendis modi at, exercitationem, sed laborum dolore, sequi vero fuga.',
    title: 'Residene Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residente
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis facilis saepe temporibus excepturi possimus quod impedit. Quibusdam harum natus reiciendis modi at, exercitationem, sed laborum dolore, sequi vero fuga.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis facilis saepe temporibus excepturi possimus quod impedit. Quibusdam harum natus reiciendis modi at, exercitationem, sed laborum dolore, sequi vero fuga.',
    title: 'Zelda',
    system: 'Nintendo Switch',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis facilis saepe temporibus excepturi possimus quod impedit. Quibusdam harum natus reiciendis modi at, exercitationem, sed laborum dolore, sequi vero fuga.',
    title: 'Diablo',
    system: 'XBOX',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis facilis saepe temporibus excepturi possimus quod impedit. Quibusdam harum natus reiciendis modi at, exercitationem, sed laborum dolore, sequi vero fuga.',
    title: 'Diablo',
    system: 'XBOX',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis facilis saepe temporibus excepturi possimus quod impedit. Quibusdam harum natus reiciendis modi at, exercitationem, sed laborum dolore, sequi vero fuga.',
    title: 'Zelda',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis facilis saepe temporibus excepturi possimus quod impedit. Quibusdam harum natus reiciendis modi at, exercitationem, sed laborum dolore, sequi vero fuga.',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis facilis saepe temporibus excepturi possimus quod impedit. Quibusdam harum natus reiciendis modi at, exercitationem, sed laborum dolore, sequi vero fuga.',
    title: 'Resident Evil',
    system: 'XBOX',
    infos: ['17/05'],
    image: residente
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home

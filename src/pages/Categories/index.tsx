import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductList'

import { Game } from '../Home'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Categories = () => {
  const [gamesAcao, setgameAcao] = useState<Game[]>([])
  const [gamesEsporte, setgameEsporte] = useState<Game[]>([])
  const [gamesSimulacao, setgameSimulacao] = useState<Game[]>([])
  const [gamesLuta, setgameLuta] = useState<Game[]>([])
  const [gamesRPG, setgameRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setgameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setgameEsporte(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setgameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setgameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setgameRPG(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEsporte} title="Esportes" background="gray" />
      <ProductsList games={gamesLuta} title="Luta" background="black" />
      <ProductsList games={gamesRPG} title="RPG" background="gray" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulacão"
        background="black"
      />
    </>
  )
}

export default Categories

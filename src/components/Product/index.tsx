import { Tag } from '../Tag'

import { Card, Paragrafo, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Paragrafo>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
    </Paragrafo>
  </Card>
)

export default Product

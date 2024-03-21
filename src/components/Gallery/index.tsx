import Section from '../Section'

import { Item, Items } from './styles'

import fotoGaleria from '../../assets/images/imagemGaleria.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={fotoGaleria} alt="imagem do link" />
      </Item>
      <Item>
        <img src={fotoGaleria} alt="imagem do link" />
      </Item>
      <Item>
        <img src={fotoGaleria} alt="imagem do link" />
      </Item>
      <Item>
        <img src={fotoGaleria} alt="imagem do link" />
      </Item>
    </Items>
  </Section>
)

export default Gallery

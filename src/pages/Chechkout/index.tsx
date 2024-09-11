import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/credit-card.png'

import { InputGroup, Row, TabButton } from './styles'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title={'Dados de cobrança'}>
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input id="fullname" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="text" id="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o E-mail</label>
              <input type="text" id="confirmDeliveryEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="cartão de crédito" />
            Cartão de crédito
          </TabButton>
          {payWithCard ? (
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="cardOwner"> Nome do titular do cartão</label>
                  <input type="text" id="cardOwner" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="CPFcardOwner">
                    {' '}
                    CPF do titular do cartão
                  </label>
                  <input type="text" id="CPFcardOwner" />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup>
                  <label htmlFor="cardName"> Nome impresso no cartão</label>
                  <input type="text" id="cardName" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input type="text" id="cardNumber" />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="cardMonth">Mês do voncimento</label>
                  <input type="text" id="cardMonth" />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="cardYear">Ano do voncimento</label>
                  <input type="text" id="cardYear" />
                </InputGroup>
                <InputGroup maxWidth="48px">
                  <label htmlFor="cardCode">CVV</label>
                  <input type="text" id="cardCode" />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup maxWidth="150px">
                  <label htmlFor="installments">Parcelamento</label>
                  <select name="" id="">
                    <option value="">1x de R$ 200,00</option>
                    <option value="">2x de R$ 100,00</option>
                    <option value="">3x de R$ 67,33,00</option>
                  </select>
                </InputGroup>
              </Row>
            </>
          ) : (
            <p>
              Ao optar por essa forma de pagamento, é importante lembrar que a
              confirmação pode levar até 3 dias úteis, devido aos prazos
              estabelecidos pelas instituições financeiras. Portanto, a
              liberação do código de ativação do jogo adquirido ocorrerá somente
              após a aprovação do pagamento do boleto.
            </p>
          )}
        </div>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar a compra
      </Button>
    </div>
  )
}
export default Checkout

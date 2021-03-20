import { Container } from "./styles";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de software</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>12/03/2021</td>
          </tr>
          <tr>
            <td>Imposto de Renda</td>
            <td className="withdraw">- R$4.000</td>
            <td>Imposto</td>
            <td>15/03/2021</td>
          </tr>
          <tr>
            <td>Avaliação do carro</td>
            <td className="withdraw">- R$2.000</td>
            <td>Manutenção</td>
            <td>16/03/2021</td>
          </tr>
          <tr>
            <td>Freela para o Paulo</td>
            <td className="deposit">R$3.000</td>
            <td>Desenvolvimento</td>
            <td>19/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
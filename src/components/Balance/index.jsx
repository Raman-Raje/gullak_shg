// styled components
import { Wrapper, Block, BalanceInfo } from './style';


// test data
const currentAmount = 100000;
const totalAmount = 200000;

// write a function to represent amount in Indian currency format (₹ 1,00,000)
const numFormatter = (num) => {
    return "₹ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Balance = () => {

    return (
        <>
            <Wrapper>
                <Block>
                    <span className="label">Current balance</span>
                    <BalanceInfo className="h1" color="blue">{numFormatter(currentAmount)}</BalanceInfo>
                </Block>
                <span className="divider"></span>
                <Block>
                    <span className="label">Total balance</span>
                    <BalanceInfo className="h1" color="success">{numFormatter(totalAmount)}</BalanceInfo>
                </Block>
            </Wrapper>
        </>

    )
}

export default Balance;
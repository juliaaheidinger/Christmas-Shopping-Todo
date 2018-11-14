import styled from 'styled-components'

export default styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  background: #00f4ec;
  max-width: 200px;
  padding: 20px 20px 20px 50px;
  margin: 20px;
  box-shadow: 0px 10px 20px 5px #178093;
  border: 4px solid #006375;
  border-radius: 10px;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 500;

  &:nth-child(2n) {
    background: #00837e;
  }

  div {
    color: #fff;
  }
`

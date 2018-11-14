import styled from 'styled-components'

export default styled.div`
  background: hotpink;
  width: ${props => props.width * 100 || 0}%;
  height: 20px;
`

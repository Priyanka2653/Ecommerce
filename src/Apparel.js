 import React from 'react'

// const Apparel = () => {
//   return (
//     <div>
//       apparel
//     </div>
//   )
// }
// export default Apparel

import styled from "styled-components";

const Apparel = () => {
  return <wrapper>apparel</wrapper>;
};

const Wrapper = styled.section`
.grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }

`
  ;

export default Apparel;


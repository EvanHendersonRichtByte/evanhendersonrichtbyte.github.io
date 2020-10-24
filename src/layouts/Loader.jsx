import React from "react";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
function Loader() {
  const Bounce = keyframes`${pulse}`;
  const BounceAnim = styled.div`
    animation: 1.5s infinite ${Bounce};
  `;
  return (
    <section className="section-loader">
      <BounceAnim>
        <h2>
          Loading Assets
          <code>...</code>
        </h2>
      </BounceAnim>
    </section>
  );
}

export default Loader;

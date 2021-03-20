import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: -6.5rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: .25rem;
    color: var(--text-title);

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong{
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 2rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: var(--shape);
    }
  }
`
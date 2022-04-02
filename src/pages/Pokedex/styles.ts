import styled from "styled-components";
import { getBackgroundColor } from "../../utils";
import Pokebola from "../../assets/pokebola.svg";

interface IPokeImage {
  backgroundColor: string;
  gradientBackgroundColor: string;
}

export const Wrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px 160px;
  max-width: 1280px;
`;

export const Filter = styled.section``;

export const Search = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: var(--h3-size);
    line-height: 40px;

    letter-spacing: 4px;
    color: var(--dark-color);
  }

  input {
    width: 100%;
    height: 56px;
    text-indent: 24px;

    border-radius: 40px;
    border: none;

    background: var(--light-color);
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);

    font-style: normal;
    font-weight: normal;
    font-size: var(--paragraph-size);
    line-height: 20px;

    color: var(--dark-color);

    :focus {
      border-color: var(--primary-color);
      box-shadow: 0 1px 1px var(--primary-color), 0 0 8px var(--primary-color);
      outline: 0 none;
    }
  }
`;

export const Content = styled.section`
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;

  gap: 40px;
  align-items: center;
  justify-content: flex-start;
`;

export const Card = styled.article`
  height: 136px;

  display: flex;
  flex: 1 1 30%;

  cursor: url(${Pokebola}), auto;
`;

export const Info = styled.article`
  width: 120px;
  padding-left: 24px;

  background: var(--light-color);

  border-radius: 8px 0 0 8px;

  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: var(--h5-size);
    line-height: 24px;
    margin: 0;

    color: var(--dark-color);
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    text-transform: capitalize;
  }
`;

export const Skills = styled.article`
  display: inherit;
  flex-direction: column;
  align-items: center;

  div:first-child {
    gap: 14px;
    margin-bottom: 5px;
    span {
      border: 3px solid var(--dark-color);
      box-sizing: border-box;
      border-radius: 50%;

      width: 40px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 2px;

      font-style: normal;
      font-weight: normal;
      font-size: var(--paragraph-size);
      line-height: 18px;

      color: var(--dark-color);
    }
  }

  div {
    display: inherit;
    justify-content: center;
    align-items: center;
    gap: 8px;

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
    }
  }
`;

export const PokeImage = styled.article<IPokeImage>`
  display: flex;
  justify-content: center;
  flex: 1;

  padding: 8px;

  background: linear-gradient(
    205deg,
    ${(props) =>
        getBackgroundColor[props.gradientBackgroundColor] ||
        getBackgroundColor[props.backgroundColor]}
      30.4%,
    ${(props) => getBackgroundColor[props.backgroundColor]} 70.88%
  );
  border-radius: 0 8px 8px 0;
`;

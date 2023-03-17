import styled from 'styled-components';

export const ButtonPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

export const ColorButton = styled.input.attrs({ type: 'range' })`
  margin: 0;
  width: 100px;
  margin-right: 20px;
  appearance: none;
  height: 5px;
  background: linear-gradient(to right, #f06, #0f6, #06f);
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #06f;
    cursor: pointer;
    border: 2px solid #fff;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #06f;
    cursor: pointer;
    border: 2px solid #fff;
  }
`;

export const ColorValueButton = styled.button`
  margin: 0 10px;
  width: 200px;
  background-color: #2d55ff;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-image: linear-gradient(45deg, #2d55ff, #1d45ee);

  &:hover {
    background-color: #1d45ee;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(45deg, #1d45ee, #0d35dd);
  }
`;
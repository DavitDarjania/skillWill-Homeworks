import styled, { css } from "styled-components";

export const ProgressColumns = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  width: 400px;
  max-width: 30%;
`;
export const ProgressWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 90px;
  color: rgba(100, 100, 100, 1);
  font-family: "Courier New", Courier, monospace;
`;

export const BackLog = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 4px solid green;
  margin-bottom: 20px;
`;

export const BackLogMiddleLine = styled.div`
  height: 30px;
  width: 2px;
  background-color: rgba(100, 100, 100, 1);
`;
export const TaskItem = styled.div`
  padding: 10px;
  ${({ $myColor }) => css`
    border: 2px solid ${$myColor};
    border-left: 6px solid ${$myColor};
  `}
  border-radius: 3px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const ButtonProgress = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  height: 30px;
  width: 30px;
  color: gray;
  font-weight: 700;
  display: flex;
  align-items: center;
  border-radius: 50%;
  &:active {
    background-color: rgba(200, 200, 200, 1);
  }
`;

export const ProgressDialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

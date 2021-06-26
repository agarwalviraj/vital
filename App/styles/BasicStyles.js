import styled from 'styled-components';
import { windowWidth } from '../utils/Dimensions';

export const Cardbtn = styled.View`
display: flex;
    height: 0.4*${windowWidth};
    width: 0.4*${windowWidth};
    border-radius: 6;
    elevation: 6;
    justify-content: center;
    background-color: #CDE8ED;
    border-style: solid;
    align-content: center;
    margin-top: 150px;
    align-items: center;
    margin-left: 30%;
`;
'use client';

import styled from "styled-components";

export const RobotPageContainer = styled.div`
    padding: 20px;
    display: flex;

    > ._description_container {
        flex: 2;

        > p {
            font-size: 20px;
        }
    }

    > div {
        flex: 1;
        > ._robot_image_container {
            width: 400px;
            height: 400px;
            
            > ._robot_image{
                border-radius: 15%;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        > h1 {
            padding-left: 40px;
        }
        
        > ._name_regular {
            
        }

        > ._name_pekka {
            color: rgb(160, 0, 255);
            font-weight: bold;
            font-family: "Arial Black", sans-serif;
            text-shadow:
                    0 0 25px rgb(160, 0, 255),
                    0 0 50px rgb(160, 0, 255);
        }

        > p {
            padding-left: 50px;
        }
    }
`;
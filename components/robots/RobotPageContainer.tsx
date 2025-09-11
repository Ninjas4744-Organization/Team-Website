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

        > p {
            padding-left: 50px;
        }
    }
`;
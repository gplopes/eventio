import styled, { css } from "styled-components";
import { inOutBack } from "../../theme/easing";

type Props = {
  big?: boolean;
};

////////////////////////////////////////// EventCard
export const EventCard = styled.div`
  background-color: white;
  padding: 32px;
  height: 320px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.11);
  color: ${({ theme }) => theme.color.greyRegent};
  text-align: left;
  transition: box-shadow 0.5s ${inOutBack};

  h5 {
    color: ${({ theme }) => theme.color.blueSpruce};
  }

  &:hover {
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.05);
  }

  ${(props: Props) =>
    props.big &&
    css`
      height: auto;
      h5 {
        font-size: 45px;
      }
      .EventCard-desc {
        max-width: 80%;
      }
    `}
`;

////////////////////////

export const StartsAt = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.greyIron};
`;

export const Href = styled.a`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 15px;
  justify-content: space-around;
`;

export const About = styled.div`
  margin-top: 15px;
  p {
    font-size: 14px;
    color: $colors-brown-boulder;
  }
`;

export const Desc = styled.p`
  max-width: 223px;
  margin-top: 15px;
  color: ${({ theme }) => theme.color.greyRegent};
`;

export const Attendees = styled.div`
  span {
    padding: 3px 0 0 8px;
    color: ${({ theme }) => theme.color.greyRegent};
    font-size: 14px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

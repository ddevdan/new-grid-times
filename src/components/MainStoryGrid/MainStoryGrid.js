import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList option>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  background: var(--color-gray-300);

  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletOnly} {
    grid-template-rows: auto;
    grid-template-columns: 1fr 268px;
  }

  @media ${QUERIES.tabletAndUp} {
    gap: 2px;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-rows: 100% auto auto;
    grid-template-columns: 1fr calc(386px + 16px) calc(273px + 16px);
  }
`;

const MainStorySection = styled.section`
  grid-area: main;
  background: var(--color-gray-100);

  @media ${QUERIES.tabletOnly} {
    padding-right: 16px;
    grid-column: 1;
  }
  @media ${QUERIES.desktopAndUp} {
    padding-right: 16px;
    grid-column: 1;
    grid-row: 1 / 3;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  background: var(--color-gray-100);
  @media ${QUERIES.tabletOnly} {
    padding-left: 16px;
    grid-column: 2;
    grid-row: 1;
  }
  @media ${QUERIES.desktopAndUp} {
    padding-left: 16px;
    grid-column: 2;
    grid-row: 1;
  }
`;

const StoryList = styled.div`
  display: grid;
  gap: 1px;
  margin-top: -16px;
  grid-auto-flow: row;

  @media ${QUERIES.tabletOnly} {
    ${(props) =>
      props.option &&
      `grid-template-columns: repeat(auto-fill, 1fr));
    grid-auto-flow: column;
    background: revert;
    gap: 32px;`}
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  background: var(--color-gray-100);
  @media ${QUERIES.tabletOnly} {
    grid-column: 1 / -1;
    grid-row: 4;
  }
  @media ${QUERIES.desktopAndUp} {
    padding-left: 16px;
    grid-column: 3;
    grid-row: 1;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  background: var(--color-gray-100);
  padding-top: 5px;
  margin-top: -5px;
  @media ${QUERIES.tabletOnly} {
    grid-column: 1 / -1;
    grid-row: 3;
  }
  @media ${QUERIES.desktopAndUp} {
    grid-column: 2 / 4;
    grid-row: 2;
    align-self: start;
  }
`;

export default MainStoryGrid;

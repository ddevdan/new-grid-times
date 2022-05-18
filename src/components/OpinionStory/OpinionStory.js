import React from "react";
import styled from "styled-components/macro";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <AuthorPic>
          <Avatar alt="" src={avatar} />
        </AuthorPic>

        <ArticleInfos>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </ArticleInfos>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 48px;
  grid-auto-flow: column;
  place-content: center;

  gap: 8px;
  color: var(--color-gray-900);
  background: var(--color-gray-100);
  width: 100%;
  padding: 16px 0;
`;

const ArticleInfos = styled.div`
  grid-column: 1;

  align-self: center;
  justify-self: center;
`;

const AuthorPic = styled.div`
  grid-column: 2;
  align-self: center;
  justify-self: center;
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-column: 2;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;

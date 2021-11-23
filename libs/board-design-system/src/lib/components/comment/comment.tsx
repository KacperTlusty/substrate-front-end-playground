import styled from 'styled-components';

export interface CommentProps {
  author: string;
  text: string;
}

const StyledComment = styled.div`
  color: black;
`;

const StyledAuthor = styled.p`
  height: 20px;
`;

const StyledText = styled.p`
  height: 30px;
`;

export function Comment({ author, text }: CommentProps) {
  return (
    <StyledComment>
      <StyledAuthor data-testid="author">{author}</StyledAuthor>
      <StyledText data-testid="text">{text}</StyledText>
    </StyledComment>
  );
}

export default Comment;

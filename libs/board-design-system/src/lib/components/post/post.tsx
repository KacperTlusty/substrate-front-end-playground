import styled from 'styled-components';
import { Button, Card } from 'semantic-ui-react';

export interface PostProps {
  content: string;
  header: string;
  onCommentClick: () => void;
}

const StyledText = styled.p`
  color: pink;
`;

export function Post({ onCommentClick, header, content }: PostProps) {
  return (
    <Card>
      <Card.Header data-testid="header">{header}</Card.Header>
      <Card.Content>
        <StyledText data-testid="content">{content}</StyledText>
      </Card.Content>
      <Card.Meta>
        <Button onClick={onCommentClick}>Comment</Button>
      </Card.Meta>
    </Card>
  );
}

export default Post;

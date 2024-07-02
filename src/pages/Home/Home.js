import { Container } from "./Home.styled";
import { Title } from "./Home.styled";

export default function Home() {
  return (
    <Container>
      <Title>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
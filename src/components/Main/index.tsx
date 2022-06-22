import * as S from './styles';

export function Main({
  title = 'Next boilerplate',
  subtitle = 'Nice hacking!'
}) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Illustration
        src="img/launch.svg"
        alt="Man standing next to rocket watching it launch."
      />
    </S.Wrapper>
  );
}

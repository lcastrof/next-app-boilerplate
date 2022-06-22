import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Main } from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );

    expect(
      screen.getByRole('heading', { name: /next boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', '#121212');
  });
});

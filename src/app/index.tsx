import React from 'react';
import { ThemeProvider } from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

import { ApplicationList } from 'src/components/application-list';
import { Details } from 'src/components/details';

import { useApp } from './useApp';

import { Container, DetailsContainer } from './styles';
import { GlobalStyles } from 'src/theme/GlobalStyles';

export const App = (): JSX.Element => {
  const { theme, themeLoaded, isListLoading, details, applicationListData, takeDetailId } = useApp();

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Container isListLoading={isListLoading}>
            {isListLoading
              ? <ClipLoader loading={isListLoading} size={150} />
              : <>
                <ApplicationList applicationListData={applicationListData} takeDetailId={takeDetailId} />
                <DetailsContainer>{details.map(detail =>
                  <Details
                    key={detail.id}
                    details={detail}
                    takeDetailId={takeDetailId}
                  />
                )}
                </DetailsContainer>
              </>
            }
          </Container>
        </ThemeProvider>
      )}
    </>
  );
};

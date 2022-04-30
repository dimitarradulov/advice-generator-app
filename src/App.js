import { Fragment, useEffect, useState, useCallback } from 'react';

import Container from './components/UI/Container/Container';
import AdviceBox from './components/AdviceBox/AdviceBox';
import Footer from './components/Footer/Footer';

function App() {
  const [advice, setAdvice] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = useCallback(async () => {
    try {
      setFetchError(null);
      setIsLoading(true);

      const response = await fetch('https://api.adviceslip.com/advice');

      if (!response.ok)
        throw new Error(
          'There was a problem with the server! Please try again!'
        );

      const data = await response.json();

      setAdvice({ ...data.slip });
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  return (
    <Fragment>
      <Container>
        <AdviceBox
          isLoading={isLoading}
          error={fetchError}
          adviceData={advice}
          onButtonClick={fetchAdvice}
        />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;

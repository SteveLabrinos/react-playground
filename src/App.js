import { Fragment, useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [showModal, setShowModal] = useState(true);

  const showModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <Cart onHideModal={showModalHandler} />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

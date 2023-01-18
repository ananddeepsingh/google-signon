
// Components
import HeaderComponent from 'components/header';
import FooterComponent from 'components/footer';

const PageTemplate = ({ pageHeading = "", children }) => {

  return <>
    <HeaderComponent heading={pageHeading} />
    <main id="mainWrapper">
      {children}
    </main>
    <FooterComponent />
  </>
}

export default PageTemplate;

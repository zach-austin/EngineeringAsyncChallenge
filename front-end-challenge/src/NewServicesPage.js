import './NewServicesPage.css';
import Header from './Header/Header';
import Content from  './Content/Content';
import Form from './Form/Form';
import Footer from './Footer/Footer';

function NewServicesPage() {
  return (
    <div className="NewServicesPage">
      <div className="contain">
        <Header/>
        <Content/>
        <Form/>
        <Footer/>
      </div>
    </div>
  );
}

export default NewServicesPage;

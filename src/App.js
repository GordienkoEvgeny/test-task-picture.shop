import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useState} from "react";

// export const valueContext = createContext();
function App() {
  const [inputValue, setInputValue] = useState('')
  const [headerAndFooterItems, setHeaderAndFooterItems] =
      useState(['Каталог', 'Доставка','Оплата', 'Контакты', 'О компании']);
  console.log(inputValue,'iputval')
  return (
    <div className="App">
      <Header items={headerAndFooterItems} setInputValue={setInputValue}/>
      <Main inputValue={inputValue}/>
      <Footer items={headerAndFooterItems}/>
    </div>
  );
}

export default App;

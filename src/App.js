import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useState, createContext} from "react";

export const ValueContext = createContext({
    inputValue: "",
    setInputValue: () => {},
});
export const ValueProvider = ({children}) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <ValueContext.Provider value={{inputValue, setInputValue}}>
            {children}
        </ValueContext.Provider>
    )
}
function App() {
  const [headerAndFooterItems, setHeaderAndFooterItems] =
      useState(['Каталог', 'Доставка','Оплата', 'Контакты', 'О компании']);
  return (
    <div className="App">
        <ValueProvider>
          <Header items={headerAndFooterItems}/>
          <Main/>
          <Footer items={headerAndFooterItems}/>
        </ValueProvider>
    </div>
  );
}

export default App;

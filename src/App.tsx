import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout2 } from "./components/common/Layout/Layout2";
import {
  IRoute,
  routesMetadata,
} from "./components/common/infrastructure/routes/routesMetadata";
import ScrollToTop from "./components/common/ScrollToTop";
import CookieConsent from "react-cookie-consent";
import { untranslated } from "./components/common/infrastructure/utilities/untranslsated";
import { useApp } from "./App.hooks";

function App() {
  const routes: IRoute[] = routesMetadata;
  const { loadTracking } = useApp();
  return (
    <Layout2>
      <>
        <ScrollToTop />
        <CookieConsent
          location="bottom"
          buttonText="Съгласен съм"
          cookieName="myAppCookieConsent"
          style={{ background: "#B79C78", borderRadius: "20px 20px 0 0 " }}
          buttonStyle={{
            color: "#4e503b",
            borderRadius: "20px",
            backgroundColor: "#fff",
            fontSize: "0.875rem",
          }}
          expires={150}
          onAccept={loadTracking}
        >
          {untranslated("Бисквитки = по-яко преживяване. Съгласен?")}
        </CookieConsent>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </>
    </Layout2>
  );
}

export default App;

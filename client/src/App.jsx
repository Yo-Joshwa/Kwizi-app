import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HomePage from "./landing_page/Home/homePage";
import Footer from "./footer/Footer";
import SignInPage from "./landing_page/Signin/SignIn";
import SignUpPage from "./landing_page/Signup/signup";
import AboutUs from "./landing_page/Footer/aboutUs";
import ContactUs from "./landing_page/Footer/contactUs";
import PrivacyPolicy from "./landing_page/Footer/privacyPolicy";
import TermsOfService from "./landing_page/Footer/TermsOfService";
import NotFound from "./notfound/NotFound";
import MyStats from "./landing_page/Mystats/OverallMystats";
import { GlobalContextProvider } from "./context/globalContext";
import InitUserStats from "./hooks/InitUserStats";
import QuizPage from "./landing_page/Quiz/QuizPage";
import QuizSetupPage from "./landing_page/Quiz/QuizSetup";
import CategoryPage from "./landing_page/Quiz/CategoryPage";
import useRegisterUser from "./hooks/useRegisterUser";
import QuizResult from "./landing_page/Quiz/QuizResult";

function App() {
  useRegisterUser()
  return (
    <>
    <GlobalContextProvider>
      <Navbar />
      <InitUserStats /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mystats" element={<MyStats />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        <Route path="/quiz/setup/:id" element={<QuizSetupPage />} />
        <Route path="/results" element={<QuizResult />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default App;

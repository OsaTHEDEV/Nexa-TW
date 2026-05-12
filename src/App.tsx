/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AppProfile from "./pages/AppProfile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Support from "./pages/Support";

const Router = window.location.protocol === "file:" ? HashRouter : BrowserRouter;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apps/:appId" element={<AppProfile />} />
          <Route path="apps/:appId/support" element={<Support />} />
          <Route path="apps/:appId/privacy" element={<PrivacyPolicy />} />
          <Route path="apps/:appId/terms" element={<TermsOfUse />} />
        </Route>
      </Routes>
    </Router>
  );
}

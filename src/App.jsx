import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateArticle from "./pages/CreateArticle";
import GeneratedArticles from "./pages/GeneratedArticles";
import KeywordProjects from "./pages/KeywordProjects";
import AIKeywordToArticle from "./pages/AIKeywordToArticle";
import StealCompetitorKeyword from "./pages/StealCompetitorKeyword";
import ImportKeywordFromGSC from "./pages/ImportKeywordFromGSC";
import ManualKeywordToArticle from "./pages/ManualKeywordToArticle";
import BulkKeywordToArticle from "./pages/BulkKeywordToArticle";
import LongtailKeywordToArticle from "./pages/LongtailKeywordToArticle";
import ArticleSettings from "./pages/ArticleSettings";
import AutoBlog from "./pages/AutoBlog";
import InternalLinks from "./pages/InternalLinks";
import FreeBackLinks from "./pages/FreeBackLinks";
import Integrations from "./pages/Integrations";
import Subscription from "./pages/Subscription";
import AffiliateProgram from "./pages/AffiliateProgram";
import HelpCenter from "./pages/HelpCenter";
import Updates from "./pages/Updates";
import LiveChatSupport from "./pages/LiveChatSupport";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import DashboardLayout from "./components/DashboardLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Main Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Articles dropdown routes */}
          <Route path="/articles/create" element={<CreateArticle />} />
          <Route path="/articles/generated" element={<GeneratedArticles />} />
          <Route path="/articles/projects" element={<KeywordProjects />} />
          <Route
            path="/articles/ai-keyword-to-article"
            element={<AIKeywordToArticle />}
          />
          <Route
            path="/articles/steal-competitor-keyword"
            element={<StealCompetitorKeyword />}
          />
          <Route
            path="/articles/import-gsc"
            element={<ImportKeywordFromGSC />}
          />
          <Route path="/articles/manual" element={<ManualKeywordToArticle />} />
          <Route path="/articles/bulk" element={<BulkKeywordToArticle />} />
          <Route
            path="/articles/longtail"
            element={<LongtailKeywordToArticle />}
          />
          <Route path="/articles/settings" element={<ArticleSettings />} />

          {/* Main nav items */}
          <Route path="/auto-blog" element={<AutoBlog />} />
          <Route path="/internal-links" element={<InternalLinks />} />
          <Route path="/free-backlinks" element={<FreeBackLinks />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/affiliate" element={<AffiliateProgram />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/chat-support" element={<LiveChatSupport />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* 404 fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;

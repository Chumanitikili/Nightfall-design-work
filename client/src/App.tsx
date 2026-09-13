import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import CaseStudy from "./pages/CaseStudy";
import Moya from "./pages/Moya";
import KasiLink from "./pages/KasiLink";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/discover" component={Discover} />
            <Route path="/case-study" component={CaseStudy} />
            <Route path="/moya-house" component={Moya} />
            <Route path="/kasi-link" component={KasiLink} />
            <Route component={NotFound} />
          </Switch>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

import { HomePage } from "@/pages/home-page.tsx";
import { AppProvider } from "@/app/app-provider.tsx";

export function App() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
}

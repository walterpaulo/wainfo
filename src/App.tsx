import AppProvider from "./ shared /hooks";
import { MainRoutes } from "./routes";

export const App = () => {
  return (
    <AppProvider>
      <MainRoutes />
    </AppProvider>
  );
};

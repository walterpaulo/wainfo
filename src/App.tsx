import { Layout } from "./ shared /components/Layout";
import AppProvider from "./ shared /hooks";
import { MainRoutes } from "./routes";

export const App = () => {
  return (
    <Layout>
      <AppProvider>
        <MainRoutes />
      </AppProvider>
    </Layout>
  );
};
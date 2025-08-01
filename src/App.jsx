import { DatePicker } from "antd";
import { Layout } from "antd";
import AppHeader from "./Components/Layout/AppHeader";
import AppSider from "./Components/Layout/AppSider";
import AppContent from "./Components/Layout/AppContent";

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 8px)",
};
export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}

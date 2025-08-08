import AppLayout from "./Components/Layout/AppLayout";
import { CryptoContextProvider } from "./Context/crypto-context";

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
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}

import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import "./App.css";

function App() {
  const { isActive, chainId, account, connector } = useWeb3React();
  console.log(isActive, chainId, account, connector);
  useEffect(() => {
    connector.connectEagerly?.();
  }, [connector]);
  return (
    <div className="App">
      {account ? (
        <button
          onClick={() => {
            if (connector?.deactivate) {
              connector.deactivate();
            } else {
              connector.resetState();
            }
          }}
        >
          Disconnect
        </button>
      ) : (
        <button onClick={() => connector.activate()}>Metamask Connect</button>
      )}
    </div>
  );
}

export default App;

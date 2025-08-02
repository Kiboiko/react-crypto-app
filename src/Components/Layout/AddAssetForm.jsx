import { useState } from "react";
import { Select, Space, Typography } from "antd";
import { useCrypto } from "../../Context/crypto-context";
export default function AddAssetForm() {
  const { crypto } = useCrypto();
  const [coin, setCoin] = useState(null);

  if (!coin) {
    return (
      <Select
        style={{ width: "100%" }}
        placeholder="Select coin"
        onSelect={(v) => setCoin(crypto.find((c) => c.id == v))}
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img style={{ width: 20 }} src={option.data.icon} />{" "}
            {option.data.label}
          </Space>
        )}
      />
    );
  }
  return (
    <form>
      <Typography.Title level={2} style={{ margin: 0 }}>
        {coin.name}
      </Typography.Title>
    </form>
  );
}

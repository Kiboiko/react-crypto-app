import {
  Layout,
  Card,
  Statistic,
  Divider,
  List,
  Typography,
  Spin,
  Tag,
} from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { capitalize, percentDifference } from "../../utils.js";
import { useContext } from "react";
import CryptoContext from "../../Context/crypto-context.jsx";
const siderStyle = {
  paddind: "1rem",
};

export default function AppSider() {
  const { loading, assets } = useContext(CryptoContext);
  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {assets.map((asset) => {
        return (
          <Card key={asset.id} style={{ marginBottom: "1rem" }}>
            <Statistic
              title={capitalize(asset.id)}
              value={asset.totalAmount}
              precision={2}
              valueStyle={{ color: asset.grow ? "#3f8600" : "#cf1322" }}
              prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="$"
            />
            <List
              size="small"
              dataSource={[
                {
                  title: "Total profit",
                  value: asset.totalProfit,
                  withTag: true,
                },
                { title: "Asset amount", value: asset.amount, isPlain: true },
                // { title: "Difference", value: asset.growPercent },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <span>{item.title}</span>
                  <span>
                    {item.withTag && (
                      <Tag color={asset.grow ? "green" : "red"}>
                        {asset.growPercent}%
                      </Tag>
                    )}
                    {item.isPlain && item.value}
                    {!item.isPlain && (
                      <Typography.Text type={asset.grow ? "success" : "danger"}>
                        {item.value.toFixed(2)}
                      </Typography.Text>
                    )}
                  </span>
                </List.Item>
              )}
            />
          </Card>
        );
      })}

      {/* <Card>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{ color: "#cf1322" }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card> */}
    </Layout.Sider>
  );
}

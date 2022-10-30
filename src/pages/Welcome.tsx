import { PageContainer } from '@ant-design/pro-components';
import { Card, Typography, Button } from 'antd';
import React from 'react';
import { history } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {

  const navToBase = () => {
    history.push('/base')
  }

  return (
    <PageContainer>
      <Card>
        <CodePreview>hello frank's react-eletron-antd-pro</CodePreview>
      </Card>
      <Card title="Card title">
      <Button type="primary" onClick={navToBase}>基础功能</Button>
      </Card>

    </PageContainer>
  );
};

export default Welcome;

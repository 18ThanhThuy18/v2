import { styled } from '@stitches/react';
import { Button, Divider, message, Modal } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';
import HongBao from './HongBao';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#FCF5ED',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '10% 0% 10% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

const GridLayout = styled('div', {
  display: 'grid',
  gridTemplateColumns: '50% 50%',
});

const Description = styled('p', {
  fontSize: '1em',
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: '8px',
});

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Section>
      <Layout>
        <Title>Gửi lời chúc mừng của bạn</Title>
        <SubTitle>Hãy gửi một món quà để bày tỏ lời chúc mừng của bạn.</SubTitle>
      </Layout>
      <GridLayout>
        <HongBao title="Bên chú rể" subTitle="Kiểm tra số tài khoản" onClick={() => setGroomVisible(true)} />
        <HongBao title="Bên cô dâu" subTitle="Kiểm tra số tài khoản" onClick={() => setBrideVisible(true)} />
      </GridLayout>
      <Modal
        title={<b>Số tài khoản của chú rể Văn Việt</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>Khi bạn bấm vào số tài khoản, nó sẽ được sao chép dưới dạng văn bản có thể dán được.</Description>]}
      >
        <div>
          <b>Ngân hàng Techcomebank</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.groom.accountNumber}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Số tài khoản đã được sao chép.')}
            >
              {config.groom.accountNumber}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b>Số tài khoản của cô dâu Hoàng Sơn</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>Khi bạn bấm vào số tài khoản, nó sẽ được sao chép dưới dạng văn bản có thể dán được.</Description>]}
      >
        <div>
          <b>Ngân hàng Agribank</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.bride.accountNumber}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Số tài khoản đã được sao chép.')}
            >
              {config.bride.accountNumber}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Section>
  );
};

export default CongratulatoryMoney;

import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#FCF5ED',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 15% 5%' : '5% 0% 5% 10%',
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
const MapStyle = {
  width: '95%',
  height: 500,
};
type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <Title>Địa điểm tổ chức tiệc cưới tại nhà hàng <br />TRUNG SƠN</Title>
        <SubTitle>
          Đường DH2, Cầu Giăng, Túy Loan, Hòa Phong, Hòa Vang, TP Đà Nẵng
          <br />
          <br />
          <iframe
            src={config.locationMapImage}
            width={MapStyle.width}
            height={MapStyle.height}
            style={{ border: 0 }}
            aria-hidden="false"
            title="Địa chỉ nhà hàng Trung Sơn"
          />
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;

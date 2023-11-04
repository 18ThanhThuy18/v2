import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '25% 0% 15% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});
const Name = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.5em' : '2.5em',
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

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        background: onScreen ? '#FCF5ED' : '#FDF0F0',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>Chúng tôi sắp kết hôn</Title>
        <SubTitle>
        Cô dâu {config.bride.name} sinh vào mùa xuân 
          <br />
          Chú rể {config.groom.name} sinh vào mùa hè 
          <br />
          <br />
          Chúng ta gặp nhau với những sở thích, suy nghĩ khác nhau
          <br />
          Chúng ta trở nên giống nhau nhờ tình yêu
          <br />
          Chúng ta sắp bắt đầu một cuộc hành trình mang tên cuộc sống cùng nhau.
          <br />
          <br />
          Với sự yêu thương và phước lành ấm áp
          <br />
          Chúng tôi hy vọng bạn chúc mừng cho sự khởi đầu mới ý nghĩa này.
          <br />
          <br />
          <Name>{config.groom.name}</Name> con trai của 
          <br /> Ba {config.groom.fatherName}  🤵👰  Mẹ {config.groom.motherName} 
          
          <Name>{config.bride.name}</Name> con gái của <br /> 
          Ba {config.bride.fatherName}  🤵👰  Mẹ {config.bride.motherName} 
        </SubTitle> 
      </Layout>
    </section>
  );
};

export default Greeting;

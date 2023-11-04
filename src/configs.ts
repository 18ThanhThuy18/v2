import TitleImage from './resources/Title.png';
// import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/Gallery_Photo_1.png';
import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
import GalleryPhoto6 from './resources/Gallery_Photo_6.png';
import GalleryPhoto7 from './resources/Gallery_Photo_7.png';
import GalleryPhoto8 from './resources/Gallery_Photo_8.png';
import GalleryPhoto9 from './resources/Gallery_Photo_9.png';
import GalleryPhoto10 from './resources/Gallery_Photo_10.png';
import GalleryPhoto11 from './resources/Gallery_Photo_11.png';
import GalleryPhoto12 from './resources/Gallery_Photo_12.png';

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: '카카오톡으로 공유할 때 사용되는 대표이미지 URL을 입력해주세요!',
  weddingDate: 'Ngày 31/12/2023, Chủ nhật, 11h00',
  weddingLocation: 'Nhà hàng tiệc cưới Trung Sơn',
  groom: {
    name: 'Văn Việt',
    accountNumber: '92353658123',
    fatherName: 'Biên Văn Tỵ',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: 'Lê Thị Huệ',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: 'Hoàng Sơn',
    accountNumber: '48302659678',
    fatherName: 'Nguyễn Năng',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: 'Huỳnh Thị Thanh',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d604.0154323903453!2d108.14257884738417!3d16.000019938495182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421d50488bc299%3A0x5eae65d9cb853454!2sTrung%20Son%20Coffee!5e0!3m2!1svi!2s!4v1699095259167!5m2!1svi!2s',
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
    GalleryPhoto7,
    GalleryPhoto8,
    GalleryPhoto9,
    GalleryPhoto10,
    GalleryPhoto11,
    GalleryPhoto12,
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: string[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;

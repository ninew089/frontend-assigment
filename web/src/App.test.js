import React from 'react'; 
import Layout from './module/ui/Layout';
import { shallow } from 'enzyme';
import ProductDetail from './module/product/ProductDetail'
import ProductList from './module/product/ProductList'
import MockAdapter from 'axios-mock-adapter';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import axios from 'axios';

const data =      {
  "title": "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!",
  "eid": "1",
  "url": "https://www.wongnai.com/trips/travel-koh-chang",
  "description": "วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า ผจญภัยเหนือยอดไม้ และดำน้ำตื้น รับรอทริปนี้สนุกแน่!\n\n“เกาะช้าง” จังหวัดตราด ที่เที่ยวทะเลใกล้กรุงเทพฯ สามารถเที่ยวกันได้ทุกฤดู เคลียร์งานและวันว่างได้แล้วก็แค่จัดกระเป๋าไปกันได้เลยกับแพลน เที่ยวเกาะช้าง ต้องไปกิน เที่ยว พักที่ไหน? อ่านจบครบที่เดียว! ซึ่งหลายคนสงสัยว่าไปเกาะช้างเที่ยวไหนดี? Wongnai Travel บอกเลยเกาะช้างไม่ได้มีแค่ไปเล่นน้ำทะเล หรือนอนพักริมหาดทรายเท่านั้น เพราะมีกิจกรรมสนุก ๆ รออยู่เพียบ ชนิดที่ไม่ว่างให้นอนอยู่ห้องเฉย ๆ อย่าง เที่ยวชมน้ำตก พายเรือคายัค ล่องเรือมาด ชมธรรมชาติป่าชายเลน ขี่ช้างท่องป่า ตื่นเต้นกับการผจญภัยเหนือยอดไม้ ดำน้ำตื้นชมปะการังและฝูงปลาแบบใกล้ชิด นอกจากนี้ยังมีที่พักเกาะช้าง และร้านอาหารเกาะช้าง มาให้เลือกกันอีกด้วย รับรองทริปนี้กินอิ่ม นอนหลับ เที่ยวสนุกแน่นอน",
  "photos": [
      "https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg"
  ],
  "tags": [
      "เกาะ",
      "ทะเล",
      "จุดชมวิว",
      "ธรรมชาติ",
      "ตราด"
  ]
}


it('should render Layout component', () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.length).toEqual(1)
});

it('should render ProductDetail component', () => {
  const wrapper = shallow(<ProductDetail items={data} />);
  expect(wrapper.length).toEqual(1)
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/search?q=เกาะ"
  })
}));

describe("<ProductList />", () => {
  it("should render ProductList", () => {
    shallow(<ProductList/>);
  });
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/search?tags_like=ฟินแลนด์"
  })
}));

describe("<ProductList />", () => {
  it("should render ProductList", () => {
    shallow(<ProductList/>);
  });
});



import React, { useEffect, useState } from 'react';
import ProductDetail from '../../module/product/ProductDetail'
import axios from 'axios'
import '../../assets/css/style.css'
import notFound from '../../assets/image/notFound.svg'
import { useLocation, useHistory } from 'react-router-dom'
import { Grid, Box, Button } from '@material-ui/core';
export default function PersistentDrawerLeft() {


  const [data, setData] = useState([]);

  const { search } = useLocation()
  const history = useHistory()
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:9000/trips${search}`,
      );

      setData(result.data);
    };

    fetchData();
  }, [search]);
  const navToBack = () => {
    history.push('/')
  }
 


  return (

    <>
 
      {data.length === 0 ?
        <div style={{ marginTop: 40 }}>
          <Grid container justify='center' alignItems='center' direction='column'>
            <img src={notFound} alt="notFound" />
            <Box fontWeight={700} fontSize={20}>ขออภัยค่ะ ไม่พบสิ่งที่คุณกำลังหา</Box>

            <Button onClick={navToBack}>กลับสู่หน้าหลัก</Button>
          </Grid>

        </div>
        :
        <div>
          {data.map((items) =>
            <>
              <ProductDetail items={items} />
            </>
          )}
        </div>
      }



    </>
  );
}


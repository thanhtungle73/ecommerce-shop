import { Box, Container, Grid, Skeleton, Typography, useTheme } from '@mui/material';
import productApi from 'api/productApi';
import React, { useEffect, useMemo, useState } from 'react';
import ProductList from '../../../../components/ProductList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

NewProduct.propTypes = {};

function NewProduct(props) {
  const theme = useTheme();
  const [newProductList, setNewProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const homeProductQuantity = Array.from({ length: 8 });

  const queryParams = useMemo(() => {
    return { isNew: true };
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await productApi.getAll(queryParams);
      setNewProductList(data);
      setLoading(false);
    })();
  }, [queryParams]);

  return (
    <Box mt={8}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={12}>
            <Typography variant="h5" textAlign="center" textTransform="uppercase">
              New arrivals
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {loading ? (
        <Box mt={6}>
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              {homeProductQuantity.map((_, index) => (
                <Grid item key={index} lg={3} sm={6} xs={6}>
                  <Skeleton variant="rectangular" width="100%" height="30vw" />
                  <Skeleton variant="text" width="100%" height={64} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      ) : (
        <ProductList products={newProductList} />
      )}

      <Link to="/products" style={{ textDecoration: 'none', color: 'transparent' }}>
        <Box
          component="div"
          textAlign="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.grey[800],
          }}
        >
          View More
          <KeyboardArrowDownIcon />
        </Box>
      </Link>
    </Box>
  );
}

export default NewProduct;

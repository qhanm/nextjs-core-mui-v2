import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios'
import ClientLayout from 'layouts/client'
import Link from 'next/link'

export default async function Home({ params: { lang } }) {
  console.log('lang', lang)
  const data = await getData()
  return (
    <ClientLayout>
      <h1>About page</h1>

      <Link href='/'>Home</Link>

      <Grid container spacing={2}>
        {data?.map(item => (
          <Grid item xs={4} key={item.id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  {item.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ClientLayout>
  )
}

const getData = async () => {
  const res = await axios.get(`https://669f16b2b132e2c136fcaf02.mockapi.io/api/users`)
  const data = await res.data

  return data
}

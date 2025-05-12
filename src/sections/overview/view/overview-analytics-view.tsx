import { useCallback, useState } from 'react';

import { Box, Button, Card, Stack, Grid, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

import { ProductSort } from 'src/sections/product/product-sort';

import { AnalyticsWebsiteVisits } from '../analytics-website-visits';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  const [sortBy, setSortBy] = useState('day');

  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        flexWrap="wrap"
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <Typography variant="h4">Hi, Welcome back 👋</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New user
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="mingcute:export-line" />}
          >
            Export Excel
          </Button>
          <ProductSort
            sortBy={sortBy}
            onSort={handleSort}
            options={[
              { value: 'day', label: 'Day' },
              { value: 'week', label: 'Week' },
              { value: 'year', label: 'Year' },
            ]}
          />
        </Box>
      </Stack>
      {/* Stats cards section */}
      <Grid container spacing={3} sx={{ mb: { xs: 3, md: 5 } }}>
        {/* Card 1 */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <Card
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Clicklar soni
            </Typography>
            <Typography variant="h3" fontWeight="bold">
              1000
            </Typography>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <Card
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Foydalanuvchilar soni
            </Typography>
            <Typography variant="h3" fontWeight="bold">
              200
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid size={{ xs: 12 }}>
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Asaxiy ', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Openshop', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}

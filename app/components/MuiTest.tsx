'use client';

import { Button, Card, CardContent, Typography } from '@mui/material';

export default function MuiTest() {
  return (
    <Card className="shadow-lg">
      <CardContent className="space-y-3">
        <Typography variant="h5" color="primary">
          MUI Theme Test
        </Typography>

        <Typography variant="body2">
          This component is using <strong>MUI + Tailwind</strong>.
        </Typography>

        <Button variant="contained" color="primary">
          MUI Button
        </Button>
      </CardContent>
    </Card>
  );
}

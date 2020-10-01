import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

function InfoBox({ title, cases, total }) {
  return (
    <div className="infoBox">
      <Card>
        <CardContent>
          <Typography color="textSecondary">{title}</Typography>
          <Typography variant="h3" className="infoBox__cases">
            {cases}
          </Typography>
          <Typography color="textSecondary">{total} Total</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;

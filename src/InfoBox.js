import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

function InfoBox({ title, cases, total }) {
  return (
    <div className="infoBox">
      <Card>
        <CardContent>
          <Typography color="textPrimary">{title}</Typography>
          <Typography color="textSecondary">{cases}</Typography>
          <Typography color="textSecondary">{total}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;

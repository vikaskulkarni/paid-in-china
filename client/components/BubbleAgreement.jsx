import React, { Fragment, Component } from "react";
import "./bubble.scss";

const BubbleAgreement = (props) => (
  <Fragment>
    <blockquote className="bubble-agree">
      <p>
        This is just a fun website and you are welcome to enter your monetary
        losses. <br />I UNDERSTAND AND AGREE THAT, <br />
        the website or its owners holds no responsibilities in the claims
        submitted. This is in no way real and nobody is responsible to reimburse
        these claims!
      </p>
    </blockquote>
  </Fragment>
);

export default BubbleAgreement;

import { connect } from "react-redux";
import MainDashCmp from "../components/MainDashCmp";

const mapStateToProps = (state) => ({
  towers: state.towersReducer.towers,
});

export const MainDashCtr = connect(mapStateToProps, {})(MainDashCmp);

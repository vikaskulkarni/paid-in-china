import yearImg from "../images/year.png";
import monthImg from "../images/month.png";
import weekImg from "../images/week.png";

const initialState = {
  towers: [
    {
      imageSrc: weekImg,
      title: "Week",
      elNo: 6,
      elExp: "$20",
    },
    { imageSrc: monthImg, title: "Month", elNo: 2, elExp: "$15" },
    { imageSrc: yearImg, title: "Year", elNo: 1, elExp: "$50" },
  ],
};
const towersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default towersReducer;

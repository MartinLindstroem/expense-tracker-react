import Card from "./Card";
import expenses from "../helpers/expenses";
import months from "../helpers/months";

const CardContainer = () => {
  return (
    <div className="flex flex-wrap w-2/3 gap-4 mt-20">
      {months.map((month, index) => (
        <div key={index} className="w-1/7 flex justify-center">
          <Card month={month.name} amount={600} topCategories={expenses} />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;

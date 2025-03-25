import Card from "./Card";
import months from "../helpers/months";
import { useExpenseStore } from "../store";

const CardContainer = () => {
  const { expenses, categories } = useExpenseStore();

  const categoryTotals = categories.map((category) => {
    const total = Object.values(expenses).reduce((acc, curr) => {
      console.log("acc", acc);
      console.log("curr", curr);

      // return acc + curr[category.id];
      return acc, curr;
    }, 0);

    return { name: category.name, total };
  });

  console.log(categoryTotals);

  return (
    <div className="flex flex-wrap w-2/3 gap-4 mt-20 justify-center">
      {months.map((month, index) => (
        <div key={index} className="w-1/7 flex justify-center">
          {/* <Card month={month.name} amount={600} topCategories={expenses} /> */}
        </div>
      ))}
    </div>
  );
};

export default CardContainer;

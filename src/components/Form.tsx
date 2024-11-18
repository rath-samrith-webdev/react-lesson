import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
type Expense = {
  description: string;
  price: number;
  category: string;
};
interface ExpenseProps {
  expense: Expense;
  formSubmission: () => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Name must be at least 3 characters or greater." }),
  expense: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(18, { message: "Age must be at least 18 or older" }),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;
const Form = ({ expense, formSubmission }: ExpenseProps) => {
  const [item] = useState(expense);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(formSubmission)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          value={item.description}
          className="form-control"
        />
        {errors.description && (
          <small className={"text-danger"}>{errors.description.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input
          {...register("expense", { valueAsNumber: true })}
          id="expense"
          type="number"
          value={item.price}
          className="form-control"
        />
        {errors.expense && (
          <small className={"text-danger"}>{errors.expense.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          name="category"
          value={item.category}
          className="form-control"
        >
          <option value={"Utilise"}>Utilise</option>
          <option value={"Groceries"}>Groceries</option>
          <option value={"Utilise"}>Utilise</option>
        </select>
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Form;

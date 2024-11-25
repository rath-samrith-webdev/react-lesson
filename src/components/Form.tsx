import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ExpenseProps {
  formSubmission: (data: FieldValues) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Name must be at least 3 characters or greater." }),
  price: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(18, { message: "Age must be at least 18 or older" }),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;
const Form = ({ formSubmission }: ExpenseProps) => {
  const {
    register,
    handleSubmit, reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(data => {
        formSubmission(data);
            reset()
    })}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
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
          {...register("price", { valueAsNumber: true })}
          id="expense"
          type="number"
          className="form-control"
        />
        {errors.price && (
          <small className={"text-danger"}>{errors.price.message}</small>
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
